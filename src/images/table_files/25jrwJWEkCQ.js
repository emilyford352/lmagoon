if (self.CavalryLogger) { CavalryLogger.start_js(["qCBZX"]); }

__d("UFIAddCommentController",["Parent","React","ReactDOM","UFIAddComment.react","UFIAddCommentActionType","UFIAsyncWrapper","UFICallbackStore","UFICommentEditIDStore","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackContext.react","UFINewCommentNotifier"],(function a(b,c,d,e,f,g){"use strict";h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k))};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new(c("UFIDispatcher"))();this.$UFIAddCommentController4={UFICallbackStore:new(c("UFICallbackStore"))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c("UFIAddCommentActionType").SUBMIT_NEW,function(l){return c("UFINewCommentNotifier").onNewComment(c("Parent").byTag(j,"form"),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp)}.bind(this));this.$UFIAddCommentController5=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);c("UFICommentEditIDStore").addListener(function(){var l=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render()}}.bind(this));this.render()}h.prototype.render=function(){var j=c("React").createElement(c("UFIDispatcherContext.react"),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c("React").createElement(c("UFIFeedbackContext.react"),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c("ReactDOM").render(c("React").createElement(c("UFIAsyncWrapper"),null,j),this.$UFIAddCommentController1)};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove()};var i=function i(){this.renderAddComment=function(j,k){if(this.$UFIAddCommentController5!==null||!k||!k.cancomment||!k.actorforpost)return null;return c("React").createElement(c("UFIAddComment.react"),{viewerActorID:k.actorforpost,targetID:k.ownerid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:k.mentionsdatasource,showSendOnEnterTip:k.showsendonentertip,multiCompanyGroupsCount:k.multicompanygroupscount,allowPhotoAttachments:k.allowphotoattachments&&!j.islivestreaming,allowVideoAttachments:k.allowvideoattachments&&!j.islivestreaming,allowStickerAttachments:k.allowstickerattachments&&!j.islivestreaming,allowGifAttachments:k.allowgifattachments&&!j.islivestreaming,allowTipJar:Boolean(k.istipjarenabled&&j.islivestreaming),contextArgs:j,subtitle:k.subtitle,isQAndA:k.isqanda,keepFocus:j.islivestreaming})}.bind(this)};f.exports=h}),null);
__d("PlatformDialogOauthWrite",["Arbiter","SelectorDeprecated","PrivacyConst"],(function a(b,c,d,e,f,g){var h={subscribeAudienceText:function i(j,k,l){c("Arbiter").subscribe("platform/privacy/app-audience",function(m,n){j.show(k[n]||l)});c("Arbiter").subscribe("AudienceSelector/changed",function(m,n){var o=c("SelectorDeprecated").getOptionValue(n.option);if(o!=c("PrivacyConst").BaseValue.CUSTOM)j.show(k[o]||l)});c("Arbiter").subscribe("CustomPrivacyOptionController/update",function(m,n){j.show(k[c("SelectorDeprecated").getOptionValue(n.option)]||l)})}};f.exports=h}),null);
__d("PlatformDialogStack",["CSS","ge"],(function a(b,c,d,e,f,g){function h(i,j){this._root=i;this._showing=j}Object.assign(h.prototype,{getRoot:function i(){return this._root},getShowing:function i(){return this._showing},show:function i(j){Array.from(this._root.childNodes).forEach(c("CSS").hide,c("CSS"));c("CSS").show(c("ge")(j,this._root));this._showing=j;return this}});f.exports=h}),null);
__d("legacy:AudienceSelector",["AudienceSelector"],(function a(b,c,d,e,f,g){c("AudienceSelector")}),3);
__d("FriendListPrivacyOptions",["Arbiter","AsyncDialog","AsyncRequest","DOMQuery","PageTransitions","Parent","SelectorDeprecated","$","ge","nullthrows"],(function a(b,c,d,e,f,g){var h=false,i=false,j=null,k={},l=function l(n){if(!Object.keys(k).length)c("PageTransitions").registerHandler(function(){k={};h=false;i=false});var o=n.getAttribute("data-name");k[o]=n;c("SelectorDeprecated").listen(n,"select",function(p){var q=p.option,r=c("DOMQuery").find(q,"a.itemAnchor"),s=r.getAttribute("data-flid");if(!s)return;var t=r.getAttribute("data-dynamic");if(t&&h)m.showSmartListNux(q,s);else if(!t&&i)m.showDumbListNux([s])})},m={listen:function n(o,p,q){var r=c("ge")(o);if(!r)return;var s=c("Parent").byClass(r,"audienceSelector");if(s){l(s);h=p;i=q}},showSmartListNux:function n(o,p){var q=c("$")(o);new(c("AsyncRequest"))("/ajax/friends/lists/smart_list_publish_nux.php").setData({option_id:q.id,flid:p}).send();h=false},setContextualDialog:function n(o,p){var q,r=c("$")(p),s=c("Parent").byClass(r,"audienceSelector");if(s)(function(){o.setContext(s);o.show();var t=c("Arbiter").subscribe("composer/publish",function(){o.hide()});o.subscribe("hide",function(){t.unsubscribe()})})()},showDumbListNux:function n(o){c("AsyncDialog").send(new(c("AsyncRequest"))("/ajax/friends/lists/dumb_list_publish_nux.php").setData({flids:o}));i=false},showBothListsNux:function n(o,p){j=c("$")(o);m.showDumbListNux(p)},setDialogX:function n(o){if(!j)return;o.subscribe("hide",function(){m.showSmartListNux(c("nullthrows")(j));j=null})}};f.exports=m}),null);
__d("AppSettingsController",["cx","csx","AsyncDialog","AsyncRequest","CSS","DOM","DOMEventListener","DOMQuery","PageTransitions","Parent","URI","emptyFunction","ge"],(function a(b,c,d,e,f,g,h,i){var j=13,k,l,m,n,o=null,p={},q;function r(A){var B=arguments.length<=1||arguments[1]===undefined?c("emptyFunction"):arguments[1],C=new(c("URI"))("/settings/applications/fetch_apps").setQueryData({tab:A,container_id:n.id});new(c("AsyncRequest"))().setURI(C).setFinallyHandler(B).setErrorHandler(function(){window.location.reload()}).send()}function s(A){k=A;for(var B in l){c("CSS").conditionClass(l[B],"_57ne",B==A);c("CSS").conditionClass(l[B],"_57nf",B!=A)}}function t(A,B,C,D,E,F){n=B;o=C;l=A;m=D;q=F;c("PageTransitions").registerHandler(function(G){if(G.getPath()=="/settings"&&G.getQueryData().tab==="applications"){var H=G.getQueryData().section||"all";if(k!=H){s(H);r(H)}return true}});r(E);s(E)}function u(A,B){c("DOMEventListener").add(A,"click",v.bind(null,A,B))}function v(A,B){c("CSS").hide(A);B.style.overflow="visible";B.style.maxHeight="none"}function w(A,B,C,D){c("DOMEventListener").add(A,"click",function(E){var F,G;if(Array.isArray(C)&&C.indexOf(E.getTarget().id)>-1){G=new(c("URI"))("/ajax/settings/apps/delete_app.php").setQueryData({app_id:B,legacy:false,dialog:true});c("AsyncDialog").send(new(c("AsyncRequest"))(G))}else(function(){var H=A.id;G=new(c("URI"))("/settings/applications/edit_app_settings").setQueryData({app_id:B,reload_after:false});c("AsyncDialog").send(new(c("AsyncRequest"))(G),function(I){var J=false;I.subscribe("hide",function(){if(J){c("DOM").setContent(n,o);r(k,function(){var A=c("ge")(H);if(!A)return;if(D){var K=c("DOMQuery").scry(n,"._4n9-"),L=c("Parent").bySelector(A,"._4na3");if(K.length>0)v(K[0],L)}A.focus()})}else A.focus()});I.subscribe("confirm",function(){J=true});I.subscribe("show",function(){var K=c("DOMQuery").scry(I.getContentRoot(),"._38ic");if(K.length>0)c("DOMEventListener").add(K[0],"click",function(){I.hide()})})})})()});c("DOMEventListener").add(A,"keydown",function(E){if(E.keyCode===j)A.click()});p[B]=A.id}function x(A){var B=p[A],C=c("ge")(B);if(C){c("DOM").remove(C);delete p[A];q[k].innerText=parseInt(q[k].innerText,10)-1}}function y(A){if(!window.getComputedStyle)return;var B=c("DOM").scry(A,"td").map(function(D){return c("DOM").scry(D,"div")[0]});B=B.filter(function(D){return D!==undefined});var C=Math.max.apply(null,B.map(function(D){return parseFloat(getComputedStyle(D).height)}));B.forEach(function(D){D.style.height=C+"px"})}var z={fetchApps:r,initTabs:t,registerApp:w,removeApp:x,showAllLink:u,equalizeTableHeights:y};f.exports=z}),null);
__d("AppSettingsTypeahead.react",["fbt","AsyncDialog","AsyncRequest","React","URI","XUITypeahead.react"],(function a(b,c,d,e,f,g,h){var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={queryString:""},this.$AppSettingsTypeahead1=function(r){var s=new(c("URI"))("/settings/applications/edit_app_settings").setQueryData({app_id:r.getUniqueID()}),t=new(c("AsyncRequest"))(s);c("AsyncDialog").send(t)},this.$AppSettingsTypeahead2=function(event){this.setState({queryString:event.target.value})}.bind(this),n}l.prototype.render=function(){"use strict";return c("React").createElement(c("XUITypeahead.react"),{searchSource:this.props.searchSource,onChange:this.$AppSettingsTypeahead2,onSelectAttempt:this.$AppSettingsTypeahead1,queryString:this.state.queryString,placeholder:h._("Search Apps"),autoHighlight:true})};l.propTypes={searchSource:k.object};f.exports=l}),null);
__d("TypeaheadHintText",["emptyFunction"],(function a(b,c,d,e,f,g){function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=false};Object.assign(h.prototype,{disable:c("emptyFunction")});f.exports=h}),null);
__d("legacy:HintTextTypeaheadBehavior",["TypeaheadHintText"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c("TypeaheadHintText"))}}),3);
__d("differenceSets",["filterSet"],(function a(b,c,d,e,f,g){"use strict";function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];return c("filterSet")(i,function(m){return!k.some(function(n){return n.has(m)})})}f.exports=h}),null);