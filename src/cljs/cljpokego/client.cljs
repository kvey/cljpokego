(ns cljpokego.client
  (:require
   [reagent.core :as r]
   [re-com.core :as rc]
   [clojure.string  :as str]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente  :refer (cb-success?)])

  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))


(enable-console-print!)

;; (timbre/set-level! :trace) ; Uncomment for more logging

;;;; Define our Sente channel socket (chsk) client

(let [;; For this example, select a random protocol:
      rand-chsk-type :auto #_(if (>= (rand) 0.5) :ajax :auto)
      ;;_ (->output! "Randomly selected chsk type: %s" rand-chsk-type)

      ;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
       "/chsk" ; Must match server Ring routing URL
       {:type   rand-chsk-type
        :packer packer})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

;;;; Sente event handlers

(defonce global-gmap (atom nil))

(def tilesource "//tile.stamen.com/toner/{z}/{x}/{y}.png")
(def map-style (.fromJS js/Immutable (js/rasterTileStyle #js [tilesource])))
(defonce db
  (r/atom {:map-type :google-map
           :locations []
           :viewport
           {:style {:float "left"}
            :width (.-innerWidth js/window)
            #_(/ (.-innerWidth js/window) 2)
            :height (.-innerHeight js/window)
            :latitude 37.7702549
            :longitude  -122.444787
            :zoom 8
            :map-style map-style}}))

(defonce marker-objs (atom []))
(def search-rect
  (js/google.maps.Rectangle.
   (clj->js
    {:bounds
     {:north 37.77994
      :south 37.73406
      :east -122.42202 
      :west -122.47215}
     :fillColor "#00FF00"
     :strokeColor "#888"
     :strokeOpacity 0.8
     :fillOpacity 0.05
     :editable true
     :draggable true})))


(defn add-marker [lat lng icon]
  (js/google.maps.Marker.
   (clj->js {:position
             {:lat lat
              :lng lng}
             :icon icon
             :map @global-gmap})))

(defn add-poly [pnts]
  #_(println pnts)
  (js/google.maps.Polygon.
   (clj->js
    {:map @global-gmap
     :clickable false
     :paths pnts
     :strokeColor "#FF0000"
     :strokeOpacity 0.8
     :strokeWeight 2
     :fillColor "#FF0000"
     :fillOpacity 0.05})))

(defn add-response-poly
  ([pnts] (add-response-poly pnts "#0000FF"))
  ([pnts color]
  #_(println pnts)
  (js/google.maps.Polygon.
   (clj->js
    {:map @global-gmap
     :clickable false
     :paths pnts
     :strokeColor color
     :strokeOpacity 0.8
     :strokeWeight 2
     :fillColor color
     :fillOpacity 0.05}))))

(defn add-circle [lat lng]
  #_(println pnts)
  (js/google.maps.Circle.
   (clj->js
    {:map @global-gmap
     :clickable false
     :radius 3
     :center {:lat lat
              :lng lng}
     :strokeColor "#0000FF"
     :strokeOpacity 0.8
     :strokeWeight 2
     :fillColor "#0000FF"
     :fillOpacity 0.05})))

(defmulti local-msg-handler first)

(defmethod local-msg-handler :located/pokemon [?data]
  (let [[ev-msg payload] ?data]
    #_(infof "Pokemon: %s" payload)

    (if (= :google-map (:map-type @db) )
      (doall
       (map
        (fn [p]
          (swap! marker-objs conj
                 {:data p
                  :marker (add-marker
                           (:latitude p)
                           (:longitude p)
                           (str "/icons/" (:pokedex_type_id p) ".png")) } ))
        payload))
      (when (.-updatePokemon js/window)
        (js/addHeatmapPoints (clj->js payload)))
      )
    ))

(defmethod local-msg-handler :located/spawn-points [?data]
  (let [[ev-msg payload] ?data]
    #_(infof "Pokemon: %s" payload)

    (if (= :google-map (:map-type @db) )
      (doall
       (map
        (fn [p]
          (add-circle
           (:latitude p)
           (:longitude p)))
        payload)))))

(defmethod local-msg-handler :located/cells [?data]
  (let [[ev-msg payload] ?data]
    (if (= :google-map (:map-type @db) )
      (doall (map
              (fn [poly]
                (if (:color payload)
                  (add-response-poly poly (:color payload))
                  (add-response-poly poly)))
              (:pnts payload))))))



(defmethod local-msg-handler :list/pokemon-names [?data]
  (let [[ev-msg payload] ?data]
    (println ?data)
    (let [ordered
          (->> (seq payload)
               (map #(update-in % [0] js/parseInt))
               (sort-by first)
               (take 151))
          grouped (sort-by
                   #(first (first (second %)) )
                   (group-by #(get (second %) "EvolutionGroup")
                            ordered) )]
      (swap! db assoc :names-ungrouped ordered)
      (swap! db assoc :names grouped))))


(defmethod local-msg-handler :debug/mapping-area [?data]
  (let [[ev-msg payload] ?data]
    #_(infof "Got mapping area to display %s" (str (count (:pnts payload))))
    #_(infof "Debug - mapping: %s" payload)
    (doall (map
            (fn [poly]
              (add-poly poly))
            (:pnts payload)))))


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (infof "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (let [[old-state-map new-state-map] (have vector? ?data)]
    (if (:first-open? new-state-map)
      (infof "Channel socket successfully established!: %s" new-state-map)
      (infof "Channel socket state change: %s"              new-state-map))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  #_(infof "Push event from server: %s" ?data)
  (local-msg-handler ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (infof "Handshake: %s" ?data)
    (chsk-send! [:pokego/names])))




;; TODO Add your (defmethod -event-msg-handler <event-id> [ev-msg] <body>)s here...

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
          (sente/start-client-chsk-router!
           ch-chsk event-msg-handler)))


(defn gmap []
  (r/create-class
   {:reagent-render
    (fn [] [:div {:style {:height (:height (:viewport @db ))
                          :width (:width (:viewport @db ))}}])
    :component-did-mount
    (fn [this]
      (let [map-canvas (r/dom-node this)
            map-options (clj->js {"center" (google.maps.LatLng. 37.7702549 -122.444787)
                                  "zoom" 12})
            map-obj (js/google.maps.Map. map-canvas map-options)]
        (.addListener
         google.maps.event map-obj "click"
         (fn [event]
           (swap! db update :viewport merge
                  {:latitude (.lat (.-latLng event) )
                   :longitude (.lng (.-latLng event) )})))
        (.setMap search-rect map-obj)
        (reset! global-gmap map-obj)))}))


(defn keyword-keys [m]
  (->> (seq m)
       (map (fn [[k v]]
              [(keyword k) v]))
       (into {})))

(defn viewport->req [v]
  {:lat (:latitude v)
   :lng (:longitude v)})

(defn filter-pokemon [mon]
  (if (nil? (:filter @db ) )
    true
    (if (seq? (:filter @db))
      (some #(= (.-pokedex_type_id mon) %) (:filter @db))
      (= (:filter @db ) (.-pokedex_type_id mon)))))

(defn root-page []
  (let []
    (fn []
      [:div
       #_[:h4 (str (:latitude (:viewport @db) )
                 ""
                 (:longitude (:viewport @db) ))]
       [rc/v-box
        :style {:position "fixed"
                :left 0
                :top 50
                :z-index 1000
                :height "400px"
                :width "200px"}
        :gap "10px"
        :children
        [
         [:div {:style {:background "#FFF"
                        :border-radius "5px"}}
          (str (viewport->req (:viewport @db) ))]

         [rc/button
          :label (if (= :google-map (:map-type @db) )
                   "Change To Heatmap"
                   "Change To Icon/Google Map")
          :on-click #(if (= :google-map (:map-type @db) )
                       (swap! db assoc :map-type :heat-map)
                       (swap! db assoc :map-type :google-map))]
         [rc/button
          :label "Existing Data"
          :on-click #(chsk-send! [:pokego/existing-data])]
         [rc/button
          :label "Spawn Point Search"
          :on-click
          #(chsk-send! [:pokego/spawn-point-search
                        (let [ne (.getNorthEast (.getBounds search-rect) )
                              sw (.getSouthWest (.getBounds search-rect) )]
                          {:bounds [{:lat (.lat ne)
                                     :lng (.lng ne)}
                                    {:lat (.lat sw)
                                     :lng (.lng sw)}] })])]

         #_[rc/button
          :label "Mass Query"
          :on-click
          #(chsk-send! [:pokego/get-pokemon-stream
                        (let [ne (.getNorthEast (.getBounds @search-rect) )
                              sw (.getSouthWest (.getBounds @search-rect) )]
                          [{:lat (.lat ne)
                            :lng (.lng ne)}
                           {:lat (.lat sw)
                            :lng (.lng sw)}])])]
         [rc/button
          :label "Test Query"
          :on-click
          #(chsk-send! [:pokego/get-pokemon-stream-test
                        (viewport->req (:viewport @db) )])]
         (when
             (= :google-map (:map-type @db) )
           [rc/button ;; this depends on gmaps still
            :label "Debug Mapping Area"
            :on-click #(chsk-send! [:debug/mapping-area
                                    (viewport->req (:viewport @db))])] )

         (when (= :google-map (:map-type @db) )
           [rc/button ;; this depends on gmaps still
            :label "Hide Current Markers"
            :on-click #(doall (map (fn [m] (do
                                      (println m)
                                      (.setMap (:marker m) nil) m)) @marker-objs) )])
         ]
        
        ]

       [:div
        {:style {:overflow-y "scroll"
                 :height "100%"
                 :position "fixed"
                 :z-index 1000
                 :right 0
                 :top 0
                 :padding-top "10px"
                 :width "300px"
                 :background "#FEFDF4"
                 :border-radius "3px"}}
        [:div
         {:on-click #(swap! db assoc :filter nil)}
         "Reset"]
        (doall
         (for [[group name-vals] (:names @db)]
           ^{:key group}
           [:div {:style {:padding-top "10px"}}
            (doall (for [[num v] name-vals]
              ^{:key num}
              [:div
               {
                :style {:background (when
                                        (if (seq? (:filter @db))
                                          (some #{num} (:filter @db))
                                          (= num (:filter @db)))
                                      "#DDD")}}
               [rc/h-box
                :gap "5px"
                :align :center
                :children
                [[:div {:style {:width "20px" :margin-left "5px"}}
                  (str num) ]
                 [:div {:style {:width "50px"}
                        :on-click #(swap! db assoc :filter num)}
                  [:img {:src (str "/icons/" num ".png")}] ]
                 [:div {:style {:width "100px"}
                        :on-click #(swap! db assoc :filter num)}
                  (str (get v "Name")) ]
                 [:div.type-icon
                  {:class (str "type-" (str/lower-case (str (get v "Type1"))))
                   :on-click
                   #(swap! db assoc :filter
                           (map first (filter
                                       (fn [[k xv]] (or (= (get xv "Type1")
                                                           (get v "Type1"))
                                                        (= (get xv "Type2")
                                                           (get v "Type1"))
                                                        ))
                            (:names-ungrouped @db)) ))
                   }
                  (str (get v "Type1"))]
                 [:div.type-icon
                  {:class (str "type-" (str/lower-case (str (get v "Type2"))))
                   :on-click #(swap! db assoc :filter
                                     (map first (filter
                                      (fn [[k xv]] (or (= (get xv "Type1")
                                                          (get v "Type2"))
                                                       (= (get xv "Type2")
                                                          (get v "Type2"))
                                                       ))
                                      (:names-ungrouped @db)) ))
                   }
                  (str (get v "Type2"))
                  ]]]]) )]))
        ]
       (if (= :google-map (:map-type @db))
         [gmap]
         [rc/h-box
          :gap "5px"
          :children
          [
           [:div
            [:> js/PokeMap
             {:on-change-viewport (fn [v] (swap! db assoc :viewport
                                                 (keyword-keys (js->clj v))))
              :filter-condition filter-pokemon
              :point-size 13}] ]
           ] ] )
       #_[gmap]]
      ) ) )

(defn mount-root []
  (r/render
   [:div [root-page]]
   (.getElementById js/document "app")))

(defn start! []
  (start-router!)
  (mount-root))

(defonce _start-once (start!))
