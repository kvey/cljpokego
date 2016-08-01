(ns cljpokego.webserver
  (:require
   [clojure.string     :as str]
   [ring.middleware.defaults]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.route    :as route]
   [hiccup.core        :as hiccup]
   [clojure.core.async :as async  :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.encore    :as encore :refer (have have?)]
   [taoensso.timbre    :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente     :as sente]
   [environ.core :refer [env]]

   [cljpokego.sente :as sen]

   [clj-time.core :as t]
   [clj-time.coerce :as tc]
   [clj-time.format :as tf]

   [cheshire.core :as chesh]

   ;;; TODO Choose (uncomment) a supported web server + adapter -------------
   [org.httpkit.server :as http-kit]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   [cljpokego.scraper :as scraper]

   [clojure.data.csv :as csv]
   [clojure.java.io :as io]))




;;;; Ring handlers

(defn landing-pg-handler [ring-req]
  (hiccup/html
   [:head
    [:link {:rel "stylesheet"
            :href "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.css"}]
    [:link {:rel "stylesheet" :href "/re-com.css"}]
    [:link {:rel "stylesheet" :href "/pokemon.css"}]
    ]
   [:div#app]
   [:script {:src (str "https://maps.googleapis.com/maps/api/js?"
                       "key=" (:map-google-maps-key env) "&"
                       "libraries=visualization")}]

   [:script {:src "map.js"}] ; Include our cljs target
   [:script {:src "main.js"}] ; Include our cljs target
   ))

(defn login-handler
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id]} params]
    (debugf "Login request: %s" params)
    {:status 200 :session (assoc session :uid user-id)}))

(defroutes ring-routes
  (GET  "/"      ring-req (landing-pg-handler            ring-req))
  (GET  "/chsk"  ring-req (sen/ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk"  ring-req (sen/ring-ajax-post                ring-req))
  (POST "/login" ring-req (login-handler                 ring-req))
  (route/resources "/") ; Static files, notably public/main.js (our cljs target)
  (route/not-found "<h1>Page not found</h1>"))

(def main-ring-handler
  "**NB**: Sente requires the Ring `wrap-params` + `wrap-keyword-params`
  middleware to work. These are included with
  `ring.middleware.defaults/wrap-defaults` - but you'll need to ensure
  that they're included yourself if you're not using `wrap-defaults`."
  (ring.middleware.defaults/wrap-defaults
   ring-routes ring.middleware.defaults/site-defaults))


(defonce broadcast-enabled?_ (atom true))


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
  ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool
  )

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))


#_(def search-radius 100)
(def max-threads 1)
(defonce session-timestamp (tf/unparse (tf/formatters :basic-date-time-no-ms) (t/now)))

(defmethod -event-msg-handler :pokego/names
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (doseq [uid (:any @sen/connected-uids)]
    (sen/chsk-send! uid [:list/pokemon-names
                     (chesh/parse-string scraper/pokemon-english)])))


#_(defmethod -event-msg-handler :pokego/get-pokemon-stream
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println ?data)
  (scraper/mass-search
   max-threads
   (:lat ?data )
   (:lng ?data )
   search-radius
   (fn [mon]
     (doseq [uid (:any @sen/connected-uids)]
       (sen/chsk-send! uid [:located/pokemon mon])))))

(defmethod -event-msg-handler :pokego/spawn-point-search
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (scraper/spawn-point-search max-threads (:bounds ?data) (fn [mon])))


(defmethod -event-msg-handler :pokego/get-pokemon-stream-test
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println ?data)
  (scraper/mass-search
   max-threads
   (:lat ?data )
   (:lng ?data )
   1 ;; smaller test search area
   (fn [mon]
     (doseq [uid (:any @sen/connected-uids)]
       (sen/chsk-send! uid [:located/pokemon mon])))))


(defmethod -event-msg-handler :debug/mapping-area
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (doall (for [pnts (partition-all 50
                 (scraper/get-mass-search-area-point-lists
                 1 ;; medium range search area
                  (:lat ?data)
                  (:lng ?data))) ]
    (doseq [uid (:any @sen/connected-uids)]
      (sen/chsk-send! uid [:debug/mapping-area {:pnts pnts}]))) ))


(defmethod -event-msg-handler :pokego/existing-data
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (doall
   (for [mons (partition-all 300 (scraper/fetch-all-sightings)) ]
     (doseq [uid (:any @sen/connected-uids)]
       (do (sen/chsk-send! uid [:located/pokemon mons])
           (Thread/sleep 10))))))



#_(defmethod -event-msg-handler :pokego/auth
  [{:as ev-msg :keys [?reply-fn]}]
  (debugf "PokeGo Auth Attempted")
  (reset! scraper-auth (scraper/bootstrap)))

;; TODO Add your (defmethod -event-msg-handler <event-id> [ev-msg] <body>)s here...

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
          (sente/start-server-chsk-router!
           sen/ch-chsk event-msg-handler)))

;;;; Init stuff

(defonce    web-server_ (atom nil)) ; (fn stop [])
(defn  stop-web-server! [] (when-let [stop-fn @web-server_] (stop-fn)))
(defn start-web-server! [& [port]]
  (stop-web-server!)
  (let [port (or port 0) ; 0 => Choose any available port
        ring-handler (var main-ring-handler)

        [port stop-fn]
        (let [stop-fn (http-kit/run-server ring-handler {:port port})]
          [(:local-port (meta stop-fn)) (fn [] (stop-fn :timeout 100))])
        uri (format "http://localhost:%s/" port)]
    (infof "Web server is running at `%s`" uri)
    (reset! web-server_ stop-fn)))

(defn stop!  []  (stop-router!)  (stop-web-server!))
(defn start! []
  (start-router!)
  (start-web-server! 5000) #_(start-example-broadcaster!))

(defn -main "For `lein run`, etc." [] (start!))

(comment (start!))
