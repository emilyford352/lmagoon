if (self.CavalryLogger) { CavalryLogger.start_js(["rDOEi"]); }

__d("PhotoBrowserDialog",["csx","cx","AsyncDialog","AsyncRequest","Banzai","Event","Parent"],(function a(b,c,d,e,f,g,h,i){var j="photo_browser_dialog";function k(l,m){"use strict";c("Event").listen(l.getInnerContent(),"click",function(n){var o=c("Parent").bySelector(n.getTarget(),"._3w6p");if(!o)return;var p=parseInt(o.getAttribute("data-album-id"),10),q=parseInt(o.getAttribute("data-photo-id"),10);if(p||q){if(p)m.album_fbid=p;else m.photo_fbid=q;c("Banzai").post(j,m)}var r=o.getAttribute("ajaxify");if(!r)return;var s=l.getCausalElement(),t=new(c("AsyncRequest"))().setURI(r).setHandler(l.hide.bind(l));if(s)t.setRelativeTo(s);c("AsyncDialog").send(t)})}f.exports=k}),null);
__d("MakeProfilePicInit",["ProfilePicCropViewerInit","URI"],(function a(b,c,d,e,f,g){var h={handleOptimus:function i(j,k,l){l.prevent();var m=new(c("URI"))(k.getAttribute("ajaxify")||k.href).getQueryData();c("ProfilePicCropViewerInit").loadID(m.fbid,m.profile_id,{source:m.pp_source,stickerID:m.sticker_id})}};f.exports=h}),null);