// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__29036__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29037__i = 0, G__29037__a = new Array(arguments.length -  0);
while (G__29037__i < G__29037__a.length) {G__29037__a[G__29037__i] = arguments[G__29037__i + 0]; ++G__29037__i;}
  args = new cljs.core.IndexedSeq(G__29037__a,0);
} 
return G__29036__delegate.call(this,args);};
G__29036.cljs$lang$maxFixedArity = 0;
G__29036.cljs$lang$applyTo = (function (arglist__29038){
var args = cljs.core.seq(arglist__29038);
return G__29036__delegate(args);
});
G__29036.cljs$core$IFn$_invoke$arity$variadic = G__29036__delegate;
return G__29036;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29039__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29040__i = 0, G__29040__a = new Array(arguments.length -  0);
while (G__29040__i < G__29040__a.length) {G__29040__a[G__29040__i] = arguments[G__29040__i + 0]; ++G__29040__i;}
  args = new cljs.core.IndexedSeq(G__29040__a,0);
} 
return G__29039__delegate.call(this,args);};
G__29039.cljs$lang$maxFixedArity = 0;
G__29039.cljs$lang$applyTo = (function (arglist__29041){
var args = cljs.core.seq(arglist__29041);
return G__29039__delegate(args);
});
G__29039.cljs$core$IFn$_invoke$arity$variadic = G__29039__delegate;
return G__29039;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
