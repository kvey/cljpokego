Credential Setup
*  Move profiles-example.clj to profiles.clj
*  Add your accounts to the account list
*  Add your google maps key

Running the clojure codebase
*  `cd cljpokego`
*  `lein cljsbuild once`
*  `lein run`
*  navigate to localhost:5000

Building javascript portion of lcient
*  `cd modified-heatmap-overlay`
*  `npm install`
*  `npm run build-push-js` (adds to cljpokego resources/public)


https://github.com/AeonLucid/POGOProtos <- should switch to this?

## Todos
- [ ]  Could really use some kind of indicator for where is going to be scanned
- [ ]  Pokemon icons with mapgl
- [ ]  Spatially segment and identify composition of segments (PySAL?)
- [ ]  Set scan location and size from client (I also have a theory that resolution is relevant, ref S2Cell portion of code)
- [ ]  Login credentials in UI, update UI as multiple accounts are logged in or not
- [x]  Filter by pokemon type (ui)
- [x]  Heatmap - general + filtered by pokemon type
- [x]  Filter by pokemon type + evolutions? (mostly wonder if there's some kind of pattern)
- [x]  Write scanned data to log file or db (centralize?)

## Ideas
*  Other player pokemon nicknames aren't visible on gyms, but the data is available
*  Map spawn locations
*  Local high score list / gym territory map


## Changelong
```
2016-07-27 14:02
* Removed lein-protobuf, moved cljs, added java sources under src/java
```
