if (self.CavalryLogger) { CavalryLogger.start_js(["ZJBuZ"]); }

__d("rayInterceptsBox",["invariant"],(function a(b,c,d,e,f,g,h){function i(k,l){var m=Object.keys(k);l.forEach(function(n){m.indexOf(n)!==-1||h(0);typeof k[n]==="number"||h(0)})}var j={check:function k(l,m){i(l,["minX","maxX","minY","maxY"]);i(m,["x","y","dx","dy"]);l.maxX>l.minX&&l.maxY>l.minY||h(0);if(m.dx===0&&m.dy===0)return false;if(m.x>=l.minX&&m.x<=l.maxX&&m.y>=l.minY&&m.y<=l.maxY)return true;var n=(l.minX-m.x)/m.dx,o=(l.maxX-m.x)/m.dx,p=(l.minY-m.y)/m.dy,q=(l.maxY-m.y)/m.dy,r=Math.max(Math.min(n,o),Math.min(p,q)),s=Math.min(Math.max(n,o),Math.max(p,q));if(r<0)return false;if(r>s)return false;return true}};f.exports=j}),null);
__d("AdsMouseStateStore",["invariant","$","Arbiter","Event","EventEmitter","Run","SubscriptionsHandler","Vector","ge","keyMirror","rayInterceptsBox","throttle"],(function a(b,c,d,e,f,g,h){"use strict";var i,j,k=30,l=500,m="pagelet_ego_pane",n=c("keyMirror")({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null});function o(event){try{return{x:event.clientX||event.x,y:event.clientY||event.y}}catch(q){var r=Math.random()*1e3;return{x:r,y:r}}}i=babelHelpers.inherits(p,c("EventEmitter"));j=i&&i.prototype;function p(){var q=arguments.length<=0||arguments[0]===undefined?m:arguments[0],r=arguments.length<=1||arguments[1]===undefined?l:arguments[1];j.constructor.call(this);this.destroy=function(){if(this.$AdsMouseStateStore8)this.$AdsMouseStateStore8.release();this.removeAllListeners()}.bind(this);this.onPageTransition=function(event){this.$AdsMouseStateStore10()}.bind(this);this.onMouseMove=function(event){this.calculateState(o(event))}.bind(this);this.$AdsMouseStateStore7=q;this.$AdsMouseStateStore10();this.$AdsMouseStateStore8=new(c("SubscriptionsHandler"))().addSubscriptions(c("Event").listen(document,"mousemove",c("throttle")(this.onMouseMove,r)),c("Arbiter").subscribe("page_transition",this.onPageTransition));c("Run").onLeave(this.destroy)}p.prototype.$AdsMouseStateStore10=function(){this.$AdsMouseStateStore1=n.STATIONARY;this.$AdsMouseStateStore2=this.$AdsMouseStateStore3=0;this.$AdsMouseStateStore4=Date.now();this.$AdsMouseStateStore5=this.$AdsMouseStateStore7;this.$AdsMouseStateStore6=Infinity};p.prototype.getState=function(){return this.$AdsMouseStateStore1};p.prototype.updateRhcID=function(q){c("$")(q)||h(0);this.$AdsMouseStateStore5=q};p.prototype.getRhcID=function(){return this.$AdsMouseStateStore5};p.prototype.__updateMousePos=function(q){this.$AdsMouseStateStore2=q.x;this.$AdsMouseStateStore3=q.y};p.prototype.isRhcPresent=function(){if(!c("ge")(this.$AdsMouseStateStore5))return false;var q=this.getRhcDimensions();return q.y>0&&q.x>0};p.prototype.getRhc=function(){return c("$")(this.$AdsMouseStateStore5)};p.prototype.getRhcPosition=function(){return c("Vector").getElementPosition(this.getRhc())};p.prototype.getRhcScreenPos=function(){var q=c("Vector").getScrollPosition(),r=this.getRhcPosition();return{x:r.x-q.x,y:r.y-q.y}};p.prototype.getRhcDimensions=function(){return c("Vector").getElementDimensions(this.getRhc())};p.prototype.getPointToRectSquareDist=function(){return this.$AdsMouseStateStore6};p.prototype.isPointWithinDist=function(q){var r=this.getPointToRectSquareDist();return r<=q*q};p.prototype.getRhcBoundingBox=function(){var q=this.getRhcDimensions(),r=this.getRhcScreenPos();return{minX:r.x,maxX:r.x+q.x,minY:r.y,maxY:r.y+q.y}};p.prototype.$AdsMouseStateStore11=function(q){var r=this.getRhcBoundingBox(),s={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2},t=Math.abs(r.minX-r.maxX),u=Math.abs(r.minY-r.maxY),v=Math.max(Math.abs(q.x-s.x)-t/2,0),w=Math.max(Math.abs(q.y-s.y)-u/2,0);this.$AdsMouseStateStore6=v*v+w*w};p.prototype.isPosContainedInRhc=function(q){var r=this.getRhcBoundingBox();return q.x>=r.minX&&q.x<=r.maxX&&q.y>=r.minY&&q.y<=r.maxY};p.prototype.hasMovedMinDistance=function(q){var r=q.x-this.$AdsMouseStateStore2,s=q.y-this.$AdsMouseStateStore3;return r*r+s*s>=k*k};p.prototype.tooSoon=function(){return Date.now()-this.$AdsMouseStateStore4<l};p.prototype.$AdsMouseStateStore12=function(){this.$AdsMouseStateStore4=Date.now()};p.prototype.calculateState=function(q){if(this.tooSoon())return;this.$AdsMouseStateStore12();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(q)){this.transitionToState(n.HOVER);this.$AdsMouseStateStore6=0;this.__updateMousePos(q);this.scheduleCheckup();return}else if(!this.hasMovedMinDistance(q)){this.transitionToState(n.STATIONARY);return}this.$AdsMouseStateStore11(q);var r=this.isMovingTowardsRhc(q)?n.INTENT:n.NO_INTENT;this.transitionToState(r);this.__updateMousePos(q);this.scheduleCheckup()};p.prototype.isMovingTowardsRhc=function(q){var r={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};if(this.isPosContainedInRhc(r))return true;var s=this.getRhcBoundingBox(),t={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3,dx:q.x-this.$AdsMouseStateStore2,dy:q.y-this.$AdsMouseStateStore3};return c("rayInterceptsBox").check(s,t)};p.prototype.scheduleCheckup=function(){var q={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};setTimeout(function(){this.calculateState(q)}.bind(this),l*1.5)};p.prototype.transitionToState=function(q){if(q===this.$AdsMouseStateStore1)return;this.$AdsMouseStateStore1=q;this.emit("change")};p.get=function(){if(!p.$AdsMouseStateStore13)p.$AdsMouseStateStore13=new p();return p.$AdsMouseStateStore13};p.STATES=n;p.MIN_MOVE_DISTANCE=k;p.THROTTLE_TIME=l;f.exports=p}),null);
__d("AdsPagerConstants",["keyMirror"],(function a(b,c,d,e,f,g){var h=c("keyMirror")({ADD_PAGE:null,PAGE_TRANSITION:null,REQUEST_PAGE:null}),i=c("keyMirror")({VIEW_ACTION:null,SERVER_ACTION:null});f.exports={ActionTypes:h,PayloadSources:i}}),null);
__d("AdsPagerDispatcher",["AdsPagerConstants","Dispatcher_DEPRECATED"],(function a(b,c,d,e,f,g){"use strict";var h=c("AdsPagerConstants").PayloadSources;function i(k){return function(l){this.dispatch({payloadSource:k,action:l})}}var j=Object.assign(new(c("Dispatcher_DEPRECATED"))(),{handleUpdateFromViewAction:i(h.VIEW_ACTION),handleUpdateFromServerAction:i(h.SERVER_ACTION)});f.exports=j}),null);
__d("AdsRefreshHandler",["csx","AdsMouseStateStore","AdsPagerConstants","AdsPagerDispatcher","Arbiter","CSSFade","DataAttributeUtils","DOM","Event","SubscriptionsHandler","Toggler","UIPagelet","VideoPlayerExperiments","cxodecode","debounceAcrossTransitions","getOrCreateDOMID"],(function a(b,c,d,e,f,g,h){var i=c("AdsMouseStateStore").STATES,j=600,k=c("AdsMouseStateStore").get(),l=void 0;function m(n,o,p){"use strict";if(!p.data||!p.pid)return;if(o.nonce)l=c("cxodecode")(o.nonce);this.$AdsRefreshHandler1=n;this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler3=o;this.$AdsRefreshHandler4=p;this.$AdsRefreshHandler5=0;this.$AdsRefreshHandler6=false;this.$AdsRefreshHandler7=true;this.$AdsRefreshHandler8=0;this.$AdsRefreshHandler9=null;this.$AdsRefreshHandler10=c("debounceAcrossTransitions")(this.reloadAdsIfNeeded.bind(this),this.$AdsRefreshHandler3.delay);this.$AdsRefreshHandler11=new(c("SubscriptionsHandler"))();this.$AdsRefreshHandler11.addSubscriptions(c("Event").listen(this.$AdsRefreshHandler1,"mouseenter",this.setMouseOver.bind(this,true)),c("Event").listen(this.$AdsRefreshHandler1,"mouseleave",this.setMouseOver.bind(this,false)),k.addListener("change",this.onMouseStateStoreChange.bind(this)),c("Arbiter").subscribe("AdsPreferencesDialog/opened",this.stopRefreshingRHC.bind(this)),c("Arbiter").subscribe("AdsPreferencesDialog/closed",this.startRefreshingRHC.bind(this)),c("Arbiter").subscribe("VideoChannelView/opened",this.stopRefreshingRHC.bind(this)),c("Arbiter").subscribe("VideoChannelView/closed",this.startRefreshingRHC.bind(this)));if(c("VideoPlayerExperiments").rhcWNSPauseAds)this.$AdsRefreshHandler11.addSubscriptions(c("Arbiter").subscribe("VideoWatchAndScrollController/init",this.stopRefreshingRHC.bind(this)),c("Arbiter").subscribe("VideoWatchAndScrollController/exit",this.startRefreshingRHC.bind(this)));this.$AdsRefreshHandler12();c("AdsPagerDispatcher").register(this.handlePageDispatch.bind(this))}m.prototype.$AdsRefreshHandler12=function(){"use strict";if(this.$AdsRefreshHandler13)this.$AdsRefreshHandler13.release();this.$AdsRefreshHandler13=new(c("SubscriptionsHandler"))();var n=c("DOM").scry(this.$AdsRefreshHandler1,".uiToggle");for(var o=0;o<n.length;o++)this.$AdsRefreshHandler13.addSubscriptions(c("Toggler").listen("show",n[o],this.stopRefreshingRHC.bind(this)),c("Toggler").listen("hide",n[o],this.startRefreshingRHC.bind(this)))};m.prototype.handlePageDispatch=function(n){"use strict";var o=n.action||{};if(o.actionType===c("AdsPagerConstants").ActionTypes.REQUEST_PAGE)this.reloadAds()};m.prototype.setMouseOver=function(n){"use strict";this.$AdsRefreshHandler14=n;if(n&&this.$AdsRefreshHandler9!=null){this.$AdsRefreshHandler9.cancel();this.$AdsRefreshHandler9=null}};m.prototype.subscribeDefaultEventsForRefresh=function(){"use strict";this.$AdsRefreshHandler11.addSubscriptions(c("Event").listen(window,"scroll",this.$AdsRefreshHandler10),c("Event").listen(window,"resize",this.$AdsRefreshHandler10));return this};m.prototype.reloadWithDebounce=function(){"use strict";this.$AdsRefreshHandler10()};m.prototype.reloadWithoutDebounce=function(){"use strict";this.reloadAdsIfNeeded()};m.prototype.stopRefreshingRHC=function(n,o){"use strict";if(c("VideoPlayerExperiments").rhcWNSPauseAds)this.$AdsRefreshHandler8++;else this.$AdsRefreshHandler7=false};m.prototype.startRefreshingRHC=function(n,o){"use strict";this.$AdsRefreshHandler2=Date.now();if(c("VideoPlayerExperiments").rhcWNSPauseAds){if(--this.$AdsRefreshHandler8<0)this.$AdsRefreshHandler8=0}else this.$AdsRefreshHandler7=true};m.prototype.forceLoadIfEnoughTimePassed=function(n){"use strict";if(Date.now()-this.$AdsRefreshHandler2>n)this.reloadAds()};m.prototype.containsPremium=function(){"use strict";var n=c("DOM").scry(this.$AdsRefreshHandler1,l||"div._4u8");return!!n.filter(function(o){return JSON.parse(c("DataAttributeUtils").getDataAttribute(o,"data-ad")).segment==="premium"}).length};m.prototype.reloadAdsIfNeeded=function(){"use strict";if(!this.$AdsRefreshHandler1)return;c("Arbiter").inform("AdsRefreshHandler/CheckingReload");if(this.$AdsRefreshHandler3.stateRefresh){this.reloadAdsIfNeededStateBased();return}if(this.containsPremium()||this.$AdsRefreshHandler14||!this.$AdsRefreshHandler3.interval)return;if(Date.now()-this.$AdsRefreshHandler2>=this.$AdsRefreshHandler3.interval)this.reloadAds()};m.prototype.reloadAdsIfNeededStateBased=function(){"use strict";if(Date.now()-this.$AdsRefreshHandler2<this.$AdsRefreshHandler3.interval)return;if(this.containsPremium())return;if(!this.$AdsRefreshHandler3.interval)return;this.$AdsRefreshHandler6=true;c("Arbiter").inform("AdsRefreshHandler/RefreshScheduled");this.checkScheduledRefresh()};m.prototype.getRefreshScheduled=function(){"use strict";return this.$AdsRefreshHandler6};m.prototype.onMouseStateStoreChange=function(){"use strict";this.checkScheduledRefresh()};m.prototype.checkScheduledRefresh=function(){"use strict";if(!this.$AdsRefreshHandler6)return;if(this.$AdsRefreshHandler14)return;var n=k.getState(),o=false;switch(n){case i.HOVER:case i.NO_INTENT:o=true;break;default:break}if(!o)return;this.$AdsRefreshHandler6=false;this.reloadAds()};m.prototype.reloadAds=function(){"use strict";if(!this.$AdsRefreshHandler1)return;this.$AdsRefreshHandler2=Date.now();if(c("VideoPlayerExperiments").rhcWNSPauseAds){if(this.$AdsRefreshHandler8)return}else if(!this.$AdsRefreshHandler7)return;var n=this.$AdsRefreshHandler4&&this.$AdsRefreshHandler4.data,o=babelHelpers["extends"]({},n,{refresh_num:++this.$AdsRefreshHandler5});this.$AdsRefreshHandler9=c("UIPagelet").loadFromEndpoint("WebEgoPane",this.$AdsRefreshHandler1,{dom_id:c("getOrCreateDOMID")(this.$AdsRefreshHandler1),pid:this.$AdsRefreshHandler4.pid,data:o},{bundle:false,handler:this.onLoadHandler.bind(this)});c("Arbiter").inform("AdsRefreshHandler/AdsLoading")};m.prototype.onLoadHandler=function(){"use strict";c("Arbiter").inform("AdsRefreshHandler/AdsLoaded");this.$AdsRefreshHandler9=null;this.$AdsRefreshHandler12();if(!this.$AdsRefreshHandler3.fade)return;c("CSSFade").show(this.$AdsRefreshHandler1,{duration:j})};m.prototype.cleanup=function(){"use strict";this.$AdsRefreshHandler1=null;this.$AdsRefreshHandler11.release();this.$AdsRefreshHandler10.reset()};f.exports=m}),null);
__d("getURLRanges",["URI","URLScraper","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";function h(i){var j=arguments.length<=1||arguments[1]===undefined?0:arguments[1],k=i.substr(j),l=c("URLScraper").match(k);if(!l)return[];var m=l;if(!/^[a-z][a-z0-9\-+.]+:\/\//i.test(l))m="http://"+l;if(!c("URI").isValidURI(m))return[];var n=k.indexOf(l),o=c("UnicodeUtils").strlen(k.substr(0,n));j+=o;var p=l.length,q=[{offset:j,length:l.length,entity:{url:m}}];return q.concat(h(i,j+p))}f.exports=h}),null);
__d("PhotoStoreCore",[],(function a(b,c,d,e,f,g){var h={actions:{UPDATE:"update"},_photoCache:{},_postCreateCallbacks:{},getPhotoCache:function i(j){if(!this._photoCache[j])throw new Error("Photo cache requested for unknown set ID");return this._photoCache[j]},hasBeenCreated:function i(j){return!!this._photoCache[j]},clearSetCache:function i(j){delete this._photoCache[j];delete this._postCreateCallbacks[j]},getByIndex:function i(j,k,l){this.getPhotoCache(j).getItemAtIndex(k,l)},getByIndexImmediate:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getItemAtIndexImmediate(k);return undefined},getItemsInAvailableRange:function i(j){var k=this.getAvailableRange(j),l=[];for(var m=k.offset;m<k.length;m++)l.push(this.getByIndexImmediate(j,m));return l},getItemsAfterIndex:function i(j,k,l,m){var n=this.getCursorByIndexImmediate(j,k);this.fetchForward(j,n,l,m)},getAllByIDImmediate:function i(j){var k=Object.keys(this._photoCache);return k.map(function(l){return this.getByIndexImmediate(l,this.getIndexForID(l,j))}.bind(this)).filter(function(l){return!!l})},getIndexForID:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getIndexForID(k);return undefined},getEndIndex:function i(j){var k=this.getAvailableRange(j);return k.offset+k.length-1},getCursorByIndexImmediate:function i(j,k){var l=this.getByIndexImmediate(j,k);if(l)return this._photoCache[j].getCursorForID(l.id);return undefined},hasNextPage:function i(j){var k=this.getCursorByIndexImmediate(j,this.getEndIndex(j));return this.getPhotoCache(j).hasNextPage(k)},getAvailableRange:function i(j){return this.getPhotoCache(j).getAvailableRange()},hasLooped:function i(j){return this.getPhotoCache(j).hasLooped()},fetchForward:function i(j,k,l,m){this.getPhotoCache(j).getItemsAfterCursor(k,l,m)},fetchBackward:function i(j,k,l,m){this.getPhotoCache(j).getItemsBeforeCursor(k,l,m)},executePostCreate:function i(j,k){if(this._photoCache[j])k&&k();else this._postCreateCallbacks[j]=k},runPostCreateCallback:function i(j){var k=this._postCreateCallbacks[j];if(k){k();delete this._postCreateCallbacks[j]}},setPreFetchCallback:function i(j,k){this.getPhotoCache(j).setPreFetchCallback(k)},updateData:function i(j){var k=j.set_id;if(!this._photoCache[k]){this._photoCache[k]=new j.cache_class(j);this.runPostCreateCallback(k)}else if(j.query_metadata.action==h.actions.UPDATE)this._photoCache[k].updateData(j);else this._photoCache[k].addData(j)},updateFeedbackData:function i(j){var k=Object.keys(j);k.forEach(function(l){return h.getAllByIDImmediate(l).forEach(function(m){m.feedback=j[l].feedback})})},reset:function i(){Object.keys(this._photoCache).forEach(function(j){return this.clearSetCache(j)}.bind(this))}};f.exports=h}),null);
__d("PhotoStore",["Arbiter","PhotoStoreCore"],(function a(b,c,d,e,f,g){c("Arbiter").subscribe("update-photos",function(h,i){c("PhotoStoreCore").updateData(i)});f.exports=c("PhotoStoreCore")}),null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/photos/logging/waterfall/batch/",{})}),null);
__d("PhotosUploadWaterfall",["AsyncRequest","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","XPhotosWaterfallBatchLoggingController","emptyFunction","randomInt","throttle"],(function a(b,c,d,e,f,g){var h=[],i={APP_SIMPLE:"simple",APP_ARCHIVE:"archive",APP_COMPOSER:"composer",APP_MESSENGER:"messenger",APP_HTML5:"html5",APP_CHAT:"chat",INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,DONE_SPHERICAL_CHECK:131,FAIL_SPHERICAL_CHECK:133,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_HTML5:130,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:"vaultbox",GRID:"grid",SPOTLIGHT_VAULT_VIEWER:"spotlight_vault_viewer",REF_VAULT_NOTIFICATION:"vault_notification",_checkRequiredFields:function k(l){},sendBanzai:function k(l,m){this._checkRequiredFields(l);var n={};l.scuba_ints=l.scuba_ints||{};l.scuba_ints.client_time=Math.round(Date.now()/1e3);if(c("PhotosUploadWaterfallXConfig").retryBanzai){n.retry=true;l.scuba_ints.nonce=c("randomInt")(4294967296)}c("Banzai").post(c("PhotosUploadWaterfallXConfig").deprecatedBanzaiRoute,l,n);if(m)setTimeout(m,0)},sendSignal:function k(l,m){this._checkRequiredFields(l);if(c("PhotosUploadWaterfallXConfig").useBanzai)this.sendBanzai(l,m);else{var n=new(c("AsyncSignal"))("/ajax/photos/waterfall.php",{data:JSON.stringify(l)}).setHandler(m);if(c("PhotosUploadWaterfallXConfig").timeout)n.setTimeout(10*1e3);n.send()}},queueLog:function k(l,m){h.push(l);if(!!m)this.flushQueue(m);else j()},flushQueue:function k(l){var m=JSON.stringify(h);h=[];var n=c("XPhotosWaterfallBatchLoggingController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(n).setData({logs:m}).setFinallyHandler(l||c("emptyFunction")).setTimeoutHandler(10*1e3,l||c("emptyFunction")).send()}},j=c("throttle")(i.flushQueue,c("PhotosUploadWaterfallXConfig").batchInterval*1e3);f.exports=i}),null);
__d("PhotosUploadWaterfallMixin",["PhotosUploadWaterfall","emptyFunction"],(function a(b,c,d,e,f,g){var h=c("emptyFunction"),i={getUploaderApp:h,getWaterfallID:h,getAdditionalData:function j(){return{}},logWaterfallStep:function j(k,l,m){c("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m)},logWaterfallStepUsingBanzai:function j(k,l,m){c("PhotosUploadWaterfall").sendBanzai(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m)}};f.exports=i}),null);
__d("PhotoSourceTypes",["keyMirror"],(function a(b,c,d,e,f,g){f.exports=c("keyMirror")({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null})}),null);
__d("BaseSelectionContainer",[],(function a(b,c,d,e,f,g){var h=0;function i(){"use strict";this.$BaseSelectionContainer1=(h++).toString()}i.prototype.getSelectionContainerID=function(){"use strict";return this.$BaseSelectionContainer1};i.prototype.getSource=function(){"use strict";throw new Error("This must be implemented by the child class")};i.prototype.getName=function(){"use strict";return null};i.prototype.getSize=function(){"use strict";return null};i.prototype.hasPlaceholderUI=function(){"use strict";throw new Error("This must be implemented by the child class")};f.exports=i}),null);
__d("SelectionSource",["PhotoSourceTypes"],(function a(b,c,d,e,f,g){var h={FILE:"file",FLASH:"flash",VAULT:"vault",SUGGESTIONS:"suggestions",POSTED_PHOTOS:"posted_photos",PAGES_POSTED_PHOTOS:"pages_posted_photos",toPhotoSourceType:function i(j){switch(j){case h.FILE:case h.FLASH:return c("PhotoSourceTypes").COMPUTER;case h.VAULT:return c("PhotoSourceTypes").SYNCED_PHOTOS;case h.SUGGESTIONS:return c("PhotoSourceTypes").SUGGESTIONS;case h.POSTED_PHOTOS:return c("PhotoSourceTypes").POSTED_PHOTOS;case h.PAGES_POSTED_PHOTOS:return c("PhotoSourceTypes").PAGES_POSTED_PHOTOS;default:throw new Error("No mapping for SelectionSource: "+j)}}};f.exports=h}),null);
__d("FileSelectionContainer",["BaseSelectionContainer","SelectionSource"],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c("BaseSelectionContainer"));i=h&&h.prototype;function j(k){"use strict";i.constructor.call(this);this.$FileSelectionContainer1=k}j.prototype.getFile=function(){"use strict";return this.$FileSelectionContainer1};j.prototype.getSource=function(){"use strict";return c("SelectionSource").FILE};j.prototype.getName=function(){"use strict";return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name};j.prototype.getSize=function(){"use strict";return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size};j.prototype.hasPlaceholderUI=function(){"use strict";return false};f.exports=j}),null);
__d("AlbumMediaUploadUtils",["VideoUploadConfig"],(function a(b,c,d,e,f,g){var h={isVideoFile:function i(j){var k=j.name,l=c("VideoUploadConfig").videoExtensions,m=k.indexOf(".")!==-1?k.split(".").pop().toLowerCase():"";return l[m]},hasVideos:function i(j){return this._filterVideos(j).length>0},_filterVideos:function i(j){return this._filterFileOfSupportedType(j,c("VideoUploadConfig").videoExtensions)},_filterFileOfSupportedType:function i(j,k){return j.filter(function(l){var m=l.indexOf(".")!==-1?l.split(".").pop().toLowerCase():"";return k[m]})}};f.exports=h}),null);
__d("FilePickerEvent",[],(function a(b,c,d,e,f,g){f.exports={BEGIN:"FilePickerEvent/BEGIN",SELECT_START:"FilePickerEvent/SELECT_START",SELECTED:"FilePickerEvent/SELECTED_FILES",ALBUM_LIMIT_EXCEEDED:"FilePickerEvent/ALBUM_LIMIT_EXCEEDED",SESSION_LIMIT_EXCEEDED:"FilePickerEvent/SESSION_LIMIT_EXCEEDED",SELECT_CANCELED:"FilePickerEvent/SELECT_CANCELED",FALLBACK:"FilePickerEvent/FALLBACK"}}),null);
__d("HTML5FilePicker",["cx","ArbiterMixin","BrowserSupport","CSS","DOM","FilePickerEvent","FileSelectionContainer","Keys","Parent","PhotosUploadID","PhotosUploadWaterfall","PhotosUploadWaterfallMixin","PhotosUploadWaterfallXMixin","PUWApplications","PUWSteps","URI","getOrCreateDOMID"],(function a(b,c,d,e,f,g,h){function i(j,k){this._config=babelHelpers["extends"]({accept:undefined,multiple:undefined},k);this._button=j;this._beginInformed=false;if(!c("BrowserSupport").hasFileAPI()){this.logStep(c("PUWSteps").CLIENT_PROCESS_UNAVAILABLE,{error:"no_file_api"});if(Object.prototype.hasOwnProperty.call(this._config,"fallbackFunction")){this._config.fallbackFunction.call(this);return}return}this._subscriptions=[];var l=this._config.input||c("DOM").create("input",{type:"file",className:"_n",tabindex:"-1"});if(Object.prototype.hasOwnProperty.call(this._config,"accept"))l.accept=this._config.accept;if(Object.prototype.hasOwnProperty.call(this._config,"multiple"))l.multiple=this._config.multiple;if(Object.prototype.hasOwnProperty.call(this._config,"title"))l.title=this._config.title;var m=c("DOM").create("label",{className:"accessible_elem","for":c("getOrCreateDOMID")(l)},l.title),n=c("DOM").create("div",{className:"_3jk"},[m,l]);c("CSS").addClass(this._button,"_m");c("DOM").appendContent(this._button,n);this._button.setAttribute("rel","ignore");this._bindInput(l);this._button.onkeydown=function(event){if(event.keyCode===c("Keys").RETURN){this._input.click();if(event&&event.stopPropagation)event.stopPropagation()}}.bind(this);var o=c("Parent").byClass(this._button,"addPhotosDisabled");if(o){c("CSS").removeClass(o,"addPhotosDisabled");c("CSS").addClass(o,"addPhotosEnabled")}}Object.assign(i.prototype,c("ArbiterMixin"),c("PhotosUploadWaterfallMixin"),c("PhotosUploadWaterfallXMixin"),{getUploaderApp:function j(){return c("PhotosUploadWaterfall").APP_HTML5},getWaterfallID:function j(){return this._config.qn},getWaterfallAppName:function j(){return c("PUWApplications").WEB_HTML5},getWaterfallSource:function j(){return this._config.ref},getSwfID:function j(){return null},_constructFileList:function j(){var k=Array.from(this._input.files);k.forEach(function(l){l.uploadID=c("PhotosUploadID").getNewID()});return k},_constructFileSelectionContainerList:function j(){var k=Array.from(this._input.files);return k.map(function(l){return new(c("FileSelectionContainer"))(l)})},cleanup:function j(){if(this._input){this._input.onclick=null;this._input.onchange=null}if(this._button)this._button.onkeydown=null},_bindInput:function j(k){this.cleanup();k.onclick=function(){this.logWaterfallStep(c("PhotosUploadWaterfall").SELECT_START);if(!this._beginInformed){this._beginInformed=true;this.inform(c("FilePickerEvent").BEGIN||"FilePickerEvent/BEGIN")}this.inform(c("FilePickerEvent").SELECT_START)}.bind(this);k.onchange=function(){this.inform(c("FilePickerEvent").SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()});this._bindInput(this._input.cloneNode(false))}.bind(this);if(this._input)c("DOM").replace(this._input,k);this._input=k}});f.exports=i}),null);
__d("UploadSession",["invariant","AlbumMediaUploadUtils","AsyncRequest","FilePickerEvent","SubscriptionsHandler","PhotosUploadWaterfall","PUWSteps","URI"],(function a(b,c,d,e,f,g,h){var i={};function j(m){"use strict";this._sessionID=m;this._asyncBootstrapped=false;this._controller=null;this._overlay=null;this._pickers=[];this._pendingPhotoFileLists=[];this._pendingVideoFileLists=[];this._beginLogged=false;this._albumLimitWasExceeded=false;this._sessionLimitWasExceeded=false;this._subscriptions=new(c("SubscriptionsHandler"))()}j.prototype.addFilePicker=function(m){"use strict";if(!this._pickers.includes(m)){this._pickers.push(m);if(this._controller&&m.getSwfID&&m.getSwfID())this._controller.preregisterSwf&&this._controller.preregisterSwf(m.getSwfID());this._subscriptions.addSubscriptions(m.subscribe(c("FilePickerEvent").BEGIN,function(n,o){if(!this._beginLogged){this._beginLogged=true;m.logWaterfallStep(c("PhotosUploadWaterfall").BEGIN);m.logStep(c("PUWSteps").CLIENT_FLOW_BEGIN)}}.bind(this)),m.subscribe(c("FilePickerEvent").SELECTED,function(n,o){m.logStep(c("PUWSteps").CLIENT_SELECT_SUCCESS,{volume:o.files.length});var p=[],q=[];o.files.forEach(function(t){if(c("AlbumMediaUploadUtils").isVideoFile(t))p.push(t);else q.push(t)});if(this._controller){if(q.length>0)this._controller.uploadFiles(q);if(this._videoController&&p.length>0)this._videoController.uploadFiles(p)}else{if(q.length>0)this._pendingPhotoFileLists.push(q);if(p.length>0)this._pendingVideoFileLists.push(p)}if(this._asyncBootstrapped)return;var r=m._button,s=new(c("URI"))(r.getAttribute("ajaxify"));s.addQueryData("num_selected",o.files.length);c("AsyncRequest").bootstrap(s.toString(),r,true);this._asyncBootstrapped=true}.bind(this)),m.subscribe(c("FilePickerEvent").SELECT_START,function(){m.logStep(c("PUWSteps").CLIENT_SELECT_BEGIN)}.bind(this)),m.subscribe(c("FilePickerEvent").SELECT_CANCELED,function(){m.logStep(c("PUWSteps").CLIENT_SELECT_CANCEL);if(!this._overlay){m.logStep(c("PUWSteps").CLIENT_FLOW_CANCEL);this._beginLogged=false}}.bind(this)),m.subscribe(c("FilePickerEvent").ALBUM_LIMIT_EXCEEDED,function(){if(this._controller)this._controller.albumLimitExceeded();else this._albumLimitWasExceeded=true}.bind(this)),m.subscribe(c("FilePickerEvent").SESSION_LIMIT_EXCEEDED,function(){if(this._controller)this._controller.sessionLimitExceeded();else this._sessionLimitWasExceeded=true}.bind(this)))}};j.prototype.addController=function(m,n){"use strict";this._controller=m;this._videoController=n;this._asyncBootstrapped=true;var o=this._controller.getWaterfallID?this._controller.getWaterfallID():this._controller.getWaterfallConfig().waterfallID,p=this._controller.getUploaderApp?this._controller.getUploaderApp():this._controller.getWaterfallConfig().waterfallApp;if(!this._beginLogged){this._beginLogged=true;c("PhotosUploadWaterfall").sendSignal({qn:o,step:c("PhotosUploadWaterfall").BEGIN,uploader:p})}if(this._pendingPhotoFileLists.length>0||this._pendingVideoFileLists.length>0){var q=[],r=[];this._pendingVideoFileLists.forEach(function(s){r=r.concat(s)});this._pendingPhotoFileLists.forEach(function(s){q=q.concat(s)});if(q.length>0)this._controller.uploadFiles(q);if(r.length>0)this._videoController.uploadFiles(r)}else c("PhotosUploadWaterfall").sendSignal({qn:o,step:c("PhotosUploadWaterfall").OVERLAY_FIRST,uploader:p});if(this._albumLimitWasExceeded)this._controller.albumLimitExceeded();if(this._sessionLimitWasExceeded)this._controller.sessionLimitExceeded()};j.prototype.addOverlay=function(m){"use strict";this._overlay=m};j.prototype.addOverlayAndController=function(m,n){"use strict";this.addOverlay(m);this.addController(n,null)};j.prototype.getFilePickers=function(){"use strict";return this._pickers};j.prototype.cleanup=function(){"use strict";this._subscriptions&&this._subscriptions.release()};j.addFilePickerToSession=function(m,n){"use strict";k(m).addFilePicker(n)};j.addControllerToSession=function(m,n,o){"use strict";k(m).addController(n,o)};j.addOverlayToSession=function(m,n){"use strict";k(m).addOverlay(n)};j.addOverlayAndControllerToSession=function(m,n,o){"use strict";k(m).addOverlayAndController(n,o)};j.restartSessionPersistingFilePickers=function(m){"use strict";var n=k(m),o=new j(m);n.getFilePickers().forEach(function(p){o.addFilePicker(p)});l(m,o)};function k(m){if(!i[m])i[m]=new j(m);return i[m]}function l(m,n){i[m]||h(0);i[m].cleanup();delete i[m];i[m]=n}f.exports=j}),null);