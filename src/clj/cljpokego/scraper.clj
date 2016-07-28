(ns cljpokego.scraper
  (:require
   [clojure.string :as string]
   [clojure.java.io :as io]
   [org.httpkit.client :as http]
   [clj-time.core :as t]
   [clj-time.coerce :as tc]
   [clj-struct.core :as clj-struct]
   [clojure.data.json :as json]
   [clojure.data :refer [diff]]
   [clj-struct.core :as clj-struct]
   [cheshire.core :as chesh]
   [flatland.protobuf.core :as proto]
   [clojure.data.csv :as csv]
   [clojure.core.async :as a :refer
    [>! <! <!! go go-loop chan to-chan alts!]]
   [overtone.at-at :as at-at]
   [hikari-cp.core :refer [make-datasource close-datasource]]
   [environ.core :refer [env]]

   [cljpokego.sente :as sen]

   [clojure.core.async.impl.protocols :as protocols]
   [clojure.core.async.impl.concurrent :as conc]
   [clojure.core.async.impl.exec.threadpool :as tp]
   [clojure.java.jdbc :as j]

   [cljpokego.concurrency :as pokecon])
  (:import
   [java.util.concurrent Executors]
   [java.nio ByteBuffer]
   [com.google.protobuf
    ByteString]
   [java.math BigInteger]
   [com.google.common.geometry
    MutableInteger
    S2Point
    S2Cell
    S2CellId
    S2LatLng
    S2LatLngRect
    S2RegionCoverer
    ]
   [com.pokemongo
    PokemongoProtos
    PokemongoProtos$ResponseEnvelop$ClientMapCell
    PokemongoProtos$ResponseEnvelop$HeartbeatPayload
    PokemongoProtos$ResponseEnvelop$ProfilePayload
    PokemongoProtos$ResponseEnvelop
    PokemongoProtos$RequestEnvelop
    PokemongoProtos$RequestEnvelop$GetMapObjectsMessage
    PokemongoProtos$RequestEnvelop$Requests
    PokemongoProtos$RequestEnvelop$MessageSingleInt
    PokemongoProtos$RequestEnvelop$MessageSingleString
    PokemongoProtos$RequestEnvelop$MessageQuad]))


(def ResponseEnvelop (proto/protodef PokemongoProtos$ResponseEnvelop))
(def HeartbeatPayload (proto/protodef PokemongoProtos$ResponseEnvelop$HeartbeatPayload))
(def ClientMapCell (proto/protodef PokemongoProtos$ResponseEnvelop$ClientMapCell))
(def ProfilePayload (proto/protodef PokemongoProtos$ResponseEnvelop$ProfilePayload))
(def RequestEnvelop (proto/protodef PokemongoProtos$RequestEnvelop))
(def GetMapObjectsMessage (proto/protodef PokemongoProtos$RequestEnvelop$GetMapObjectsMessage))
(def Requests (proto/protodef PokemongoProtos$RequestEnvelop$Requests))
(def MessageSingleInt (proto/protodef PokemongoProtos$RequestEnvelop$MessageSingleInt))
(def MessageSingleString (proto/protodef PokemongoProtos$RequestEnvelop$MessageSingleString))
(def MessageQuad (proto/protodef PokemongoProtos$RequestEnvelop$MessageQuad))

(def API_URL "https://pgorelease.nianticlabs.com/plfe/rpc")
(def LOGIN_URL
  (str "https://sso.pokemon.com/sso/login?service="
       "https%3A%2F%2Fsso.pokemon.com%2Fsso%2Foauth2.0%2FcallbackAuthorize"))
(def LOGIN_OAUTH "https://sso.pokemon.com/sso/oauth2.0/accessToken")
(def APP "com.nianticlabs.pokemongo")
(def OAUTH_REQ
  {"client_id" "mobile-app_pokemon-go"
   "redirect_uri" "https://www.nianticlabs.com/pokemongo/error"
   "client_secret" "w8ScCUXJQc6kXKw8FiOhd8Fixzht18Dq3PEVkUCP5ZPxtgyWsbTvWHFLm2wNY0JR"
   "grant_type" "refresh_token"})


(def datasource-options
  {:auto-commit true
   :read-only false
   :connection-timeout 30000
   :validation-timeout 5000
   :idle-timeout 600000
   :max-lifetime 1800000
   :minimum-idle 10
   :maximum-pool-size 30
   :pool-name "hikari-pool"
   ;;:adapter "postgresql"
   :driver-class-name "org.postgresql.Driver"
   :username (:db-username env)
   :jdbc-url (:db-jdbc-url env)
   :password (:db-password env)
   ;;:server-name (env :postgres-server)
   :port-number 5432
   :register-mbeans false})

#_(def postgres-db {:datasource (make-datasource datasource-options) } )


(def postgres-db
  {:subprotocol "postgresql"
   :subname (:db-subname env)
   :user (:db-username env)
   :password (:db-password env)})


(def recurring-pool (at-at/mk-pool))


;; this is the optimal tiling, cell-count and resolution
;; 0.0014 tiling
;; 18 cell-level
;; 13 cell-count
;; to show _all_ pokemon + scan at an efficient pace/load? (hopefully)
(def tiling-lat 0.00085)
(def tiling-long 0.00100)

;;(def tiling-lat 0.0018)
;;(def tiling-long 0.0020)

(def tiling-lat 0.0032)
(def tiling-long 0.0040)

(def cell-level 15)
(def cell-count 1)

;;(def tiling-lat 0.0050)
;;(def tiling-long 0.0070)
;;(def cell-level 13)
;;(def cell-count 1)


(defonce my-executor
  (let [executor-svc (Executors/newFixedThreadPool
                      1000
                      (conc/counted-thread-factory "async-dispatch-%d" true))]
    (reify protocols/Executor
      (protocols/exec [this r]
        (.execute executor-svc ^Runnable r)))))

(alter-var-root #'clojure.core.async.impl.dispatch/executor
                (constantly (delay my-executor)))


(def pokemon-english
  (slurp "resources/public/locales/pokemon.en.json"))

(def pokemon-number->name
  (->> (chesh/parse-string pokemon-english)
       (seq)
       (map (fn [[k v]] [(read-string k) (get v "Name")]))
       (into {})))


(defn long->ulong [^long x]
  "Converts a long to an unsigned long."
  (BigInteger. 1 (-> (ByteBuffer/allocate 8) (.putLong x) .array)))

(defn parse-query-string [qa]
  (into {} (map #(string/split % #"=") (string/split qa #"&"))))

(defn float-to-int64 [f]
  (first (clj-struct/unpack "<Q" (clj-struct/pack "<d" f))))

(defn protobuf-bytestring [fmt payload]
  (ByteString/copyFrom (proto/protobuf-dump (proto/protobuf fmt payload))))

;; [{:username "xx" :password "xx"}]
(def accounts (:nian-accounts env))


(defn ptc-login [num-tries username password]
  (try
    (let [initial @(http/post LOGIN_URL {:user-agent "niantic" :timeout 7000})
          initial-keys (json/read-str (:body initial))
          login-base
          @(http/post LOGIN_URL
                      {:headers {"cookie" (:set-cookie (:headers initial))}
                       :timeout 7000
                       :user-agent "niantic"
                       :follow-redirects false
                       :allow-unsafe-redirect-methods true
                       :form-params
                       {:lt (get initial-keys "lt")
                        :execution (get initial-keys "execution")
                        :_eventId "submit"
                        :username username ;;"colintosper"
                        :password password ;;"fireDragonfire"
                        }})
          ticket (last (string/split (:location (:headers login-base) ) #"ticket=") )

          login-oauth
          @(http/post LOGIN_OAUTH
                      {:headers {"cookie" (:set-cookie (:headers initial))}
                       :timeout 7000
                       :user-agent "niantic"
                       :form-params
                       (merge OAUTH_REQ {"code" ticket})})]

      (println (:body login-oauth))
      (parse-query-string (:body login-oauth)))
    (catch Exception e
      (if (> num-tries 3)
        nil
        (do
          (println "Failed login")
          (Thread/sleep 100)
          (ptc-login (inc num-tries) username password))))))


;;



(defn get-cell-cursors-fwd-back [cell-level lat lng]
  (let [c (S2Cell. (S2LatLng/fromDegrees lat lng))
        origin-cell (.id (S2Cell. (.parent (.id c) cell-level) ) )
        cell-fwd (atom origin-cell)
        cell-back (atom origin-cell)]
    (fn []
      (map #(S2Cell. %) [(reset! cell-fwd (.next @cell-fwd))
                         (reset! cell-back (.prev @cell-back))] ))))


(defn get-cell-neighbors [cell-level cell]
  (let [out (java.util.ArrayList. [])]
    (.getAllNeighbors (.id cell) cell-level out)
    (map #(S2Cell. %) out)))

(defn get-cell-cursors-rect [cell-level lat lng]
  (let [c (S2Cell. (S2LatLng/fromDegrees lat lng))
        origin-cell (S2Cell. (.parent (.id c) cell-level) )
        query-set (atom [origin-cell])]
    (fn []
      (let [neigh (flatten (map (partial get-cell-neighbors cell-level) @query-set))]
        (reset! query-set (second (diff @query-set neigh)))
        (concat [origin-cell] neigh)))))


(defn get-cells-edges [lat lng]
  (let [cell-level 15]
    (let [cell (S2Cell. (S2LatLng/fromDegrees lat lng))
        cells (make-array S2CellId 4)
        _ (.getEdgeNeighbors (.parent (.id cell) cell-level) cells)
        all-cells (atom [])]
    (doall
     (for [cell-edge-1 cells]
       (let [_ (swap! all-cells conj cell-edge-1)
             edge1-cell-neighbors (make-array S2CellId 4)
             _ (.getEdgeNeighbors cell-edge-1 edge1-cell-neighbors)]
         (doall (for [cell-edge-2 edge1-cell-neighbors]
                  (swap! all-cells conj cell-edge-2)) ))) )
    (map #(S2Cell. %) (distinct @all-cells)))))

(defn get-cells-width [lat lng]
  (let [width 5]
    (let [cell (S2Cell. (S2LatLng/fromDegrees lat lng))
          cell-id (.parent (.id cell) cell-level)
          all-cells (atom [])
          index (MutableInteger. 0)
          jindex (MutableInteger. 0)
          level (.level cell-id)
          size (bit-shift-left 1 (- S2CellId/MAX_LEVEL level))
          face (.toFaceIJOrientation cell-id index jindex nil)
          half-width (Math/floor (/ width 2))]
      (doall
       (for [x (range (- half-width) half-width)]
         (doall
          (for [y (range (- half-width) half-width)]
            (swap! all-cells conj (.parent (S2CellId/fromFaceIJ face
                                                                (+ (.intValue index) (* x size))
                                                                (+ (.intValue jindex) (* y size)))
                                           cell-level))) )) )
      (map #(S2Cell. %) (distinct @all-cells)))))

(defn get-cells-width-sparse [lat lng]
  (let [width 3]
    (let [cell (S2Cell. (S2LatLng/fromDegrees lat lng))
          cell-id (.parent (.id cell) cell-level)
          all-cells (atom [])
          index (MutableInteger. 0)
          jindex (MutableInteger. 0)
          level 16 #_(.level cell-id)
          size (bit-shift-left 1 (- S2CellId/MAX_LEVEL level))
          face (.toFaceIJOrientation cell-id index jindex nil)
          half-width (Math/floor width)]
      (doall
       (for [x (range (- half-width) half-width 2)]
         (doall
          (for [y (range (- half-width) half-width 2)]
            (swap! all-cells conj (.parent (S2CellId/fromFaceIJ face
                                                                (+ (.intValue index) (* x size))
                                                                (+ (.intValue jindex) (* y size)))
                                           cell-level))))))
      (concat [(S2Cell. (.parent (.id (S2Cell. (S2LatLng/fromDegrees (+ lat (/ (rand) 100)) (+ lng (/ (rand) 100)))) ) cell-level) )]
              (drop 1 (map #(S2Cell. %) (distinct @all-cells)) ) ))))

(defn get-cells-single [lat lng]
  [(S2Cell. (.parent (.id (S2Cell. (S2LatLng/fromDegrees lat lng))) cell-level))])



;; RECOMMENDED IMPLEMENTATION
(defn get-cells-rect [lat lng]
  (flatten (take 1 (repeatedly (get-cell-cursors-rect cell-level lat lng)))))

(defn get-cells-fwd-back [lat lng]
  (flatten (take 10 (repeatedly (get-cell-cursors-fwd-back 15 lat lng)))))

(def get-cells get-cells-single)
#_(map #(S2CellId. (.id (.id %) ) ) (get-cells 37.7702549 -122.444787) )


(defn traverse-query [lat lng]
  (distinct (map long->ulong (map #(.id %) (map #(.id %) (get-cells lat lng) ))) ))

(defn s2-point->latlng [s2-point]
  (let [s2-lat-lng (S2LatLng. s2-point)]
    {:lat (.latDegrees s2-lat-lng)
     :lng (.lngDegrees s2-lat-lng)}))

(defn cell->points [cell]
  (map s2-point->latlng
       [(.getVertex cell 0)
        (.getVertex cell 1)
        (.getVertex cell 2)
        (.getVertex cell 3)
        (.getVertex cell 0)]))

(defn get-cell-mapping-bounds-list [lat lng]
  (map cell->points (get-cells lat lng)))

#_(flatten (take 1 (repeatedly (get-cell-cursors-fwd-back 37.7702549
                                                          -122.444787))))



(defn prot-query-user [lat lng]
  (proto/protobuf
   Requests
   {:type 2
    :message
    (protobuf-bytestring
     MessageQuad
     {:f1 (ByteString/copyFrom (.getBytes ""))
      :f2 (ByteString/copyFrom (.getBytes ""))
      :lat (float-to-int64 lat)
      :long (float-to-int64 lng)})}))

(defn prot-query-map-data [lat lng]
  (proto/protobuf
   Requests
   {:type 106
    :message
    (protobuf-bytestring
     GetMapObjectsMessage
     {:cell_id
      (traverse-query lat lng)
      :since_timestamp_ms
      (take (count (traverse-query lat lng)) (repeat 0))})}))

(defn prot-empty-126 []
  (proto/protobuf Requests {:type 126}))

(defn prot-timestamp-now []
  (proto/protobuf
   Requests
   {:type 4
    :message
    (protobuf-bytestring
     MessageSingleInt {:f1 (tc/to-long (t/now))})}))

(defn prot-empty-129 []
  (proto/protobuf Requests {:type 129}))

(defn prot-magic-identifier []
  (proto/protobuf
   Requests
   {:type 5
    :messsage
    (protobuf-bytestring
     MessageSingleString
     {:bytes (ByteString/copyFrom
              (.getBytes "05daf51635c82611d1aac95c0b051d3ec088a930" ))})}))


(defn prot-map-objects [access-token lat lng]
  (protobuf-bytestring
   RequestEnvelop
   {:rpc_id 1469378659230941192
    :latitude (float-to-int64 lat)
    :longitude (float-to-int64 lng)
    :altitude 0
    :unknown1 2
    :unknown12 989
    :auth
    {:provider "ptc"
     :token {:contents access-token
             :unknown13 14}}
    :requests
    [(prot-query-map-data lat lng)
     (prot-empty-126)
     (prot-timestamp-now)
     (prot-empty-129)
     (prot-magic-identifier)]})
  )

(defn prot-profile [access-token]
  (protobuf-bytestring
   RequestEnvelop
   {:rpc_id 1469378659230941192
    :latitude (float-to-int64 37.622)
    :longitude (float-to-int64 -122.45391)
    :altitude 0
    :unknown1 2
    :unknown12 989
    :auth
    {:provider "ptc"
     :token {:contents access-token
             :unknown13 14}}
    :requests
    [(prot-query-user 37.622 -122.45391)
     (prot-empty-126)
     (prot-timestamp-now)
     (prot-empty-129)
     (prot-magic-identifier)]}))



(defn niantic-req [body]
  {:user-agent "niantic" :as :byte-array :body body
   :timeout 5000})

(defn api-url [access-token]
  (try (->>
        (niantic-req (.asReadOnlyByteBuffer (prot-profile access-token) ))
        (http/post API_URL)
        (deref)
        (:body)
        (proto/protobuf-load ResponseEnvelop))
       (catch Exception e
         nil)))

(defonce memoize-cache (atom {}))
#_(reset! memoize-cache {})

(defn search-map-data [failed-requests auth lat long]
  (if (get @memoize-cache (str [lat long] ))
    (get @memoize-cache (str [lat long] ))
    (try
      (let [res (->>
                 (prot-map-objects (:access-token auth) lat long)
                 (.asReadOnlyByteBuffer)
                 (niantic-req)
                 (http/post (:api-url auth))
                 (deref)
                 (:body)
                 (proto/protobuf-load ResponseEnvelop)) ]
        (when res (swap! memoize-cache assoc (str [lat long]) res))
        res)
      (catch Exception e
        (swap! failed-requests inc)
        #_(println "Failed map lookup - no content field probably")
        #_(Thread/sleep 1000)
        #_(search-map-data auth lat long)
        nil)) ))


(defonce scraper-auth (atom []))
(defn login-accounts []
  "Fetch access token and rpc url.
   Returns nil if it fails to acquire an rpc url"
  (->> (pmap #(let [access-token (get (ptc-login 0 (:username %)
                                                 (:password %)) "access_token")
                    req-api-url (when access-token (api-url access-token) )]
                (when (:api-url req-api-url)
                  {:api-url (str "https://" (:api-url req-api-url) "/rpc")
                   :access-token access-token}))
             (remove nil? accounts))
       (reset! scraper-auth))
  (str "Accounts #: " (count @scraper-auth) ))

(at-at/every (* 7200 60) login-accounts recurring-pool)


(defn sql-format-keys [m]
  (->> (seq m)
       (map (fn [[k v]]
              [(keyword (string/replace (name k) #"-" "_") ) v])  )
       (into {})))

(defn ->pokemon [cell]
  (for [mon (:map-pokemon cell)]
    (do
      #_(println "ENCOUNTER ID: " (:encounter-id mon))
      (sql-format-keys
     (-> mon
         (assoc :scan_time_ms (:as-of-time-ms cell))
         (assoc :cell_id (:s2-cell-id cell))
         (assoc :pokemon_name (pokemon-number->name (:pokedex-type-id mon)))) ) )))

(defn store-sightings [mons]
  #_(when-not (empty? mons)
    (j/insert-multi! postgres-db :spawn_events mons)))

(defn fetch-all-sightings []
  #_(j/query postgres-db ["SELECT * FROM spawn_events"]))

(defn search-point [failed-requests stop-flag cb [lat lng idx auth]]
  (go
    (when-let [req (search-map-data failed-requests auth lat lng)]
      (let [res (try (when-let [first-payload (first (:payload req))]
                       (->> first-payload
                            (.toByteArray)
                            (proto/protobuf-load HeartbeatPayload)) )
                     (catch Exception e
                       #_(println "Protobuf Parse Error (probably no contents)")
                       (swap! failed-requests inc)
                       nil))
            pokemon (flatten (remove nil? (map ->pokemon (:cells res))))]

        (doseq [cell (:cells res)]
          (let [uid (first (:any @sen/connected-uids) )]
            #_(sen/chsk-send! uid [:located/spawn-points (:spawn-point cell)])
            #_(sen/chsk-send! uid [:located/cells {:pnts [(cell->points

                                                           (S2Cell. (.parent (.id (S2Cell. (S2CellId. (:s2-cell-id cell)))) 13) )
                                                           ) ] }])
            #_(sen/chsk-send! uid [:located/cells {:pnts
                                                   (doall (map
                                                           (fn [mon]
                                                             (cell->points
                                                              (S2Cell. (.parent (.id (S2Cell. (S2LatLng/fromDegrees
                                                                                               (:latitude mon)
                                                                                               (:longitude mon)))) 16) )

                                                              ))
                                                           (:map-pokemon cell)) )}])))
        (if
            (or (nil? res) (not (:cells res)) )
          #_(or (not (:cells res)) (not (contains? (:cells res) :map-pokemon)))
          (do
            (swap! failed-requests inc)
            #_(println "Kill")
            #_(println req)
            #_(reset! stop-flag true)
            nil)
          (do
            #_(println pokemon)
            (cb pokemon)
            (assoc res :pokemon pokemon)))) )))


(defn search-cell-list [max-threads cell-list radius cb]
  (let [lat-lng-points
        (map #(let [l (.toLatLng (.id %))]
                [(.latDegrees l)
                 (.lngDegrees l)]) cell-list)

        lat-lng-points-idx (map-indexed (fn [idx ll] (conj ll idx)) lat-lng-points)

        lat-lng-points-auth
        (map (fn [ll auth] (conj ll auth)) lat-lng-points-idx
             (flatten (repeat @scraper-auth)))

        stop-flag (atom false)
        total-reqs (count lat-lng-points-auth)
        failed-requests (atom 0)
        all-res
        (pokecon/parallel-frame
         max-threads
         lat-lng-points-auth
         (partial search-point failed-requests stop-flag cb)
         stop-flag)

        _ (println "FAILED REQUESTS: " @failed-requests)
        ]
    (println "DONE!")
    (store-sightings (remove nil? (flatten (map :pokemon @all-res))))
    (println "STORAGE COMPLETE!")
    all-res))

(defn filter-against [condtest xs1 xs2]
  (map (fn [x1 x2] (if (condtest x1) nil x2)) xs1 xs2))


(defn spawn-point-search [max-threads [ne sw] cb]
  (let [region-rect (S2LatLngRect.
                     (S2LatLng/fromDegrees (:lat sw) (:lng sw))
                     (S2LatLng/fromDegrees (:lat ne) (:lng ne)))

        cells-out (java.util.ArrayList. [])
        _ (S2RegionCoverer/getSimpleCovering region-rect (.toPoint (S2LatLng/fromDegrees (:lat ne) (:lng ne)) ) cell-level cells-out)
        cells (map #(S2Cell. %) cells-out)


        small-cells-out (java.util.ArrayList. [])
        _ (S2RegionCoverer/getSimpleCovering region-rect (.toPoint (S2LatLng/fromDegrees (:lat ne) (:lng ne)) ) 15 small-cells-out)
        small-cells (map #(S2Cell. %) small-cells-out)

        _ (let [uid (first (:any @sen/connected-uids) )]
            (sen/chsk-send! uid [:located/cells {:pnts (map cell->points cells)
                                                 :color "#0000FF"}]))

        lat-lng-points (map #(let [l (.toLatLng (.id %))]
                               [(.latDegrees l)
                                (.lngDegrees l)]) cells)

        lat-lng-points-idx (map-indexed (fn [idx ll] (conj ll idx)) lat-lng-points)

        lat-lng-points-auth
        (map (fn [ll auth] (conj ll auth)) lat-lng-points-idx
             (flatten (repeat @scraper-auth)))

        stop-flag (atom false)

        total-reqs (count lat-lng-points-auth)

        _ (println "SPAWN QUERY COUNT: " (count lat-lng-points-auth ))


        failed-requests (atom 0)

        all-res
        (pokecon/parallel-frame
         max-threads
         lat-lng-points-auth
         (partial search-point failed-requests stop-flag
                  (fn [mon]
                    (doseq [uid (:any @sen/connected-uids)]
                      (sen/chsk-send! uid [:located/pokemon mon]))))
         stop-flag)

        ;;_ (println (map nil? (map :cells @all-res )))

         #_(let [uid (first (:any @sen/connected-uids) )]
            (sen/chsk-send! uid [:located/cells {:pnts (map cell->points
                                                            (remove nil?
                                                                    (filter-against #(or (empty?  %) (nil? %))
                                                                                    (map :spawn-points @all-res ) cells) ))
                                                 :color "#00FF00"}]))


        _ (println "FAILED REQUESTS: " @failed-requests)


        spawn-points (remove nil? (flatten (map :spawn-point (flatten (map :cells @all-res ) ) ) ) )


        spawn-point-cells
        (pokecon/parallel-frame
         12
         spawn-points
         (fn [sp]
           (go (let [c (S2Cell. (S2LatLng/fromDegrees (:latitude sp) (:longitude sp)))
                 origin-cell (.id (S2Cell. (.parent (.id c) 16)))]
             (S2Cell. origin-cell )) ))
         stop-flag)


        #_(pmap (fn [sp]
               (let [c (S2Cell. (S2LatLng/fromDegrees (:latitude sp) (:longitude sp)))
                     origin-cell (.id (S2Cell. (.parent (.id c) 16)))]
                 (S2Cell. origin-cell ))) spawn-points)

        _ (println "POKEMON QUERY COUNT: " (count (distinct @spawn-point-cells)))

        _ (let [uid (first (:any @sen/connected-uids) )]
            (sen/chsk-send! uid [:located/cells {:pnts (map cell->points (distinct @spawn-point-cells))
                                                 :color "#0000FF"}]))

        spawn-cells (search-cell-list 100 (distinct @spawn-point-cells ) 1
                          (fn [mon]
                            (doseq [uid (:any @sen/connected-uids)]
                              (sen/chsk-send! uid [:located/pokemon mon]))))

         #_(let [uid (first (:any @sen/connected-uids) )]
            (sen/chsk-send! uid [:located/cells {:pnts (map cell->points (remove nil? (filter-against nil? @spawn-cells spawn-point-cells) ))
                                                 :color "#00FF00"}]))

        ]
    


    

    spawn-cells))





(defn mass-search
  ([max-threads search-lat search-lng radius]
   (mass-search max-threads search-lat search-lng radius (fn [])))
  ([max-threads search-lat search-lng radius cb]
   (let [lat-lng-points
         (if (> radius 1)
           (map-indexed
            (fn [idx ll] (conj ll idx))
            (for [lat (reductions + search-lat (take radius (repeat tiling-lat)))
                  lng (reductions + search-lng (take radius (repeat tiling-long)))]
              [lat lng]))
           [[search-lat search-lng 0]])
         lat-lng-points-auth
         (map (fn [ll auth] (conj ll auth)) lat-lng-points
              (flatten (repeat @scraper-auth)))
         stop-flag (atom false)
         total-reqs (count lat-lng-points-auth)
         failed-requests (atom 0)


         all-res
         (pokecon/parallel-frame
          max-threads
          lat-lng-points-auth
          (partial search-point failed-requests stop-flag cb)
          stop-flag)

         _ (println "FAILED REQUESTS: " @failed-requests)
         ]
     (println "DONE!")
     (store-sightings (remove nil? (flatten (map :pokemon @all-res))))
     (println "STORAGE COMPLETE!"))))



(defn get-mass-search-area-point-lists [radius search-lat search-lng]
  (distinct
   (get-cell-mapping-bounds-list search-lat search-lng)
   #_(for [lat (reductions + search-lat (take radius (repeat tiling-lat)))
         lng (reductions + search-lng (take radius (repeat tiling-long)))]
     (get-cell-mapping-bounds-list lat lng))))



