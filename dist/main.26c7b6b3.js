var LA=Object.defineProperty;var DA=(Gi,wi,Vi)=>wi in Gi?LA(Gi,wi,{enumerable:!0,configurable:!0,writable:!0,value:Vi}):Gi[wi]=Vi;var gn=(Gi,wi,Vi)=>(DA(Gi,typeof wi!="symbol"?wi+"":wi,Vi),Vi);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`iframe{border:none;width:100%;height:100%}a.spline-watermark{display:none!important}.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(Gi){typeof define=="function"&&define.amd?define(Gi):Gi()})(function(){"use strict";var Gi="";function wi(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Vi(s,e,t){return e&&wi(s.prototype,e),t&&wi(s,t),s}function Jr(){return(Jr=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}).apply(this,arguments)}function El(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}function Gd(s){return(Gd=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(s)}function xu(s,e){return(xu=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(s,e)}function Vd(s,e,t){return(Vd=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,r){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return r&&xu(a,r.prototype),a}).apply(null,arguments)}function Wd(s){var e=typeof Map=="function"?new Map:void 0;return(Wd=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Vd(t,arguments,Gd(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),xu(n,t)})(s)}function Ws(s,e){try{var t=s()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var _r,ex="2.9.7",tx=function(){};(function(s){s[s.off=0]="off",s[s.error=1]="error",s[s.warning=2]="warning",s[s.info=3]="info",s[s.debug=4]="debug"})(_r||(_r={}));var Xd=_r.off,Qr=function(){function s(t){this.t=t}s.getLevel=function(){return Xd},s.setLevel=function(t){return Xd=_r[t]};var e=s.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,_r.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,_r.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,_r.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,_r.debug,n)},e.i=function(t,n,i){n<=s.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},s}(),es=Mu,nx=qd,ix=yu,rx=$d,sx=Kd,Yd="/",ox=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function yu(s,e){for(var t,n=[],i=0,r=0,o="",a=e&&e.delimiter||Yd,l=e&&e.whitelist||void 0,c=!1;(t=ox.exec(s))!==null;){var h=t[0],f=t[1],d=t.index;if(o+=s.slice(r,d),r=d+h.length,f)o+=f[1],c=!0;else{var u="",g=t[2],_=t[3],p=t[4],m=t[5];if(!c&&o.length){var y=o.length-1,v=o[y];(!l||l.indexOf(v)>-1)&&(u=v,o=o.slice(0,y))}o&&(n.push(o),o="",c=!1);var S=_||p,T=u||a;n.push({name:g||i++,prefix:u,delimiter:T,optional:m==="?"||m==="*",repeat:m==="+"||m==="*",pattern:S?ax(S):"[^"+Wi(T===a?T:T+a)+"]+?"})}}return(o||r<s.length)&&n.push(o+s.substr(r)),n}function qd(s,e){return function(t,n){var i=s.exec(t);if(!i)return!1;for(var r=i[0],o=i.index,a={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var h=e[c-1];a[h.name]=h.repeat?i[c].split(h.delimiter).map(function(f){return l(f,h)}):l(i[c],h)}return{path:r,index:o,params:a}}}function $d(s,e){for(var t=new Array(s.length),n=0;n<s.length;n++)typeof s[n]=="object"&&(t[n]=new RegExp("^(?:"+s[n].pattern+")$",Su(e)));return function(i,r){for(var o="",a=r&&r.encode||encodeURIComponent,l=!r||r.validate!==!1,c=0;c<s.length;c++){var h=s[c];if(typeof h!="string"){var f,d=i?i[h.name]:void 0;if(Array.isArray(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(f=a(d[u],h),l&&!t[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(u===0?h.prefix:h.delimiter)+f}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(f=a(String(d),h),l&&!t[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+f+'"');o+=h.prefix+f}}else o+=h}return o}}function Wi(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ax(s){return s.replace(/([=!:$/()])/g,"\\$1")}function Su(s){return s&&s.sensitive?"":"i"}function Kd(s,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,r=t.end!==!1,o=t.delimiter||Yd,a=[].concat(t.endsWith||[]).map(Wi).concat("$").join("|"),l=i?"^":"",c=0;c<s.length;c++){var h=s[c];if(typeof h=="string")l+=Wi(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+Wi(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),l+=h.optional?h.prefix?"(?:"+Wi(h.prefix)+"("+f+"))?":"("+f+")?":Wi(h.prefix)+"("+f+")"}}if(r)n||(l+="(?:"+Wi(o)+")?"),l+=a==="$"?"$":"(?="+a+")";else{var d=s[s.length-1],u=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Wi(o)+"(?="+a+"))?"),u||(l+="(?="+Wi(o)+"|"+a+")")}return new RegExp(l,Su(t))}function Mu(s,e,t){return s instanceof RegExp?function(n,i){if(!i)return n;var r=n.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(s,e):Array.isArray(s)?function(n,i,r){for(var o=[],a=0;a<n.length;a++)o.push(Mu(n[a],i,r).source);return new RegExp("(?:"+o.join("|")+")",Su(r))}(s,e,t):function(n,i,r){return Kd(yu(n,r),i,r)}(s,e,t)}es.match=function(s,e){var t=[];return qd(Mu(s,t,e),t)},es.regexpToFunction=nx,es.parse=ix,es.compile=function(s,e){return $d(yu(s,e),e)},es.tokensToFunction=rx,es.tokensToRegExp=sx;var Ai={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},ts=new(function(){function s(){this.o=Ai,this.u=new DOMParser}var e=s.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n.length;if(r===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],r===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),h=1;h<r;h++)c.href=arguments[h],o.href=l=c.href;return a.removeChild(o),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},s}()),Zd=new(function(){function s(){this.h=[],this.v=-1}var e=s.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var r={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(r,"",t)},e.change=function(t,n,i){if(i&&i.state){var r=i.state,o=r.index;n=this.m(this.v-o),this.replace(r.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,r=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(r){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var i=n||this.v,r=Jr({},this.get(i),{},t);this.set(i,r)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,r=Ai.prefix+"-"+Ai.history;return i.hasAttribute&&i.hasAttribute(r)&&(n=i.getAttribute(r)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},Vi(s,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),s}()),Tl=function(s,e){try{var t=function(){if(!e.next.html)return Promise.resolve(s).then(function(n){var i=e.next;if(n){var r=ts.toElement(n);i.namespace=ts.getNamespace(r),i.container=ts.getContainer(r),i.html=n,Zd.update({ns:i.namespace});var o=ts.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},jd=es,lx={__proto__:null,update:Tl,nextTick:function(){return new Promise(function(s){window.requestAnimationFrame(s)})},pathToRegexp:jd},Jd=function(){return window.location.origin},ia=function(s){return s===void 0&&(s=window.location.href),bl(s).port},bl=function(s){var e,t=s.match(/:\d+/);if(t===null)/^http/.test(s)&&(e=80),/^https/.test(s)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,r=s.replace(Jd(),""),o={},a=r.indexOf("#");a>=0&&(i=r.slice(a+1),r=r.slice(0,a));var l=r.indexOf("?");return l>=0&&(o=Qd(r.slice(l+1)),r=r.slice(0,l)),{hash:i,path:r,port:e,query:o}},Qd=function(s){return s.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Eu=function(s){return s===void 0&&(s=window.location.href),s.replace(/(\/#.*|\/|#.*)$/,"")},cx={__proto__:null,getHref:function(){return window.location.href},getOrigin:Jd,getPort:ia,getPath:function(s){return s===void 0&&(s=window.location.href),bl(s).path},parse:bl,parseQuery:Qd,clean:Eu};function ux(s,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(r.status===200)n(r.responseText);else if(r.status){var o={status:r.status,statusText:r.statusText};t(s,o),i(o)}}},r.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(s,o),i(o)},r.onerror=function(){var o=new Error("Fetch error");t(s,o),i(o)},r.open("GET",s),r.timeout=e,r.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),r.setRequestHeader("x-barba","yes"),r.send()})}var hx=function(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"};function Xs(s,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=!1,o=new Promise(function(a,l){e.async=function(){return r=!0,function(h,f){h?l(h):a(f)}};var c=s.apply(e,n);r||(hx(c)?c.then(a,l):a(c))});return o}}var vr=new(function(s){function e(){var n;return(n=s.call(this)||this).logger=new Qr("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}El(e,s);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(r,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:r})})})},t.do=function(n){for(var i=this,r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return Xs(c.fn,c.ctx).apply(void 0,o)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,r){return n.push(r)}),this.logger.info("Registered hooks: "+n.join(","))},e}(tx)),ep=function(){function s(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return jd(n)})}}return s.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=bl(e).path;return this.P.some(function(n){return n.exec(t)!==null})},s}(),fx=function(s){function e(n){var i;return(i=s.call(this,n)||this).k=new Map,i}El(e,s);var t=e.prototype;return t.set=function(n,i,r){return this.k.set(n,{action:r,request:i}),{action:r,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var r=Jr({},this.k.get(n),{},i);return this.k.set(n,r),r},e}(ep),dx=function(){return!window.history.pushState},px=function(s){return!s.el||!s.href},mx=function(s){var e=s.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},gx=function(s){var e=s.el;return e.hasAttribute("target")&&e.target==="_blank"},_x=function(s){var e=s.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},vx=function(s){var e=s.el;return e.port!==void 0&&ia()!==ia(e.href)},xx=function(s){var e=s.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},yx=function(s){return s.el.hasAttribute(Ai.prefix+"-"+Ai.prevent)},Sx=function(s){return Boolean(s.el.closest("["+Ai.prefix+"-"+Ai.prevent+'="all"]'))},Mx=function(s){var e=s.href;return Eu(e)===Eu()&&ia(e)===ia()},Ex=function(s){function e(n){var i;return(i=s.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}El(e,s);var t=e.prototype;return t.init=function(){this.add("pushState",dx),this.add("exists",px),this.add("newTab",mx),this.add("blank",gx),this.add("corsDomain",_x),this.add("corsPort",vx),this.add("download",xx),this.add("preventSelf",yx),this.add("preventAll",Sx),this.add("sameUrl",Mx,!1)},t.add=function(n,i,r){r===void 0&&(r=!0),this.tests.set(n,i),r&&this.suite.push(n)},t.run=function(n,i,r,o){return this.tests.get(n)({el:i,event:r,href:o})},t.checkLink=function(n,i,r){var o=this;return this.suite.some(function(a){return o.run(a,n,i,r)})},e}(ep),Tu=function(s){function e(t,n){var i;n===void 0&&(n="Barba error");for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return(i=s.call.apply(s,[this].concat(o))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return El(e,s),e}(Wd(Error)),Tx=function(){function s(t){t===void 0&&(t=[]),this.logger=new Qr("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=s.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var r=n.once?this.once:this.page;r=r.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=r.find(function(d){var u=!0,g={};return!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(_){u&&(u=i.R(d,_,t,g),d.from&&d.to&&(u=i.R(d,_,t,g,"from")&&i.R(d,_,t,g,"to")),d.from&&!d.to&&(u=i.R(d,_,t,g,"from")),!d.from&&d.to&&(u=i.R(d,_,t,g,"to")))}),o.set(d,g),u)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,f=[a];Object.keys(l).length>0&&f.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,r,o){var a=!0,l=!1,c=t,h=n.name,f=h,d=h,u=h,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var p=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&p.indexOf(_[f])!==-1&&(l=!0),p.indexOf(_[f])===-1&&(a=!1);break;case"object":var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]?(_[d].name&&m.indexOf(_[d].name)!==-1&&(l=!0),m.indexOf(_[d].name)===-1&&(a=!1)):a=!1;break;case"function":g[u](i)?l=!0:a=!1}l&&(o?(r[o]=r[o]||{},r[o][h]=c[o][h]):r[h]=c[h])}return a},e.O=function(t,n,i){var r=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(r+=Math.pow(10,i),t.from&&t.from[n]&&(r+=1),t.to&&t.to[n]&&(r+=2)),r},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(r,o){i+=n.O(t,r.name,o+1)}),t.priority=i,t},s}(),bx=function(){function s(t){t===void 0&&(t=[]),this.logger=new Qr("@barba/core"),this.S=!1,this.store=new Tx(t)}var e=s.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var r=function(){o.S=!1},o=this,a=i||{};o.S=!0;var l=Ws(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(c){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(r):r())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,r=t.page,o=t.wrapper;try{var a=function(u){if(l)return u;c.S=!1},l=!1,c=this,h=i||{},f=h.sync===!0||!1;c.S=!0;var d=Ws(function(){function u(){return Promise.resolve(c.j("before",n,h)).then(function(){var _=!1;function p(y){return _?y:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,h)).then(function(){})})}var m=function(){if(f)return Ws(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),c.enter(n,h)])).then(function(){return Promise.resolve(c.j("afterLeave",n,h)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})})})},function(T){if(c.M(T))throw new Tu(T,"Transition error [sync]")});var y=function(T){return _?T:Ws(function(){var b=function(){if(v!==!1)return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(c.enter(n,h,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})}();if(b&&b.then)return b.then(function(){})},function(b){if(c.M(b))throw new Tu(b,"Transition error [before/after/enter]")})},v=!1,S=Ws(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),Tl(r,n)]).then(function(T){return T[0]})).then(function(T){return v=T,Promise.resolve(c.j("afterLeave",n,h)).then(function(){})})})},function(T){if(c.M(T))throw new Tu(T,"Transition error [before/after/leave]")});return S&&S.then?S.then(y):y(S)}();return m&&m.then?m.then(p):p(m)})}var g=function(){if(f)return Promise.resolve(Tl(r,n)).then(function(){})}();return g&&g.then?g.then(u):u()},function(u){throw c.S=!1,u.name&&u.name==="BarbaError"?(c.logger.debug(u.label),c.logger.error(u.error),u):(c.logger.debug("Transition error [page]"),c.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a(d))}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(vr.do("once",t,n)).then(function(){return n.once?Xs(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(vr.do("leave",t,n)).then(function(){return n.leave?Xs(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(vr.do("enter",t,n)).then(function(){return n.enter?Xs(n.enter,n)(t,i):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.add=function(t,n){try{return ts.addContainer(t.next.container,n),vr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return ts.removeContainer(t.current.container),vr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(vr.do(t,n,i)).then(function(){return i[t]?Xs(i[t],i)(n):Promise.resolve()})}catch(r){return Promise.reject(r)}},Vi(s,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),s}(),wx=function(){function s(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){vr[n](t.L(n))}))}return s.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,r=t.byNamespace.get(i.namespace);return r&&r[e]?Xs(r[e],r)(n):Promise.resolve()}},s}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var e=this;do{if(e.matches(s))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Ax={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Cx=new(function(){function s(){this.version=ex,this.schemaPage=Ax,this.Logger=Qr,this.logger=new Qr("@barba/core"),this.plugins=[],this.hooks=vr,this.dom=ts,this.helpers=lx,this.history=Zd,this.request=ux,this.url=cx}var e=s.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,r=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Ai:l,h=n.requestError,f=n.timeout,d=f===void 0?2e3:f,u=n.cacheIgnore,g=u!==void 0&&u,_=n.prefetchIgnore,p=_!==void 0&&_,m=n.preventRunning,y=m!==void 0&&m,v=n.prevent,S=v===void 0?null:v,T=n.debug,b=n.logLevel;if(Qr.setLevel((T!==void 0&&T)===!0?"debug":b===void 0?"off":b),this.logger.info(this.version),Object.keys(c).forEach(function(N){Ai[N]&&(Ai[N]=c[N])}),this.$=h,this.timeout=d,this.cacheIgnore=g,this.prefetchIgnore=p,this.preventRunning=y,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new fx(g),this.prevent=new Ex(p),this.transitions=new bx(r),this.views=new wx(a),S!==null){if(typeof S!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",S)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(N){return N.init()});var R=this.data;R.trigger="barba",R.next=R.current,R.current=Jr({},this.schemaPage),this.hooks.do("ready",R),this.once(R),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var r;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(r=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,r)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var r=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return r&&r.then?r.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var r=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var h=Ws(function(){var f=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:f,wrapper:o._})).then(function(){o.q()})},function(){Qr.getLevel()===0&&o.force(c.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=Jr({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=function(){if(o.transitions.shouldWait)return Promise.resolve(Tl(a,o.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(r):r())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=i[0],a=i[1],l=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,l,o,a)===!1||(l==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var r=this.dom.getHref(i);this.prevent.checkHref(r)||this.cache.has(r)||this.cache.set(r,this.request(r,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Jr({href:t},this.url.parse(t))};this.C={current:n,next:Jr({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Vi(s,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),s}());function Xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function tp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},bu,on,At,ei=1e8,Mt=1/ei,wu=Math.PI*2,Rx=wu/4,Px=0,np=Math.sqrt,Lx=Math.cos,Dx=Math.sin,Jt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},Au=function(e){return typeof e=="undefined"},Ci=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},Cu=function(){return typeof window!="undefined"},wl=function(e){return Ot(e)||Jt(e)},ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Ru=/(?:-?\.?\d|\.)+/gi,rp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sp=/[+-]=-?[.\d]+/,op=/[^,'"\[\]\s]+/gi,Ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Ri,Lu,Du,Wn={},Al={},ap,lp=function(e){return(Al=is(e,Wn))&&Nn},Iu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ra=function(e,t){return!t&&console.warn(e)},cp=function(e,t){return e&&(Wn[e]=t)&&Al&&(Al[e]=t)||Wn},sa=function(){return 0},Nx={suppressEvents:!0,isStart:!0,kill:!1},Cl={suppressEvents:!0,kill:!1},Ux={suppressEvents:!0},Nu={},xr=[],Uu={},up,Xn={},Ou={},hp=30,Rl=[],Fu="",Bu=function(e){var t=e[0],n,i;if(Ci(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Rl.length;i--&&!Rl[i].targetTest(t););n=Rl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zp(e[i],n)))||e.splice(i,1);return e},ns=function(e){return e._gsap||Bu(ii(e))[0]._gsap},fp=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():Au(n)&&e.getAttribute&&e.getAttribute(t)||n},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Qt=function(e){return Math.round(e*1e7)/1e7||0},$s=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ox=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Pl=function(){var e=xr.length,t=xr.slice(0),n,i;for(Uu={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dp=function(e,t,n,i){xr.length&&!on&&Pl(),e.render(t,n,i||on&&t<0&&(e._initted||e._startAt)),xr.length&&!on&&Pl()},pp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(op).length<2?t:Jt(e)?e.trim():e},mp=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},is=function(e,t){for(var n in t)e[n]=t[n];return e},gp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ll=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||Dt,n=e.keyframes?Fx(an(e.keyframes)):ti;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_p=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Dl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(Cl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zx=function s(e){return!e||e._ts&&s(e.parent)},vp=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Il=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nl=function(e){return e._end=Qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Ul=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nl(e),n._dirty||rs(n,e)),e},xp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Il(e.rawTime(),t),(!t._dur||la(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Pi=function(e,t,n,i){return t.parent&&yr(t),t._start=Qt((Yi(n)?n:n||e!==Dt?ni(e,n,t):e._time)+t._delay),t._end=Qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_p(e,t,"_first","_last",e._sort?"_start":0),zu(t)||(e._recent=t),i||xp(e,t),e._ts<0&&Ul(e,e._tTime),e},yp=function(e,t){return(Wn.ScrollTrigger||Iu("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Sp=function(e,t,n,i,r){if(Ku(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&up!==qn.frame)return xr.push(e),e._lazy=[r,i],1},Hx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gx=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Hx(e)&&!(!e._initted&&zu(e))||(e._ts<0||e._dp._ts<0)&&!zu(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=la(0,e._tDur,t),h=Ks(l,a),e._yoyo&&h&1&&(o=1-o),h!==Ks(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||on||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Sp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&yr(e,1),!n&&!on&&(Yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var r=e._repeat,o=Qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Qt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ul(e,e._tTime=e._tDur*a),e.parent&&Nl(e),n||rs(e.parent,e),e},Mp=function(e){return e instanceof _n?rs(e):Zs(e,e._dur)},Wx={_start:0,endTime:sa,totalDuration:sa},ni=function s(e,t,n){var i=e.labels,r=e._recent||Wx,o=e.duration()>=ei?r.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},aa=function(e,t,n){var i=Yi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new zt(t[0],o,t[r+1])},Sr=function(e,t){return e||e===0?t(e):t},la=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!Jt(e)||!(t=Ix.exec(e))?"":t[1]},Xx=function(e,t,n){return Sr(n,function(i){return la(e,t,i)})},Hu=[].slice,Ep=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==Ri},Yx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Jt(i)&&!t||Ep(i,1)?(r=n).push.apply(r,ii(i)):n.push(i)})||n},ii=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Jt(e)&&!n&&(Lu||!Js())?Hu.call((t||Du).querySelectorAll(e),0):an(e)?Yx(e,n):Ep(e)?Hu.call(e,0):e?[e]:[]},Gu=function(e){return e=ii(e)[0]||ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?ra("Invalid scope")||Du.createElement("div"):e)}},Tp=function(e){return e.sort(function(){return .5-Math.random()})},bp=function(e){if(Ot(e))return e;var t=Ci(e)?e:{each:e},n=ss(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,p=o[_],m,y,v,S,T,b,E,R,N;if(!p){if(N=t.grid==="auto"?0:(t.grid||[1,ei])[1],!N){for(E=-ei;E<(E=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(p=o[_]=[],m=l?Math.min(N,_)*h-.5:i%N,y=N===ei?0:l?_*f/N-.5:i/N|0,E=0,R=ei,b=0;b<_;b++)v=b%N-m,S=y-(b/N|0),p[b]=T=c?Math.abs(c==="y"?S:v):np(v*v+S*S),T>E&&(E=T),T<R&&(R=T);i==="random"&&Tp(p),p.max=E-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=ln(t.amount||t.each)||0,n=n&&_<0?Fp(n):n}return _=(p[d]-p.min)/p.max||0,Qt(p.b+(n?n(_):_)*p.v)+p.u}},Vu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yi(n)?0:ln(n))}},wp=function(e,t){var n=an(e),i,r;return!n&&Ci(e)&&(i=n=e.radius||ei,e.values?(e=ii(e.values),(r=!Yi(e[0]))&&(i*=i)):e=Vu(e.increment)),Sr(t,n?Ot(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ei,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,r||h===o||Yi(o)?h:h+ln(o)}:Vu(e))},Ap=function(e,t,n,i){return Sr(an(e)?!t:n===!0?!!(n=0):!i,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},$x=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},Kx=function(e,t,n){return Rp(e,t,0,1,n)},Cp=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},Zx=function s(e,t,n){var i=t-e;return an(e)?Cp(e,s(0,e.length),t):Sr(n,function(r){return(i+(r-e)%i)%i+e})},jx=function s(e,t,n){var i=t-e,r=i*2;return an(e)?Cp(e,s(0,e.length-1),t):Sr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ca=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?op:Ru),n+=e.substr(t,i-t)+Ap(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Rp=function(e,t,n,i,r){var o=t-e,a=i-n;return Sr(r,function(l){return n+((l-e)/o*a||0)})},Jx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=Jt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=is(an(e)?[]:{},e));if(!h){for(l in t)qu.call(a,e,l,"get",t[l]);r=function(g){return Ju(g,a)||(o?e.p:e)}}}return Sr(n,r)},Pp=function(e,t,n){var i=e.labels,r=ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Yn=function(e,t,n){var i=e.vars,r=i[t],o=At,a=e._ctx,l,c,h;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&Pl(),a&&(At=a),h=l?r.apply(c,l):r.call(c),At=o,h},ua=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Yn(e,"onInterrupt"),e},js,Lp=[],Dp=function(e){if(!!e)if(e=!e.name&&e.default||e,Cu()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:sa,render:Ju,add:qu,kill:py,modifier:dy,rawVars:0},o={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Js(),e!==i){if(Xn[t])return;ti(i,ti(Ll(e,r),o)),is(i.prototype,is(r,Ll(e,o))),Xn[i.prop=t]=i,e.targetTest&&(Rl.push(i),Nu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cp(t,i),e.register&&e.register(Nn,i,In)}else Lp.push(e)},yt=255,ha={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Ip=function(e,t,n){var i=e?Yi(e)?[e>>16,e>>8&yt,e&yt]:0:ha.black,r,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ha[e])i=ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ru),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Wu(l+1/3,r,o),i[1]=Wu(l,r,o),i[2]=Wu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(rp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ru)||ha.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/yt,o=i[1]/yt,a=i[2]/yt,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Np=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(r){var o=r.match(qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Up=function(e,t,n){var i="",r=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=Ip(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Np(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Mr,"1").split(qs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Mr),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},Mr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ha)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Qx=/hsl[a]?\(/,Op=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=Qx.test(t),e[1]=Up(e[1],n),e[0]=Up(e[0],n,Np(e[1])),!0},fa,qn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,g=function _(p){var m=s()-i,y=p===!0,v,S,T,b;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,v=T-o,(v>0||y)&&(b=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=r?4:r-v),S=1),y||(l=c(_)),S)for(u=0;u<a.length;u++)a[u](T,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ap&&(!Lu&&Cu()&&(Ri=Lu=window,Du=Ri.document||{},Wn.gsap=Nn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Nn.version),lp(Al||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Lp.forEach(Dp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},fa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),fa=0,c=sa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=f.time*1e3+r},add:function(p,m,y){var v=m?function(S,T,b,E){p(S,T,b,E),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),Js(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),Js=function(){return!fa&&qn.wake()},ut={},ey=/^[\d.\-M][\d.\-,\s]/,ty=/["']/g,ny=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ty,"").trim():+c,i=l.substr(a+1).trim();return t},iy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ry=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ny(t[1])]:iy(e).split(",").map(pp)):ut._CE&&ey.test(e)?ut._CE("",e):n},Fp=function(e){return function(t){return 1-e(1-t)}},Bp=function s(e,t){for(var n=e._first,i;n;)n instanceof _n?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ss=function(e,t){return e&&(Ot(e)?e:ut[e]||ry(e))||t},os=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Dn(e,function(a){ut[a]=Wn[a]=r,ut[o=a.toLowerCase()]=n;for(var l in r)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=r[l]}),r},kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/wu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Dx((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kp(a);return r=wu/r,l.config=function(c,h){return s(e,c,h)},l},Yu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:kp(n);return i.config=function(r){return s(e,r)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;os(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ut.Linear.easeNone=ut.none=ut.Linear.easeIn,os("Elastic",Xu("in"),Xu("out"),Xu()),function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};os("Bounce",function(o){return 1-r(1-o)},r)}(7.5625,2.75),os("Expo",function(s){return s?Math.pow(2,10*(s-1)):0}),os("Circ",function(s){return-(np(1-s*s)-1)}),os("Sine",function(s){return s===1?1:-Lx(s*Rx)+1}),os("Back",Yu("in"),Yu("out"),Yu()),ut.SteppedEase=ut.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Mt;return function(a){return((i*la(0,o,a)|0)+r)*n}}},Ys.ease=ut["quad.out"],Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Fu+=s+","+s+"Params,"});var zp=function(e,t){this.id=Px++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fp,this.set=t?t.getSetter:ju},da=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),fa||qn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ul(this,n),!r._dp||r.parent||xp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ks(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,r),i!==!1),Nl(this),kx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ux);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ot(n)?n:mp,a=function(){var c=i.then;i.then=null,Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ua(this)},s}();ti(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var _n=function(s){tp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ln(n.sortChildren),Dt&&Pi(n.parent||Dt,Xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&yp(Xi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return aa(0,arguments,this),this},t.from=function(i,r,o){return aa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return aa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,oa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new zt(i,r,ni(this,o),1),this},t.call=function(i,r,o){return Pi(this,zt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(i,o,ni(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,oa(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,oa(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Qt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,y,v,S,T,b,E;if(this!==Dt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,S=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=Qt(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),T=Ks(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),b&&_&1&&(d=c-d,E=1),_!==T&&!this._lock){var R=b&&T&1,N=R===(b&&_&1);if(_<T&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Qt(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Bp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Vx(this,Qt(a),Qt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(Yn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var x=i<0?i:d;u;){if(g=u._prev,(u._act||x<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,r,o||on&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=x?-Mt:Mt);break}}u=g}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Nl(this),this.render(i,r,o);this._onUpdate&&!r&&Yn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Yn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Yi(r)||(r=ni(this,r,i)),!(i instanceof da)){if(an(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Jt(i))return this.addLabel(i,r);if(Ot(i))i=zt.delayedCall(0,i);else return this}return this!==i?Pi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(Dl(this,i),i===this._recent&&(this._recent=this._last),rs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qt(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ni(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=zt.delayedCall(0,r||sa,o);return a.data="isPause",this._hasPause=1,Pi(this,a,ni(this,i))},t.removePause=function(i){var r=this._first;for(i=ni(this,i);r;)r._start===i&&r.data==="isPause"&&yr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ii(i),l=this._first,c=Yi(r),h;l;)l instanceof zt?Ox(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ni(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=zt.to(o,ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Zs(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ti({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Pp(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Pp(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return rs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),rs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ei,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Zs(o,o===Dt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(dp(Dt,Il(i,Dt)),up=qn.frame),qn.frame>=hp){hp+=Vn.autoSleep||120;var r=Dt._first;if((!r||!r._ts)&&Vn.autoSleep&&qn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||qn.sleep()}}},e}(da);ti(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var sy=function(e,t,n,i,r,o,a){var l=new In(this._pt,e,t,0,1,Yp,null,r),c=0,h=0,f,d,u,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ca(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Pu)||[];f=Pu.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?$s(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=Pu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(sp.test(i)||m)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,r,o,a,l,c,h){Ot(i)&&(i=i(r||0,e,o));var f=e[t],d=n!=="get"?n:Ot(f)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Ot(f)?c?uy:Wp:Zu,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(g=$s(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!h||d!==i||$u)return!isNaN(d*i)&&i!==""?(g=new In(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?fy:Xp,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Iu(t,i),sy.call(this,e,t,d,i,u,l||Vn.stringFilter,c))},oy=function(e,t,n,i,r){if(Ot(e)&&(e=pa(e,r,t,n,i)),!Ci(e)||e.style&&e.nodeType||an(e)||ip(e))return Jt(e)?pa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],r,t,n,i);return o},Hp=function(e,t,n,i,r,o){var a,l,c,h;if(Xn[e]&&(a=new Xn[e]).init(r,a.rawVars?t[e]:oy(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new In(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==js))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Er,$u,Ku=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!bu,S=e.timeline,T,b,E,R,N,x,A,X,H,D,B,V,Y;if(S&&(!d||!r)&&(r="none"),e._ease=ss(r,Ys.ease),e._yEase=f?Fp(ss(f===!0?r:f,Ys.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(X=p[0]?ns(p[0]).harness:0,V=X&&i[X.prop],T=Ll(i,Nu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?Cl:Nx),_._lazy=0),o){if(yr(e._startAt=zt.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!u)&&e._startAt.revert(Cl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ln(l),immediateRender:a,stagger:0,parent:m},T),V&&(E[X.prop]=V),yr(e._startAt=zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Cl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,b=0;b<p.length;b++){if(N=p[b],A=N._gsap||Bu(p)[b]._gsap,e._ptLookup[b]=D={},Uu[A.id]&&xr.length&&Pl(),B=y===p?b:y.indexOf(N),X&&(H=new X).init(N,V||T,e,B,y)!==!1&&(e._pt=R=new In(e._pt,N,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(K){D[K]=R}),H.priority&&(x=1)),!X||V)for(E in T)Xn[E]&&(H=Hp(E,T,e,B,N,y))?H.priority&&(x=1):D[E]=R=qu.call(e,N,E,"get",T[E],B,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(N,e._op[b]),v&&e._pt&&(Er=e,Dt.killTweensOf(N,D,e.globalTime(t)),Y=!e.parent,Er=0),e._pt&&l&&(Uu[A.id]=1)}x&&qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&S.render(ei,!0,!0)},ay=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return $u=1,e.vars[t]="+=0",Ku(e,a),$u=0,l?ra(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ft(n)+ln(f.e)),f.b&&(f.b=h.s+ln(f.b))},ly=function(e,t){var n=e[0]?ns(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=is({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},cy=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},pa=function(e,t,n,i,r){return Ot(e)?e.call(t,n,i,r):Jt(e)&&~e.indexOf("random(")?ca(e):e},Gp=Fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vp={};Dn(Gp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Vp[s]=1});var zt=function(s){tp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:oa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Dt,v=(an(n)||ip(n)?Yi(n[0]):"length"in i)?[n]:ii(n),S,T,b,E,R,N,x,A;if(a._targets=v.length?Bu(v):ra("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||wl(c)||wl(h)){if(i=a.vars,S=a.timeline=new _n({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Xi(a),S._start=0,d||wl(c)||wl(h)){if(E=v.length,x=d&&bp(d),Ci(d))for(R in d)~Gp.indexOf(R)&&(A||(A={}),A[R]=d[R]);for(T=0;T<E;T++)b=Ll(i,Vp),b.stagger=0,m&&(b.yoyoEase=m),A&&is(b,A),N=v[T],b.duration=+pa(c,Xi(a),T,N,v),b.delay=(+pa(h,Xi(a),T,N,v)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),S.to(N,b,x?x(T,N,v):0),S._ease=ut.none;S.duration()?c=h=0:a.timeline=0}else if(g){oa(ti(S.vars.defaults,{ease:"none"})),S._ease=ss(g.ease||i.ease||"none");var X=0,H,D,B;if(an(g))g.forEach(function(V){return S.to(v,V,">")}),S.duration();else{b={};for(R in g)R==="ease"||R==="easeEach"||cy(R,g[R],b,g.easeEach);for(R in b)for(H=b[R].sort(function(V,Y){return V.t-Y.t}),X=0,T=0;T<H.length;T++)D=H[T],B={ease:D.e,duration:(D.t-(T?H[T-1].t:0))/100*c},B[R]=D.v,S.to(v,B,X),X+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return u===!0&&!bu&&(Er=Xi(a),Dt.killTweensOf(v),Er=0),Pi(y,Xi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Qt(y._time)&&Ln(f)&&zx(Xi(a))&&y.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-h)||0)),p&&yp(Xi(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Mt&&!h?l:i<Mt?0:i,d,u,g,_,p,m,y,v,S;if(!c)Gx(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=Qt(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===Qt(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,d=c-d),p=Ks(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Bp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Qt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Sp(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!g&&(Yn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ku(this,i,r,o),Yn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&ku(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&yr(this,1),!r&&!(h&&!a)&&(f||a||m)&&(Yn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){fa||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ku(this,c),h=this._ease(c/this._dur),ay(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Ul(this,0),this.parent||_p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Er&&Er.vars.overwrite!==!0)._first||ua(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!r||r==="all")&&Bx(a,l))return r==="all"&&(this._pt=0),ua(this);for(f=this._op=this._op||[],r!=="all"&&(Jt(r)&&(_={},Dn(r,function(y){return _[y]=1}),r=_),r=ly(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(f[m]=r,g=d,u={}):(u=f[m]=f[m]||{},g=r);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Dl(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&ua(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return aa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return aa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Dt.killTweensOf(i,r,o)},e}(da);ti(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Dn("staggerTo,staggerFrom,staggerFromTo",function(s){zt[s]=function(){var e=new _n,t=Hu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Zu=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},uy=function(e,t,n,i){return e[t](i.fp,n)},hy=function(e,t,n){return e.setAttribute(t,n)},ju=function(e,t){return Ot(e[t])?Wp:Au(e[t])&&e.setAttribute?hy:Zu},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dy=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},py=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Dl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},my=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},In=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Xp,this.d=l||this,this.set=c||Zu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=my,this.m=n,this.mt=r,this.tween=i},s}();Dn(Fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Nu[s]=1}),Wn.TweenMax=Wn.TweenLite=zt,Wn.TimelineLite=Wn.TimelineMax=_n,Dt=new _n({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Vn.stringFilter=Op;var as=[],Ol={},gy=[],$p=0,_y=0,Qu=function(e){return(Ol[e]||gy).map(function(t){return t()})},eh=function(){var e=Date.now(),t=[];e-$p>2&&(Qu("matchMediaInit"),as.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),$p=e,Qu("matchMedia"))},Kp=function(){function s(t,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_y++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ot(n)&&(r=i,i=n,n=Ot);var o=this,a=function(){var c=At,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Gu(r)),At=o,f=i.apply(o,arguments),Ot(f)&&o._r.push(f),At=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),vy=function(){function s(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ci(n)||(n={matches:n});var o=new Kp(0,r||this.scope),a=o.conditions={},l,c,h;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ri.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(eh):l.addEventListener("change",eh)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Fl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Dp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ii(e)[0]);var r=ns(e||{}).get,o=n?mp:pp;return n==="native"&&(n=""),e&&(t?o((Xn[t]&&Xn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(h){return Nn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}e=e[0]||{};var o=Xn[t],a=ns(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;js._pt=0,f.init(e,n?h+n:h,js,0,[e]),f.render(1,f),js._pt&&Ju(1,js)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Nn.to(e,is((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ss(e.ease,Ys.ease)),gp(Ys,e||{})},config:function(e){return gp(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!Wn[a]&&ra(t+" effect requires "+a+" plugin.")}),Ou[t]=function(a,l,c){return n(ii(a),ti(l||{},r),c)},o&&(_n.prototype[t]=function(a,l,c){return this.add(Ou[t](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=ss(t)},parseEase:function(e,t){return arguments.length?ss(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,r;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=r;return Pi(Dt,n,0),n},context:function(e,t){return e?new Kp(e,t):At},matchMedia:function(e){return new vy(e)},matchMediaRefresh:function(){return as.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||eh()},addEventListener:function(e,t){var n=Ol[e]||(Ol[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ol[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zx,wrapYoyo:jx,distribute:bp,random:Ap,snap:wp,normalize:Kx,getUnit:ln,clamp:Xx,splitColor:Ip,toArray:ii,selector:Gu,mapRange:Rp,pipe:qx,unitize:$x,interpolate:Jx,shuffle:Tp},install:lp,effects:Ou,ticker:qn,updateRoot:_n.updateRoot,plugins:Xn,globalTimeline:Dt,core:{PropTween:In,globals:cp,Tween:zt,Timeline:_n,Animation:da,getCache:ns,_removeLinkedListItem:Dl,reverting:function(){return on},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return bu=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Fl[s]=zt[s]}),qn.add(_n.updateRoot),js=Fl.to({},{duration:0});var xy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yy=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=xy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},th=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Jt(r)&&(l={},Dn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}yy(a,r)}}}},Nn=Fl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},th("roundProps",Vu),th("modifiers"),th("snap",wp))||Fl;zt.version=_n.version=Nn.version="3.12.5",ap=1,Cu()&&Js(),ut.Power0,ut.Power1,ut.Power2,ut.Power3,ut.Power4,ut.Linear,ut.Quad,ut.Cubic,ut.Quart,ut.Quint,ut.Strong,ut.Elastic,ut.Back,ut.SteppedEase,ut.Bounce,ut.Sine,ut.Expo,ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zp,Tr,Qs,nh,ls,jp,ih,Sy=function(){return typeof window!="undefined"},qi={},cs=180/Math.PI,eo=Math.PI/180,to=Math.atan2,Jp=1e8,rh=/([A-Z])/g,My=/(left|right|width|margin|padding|x)/i,Ey=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ty=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},by=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ay=function(e,t,n){return e.style[t]=n},Cy=function(e,t,n){return e.style.setProperty(t,n)},Ry=function(e,t,n){return e._gsap[t]=n},Py=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ly=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Dy=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},It="transform",Un=It+"Origin",Iy=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in qi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=$i(i,a)}):this.tfm[e]=o.x?o[e]:$i(i,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return Li.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=It}(r||t)&&this.props.push(e,t,r[e])},tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ny=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(rh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ih(),(!r||!r.isStart)&&!n[It]&&(tm(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nm=function(e,t){var n={target:e,props:[],revert:Ny,save:Iy};return e._gsap||Nn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},im,oh=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},Di=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,no(t)||t,1)||""},rm="O,Moz,ms,Ms,Webkit".split(","),no=function(e,t,n){var i=t||ls,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(rm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?rm[o]:"")+e},ah=function(){Sy()&&window.document&&(Zp=window,Tr=Zp.document,Qs=Tr.documentElement,ls=oh("div")||{style:{}},oh("div"),It=no(It),Un=It+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!no("perspective"),ih=Nn.core.reverting,nh=1)},lh=function s(e){var t=oh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Qs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qs.removeChild(t),this.style.cssText=r,o},sm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},om=function(e){var t;try{t=e.getBBox()}catch{t=lh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===lh||(t=lh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+sm(e,["x","cx","x1"])||0,y:+sm(e,["y","cy","y1"])||0,width:0,height:0}:t},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&om(e))},us=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Un&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rh,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,i,r,o){var a=new In(e._pt,t,n,0,1,o?em:Qp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},lm={deg:1,rad:1,turn:1},Uy={grid:1,flex:1},wr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ls.style,l=My.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!r||lm[i]||lm[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),m=e.getCTM&&am(e),(u||o==="%")&&(qi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Ft(u?r/g*f:r/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===qn.time&&!p.uncache)return Ft(r/p.width*f);if(u&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[h],y?e.style[t]=y:us(e,t)}else(u||o==="%")&&!Uy[Di(_,"display")]&&(a.position=Di(e,"position")),_===e&&(a.position="static"),_.appendChild(ls),g=ls[h],_.removeChild(ls),a.position="absolute";return l&&u&&(p=ns(_),p.time=qn.time,p.width=_[h]),Ft(d?g*r/f:g&&r?f/g*r:0)},$i=function(e,t,n,i){var r;return nh||ah(),t in Li&&t!=="transform"&&(t=Li[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=ga(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:kl(Di(e,Un))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Bl[t]&&Bl[t](e,t,n)||Di(e,t)||fp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?wr(e,t,r,n)+n:r},Oy=function(e,t,n,i){if(!n||n==="none"){var r=no(t,e,1),o=r&&Di(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Di(e,"borderTopColor"))}var a=new In(this._pt,e.style,t,0,1,Yp),l=0,c=0,h,f,d,u,g,_,p,m,y,v,S,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Di(e,t)||i,_?e.style[t]=_:us(e,t)),h=[n,i],Op(h),n=h[0],i=h[1],d=n.match(qs)||[],T=i.match(qs)||[],T.length){for(;f=qs.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,S=_.substr((u+"").length),p.charAt(1)==="="&&(p=$s(u,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=qs.lastIndex-v.length,v||(v=v||Vn.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(u=wr(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:m-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?em:Qp;return sp.test(i)&&(a.e=0),this._pt=a,a},cm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cm[n]||n,t[1]=cm[i]||i,t.join(" ")},By=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],qi[a]&&(l=1,a=a==="transformOrigin"?Un:It),us(n,a);l&&(us(n,It),o&&(o.svg&&n.removeAttribute("transform"),ga(n,1),o.uncache=1,tm(i)))}},Bl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new In(e._pt,t,n,0,0,By);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ma=[1,0,0,1,0,0],um={},hm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fm=function(e){var t=Di(e,It);return hm(t)?ma:t.substr(7).match(rp).map(Ft)},ch=function(e,t){var n=e._gsap||ns(e),i=e.style,r=fm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ma:r):(r===ma&&!e.offsetParent&&e!==Qs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Qs.appendChild(e)),r=fm(e),l?i.display=l:us(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},uh=function(e,t,n,i,r,o){var a=e._gsap,l=r||ch(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,E,R,N;n?l!==ma&&(E=u*p-g*_)&&(R=S*(p/E)+T*(-_/E)+(_*y-p*m)/E,N=S*(-g/E)+T*(u/E)-(u*y-g*m)/E,S=R,T=N):(b=om(e),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(m=S-c,y=T-h,a.xOffset=f+(m*u+y*_)-m,a.yOffset=d+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(br(o,a,"xOrigin",c,S),br(o,a,"yOrigin",h,T),br(o,a,"xOffset",f,a.xOffset),br(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},ga=function(e,t){var n=e._gsap||new zp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Di(e,Un)||"0",h,f,d,u,g,_,p,m,y,v,S,T,b,E,R,N,x,A,X,H,D,B,V,Y,K,ne,P,re,ue,q,L,G;return h=f=d=_=p=m=y=v=S=0,u=g=1,n.svg=!!(e.getCTM&&am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),E=ch(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),uh(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,b=n.yOrigin||0,E!==ma&&(A=E[0],X=E[1],H=E[2],D=E[3],h=B=E[4],f=V=E[5],E.length===6?(u=Math.sqrt(A*A+X*X),g=Math.sqrt(D*D+H*H),_=A||X?to(X,A)*cs:0,y=H||D?to(H,D)*cs+_:0,y&&(g*=Math.abs(Math.cos(y*eo))),n.svg&&(h-=T-(T*A+b*H),f-=b-(T*X+b*D))):(G=E[6],q=E[7],P=E[8],re=E[9],ue=E[10],L=E[11],h=E[12],f=E[13],d=E[14],R=to(G,ue),p=R*cs,R&&(N=Math.cos(-R),x=Math.sin(-R),Y=B*N+P*x,K=V*N+re*x,ne=G*N+ue*x,P=B*-x+P*N,re=V*-x+re*N,ue=G*-x+ue*N,L=q*-x+L*N,B=Y,V=K,G=ne),R=to(-H,ue),m=R*cs,R&&(N=Math.cos(-R),x=Math.sin(-R),Y=A*N-P*x,K=X*N-re*x,ne=H*N-ue*x,L=D*x+L*N,A=Y,X=K,H=ne),R=to(X,A),_=R*cs,R&&(N=Math.cos(R),x=Math.sin(R),Y=A*N+X*x,K=B*N+V*x,X=X*N-A*x,V=V*N-B*x,A=Y,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Ft(Math.sqrt(A*A+X*X+H*H)),g=Ft(Math.sqrt(V*V+G*G)),R=to(B,V),y=Math.abs(R)>2e-4?R*cs:0,S=L?1/(L<0?-L:L):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hm(Di(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(u*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ft(u),n.scaleY=Ft(g),n.rotation=Ft(_)+a,n.rotationX=Ft(p)+a,n.rotationY=Ft(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=kl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?zy:im?dm:ky,n.uncache=0,n},kl=function(e){return(e=e.split(" "))[0]+" "+e[1]},hh=function(e,t,n){var i=ln(t);return Ft(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},ky=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dm(e,t)},hs="0deg",_a="0px",fs=") ",dm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,S="",T=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==hs||h!==hs)){var b=parseFloat(h)*eo,E=Math.sin(b),R=Math.cos(b),N;b=parseFloat(f)*eo,N=Math.cos(b),o=hh(y,o,E*N*-v),a=hh(y,a,-Math.sin(b)*-v),l=hh(y,l,R*N*-v+v)}p!==_a&&(S+="perspective("+p+fs),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(T||o!==_a||a!==_a||l!==_a)&&(S+=l!==_a||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==hs&&(S+="rotate("+c+fs),h!==hs&&(S+="rotateY("+h+fs),f!==hs&&(S+="rotateX("+f+fs),(d!==hs||u!==hs)&&(S+="skew("+d+", "+u+fs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+fs),y.style[It]=S||"translate(0, 0)"},zy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),T,b,E,R,N;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=eo,c*=eo,T=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=eo,N=Math.tan(c-h),N=Math.sqrt(1+N*N),E*=N,R*=N,h&&(N=Math.tan(h),N=Math.sqrt(1+N*N),T*=N,b*=N)),T=Ft(T),b=Ft(b),E=Ft(E),R=Ft(R)):(T=f,R=d,b=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=wr(u,"x",o,"px"),S=wr(u,"y",a,"px")),(g||_||p||m)&&(v=Ft(v+g-(g*T+_*E)+p),S=Ft(S+_-(g*b+_*R)+m)),(i||r)&&(N=u.getBBox(),v=Ft(v+i/100*N.width),S=Ft(S+r/100*N.height)),N="matrix("+T+","+b+","+E+","+R+","+v+","+S+")",u.setAttribute("transform",N),y&&(u.style[It]=N)},Hy=function(e,t,n,i,r){var o=360,a=Jt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?cs:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Jp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Jp)%o-~~(c/o)*o)),e._pt=d=new In(e._pt,t,n,i,c,Ty),d.e=h,d.u="deg",e._props.push(n),d},pm=function(e,t){for(var n in t)e[n]=t[n];return e},Gy=function(e,t,n){var i=pm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=ga(n,1),us(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=ga(n,1),o[It]=c);for(l in qi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=ln(c),g=ln(h),f=u!==g?wr(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new In(e._pt,a,l,f,d-f,sh),e._pt.u=g||0,e._props.push(l));pm(a,i)};Dn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Bl[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return $i(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var mm={name:"css",register:ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,y,v,S,T,b,E,R;nh||ah(),this.styles=this.styles||nm(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Xn[_]&&Hp(_,t,n,i,e,r)))){if(u=typeof h,g=Bl[_],u==="function"&&(h=h.call(n,i,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ca(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Mr.lastIndex=0,Mr.test(c)||(p=ln(c),m=ln(h)),m?p!==m&&(c=wr(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Jt(c)&&~c.indexOf("random(")&&(c=ca(c)),ln(c+"")||c==="auto"||(c+=Vn.units[_]||ln($i(e,_))||""),(c+"").charAt(1)==="="&&(c=$i(e,_))):c=$i(e,_),d=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),_ in Li&&(_==="autoAlpha"&&(d===1&&$i(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),br(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in qi,v){if(this.styles.save(_),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||ga(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new In(this._pt,a,It,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new In(this._pt,T,"scaleY",T.scaleY,(y?$s(T.scaleY,y+f):f)-T.scaleY||0,sh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Un,0,a[Un]),h=Fy(h),T.svg?uh(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&br(this,T,"zOrigin",T.zOrigin,m),br(this,a,_,kl(c),kl(h)));continue}else if(_==="svgOrigin"){uh(e,h,1,b,0,this);continue}else if(_ in um){Hy(this,T,_,d,y?$s(d,y+h):h);continue}else if(_==="smoothOrigin"){br(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Gy(this,h,e);continue}}else _ in a||(_=no(_)||_);if(v||(f||f===0)&&(d||d===0)&&!Ey.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=ln(h)||(_ in Vn.units?Vn.units[_]:p),p!==m&&(d=wr(e,_,c,m)),this._pt=new In(this._pt,v?T:a,_,d,(y?$s(d,y+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?wy:sh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=by);else if(_ in a)Oy.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,r);else if(_!=="parseTransform"){Iu(_,h);continue}v||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||e[_])),o.push(_)}}E&&qp(this)},render:function(e,t){if(t.tween._time||!ih())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Li,getSetter:function(e,t,n){var i=Li[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Un&&(e._gsap.x||$i(e,"x"))?n&&jp===n?t==="scale"?Py:Ry:(jp=n||{})&&(t==="scale"?Ly:Dy):e.style&&!Au(e.style[t])?Ay:~t.indexOf("-")?Cy:ju(e,t)},core:{_removeProperty:us,_getMatrix:ch}};Nn.utils.checkPrefix=no,Nn.core.getStyleSaver=nm,function(s,e,t,n){var i=Dn(s+","+e+","+t,function(r){qi[r]=1});Dn(e,function(r){Vn.units[r]="deg",um[r]=1}),Li[i[13]]=s+","+e,Dn(n,function(r){var o=r.split(":");Li[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Vn.units[s]="px"}),Nn.registerPlugin(mm);var Tt=Nn.registerPlugin(mm)||Nn;Tt.core.Tween;const Vy=s=>(console.log("leave home"),Tt.to(s.current.container,{duration:2.5,onComplete:()=>{s.current.container.style="display: none",console.log("leave home complete")}})),Wy=s=>{},Xy=s=>Tt.to(s.current.container,{opacity:0,duration:.6}),Yy=s=>(window.scrollTo(0,0),Tt.set(s.next.container,{position:"absolute",top:"0px",width:"100%"}),Tt.from(s.next.container,{yPercent:10,opacity:0,duration:3,ease:"power4.out",onComplete:()=>{Tt.set(s.next.container,{clearProps:"all"})}}));function gm(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function qy(s,e,t){return e&&gm(s.prototype,e),t&&gm(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,zl,$n,Ar,Cr,io,_m,ds,va,vm,Ki,fi,xm,ym=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Sm=1,ro=[],lt=[],Ii=[],xa=Date.now,fh=function(e,t){return t},$y=function(){var e=va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Ii),lt=n,Ii=i,fh=function(o,a){return t[o](a)}},Rr=function(e,t){return~Ii.indexOf(e)&&Ii[Ii.indexOf(e)+1][t]},ya=function(e){return!!~vm.indexOf(e)},vn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Hl="scrollLeft",Gl="scrollTop",dh=function(){return Ki&&Ki.isPressed||lt.cache++},Vl=function(e,t){var n=function i(r){if(r||r===0){Sm&&($n.history.scrollRestoration="manual");var o=Ki&&Ki.isPressed;r=i.v=Math.round(r)||(Ki&&Ki.iOS?1:0),e(r),i.cacheID=lt.cache,o&&fh("ss",r)}else(t||lt.cache!==i.cacheID||fh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:Hl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vl(function(s){return arguments.length?$n.scrollTo(s,Xt.sc()):$n.pageXOffset||Ar[Hl]||Cr[Hl]||io[Hl]||0})},Xt={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:Vl(function(s){return arguments.length?$n.scrollTo(yn.sc(),s):$n.pageYOffset||Ar[Gl]||Cr[Gl]||io[Gl]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Pr=function(e,t){var n=t.s,i=t.sc;ya(e)&&(e=Ar.scrollingElement||Cr);var r=lt.indexOf(e),o=i===Xt.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+o]||vn(e,"scroll",dh);var a=lt[r+o],l=a||(lt[r+o]=Vl(Rr(e,n),!0)||(ya(e)?i:Vl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},ph=function(e,t,n){var i=e,r=e,o=xa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=xa();_||p-o>l?(r=i,i=g,a=o,o=p):n?i+=g:i=r+(g-r)/(p-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(g){var _=a,p=r,m=xa();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Sa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Em=function(){va=rn.core.globals().ScrollTrigger,va&&va.core&&$y()},Tm=function(e){return rn=e||ym(),!zl&&rn&&typeof document!="undefined"&&document.body&&($n=window,Ar=document,Cr=Ar.documentElement,io=Ar.body,vm=[$n,Ar,Cr,io],rn.utils.clamp,xm=rn.core.context||function(){},ds="onpointerenter"in io?"pointer":"mouse",_m=Bt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Bt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sm=0},500),Em(),zl=1),zl};yn.op=Xt,lt.cache=0;var Bt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){zl||Tm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),va||Em();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,T=n.onRight,b=n.onLeft,E=n.onUp,R=n.onDown,N=n.onChangeX,x=n.onChangeY,A=n.onChange,X=n.onToggleX,H=n.onToggleY,D=n.onHover,B=n.onHoverEnd,V=n.onMove,Y=n.ignoreCheck,K=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,re=n.onWheel,ue=n.onEnable,q=n.onDisable,L=n.onClick,G=n.scrollSpeed,te=n.capture,fe=n.allowClicks,le=n.lockAxis,me=n.onLockAxis;this.target=a=On(a)||Cr,this.vars=n,u&&(u=rn.utils.toArray(u)),i=i||1e-9,r=r||0,g=g||1,G=G||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(io).lineHeight)||22);var Re,ve,k,Ae,ge,Ee,Ie,z=this,De=0,Xe=0,st=n.passive||!h,C=Pr(a,yn),M=Pr(a,Xt),ie=C(),ce=M(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",he=ya(a),Ne=a.ownerDocument||Ar,He=[0,0,0],xe=[0,0,0],be=0,Ke=function(){return be=xa()},_e=function(ee,oe){return(z.event=ee)&&u&&~u.indexOf(ee.target)||oe&&de&&ee.pointerType!=="touch"||Y&&Y(ee,oe)},_t=function(){z._vx.reset(),z._vy.reset(),ve.pause(),f&&f(z)},$e=function(){var ee=z.deltaX=Mm(He),oe=z.deltaY=Mm(xe),j=Math.abs(ee)>=i,ye=Math.abs(oe)>=i;A&&(j||ye)&&A(z,ee,oe,He,xe),j&&(T&&z.deltaX>0&&T(z),b&&z.deltaX<0&&b(z),N&&N(z),X&&z.deltaX<0!=De<0&&X(z),De=z.deltaX,He[0]=He[1]=He[2]=0),ye&&(R&&z.deltaY>0&&R(z),E&&z.deltaY<0&&E(z),x&&x(z),H&&z.deltaY<0!=Xe<0&&H(z),Xe=z.deltaY,xe[0]=xe[1]=xe[2]=0),(Ae||k)&&(V&&V(z),k&&(y(z),k=!1),Ae=!1),Ee&&!(Ee=!1)&&me&&me(z),ge&&(re(z),ge=!1),Re=0},ke=function(ee,oe,j){He[j]+=ee,xe[j]+=oe,z._vx.update(ee),z._vy.update(oe),c?Re||(Re=requestAnimationFrame($e)):$e()},Ue=function(ee,oe){le&&!Ie&&(z.axis=Ie=Math.abs(ee)>Math.abs(oe)?"x":"y",Ee=!0),Ie!=="y"&&(He[2]+=ee,z._vx.update(ee,!0)),Ie!=="x"&&(xe[2]+=oe,z._vy.update(oe,!0)),c?Re||(Re=requestAnimationFrame($e)):$e()},Fe=function(ee){if(!_e(ee,1)){ee=Sa(ee,h);var oe=ee.clientX,j=ee.clientY,ye=oe-z.x,pe=j-z.y,Le=z.isDragging;z.x=oe,z.y=j,(Le||Math.abs(z.startX-oe)>=r||Math.abs(z.startY-j)>=r)&&(y&&(k=!0),Le||(z.isDragging=!0),Ue(ye,pe),Le||p&&p(z))}},Ze=z.onPress=function(O){_e(O,1)||O&&O.button||(z.axis=Ie=null,ve.pause(),z.isPressed=!0,O=Sa(O),De=Xe=0,z.startX=z.x=O.clientX,z.startY=z.y=O.clientY,z._vx.reset(),z._vy.reset(),vn(K?a:Ne,fi[1],Fe,st,!0),z.deltaX=z.deltaY=0,v&&v(z))},Te=z.onRelease=function(O){if(!_e(O,1)){xn(K?a:Ne,fi[1],Fe,!0);var ee=!isNaN(z.y-z.startY),oe=z.isDragging,j=oe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),ye=Sa(O);!j&&ee&&(z._vx.reset(),z._vy.reset(),h&&fe&&rn.delayedCall(.08,function(){if(xa()-be>300&&!O.defaultPrevented){if(O.target.click)O.target.click();else if(Ne.createEvent){var pe=Ne.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,$n,1,ye.screenX,ye.screenY,ye.clientX,ye.clientY,!1,!1,!1,!1,0,null),O.target.dispatchEvent(pe)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&oe&&!K&&ve.restart(!0),m&&oe&&m(z),S&&S(z,j)}},ot=function(ee){return ee.touches&&ee.touches.length>1&&(z.isGesturing=!0)&&ne(ee,z.isDragging)},U=function(){return(z.isGesturing=!1)||P(z)},Me=function(ee){if(!_e(ee)){var oe=C(),j=M();ke((oe-ie)*G,(j-ce)*G,1),ie=oe,ce=j,f&&ve.restart(!0)}},J=function(ee){if(!_e(ee)){ee=Sa(ee,h),re&&(ge=!0);var oe=(ee.deltaMode===1?l:ee.deltaMode===2?$n.innerHeight:1)*g;ke(ee.deltaX*oe,ee.deltaY*oe,0),f&&!K&&ve.restart(!0)}},Se=function(ee){if(!_e(ee)){var oe=ee.clientX,j=ee.clientY,ye=oe-z.x,pe=j-z.y;z.x=oe,z.y=j,Ae=!0,f&&ve.restart(!0),(ye||pe)&&Ue(ye,pe)}},se=function(ee){z.event=ee,D(z)},I=function(ee){z.event=ee,B(z)},ae=function(ee){return _e(ee)||Sa(ee,h)&&L(z)};ve=z._dc=rn.delayedCall(d||.25,_t).pause(),z.deltaX=z.deltaY=0,z._vx=ph(0,50,!0),z._vy=ph(0,50,!0),z.scrollX=C,z.scrollY=M,z.isDragging=z.isGesturing=z.isPressed=!1,xm(this),z.enable=function(O){return z.isEnabled||(vn(he?Ne:a,"scroll",dh),o.indexOf("scroll")>=0&&vn(he?Ne:a,"scroll",Me,st,te),o.indexOf("wheel")>=0&&vn(a,"wheel",J,st,te),(o.indexOf("touch")>=0&&_m||o.indexOf("pointer")>=0)&&(vn(a,fi[0],Ze,st,te),vn(Ne,fi[2],Te),vn(Ne,fi[3],Te),fe&&vn(a,"click",Ke,!0,!0),L&&vn(a,"click",ae),ne&&vn(Ne,"gesturestart",ot),P&&vn(Ne,"gestureend",U),D&&vn(a,ds+"enter",se),B&&vn(a,ds+"leave",I),V&&vn(a,ds+"move",Se)),z.isEnabled=!0,O&&O.type&&Ze(O),ue&&ue(z)),z},z.disable=function(){z.isEnabled&&(ro.filter(function(O){return O!==z&&ya(O.target)}).length||xn(he?Ne:a,"scroll",dh),z.isPressed&&(z._vx.reset(),z._vy.reset(),xn(K?a:Ne,fi[1],Fe,!0)),xn(he?Ne:a,"scroll",Me,te),xn(a,"wheel",J,te),xn(a,fi[0],Ze,te),xn(Ne,fi[2],Te),xn(Ne,fi[3],Te),xn(a,"click",Ke,!0),xn(a,"click",ae),xn(Ne,"gesturestart",ot),xn(Ne,"gestureend",U),xn(a,ds+"enter",se),xn(a,ds+"leave",I),xn(a,ds+"move",Se),z.isEnabled=z.isPressed=z.isDragging=!1,q&&q(z))},z.kill=z.revert=function(){z.disable();var O=ro.indexOf(z);O>=0&&ro.splice(O,1),Ki===z&&(Ki=0)},ro.push(z),K&&ya(a)&&(Ki=z),z.enable(_)},qy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Bt.version="3.12.5",Bt.create=function(s){return new Bt(s)},Bt.register=Tm,Bt.getAll=function(){return ro.slice()},Bt.getById=function(s){return ro.filter(function(e){return e.vars.id===s})[0]},ym()&&rn.registerPlugin(Bt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be,so,ht,Nt,di,bt,bm,Wl,Ma,Ea,Ta,Xl,cn,Yl,mh,Sn,wm,Am,oo,Cm,gh,Rm,Mn,_h,Pm,Lm,Lr,vh,xh,ao,yh,ql,Sh,Mh,$l=1,un=Date.now,Eh=un(),ri=0,ba=0,Dm=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Im=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ky=function s(){return ba&&requestAnimationFrame(s)},Nm=function(){return Yl=1},Um=function(){return Yl=0},Ni=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},Om=function(){return typeof window!="undefined"},Fm=function(){return Be||Om()&&(Be=window.gsap)&&Be.registerPlugin&&Be},ps=function(e){return!!~bm.indexOf(e)},Bm=function(e){return(e==="Height"?yh:ht["inner"+e])||di["client"+e]||bt["client"+e]},km=function(e){return Rr(e,"getBoundingClientRect")||(ps(e)?function(){return ac.width=ht.innerWidth,ac.height=yh,ac}:function(){return Zi(e)})},Zy=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Rr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Bm(r):e["client"+r])||0}},jy=function(e,t){return!t||~Ii.indexOf(e)?km(e):function(){return ac}},Ui=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Rr(e,n))?o()-km(e)()[r]:ps(e)?(di[n]||bt[n])-Bm(i):e[n]-e["offset"+i])},Kl=function(e,t){for(var n=0;n<oo.length;n+=3)(!t||~t.indexOf(oo[n+1]))&&e(oo[n],oo[n+1],oo[n+2])},Kn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Aa=function(e){return typeof e=="number"},ms=function(e){return typeof e=="object"},Ca=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Th=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},lo=Math.abs,zm="left",Hm="top",bh="right",wh="bottom",gs="width",_s="height",Ra="Right",Pa="Left",La="Top",Da="Bottom",Ht="padding",si="margin",co="Width",Ah="Height",Yt="px",oi=function(e){return ht.getComputedStyle(e)},Jy=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&oi(e)[mh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Zl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Qy=function(e){return function(t){return Be.utils.snap(Vm(e),t)}},Ch=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},eS=function(e){return function(t,n){return Ch(Vm(e))(t,n.direction)}},jl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},en=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ql={toggleActions:"play",anticipatePin:0},ec={top:0,left:0,center:.5,bottom:1,right:1},tc=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ec?ec[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},nc=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,g=Nt.createElement("div"),_=ps(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?bt:n,y=e.indexOf("start")!==-1,v=y?c:h,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Xt?bh:wh)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ic(g,0,i,y),g},ic=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+co]=1,r["border"+a+co]=0,r[n.p]=t+"px",Be.set(e,r)},rt=[],Rh={},Ia,Xm=function(){return un()-ri>34&&(Ia||(Ia=requestAnimationFrame(ji)))},uo=function(){(!Mn||!Mn.isPressed||Mn.startX>bt.clientWidth)&&(lt.cache++,Mn?Ia||(Ia=requestAnimationFrame(ji)):ji(),ri||xs("scrollStart"),ri=un())},Ph=function(){Lm=ht.innerWidth,Pm=ht.innerHeight},Na=function(){lt.cache++,!cn&&!Rm&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!_h||Lm!==ht.innerWidth||Math.abs(ht.innerHeight-Pm)>ht.innerHeight*.25)&&Wl.restart(!0)},vs={},tS=[],Ym=function s(){return tn(nt,"scrollEnd",s)||Ss(!0)},xs=function(e){return vs[e]&&vs[e].map(function(t){return t()})||tS},Zn=[],qm=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},Lh=function(e,t){var n;for(Sn=0;Sn<rt.length;Sn++)n=rt[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ql=!0,t&&qm(t),t||xs("revert")},$m=function(e,t){lt.cache++,(t||!Tn)&&lt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(ht.history.scrollRestoration=xh=e)},Tn,ys=0,Km,nS=function(){if(Km!==ys){var e=Km=ys;requestAnimationFrame(function(){return e===ys&&Ss(!0)})}},Zm=function(){bt.appendChild(ao),yh=!Mn&&ao.offsetHeight||ht.innerHeight,bt.removeChild(ao)},jm=function(e){return Ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ss=function(e,t){if(ri&&!e&&!ql){en(nt,"scrollEnd",Ym);return}Zm(),Tn=nt.isRefreshing=!0,lt.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=xs("refreshInit");Cm&&nt.sort(),t||Lh(),lt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),ql=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Sh=1,jm(!0),rt.forEach(function(i){var r=Ui(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),jm(!1),Sh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$m(xh,1),Wl.pause(),ys++,Tn=2,ji(2),rt.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=nt.isRefreshing=!1,xs("refresh")},Dh=0,rc=1,Ua,ji=function(e){if(e===2||!Tn&&!ql){nt.isUpdating=!0,Ua&&Ua.update(0);var t=rt.length,n=un(),i=n-Eh>=50,r=t&&rt[0].scroll();if(rc=Dh>r?-1:1,Tn||(Dh=r),i&&(ri&&!Yl&&n-ri>200&&(ri=0,xs("scrollEnd")),Ta=Eh,Eh=n),rc<0){for(Sn=t;Sn-- >0;)rt[Sn]&&rt[Sn].update(0,i);rc=1}else for(Sn=0;Sn<t;Sn++)rt[Sn]&&rt[Sn].update(0,i);nt.isUpdating=!1}Ia=0},Ih=[zm,Hm,wh,bh,si+Da,si+Ra,si+La,si+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sc=Ih.concat([gs,_s,"boxSizing","max"+co,"max"+Ah,"position",si,Ht,Ht+La,Ht+Ra,Ht+Da,Ht+Pa]),iS=function(e,t,n){ho(n);var i=e._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Nh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Ih.length,o=t.style,a=e.style,l;r--;)l=Ih[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[wh]=a[bh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gs]=Zl(e,yn)+Yt,o[_s]=Zl(e,Xt)+Yt,o[Ht]=a[si]=a[Hm]=a[zm]="0",ho(i),a[gs]=a["max"+co]=n[gs],a[_s]=a["max"+Ah]=n[_s],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},rS=/([A-Z])/g,ho=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(rS,"-$1").toLowerCase())}},oc=function(e){for(var t=sc.length,n=e.style,i=[],r=0;r<t;r++)i.push(sc[r],n[sc[r]]);return i.t=e,i},sS=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ac={left:0,top:0},Jm=function(e,t,n,i,r,o,a,l,c,h,f,d,u,g){En(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?tc("0"+e.substr(3),n):0));var _=u?u.time():0,p,m,y;if(u&&u.seek(0),isNaN(e)||(e=+e),Aa(e))u&&(e=Be.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&ic(a,n,i,!0);else{En(t)&&(t=t(l));var v=(e||"0").split(" "),S,T,b,E;y=On(t,l)||bt,S=Zi(y)||{},(!S||!S.left&&!S.top)&&oi(y).display==="none"&&(E=y.style.display,y.style.display="block",S=Zi(y),E?y.style.display=E:y.style.removeProperty("display")),T=tc(v[0],S[i.d]),b=tc(v[1]||"0",n),e=S[i.p]-c[i.p]-h+T+r-b,a&&ic(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,N=o._isStart;p="scroll"+i.d2,ic(o,R,i,N&&R>20||!N&&(f?Math.max(bt[p],di[p]):o.parentNode[p])<=R+1),f&&(c=Zi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Yt))}return u&&y&&(p=Zi(y),u.seek(d),m=Zi(y),u._caScrollDist=p[i.p]-m[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},oS=/(webkit|moz|length|cssText|inset)/i,Qm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===bt){e._stOrig=r.cssText,a=oi(e);for(o in a)!+o&&!oS.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},eg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},lc=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},tg=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=eg(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&ji()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},en(e,"wheel",n.wheelHandler),nt.isTouch&&en(e,"touchmove",n.wheelHandler),r},nt=function(){function s(t,n){so||s.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Ni;return}n=Gm(Kn(n)||Aa(n)||n.nodeType?{trigger:n}:n,Ql);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,y=r.onSnapComplete,v=r.once,S=r.snap,T=r.pinReparent,b=r.pinSpacer,E=r.containerAnimation,R=r.fastScrollEnd,N=r.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Xt,A=!f&&f!==0,X=On(n.scroller||ht),H=Be.core.getCache(X),D=ps(X),B=("pinType"in n?n.pinType:Rr(X,"pinType")||D&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=A&&n.toggleActions.split(" "),K="markers"in n?n.markers:Ql.markers,ne=D?0:parseFloat(oi(X)["border"+x.p2+co])||0,P=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ue=Zy(X,D,x),q=jy(X,D),L=0,G=0,te=0,fe=Pr(X,x),le,me,Re,ve,k,Ae,ge,Ee,Ie,z,De,Xe,st,C,M,ie,ce,de,he,Ne,He,xe,be,Ke,_e,_t,$e,ke,Ue,Fe,Ze,Te,ot,U,Me,J,Se,se,I;if(P._startClamp=P._endClamp=!1,P._dir=x,p*=45,P.scroller=X,P.scroll=E?E.time.bind(E):fe,ve=fe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cm=1,n.refreshPriority===-9999&&(Ua=P)),H.tweenScroll=H.tweenScroll||{top:tg(X,Xt),left:tg(X,yn)},P.tweenTo=le=H.tweenScroll[x.p],P.scrubDuration=function(j){ot=Aa(j)&&j,ot?Te?Te.duration(j):Te=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ot,paused:!0,onComplete:function(){return m&&m(P)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Fe=0,l||(l=i.vars.id)),S&&((!ms(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in bt.style&&Be.set(D?[bt,di]:X,{scrollBehavior:"auto"}),lt.forEach(function(j){return En(j)&&j.target===(D?Nt.scrollingElement||di:X)&&(j.smooth=!1)}),Re=En(S.snapTo)?S.snapTo:S.snapTo==="labels"?Qy(i):S.snapTo==="labelsDirectional"?eS(i):S.directional!==!1?function(j,ye){return Ch(S.snapTo)(j,un()-G<500?0:ye.direction)}:Be.utils.snap(S.snapTo),U=S.duration||{min:.1,max:2},U=ms(U)?Ea(U.min,U.max):Ea(U,U),Me=Be.delayedCall(S.delay||ot/2||.1,function(){var j=fe(),ye=un()-G<500,pe=le.tween;if((ye||Math.abs(P.getVelocity())<10)&&!pe&&!Yl&&L!==j){var Le=(j-Ae)/C,We=i&&!A?i.totalProgress():Le,Oe=ye?0:(We-Ze)/(un()-Ta)*1e3||0,je=Be.utils.clamp(-Le,1-Le,lo(Oe/2)*Oe/.185),ct=Le+(S.inertia===!1?0:je),dt,it,at=S,mt=at.onStart,w=at.onInterrupt,W=at.onComplete;if(dt=Re(ct,P),Aa(dt)||(dt=ct),it=Math.round(Ae+dt*C),j<=ge&&j>=Ae&&it!==j){if(pe&&!pe._initted&&pe.data<=lo(it-j))return;S.inertia===!1&&(je=dt-Le),le(it,{duration:U(lo(Math.max(lo(ct-We),lo(dt-We))*.185/Oe/.05||0)),ease:S.ease||"power3",data:lo(it-j),onInterrupt:function(){return Me.restart(!0)&&w&&w(P)},onComplete:function(){P.update(),L=fe(),i&&(Te?Te.resetTo("totalProgress",dt,i._tTime/i._tDur):i.progress(dt)),Fe=Ze=i&&!A?i.totalProgress():P.progress,y&&y(P),W&&W(P)}},j,je*C,it-j-je*C),mt&&mt(P,le.tween)}}else P.isActive&&L!==j&&Me.restart(!0)}).pause()),l&&(Rh[l]=P),d=P.trigger=On(d||u!==!0&&u),I=d&&d._gsap&&d._gsap.stRevert,I&&(I=I(P)),u=u===!0?d:On(u),Kn(a)&&(a={targets:d,className:a}),u&&(g===!1||g===si||(g=!g&&u.parentNode&&u.parentNode.style&&oi(u.parentNode).display==="flex"?!1:Ht),P.pin=u,me=Be.core.getCache(u),me.spacer?M=me.pinState:(b&&(b=On(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),me.spacerIsNative=!!b,b&&(me.spacerState=oc(b))),me.spacer=de=b||Nt.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),me.pinState=M=oc(u)),n.force3D!==!1&&Be.set(u,{force3D:!0}),P.spacer=de=me.spacer,Ue=oi(u),Ke=Ue[g+x.os2],Ne=Be.getProperty(u),He=Be.quickSetter(u,x.a,Yt),Nh(u,de,Ue),ce=oc(u)),K){Xe=ms(K)?Gm(K,Wm):Wm,z=nc("scroller-start",l,X,x,Xe,0),De=nc("scroller-end",l,X,x,Xe,0,z),he=z["offset"+x.op.d2];var ae=On(Rr(X,"content")||X);Ee=this.markerStart=nc("start",l,ae,x,Xe,he,0,E),Ie=this.markerEnd=nc("end",l,ae,x,Xe,he,0,E),E&&(se=Be.quickSetter([Ee,Ie],x.a,Yt)),!B&&!(Ii.length&&Rr(X,"fixedMarkers")===!0)&&(Jy(D?bt:X),Be.set([z,De],{force3D:!0}),_t=Be.quickSetter(z,x.a,Yt),ke=Be.quickSetter(De,x.a,Yt))}if(E){var O=E.vars.onUpdate,ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),O&&O.apply(E,ee||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(j,ye){if(!ye)return P.kill(!0);var pe=j!==!1||!P.enabled,Le=cn;pe!==P.isReverted&&(pe&&(J=Math.max(fe(),P.scroll.rec||0),te=P.progress,Se=i&&i.progress()),Ee&&[Ee,Ie,z,De].forEach(function(We){return We.style.display=pe?"none":"block"}),pe&&(cn=P,P.update(pe)),u&&(!T||!P.isActive)&&(pe?iS(u,de,M):Nh(u,de,oi(u),_e)),pe||P.update(pe),cn=Le,P.isReverted=pe)},P.refresh=function(j,ye,pe,Le){if(!((cn||!P.enabled)&&!ye)){if(u&&j&&ri){en(s,"scrollEnd",Ym);return}!Tn&&re&&re(P),cn=P,le.tween&&!pe&&(le.tween.kill(),le.tween=0),Te&&Te.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var We=ue(),Oe=q(),je=E?E.duration():Ui(X,x),ct=C<=.01,dt=0,it=Le||0,at=ms(pe)?pe.end:n.end,mt=n.endTrigger||d,w=ms(pe)?pe.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),W=P.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,P),Z=d&&Math.max(0,rt.indexOf(P))||0,Q=Z,$,we,ze,Ye,Ge,Ve,qe,Qe,Pt,jt,vt,Pn,xt;for(K&&ms(pe)&&(Pn=Be.getProperty(z,x.p),xt=Be.getProperty(De,x.p));Q--;)Ve=rt[Q],Ve.end||Ve.refresh(0,1)||(cn=P),qe=Ve.pin,qe&&(qe===d||qe===u||qe===W)&&!Ve.isReverted&&(jt||(jt=[]),jt.unshift(Ve),Ve.revert(!0,!0)),Ve!==rt[Q]&&(Z--,Q--);for(En(w)&&(w=w(P)),w=Dm(w,"start",P),Ae=Jm(w,d,We,x,fe(),Ee,z,P,Oe,ne,B,je,E,P._startClamp&&"_startClamp")||(u?-.001:0),En(at)&&(at=at(P)),Kn(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=(Kn(w)?w.split(" ")[0]:"")+at:(dt=tc(at.substr(2),We),at=Kn(w)?w:(E?Be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+dt,mt=d)),at=Dm(at,"end",P),ge=Math.max(Ae,Jm(at||(mt?"100% 0":je),mt,We,x,fe()+dt,Ie,De,P,Oe,ne,B,je,E,P._endClamp&&"_endClamp"))||-.001,dt=0,Q=Z;Q--;)Ve=rt[Q],qe=Ve.pin,qe&&Ve.start-Ve._pinPush<=Ae&&!E&&Ve.end>0&&($=Ve.end-(P._startClamp?Math.max(0,Ve.start):Ve.start),(qe===d&&Ve.start-Ve._pinPush<Ae||qe===W)&&isNaN(w)&&(dt+=$*(1-Ve.progress)),qe===u&&(it+=$));if(Ae+=dt,ge+=dt,P._startClamp&&(P._startClamp+=dt),P._endClamp&&!Tn&&(P._endClamp=ge||-.001,ge=Math.min(ge,Ui(X,x))),C=ge-Ae||(Ae-=.01)&&.001,ct&&(te=Be.utils.clamp(0,1,Be.utils.normalize(Ae,ge,J))),P._pinPush=it,Ee&&dt&&($={},$[x.a]="+="+dt,W&&($[x.p]="-="+fe()),Be.set([Ee,Ie],$)),u&&!(Sh&&P.end>=Ui(X,x)))$=oi(u),Ye=x===Xt,ze=fe(),xe=parseFloat(Ne(x.a))+it,!je&&ge>1&&(vt=(D?Nt.scrollingElement||di:X).style,vt={style:vt,value:vt["overflow"+x.a.toUpperCase()]},D&&oi(bt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(vt.style["overflow"+x.a.toUpperCase()]="scroll")),Nh(u,de,$),ce=oc(u),we=Zi(u,!0),Qe=B&&Pr(X,Ye?yn:Xt)(),g?(_e=[g+x.os2,C+it+Yt],_e.t=de,Q=g===Ht?Zl(u,x)+C+it:0,Q&&(_e.push(x.d,Q+Yt),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Yt)),ho(_e),W&&rt.forEach(function(Je){Je.pin===W&&Je.vars.pinSpacing!==!1&&(Je._subPinOffset=!0)}),B&&fe(J)):(Q=Zl(u,x),Q&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Yt)),B&&(Ge={top:we.top+(Ye?ze-Ae:Qe)+Yt,left:we.left+(Ye?Qe:ze-Ae)+Yt,boxSizing:"border-box",position:"fixed"},Ge[gs]=Ge["max"+co]=Math.ceil(we.width)+Yt,Ge[_s]=Ge["max"+Ah]=Math.ceil(we.height)+Yt,Ge[si]=Ge[si+La]=Ge[si+Ra]=Ge[si+Da]=Ge[si+Pa]="0",Ge[Ht]=$[Ht],Ge[Ht+La]=$[Ht+La],Ge[Ht+Ra]=$[Ht+Ra],Ge[Ht+Da]=$[Ht+Da],Ge[Ht+Pa]=$[Ht+Pa],ie=sS(M,Ge,T),Tn&&fe(0)),i?(Pt=i._initted,gh(1),i.render(i.duration(),!0,!0),be=Ne(x.a)-xe+C+it,$e=Math.abs(C-be)>1,B&&$e&&ie.splice(ie.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gh(0)):be=C,vt&&(vt.value?vt.style["overflow"+x.a.toUpperCase()]=vt.value:vt.style.removeProperty("overflow-"+x.a));else if(d&&fe()&&!E)for(we=d.parentNode;we&&we!==bt;)we._pinOffset&&(Ae-=we._pinOffset,ge-=we._pinOffset),we=we.parentNode;jt&&jt.forEach(function(Je){return Je.revert(!1,!0)}),P.start=Ae,P.end=ge,ve=k=Tn?J:fe(),!E&&!Tn&&(ve<J&&fe(J),P.scroll.rec=0),P.revert(!1,!0),G=un(),Me&&(L=-1,Me.restart(!0)),cn=0,i&&A&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se||0,!0).render(i.time(),!0,!0),(ct||te!==P.progress||E||_)&&(i&&!A&&i.totalProgress(E&&Ae<-.001&&!te?Be.utils.normalize(Ae,ge,0):te,!0),P.progress=ct||(ve-Ae)/C===te?0:te),u&&g&&(de._pinOffset=Math.round(P.progress*be)),Te&&Te.invalidate(),isNaN(Pn)||(Pn-=Be.getProperty(z,x.p),xt-=Be.getProperty(De,x.p),lc(z,x,Pn),lc(Ee,x,Pn-(Le||0)),lc(De,x,xt),lc(Ie,x,xt-(Le||0))),ct&&!Tn&&P.update(),h&&!Tn&&!st&&(st=!0,h(P),st=!1)}},P.getVelocity=function(){return(fe()-k)/(un()-Ta)*1e3||0},P.endAnimation=function(){Ca(P.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?A||Ca(i,P.direction<0,1):Ca(i,i.reversed()))},P.labelToScroll=function(j){return i&&i.labels&&(Ae||P.refresh()||Ae)+i.labels[j]/i.duration()*C||0},P.getTrailing=function(j){var ye=rt.indexOf(P),pe=P.direction>0?rt.slice(0,ye).reverse():rt.slice(ye+1);return(Kn(j)?pe.filter(function(Le){return Le.vars.preventOverlaps===j}):pe).filter(function(Le){return P.direction>0?Le.end<=Ae:Le.start>=ge})},P.update=function(j,ye,pe){if(!(E&&!pe&&!j)){var Le=Tn===!0?J:P.scroll(),We=j?0:(Le-Ae)/C,Oe=We<0?0:We>1?1:We||0,je=P.progress,ct,dt,it,at,mt,w,W,Z;if(ye&&(k=ve,ve=E?fe():Le,S&&(Ze=Fe,Fe=i&&!A?i.totalProgress():Oe)),p&&u&&!cn&&!$l&&ri&&(!Oe&&Ae<Le+(Le-k)/(un()-Ta)*p?Oe=1e-4:Oe===1&&ge>Le+(Le-k)/(un()-Ta)*p&&(Oe=.9999)),Oe!==je&&P.enabled){if(ct=P.isActive=!!Oe&&Oe<1,dt=!!je&&je<1,w=ct!==dt,mt=w||!!Oe!=!!je,P.direction=Oe>je?1:-1,P.progress=Oe,mt&&!cn&&(it=Oe&&!je?0:Oe===1?1:je===1?2:3,A&&(at=!w&&Y[it+1]!=="none"&&Y[it+1]||Y[it],Z=i&&(at==="complete"||at==="reset"||at in i))),N&&(w||Z)&&(Z||f||!i)&&(En(N)?N(P):P.getTrailing(N).forEach(function(ze){return ze.endAnimation()})),A||(Te&&!cn&&!$l?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Oe,i._tTime/i._tDur):(Te.vars.totalProgress=Oe,Te.invalidate().restart())):i&&i.totalProgress(Oe,!!(cn&&(G||j)))),u){if(j&&g&&(de.style[g+x.os2]=Ke),!B)He(wa(xe+be*Oe));else if(mt){if(W=!j&&Oe>je&&ge+1>Le&&Le+1>=Ui(X,x),T)if(!j&&(ct||W)){var Q=Zi(u,!0),$=Le-Ae;Qm(u,bt,Q.top+(x===Xt?$:0)+Yt,Q.left+(x===Xt?0:$)+Yt)}else Qm(u,de);ho(ct||W?ie:ce),$e&&Oe<1&&ct||He(xe+(Oe===1&&!W?be:0))}}S&&!le.tween&&!cn&&!$l&&Me.restart(!0),a&&(w||v&&Oe&&(Oe<1||!Mh))&&Ma(a.targets).forEach(function(ze){return ze.classList[ct||v?"add":"remove"](a.className)}),o&&!A&&!j&&o(P),mt&&!cn?(A&&(Z&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),o&&o(P)),(w||!Mh)&&(c&&w&&Th(P,c),V[it]&&Th(P,V[it]),v&&(Oe===1?P.kill(!1,1):V[it]=0),w||(it=Oe===1?1:3,V[it]&&Th(P,V[it]))),R&&!ct&&Math.abs(P.getVelocity())>(Aa(R)?R:2500)&&(Ca(P.callbackAnimation),Te?Te.progress(1):Ca(i,at==="reverse"?1:!Oe,1))):A&&o&&!cn&&o(P)}if(ke){var we=E?Le/E.duration()*(E._caScrollDist||0):Le;_t(we+(z._isFlipped?1:0)),ke(we)}se&&se(-Le/E.duration()*(E._caScrollDist||0))}},P.enable=function(j,ye){P.enabled||(P.enabled=!0,en(X,"resize",Na),D||en(X,"scroll",uo),re&&en(s,"refreshInit",re),j!==!1&&(P.progress=te=0,ve=k=L=fe()),ye!==!1&&P.refresh())},P.getTween=function(j){return j&&le?le.tween:Te},P.setPositions=function(j,ye,pe,Le){if(E){var We=E.scrollTrigger,Oe=E.duration(),je=We.end-We.start;j=We.start+je*j/Oe,ye=We.start+je*ye/Oe}P.refresh(!1,!1,{start:Im(j,pe&&!!P._startClamp),end:Im(ye,pe&&!!P._endClamp)},Le),P.update()},P.adjustPinSpacing=function(j){if(_e&&j){var ye=_e.indexOf(x.d)+1;_e[ye]=parseFloat(_e[ye])+j+Yt,_e[1]=parseFloat(_e[1])+j+Yt,ho(_e)}},P.disable=function(j,ye){if(P.enabled&&(j!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ye||Te&&Te.pause(),J=0,me&&(me.uncache=1),re&&tn(s,"refreshInit",re),Me&&(Me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!D)){for(var pe=rt.length;pe--;)if(rt[pe].scroller===X&&rt[pe]!==P)return;tn(X,"resize",Na),D||tn(X,"scroll",uo)}},P.kill=function(j,ye){P.disable(j,ye),Te&&!ye&&Te.kill(),l&&delete Rh[l];var pe=rt.indexOf(P);pe>=0&&rt.splice(pe,1),pe===Sn&&rc>0&&Sn--,pe=0,rt.forEach(function(Le){return Le.scroller===P.scroller&&(pe=1)}),pe||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),ye||i.kill()),Ee&&[Ee,Ie,z,De].forEach(function(Le){return Le.parentNode&&Le.parentNode.removeChild(Le)}),Ua===P&&(Ua=0),u&&(me&&(me.uncache=1),pe=0,rt.forEach(function(Le){return Le.pin===u&&pe++}),pe||(me.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),I&&I(P),i&&i.add&&!C){var oe=P.update;P.update=function(){P.update=oe,Ae||ge||P.refresh()},Be.delayedCall(.01,P.update),C=.01,Ae=ge=0}else P.refresh();u&&nS()},s.register=function(n){return so||(Be=n||Fm(),Om()&&window.document&&s.enable(),so=ba),so},s.defaults=function(n){if(n)for(var i in n)Ql[i]=n[i];return Ql},s.disable=function(n,i){ba=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(ht,"wheel",uo),tn(Nt,"scroll",uo),clearInterval(Xl),tn(Nt,"touchcancel",Ni),tn(bt,"touchstart",Ni),jl(tn,Nt,"pointerdown,touchstart,mousedown",Nm),jl(tn,Nt,"pointerup,touchend,mouseup",Um),Wl.kill(),Kl(tn);for(var r=0;r<lt.length;r+=3)Jl(tn,lt[r],lt[r+1]),Jl(tn,lt[r],lt[r+2])},s.enable=function(){if(ht=window,Nt=document,di=Nt.documentElement,bt=Nt.body,Be&&(Ma=Be.utils.toArray,Ea=Be.utils.clamp,vh=Be.core.context||Ni,gh=Be.core.suppressOverwrites||Ni,xh=ht.history.scrollRestoration||"auto",Dh=ht.pageYOffset,Be.core.globals("ScrollTrigger",s),bt)){ba=1,ao=document.createElement("div"),ao.style.height="100vh",ao.style.position="absolute",Zm(),Ky(),Bt.register(Be),s.isTouch=Bt.isTouch,Lr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_h=Bt.isTouch===1,en(ht,"wheel",uo),bm=[ht,Nt,di,bt],Be.matchMedia?(s.matchMedia=function(l){var c=Be.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Be.addEventListener("matchMediaInit",function(){return Lh()}),Be.addEventListener("matchMediaRevert",function(){return qm()}),Be.addEventListener("matchMedia",function(){Ss(0,1),xs("matchMedia")}),Be.matchMedia("(orientation: portrait)",function(){return Ph(),Ph})):console.warn("Requires GSAP 3.11.0 or later"),Ph(),en(Nt,"scroll",uo);var n=bt.style,i=n.borderTopStyle,r=Be.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zi(bt),Xt.m=Math.round(o.top+Xt.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Xl=setInterval(Xm,250),Be.delayedCall(.5,function(){return $l=0}),en(Nt,"touchcancel",Ni),en(bt,"touchstart",Ni),jl(en,Nt,"pointerdown,touchstart,mousedown",Nm),jl(en,Nt,"pointerup,touchend,mouseup",Um),mh=Be.utils.checkPrefix("transform"),sc.push(mh),so=un(),Wl=Be.delayedCall(.2,Ss).pause(),oo=[Nt,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;Nt.hidden?(wm=l,Am=c):(wm!==l||Am!==c)&&Na()},Nt,"DOMContentLoaded",Ss,ht,"load",Ss,ht,"resize",Na],Kl(en),rt.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)Jl(tn,lt[a],lt[a+1]),Jl(tn,lt[a],lt[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Mh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Xl)||(Xl=i)&&setInterval(Xm,i),"ignoreMobileResize"in n&&(_h=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Kl(tn)||Kl(en,n.autoRefreshEvents||"none"),Rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=On(n),o=lt.indexOf(r),a=ps(r);~o&&lt.splice(o,a?6:2),i&&(a?Ii.unshift(ht,i,bt,i,di,i):Ii.unshift(r,i))},s.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Kn(n)?On(n):n).getBoundingClientRect(),a=o[r?gs:_s]*i||0;return r?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},s.positionInViewport=function(n,i,r){Kn(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[r?gs:_s],l=i==null?a/2:i in ec?ec[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},s.killAll=function(n){if(rt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=vs.killAll||[];vs={},i.forEach(function(r){return r()})}},s}();nt.version="3.12.5",nt.saveStyles=function(s){return s?Ma(s).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),vh())}}):Zn},nt.revert=function(s,e){return Lh(!s,e)},nt.create=function(s,e){return new nt(s,e)},nt.refresh=function(s){return s?Na():(so||nt.register())&&Ss(!0)},nt.update=function(s){return++lt.cache&&ji(s===!0?2:0)},nt.clearScrollMemory=$m,nt.maxScroll=function(s,e){return Ui(s,e?yn:Xt)},nt.getScrollFunc=function(s,e){return Pr(On(s),e?yn:Xt)},nt.getById=function(s){return Rh[s]},nt.getAll=function(){return rt.filter(function(s){return s.vars.id!=="ScrollSmoother"})},nt.isScrolling=function(){return!!ri},nt.snapDirectional=Ch,nt.addEventListener=function(s,e){var t=vs[s]||(vs[s]=[]);~t.indexOf(e)||t.push(e)},nt.removeEventListener=function(s,e){var t=vs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},nt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Be.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),r<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(r)&&(r=r(),en(nt,"refresh",function(){return r=e.batchMax()})),Ma(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var ng=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Uh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===di&&s(bt,t)},cc={auto:1,scroll:1},aS=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Be.core.getCache(r),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==bt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(cc[(l=oi(r)).overflowY]||cc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!ps(r)&&(cc[(l=oi(r)).overflowY]||cc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ig=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&aS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Nt,Bt.eventTypes[0],sg,!1,!0)},onDisable:function(){return tn(Nt,Bt.eventTypes[0],sg,!0)}})},lS=/(input|label|select|textarea)/i,rg,sg=function(e){var t=lS.test(e.target.tagName);(t||rg)&&(e._gsapAllow=!0,rg=t)},cS=function(e){ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||di,h=Be.core.globals().ScrollSmoother,f=h&&h.get(),d=Lr&&(e.content&&On(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Pr(c,Xt),g=Pr(c,yn),_=1,p=(Bt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,y=En(i)?function(){return i(a)}:function(){return i||2.8},v,S,T=ig(c,e.type,!0,r),b=function(){return S=!1},E=Ni,R=Ni,N=function(){l=Ui(c,Xt),R=Ea(Lr?1:0,l),n&&(E=Ea(0,Ui(c,yn))),v=ys},x=function(){d._gsap.y=wa(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},A=function(){if(S){requestAnimationFrame(b);var K=wa(a.deltaY/2),ne=R(u.v-K);if(d&&ne!==u.v+u.offset){u.offset=ne-u.v;var P=wa((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=lt.cache,ji()}return!0}u.offset&&x(),S=!0},X,H,D,B,V=function(){N(),X.isActive()&&X.vars.scrollY>l&&(u()>l?X.progress(1)&&u(l):X.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Lr&&Y.type==="touchmove"&&A()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=wa((ht.visualViewport&&ht.visualViewport.scale||1)/p),X.pause(),Y!==_&&Uh(c,_>1.01?!0:n?!1:"x"),H=g(),D=u(),N(),v=ys},e.onRelease=e.onGestureStart=function(Y,K){if(u.offset&&x(),!K)B.restart(!0);else{lt.cache++;var ne=y(),P,re;n&&(P=g(),re=P+ne*.05*-Y.velocityX/.227,ne*=ng(g,P,re,Ui(c,yn)),X.vars.scrollX=E(re)),P=u(),re=P+ne*.05*-Y.velocityY/.227,ne*=ng(u,P,re,Ui(c,Xt)),X.vars.scrollY=R(re),X.invalidate().duration(ne).play(.01),(Lr&&X.vars.scrollY>=l||P>=l-1)&&Be.to({},{onUpdate:V,duration:ne})}o&&o(Y)},e.onWheel=function(){X._ts&&X.pause(),un()-m>1e3&&(v=0,m=un())},e.onChange=function(Y,K,ne,P,re){if(ys!==v&&N(),K&&n&&g(E(P[2]===K?H+(Y.startX-Y.x):g()+K-P[1])),ne){u.offset&&x();var ue=re[2]===ne,q=ue?D+Y.startY-Y.y:u()+ne-re[1],L=R(q);ue&&q!==L&&(D+=L-q),u(L)}(ne||K)&&ji()},e.onEnable=function(){Uh(c,n?!1:"x"),nt.addEventListener("refresh",V),en(ht,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Uh(c,!0),tn(ht,"resize",V),nt.removeEventListener("refresh",V),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Bt(e),a.iOS=Lr,Lr&&!u()&&u(1),Lr&&Be.ticker.add(Ni),B=a._dc,X=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:eg(u,u(),function(){return X.pause()})},onUpdate:ji,onComplete:B.vars.onComplete}),a};nt.sort=function(s){return rt.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},nt.observe=function(s){return new Bt(s)},nt.normalizeScroll=function(s){if(typeof s=="undefined")return Mn;if(s===!0&&Mn)return Mn.enable();if(s===!1){Mn&&Mn.kill(),Mn=s;return}var e=s instanceof Bt?s:cS(s);return Mn&&Mn.target===e.target&&Mn.kill(),ps(e.target)&&(Mn=e),e},nt.core={_getVelocityProp:ph,_inputObserver:ig,_scrollers:lt,_proxies:Ii,bridge:{ss:function(){ri||xs("scrollStart"),ri=un()},ref:function(){return cn}}},Fm()&&Be.registerPlugin(nt);/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn,og,Ji,Oi,Dr,ag,lg,uc,cg=function(){return typeof window!="undefined"},ug=function(){return bn||cg()&&(bn=window.gsap)&&bn.registerPlugin&&bn},hg=function(e){return typeof e=="string"},fg=function(e){return typeof e=="function"},Oa=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===Ji||e===Oi||e===Dr?Math.max(Oi[i],Dr[i])-(Ji["inner"+n]||Oi[r]||Dr[r]):e[i]-e["offset"+n]},Fa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Ji&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Oi[n]!=null?Oi:Dr),function(){return e[n]}},uS=function(e,t,n,i){if(fg(e)&&(e=e(t,n,i)),typeof e!="object")return hg(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},o;for(o in e)r[o]=o!=="onAutoKill"&&fg(e[o])?e[o](t,n,i):e[o];return r},dg=function(e,t){if(e=ag(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Ji||t===Dr,r=i?{top:Oi.clientTop-(Ji.pageYOffset||Oi.scrollTop||Dr.scrollTop||0),left:Oi.clientLeft-(Ji.pageXOffset||Oi.scrollLeft||Dr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-r.left,y:n.top-r.top};return!i&&t&&(o.x+=Fa(t,"x")(),o.y+=Fa(t,"y")()),o},pg=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:hg(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?Oa(t,n)-r:Math.min(Oa(t,n),dg(e,t)[n]-r)},mg=function(){bn=ug(),cg()&&bn&&typeof document!="undefined"&&document.body&&(Ji=window,Dr=document.body,Oi=document.documentElement,ag=bn.utils.toArray,bn.config({autoKillThreshold:7}),lg=bn.config(),og=1)},Ba={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){bn=e,mg()},init:function(e,t,n,i,r){og||mg();var o=this,a=bn.getProperty(e,"scrollSnapType");o.isWin=e===Ji,o.target=e,o.tween=n,t=uS(t,i,e,r),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Fa(e,"x"),o.getY=Fa(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),uc||(uc=bn.core.globals().ScrollTrigger),bn.getProperty(e,"scrollBehavior")==="smooth"&&bn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,pg(t.x,e,"x",o.x,t.offsetX||0),i,r),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,pg(t.y,e,"y",o.y,t.offsetY||0),i,r),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,f=t.snapInline,d,u,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,u=c||!t.skipY?t.getY():l,g=u-l,_=d-a,p=lg.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<Oa(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&u<Oa(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),c?Ji.scrollTo(t.skipX?d:t.x,t.skipY?u:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(u=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=u+1,i.scrollLeft=d+1,i.scrollTop=u,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,uc&&uc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ba.max=Oa,Ba.getOffset=dg,Ba.buildGetter=Fa,ug()&&bn.registerPlugin(Ba);/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Oh="162",hS=0,gg=1,fS=2,_g=1,dS=2,Qi=3,Ir=0,Fn=1,er=2,tr=0,fo=1,Fh=2,vg=3,xg=4,pS=5,Ms=100,mS=101,gS=102,yg=103,Sg=104,_S=200,vS=201,xS=202,yS=203,Bh=204,kh=205,SS=206,MS=207,ES=208,TS=209,bS=210,wS=211,AS=212,CS=213,RS=214,PS=0,LS=1,DS=2,hc=3,IS=4,NS=5,US=6,OS=7,Mg=0,FS=1,BS=2,Nr=0,Eg=1,fc=2,Tg=3,bg=4,kS=5,wg=6,Ag=7,Cg=300,po=301,mo=302,zh=303,Hh=304,dc=306,Gh=1e3,pi=1001,Vh=1002,wn=1003,Rg=1004,ka=1005,Bn=1006,Wh=1007,Es=1008,Ur=1009,zS=1010,HS=1011,Xh=1012,Pg=1013,Or=1014,nr=1015,ir=1016,Lg=1017,Dg=1018,Ts=1020,GS=1021,mi=1023,VS=1024,WS=1025,bs=1026,go=1027,XS=1028,Ig=1029,YS=1030,Ng=1031,Ug=1033,Yh=33776,qh=33777,$h=33778,Kh=33779,Og=35840,Fg=35841,Bg=35842,kg=35843,zg=36196,Hg=37492,Gg=37496,Vg=37808,Wg=37809,Xg=37810,Yg=37811,qg=37812,$g=37813,Kg=37814,Zg=37815,jg=37816,Jg=37817,Qg=37818,e_=37819,t_=37820,n_=37821,Zh=36492,i_=36494,r_=36495,qS=36283,s_=36284,o_=36285,a_=36286,$S=3200,KS=3201,ZS=0,jS=1,Fr="",Fi="srgb",Br="srgb-linear",jh="display-p3",pc="display-p3-linear",mc="linear",Et="srgb",gc="rec709",_c="p3",_o=7680,l_=519,JS=512,QS=513,eM=514,c_=515,tM=516,nM=517,iM=518,rM=519,u_=35044,h_="300 es",Jh=1035,rr=2e3,vc=2001;class vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,Qh=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function sM(s,e){return(s%e+e)%e}function ef(s,e,t){return(1-t)*s+t*e}function f_(s){return(s&s-1)===0&&s!==0}function tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],S=i[7],T=i[2],b=i[5],E=i[8];return r[0]=o*_+a*y+l*T,r[3]=o*p+a*v+l*b,r[6]=o*m+a*S+l*E,r[1]=c*_+h*y+f*T,r[4]=c*p+h*v+f*b,r[7]=c*m+h*S+f*E,r[2]=d*_+u*y+g*T,r[5]=d*p+u*v+g*b,r[8]=d*m+u*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new et;function d_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oM(){const s=yc("canvas");return s.style.display="block",s}const p_={};function aM(s){s in p_||(p_[s]=!0,console.warn(s))}const m_=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),g_=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sc={[Br]:{transfer:mc,primaries:gc,toReference:s=>s,fromReference:s=>s},[Fi]:{transfer:Et,primaries:gc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[pc]:{transfer:mc,primaries:_c,toReference:s=>s.applyMatrix3(g_),fromReference:s=>s.applyMatrix3(m_)},[jh]:{transfer:Et,primaries:_c,toReference:s=>s.convertSRGBToLinear().applyMatrix3(g_),fromReference:s=>s.applyMatrix3(m_).convertLinearToSRGB()}},lM=new Set([Br,pc]),gt={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!lM.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Sc[e].toReference,i=Sc[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Sc[s].primaries},getTransfer:function(s){return s===Fr?mc:Sc[s].transfer}};function yo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rf(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let So;class __{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{So===void 0&&(So=yc("canvas")),So.width=e.width,So.height=e.height;const n=So.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=So}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=yo(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yo(t[n]/255)*255):t[n]=yo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sf(i[o].image)):r.push(sf(i[o]))}else r=sf(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sf(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?__.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class zn extends vo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=pi,i=pi,r=Bn,o=Es,a=mi,l=Ur,c=zn.DEFAULT_ANISOTROPY,h=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=xo(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null,zn.DEFAULT_MAPPING=Cg,zn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(u+1)/2,T=(m+1)/2,b=(h+d)/4,E=(f+_)/4,R=(g+p)/4;return v>S&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):S>T?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=E/r,i=R/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hM extends vo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new v_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends hM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class x_ extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fM extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a;const m=l*d+c*u+h*g+f*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*y);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const S=a*y;if(l=l*p+d*S,c=c*p+u*S,h=h*p+g*S,f=f*p+_*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new F,y_=new Ha;class Ga{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Ec.subVectors(this.max,Va),Mo.subVectors(e.a,Va),Eo.subVectors(e.b,Va),To.subVectors(e.c,Va),kr.subVectors(Eo,Mo),zr.subVectors(To,Eo),ws.subVectors(Mo,To);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-ws.z,ws.y,kr.z,0,-kr.x,zr.z,0,-zr.x,ws.z,0,-ws.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-ws.y,ws.x,0];return!af(t,Mo,Eo,To,Ec)||(t=[1,0,0,0,1,0,0,0,1],!af(t,Mo,Eo,To,Ec))?!1:(Tc.crossVectors(kr,zr),t=[Tc.x,Tc.y,Tc.z],af(t,Mo,Eo,To,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sr=[new F,new F,new F,new F,new F,new F,new F,new F],_i=new F,Mc=new Ga,Mo=new F,Eo=new F,To=new F,kr=new F,zr=new F,ws=new F,Va=new F,Ec=new F,Tc=new F,As=new F;function af(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){As.fromArray(s,r);const a=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const dM=new Ga,Wa=new F,lf=new F;class bc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dM.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(lf)),this.expandByPoint(Wa.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new F,cf=new F,wc=new F,Hr=new F,uf=new F,Ac=new F,hf=new F;class ff{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cf.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(cf);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wc),a=Hr.dot(this.direction),l=-Hr.dot(wc),c=Hr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cf).addScaledVector(wc,d),u}intersectSphere(e,t){or.subVectors(e.center,this.origin);const n=or.dot(this.direction),i=or.dot(or)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,r){uf.subVectors(t,e),Ac.subVectors(n,e),hf.crossVectors(uf,Ac);let o=this.direction.dot(hf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=a*this.direction.dot(Ac.crossVectors(Hr,Ac));if(l<0)return null;const c=a*this.direction.dot(uf.cross(Hr));if(c<0||l+c>o)return null;const h=-a*Hr.dot(hf);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p)}set(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bo.setFromMatrixColumn(e,0).length(),r=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Gr.crossVectors(n,jn),Gr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Gr.crossVectors(n,jn)),Gr.normalize(),Cc.crossVectors(jn,Gr),i[0]=Gr.x,i[4]=Cc.x,i[8]=jn.x,i[1]=Gr.y,i[5]=Cc.y,i[9]=jn.y,i[2]=Gr.z,i[6]=Cc.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],T=n[15],b=i[0],E=i[4],R=i[8],N=i[12],x=i[1],A=i[5],X=i[9],H=i[13],D=i[2],B=i[6],V=i[10],Y=i[14],K=i[3],ne=i[7],P=i[11],re=i[15];return r[0]=o*b+a*x+l*D+c*K,r[4]=o*E+a*A+l*B+c*ne,r[8]=o*R+a*X+l*V+c*P,r[12]=o*N+a*H+l*Y+c*re,r[1]=h*b+f*x+d*D+u*K,r[5]=h*E+f*A+d*B+u*ne,r[9]=h*R+f*X+d*V+u*P,r[13]=h*N+f*H+d*Y+u*re,r[2]=g*b+_*x+p*D+m*K,r[6]=g*E+_*A+p*B+m*ne,r[10]=g*R+_*X+p*V+m*P,r[14]=g*N+_*H+p*Y+m*re,r[3]=y*b+v*x+S*D+T*K,r[7]=y*E+v*A+S*B+T*ne,r[11]=y*R+v*X+S*V+T*P,r[15]=y*N+v*H+S*Y+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+r*o*d-i*o*u+i*c*h-r*l*h)+p*(+t*c*f-t*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,v=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,S=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,T=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,b=t*y+n*v+i*S+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=y*E,e[1]=(_*d*r-f*p*r-_*i*u+n*p*u+f*i*m-n*d*m)*E,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*u-n*l*u)*E,e[4]=v*E,e[5]=(h*p*r-g*d*r+g*i*u-t*p*u-h*i*m+t*d*m)*E,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*u+t*l*u)*E,e[8]=S*E,e[9]=(g*f*r-h*_*r-g*n*u+t*_*u+h*n*m-t*f*m)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*u-t*a*u)*E,e[12]=T*E,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*p+t*f*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,g=r*f,_=o*h,p=o*f,m=a*f,y=l*c,v=l*h,S=l*f,T=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*T,i[1]=(u+S)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(u-S)*b,i[5]=(1-(d+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*E,i[9]=(p-y)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bo.set(i[0],i[1],i[2]).length();const o=bo.set(i[4],i[5],i[6]).length(),a=bo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/r,h=1/o,f=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=rr){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===rr)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vc)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=rr){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-r),d=(t+e)*c,u=(n+i)*h;let g,_;if(a===rr)g=(o+r)*f,_=-2*f;else if(a===vc)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bo=new F,vi=new Rt,pM=new F(0,0,0),mM=new F(1,1,1),Gr=new F,Cc=new F,jn=new F,S_=new Rt,M_=new Ha;class ar{constructor(e=0,t=0,n=0,i=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return S_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return M_.setFromEuler(this),this.setFromQuaternion(M_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gM=0;const T_=new F,wo=new Ha,lr=new Rt,Rc=new F,Xa=new F,_M=new F,vM=new Ha,b_=new F(1,0,0),w_=new F(0,1,0),A_=new F(0,0,1),xM={type:"added"},yM={type:"removed"},df={type:"childadded",child:null},pf={type:"childremoved",child:null};class An extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new F,t=new ar,n=new Ha,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new et}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(w_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,t){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(w_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rc.copy(e):Rc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Xa,Rc,this.up):lr.lookAt(Rc,Xa,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(lr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xM),df.child=e,this.dispatchEvent(df),df.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yM),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}An.DEFAULT_UP=new F(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new F,cr=new F,mf=new F,ur=new F,Ao=new F,Co=new F,C_=new F,gf=new F,_f=new F,vf=new F;class yi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),cr.subVectors(n,t),mf.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(cr),l=xi.dot(mf),c=cr.dot(cr),h=cr.dot(mf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),cr.subVectors(e,t),xi.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),xi.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ao.subVectors(i,n),Co.subVectors(r,n),gf.subVectors(e,n);const l=Ao.dot(gf),c=Co.dot(gf);if(l<=0&&c<=0)return t.copy(n);_f.subVectors(e,i);const h=Ao.dot(_f),f=Co.dot(_f);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ao,o);vf.subVectors(e,r);const u=Ao.dot(vf),g=Co.dot(vf);if(g>=0&&u<=g)return t.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Co,a);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return C_.subVectors(r,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(C_,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=sM(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xf(o,r,e+1/3),this.g=xf(o,r,e),this.b=xf(o,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Fi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fi){const n=R_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=rf(e.r),this.g=rf(e.g),this.b=rf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return gt.fromWorkingColorSpace(dn.copy(this),e),Math.round(fn(dn.r*255,0,255))*65536+Math.round(fn(dn.g*255,0,255))*256+Math.round(fn(dn.b*255,0,255))}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Fi){gt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Fi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Pc);const n=ef(Vr.h,Pc.h,t),i=ef(Vr.s,Pc.s,t),r=ef(Vr.l,Pc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new pt;pt.NAMES=R_;let SM=0;class Ya extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=fo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bh&&(n.blendSrc=this.blendSrc),this.blendDst!==kh&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qa extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new F,Lc=new Pe;class Bi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=u_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return aM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=za(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u_&&(e.usage=this.usage),e}}class P_ extends Bi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class L_ extends Bi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Bi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let MM=0;const ai=new Rt,yf=new An,Ro=new F,Jn=new Ga,$a=new Ga,nn=new F;class Hn extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?L_:P_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Jn.min,$a.min),Jn.expandByPoint(nn),nn.addVectors(Jn.max,$a.max),Jn.expandByPoint(nn)):(Jn.expandByPoint($a.min),Jn.expandByPoint($a.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),nn.add(Ro)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const c=new F,h=new F,f=new F,d=new Pe,u=new Pe,g=new Pe,_=new F,p=new F;function m(R,N,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),u.fromBufferAttribute(r,N),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const A=1/(u.x*g.y-g.x*u.y);!isFinite(A)||(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(A),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(A),a[R].add(_),a[N].add(_),a[x].add(_),l[R].add(p),l[N].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,N=y.length;R<N;++R){const x=y[R],A=x.start,X=x.count;for(let H=A,D=A+X;H<D;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new F,S=new F,T=new F,b=new F;function E(R){T.fromBufferAttribute(i,R),b.copy(T);const N=a[R];v.copy(N),v.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(b,N);const A=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,A)}for(let R=0,N=y.length;R<N;++R){const x=y[R],A=x.start,X=x.count;for(let H=A,D=A+X;H<D;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new Bi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new Rt,Cs=new ff,Dc=new bc,I_=new F,Po=new F,Lo=new F,Do=new F,Sf=new F,Ic=new F,Nc=new Pe,Uc=new Pe,Oc=new Pe,N_=new F,U_=new F,O_=new F,Fc=new F,Bc=new F;class li extends An{constructor(e=new Hn,t=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ic.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(Sf.fromBufferAttribute(f,e),o?Ic.addScaledVector(Sf,h):Ic.addScaledVector(Sf.sub(t),h))}t.add(Ic)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Dc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Dc,I_)===null||Cs.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(D_.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(D_),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,T=v;S<T;S+=3){const b=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);i=kc(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=kc(this,o,e,n,c,h,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,T=v;S<T;S+=3){const b=S,E=S+1,R=S+2;i=kc(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,S=p+2;i=kc(this,o,e,n,c,h,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function EM(s,e,t,n,i,r,o,a){let l;if(e.side===Fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ir,a),l===null)return null;Bc.copy(a),Bc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bc);return c<t.near||c>t.far?null:{distance:c,point:Bc.clone(),object:s}}function kc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Po),s.getVertexPosition(l,Lo),s.getVertexPosition(c,Do);const h=EM(s,e,t,n,Po,Lo,Do,Fc);if(h){i&&(Nc.fromBufferAttribute(i,a),Uc.fromBufferAttribute(i,l),Oc.fromBufferAttribute(i,c),h.uv=yi.getInterpolation(Fc,Po,Lo,Do,Nc,Uc,Oc,new Pe)),r&&(Nc.fromBufferAttribute(r,a),Uc.fromBufferAttribute(r,l),Oc.fromBufferAttribute(r,c),h.uv1=yi.getInterpolation(Fc,Po,Lo,Do,Nc,Uc,Oc,new Pe)),o&&(N_.fromBufferAttribute(o,a),U_.fromBufferAttribute(o,l),O_.fromBufferAttribute(o,c),h.normal=yi.getInterpolation(Fc,Po,Lo,Do,N_,U_,O_,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};yi.getNormal(Po,Lo,Do,f.normal),h.face=f}return h}class Io extends Hn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(f,2));function g(_,p,m,y,v,S,T,b,E,R,N){const x=S/E,A=T/R,X=S/2,H=T/2,D=b/2,B=E+1,V=R+1;let Y=0,K=0;const ne=new F;for(let P=0;P<V;P++){const re=P*A-H;for(let ue=0;ue<B;ue++){const q=ue*x-X;ne[_]=q*y,ne[p]=re*v,ne[m]=D,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(ue/E),f.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let re=0;re<E;re++){const ue=d+re+B*P,q=d+re+B*(P+1),L=d+(re+1)+B*(P+1),G=d+(re+1)+B*P;l.push(ue,q,G),l.push(q,L,G),K+=6}a.addGroup(u,K,N),u+=K,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=No(s[t]);for(const i in n)e[i]=n[i]}return e}function TM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function F_(s){return s.getRenderTarget()===null?s.outputColorSpace:gt.workingColorSpace}const Ka={clone:No,merge:Cn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=TM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class B_ extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new F,k_=new Pe,z_=new Pe;class Gn extends B_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,k_,z_),t.subVectors(z_,k_)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Uo=-90,Oo=1;class AM extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gn(Uo,Oo,e,t);i.layers=this.layers,this.add(i);const r=new Gn(Uo,Oo,e,t);r.layers=this.layers,this.add(r);const o=new Gn(Uo,Oo,e,t);o.layers=this.layers,this.add(o);const a=new Gn(Uo,Oo,e,t);a.layers=this.layers,this.add(a);const l=new Gn(Uo,Oo,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Uo,Oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class H_ extends zn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new H_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Io(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:tr});r.uniforms.tEquirect.value=t;const o=new li(i,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=Bn),new AM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Mf=new F,RM=new F,PM=new et;class Xr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mf.subVectors(n,t).cross(RM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||PM.getNormalMatrix(e),i=this.coplanarPoint(Mf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new bc,zc=new F;class Ef{constructor(e=new Xr,t=new Xr,n=new Xr,i=new Xr,r=new Xr,o=new Xr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,p-u,S-m).normalize(),n[1].setComponents(l+r,d+c,p+u,S+m).normalize(),n[2].setComponents(l+o,d+h,p+g,S+y).normalize(),n[3].setComponents(l-o,d-h,p-g,S-y).normalize(),n[4].setComponents(l-a,d-f,p-_,S-v).normalize(),t===rr)n[5].setComponents(l+a,d+f,p+_,S+v).normalize();else if(t===vc)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zc.x=i.normal.x>0?e.max.x:e.min.x,zc.y=i.normal.y>0?e.max.y:e.min.y,zc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function LM(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,d=c.usage,u=f.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){const d=h.array,u=h._updateRange,g=h.updateRanges;if(s.bindBuffer(f,c),u.count===-1&&g.length===0&&s.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):s.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class Hc extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let v=0;v<c;v++){const S=v*f-r;g.push(S,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,S=y+c*(m+1),T=y+1+c*(m+1),b=y+1+c*m;u.push(v,S,b),u.push(S,T,b)}this.setIndex(u),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",cE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,BE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_T=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ST=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:DM,alphahash_pars_fragment:IM,alphamap_fragment:NM,alphamap_pars_fragment:UM,alphatest_fragment:OM,alphatest_pars_fragment:FM,aomap_fragment:BM,aomap_pars_fragment:kM,batching_pars_vertex:zM,batching_vertex:HM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:WM,iridescence_fragment:XM,bumpmap_pars_fragment:YM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:KM,clipping_planes_vertex:ZM,color_fragment:jM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:eE,common:tE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:rE,displacementmap_vertex:sE,emissivemap_fragment:oE,emissivemap_pars_fragment:aE,colorspace_fragment:lE,colorspace_pars_fragment:cE,envmap_fragment:uE,envmap_common_pars_fragment:hE,envmap_pars_fragment:fE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:bE,envmap_vertex:pE,fog_vertex:mE,fog_pars_vertex:gE,fog_fragment:_E,fog_pars_fragment:vE,gradientmap_pars_fragment:xE,lightmap_fragment:yE,lightmap_pars_fragment:SE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:EE,lights_pars_begin:TE,lights_toon_fragment:wE,lights_toon_pars_fragment:AE,lights_phong_fragment:CE,lights_phong_pars_fragment:RE,lights_physical_fragment:PE,lights_physical_pars_fragment:LE,lights_fragment_begin:DE,lights_fragment_maps:IE,lights_fragment_end:NE,logdepthbuf_fragment:UE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:FE,logdepthbuf_vertex:BE,map_fragment:kE,map_pars_fragment:zE,map_particle_fragment:HE,map_particle_pars_fragment:GE,metalnessmap_fragment:VE,metalnessmap_pars_fragment:WE,morphinstance_vertex:XE,morphcolor_vertex:YE,morphnormal_vertex:qE,morphtarget_pars_vertex:$E,morphtarget_vertex:KE,normal_fragment_begin:ZE,normal_fragment_maps:jE,normal_pars_fragment:JE,normal_pars_vertex:QE,normal_vertex:eT,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:sT,opaque_fragment:oT,packing:aT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:hT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:_T,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:yT,skinnormal_vertex:ST,specularmap_fragment:MT,specularmap_pars_fragment:ET,tonemapping_fragment:TT,tonemapping_pars_fragment:bT,transmission_fragment:wT,transmission_pars_fragment:AT,uv_pars_fragment:CT,uv_pars_vertex:RT,uv_vertex:PT,worldpos_vertex:LT,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ce={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ki={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ki.physical={uniforms:Cn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Gc={r:0,b:0,g:0},Ps=new ar,DT=new Rt;function IT(s,e,t,n,i,r,o){const a=new pt(0);let l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===dc)?(h===void 0&&(h=new li(new Io(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:No(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ps.copy(m.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(Ps)),h.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,(f!==v||d!==v.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new li(new Hc(2,2),new Rn({name:"BackgroundMaterial",uniforms:No(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Gc,F_(s)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function NT(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function f(D,B,V,Y,K){let ne=!1;if(o){const P=_(Y,V,B);c!==P&&(c=P,u(c.object)),ne=m(D,Y,V,K),ne&&y(D,Y,V,K)}else{const P=B.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==P)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=P,ne=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,R(D,B,V,Y),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,V){const Y=V.wireframe===!0;let K=a[D.id];K===void 0&&(K={},a[D.id]=K);let ne=K[B.id];ne===void 0&&(ne={},K[B.id]=ne);let P=ne[Y];return P===void 0&&(P=p(d()),ne[Y]=P),P}function p(D){const B=[],V=[],Y=[];for(let K=0;K<i;K++)B[K]=0,V[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Y,object:D,attributes:{},index:null}}function m(D,B,V,Y){const K=c.attributes,ne=B.attributes;let P=0;const re=V.getAttributes();for(const ue in re)if(re[ue].location>=0){const L=K[ue];let G=ne[ue];if(G===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),L===void 0||L.attribute!==G||G&&L.data!==G.data)return!0;P++}return c.attributesNum!==P||c.index!==Y}function y(D,B,V,Y){const K={},ne=B.attributes;let P=0;const re=V.getAttributes();for(const ue in re)if(re[ue].location>=0){let L=ne[ue];L===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const G={};G.attribute=L,L&&L.data&&(G.data=L.data),K[ue]=G,P++}c.attributes=K,c.attributesNum=P,c.index=Y}function v(){const D=c.newAttributes;for(let B=0,V=D.length;B<V;B++)D[B]=0}function S(D){T(D,0)}function T(D,B){const V=c.newAttributes,Y=c.enabledAttributes,K=c.attributeDivisors;V[D]=1,Y[D]===0&&(s.enableVertexAttribArray(D),Y[D]=1),K[D]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),K[D]=B)}function b(){const D=c.newAttributes,B=c.enabledAttributes;for(let V=0,Y=B.length;V<Y;V++)B[V]!==D[V]&&(s.disableVertexAttribArray(V),B[V]=0)}function E(D,B,V,Y,K,ne,P){P===!0?s.vertexAttribIPointer(D,B,V,K,ne):s.vertexAttribPointer(D,B,V,Y,K,ne)}function R(D,B,V,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const K=Y.attributes,ne=V.getAttributes(),P=B.defaultAttributeValues;for(const re in ne){const ue=ne[re];if(ue.location>=0){let q=K[re];if(q===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const L=q.normalized,G=q.itemSize,te=t.get(q);if(te===void 0)continue;const fe=te.buffer,le=te.type,me=te.bytesPerElement,Re=n.isWebGL2===!0&&(le===s.INT||le===s.UNSIGNED_INT||q.gpuType===Pg);if(q.isInterleavedBufferAttribute){const ve=q.data,k=ve.stride,Ae=q.offset;if(ve.isInstancedInterleavedBuffer){for(let ge=0;ge<ue.locationSize;ge++)T(ue.location+ge,ve.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<ue.locationSize;ge++)S(ue.location+ge);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ge=0;ge<ue.locationSize;ge++)E(ue.location+ge,G/ue.locationSize,le,L,k*me,(Ae+G/ue.locationSize*ge)*me,Re)}else{if(q.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)T(ue.location+ve,q.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<ue.locationSize;ve++)S(ue.location+ve);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ve=0;ve<ue.locationSize;ve++)E(ue.location+ve,G/ue.locationSize,le,L,G*me,G/ue.locationSize*ve*me,Re)}}else if(P!==void 0){const L=P[re];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(ue.location,L);break;case 3:s.vertexAttrib3fv(ue.location,L);break;case 4:s.vertexAttrib4fv(ue.location,L);break;default:s.vertexAttrib1fv(ue.location,L)}}}}b()}function N(){X();for(const D in a){const B=a[D];for(const V in B){const Y=B[V];for(const K in Y)g(Y[K].object),delete Y[K];delete B[V]}delete a[D]}}function x(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const V in B){const Y=B[V];for(const K in Y)g(Y[K].object),delete Y[K];delete B[V]}delete a[D.id]}function A(D){for(const B in a){const V=a[B];if(V[D.id]===void 0)continue;const Y=V[D.id];for(const K in Y)g(Y[K].object),delete Y[K];delete V[D.id]}}function X(){H(),h=!0,c!==l&&(c=l,u(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:H,dispose:N,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function UT(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,f){s.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function OT(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),T=v&&S,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:b}}function FT(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Xr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let S=m.clippingState||null;l.value=S,S=h(g,d,v,u);for(let T=0;T!==v;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=u+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=u;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function BT(s){let e=new WeakMap;function t(o,a){return a===zh?o.mapping=po:a===Hh&&(o.mapping=mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new CM(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class V_ extends B_{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fo=4,W_=[.125,.215,.35,.446,.526,.582],Ls=20,Tf=new V_,X_=new pt;let bf=null,wf=0,Af=0;const Ds=(1+Math.sqrt(5))/2,Bo=1/Ds,Y_=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ds,Bo),new F(0,Ds,-Bo),new F(Bo,0,Ds),new F(-Bo,0,Ds),new F(Ds,Bo,0),new F(-Ds,Bo,0)];class q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,wf,Af),e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ir,format:mi,colorSpace:Br,depthBuffer:!1},i=$_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kT(r)),this._blurMaterial=zT(r,e,t)}return i}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Tf)}_sceneToCubeUV(e,t,n,i){const a=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(X_),h.toneMapping=Nr,h.autoClear=!1;const u=new qa({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new li(new Io,u);let _=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,_=!0):(u.color.copy(X_),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Vc(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===po||e.mapping===mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Y_[(i-1)%Y_.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new li(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ls-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ls;p>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);const m=[];let y=0;for(let E=0;E<Ls;++E){const R=E/_,N=Math.exp(-R*R/2);m.push(N),E===0?y+=N:E<p&&(y+=2*N)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],T=3*S*(i>v-Fo?i-v+Fo:0),b=4*(this._cubeSize-S);Vc(t,T,b,3*S,2*S),l.setRenderTarget(t),l.render(f,Tf)}}function kT(s){const e=[],t=[],n=[];let i=s;const r=s-Fo+1+W_.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Fo?l=W_[o-s+Fo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*u),v=new Float32Array(p*g*u),S=new Float32Array(m*g*u);for(let b=0;b<u;b++){const E=b%3*2/3-1,R=b>2?0:-1,N=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];y.set(N,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];S.set(x,m*g*b)}const T=new Hn;T.setAttribute("position",new Bi(y,_)),T.setAttribute("uv",new Bi(v,p)),T.setAttribute("faceIndex",new Bi(S,m)),e.push(T),i>Fo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $_(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zT(s,e,t){const n=new Float32Array(Ls),i=new F(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function K_(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Z_(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HT(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zh||l===Hh,h=l===po||l===mo;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new q_(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new q_(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function GT(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VT(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let v=0,S=y.length;v<S;v+=3){const T=y[v+0],b=y[v+1],E=y[v+2];d.push(T,b,b,E,E,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const T=v+0,b=v+1,E=v+2;d.push(T,b,b,E,E,T)}}else return;const p=new(d_(d)?L_:P_)(d,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function WT(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){s.drawElements(r,g,a,u*l),t.update(g,r,1)}function f(u,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,u*l,_),t.update(g,r,_)}function d(u,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(u[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,u,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function XT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function YT(s,e){return s[0]-e[0]}function qT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function $T(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let X=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",X)};_!==void 0&&_.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),y===!0&&(b=3);let E=h.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*R*4*g),x=new x_(N,E,R,g);x.type=nr,x.needsUpdate=!0;const A=b*4;for(let H=0;H<g;H++){const D=v[H],B=S[H],V=T[H],Y=E*R*4*H;for(let K=0;K<D.count;K++){const ne=K*A;p===!0&&(o.fromBufferAttribute(D,K),N[Y+ne+0]=o.x,N[Y+ne+1]=o.y,N[Y+ne+2]=o.z,N[Y+ne+3]=0),m===!0&&(o.fromBufferAttribute(B,K),N[Y+ne+4]=o.x,N[Y+ne+5]=o.y,N[Y+ne+6]=o.z,N[Y+ne+7]=0),y===!0&&(o.fromBufferAttribute(V,K),N[Y+ne+8]=o.x,N[Y+ne+9]=o.y,N[Y+ne+10]=o.z,N[Y+ne+11]=V.itemSize===4?o.w:1)}}_={count:g,texture:x,size:new Pe(E,R)},r.set(h,_),h.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let p=0;for(let y=0;y<d.length;y++)p+=d[y];const m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",m),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const u=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){const S=g[v];S[0]=v,S[1]=d[v]}g.sort(qT);for(let v=0;v<8;v++)v<u&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(YT);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const S=a[v],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[T]&&h.setAttribute("morphTarget"+v,_[T]),p&&h.getAttribute("morphNormal"+v)!==p[T]&&h.setAttribute("morphNormal"+v,p[T]),i[v]=b,m+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const y=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function KT(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class j_ extends zn{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:bs,h!==bs&&h!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Or),n===void 0&&h===go&&(n=Ts),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const J_=new zn,Q_=new j_(1,1);Q_.compareFunction=c_;const e0=new x_,t0=new fM,n0=new H_,i0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function ko(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=i0[i];if(r===void 0&&(r=new Float32Array(i),i0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wc(s,e){let t=r0[e];t===void 0&&(t=new Int32Array(e),r0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ZT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function JT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function QT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function eb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;a0.set(n),s.uniformMatrix2fv(this.addr,!1,a0),$t(t,n)}}function tb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;o0.set(n),s.uniformMatrix3fv(this.addr,!1,o0),$t(t,n)}}function nb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;s0.set(n),s.uniformMatrix4fv(this.addr,!1,s0),$t(t,n)}}function ib(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function ab(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function ub(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function hb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Q_:J_;t.setTexture2D(e||r,i)}function fb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||t0,i)}function db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||n0,i)}function pb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||e0,i)}function mb(s){switch(s){case 5126:return ZT;case 35664:return jT;case 35665:return JT;case 35666:return QT;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(s,e){s.uniform1fv(this.addr,e)}function _b(s,e){const t=ko(e,this.size,2);s.uniform2fv(this.addr,t)}function vb(s,e){const t=ko(e,this.size,3);s.uniform3fv(this.addr,t)}function xb(s,e){const t=ko(e,this.size,4);s.uniform4fv(this.addr,t)}function yb(s,e){const t=ko(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sb(s,e){const t=ko(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mb(s,e){const t=ko(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Eb(s,e){s.uniform1iv(this.addr,e)}function Tb(s,e){s.uniform2iv(this.addr,e)}function bb(s,e){s.uniform3iv(this.addr,e)}function wb(s,e){s.uniform4iv(this.addr,e)}function Ab(s,e){s.uniform1uiv(this.addr,e)}function Cb(s,e){s.uniform2uiv(this.addr,e)}function Rb(s,e){s.uniform3uiv(this.addr,e)}function Pb(s,e){s.uniform4uiv(this.addr,e)}function Lb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||J_,r[o])}function Db(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||t0,r[o])}function Ib(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||n0,r[o])}function Nb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||e0,r[o])}function Ub(s){switch(s){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return wb;case 5125:return Ab;case 36294:return Cb;case 36295:return Rb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mb(t.type)}}class Fb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ub(t.type)}}class Bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function l0(s,e){s.seq.push(e),s.map[e.id]=e}function kb(s,e,t){const n=s.name,i=n.length;for(Rf.lastIndex=0;;){const r=Rf.exec(n),o=Rf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){l0(t,c===void 0?new Ob(a,s,e):new Fb(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Bb(a),l0(t,f)),t=f}}}class Xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);kb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function c0(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zb=37297;let Hb=0;function Gb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vb(s){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(s);let n;switch(e===t?n="":e===_c&&t===gc?n="LinearDisplayP3ToLinearSRGB":e===gc&&t===_c&&(n="LinearSRGBToLinearDisplayP3"),s){case Br:case pc:return[n,"LinearTransferOETF"];case Fi:case jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function u0(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Gb(s.getShaderSource(e),o)}else return i}function Wb(s,e){const t=Vb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xb(s,e){let t;switch(e){case Eg:t="Linear";break;case fc:t="Reinhard";break;case Tg:t="OptimizedCineon";break;case bg:t="ACESFilmic";break;case wg:t="AgX";break;case Ag:t="Neutral";break;case kS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yb(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function qb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function $b(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function zo(s){return s!==""}function h0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(s){return s.replace(Zb,Jb)}const jb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jb(s,e){let t=tt[e];if(t===void 0){const n=jb.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(s){return s.replace(Qb,ew)}function ew(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function p0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function nw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function rw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mg:e="ENVMAP_BLENDING_MULTIPLY";break;case FS:e="ENVMAP_BLENDING_MIX";break;case BS:e="ENVMAP_BLENDING_ADD";break}return e}function sw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ow(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tw(t),c=nw(t),h=iw(t),f=rw(t),d=sw(t),u=t.isWebGL2?"":Yb(t),g=qb(t),_=$b(r),p=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`),y=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zo).join(`
`),y.length>0&&(y+=`
`)):(m=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),y=[u,p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?tt.tonemapping_pars_fragment:"",t.toneMapping!==Nr?Xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Wb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=Pf(o),o=h0(o,t),o=f0(o,t),a=Pf(a),a=h0(a,t),a=f0(a,t),o=d0(o),a=d0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+m+o,T=v+y+a,b=c0(i,i.VERTEX_SHADER,S),E=c0(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(X){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(E).trim();let V=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,E);else{const K=u0(i,b,"vertex"),ne=u0(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+H+`
`+K+`
`+ne)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||B==="")&&(Y=!1);Y&&(X.diagnostics={runnable:V,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:y}})}i.deleteShader(b),i.deleteShader(E),N=new Xc(i,p),x=Kb(i,p)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,zb)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let aw=0;class lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cw(e),t.set(e,n)),n}}class cw{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}}function uw(s,e,t,n,i,r,o){const a=new E_,l=new lw,c=new Set,h=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,X,H,D){const B=H.fog,V=D.geometry,Y=x.isMeshStandardMaterial?H.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),ne=!!K&&K.mapping===dc?K.image.height:null,P=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=re!==void 0?re.length:0;let q=0;V.morphAttributes.position!==void 0&&(q=1),V.morphAttributes.normal!==void 0&&(q=2),V.morphAttributes.color!==void 0&&(q=3);let L,G,te,fe;if(P){const ae=ki[P];L=ae.vertexShader,G=ae.fragmentShader}else L=x.vertexShader,G=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const le=s.getRenderTarget(),me=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,ve=!!x.map,k=!!x.matcap,Ae=!!K,ge=!!x.aoMap,Ee=!!x.lightMap,Ie=!!x.bumpMap,z=!!x.normalMap,De=!!x.displacementMap,Xe=!!x.emissiveMap,st=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,ie=x.clearcoat>0,ce=x.iridescence>0,de=x.sheen>0,he=x.transmission>0,Ne=M&&!!x.anisotropyMap,He=ie&&!!x.clearcoatMap,xe=ie&&!!x.clearcoatNormalMap,be=ie&&!!x.clearcoatRoughnessMap,Ke=ce&&!!x.iridescenceMap,_e=ce&&!!x.iridescenceThicknessMap,_t=de&&!!x.sheenColorMap,$e=de&&!!x.sheenRoughnessMap,ke=!!x.specularMap,Ue=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Ze=he&&!!x.transmissionMap,Te=he&&!!x.thicknessMap,ot=!!x.gradientMap,U=!!x.alphaMap,Me=x.alphaTest>0,J=!!x.alphaHash,Se=!!x.extensions;let se=Nr;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(se=s.toneMapping);const I={isWebGL2:f,shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:L,fragmentShader:G,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Re,instancing:me,instancingColor:me&&D.instanceColor!==null,instancingMorph:me&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Br,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:k,envMap:Ae,envMapMode:Ae&&K.mapping,envMapCubeUVHeight:ne,aoMap:ge,lightMap:Ee,bumpMap:Ie,normalMap:z,displacementMap:u&&De,emissiveMap:Xe,normalMapObjectSpace:z&&x.normalMapType===jS,normalMapTangentSpace:z&&x.normalMapType===ZS,metalnessMap:st,roughnessMap:C,anisotropy:M,anisotropyMap:Ne,clearcoat:ie,clearcoatMap:He,clearcoatNormalMap:xe,clearcoatRoughnessMap:be,iridescence:ce,iridescenceMap:Ke,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:_t,sheenRoughnessMap:$e,specularMap:ke,specularColorMap:Ue,specularIntensityMap:Fe,transmission:he,transmissionMap:Ze,thicknessMap:Te,gradientMap:ot,opaque:x.transparent===!1&&x.blending===fo&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:Me,alphaHash:J,combine:x.combine,mapUv:ve&&p(x.map.channel),aoMapUv:ge&&p(x.aoMap.channel),lightMapUv:Ee&&p(x.lightMap.channel),bumpMapUv:Ie&&p(x.bumpMap.channel),normalMapUv:z&&p(x.normalMap.channel),displacementMapUv:De&&p(x.displacementMap.channel),emissiveMapUv:Xe&&p(x.emissiveMap.channel),metalnessMapUv:st&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Ne&&p(x.anisotropyMap.channel),clearcoatMapUv:He&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(x.sheenRoughnessMap.channel),specularMapUv:ke&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:Fe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ze&&p(x.transmissionMap.channel),thicknessMapUv:Te&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(z||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ve||U),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===er,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return I.vertexUv1s=c.has(1),I.vertexUv2s=c.has(2),I.vertexUv3s=c.has(3),c.clear(),I}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)A.push(X),A.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(v(A,x),S(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const A=_[x.type];let X;if(A){const H=ki[A];X=Ka.clone(H.uniforms)}else X=x.uniforms;return X}function b(x,A){let X;for(let H=0,D=h.length;H<D;H++){const B=h[H];if(B.cacheKey===A){X=B,++X.usedTimes;break}}return X===void 0&&(X=new ow(s,A,x,r),h.push(X)),X}function E(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:N}}function hw(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g0(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},s[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):t.push(m)}function l(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||fw),n.length>1&&n.sort(d||m0),i.length>1&&i.sort(d||m0)}function h(){for(let f=e,d=s.length;f<d;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function dw(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new g0,s.set(n,[o])):i>=r.length?(o=new g0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new pt};break;case"SpotLight":t={position:new F,direction:new F,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function mw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gw=0;function _w(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vw(s,e){const t=new pw,n=mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const r=new F,o=new Rt,a=new Rt;function l(h,f){let d=0,u=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,S=0,T=0,b=0,E=0,R=0,N=0;h.sort(_w);const x=f===!0?Math.PI:1;for(let X=0,H=h.length;X<H;X++){const D=h[X],B=D.color,V=D.intensity,Y=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*V*x,u+=B.g*V*x,g+=B.b*V*x;else if(D.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(D.sh.coefficients[ne],V);N++}else if(D.isDirectionalLight){const ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const P=D.shadow,re=n.get(D);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=D.shadow.matrix,S++}i.directional[_]=ne,_++}else if(D.isSpotLight){const ne=t.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(B).multiplyScalar(V*x),ne.distance=Y,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,i.spot[m]=ne;const P=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,P.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[m]=P.matrix,D.castShadow){const re=n.get(D);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=K,b++}m++}else if(D.isRectAreaLight){const ne=t.get(D);ne.color.copy(B).multiplyScalar(V),ne.halfWidth.set(D.width*.5,0,0),ne.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=ne,y++}else if(D.isPointLight){const ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*x),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){const P=D.shadow,re=n.get(D);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,re.shadowCameraNear=P.camera.near,re.shadowCameraFar=P.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=ne,p++}else if(D.isHemisphereLight){const ne=t.get(D);ne.skyColor.copy(D.color).multiplyScalar(V*x),ne.groundColor.copy(D.groundColor).multiplyScalar(V*x),i.hemi[v]=ne,v++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==S||A.numPointShadows!==T||A.numSpotShadows!==b||A.numSpotMaps!==E||A.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=S,A.numPointShadows=T,A.numSpotShadows=b,A.numSpotMaps=E,A.numLightProbes=N,i.version=gw++)}function c(h,f){let d=0,u=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function _0(s,e){const t=new vw(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xw(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new _0(s,e),t.set(r,[l])):o>=a.length?(l=new _0(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yw extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sw extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tw(s,e,t){let n=new Ef;const i=new Pe,r=new Pe,o=new Ct,a=new yw({depthPacking:KS}),l=new Sw,c={},h=t.maxTextureSize,f={[Ir]:Fn,[Fn]:Ir,[er]:er},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new li(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let m=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const N=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),X=s.state;X.setBlending(tr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=m!==Qi&&this.type===Qi,D=m===Qi&&this.type!==Qi;for(let B=0,V=b.length;B<V;B++){const Y=b[B],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ne=K.getFrameExtents();if(i.multiply(ne),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,K.mapSize.y=r.y)),K.map===null||H===!0||D===!0){const re=this.type!==Qi?{minFilter:wn,magFilter:wn}:{};K.map!==null&&K.map.dispose(),K.map=new gi(i.x,i.y,re),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const P=K.getViewportCount();for(let re=0;re<P;re++){const ue=K.getViewport(re);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),X.viewport(o),K.updateMatrices(Y,re),n=K.getFrustum(),S(E,R,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Qi&&y(K,R),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(N,x,A)};function y(b,E){const R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,R,u,_,null)}function v(b,E,R,N){let x=null;const A=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=x.uuid,H=E.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let B=D[H];B===void 0&&(B=x.clone(),D[H]=B,E.addEventListener("dispose",T)),x=B}if(x.visible=E.visible,x.wireframe=E.wireframe,N===Qi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=s.properties.get(x);X.light=R}return x}function S(b,E,R,N,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Qi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const H=e.update(b),D=b.material;if(Array.isArray(D)){const B=H.groups;for(let V=0,Y=B.length;V<Y;V++){const K=B[V],ne=D[K.materialIndex];if(ne&&ne.visible){const P=v(b,ne,N,x);b.onBeforeShadow(s,b,E,R,H,P,K),s.renderBufferDirect(R,null,H,P,b,K),b.onAfterShadow(s,b,E,R,H,P,K)}}}else if(D.visible){const B=v(b,D,N,x);b.onBeforeShadow(s,b,E,R,H,B,null),s.renderBufferDirect(R,null,H,B,b,null),b.onAfterShadow(s,b,E,R,H,B,null)}}const X=b.children;for(let H=0,D=X.length;H<D;H++)S(X[H],E,R,N,x)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const N=c[R],x=b.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}function bw(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const Me=new Ct;let J=null;const Se=new Ct(0,0,0,0);return{setMask:function(se){J!==se&&!U&&(s.colorMask(se,se,se,se),J=se)},setLocked:function(se){U=se},setClear:function(se,I,ae,O,ee){ee===!0&&(se*=O,I*=O,ae*=O),Me.set(se,I,ae,O),Se.equals(Me)===!1&&(s.clearColor(se,I,ae,O),Se.copy(Me))},reset:function(){U=!1,J=null,Se.set(-1,0,0,0)}}}function r(){let U=!1,Me=null,J=null,Se=null;return{setTest:function(se){se?me(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(se){Me!==se&&!U&&(s.depthMask(se),Me=se)},setFunc:function(se){if(J!==se){switch(se){case PS:s.depthFunc(s.NEVER);break;case LS:s.depthFunc(s.ALWAYS);break;case DS:s.depthFunc(s.LESS);break;case hc:s.depthFunc(s.LEQUAL);break;case IS:s.depthFunc(s.EQUAL);break;case NS:s.depthFunc(s.GEQUAL);break;case US:s.depthFunc(s.GREATER);break;case OS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=se}},setLocked:function(se){U=se},setClear:function(se){Se!==se&&(s.clearDepth(se),Se=se)},reset:function(){U=!1,Me=null,J=null,Se=null}}}function o(){let U=!1,Me=null,J=null,Se=null,se=null,I=null,ae=null,O=null,ee=null;return{setTest:function(oe){U||(oe?me(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(oe){Me!==oe&&!U&&(s.stencilMask(oe),Me=oe)},setFunc:function(oe,j,ye){(J!==oe||Se!==j||se!==ye)&&(s.stencilFunc(oe,j,ye),J=oe,Se=j,se=ye)},setOp:function(oe,j,ye){(I!==oe||ae!==j||O!==ye)&&(s.stencilOp(oe,j,ye),I=oe,ae=j,O=ye)},setLocked:function(oe){U=oe},setClear:function(oe){ee!==oe&&(s.clearStencil(oe),ee=oe)},reset:function(){U=!1,Me=null,J=null,Se=null,se=null,I=null,ae=null,O=null,ee=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,T=null,b=null,E=null,R=null,N=new pt(0,0,0),x=0,A=!1,X=null,H=null,D=null,B=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const P=s.getParameter(s.VERSION);P.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(P)[1]),K=ne>=1):P.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),K=ne>=2);let re=null,ue={};const q=s.getParameter(s.SCISSOR_BOX),L=s.getParameter(s.VIEWPORT),G=new Ct().fromArray(q),te=new Ct().fromArray(L);function fe(U,Me,J,Se){const se=new Uint8Array(4),I=s.createTexture();s.bindTexture(U,I),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<J;ae++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(Me,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(Me+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return I}const le={};le[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(s.DEPTH_TEST),l.setFunc(hc),De(!1),Xe(gg),me(s.CULL_FACE),Ie(tr);function me(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function Re(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function ve(U,Me){return u[U]!==Me?(s.bindFramebuffer(U,Me),u[U]=Me,n&&(U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me)),!0):!1}function k(U,Me){let J=_,Se=!1;if(U){J=g.get(Me),J===void 0&&(J=[],g.set(Me,J));const se=U.textures;if(J.length!==se.length||J[0]!==s.COLOR_ATTACHMENT0){for(let I=0,ae=se.length;I<ae;I++)J[I]=s.COLOR_ATTACHMENT0+I;J.length=se.length,Se=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Se=!0);if(Se)if(t.isWebGL2)s.drawBuffers(J);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(U){return p!==U?(s.useProgram(U),p=U,!0):!1}const ge={[Ms]:s.FUNC_ADD,[mS]:s.FUNC_SUBTRACT,[gS]:s.FUNC_REVERSE_SUBTRACT};if(n)ge[yg]=s.MIN,ge[Sg]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[yg]=U.MIN_EXT,ge[Sg]=U.MAX_EXT)}const Ee={[_S]:s.ZERO,[vS]:s.ONE,[xS]:s.SRC_COLOR,[Bh]:s.SRC_ALPHA,[bS]:s.SRC_ALPHA_SATURATE,[ES]:s.DST_COLOR,[SS]:s.DST_ALPHA,[yS]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[TS]:s.ONE_MINUS_DST_COLOR,[MS]:s.ONE_MINUS_DST_ALPHA,[wS]:s.CONSTANT_COLOR,[AS]:s.ONE_MINUS_CONSTANT_COLOR,[CS]:s.CONSTANT_ALPHA,[RS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ie(U,Me,J,Se,se,I,ae,O,ee,oe){if(U===tr){m===!0&&(Re(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),U!==pS){if(U!==y||oe!==A){if((v!==Ms||b!==Ms)&&(s.blendEquation(s.FUNC_ADD),v=Ms,b=Ms),oe)switch(U){case fo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fh:s.blendFunc(s.ONE,s.ONE);break;case vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,E=null,R=null,N.set(0,0,0),x=0,y=U,A=oe}return}se=se||Me,I=I||J,ae=ae||Se,(Me!==v||se!==b)&&(s.blendEquationSeparate(ge[Me],ge[se]),v=Me,b=se),(J!==S||Se!==T||I!==E||ae!==R)&&(s.blendFuncSeparate(Ee[J],Ee[Se],Ee[I],Ee[ae]),S=J,T=Se,E=I,R=ae),(O.equals(N)===!1||ee!==x)&&(s.blendColor(O.r,O.g,O.b,ee),N.copy(O),x=ee),y=U,A=!1}function z(U,Me){U.side===er?Re(s.CULL_FACE):me(s.CULL_FACE);let J=U.side===Fn;Me&&(J=!J),De(J),U.blending===fo&&U.transparent===!1?Ie(tr):Ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Se=U.stencilWrite;c.setTest(Se),Se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){X!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),X=U)}function Xe(U){U!==hS?(me(s.CULL_FACE),U!==H&&(U===gg?s.cullFace(s.BACK):U===fS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),H=U}function st(U){U!==D&&(K&&s.lineWidth(U),D=U)}function C(U,Me,J){U?(me(s.POLYGON_OFFSET_FILL),(B!==Me||V!==J)&&(s.polygonOffset(Me,J),B=Me,V=J)):Re(s.POLYGON_OFFSET_FILL)}function M(U){U?me(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function ie(U){U===void 0&&(U=s.TEXTURE0+Y-1),re!==U&&(s.activeTexture(U),re=U)}function ce(U,Me,J){J===void 0&&(re===null?J=s.TEXTURE0+Y-1:J=re);let Se=ue[J];Se===void 0&&(Se={type:void 0,texture:void 0},ue[J]=Se),(Se.type!==U||Se.texture!==Me)&&(re!==J&&(s.activeTexture(J),re=J),s.bindTexture(U,Me||le[U]),Se.type=U,Se.texture=Me)}function de(){const U=ue[re];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){G.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function Fe(U){te.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Ze(U,Me){let J=f.get(Me);J===void 0&&(J=new WeakMap,f.set(Me,J));let Se=J.get(U);Se===void 0&&(Se=s.getUniformBlockIndex(Me,U.name),J.set(U,Se))}function Te(U,Me){const Se=f.get(Me).get(U);h.get(Me)!==Se&&(s.uniformBlockBinding(Me,Se,U.__bindingPointIndex),h.set(Me,Se))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},re=null,ue={},u={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,T=null,b=null,E=null,R=null,N=new pt(0,0,0),x=0,A=!1,X=null,H=null,D=null,B=null,V=null,G.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Re,bindFramebuffer:ve,drawBuffers:k,useProgram:Ae,setBlending:Ie,setMaterial:z,setFlipSided:De,setCullFace:Xe,setLineWidth:st,setPolygonOffset:C,setScissorTest:M,activeTexture:ie,bindTexture:ce,unbindTexture:de,compressedTexImage2D:he,compressedTexImage3D:Ne,texImage2D:$e,texImage3D:ke,updateUBOMapping:Ze,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:_t,texSubImage2D:He,texSubImage3D:xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ke,scissor:Ue,viewport:Fe,reset:ot}}function ww(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pe,f=new WeakMap;let d;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):yc("canvas")}function p(C,M,ie,ce){let de=1;const he=st(C);if((he.width>ce||he.height>ce)&&(de=ce/Math.max(he.width,he.height)),de<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Ne=M?tf:Math.floor,He=Ne(de*he.width),xe=Ne(de*he.height);d===void 0&&(d=_(He,xe));const be=ie?_(He,xe):d;return be.width=He,be.height=xe,be.getContext("2d").drawImage(C,0,0,He,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+He+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function m(C){const M=st(C);return f_(M.width)&&f_(M.height)}function y(C){return a?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==wn&&C.minFilter!==Bn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==wn&&C.minFilter!==Bn}function S(C){s.generateMipmap(C)}function T(C,M,ie,ce,de=!1){if(a===!1)return M;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=M;if(M===s.RED&&(ie===s.FLOAT&&(he=s.R32F),ie===s.HALF_FLOAT&&(he=s.R16F),ie===s.UNSIGNED_BYTE&&(he=s.R8)),M===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.R8UI),ie===s.UNSIGNED_SHORT&&(he=s.R16UI),ie===s.UNSIGNED_INT&&(he=s.R32UI),ie===s.BYTE&&(he=s.R8I),ie===s.SHORT&&(he=s.R16I),ie===s.INT&&(he=s.R32I)),M===s.RG&&(ie===s.FLOAT&&(he=s.RG32F),ie===s.HALF_FLOAT&&(he=s.RG16F),ie===s.UNSIGNED_BYTE&&(he=s.RG8)),M===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RG8UI),ie===s.UNSIGNED_SHORT&&(he=s.RG16UI),ie===s.UNSIGNED_INT&&(he=s.RG32UI),ie===s.BYTE&&(he=s.RG8I),ie===s.SHORT&&(he=s.RG16I),ie===s.INT&&(he=s.RG32I)),M===s.RGBA){const Ne=de?mc:gt.getTransfer(ce);ie===s.FLOAT&&(he=s.RGBA32F),ie===s.HALF_FLOAT&&(he=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(he=Ne===Et?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(C,M,ie){return v(C,ie)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===wn||C===Rg||C===ka?s.NEAREST:s.LINEAR}function R(C){const M=C.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&f.delete(M)}function N(C){const M=C.target;M.removeEventListener("dispose",N),X(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const ie=C.source,ce=u.get(ie);if(ce){const de=ce[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(C),Object.keys(ce).length===0&&u.delete(ie)}n.remove(C)}function A(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const ie=C.source,ce=u.get(ie);delete ce[M.__cacheKey],o.memory.textures--}function X(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let de=0;de<M.__webglFramebuffer[ce].length;de++)s.deleteFramebuffer(M.__webglFramebuffer[ce][de]);else s.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[ce]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=n.get(ie[ce]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(ie[ce])}n.remove(C)}let H=0;function D(){H=0}function B(){const C=H;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const ie=n.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&ie.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ie,C,M);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+M)}function K(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+M)}function ne(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+M)}function P(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){fe(ie,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+M)}const re={[Gh]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Vh]:s.MIRRORED_REPEAT},ue={[wn]:s.NEAREST,[Rg]:s.NEAREST_MIPMAP_NEAREST,[ka]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Wh]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},q={[JS]:s.NEVER,[rM]:s.ALWAYS,[QS]:s.LESS,[c_]:s.LEQUAL,[eM]:s.EQUAL,[iM]:s.GEQUAL,[tM]:s.GREATER,[nM]:s.NOTEQUAL};function L(C,M,ie){if(M.type===nr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Wh||M.magFilter===ka||M.magFilter===Es||M.minFilter===Bn||M.minFilter===Wh||M.minFilter===ka||M.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ie?(s.texParameteri(C,s.TEXTURE_WRAP_S,re[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,re[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,re[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ue[M.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==pi||M.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,E(M.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==wn&&M.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==ka&&M.minFilter!==Es||M.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function G(C,M){let ie=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ce=M.source;let de=u.get(ce);de===void 0&&(de={},u.set(ce,de));const he=V(M);if(he!==C.__cacheKey){de[he]===void 0&&(de[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),de[he].usedTimes++;const Ne=de[C.__cacheKey];Ne!==void 0&&(de[C.__cacheKey].usedTimes--,Ne.usedTimes===0&&A(M)),C.__cacheKey=he,C.__webglTexture=de[he].texture}return ie}function te(C,M,ie){let ce=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=s.TEXTURE_3D);const de=G(C,M),he=M.source;t.bindTexture(ce,C.__webglTexture,s.TEXTURE0+ie);const Ne=n.get(he);if(he.version!==Ne.__version||de===!0){t.activeTexture(s.TEXTURE0+ie);const He=gt.getPrimaries(gt.workingColorSpace),xe=M.colorSpace===Fr?null:gt.getPrimaries(M.colorSpace),be=M.colorSpace===Fr||He===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ke=y(M)&&m(M.image)===!1;let _e=p(M.image,Ke,!1,i.maxTextureSize);_e=Xe(M,_e);const _t=m(_e)||a,$e=r.convert(M.format,M.colorSpace);let ke=r.convert(M.type),Ue=T(M.internalFormat,$e,ke,M.colorSpace,M.isVideoTexture);L(ce,M,_t);let Fe;const Ze=M.mipmaps,Te=a&&M.isVideoTexture!==!0&&Ue!==zg,ot=Ne.__version===void 0||de===!0,U=he.dataReady,Me=b(M,_e,_t);if(M.isDepthTexture)Ue=s.DEPTH_COMPONENT,a?M.type===nr?Ue=s.DEPTH_COMPONENT32F:M.type===Or?Ue=s.DEPTH_COMPONENT24:M.type===Ts?Ue=s.DEPTH24_STENCIL8:Ue=s.DEPTH_COMPONENT16:M.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===bs&&Ue===s.DEPTH_COMPONENT&&M.type!==Xh&&M.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Or,ke=r.convert(M.type)),M.format===go&&Ue===s.DEPTH_COMPONENT&&(Ue=s.DEPTH_STENCIL,M.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ts,ke=r.convert(M.type))),ot&&(Te?t.texStorage2D(s.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,null));else if(M.isDataTexture)if(Ze.length>0&&_t){Te&&ot&&t.texStorage2D(s.TEXTURE_2D,Me,Ue,Ze[0].width,Ze[0].height);for(let J=0,Se=Ze.length;J<Se;J++)Fe=Ze[J],Te?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(s.TEXTURE_2D,J,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data);M.generateMipmaps=!1}else Te?(ot&&t.texStorage2D(s.TEXTURE_2D,Me,Ue,_e.width,_e.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,$e,ke,_e.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Te&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ue,Ze[0].width,Ze[0].height,_e.depth);for(let J=0,Se=Ze.length;J<Se;J++)Fe=Ze[J],M.format!==mi?$e!==null?Te?U&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Fe.width,Fe.height,_e.depth,$e,Fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ue,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Fe.width,Fe.height,_e.depth,$e,ke,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Ue,Fe.width,Fe.height,_e.depth,0,$e,ke,Fe.data)}else{Te&&ot&&t.texStorage2D(s.TEXTURE_2D,Me,Ue,Ze[0].width,Ze[0].height);for(let J=0,Se=Ze.length;J<Se;J++)Fe=Ze[J],M.format!==mi?$e!==null?Te?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Fe.width,Fe.height,$e,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Ue,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(s.TEXTURE_2D,J,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data)}else if(M.isDataArrayTexture)Te?(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isData3DTexture)Te?(ot&&t.texStorage3D(s.TEXTURE_3D,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isFramebufferTexture){if(ot)if(Te)t.texStorage2D(s.TEXTURE_2D,Me,Ue,_e.width,_e.height);else{let J=_e.width,Se=_e.height;for(let se=0;se<Me;se++)t.texImage2D(s.TEXTURE_2D,se,Ue,J,Se,0,$e,ke,null),J>>=1,Se>>=1}}else if(Ze.length>0&&_t){if(Te&&ot){const J=st(Ze[0]);t.texStorage2D(s.TEXTURE_2D,Me,Ue,J.width,J.height)}for(let J=0,Se=Ze.length;J<Se;J++)Fe=Ze[J],Te?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,$e,ke,Fe):t.texImage2D(s.TEXTURE_2D,J,Ue,$e,ke,Fe);M.generateMipmaps=!1}else if(Te){if(ot){const J=st(_e);t.texStorage2D(s.TEXTURE_2D,Me,Ue,J.width,J.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,$e,ke,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ue,$e,ke,_e);v(M,_t)&&S(ce),Ne.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function fe(C,M,ie){if(M.image.length!==6)return;const ce=G(C,M),de=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+ie);const he=n.get(de);if(de.version!==he.__version||ce===!0){t.activeTexture(s.TEXTURE0+ie);const Ne=gt.getPrimaries(gt.workingColorSpace),He=M.colorSpace===Fr?null:gt.getPrimaries(M.colorSpace),xe=M.colorSpace===Fr||Ne===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ke=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!be&&!Ke?_e[J]=p(M.image[J],!1,!0,i.maxCubemapSize):_e[J]=Ke?M.image[J].image:M.image[J],_e[J]=Xe(M,_e[J]);const _t=_e[0],$e=m(_t)||a,ke=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),Fe=T(M.internalFormat,ke,Ue,M.colorSpace),Ze=a&&M.isVideoTexture!==!0,Te=he.__version===void 0||ce===!0,ot=de.dataReady;let U=b(M,_t,$e);L(s.TEXTURE_CUBE_MAP,M,$e);let Me;if(be){Ze&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,U,Fe,_t.width,_t.height);for(let J=0;J<6;J++){Me=_e[J].mipmaps;for(let Se=0;Se<Me.length;Se++){const se=Me[Se];M.format!==mi?ke!==null?Ze?ot&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,se.width,se.height,ke,Ue,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Fe,se.width,se.height,0,ke,Ue,se.data)}}}else{if(Me=M.mipmaps,Ze&&Te){Me.length>0&&U++;const J=st(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,U,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(Ke){Ze?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,ke,Ue,_e[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,_e[J].width,_e[J].height,0,ke,Ue,_e[J].data);for(let Se=0;Se<Me.length;Se++){const I=Me[Se].image[J].image;Ze?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,I.width,I.height,ke,Ue,I.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Fe,I.width,I.height,0,ke,Ue,I.data)}}else{Ze?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,Ue,_e[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,ke,Ue,_e[J]);for(let Se=0;Se<Me.length;Se++){const se=Me[Se];Ze?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,ke,Ue,se.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Fe,ke,Ue,se.image[J])}}}v(M,$e)&&S(s.TEXTURE_CUBE_MAP),he.__version=de.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,ie,ce,de,he){const Ne=r.convert(ie.format,ie.colorSpace),He=r.convert(ie.type),xe=T(ie.internalFormat,Ne,He,ie.colorSpace);if(!n.get(M).__hasExternalTextures){const Ke=Math.max(1,M.width>>he),_e=Math.max(1,M.height>>he);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,he,xe,Ke,_e,M.depth,0,Ne,He,null):t.texImage2D(de,he,xe,Ke,_e,0,Ne,He,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),z(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,0,Ie(M)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(C,M,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ce=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ie||z(M)){const de=M.depthTexture;de&&de.isDepthTexture&&(de.type===nr?ce=s.DEPTH_COMPONENT32F:de.type===Or&&(ce=s.DEPTH_COMPONENT24));const he=Ie(M);z(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,ce,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,he,ce,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ce=Ie(M);ie&&z(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,M.width,M.height):z(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const ce=M.textures;for(let de=0;de<ce.length;de++){const he=ce[de],Ne=r.convert(he.format,he.colorSpace),He=r.convert(he.type),xe=T(he.internalFormat,Ne,He,he.colorSpace),be=Ie(M);ie&&z(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,xe,M.width,M.height):z(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ce=n.get(M.depthTexture).__webglTexture,de=Ie(M);if(M.depthTexture.format===bs)z(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(M.depthTexture.format===go)z(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ve(C){const M=n.get(C),ie=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,C)}else if(ie){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]=s.createRenderbuffer(),me(M.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),me(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function k(C,M,ie){const ce=n.get(C);M!==void 0&&le(ce.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&ve(C)}function Ae(C){const M=C.texture,ie=n.get(C),ce=n.get(M);C.addEventListener("dispose",N);const de=C.textures,he=C.isWebGLCubeRenderTarget===!0,Ne=de.length>1,He=m(C)||a;if(Ne||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=M.version,o.memory.textures++),he){ie.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer[xe]=[];for(let be=0;be<M.mipmaps.length;be++)ie.__webglFramebuffer[xe][be]=s.createFramebuffer()}else ie.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)ie.__webglFramebuffer[xe]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Ne)if(i.drawBuffers)for(let xe=0,be=de.length;xe<be;xe++){const Ke=n.get(de[xe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&z(C)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const be=de[xe];ie.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ke=r.convert(be.format,be.colorSpace),_e=r.convert(be.type),_t=T(be.internalFormat,Ke,_e,be.colorSpace,C.isXRRenderTarget===!0),$e=Ie(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ie.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),me(ie.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),L(s.TEXTURE_CUBE_MAP,M,He);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[xe][be],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else le(ie.__webglFramebuffer[xe],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(M,He)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let xe=0,be=de.length;xe<be;xe++){const Ke=de[xe],_e=n.get(Ke);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),L(s.TEXTURE_2D,Ke,He),le(ie.__webglFramebuffer,C,Ke,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),v(Ke,He)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),L(xe,M,He),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[be],C,M,s.COLOR_ATTACHMENT0,xe,be);else le(ie.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,xe,0);v(M,He)&&S(xe),t.unbindTexture()}C.depthBuffer&&ve(C)}function ge(C){const M=m(C)||a,ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=ie[ce];if(v(he,M)){const Ne=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,He=n.get(he).__webglTexture;t.bindTexture(Ne,He),S(Ne),t.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&z(C)===!1){const M=C.textures,ie=C.width,ce=C.height;let de=s.COLOR_BUFFER_BIT;const he=[],Ne=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(C),xe=M.length>1;if(xe)for(let be=0;be<M.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){he.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&he.push(Ne);const Ke=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Ke===!1&&(C.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ne]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ne])),xe){const _e=n.get(M[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,de,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<M.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Ke=n.get(M[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(i.maxSamples,C.samples)}function z(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Xe(C,M){const ie=C.colorSpace,ce=C.format,de=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Jh||ie!==Br&&ie!==Fr&&(gt.getTransfer(ie)===Et?a===!1?e.has("EXT_sRGB")===!0&&ce===mi?(C.format=Jh,C.minFilter=Bn,C.generateMipmaps=!1):M=__.sRGBToLinear(M):(ce!==mi||de!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),M}function st(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=P,this.rebindTextures=k,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=z}function Aw(s,e,t){const n=t.isWebGL2;function i(r,o=Fr){let a;const l=gt.getTransfer(o);if(r===Ur)return s.UNSIGNED_BYTE;if(r===Lg)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dg)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zS)return s.BYTE;if(r===HS)return s.SHORT;if(r===Xh)return s.UNSIGNED_SHORT;if(r===Pg)return s.INT;if(r===Or)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ir)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===GS)return s.ALPHA;if(r===mi)return s.RGBA;if(r===VS)return s.LUMINANCE;if(r===WS)return s.LUMINANCE_ALPHA;if(r===bs)return s.DEPTH_COMPONENT;if(r===go)return s.DEPTH_STENCIL;if(r===Jh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===XS)return s.RED;if(r===Ig)return s.RED_INTEGER;if(r===YS)return s.RG;if(r===Ng)return s.RG_INTEGER;if(r===Ug)return s.RGBA_INTEGER;if(r===Yh||r===qh||r===$h||r===Kh)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Yh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Yh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Og||r===Fg||r===Bg||r===kg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hg||r===Gg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hg)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vg||r===Wg||r===Xg||r===Yg||r===qg||r===$g||r===Kg||r===Zg||r===jg||r===Jg||r===Qg||r===e_||r===t_||r===n_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$g)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===e_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===t_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===n_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zh||r===i_||r===r_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zh)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===i_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===r_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qS||r===s_||r===o_||r===a_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===s_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===o_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===a_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Cw extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rw={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Rn({extensions:{fragDepth:!0},vertexShader:Pw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new li(new Hc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Iw extends vo{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new Dw,p=t.getContextAttributes();let m=null,y=null;const v=[],S=[],T=new Pe;let b=null;const E=new Gn;E.layers.enable(1),E.viewport=new Ct;const R=new Gn;R.layers.enable(2),R.viewport=new Ct;const N=[E,R],x=new Cw;x.layers.enable(1),x.layers.enable(2);let A=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let G=v[L];return G===void 0&&(G=new Lf,v[L]=G),G.getTargetRaySpace()},this.getControllerGrip=function(L){let G=v[L];return G===void 0&&(G=new Lf,v[L]=G),G.getGripSpace()},this.getHand=function(L){let G=v[L];return G===void 0&&(G=new Lf,v[L]=G),G.getHandSpace()};function H(L){const G=S.indexOf(L.inputSource);if(G===-1)return;const te=v[G];te!==void 0&&(te.update(L.inputSource,L.frame,c||o),te.dispatchEvent({type:L.type,data:L.inputSource}))}function D(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",B);for(let L=0;L<v.length;L++){const G=S[L];G!==null&&(S[L]=null,v[L].disconnect(G))}A=null,X=null,_.reset(),e.setRenderTarget(m),u=null,d=null,f=null,i=null,y=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",D),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new gi(u.framebufferWidth,u.framebufferHeight,{format:mi,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,te=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=p.stencil?go:bs,te=p.stencil?Ts:Or);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new gi(d.textureWidth,d.textureHeight,{format:mi,type:Ur,depthTexture:new j_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(y);me.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(L){for(let G=0;G<L.removed.length;G++){const te=L.removed[G],fe=S.indexOf(te);fe>=0&&(S[fe]=null,v[fe].disconnect(te))}for(let G=0;G<L.added.length;G++){const te=L.added[G];let fe=S.indexOf(te);if(fe===-1){for(let me=0;me<v.length;me++)if(me>=S.length){S.push(te),fe=me;break}else if(S[me]===null){S[me]=te,fe=me;break}if(fe===-1)break}const le=v[fe];le&&le.connect(te)}}const V=new F,Y=new F;function K(L,G,te){V.setFromMatrixPosition(G.matrixWorld),Y.setFromMatrixPosition(te.matrixWorld);const fe=V.distanceTo(Y),le=G.projectionMatrix.elements,me=te.projectionMatrix.elements,Re=le[14]/(le[10]-1),ve=le[14]/(le[10]+1),k=(le[9]+1)/le[5],Ae=(le[9]-1)/le[5],ge=(le[8]-1)/le[0],Ee=(me[8]+1)/me[0],Ie=Re*ge,z=Re*Ee,De=fe/(-ge+Ee),Xe=De*-ge;G.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Xe),L.translateZ(De),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const st=Re+De,C=ve+De,M=Ie-Xe,ie=z+(fe-Xe),ce=k*ve/C*st,de=Ae*ve/C*st;L.projectionMatrix.makePerspective(M,ie,ce,de,st,C),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function ne(L,G){G===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(G.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;_.texture!==null&&(L.near=_.depthNear,L.far=_.depthFar),x.near=R.near=E.near=L.near,x.far=R.far=E.far=L.far,(A!==x.near||X!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,X=x.far,E.near=A,E.far=X,R.near=A,R.far=X,E.updateProjectionMatrix(),R.updateProjectionMatrix(),L.updateProjectionMatrix());const G=L.parent,te=x.cameras;ne(x,G);for(let fe=0;fe<te.length;fe++)ne(te[fe],G);te.length===2?K(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),P(L,x,G)};function P(L,G,te){te===null?L.matrix.copy(G.matrixWorld):(L.matrix.copy(te.matrixWorld),L.matrix.invert(),L.matrix.multiply(G.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(G.projectionMatrix),L.projectionMatrixInverse.copy(G.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Qh*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function ue(L,G){if(h=G.getViewerPose(c||o),g=G,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let fe=!1;te.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let me=0;me<te.length;me++){const Re=te[me];let ve=null;if(u!==null)ve=u.getViewport(Re);else{const Ae=f.getViewSubImage(d,Re);ve=Ae.viewport,me===0&&(e.setRenderTargetTextures(y,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(y))}let k=N[me];k===void 0&&(k=new Gn,k.layers.enable(me),k.viewport=new Ct,N[me]=k),k.matrix.fromArray(Re.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Re.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(x.matrix.copy(k.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(k)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){const me=f.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let te=0;te<v.length;te++){const fe=S[te],le=v[te];fe!==null&&le!==void 0&&le.update(fe,G,c||o)}_.render(e,x),re&&re(L,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const q=new G_;q.setAnimationLoop(ue),this.setAnimationLoop=function(L){re=L},this.dispose=function(){}}}const Is=new ar,Nw=new Rt;function Uw(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,F_(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,S=y.envMapRotation;if(v&&(p.envMap.value=v,Is.copy(S),Is.x*=-1,Is.y*=-1,Is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),p.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(Is)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ow(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(y,T);const b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){const v=f();y.__bindingPointIndex=v;const S=s.createBuffer(),T=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=S.length;b<E;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let N=0,x=R.length;N<x;N++){const A=R[N];if(u(A,b,N,T)===!0){const X=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let B=0;B<H.length;B++){const V=H[B],Y=_(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,X+D,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(y,v,S,T){const b=y.value,E=v+"_"+S;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const R=T[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(y){const v=y.uniforms;let S=0;const T=16;for(let E=0,R=v.length;E<R;E++){const N=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,A=N.length;x<A;x++){const X=N[x],H=Array.isArray(X.value)?X.value:[X.value];for(let D=0,B=H.length;D<B;D++){const V=H[D],Y=_(V),K=S%T;K!==0&&T-K<Y.boundary&&(S+=T-K),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=Y.storage}}}const b=S%T;return b>0&&(S+=T-b),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Df{constructor(e={}){const{canvas:t=oM(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fi,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const v=this;let S=!1,T=0,b=0,E=null,R=-1,N=null;const x=new Ct,A=new Ct;let X=null;const H=new pt(0);let D=0,B=t.width,V=t.height,Y=1,K=null,ne=null;const P=new Ct(0,0,B,V),re=new Ct(0,0,B,V);let ue=!1;const q=new Ef;let L=!1,G=!1,te=null;const fe=new Rt,le=new Pe,me=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?Y:1}let k=n;function Ae(w,W){for(let Z=0;Z<w.length;Z++){const Q=w[Z],$=t.getContext(Q,W);if($!==null)return $}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),k=Ae(W,w),k===null)throw Ae(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ee,Ie,z,De,Xe,st,C,M,ie,ce,de,he,Ne,He,xe,be,Ke,_e,_t,$e,ke,Ue,Fe;function Ze(){ge=new GT(k),Ee=new OT(k,ge,e),ge.init(Ee),ke=new Aw(k,ge,Ee),Ie=new bw(k,ge,Ee),z=new XT(k),De=new hw,Xe=new ww(k,ge,Ie,De,Ee,ke,z),st=new BT(v),C=new HT(v),M=new LM(k,Ee),Ue=new NT(k,ge,M,Ee),ie=new VT(k,M,z,Ue),ce=new KT(k,ie,M,z),_e=new $T(k,Ee,Xe),xe=new FT(De),de=new uw(v,st,C,ge,Ee,Ue,xe),he=new Uw(v,De),Ne=new dw,He=new xw(ge,Ee),Ke=new IT(v,st,C,Ie,ce,d,l),be=new Tw(v,ce,Ee),Fe=new Ow(k,z,Ee,Ie),_t=new UT(k,ge,z,Ee),$e=new WT(k,ge,z,Ee),z.programs=de.programs,v.capabilities=Ee,v.extensions=ge,v.properties=De,v.renderLists=Ne,v.shadowMap=be,v.state=Ie,v.info=z}Ze();const Te=new Iw(v,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(B,V,!1))},this.getSize=function(w){return w.set(B,V)},this.setSize=function(w,W,Z=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,V=W,t.width=Math.floor(w*Y),t.height=Math.floor(W*Y),Z===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(B*Y,V*Y).floor()},this.setDrawingBufferSize=function(w,W,Z){B=w,V=W,Y=Z,t.width=Math.floor(w*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,W,Z,Q){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,W,Z,Q),Ie.viewport(x.copy(P).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,W,Z,Q){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,W,Z,Q),Ie.scissor(A.copy(re).multiplyScalar(Y).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){Ie.setScissorTest(ue=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,W=!0,Z=!0){let Q=0;if(w){let $=!1;if(E!==null){const we=E.texture.format;$=we===Ug||we===Ng||we===Ig}if($){const we=E.texture.type,ze=we===Ur||we===Or||we===Xh||we===Ts||we===Lg||we===Dg,Ye=Ke.getClearColor(),Ge=Ke.getClearAlpha(),Ve=Ye.r,qe=Ye.g,Qe=Ye.b;ze?(u[0]=Ve,u[1]=qe,u[2]=Qe,u[3]=Ge,k.clearBufferuiv(k.COLOR,0,u)):(g[0]=Ve,g[1]=qe,g[2]=Qe,g[3]=Ge,k.clearBufferiv(k.COLOR,0,g))}else Q|=k.COLOR_BUFFER_BIT}W&&(Q|=k.DEPTH_BUFFER_BIT),Z&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),He.dispose(),De.dispose(),st.dispose(),C.dispose(),ce.dispose(),Ue.dispose(),Fe.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ee),Te.removeEventListener("sessionend",oe),te&&(te.dispose(),te=null),j.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=z.autoReset,W=be.enabled,Z=be.autoUpdate,Q=be.needsUpdate,$=be.type;Ze(),z.autoReset=w,be.enabled=W,be.autoUpdate=Z,be.needsUpdate=Q,be.type=$}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const W=w.target;W.removeEventListener("dispose",J),Se(W)}function Se(w){se(w),De.remove(w)}function se(w){const W=De.get(w).programs;W!==void 0&&(W.forEach(function(Z){de.releaseProgram(Z)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,Q,$,we){W===null&&(W=Re);const ze=$.isMesh&&$.matrixWorld.determinant()<0,Ye=it(w,W,Z,Q,$);Ie.setMaterial(Q,ze);let Ge=Z.index,Ve=1;if(Q.wireframe===!0){if(Ge=ie.getWireframeAttribute(Z),Ge===void 0)return;Ve=2}const qe=Z.drawRange,Qe=Z.attributes.position;let Pt=qe.start*Ve,jt=(qe.start+qe.count)*Ve;we!==null&&(Pt=Math.max(Pt,we.start*Ve),jt=Math.min(jt,(we.start+we.count)*Ve)),Ge!==null?(Pt=Math.max(Pt,0),jt=Math.min(jt,Ge.count)):Qe!=null&&(Pt=Math.max(Pt,0),jt=Math.min(jt,Qe.count));const vt=jt-Pt;if(vt<0||vt===1/0)return;Ue.setup($,Q,Ye,Z,Ge);let Pn,xt=_t;if(Ge!==null&&(Pn=M.get(Ge),xt=$e,xt.setIndex(Pn)),$.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*ve()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if($.isLine){let Je=Q.linewidth;Je===void 0&&(Je=1),Ie.setLineWidth(Je*ve()),$.isLineSegments?xt.setMode(k.LINES):$.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else $.isPoints?xt.setMode(k.POINTS):$.isSprite&&xt.setMode(k.TRIANGLES);if($.isBatchedMesh)xt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)xt.renderInstances(Pt,vt,$.count);else if(Z.isInstancedBufferGeometry){const Je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bd=Math.min(Z.instanceCount,Je);xt.renderInstances(Pt,vt,Bd)}else xt.render(Pt,vt)};function I(w,W,Z){w.transparent===!0&&w.side===er&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,je(w,W,Z),w.side=Ir,w.needsUpdate=!0,je(w,W,Z),w.side=er):je(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),p=He.get(Z),p.init(),y.push(p),Z.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),w!==Z&&w.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const Q=new Set;return w.traverse(function($){const we=$.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const Ye=we[ze];I(Ye,Z,$),Q.add(Ye)}else I(we,Z,$),Q.add(we)}),y.pop(),p=null,Q},this.compileAsync=function(w,W,Z=null){const Q=this.compile(w,W,Z);return new Promise($=>{function we(){if(Q.forEach(function(ze){De.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){$(w);return}setTimeout(we,10)}ge.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ae=null;function O(w){ae&&ae(w)}function ee(){j.stop()}function oe(){j.start()}const j=new G_;j.setAnimationLoop(O),typeof self!="undefined"&&j.setContext(self),this.setAnimationLoop=function(w){ae=w,Te.setAnimationLoop(w),w===null?j.stop():j.start()},Te.addEventListener("sessionstart",ee),Te.addEventListener("sessionend",oe),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,E),p=He.get(w,y.length),p.init(),y.push(p),fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(fe),G=this.localClippingEnabled,L=xe.init(this.clippingPlanes,G),_=Ne.get(w,m.length),_.init(),m.push(_),ye(w,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(K,ne),this.info.render.frame++,L===!0&&xe.beginShadows();const Z=p.state.shadowsArray;if(be.render(Z,w,W),L===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&Ke.render(_,w),p.setupLights(v._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let $=0,we=Q.length;$<we;$++){const ze=Q[$];pe(_,w,ze,ze.viewport)}}else pe(_,w,W);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,W),Ue.resetDefaultState(),R=-1,N=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ye(w,W,Z,Q){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){Q&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ze=ce.update(w),Ye=w.material;Ye.visible&&_.push(w,ze,Ye,Z,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ze=ce.update(w),Ye=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ye)){const Ge=ze.groups;for(let Ve=0,qe=Ge.length;Ve<qe;Ve++){const Qe=Ge[Ve],Pt=Ye[Qe.materialIndex];Pt&&Pt.visible&&_.push(w,ze,Pt,Z,me.z,Qe)}}else Ye.visible&&_.push(w,ze,Ye,Z,me.z,null)}}const we=w.children;for(let ze=0,Ye=we.length;ze<Ye;ze++)ye(we[ze],W,Z,Q)}function pe(w,W,Z,Q){const $=w.opaque,we=w.transmissive,ze=w.transparent;p.setupLightsView(Z),L===!0&&xe.setGlobalState(v.clippingPlanes,Z),we.length>0&&Le($,we,W,Z),Q&&Ie.viewport(x.copy(Q)),$.length>0&&We($,W,Z),we.length>0&&We(we,W,Z),ze.length>0&&We(ze,W,Z),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Le(w,W,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const we=Ee.isWebGL2;te===null&&(te=new gi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?ir:Ur,minFilter:Es,samples:we?4:0})),v.getDrawingBufferSize(le),we?te.setSize(le.x,le.y):te.setSize(tf(le.x),tf(le.y));const ze=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(H),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ye=v.toneMapping;v.toneMapping=Nr,We(w,Z,Q),Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te);let Ge=!1;for(let Ve=0,qe=W.length;Ve<qe;Ve++){const Qe=W[Ve],Pt=Qe.object,jt=Qe.geometry,vt=Qe.material,Pn=Qe.group;if(vt.side===er&&Pt.layers.test(Q.layers)){const xt=vt.side;vt.side=Fn,vt.needsUpdate=!0,Oe(Pt,Z,Q,jt,vt,Pn),vt.side=xt,vt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),v.setRenderTarget(ze),v.setClearColor(H,D),v.toneMapping=Ye}function We(w,W,Z){const Q=W.isScene===!0?W.overrideMaterial:null;for(let $=0,we=w.length;$<we;$++){const ze=w[$],Ye=ze.object,Ge=ze.geometry,Ve=Q===null?ze.material:Q,qe=ze.group;Ye.layers.test(Z.layers)&&Oe(Ye,W,Z,Ge,Ve,qe)}}function Oe(w,W,Z,Q,$,we){w.onBeforeRender(v,W,Z,Q,$,we),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(v,W,Z,Q,w,we),$.transparent===!0&&$.side===er&&$.forceSinglePass===!1?($.side=Fn,$.needsUpdate=!0,v.renderBufferDirect(Z,W,Q,$,w,we),$.side=Ir,$.needsUpdate=!0,v.renderBufferDirect(Z,W,Q,$,w,we),$.side=er):v.renderBufferDirect(Z,W,Q,$,w,we),w.onAfterRender(v,W,Z,Q,$,we)}function je(w,W,Z){W.isScene!==!0&&(W=Re);const Q=De.get(w),$=p.state.lights,we=p.state.shadowsArray,ze=$.state.version,Ye=de.getParameters(w,$.state,we,W,Z),Ge=de.getProgramCacheKey(Ye);let Ve=Q.programs;Q.environment=w.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(w.isMeshStandardMaterial?C:st).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",J),Ve=new Map,Q.programs=Ve);let qe=Ve.get(Ge);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===ze)return dt(w,Ye),qe}else Ye.uniforms=de.getUniforms(w),w.onBuild(Z,Ye,v),w.onBeforeCompile(Ye,v),qe=de.acquireProgram(Ye,Ge),Ve.set(Ge,qe),Q.uniforms=Ye.uniforms;const Qe=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),dt(w,Ye),Q.needsLights=mt(w),Q.lightsStateVersion=ze,Q.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function ct(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Xc.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function dt(w,W){const Z=De.get(w);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function it(w,W,Z,Q,$){W.isScene!==!0&&(W=Re),Xe.resetTextureUnits();const we=W.fog,ze=Q.isMeshStandardMaterial?W.environment:null,Ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Br,Ge=(Q.isMeshStandardMaterial?C:st).get(Q.envMap||ze),Ve=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Qe=!!Z.morphAttributes.position,Pt=!!Z.morphAttributes.normal,jt=!!Z.morphAttributes.color;let vt=Nr;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Pn!==void 0?Pn.length:0,Je=De.get(Q),Bd=p.state.lights;if(L===!0&&(G===!0||w!==N)){const hi=w===N&&Q.id===R;xe.setState(Q,w,hi)}let Lt=!1;Q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Bd.state.version||Je.outputColorSpace!==Ye||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==Ge||Q.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==xe.numPlanes||Je.numIntersection!==xe.numIntersection)||Je.vertexAlphas!==Ve||Je.vertexTangents!==qe||Je.morphTargets!==Qe||Je.morphNormals!==Pt||Je.morphColors!==jt||Je.toneMapping!==vt||Ee.isWebGL2===!0&&Je.morphTargetsCount!==xt)&&(Lt=!0):(Lt=!0,Je.__version=Q.version);let Gs=Je.currentProgram;Lt===!0&&(Gs=je(Q,W,$));let Jv=!1,Ml=!1,kd=!1;const mn=Gs.getUniforms(),Vs=Je.uniforms;if(Ie.useProgram(Gs.program)&&(Jv=!0,Ml=!0,kd=!0),Q.id!==R&&(R=Q.id,Ml=!0),Jv||N!==w){mn.setValue(k,"projectionMatrix",w.projectionMatrix),mn.setValue(k,"viewMatrix",w.matrixWorldInverse);const hi=mn.map.cameraPosition;hi!==void 0&&hi.setValue(k,me.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&mn.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&mn.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,Ml=!0,kd=!0)}if($.isSkinnedMesh){mn.setOptional(k,$,"bindMatrix"),mn.setOptional(k,$,"bindMatrixInverse");const hi=$.skeleton;hi&&(Ee.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),mn.setValue(k,"boneTexture",hi.boneTexture,Xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(mn.setOptional(k,$,"batchingTexture"),mn.setValue(k,"batchingTexture",$._matricesTexture,Xe));const zd=Z.morphAttributes;if((zd.position!==void 0||zd.normal!==void 0||zd.color!==void 0&&Ee.isWebGL2===!0)&&_e.update($,Z,Gs),(Ml||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,mn.setValue(k,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Vs.envMap.value=Ge,Vs.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Ml&&(mn.setValue(k,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&at(Vs,kd),we&&Q.fog===!0&&he.refreshFogUniforms(Vs,we),he.refreshMaterialUniforms(Vs,Q,Y,V,te),Xc.upload(k,ct(Je),Vs,Xe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Xc.upload(k,ct(Je),Vs,Xe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&mn.setValue(k,"center",$.center),mn.setValue(k,"modelViewMatrix",$.modelViewMatrix),mn.setValue(k,"normalMatrix",$.normalMatrix),mn.setValue(k,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hi=Q.uniformsGroups;for(let Hd=0,PA=hi.length;Hd<PA;Hd++)if(Ee.isWebGL2){const Qv=hi[Hd];Fe.update(Qv,Gs),Fe.bind(Qv,Gs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gs}function at(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,W,Z){De.get(w.texture).__webglTexture=W,De.get(w.depthTexture).__webglTexture=Z;const Q=De.get(w);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const Z=De.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Z=0){E=w,T=W,b=Z;let Q=!0,$=null,we=!1,ze=!1;if(w){const Ge=De.get(w);Ge.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(k.FRAMEBUFFER,null),Q=!1):Ge.__webglFramebuffer===void 0?Xe.setupRenderTarget(w):Ge.__hasExternalTextures&&Xe.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const qe=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?$=qe[W][Z]:$=qe[W],we=!0):Ee.isWebGL2&&w.samples>0&&Xe.useMultisampledRTT(w)===!1?$=De.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[Z]:$=qe,x.copy(w.viewport),A.copy(w.scissor),X=w.scissorTest}else x.copy(P).multiplyScalar(Y).floor(),A.copy(re).multiplyScalar(Y).floor(),X=ue;if(Ie.bindFramebuffer(k.FRAMEBUFFER,$)&&Ee.drawBuffers&&Q&&Ie.drawBuffers(w,$),Ie.viewport(x),Ie.scissor(A),Ie.setScissorTest(X),we){const Ge=De.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,Z)}else if(ze){const Ge=De.get(w.texture),Ve=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,Ve)}R=-1},this.readRenderTargetPixels=function(w,W,Z,Q,$,we,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){Ie.bindFramebuffer(k.FRAMEBUFFER,Ye);try{const Ge=w.texture,Ve=Ge.format,qe=Ge.type;if(Ve!==mi&&ke.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=qe===ir&&(ge.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ge.has("EXT_color_buffer_float"));if(qe!==Ur&&ke.convert(qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===nr&&(Ee.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Q&&Z>=0&&Z<=w.height-$&&k.readPixels(W,Z,Q,$,ke.convert(Ve),ke.convert(qe),we)}finally{const Ge=E!==null?De.get(E).__webglFramebuffer:null;Ie.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(w,W,Z=0){const Q=Math.pow(2,-Z),$=Math.floor(W.image.width*Q),we=Math.floor(W.image.height*Q);Xe.setTexture2D(W,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,w.x,w.y,$,we),Ie.unbindTexture()},this.copyTextureToTexture=function(w,W,Z,Q=0){const $=W.image.width,we=W.image.height,ze=ke.convert(Z.format),Ye=ke.convert(Z.type);Xe.setTexture2D(Z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Q,w.x,w.y,$,we,ze,Ye,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Q,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,ze,W.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Q,w.x,w.y,ze,Ye,W.image),Q===0&&Z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Z,Q,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(w.max.x-w.min.x),ze=Math.round(w.max.y-w.min.y),Ye=w.max.z-w.min.z+1,Ge=ke.convert(Q.format),Ve=ke.convert(Q.type);let qe;if(Q.isData3DTexture)Xe.setTexture3D(Q,0),qe=k.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Xe.setTexture2DArray(Q,0),qe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Qe=k.getParameter(k.UNPACK_ROW_LENGTH),Pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),jt=k.getParameter(k.UNPACK_SKIP_PIXELS),vt=k.getParameter(k.UNPACK_SKIP_ROWS),Pn=k.getParameter(k.UNPACK_SKIP_IMAGES),xt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?k.texSubImage3D(qe,$,W.x,W.y,W.z,we,ze,Ye,Ge,Ve,xt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(qe,$,W.x,W.y,W.z,we,ze,Ye,Ge,xt.data):k.texSubImage3D(qe,$,W.x,W.y,W.z,we,ze,Ye,Ge,Ve,xt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Qe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,vt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pn),$===0&&Q.generateMipmaps&&k.generateMipmap(qe),Ie.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,Ie.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jh?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===pc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fw extends Df{}Fw.prototype.isWebGL1Renderer=!0;class v0 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class x0 extends Ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const y0=new F,S0=new F,M0=new Rt,If=new ff,qc=new bc;class Bw extends An{constructor(e=new Hn,t=new x0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)y0.fromBufferAttribute(t,i-1),S0.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=y0.distanceTo(S0);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(i),qc.radius+=r,e.ray.intersectsSphere(qc)===!1)return;M0.copy(i).invert(),If.copy(e.ray).applyMatrix4(M0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=u){const T=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),If.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=u){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),If.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],r=[],o=[],a=new F,l=new Rt;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(fn(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(fn(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nf extends zi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kw extends Nf{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const $c=new F,Of=new Uf,Ff=new Uf,Bf=new Uf;class zw extends zi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:($c.subVectors(i[0],i[1]).add(i[0]),c=$c);const f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:($c.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Of.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Ff.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Bf.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Of.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ff.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Bf.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Of.calc(l),Ff.calc(l),Bf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function E0(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Hw(s,e){const t=1-s;return t*t*e}function Gw(s,e){return 2*(1-s)*s*e}function Vw(s,e){return s*s*e}function Za(s,e,t,n){return Hw(s,e)+Gw(s,t)+Vw(s,n)}function Ww(s,e){const t=1-s;return t*t*t*e}function Xw(s,e){const t=1-s;return 3*t*t*s*e}function Yw(s,e){return 3*(1-s)*s*s*e}function qw(s,e){return s*s*s*e}function ja(s,e,t,n,i){return Ww(s,e)+Xw(s,t)+Yw(s,n)+qw(s,i)}class T0 extends zi{constructor(e=new Pe,t=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ja(e,i.x,r.x,o.x,a.x),ja(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $w extends zi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ja(e,i.x,r.x,o.x,a.x),ja(e,i.y,r.y,o.y,a.y),ja(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b0 extends zi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kw extends zi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends zi{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(e,i.x,r.x,o.x),Za(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zw extends zi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(e,i.x,r.x,o.x),Za(e,i.y,r.y,o.y),Za(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A0 extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(E0(a,l.x,c.x,h.x,f.x),E0(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Pe().fromArray(i))}return this}}var C0=Object.freeze({__proto__:null,ArcCurve:kw,CatmullRomCurve3:zw,CubicBezierCurve:T0,CubicBezierCurve3:$w,EllipseCurve:Nf,LineCurve:b0,LineCurve3:Kw,QuadraticBezierCurve:w0,QuadraticBezierCurve3:Zw,SplineCurve:A0});class jw extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new C0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new C0[i.type]().fromJSON(i))}return this}}class R0 extends jw{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new b0(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new w0(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new T0(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new A0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Nf(e,t,n,i,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kf extends Hn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new F,h=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Kc=new F,Zc=new F,zf=new F,jc=new yi;class Jw extends Hn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(xc*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=jc;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),jc.getNormal(zf),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const v=(y+1)%3,S=f[y],T=f[v],b=jc[h[y]],E=jc[h[v]],R=`${S}_${T}`,N=`${T}_${S}`;N in d&&d[N]?(zf.dot(d[N].normal)<=r&&(u.push(b.x,b.y,b.z),u.push(E.x,E.y,E.z)),d[N]=null):R in d||(d[R]={index0:c[y],index1:c[v],normal:zf.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Kc.fromBufferAttribute(a,_),Zc.fromBufferAttribute(a,p),u.push(Kc.x,Kc.y,Kc.z),u.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new Vt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hf extends R0{constructor(e){super(e),this.uuid=xo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new R0().fromJSON(i))}return this}}const Qw={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=P0(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,u;if(n&&(r=r1(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)f=s[g],d=s[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Ja(r,o,t,a,l,u,0),o}};function P0(s,e,t,n,i){let r,o;if(i===m1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=I0(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=I0(r,s[r],s[r+1],o);return o&&Jc(o,o.next)&&(el(o),o=o.next),o}function Ns(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jc(t,t.next)||Ut(t.prev,t,t.next)===0)){if(el(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(s,e,t,n,i,r,o){if(!s)return;!o&&r&&c1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?t1(s,n,i,r):e1(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),el(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=n1(Ns(s),e,t),Ja(s,e,t,n,i,r,2)):o===2&&i1(s,e,t,n,i,r):Ja(Ns(s),e,t,n,i,r,1);break}}}function e1(s){const e=s.prev,t=s,n=s.next;if(Ut(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Ho(i,a,r,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t1(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ut(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=Gf(u,g,e,t,n),y=Gf(_,p,e,t,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=m&&S&&S.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ho(a,h,l,f,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=u&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Ho(a,h,l,f,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ho(a,h,l,f,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=u&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Ho(a,h,l,f,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function n1(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Jc(i,r)&&L0(i,n,n.next,r)&&Qa(i,r)&&Qa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),el(n),el(n.next),n=s=r),n=n.next}while(n!==s);return Ns(n)}function i1(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&f1(o,a)){let l=D0(o,a);o=Ns(o,o.next),l=Ns(l,l.next),Ja(o,e,t,n,i,r,0),Ja(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function r1(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=P0(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(h1(c));for(i.sort(s1),r=0;r<i.length;r++)t=o1(i[r],t);return t}function s1(s,e){return s.x-e.x}function o1(s,e){const t=a1(s,e);if(!t)return e;const n=D0(t,s);return Ns(n,n.next),Ns(t,t.next)}function a1(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ho(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Qa(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&l1(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function l1(s,e){return Ut(s.prev,s,e.prev)<0&&Ut(e.next,s,s.next)<0}function c1(s,e,t,n){let i=s;do i.z===0&&(i.z=Gf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,u1(i)}function u1(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Gf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function h1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ho(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function f1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!d1(s,e)&&(Qa(s,e)&&Qa(e,s)&&p1(s,e)&&(Ut(s.prev,s,e.prev)||Ut(s,e.prev,e))||Jc(s,e)&&Ut(s.prev,s,s.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jc(s,e){return s.x===e.x&&s.y===e.y}function L0(s,e,t,n){const i=eu(Ut(s,e,t)),r=eu(Ut(s,e,n)),o=eu(Ut(t,n,s)),a=eu(Ut(t,n,e));return!!(i!==r&&o!==a||i===0&&Qc(s,t,e)||r===0&&Qc(s,n,e)||o===0&&Qc(t,s,n)||a===0&&Qc(t,e,n))}function Qc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function eu(s){return s>0?1:s<0?-1:0}function d1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&L0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qa(s,e){return Ut(s.prev,s,s.next)<0?Ut(s,e,s.next)>=0&&Ut(s,s.prev,e)>=0:Ut(s,e,s.prev)<0||Ut(s,s.next,e)<0}function p1(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function D0(s,e){const t=new Vf(s.i,s.x,s.y),n=new Vf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function I0(s,e,t,n){const i=new Vf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function el(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class tl{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return tl.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];N0(e),U0(n,e);let o=e.length;t.forEach(N0);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,U0(n,t[l]);const a=Qw.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function N0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function U0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wf extends Hn{constructor(e=new Hf([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function c(h){const f=i.length/3,d=h.extractPoints(t);let u=d.shape;const g=d.holes;tl.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];tl.isClockWise(y)===!0&&(g[p]=y.reverse())}const _=tl.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];u=u.concat(y)}for(let p=0,m=u.length;p<m;p++){const y=u[p];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){const y=_[p],v=y[0]+f,S=y[1]+f,T=y[2]+f;n.push(v,S,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return g1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Wf(n,e.curveSegments)}}function g1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Xf extends Hn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new F,d=new F,u=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const b=T/t;f.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(b+S,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=h[m][y+1],S=h[m][y],T=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&u.push(v,S,b),(m!==n-1||l<Math.PI)&&u.push(S,T,b)}this.setIndex(u),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _1 extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class v1 extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Yf=new Rt,O0=new F,F0=new F;class x1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;O0.setFromMatrixPosition(e.matrixWorld),t.position.copy(O0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const B0=new Rt,nl=new F,qf=new F;class y1 extends x1{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nl.setFromMatrixPosition(e.matrixWorld),n.position.copy(nl),qf.copy(n.position),qf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qf),n.updateMatrixWorld(),i.makeTranslation(-nl.x,-nl.y,-nl.z),B0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B0)}}class k0 extends v1{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new y1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=z0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=z0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function z0(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh),new ff,new Xr;const H0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M1=new V_(-1,1,1,-1,0,1);class E1 extends Hn{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const T1=new E1;class $f{constructor(e){this._mesh=new li(T1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,M1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class b1 extends Go{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ka.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $f(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class G0 extends Go{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class w1 extends Go{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class V0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ir}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b1(H0),this.copyPass.material.blending=tr,this.clock=new S1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}G0!==void 0&&(o instanceof G0?n=!0:o instanceof w1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W0 extends Go{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const A1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Us extends Go{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(r,o,{type:ir}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new gi(r,o,{type:ir});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new gi(r,o,{type:ir});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=A1;this.highPassUniforms=Ka.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=H0;this.copyUniforms=Ka.clone(h.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pt,this.oldClearAlpha=1,this.basic=new qa,this.fsQuad=new $f(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Us.BlurDirectionX=new Pe(1,0),Us.BlurDirectionY=new Pe(0,1);const C1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class R1 extends Go{constructor(){super();const e=C1;this.uniforms=Ka.clone(e.uniforms),this.material=new _1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $f(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ag&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class P1{constructor(e){this.container=e,this.size=1.5,this.numberOfLayers=90,this.layerDelay=12,this.layerSpacing=2,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.layers=[],this.squarePortal=[],this.hexagonPortal=[],this.circlePortal=[],this.activePortal=this.hexagonPortal,this.offsetX=12.5,this.offsetZ=10,this.cameraOffsetZ=-7,this.offsetXSquarePortal=this.offsetX,this.offsetXSHexagonPortal=0,this.offsetXCirclePortal=-this.offsetX,this.params={strength:.6,radius:.9,threshold:.1,exposure:1},this.init(e)}init(e){const t=new v0,n=new Df({antialias:!0});n.setPixelRatio(window.devicePixelRatio),n.setSize(e.clientWidth,e.clientHeight),n.toneMapping=fc;const i=n.domElement;i.style.width="100%",i.style.height="100%",i.style.position="absolute",e.appendChild(i);const r=new Gn(60,e.clientWidth/e.clientHeight,1,300);r.position.set(0,0,-10),r.lookAt(new F(0,0,0)),t.add(r);const o=new W0(t,r),a=new Us(new Pe(e.clientWidth,e.clientHeight),1,1,0),l=new V0(n),c=new R1;console.log(l),l.addPass(o),l.addPass(a),l.addPass(c);const h=new k0(16777215,1);t.add(h),this.initialState(t),this.animate(l)}animate(e){requestAnimationFrame(()=>this.animate(e)),e.render()}initialState(e){const t=this.createSegment("square","#54EAAB");t.position.x=0,t.position.z=this.offsetZ,this.squarePortal.push(t),e.add(t);const n=this.createSegment("hexagon","#5FB2FF");n.position.z=this.offsetZ,this.hexagonPortal.push(n),e.add(n);const i=this.createSegment("circle","#CBA1FE");i.position.x=0,i.position.z=this.offsetZ,this.circlePortal.push(i),e.add(i);const r=new Xf(.5,32,32),o=new qa({color:16711680}),a=new li(r,o);a.position.set(3,0,10),e.add(a)}bringForwardAnimation(){Tt.timeline().to(this.camera.position,{z:this.cameraOffsetZ,duration:.6,ease:"power4.out"},"a")}parallaxEffect(){document.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.targetCameraPosition.x=this.mouse.x*.1,this.targetCameraPosition.y=this.mouse.y*.1,this.targetCameraPosition.z=this.camera.position.z,Tt.to(this.camera.position,{x:this.targetCameraPosition.x,y:this.targetCameraPosition.y,duration:.5,ease:"power2.out"})})}focus(e){const t={square:this.offsetXSquarePortal,hexagon:this.offsetXSHexagonPortal,circle:this.offsetXCirclePortal}[e],n=this.activePortal;switch(e){case"square":this.activePortal=this.squarePortal;break;case"hexagon":this.activePortal=this.hexagonPortal;break;case"circle":this.activePortal=this.circlePortal;break;default:console.log(`Unknown shape: ${e}`);return}Tt.defaults({duration:.9,ease:"power4.inOut"}),Tt.to(this.camera.position,{x:t}),n.forEach(i=>{Tt.to(i.position,{z:this.offsetZ})}),Tt.to(this.activePortal[0].position,{z:0})}start(){const e=Tt.timeline();for(console.log("...starting portal animation...");this.activePortal.length>1;){const t=this.activePortal.pop();this.scene.remove(t)}for(let t=1;t<this.numberOfLayers;t++)e.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.activePortal[0],i=n.clone();i.position.z=n.position.z+t*this.layerSpacing,this.scene.add(i),this.activePortal.push(i)}});e.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{console.log("Camera animation complete.")}},"-=1.6")}createSegment(e=this.shape,t=this.color){const n=this.createGeometry(e),i=new x0({color:t});return new Bw(n,i)}createGeometry(e){switch(e){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${e}`)}}createSquareGeometry(){const t=new Hf;return t.moveTo(-2.4/2,-2.4/2),t.lineTo(2.4/2,-2.4/2),t.lineTo(2.4/2,2.4/2),t.lineTo(-2.4/2,2.4/2),t.lineTo(-2.4/2,-2.4/2),new Wf(t)}createCircleGeometry(){const n=new kf(1.4,96);return new Jw(n)}createHexagonGeometry(){const n=new Hf,i=0,r=0;n.moveTo(i+1.5*Math.cos(0),r+1.5*Math.sin(0));for(let a=1;a<=6;a+=1){const l=a*2*Math.PI/6;n.lineTo(i+1.5*Math.cos(l),r+1.5*Math.sin(l))}return new Hn().setFromPoints(n.getPoints())}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);const n=e/t;this.camera.fov=this.adjustFOV(n),this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(e,t)}adjustFOV(e){return 2*Math.atan(Math.tan(30*Math.PI/180/2)/e)*(180/Math.PI)*1.7}}class L1{constructor(e){gn(this,"initVideos",()=>{const e=document.querySelectorAll(".portal__video");if(!e.length){console.warn("No video containers found");return}e.forEach(t=>{const n=t.getAttribute("data-mp4"),i=t.getAttribute("data-webm");if(!n||!i){console.error("Video source attributes missing",t);return}const r=document.createElement("video");r.style.width="100%",r.style.height="100%",r.autoplay=!0,r.loop=!0,r.playsinline=!0,r.muted=!0;const o=document.createElement("source");o.src=n,o.type="video/mp4";const a=document.createElement("source");a.src=i,a.type="video/webm",r.appendChild(o),r.appendChild(a),t.appendChild(r),r.addEventListener("error",l=>{console.error("Error loading video:",l)})})});if(this.$container=e,!this.$container){console.warn("No portal container found");return}console.log("init portal manager"),this.portals=new P1(this.$container),this.portalTriggers={},this.portalScrollTrigger=null}snapInView(){Tt.registerPlugin(Ba,nt),this.portalScrollTrigger=nt.create({trigger:"#homePortals",once:!0,start:"top 20%",onEnter:()=>{console.log("Snap to portals section"),this.portals.bringForwardAnimation();const e=document.getElementById("portalTriggerHexagon");this.togglePortal(e,!0)}})}initVisibility(){const e=document.querySelector(".portal--active");Tt.set(e,{autoAlpha:0})}togglePortal(e,t=!1){const n=e.getAttribute("data-shape"),i=e.getAttribute("data-content"),r=document.getElementById(i),o=r==null?void 0:r.querySelector(".portal__video");if(!n||!i){console.warn("Shape or content ID missing",e);return}switch(console.log("Toggle Portal: "+n,i,t),n){case"square":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="auto",this.portalTriggers.hexagon.style.right="0";break;case"hexagon":this.portalTriggers.square.style.display="block",this.portalTriggers.hexagon.style.display="none",this.portalTriggers.circle.style.display="block";break;case"circle":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="0%";break;default:console.warn("Shape not found.")}t&&Tt.set(r,{autoAlpha:1}),this.portals.focus(n);const a=document.querySelector(".portal--active .portal__video");t||Tt.fromTo(a,{opacity:1,scale:1},{opacity:0,scale:.97,duration:.9,ease:"power4.out"}),Tt.fromTo(o,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.9,delay:.6,ease:"power4.out"}),applyTextShuffle(i),setTimeout(()=>{if(!t){const l=document.querySelector(".portal--active");l==null||l.classList.remove("portal--active");const c=document.getElementById(i);c==null||c.classList.add("portal--active")}},150)}animatePortalContent(e){Tt.to(e,{duration:.6,opacity:0,scale:.9,ease:"power4.out"})}initTriggers(){this.portalTriggers.square=this.setupTrigger("portalTriggerSquare"),this.portalTriggers.hexagon=this.setupTrigger("portalTriggerHexagon"),this.portalTriggers.circle=this.setupTrigger("portalTriggerCircle")}setupTrigger(e){const t=document.getElementById(e);if(!t){console.warn("No portal trigger found with ID: "+e);return}t.addEventListener("click",o=>this.togglePortal(o.target));const n=t.getAttribute("data-content"),i=document.getElementById(n),r=i==null?void 0:i.querySelector(".btn");return r==null||r.addEventListener("click",()=>{this.animatePortalContent(i),this.portals.start()}),t.style.display=e==="portalTriggerHexagon"?"none":"block",t}}let tu=null;const D1=s=>{let e=document.getElementById("portalsContainer");tu=new L1(e)},I1=()=>{tu&&(tu.portalScrollTrigger.kill(),tu=null)};/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hr,Os,Kf,nu,il,iu,ru,rl,Si="transform",Zf=Si+"Origin",X0,jf=function(e){var t=e.ownerDocument||e;for(!(Si in e.style)&&("msTransform"in e.style)&&(Si="msTransform",Zf=Si+"Origin");t.parentNode&&(t=t.parentNode););if(Os=window,ru=new fr,t){hr=t,Kf=t.documentElement,nu=t.body,rl=hr.createElementNS("http://www.w3.org/2000/svg","g"),rl.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),X0=i.offsetParent!==n,r.removeChild(n))}return t},N1=function(e){for(var t,n;e&&e!==nu;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Y0=[],q0=[],Jf=function(){return Os.pageYOffset||hr.scrollTop||Kf.scrollTop||nu.scrollTop||0},Qf=function(){return Os.pageXOffset||hr.scrollLeft||Kf.scrollLeft||nu.scrollLeft||0},ed=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},U1=function s(e){if(Os.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},td=function s(e,t){if(e.parentNode&&(hr||jf(e))){var n=ed(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=hr.createElementNS?hr.createElementNS(i.replace(/^https/,"http"),r):hr.createElement(r);return t&&(n?(iu||(iu=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),iu.appendChild(c)):(il||(il=s(e),il.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",il.appendChild(c))),c}throw"Need document and parent."},O1=function(e){for(var t=new fr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},$0=function(e){var t=e.getCTM(),n;return t||(n=e.style[Si],e.style[Si]="none",e.appendChild(rl),t=rl.getCTM(),e.removeChild(rl),n?e.style[Si]=n:e.style.removeProperty(Si.replace(/([A-Z])/g,"-$1").toLowerCase())),t||ru.clone()},F1=function(e,t){var n=ed(e),i=e===n,r=n?Y0:q0,o=e.parentNode,a,l,c,h,f,d;if(e===Os)return e;if(r.length||r.push(td(e,1),td(e,2),td(e,3)),a=n?iu:il,n)i?(c=$0(e),h=-c.e/c.a,f=-c.f/c.d,l=ru):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?O1(l):l.getItem(0).matrix:ru,h=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new fr,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,X0)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Os.getComputedStyle(c)[Si]+"").length>4&&(h=c.offsetLeft,f=c.offsetTop,c=0);if(d=Os.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-h+"px",c[Si]=d[Si],c[Zf]=d[Zf],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},nd=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},fr=function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),nd(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*r||1e-10;return nd(this,o/c,-i/c,-r/c,n/c,(r*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return nd(this,h*i+d*o,h*r+d*a,f*i+u*o,f*r+u*a,l+g*i+_*o,c+g*r+_*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return i.x=r*a+o*c+f||0,i.y=r*l+o*h+d||0,i},s}();function sn(s,e,t,n){if(!s||!s.parentNode||(hr||jf(s)).documentElement===s)return new fr;var i=N1(s),r=ed(s),o=r?Y0:q0,a=F1(s,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&U1(s),u=new fr((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:Qf()),l.top+(d?0:Jf()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function K0(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function B1(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ft,St,Qn,Mi,dr,id,pr,rd,sl,Yr,Z0,sd,ol,od,al,Ei,ll,su,j0,ad,ou=0,J0=function(){return typeof window!="undefined"},Q0=function(){return ft||J0()&&(ft=window.gsap)&&ft.registerPlugin&&ft},qr=function(e){return typeof e=="function"},cl=function(e){return typeof e=="object"},Ti=function(e){return typeof e=="undefined"},au=function(){return!1},ul="transform",ld="transformOrigin",$r=function(e){return Math.round(e*1e4)/1e4},hl=Array.isArray,lu=function(e,t){var n=Qn.createElementNS?Qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qn.createElement(e);return n.style?n:Qn.createElement(e)},ev=180/Math.PI,Fs=1e20,k1=new fr,Kr=Date.now||function(){return new Date().getTime()},Bs=[],Vo={},z1=0,H1=/^(?:a|input|textarea|button|select)$/i,tv=0,Wo={},mr={},nv=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},G1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},iv=function s(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&s(i,t)},rv=function(){return Bs.forEach(function(e){return e()})},V1=function(e){Bs.push(e),Bs.length===1&&ft.ticker.add(rv)},sv=function(){return!Bs.length&&ft.ticker.remove(rv)},ov=function(e){for(var t=Bs.length;t--;)Bs[t]===e&&Bs.splice(t,1);ft.to(sv,{overwrite:!0,delay:15,duration:0,onComplete:sv,data:"_draggable"})},W1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Kt=function(e,t,n,i){if(e.addEventListener){var r=ol[t];i=i||(Z0?{passive:!1}:null),e.addEventListener(r||t,n,i),r&&t!==r&&e.addEventListener(t,n,i)}},Wt=function(e,t,n,i){if(e.removeEventListener){var r=ol[t];e.removeEventListener(r||t,n,i),r&&t!==r&&e.removeEventListener(t,n,i)}},ci=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},X1=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},Y1=function s(e){od=e.touches&&ou<e.touches.length,Wt(e.target,"touchend",s)},av=function(e){od=e.touches&&ou<e.touches.length,Kt(e.target,"touchend",Y1)},Xo=function(e){return St.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Yo=function(e){return St.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},lv=function s(e,t){Kt(e,"scroll",t),qo(e.parentNode)||s(e.parentNode,t)},cv=function s(e,t){Wt(e,"scroll",t),qo(e.parentNode)||s(e.parentNode,t)},qo=function(e){return!e||e===Mi||e.nodeType===9||e===Qn.body||e===St||!e.nodeType||!e.parentNode},uv=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return Math.max(0,qo(e)?Math.max(Mi[i],dr[i])-(St["inner"+n]||Mi[r]||dr[r]):e[i]-e[r])},cd=function s(e,t){var n=uv(e,"x"),i=uv(e,"y");qo(e)?e=mr:s(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},ud=function(e,t,n){var i=e.style;!i||(Ti(i[t])&&(t=sl(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},fl=function(e){return St.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},ks={},$o=function(e){if(e===St)return ks.left=ks.top=0,ks.width=ks.right=Mi.clientWidth||e.innerWidth||dr.clientWidth||0,ks.height=ks.bottom=(e.innerHeight||0)-20<Mi.clientHeight?Mi.clientHeight:e.innerHeight||dr.clientHeight||0,ks;var t=e.ownerDocument||Qn,n=Ti(e.pageX)?!e.nodeType&&!Ti(e.left)&&!Ti(e.top)?e:Yr(e)[0].getBoundingClientRect():{left:e.pageX-Yo(t),top:e.pageY-Xo(t),right:e.pageX-Yo(t)+1,bottom:e.pageY-Xo(t)+1};return Ti(n.right)&&!Ti(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Ti(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t],a;return qr(r)&&(a=r.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},hv=function(e,t){var n=Yr(e)[0],i,r,o;return!n.nodeType&&n!==St?Ti(e.left)?(r=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:r,top:i,width:(e.max||e.maxX||e.maxRotation||0)-r,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):q1(n,t)},ui={},q1=function(e,t){t=Yr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Qn,r,o,a,l,c,h,f,d,u,g,_,p,m;if(e===St)a=Xo(i),r=Yo(i),o=r+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===St||Ti(t))return e.getBoundingClientRect();r=a=0,n?(g=e.getBBox(),_=g.width,p=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(r=g.x||0,a=g.y||0,_=g.width,p=g.height),_||(m=fl(e),g=m.boxSizing==="border-box",_=(parseFloat(m.width)||e.clientWidth||0)+(g?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),p=(parseFloat(m.height)||e.clientHeight||0)+(g?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=_,l=p}return e===t?{left:r,top:a,width:o-r,height:l-a}:(c=sn(t,!0).multiply(sn(e)),h=c.apply({x:r,y:a}),f=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:r,y:l}),r=Math.min(h.x,f.x,d.x,u.x),a=Math.min(h.y,f.y,d.y,u.y),{left:r,top:a,width:Math.max(h.x,f.x,d.x,u.x)-r,height:Math.max(h.y,f.y,d.y,u.y)-a})},hd=function(e,t,n,i,r,o){var a={},l,c,h;if(t)if(r!==1&&t instanceof Array){if(a.end=l=[],h=t.length,cl(t[0]))for(c=0;c<h;c++)l[c]=nv(t[c],r);else for(c=0;c<h;c++)l[c]=t[c]*r;n+=1.1,i-=1.1}else qr(t)?a.end=function(f){var d=t.call(e,f),u,g;if(r!==1)if(cl(d)){u={};for(g in d)u[g]=d[g]*r;d=u}else d*=r;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},$1=function s(e){var t;return!e||!e.getAttribute||e===dr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(H1.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:s(e.parentNode)},cu=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:au,ft.set(i,{lazy:!0,userSelect:t?"text":"none"})},K1=function s(e){if(fl(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},fv,fd,Z1=function(e,t){e=ft.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,r=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,f=e.scrollHeight,d=0,u=0,g=0,_,p,m,y,v,S;fv&&t.force3D!==!1?(v="translate3d(",S="px,0px)"):ul&&(v="translate(",S="px)"),this.scrollTop=function(T,b){if(!arguments.length)return-this.top();this.top(-T,b)},this.scrollLeft=function(T,b){if(!arguments.length)return-this.left();this.left(-T,b)},this.left=function(T,b){if(!arguments.length)return-(e.scrollLeft+a);var E=e.scrollLeft-c,R=a;if((E>2||E<-2)&&!b){c=e.scrollLeft,ft.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}T=-T,T<0?(a=T-.5|0,T=0):T>u?(a=T-u|0,T=u):a=0,(a||R)&&(this._skip||(i[ul]=v+-a+"px,"+-o+S),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=T|0,c=e.scrollLeft},this.top=function(T,b){if(!arguments.length)return-(e.scrollTop+o);var E=e.scrollTop-l,R=o;if((E>2||E<-2)&&!b){l=e.scrollTop,ft.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}T=-T,T<0?(o=T-.5|0,T=0):T>g?(o=T-g|0,T=g):o=0,(o||R)&&(this._skip||(i[ul]=v+-a+"px,"+-o+S)),e.scrollTop=T|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(r=n.firstChild;r;)y=r.nextSibling,e.appendChild(r),r=y;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(r=e.firstChild,r!==n){for(;r;)y=r.nextSibling,n.appendChild(r),r=y;e.appendChild(n),this.calibrate()}},this.calibrate=function(T){var b=e.clientWidth===_,E,R,N;l=e.scrollTop,c=e.scrollLeft,!(b&&e.clientHeight===p&&n.offsetHeight===m&&h===e.scrollWidth&&f===e.scrollHeight&&!T)&&((o||a)&&(R=this.left(),N=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),E=fl(e),(!b||T)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(E.paddingLeft)+(fd?parseFloat(E.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",fd&&(i.paddingBottom=E.paddingBottom),_=e.clientWidth,p=e.clientHeight,h=e.scrollWidth,f=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-p,m=n.offsetHeight,i.display="block",(R||N)&&(this.left(R),this.top(N)))},this.content=n,this.element=e,this._skip=!1,this.enable()},dd=function(e){if(J0()&&document.body){var t=window&&window.navigator;St=window,Qn=document,Mi=Qn.documentElement,dr=Qn.body,id=lu("div"),su=!!window.PointerEvent,pr=lu("div"),pr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",ll=pr.style.cursor==="grab"?"grab":"move",al=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,sd="ontouchstart"in Mi&&"orientation"in St||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),fd=function(){var n=lu("div"),i=lu("div"),r=i.style,o=dr,a;return r.display="inline-block",r.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),ol=function(n){for(var i=n.split(","),r=("onpointerdown"in id?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in id?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=r[a],o[r[a]]=i[a];try{Mi.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Z0=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Kt(Qn,"touchcancel",au),Kt(St,"touchmove",au),dr&&dr.addEventListener("touchstart",au),Kt(Qn,"contextmenu",function(){for(var n in Vo)Vo[n].isPressed&&Vo[n].endDrag()}),ft=rd=Q0()}ft?(Ei=ft.plugins.inertia,j0=ft.core.context||function(){},sl=ft.utils.checkPrefix,ul=sl(ul),ld=sl(ld),Yr=ft.utils.toArray,ad=ft.core.getStyleSaver,fv=!!sl("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},j1=function(){function s(t){this._listeners={},this.target=t||this}var e=s.prototype;return e.addEventListener=function(n,i){var r=this._listeners[n]||(this._listeners[n]=[]);~r.indexOf(i)||r.push(i)},e.removeEventListener=function(n,i){var r=this._listeners[n],o=r&&r.indexOf(i);o>=0&&r.splice(o,1)},e.dispatchEvent=function(n){var i=this,r;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(r=!1)}),r},s}(),Ko=function(s){B1(e,s);function e(t,n){var i;i=s.call(this)||this,rd||dd(1),t=Yr(t)[0],i.styles=ad&&ad(t,"transform,left,top"),Ei||(Ei=ft.plugins.inertia),i.vars=n=nv(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,ft.getProperty(t,"x");var r=(n.type||"x,y").toLowerCase(),o=~r.indexOf("x")||~r.indexOf("y"),a=r.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~r.indexOf("x")||~r.indexOf("left")||r==="scroll"),f=!!(~r.indexOf("y")||~r.indexOf("top")||r==="scroll"),d=n.minimumMovement||2,u=K0(i),g=Yr(n.trigger||n.handle||t),_={},p=0,m=!1,y=n.autoScrollMarginTop||40,v=n.autoScrollMarginRight||40,S=n.autoScrollMarginBottom||40,T=n.autoScrollMarginLeft||40,b=n.clickableTest||$1,E=0,R=t._gsap||ft.core.getCache(t),N=K1(t),x=function(I,ae){return parseFloat(R.get(t,I,ae))},A=t.ownerDocument||Qn,X,H,D,B,V,Y,K,ne,P,re,ue,q,L,G,te,fe,le,me,Re,ve,k,Ae,ge,Ee,Ie,z,De,Xe,st,C,M,ie,ce,de=function(I){return ci(I),I.stopImmediatePropagation&&I.stopImmediatePropagation(),!1},he=function se(I){if(u.autoScroll&&u.isDragging&&(m||le)){var ae=t,O=u.autoScroll*15,ee,oe,j,ye,pe,Le,We,Oe;for(m=!1,mr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,mr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft,ye=u.pointerX-mr.scrollLeft,pe=u.pointerY-mr.scrollTop;ae&&!oe;)oe=qo(ae.parentNode),ee=oe?mr:ae.parentNode,j=oe?{bottom:Math.max(Mi.clientHeight,St.innerHeight||0),right:Math.max(Mi.clientWidth,St.innerWidth||0),left:0,top:0}:ee.getBoundingClientRect(),Le=We=0,f&&(Oe=ee._gsMaxScrollY-ee.scrollTop,Oe<0?We=Oe:pe>j.bottom-S&&Oe?(m=!0,We=Math.min(Oe,O*(1-Math.max(0,j.bottom-pe)/S)|0)):pe<j.top+y&&ee.scrollTop&&(m=!0,We=-Math.min(ee.scrollTop,O*(1-Math.max(0,pe-j.top)/y)|0)),We&&(ee.scrollTop+=We)),h&&(Oe=ee._gsMaxScrollX-ee.scrollLeft,Oe<0?Le=Oe:ye>j.right-v&&Oe?(m=!0,Le=Math.min(Oe,O*(1-Math.max(0,j.right-ye)/v)|0)):ye<j.left+T&&ee.scrollLeft&&(m=!0,Le=-Math.min(ee.scrollLeft,O*(1-Math.max(0,ye-j.left)/T)|0)),Le&&(ee.scrollLeft+=Le)),oe&&(Le||We)&&(St.scrollTo(ee.scrollLeft,ee.scrollTop),ot(u.pointerX+Le,u.pointerY+We)),ae=ee}if(le){var je=u.x,ct=u.y;a?(u.deltaX=je-parseFloat(R.rotation),u.rotation=je,R.rotation=je+"deg",R.renderTransform(1,R)):H?(f&&(u.deltaY=ct-H.top(),H.top(ct)),h&&(u.deltaX=je-H.left(),H.left(je))):o?(f&&(u.deltaY=ct-parseFloat(R.y),R.y=ct+"px"),h&&(u.deltaX=je-parseFloat(R.x),R.x=je+"px"),R.renderTransform(1,R)):(f&&(u.deltaY=ct-parseFloat(t.style.top||0),t.style.top=ct+"px"),h&&(u.deltaX=je-parseFloat(t.style.left||0),t.style.left=je+"px")),ne&&!I&&!Xe&&(Xe=!0,kt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),f&&(u.y-=u.deltaY),se(!0)),Xe=!1)}le=!1},Ne=function(I,ae){var O=u.x,ee=u.y,oe,j;t._gsap||(R=ft.core.getCache(t)),R.uncache&&ft.getProperty(t,"x"),o?(u.x=parseFloat(R.x),u.y=parseFloat(R.y)):a?u.x=u.rotation=parseFloat(R.rotation):H?(u.y=H.top(),u.x=H.left()):(u.y=parseFloat(t.style.top||(j=fl(t))&&j.top)||0,u.x=parseFloat(t.style.left||(j||{}).left)||0),(Re||ve||k)&&!ae&&(u.isDragging||u.isThrowing)&&(k&&(Wo.x=u.x,Wo.y=u.y,oe=k(Wo),oe.x!==u.x&&(u.x=oe.x,le=!0),oe.y!==u.y&&(u.y=oe.y,le=!0)),Re&&(oe=Re(u.x),oe!==u.x&&(u.x=oe,a&&(u.rotation=oe),le=!0)),ve&&(oe=ve(u.y),oe!==u.y&&(u.y=oe),le=!0)),le&&he(!0),I||(u.deltaX=u.x-O,u.deltaY=u.y-ee,kt(u,"throwupdate","onThrowUpdate"))},He=function(I,ae,O,ee){return ae==null&&(ae=-Fs),O==null&&(O=Fs),qr(I)?function(oe){var j=u.isPressed?1-u.edgeResistance:1;return I.call(u,(oe>O?O+(oe-O)*j:oe<ae?ae+(oe-ae)*j:oe)*ee)*ee}:hl(I)?function(oe){for(var j=I.length,ye=0,pe=Fs,Le,We;--j>-1;)Le=I[j],We=Le-oe,We<0&&(We=-We),We<pe&&Le>=ae&&Le<=O&&(ye=j,pe=We);return I[ye]}:isNaN(I)?function(oe){return oe}:function(){return I*ee}},xe=function(I,ae,O,ee,oe,j,ye){return j=j&&j<Fs?j*j:Fs,qr(I)?function(pe){var Le=u.isPressed?1-u.edgeResistance:1,We=pe.x,Oe=pe.y,je,ct,dt;return pe.x=We=We>O?O+(We-O)*Le:We<ae?ae+(We-ae)*Le:We,pe.y=Oe=Oe>oe?oe+(Oe-oe)*Le:Oe<ee?ee+(Oe-ee)*Le:Oe,je=I.call(u,pe),je!==pe&&(pe.x=je.x,pe.y=je.y),ye!==1&&(pe.x*=ye,pe.y*=ye),j<Fs&&(ct=pe.x-We,dt=pe.y-Oe,ct*ct+dt*dt>j&&(pe.x=We,pe.y=Oe)),pe}:hl(I)?function(pe){for(var Le=I.length,We=0,Oe=Fs,je,ct,dt,it;--Le>-1;)dt=I[Le],je=dt.x-pe.x,ct=dt.y-pe.y,it=je*je+ct*ct,it<Oe&&(We=Le,Oe=it);return Oe<=j?I[We]:pe}:function(pe){return pe}},be=function(){var I,ae,O,ee;K=!1,H?(H.calibrate(),u.minX=ue=-H.maxScrollLeft(),u.minY=L=-H.maxScrollTop(),u.maxX=re=u.maxY=q=0,K=!0):n.bounds&&(I=hv(n.bounds,t.parentNode),a?(u.minX=ue=I.left,u.maxX=re=I.left+I.width,u.minY=L=u.maxY=q=0):!Ti(n.bounds.maxX)||!Ti(n.bounds.maxY)?(I=n.bounds,u.minX=ue=I.minX,u.minY=L=I.minY,u.maxX=re=I.maxX,u.maxY=q=I.maxY):(ae=hv(t,t.parentNode),u.minX=ue=Math.round(x(l,"px")+I.left-ae.left),u.minY=L=Math.round(x(c,"px")+I.top-ae.top),u.maxX=re=Math.round(ue+(I.width-ae.width)),u.maxY=q=Math.round(L+(I.height-ae.height))),ue>re&&(u.minX=re,u.maxX=re=ue,ue=u.minX),L>q&&(u.minY=q,u.maxY=q=L,L=u.minY),a&&(u.minRotation=ue,u.maxRotation=re),K=!0),n.liveSnap&&(O=n.liveSnap===!0?n.snap||{}:n.liveSnap,ee=hl(O)||qr(O),a?(Re=He(ee?O:O.rotation,ue,re,1),ve=null):O.points?k=xe(ee?O:O.points,ue,re,L,q,O.radius,H?-1:1):(h&&(Re=He(ee?O:O.x||O.left||O.scrollLeft,ue,re,H?-1:1)),f&&(ve=He(ee?O:O.y||O.top||O.scrollTop,L,q,H?-1:1))))},Ke=function(){u.isThrowing=!1,kt(u,"throwcomplete","onThrowComplete")},_e=function(){u.isThrowing=!1},_t=function(I,ae){var O,ee,oe,j;I&&Ei?(I===!0&&(O=n.snap||n.liveSnap||{},ee=hl(O)||qr(O),I={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?I.rotation=hd(u,ee?O:O.rotation,re,ue,1,ae):(h&&(I[l]=hd(u,ee?O:O.points||O.x||O.left,re,ue,H?-1:1,ae||u.lockedAxis==="x")),f&&(I[c]=hd(u,ee?O:O.points||O.y||O.top,q,L,H?-1:1,ae||u.lockedAxis==="y")),(O.points||hl(O)&&cl(O[0]))&&(I.linkedProps=l+","+c,I.radius=O.radius))),u.isThrowing=!0,j=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,I.duration||(I.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?j===0||cl(I)&&I.resistance>1e3?0:.5:n.minDuration,overshoot:j}),u.tween=oe=ft.to(H||t,{inertia:I,data:"_draggable",inherit:!1,onComplete:Ke,onInterrupt:_e,onUpdate:n.fastMode?kt:Ne,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:O&&O.radius?[!1,!0]:[]}),n.fastMode||(H&&(H._skip=!0),oe.render(1e9,!0,!0),Ne(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),oe.play(0),Ne(!0,!0),H&&(H._skip=!1))):K&&u.applyBounds()},$e=function(I){var ae=Ee,O;Ee=sn(t.parentNode,!0),I&&u.isPressed&&!Ee.equals(ae||new fr)&&(O=ae.inverse().apply({x:D,y:B}),Ee.apply(O,O),D=O.x,B=O.y),Ee.equals(k1)&&(Ee=null)},ke=function(){var I=1-u.edgeResistance,ae=N?Yo(A):0,O=N?Xo(A):0,ee,oe,j;o&&(R.x=x(l,"px")+"px",R.y=x(c,"px")+"px",R.renderTransform()),$e(!1),ui.x=u.pointerX-ae,ui.y=u.pointerY-O,Ee&&Ee.apply(ui,ui),D=ui.x,B=ui.y,le&&(ot(u.pointerX,u.pointerY),he(!0)),ie=sn(t),H?(be(),Y=H.top(),V=H.left()):(Ue()?(Ne(!0,!0),be()):u.applyBounds(),a?(ee=t.ownerSVGElement?[R.xOrigin-t.getBBox().x,R.yOrigin-t.getBBox().y]:(fl(t)[ld]||"0 0").split(" "),fe=u.rotationOrigin=sn(t).apply({x:parseFloat(ee[0])||0,y:parseFloat(ee[1])||0}),Ne(!0,!0),oe=u.pointerX-fe.x-ae,j=fe.y-u.pointerY+O,V=u.x,Y=u.y=Math.atan2(j,oe)*ev):(Y=x(c,"px"),V=x(l,"px"))),K&&I&&(V>re?V=re+(V-re)/I:V<ue&&(V=ue-(ue-V)/I),a||(Y>q?Y=q+(Y-q)/I:Y<L&&(Y=L-(L-Y)/I))),u.startX=V=$r(V),u.startY=Y=$r(Y)},Ue=function(){return u.tween&&u.tween.isActive()},Fe=function(){pr.parentNode&&!Ue()&&!u.isDragging&&pr.parentNode.removeChild(pr)},Ze=function(I,ae){var O;if(!X||u.isPressed||!I||(I.type==="mousedown"||I.type==="pointerdown")&&!ae&&Kr()-E<30&&ol[u.pointerEvent.type]){M&&I&&X&&ci(I);return}if(Ie=Ue(),ce=!1,u.pointerEvent=I,ol[I.type]?(ge=~I.type.indexOf("touch")?I.currentTarget||I.target:A,Kt(ge,"touchend",U),Kt(ge,"touchmove",Te),Kt(ge,"touchcancel",U),Kt(A,"touchstart",av)):(ge=null,Kt(A,"mousemove",Te)),De=null,(!su||!ge)&&(Kt(A,"mouseup",U),I&&I.target&&Kt(I.target,"mouseup",U)),Ae=b.call(u,I.target)&&n.dragClickables===!1&&!ae,Ae){Kt(I.target,"change",U),kt(u,"pressInit","onPressInit"),kt(u,"press","onPress"),cu(g,!0),M=!1;return}if(z=!ge||h===f||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2)?!1:h?"y":"x",M=!z&&!u.allowEventDefault,M&&(ci(I),Kt(St,"touchforcechange",ci)),I.changedTouches?(I=G=I.changedTouches[0],te=I.identifier):I.pointerId?te=I.pointerId:G=te=null,ou++,V1(he),B=u.pointerY=I.pageY,D=u.pointerX=I.pageX,kt(u,"pressInit","onPressInit"),(z||u.autoScroll)&&cd(t.parentNode),t.parentNode&&u.autoScroll&&!H&&!a&&t.parentNode._gsMaxScrollX&&!pr.parentNode&&!t.getBBox&&(pr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(pr)),ke(),u.tween&&u.tween.kill(),u.isThrowing=!1,ft.killTweensOf(H||t,_,!0),H&&ft.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!H&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,ne=!!(n.onDrag||u._listeners.drag),P=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(O=g.length;--O>-1;)ft.set(g[O],{cursor:n.activeCursor||n.cursor||(ll==="grab"?"grabbing":ll)});kt(u,"press","onPress")},Te=function(I){var ae=I,O,ee,oe,j,ye,pe;if(!X||od||!u.isPressed||!I){M&&I&&X&&ci(I);return}if(u.pointerEvent=I,O=I.changedTouches,O){if(I=O[0],I!==G&&I.identifier!==te){for(j=O.length;--j>-1&&(I=O[j]).identifier!==te&&I.target!==t;);if(j<0)return}}else if(I.pointerId&&te&&I.pointerId!==te)return;if(ge&&z&&!De&&(ui.x=I.pageX-(N?Yo(A):0),ui.y=I.pageY-(N?Xo(A):0),Ee&&Ee.apply(ui,ui),ee=ui.x,oe=ui.y,ye=Math.abs(ee-D),pe=Math.abs(oe-B),(ye!==pe&&(ye>d||pe>d)||al&&z===De)&&(De=ye>pe&&h?"x":"y",z&&De!==z&&Kt(St,"touchforcechange",ci),u.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(u.lockedAxis=De==="x"?"y":"x",qr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,ae)),al&&z===De))){U(ae);return}!u.allowEventDefault&&(!z||De&&z!==De)&&ae.cancelable!==!1?(ci(ae),M=!0):M&&(M=!1),u.autoScroll&&(m=!0),ot(I.pageX,I.pageY,P)},ot=function(I,ae,O){var ee=1-u.dragResistance,oe=1-u.edgeResistance,j=u.pointerX,ye=u.pointerY,pe=Y,Le=u.x,We=u.y,Oe=u.endX,je=u.endY,ct=u.endRotation,dt=le,it,at,mt,w,W,Z;u.pointerX=I,u.pointerY=ae,N&&(I-=Yo(A),ae-=Xo(A)),a?(w=Math.atan2(fe.y-ae,I-fe.x)*ev,W=u.y-w,W>180?(Y-=360,u.y=w):W<-180&&(Y+=360,u.y=w),u.x!==V||Math.abs(Y-w)>d?(u.y=w,mt=V+(Y-w)*ee):mt=V):(Ee&&(Z=I*Ee.a+ae*Ee.c+Ee.e,ae=I*Ee.b+ae*Ee.d+Ee.f,I=Z),at=ae-B,it=I-D,at<d&&at>-d&&(at=0),it<d&&it>-d&&(it=0),(u.lockAxis||u.lockedAxis)&&(it||at)&&(Z=u.lockedAxis,Z||(u.lockedAxis=Z=h&&Math.abs(it)>Math.abs(at)?"y":f?"x":null,Z&&qr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),Z==="y"?at=0:Z==="x"&&(it=0)),mt=$r(V+it*ee),w=$r(Y+at*ee)),(Re||ve||k)&&(u.x!==mt||u.y!==w&&!a)&&(k&&(Wo.x=mt,Wo.y=w,Z=k(Wo),mt=$r(Z.x),w=$r(Z.y)),Re&&(mt=$r(Re(mt))),ve&&(w=$r(ve(w)))),K&&(mt>re?mt=re+Math.round((mt-re)*oe):mt<ue&&(mt=ue+Math.round((mt-ue)*oe)),a||(w>q?w=Math.round(q+(w-q)*oe):w<L&&(w=Math.round(L+(w-L)*oe)))),(u.x!==mt||u.y!==w&&!a)&&(a?(u.endRotation=u.x=u.endX=mt,le=!0):(f&&(u.y=u.endY=w,le=!0),h&&(u.x=u.endX=mt,le=!0)),!O||kt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart")):(u.pointerX=j,u.pointerY=ye,Y=pe,u.x=Le,u.y=We,u.endX=Oe,u.endY=je,u.endRotation=ct,le=dt))},U=function se(I,ae){if(!X||!u.isPressed||I&&te!=null&&!ae&&(I.pointerId&&I.pointerId!==te&&I.target!==t||I.changedTouches&&!X1(I.changedTouches,te))){M&&I&&X&&ci(I);return}u.isPressed=!1;var O=I,ee=u.isDragging,oe=u.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2),j=ft.delayedCall(.001,Fe),ye,pe,Le,We,Oe;if(ge?(Wt(ge,"touchend",se),Wt(ge,"touchmove",Te),Wt(ge,"touchcancel",se),Wt(A,"touchstart",av)):Wt(A,"mousemove",Te),Wt(St,"touchforcechange",ci),(!su||!ge)&&(Wt(A,"mouseup",se),I&&I.target&&Wt(I.target,"mouseup",se)),le=!1,ee&&(p=tv=Kr(),u.isDragging=!1),ov(he),Ae&&!oe){I&&(Wt(I.target,"change",se),u.pointerEvent=O),cu(g,!1),kt(u,"release","onRelease"),kt(u,"click","onClick"),Ae=!1;return}for(pe=g.length;--pe>-1;)ud(g[pe],"cursor",n.cursor||(n.cursor!==!1?ll:null));if(ou--,I){if(ye=I.changedTouches,ye&&(I=ye[0],I!==G&&I.identifier!==te)){for(pe=ye.length;--pe>-1&&(I=ye[pe]).identifier!==te&&I.target!==t;);if(pe<0&&!ae)return}u.pointerEvent=O,u.pointerX=I.pageX,u.pointerY=I.pageY}return oe&&O?(ci(O),M=!0,kt(u,"release","onRelease")):O&&!ee?(M=!1,Ie&&(n.snap||n.bounds)&&_t(n.inertia||n.throwProps),kt(u,"release","onRelease"),(!al||O.type!=="touchmove")&&O.type.indexOf("cancel")===-1&&(kt(u,"click","onClick"),Kr()-E<300&&kt(u,"doubleclick","onDoubleClick"),We=O.target||t,E=Kr(),Oe=function(){E!==st&&u.enabled()&&!u.isPressed&&!O.defaultPrevented&&(We.click?We.click():A.createEvent&&(Le=A.createEvent("MouseEvents"),Le.initMouseEvent("click",!0,!0,St,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),We.dispatchEvent(Le)))},!al&&!O.defaultPrevented&&ft.delayedCall(.05,Oe))):(_t(n.inertia||n.throwProps),!u.allowEventDefault&&O&&(n.dragClickables!==!1||!b.call(u,O.target))&&ee&&(!z||De&&z===De)&&O.cancelable!==!1?(M=!0,ci(O)):M=!1,kt(u,"release","onRelease")),Ue()&&j.duration(u.tween.duration()),ee&&kt(u,"dragend","onDragEnd"),!0},Me=function(I){if(I&&u.isDragging&&!H){var ae=I.target||t.parentNode,O=ae.scrollLeft-ae._gsScrollX,ee=ae.scrollTop-ae._gsScrollY;(O||ee)&&(Ee?(D-=O*Ee.a+ee*Ee.c,B-=ee*Ee.d+O*Ee.b):(D-=O,B-=ee),ae._gsScrollX+=O,ae._gsScrollY+=ee,ot(u.pointerX,u.pointerY))}},J=function(I){var ae=Kr(),O=ae-E<100,ee=ae-p<50,oe=O&&st===E,j=u.pointerEvent&&u.pointerEvent.defaultPrevented,ye=O&&C===E,pe=I.isTrusted||I.isTrusted==null&&O&&oe;if((oe||ee&&u.vars.suppressClickOnDrag!==!1)&&I.stopImmediatePropagation&&I.stopImmediatePropagation(),O&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!oe||pe&&!ye)){pe&&oe&&(C=E),st=E;return}(u.isPressed||ee||O)&&(!pe||!I.detail||!O||j)&&ci(I),!O&&!ee&&!ce&&(I&&I.target&&(u.pointerEvent=I),kt(u,"click","onClick"))},Se=function(I){return Ee?{x:I.x*Ee.a+I.y*Ee.c+Ee.e,y:I.x*Ee.b+I.y*Ee.d+Ee.f}:{x:I.x,y:I.y}};return me=e.get(t),me&&me.kill(),i.startDrag=function(se,I){var ae,O,ee,oe;Ze(se||u.pointerEvent,!0),I&&!u.hitTest(se||u.pointerEvent)&&(ae=$o(se||u.pointerEvent),O=$o(t),ee=Se({x:ae.left+ae.width/2,y:ae.top+ae.height/2}),oe=Se({x:O.left+O.width/2,y:O.top+O.height/2}),D-=ee.x-oe.x,B-=ee.y-oe.y),u.isDragging||(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart"))},i.drag=Te,i.endDrag=function(se){return U(se||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(Kr()-p)/1e3},i.timeSinceClick=function(){return(Kr()-E)/1e3},i.hitTest=function(se,I){return e.hitTest(u.target,se,I)},i.getDirection=function(se,I){var ae=se==="velocity"&&Ei?se:cl(se)&&!a?"element":"start",O,ee,oe,j,ye,pe;return ae==="element"&&(ye=$o(u.target),pe=$o(se)),O=ae==="start"?u.x-V:ae==="velocity"?Ei.getVelocity(t,l):ye.left+ye.width/2-(pe.left+pe.width/2),a?O<0?"counter-clockwise":"clockwise":(I=I||2,ee=ae==="start"?u.y-Y:ae==="velocity"?Ei.getVelocity(t,c):ye.top+ye.height/2-(pe.top+pe.height/2),oe=Math.abs(O/ee),j=oe<1/I?"":O<0?"left":"right",oe<I&&(j!==""&&(j+="-"),j+=ee<0?"up":"down"),j)},i.applyBounds=function(se,I){var ae,O,ee,oe,j,ye;if(se&&n.bounds!==se)return n.bounds=se,u.update(!0,I);if(Ne(!0),be(),K&&!Ue()){if(ae=u.x,O=u.y,ae>re?ae=re:ae<ue&&(ae=ue),O>q?O=q:O<L&&(O=L),(u.x!==ae||u.y!==O)&&(ee=!0,u.x=u.endX=ae,a?u.endRotation=ae:u.y=u.endY=O,le=!0,he(!0),u.autoScroll&&!u.isDragging))for(cd(t.parentNode),oe=t,mr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,mr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft;oe&&!ye;)ye=qo(oe.parentNode),j=ye?mr:oe.parentNode,f&&j.scrollTop>j._gsMaxScrollY&&(j.scrollTop=j._gsMaxScrollY),h&&j.scrollLeft>j._gsMaxScrollX&&(j.scrollLeft=j._gsMaxScrollX),oe=j;u.isThrowing&&(ee||u.endX>re||u.endX<ue||u.endY>q||u.endY<L)&&_t(n.inertia||n.throwProps,ee)}return u},i.update=function(se,I,ae){if(I&&u.isPressed){var O=sn(t),ee=ie.apply({x:u.x-V,y:u.y-Y}),oe=sn(t.parentNode,!0);oe.apply({x:O.e-ee.x,y:O.f-ee.y},ee),u.x-=ee.x-oe.e,u.y-=ee.y-oe.f,he(!0),ke()}var j=u.x,ye=u.y;return $e(!I),se?u.applyBounds():(le&&ae&&he(!0),Ne(!0)),I&&(ot(u.pointerX,u.pointerY),le&&he(!0)),u.isPressed&&!I&&(h&&Math.abs(j-u.x)>.01||f&&Math.abs(ye-u.y)>.01&&!a)&&ke(),u.autoScroll&&(cd(t.parentNode,u.isDragging),m=u.isDragging,he(!0),cv(t,Me),lv(t,Me)),u},i.enable=function(se){var I={lazy:!0},ae,O,ee;if(n.cursor!==!1&&(I.cursor=n.cursor||ll),ft.utils.checkPrefix("touchCallout")&&(I.touchCallout="none"),se!=="soft"){for(iv(g,h===f?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),O=g.length;--O>-1;)ee=g[O],su||Kt(ee,"mousedown",Ze),Kt(ee,"touchstart",Ze),Kt(ee,"click",J,!0),ft.set(ee,I),ee.getBBox&&ee.ownerSVGElement&&h!==f&&ft.set(ee.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||Kt(ee,"contextmenu",de);cu(g,!1)}return lv(t,Me),X=!0,Ei&&se!=="soft"&&Ei.track(H||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ae="d"+z1++,Vo[ae]=u,H&&(H.enable(),H.element._gsDragID=ae),(n.bounds||a)&&ke(),n.bounds&&u.applyBounds(),u},i.disable=function(se){for(var I=u.isDragging,ae=g.length,O;--ae>-1;)ud(g[ae],"cursor",null);if(se!=="soft"){for(iv(g,null),ae=g.length;--ae>-1;)O=g[ae],ud(O,"touchCallout",null),Wt(O,"mousedown",Ze),Wt(O,"touchstart",Ze),Wt(O,"click",J,!0),Wt(O,"contextmenu",de);cu(g,!0),ge&&(Wt(ge,"touchcancel",U),Wt(ge,"touchend",U),Wt(ge,"touchmove",Te)),Wt(A,"mouseup",U),Wt(A,"mousemove",Te)}return cv(t,Me),X=!1,Ei&&se!=="soft"&&(Ei.untrack(H||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),H&&H.disable(),ov(he),u.isDragging=u.isPressed=Ae=!1,I&&kt(u,"dragend","onDragEnd"),u},i.enabled=function(se,I){return arguments.length?se?u.enable(I):u.disable(I):X},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),ft.set(g,{clearProps:"userSelect"}),delete Vo[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~r.indexOf("scroll")&&(H=i.scrollProxy=new Z1(t,G1({onKill:function(){u.isPressed&&U(null)}},n)),t.style.overflowY=f&&!sd?"auto":"hidden",t.style.overflowX=h&&!sd?"auto":"hidden",t=H.content),a?_.rotation=1:(h&&(_[l]=1),f&&(_[c]=1)),R.force3D="force3D"in n?n.force3D:!0,j0(K0(i)),i.enable(),i}return e.register=function(n){ft=n,dd()},e.create=function(n,i){return rd||dd(!0),Yr(n).map(function(r){return new e(r,i)})},e.get=function(n){return Vo[(Yr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(Kr()-tv)/1e3},e.hitTest=function(n,i,r){if(n===i)return!1;var o=$o(n),a=$o(i),l=o.top,c=o.left,h=o.right,f=o.bottom,d=o.width,u=o.height,g=a.left>h||a.right<c||a.top>f||a.bottom<l,_,p,m;return g||!r?!g:(m=(r+"").indexOf("%")!==-1,r=parseFloat(r)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(h,a.right)-_.left,_.height=Math.min(f,a.bottom)-_.top,_.width<0||_.height<0?!1:m?(r*=.01,p=_.width*_.height,p>=d*u*r||p>=a.width*a.height*r):_.width>r&&_.height>r)},e}(j1);W1(Ko.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Ko.zIndex=1e3,Ko.version="3.12.5",Q0()&&ft.registerPlugin(Ko);/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hi,pd,dl,dv,Zo,jo,md,pv,mv=function(){return Hi||typeof window!="undefined"&&(Hi=window.gsap)},gd={},J1=function(e){return Math.round(e*1e4)/1e4},_d=function(e){return pv(e).id},pl=function(e){return gd[_d(typeof e=="string"?dl(e)[0]:e)]},gv=function(e){var t=Zo,n;if(e-md>=.05)for(md=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},Q1={deg:360,rad:Math.PI*2},vd=function(){Hi=mv(),Hi&&(dl=Hi.utils.toArray,dv=Hi.utils.getUnit,pv=Hi.core.getCache,jo=Hi.ticker,pd=1)},eA=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=Q1[n||dv(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=jo.time,i&&(this._next=i,i._prev=this)},ml=function(){function s(t,n){pd||vd(),this.target=dl(t)[0],gd[_d(this.target)]=this,this._props={},n&&this.add(n)}s.register=function(n){Hi=n,vd()};var e=s.prototype;return e.get=function(n,i){var r=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,a,l;return o=parseFloat(i?r.v1:r.g(r.t,r.p)),a=o-parseFloat(r.v2),l=r.rCap,l&&(a=a%l,a!==a%(l/2)&&(a=a<0?a+l:a-l)),J1(a/((i?r.t1:jo.time)-r.t2))},e.getAll=function(){var n={},i=this._props,r;for(r in i)n[r]=this.get(r);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||(Zo||(jo.add(gv),md=jo.time),Zo=this._props[n]=new eA(this.target,n,i,Zo))},e.remove=function(n){var i=this._props[n],r,o;i&&(r=i._prev,o=i._next,r&&(r._next=o),o?o._prev=r:Zo===i&&(jo.remove(gv),Zo=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete gd[_d(this.target)]},s.track=function(n,i,r){pd||vd();for(var o=[],a=dl(n),l=i.split(","),c=(r||"").split(","),h=a.length,f,d;h--;){for(f=pl(a[h])||new s(a[h]),d=l.length;d--;)f.add(l[d],c[d]||c[0]);o.push(f)}return o},s.untrack=function(n,i){var r=(i||"").split(",");dl(n).forEach(function(o){var a=pl(o);a&&(r.length?r.forEach(function(l){return a.remove(l)}):a.kill(1))})},s.isTracking=function(n,i){var r=pl(n);return r&&r.isTracking(i)},s.getVelocity=function(n,i){var r=pl(n);return!r||!r.isTracking(i)?console.warn("Not tracking velocity of "+i):r.get(i)},s}();ml.getByTarget=pl,mv()&&Hi.registerPlugin(ml);/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,_v,vv,xv,xd,gl,yv,Sv,Mv,yd,Ev,_l,Sd,Tv,uu=ml.getByTarget,bv=function(){return Zt||typeof window!="undefined"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},tA=function(e){return typeof e=="string"},vl=function(e){return typeof e=="number"},Zr=function(e){return typeof e=="object"},Md=function(e){return typeof e=="function"},nA=1,wv=Array.isArray,iA=function(e){return e},zs=1e10,Av=1/zs,Cv=.05,rA=function(e){return Math.round(e*1e4)/1e4},sA=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},oA=function s(e){var t={},n,i;for(n in e)t[n]=Zr(i=e[n])&&!wv(i)?s(i):i;return t},Rv=function(e,t,n,i,r){var o=t.length,a=0,l=zs,c,h,f,d;if(Zr(e)){for(;o--;){c=t[o],h=0;for(f in e)d=c[f]-e[f],h+=d*d;h<l&&(a=o,l=h)}if((r||zs)<zs&&r<Math.sqrt(l))return e}else for(;o--;)c=t[o],h=c-e,h<0&&(h=-h),h<l&&c>=i&&c<=n&&(a=o,l=h);return t[a]},Pv=function(e,t,n,i,r,o,a){if(e.end==="auto")return e;var l=e.end,c,h;if(n=isNaN(n)?zs:n,i=isNaN(i)?-zs:i,Zr(t)){if(c=t.calculated?t:(Md(l)?l(t,a):Rv(t,l,n,i,o))||t,!t.calculated){for(h in c)t[h]=c[h];t.calculated=!0}c=c[r]}else c=Md(l)?l(t,a):wv(l)?Rv(t,l,n,i,o):parseFloat(l);return c>n?c=n:c<i&&(c=i),{max:c,min:c,unitFactor:e.unitFactor}},hu=function(e,t,n){return isNaN(e[t])?n:+e[t]},Ed=function(e,t){return t*Cv*e/yd},Lv=function(e,t,n){return Math.abs((t-e)*yd/n/Cv)},Dv={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},Iv=function(e,t,n,i){if(t.linkedProps){var r=t.linkedProps.split(","),o={},a,l,c,h,f,d;for(a=0;a<r.length;a++)l=r[a],c=t[l],c&&(vl(c.velocity)?h=c.velocity:(f=f||uu(e),h=f&&f.isTracking(l)?f.get(l):0),d=Math.abs(h/hu(c,"resistance",i)),o[l]=parseFloat(n(e,l))+Ed(h,d));return o}},aA=function(e,t,n,i,r,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),r===void 0&&(r=1),o===void 0&&(o=0),tA(e)&&(e=xv(e)[0]),!e)return 0;var a=0,l=zs,c=t.inertia||t,h=Mv(e).get,f=hu(c,"resistance",gl.resistance),d,u,g,_,p,m,y,v,S,T;T=Iv(e,c,h,f);for(d in c)Dv[d]||(u=c[d],Zr(u)||(v=v||uu(e),v&&v.isTracking(d)?u=vl(u)?{velocity:u}:{velocity:v.get(d)}:(_=+u||0,g=Math.abs(_/f))),Zr(u)&&(vl(u.velocity)?_=u.velocity:(v=v||uu(e),_=v&&v.isTracking(d)?v.get(d):0),g=Ev(i,n,Math.abs(_/hu(u,"resistance",f))),p=parseFloat(h(e,d))||0,m=p+Ed(_,g),"end"in u&&(u=Pv(u,T&&d in T?T:m,u.max,u.min,d,c.radius,_),o&&(_l===t&&(_l=c=oA(t)),c[d]=sA(u,c[d],"end"))),"max"in u&&m>+u.max+Av?(S=u.unitFactor||gl.unitFactors[d]||1,y=p>u.max&&u.min!==u.max||_*S>-15&&_*S<45?i+(n-i)*.1:Lv(p,u.max,_),y+r<l&&(l=y+r)):"min"in u&&m<+u.min-Av&&(S=u.unitFactor||gl.unitFactors[d]||1,y=p<u.min&&u.min!==u.max||_*S>-45&&_*S<15?i+(n-i)*.1:Lv(p,u.min,_),y+r<l&&(l=y+r)),y>a&&(a=y)),g>a&&(a=g));return a>l&&(a=l),a>n?n:a<i?i:a},Nv=function(){Zt=bv(),Zt&&(vv=Zt.parseEase,xv=Zt.utils.toArray,yv=Zt.utils.getUnit,Mv=Zt.core.getCache,Ev=Zt.utils.clamp,Sd=Zt.core.getStyleSaver,Tv=Zt.core.reverting||function(){},xd=vv("power3"),yd=xd(.05),Sv=Zt.core.PropTween,Zt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),gl=Zt.config(),Zt.registerPlugin(ml),_v=1)},Td={version:"3.12.5",name:"inertia",register:function(e){Zt=e,Nv()},init:function(e,t,n,i,r){_v||Nv();var o=uu(e);if(t==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=o.getAll()}this.styles=Sd&&typeof e.style=="object"&&Sd(e),this.target=e,this.tween=n,_l=t;var a=e._gsap,l=a.get,c=t.duration,h=Zr(c),f=t.preventOvershoot||h&&c.overshoot===0,d=hu(t,"resistance",gl.resistance),u=vl(c)?c:aA(e,t,h&&c.max||10,h&&c.min||.2,h&&"overshoot"in c?+c.overshoot:f?0:1,!0),g,_,p,m,y,v,S,T,b;t=_l,_l=0,b=Iv(e,t,l,d);for(g in t)Dv[g]||(_=t[g],Md(_)&&(_=_(i,e,r)),vl(_)?y=_:Zr(_)&&!isNaN(_.velocity)?y=+_.velocity:o&&o.isTracking(g)?y=o.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),v=Ed(y,u),T=0,p=l(e,g),m=yv(p),p=parseFloat(p),Zr(_)&&(S=p+v,"end"in _&&(_=Pv(_,b&&g in b?b:S,_.max,_.min,g,t.radius,y)),"max"in _&&+_.max<S?f||_.preventOvershoot?v=_.max-p:T=_.max-p-v:"min"in _&&+_.min>S&&(f||_.preventOvershoot?v=_.min-p:T=_.min-p-v)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new Sv(this._pt,e,g,p,0,iA,0,a.set(e,g,this)),this._pt.u=m||0,this._pt.c1=v,this._pt.c2=T);return n.duration(u),nA},render:function(e,t){var n=t._pt;if(e=xd(t.tween._time/t.tween._dur),e||!Tv())for(;n;)n.set(n.t,n.p,rA(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s){return Td[s]=ml[s]}),bv()&&Zt.registerPlugin(Td);/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lA=1,Jo,pn,wt,xl,jr,gr,bd,Uv=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},wd={},Ov=180/Math.PI,cA=Math.PI/180,fu={},Fv={},du={},Ad=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},uA=Ad("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),pu=Ad("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),yl=function(e){return Jo(e)[0]||console.warn("Element not found:",e)},Qo=function(e){return Math.round(e*1e4)/1e4||0},Cd=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Bv={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},kv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},zv=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ea=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},Rd={},Hv=function(e){var t=Rd[e]=Ad(e);return du[e]=t.concat(pu),t},hA=function(e){var t=e._gsap||pn.core.getCache(e);return t.gmCache===pn.ticker.frame?t.gMatrix:(t.gmCache=pn.ticker.frame,t.gMatrix=sn(e,!0,!1,!0))},fA=function s(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,r=1e3*Math.pow(10,n)*(t?-1:1),o=t?-r*900:0;e;)o+=r,e=e.previousSibling;return i?o+s(i,t,n+1):o},mu=function(e,t,n){return e.forEach(function(i){return i.d=fA(n?i.element:i.t,t)}),e.sort(function(i,r){return i.d-r.d}),e},Sl=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],r=t.length,o,a;r--;)o=t[r],a=n[o]||n.getPropertyValue(o),i.push(a?o:Fv[o]||(Fv[o]=zv(o)),a);return n},gu=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Gv=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(gu)},Pd="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Ld=function(e,t,n){var i=e.element,r=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,h=4,f,d,u;if(typeof t!="object"&&(t=e),wt&&n!==1)return wt._abs.push({t:i,b:e,a:e,sd:0}),wt._final.push(function(){return(e.cache.uncache=1)&&gu(e)}),i;for(d=l("display")==="none",(!e.isVisible||d)&&(d&&(Sl(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=r=e.width||t.width,e.height=o=e.height||t.height),Sl(e,Pd),u=window.getComputedStyle(i);h--;)c[Pd[h]]=u[Pd[h]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=r+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new Hs(i);else if(f=ea(e,fu),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new fr(1,0,0,1,g.left+Qf(),g.top+Jf())}else f.matrix=sn(i,!1,!1,!0);return f=ta(f,e,!0),e.x=gr(f.x,.01),e.y=gr(f.y,.01),i},Vv=function(e,t){return t!==!0&&(t=Jo(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},Wv=function(e){return mu(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Ld(t.sd<0?t.b:t.a,t.b,1)})},dA=function(e,t){return t&&e.idLookup[Dd(t).id]||e.elementStates[0]},Dd=function(e,t,n,i){return e instanceof Hs?e:e instanceof bi?dA(e,i):new Hs(typeof e=="string"?yl(e)||console.warn(e+" not found"):e,t,n)},pA=function(e,t){for(var n=pn.getProperty(e.element,null,"native"),i=e.props={},r=t.length;r--;)i[t[r]]=(n(t[r])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},Xv=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},mA=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+lA++),t},Yv=function(e){return e.map(function(t){return t.element})},qv=function(e,t,n){return e&&t.length&&n.add(e(Yv(t),n,new bi(t,0,!0)),0)},ta=function(e,t,n,i,r,o){var a=e.element,l=e.cache,c=e.parent,h=e.x,f=e.y,d=t.width,u=t.height,g=t.scaleX,_=t.scaleY,p=t.rotation,m=t.bounds,y=o&&bd&&bd(a,"transform"),v=e,S=t.matrix,T=S.e,b=S.f,E=e.bounds.width!==m.width||e.bounds.height!==m.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==p,R=!E&&e.simple&&t.simple&&!r,N,x,A,X,H,D,B;return R||!c?(g=_=1,p=N=0):(H=hA(c),D=H.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=Qo(Math.atan2(D.b,D.a)*Ov),N=Qo(Math.atan2(D.c,D.d)*Ov+p)%360,g=Math.sqrt(Math.pow(D.a,2)+Math.pow(D.b,2)),_=Math.sqrt(Math.pow(D.c,2)+Math.pow(D.d,2))*Math.cos(N*cA),r&&(r=Jo(r)[0],X=pn.getProperty(r),B=r.getBBox&&typeof r.getBBox=="function"&&r.getBBox(),v={scaleX:X("scaleX"),scaleY:X("scaleY"),width:B?B.width:Math.ceil(parseFloat(X("width","px"))),height:B?B.height:parseFloat(X("height","px"))}),l.rotation=p+"deg",l.skewX=N+"deg"),n?(g*=d===v.width||!v.width?1:d/v.width,_*=u===v.height||!v.height?1:u/v.height,l.scaleX=g,l.scaleY=_):(d=gr(d*g/v.scaleX,0),u=gr(u*_/v.scaleY,0),a.style.width=d+"px",a.style.height=u+"px"),i&&Xv(a,t.props),R||!c?(h+=T-e.matrix.e,f+=b-e.matrix.f):E||c!==t.parent?(l.renderTransform(1,l),D=sn(r||a,!1,!1,!0),x=H.apply({x:D.e,y:D.f}),A=H.apply({x:T,y:b}),h+=A.x-x.x,f+=A.y-x.y):(H.e=H.f=0,A=H.apply({x:T-e.matrix.e,y:b-e.matrix.f}),h+=A.x,f+=A.y),h=gr(h,.02),f=gr(f,.02),o&&!(o instanceof Hs)?y&&y.revert():(l.x=h+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=h,o.y=f,o.rotation=p,o.skewX=N,n?(o.scaleX=g,o.scaleY=_):(o.width=d,o.height=u)),o||l},Id=function(e,t){return e instanceof bi?e:new bi(e,t)},$v=function(e,t,n){var i=e.idLookup[n],r=e.alt[n];return r.isVisible&&(!(t.getElementState(r.element)||r).isVisible||!i.isVisible)?r:i},Nd=[],Ud="width,height,overflowX,overflowY".split(","),_u,Kv=function(e){if(e!==_u){var t=jr.style,n=jr.clientWidth===window.outerWidth,i=jr.clientHeight===window.outerHeight,r=4;if(e&&(n||i)){for(;r--;)Nd[r]=t[Ud[r]];n&&(t.width=jr.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=jr.clientHeight+"px",t.overflowX="hidden"),_u=e}else if(_u){for(;r--;)Nd[r]?t[Ud[r]]=Nd[r]:t.removeProperty(zv(Ud[r]));_u=e}}},Od=function(e,t,n,i){e instanceof bi&&t instanceof bi||console.warn("Not a valid state object."),n=n||{};var r=n,o=r.clearProps,a=r.onEnter,l=r.onLeave,c=r.absolute,h=r.absoluteOnLeave,f=r.custom,d=r.delay,u=r.paused,g=r.repeat,_=r.repeatDelay,p=r.yoyo,m=r.toggleClass,y=r.nested,v=r.zIndex,S=r.scale,T=r.fade,b=r.stagger,E=r.spin,R=r.prune,N=("props"in n?n:e).props,x=ea(n,Bv),A=pn.timeline({delay:d,paused:u,repeat:g,repeatDelay:_,yoyo:p,data:"isFlip"}),X=x,H=[],D=[],B=[],V=[],Y=E===!0?1:E||0,K=typeof E=="function"?E:function(){return Y},ne=e.interrupted||t.interrupted,P=A[i!==1?"to":"from"],re,ue,q,L,G,te,fe,le,me,Re,ve,k,Ae,ge;for(ue in t.idLookup)ve=t.alt[ue]?$v(t,e,ue):t.idLookup[ue],G=ve.element,Re=e.idLookup[ue],e.alt[ue]&&G===Re.element&&(e.alt[ue].isVisible||!ve.isVisible)&&(Re=e.alt[ue]),Re?(te={t:G,b:Re,a:ve,sd:Re.element===G?0:ve.isVisible?1:-1},B.push(te),te.sd&&(te.sd<0&&(te.b=ve,te.a=Re),ne&&Sl(te.b,N?du[N]:pu),T&&B.push(te.swap={t:Re.element,b:te.b,a:te.a,sd:-te.sd,swap:te})),G._flip=Re.element._flip=wt?wt.timeline:A):ve.isVisible&&(B.push({t:G,b:ea(ve,{isVisible:1}),a:ve,sd:0,entering:1}),G._flip=wt?wt.timeline:A);if(N&&(Rd[N]||Hv(N)).forEach(function(z){return x[z]=function(De){return B[De].a.props[z]}}),B.finalStates=me=[],k=function(){for(mu(B),Kv(!0),L=0;L<B.length;L++)te=B[L],Ae=te.a,ge=te.b,R&&!Ae.isDifferent(ge)&&!te.entering?B.splice(L--,1):(G=te.t,y&&!(te.sd<0)&&L&&(Ae.matrix=sn(G,!1,!1,!0)),ge.isVisible&&Ae.isVisible?(te.sd<0?(fe=new Hs(G,N,e.simple),ta(fe,Ae,S,0,0,fe),fe.matrix=sn(G,!1,!1,!0),fe.css=te.b.css,te.a=Ae=fe,T&&(G.style.opacity=ne?ge.opacity:Ae.opacity),b&&V.push(G)):te.sd>0&&T&&(G.style.opacity=ne?Ae.opacity-ge.opacity:"0"),ta(Ae,ge,S,N)):ge.isVisible!==Ae.isVisible&&(ge.isVisible?Ae.isVisible||(ge.css=Ae.css,D.push(ge),B.splice(L--,1),c&&y&&ta(Ae,ge,S,N)):(Ae.isVisible&&H.push(Ae),B.splice(L--,1))),S||(G.style.maxWidth=Math.max(Ae.width,ge.width)+"px",G.style.maxHeight=Math.max(Ae.height,ge.height)+"px",G.style.minWidth=Math.min(Ae.width,ge.width)+"px",G.style.minHeight=Math.min(Ae.height,ge.height)+"px"),y&&m&&G.classList.add(m)),me.push(Ae);var De;if(m&&(De=me.map(function(C){return C.element}),y&&De.forEach(function(C){return C.classList.remove(m)})),Kv(!1),S?(x.scaleX=function(C){return B[C].a.scaleX},x.scaleY=function(C){return B[C].a.scaleY}):(x.width=function(C){return B[C].a.width+"px"},x.height=function(C){return B[C].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(C){return B[C].a.x+"px"},x.y=function(C){return B[C].a.y+"px"},x.rotation=function(C){return B[C].a.rotation+(E?K(C,le[C],le)*360:0)},x.skewX=function(C){return B[C].a.skewX},le=B.map(function(C){return C.t}),(v||v===0)&&(x.modifiers={zIndex:function(){return v}},x.zIndex=v,x.immediateRender=n.immediateRender!==!1),T&&(x.opacity=function(C){return B[C].sd<0?0:B[C].sd>0?B[C].a.opacity:"+=0"}),V.length){b=pn.utils.distribute(b);var Xe=le.slice(V.length);x.stagger=function(C,M){return b(~V.indexOf(M)?le.indexOf(B[C].swap.t):C,M,Xe)}}if(uA.forEach(function(C){return n[C]&&A.eventCallback(C,n[C],n[C+"Params"])}),f&&le.length){X=ea(x,Bv),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ue in f)re=ea(f[ue],kv),re[ue]=x[ue],!("duration"in re)&&"duration"in x&&(re.duration=x.duration),re.stagger=x.stagger,P.call(A,le,re,0),delete X[ue]}(le.length||D.length||H.length)&&(m&&A.add(function(){return Cd(De,m,A._zTime<0?"remove":"add")},0)&&!u&&Cd(De,m,"add"),le.length&&P.call(A,le,X,0)),qv(a,H,A),qv(l,D,A);var st=wt&&wt.timeline;st&&(st.add(A,0),wt._final.push(function(){return Gv(B,!o)})),q=A.duration(),A.call(function(){var C=A.time()>=q;C&&!st&&Gv(B,!o),m&&Cd(De,m,C?"remove":"add")})},h&&(c=B.filter(function(z){return!z.sd&&!z.a.isVisible&&z.b.isVisible}).map(function(z){return z.a.element})),wt){var Ee;c&&(Ee=wt._abs).push.apply(Ee,Vv(B,c)),wt._run.push(k)}else c&&Wv(Vv(B,c)),k();var Ie=wt?wt.timeline:A;return Ie.revert=function(){return Fd(Ie,1,1)},Ie},gA=function s(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(s)},Fd=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(gA(e),t<2&&e.progress(1),e.kill()),!0},vu=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,r=i.length,o;r--;)o=i[r],t[o.id]?n[o.id]=o:t[o.id]=o},bi=function(){function s(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=Yv(t),this.elementStates=t,vu(this);else{this.targets=Jo(t);var r=n&&(n.kill===!1||n.batch&&!n.kill);wt&&!r&&wt._kill.push(this),this.update(r||!!wt)}}var e=s.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(r){return new Hs(r,i.props,i.simple)}),vu(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,vu(this),this},e.fit=function(n,i,r){for(var o=mu(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,h;l<o.length;l++)c=o[l],r&&(c.matrix=sn(c.element,!1,!1,!0)),h=a[c.id],h&&ta(c,h,i,!0,0,c),c.matrix=sn(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var r=this.getElementState(n)||fu;return(i in r?r:r.props||fu)[i]},e.add=function(n){for(var i=n.targets.length,r=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=r[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),vu(this),this},e.compare=function(n){var i=n.idLookup,r=this.idLookup,o=[],a=[],l=[],c=[],h=[],f=n.alt,d=this.alt,u=function(R,N,x){return(R.isVisible!==N.isVisible?R.isVisible?l:c:R.isVisible?a:o).push(x)&&h.push(x)},g=function(R,N,x){return h.indexOf(x)<0&&u(R,N,x)},_,p,m,y,v,S,T,b;for(m in i)v=f[m],S=d[m],_=v?$v(n,this,m):i[m],y=_.element,p=r[m],S?(b=p.isVisible||!S.isVisible&&y===p.element?p:S,T=v&&!_.isVisible&&!v.isVisible&&b.element===v.element?v:_,T.isVisible&&b.isVisible&&T.element!==b.element?((T.isDifferent(b)?a:o).push(T.element,b.element),h.push(T.element,b.element)):u(T,b,T.element),v&&T.element===v.element&&(v=i[m]),g(T.element!==p.element&&v?v:T,p,p.element),g(v&&v.element===S.element?v:T,S,S.element),v&&g(v,S.element===v.element?S:p,v.element)):(p?p.isDifferent(_)?u(_,p,y):o.push(y):l.push(y),v&&g(v,p,v.element));for(m in r)i[m]||(c.push(r[m].element),d[m]&&c.push(d[m].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=du[this.props]||pu,i=this.elementStates.length;i--;)Sl(this.elementStates[i],n)},e.interrupt=function(n){var i=this,r=[];this.targets.forEach(function(o){var a=o._flip,l=Fd(a,n?0:1);n&&l&&r.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&r.push(a)}),!n&&r.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!r.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(yl(n))]},e.makeAbsolute=function(){return mu(this.elementStates.slice(0),!0,!0).map(Ld)},s}(),Hs=function(){function s(t,n,i){this.element=t,this.update(n,i)}var e=s.prototype;return e.isDifferent=function(n){var i=this.bounds,r=n.bounds;return i.top!==r.top||i.left!==r.left||i.width!==r.width||i.height!==r.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var r=this,o=r.element,a=pn.getProperty(o),l=pn.core.getCache(o),c=o.getBoundingClientRect(),h=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new fr(1,0,0,1,c.left+Qf(),c.top+Jf()):sn(o,!1,!1,!0);r.getProp=a,r.element=o,r.id=mA(o),r.matrix=f,r.cache=l,r.bounds=c,r.isVisible=!!(c.width||c.height||c.left||c.top),r.display=a("display"),r.position=a("position"),r.parent=o.parentNode,r.x=a("x"),r.y=a("y"),r.scaleX=l.scaleX,r.scaleY=l.scaleY,r.rotation=a("rotation"),r.skewX=a("skewX"),r.opacity=a("opacity"),r.width=h?h.width:gr(a("width","px"),.04),r.height=h?h.height:gr(a("height","px"),.04),n&&pA(r,Rd[n]||Hv(n)),r.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&$0(o).inverse(),r.simple=i||Qo(f.a)===1&&!Qo(f.b)&&!Qo(f.c)&&Qo(f.d)===1,r.uncache=0},s}(),_A=function(){function s(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=s.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},s}(),vA=function(){function s(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new bi,this.timeline=pn.timeline()}var e=s.prototype;return e.add=function(n){var i=this.actions.filter(function(r){return r.vars===n});return i.length?i[0]:(i=new _A(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,r=wt,o=xl;return wt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,xl=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),xl=o,wt=r,this.killConflicts(),this},e.animate=function(){var n=this,i=wt,r=this.timeline,o=this.actions.length,a,l;for(wt=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var h=c.vars.onEnter,f=c.vars.onLeave,d=c.targets,u,g;d&&d.length&&(h||f)&&(u=new bi,c.states.forEach(function(_){return u.add(_)}),g=u.compare(na.getState(d)),g.enter.length&&h&&h(g.enter),g.leave.length&&f&&f(g.leave))}),Wv(this._abs),this._run.forEach(function(c){return c()}),l=r.duration(),a=this._final.slice(0),r.add(function(){l<=r.time()&&(a.forEach(function(c){return c()}),Uv(n,"onComplete"))}),wt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Uv(this,"onStart"),r.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(r){if(r.vars.loadState){var o,a=function l(c){c&&(r.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),r.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var r=this;return this!==wt&&(n||this.getState(i),this.loadState(function(){r._killed||(r.setState(),r.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,r;i--;)if(r=this.actions[i].getStateById(n),r)return r;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete wd[this.id]},s}(),na=function(){function s(){}return s.getState=function(t,n){var i=Id(t,n);return xl&&xl.states.push(i),n&&n.batch&&s.batch(n.batch).state.add(i),i},s.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),Od(t,Id(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},s.to=function(t,n){return Od(t,Id(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},s.fromTo=function(t,n,i){return Od(t,n,i)},s.fit=function(t,n,i){var r=i?ea(i,kv):{},o=i||r,a=o.absolute,l=o.scale,c=o.getVars,h=o.props,f=o.runBackwards,d=o.onComplete,u=o.simple,g=i&&i.fitChild&&yl(i.fitChild),_=Dd(n,h,u,t),p=Dd(t,0,u,_),m=h?du[h]:pu,y=pn.context();return h&&Xv(r,_.props),Sl(p,m),f&&("immediateRender"in r||(r.immediateRender=!0),r.onComplete=function(){gu(p),d&&d.apply(this,arguments)}),a&&Ld(p,_),r=ta(p,_,l||g,h,g,r.duration||c?r:0),y&&!c&&y.add(function(){return function(){return gu(p)}}),c?r:r.duration?pn.to(p.element,r):null},s.makeAbsolute=function(t,n){return(t instanceof bi?t:new bi(t,n)).makeAbsolute()},s.batch=function(t){return t||(t="default"),wd[t]||(wd[t]=new vA(t))},s.killFlipsOf=function(t,n){(t instanceof bi?t.targets:Jo(t)).forEach(function(i){return i&&Fd(i._flip,n!==!1?1:2)})},s.isFlipping=function(t){var n=s.getByTarget(t);return!!n&&n.isActive()},s.getByTarget=function(t){return(yl(t)||fu)._flip},s.getElementState=function(t,n){return new Hs(yl(t),n)},s.convertCoordinates=function(t,n,i){var r=sn(n,!0,!0).multiply(sn(t));return i?r.apply(i):r},s.register=function(t){if(jr=typeof document!="undefined"&&document.body,jr){pn=t,jf(jr),Jo=pn.utils.toArray,bd=pn.core.getStyleSaver;var n=pn.utils.snap(.1);gr=function(r,o){return n(parseFloat(r)+o)}}},s}();na.version="3.12.5",typeof window!="undefined"&&window.gsap&&window.gsap.registerPlugin(na);class xA{constructor(){if(this.$gallery=document.getElementById("odysseyGallery"),!this.$gallery){console.warn("Could not create Odyssey Gallery - container not found.");return}Tt.registerPlugin(nt,Ko,Td,na),this.isActive=!1,this.$sourceContainer=null,this.zoomImageTL=null,this.initOdysseyGallery(),this.initOdysseyGallerySpline()}initOdysseyGallery(){console.log("init odyssey gallery drag"),this.$container=document.getElementById("odysseyGalleryContainer"),this.$galleryItems=this.$container.querySelectorAll(".odyssey-gallery__item:not(.odyssey-gallery__item--title)"),Ko.create(this.$container,{type:"x,y",bounds:this.$gallery,inertia:!0,onDragStart:()=>{Tt.to(this.$galleryItems,{scale:.95,duration:.4,ease:"power4.out"})},onDragEnd:()=>{Tt.to(this.$galleryItems,{scale:1,duration:.8,ease:"power4.out"})}}),console.log("init odyssey gallery click"),this.$target=document.querySelector(".odyssey-gallery__destination-target"),this.$targetContainer=document.querySelector(".odyssey-gallery__destination"),this.$galleryItems.forEach(e=>{e.addEventListener("click",t=>{this.isActive||(this.$sourceContainer=e,this.swapImage(e,this.$target,!0))})}),this.$targetContainer.addEventListener("click",e=>{this.isActive&&this.swapImage(this.$target,this.$sourceContainer,!1)}),this.initZoomImageTimeline()}initZoomImageTimeline(){const e=this.$targetContainer.querySelector(".odyssey-gallery__destination-backdrop");this.zoomImageTL=Tt.timeline({paused:!0}),this.zoomImageTL.from(e,{duration:.8,opacity:0,ease:"power4.inOut"},"start").to(this.$container,{duration:.8,filter:"blur(6px)",ease:"power4.inOut"},"start")}swapImage(e,t,n){const i=e.querySelector("img"),r=na.getState(i);(i.parentNode===e?t:e).appendChild(i),n?(this.$targetContainer.classList.add("odyssey-gallery__destination--active"),this.zoomImageTL.play()):(this.zoomImageTL.reverse(),this.$targetContainer.classList.remove("odyssey-gallery__destination--active")),i.parentNode.style.zIndex=3e3,na.from(r,{duration:.8,ease:"power4.inOut",absolute:!0,delay:.1,onComplete:()=>{i.parentNode.style.zIndex=""}}),this.isActive=n}initOdysseyGallerySpline(){console.log("init odyssey gallery spline");const e=document.querySelector(".odyssey-gallery__spline-container"),t=document.createElement("canvas");t.id="gallerySplineCanvas",e.appendChild(t);const n=e.getAttribute("data-spline");if(!n)return;new Application(t).load(n);const r=document.getElementById("gallerySplineCanvas");setTimeout(()=>{r.style.width="100%",r.style.height="auto"},1e3)}}class yA{constructor(){this.initOdysseyStoryScrolling()}initOdysseyStoryScrolling(){document.querySelectorAll(".odyssey-story__scene").forEach(t=>{this.createScrollScene(t)})}createScrollScene(e){const t=e.querySelector(".odyssey-story__lead-wrapper");e.querySelector(".scene-pin"),e.querySelector(".odyssey-story__image-wrapper"),Tt.registerPlugin(nt),Tt.timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:!0,pin:t}}).fromTo(t,{opacity:0},{opacity:1,duration:1},"a")}}class SA{constructor(){this.splineContainer=document.getElementById("introSpline"),console.log(this.splineContainer),this.app=null,this.initSpline()}initSpline(){if(console.log("init odyssey intro spline"),!this.splineContainer){console.error(`Spline container with id "${this.splineContainer}" not found.`);return}const e=this.splineContainer.getAttribute("data-spline");if(!e){console.error("Spline URL not found.");return}const t=document.createElement("iframe");t.src=e,t.style.width="100%",t.style.height="100%",this.splineContainer.appendChild(t)}dispose(){this.app&&console.log("Disposing Spline app.");const e=document.getElementById("splineCanvas");e&&e.parentNode.removeChild(e)}}const MA=s=>{new SA,new yA,new xA};class EA{constructor(){this.barba=Cx,this.init()}init(){this.barba.init({transitions:[{name:"leave-home",from:{namespace:["home"]},to:{namespace:["odyssey"]},leave:Vy,afterLeave:I1,enter:Yy},{name:"enter-home",from:{namespace:["odyssey"]},to:{namespace:["home"]},leave:Xy,enter:Wy}],views:[{namespace:"home",beforeEnter:D1},{namespace:"odyssey",beforeEnter:MA}]})}}var pC="",mC="",TA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Zv={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(TA,function(){var t=document,n=t.createTextNode.bind(t);function i(q,L,G){q.style.setProperty(L,G)}function r(q,L){return q.appendChild(L)}function o(q,L,G,te){var fe=t.createElement("span");return L&&(fe.className=L),G&&(!te&&fe.setAttribute("data-"+L,G),fe.textContent=G),q&&r(q,fe)||fe}function a(q,L){return q.getAttribute("data-"+L)}function l(q,L){return!q||q.length==0?[]:q.nodeName?[q]:[].slice.call(q[0].nodeName?q:(L||t).querySelectorAll(q))}function c(q){for(var L=[];q--;)L[q]=[];return L}function h(q,L){q&&q.some(L)}function f(q){return function(L){return q[L]}}function d(q,L,G){var te="--"+L,fe=te+"-index";h(G,function(le,me){Array.isArray(le)?h(le,function(Re){i(Re,fe,me)}):i(le,fe,me)}),i(q,te+"-total",G.length)}var u={};function g(q,L,G){var te=G.indexOf(q);if(te==-1)G.unshift(q),h(u[q].depends,function(le){g(le,q,G)});else{var fe=G.indexOf(L);G.splice(te,1),G.splice(fe,0,q)}return G}function _(q,L,G,te){return{by:q,depends:L,key:G,split:te}}function p(q){return g(q,0,[]).map(f(u))}function m(q){u[q.by]=q}function y(q,L,G,te,fe){q.normalize();var le=[],me=document.createDocumentFragment();te&&le.push(q.previousSibling);var Re=[];return l(q.childNodes).some(function(ve){if(ve.tagName&&!ve.hasChildNodes()){Re.push(ve);return}if(ve.childNodes&&ve.childNodes.length){Re.push(ve),le.push.apply(le,y(ve,L,G,te,fe));return}var k=ve.wholeText||"",Ae=k.trim();Ae.length&&(k[0]===" "&&Re.push(n(" ")),h(Ae.split(G),function(ge,Ee){Ee&&fe&&Re.push(o(me,"whitespace"," ",fe));var Ie=o(me,L,ge);le.push(Ie),Re.push(Ie)}),k[k.length-1]===" "&&Re.push(n(" ")))}),h(Re,function(ve){r(me,ve)}),q.innerHTML="",r(q,me),le}var v=0;function S(q,L){for(var G in L)q[G]=L[G];return q}var T="words",b=_(T,v,"word",function(q){return y(q,"word",/\s+/,0,1)}),E="chars",R=_(E,[T],"char",function(q,L,G){var te=[];return h(G[T],function(fe,le){te.push.apply(te,y(fe,"char","",L.whitespace&&le))}),te});function N(q){q=q||{};var L=q.key;return l(q.target||"[data-splitting]").map(function(G){var te=G["\u{1F34C}"];if(!q.force&&te)return te;te=G["\u{1F34C}"]={el:G};var fe=p(q.by||a(G,"splitting")||E),le=S({},q);return h(fe,function(me){if(me.split){var Re=me.by,ve=(L?"-"+L:"")+me.key,k=me.split(G,le,te);ve&&d(G,ve,k),te[Re]=k,G.classList.add(Re)}}),G.classList.add("splitting"),te})}function x(q){q=q||{};var L=q.target=o();return L.innerHTML=q.content,N(q),L.outerHTML}N.html=x,N.add=m;function A(q,L,G){var te=l(L.matching||q.children,q),fe={};return h(te,function(le){var me=Math.round(le[G]);(fe[me]||(fe[me]=[])).push(le)}),Object.keys(fe).map(Number).sort(X).map(f(fe))}function X(q,L){return q-L}var H=_("lines",[T],"line",function(q,L,G){return A(q,{matching:G[T]},"offsetTop")}),D=_("items",v,"item",function(q,L){return l(L.matching||q.children,q)}),B=_("rows",v,"row",function(q,L){return A(q,L,"offsetTop")}),V=_("cols",v,"col",function(q,L){return A(q,L,"offsetLeft")}),Y=_("grid",["rows","cols"]),K="layout",ne=_(K,v,v,function(q,L){var G=L.rows=+(L.rows||a(q,"rows")||1),te=L.columns=+(L.columns||a(q,"columns")||1);if(L.image=L.image||a(q,"image")||q.currentSrc||q.src,L.image){var fe=l("img",q)[0];L.image=fe&&(fe.currentSrc||fe.src)}L.image&&i(q,"background-image","url("+L.image+")");for(var le=G*te,me=[],Re=o(v,"cell-grid");le--;){var ve=o(Re,"cell");o(ve,"cell-inner"),me.push(ve)}return r(q,Re),me}),P=_("cellRows",[K],"row",function(q,L,G){var te=L.rows,fe=c(te);return h(G[K],function(le,me,Re){fe[Math.floor(me/(Re.length/te))].push(le)}),fe}),re=_("cellColumns",[K],"col",function(q,L,G){var te=L.columns,fe=c(te);return h(G[K],function(le,me){fe[me%te].push(le)}),fe}),ue=_("cells",["cellRows","cellColumns"],"cell",function(q,L,G){return G[K]});return m(b),m(R),m(H),m(D),m(B),m(V),m(Y),m(ne),m(P),m(re),m(ue),N})})(Zv);var jv=Zv.exports;class bA{constructor(e){gn(this,"position",-1);gn(this,"cells",[]);this.position=e}}class wA{constructor(e,{position:t,previousCellPosition:n}={}){gn(this,"DOM",{el:null});gn(this,"position",-1);gn(this,"previousCellPosition",-1);gn(this,"original");gn(this,"state");gn(this,"color");gn(this,"originalColor");gn(this,"cache");this.DOM.el=e,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=t,this.previousCellPosition=n}set(e){this.state=e,this.DOM.el.innerHTML=this.state}}class AA{constructor(e){gn(this,"DOM",{el:null});gn(this,"lines",[]);gn(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);gn(this,"totalChars",0);this.DOM.el=e;const t=jv({target:this.DOM.el,by:"lines"});t.forEach(n=>jv({target:n.words}));for(const[n,i]of t[0].lines.entries()){const r=new bA(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new wA(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;r.cells=o,this.lines.push(r),this.totalChars+=a}}clearCells(){for(const e of this.lines)for(const t of e.cells)t.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}animate(){let t=0;const n=(i,r,o=0)=>{r.cache={state:r.state,color:r.color},o===8-1?(r.set(r.original),r.color=r.originalColor,r.DOM.el.style.color=r.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(r.set(this.getRandomChar()),r.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],r.DOM.el.style.color=r.color),++o,o<8&&setTimeout(()=>n(i,r,o),this.randomNumber(30,110))};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}class CA{constructor(){this.init()}init(){window.applyTextShuffle=function(e){const t=document.getElementById(e);t?new AA(t).trigger():console.warn('Element with ID "'+e+'" was not found.')}}}class RA{constructor(){this.$container=document.querySelector(".three-container"),this.$container&&this.init(this.$container)}init(e){const t=new Io(1,1,1),n=new qa({color:65280,emissive:65280}),i=new li(t,n),r=new v0;r.add(i);const o=new Df({antialias:!0});o.setPixelRatio(window.devicePixelRatio),o.setSize(e.clientWidth,e.clientHeight),o.toneMapping=fc;const a=o.domElement;a.style.width="100%",a.style.height="100%",a.style.position="absolute",e.appendChild(a);const l=new Gn(60,e.clientWidth/e.clientHeight,1,300);l.position.set(0,0,10),r.add(l);const c=new W0(r,l),h=new Us(new Pe(e.clientWidth,e.clientHeight),.6,.9,.1),f=new V0(o);console.log(f),f.addPass(c),f.addPass(h);const d=new k0(16777215,1);r.add(d),this.animate(f)}animate(e){requestAnimationFrame(()=>this.animate(e)),e.render()}}document.addEventListener("DOMContentLoaded",function(){new CA,document.body.getAttribute("data-barba")==="wrapper"?new EA:console.log("barba html structure is not set"),new RA})});
