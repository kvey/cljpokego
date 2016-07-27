(defproject cljpokego "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :resource-paths ["lib/s2-geometry-java.jar"
                   "resources"
                   #_"lib/guava-r09.jar"]

  :source-paths ["src/clj"]
  :java-source-paths ["src/java"]
  ;; clojurescript depends on another guava version

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.flatland/protobuf "0.8.1"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/core.async "0.2.385"]
                 [clj-time "0.12.0"]
                 [clj-struct "0.1.0"]
                 [crouton "0.1.2"]
                 [cheshire "5.6.3"]
                 [clj-http "2.2.0"]
                 [overtone/at-at "1.2.0"]
                 [org.clojure/data.csv "0.1.3"]
                 [postgresql "9.3-1102.jdbc41"]
                 [org.clojure/java.jdbc "0.6.2-alpha2"]
                 [hikari-cp "1.6.1"]
                 [environ "1.0.1"]


                 ;; webserver
                 [http-kit "2.1.18"]
                 [com.taoensso/sente        "1.10.0-SNAPSHOT"]
                 [com.taoensso/timbre       "4.6.0"]
                 [ring                      "1.5.0"]
                 [ring/ring-defaults        "0.2.1"]
                 [compojure                 "1.5.1"]
                 [hiccup                    "1.0.5"]

                 ;; web-client
                 [org.clojure/clojurescript "1.9.93"]
                 [reagent "0.6.0-alpha" :exclusions [cljsjs/react
                                                     cljsjs/react-dom-server]]
                 [re-com "0.8.0"]]
  :plugins [[lein-environ    "1.0.1"]
            [lein-cljsbuild      "1.1.3"]
            [lein-pprint         "1.1.2"]]


  :cljsbuild
  {:builds
   [{:id :cljs-client
     :source-paths ["src/cljs"]
     :compiler {:output-to "resources/public/main.js"
                :optimizations :whitespace #_:advanced
                :pretty-print true}}]}

  :main cljpokego.webserver

  :aliases
  {"start-repl" ["do" "clean," "cljsbuild" "once," "repl" ":headless"]
   "start"      ["do" "clean," "cljsbuild" "once," "run"]})
