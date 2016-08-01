(ns cljpokego.concurrency
  (:require
   [clojure.core.async :as a :refer
    [>! <! <!! go go-loop chan to-chan alts!]]))


(defn watch-counter [counter thread-counts]
  (add-watch counter
             :thread-count
             (fn [_ _ _ thread-count]
               (swap! thread-counts conj thread-count))))

(defn pmax
  "by: stuartsierra

  Process messages from input in parallel with at most max concurrent
  operations.

  Invokes f on values taken from input channel. f must return a
  channel, whose first value (if not closed) will be put on the output
  channel.

  Returns a channel which will be closed when the input channel is
  closed and all operations have completed.

  Creates new operations lazily: if processing can keep up with input,
  the number of parallel operations may be less than max.

  Note: the order of outputs may not match the order of inputs."
  [max f input output stop-atom]
  (go-loop [tasks #{input}]
    (when (seq tasks)
      (when-not @stop-atom
        (let [[value task] (alts! (vec tasks))]
          (if (= task input)
            (if (nil? value)
              (recur (disj tasks task))  ; input is closed
              (recur
               (conj
                (if (= max (count tasks))  ; max - 1 tasks running
                  (disj tasks input)  ; temporarily stop reading input
                  tasks)
                (f value))))
            ;; one processing task finished: continue reading input
            (do (when-not (nil? value) (>! output value))
                (recur (-> tasks (disj task) (conj input)))))) ))))


(defn sink
  "Returns an atom containing a vector. Consumes values from channel
  ch and conj's them into the atom."
  [ch]
  (let [a (atom [])]
    (go-loop []
      (let [val (<! ch)]
        (when-not (nil? val)
          (do
            (swap! a conj val) )
          (recur))))
    a))

(defn parallel-frame [max-threads input-data f stop-flag]
  (let [input (to-chan input-data)
        output (chan)
        result (sink output)
        thread-counts (atom [])]
    ;;(watch-counter counter thread-counts)
    (<!! (pmax max-threads f input output stop-flag))
    ;; confirm max thread limit, vector should max at maxthread
    #_(println @thread-counts) 
    result))
