// Compiled by ClojureScript 1.9.93 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(64),(1)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__32976 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__32976,(0),null);
var yc = cljs.core.nth.call(null,vec__32976,(1),null);
var zc = cljs.core.nth.call(null,vec__32976,(2),null);
var vec__32979 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__32979,(0),null);
var ym = cljs.core.nth.call(null,vec__32979,(1),null);
var zm = cljs.core.nth.call(null,vec__32979,(2),null);
var vec__32982 = cljs.core.mapv.call(null,((function (vec__32976,xc,yc,zc,vec__32979,xm,ym,zm){
return (function (p1__32966_SHARP_){
var or__6154__auto__ = p1__32966_SHARP_;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return (0);
}
});})(vec__32976,xc,yc,zc,vec__32979,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__32982,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__32982,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__32982,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args32985 = [];
var len__7229__auto___32994 = arguments.length;
var i__7230__auto___32995 = (0);
while(true){
if((i__7230__auto___32995 < len__7229__auto___32994)){
args32985.push((arguments[i__7230__auto___32995]));

var G__32996 = (i__7230__auto___32995 + (1));
i__7230__auto___32995 = G__32996;
continue;
} else {
}
break;
}

var G__32987 = args32985.length;
switch (G__32987) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32985.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.call(null,sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__32988 = (((typeof cljs.core.first.call(null,sigs) === 'string') && (cljs.core.next.call(null,sigs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__32988,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__32988,(1),null);
var vec__32991 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,sigs__$1))) && (cljs.core.next.call(null,sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs__$1),cljs.core.next.call(null,sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.call(null,vec__32991,(0),null);
var sigs__$2 = cljs.core.nth.call(null,vec__32991,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args32998 = [];
var len__7229__auto___33001 = arguments.length;
var i__7230__auto___33002 = (0);
while(true){
if((i__7230__auto___33002 < len__7229__auto___33001)){
args32998.push((arguments[i__7230__auto___33002]));

var G__33003 = (i__7230__auto___33002 + (1));
i__7230__auto___33002 = G__33003;
continue;
} else {
}
break;
}

var G__33000 = args32998.length;
switch (G__33000) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32998.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args33005 = [];
var len__7229__auto___33010 = arguments.length;
var i__7230__auto___33011 = (0);
while(true){
if((i__7230__auto___33011 < len__7229__auto___33010)){
args33005.push((arguments[i__7230__auto___33011]));

var G__33012 = (i__7230__auto___33011 + (1));
i__7230__auto___33011 = G__33012;
continue;
} else {
}
break;
}

var G__33007 = args33005.length;
switch (G__33007) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33005.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_33008 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_33009 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_33009;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33008;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__6154__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
return !((x == null));
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__6142__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__6142__auto__){
var and__6142__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6142__auto____$1)){
return true;
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__6142__auto__ = (x instanceof cljs.core.Symbol);
if(and__6142__auto__){
var and__6142__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6142__auto____$1)){
return true;
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__6142__auto__ = (x instanceof cljs.core.Keyword);
if(and__6142__auto__){
var and__6142__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6142__auto____$1)){
return true;
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__6142__auto__ = typeof x === 'number';
if(and__6142__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__6142__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e33025){if((e33025 instanceof Error)){
var _ = e33025;
return false;
} else {
throw e33025;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args33026 = [];
var len__7229__auto___33029 = arguments.length;
var i__7230__auto___33030 = (0);
while(true){
if((i__7230__auto___33030 < len__7229__auto___33029)){
args33026.push((arguments[i__7230__auto___33030]));

var G__33031 = (i__7230__auto___33030 + (1));
i__7230__auto___33030 = G__33031;
continue;
} else {
}
break;
}

var G__33028 = args33026.length;
switch (G__33028) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33026.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("`as-"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.call(null,x)),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});
taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});
taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__6154__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args33033 = [];
var len__7229__auto___33036 = arguments.length;
var i__7230__auto___33037 = (0);
while(true){
if((i__7230__auto___33037 < len__7229__auto___33036)){
args33033.push((arguments[i__7230__auto___33037]));

var G__33038 = (i__7230__auto___33037 + (1));
i__7230__auto___33037 = G__33038;
continue;
} else {
}
break;
}

var G__33035 = args33033.length;
switch (G__33035) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33033.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,no_slash_QMARK_){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args33041 = [];
var len__7229__auto___33047 = arguments.length;
var i__7230__auto___33048 = (0);
while(true){
if((i__7230__auto___33048 < len__7229__auto___33047)){
args33041.push((arguments[i__7230__auto___33048]));

var G__33049 = (i__7230__auto___33048 + (1));
i__7230__auto___33048 = G__33049;
continue;
} else {
}
break;
}

var G__33046 = args33041.length;
switch (G__33046) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33041.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7248__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6142__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__6142__auto__){
var and__6142__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__6142__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__6142__auto____$1,and__6142__auto__){
return (function (p1__33040_SHARP_){
return cljs.core._EQ_.call(null,p1__33040_SHARP_,x);
});})(and__6142__auto____$1,and__6142__auto__))
,more);
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq33042){
var G__33043 = cljs.core.first.call(null,seq33042);
var seq33042__$1 = cljs.core.next.call(null,seq33042);
var G__33044 = cljs.core.first.call(null,seq33042__$1);
var seq33042__$2 = cljs.core.next.call(null,seq33042__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33043,G__33044,seq33042__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args33051 = [];
var len__7229__auto___33058 = arguments.length;
var i__7230__auto___33059 = (0);
while(true){
if((i__7230__auto___33059 < len__7229__auto___33058)){
args33051.push((arguments[i__7230__auto___33059]));

var G__33060 = (i__7230__auto___33059 + (1));
i__7230__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var G__33057 = args33051.length;
switch (G__33057) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33051.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq33052){
var G__33053 = cljs.core.first.call(null,seq33052);
var seq33052__$1 = cljs.core.next.call(null,seq33052);
var G__33054 = cljs.core.first.call(null,seq33052__$1);
var seq33052__$2 = cljs.core.next.call(null,seq33052__$1);
var G__33055 = cljs.core.first.call(null,seq33052__$2);
var seq33052__$3 = cljs.core.next.call(null,seq33052__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__33053,G__33054,G__33055,seq33052__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__33067 = clojure.string.split.call(null,[cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__33067,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__33067,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var temp__4657__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var temp__4657__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args33070 = [];
var len__7229__auto___33073 = arguments.length;
var i__7230__auto___33074 = (0);
while(true){
if((i__7230__auto___33074 < len__7229__auto___33073)){
args33070.push((arguments[i__7230__auto___33074]));

var G__33075 = (i__7230__auto___33074 + (1));
i__7230__auto___33074 = G__33075;
continue;
} else {
}
break;
}

var G__33072 = args33070.length;
switch (G__33072) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33070.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.call(null,x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args33077 = [];
var len__7229__auto___33081 = arguments.length;
var i__7230__auto___33082 = (0);
while(true){
if((i__7230__auto___33082 < len__7229__auto___33081)){
args33077.push((arguments[i__7230__auto___33082]));

var G__33083 = (i__7230__auto___33082 + (1));
i__7230__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var G__33079 = args33077.length;
switch (G__33079) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33077.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__33080 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33080) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args33086 = [];
var len__7229__auto___33092 = arguments.length;
var i__7230__auto___33093 = (0);
while(true){
if((i__7230__auto___33093 < len__7229__auto___33092)){
args33086.push((arguments[i__7230__auto___33093]));

var G__33094 = (i__7230__auto___33093 + (1));
i__7230__auto___33093 = G__33094;
continue;
} else {
}
break;
}

var G__33088 = args33086.length;
switch (G__33088) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33086.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__33089){
var map__33090 = p__33089;
var map__33090__$1 = ((((!((map__33090 == null)))?((((map__33090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);
var min = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33112 = arguments.length;
var i__7230__auto___33113 = (0);
while(true){
if((i__7230__auto___33113 < len__7229__auto___33112)){
args__7236__auto__.push((arguments[i__7230__auto___33113]));

var G__33114 = (i__7230__auto___33113 + (1));
i__7230__auto___33113 = G__33114;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__33109){
var map__33110 = p__33109;
var map__33110__$1 = ((((!((map__33110 == null)))?((((map__33110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33110):map__33110);
var opts = map__33110__$1;
var years = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__33110,map__33110__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return __in;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__33110,map__33110__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq33108){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33108));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args33119 = [];
var len__7229__auto___33126 = arguments.length;
var i__7230__auto___33127 = (0);
while(true){
if((i__7230__auto___33127 < len__7229__auto___33126)){
args33119.push((arguments[i__7230__auto___33127]));

var G__33128 = (i__7230__auto___33127 + (1));
i__7230__auto___33127 = G__33128;
continue;
} else {
}
break;
}

var G__33125 = args33119.length;
switch (G__33125) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33119.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq33120){
var G__33121 = cljs.core.first.call(null,seq33120);
var seq33120__$1 = cljs.core.next.call(null,seq33120);
var G__33122 = cljs.core.first.call(null,seq33120__$1);
var seq33120__$2 = cljs.core.next.call(null,seq33120__$1);
var G__33123 = cljs.core.first.call(null,seq33120__$2);
var seq33120__$3 = cljs.core.next.call(null,seq33120__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__33121,G__33122,G__33123,seq33120__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__33133 = coll;
var c1 = cljs.core.nth.call(null,vec__33133,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__33139 = v;
var v1 = cljs.core.nth.call(null,vec__33139,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args33142 = [];
var len__7229__auto___33148 = arguments.length;
var i__7230__auto___33149 = (0);
while(true){
if((i__7230__auto___33149 < len__7229__auto___33148)){
args33142.push((arguments[i__7230__auto___33149]));

var G__33150 = (i__7230__auto___33149 + (1));
i__7230__auto___33149 = G__33150;
continue;
} else {
}
break;
}

var G__33147 = args33142.length;
switch (G__33147) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33142.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7248__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(taoensso.encore.some_QMARK_.call(null,_QMARK_x)){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq33143){
var G__33144 = cljs.core.first.call(null,seq33143);
var seq33143__$1 = cljs.core.next.call(null,seq33143);
var G__33145 = cljs.core.first.call(null,seq33143__$1);
var seq33143__$2 = cljs.core.next.call(null,seq33143__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__33144,G__33145,seq33143__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);

/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__33153_SHARP_,p2__33152_SHARP_){
return proc.call(null,p2__33152_SHARP_);
}),null,coll);

return null;
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__33156_SHARP_,p2__33154_SHARP_,p3__33155_SHARP_){
return proc.call(null,p2__33154_SHARP_,p3__33155_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__33159_SHARP_,p2__33157_SHARP_,p3__33158_SHARP_){
return proc.call(null,p2__33157_SHARP_,p3__33158_SHARP_);
}),null,kvs);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var temp__4657__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__33169){
var vec__33170 = p__33169;
var k = cljs.core.nth.call(null,vec__33170,(0),null);
var v = cljs.core.nth.call(null,vec__33170,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
/**
 * Like `reduce-kv` but for JavaScript objects
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args33177 = [];
var len__7229__auto___33180 = arguments.length;
var i__7230__auto___33181 = (0);
while(true){
if((i__7230__auto___33181 < len__7229__auto___33180)){
args33177.push((arguments[i__7230__auto___33181]));

var G__33182 = (i__7230__auto___33181 + (1));
i__7230__auto___33181 = G__33182;
continue;
} else {
}
break;
}

var G__33179 = args33177.length;
switch (G__33179) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33177.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args33188 = [];
var len__7229__auto___33191 = arguments.length;
var i__7230__auto___33192 = (0);
while(true){
if((i__7230__auto___33192 < len__7229__auto___33191)){
args33188.push((arguments[i__7230__auto___33192]));

var G__33193 = (i__7230__auto___33192 + (1));
i__7230__auto___33192 = G__33193;
continue;
} else {
}
break;
}

var G__33190 = args33188.length;
switch (G__33190) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33188.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__33195 = null;
var G__33195__0 = (function (){
return rf.call(null);
});
var G__33195__1 = (function (acc){
return rf.call(null,acc);
});
var G__33195__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__33195 = function(acc,input){
switch(arguments.length){
case 0:
return G__33195__0.call(this);
case 1:
return G__33195__1.call(this,acc);
case 2:
return G__33195__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33195.cljs$core$IFn$_invoke$arity$0 = G__33195__0;
G__33195.cljs$core$IFn$_invoke$arity$1 = G__33195__1;
G__33195.cljs$core$IFn$_invoke$arity$2 = G__33195__2;
return G__33195;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
var or__6154__auto__ = taoensso.encore._QMARK_subvec_LT_len.call(null,coll,(0),n);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args33200 = [];
var len__7229__auto___33206 = arguments.length;
var i__7230__auto___33207 = (0);
while(true){
if((i__7230__auto___33207 < len__7229__auto___33206)){
args33200.push((arguments[i__7230__auto___33207]));

var G__33208 = (i__7230__auto___33207 + (1));
i__7230__auto___33207 = G__33208;
continue;
} else {
}
break;
}

var G__33205 = args33200.length;
switch (G__33205) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33200.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7248__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq33201){
var G__33202 = cljs.core.first.call(null,seq33201);
var seq33201__$1 = cljs.core.next.call(null,seq33201);
var G__33203 = cljs.core.first.call(null,seq33201__$1);
var seq33201__$2 = cljs.core.next.call(null,seq33201__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__33202,G__33203,seq33201__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__33210_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__33210_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__33214 = ks;
var seq__33215 = cljs.core.seq.call(null,vec__33214);
var first__33216 = cljs.core.first.call(null,seq__33215);
var seq__33215__$1 = cljs.core.next.call(null,seq__33215);
var k = first__33216;
var ks__$1 = seq__33215__$1;
if(ks__$1){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
/**
 * Like `subvec` but:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty vector.
 */
taoensso.encore._QMARK_subvec_LT_idx = (function taoensso$encore$_QMARK_subvec_LT_idx(var_args){
var args33217 = [];
var len__7229__auto___33220 = arguments.length;
var i__7230__auto___33221 = (0);
while(true){
if((i__7230__auto___33221 < len__7229__auto___33220)){
args33217.push((arguments[i__7230__auto___33221]));

var G__33222 = (i__7230__auto___33221 + (1));
i__7230__auto___33221 = G__33222;
continue;
} else {
}
break;
}

var G__33219 = args33217.length;
switch (G__33219) {
case 2:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33217.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?subvec<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore._QMARK_subvec_LT_len = (function taoensso$encore$_QMARK_subvec_LT_len(var_args){
var args33224 = [];
var len__7229__auto___33227 = arguments.length;
var i__7230__auto___33228 = (0);
while(true){
if((i__7230__auto___33228 < len__7229__auto___33227)){
args33224.push((arguments[i__7230__auto___33228]));

var G__33229 = (i__7230__auto___33228 + (1));
i__7230__auto___33228 = G__33229;
continue;
} else {
}
break;
}

var G__33226 = args33224.length;
switch (G__33226) {
case 2:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33224.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return null;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args33231 = [];
var len__7229__auto___33234 = arguments.length;
var i__7230__auto___33235 = (0);
while(true){
if((i__7230__auto___33235 < len__7229__auto___33234)){
args33231.push((arguments[i__7230__auto___33235]));

var G__33236 = (i__7230__auto___33235 + (1));
i__7230__auto___33235 = G__33236;
continue;
} else {
}
break;
}

var G__33233 = args33231.length;
switch (G__33233) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33231.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args33238 = [];
var len__7229__auto___33245 = arguments.length;
var i__7230__auto___33246 = (0);
while(true){
if((i__7230__auto___33246 < len__7229__auto___33245)){
args33238.push((arguments[i__7230__auto___33246]));

var G__33247 = (i__7230__auto___33246 + (1));
i__7230__auto___33246 = G__33247;
continue;
} else {
}
break;
}

var G__33244 = args33238.length;
switch (G__33244) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33238.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq33239){
var G__33240 = cljs.core.first.call(null,seq33239);
var seq33239__$1 = cljs.core.next.call(null,seq33239);
var G__33241 = cljs.core.first.call(null,seq33239__$1);
var seq33239__$2 = cljs.core.next.call(null,seq33239__$1);
var G__33242 = cljs.core.first.call(null,seq33239__$2);
var seq33239__$3 = cljs.core.next.call(null,seq33239__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__33240,G__33241,G__33242,seq33239__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args33249 = [];
var len__7229__auto___33256 = arguments.length;
var i__7230__auto___33257 = (0);
while(true){
if((i__7230__auto___33257 < len__7229__auto___33256)){
args33249.push((arguments[i__7230__auto___33257]));

var G__33258 = (i__7230__auto___33257 + (1));
i__7230__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var G__33255 = args33249.length;
switch (G__33255) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33249.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq33250){
var G__33251 = cljs.core.first.call(null,seq33250);
var seq33250__$1 = cljs.core.next.call(null,seq33250);
var G__33252 = cljs.core.first.call(null,seq33250__$1);
var seq33250__$2 = cljs.core.next.call(null,seq33250__$1);
var G__33253 = cljs.core.first.call(null,seq33250__$2);
var seq33250__$3 = cljs.core.next.call(null,seq33250__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__33251,G__33252,G__33253,seq33250__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args33260 = [];
var len__7229__auto___33267 = arguments.length;
var i__7230__auto___33268 = (0);
while(true){
if((i__7230__auto___33268 < len__7229__auto___33267)){
args33260.push((arguments[i__7230__auto___33268]));

var G__33269 = (i__7230__auto___33268 + (1));
i__7230__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var G__33266 = args33260.length;
switch (G__33266) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33260.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq33261){
var G__33262 = cljs.core.first.call(null,seq33261);
var seq33261__$1 = cljs.core.next.call(null,seq33261);
var G__33263 = cljs.core.first.call(null,seq33261__$1);
var seq33261__$2 = cljs.core.next.call(null,seq33261__$1);
var G__33264 = cljs.core.first.call(null,seq33261__$2);
var seq33261__$3 = cljs.core.next.call(null,seq33261__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__33262,G__33263,G__33264,seq33261__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args33271 = [];
var len__7229__auto___33274 = arguments.length;
var i__7230__auto___33275 = (0);
while(true){
if((i__7230__auto___33275 < len__7229__auto___33274)){
args33271.push((arguments[i__7230__auto___33275]));

var G__33276 = (i__7230__auto___33275 + (1));
i__7230__auto___33275 = G__33276;
continue;
} else {
}
break;
}

var G__33273 = args33271.length;
switch (G__33273) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33271.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33279 = arguments.length;
var i__7230__auto___33280 = (0);
while(true){
if((i__7230__auto___33280 < len__7229__auto___33279)){
args__7236__auto__.push((arguments[i__7230__auto___33280]));

var G__33281 = (i__7230__auto___33280 + (1));
i__7230__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq33278){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33278));
});

/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33284 = arguments.length;
var i__7230__auto___33285 = (0);
while(true){
if((i__7230__auto___33285 < len__7229__auto___33284)){
args__7236__auto__.push((arguments[i__7230__auto___33285]));

var G__33286 = (i__7230__auto___33285 + (1));
i__7230__auto___33285 = G__33286;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq33282){
var G__33283 = cljs.core.first.call(null,seq33282);
var seq33282__$1 = cljs.core.next.call(null,seq33282);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__33283,seq33282__$1);
});

/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__33287 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__33288 = cljs.core.next.call(null,ks__$1);
var G__33289 = cljs.core.next.call(null,vs__$1);
m = G__33287;
ks__$1 = G__33288;
vs__$1 = G__33289;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args33290 = [];
var len__7229__auto___33296 = arguments.length;
var i__7230__auto___33297 = (0);
while(true){
if((i__7230__auto___33297 < len__7229__auto___33296)){
args33290.push((arguments[i__7230__auto___33297]));

var G__33298 = (i__7230__auto___33297 + (1));
i__7230__auto___33297 = G__33298;
continue;
} else {
}
break;
}

var G__33295 = args33290.length;
switch (G__33295) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33290.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7248__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq33291){
var G__33292 = cljs.core.first.call(null,seq33291);
var seq33291__$1 = cljs.core.next.call(null,seq33291);
var G__33293 = cljs.core.first.call(null,seq33291__$1);
var seq33291__$2 = cljs.core.next.call(null,seq33291__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__33292,G__33293,seq33291__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__33300 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__33301 = cljs.core.next.call(null,s1);
var G__33302 = cljs.core.next.call(null,s2);
v = G__33300;
s1 = G__33301;
s2 = G__33302;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome.call(null,cljs.core.identity,maps))){
return cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce_kv.call(null,(function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_.call(null,acc__$1,k)){
var lv = cljs.core.get.call(null,acc__$1,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
var new_rv = f.call(null,lv,rv);
if(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.call(null,acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33305 = arguments.length;
var i__7230__auto___33306 = (0);
while(true){
if((i__7230__auto___33306 < len__7229__auto___33305)){
args__7236__auto__.push((arguments[i__7230__auto___33306]));

var G__33307 = (i__7230__auto___33306 + (1));
i__7230__auto___33306 = G__33307;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with.call(null,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq33303){
var G__33304 = cljs.core.first.call(null,seq33303);
var seq33303__$1 = cljs.core.next.call(null,seq33303);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__33304,seq33303__$1);
});

taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33309 = arguments.length;
var i__7230__auto___33310 = (0);
while(true){
if((i__7230__auto___33310 < len__7229__auto___33309)){
args__7236__auto__.push((arguments[i__7230__auto___33310]));

var G__33311 = (i__7230__auto___33310 + (1));
i__7230__auto___33310 = G__33311;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with.call(null,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq33308){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33308));
});

/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = cljs.core.deref.call(null,atom_);
var nv = f.call(null,ov);
cljs.core.reset_BANG_.call(null,atom_,nv);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = cljs.core.deref.call(null,atom_);
var nv = f.call(null,cljs.core.get.call(null,om,k));
var nm = cljs.core.assoc.call(null,om,k,nv);
cljs.core.reset_BANG_.call(null,atom_,nm);

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6776__auto__,k__6777__auto__){
var self__ = this;
var this__6776__auto____$1 = this;
return cljs.core._lookup.call(null,this__6776__auto____$1,k__6777__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6778__auto__,k33313,else__6779__auto__){
var self__ = this;
var this__6778__auto____$1 = this;
var G__33315 = (((k33313 instanceof cljs.core.Keyword))?k33313.fqn:null);
switch (G__33315) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33313,else__6779__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6790__auto__,writer__6791__auto__,opts__6792__auto__){
var self__ = this;
var this__6790__auto____$1 = this;
var pr_pair__6793__auto__ = ((function (this__6790__auto____$1){
return (function (keyval__6794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6791__auto__,cljs.core.pr_writer,""," ","",opts__6792__auto__,keyval__6794__auto__);
});})(this__6790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6791__auto__,pr_pair__6793__auto__,"#taoensso.encore.Swapped{",", ","}",opts__6792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33312){
var self__ = this;
var G__33312__$1 = this;
return (new cljs.core.RecordIter((0),G__33312__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6770__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6780__auto__){
var self__ = this;
var this__6780__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6771__auto__){
var self__ = this;
var this__6771__auto____$1 = this;
var h__6589__auto__ = self__.__hash;
if(!((h__6589__auto__ == null))){
return h__6589__auto__;
} else {
var h__6589__auto____$1 = cljs.core.hash_imap.call(null,this__6771__auto____$1);
self__.__hash = h__6589__auto____$1;

return h__6589__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6772__auto__,other__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6142__auto__ = other__6773__auto__;
if(cljs.core.truth_(and__6142__auto__)){
var and__6142__auto____$1 = (this__6772__auto____$1.constructor === other__6773__auto__.constructor);
if(and__6142__auto____$1){
return cljs.core.equiv_map.call(null,this__6772__auto____$1,other__6773__auto__);
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6785__auto__,k__6786__auto__){
var self__ = this;
var this__6785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__6786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6785__auto____$1),self__.__meta),k__6786__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6786__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6783__auto__,k__6784__auto__,G__33312){
var self__ = this;
var this__6783__auto____$1 = this;
var pred__33316 = cljs.core.keyword_identical_QMARK_;
var expr__33317 = k__6784__auto__;
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__33317))){
return (new taoensso.encore.Swapped(G__33312,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__33317))){
return (new taoensso.encore.Swapped(self__.new_val,G__33312,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6784__auto__,G__33312),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6788__auto__){
var self__ = this;
var this__6788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6775__auto__,G__33312){
var self__ = this;
var this__6775__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__33312,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6781__auto__,entry__6782__auto__){
var self__ = this;
var this__6781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6782__auto__)){
return cljs.core._assoc.call(null,this__6781__auto____$1,cljs.core._nth.call(null,entry__6782__auto__,(0)),cljs.core._nth.call(null,entry__6782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6781__auto____$1,entry__6782__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__6810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__6810__auto__,writer__6811__auto__){
return cljs.core._write.call(null,writer__6811__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__33314){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__33314),null,cljs.core.dissoc.call(null,G__33314,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var args33320 = [];
var len__7229__auto___33332 = arguments.length;
var i__7230__auto___33333 = (0);
while(true){
if((i__7230__auto___33333 < len__7229__auto___33332)){
args33320.push((arguments[i__7230__auto___33333]));

var G__33334 = (i__7230__auto___33333 + (1));
i__7230__auto___33333 = G__33334;
continue;
} else {
}
break;
}

var G__33322 = args33320.length;
switch (G__33322) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33320.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(taoensso.encore.swapped_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__33323 = ks;
var seq__33324 = cljs.core.seq.call(null,vec__33323);
var first__33325 = cljs.core.first.call(null,seq__33324);
var seq__33324__$1 = cljs.core.next.call(null,seq__33324);
var k1 = first__33325;
var kn = seq__33324__$1;
var m = old_val;
if(kn){
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__33326 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__33326,(0),null);
var return_val = cljs.core.nth.call(null,vec__33326,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_.call(null,ks))){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,cljs.core.dissoc.call(null,m,k1));
} else {
var old_val_in = cljs.core.get.call(null,m,k1);
var vec__33329 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__33329,(0),null);
var return_val = cljs.core.nth.call(null,vec__33329,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m,k1):cljs.core.assoc.call(null,m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;

/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (acc,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__33340 = (cljs.core.truth_(_QMARK_vf_type)?cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op):_QMARK_op);
var vf_type = cljs.core.nth.call(null,vec__33340,(0),null);
var ks = cljs.core.nth.call(null,vec__33340,(1),null);
var valf = cljs.core.nth.call(null,vec__33340,(2),null);
var G__33343 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__33343) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,acc);
} else {
return cljs.core.nth.call(null,taoensso.encore._swapped.call(null,acc,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
} else {
return acc;
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33347 = arguments.length;
var i__7230__auto___33348 = (0);
while(true){
if((i__7230__auto___33348 < len__7229__auto___33347)){
args__7236__auto__.push((arguments[i__7230__auto___33348]));

var G__33349 = (i__7230__auto___33348 + (1));
i__7230__auto___33348 = G__33349;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq33345){
var G__33346 = cljs.core.first.call(null,seq33345);
var seq33345__$1 = cljs.core.next.call(null,seq33345);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__33346,seq33345__$1);
});

taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.call(null,to,cljs.core.partition_all.call(null,(2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args33354 = [];
var len__7229__auto___33369 = arguments.length;
var i__7230__auto___33370 = (0);
while(true){
if((i__7230__auto___33370 < len__7229__auto___33369)){
args33354.push((arguments[i__7230__auto___33370]));

var G__33371 = (i__7230__auto___33370 + (1));
i__7230__auto___33370 = G__33371;
continue;
} else {
}
break;
}

var G__33360 = args33354.length;
switch (G__33360) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33354.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33361 = taoensso.encore._swapped.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__33361,(0),null);
var return_val = cljs.core.nth.call(null,vec__33361,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33364 = taoensso.encore._swapped.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__33364,(0),null);
var return_val = cljs.core.nth.call(null,vec__33364,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count.call(null,more);
}catch (e33367){if((e33367 instanceof Error)){
var e = e33367;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e33367;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e33368){if((e33368 instanceof Error)){
var e = e33368;
return e;
} else {
throw e33368;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq33355){
var G__33356 = cljs.core.first.call(null,seq33355);
var seq33355__$1 = cljs.core.next.call(null,seq33355);
var G__33357 = cljs.core.first.call(null,seq33355__$1);
var seq33355__$2 = cljs.core.next.call(null,seq33355__$1);
var G__33358 = cljs.core.first.call(null,seq33355__$2);
var seq33355__$3 = cljs.core.next.call(null,seq33355__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33356,G__33357,G__33358,seq33355__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args33373 = [];
var len__7229__auto___33382 = arguments.length;
var i__7230__auto___33383 = (0);
while(true){
if((i__7230__auto___33383 < len__7229__auto___33382)){
args33373.push((arguments[i__7230__auto___33383]));

var G__33384 = (i__7230__auto___33383 + (1));
i__7230__auto___33383 = G__33384;
continue;
} else {
}
break;
}

var G__33379 = args33373.length;
switch (G__33379) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33373.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7248__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count.call(null,more);
}catch (e33380){if((e33380 instanceof Error)){
var e = e33380;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e33380;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e33381){if((e33381 instanceof Error)){
var e = e33381;
return e;
} else {
throw e33381;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq33374){
var G__33375 = cljs.core.first.call(null,seq33374);
var seq33374__$1 = cljs.core.next.call(null,seq33374);
var G__33376 = cljs.core.first.call(null,seq33374__$1);
var seq33374__$2 = cljs.core.next.call(null,seq33374__$1);
var G__33377 = cljs.core.first.call(null,seq33374__$2);
var seq33374__$3 = cljs.core.next.call(null,seq33374__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33375,G__33376,G__33377,seq33374__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args33386 = [];
var len__7229__auto___33392 = arguments.length;
var i__7230__auto___33393 = (0);
while(true){
if((i__7230__auto___33393 < len__7229__auto___33392)){
args33386.push((arguments[i__7230__auto___33393]));

var G__33394 = (i__7230__auto___33393 + (1));
i__7230__auto___33393 = G__33394;
continue;
} else {
}
break;
}

var G__33391 = args33386.length;
switch (G__33391) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7248__auto__ = (new cljs.core.IndexedSeq(args33386.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7248__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq33387){
var G__33388 = cljs.core.first.call(null,seq33387);
var seq33387__$1 = cljs.core.next.call(null,seq33387);
var G__33389 = cljs.core.first.call(null,seq33387__$1);
var seq33387__$2 = cljs.core.next.call(null,seq33387__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__33388,G__33389,seq33387__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args33400 = [];
var len__7229__auto___33403 = arguments.length;
var i__7230__auto___33404 = (0);
while(true){
if((i__7230__auto___33404 < len__7229__auto___33403)){
args33400.push((arguments[i__7230__auto___33404]));

var G__33405 = (i__7230__auto___33404 + (1));
i__7230__auto___33404 = G__33405;
continue;
} else {
}
break;
}

var G__33402 = args33400.length;
switch (G__33402) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33400.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__6142__auto__ = separator;
if(cljs.core.truth_(and__6142__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__6142__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__6154__auto__ = fmt;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33409 = arguments.length;
var i__7230__auto___33410 = (0);
while(true){
if((i__7230__auto___33410 < len__7229__auto___33409)){
args__7236__auto__.push((arguments[i__7230__auto___33410]));

var G__33411 = (i__7230__auto___33410 + (1));
i__7230__auto___33410 = G__33411;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first.call(null,seq33407);
var seq33407__$1 = cljs.core.next.call(null,seq33407);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__33408,seq33407__$1);
});

/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__33412__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__33412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33413__i = 0, G__33413__a = new Array(arguments.length -  0);
while (G__33413__i < G__33413__a.length) {G__33413__a[G__33413__i] = arguments[G__33413__i + 0]; ++G__33413__i;}
  args = new cljs.core.IndexedSeq(G__33413__a,0);
} 
return G__33412__delegate.call(this,args);};
G__33412.cljs$lang$maxFixedArity = 0;
G__33412.cljs$lang$applyTo = (function (arglist__33414){
var args = cljs.core.seq(arglist__33414);
return G__33412__delegate(args);
});
G__33412.cljs$core$IFn$_invoke$arity$variadic = G__33412__delegate;
return G__33412;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args33415 = [];
var len__7229__auto___33418 = arguments.length;
var i__7230__auto___33419 = (0);
while(true){
if((i__7230__auto___33419 < len__7229__auto___33418)){
args33415.push((arguments[i__7230__auto___33419]));

var G__33420 = (i__7230__auto___33419 + (1));
i__7230__auto___33419 = G__33420;
continue;
} else {
}
break;
}

var G__33417 = args33415.length;
switch (G__33417) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33415.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty string.
 */
taoensso.encore._QMARK_substr_LT_idx = (function taoensso$encore$_QMARK_substr_LT_idx(var_args){
var args33422 = [];
var len__7229__auto___33425 = arguments.length;
var i__7230__auto___33426 = (0);
while(true){
if((i__7230__auto___33426 < len__7229__auto___33425)){
args33422.push((arguments[i__7230__auto___33426]));

var G__33427 = (i__7230__auto___33426 + (1));
i__7230__auto___33426 = G__33427;
continue;
} else {
}
break;
}

var G__33424 = args33422.length;
switch (G__33424) {
case 2:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33422.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substring(start));
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return null;
} else {
return s.substring(start,end);
}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?substr<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore._QMARK_substr_LT_len = (function taoensso$encore$_QMARK_substr_LT_len(var_args){
var args33429 = [];
var len__7229__auto___33432 = arguments.length;
var i__7230__auto___33433 = (0);
while(true){
if((i__7230__auto___33433 < len__7229__auto___33432)){
args33429.push((arguments[i__7230__auto___33433]));

var G__33434 = (i__7230__auto___33433 + (1));
i__7230__auto___33433 = G__33434;
continue;
} else {
}
break;
}

var G__33431 = args33429.length;
switch (G__33431) {
case 2:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33429.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore._QMARK_substr_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__6154__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33439 = arguments.length;
var i__7230__auto___33440 = (0);
while(true){
if((i__7230__auto___33440 < len__7229__auto___33439)){
args__7236__auto__.push((arguments[i__7230__auto___33440]));

var G__33441 = (i__7230__auto___33440 + (1));
i__7230__auto___33440 = G__33441;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq33438){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33438));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args33442 = [];
var len__7229__auto___33445 = arguments.length;
var i__7230__auto___33446 = (0);
while(true){
if((i__7230__auto___33446 < len__7229__auto___33445)){
args33442.push((arguments[i__7230__auto___33446]));

var G__33447 = (i__7230__auto___33446 + (1));
i__7230__auto___33446 = G__33447;
continue;
} else {
}
break;
}

var G__33444 = args33442.length;
switch (G__33444) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33442.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore._QMARK_substr_LT_len.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Like `core/memoize` but avoids write races, supports invalidation
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33453__delegate = function (xs){
var get_sentinel = {};
var x1 = cljs.core.first.call(null,xs);
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__33453 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33454__i = 0, G__33454__a = new Array(arguments.length -  0);
while (G__33454__i < G__33454__a.length) {G__33454__a[G__33454__i] = arguments[G__33454__i + 0]; ++G__33454__i;}
  xs = new cljs.core.IndexedSeq(G__33454__a,0);
} 
return G__33453__delegate.call(this,xs);};
G__33453.cljs$lang$maxFixedArity = 0;
G__33453.cljs$lang$applyTo = (function (arglist__33455){
var xs = cljs.core.seq(arglist__33455);
return G__33453__delegate(xs);
});
G__33453.cljs$core$IFn$_invoke$arity$variadic = G__33453__delegate;
return G__33453;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33456__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__6154__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__6154__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__6154__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__6154__auto__,cache_))
,null))], true, false);
}
});})(or__6154__auto__,cache_))
),args);
}
})());
};
var G__33456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33457__i = 0, G__33457__a = new Array(arguments.length -  0);
while (G__33457__i < G__33457__a.length) {G__33457__a[G__33457__i] = arguments[G__33457__i + 0]; ++G__33457__i;}
  args = new cljs.core.IndexedSeq(G__33457__a,0);
} 
return G__33456__delegate.call(this,args);};
G__33456.cljs$lang$maxFixedArity = 0;
G__33456.cljs$lang$applyTo = (function (arglist__33458){
var args = cljs.core.seq(arglist__33458);
return G__33456__delegate(args);
});
G__33456.cljs$core$IFn$_invoke$arity$variadic = G__33456__delegate;
return G__33456;
})()
;
;})(cache_))
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Like `core/memoize` but:
 *  * Often faster, depends on opts
 *  * Prevents race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` opt
 *  * Supports cache size limit & gc with `cache-size` opt
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args33459 = [];
var len__7229__auto___33496 = arguments.length;
var i__7230__auto___33497 = (0);
while(true){
if((i__7230__auto___33497 < len__7229__auto___33496)){
args33459.push((arguments[i__7230__auto___33497]));

var G__33498 = (i__7230__auto___33497 + (1));
i__7230__auto___33497 = G__33498;
continue;
} else {
}
break;
}

var G__33461 = args33459.length;
switch (G__33461) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33459.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_33500 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33462){if((e33462 instanceof Error)){
var e = e33462;
return e;
} else {
throw e33462;

}
}})();
if((e_33500 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_33500,null);
}

var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6142__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__6142__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6142__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__6142__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__6142__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__33463){
var vec__33464 = p__33463;
var dv = cljs.core.nth.call(null,vec__33464,(0),null);
var udt = cljs.core.nth.call(null,vec__33464,(1),null);
var cv = vec__33464;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__33501__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var instant = taoensso.encore.now_udt.call(null);
var vec__33467 = taoensso.encore._swap_cache_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6142__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6142__auto__)){
var and__6142__auto____$1 = !(fresh_QMARK_);
if(and__6142__auto____$1){
var vec__33473 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33473,(0),null);
var udt = cljs.core.nth.call(null,vec__33473,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__33467,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__33501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33502__i = 0, G__33502__a = new Array(arguments.length -  0);
while (G__33502__i < G__33502__a.length) {G__33502__a[G__33502__i] = arguments[G__33502__i + 0]; ++G__33502__i;}
  args = new cljs.core.IndexedSeq(G__33502__a,0);
} 
return G__33501__delegate.call(this,args);};
G__33501.cljs$lang$maxFixedArity = 0;
G__33501.cljs$lang$applyTo = (function (arglist__33503){
var args = cljs.core.seq(arglist__33503);
return G__33501__delegate(args);
});
G__33501.cljs$core$IFn$_invoke$arity$variadic = G__33501__delegate;
return G__33501;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__6154__auto__ = (x == null);
if(or__6154__auto__){
return or__6154__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_33504 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33476){if((e33476 instanceof Error)){
var e = e33476;
return e;
} else {
throw e33476;

}
}})();
if((e_33504 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_33504,null);
}

var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__6154__auto__ = ttl_ms;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6142__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__6142__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6142__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__6142__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__6142__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_33505 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_33506 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_33505,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__33477){
var vec__33478 = p__33477;
var dv = cljs.core.nth.call(null,vec__33478,(0),null);
var udt = cljs.core.nth.call(null,vec__33478,(1),null);
var _ = cljs.core.nth.call(null,vec__33478,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33478,(3),null);
var cv = vec__33478;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_33505,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_33505));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_33505,ks_to_gc_33506,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_33505,ks_to_gc_33506,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_33505,ks_to_gc_33506,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33506));
});})(snapshot_33505,ks_to_gc_33506,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_33507 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_33508 = (cljs.core.count.call(null,snapshot_33507) - cache_size__$1);
if((n_to_gc_33508 > (64))){
var ks_to_gc_33509 = taoensso.encore.top.call(null,n_to_gc_33508,((function (snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__33481 = snapshot_33507.call(null,k);
var _ = cljs.core.nth.call(null,vec__33481,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33481,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33481,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33481,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_33507));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_33509,snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_33509,snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_33509,snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33509));
});})(ks_to_gc_33509,snapshot_33507,n_to_gc_33508,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((ttl_ms_QMARK_)?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6142__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6142__auto__)){
var and__6142__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6142__auto____$1){
var vec__33487 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33487,(0),null);
var udt = cljs.core.nth.call(null,vec__33487,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6142__auto____$1;
}
} else {
return and__6142__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6142__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6142__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__6142__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__33510__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__33490 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__33490,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__33490,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__33493 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__33493,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__33493,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33493,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33493,(3),null);
var cv = vec__33493;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null));
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__33490,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);
}
};
var G__33510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33511__i = 0, G__33511__a = new Array(arguments.length -  0);
while (G__33511__i < G__33511__a.length) {G__33511__a[G__33511__i] = arguments[G__33511__i + 0]; ++G__33511__i;}
  args = new cljs.core.IndexedSeq(G__33511__a,0);
} 
return G__33510__delegate.call(this,args);};
G__33510.cljs$lang$maxFixedArity = 0;
G__33510.cljs$lang$applyTo = (function (arglist__33512){
var args = cljs.core.seq(arglist__33512);
return G__33510__delegate(args);
});
G__33510.cljs$core$IFn$_invoke$arity$variadic = G__33510__delegate;
return G__33510;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__33600){
var vec__33601 = p__33600;
var _ = cljs.core.nth.call(null,vec__33601,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33601,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__33601,(2),null);
var spec = vec__33601;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__33604){
var vec__33605 = p__33604;
var _ = cljs.core.nth.call(null,vec__33605,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33605,(1),null);
var id = cljs.core.nth.call(null,vec__33605,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__33608){
var vec__33648 = p__33608;
var _QMARK_a1 = cljs.core.nth.call(null,vec__33648,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__33648,(1),null);
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914))){
return vstates_;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172))){
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = ((peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__6142__auto__ = req_id;
if(cljs.core.truth_(and__6142__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__6142__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__33655){
var vec__33656 = p__33655;
var ___$1 = cljs.core.nth.call(null,vec__33656,(0),null);
var udt = cljs.core.nth.call(null,vec__33656,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__33656,(2),null);
var x__6485__auto__ = acc;
var y__6486__auto__ = udt;
return ((x__6485__auto__ > y__6486__auto__) ? x__6485__auto__ : y__6486__auto__);
});})(peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.truth_(_QMARK_vstate)){
var vec__33659 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__33662 = in_vspecs;
var seq__33663 = cljs.core.seq.call(null,vec__33662);
var first__33664 = cljs.core.first.call(null,seq__33663);
var seq__33663__$1 = cljs.core.next.call(null,seq__33663);
var vec__33665 = first__33664;
var ncalls_limit = cljs.core.nth.call(null,vec__33665,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33665,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__33665,(2),null);
var next_in_vspecs = seq__33663__$1;
var vec__33668 = in_vstate;
var seq__33669 = cljs.core.seq.call(null,vec__33668);
var first__33670 = cljs.core.first.call(null,seq__33669);
var seq__33669__$1 = cljs.core.next.call(null,seq__33669);
var vec__33671 = first__33670;
var ncalls = cljs.core.nth.call(null,vec__33671,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33671,(1),null);
var next_in_vstate = seq__33669__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((rate_limited_QMARK_)?(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__6154__auto__ = (_QMARK_worst_limit_offence == null);
if(or__6154__auto__){
return or__6154__auto__;
} else {
var vec__33677 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__33677,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33677,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})():_QMARK_worst_limit_offence);
if(next_in_vspecs){
var G__33687 = next_in_vspecs;
var G__33688 = next_in_vstate;
var G__33689 = new_out_vstate;
var G__33690 = new__QMARK_worst_limit_offence;
in_vspecs = G__33687;
in_vstate = G__33688;
out_vstate = G__33689;
_QMARK_worst_limit_offence = G__33690;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__33659,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__33659,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((peek_QMARK_)?_QMARK_vstate:((all_limits_pass_QMARK_)?cljs.core.mapv.call(null,((function (vec__33659,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__33680){
var vec__33681 = p__33680;
var ncalls = cljs.core.nth.call(null,vec__33681,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33681,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__33659,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets):vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__33684 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__33684,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33684,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
} else {
if(peek_QMARK_){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
}
});})(peek_QMARK_,req_id,instant,vec__33648,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__33608 = null;
if (arguments.length > 0) {
var G__33691__i = 0, G__33691__a = new Array(arguments.length -  0);
while (G__33691__i < G__33691__a.length) {G__33691__a[G__33691__i] = arguments[G__33691__i + 0]; ++G__33691__i;}
  p__33608 = new cljs.core.IndexedSeq(G__33691__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__33608);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__33692){
var p__33608 = cljs.core.seq(arglist__33692);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__33608);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__33693__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__33693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33694__i = 0, G__33694__a = new Array(arguments.length -  0);
while (G__33694__i < G__33694__a.length) {G__33694__a[G__33694__i] = arguments[G__33694__i + 0]; ++G__33694__i;}
  args = new cljs.core.IndexedSeq(G__33694__a,0);
} 
return G__33693__delegate.call(this,args);};
G__33693.cljs$lang$maxFixedArity = 0;
G__33693.cljs$lang$applyTo = (function (arglist__33695){
var args = cljs.core.seq(arglist__33695);
return G__33693__delegate(args);
});
G__33693.cljs$core$IFn$_invoke$arity$variadic = G__33693__delegate;
return G__33693;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__6154__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
var or__6154__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__6154__auto____$1)){
return or__6154__auto____$1;
} else {
var or__6154__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__6154__auto____$2)){
return or__6154__auto____$2;
} else {
var or__6154__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__6154__auto____$3)){
return or__6154__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__6142__auto__ = typeof console !== 'undefined';
if(and__6142__auto__){
return console.log;
} else {
return and__6142__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33703 = arguments.length;
var i__7230__auto___33704 = (0);
while(true){
if((i__7230__auto___33704 < len__7229__auto___33703)){
args__7236__auto__.push((arguments[i__7230__auto___33704]));

var G__33705 = (i__7230__auto___33704 + (1));
i__7230__auto___33704 = G__33705;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq33696){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33696));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33706 = arguments.length;
var i__7230__auto___33707 = (0);
while(true){
if((i__7230__auto___33707 < len__7229__auto___33706)){
args__7236__auto__.push((arguments[i__7230__auto___33707]));

var G__33708 = (i__7230__auto___33707 + (1));
i__7230__auto___33707 = G__33708;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq33697){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33697));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33709 = arguments.length;
var i__7230__auto___33710 = (0);
while(true){
if((i__7230__auto___33710 < len__7229__auto___33709)){
args__7236__auto__.push((arguments[i__7230__auto___33710]));

var G__33711 = (i__7230__auto___33710 + (1));
i__7230__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq33698){
var G__33699 = cljs.core.first.call(null,seq33698);
var seq33698__$1 = cljs.core.next.call(null,seq33698);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__33699,seq33698__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33712 = arguments.length;
var i__7230__auto___33713 = (0);
while(true){
if((i__7230__auto___33713 < len__7229__auto___33712)){
args__7236__auto__.push((arguments[i__7230__auto___33713]));

var G__33714 = (i__7230__auto___33713 + (1));
i__7230__auto___33713 = G__33714;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((0) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7237__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq33700){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33700));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33715 = arguments.length;
var i__7230__auto___33716 = (0);
while(true){
if((i__7230__auto___33716 < len__7229__auto___33715)){
args__7236__auto__.push((arguments[i__7230__auto___33716]));

var G__33717 = (i__7230__auto___33716 + (1));
i__7230__auto___33716 = G__33717;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq33701){
var G__33702 = cljs.core.first.call(null,seq33701);
var seq33701__$1 = cljs.core.next.call(null,seq33701);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__33702,seq33701__$1);
});

/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
var temp__4657__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__4657__auto____$1)){
var loc = temp__4657__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((cljs.core.truth_((function (x){
var or__6154__auto__ = (x == null);
if(or__6154__auto__){
return or__6154__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
}).call(null,params))?true:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.seq.call(null,params))?(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})():null);
var G__33719 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33719) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__33723,callback){
var map__33743 = p__33723;
var map__33743__$1 = ((((!((map__33743 == null)))?((((map__33743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33743):map__33743);
var opts = map__33743__$1;
var method = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((cljs.core.truth_(((function (map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (x){
var or__6154__auto__ = (x == null);
if(or__6154__auto__){
return or__6154__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,timeout_ms))?true:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? nat-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__6154__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__33749 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33749) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__33746 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__33746,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__33746,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,(cljs.core.truth_(post_content_STAR_)?cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8"):headers__$1));
var G__33750_33763 = xhr;
goog.events.listenOnce(G__33750_33763,goog.net.EventType.READY,((function (G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__33750_33763,goog.net.EventType.COMPLETE,((function (G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?(function (){var pred__33756 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__33722_SHARP_,p2__33721_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__33721_SHARP_,p1__33722_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__33757 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__33756.call(null,"/edn",expr__33757))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__33756.call(null,"/json",expr__33757))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__33756.call(null,"/xml",expr__33757))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__33756.call(null,"/html",expr__33757))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})():resp_type);
try{var G__33760 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__33760) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e33759){if((e33759 instanceof Error)){
var e = e33759;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e33759;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__6154__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__33750_33763,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___33765 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___33765)){
var pf_33766 = temp__4657__auto___33765;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_33766,temp__4657__auto___33765,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6142__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6142__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__6142__auto__;
}
})())?(loaded / total):null);
return pf_33766.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_33766,temp__4657__auto___33765,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33746,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33743,map__33743__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__33761_33767 = xhr;
var temp__4657__auto___33768 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___33768)){
var x_33769 = temp__4657__auto___33768;
G__33761_33767.setTimeoutInterval((function (){var or__6154__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___33770 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___33770)){
var x_33771 = temp__4657__auto___33770;
G__33761_33767.setWithCredentials(true);
} else {
}

var temp__4657__auto___33772 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___33772)){
var x_33773 = temp__4657__auto___33772;
G__33761_33767.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e33745){if((e33745 instanceof Error)){
var e = e33745;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e33745;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33780 = arguments.length;
var i__7230__auto___33781 = (0);
while(true){
if((i__7230__auto___33781 < len__7229__auto___33780)){
args__7236__auto__.push((arguments[i__7230__auto___33781]));

var G__33782 = (i__7230__auto___33781 + (1));
i__7230__auto___33781 = G__33782;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33776){
var vec__33777 = p__33776;
var encoding = cljs.core.nth.call(null,vec__33777,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq33774){
var G__33775 = cljs.core.first.call(null,seq33774);
var seq33774__$1 = cljs.core.next.call(null,seq33774);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__33775,seq33774__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__6154__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__6934__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__33799(s__33800){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__33800__$1 = s__33800;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33800__$1);
if(temp__4657__auto__){
var s__33800__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33800__$2)){
var c__6932__auto__ = cljs.core.chunk_first.call(null,s__33800__$2);
var size__6933__auto__ = cljs.core.count.call(null,c__6932__auto__);
var b__33802 = cljs.core.chunk_buffer.call(null,size__6933__auto__);
if((function (){var i__33801 = (0);
while(true){
if((i__33801 < size__6933__auto__)){
var vec__33809 = cljs.core._nth.call(null,c__6932__auto__,i__33801);
var k = cljs.core.nth.call(null,vec__33809,(0),null);
var v = cljs.core.nth.call(null,vec__33809,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__33802,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6154__auto__ = cljs.core.seq.call(null,v);
if(or__6154__auto__){
return or__6154__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__33815 = (i__33801 + (1));
i__33801 = G__33815;
continue;
} else {
var G__33816 = (i__33801 + (1));
i__33801 = G__33816;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33802),taoensso$encore$format_query_string_$_iter__33799.call(null,cljs.core.chunk_rest.call(null,s__33800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33802),null);
}
} else {
var vec__33812 = cljs.core.first.call(null,s__33800__$2);
var k = cljs.core.nth.call(null,vec__33812,(0),null);
var v = cljs.core.nth.call(null,vec__33812,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6154__auto__ = cljs.core.seq.call(null,v);
if(or__6154__auto__){
return or__6154__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__33799.call(null,cljs.core.rest.call(null,s__33800__$2)));
} else {
var G__33817 = cljs.core.rest.call(null,s__33800__$2);
s__33800__$1 = G__33817;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__6934__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33828 = arguments.length;
var i__7230__auto___33829 = (0);
while(true){
if((i__7230__auto___33829 < len__7229__auto___33828)){
args__7236__auto__.push((arguments[i__7230__auto___33829]));

var G__33830 = (i__7230__auto___33829 + (1));
i__7230__auto___33829 = G__33830;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33820){
var vec__33821 = p__33820;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__33821,(0),null);
var encoding = cljs.core.nth.call(null,vec__33821,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
var m = cljs.core.reduce.call(null,((function (s__$1,vec__33821,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__33824 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__33824,(0),null);
var v = cljs.core.nth.call(null,vec__33824,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__33821,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33827){if((e33827 instanceof Error)){
var e = e33827;
return e;
} else {
throw e33827;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",_PERCENT_,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq33818){
var G__33819 = cljs.core.first.call(null,seq33818);
var seq33818__$1 = cljs.core.next.call(null,seq33818);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__33819,seq33818__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__33834 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__33834,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__33834,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__33837__delegate = function (args){
throw cljs.core.ex_info.call(null,[cljs.core.str("No stubfn implementation for: "),cljs.core.str(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sfn-name","sfn-name",-968697222),sfn_name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__33837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33838__i = 0, G__33838__a = new Array(arguments.length -  0);
while (G__33838__i < G__33838__a.length) {G__33838__a[G__33838__i] = arguments[G__33838__i + 0]; ++G__33838__i;}
  args = new cljs.core.IndexedSeq(G__33838__a,0);
} 
return G__33837__delegate.call(this,args);};
G__33837.cljs$lang$maxFixedArity = 0;
G__33837.cljs$lang$applyTo = (function (arglist__33839){
var args = cljs.core.seq(arglist__33839);
return G__33837__delegate(args);
});
G__33837.cljs$core$IFn$_invoke$arity$variadic = G__33837__delegate;
return G__33837;
})()
);
});
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__33841){
var map__33844 = p__33841;
var map__33844__$1 = ((((!((map__33844 == null)))?((((map__33844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33844):map__33844);
var before = cljs.core.get.call(null,map__33844__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__33844__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__6988__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__33840__auto__","f__33840__auto__",-1655669993,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})(),(function (){var x__6988__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__6988__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})(),(function (){var x__6988__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__33840__auto__","f__33840__auto__",-1655669993,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})(),(function (){var x__6988__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__6988__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6988__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;

taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33948 = arguments.length;
var i__7230__auto___33949 = (0);
while(true){
if((i__7230__auto___33949 < len__7229__auto___33948)){
args__7236__auto__.push((arguments[i__7230__auto___33949]));

var G__33950 = (i__7230__auto___33949 + (1));
i__7230__auto___33949 = G__33950;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__33852){
var vec__33853 = p__33852;
var type = cljs.core.nth.call(null,vec__33853,(0),null);
var nplaces = cljs.core.nth.call(null,vec__33853,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__6154__auto__ = type;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq33850){
var G__33851 = cljs.core.first.call(null,seq33850);
var seq33850__$1 = cljs.core.next.call(null,seq33850);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__33851,seq33850__$1);
});


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33951 = arguments.length;
var i__7230__auto___33952 = (0);
while(true){
if((i__7230__auto___33952 < len__7229__auto___33951)){
args__7236__auto__.push((arguments[i__7230__auto___33952]));

var G__33953 = (i__7230__auto___33952 + (1));
i__7230__auto___33952 = G__33953;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq33856){
var G__33857 = cljs.core.first.call(null,seq33856);
var seq33856__$1 = cljs.core.next.call(null,seq33856);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__33857,seq33856__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__33954__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__33954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33955__i = 0, G__33955__a = new Array(arguments.length -  0);
while (G__33955__i < G__33955__a.length) {G__33955__a[G__33955__i] = arguments[G__33955__i + 0]; ++G__33955__i;}
  args = new cljs.core.IndexedSeq(G__33955__a,0);
} 
return G__33954__delegate.call(this,args);};
G__33954.cljs$lang$maxFixedArity = 0;
G__33954.cljs$lang$applyTo = (function (arglist__33956){
var args = cljs.core.seq(arglist__33956);
return G__33954__delegate(args);
});
G__33954.cljs$core$IFn$_invoke$arity$variadic = G__33954__delegate;
return G__33954;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33957 = arguments.length;
var i__7230__auto___33958 = (0);
while(true){
if((i__7230__auto___33958 < len__7229__auto___33957)){
args__7236__auto__.push((arguments[i__7230__auto___33958]));

var G__33959 = (i__7230__auto___33958 + (1));
i__7230__auto___33958 = G__33959;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__33860){
var vec__33861 = p__33860;
var nattempt = cljs.core.nth.call(null,vec__33861,(0),null);
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__6154__auto__ = nattempt;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq33858){
var G__33859 = cljs.core.first.call(null,seq33858);
var seq33858__$1 = cljs.core.next.call(null,seq33858);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33859,seq33858__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33960 = arguments.length;
var i__7230__auto___33961 = (0);
while(true){
if((i__7230__auto___33961 < len__7229__auto___33960)){
args__7236__auto__.push((arguments[i__7230__auto___33961]));

var G__33962 = (i__7230__auto___33961 + (1));
i__7230__auto___33961 = G__33962;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq33864){
var G__33865 = cljs.core.first.call(null,seq33864);
var seq33864__$1 = cljs.core.next.call(null,seq33864);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__33865,seq33864__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33963 = arguments.length;
var i__7230__auto___33964 = (0);
while(true){
if((i__7230__auto___33964 < len__7229__auto___33963)){
args__7236__auto__.push((arguments[i__7230__auto___33964]));

var G__33965 = (i__7230__auto___33964 + (1));
i__7230__auto___33964 = G__33965;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq33866){
var G__33867 = cljs.core.first.call(null,seq33866);
var seq33866__$1 = cljs.core.next.call(null,seq33866);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__33867,seq33866__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33966 = arguments.length;
var i__7230__auto___33967 = (0);
while(true){
if((i__7230__auto___33967 < len__7229__auto___33966)){
args__7236__auto__.push((arguments[i__7230__auto___33967]));

var G__33968 = (i__7230__auto___33967 + (1));
i__7230__auto___33967 = G__33968;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq33868){
var G__33869 = cljs.core.first.call(null,seq33868);
var seq33868__$1 = cljs.core.next.call(null,seq33868);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__33869,seq33868__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33969 = arguments.length;
var i__7230__auto___33970 = (0);
while(true){
if((i__7230__auto___33970 < len__7229__auto___33969)){
args__7236__auto__.push((arguments[i__7230__auto___33970]));

var G__33971 = (i__7230__auto___33970 + (1));
i__7230__auto___33970 = G__33971;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq33870){
var G__33871 = cljs.core.first.call(null,seq33870);
var seq33870__$1 = cljs.core.next.call(null,seq33870);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__33871,seq33870__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33972 = arguments.length;
var i__7230__auto___33973 = (0);
while(true){
if((i__7230__auto___33973 < len__7229__auto___33972)){
args__7236__auto__.push((arguments[i__7230__auto___33973]));

var G__33974 = (i__7230__auto___33973 + (1));
i__7230__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq33872){
var G__33873 = cljs.core.first.call(null,seq33872);
var seq33872__$1 = cljs.core.next.call(null,seq33872);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__33873,seq33872__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33975 = arguments.length;
var i__7230__auto___33976 = (0);
while(true){
if((i__7230__auto___33976 < len__7229__auto___33975)){
args__7236__auto__.push((arguments[i__7230__auto___33976]));

var G__33977 = (i__7230__auto___33976 + (1));
i__7230__auto___33976 = G__33977;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq33874){
var G__33875 = cljs.core.first.call(null,seq33874);
var seq33874__$1 = cljs.core.next.call(null,seq33874);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__33875,seq33874__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33978 = arguments.length;
var i__7230__auto___33979 = (0);
while(true){
if((i__7230__auto___33979 < len__7229__auto___33978)){
args__7236__auto__.push((arguments[i__7230__auto___33979]));

var G__33980 = (i__7230__auto___33979 + (1));
i__7230__auto___33979 = G__33980;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq33876){
var G__33877 = cljs.core.first.call(null,seq33876);
var seq33876__$1 = cljs.core.next.call(null,seq33876);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__33877,seq33876__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33981 = arguments.length;
var i__7230__auto___33982 = (0);
while(true){
if((i__7230__auto___33982 < len__7229__auto___33981)){
args__7236__auto__.push((arguments[i__7230__auto___33982]));

var G__33983 = (i__7230__auto___33982 + (1));
i__7230__auto___33982 = G__33983;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33880){
var vec__33881 = p__33880;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33881,(0),null);
var comparator = (function (){var or__6154__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33881,_QMARK_comparator){
return (function (p1__33846_SHARP_,p2__33847_SHARP_){
if((comparator.call(null,p1__33846_SHARP_,p2__33847_SHARP_) > (0))){
return p2__33847_SHARP_;
} else {
return p1__33846_SHARP_;
}
});})(comparator,vec__33881,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq33878){
var G__33879 = cljs.core.first.call(null,seq33878);
var seq33878__$1 = cljs.core.next.call(null,seq33878);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__33879,seq33878__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33984 = arguments.length;
var i__7230__auto___33985 = (0);
while(true){
if((i__7230__auto___33985 < len__7229__auto___33984)){
args__7236__auto__.push((arguments[i__7230__auto___33985]));

var G__33986 = (i__7230__auto___33985 + (1));
i__7230__auto___33985 = G__33986;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33886){
var vec__33887 = p__33886;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33887,(0),null);
var comparator = (function (){var or__6154__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33887,_QMARK_comparator){
return (function (p1__33848_SHARP_,p2__33849_SHARP_){
if((comparator.call(null,p1__33848_SHARP_,p2__33849_SHARP_) < (0))){
return p2__33849_SHARP_;
} else {
return p1__33848_SHARP_;
}
});})(comparator,vec__33887,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq33884){
var G__33885 = cljs.core.first.call(null,seq33884);
var seq33884__$1 = cljs.core.next.call(null,seq33884);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__33885,seq33884__$1);
});



/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6154__auto__ = x;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33902,seen__$1){
while(true){
var vec__33903 = p__33902;
var v = cljs.core.nth.call(null,vec__33903,(0),null);
var xs__$1 = vec__33903;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__33987 = cljs.core.rest.call(null,s);
var G__33988 = seen__$1;
p__33902 = G__33987;
seen__$1 = G__33988;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args33906 = [];
var len__7229__auto___33989 = arguments.length;
var i__7230__auto___33990 = (0);
while(true){
if((i__7230__auto___33990 < len__7229__auto___33989)){
args33906.push((arguments[i__7230__auto___33990]));

var G__33991 = (i__7230__auto___33990 + (1));
i__7230__auto___33990 = G__33991;
continue;
} else {
}
break;
}

var G__33908 = args33906.length;
switch (G__33908) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33906.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__33909,in$){
var vec__33910 = p__33909;
var v = cljs.core.nth.call(null,vec__33910,(0),null);
var seen = cljs.core.nth.call(null,vec__33910,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33993 = arguments.length;
var i__7230__auto___33994 = (0);
while(true){
if((i__7230__auto___33994 < len__7229__auto___33993)){
args__7236__auto__.push((arguments[i__7230__auto___33994]));

var G__33995 = (i__7230__auto___33994 + (1));
i__7230__auto___33994 = G__33995;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__33915){
var vec__33916 = p__33915;
var kf = cljs.core.nth.call(null,vec__33916,(0),null);
var vf = cljs.core.nth.call(null,vec__33916,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__33916,kf,vf){
return (function (_,v){
return v;
});})(vec__33916,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__33916,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__33916,kf,vf))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__33916,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__33916,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__33916,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__33916,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq33913){
var G__33914 = cljs.core.first.call(null,seq33913);
var seq33913__$1 = cljs.core.next.call(null,seq33913);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__33914,seq33913__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33996 = arguments.length;
var i__7230__auto___33997 = (0);
while(true){
if((i__7230__auto___33997 < len__7229__auto___33996)){
args__7236__auto__.push((arguments[i__7230__auto___33997]));

var G__33998 = (i__7230__auto___33997 + (1));
i__7230__auto___33997 = G__33998;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((2) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7237__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_cache_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq33919){
var G__33920 = cljs.core.first.call(null,seq33919);
var seq33919__$1 = cljs.core.next.call(null,seq33919);
var G__33921 = cljs.core.first.call(null,seq33919__$1);
var seq33919__$2 = cljs.core.next.call(null,seq33919__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__33920,G__33921,seq33919__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6492__auto__ = signed_idx;
var y__6493__auto__ = max_idx;
return ((x__6492__auto__ < y__6493__auto__) ? x__6492__auto__ : y__6493__auto__);
} else {
var x__6485__auto__ = (0);
var y__6486__auto__ = (signed_idx + max_idx);
return ((x__6485__auto__ > y__6486__auto__) ? x__6485__auto__ : y__6486__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7236__auto__ = [];
var len__7229__auto___33999 = arguments.length;
var i__7230__auto___34000 = (0);
while(true){
if((i__7230__auto___34000 < len__7229__auto___33999)){
args__7236__auto__.push((arguments[i__7230__auto___34000]));

var G__34001 = (i__7230__auto___34000 + (1));
i__7230__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((2) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7237__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__33925){
var map__33926 = p__33925;
var map__33926__$1 = ((((!((map__33926 == null)))?((((map__33926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33926):map__33926);
var max_len = cljs.core.get.call(null,map__33926__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__33926__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__22109__auto__ = (start_idx_STAR_ + max_len);
var n2__22110__auto__ = xlen;
if((n1__22109__auto__ > n2__22110__auto__)){
return n2__22110__auto__;
} else {
return n1__22109__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq33922){
var G__33923 = cljs.core.first.call(null,seq33922);
var seq33922__$1 = cljs.core.next.call(null,seq33922);
var G__33924 = cljs.core.first.call(null,seq33922__$1);
var seq33922__$2 = cljs.core.next.call(null,seq33922__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__33923,G__33924,seq33922__$2);
});


/**
 * Deprecated, prefer `?substr<idx` or `?substr<len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7236__auto__ = [];
var len__7229__auto___34002 = arguments.length;
var i__7230__auto___34003 = (0);
while(true){
if((i__7230__auto___34003 < len__7229__auto___34002)){
args__7236__auto__.push((arguments[i__7230__auto___34003]));

var G__34004 = (i__7230__auto___34003 + (1));
i__7230__auto___34003 = G__34004;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((2) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7237__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__33931){
var vec__33932 = p__33931;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33932,(0),null);
var vec__33935 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33935,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33935,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq33928){
var G__33929 = cljs.core.first.call(null,seq33928);
var seq33928__$1 = cljs.core.next.call(null,seq33928);
var G__33930 = cljs.core.first.call(null,seq33928__$1);
var seq33928__$2 = cljs.core.next.call(null,seq33928__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__33929,G__33930,seq33928__$2);
});



/**
 * Deprecated, prefer `?subvec<idx` or `?subvec<len`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7236__auto__ = [];
var len__7229__auto___34005 = arguments.length;
var i__7230__auto___34006 = (0);
while(true){
if((i__7230__auto___34006 < len__7229__auto___34005)){
args__7236__auto__.push((arguments[i__7230__auto___34006]));

var G__34007 = (i__7230__auto___34006 + (1));
i__7230__auto___34006 = G__34007;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((2) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7237__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__33941){
var vec__33942 = p__33941;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33942,(0),null);
var vec__33945 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33945,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33945,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq33938){
var G__33939 = cljs.core.first.call(null,seq33938);
var seq33938__$1 = cljs.core.next.call(null,seq33938);
var G__33940 = cljs.core.first.call(null,seq33938__$1);
var seq33938__$2 = cljs.core.next.call(null,seq33938__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33939,G__33940,seq33938__$2);
});


