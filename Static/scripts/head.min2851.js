window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&y[i]!==n)return"pfx"==t?i:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?a(o,t):(o=(e+" "+w.join(r+" ")+r).split(" "),s(o,t,n))}var l,u,d,f="2.8.3",p={},m=!0,h=t.documentElement,g="modernizr",v=t.createElement(g),y=v.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",S=E.split(" "),w=E.toLowerCase().split(" "),C={},T=[],A=T.slice,x=function(e,n,r,i){var o,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:g+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=o,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),h.style.overflow=c),!!a},N={}.hasOwnProperty;d=i(N,"undefined")||i(N.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(A.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(A.call(arguments)))};return r}),C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:x(["@media (",b.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.geolocation=function(){return"geolocation"in navigator},C.cssanimations=function(){return c("animationName")},C.csstransforms=function(){return!!c("transform")},C.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in h.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return c("transition")},C.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n};for(var j in C)d(C,j)&&(u=j.toLowerCase(),p[u]=C[j](),T.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=i(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};e.html5=y,c(t)}(this,t),p._version=f,p._prefixes=b,p._domPrefixes=w,p._cssomPrefixes=S,p.testProp=function(e){return a([e])},p.testAllProps=c,p.testStyles=x,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+T.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,r,i,o,c,l){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){S.removeChild(d)},50);for(var r in x[n])x[n].hasOwnProperty(r)&&x[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:o,a:c,x:l};1===x[n]&&(g=1,x[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(i,0,b),"img"!=e&&(g||2===x[n]?(S.insertBefore(d,E?null:h),m(u,l)):x[n].push(d))}function l(e,t,n,r,o){return y=0,t=t||"j",i(e)?c("c"==t?C:w,e,t,this.i++,n,r,o):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,S=E?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",C=p?"script":w,T=Array.isArray||function(e){return"[object Array]"==g.call(e)},A=[],x={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),i=A.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=N[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=A[n](o);return o}function a(e,i,o,a,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,i,o,a,s):(x[c.url]?c.noexec=!0:x[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(i)||r(l))&&o.load(function(){u(),i&&i(c.origUrl,s,a),l&&l(c.origUrl,s,a),x[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),a(e[c],d,t,c,l))}else!n&&p()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||o,f=d,p=e.complete||o;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(i(e))a(e,0,d,0);else if(T(e))for(c=0;c<e.length;c++)l=e[c],i(l)?a(l,0,d,0):T(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){N[e]=t},f.addFilter=function(e){A.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,c,l){var u,d,p=t.createElement("script"),i=i||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?s:n||o,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},i),c?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,i,a,c){var l,i=t.createElement("link"),n=c?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(i,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t){"use strict";function n(e){var t,n,r,o,a,s;e=e||{},t=e.elements||i.getAllElements();for(var c=0,l=t.length;l>c;c++)if(n=t[c],r=n.nodeName.toUpperCase(),o=void 0,a=void 0,s=void 0,n[i.ns]||(n[i.ns]={}),e.reevaluate||!n[i.ns].evaluated){if("PICTURE"===r){if(i.removeVideoShim(n),o=i.getMatch(n),o===!1)continue;s=n.getElementsByTagName("img")[0]}else o=void 0,s=n;s&&(s[i.ns]||(s[i.ns]={}),s.srcset&&("PICTURE"===r||s.getAttribute("sizes"))&&i.dodgeSrcset(s),o?(a=i.processSourceSet(o),i.applyBestCandidate(a,s)):(a=i.processSourceSet(s),(void 0===s.srcset||s.getAttribute("sizes")&&s[i.ns].srcset)&&i.applyBestCandidate(a,s)),n[i.ns].evaluated=!0)}}function r(){n();var r=setInterval(function(){return e.picturefill(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(r):void 0},250);if(e.addEventListener){var i;e.addEventListener("resize",function(){e.clearTimeout(i),i=e.setTimeout(function(){n({reevaluate:!0})},60)},!1)}}if(!e.HTMLPictureElement){t.createElement("picture");var i={};i.ns="picturefill",i.srcsetSupported=void 0!==(new e.Image).srcset,i.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},i.endsWith=function(e,t){return e.endsWith?e.endsWith(t):-1!==e.indexOf(t,e.length-t.length)},i.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},i.getDpr=function(){return e.devicePixelRatio||1},i.getWidthFromLength=function(e){return e=e&&parseFloat(e)>0?e:"100vw",e=e.replace("vw","%"),i.lengthEl||(i.lengthEl=t.createElement("div"),t.documentElement.insertBefore(i.lengthEl,t.documentElement.firstChild)),i.lengthEl.style.cssText="position: absolute; left: 0; width: "+e+";",i.lengthEl.offsetWidth},i.types={},i.types["image/jpeg"]=!0,i.types["image/gif"]=!0,i.types["image/png"]=!0,i.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),i.types["image/webp"]=function(){var t=new e.Image,r="image/webp";t.onerror=function(){i.types[r]=!1,n()},t.onload=function(){i.types[r]=1===t.width,n()},t.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},i.verifyTypeSupport=function(e){var t=e.getAttribute("type");return null===t||""===t?!0:"function"==typeof i.types[t]?(i.types[t](),"pending"):i.types[t]},i.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},i.findWidthFromSourceSize=function(e){for(var t,n=i.trim(e).split(/\s*,\s*/),r=0,o=n.length;o>r;r++){var a=n[r],s=i.parseSize(a),c=s.length,l=s.media;if(c&&(!l||i.matchesMedia(l))){t=c;break}}return i.getWidthFromLength(t)},i.getCandidatesFromSourceSet=function(e,t){for(var n=i.trim(e).split(/,\s+/),r=t?i.findWidthFromSourceSize(t):"100%",o=[],a=0,s=n.length;s>a;a++){var c,l=n[a],u=l.split(/\s+/),d=u[1];!d||"w"!==d.slice(-1)&&"x"!==d.slice(-1)||(d=d.slice(0,-1)),c=t?parseFloat(parseInt(d,10)/r):d?parseFloat(d,10):1;var f={url:u[0],resolution:c};o.push(f)}return o},i.dodgeSrcset=function(e){e.srcset&&(e[i.ns].srcset=e.srcset,e.removeAttribute("srcset"))},i.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),r=[];return"IMG"===e.nodeName.toUpperCase()&&e[i.ns]&&e[i.ns].srcset&&(t=e[i.ns].srcset),t&&(r=i.getCandidatesFromSourceSet(t,n)),r},i.applyBestCandidate=function(e,t){var n,r,o;e.sort(i.ascendingSort),r=e.length,o=e[r-1];for(var a=0;r>a;a++)if(n=e[a],n.resolution>=i.getDpr()){o=n;break}i.endsWith(t.src,o.url)||(t.src=o.url,t.currentSrc=t.src)},i.ascendingSort=function(e,t){return e.resolution-t.resolution},i.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var n=t[0],r=n.getElementsByTagName("source");r.length;)e.insertBefore(r[0],n);n.parentNode.removeChild(n)}},i.getAllElements=function(){for(var e=t.getElementsByTagName("picture"),n=[],r=t.getElementsByTagName("img"),o=0,a=e.length+r.length;a>o;o++)if(o<e.length)n[o]=e[o];else{var s=r[o-e.length];"PICTURE"!==s.parentNode.nodeName.toUpperCase()&&(i.srcsetSupported&&s.getAttribute("sizes")||null!==s.getAttribute("srcset"))&&n.push(s)}return n},i.getMatch=function(e){for(var t,n=e.childNodes,r=0,o=n.length;o>r;r++){var a=n[r];if(1===a.nodeType){if("IMG"===a.nodeName.toUpperCase())return t;if("SOURCE"===a.nodeName.toUpperCase()){var s=a.getAttribute("media");if(a.getAttribute("srcset")&&(!s||i.matchesMedia(s))){var c=i.verifyTypeSupport(a);if(c===!0){t=a;break}if("pending"===c)return!1}}}}return t},r(),n._=i,"object"==typeof module&&"object"==typeof module.exports?module.exports=n:"object"==typeof define&&define.amd?define(function(){return n}):"object"==typeof e&&(e.picturefill=n)}}(this,this.document);