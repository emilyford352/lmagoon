if (self.CavalryLogger) { CavalryLogger.start_js(["09Oej"]); }

__d("EventWatchStatusSelector",["csx","DOM","DOMQuery","Event","CSS"],(function a(b,c,d,e,f,g,h){function i(j){"use strict";this.$EventWatchStatusSelector1=j.primaryButton;this.$EventWatchStatusSelector2=j.menuElement;this.$EventWatchStatusSelector3=j.initialStatus;this.$EventWatchStatusSelector4=j.canViewerJoin;var k=j.menuInstance.getTriggerElem();this.$EventWatchStatusSelector5=c("DOMQuery").find(k,"._33n");this.$EventWatchStatusSelector6=c("DOMQuery").find(k,"._33o");c("Event").listen(j.primaryButton,"click",function(){this.$EventWatchStatusSelector3=j.primaryStatus;this.$EventWatchStatusSelector7();this.$EventWatchStatusSelector8()}.bind(this));j.menuInstance.subscribe("setMenu",function(){var l=j.menuInstance.getMenu().getRoot();this.$EventWatchStatusSelector9=c("DOMQuery").find(l,"._33q");this.$EventWatchStatusSelector10=c("DOMQuery").find(l,"._33u");this.$EventWatchStatusSelector11=c("DOMQuery").find(l,"._33v");this.$EventWatchStatusSelector12=c("DOMQuery").find(l,"._33z");this.$EventWatchStatusSelector13=c("DOMQuery").scry(l,"._33-")[0];this.$EventWatchStatusSelector14=c("DOMQuery").scry(l,"._33_")[0];this.$EventWatchStatusSelector8();j.menuInstance.getMenu().subscribe("itemclick",function(m,n){var o=n.item.getRoot().getAttribute("data-string");if(o==="watched-selected"||o==="going-selected")return;this.$EventWatchStatusSelector3=o;setTimeout(this.$EventWatchStatusSelector8.bind(this));if(this.$EventWatchStatusSelector3==="unwatched")this.$EventWatchStatusSelector15()}.bind(this))}.bind(this))}i.prototype.$EventWatchStatusSelector15=function(){"use strict";c("DOM").insertAfter(this.$EventWatchStatusSelector2,this.$EventWatchStatusSelector1);c("DOM").remove(this.$EventWatchStatusSelector2)};i.prototype.$EventWatchStatusSelector7=function(){"use strict";c("DOM").insertAfter(this.$EventWatchStatusSelector1,this.$EventWatchStatusSelector2);c("DOM").remove(this.$EventWatchStatusSelector1)};i.prototype.$EventWatchStatusSelector8=function(){"use strict";if(this.$EventWatchStatusSelector5)c("CSS").conditionShow(this.$EventWatchStatusSelector5,this.$EventWatchStatusSelector3==="going");if(this.$EventWatchStatusSelector6)c("CSS").conditionShow(this.$EventWatchStatusSelector6,this.$EventWatchStatusSelector3==="watched");if(this.$EventWatchStatusSelector9)c("CSS").conditionShow(this.$EventWatchStatusSelector9,this.$EventWatchStatusSelector3!=="going"&&this.$EventWatchStatusSelector4);if(this.$EventWatchStatusSelector10)c("CSS").conditionShow(this.$EventWatchStatusSelector10,this.$EventWatchStatusSelector3==="going");if(this.$EventWatchStatusSelector11)c("CSS").conditionShow(this.$EventWatchStatusSelector11,this.$EventWatchStatusSelector3!=="watched");if(this.$EventWatchStatusSelector12)c("CSS").conditionShow(this.$EventWatchStatusSelector12,this.$EventWatchStatusSelector3==="watched");if(this.$EventWatchStatusSelector13)c("CSS").conditionShow(this.$EventWatchStatusSelector13,this.$EventWatchStatusSelector3==="going");if(this.$EventWatchStatusSelector14)c("CSS").conditionShow(this.$EventWatchStatusSelector14,this.$EventWatchStatusSelector3==="watched")};f.exports=i}),null);
__d("HScrollItemType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CONNECTIONS_PYML_ITEM:"connections_pyml_item"})}),null);
__d("LocalNewsGYSJPivotLoggerEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({COMPOSER_CANCEL:"local_news_gysj_composer_cancel",COMPOSER_OPEN:"local_news_gysj_composer_open",COMPOSER_POST:"local_news_gysj_composer_post",DISCOVER_TAP:"local_news_gysj_discover_tap",GROUP_JOIN:"local_news_gysj_group_join",GROUP_JOIN_CANCEL:"local_news_gysj_group_join_cancel",GROUP_TAP:"local_news_gysj_group_tap",GROUP_VIEW:"local_news_gysj_group_view",GROUP_XOUT:"local_news_gysj_group_xout",START_QP_RENDER:"start_qp_render",START_FETCH_GROUPS:"start_fetch_groups",END_FETCH_GROUPS:"end_fetch_groups",FETCH_USER_LOCATION:"fetch_user_location"})}),null);
__d("XConnectionsPageRecImpressionController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/feed/connections_pyml/log_impression/",{})}),null);
__d("FbFeedAttachmentHScroll",["csx","cx","BanzaiLogger","BaseUnitCarousel","CSS","DOM","HScrollItemType","Arbiter","XConnectionsPageRecImpressionController","AsyncRequest","LocalNewsGYSJPivotLoggerEvent"],(function a(b,c,d,e,f,g,h,i){var j,k,l=c("BanzaiLogger").create({retry:true});j=babelHelpers.inherits(m,c("BaseUnitCarousel"));k=j&&j.prototype;function m(n){"use strict";k.constructor.call(this,n);c("Arbiter").subscribe("x-out-hscroll-item",this.onXout.bind(this))}m.prototype.updateLargePager=function(){"use strict";c("CSS").removeClass(this.carousel,"_vxr");this.$FbFeedAttachmentHScroll1(true);this.$FbFeedAttachmentHScroll1(false);c("CSS").conditionClass(this.carousel,"_vxs",this.canSlideLeft()&&this.canSlideRight())};m.prototype.hidePagerButton=function(){"use strict";c("CSS").addClass(this.carousel,"_vxr")};m.prototype.$FbFeedAttachmentHScroll1=function(n){"use strict";var o=n?"_vxt":"_vxu",p=n?"_vxv":"_vxw";if(n?this.canSlideRight():this.canSlideLeft()){c("CSS").removeClass(this.carousel,p);c("CSS").removeClass(this.carousel,o)}else{c("CSS").addClass(this.carousel,p);setTimeout(function(){c("CSS").addClass(this.carousel,o)}.bind(this),500)}};m.prototype.toggleXouts=function(n,o,p){"use strict";var q=Math.min(n,o),r=Math.max(n,o),s=this.grid.children;q=Math.max(q,0);r=Math.min(r,s.length-1);var t=void 0;for(var u=q;u<=r;++u){t=s[u];var v=c("DOM").scry(t,"._1r7n")[0];if(v)if(p)c("CSS").hide(v);else c("CSS").show(v)}};m.prototype.logImpressions=function(){"use strict";var n=this.grid.children,o=n.length,p=this.visibleIndex+Math.min(this.visibleCount,o)-1;if(!this.circularCarousel&&p===o-1)--p;for(var q=this.visibleIndex;q<=p;++q)this.$FbFeedAttachmentHScroll2(n[q],q)};m.prototype.$FbFeedAttachmentHScroll2=function(n,o){"use strict";var p=n.getAttribute("data-logging");p=p?JSON.parse(p):null;if(!p||!p.item_type)return;if(p.item_type===c("HScrollItemType").CONNECTIONS_PYML_ITEM){var q=p.page_id;if(!q||isNaN(q)||this.loggedItems[q])return;l.log("ConnectionsPYMLLoggerConfig",{event:"impression",page_id:q});var r={};r.page_id=q;var s=c("XConnectionsPageRecImpressionController").getURIBuilder();new(c("AsyncRequest"))().setMethod("POST").setURI(s.getURI()).setData(r).send();this.loggedItems[q]=true}else if(p.item_type===c("HScrollItemType").LOCAL_NEWS_GYSJ_ITEM)l.log("LocalNewsGYSJPivotLoggerConfig",{name:c("LocalNewsGYSJPivotLoggerEvent").GROUP_VIEW,hscroll_position:o,group_id:p.group_id})};f.exports=m}),null);