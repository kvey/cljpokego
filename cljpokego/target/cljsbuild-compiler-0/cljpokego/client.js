// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljpokego.client');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('re_com.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
var rand_chsk_type_26713 = new cljs.core.Keyword(null,"auto","auto",-566279492);
var packer_26714 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__26711_26715 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_26713,new cljs.core.Keyword(null,"packer","packer",66077544),packer_26714], null));
var map__26711_26716__$1 = ((((!((map__26711_26715 == null)))?((((map__26711_26715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26711_26715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711_26715):map__26711_26715);
var chsk_26717 = cljs.core.get.call(null,map__26711_26716__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_26718 = cljs.core.get.call(null,map__26711_26716__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_26719 = cljs.core.get.call(null,map__26711_26716__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_26720 = cljs.core.get.call(null,map__26711_26716__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljpokego.client.chsk = chsk_26717;

cljpokego.client.ch_chsk = ch_recv_26718;

cljpokego.client.chsk_send_BANG_ = send_fn_26719;

cljpokego.client.chsk_state = state_26720;
if(typeof cljpokego.client.global_gmap !== 'undefined'){
} else {
cljpokego.client.global_gmap = cljs.core.atom.call(null,null);
}
cljpokego.client.tilesource = "//tile.stamen.com/toner/{z}/{x}/{y}.png";
cljpokego.client.map_style = Immutable.fromJS(rasterTileStyle([cljpokego.client.tilesource]));
if(typeof cljpokego.client.db !== 'undefined'){
} else {
cljpokego.client.db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-type","map-type",444156565),new cljs.core.Keyword(null,"google-map","google-map",1960730035),new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"viewport","viewport",443342715),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight,new cljs.core.Keyword(null,"latitude","latitude",394867543),37.7702549,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-122.444787,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(8),new cljs.core.Keyword(null,"map-style","map-style",-1391931277),cljpokego.client.map_style], null)], null));
}
cljpokego.client.add_marker = (function cljpokego$client$add_marker(lat,lng,icon){
return (new google.maps.Marker(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null),new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref.call(null,cljpokego.client.global_gmap)], null))));
});
cljpokego.client.add_poly = (function cljpokego$client$add_poly(pnts){
return (new google.maps.Polygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref.call(null,cljpokego.client.global_gmap),new cljs.core.Keyword(null,"paths","paths",-1807389588),pnts,new cljs.core.Keyword(null,"strokeColor","strokeColor",-1017463338),"#FF0000",new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),0.8,new cljs.core.Keyword(null,"strokeWeight","strokeWeight",-573609245),(2),new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#FF0000",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.1], null))));
});
if(typeof cljpokego.client.local_msg_handler !== 'undefined'){
} else {
cljpokego.client.local_msg_handler = (function (){var method_table__7079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7083__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljpokego.client","local-msg-handler"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7083__auto__,method_table__7079__auto__,prefer_table__7080__auto__,method_cache__7081__auto__,cached_hierarchy__7082__auto__));
})();
}
cljs.core._add_method.call(null,cljpokego.client.local_msg_handler,new cljs.core.Keyword("located","pokemon","located/pokemon",1537524123),(function (_QMARK_data){
var vec__26721 = _QMARK_data;
var ev_msg = cljs.core.nth.call(null,vec__26721,(0),null);
var payload = cljs.core.nth.call(null,vec__26721,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"google-map","google-map",1960730035),new cljs.core.Keyword(null,"map-type","map-type",444156565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))){
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__26721,ev_msg,payload){
return (function (p){
return cljpokego.client.add_marker.call(null,new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p),[cljs.core.str("/icons/"),cljs.core.str(new cljs.core.Keyword(null,"pokedex_type_id","pokedex_type_id",-1228370537).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(".png")].join(''));
});})(vec__26721,ev_msg,payload))
,payload));
} else {
if(cljs.core.truth_(window.updatePokemon)){
return addHeatmapPoints(cljs.core.clj__GT_js.call(null,payload));
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljpokego.client.local_msg_handler,new cljs.core.Keyword("list","pokemon-names","list/pokemon-names",245174549),(function (_QMARK_data){
var vec__26727 = _QMARK_data;
var ev_msg = cljs.core.nth.call(null,vec__26727,(0),null);
var payload = cljs.core.nth.call(null,vec__26727,(1),null);
cljs.core.println.call(null,_QMARK_data);

var ordered = cljs.core.take.call(null,(151),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.map.call(null,((function (vec__26727,ev_msg,payload){
return (function (p1__26724_SHARP_){
return cljs.core.update_in.call(null,p1__26724_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),parseInt);
});})(vec__26727,ev_msg,payload))
,cljs.core.seq.call(null,payload))));
var grouped = cljs.core.sort_by.call(null,((function (ordered,vec__26727,ev_msg,payload){
return (function (p1__26725_SHARP_){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.second.call(null,p1__26725_SHARP_)));
});})(ordered,vec__26727,ev_msg,payload))
,cljs.core.group_by.call(null,((function (ordered,vec__26727,ev_msg,payload){
return (function (p1__26726_SHARP_){
return cljs.core.get.call(null,cljs.core.second.call(null,p1__26726_SHARP_),"EvolutionGroup");
});})(ordered,vec__26727,ev_msg,payload))
,ordered));
cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206),ordered);

return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"names","names",-1943074658),grouped);
}));
cljs.core._add_method.call(null,cljpokego.client.local_msg_handler,new cljs.core.Keyword("debug","mapping-area","debug/mapping-area",750534594),(function (_QMARK_data){
var vec__26730 = _QMARK_data;
var ev_msg = cljs.core.nth.call(null,vec__26730,(0),null);
var payload = cljs.core.nth.call(null,vec__26730,(1),null);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__26730,ev_msg,payload){
return (function (poly){
return cljpokego.client.add_poly.call(null,poly);
});})(vec__26730,ev_msg,payload))
,new cljs.core.Keyword(null,"pnts","pnts",-2044150661).cljs$core$IFn$_invoke$arity$1(payload)));
}));
if(typeof cljpokego.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
cljpokego.client._event_msg_handler = (function (){var method_table__7079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7083__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljpokego.client","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7083__auto__,method_table__7079__auto__,prefer_table__7080__auto__,method_cache__7081__auto__,cached_hierarchy__7082__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
cljpokego.client.event_msg_handler = (function cljpokego$client$event_msg_handler(p__26733){
var map__26736 = p__26733;
var map__26736__$1 = ((((!((map__26736 == null)))?((((map__26736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26736):map__26736);
var ev_msg = map__26736__$1;
var id = cljs.core.get.call(null,map__26736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__26736__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__26736__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljpokego.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,cljpokego.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26738){
var map__26739 = p__26738;
var map__26739__$1 = ((((!((map__26739 == null)))?((((map__26739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26739):map__26739);
var ev_msg = map__26739__$1;
var event = cljs.core.get.call(null,map__26739__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cljpokego.client","/private/var/folders/t9/74x9mkl11jj5fyhb0bl112cm0000gn/T/form-init5091592444435025552.clj",140,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__26739,map__26739__$1,ev_msg,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled event: %s",event], null);
});})(map__26739,map__26739__$1,ev_msg,event))
,null)),null,-180710090);
}));
cljs.core._add_method.call(null,cljpokego.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__26741){
var map__26742 = p__26741;
var map__26742__$1 = ((((!((map__26742 == null)))?((((map__26742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26742):map__26742);
var ev_msg = map__26742__$1;
var _QMARK_data = cljs.core.get.call(null,map__26742__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__26744 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26747){if((e26747 instanceof Error)){
var e = e26747;
return e;
} else {
throw e26747;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"cljpokego.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__26744,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__26744,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cljpokego.client","/private/var/folders/t9/74x9mkl11jj5fyhb0bl112cm0000gn/T/form-init5091592444435025552.clj",146,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__26744,old_state_map,new_state_map,map__26742,map__26742__$1,ev_msg,_QMARK_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket successfully established!: %s",new_state_map], null);
});})(vec__26744,old_state_map,new_state_map,map__26742,map__26742__$1,ev_msg,_QMARK_data))
,null)),null,1070618500);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cljpokego.client","/private/var/folders/t9/74x9mkl11jj5fyhb0bl112cm0000gn/T/form-init5091592444435025552.clj",147,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__26744,old_state_map,new_state_map,map__26742,map__26742__$1,ev_msg,_QMARK_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket state change: %s",new_state_map], null);
});})(vec__26744,old_state_map,new_state_map,map__26742,map__26742__$1,ev_msg,_QMARK_data))
,null)),null,-871580214);
}
}));
cljs.core._add_method.call(null,cljpokego.client._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__26748){
var map__26749 = p__26748;
var map__26749__$1 = ((((!((map__26749 == null)))?((((map__26749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26749):map__26749);
var ev_msg = map__26749__$1;
var _QMARK_data = cljs.core.get.call(null,map__26749__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cljpokego.client.local_msg_handler.call(null,_QMARK_data);
}));
cljs.core._add_method.call(null,cljpokego.client._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__26751){
var map__26752 = p__26751;
var map__26752__$1 = ((((!((map__26752 == null)))?((((map__26752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26752):map__26752);
var ev_msg = map__26752__$1;
var _QMARK_data = cljs.core.get.call(null,map__26752__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__26754 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__26754,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__26754,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__26754,(2),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cljpokego.client","/private/var/folders/t9/74x9mkl11jj5fyhb0bl112cm0000gn/T/form-init5091592444435025552.clj",157,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__26754,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__26752,map__26752__$1,ev_msg,_QMARK_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake: %s",_QMARK_data], null);
});})(vec__26754,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__26752,map__26752__$1,ev_msg,_QMARK_data))
,null)),null,-1840993603);

return cljpokego.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pokego","names","pokego/names",1855612179)], null));
}));
if(typeof cljpokego.client.router_ !== 'undefined'){
} else {
cljpokego.client.router_ = cljs.core.atom.call(null,null);
}
cljpokego.client.stop_router_BANG_ = (function cljpokego$client$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,cljpokego.client.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
cljpokego.client.start_router_BANG_ = (function cljpokego$client$start_router_BANG_(){
cljpokego.client.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,cljpokego.client.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,cljpokego.client.ch_chsk,cljpokego.client.event_msg_handler));
});
cljpokego.client.gmap = (function cljpokego$client$gmap(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewport","viewport",443342715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewport","viewport",443342715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var map_canvas = reagent.core.dom_node.call(null,this$);
var map_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["center",(new google.maps.LatLng(37.7702549,-122.444787)),"zoom",(12)], null));
var map_obj = (new google.maps.Map(map_canvas,map_options));
google.maps.event.addListener(map_obj,"click",((function (map_canvas,map_options,map_obj){
return (function (event){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),event.latLng.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),event.latLng.lng()], null));
});})(map_canvas,map_options,map_obj))
);

return cljs.core.reset_BANG_.call(null,cljpokego.client.global_gmap,map_obj);
})], null));
});
cljpokego.client.keyword_keys = (function cljpokego$client$keyword_keys(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26761){
var vec__26762 = p__26761;
var k = cljs.core.nth.call(null,vec__26762,(0),null);
var v = cljs.core.nth.call(null,vec__26762,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.seq.call(null,m)));
});
cljpokego.client.viewport__GT_req = (function cljpokego$client$viewport__GT_req(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(v)], null);
});
cljpokego.client.filter_pokemon = (function cljpokego$client$filter_pokemon(mon){
if((new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)) == null)){
return true;
} else {
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))){
return cljs.core.some.call(null,(function (p1__26765_SHARP_){
return cljs.core._EQ_.call(null,mon.pokedex_type_id,p1__26765_SHARP_);
}),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)));
} else {
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)),mon.pokedex_type_id);
}
}
});
cljpokego.client.root_page = (function cljpokego$client$root_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(5),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"google-map","google-map",1960730035),new cljs.core.Keyword(null,"map-type","map-type",444156565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?"Change To Heatmap":"Change To Icon/Google Map"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"google-map","google-map",1960730035),new cljs.core.Keyword(null,"map-type","map-type",444156565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"map-type","map-type",444156565),new cljs.core.Keyword(null,"google-map","google-map",1960730035));
} else {
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"map-type","map-type",444156565),new cljs.core.Keyword(null,"heat-map","heat-map",1647845787));
}
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Existing Data",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljpokego.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pokego","existing-data","pokego/existing-data",-1061235916)], null));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Mass Query",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljpokego.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pokego","get-pokemon-stream","pokego/get-pokemon-stream",-341854650),cljpokego.client.viewport__GT_req.call(null,new cljs.core.Keyword(null,"viewport","viewport",443342715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))], null));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Test Query",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljpokego.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pokego","get-pokemon-stream-test","pokego/get-pokemon-stream-test",1719505802),cljpokego.client.viewport__GT_req.call(null,new cljs.core.Keyword(null,"viewport","viewport",443342715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"300px","#FEFDF4",(1000),"10px",(0),"fixed","scroll","3px","100%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),null);
})], null),"Reset"], null),cljs.core.doall.call(null,(function (){var iter__6934__auto__ = (function cljpokego$client$root_page_$_iter__26974(s__26975){
return (new cljs.core.LazySeq(null,(function (){
var s__26975__$1 = s__26975;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26975__$1);
if(temp__4657__auto__){
var s__26975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26975__$2)){
var c__6932__auto__ = cljs.core.chunk_first.call(null,s__26975__$2);
var size__6933__auto__ = cljs.core.count.call(null,c__6932__auto__);
var b__26977 = cljs.core.chunk_buffer.call(null,size__6933__auto__);
if((function (){var i__26976 = (0);
while(true){
if((i__26976 < size__6933__auto__)){
var vec__27080 = cljs.core._nth.call(null,c__6932__auto__,i__26976);
var group = cljs.core.nth.call(null,vec__27080,(0),null);
var name_vals = cljs.core.nth.call(null,vec__27080,(1),null);
cljs.core.chunk_append.call(null,b__26977,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),cljs.core.doall.call(null,(function (){var iter__6934__auto__ = ((function (i__26976,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function cljpokego$client$root_page_$_iter__26974_$_iter__27083(s__27084){
return (new cljs.core.LazySeq(null,((function (i__26976,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
var s__27084__$1 = s__27084;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__27084__$1);
if(temp__4657__auto____$1){
var s__27084__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27084__$2)){
var c__6932__auto____$1 = cljs.core.chunk_first.call(null,s__27084__$2);
var size__6933__auto____$1 = cljs.core.count.call(null,c__6932__auto____$1);
var b__27086 = cljs.core.chunk_buffer.call(null,size__6933__auto____$1);
if((function (){var i__27085 = (0);
while(true){
if((i__27085 < size__6933__auto____$1)){
var vec__27109 = cljs.core._nth.call(null,c__6932__auto____$1,i__27085);
var num = cljs.core.nth.call(null,vec__27109,(0),null);
var v = cljs.core.nth.call(null,vec__27109,(1),null);
cljs.core.chunk_append.call(null,b__27086,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([num], true),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))):cljs.core._EQ_.call(null,num,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))))?"#DDD":null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),[cljs.core.str(num)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/icons/"),cljs.core.str(num),cljs.core.str(".png")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Name"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (p__27112){
var vec__27113 = p__27112;
var k = cljs.core.nth.call(null,vec__27113,(0),null);
var xv = cljs.core.nth.call(null,vec__27113,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type1"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type1")));
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (p__27116){
var vec__27117 = p__27116;
var k = cljs.core.nth.call(null,vec__27117,(0),null);
var xv = cljs.core.nth.call(null,vec__27117,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type2"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type2")));
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__27085,i__26976,vec__27109,num,v,c__6932__auto____$1,size__6933__auto____$1,b__27086,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),num], null)));

var G__27182 = (i__27085 + (1));
i__27085 = G__27182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27086),cljpokego$client$root_page_$_iter__26974_$_iter__27083.call(null,cljs.core.chunk_rest.call(null,s__27084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27086),null);
}
} else {
var vec__27120 = cljs.core.first.call(null,s__27084__$2);
var num = cljs.core.nth.call(null,vec__27120,(0),null);
var v = cljs.core.nth.call(null,vec__27120,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([num], true),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))):cljs.core._EQ_.call(null,num,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))))?"#DDD":null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),[cljs.core.str(num)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/icons/"),cljs.core.str(num),cljs.core.str(".png")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Name"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (p__27123){
var vec__27124 = p__27123;
var k = cljs.core.nth.call(null,vec__27124,(0),null);
var xv = cljs.core.nth.call(null,vec__27124,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type1"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type1")));
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__){
return (function (p__27127){
var vec__27128 = p__27127;
var k = cljs.core.nth.call(null,vec__27128,(0),null);
var xv = cljs.core.nth.call(null,vec__27128,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type2"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type2")));
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__26976,vec__27120,num,v,s__27084__$2,temp__4657__auto____$1,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),num], null)),cljpokego$client$root_page_$_iter__26974_$_iter__27083.call(null,cljs.core.rest.call(null,s__27084__$2)));
}
} else {
return null;
}
break;
}
});})(i__26976,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
,null,null));
});})(i__26976,vec__27080,group,name_vals,c__6932__auto__,size__6933__auto__,b__26977,s__26975__$2,temp__4657__auto__))
;
return iter__6934__auto__.call(null,name_vals);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)));

var G__27183 = (i__26976 + (1));
i__26976 = G__27183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26977),cljpokego$client$root_page_$_iter__26974.call(null,cljs.core.chunk_rest.call(null,s__26975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26977),null);
}
} else {
var vec__27131 = cljs.core.first.call(null,s__26975__$2);
var group = cljs.core.nth.call(null,vec__27131,(0),null);
var name_vals = cljs.core.nth.call(null,vec__27131,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),cljs.core.doall.call(null,(function (){var iter__6934__auto__ = ((function (vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function cljpokego$client$root_page_$_iter__26974_$_iter__27134(s__27135){
return (new cljs.core.LazySeq(null,((function (vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
var s__27135__$1 = s__27135;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__27135__$1);
if(temp__4657__auto____$1){
var s__27135__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27135__$2)){
var c__6932__auto__ = cljs.core.chunk_first.call(null,s__27135__$2);
var size__6933__auto__ = cljs.core.count.call(null,c__6932__auto__);
var b__27137 = cljs.core.chunk_buffer.call(null,size__6933__auto__);
if((function (){var i__27136 = (0);
while(true){
if((i__27136 < size__6933__auto__)){
var vec__27160 = cljs.core._nth.call(null,c__6932__auto__,i__27136);
var num = cljs.core.nth.call(null,vec__27160,(0),null);
var v = cljs.core.nth.call(null,vec__27160,(1),null);
cljs.core.chunk_append.call(null,b__27137,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([num], true),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))):cljs.core._EQ_.call(null,num,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))))?"#DDD":null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),[cljs.core.str(num)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/icons/"),cljs.core.str(num),cljs.core.str(".png")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Name"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (p__27163){
var vec__27164 = p__27163;
var k = cljs.core.nth.call(null,vec__27164,(0),null);
var xv = cljs.core.nth.call(null,vec__27164,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type1"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type1")));
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (p__27167){
var vec__27168 = p__27167;
var k = cljs.core.nth.call(null,vec__27168,(0),null);
var xv = cljs.core.nth.call(null,vec__27168,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type2"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type2")));
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(i__27136,vec__27160,num,v,c__6932__auto__,size__6933__auto__,b__27137,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),num], null)));

var G__27184 = (i__27136 + (1));
i__27136 = G__27184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27137),cljpokego$client$root_page_$_iter__26974_$_iter__27134.call(null,cljs.core.chunk_rest.call(null,s__27135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27137),null);
}
} else {
var vec__27171 = cljs.core.first.call(null,s__27135__$2);
var num = cljs.core.nth.call(null,vec__27171,(0),null);
var v = cljs.core.nth.call(null,vec__27171,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([num], true),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))):cljs.core._EQ_.call(null,num,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))))?"#DDD":null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),[cljs.core.str(num)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/icons/"),cljs.core.str(num),cljs.core.str(".png")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),num);
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Name"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (p__27174){
var vec__27175 = p__27174;
var k = cljs.core.nth.call(null,vec__27175,(0),null);
var xv = cljs.core.nth.call(null,vec__27175,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type1"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type1")));
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type1"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("type-"),cljs.core.str(clojure.string.lower_case.call(null,[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__){
return (function (p__27178){
var vec__27179 = p__27178;
var k = cljs.core.nth.call(null,vec__27179,(0),null);
var xv = cljs.core.nth.call(null,vec__27179,(1),null);
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type1"),cljs.core.get.call(null,v,"Type2"))) || (cljs.core._EQ_.call(null,cljs.core.get.call(null,xv,"Type2"),cljs.core.get.call(null,v,"Type2")));
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"names-ungrouped","names-ungrouped",617232206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)))));
});})(vec__27171,num,v,s__27135__$2,temp__4657__auto____$1,vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
], null),[cljs.core.str(cljs.core.get.call(null,v,"Type2"))].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),num], null)),cljpokego$client$root_page_$_iter__26974_$_iter__27134.call(null,cljs.core.rest.call(null,s__27135__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
,null,null));
});})(vec__27131,group,name_vals,s__26975__$2,temp__4657__auto__))
;
return iter__6934__auto__.call(null,name_vals);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)),cljpokego$client$root_page_$_iter__26974.call(null,cljs.core.rest.call(null,s__26975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6934__auto__.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db)));
})())], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"google-map","google-map",1960730035),new cljs.core.Keyword(null,"map-type","map-type",444156565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljpokego.client.db))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljpokego.client.gmap], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),PokeMap,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change-viewport","on-change-viewport",1282863154),(function (v){
return cljs.core.swap_BANG_.call(null,cljpokego.client.db,cljs.core.assoc,new cljs.core.Keyword(null,"viewport","viewport",443342715),cljpokego.client.keyword_keys.call(null,cljs.core.js__GT_clj.call(null,v)));
}),new cljs.core.Keyword(null,"filter-condition","filter-condition",1706895208),cljpokego.client.filter_pokemon,new cljs.core.Keyword(null,"point-size","point-size",-2123819651),(13)], null)], null)], null)], null)], null))], null);
});
});
cljpokego.client.mount_root = (function cljpokego$client$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljpokego.client.root_page], null)], null),document.getElementById("app"));
});
cljpokego.client.start_BANG_ = (function cljpokego$client$start_BANG_(){
cljpokego.client.start_router_BANG_.call(null);

return cljpokego.client.mount_root.call(null);
});
if(typeof cljpokego.client._start_once !== 'undefined'){
} else {
cljpokego.client._start_once = cljpokego.client.start_BANG_.call(null);
}
