Move profiles-example.clj to profiles.clj
Add your accounts to the account list
Add your google maps key


Running the clojure codebase
*  `cd cljpokego`
*  `lein protobuf`
*  `lein cljsbuild once`
*  `lein repl`
*  `cljpokego.webserver=> (start!)`
*  navigate to localhost:5000

Building javascript portion of lcient
*  `cd modified-heatmap-overlay`
*  `npm install`
*  `npm run build-push-js` (adds to cljpokego resources/public)


https://github.com/AeonLucid/POGOProtos <- should switch to this?

## Todos
*  Could really use some kind of indicator for where is going to be scanned
*  Pokemon icons with mapgl
*  Filter by pokemon type (ui)
*  Spatially segment and identify composition of segments (PySAL?)
*  Set scan location and size from client (I also have a theory that resolution is relevant, ref S2Cell portion of code)
*  (done) Heatmap - general + filtered by pokemon type
*  (done) Filter by pokemon type + evolutions? (mostly wonder if there's some kind of pattern)
*  (done) Write scanned data to log file or db (centralize?)

## Ideas
*  Other player pokemon nicknames aren't visible on gyms, but the data is available
*  Map spawn locations
*  Local high score list / gym territory map
