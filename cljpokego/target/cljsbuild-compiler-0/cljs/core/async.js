// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34126 = [];
var len__7229__auto___34132 = arguments.length;
var i__7230__auto___34133 = (0);
while(true){
if((i__7230__auto___34133 < len__7229__auto___34132)){
args34126.push((arguments[i__7230__auto___34133]));

var G__34134 = (i__7230__auto___34133 + (1));
i__7230__auto___34133 = G__34134;
continue;
} else {
}
break;
}

var G__34128 = args34126.length;
switch (G__34128) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34126.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34129 = (function (f,blockable,meta34130){
this.f = f;
this.blockable = blockable;
this.meta34130 = meta34130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34131,meta34130__$1){
var self__ = this;
var _34131__$1 = this;
return (new cljs.core.async.t_cljs$core$async34129(self__.f,self__.blockable,meta34130__$1));
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34131){
var self__ = this;
var _34131__$1 = this;
return self__.meta34130;
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34130","meta34130",1933875867,null)], null);
});

cljs.core.async.t_cljs$core$async34129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34129";

cljs.core.async.t_cljs$core$async34129.cljs$lang$ctorPrWriter = (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async34129");
});

cljs.core.async.__GT_t_cljs$core$async34129 = (function cljs$core$async$__GT_t_cljs$core$async34129(f__$1,blockable__$1,meta34130){
return (new cljs.core.async.t_cljs$core$async34129(f__$1,blockable__$1,meta34130));
});

}

return (new cljs.core.async.t_cljs$core$async34129(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args34138 = [];
var len__7229__auto___34141 = arguments.length;
var i__7230__auto___34142 = (0);
while(true){
if((i__7230__auto___34142 < len__7229__auto___34141)){
args34138.push((arguments[i__7230__auto___34142]));

var G__34143 = (i__7230__auto___34142 + (1));
i__7230__auto___34142 = G__34143;
continue;
} else {
}
break;
}

var G__34140 = args34138.length;
switch (G__34140) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34138.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args34145 = [];
var len__7229__auto___34148 = arguments.length;
var i__7230__auto___34149 = (0);
while(true){
if((i__7230__auto___34149 < len__7229__auto___34148)){
args34145.push((arguments[i__7230__auto___34149]));

var G__34150 = (i__7230__auto___34149 + (1));
i__7230__auto___34149 = G__34150;
continue;
} else {
}
break;
}

var G__34147 = args34145.length;
switch (G__34147) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34145.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args34152 = [];
var len__7229__auto___34155 = arguments.length;
var i__7230__auto___34156 = (0);
while(true){
if((i__7230__auto___34156 < len__7229__auto___34155)){
args34152.push((arguments[i__7230__auto___34156]));

var G__34157 = (i__7230__auto___34156 + (1));
i__7230__auto___34156 = G__34157;
continue;
} else {
}
break;
}

var G__34154 = args34152.length;
switch (G__34154) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34152.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34159 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34159);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34159,ret){
return (function (){
return fn1.call(null,val_34159);
});})(val_34159,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args34160 = [];
var len__7229__auto___34163 = arguments.length;
var i__7230__auto___34164 = (0);
while(true){
if((i__7230__auto___34164 < len__7229__auto___34163)){
args34160.push((arguments[i__7230__auto___34164]));

var G__34165 = (i__7230__auto___34164 + (1));
i__7230__auto___34164 = G__34165;
continue;
} else {
}
break;
}

var G__34162 = args34160.length;
switch (G__34162) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34160.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7069__auto___34167 = n;
var x_34168 = (0);
while(true){
if((x_34168 < n__7069__auto___34167)){
(a[x_34168] = (0));

var G__34169 = (x_34168 + (1));
x_34168 = G__34169;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34170 = (i + (1));
i = G__34170;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34174 = (function (alt_flag,flag,meta34175){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34175 = meta34175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34176,meta34175__$1){
var self__ = this;
var _34176__$1 = this;
return (new cljs.core.async.t_cljs$core$async34174(self__.alt_flag,self__.flag,meta34175__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34176){
var self__ = this;
var _34176__$1 = this;
return self__.meta34175;
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34175","meta34175",715540951,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34174";

cljs.core.async.t_cljs$core$async34174.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async34174");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34174 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34174(alt_flag__$1,flag__$1,meta34175){
return (new cljs.core.async.t_cljs$core$async34174(alt_flag__$1,flag__$1,meta34175));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34174(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34180 = (function (alt_handler,flag,cb,meta34181){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34181 = meta34181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34182,meta34181__$1){
var self__ = this;
var _34182__$1 = this;
return (new cljs.core.async.t_cljs$core$async34180(self__.alt_handler,self__.flag,self__.cb,meta34181__$1));
});

cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34182){
var self__ = this;
var _34182__$1 = this;
return self__.meta34181;
});

cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34181","meta34181",-598106893,null)], null);
});

cljs.core.async.t_cljs$core$async34180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34180";

cljs.core.async.t_cljs$core$async34180.cljs$lang$ctorPrWriter = (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async34180");
});

cljs.core.async.__GT_t_cljs$core$async34180 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34180(alt_handler__$1,flag__$1,cb__$1,meta34181){
return (new cljs.core.async.t_cljs$core$async34180(alt_handler__$1,flag__$1,cb__$1,meta34181));
});

}

return (new cljs.core.async.t_cljs$core$async34180(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34183_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34184_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6154__auto__ = wport;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34185 = (i + (1));
i = G__34185;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6154__auto__ = ret;
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6142__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6142__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6142__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7236__auto__ = [];
var len__7229__auto___34191 = arguments.length;
var i__7230__auto___34192 = (0);
while(true){
if((i__7230__auto___34192 < len__7229__auto___34191)){
args__7236__auto__.push((arguments[i__7230__auto___34192]));

var G__34193 = (i__7230__auto___34192 + (1));
i__7230__auto___34192 = G__34193;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((1) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7237__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34188){
var map__34189 = p__34188;
var map__34189__$1 = ((((!((map__34189 == null)))?((((map__34189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34189):map__34189);
var opts = map__34189__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34186){
var G__34187 = cljs.core.first.call(null,seq34186);
var seq34186__$1 = cljs.core.next.call(null,seq34186);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34187,seq34186__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34194 = [];
var len__7229__auto___34244 = arguments.length;
var i__7230__auto___34245 = (0);
while(true){
if((i__7230__auto___34245 < len__7229__auto___34244)){
args34194.push((arguments[i__7230__auto___34245]));

var G__34246 = (i__7230__auto___34245 + (1));
i__7230__auto___34245 = G__34246;
continue;
} else {
}
break;
}

var G__34196 = args34194.length;
switch (G__34196) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34194.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10955__auto___34248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___34248){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___34248){
return (function (state_34220){
var state_val_34221 = (state_34220[(1)]);
if((state_val_34221 === (7))){
var inst_34216 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34222_34249 = state_34220__$1;
(statearr_34222_34249[(2)] = inst_34216);

(statearr_34222_34249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (1))){
var state_34220__$1 = state_34220;
var statearr_34223_34250 = state_34220__$1;
(statearr_34223_34250[(2)] = null);

(statearr_34223_34250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (4))){
var inst_34199 = (state_34220[(7)]);
var inst_34199__$1 = (state_34220[(2)]);
var inst_34200 = (inst_34199__$1 == null);
var state_34220__$1 = (function (){var statearr_34224 = state_34220;
(statearr_34224[(7)] = inst_34199__$1);

return statearr_34224;
})();
if(cljs.core.truth_(inst_34200)){
var statearr_34225_34251 = state_34220__$1;
(statearr_34225_34251[(1)] = (5));

} else {
var statearr_34226_34252 = state_34220__$1;
(statearr_34226_34252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (13))){
var state_34220__$1 = state_34220;
var statearr_34227_34253 = state_34220__$1;
(statearr_34227_34253[(2)] = null);

(statearr_34227_34253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (6))){
var inst_34199 = (state_34220[(7)]);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34220__$1,(11),to,inst_34199);
} else {
if((state_val_34221 === (3))){
var inst_34218 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34220__$1,inst_34218);
} else {
if((state_val_34221 === (12))){
var state_34220__$1 = state_34220;
var statearr_34228_34254 = state_34220__$1;
(statearr_34228_34254[(2)] = null);

(statearr_34228_34254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (2))){
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(4),from);
} else {
if((state_val_34221 === (11))){
var inst_34209 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34209)){
var statearr_34229_34255 = state_34220__$1;
(statearr_34229_34255[(1)] = (12));

} else {
var statearr_34230_34256 = state_34220__$1;
(statearr_34230_34256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (9))){
var state_34220__$1 = state_34220;
var statearr_34231_34257 = state_34220__$1;
(statearr_34231_34257[(2)] = null);

(statearr_34231_34257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (5))){
var state_34220__$1 = state_34220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34232_34258 = state_34220__$1;
(statearr_34232_34258[(1)] = (8));

} else {
var statearr_34233_34259 = state_34220__$1;
(statearr_34233_34259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (14))){
var inst_34214 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34234_34260 = state_34220__$1;
(statearr_34234_34260[(2)] = inst_34214);

(statearr_34234_34260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (10))){
var inst_34206 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34235_34261 = state_34220__$1;
(statearr_34235_34261[(2)] = inst_34206);

(statearr_34235_34261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (8))){
var inst_34203 = cljs.core.async.close_BANG_.call(null,to);
var state_34220__$1 = state_34220;
var statearr_34236_34262 = state_34220__$1;
(statearr_34236_34262[(2)] = inst_34203);

(statearr_34236_34262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___34248))
;
return ((function (switch__10890__auto__,c__10955__auto___34248){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_34220){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34241){if((e34241 instanceof Object)){
var ex__10894__auto__ = e34241;
var statearr_34242_34263 = state_34220;
(statearr_34242_34263[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34264 = state_34220;
state_34220 = G__34264;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_34220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_34220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___34248))
})();
var state__10957__auto__ = (function (){var statearr_34243 = f__10956__auto__.call(null);
(statearr_34243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34248);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___34248))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34452){
var vec__34453 = p__34452;
var v = cljs.core.nth.call(null,vec__34453,(0),null);
var p = cljs.core.nth.call(null,vec__34453,(1),null);
var job = vec__34453;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10955__auto___34639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results){
return (function (state_34460){
var state_val_34461 = (state_34460[(1)]);
if((state_val_34461 === (1))){
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34460__$1,(2),res,v);
} else {
if((state_val_34461 === (2))){
var inst_34457 = (state_34460[(2)]);
var inst_34458 = cljs.core.async.close_BANG_.call(null,res);
var state_34460__$1 = (function (){var statearr_34462 = state_34460;
(statearr_34462[(7)] = inst_34457);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34460__$1,inst_34458);
} else {
return null;
}
}
});})(c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results))
;
return ((function (switch__10890__auto__,c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_34466 = [null,null,null,null,null,null,null,null];
(statearr_34466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__);

(statearr_34466[(1)] = (1));

return statearr_34466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1 = (function (state_34460){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34467){if((e34467 instanceof Object)){
var ex__10894__auto__ = e34467;
var statearr_34468_34640 = state_34460;
(statearr_34468_34640[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34641 = state_34460;
state_34460 = G__34641;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = function(state_34460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1.call(this,state_34460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results))
})();
var state__10957__auto__ = (function (){var statearr_34469 = f__10956__auto__.call(null);
(statearr_34469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34639);

return statearr_34469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___34639,res,vec__34453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34470){
var vec__34471 = p__34470;
var v = cljs.core.nth.call(null,vec__34471,(0),null);
var p = cljs.core.nth.call(null,vec__34471,(1),null);
var job = vec__34471;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7069__auto___34642 = n;
var __34643 = (0);
while(true){
if((__34643 < n__7069__auto___34642)){
var G__34474_34644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34474_34644) {
case "compute":
var c__10955__auto___34646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34643,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (__34643,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (1))){
var state_34487__$1 = state_34487;
var statearr_34489_34647 = state_34487__$1;
(statearr_34489_34647[(2)] = null);

(statearr_34489_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (2))){
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34487__$1,(4),jobs);
} else {
if((state_val_34488 === (3))){
var inst_34485 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34487__$1,inst_34485);
} else {
if((state_val_34488 === (4))){
var inst_34477 = (state_34487[(2)]);
var inst_34478 = process.call(null,inst_34477);
var state_34487__$1 = state_34487;
if(cljs.core.truth_(inst_34478)){
var statearr_34490_34648 = state_34487__$1;
(statearr_34490_34648[(1)] = (5));

} else {
var statearr_34491_34649 = state_34487__$1;
(statearr_34491_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (5))){
var state_34487__$1 = state_34487;
var statearr_34492_34650 = state_34487__$1;
(statearr_34492_34650[(2)] = null);

(statearr_34492_34650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (6))){
var state_34487__$1 = state_34487;
var statearr_34493_34651 = state_34487__$1;
(statearr_34493_34651[(2)] = null);

(statearr_34493_34651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (7))){
var inst_34483 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34494_34652 = state_34487__$1;
(statearr_34494_34652[(2)] = inst_34483);

(statearr_34494_34652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34643,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
;
return ((function (__34643,switch__10890__auto__,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_34498 = [null,null,null,null,null,null,null];
(statearr_34498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__);

(statearr_34498[(1)] = (1));

return statearr_34498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1 = (function (state_34487){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34499){if((e34499 instanceof Object)){
var ex__10894__auto__ = e34499;
var statearr_34500_34653 = state_34487;
(statearr_34500_34653[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34654 = state_34487;
state_34487 = G__34654;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__;
})()
;})(__34643,switch__10890__auto__,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
})();
var state__10957__auto__ = (function (){var statearr_34501 = f__10956__auto__.call(null);
(statearr_34501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34646);

return statearr_34501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(__34643,c__10955__auto___34646,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
);


break;
case "async":
var c__10955__auto___34655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34643,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (__34643,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function (state_34514){
var state_val_34515 = (state_34514[(1)]);
if((state_val_34515 === (1))){
var state_34514__$1 = state_34514;
var statearr_34516_34656 = state_34514__$1;
(statearr_34516_34656[(2)] = null);

(statearr_34516_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (2))){
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(4),jobs);
} else {
if((state_val_34515 === (3))){
var inst_34512 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34514__$1,inst_34512);
} else {
if((state_val_34515 === (4))){
var inst_34504 = (state_34514[(2)]);
var inst_34505 = async.call(null,inst_34504);
var state_34514__$1 = state_34514;
if(cljs.core.truth_(inst_34505)){
var statearr_34517_34657 = state_34514__$1;
(statearr_34517_34657[(1)] = (5));

} else {
var statearr_34518_34658 = state_34514__$1;
(statearr_34518_34658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (5))){
var state_34514__$1 = state_34514;
var statearr_34519_34659 = state_34514__$1;
(statearr_34519_34659[(2)] = null);

(statearr_34519_34659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (6))){
var state_34514__$1 = state_34514;
var statearr_34520_34660 = state_34514__$1;
(statearr_34520_34660[(2)] = null);

(statearr_34520_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (7))){
var inst_34510 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34521_34661 = state_34514__$1;
(statearr_34521_34661[(2)] = inst_34510);

(statearr_34521_34661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34643,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
;
return ((function (__34643,switch__10890__auto__,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_34525 = [null,null,null,null,null,null,null];
(statearr_34525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__);

(statearr_34525[(1)] = (1));

return statearr_34525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1 = (function (state_34514){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34526){if((e34526 instanceof Object)){
var ex__10894__auto__ = e34526;
var statearr_34527_34662 = state_34514;
(statearr_34527_34662[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34663 = state_34514;
state_34514 = G__34663;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = function(state_34514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1.call(this,state_34514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__;
})()
;})(__34643,switch__10890__auto__,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
})();
var state__10957__auto__ = (function (){var statearr_34528 = f__10956__auto__.call(null);
(statearr_34528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34655);

return statearr_34528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(__34643,c__10955__auto___34655,G__34474_34644,n__7069__auto___34642,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34664 = (__34643 + (1));
__34643 = G__34664;
continue;
} else {
}
break;
}

var c__10955__auto___34665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___34665,jobs,results,process,async){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___34665,jobs,results,process,async){
return (function (state_34550){
var state_val_34551 = (state_34550[(1)]);
if((state_val_34551 === (1))){
var state_34550__$1 = state_34550;
var statearr_34552_34666 = state_34550__$1;
(statearr_34552_34666[(2)] = null);

(statearr_34552_34666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (2))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34550__$1,(4),from);
} else {
if((state_val_34551 === (3))){
var inst_34548 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34550__$1,inst_34548);
} else {
if((state_val_34551 === (4))){
var inst_34531 = (state_34550[(7)]);
var inst_34531__$1 = (state_34550[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var state_34550__$1 = (function (){var statearr_34553 = state_34550;
(statearr_34553[(7)] = inst_34531__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34554_34667 = state_34550__$1;
(statearr_34554_34667[(1)] = (5));

} else {
var statearr_34555_34668 = state_34550__$1;
(statearr_34555_34668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (5))){
var inst_34534 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34550__$1 = state_34550;
var statearr_34556_34669 = state_34550__$1;
(statearr_34556_34669[(2)] = inst_34534);

(statearr_34556_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (6))){
var inst_34536 = (state_34550[(8)]);
var inst_34531 = (state_34550[(7)]);
var inst_34536__$1 = cljs.core.async.chan.call(null,(1));
var inst_34537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34538 = [inst_34531,inst_34536__$1];
var inst_34539 = (new cljs.core.PersistentVector(null,2,(5),inst_34537,inst_34538,null));
var state_34550__$1 = (function (){var statearr_34557 = state_34550;
(statearr_34557[(8)] = inst_34536__$1);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34550__$1,(8),jobs,inst_34539);
} else {
if((state_val_34551 === (7))){
var inst_34546 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34558_34670 = state_34550__$1;
(statearr_34558_34670[(2)] = inst_34546);

(statearr_34558_34670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (8))){
var inst_34536 = (state_34550[(8)]);
var inst_34541 = (state_34550[(2)]);
var state_34550__$1 = (function (){var statearr_34559 = state_34550;
(statearr_34559[(9)] = inst_34541);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34550__$1,(9),results,inst_34536);
} else {
if((state_val_34551 === (9))){
var inst_34543 = (state_34550[(2)]);
var state_34550__$1 = (function (){var statearr_34560 = state_34550;
(statearr_34560[(10)] = inst_34543);

return statearr_34560;
})();
var statearr_34561_34671 = state_34550__$1;
(statearr_34561_34671[(2)] = null);

(statearr_34561_34671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___34665,jobs,results,process,async))
;
return ((function (switch__10890__auto__,c__10955__auto___34665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_34565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1 = (function (state_34550){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34566){if((e34566 instanceof Object)){
var ex__10894__auto__ = e34566;
var statearr_34567_34672 = state_34550;
(statearr_34567_34672[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34673 = state_34550;
state_34550 = G__34673;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = function(state_34550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1.call(this,state_34550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___34665,jobs,results,process,async))
})();
var state__10957__auto__ = (function (){var statearr_34568 = f__10956__auto__.call(null);
(statearr_34568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34665);

return statearr_34568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___34665,jobs,results,process,async))
);


var c__10955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto__,jobs,results,process,async){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto__,jobs,results,process,async){
return (function (state_34606){
var state_val_34607 = (state_34606[(1)]);
if((state_val_34607 === (7))){
var inst_34602 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34608_34674 = state_34606__$1;
(statearr_34608_34674[(2)] = inst_34602);

(statearr_34608_34674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (20))){
var state_34606__$1 = state_34606;
var statearr_34609_34675 = state_34606__$1;
(statearr_34609_34675[(2)] = null);

(statearr_34609_34675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (1))){
var state_34606__$1 = state_34606;
var statearr_34610_34676 = state_34606__$1;
(statearr_34610_34676[(2)] = null);

(statearr_34610_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (4))){
var inst_34571 = (state_34606[(7)]);
var inst_34571__$1 = (state_34606[(2)]);
var inst_34572 = (inst_34571__$1 == null);
var state_34606__$1 = (function (){var statearr_34611 = state_34606;
(statearr_34611[(7)] = inst_34571__$1);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34572)){
var statearr_34612_34677 = state_34606__$1;
(statearr_34612_34677[(1)] = (5));

} else {
var statearr_34613_34678 = state_34606__$1;
(statearr_34613_34678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (15))){
var inst_34584 = (state_34606[(8)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34606__$1,(18),to,inst_34584);
} else {
if((state_val_34607 === (21))){
var inst_34597 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34614_34679 = state_34606__$1;
(statearr_34614_34679[(2)] = inst_34597);

(statearr_34614_34679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (13))){
var inst_34599 = (state_34606[(2)]);
var state_34606__$1 = (function (){var statearr_34615 = state_34606;
(statearr_34615[(9)] = inst_34599);

return statearr_34615;
})();
var statearr_34616_34680 = state_34606__$1;
(statearr_34616_34680[(2)] = null);

(statearr_34616_34680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (6))){
var inst_34571 = (state_34606[(7)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34606__$1,(11),inst_34571);
} else {
if((state_val_34607 === (17))){
var inst_34592 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
if(cljs.core.truth_(inst_34592)){
var statearr_34617_34681 = state_34606__$1;
(statearr_34617_34681[(1)] = (19));

} else {
var statearr_34618_34682 = state_34606__$1;
(statearr_34618_34682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (3))){
var inst_34604 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34606__$1,inst_34604);
} else {
if((state_val_34607 === (12))){
var inst_34581 = (state_34606[(10)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34606__$1,(14),inst_34581);
} else {
if((state_val_34607 === (2))){
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34606__$1,(4),results);
} else {
if((state_val_34607 === (19))){
var state_34606__$1 = state_34606;
var statearr_34619_34683 = state_34606__$1;
(statearr_34619_34683[(2)] = null);

(statearr_34619_34683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (11))){
var inst_34581 = (state_34606[(2)]);
var state_34606__$1 = (function (){var statearr_34620 = state_34606;
(statearr_34620[(10)] = inst_34581);

return statearr_34620;
})();
var statearr_34621_34684 = state_34606__$1;
(statearr_34621_34684[(2)] = null);

(statearr_34621_34684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (9))){
var state_34606__$1 = state_34606;
var statearr_34622_34685 = state_34606__$1;
(statearr_34622_34685[(2)] = null);

(statearr_34622_34685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (5))){
var state_34606__$1 = state_34606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34623_34686 = state_34606__$1;
(statearr_34623_34686[(1)] = (8));

} else {
var statearr_34624_34687 = state_34606__$1;
(statearr_34624_34687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (14))){
var inst_34584 = (state_34606[(8)]);
var inst_34586 = (state_34606[(11)]);
var inst_34584__$1 = (state_34606[(2)]);
var inst_34585 = (inst_34584__$1 == null);
var inst_34586__$1 = cljs.core.not.call(null,inst_34585);
var state_34606__$1 = (function (){var statearr_34625 = state_34606;
(statearr_34625[(8)] = inst_34584__$1);

(statearr_34625[(11)] = inst_34586__$1);

return statearr_34625;
})();
if(inst_34586__$1){
var statearr_34626_34688 = state_34606__$1;
(statearr_34626_34688[(1)] = (15));

} else {
var statearr_34627_34689 = state_34606__$1;
(statearr_34627_34689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (16))){
var inst_34586 = (state_34606[(11)]);
var state_34606__$1 = state_34606;
var statearr_34628_34690 = state_34606__$1;
(statearr_34628_34690[(2)] = inst_34586);

(statearr_34628_34690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (10))){
var inst_34578 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34629_34691 = state_34606__$1;
(statearr_34629_34691[(2)] = inst_34578);

(statearr_34629_34691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (18))){
var inst_34589 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34630_34692 = state_34606__$1;
(statearr_34630_34692[(2)] = inst_34589);

(statearr_34630_34692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (8))){
var inst_34575 = cljs.core.async.close_BANG_.call(null,to);
var state_34606__$1 = state_34606;
var statearr_34631_34693 = state_34606__$1;
(statearr_34631_34693[(2)] = inst_34575);

(statearr_34631_34693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto__,jobs,results,process,async))
;
return ((function (switch__10890__auto__,c__10955__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1 = (function (state_34606){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__10894__auto__ = e34636;
var statearr_34637_34694 = state_34606;
(statearr_34637_34694[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34695 = state_34606;
state_34606 = G__34695;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__ = function(state_34606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1.call(this,state_34606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto__,jobs,results,process,async))
})();
var state__10957__auto__ = (function (){var statearr_34638 = f__10956__auto__.call(null);
(statearr_34638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto__);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto__,jobs,results,process,async))
);

return c__10955__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34696 = [];
var len__7229__auto___34699 = arguments.length;
var i__7230__auto___34700 = (0);
while(true){
if((i__7230__auto___34700 < len__7229__auto___34699)){
args34696.push((arguments[i__7230__auto___34700]));

var G__34701 = (i__7230__auto___34700 + (1));
i__7230__auto___34700 = G__34701;
continue;
} else {
}
break;
}

var G__34698 = args34696.length;
switch (G__34698) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34696.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args34703 = [];
var len__7229__auto___34706 = arguments.length;
var i__7230__auto___34707 = (0);
while(true){
if((i__7230__auto___34707 < len__7229__auto___34706)){
args34703.push((arguments[i__7230__auto___34707]));

var G__34708 = (i__7230__auto___34707 + (1));
i__7230__auto___34707 = G__34708;
continue;
} else {
}
break;
}

var G__34705 = args34703.length;
switch (G__34705) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34703.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args34710 = [];
var len__7229__auto___34763 = arguments.length;
var i__7230__auto___34764 = (0);
while(true){
if((i__7230__auto___34764 < len__7229__auto___34763)){
args34710.push((arguments[i__7230__auto___34764]));

var G__34765 = (i__7230__auto___34764 + (1));
i__7230__auto___34764 = G__34765;
continue;
} else {
}
break;
}

var G__34712 = args34710.length;
switch (G__34712) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34710.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10955__auto___34767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___34767,tc,fc){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___34767,tc,fc){
return (function (state_34738){
var state_val_34739 = (state_34738[(1)]);
if((state_val_34739 === (7))){
var inst_34734 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34740_34768 = state_34738__$1;
(statearr_34740_34768[(2)] = inst_34734);

(statearr_34740_34768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (1))){
var state_34738__$1 = state_34738;
var statearr_34741_34769 = state_34738__$1;
(statearr_34741_34769[(2)] = null);

(statearr_34741_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (4))){
var inst_34715 = (state_34738[(7)]);
var inst_34715__$1 = (state_34738[(2)]);
var inst_34716 = (inst_34715__$1 == null);
var state_34738__$1 = (function (){var statearr_34742 = state_34738;
(statearr_34742[(7)] = inst_34715__$1);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34716)){
var statearr_34743_34770 = state_34738__$1;
(statearr_34743_34770[(1)] = (5));

} else {
var statearr_34744_34771 = state_34738__$1;
(statearr_34744_34771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (13))){
var state_34738__$1 = state_34738;
var statearr_34745_34772 = state_34738__$1;
(statearr_34745_34772[(2)] = null);

(statearr_34745_34772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (6))){
var inst_34715 = (state_34738[(7)]);
var inst_34721 = p.call(null,inst_34715);
var state_34738__$1 = state_34738;
if(cljs.core.truth_(inst_34721)){
var statearr_34746_34773 = state_34738__$1;
(statearr_34746_34773[(1)] = (9));

} else {
var statearr_34747_34774 = state_34738__$1;
(statearr_34747_34774[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (3))){
var inst_34736 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34738__$1,inst_34736);
} else {
if((state_val_34739 === (12))){
var state_34738__$1 = state_34738;
var statearr_34748_34775 = state_34738__$1;
(statearr_34748_34775[(2)] = null);

(statearr_34748_34775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (2))){
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34738__$1,(4),ch);
} else {
if((state_val_34739 === (11))){
var inst_34715 = (state_34738[(7)]);
var inst_34725 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34738__$1,(8),inst_34725,inst_34715);
} else {
if((state_val_34739 === (9))){
var state_34738__$1 = state_34738;
var statearr_34749_34776 = state_34738__$1;
(statearr_34749_34776[(2)] = tc);

(statearr_34749_34776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (5))){
var inst_34718 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34719 = cljs.core.async.close_BANG_.call(null,fc);
var state_34738__$1 = (function (){var statearr_34750 = state_34738;
(statearr_34750[(8)] = inst_34718);

return statearr_34750;
})();
var statearr_34751_34777 = state_34738__$1;
(statearr_34751_34777[(2)] = inst_34719);

(statearr_34751_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (14))){
var inst_34732 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34752_34778 = state_34738__$1;
(statearr_34752_34778[(2)] = inst_34732);

(statearr_34752_34778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (10))){
var state_34738__$1 = state_34738;
var statearr_34753_34779 = state_34738__$1;
(statearr_34753_34779[(2)] = fc);

(statearr_34753_34779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (8))){
var inst_34727 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
if(cljs.core.truth_(inst_34727)){
var statearr_34754_34780 = state_34738__$1;
(statearr_34754_34780[(1)] = (12));

} else {
var statearr_34755_34781 = state_34738__$1;
(statearr_34755_34781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___34767,tc,fc))
;
return ((function (switch__10890__auto__,c__10955__auto___34767,tc,fc){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_34738){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__10894__auto__ = e34760;
var statearr_34761_34782 = state_34738;
(statearr_34761_34782[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34783 = state_34738;
state_34738 = G__34783;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_34738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_34738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___34767,tc,fc))
})();
var state__10957__auto__ = (function (){var statearr_34762 = f__10956__auto__.call(null);
(statearr_34762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___34767);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___34767,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto__){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto__){
return (function (state_34847){
var state_val_34848 = (state_34847[(1)]);
if((state_val_34848 === (7))){
var inst_34843 = (state_34847[(2)]);
var state_34847__$1 = state_34847;
var statearr_34849_34870 = state_34847__$1;
(statearr_34849_34870[(2)] = inst_34843);

(statearr_34849_34870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (1))){
var inst_34827 = init;
var state_34847__$1 = (function (){var statearr_34850 = state_34847;
(statearr_34850[(7)] = inst_34827);

return statearr_34850;
})();
var statearr_34851_34871 = state_34847__$1;
(statearr_34851_34871[(2)] = null);

(statearr_34851_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (4))){
var inst_34830 = (state_34847[(8)]);
var inst_34830__$1 = (state_34847[(2)]);
var inst_34831 = (inst_34830__$1 == null);
var state_34847__$1 = (function (){var statearr_34852 = state_34847;
(statearr_34852[(8)] = inst_34830__$1);

return statearr_34852;
})();
if(cljs.core.truth_(inst_34831)){
var statearr_34853_34872 = state_34847__$1;
(statearr_34853_34872[(1)] = (5));

} else {
var statearr_34854_34873 = state_34847__$1;
(statearr_34854_34873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (6))){
var inst_34830 = (state_34847[(8)]);
var inst_34834 = (state_34847[(9)]);
var inst_34827 = (state_34847[(7)]);
var inst_34834__$1 = f.call(null,inst_34827,inst_34830);
var inst_34835 = cljs.core.reduced_QMARK_.call(null,inst_34834__$1);
var state_34847__$1 = (function (){var statearr_34855 = state_34847;
(statearr_34855[(9)] = inst_34834__$1);

return statearr_34855;
})();
if(inst_34835){
var statearr_34856_34874 = state_34847__$1;
(statearr_34856_34874[(1)] = (8));

} else {
var statearr_34857_34875 = state_34847__$1;
(statearr_34857_34875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (3))){
var inst_34845 = (state_34847[(2)]);
var state_34847__$1 = state_34847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34847__$1,inst_34845);
} else {
if((state_val_34848 === (2))){
var state_34847__$1 = state_34847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34847__$1,(4),ch);
} else {
if((state_val_34848 === (9))){
var inst_34834 = (state_34847[(9)]);
var inst_34827 = inst_34834;
var state_34847__$1 = (function (){var statearr_34858 = state_34847;
(statearr_34858[(7)] = inst_34827);

return statearr_34858;
})();
var statearr_34859_34876 = state_34847__$1;
(statearr_34859_34876[(2)] = null);

(statearr_34859_34876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (5))){
var inst_34827 = (state_34847[(7)]);
var state_34847__$1 = state_34847;
var statearr_34860_34877 = state_34847__$1;
(statearr_34860_34877[(2)] = inst_34827);

(statearr_34860_34877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (10))){
var inst_34841 = (state_34847[(2)]);
var state_34847__$1 = state_34847;
var statearr_34861_34878 = state_34847__$1;
(statearr_34861_34878[(2)] = inst_34841);

(statearr_34861_34878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (8))){
var inst_34834 = (state_34847[(9)]);
var inst_34837 = cljs.core.deref.call(null,inst_34834);
var state_34847__$1 = state_34847;
var statearr_34862_34879 = state_34847__$1;
(statearr_34862_34879[(2)] = inst_34837);

(statearr_34862_34879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto__))
;
return ((function (switch__10890__auto__,c__10955__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10891__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10891__auto____0 = (function (){
var statearr_34866 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34866[(0)] = cljs$core$async$reduce_$_state_machine__10891__auto__);

(statearr_34866[(1)] = (1));

return statearr_34866;
});
var cljs$core$async$reduce_$_state_machine__10891__auto____1 = (function (state_34847){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34867){if((e34867 instanceof Object)){
var ex__10894__auto__ = e34867;
var statearr_34868_34880 = state_34847;
(statearr_34868_34880[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34881 = state_34847;
state_34847 = G__34881;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10891__auto__ = function(state_34847){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10891__auto____1.call(this,state_34847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10891__auto____0;
cljs$core$async$reduce_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10891__auto____1;
return cljs$core$async$reduce_$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto__))
})();
var state__10957__auto__ = (function (){var statearr_34869 = f__10956__auto__.call(null);
(statearr_34869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto__);

return statearr_34869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto__))
);

return c__10955__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34882 = [];
var len__7229__auto___34934 = arguments.length;
var i__7230__auto___34935 = (0);
while(true){
if((i__7230__auto___34935 < len__7229__auto___34934)){
args34882.push((arguments[i__7230__auto___34935]));

var G__34936 = (i__7230__auto___34935 + (1));
i__7230__auto___34935 = G__34936;
continue;
} else {
}
break;
}

var G__34884 = args34882.length;
switch (G__34884) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34882.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto__){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto__){
return (function (state_34909){
var state_val_34910 = (state_34909[(1)]);
if((state_val_34910 === (7))){
var inst_34891 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34911_34938 = state_34909__$1;
(statearr_34911_34938[(2)] = inst_34891);

(statearr_34911_34938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (1))){
var inst_34885 = cljs.core.seq.call(null,coll);
var inst_34886 = inst_34885;
var state_34909__$1 = (function (){var statearr_34912 = state_34909;
(statearr_34912[(7)] = inst_34886);

return statearr_34912;
})();
var statearr_34913_34939 = state_34909__$1;
(statearr_34913_34939[(2)] = null);

(statearr_34913_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (4))){
var inst_34886 = (state_34909[(7)]);
var inst_34889 = cljs.core.first.call(null,inst_34886);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34909__$1,(7),ch,inst_34889);
} else {
if((state_val_34910 === (13))){
var inst_34903 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34914_34940 = state_34909__$1;
(statearr_34914_34940[(2)] = inst_34903);

(statearr_34914_34940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (6))){
var inst_34894 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
if(cljs.core.truth_(inst_34894)){
var statearr_34915_34941 = state_34909__$1;
(statearr_34915_34941[(1)] = (8));

} else {
var statearr_34916_34942 = state_34909__$1;
(statearr_34916_34942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (3))){
var inst_34907 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34909__$1,inst_34907);
} else {
if((state_val_34910 === (12))){
var state_34909__$1 = state_34909;
var statearr_34917_34943 = state_34909__$1;
(statearr_34917_34943[(2)] = null);

(statearr_34917_34943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (2))){
var inst_34886 = (state_34909[(7)]);
var state_34909__$1 = state_34909;
if(cljs.core.truth_(inst_34886)){
var statearr_34918_34944 = state_34909__$1;
(statearr_34918_34944[(1)] = (4));

} else {
var statearr_34919_34945 = state_34909__$1;
(statearr_34919_34945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (11))){
var inst_34900 = cljs.core.async.close_BANG_.call(null,ch);
var state_34909__$1 = state_34909;
var statearr_34920_34946 = state_34909__$1;
(statearr_34920_34946[(2)] = inst_34900);

(statearr_34920_34946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (9))){
var state_34909__$1 = state_34909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34921_34947 = state_34909__$1;
(statearr_34921_34947[(1)] = (11));

} else {
var statearr_34922_34948 = state_34909__$1;
(statearr_34922_34948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (5))){
var inst_34886 = (state_34909[(7)]);
var state_34909__$1 = state_34909;
var statearr_34923_34949 = state_34909__$1;
(statearr_34923_34949[(2)] = inst_34886);

(statearr_34923_34949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (10))){
var inst_34905 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34924_34950 = state_34909__$1;
(statearr_34924_34950[(2)] = inst_34905);

(statearr_34924_34950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (8))){
var inst_34886 = (state_34909[(7)]);
var inst_34896 = cljs.core.next.call(null,inst_34886);
var inst_34886__$1 = inst_34896;
var state_34909__$1 = (function (){var statearr_34925 = state_34909;
(statearr_34925[(7)] = inst_34886__$1);

return statearr_34925;
})();
var statearr_34926_34951 = state_34909__$1;
(statearr_34926_34951[(2)] = null);

(statearr_34926_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto__))
;
return ((function (switch__10890__auto__,c__10955__auto__){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_34930 = [null,null,null,null,null,null,null,null];
(statearr_34930[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_34930[(1)] = (1));

return statearr_34930;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_34909){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_34909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e34931){if((e34931 instanceof Object)){
var ex__10894__auto__ = e34931;
var statearr_34932_34952 = state_34909;
(statearr_34932_34952[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_34909;
state_34909 = G__34953;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_34909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_34909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto__))
})();
var state__10957__auto__ = (function (){var statearr_34933 = f__10956__auto__.call(null);
(statearr_34933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto__);

return statearr_34933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto__))
);

return c__10955__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6817__auto__ = (((_ == null))?null:_);
var m__6818__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,_);
} else {
var m__6818__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6818__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,ch);
} else {
var m__6818__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m);
} else {
var m__6818__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35179 = (function (mult,ch,cs,meta35180){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35180 = meta35180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35181,meta35180__$1){
var self__ = this;
var _35181__$1 = this;
return (new cljs.core.async.t_cljs$core$async35179(self__.mult,self__.ch,self__.cs,meta35180__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35181){
var self__ = this;
var _35181__$1 = this;
return self__.meta35180;
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35180","meta35180",-1179955739,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35179";

cljs.core.async.t_cljs$core$async35179.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async35179");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35179 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35179(mult__$1,ch__$1,cs__$1,meta35180){
return (new cljs.core.async.t_cljs$core$async35179(mult__$1,ch__$1,cs__$1,meta35180));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35179(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10955__auto___35404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___35404,cs,m,dchan,dctr,done){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___35404,cs,m,dchan,dctr,done){
return (function (state_35316){
var state_val_35317 = (state_35316[(1)]);
if((state_val_35317 === (7))){
var inst_35312 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35318_35405 = state_35316__$1;
(statearr_35318_35405[(2)] = inst_35312);

(statearr_35318_35405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (20))){
var inst_35215 = (state_35316[(7)]);
var inst_35227 = cljs.core.first.call(null,inst_35215);
var inst_35228 = cljs.core.nth.call(null,inst_35227,(0),null);
var inst_35229 = cljs.core.nth.call(null,inst_35227,(1),null);
var state_35316__$1 = (function (){var statearr_35319 = state_35316;
(statearr_35319[(8)] = inst_35228);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35229)){
var statearr_35320_35406 = state_35316__$1;
(statearr_35320_35406[(1)] = (22));

} else {
var statearr_35321_35407 = state_35316__$1;
(statearr_35321_35407[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (27))){
var inst_35257 = (state_35316[(9)]);
var inst_35264 = (state_35316[(10)]);
var inst_35259 = (state_35316[(11)]);
var inst_35184 = (state_35316[(12)]);
var inst_35264__$1 = cljs.core._nth.call(null,inst_35257,inst_35259);
var inst_35265 = cljs.core.async.put_BANG_.call(null,inst_35264__$1,inst_35184,done);
var state_35316__$1 = (function (){var statearr_35322 = state_35316;
(statearr_35322[(10)] = inst_35264__$1);

return statearr_35322;
})();
if(cljs.core.truth_(inst_35265)){
var statearr_35323_35408 = state_35316__$1;
(statearr_35323_35408[(1)] = (30));

} else {
var statearr_35324_35409 = state_35316__$1;
(statearr_35324_35409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (1))){
var state_35316__$1 = state_35316;
var statearr_35325_35410 = state_35316__$1;
(statearr_35325_35410[(2)] = null);

(statearr_35325_35410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (24))){
var inst_35215 = (state_35316[(7)]);
var inst_35234 = (state_35316[(2)]);
var inst_35235 = cljs.core.next.call(null,inst_35215);
var inst_35193 = inst_35235;
var inst_35194 = null;
var inst_35195 = (0);
var inst_35196 = (0);
var state_35316__$1 = (function (){var statearr_35326 = state_35316;
(statearr_35326[(13)] = inst_35193);

(statearr_35326[(14)] = inst_35195);

(statearr_35326[(15)] = inst_35196);

(statearr_35326[(16)] = inst_35194);

(statearr_35326[(17)] = inst_35234);

return statearr_35326;
})();
var statearr_35327_35411 = state_35316__$1;
(statearr_35327_35411[(2)] = null);

(statearr_35327_35411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (39))){
var state_35316__$1 = state_35316;
var statearr_35331_35412 = state_35316__$1;
(statearr_35331_35412[(2)] = null);

(statearr_35331_35412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (4))){
var inst_35184 = (state_35316[(12)]);
var inst_35184__$1 = (state_35316[(2)]);
var inst_35185 = (inst_35184__$1 == null);
var state_35316__$1 = (function (){var statearr_35332 = state_35316;
(statearr_35332[(12)] = inst_35184__$1);

return statearr_35332;
})();
if(cljs.core.truth_(inst_35185)){
var statearr_35333_35413 = state_35316__$1;
(statearr_35333_35413[(1)] = (5));

} else {
var statearr_35334_35414 = state_35316__$1;
(statearr_35334_35414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (15))){
var inst_35193 = (state_35316[(13)]);
var inst_35195 = (state_35316[(14)]);
var inst_35196 = (state_35316[(15)]);
var inst_35194 = (state_35316[(16)]);
var inst_35211 = (state_35316[(2)]);
var inst_35212 = (inst_35196 + (1));
var tmp35328 = inst_35193;
var tmp35329 = inst_35195;
var tmp35330 = inst_35194;
var inst_35193__$1 = tmp35328;
var inst_35194__$1 = tmp35330;
var inst_35195__$1 = tmp35329;
var inst_35196__$1 = inst_35212;
var state_35316__$1 = (function (){var statearr_35335 = state_35316;
(statearr_35335[(18)] = inst_35211);

(statearr_35335[(13)] = inst_35193__$1);

(statearr_35335[(14)] = inst_35195__$1);

(statearr_35335[(15)] = inst_35196__$1);

(statearr_35335[(16)] = inst_35194__$1);

return statearr_35335;
})();
var statearr_35336_35415 = state_35316__$1;
(statearr_35336_35415[(2)] = null);

(statearr_35336_35415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (21))){
var inst_35238 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35340_35416 = state_35316__$1;
(statearr_35340_35416[(2)] = inst_35238);

(statearr_35340_35416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (31))){
var inst_35264 = (state_35316[(10)]);
var inst_35268 = done.call(null,null);
var inst_35269 = cljs.core.async.untap_STAR_.call(null,m,inst_35264);
var state_35316__$1 = (function (){var statearr_35341 = state_35316;
(statearr_35341[(19)] = inst_35268);

return statearr_35341;
})();
var statearr_35342_35417 = state_35316__$1;
(statearr_35342_35417[(2)] = inst_35269);

(statearr_35342_35417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (32))){
var inst_35257 = (state_35316[(9)]);
var inst_35256 = (state_35316[(20)]);
var inst_35259 = (state_35316[(11)]);
var inst_35258 = (state_35316[(21)]);
var inst_35271 = (state_35316[(2)]);
var inst_35272 = (inst_35259 + (1));
var tmp35337 = inst_35257;
var tmp35338 = inst_35256;
var tmp35339 = inst_35258;
var inst_35256__$1 = tmp35338;
var inst_35257__$1 = tmp35337;
var inst_35258__$1 = tmp35339;
var inst_35259__$1 = inst_35272;
var state_35316__$1 = (function (){var statearr_35343 = state_35316;
(statearr_35343[(9)] = inst_35257__$1);

(statearr_35343[(20)] = inst_35256__$1);

(statearr_35343[(22)] = inst_35271);

(statearr_35343[(11)] = inst_35259__$1);

(statearr_35343[(21)] = inst_35258__$1);

return statearr_35343;
})();
var statearr_35344_35418 = state_35316__$1;
(statearr_35344_35418[(2)] = null);

(statearr_35344_35418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (40))){
var inst_35284 = (state_35316[(23)]);
var inst_35288 = done.call(null,null);
var inst_35289 = cljs.core.async.untap_STAR_.call(null,m,inst_35284);
var state_35316__$1 = (function (){var statearr_35345 = state_35316;
(statearr_35345[(24)] = inst_35288);

return statearr_35345;
})();
var statearr_35346_35419 = state_35316__$1;
(statearr_35346_35419[(2)] = inst_35289);

(statearr_35346_35419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (33))){
var inst_35275 = (state_35316[(25)]);
var inst_35277 = cljs.core.chunked_seq_QMARK_.call(null,inst_35275);
var state_35316__$1 = state_35316;
if(inst_35277){
var statearr_35347_35420 = state_35316__$1;
(statearr_35347_35420[(1)] = (36));

} else {
var statearr_35348_35421 = state_35316__$1;
(statearr_35348_35421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (13))){
var inst_35205 = (state_35316[(26)]);
var inst_35208 = cljs.core.async.close_BANG_.call(null,inst_35205);
var state_35316__$1 = state_35316;
var statearr_35349_35422 = state_35316__$1;
(statearr_35349_35422[(2)] = inst_35208);

(statearr_35349_35422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (22))){
var inst_35228 = (state_35316[(8)]);
var inst_35231 = cljs.core.async.close_BANG_.call(null,inst_35228);
var state_35316__$1 = state_35316;
var statearr_35350_35423 = state_35316__$1;
(statearr_35350_35423[(2)] = inst_35231);

(statearr_35350_35423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (36))){
var inst_35275 = (state_35316[(25)]);
var inst_35279 = cljs.core.chunk_first.call(null,inst_35275);
var inst_35280 = cljs.core.chunk_rest.call(null,inst_35275);
var inst_35281 = cljs.core.count.call(null,inst_35279);
var inst_35256 = inst_35280;
var inst_35257 = inst_35279;
var inst_35258 = inst_35281;
var inst_35259 = (0);
var state_35316__$1 = (function (){var statearr_35351 = state_35316;
(statearr_35351[(9)] = inst_35257);

(statearr_35351[(20)] = inst_35256);

(statearr_35351[(11)] = inst_35259);

(statearr_35351[(21)] = inst_35258);

return statearr_35351;
})();
var statearr_35352_35424 = state_35316__$1;
(statearr_35352_35424[(2)] = null);

(statearr_35352_35424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (41))){
var inst_35275 = (state_35316[(25)]);
var inst_35291 = (state_35316[(2)]);
var inst_35292 = cljs.core.next.call(null,inst_35275);
var inst_35256 = inst_35292;
var inst_35257 = null;
var inst_35258 = (0);
var inst_35259 = (0);
var state_35316__$1 = (function (){var statearr_35353 = state_35316;
(statearr_35353[(9)] = inst_35257);

(statearr_35353[(20)] = inst_35256);

(statearr_35353[(11)] = inst_35259);

(statearr_35353[(27)] = inst_35291);

(statearr_35353[(21)] = inst_35258);

return statearr_35353;
})();
var statearr_35354_35425 = state_35316__$1;
(statearr_35354_35425[(2)] = null);

(statearr_35354_35425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (43))){
var state_35316__$1 = state_35316;
var statearr_35355_35426 = state_35316__$1;
(statearr_35355_35426[(2)] = null);

(statearr_35355_35426[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (29))){
var inst_35300 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35356_35427 = state_35316__$1;
(statearr_35356_35427[(2)] = inst_35300);

(statearr_35356_35427[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (44))){
var inst_35309 = (state_35316[(2)]);
var state_35316__$1 = (function (){var statearr_35357 = state_35316;
(statearr_35357[(28)] = inst_35309);

return statearr_35357;
})();
var statearr_35358_35428 = state_35316__$1;
(statearr_35358_35428[(2)] = null);

(statearr_35358_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (6))){
var inst_35248 = (state_35316[(29)]);
var inst_35247 = cljs.core.deref.call(null,cs);
var inst_35248__$1 = cljs.core.keys.call(null,inst_35247);
var inst_35249 = cljs.core.count.call(null,inst_35248__$1);
var inst_35250 = cljs.core.reset_BANG_.call(null,dctr,inst_35249);
var inst_35255 = cljs.core.seq.call(null,inst_35248__$1);
var inst_35256 = inst_35255;
var inst_35257 = null;
var inst_35258 = (0);
var inst_35259 = (0);
var state_35316__$1 = (function (){var statearr_35359 = state_35316;
(statearr_35359[(9)] = inst_35257);

(statearr_35359[(30)] = inst_35250);

(statearr_35359[(20)] = inst_35256);

(statearr_35359[(11)] = inst_35259);

(statearr_35359[(21)] = inst_35258);

(statearr_35359[(29)] = inst_35248__$1);

return statearr_35359;
})();
var statearr_35360_35429 = state_35316__$1;
(statearr_35360_35429[(2)] = null);

(statearr_35360_35429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (28))){
var inst_35256 = (state_35316[(20)]);
var inst_35275 = (state_35316[(25)]);
var inst_35275__$1 = cljs.core.seq.call(null,inst_35256);
var state_35316__$1 = (function (){var statearr_35361 = state_35316;
(statearr_35361[(25)] = inst_35275__$1);

return statearr_35361;
})();
if(inst_35275__$1){
var statearr_35362_35430 = state_35316__$1;
(statearr_35362_35430[(1)] = (33));

} else {
var statearr_35363_35431 = state_35316__$1;
(statearr_35363_35431[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (25))){
var inst_35259 = (state_35316[(11)]);
var inst_35258 = (state_35316[(21)]);
var inst_35261 = (inst_35259 < inst_35258);
var inst_35262 = inst_35261;
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35262)){
var statearr_35364_35432 = state_35316__$1;
(statearr_35364_35432[(1)] = (27));

} else {
var statearr_35365_35433 = state_35316__$1;
(statearr_35365_35433[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (34))){
var state_35316__$1 = state_35316;
var statearr_35366_35434 = state_35316__$1;
(statearr_35366_35434[(2)] = null);

(statearr_35366_35434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (17))){
var state_35316__$1 = state_35316;
var statearr_35367_35435 = state_35316__$1;
(statearr_35367_35435[(2)] = null);

(statearr_35367_35435[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (3))){
var inst_35314 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35316__$1,inst_35314);
} else {
if((state_val_35317 === (12))){
var inst_35243 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35368_35436 = state_35316__$1;
(statearr_35368_35436[(2)] = inst_35243);

(statearr_35368_35436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (2))){
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35316__$1,(4),ch);
} else {
if((state_val_35317 === (23))){
var state_35316__$1 = state_35316;
var statearr_35369_35437 = state_35316__$1;
(statearr_35369_35437[(2)] = null);

(statearr_35369_35437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (35))){
var inst_35298 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35370_35438 = state_35316__$1;
(statearr_35370_35438[(2)] = inst_35298);

(statearr_35370_35438[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (19))){
var inst_35215 = (state_35316[(7)]);
var inst_35219 = cljs.core.chunk_first.call(null,inst_35215);
var inst_35220 = cljs.core.chunk_rest.call(null,inst_35215);
var inst_35221 = cljs.core.count.call(null,inst_35219);
var inst_35193 = inst_35220;
var inst_35194 = inst_35219;
var inst_35195 = inst_35221;
var inst_35196 = (0);
var state_35316__$1 = (function (){var statearr_35371 = state_35316;
(statearr_35371[(13)] = inst_35193);

(statearr_35371[(14)] = inst_35195);

(statearr_35371[(15)] = inst_35196);

(statearr_35371[(16)] = inst_35194);

return statearr_35371;
})();
var statearr_35372_35439 = state_35316__$1;
(statearr_35372_35439[(2)] = null);

(statearr_35372_35439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (11))){
var inst_35215 = (state_35316[(7)]);
var inst_35193 = (state_35316[(13)]);
var inst_35215__$1 = cljs.core.seq.call(null,inst_35193);
var state_35316__$1 = (function (){var statearr_35373 = state_35316;
(statearr_35373[(7)] = inst_35215__$1);

return statearr_35373;
})();
if(inst_35215__$1){
var statearr_35374_35440 = state_35316__$1;
(statearr_35374_35440[(1)] = (16));

} else {
var statearr_35375_35441 = state_35316__$1;
(statearr_35375_35441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (9))){
var inst_35245 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35376_35442 = state_35316__$1;
(statearr_35376_35442[(2)] = inst_35245);

(statearr_35376_35442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (5))){
var inst_35191 = cljs.core.deref.call(null,cs);
var inst_35192 = cljs.core.seq.call(null,inst_35191);
var inst_35193 = inst_35192;
var inst_35194 = null;
var inst_35195 = (0);
var inst_35196 = (0);
var state_35316__$1 = (function (){var statearr_35377 = state_35316;
(statearr_35377[(13)] = inst_35193);

(statearr_35377[(14)] = inst_35195);

(statearr_35377[(15)] = inst_35196);

(statearr_35377[(16)] = inst_35194);

return statearr_35377;
})();
var statearr_35378_35443 = state_35316__$1;
(statearr_35378_35443[(2)] = null);

(statearr_35378_35443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (14))){
var state_35316__$1 = state_35316;
var statearr_35379_35444 = state_35316__$1;
(statearr_35379_35444[(2)] = null);

(statearr_35379_35444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (45))){
var inst_35306 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35380_35445 = state_35316__$1;
(statearr_35380_35445[(2)] = inst_35306);

(statearr_35380_35445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (26))){
var inst_35248 = (state_35316[(29)]);
var inst_35302 = (state_35316[(2)]);
var inst_35303 = cljs.core.seq.call(null,inst_35248);
var state_35316__$1 = (function (){var statearr_35381 = state_35316;
(statearr_35381[(31)] = inst_35302);

return statearr_35381;
})();
if(inst_35303){
var statearr_35382_35446 = state_35316__$1;
(statearr_35382_35446[(1)] = (42));

} else {
var statearr_35383_35447 = state_35316__$1;
(statearr_35383_35447[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (16))){
var inst_35215 = (state_35316[(7)]);
var inst_35217 = cljs.core.chunked_seq_QMARK_.call(null,inst_35215);
var state_35316__$1 = state_35316;
if(inst_35217){
var statearr_35384_35448 = state_35316__$1;
(statearr_35384_35448[(1)] = (19));

} else {
var statearr_35385_35449 = state_35316__$1;
(statearr_35385_35449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (38))){
var inst_35295 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35386_35450 = state_35316__$1;
(statearr_35386_35450[(2)] = inst_35295);

(statearr_35386_35450[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (30))){
var state_35316__$1 = state_35316;
var statearr_35387_35451 = state_35316__$1;
(statearr_35387_35451[(2)] = null);

(statearr_35387_35451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (10))){
var inst_35196 = (state_35316[(15)]);
var inst_35194 = (state_35316[(16)]);
var inst_35204 = cljs.core._nth.call(null,inst_35194,inst_35196);
var inst_35205 = cljs.core.nth.call(null,inst_35204,(0),null);
var inst_35206 = cljs.core.nth.call(null,inst_35204,(1),null);
var state_35316__$1 = (function (){var statearr_35388 = state_35316;
(statearr_35388[(26)] = inst_35205);

return statearr_35388;
})();
if(cljs.core.truth_(inst_35206)){
var statearr_35389_35452 = state_35316__$1;
(statearr_35389_35452[(1)] = (13));

} else {
var statearr_35390_35453 = state_35316__$1;
(statearr_35390_35453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (18))){
var inst_35241 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35391_35454 = state_35316__$1;
(statearr_35391_35454[(2)] = inst_35241);

(statearr_35391_35454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (42))){
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35316__$1,(45),dchan);
} else {
if((state_val_35317 === (37))){
var inst_35284 = (state_35316[(23)]);
var inst_35275 = (state_35316[(25)]);
var inst_35184 = (state_35316[(12)]);
var inst_35284__$1 = cljs.core.first.call(null,inst_35275);
var inst_35285 = cljs.core.async.put_BANG_.call(null,inst_35284__$1,inst_35184,done);
var state_35316__$1 = (function (){var statearr_35392 = state_35316;
(statearr_35392[(23)] = inst_35284__$1);

return statearr_35392;
})();
if(cljs.core.truth_(inst_35285)){
var statearr_35393_35455 = state_35316__$1;
(statearr_35393_35455[(1)] = (39));

} else {
var statearr_35394_35456 = state_35316__$1;
(statearr_35394_35456[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (8))){
var inst_35195 = (state_35316[(14)]);
var inst_35196 = (state_35316[(15)]);
var inst_35198 = (inst_35196 < inst_35195);
var inst_35199 = inst_35198;
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35199)){
var statearr_35395_35457 = state_35316__$1;
(statearr_35395_35457[(1)] = (10));

} else {
var statearr_35396_35458 = state_35316__$1;
(statearr_35396_35458[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___35404,cs,m,dchan,dctr,done))
;
return ((function (switch__10890__auto__,c__10955__auto___35404,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10891__auto__ = null;
var cljs$core$async$mult_$_state_machine__10891__auto____0 = (function (){
var statearr_35400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35400[(0)] = cljs$core$async$mult_$_state_machine__10891__auto__);

(statearr_35400[(1)] = (1));

return statearr_35400;
});
var cljs$core$async$mult_$_state_machine__10891__auto____1 = (function (state_35316){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_35316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e35401){if((e35401 instanceof Object)){
var ex__10894__auto__ = e35401;
var statearr_35402_35459 = state_35316;
(statearr_35402_35459[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35460 = state_35316;
state_35316 = G__35460;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10891__auto__ = function(state_35316){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10891__auto____1.call(this,state_35316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10891__auto____0;
cljs$core$async$mult_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10891__auto____1;
return cljs$core$async$mult_$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___35404,cs,m,dchan,dctr,done))
})();
var state__10957__auto__ = (function (){var statearr_35403 = f__10956__auto__.call(null);
(statearr_35403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___35404);

return statearr_35403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___35404,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35461 = [];
var len__7229__auto___35464 = arguments.length;
var i__7230__auto___35465 = (0);
while(true){
if((i__7230__auto___35465 < len__7229__auto___35464)){
args35461.push((arguments[i__7230__auto___35465]));

var G__35466 = (i__7230__auto___35465 + (1));
i__7230__auto___35465 = G__35466;
continue;
} else {
}
break;
}

var G__35463 = args35461.length;
switch (G__35463) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35461.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,ch);
} else {
var m__6818__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,ch);
} else {
var m__6818__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m);
} else {
var m__6818__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,state_map);
} else {
var m__6818__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6817__auto__ = (((m == null))?null:m);
var m__6818__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,m,mode);
} else {
var m__6818__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7236__auto__ = [];
var len__7229__auto___35478 = arguments.length;
var i__7230__auto___35479 = (0);
while(true){
if((i__7230__auto___35479 < len__7229__auto___35478)){
args__7236__auto__.push((arguments[i__7230__auto___35479]));

var G__35480 = (i__7230__auto___35479 + (1));
i__7230__auto___35479 = G__35480;
continue;
} else {
}
break;
}

var argseq__7237__auto__ = ((((3) < args__7236__auto__.length))?(new cljs.core.IndexedSeq(args__7236__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7237__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35472){
var map__35473 = p__35472;
var map__35473__$1 = ((((!((map__35473 == null)))?((((map__35473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35473):map__35473);
var opts = map__35473__$1;
var statearr_35475_35481 = state;
(statearr_35475_35481[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35473,map__35473__$1,opts){
return (function (val){
var statearr_35476_35482 = state;
(statearr_35476_35482[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35473,map__35473__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35477_35483 = state;
(statearr_35477_35483[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35468){
var G__35469 = cljs.core.first.call(null,seq35468);
var seq35468__$1 = cljs.core.next.call(null,seq35468);
var G__35470 = cljs.core.first.call(null,seq35468__$1);
var seq35468__$2 = cljs.core.next.call(null,seq35468__$1);
var G__35471 = cljs.core.first.call(null,seq35468__$2);
var seq35468__$3 = cljs.core.next.call(null,seq35468__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35469,G__35470,G__35471,seq35468__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35649 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35650){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35650 = meta35650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35651,meta35650__$1){
var self__ = this;
var _35651__$1 = this;
return (new cljs.core.async.t_cljs$core$async35649(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35651){
var self__ = this;
var _35651__$1 = this;
return self__.meta35650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35650","meta35650",435039319,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35649";

cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async35649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35650){
return (new cljs.core.async.t_cljs$core$async35649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35649(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10955__auto___35814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35751){
var state_val_35752 = (state_35751[(1)]);
if((state_val_35752 === (7))){
var inst_35667 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35753_35815 = state_35751__$1;
(statearr_35753_35815[(2)] = inst_35667);

(statearr_35753_35815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (20))){
var inst_35679 = (state_35751[(7)]);
var state_35751__$1 = state_35751;
var statearr_35754_35816 = state_35751__$1;
(statearr_35754_35816[(2)] = inst_35679);

(statearr_35754_35816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (27))){
var state_35751__$1 = state_35751;
var statearr_35755_35817 = state_35751__$1;
(statearr_35755_35817[(2)] = null);

(statearr_35755_35817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (1))){
var inst_35655 = (state_35751[(8)]);
var inst_35655__$1 = calc_state.call(null);
var inst_35657 = (inst_35655__$1 == null);
var inst_35658 = cljs.core.not.call(null,inst_35657);
var state_35751__$1 = (function (){var statearr_35756 = state_35751;
(statearr_35756[(8)] = inst_35655__$1);

return statearr_35756;
})();
if(inst_35658){
var statearr_35757_35818 = state_35751__$1;
(statearr_35757_35818[(1)] = (2));

} else {
var statearr_35758_35819 = state_35751__$1;
(statearr_35758_35819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (24))){
var inst_35702 = (state_35751[(9)]);
var inst_35711 = (state_35751[(10)]);
var inst_35725 = (state_35751[(11)]);
var inst_35725__$1 = inst_35702.call(null,inst_35711);
var state_35751__$1 = (function (){var statearr_35759 = state_35751;
(statearr_35759[(11)] = inst_35725__$1);

return statearr_35759;
})();
if(cljs.core.truth_(inst_35725__$1)){
var statearr_35760_35820 = state_35751__$1;
(statearr_35760_35820[(1)] = (29));

} else {
var statearr_35761_35821 = state_35751__$1;
(statearr_35761_35821[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (4))){
var inst_35670 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35670)){
var statearr_35762_35822 = state_35751__$1;
(statearr_35762_35822[(1)] = (8));

} else {
var statearr_35763_35823 = state_35751__$1;
(statearr_35763_35823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (15))){
var inst_35696 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35696)){
var statearr_35764_35824 = state_35751__$1;
(statearr_35764_35824[(1)] = (19));

} else {
var statearr_35765_35825 = state_35751__$1;
(statearr_35765_35825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (21))){
var inst_35701 = (state_35751[(12)]);
var inst_35701__$1 = (state_35751[(2)]);
var inst_35702 = cljs.core.get.call(null,inst_35701__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35703 = cljs.core.get.call(null,inst_35701__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35704 = cljs.core.get.call(null,inst_35701__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35751__$1 = (function (){var statearr_35766 = state_35751;
(statearr_35766[(13)] = inst_35703);

(statearr_35766[(9)] = inst_35702);

(statearr_35766[(12)] = inst_35701__$1);

return statearr_35766;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35751__$1,(22),inst_35704);
} else {
if((state_val_35752 === (31))){
var inst_35733 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35733)){
var statearr_35767_35826 = state_35751__$1;
(statearr_35767_35826[(1)] = (32));

} else {
var statearr_35768_35827 = state_35751__$1;
(statearr_35768_35827[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (32))){
var inst_35710 = (state_35751[(14)]);
var state_35751__$1 = state_35751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35751__$1,(35),out,inst_35710);
} else {
if((state_val_35752 === (33))){
var inst_35701 = (state_35751[(12)]);
var inst_35679 = inst_35701;
var state_35751__$1 = (function (){var statearr_35769 = state_35751;
(statearr_35769[(7)] = inst_35679);

return statearr_35769;
})();
var statearr_35770_35828 = state_35751__$1;
(statearr_35770_35828[(2)] = null);

(statearr_35770_35828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (13))){
var inst_35679 = (state_35751[(7)]);
var inst_35686 = inst_35679.cljs$lang$protocol_mask$partition0$;
var inst_35687 = (inst_35686 & (64));
var inst_35688 = inst_35679.cljs$core$ISeq$;
var inst_35689 = (inst_35687) || (inst_35688);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35689)){
var statearr_35771_35829 = state_35751__$1;
(statearr_35771_35829[(1)] = (16));

} else {
var statearr_35772_35830 = state_35751__$1;
(statearr_35772_35830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (22))){
var inst_35711 = (state_35751[(10)]);
var inst_35710 = (state_35751[(14)]);
var inst_35709 = (state_35751[(2)]);
var inst_35710__$1 = cljs.core.nth.call(null,inst_35709,(0),null);
var inst_35711__$1 = cljs.core.nth.call(null,inst_35709,(1),null);
var inst_35712 = (inst_35710__$1 == null);
var inst_35713 = cljs.core._EQ_.call(null,inst_35711__$1,change);
var inst_35714 = (inst_35712) || (inst_35713);
var state_35751__$1 = (function (){var statearr_35773 = state_35751;
(statearr_35773[(10)] = inst_35711__$1);

(statearr_35773[(14)] = inst_35710__$1);

return statearr_35773;
})();
if(cljs.core.truth_(inst_35714)){
var statearr_35774_35831 = state_35751__$1;
(statearr_35774_35831[(1)] = (23));

} else {
var statearr_35775_35832 = state_35751__$1;
(statearr_35775_35832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (36))){
var inst_35701 = (state_35751[(12)]);
var inst_35679 = inst_35701;
var state_35751__$1 = (function (){var statearr_35776 = state_35751;
(statearr_35776[(7)] = inst_35679);

return statearr_35776;
})();
var statearr_35777_35833 = state_35751__$1;
(statearr_35777_35833[(2)] = null);

(statearr_35777_35833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (29))){
var inst_35725 = (state_35751[(11)]);
var state_35751__$1 = state_35751;
var statearr_35778_35834 = state_35751__$1;
(statearr_35778_35834[(2)] = inst_35725);

(statearr_35778_35834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (6))){
var state_35751__$1 = state_35751;
var statearr_35779_35835 = state_35751__$1;
(statearr_35779_35835[(2)] = false);

(statearr_35779_35835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (28))){
var inst_35721 = (state_35751[(2)]);
var inst_35722 = calc_state.call(null);
var inst_35679 = inst_35722;
var state_35751__$1 = (function (){var statearr_35780 = state_35751;
(statearr_35780[(7)] = inst_35679);

(statearr_35780[(15)] = inst_35721);

return statearr_35780;
})();
var statearr_35781_35836 = state_35751__$1;
(statearr_35781_35836[(2)] = null);

(statearr_35781_35836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (25))){
var inst_35747 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35782_35837 = state_35751__$1;
(statearr_35782_35837[(2)] = inst_35747);

(statearr_35782_35837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (34))){
var inst_35745 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35783_35838 = state_35751__$1;
(statearr_35783_35838[(2)] = inst_35745);

(statearr_35783_35838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (17))){
var state_35751__$1 = state_35751;
var statearr_35784_35839 = state_35751__$1;
(statearr_35784_35839[(2)] = false);

(statearr_35784_35839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (3))){
var state_35751__$1 = state_35751;
var statearr_35785_35840 = state_35751__$1;
(statearr_35785_35840[(2)] = false);

(statearr_35785_35840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (12))){
var inst_35749 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35751__$1,inst_35749);
} else {
if((state_val_35752 === (2))){
var inst_35655 = (state_35751[(8)]);
var inst_35660 = inst_35655.cljs$lang$protocol_mask$partition0$;
var inst_35661 = (inst_35660 & (64));
var inst_35662 = inst_35655.cljs$core$ISeq$;
var inst_35663 = (inst_35661) || (inst_35662);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35663)){
var statearr_35786_35841 = state_35751__$1;
(statearr_35786_35841[(1)] = (5));

} else {
var statearr_35787_35842 = state_35751__$1;
(statearr_35787_35842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (23))){
var inst_35710 = (state_35751[(14)]);
var inst_35716 = (inst_35710 == null);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35716)){
var statearr_35788_35843 = state_35751__$1;
(statearr_35788_35843[(1)] = (26));

} else {
var statearr_35789_35844 = state_35751__$1;
(statearr_35789_35844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (35))){
var inst_35736 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
if(cljs.core.truth_(inst_35736)){
var statearr_35790_35845 = state_35751__$1;
(statearr_35790_35845[(1)] = (36));

} else {
var statearr_35791_35846 = state_35751__$1;
(statearr_35791_35846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (19))){
var inst_35679 = (state_35751[(7)]);
var inst_35698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35679);
var state_35751__$1 = state_35751;
var statearr_35792_35847 = state_35751__$1;
(statearr_35792_35847[(2)] = inst_35698);

(statearr_35792_35847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (11))){
var inst_35679 = (state_35751[(7)]);
var inst_35683 = (inst_35679 == null);
var inst_35684 = cljs.core.not.call(null,inst_35683);
var state_35751__$1 = state_35751;
if(inst_35684){
var statearr_35793_35848 = state_35751__$1;
(statearr_35793_35848[(1)] = (13));

} else {
var statearr_35794_35849 = state_35751__$1;
(statearr_35794_35849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (9))){
var inst_35655 = (state_35751[(8)]);
var state_35751__$1 = state_35751;
var statearr_35795_35850 = state_35751__$1;
(statearr_35795_35850[(2)] = inst_35655);

(statearr_35795_35850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (5))){
var state_35751__$1 = state_35751;
var statearr_35796_35851 = state_35751__$1;
(statearr_35796_35851[(2)] = true);

(statearr_35796_35851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (14))){
var state_35751__$1 = state_35751;
var statearr_35797_35852 = state_35751__$1;
(statearr_35797_35852[(2)] = false);

(statearr_35797_35852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (26))){
var inst_35711 = (state_35751[(10)]);
var inst_35718 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35711);
var state_35751__$1 = state_35751;
var statearr_35798_35853 = state_35751__$1;
(statearr_35798_35853[(2)] = inst_35718);

(statearr_35798_35853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (16))){
var state_35751__$1 = state_35751;
var statearr_35799_35854 = state_35751__$1;
(statearr_35799_35854[(2)] = true);

(statearr_35799_35854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (38))){
var inst_35741 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35800_35855 = state_35751__$1;
(statearr_35800_35855[(2)] = inst_35741);

(statearr_35800_35855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (30))){
var inst_35703 = (state_35751[(13)]);
var inst_35702 = (state_35751[(9)]);
var inst_35711 = (state_35751[(10)]);
var inst_35728 = cljs.core.empty_QMARK_.call(null,inst_35702);
var inst_35729 = inst_35703.call(null,inst_35711);
var inst_35730 = cljs.core.not.call(null,inst_35729);
var inst_35731 = (inst_35728) && (inst_35730);
var state_35751__$1 = state_35751;
var statearr_35801_35856 = state_35751__$1;
(statearr_35801_35856[(2)] = inst_35731);

(statearr_35801_35856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (10))){
var inst_35655 = (state_35751[(8)]);
var inst_35675 = (state_35751[(2)]);
var inst_35676 = cljs.core.get.call(null,inst_35675,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35677 = cljs.core.get.call(null,inst_35675,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35678 = cljs.core.get.call(null,inst_35675,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35679 = inst_35655;
var state_35751__$1 = (function (){var statearr_35802 = state_35751;
(statearr_35802[(7)] = inst_35679);

(statearr_35802[(16)] = inst_35676);

(statearr_35802[(17)] = inst_35678);

(statearr_35802[(18)] = inst_35677);

return statearr_35802;
})();
var statearr_35803_35857 = state_35751__$1;
(statearr_35803_35857[(2)] = null);

(statearr_35803_35857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (18))){
var inst_35693 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35804_35858 = state_35751__$1;
(statearr_35804_35858[(2)] = inst_35693);

(statearr_35804_35858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (37))){
var state_35751__$1 = state_35751;
var statearr_35805_35859 = state_35751__$1;
(statearr_35805_35859[(2)] = null);

(statearr_35805_35859[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (8))){
var inst_35655 = (state_35751[(8)]);
var inst_35672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35655);
var state_35751__$1 = state_35751;
var statearr_35806_35860 = state_35751__$1;
(statearr_35806_35860[(2)] = inst_35672);

(statearr_35806_35860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10890__auto__,c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10891__auto__ = null;
var cljs$core$async$mix_$_state_machine__10891__auto____0 = (function (){
var statearr_35810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35810[(0)] = cljs$core$async$mix_$_state_machine__10891__auto__);

(statearr_35810[(1)] = (1));

return statearr_35810;
});
var cljs$core$async$mix_$_state_machine__10891__auto____1 = (function (state_35751){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_35751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e35811){if((e35811 instanceof Object)){
var ex__10894__auto__ = e35811;
var statearr_35812_35861 = state_35751;
(statearr_35812_35861[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35862 = state_35751;
state_35751 = G__35862;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10891__auto__ = function(state_35751){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10891__auto____1.call(this,state_35751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10891__auto____0;
cljs$core$async$mix_$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10891__auto____1;
return cljs$core$async$mix_$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10957__auto__ = (function (){var statearr_35813 = f__10956__auto__.call(null);
(statearr_35813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___35814);

return statearr_35813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___35814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6817__auto__ = (((p == null))?null:p);
var m__6818__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6818__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6817__auto__ = (((p == null))?null:p);
var m__6818__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,p,v,ch);
} else {
var m__6818__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35863 = [];
var len__7229__auto___35866 = arguments.length;
var i__7230__auto___35867 = (0);
while(true){
if((i__7230__auto___35867 < len__7229__auto___35866)){
args35863.push((arguments[i__7230__auto___35867]));

var G__35868 = (i__7230__auto___35867 + (1));
i__7230__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var G__35865 = args35863.length;
switch (G__35865) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35863.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6817__auto__ = (((p == null))?null:p);
var m__6818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,p);
} else {
var m__6818__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6817__auto__ = (((p == null))?null:p);
var m__6818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6817__auto__)]);
if(!((m__6818__auto__ == null))){
return m__6818__auto__.call(null,p,v);
} else {
var m__6818__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6818__auto____$1 == null))){
return m__6818__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35871 = [];
var len__7229__auto___35996 = arguments.length;
var i__7230__auto___35997 = (0);
while(true){
if((i__7230__auto___35997 < len__7229__auto___35996)){
args35871.push((arguments[i__7230__auto___35997]));

var G__35998 = (i__7230__auto___35997 + (1));
i__7230__auto___35997 = G__35998;
continue;
} else {
}
break;
}

var G__35873 = args35871.length;
switch (G__35873) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35871.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6154__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6154__auto__)){
return or__6154__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6154__auto__,mults){
return (function (p1__35870_SHARP_){
if(cljs.core.truth_(p1__35870_SHARP_.call(null,topic))){
return p1__35870_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6154__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35875 = meta35875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35876,meta35875__$1){
var self__ = this;
var _35876__$1 = this;
return (new cljs.core.async.t_cljs$core$async35874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35875__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35876){
var self__ = this;
var _35876__$1 = this;
return self__.meta35875;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35875","meta35875",503371791,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35874";

cljs.core.async.t_cljs$core$async35874.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async35874");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35874 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35875){
return (new cljs.core.async.t_cljs$core$async35874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35875));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10955__auto___36000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36000,mults,ensure_mult,p){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36000,mults,ensure_mult,p){
return (function (state_35948){
var state_val_35949 = (state_35948[(1)]);
if((state_val_35949 === (7))){
var inst_35944 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35950_36001 = state_35948__$1;
(statearr_35950_36001[(2)] = inst_35944);

(statearr_35950_36001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (20))){
var state_35948__$1 = state_35948;
var statearr_35951_36002 = state_35948__$1;
(statearr_35951_36002[(2)] = null);

(statearr_35951_36002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (1))){
var state_35948__$1 = state_35948;
var statearr_35952_36003 = state_35948__$1;
(statearr_35952_36003[(2)] = null);

(statearr_35952_36003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (24))){
var inst_35927 = (state_35948[(7)]);
var inst_35936 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35927);
var state_35948__$1 = state_35948;
var statearr_35953_36004 = state_35948__$1;
(statearr_35953_36004[(2)] = inst_35936);

(statearr_35953_36004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (4))){
var inst_35879 = (state_35948[(8)]);
var inst_35879__$1 = (state_35948[(2)]);
var inst_35880 = (inst_35879__$1 == null);
var state_35948__$1 = (function (){var statearr_35954 = state_35948;
(statearr_35954[(8)] = inst_35879__$1);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35880)){
var statearr_35955_36005 = state_35948__$1;
(statearr_35955_36005[(1)] = (5));

} else {
var statearr_35956_36006 = state_35948__$1;
(statearr_35956_36006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (15))){
var inst_35921 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35957_36007 = state_35948__$1;
(statearr_35957_36007[(2)] = inst_35921);

(statearr_35957_36007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (21))){
var inst_35941 = (state_35948[(2)]);
var state_35948__$1 = (function (){var statearr_35958 = state_35948;
(statearr_35958[(9)] = inst_35941);

return statearr_35958;
})();
var statearr_35959_36008 = state_35948__$1;
(statearr_35959_36008[(2)] = null);

(statearr_35959_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (13))){
var inst_35903 = (state_35948[(10)]);
var inst_35905 = cljs.core.chunked_seq_QMARK_.call(null,inst_35903);
var state_35948__$1 = state_35948;
if(inst_35905){
var statearr_35960_36009 = state_35948__$1;
(statearr_35960_36009[(1)] = (16));

} else {
var statearr_35961_36010 = state_35948__$1;
(statearr_35961_36010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (22))){
var inst_35933 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
if(cljs.core.truth_(inst_35933)){
var statearr_35962_36011 = state_35948__$1;
(statearr_35962_36011[(1)] = (23));

} else {
var statearr_35963_36012 = state_35948__$1;
(statearr_35963_36012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (6))){
var inst_35879 = (state_35948[(8)]);
var inst_35929 = (state_35948[(11)]);
var inst_35927 = (state_35948[(7)]);
var inst_35927__$1 = topic_fn.call(null,inst_35879);
var inst_35928 = cljs.core.deref.call(null,mults);
var inst_35929__$1 = cljs.core.get.call(null,inst_35928,inst_35927__$1);
var state_35948__$1 = (function (){var statearr_35964 = state_35948;
(statearr_35964[(11)] = inst_35929__$1);

(statearr_35964[(7)] = inst_35927__$1);

return statearr_35964;
})();
if(cljs.core.truth_(inst_35929__$1)){
var statearr_35965_36013 = state_35948__$1;
(statearr_35965_36013[(1)] = (19));

} else {
var statearr_35966_36014 = state_35948__$1;
(statearr_35966_36014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (25))){
var inst_35938 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35967_36015 = state_35948__$1;
(statearr_35967_36015[(2)] = inst_35938);

(statearr_35967_36015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (17))){
var inst_35903 = (state_35948[(10)]);
var inst_35912 = cljs.core.first.call(null,inst_35903);
var inst_35913 = cljs.core.async.muxch_STAR_.call(null,inst_35912);
var inst_35914 = cljs.core.async.close_BANG_.call(null,inst_35913);
var inst_35915 = cljs.core.next.call(null,inst_35903);
var inst_35889 = inst_35915;
var inst_35890 = null;
var inst_35891 = (0);
var inst_35892 = (0);
var state_35948__$1 = (function (){var statearr_35968 = state_35948;
(statearr_35968[(12)] = inst_35892);

(statearr_35968[(13)] = inst_35914);

(statearr_35968[(14)] = inst_35889);

(statearr_35968[(15)] = inst_35891);

(statearr_35968[(16)] = inst_35890);

return statearr_35968;
})();
var statearr_35969_36016 = state_35948__$1;
(statearr_35969_36016[(2)] = null);

(statearr_35969_36016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (3))){
var inst_35946 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35948__$1,inst_35946);
} else {
if((state_val_35949 === (12))){
var inst_35923 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35970_36017 = state_35948__$1;
(statearr_35970_36017[(2)] = inst_35923);

(statearr_35970_36017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (2))){
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35948__$1,(4),ch);
} else {
if((state_val_35949 === (23))){
var state_35948__$1 = state_35948;
var statearr_35971_36018 = state_35948__$1;
(statearr_35971_36018[(2)] = null);

(statearr_35971_36018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (19))){
var inst_35879 = (state_35948[(8)]);
var inst_35929 = (state_35948[(11)]);
var inst_35931 = cljs.core.async.muxch_STAR_.call(null,inst_35929);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35948__$1,(22),inst_35931,inst_35879);
} else {
if((state_val_35949 === (11))){
var inst_35889 = (state_35948[(14)]);
var inst_35903 = (state_35948[(10)]);
var inst_35903__$1 = cljs.core.seq.call(null,inst_35889);
var state_35948__$1 = (function (){var statearr_35972 = state_35948;
(statearr_35972[(10)] = inst_35903__$1);

return statearr_35972;
})();
if(inst_35903__$1){
var statearr_35973_36019 = state_35948__$1;
(statearr_35973_36019[(1)] = (13));

} else {
var statearr_35974_36020 = state_35948__$1;
(statearr_35974_36020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (9))){
var inst_35925 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35975_36021 = state_35948__$1;
(statearr_35975_36021[(2)] = inst_35925);

(statearr_35975_36021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (5))){
var inst_35886 = cljs.core.deref.call(null,mults);
var inst_35887 = cljs.core.vals.call(null,inst_35886);
var inst_35888 = cljs.core.seq.call(null,inst_35887);
var inst_35889 = inst_35888;
var inst_35890 = null;
var inst_35891 = (0);
var inst_35892 = (0);
var state_35948__$1 = (function (){var statearr_35976 = state_35948;
(statearr_35976[(12)] = inst_35892);

(statearr_35976[(14)] = inst_35889);

(statearr_35976[(15)] = inst_35891);

(statearr_35976[(16)] = inst_35890);

return statearr_35976;
})();
var statearr_35977_36022 = state_35948__$1;
(statearr_35977_36022[(2)] = null);

(statearr_35977_36022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (14))){
var state_35948__$1 = state_35948;
var statearr_35981_36023 = state_35948__$1;
(statearr_35981_36023[(2)] = null);

(statearr_35981_36023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (16))){
var inst_35903 = (state_35948[(10)]);
var inst_35907 = cljs.core.chunk_first.call(null,inst_35903);
var inst_35908 = cljs.core.chunk_rest.call(null,inst_35903);
var inst_35909 = cljs.core.count.call(null,inst_35907);
var inst_35889 = inst_35908;
var inst_35890 = inst_35907;
var inst_35891 = inst_35909;
var inst_35892 = (0);
var state_35948__$1 = (function (){var statearr_35982 = state_35948;
(statearr_35982[(12)] = inst_35892);

(statearr_35982[(14)] = inst_35889);

(statearr_35982[(15)] = inst_35891);

(statearr_35982[(16)] = inst_35890);

return statearr_35982;
})();
var statearr_35983_36024 = state_35948__$1;
(statearr_35983_36024[(2)] = null);

(statearr_35983_36024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (10))){
var inst_35892 = (state_35948[(12)]);
var inst_35889 = (state_35948[(14)]);
var inst_35891 = (state_35948[(15)]);
var inst_35890 = (state_35948[(16)]);
var inst_35897 = cljs.core._nth.call(null,inst_35890,inst_35892);
var inst_35898 = cljs.core.async.muxch_STAR_.call(null,inst_35897);
var inst_35899 = cljs.core.async.close_BANG_.call(null,inst_35898);
var inst_35900 = (inst_35892 + (1));
var tmp35978 = inst_35889;
var tmp35979 = inst_35891;
var tmp35980 = inst_35890;
var inst_35889__$1 = tmp35978;
var inst_35890__$1 = tmp35980;
var inst_35891__$1 = tmp35979;
var inst_35892__$1 = inst_35900;
var state_35948__$1 = (function (){var statearr_35984 = state_35948;
(statearr_35984[(12)] = inst_35892__$1);

(statearr_35984[(14)] = inst_35889__$1);

(statearr_35984[(15)] = inst_35891__$1);

(statearr_35984[(16)] = inst_35890__$1);

(statearr_35984[(17)] = inst_35899);

return statearr_35984;
})();
var statearr_35985_36025 = state_35948__$1;
(statearr_35985_36025[(2)] = null);

(statearr_35985_36025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (18))){
var inst_35918 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35986_36026 = state_35948__$1;
(statearr_35986_36026[(2)] = inst_35918);

(statearr_35986_36026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (8))){
var inst_35892 = (state_35948[(12)]);
var inst_35891 = (state_35948[(15)]);
var inst_35894 = (inst_35892 < inst_35891);
var inst_35895 = inst_35894;
var state_35948__$1 = state_35948;
if(cljs.core.truth_(inst_35895)){
var statearr_35987_36027 = state_35948__$1;
(statearr_35987_36027[(1)] = (10));

} else {
var statearr_35988_36028 = state_35948__$1;
(statearr_35988_36028[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36000,mults,ensure_mult,p))
;
return ((function (switch__10890__auto__,c__10955__auto___36000,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_35992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35992[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_35992[(1)] = (1));

return statearr_35992;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_35948){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_35948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e35993){if((e35993 instanceof Object)){
var ex__10894__auto__ = e35993;
var statearr_35994_36029 = state_35948;
(statearr_35994_36029[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36030 = state_35948;
state_35948 = G__36030;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_35948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_35948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36000,mults,ensure_mult,p))
})();
var state__10957__auto__ = (function (){var statearr_35995 = f__10956__auto__.call(null);
(statearr_35995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36000);

return statearr_35995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36000,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args36031 = [];
var len__7229__auto___36034 = arguments.length;
var i__7230__auto___36035 = (0);
while(true){
if((i__7230__auto___36035 < len__7229__auto___36034)){
args36031.push((arguments[i__7230__auto___36035]));

var G__36036 = (i__7230__auto___36035 + (1));
i__7230__auto___36035 = G__36036;
continue;
} else {
}
break;
}

var G__36033 = args36031.length;
switch (G__36033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36031.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36038 = [];
var len__7229__auto___36041 = arguments.length;
var i__7230__auto___36042 = (0);
while(true){
if((i__7230__auto___36042 < len__7229__auto___36041)){
args36038.push((arguments[i__7230__auto___36042]));

var G__36043 = (i__7230__auto___36042 + (1));
i__7230__auto___36042 = G__36043;
continue;
} else {
}
break;
}

var G__36040 = args36038.length;
switch (G__36040) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36038.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args36045 = [];
var len__7229__auto___36116 = arguments.length;
var i__7230__auto___36117 = (0);
while(true){
if((i__7230__auto___36117 < len__7229__auto___36116)){
args36045.push((arguments[i__7230__auto___36117]));

var G__36118 = (i__7230__auto___36117 + (1));
i__7230__auto___36117 = G__36118;
continue;
} else {
}
break;
}

var G__36047 = args36045.length;
switch (G__36047) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36045.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10955__auto___36120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36086){
var state_val_36087 = (state_36086[(1)]);
if((state_val_36087 === (7))){
var state_36086__$1 = state_36086;
var statearr_36088_36121 = state_36086__$1;
(statearr_36088_36121[(2)] = null);

(statearr_36088_36121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (1))){
var state_36086__$1 = state_36086;
var statearr_36089_36122 = state_36086__$1;
(statearr_36089_36122[(2)] = null);

(statearr_36089_36122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (4))){
var inst_36050 = (state_36086[(7)]);
var inst_36052 = (inst_36050 < cnt);
var state_36086__$1 = state_36086;
if(cljs.core.truth_(inst_36052)){
var statearr_36090_36123 = state_36086__$1;
(statearr_36090_36123[(1)] = (6));

} else {
var statearr_36091_36124 = state_36086__$1;
(statearr_36091_36124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (15))){
var inst_36082 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
var statearr_36092_36125 = state_36086__$1;
(statearr_36092_36125[(2)] = inst_36082);

(statearr_36092_36125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (13))){
var inst_36075 = cljs.core.async.close_BANG_.call(null,out);
var state_36086__$1 = state_36086;
var statearr_36093_36126 = state_36086__$1;
(statearr_36093_36126[(2)] = inst_36075);

(statearr_36093_36126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (6))){
var state_36086__$1 = state_36086;
var statearr_36094_36127 = state_36086__$1;
(statearr_36094_36127[(2)] = null);

(statearr_36094_36127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (3))){
var inst_36084 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36086__$1,inst_36084);
} else {
if((state_val_36087 === (12))){
var inst_36072 = (state_36086[(8)]);
var inst_36072__$1 = (state_36086[(2)]);
var inst_36073 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36072__$1);
var state_36086__$1 = (function (){var statearr_36095 = state_36086;
(statearr_36095[(8)] = inst_36072__$1);

return statearr_36095;
})();
if(cljs.core.truth_(inst_36073)){
var statearr_36096_36128 = state_36086__$1;
(statearr_36096_36128[(1)] = (13));

} else {
var statearr_36097_36129 = state_36086__$1;
(statearr_36097_36129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (2))){
var inst_36049 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36050 = (0);
var state_36086__$1 = (function (){var statearr_36098 = state_36086;
(statearr_36098[(9)] = inst_36049);

(statearr_36098[(7)] = inst_36050);

return statearr_36098;
})();
var statearr_36099_36130 = state_36086__$1;
(statearr_36099_36130[(2)] = null);

(statearr_36099_36130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (11))){
var inst_36050 = (state_36086[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36086,(10),Object,null,(9));
var inst_36059 = chs__$1.call(null,inst_36050);
var inst_36060 = done.call(null,inst_36050);
var inst_36061 = cljs.core.async.take_BANG_.call(null,inst_36059,inst_36060);
var state_36086__$1 = state_36086;
var statearr_36100_36131 = state_36086__$1;
(statearr_36100_36131[(2)] = inst_36061);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (9))){
var inst_36050 = (state_36086[(7)]);
var inst_36063 = (state_36086[(2)]);
var inst_36064 = (inst_36050 + (1));
var inst_36050__$1 = inst_36064;
var state_36086__$1 = (function (){var statearr_36101 = state_36086;
(statearr_36101[(7)] = inst_36050__$1);

(statearr_36101[(10)] = inst_36063);

return statearr_36101;
})();
var statearr_36102_36132 = state_36086__$1;
(statearr_36102_36132[(2)] = null);

(statearr_36102_36132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (5))){
var inst_36070 = (state_36086[(2)]);
var state_36086__$1 = (function (){var statearr_36103 = state_36086;
(statearr_36103[(11)] = inst_36070);

return statearr_36103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36086__$1,(12),dchan);
} else {
if((state_val_36087 === (14))){
var inst_36072 = (state_36086[(8)]);
var inst_36077 = cljs.core.apply.call(null,f,inst_36072);
var state_36086__$1 = state_36086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36086__$1,(16),out,inst_36077);
} else {
if((state_val_36087 === (16))){
var inst_36079 = (state_36086[(2)]);
var state_36086__$1 = (function (){var statearr_36104 = state_36086;
(statearr_36104[(12)] = inst_36079);

return statearr_36104;
})();
var statearr_36105_36133 = state_36086__$1;
(statearr_36105_36133[(2)] = null);

(statearr_36105_36133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (10))){
var inst_36054 = (state_36086[(2)]);
var inst_36055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36086__$1 = (function (){var statearr_36106 = state_36086;
(statearr_36106[(13)] = inst_36054);

return statearr_36106;
})();
var statearr_36107_36134 = state_36086__$1;
(statearr_36107_36134[(2)] = inst_36055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (8))){
var inst_36068 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
var statearr_36108_36135 = state_36086__$1;
(statearr_36108_36135[(2)] = inst_36068);

(statearr_36108_36135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10890__auto__,c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36112[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36112[(1)] = (1));

return statearr_36112;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36086){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36113){if((e36113 instanceof Object)){
var ex__10894__auto__ = e36113;
var statearr_36114_36136 = state_36086;
(statearr_36114_36136[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36137 = state_36086;
state_36086 = G__36137;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10957__auto__ = (function (){var statearr_36115 = f__10956__auto__.call(null);
(statearr_36115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36120);

return statearr_36115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36120,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args36139 = [];
var len__7229__auto___36197 = arguments.length;
var i__7230__auto___36198 = (0);
while(true){
if((i__7230__auto___36198 < len__7229__auto___36197)){
args36139.push((arguments[i__7230__auto___36198]));

var G__36199 = (i__7230__auto___36198 + (1));
i__7230__auto___36198 = G__36199;
continue;
} else {
}
break;
}

var G__36141 = args36139.length;
switch (G__36141) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36139.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36201,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36201,out){
return (function (state_36173){
var state_val_36174 = (state_36173[(1)]);
if((state_val_36174 === (7))){
var inst_36152 = (state_36173[(7)]);
var inst_36153 = (state_36173[(8)]);
var inst_36152__$1 = (state_36173[(2)]);
var inst_36153__$1 = cljs.core.nth.call(null,inst_36152__$1,(0),null);
var inst_36154 = cljs.core.nth.call(null,inst_36152__$1,(1),null);
var inst_36155 = (inst_36153__$1 == null);
var state_36173__$1 = (function (){var statearr_36175 = state_36173;
(statearr_36175[(7)] = inst_36152__$1);

(statearr_36175[(8)] = inst_36153__$1);

(statearr_36175[(9)] = inst_36154);

return statearr_36175;
})();
if(cljs.core.truth_(inst_36155)){
var statearr_36176_36202 = state_36173__$1;
(statearr_36176_36202[(1)] = (8));

} else {
var statearr_36177_36203 = state_36173__$1;
(statearr_36177_36203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (1))){
var inst_36142 = cljs.core.vec.call(null,chs);
var inst_36143 = inst_36142;
var state_36173__$1 = (function (){var statearr_36178 = state_36173;
(statearr_36178[(10)] = inst_36143);

return statearr_36178;
})();
var statearr_36179_36204 = state_36173__$1;
(statearr_36179_36204[(2)] = null);

(statearr_36179_36204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (4))){
var inst_36143 = (state_36173[(10)]);
var state_36173__$1 = state_36173;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36173__$1,(7),inst_36143);
} else {
if((state_val_36174 === (6))){
var inst_36169 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36180_36205 = state_36173__$1;
(statearr_36180_36205[(2)] = inst_36169);

(statearr_36180_36205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (3))){
var inst_36171 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36173__$1,inst_36171);
} else {
if((state_val_36174 === (2))){
var inst_36143 = (state_36173[(10)]);
var inst_36145 = cljs.core.count.call(null,inst_36143);
var inst_36146 = (inst_36145 > (0));
var state_36173__$1 = state_36173;
if(cljs.core.truth_(inst_36146)){
var statearr_36182_36206 = state_36173__$1;
(statearr_36182_36206[(1)] = (4));

} else {
var statearr_36183_36207 = state_36173__$1;
(statearr_36183_36207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (11))){
var inst_36143 = (state_36173[(10)]);
var inst_36162 = (state_36173[(2)]);
var tmp36181 = inst_36143;
var inst_36143__$1 = tmp36181;
var state_36173__$1 = (function (){var statearr_36184 = state_36173;
(statearr_36184[(11)] = inst_36162);

(statearr_36184[(10)] = inst_36143__$1);

return statearr_36184;
})();
var statearr_36185_36208 = state_36173__$1;
(statearr_36185_36208[(2)] = null);

(statearr_36185_36208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (9))){
var inst_36153 = (state_36173[(8)]);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36173__$1,(11),out,inst_36153);
} else {
if((state_val_36174 === (5))){
var inst_36167 = cljs.core.async.close_BANG_.call(null,out);
var state_36173__$1 = state_36173;
var statearr_36186_36209 = state_36173__$1;
(statearr_36186_36209[(2)] = inst_36167);

(statearr_36186_36209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (10))){
var inst_36165 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36187_36210 = state_36173__$1;
(statearr_36187_36210[(2)] = inst_36165);

(statearr_36187_36210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (8))){
var inst_36152 = (state_36173[(7)]);
var inst_36143 = (state_36173[(10)]);
var inst_36153 = (state_36173[(8)]);
var inst_36154 = (state_36173[(9)]);
var inst_36157 = (function (){var cs = inst_36143;
var vec__36148 = inst_36152;
var v = inst_36153;
var c = inst_36154;
return ((function (cs,vec__36148,v,c,inst_36152,inst_36143,inst_36153,inst_36154,state_val_36174,c__10955__auto___36201,out){
return (function (p1__36138_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36138_SHARP_);
});
;})(cs,vec__36148,v,c,inst_36152,inst_36143,inst_36153,inst_36154,state_val_36174,c__10955__auto___36201,out))
})();
var inst_36158 = cljs.core.filterv.call(null,inst_36157,inst_36143);
var inst_36143__$1 = inst_36158;
var state_36173__$1 = (function (){var statearr_36188 = state_36173;
(statearr_36188[(10)] = inst_36143__$1);

return statearr_36188;
})();
var statearr_36189_36211 = state_36173__$1;
(statearr_36189_36211[(2)] = null);

(statearr_36189_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36201,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36201,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36193[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36193[(1)] = (1));

return statearr_36193;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36173){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36194){if((e36194 instanceof Object)){
var ex__10894__auto__ = e36194;
var statearr_36195_36212 = state_36173;
(statearr_36195_36212[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36213 = state_36173;
state_36173 = G__36213;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36201,out))
})();
var state__10957__auto__ = (function (){var statearr_36196 = f__10956__auto__.call(null);
(statearr_36196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36201);

return statearr_36196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36201,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36214 = [];
var len__7229__auto___36263 = arguments.length;
var i__7230__auto___36264 = (0);
while(true){
if((i__7230__auto___36264 < len__7229__auto___36263)){
args36214.push((arguments[i__7230__auto___36264]));

var G__36265 = (i__7230__auto___36264 + (1));
i__7230__auto___36264 = G__36265;
continue;
} else {
}
break;
}

var G__36216 = args36214.length;
switch (G__36216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36214.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36267,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36267,out){
return (function (state_36240){
var state_val_36241 = (state_36240[(1)]);
if((state_val_36241 === (7))){
var inst_36222 = (state_36240[(7)]);
var inst_36222__$1 = (state_36240[(2)]);
var inst_36223 = (inst_36222__$1 == null);
var inst_36224 = cljs.core.not.call(null,inst_36223);
var state_36240__$1 = (function (){var statearr_36242 = state_36240;
(statearr_36242[(7)] = inst_36222__$1);

return statearr_36242;
})();
if(inst_36224){
var statearr_36243_36268 = state_36240__$1;
(statearr_36243_36268[(1)] = (8));

} else {
var statearr_36244_36269 = state_36240__$1;
(statearr_36244_36269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (1))){
var inst_36217 = (0);
var state_36240__$1 = (function (){var statearr_36245 = state_36240;
(statearr_36245[(8)] = inst_36217);

return statearr_36245;
})();
var statearr_36246_36270 = state_36240__$1;
(statearr_36246_36270[(2)] = null);

(statearr_36246_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (4))){
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36240__$1,(7),ch);
} else {
if((state_val_36241 === (6))){
var inst_36235 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36247_36271 = state_36240__$1;
(statearr_36247_36271[(2)] = inst_36235);

(statearr_36247_36271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (3))){
var inst_36237 = (state_36240[(2)]);
var inst_36238 = cljs.core.async.close_BANG_.call(null,out);
var state_36240__$1 = (function (){var statearr_36248 = state_36240;
(statearr_36248[(9)] = inst_36237);

return statearr_36248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36240__$1,inst_36238);
} else {
if((state_val_36241 === (2))){
var inst_36217 = (state_36240[(8)]);
var inst_36219 = (inst_36217 < n);
var state_36240__$1 = state_36240;
if(cljs.core.truth_(inst_36219)){
var statearr_36249_36272 = state_36240__$1;
(statearr_36249_36272[(1)] = (4));

} else {
var statearr_36250_36273 = state_36240__$1;
(statearr_36250_36273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (11))){
var inst_36217 = (state_36240[(8)]);
var inst_36227 = (state_36240[(2)]);
var inst_36228 = (inst_36217 + (1));
var inst_36217__$1 = inst_36228;
var state_36240__$1 = (function (){var statearr_36251 = state_36240;
(statearr_36251[(8)] = inst_36217__$1);

(statearr_36251[(10)] = inst_36227);

return statearr_36251;
})();
var statearr_36252_36274 = state_36240__$1;
(statearr_36252_36274[(2)] = null);

(statearr_36252_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (9))){
var state_36240__$1 = state_36240;
var statearr_36253_36275 = state_36240__$1;
(statearr_36253_36275[(2)] = null);

(statearr_36253_36275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (5))){
var state_36240__$1 = state_36240;
var statearr_36254_36276 = state_36240__$1;
(statearr_36254_36276[(2)] = null);

(statearr_36254_36276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (10))){
var inst_36232 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36255_36277 = state_36240__$1;
(statearr_36255_36277[(2)] = inst_36232);

(statearr_36255_36277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (8))){
var inst_36222 = (state_36240[(7)]);
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36240__$1,(11),out,inst_36222);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36267,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36267,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36259[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36259[(1)] = (1));

return statearr_36259;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36240){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36260){if((e36260 instanceof Object)){
var ex__10894__auto__ = e36260;
var statearr_36261_36278 = state_36240;
(statearr_36261_36278[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36279 = state_36240;
state_36240 = G__36279;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36267,out))
})();
var state__10957__auto__ = (function (){var statearr_36262 = f__10956__auto__.call(null);
(statearr_36262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36267);

return statearr_36262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36267,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36287 = (function (map_LT_,f,ch,meta36288){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36288 = meta36288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36289,meta36288__$1){
var self__ = this;
var _36289__$1 = this;
return (new cljs.core.async.t_cljs$core$async36287(self__.map_LT_,self__.f,self__.ch,meta36288__$1));
});

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36289){
var self__ = this;
var _36289__$1 = this;
return self__.meta36288;
});

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36290 = (function (map_LT_,f,ch,meta36288,_,fn1,meta36291){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36288 = meta36288;
this._ = _;
this.fn1 = fn1;
this.meta36291 = meta36291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36292,meta36291__$1){
var self__ = this;
var _36292__$1 = this;
return (new cljs.core.async.t_cljs$core$async36290(self__.map_LT_,self__.f,self__.ch,self__.meta36288,self__._,self__.fn1,meta36291__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36292){
var self__ = this;
var _36292__$1 = this;
return self__.meta36291;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36280_SHARP_){
return f1.call(null,(((p1__36280_SHARP_ == null))?null:self__.f.call(null,p1__36280_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36287","cljs.core.async/t_cljs$core$async36287",613903261,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36291","meta36291",955912185,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36290";

cljs.core.async.t_cljs$core$async36290.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async36290");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36290 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36290(map_LT___$1,f__$1,ch__$1,meta36288__$1,___$2,fn1__$1,meta36291){
return (new cljs.core.async.t_cljs$core$async36290(map_LT___$1,f__$1,ch__$1,meta36288__$1,___$2,fn1__$1,meta36291));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36290(self__.map_LT_,self__.f,self__.ch,self__.meta36288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6142__auto__ = ret;
if(cljs.core.truth_(and__6142__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6142__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null)], null);
});

cljs.core.async.t_cljs$core$async36287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36287";

cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorPrWriter = (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async36287");
});

cljs.core.async.__GT_t_cljs$core$async36287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36287(map_LT___$1,f__$1,ch__$1,meta36288){
return (new cljs.core.async.t_cljs$core$async36287(map_LT___$1,f__$1,ch__$1,meta36288));
});

}

return (new cljs.core.async.t_cljs$core$async36287(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36296 = (function (map_GT_,f,ch,meta36297){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36297 = meta36297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36298,meta36297__$1){
var self__ = this;
var _36298__$1 = this;
return (new cljs.core.async.t_cljs$core$async36296(self__.map_GT_,self__.f,self__.ch,meta36297__$1));
});

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36298){
var self__ = this;
var _36298__$1 = this;
return self__.meta36297;
});

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36297","meta36297",1351225937,null)], null);
});

cljs.core.async.t_cljs$core$async36296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36296";

cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorPrWriter = (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async36296");
});

cljs.core.async.__GT_t_cljs$core$async36296 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36296(map_GT___$1,f__$1,ch__$1,meta36297){
return (new cljs.core.async.t_cljs$core$async36296(map_GT___$1,f__$1,ch__$1,meta36297));
});

}

return (new cljs.core.async.t_cljs$core$async36296(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36302 = (function (filter_GT_,p,ch,meta36303){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36303 = meta36303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36304,meta36303__$1){
var self__ = this;
var _36304__$1 = this;
return (new cljs.core.async.t_cljs$core$async36302(self__.filter_GT_,self__.p,self__.ch,meta36303__$1));
});

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36304){
var self__ = this;
var _36304__$1 = this;
return self__.meta36303;
});

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36303","meta36303",623286206,null)], null);
});

cljs.core.async.t_cljs$core$async36302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36302";

cljs.core.async.t_cljs$core$async36302.cljs$lang$ctorPrWriter = (function (this__6760__auto__,writer__6761__auto__,opt__6762__auto__){
return cljs.core._write.call(null,writer__6761__auto__,"cljs.core.async/t_cljs$core$async36302");
});

cljs.core.async.__GT_t_cljs$core$async36302 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36302(filter_GT___$1,p__$1,ch__$1,meta36303){
return (new cljs.core.async.t_cljs$core$async36302(filter_GT___$1,p__$1,ch__$1,meta36303));
});

}

return (new cljs.core.async.t_cljs$core$async36302(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36305 = [];
var len__7229__auto___36349 = arguments.length;
var i__7230__auto___36350 = (0);
while(true){
if((i__7230__auto___36350 < len__7229__auto___36349)){
args36305.push((arguments[i__7230__auto___36350]));

var G__36351 = (i__7230__auto___36350 + (1));
i__7230__auto___36350 = G__36351;
continue;
} else {
}
break;
}

var G__36307 = args36305.length;
switch (G__36307) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36305.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36353,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36353,out){
return (function (state_36328){
var state_val_36329 = (state_36328[(1)]);
if((state_val_36329 === (7))){
var inst_36324 = (state_36328[(2)]);
var state_36328__$1 = state_36328;
var statearr_36330_36354 = state_36328__$1;
(statearr_36330_36354[(2)] = inst_36324);

(statearr_36330_36354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (1))){
var state_36328__$1 = state_36328;
var statearr_36331_36355 = state_36328__$1;
(statearr_36331_36355[(2)] = null);

(statearr_36331_36355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (4))){
var inst_36310 = (state_36328[(7)]);
var inst_36310__$1 = (state_36328[(2)]);
var inst_36311 = (inst_36310__$1 == null);
var state_36328__$1 = (function (){var statearr_36332 = state_36328;
(statearr_36332[(7)] = inst_36310__$1);

return statearr_36332;
})();
if(cljs.core.truth_(inst_36311)){
var statearr_36333_36356 = state_36328__$1;
(statearr_36333_36356[(1)] = (5));

} else {
var statearr_36334_36357 = state_36328__$1;
(statearr_36334_36357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (6))){
var inst_36310 = (state_36328[(7)]);
var inst_36315 = p.call(null,inst_36310);
var state_36328__$1 = state_36328;
if(cljs.core.truth_(inst_36315)){
var statearr_36335_36358 = state_36328__$1;
(statearr_36335_36358[(1)] = (8));

} else {
var statearr_36336_36359 = state_36328__$1;
(statearr_36336_36359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (3))){
var inst_36326 = (state_36328[(2)]);
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36328__$1,inst_36326);
} else {
if((state_val_36329 === (2))){
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36328__$1,(4),ch);
} else {
if((state_val_36329 === (11))){
var inst_36318 = (state_36328[(2)]);
var state_36328__$1 = state_36328;
var statearr_36337_36360 = state_36328__$1;
(statearr_36337_36360[(2)] = inst_36318);

(statearr_36337_36360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (9))){
var state_36328__$1 = state_36328;
var statearr_36338_36361 = state_36328__$1;
(statearr_36338_36361[(2)] = null);

(statearr_36338_36361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (5))){
var inst_36313 = cljs.core.async.close_BANG_.call(null,out);
var state_36328__$1 = state_36328;
var statearr_36339_36362 = state_36328__$1;
(statearr_36339_36362[(2)] = inst_36313);

(statearr_36339_36362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (10))){
var inst_36321 = (state_36328[(2)]);
var state_36328__$1 = (function (){var statearr_36340 = state_36328;
(statearr_36340[(8)] = inst_36321);

return statearr_36340;
})();
var statearr_36341_36363 = state_36328__$1;
(statearr_36341_36363[(2)] = null);

(statearr_36341_36363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (8))){
var inst_36310 = (state_36328[(7)]);
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36328__$1,(11),out,inst_36310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36353,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36353,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36345 = [null,null,null,null,null,null,null,null,null];
(statearr_36345[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36345[(1)] = (1));

return statearr_36345;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36328){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36346){if((e36346 instanceof Object)){
var ex__10894__auto__ = e36346;
var statearr_36347_36364 = state_36328;
(statearr_36347_36364[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36365 = state_36328;
state_36328 = G__36365;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36353,out))
})();
var state__10957__auto__ = (function (){var statearr_36348 = f__10956__auto__.call(null);
(statearr_36348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36353);

return statearr_36348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36353,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36366 = [];
var len__7229__auto___36369 = arguments.length;
var i__7230__auto___36370 = (0);
while(true){
if((i__7230__auto___36370 < len__7229__auto___36369)){
args36366.push((arguments[i__7230__auto___36370]));

var G__36371 = (i__7230__auto___36370 + (1));
i__7230__auto___36370 = G__36371;
continue;
} else {
}
break;
}

var G__36368 = args36366.length;
switch (G__36368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36366.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto__){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto__){
return (function (state_36538){
var state_val_36539 = (state_36538[(1)]);
if((state_val_36539 === (7))){
var inst_36534 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36540_36581 = state_36538__$1;
(statearr_36540_36581[(2)] = inst_36534);

(statearr_36540_36581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (20))){
var inst_36504 = (state_36538[(7)]);
var inst_36515 = (state_36538[(2)]);
var inst_36516 = cljs.core.next.call(null,inst_36504);
var inst_36490 = inst_36516;
var inst_36491 = null;
var inst_36492 = (0);
var inst_36493 = (0);
var state_36538__$1 = (function (){var statearr_36541 = state_36538;
(statearr_36541[(8)] = inst_36492);

(statearr_36541[(9)] = inst_36491);

(statearr_36541[(10)] = inst_36515);

(statearr_36541[(11)] = inst_36490);

(statearr_36541[(12)] = inst_36493);

return statearr_36541;
})();
var statearr_36542_36582 = state_36538__$1;
(statearr_36542_36582[(2)] = null);

(statearr_36542_36582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (1))){
var state_36538__$1 = state_36538;
var statearr_36543_36583 = state_36538__$1;
(statearr_36543_36583[(2)] = null);

(statearr_36543_36583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (4))){
var inst_36479 = (state_36538[(13)]);
var inst_36479__$1 = (state_36538[(2)]);
var inst_36480 = (inst_36479__$1 == null);
var state_36538__$1 = (function (){var statearr_36544 = state_36538;
(statearr_36544[(13)] = inst_36479__$1);

return statearr_36544;
})();
if(cljs.core.truth_(inst_36480)){
var statearr_36545_36584 = state_36538__$1;
(statearr_36545_36584[(1)] = (5));

} else {
var statearr_36546_36585 = state_36538__$1;
(statearr_36546_36585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (15))){
var state_36538__$1 = state_36538;
var statearr_36550_36586 = state_36538__$1;
(statearr_36550_36586[(2)] = null);

(statearr_36550_36586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (21))){
var state_36538__$1 = state_36538;
var statearr_36551_36587 = state_36538__$1;
(statearr_36551_36587[(2)] = null);

(statearr_36551_36587[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (13))){
var inst_36492 = (state_36538[(8)]);
var inst_36491 = (state_36538[(9)]);
var inst_36490 = (state_36538[(11)]);
var inst_36493 = (state_36538[(12)]);
var inst_36500 = (state_36538[(2)]);
var inst_36501 = (inst_36493 + (1));
var tmp36547 = inst_36492;
var tmp36548 = inst_36491;
var tmp36549 = inst_36490;
var inst_36490__$1 = tmp36549;
var inst_36491__$1 = tmp36548;
var inst_36492__$1 = tmp36547;
var inst_36493__$1 = inst_36501;
var state_36538__$1 = (function (){var statearr_36552 = state_36538;
(statearr_36552[(8)] = inst_36492__$1);

(statearr_36552[(9)] = inst_36491__$1);

(statearr_36552[(11)] = inst_36490__$1);

(statearr_36552[(12)] = inst_36493__$1);

(statearr_36552[(14)] = inst_36500);

return statearr_36552;
})();
var statearr_36553_36588 = state_36538__$1;
(statearr_36553_36588[(2)] = null);

(statearr_36553_36588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (22))){
var state_36538__$1 = state_36538;
var statearr_36554_36589 = state_36538__$1;
(statearr_36554_36589[(2)] = null);

(statearr_36554_36589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (6))){
var inst_36479 = (state_36538[(13)]);
var inst_36488 = f.call(null,inst_36479);
var inst_36489 = cljs.core.seq.call(null,inst_36488);
var inst_36490 = inst_36489;
var inst_36491 = null;
var inst_36492 = (0);
var inst_36493 = (0);
var state_36538__$1 = (function (){var statearr_36555 = state_36538;
(statearr_36555[(8)] = inst_36492);

(statearr_36555[(9)] = inst_36491);

(statearr_36555[(11)] = inst_36490);

(statearr_36555[(12)] = inst_36493);

return statearr_36555;
})();
var statearr_36556_36590 = state_36538__$1;
(statearr_36556_36590[(2)] = null);

(statearr_36556_36590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (17))){
var inst_36504 = (state_36538[(7)]);
var inst_36508 = cljs.core.chunk_first.call(null,inst_36504);
var inst_36509 = cljs.core.chunk_rest.call(null,inst_36504);
var inst_36510 = cljs.core.count.call(null,inst_36508);
var inst_36490 = inst_36509;
var inst_36491 = inst_36508;
var inst_36492 = inst_36510;
var inst_36493 = (0);
var state_36538__$1 = (function (){var statearr_36557 = state_36538;
(statearr_36557[(8)] = inst_36492);

(statearr_36557[(9)] = inst_36491);

(statearr_36557[(11)] = inst_36490);

(statearr_36557[(12)] = inst_36493);

return statearr_36557;
})();
var statearr_36558_36591 = state_36538__$1;
(statearr_36558_36591[(2)] = null);

(statearr_36558_36591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (3))){
var inst_36536 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36538__$1,inst_36536);
} else {
if((state_val_36539 === (12))){
var inst_36524 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36559_36592 = state_36538__$1;
(statearr_36559_36592[(2)] = inst_36524);

(statearr_36559_36592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (2))){
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(4),in$);
} else {
if((state_val_36539 === (23))){
var inst_36532 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36560_36593 = state_36538__$1;
(statearr_36560_36593[(2)] = inst_36532);

(statearr_36560_36593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (19))){
var inst_36519 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36561_36594 = state_36538__$1;
(statearr_36561_36594[(2)] = inst_36519);

(statearr_36561_36594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (11))){
var inst_36504 = (state_36538[(7)]);
var inst_36490 = (state_36538[(11)]);
var inst_36504__$1 = cljs.core.seq.call(null,inst_36490);
var state_36538__$1 = (function (){var statearr_36562 = state_36538;
(statearr_36562[(7)] = inst_36504__$1);

return statearr_36562;
})();
if(inst_36504__$1){
var statearr_36563_36595 = state_36538__$1;
(statearr_36563_36595[(1)] = (14));

} else {
var statearr_36564_36596 = state_36538__$1;
(statearr_36564_36596[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (9))){
var inst_36526 = (state_36538[(2)]);
var inst_36527 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36538__$1 = (function (){var statearr_36565 = state_36538;
(statearr_36565[(15)] = inst_36526);

return statearr_36565;
})();
if(cljs.core.truth_(inst_36527)){
var statearr_36566_36597 = state_36538__$1;
(statearr_36566_36597[(1)] = (21));

} else {
var statearr_36567_36598 = state_36538__$1;
(statearr_36567_36598[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (5))){
var inst_36482 = cljs.core.async.close_BANG_.call(null,out);
var state_36538__$1 = state_36538;
var statearr_36568_36599 = state_36538__$1;
(statearr_36568_36599[(2)] = inst_36482);

(statearr_36568_36599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (14))){
var inst_36504 = (state_36538[(7)]);
var inst_36506 = cljs.core.chunked_seq_QMARK_.call(null,inst_36504);
var state_36538__$1 = state_36538;
if(inst_36506){
var statearr_36569_36600 = state_36538__$1;
(statearr_36569_36600[(1)] = (17));

} else {
var statearr_36570_36601 = state_36538__$1;
(statearr_36570_36601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (16))){
var inst_36522 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36571_36602 = state_36538__$1;
(statearr_36571_36602[(2)] = inst_36522);

(statearr_36571_36602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (10))){
var inst_36491 = (state_36538[(9)]);
var inst_36493 = (state_36538[(12)]);
var inst_36498 = cljs.core._nth.call(null,inst_36491,inst_36493);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36538__$1,(13),out,inst_36498);
} else {
if((state_val_36539 === (18))){
var inst_36504 = (state_36538[(7)]);
var inst_36513 = cljs.core.first.call(null,inst_36504);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36538__$1,(20),out,inst_36513);
} else {
if((state_val_36539 === (8))){
var inst_36492 = (state_36538[(8)]);
var inst_36493 = (state_36538[(12)]);
var inst_36495 = (inst_36493 < inst_36492);
var inst_36496 = inst_36495;
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36496)){
var statearr_36572_36603 = state_36538__$1;
(statearr_36572_36603[(1)] = (10));

} else {
var statearr_36573_36604 = state_36538__$1;
(statearr_36573_36604[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto__))
;
return ((function (switch__10890__auto__,c__10955__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____0 = (function (){
var statearr_36577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__);

(statearr_36577[(1)] = (1));

return statearr_36577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____1 = (function (state_36538){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36578){if((e36578 instanceof Object)){
var ex__10894__auto__ = e36578;
var statearr_36579_36605 = state_36538;
(statearr_36579_36605[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36606 = state_36538;
state_36538 = G__36606;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__ = function(state_36538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____1.call(this,state_36538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10891__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto__))
})();
var state__10957__auto__ = (function (){var statearr_36580 = f__10956__auto__.call(null);
(statearr_36580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto__);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto__))
);

return c__10955__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36607 = [];
var len__7229__auto___36610 = arguments.length;
var i__7230__auto___36611 = (0);
while(true){
if((i__7230__auto___36611 < len__7229__auto___36610)){
args36607.push((arguments[i__7230__auto___36611]));

var G__36612 = (i__7230__auto___36611 + (1));
i__7230__auto___36611 = G__36612;
continue;
} else {
}
break;
}

var G__36609 = args36607.length;
switch (G__36609) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36607.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36614 = [];
var len__7229__auto___36617 = arguments.length;
var i__7230__auto___36618 = (0);
while(true){
if((i__7230__auto___36618 < len__7229__auto___36617)){
args36614.push((arguments[i__7230__auto___36618]));

var G__36619 = (i__7230__auto___36618 + (1));
i__7230__auto___36618 = G__36619;
continue;
} else {
}
break;
}

var G__36616 = args36614.length;
switch (G__36616) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36614.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36621 = [];
var len__7229__auto___36672 = arguments.length;
var i__7230__auto___36673 = (0);
while(true){
if((i__7230__auto___36673 < len__7229__auto___36672)){
args36621.push((arguments[i__7230__auto___36673]));

var G__36674 = (i__7230__auto___36673 + (1));
i__7230__auto___36673 = G__36674;
continue;
} else {
}
break;
}

var G__36623 = args36621.length;
switch (G__36623) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36621.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36676,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36676,out){
return (function (state_36647){
var state_val_36648 = (state_36647[(1)]);
if((state_val_36648 === (7))){
var inst_36642 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
var statearr_36649_36677 = state_36647__$1;
(statearr_36649_36677[(2)] = inst_36642);

(statearr_36649_36677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (1))){
var inst_36624 = null;
var state_36647__$1 = (function (){var statearr_36650 = state_36647;
(statearr_36650[(7)] = inst_36624);

return statearr_36650;
})();
var statearr_36651_36678 = state_36647__$1;
(statearr_36651_36678[(2)] = null);

(statearr_36651_36678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (4))){
var inst_36627 = (state_36647[(8)]);
var inst_36627__$1 = (state_36647[(2)]);
var inst_36628 = (inst_36627__$1 == null);
var inst_36629 = cljs.core.not.call(null,inst_36628);
var state_36647__$1 = (function (){var statearr_36652 = state_36647;
(statearr_36652[(8)] = inst_36627__$1);

return statearr_36652;
})();
if(inst_36629){
var statearr_36653_36679 = state_36647__$1;
(statearr_36653_36679[(1)] = (5));

} else {
var statearr_36654_36680 = state_36647__$1;
(statearr_36654_36680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (6))){
var state_36647__$1 = state_36647;
var statearr_36655_36681 = state_36647__$1;
(statearr_36655_36681[(2)] = null);

(statearr_36655_36681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (3))){
var inst_36644 = (state_36647[(2)]);
var inst_36645 = cljs.core.async.close_BANG_.call(null,out);
var state_36647__$1 = (function (){var statearr_36656 = state_36647;
(statearr_36656[(9)] = inst_36644);

return statearr_36656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36647__$1,inst_36645);
} else {
if((state_val_36648 === (2))){
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36647__$1,(4),ch);
} else {
if((state_val_36648 === (11))){
var inst_36627 = (state_36647[(8)]);
var inst_36636 = (state_36647[(2)]);
var inst_36624 = inst_36627;
var state_36647__$1 = (function (){var statearr_36657 = state_36647;
(statearr_36657[(7)] = inst_36624);

(statearr_36657[(10)] = inst_36636);

return statearr_36657;
})();
var statearr_36658_36682 = state_36647__$1;
(statearr_36658_36682[(2)] = null);

(statearr_36658_36682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (9))){
var inst_36627 = (state_36647[(8)]);
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36647__$1,(11),out,inst_36627);
} else {
if((state_val_36648 === (5))){
var inst_36624 = (state_36647[(7)]);
var inst_36627 = (state_36647[(8)]);
var inst_36631 = cljs.core._EQ_.call(null,inst_36627,inst_36624);
var state_36647__$1 = state_36647;
if(inst_36631){
var statearr_36660_36683 = state_36647__$1;
(statearr_36660_36683[(1)] = (8));

} else {
var statearr_36661_36684 = state_36647__$1;
(statearr_36661_36684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (10))){
var inst_36639 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
var statearr_36662_36685 = state_36647__$1;
(statearr_36662_36685[(2)] = inst_36639);

(statearr_36662_36685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (8))){
var inst_36624 = (state_36647[(7)]);
var tmp36659 = inst_36624;
var inst_36624__$1 = tmp36659;
var state_36647__$1 = (function (){var statearr_36663 = state_36647;
(statearr_36663[(7)] = inst_36624__$1);

return statearr_36663;
})();
var statearr_36664_36686 = state_36647__$1;
(statearr_36664_36686[(2)] = null);

(statearr_36664_36686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36676,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36676,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36668[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36668[(1)] = (1));

return statearr_36668;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36647){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36669){if((e36669 instanceof Object)){
var ex__10894__auto__ = e36669;
var statearr_36670_36687 = state_36647;
(statearr_36670_36687[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36688 = state_36647;
state_36647 = G__36688;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36676,out))
})();
var state__10957__auto__ = (function (){var statearr_36671 = f__10956__auto__.call(null);
(statearr_36671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36676);

return statearr_36671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36676,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36689 = [];
var len__7229__auto___36759 = arguments.length;
var i__7230__auto___36760 = (0);
while(true){
if((i__7230__auto___36760 < len__7229__auto___36759)){
args36689.push((arguments[i__7230__auto___36760]));

var G__36761 = (i__7230__auto___36760 + (1));
i__7230__auto___36760 = G__36761;
continue;
} else {
}
break;
}

var G__36691 = args36689.length;
switch (G__36691) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36689.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36763,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36763,out){
return (function (state_36729){
var state_val_36730 = (state_36729[(1)]);
if((state_val_36730 === (7))){
var inst_36725 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36731_36764 = state_36729__$1;
(statearr_36731_36764[(2)] = inst_36725);

(statearr_36731_36764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (1))){
var inst_36692 = (new Array(n));
var inst_36693 = inst_36692;
var inst_36694 = (0);
var state_36729__$1 = (function (){var statearr_36732 = state_36729;
(statearr_36732[(7)] = inst_36694);

(statearr_36732[(8)] = inst_36693);

return statearr_36732;
})();
var statearr_36733_36765 = state_36729__$1;
(statearr_36733_36765[(2)] = null);

(statearr_36733_36765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (4))){
var inst_36697 = (state_36729[(9)]);
var inst_36697__$1 = (state_36729[(2)]);
var inst_36698 = (inst_36697__$1 == null);
var inst_36699 = cljs.core.not.call(null,inst_36698);
var state_36729__$1 = (function (){var statearr_36734 = state_36729;
(statearr_36734[(9)] = inst_36697__$1);

return statearr_36734;
})();
if(inst_36699){
var statearr_36735_36766 = state_36729__$1;
(statearr_36735_36766[(1)] = (5));

} else {
var statearr_36736_36767 = state_36729__$1;
(statearr_36736_36767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (15))){
var inst_36719 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36737_36768 = state_36729__$1;
(statearr_36737_36768[(2)] = inst_36719);

(statearr_36737_36768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (13))){
var state_36729__$1 = state_36729;
var statearr_36738_36769 = state_36729__$1;
(statearr_36738_36769[(2)] = null);

(statearr_36738_36769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (6))){
var inst_36694 = (state_36729[(7)]);
var inst_36715 = (inst_36694 > (0));
var state_36729__$1 = state_36729;
if(cljs.core.truth_(inst_36715)){
var statearr_36739_36770 = state_36729__$1;
(statearr_36739_36770[(1)] = (12));

} else {
var statearr_36740_36771 = state_36729__$1;
(statearr_36740_36771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (3))){
var inst_36727 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36729__$1,inst_36727);
} else {
if((state_val_36730 === (12))){
var inst_36693 = (state_36729[(8)]);
var inst_36717 = cljs.core.vec.call(null,inst_36693);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36729__$1,(15),out,inst_36717);
} else {
if((state_val_36730 === (2))){
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36729__$1,(4),ch);
} else {
if((state_val_36730 === (11))){
var inst_36709 = (state_36729[(2)]);
var inst_36710 = (new Array(n));
var inst_36693 = inst_36710;
var inst_36694 = (0);
var state_36729__$1 = (function (){var statearr_36741 = state_36729;
(statearr_36741[(10)] = inst_36709);

(statearr_36741[(7)] = inst_36694);

(statearr_36741[(8)] = inst_36693);

return statearr_36741;
})();
var statearr_36742_36772 = state_36729__$1;
(statearr_36742_36772[(2)] = null);

(statearr_36742_36772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (9))){
var inst_36693 = (state_36729[(8)]);
var inst_36707 = cljs.core.vec.call(null,inst_36693);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36729__$1,(11),out,inst_36707);
} else {
if((state_val_36730 === (5))){
var inst_36697 = (state_36729[(9)]);
var inst_36694 = (state_36729[(7)]);
var inst_36693 = (state_36729[(8)]);
var inst_36702 = (state_36729[(11)]);
var inst_36701 = (inst_36693[inst_36694] = inst_36697);
var inst_36702__$1 = (inst_36694 + (1));
var inst_36703 = (inst_36702__$1 < n);
var state_36729__$1 = (function (){var statearr_36743 = state_36729;
(statearr_36743[(12)] = inst_36701);

(statearr_36743[(11)] = inst_36702__$1);

return statearr_36743;
})();
if(cljs.core.truth_(inst_36703)){
var statearr_36744_36773 = state_36729__$1;
(statearr_36744_36773[(1)] = (8));

} else {
var statearr_36745_36774 = state_36729__$1;
(statearr_36745_36774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (14))){
var inst_36722 = (state_36729[(2)]);
var inst_36723 = cljs.core.async.close_BANG_.call(null,out);
var state_36729__$1 = (function (){var statearr_36747 = state_36729;
(statearr_36747[(13)] = inst_36722);

return statearr_36747;
})();
var statearr_36748_36775 = state_36729__$1;
(statearr_36748_36775[(2)] = inst_36723);

(statearr_36748_36775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (10))){
var inst_36713 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36749_36776 = state_36729__$1;
(statearr_36749_36776[(2)] = inst_36713);

(statearr_36749_36776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (8))){
var inst_36693 = (state_36729[(8)]);
var inst_36702 = (state_36729[(11)]);
var tmp36746 = inst_36693;
var inst_36693__$1 = tmp36746;
var inst_36694 = inst_36702;
var state_36729__$1 = (function (){var statearr_36750 = state_36729;
(statearr_36750[(7)] = inst_36694);

(statearr_36750[(8)] = inst_36693__$1);

return statearr_36750;
})();
var statearr_36751_36777 = state_36729__$1;
(statearr_36751_36777[(2)] = null);

(statearr_36751_36777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36763,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36763,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36755[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36755[(1)] = (1));

return statearr_36755;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36729){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36756){if((e36756 instanceof Object)){
var ex__10894__auto__ = e36756;
var statearr_36757_36778 = state_36729;
(statearr_36757_36778[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36779 = state_36729;
state_36729 = G__36779;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36763,out))
})();
var state__10957__auto__ = (function (){var statearr_36758 = f__10956__auto__.call(null);
(statearr_36758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36763);

return statearr_36758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36763,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36780 = [];
var len__7229__auto___36854 = arguments.length;
var i__7230__auto___36855 = (0);
while(true){
if((i__7230__auto___36855 < len__7229__auto___36854)){
args36780.push((arguments[i__7230__auto___36855]));

var G__36856 = (i__7230__auto___36855 + (1));
i__7230__auto___36855 = G__36856;
continue;
} else {
}
break;
}

var G__36782 = args36780.length;
switch (G__36782) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36780.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10955__auto___36858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10955__auto___36858,out){
return (function (){
var f__10956__auto__ = (function (){var switch__10890__auto__ = ((function (c__10955__auto___36858,out){
return (function (state_36824){
var state_val_36825 = (state_36824[(1)]);
if((state_val_36825 === (7))){
var inst_36820 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36826_36859 = state_36824__$1;
(statearr_36826_36859[(2)] = inst_36820);

(statearr_36826_36859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (1))){
var inst_36783 = [];
var inst_36784 = inst_36783;
var inst_36785 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36824__$1 = (function (){var statearr_36827 = state_36824;
(statearr_36827[(7)] = inst_36784);

(statearr_36827[(8)] = inst_36785);

return statearr_36827;
})();
var statearr_36828_36860 = state_36824__$1;
(statearr_36828_36860[(2)] = null);

(statearr_36828_36860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (4))){
var inst_36788 = (state_36824[(9)]);
var inst_36788__$1 = (state_36824[(2)]);
var inst_36789 = (inst_36788__$1 == null);
var inst_36790 = cljs.core.not.call(null,inst_36789);
var state_36824__$1 = (function (){var statearr_36829 = state_36824;
(statearr_36829[(9)] = inst_36788__$1);

return statearr_36829;
})();
if(inst_36790){
var statearr_36830_36861 = state_36824__$1;
(statearr_36830_36861[(1)] = (5));

} else {
var statearr_36831_36862 = state_36824__$1;
(statearr_36831_36862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (15))){
var inst_36814 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36832_36863 = state_36824__$1;
(statearr_36832_36863[(2)] = inst_36814);

(statearr_36832_36863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (13))){
var state_36824__$1 = state_36824;
var statearr_36833_36864 = state_36824__$1;
(statearr_36833_36864[(2)] = null);

(statearr_36833_36864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (6))){
var inst_36784 = (state_36824[(7)]);
var inst_36809 = inst_36784.length;
var inst_36810 = (inst_36809 > (0));
var state_36824__$1 = state_36824;
if(cljs.core.truth_(inst_36810)){
var statearr_36834_36865 = state_36824__$1;
(statearr_36834_36865[(1)] = (12));

} else {
var statearr_36835_36866 = state_36824__$1;
(statearr_36835_36866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (3))){
var inst_36822 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36824__$1,inst_36822);
} else {
if((state_val_36825 === (12))){
var inst_36784 = (state_36824[(7)]);
var inst_36812 = cljs.core.vec.call(null,inst_36784);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36824__$1,(15),out,inst_36812);
} else {
if((state_val_36825 === (2))){
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36824__$1,(4),ch);
} else {
if((state_val_36825 === (11))){
var inst_36788 = (state_36824[(9)]);
var inst_36792 = (state_36824[(10)]);
var inst_36802 = (state_36824[(2)]);
var inst_36803 = [];
var inst_36804 = inst_36803.push(inst_36788);
var inst_36784 = inst_36803;
var inst_36785 = inst_36792;
var state_36824__$1 = (function (){var statearr_36836 = state_36824;
(statearr_36836[(11)] = inst_36802);

(statearr_36836[(7)] = inst_36784);

(statearr_36836[(12)] = inst_36804);

(statearr_36836[(8)] = inst_36785);

return statearr_36836;
})();
var statearr_36837_36867 = state_36824__$1;
(statearr_36837_36867[(2)] = null);

(statearr_36837_36867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (9))){
var inst_36784 = (state_36824[(7)]);
var inst_36800 = cljs.core.vec.call(null,inst_36784);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36824__$1,(11),out,inst_36800);
} else {
if((state_val_36825 === (5))){
var inst_36785 = (state_36824[(8)]);
var inst_36788 = (state_36824[(9)]);
var inst_36792 = (state_36824[(10)]);
var inst_36792__$1 = f.call(null,inst_36788);
var inst_36793 = cljs.core._EQ_.call(null,inst_36792__$1,inst_36785);
var inst_36794 = cljs.core.keyword_identical_QMARK_.call(null,inst_36785,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36795 = (inst_36793) || (inst_36794);
var state_36824__$1 = (function (){var statearr_36838 = state_36824;
(statearr_36838[(10)] = inst_36792__$1);

return statearr_36838;
})();
if(cljs.core.truth_(inst_36795)){
var statearr_36839_36868 = state_36824__$1;
(statearr_36839_36868[(1)] = (8));

} else {
var statearr_36840_36869 = state_36824__$1;
(statearr_36840_36869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (14))){
var inst_36817 = (state_36824[(2)]);
var inst_36818 = cljs.core.async.close_BANG_.call(null,out);
var state_36824__$1 = (function (){var statearr_36842 = state_36824;
(statearr_36842[(13)] = inst_36817);

return statearr_36842;
})();
var statearr_36843_36870 = state_36824__$1;
(statearr_36843_36870[(2)] = inst_36818);

(statearr_36843_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (10))){
var inst_36807 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36844_36871 = state_36824__$1;
(statearr_36844_36871[(2)] = inst_36807);

(statearr_36844_36871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (8))){
var inst_36784 = (state_36824[(7)]);
var inst_36788 = (state_36824[(9)]);
var inst_36792 = (state_36824[(10)]);
var inst_36797 = inst_36784.push(inst_36788);
var tmp36841 = inst_36784;
var inst_36784__$1 = tmp36841;
var inst_36785 = inst_36792;
var state_36824__$1 = (function (){var statearr_36845 = state_36824;
(statearr_36845[(7)] = inst_36784__$1);

(statearr_36845[(14)] = inst_36797);

(statearr_36845[(8)] = inst_36785);

return statearr_36845;
})();
var statearr_36846_36872 = state_36824__$1;
(statearr_36846_36872[(2)] = null);

(statearr_36846_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10955__auto___36858,out))
;
return ((function (switch__10890__auto__,c__10955__auto___36858,out){
return (function() {
var cljs$core$async$state_machine__10891__auto__ = null;
var cljs$core$async$state_machine__10891__auto____0 = (function (){
var statearr_36850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36850[(0)] = cljs$core$async$state_machine__10891__auto__);

(statearr_36850[(1)] = (1));

return statearr_36850;
});
var cljs$core$async$state_machine__10891__auto____1 = (function (state_36824){
while(true){
var ret_value__10892__auto__ = (function (){try{while(true){
var result__10893__auto__ = switch__10890__auto__.call(null,state_36824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10893__auto__;
}
break;
}
}catch (e36851){if((e36851 instanceof Object)){
var ex__10894__auto__ = e36851;
var statearr_36852_36873 = state_36824;
(statearr_36852_36873[(5)] = ex__10894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_36824;
state_36824 = G__36874;
continue;
} else {
return ret_value__10892__auto__;
}
break;
}
});
cljs$core$async$state_machine__10891__auto__ = function(state_36824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10891__auto____1.call(this,state_36824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10891__auto____0;
cljs$core$async$state_machine__10891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10891__auto____1;
return cljs$core$async$state_machine__10891__auto__;
})()
;})(switch__10890__auto__,c__10955__auto___36858,out))
})();
var state__10957__auto__ = (function (){var statearr_36853 = f__10956__auto__.call(null);
(statearr_36853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10955__auto___36858);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10957__auto__);
});})(c__10955__auto___36858,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

