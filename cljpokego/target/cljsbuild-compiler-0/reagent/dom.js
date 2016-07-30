// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6154__auto__ = (function (){var and__6142__auto__ = typeof ReactDOM !== 'undefined';
if(and__6142__auto__){
return ReactDOM;
} else {
return and__6142__auto__;
}
})();
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
var and__6142__auto__ = typeof require !== 'undefined';
if(and__6142__auto__){
return require("react-dom");
} else {
return and__6142__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29606 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_29606){
return (function (){
var _STAR_always_update_STAR_29607 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29607;
}});})(_STAR_always_update_STAR_29606))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29606;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args29608 = [];
var len__7229__auto___29611 = arguments.length;
var i__7230__auto___29612 = (0);
while(true){
if((i__7230__auto___29612 < len__7229__auto___29611)){
args29608.push((arguments[i__7230__auto___29612]));

var G__29613 = (i__7230__auto___29612 + (1));
i__7230__auto___29612 = G__29613;
continue;
} else {
}
break;
}

var G__29610 = args29608.length;
switch (G__29610) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29608.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__29619_29623 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29620_29624 = null;
var count__29621_29625 = (0);
var i__29622_29626 = (0);
while(true){
if((i__29622_29626 < count__29621_29625)){
var v_29627 = cljs.core._nth.call(null,chunk__29620_29624,i__29622_29626);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29627);

var G__29628 = seq__29619_29623;
var G__29629 = chunk__29620_29624;
var G__29630 = count__29621_29625;
var G__29631 = (i__29622_29626 + (1));
seq__29619_29623 = G__29628;
chunk__29620_29624 = G__29629;
count__29621_29625 = G__29630;
i__29622_29626 = G__29631;
continue;
} else {
var temp__4657__auto___29632 = cljs.core.seq.call(null,seq__29619_29623);
if(temp__4657__auto___29632){
var seq__29619_29633__$1 = temp__4657__auto___29632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29619_29633__$1)){
var c__6965__auto___29634 = cljs.core.chunk_first.call(null,seq__29619_29633__$1);
var G__29635 = cljs.core.chunk_rest.call(null,seq__29619_29633__$1);
var G__29636 = c__6965__auto___29634;
var G__29637 = cljs.core.count.call(null,c__6965__auto___29634);
var G__29638 = (0);
seq__29619_29623 = G__29635;
chunk__29620_29624 = G__29636;
count__29621_29625 = G__29637;
i__29622_29626 = G__29638;
continue;
} else {
var v_29639 = cljs.core.first.call(null,seq__29619_29633__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29639);

var G__29640 = cljs.core.next.call(null,seq__29619_29633__$1);
var G__29641 = null;
var G__29642 = (0);
var G__29643 = (0);
seq__29619_29623 = G__29640;
chunk__29620_29624 = G__29641;
count__29621_29625 = G__29642;
i__29622_29626 = G__29643;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
