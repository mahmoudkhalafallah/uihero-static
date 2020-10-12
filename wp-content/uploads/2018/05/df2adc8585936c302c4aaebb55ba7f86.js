/**handles:wordfenceAJAXjs**/
!function(e,t,i){i.wordfenceAJAXWatcher||(i.wordfenceAJAXWatcher={blockWarningOpen:!1,init:function(){e(t).ajaxError(function(t,i,n,o){if(!wordfenceAJAXWatcher.blockWarningOpen){var r=n.url;r.length>63&&(r=r.substring(0,30)+"..."+r.substring(r.length-30));for(var a=e("<div/>").text(r).html(),h=e(i.responseText),s=h.filter("#whitelist-form").add(h.find("#whitelist-form")).attr("action"),l=h.filter("input[name]").add(h.find("input[name]")),c={},d=0;d<l.length;d++)c[l[d].name]=l[d].value;"string"==typeof s&&(wordfenceAJAXWatcher.blockWarningOpen=!0,e.wordfenceBox({closeButton:!1,width:"400px",html:"<h3>Background Request Blocked</h3><p>Wordfence Firewall blocked a background request to WordPress for the URL <code>"+a+'</code>. If this occurred as a result of an intentional action, you may consider whitelisting the request to allow it in the future.</p><p class="textright"><a href="https://docs.wordfence.com/en/Web_Application_Firewall_-_Blocked_Ajax_Requests" target="_blank" rel="noopener noreferrer" class="wfboxhelp"></a><a href="#" class="button" id="background-block-whitelist">Whitelist this action</a> <a href="#" class="button" id="background-block-dismiss">Dismiss</a></p>',onComplete:function(){e("#background-block-dismiss").click(function(t){t.preventDefault(),t.stopPropagation(),e.wordfenceBox.close()}),e("#background-block-whitelist").click(function(t){t.preventDefault(),t.stopPropagation(),confirm("Are you sure you want to whitelist this action?")&&e.ajax({method:"POST",url:s,data:c,global:!1,success:function(){alert("The request has been whitelisted. Please try it again."),e.wordfenceBox.close()},error:function(){alert("An error occurred when adding the request to the whitelist."),e.wordfenceBox.close()}})})},onClosed:function(){wordfenceAJAXWatcher.blockWarningOpen=!1}}))}})}}),e(function(){wordfenceAJAXWatcher.init()})}(jQuery,document,window),!function(e,t,i){function n(i,n,o){var r=t.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),e(r)}function o(){return i.innerHeight?i.innerHeight:e(i).height()}function r(t,i){i!==Object(i)&&(i={}),this.cache={},this.el=t,this.value=function(t){var n;return void 0===this.cache[t]&&(n=e(this.el).attr("data-wfbox-"+t),void 0!==n?this.cache[t]=n:void 0!==i[t]?this.cache[t]=i[t]:void 0!==V[t]&&(this.cache[t]=V[t])),this.cache[t]},this.get=function(t){var i=this.value(t);return e.isFunction(i)?i.call(this.el,this):i}}function a(e){var t=A.length,i=(J+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?B.width():o())/100:1)*parseInt(e,10))}function s(e,t){return e.get("photo")||e.get("photoRegex").test(t)}function l(e,t){return e.get("retinaUrl")&&i.devicePixelRatio>1?t.replace(e.get("photoRegex"),e.get("retinaSuffix")):t}function c(e){"contains"in x[0]&&!x[0].contains(e.target)&&e.target!==v[0]&&(e.stopPropagation(),x.focus())}function d(e){d.str!==e&&(x.add(v).removeClass(d.str).addClass(e),d.str=e)}function u(t){J=0,t&&t!==!1&&"nofollow"!==t?(A=e("."+ee).filter(function(){var i=e.data(this,Y),n=new r(this,i);return n.get("rel")===t}),J=A.index(S.el),-1===J&&(A=A.add(S.el),J=A.length-1)):A=e(S.el)}function g(i){e(t).trigger(i),he.triggerHandler(i)}function f(i){var o;if(!U){if(o=e(i).data(Y),S=new r(i,o),u(S.get("rel")),!N){N=z=!0,d(S.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),H=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),y.css({width:"",height:""}).append(H),j=k.height()+W.height()+y.outerHeight(!0)-y.height(),D=T.width()+C.width()+y.outerWidth(!0)-y.width(),K=H.outerHeight(!0),q=H.outerWidth(!0);var a=h(S.get("initialWidth"),"x"),s=h(S.get("initialHeight"),"y"),l=S.get("maxWidth"),f=S.get("maxHeight");S.w=Math.max((l!==!1?Math.min(a,h(l,"x")):a)-q-D,0),S.h=Math.max((f!==!1?Math.min(s,h(f,"y")):s)-K-j,0),H.css({width:"",height:S.h}),$.position(),g(te),S.get("onOpen"),F.add(L).hide(),x.focus(),S.get("trapFocus")&&t.addEventListener&&(t.addEventListener("focus",c,!0),he.one(re,function(){t.removeEventListener("focus",c,!0)})),S.get("returnFocus")&&he.one(re,function(){e(S.el).focus()})}var p=parseFloat(S.get("opacity"));v.css({opacity:p===p?p:"",cursor:S.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),S.get("closeButton")?R.html(S.get("close")).appendTo(y):R.appendTo("<div/>"),m()}}function p(){x||(G=!1,B=e(i),x=n(se).attr({id:Y,class:e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),I=e([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),b=n(se,"Wrapper"),y=n(se,"Content").append(L=n(se,"Title"),M=n(se,"Current"),O=e('<button type="button"/>').attr({id:Z+"Previous"}),_=e('<button type="button"/>').attr({id:Z+"Next"}),P=e('<button type="button"/>').attr({id:Z+"Slideshow"}),I),R=e('<button type="button"/>').attr({id:Z+"Close"}),b.append(n(se).append(n(se,"TopLeft"),k=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(T=n(se,"MiddleLeft"),y,C=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),W=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({float:"left"}),E=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),F=_.add(O).add(M).add(P)),t.body&&!x.parent().length&&e(t.body).append(v,x.append(b,E))}function w(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),f(this))}return!!x&&(G||(G=!0,_.click(function(){$.next()}),O.click(function(){$.prev()}),R.click(function(){$.close()}),v.click(function(){S.get("overlayClose")&&$.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;N&&S.get("escKey")&&27===t&&(e.preventDefault(),$.close()),N&&S.get("arrowKey")&&A[1]&&!e.altKey&&(37===t?(e.preventDefault(),O.click()):39===t&&(e.preventDefault(),_.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+ee,i):e("."+ee).live("click."+Z,i)),!0)}function m(){var t,o,r,a=$.prep,c=++le;if(z=!0,X=!1,g(ae),g(ie),S.get("onLoad"),S.h=S.get("height")?h(S.get("height"),"y")-K-j:S.get("innerHeight")&&h(S.get("innerHeight"),"y"),S.w=S.get("width")?h(S.get("width"),"x")-q-D:S.get("innerWidth")&&h(S.get("innerWidth"),"x"),S.mw=S.w,S.mh=S.h,S.get("maxWidth")&&(S.mw=h(S.get("maxWidth"),"x")-q-D,S.mw=S.w&&S.w<S.mw?S.w:S.mw),S.get("maxHeight")&&(S.mh=h(S.get("maxHeight"),"y")-K-j,S.mh=S.h&&S.h<S.mh?S.h:S.mh),t=S.get("href"),Q=setTimeout(function(){I.show()},100),S.get("inline")){var d=e(t).eq(0);r=e("<div>").hide().insertBefore(d),he.one(ae,function(){r.replaceWith(d)}),a(d)}else S.get("iframe")?a(" "):S.get("html")?a(S.get("html")):s(S,t)?(t=l(S,t),X=S.get("createImg"),e(X).addClass(Z+"Photo").bind("error."+Z,function(){a(n(se,"Error").html(S.get("imgError")))}).one("load",function(){c===le&&setTimeout(function(){var t;S.get("retinaImage")&&i.devicePixelRatio>1&&(X.height=X.height/i.devicePixelRatio,X.width=X.width/i.devicePixelRatio),S.get("scalePhotos")&&(o=function(){X.height-=X.height*t,X.width-=X.width*t},S.mw&&X.width>S.mw&&(t=(X.width-S.mw)/X.width,o()),S.mh&&X.height>S.mh&&(t=(X.height-S.mh)/X.height,o())),S.h&&(X.style.marginTop=Math.max(S.mh-X.height,0)/2+"px"),A[1]&&(S.get("loop")||A[J+1])&&(X.style.cursor="pointer",e(X).bind("click."+Z,function(){$.next()})),X.style.width=X.width+"px",X.style.height=X.height+"px",a(X)},1)}),X.src=t):t&&E.load(t,S.get("data"),function(t,i){c===le&&a("error"===i?n(se,"Error").html(S.get("xhrError")):e(this).contents())})}var v,x,b,y,k,T,C,W,A,B,H,E,I,L,M,P,_,O,R,F,S,j,D,K,q,J,X,N,z,U,Q,$,G,V={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return e(this).attr("href")},title:function(){return this.title},createImg:function(){var t=new Image,i=e(this).data("cbox-img-attrs");return"object"==typeof i&&e.each(i,function(e,i){t[e]=i}),t},createIframe:function(){var i=t.createElement("iframe"),n=e(this).data("cbox-iframe-attrs");return"object"==typeof n&&e.each(n,function(e,t){i[e]=t}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="wordfenceBox",Z="wfbox",ee=Z+"Element",te=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",ae=Z+"_purge",he=e("<a/>"),se="div",le=0,ce={},de=function(){function e(){clearTimeout(a)}function t(){(S.get("loop")||A[J+1])&&(e(),a=setTimeout($.next,S.get("slideshowSpeed")))}function i(){P.html(S.get("slideshowStop")).unbind(s).one(s,n),he.bind(ne,t).bind(ie,e),x.removeClass(h+"off").addClass(h+"on")}function n(){e(),he.unbind(ne,t).unbind(ie,e),P.html(S.get("slideshowStart")).unbind(s).one(s,function(){$.next(),i()}),x.removeClass(h+"on").addClass(h+"off")}function o(){r=!1,P.hide(),e(),he.unbind(ne,t).unbind(ie,e),x.removeClass(h+"off "+h+"on")}var r,a,h=Z+"Slideshow_",s="click."+Z;return function(){r?S.get("slideshow")||(he.unbind(oe,o),o()):S.get("slideshow")&&A[1]&&(r=!0,he.one(oe,o),S.get("slideshowAuto")?i():n(),P.show())}}();e[Y]||(e(p),$=e.fn[Y]=e[Y]=function(t,i){var n,o=this;return t=t||{},e.isFunction(o)&&(o=e("<a/>"),t.open=!0),o[0]?(p(),w()&&(i&&(t.onComplete=i),o.each(function(){var i=e.data(this,Y)||{};e.data(this,Y,e.extend(i,t))}).addClass(ee),n=new r(o[0],t),n.get("open")&&f(o[0])),o):o},$.position=function(t,i){function n(){k[0].style.width=W[0].style.width=y[0].style.width=parseInt(x[0].style.width,10)-D+"px",y[0].style.height=T[0].style.height=C[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,a,s,l=0,c=0,d=x.offset();if(B.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),a=B.scrollTop(),s=B.scrollLeft(),S.get("fixed")?(d.top-=a,d.left-=s,x.css({position:"fixed"})):(l=a,c=s,x.css({position:"absolute"})),c+=S.get("right")!==!1?Math.max(B.width()-S.w-q-D-h(S.get("right"),"x"),0):S.get("left")!==!1?h(S.get("left"),"x"):Math.round(Math.max(B.width()-S.w-q-D,0)/2),l+=S.get("bottom")!==!1?Math.max(o()-S.h-K-j-h(S.get("bottom"),"y"),0):S.get("top")!==!1?h(S.get("top"),"y"):Math.round(Math.max(o()-S.h-K-j,0)/2),x.css({top:d.top,left:d.left,visibility:"visible"}),b[0].style.width=b[0].style.height="9999px",r={width:S.w+q+D,height:S.h+K+j,top:l,left:c},t){var u=0;e.each(r,function(e){return r[e]!==ce[e]?void(u=t):void 0}),t=u}ce=r,t||x.css(r),x.dequeue().animate(r,{duration:t||0,complete:function(){n(),z=!1,b[0].style.width=S.w+q+D+"px",b[0].style.height=S.h+K+j+"px",S.get("reposition")&&setTimeout(function(){B.bind("resize."+Z,$.position)},1),e.isFunction(i)&&i()},step:n})},$.resize=function(e){var t;N&&(e=e||{},e.width&&(S.w=h(e.width,"x")-q-D),e.innerWidth&&(S.w=h(e.innerWidth,"x")),H.css({width:S.w}),e.height&&(S.h=h(e.height,"y")-K-j),e.innerHeight&&(S.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),S.h=H.height()),H.css({height:S.h}),t&&H.scrollTop(t),$.position("none"===S.get("transition")?0:S.get("speed")))},$.prep=function(i){function o(){return S.w=S.w||H.width(),S.w=S.mw&&S.mw<S.w?S.mw:S.w,S.w}function h(){return S.h=S.h||H.height(),S.h=S.mh&&S.mh<S.h?S.mh:S.h,S.h}if(N){var c,u="none"===S.get("transition")?0:S.get("speed");H.remove(),H=n(se,"LoadedContent").append(i),H.hide().appendTo(E.show()).css({width:o(),overflow:S.get("scrolling")?"auto":"hidden"}).css({height:h()}).prependTo(y),E.hide(),e(X).css({float:"none"}),d(S.get("className")),c=function(){function i(){e.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,h=A.length;N&&(o=function(){clearTimeout(Q),I.hide(),g(ne),S.get("onComplete")},L.html(S.get("title")).show(),H.show(),h>1?("string"==typeof S.get("current")&&M.html(S.get("current").replace("{current}",J+1).replace("{total}",h)).show(),_[S.get("loop")||h-1>J?"show":"hide"]().html(S.get("next")),O[S.get("loop")||J?"show":"hide"]().html(S.get("previous")),de(),S.get("preloading")&&e.each([a(-1),a(1)],function(){var i,n=A[this],o=new r(n,e.data(n,Y)),a=o.get("href");a&&s(o,a)&&(a=l(o,a),i=t.createElement("img"),i.src=a)})):F.hide(),S.get("iframe")?(n=S.get("createIframe"),S.get("scrolling")||(n.scrolling="no"),e(n).attr({src:S.get("href"),class:Z+"Iframe"}).one("load",o).appendTo(H),he.one(ae,function(){n.src="//about:blank"}),S.get("fastIframe")&&e(n).trigger("load")):o(),"fade"===S.get("transition")?x.fadeTo(u,1,i):i())},"fade"===S.get("transition")?x.fadeTo(u,0,function(){$.position(0,c)}):$.position(u,c)}},$.next=function(){!z&&A[1]&&(S.get("loop")||A[J+1])&&(J=a(1),f(A[J]))},$.prev=function(){!z&&A[1]&&(S.get("loop")||J)&&(J=a(-1),f(A[J]))},$.close=function(){N&&!U&&(U=!0,N=!1,g(oe),S.get("onCleanup"),B.unbind("."+Z),v.fadeTo(S.get("fadeOut")||0,0),x.stop().fadeTo(S.get("fadeOut")||0,0,function(){x.hide(),v.hide(),g(ae),H.remove(),setTimeout(function(){U=!1,g(re),S.get("onClosed")},1)}))},$.remove=function(){x&&(x.stop(),e[Y].close(),x.stop(!1,!0).remove(),v.remove(),U=!1,x=null,e("."+ee).removeData(Y).removeClass(ee),e(t).unbind("click."+Z).unbind("keydown."+Z))},$.element=function(){return e(S.el)},$.settings=V)}(jQuery,document,window);