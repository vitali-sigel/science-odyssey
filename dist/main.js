var eC=Object.defineProperty;var tC=(fi,di,Hn)=>di in fi?eC(fi,di,{enumerable:!0,configurable:!0,writable:!0,value:Hn}):fi[di]=Hn;var gn=(fi,di,Hn)=>(tC(fi,typeof di!="symbol"?di+"":di,Hn),Hn);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(fi){typeof define=="function"&&define.amd?define(fi):fi()})(function(){"use strict";function fi(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function di(r,e,t){return e&&fi(r.prototype,e),t&&fi(r,t),r}function Hn(){return(Hn=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function wl(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}function Xd(r){return(Xd=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}function Mu(r,e){return(Mu=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(r,e)}function Yd(r,e,t){return(Yd=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Mu(a,s.prototype),a}).apply(null,arguments)}function qd(r){var e=typeof Map=="function"?new Map:void 0;return(qd=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Yd(t,arguments,Xd(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Mu(n,t)})(r)}function Xs(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var _r,sx="2.9.7",ox=function(){};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(_r||(_r={}));var $d=_r.off,Jr=function(){function r(t){this.t=t}r.getLevel=function(){return $d},r.setLevel=function(t){return $d=_r[t]};var e=r.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,_r.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,_r.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,_r.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,_r.debug,n)},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}(),Qr=bu,ax=Kd,lx=Eu,cx=Zd,ux=Jd,jd="/",hx=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Eu(r,e){for(var t,n=[],i=0,s=0,o="",a=e&&e.delimiter||jd,l=e&&e.whitelist||void 0,c=!1;(t=hx.exec(r))!==null;){var h=t[0],f=t[1],d=t.index;if(o+=r.slice(s,d),s=d+h.length,f)o+=f[1],c=!0;else{var u="",g=t[2],_=t[3],p=t[4],m=t[5];if(!c&&o.length){var y=o.length-1,v=o[y];(!l||l.indexOf(v)>-1)&&(u=v,o=o.slice(0,y))}o&&(n.push(o),o="",c=!1);var S=_||p,T=u||a;n.push({name:g||i++,prefix:u,delimiter:T,optional:m==="?"||m==="*",repeat:m==="+"||m==="*",pattern:S?fx(S):"[^"+Wi(T===a?T:T+a)+"]+?"})}}return(o||s<r.length)&&n.push(o+r.substr(s)),n}function Kd(r,e){return function(t,n){var i=r.exec(t);if(!i)return!1;for(var s=i[0],o=i.index,a={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var h=e[c-1];a[h.name]=h.repeat?i[c].split(h.delimiter).map(function(f){return l(f,h)}):l(i[c],h)}return{path:s,index:o,params:a}}}function Zd(r,e){for(var t=new Array(r.length),n=0;n<r.length;n++)typeof r[n]=="object"&&(t[n]=new RegExp("^(?:"+r[n].pattern+")$",Tu(e)));return function(i,s){for(var o="",a=s&&s.encode||encodeURIComponent,l=!s||s.validate!==!1,c=0;c<r.length;c++){var h=r[c];if(typeof h!="string"){var f,d=i?i[h.name]:void 0;if(Array.isArray(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(f=a(d[u],h),l&&!t[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(u===0?h.prefix:h.delimiter)+f}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(f=a(String(d),h),l&&!t[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+f+'"');o+=h.prefix+f}}else o+=h}return o}}function Wi(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function fx(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Tu(r){return r&&r.sensitive?"":"i"}function Jd(r,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,s=t.end!==!1,o=t.delimiter||jd,a=[].concat(t.endsWith||[]).map(Wi).concat("$").join("|"),l=i?"^":"",c=0;c<r.length;c++){var h=r[c];if(typeof h=="string")l+=Wi(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+Wi(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),l+=h.optional?h.prefix?"(?:"+Wi(h.prefix)+"("+f+"))?":"("+f+")?":Wi(h.prefix)+"("+f+")"}}if(s)n||(l+="(?:"+Wi(o)+")?"),l+=a==="$"?"$":"(?="+a+")";else{var d=r[r.length-1],u=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Wi(o)+"(?="+a+"))?"),u||(l+="(?="+Wi(o)+"|"+a+")")}return new RegExp(l,Tu(t))}function bu(r,e,t){return r instanceof RegExp?function(n,i){if(!i)return n;var s=n.source.match(/\((?!\?)/g);if(s)for(var o=0;o<s.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(r,e):Array.isArray(r)?function(n,i,s){for(var o=[],a=0;a<n.length;a++)o.push(bu(n[a],i,s).source);return new RegExp("(?:"+o.join("|")+")",Tu(s))}(r,e,t):function(n,i,s){return Jd(Eu(n,s),i,s)}(r,e,t)}Qr.match=function(r,e){var t=[];return Kd(bu(r,t,e),t)},Qr.regexpToFunction=ax,Qr.parse=lx,Qr.compile=function(r,e){return Zd(Eu(r,e),e)},Qr.tokensToFunction=cx,Qr.tokensToRegExp=ux;var Ci={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},es=new(function(){function r(){this.o=Ci,this.u=new DOMParser}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=n.length;if(s===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],s===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),h=1;h<s;h++)c.href=arguments[h],o.href=l=c.href;return a.removeChild(o),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},r}()),Qd=new(function(){function r(){this.h=[],this.v=-1}var e=r.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var s={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.m(this.v-o),this.replace(s.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,s=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(s){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var i=n||this.v,s=Hn({},this.get(i),{},t);this.set(i,s)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,s=Ci.prefix+"-"+Ci.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},di(r,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),r}()),Al=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=es.toElement(n);i.namespace=es.getNamespace(s),i.container=es.getContainer(s),i.html=n,Qd.update({ns:i.namespace});var o=es.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},ep=Qr,dx={__proto__:null,update:Al,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:ep},tp=function(){return window.location.origin},oa=function(r){return r===void 0&&(r=window.location.href),Cl(r).port},Cl=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(tp(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=np(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},np=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},wu=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},px={__proto__:null,getHref:function(){return window.location.href},getOrigin:tp,getPort:oa,getPath:function(r){return r===void 0&&(r=window.location.href),Cl(r).path},parse:Cl,parseQuery:np,clean:wu};function mx(r,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE){if(s.status===200)n(s.responseText);else if(s.status){var o={status:s.status,statusText:s.statusText};t(r,o),i(o)}}},s.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(r,o),i(o)},s.onerror=function(){var o=new Error("Fetch error");t(r,o),i(o)},s.open("GET",r),s.timeout=e,s.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),s.setRequestHeader("x-barba","yes"),s.send()})}var gx=function(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"};function Ys(r,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=!1,o=new Promise(function(a,l){e.async=function(){return s=!0,function(h,f){h?l(h):a(f)}};var c=r.apply(e,n);s||(gx(c)?c.then(a,l):a(c))});return o}}var vr=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new Jr("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}wl(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){for(var i=this,s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return Ys(c.fn,c.ctx).apply(void 0,o)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(ox)),ip=function(){function r(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return ep(n)})}}return r.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Cl(e).path;return this.P.some(function(n){return n.exec(t)!==null})},r}(),_x=function(r){function e(n){var i;return(i=r.call(this,n)||this).k=new Map,i}wl(e,r);var t=e.prototype;return t.set=function(n,i,s){return this.k.set(n,{action:s,request:i}),{action:s,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var s=Hn({},this.k.get(n),{},i);return this.k.set(n,s),s},e}(ip),vx=function(){return!window.history.pushState},xx=function(r){return!r.el||!r.href},yx=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Sx=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Mx=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Ex=function(r){var e=r.el;return e.port!==void 0&&oa()!==oa(e.href)},Tx=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},bx=function(r){return r.el.hasAttribute(Ci.prefix+"-"+Ci.prevent)},wx=function(r){return Boolean(r.el.closest("["+Ci.prefix+"-"+Ci.prevent+'="all"]'))},Ax=function(r){var e=r.href;return wu(e)===wu()&&oa(e)===oa()},Cx=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}wl(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",vx),this.add("exists",xx),this.add("newTab",yx),this.add("blank",Sx),this.add("corsDomain",Mx),this.add("corsPort",Ex),this.add("download",Tx),this.add("preventSelf",bx),this.add("preventAll",wx),this.add("sameUrl",Ax,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e}(ip),Au=function(r){function e(t,n){var i;n===void 0&&(n="Barba error");for(var s=arguments.length,o=new Array(s>2?s-2:0),a=2;a<s;a++)o[a-2]=arguments[a];return(i=r.call.apply(r,[this].concat(o))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return wl(e,r),e}(qd(Error)),Px=function(){function r(t){t===void 0&&(t=[]),this.logger=new Jr("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var u=!0,g={};return!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(_){u&&(u=i.R(d,_,t,g),d.from&&d.to&&(u=i.R(d,_,t,g,"from")&&i.R(d,_,t,g,"to")),d.from&&!d.to&&(u=i.R(d,_,t,g,"from")),!d.from&&d.to&&(u=i.R(d,_,t,g,"to")))}),o.set(d,g),u)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,f=[a];Object.keys(l).length>0&&f.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,s,o){var a=!0,l=!1,c=t,h=n.name,f=h,d=h,u=h,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var p=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&p.indexOf(_[f])!==-1&&(l=!0),p.indexOf(_[f])===-1&&(a=!1);break;case"object":var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]?(_[d].name&&m.indexOf(_[d].name)!==-1&&(l=!0),m.indexOf(_[d].name)===-1&&(a=!1)):a=!1;break;case"function":g[u](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][h]=c[o][h]):s[h]=c[h])}return a},e.O=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(s,o){i+=n.O(t,s.name,o+1)}),t.priority=i,t},r}(),Rx=function(){function r(t){t===void 0&&(t=[]),this.logger=new Jr("@barba/core"),this.S=!1,this.store=new Px(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.S=!1},o=this,a=i||{};o.S=!0;var l=Xs(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(c){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(u){if(l)return u;c.S=!1},l=!1,c=this,h=i||{},f=h.sync===!0||!1;c.S=!0;var d=Xs(function(){function u(){return Promise.resolve(c.j("before",n,h)).then(function(){var _=!1;function p(y){return _?y:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,h)).then(function(){})})}var m=function(){if(f)return Xs(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),c.enter(n,h)])).then(function(){return Promise.resolve(c.j("afterLeave",n,h)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})})})},function(T){if(c.M(T))throw new Au(T,"Transition error [sync]")});var y=function(T){return _?T:Xs(function(){var b=function(){if(v!==!1)return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(c.enter(n,h,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})}();if(b&&b.then)return b.then(function(){})},function(b){if(c.M(b))throw new Au(b,"Transition error [before/after/enter]")})},v=!1,S=Xs(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),Al(s,n)]).then(function(T){return T[0]})).then(function(T){return v=T,Promise.resolve(c.j("afterLeave",n,h)).then(function(){})})})},function(T){if(c.M(T))throw new Au(T,"Transition error [before/after/leave]")});return S&&S.then?S.then(y):y(S)}();return m&&m.then?m.then(p):p(m)})}var g=function(){if(f)return Promise.resolve(Al(s,n)).then(function(){})}();return g&&g.then?g.then(u):u()},function(u){throw c.S=!1,u.name&&u.name==="BarbaError"?(c.logger.debug(u.label),c.logger.error(u.error),u):(c.logger.debug("Transition error [page]"),c.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a(d))}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(vr.do("once",t,n)).then(function(){return n.once?Ys(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(vr.do("leave",t,n)).then(function(){return n.leave?Ys(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(vr.do("enter",t,n)).then(function(){return n.enter?Ys(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return es.addContainer(t.next.container,n),vr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return es.removeContainer(t.current.container),vr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(vr.do(t,n,i)).then(function(){return i[t]?Ys(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},di(r,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),Lx=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){vr[n](t.L(n))}))}return r.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Ys(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Dx={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ix=new(function(){function r(){this.version=sx,this.schemaPage=Dx,this.Logger=Jr,this.logger=new Jr("@barba/core"),this.plugins=[],this.hooks=vr,this.dom=es,this.helpers=dx,this.history=Qd,this.request=mx,this.url=px}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Ci:l,h=n.requestError,f=n.timeout,d=f===void 0?2e3:f,u=n.cacheIgnore,g=u!==void 0&&u,_=n.prefetchIgnore,p=_!==void 0&&_,m=n.preventRunning,y=m!==void 0&&m,v=n.prevent,S=v===void 0?null:v,T=n.debug,b=n.logLevel;if(Jr.setLevel((T!==void 0&&T)===!0?"debug":b===void 0?"off":b),this.logger.info(this.version),Object.keys(c).forEach(function(N){Ci[N]&&(Ci[N]=c[N])}),this.$=h,this.timeout=d,this.cacheIgnore=g,this.prefetchIgnore=p,this.preventRunning=y,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var M=this.data.current;if(!M.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new _x(g),this.prevent=new Cx(p),this.transitions=new Rx(s),this.views=new Lx(a),S!==null){if(typeof S!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",S)}this.history.init(M.url.href,M.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(N){return N.init()});var P=this.data;P.trigger="barba",P.next=P.current,P.current=Hn({},this.schemaPage),this.hooks.do("ready",P),this.once(P),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var s=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var h=Xs(function(){var f=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:f,wrapper:o._})).then(function(){o.q()})},function(){Jr.getLevel()===0&&o.force(c.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=Hn({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=function(){if(o.transitions.shouldWait)return Promise.resolve(Al(a,o.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var o=i[0],a=i[1],l=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,l,o,a)===!1||(l==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var s=this.dom.getHref(i);this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Hn({href:t},this.url.parse(t))};this.C={current:n,next:Hn({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},di(r,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),r}());function Xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},Cu,an,At,ti=1e8,Mt=1/ti,Pu=Math.PI*2,Nx=Pu/4,Ox=0,sp=Math.sqrt,Ux=Math.cos,Fx=Math.sin,Zt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},Ru=function(e){return typeof e=="undefined"},Pi=function(e){return typeof e=="object"},Dn=function(e){return e!==!1},Lu=function(){return typeof window!="undefined"},Pl=function(e){return Ut(e)||Zt(e)},op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Du=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lp=/[+-]=-?[.\d]+/,cp=/[^,'"\[\]\s]+/gi,Bx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Ri,Nu,Ou,Vn={},Rl={},up,hp=function(e){return(Rl=ns(e,Vn))&&On},Uu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},fp=function(e,t){return e&&(Vn[e]=t)&&Rl&&(Rl[e]=t)||Vn},la=function(){return 0},kx={suppressEvents:!0,isStart:!0,kill:!1},Ll={suppressEvents:!0,kill:!1},zx={suppressEvents:!0},Fu={},xr=[],Bu={},dp,Wn={},ku={},pp=30,Dl=[],zu="",Hu=function(e){var t=e[0],n,i;if(Pi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Dl.length;i--&&!Dl[i].targetTest(t););n=Dl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vp(e[i],n)))||e.splice(i,1);return e},ts=function(e){return e._gsap||Hu(ri(e))[0]._gsap},mp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Ru(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Il=function(){var e=xr.length,t=xr.slice(0),n,i;for(Bu={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gp=function(e,t,n,i){xr.length&&!an&&Il(),e.render(t,n,i||an&&t<0&&(e._initted||e._startAt)),xr.length&&!an&&Il()},_p=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cp).length<2?t:Zt(e)?e.trim():e},vp=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ns=function(e,t){for(var n in t)e[n]=t[n];return e},xp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Nl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Dt,n=e.keyframes?Gx(ln(e.keyframes)):ni;if(Dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Vx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yp=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ol=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Wx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gu=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert(Ll):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Xx=function r(e){return!e||e._ts&&r(e.parent)},Sp=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ul=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fl=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Bl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fl(e),n._dirty||is(n,e)),e},Mp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ul(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Li=function(e,t,n,i){return t.parent&&yr(t),t._start=Jt((Yi(n)?n:n||e!==Dt?ii(e,n,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yp(e,t,"_first","_last",e._sort?"_start":0),Vu(t)||(e._recent=t),i||Mp(e,t),e._ts<0&&Bl(e,e._tTime),e},Ep=function(e,t){return(Vn.ScrollTrigger||Uu("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},Tp=function(e,t,n,i,s){if(Ju(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dp!==Yn.frame)return xr.push(e),e._lazy=[s,i],1},Yx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Yx(e)&&!(!e._initted&&Vu(e))||(e._ts<0||e._dp._ts<0)&&!Vu(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=ha(0,e._tDur,t),h=Ks(l,a),e._yoyo&&h&1&&(o=1-o),h!==Ks(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||an||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Tp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Gu(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&yr(e,1),!n&&!an&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$x=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Bl(e,e._tTime=e._tDur*a),e.parent&&Fl(e),n||is(e.parent,e),e},bp=function(e){return e instanceof _n?is(e):Zs(e,e._dur)},jx={_start:0,endTime:la,totalDuration:la},ii=function r(e,t,n){var i=e.labels,s=e._recent||jx,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,c;return Zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ua=function(e,t,n){var i=Yi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;o.immediateRender=Dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},Sr=function(e,t){return e||e===0?t(e):t},ha=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!Zt(e)||!(t=Bx.exec(e))?"":t[1]},Kx=function(e,t,n){return Sr(n,function(i){return ha(e,t,i)})},Wu=[].slice,wp=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==Ri},Zx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Zt(i)&&!t||wp(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Zt(e)&&!n&&(Nu||!Qs())?Wu.call((t||Ou).querySelectorAll(e),0):ln(e)?Zx(e,n):wp(e)?Wu.call(e,0):e?[e]:[]},Xu=function(e){return e=ri(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ri(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||Ou.createElement("div"):e)}},Ap=function(e){return e.sort(function(){return .5-Math.random()})},Cp=function(e){if(Ut(e))return e;var t=Pi(e)?e:{each:e},n=rs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Zt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,p=o[_],m,y,v,S,T,b,M,P,N;if(!p){if(N=t.grid==="auto"?0:(t.grid||[1,ti])[1],!N){for(M=-ti;M<(M=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(p=o[_]=[],m=l?Math.min(N,_)*h-.5:i%N,y=N===ti?0:l?_*f/N-.5:i/N|0,M=0,P=ti,b=0;b<_;b++)v=b%N-m,S=y-(b/N|0),p[b]=T=c?Math.abs(c==="y"?S:v):sp(v*v+S*S),T>M&&(M=T),T<P&&(P=T);i==="random"&&Ap(p),p.max=M-P,p.min=P,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=cn(t.amount||t.each)||0,n=n&&_<0?zp(n):n}return _=(p[d]-p.min)/p.max||0,Jt(p.b+(n?n(_):_)*p.v)+p.u}},Yu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yi(n)?0:cn(n))}},Pp=function(e,t){var n=ln(e),i,s;return!n&&Pi(e)&&(i=n=e.radius||ti,e.values?(e=ri(e.values),(s=!Yi(e[0]))&&(i*=i)):e=Yu(e.increment)),Sr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,h=0,f=e.length,d,u;f--;)s?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||Yi(o)?h:h+cn(o)}:Yu(e))},Rp=function(e,t,n,i){return Sr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Jx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Qx=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},ey=function(e,t,n){return Dp(e,t,0,1,n)},Lp=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},ty=function r(e,t,n){var i=t-e;return ln(e)?Lp(e,r(0,e.length),t):Sr(n,function(s){return(i+(s-e)%i)%i+e})},ny=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?Lp(e,r(0,e.length-1),t):Sr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},fa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?cp:Du),n+=e.substr(t,i-t)+Rp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dp=function(e,t,n,i,s){var o=t-e,a=i-n;return Sr(s,function(l){return n+((l-e)/o*a||0)})},iy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=Zt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=ns(ln(e)?[]:{},e));if(!h){for(l in t)Ku.call(a,e,l,"get",t[l]);s=function(g){return th(g,a)||(o?e.p:e)}}}return Sr(n,s)},Ip=function(e,t,n){var i=e.labels,s=ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,h;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&Il(),a&&(At=a),h=l?s.apply(c,l):s.call(c),At=o,h},da=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Xn(e,"onInterrupt"),e},Js,Np=[],Op=function(e){if(!!e)if(e=!e.name&&e.default||e,Lu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:la,render:th,add:Ku,kill:xy,modifier:vy,rawVars:0},o={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(Qs(),e!==i){if(Wn[t])return;ni(i,ni(Nl(e,s),o)),ns(i.prototype,ns(s,Nl(e,o))),Wn[i.prop=t]=i,e.targetTest&&(Dl.push(i),Fu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fp(t,i),e.register&&e.register(On,i,Nn)}else Np.push(e)},yt=255,pa={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},qu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Up=function(e,t,n){var i=e?Yi(e)?[e>>16,e>>8&yt,e&yt]:0:pa.black,s,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pa[e])i=pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Du),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=qu(l+1/3,s,o),i[1]=qu(l,s,o),i[2]=qu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ap),n&&i.length<4&&(i[3]=1),i}else i=e.match(Du)||pa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/yt,o=i[1]/yt,a=i[2]/yt,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Fp=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(s){var o=s.match($s)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Bp=function(e,t,n){var i="",s=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=Up(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Fp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Mr,"1").split($s),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Mr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Mr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),ry=/hsl[a]?\(/,kp=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=ry.test(t),e[1]=Bp(e[1],n),e[0]=Bp(e[0],n,Fp(e[1])),!0},ma,Yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,g=function _(p){var m=r()-i,y=p===!0,v,S,T,b;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,v=T-o,(v>0||y)&&(b=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(_)),S)for(u=0;u<a.length;u++)a[u](T,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){up&&(!Nu&&Lu()&&(Ri=Nu=window,Ou=Ri.document||{},Vn.gsap=On,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(On.version),hp(Rl||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Np.forEach(Op)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},ma=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ma=0,c=la},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var v=m?function(S,T,b,M){p(S,T,b,M),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),Qs(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),Qs=function(){return!ma&&Yn.wake()},ut={},sy=/^[\d.\-M][\d.\-,\s]/,oy=/["']/g,ay=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(oy,"").trim():+c,i=l.substr(a+1).trim();return t},ly=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cy=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ay(t[1])]:ly(e).split(",").map(_p)):ut._CE&&sy.test(e)?ut._CE("",e):n},zp=function(e){return function(t){return 1-e(1-t)}},Hp=function r(e,t){for(var n=e._first,i;n;)n instanceof _n?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(Ut(e)?e:ut[e]||cy(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return In(e,function(a){ut[a]=Vn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},Gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$u=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Pu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Fx((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Gp(a);return s=Pu/s,l.config=function(c,h){return r(e,c,h)},l},ju=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gp(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ut.Linear.easeNone=ut.none=ut.Linear.easeIn,ss("Elastic",$u("in"),$u("out"),$u()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),ss("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),ss("Circ",function(r){return-(sp(1-r*r)-1)}),ss("Sine",function(r){return r===1?1:-Ux(r*Nx)+1}),ss("Back",ju("in"),ju("out"),ju()),ut.SteppedEase=ut.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*ha(0,o,a)|0)+s)*n}}},qs.ease=ut["quad.out"],In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return zu+=r+","+r+"Params,"});var Vp=function(e,t){this.id=Ox++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mp,this.set=t?t.getSetter:eh},ga=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),ma||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bl(this,n),!s._dp||s.parent||Mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this._tDur,s),i!==!1),Fl(this),Wx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Li(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ul(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zx);var i=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ii(this,n),Dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Dn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ut(n)?n:vp,a=function(){var c=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){da(this)},r}();ni(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var _n=function(r){rp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Dt&&Li(n.parent||Dt,Xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ep(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ua(0,arguments,this),this},t.from=function(i,s,o){return ua(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ua(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,ii(this,o),1),this},t.call=function(i,s,o){return Li(this,zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(i,o,ii(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ca(o).immediateRender=Dn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,ca(a).immediateRender=Dn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Jt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,y,v,S,T,b,M;if(this!==Dt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,S=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=Jt(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),T=Ks(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),b&&_&1&&(d=c-d,M=1),_!==T&&!this._lock){var P=b&&T&1,N=P===(b&&_&1);if(_<T&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(M?0:Jt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Hp(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$x(this,Jt(a),Jt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var x=i<0?i:d;u;){if(g=u._prev,(u._act||x<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,s,o||an&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=x?-Mt:Mt);break}}u=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Fl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Yi(s)||(s=ii(this,s,i)),!(i instanceof ga)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Zt(i))return this.addLabel(i,s);if(Ut(i))i=zt.delayedCall(0,i);else return this}return this!==i?Li(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Zt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(Ol(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=zt.delayedCall(0,s||la,o);return a.data="isPause",this._hasPause=1,Li(this,a,ii(this,i))},t.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,c=Yi(s),h;l;)l instanceof zt?Hx(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ii(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=zt.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!u){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Zs(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:ii(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ip(this,ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ip(this,ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Li(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Zs(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(gp(Dt,Ul(i,Dt)),dp=Yn.frame),Yn.frame>=pp){pp+=Gn.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&Gn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(ga);ni(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var uy=function(e,t,n,i,s,o,a){var l=new Nn(this._pt,e,t,0,1,jp,null,s),c=0,h=0,f,d,u,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=fa(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Iu)||[];f=Iu.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?js(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=Iu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(lp.test(i)||m)&&(l.e=0),this._pt=l,l},Ku=function(e,t,n,i,s,o,a,l,c,h){Ut(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Ut(f)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Ut(f)?c?my:qp:Qu,g;if(Zt(i)&&(~i.indexOf("random(")&&(i=fa(i)),i.charAt(1)==="="&&(g=js(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Zu)return!isNaN(d*i)&&i!==""?(g=new Nn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?_y:$p,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Uu(t,i),uy.call(this,e,t,d,i,u,l||Gn.stringFilter,c))},hy=function(e,t,n,i,s){if(Ut(e)&&(e=_a(e,s,t,n,i)),!Pi(e)||e.style&&e.nodeType||ln(e)||op(e))return Zt(e)?_a(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=_a(e[a],s,t,n,i);return o},Wp=function(e,t,n,i,s,o){var a,l,c,h;if(Wn[e]&&(a=new Wn[e]).init(s,a.rawVars?t[e]:hy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Js))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Er,Zu,Ju=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Cu,S=e.timeline,T,b,M,P,N,x,A,W,G,I,k,H,Y;if(S&&(!d||!s)&&(s="none"),e._ease=rs(s,qs.ease),e._yEase=f?zp(rs(f===!0?s:f,qs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(W=p[0]?ts(p[0]).harness:0,H=W&&i[W.prop],T=Nl(i,Fu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?Ll:kx),_._lazy=0),o){if(yr(e._startAt=zt.set(p,ni({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!u)&&e._startAt.revert(Ll),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),M=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Dn(l),immediateRender:a,stagger:0,parent:m},T),H&&(M[W.prop]=H),yr(e._startAt=zt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Ll):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Dn(l)||l&&!g,b=0;b<p.length;b++){if(N=p[b],A=N._gsap||Hu(p)[b]._gsap,e._ptLookup[b]=I={},Bu[A.id]&&xr.length&&Il(),k=y===p?b:y.indexOf(N),W&&(G=new W).init(N,H||T,e,k,y)!==!1&&(e._pt=P=new Nn(e._pt,N,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(K){I[K]=P}),G.priority&&(x=1)),!W||H)for(M in T)Wn[M]&&(G=Wp(M,T,e,k,N,y))?G.priority&&(x=1):I[M]=P=Ku.call(e,N,M,"get",T[M],k,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(N,e._op[b]),v&&e._pt&&(Er=e,Dt.killTweensOf(N,I,e.globalTime(t)),Y=!e.parent,Er=0),e._pt&&l&&(Bu[A.id]=1)}x&&Kp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&S.render(ti,!0,!0)},fy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Zu=1,e.vars[t]="+=0",Ju(e,a),Zu=0,l?aa(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ft(n)+cn(f.e)),f.b&&(f.b=h.s+cn(f.b))},dy=function(e,t){var n=e[0]?ts(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ns({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},py=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},_a=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):Zt(e)&&~e.indexOf("random(")?fa(e):e},Xp=zu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yp={};In(Xp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yp[r]=1});var zt=function(r){rp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ca(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Dt,v=(ln(n)||op(n)?Yi(n[0]):"length"in i)?[n]:ri(n),S,T,b,M,P,N,x,A;if(a._targets=v.length?Hu(v):aa("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||Pl(c)||Pl(h)){if(i=a.vars,S=a.timeline=new _n({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Xi(a),S._start=0,d||Pl(c)||Pl(h)){if(M=v.length,x=d&&Cp(d),Pi(d))for(P in d)~Xp.indexOf(P)&&(A||(A={}),A[P]=d[P]);for(T=0;T<M;T++)b=Nl(i,Yp),b.stagger=0,m&&(b.yoyoEase=m),A&&ns(b,A),N=v[T],b.duration=+_a(c,Xi(a),T,N,v),b.delay=(+_a(h,Xi(a),T,N,v)||0)-a._delay,!d&&M===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),S.to(N,b,x?x(T,N,v):0),S._ease=ut.none;S.duration()?c=h=0:a.timeline=0}else if(g){ca(ni(S.vars.defaults,{ease:"none"})),S._ease=rs(g.ease||i.ease||"none");var W=0,G,I,k;if(ln(g))g.forEach(function(H){return S.to(v,H,">")}),S.duration();else{b={};for(P in g)P==="ease"||P==="easeEach"||py(P,g[P],b,g.easeEach);for(P in b)for(G=b[P].sort(function(H,Y){return H.t-Y.t}),W=0,T=0;T<G.length;T++)I=G[T],k={ease:I.e,duration:(I.t-(T?G[T-1].t:0))/100*c},k[P]=I.v,S.to(v,k,W),W+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return u===!0&&!Cu&&(Er=Xi(a),Dt.killTweensOf(v),Er=0),Li(y,Xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Jt(y._time)&&Dn(f)&&Xx(Xi(a))&&y.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-h)||0)),p&&Ep(Xi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Mt&&!h?l:i<Mt?0:i,d,u,g,_,p,m,y,v,S;if(!c)qx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=Jt(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===Jt(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,d=c-d),p=Ks(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Hp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tp(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Gu(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Gu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&yr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ma||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ju(this,c),h=this._ease(c/this._dur),fy(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Bl(this,0),this.parent||yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!s||s==="all")&&Vx(a,l))return s==="all"&&(this._pt=0),da(this);for(f=this._op=this._op||[],s!=="all"&&(Zt(s)&&(_={},In(s,function(y){return _[y]=1}),s=_),s=dy(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,u={}):(u=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ol(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&da(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ua(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ua(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Dt.killTweensOf(i,s,o)},e}(ga);ni(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),In("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new _n,t=Wu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qu=function(e,t,n){return e[t]=n},qp=function(e,t,n){return e[t](n)},my=function(e,t,n,i){return e[t](i.fp,n)},gy=function(e,t,n){return e.setAttribute(t,n)},eh=function(e,t){return Ut(e[t])?qp:Ru(e[t])&&e.setAttribute?gy:Qu},$p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_y=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},th=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vy=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},xy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ol(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Nn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$p,this.d=l||this,this.set=c||Qu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yy,this.m=n,this.mt=s,this.tween=i},r}();In(zu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Fu[r]=1}),Vn.TweenMax=Vn.TweenLite=zt,Vn.TimelineLite=Vn.TimelineMax=_n,Dt=new _n({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Gn.stringFilter=kp;var os=[],kl={},Sy=[],Zp=0,My=0,nh=function(e){return(kl[e]||Sy).map(function(t){return t()})},ih=function(){var e=Date.now(),t=[];e-Zp>2&&(nh("matchMediaInit"),os.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),nh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zp=e,nh("matchMedia"))},Jp=function(){function r(t,n){this.selector=n&&Xu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=My++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=At,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Xu(s)),At=o,f=i.apply(o,arguments),Ut(f)&&o._r.push(f),At=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=os.length;o--;)os[o].id===this.id&&os.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Ey=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Pi(n)||(n={matches:n});var o=new Jp(0,s||this.scope),a=o.conditions={},l,c,h;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ri.matchMedia(n[c]),l&&(os.indexOf(o)<0&&os.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ih):l.addEventListener("change",ih)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),zl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Op(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Zt(e)&&(e=ri(e)[0]);var s=ts(e||{}).get,o=n?vp:_p;return n==="native"&&(n=""),e&&(t?o((Wn[t]&&Wn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ri(e),e.length>1){var i=e.map(function(h){return On.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=Wn[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Js._pt=0,f.init(e,n?h+n:h,Js,0,[e]),f.render(1,f),Js._pt&&th(1,Js)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=On.to(e,ns((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,qs.ease)),xp(qs,e||{})},config:function(e){return xp(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!Vn[a]&&aa(t+" effect requires "+a+" plugin.")}),ku[t]=function(a,l,c){return n(ri(a),ni(l||{},s),c)},o&&(_n.prototype[t]=function(a,l,c){return this.add(ku[t](a,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,s;for(n.smoothChildTiming=Dn(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Li(n,i,i._start-i._delay),i=s;return Li(Dt,n,0),n},context:function(e,t){return e?new Jp(e,t):At},matchMedia:function(e){return new Ey(e)},matchMediaRefresh:function(){return os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ih()},addEventListener:function(e,t){var n=kl[e]||(kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ty,wrapYoyo:ny,distribute:Cp,random:Rp,snap:Pp,normalize:ey,getUnit:cn,clamp:Kx,splitColor:Up,toArray:ri,selector:Xu,mapRange:Dp,pipe:Jx,unitize:Qx,interpolate:iy,shuffle:Ap},install:hp,effects:ku,ticker:Yn,updateRoot:_n.updateRoot,plugins:Wn,globalTimeline:Dt,core:{PropTween:Nn,globals:fp,Tween:zt,Timeline:_n,Animation:ga,getCache:ts,_removeLinkedListItem:Ol,reverting:function(){return an},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Cu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return zl[r]=zt[r]}),Yn.add(_n.updateRoot),Js=zl.to({},{duration:0});var Ty=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},by=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Ty(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},rh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Zt(s)&&(l={},In(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}by(a,s)}}}},On=zl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rh("roundProps",Yu),rh("modifiers"),rh("snap",Pp))||zl;zt.version=_n.version=On.version="3.12.5",up=1,Lu()&&Qs(),ut.Power0,ut.Power1,ut.Power2,ut.Power3,ut.Power4,ut.Linear,ut.Quad,ut.Cubic,ut.Quart,ut.Quint,ut.Strong,ut.Elastic,ut.Back,ut.SteppedEase,ut.Bounce,ut.Sine,ut.Expo,ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qp,Tr,eo,sh,as,em,oh,wy=function(){return typeof window!="undefined"},qi={},ls=180/Math.PI,to=Math.PI/180,no=Math.atan2,tm=1e8,ah=/([A-Z])/g,Ay=/(left|right|width|margin|padding|x)/i,Cy=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Py=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ry=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ly=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},nm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},im=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Dy=function(e,t,n){return e.style[t]=n},Iy=function(e,t,n){return e.style.setProperty(t,n)},Ny=function(e,t,n){return e._gsap[t]=n},Oy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Uy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Fy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},It="transform",Un=It+"Origin",By=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=$i(i,a)}):this.tfm[e]=o.x?o[e]:$i(i,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},rm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ky=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ah,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=oh(),(!s||!s.isStart)&&!n[It]&&(rm(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sm=function(e,t){var n={target:e,props:[],revert:ky,save:By};return e._gsap||On.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},om,ch=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},Ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ah,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,io(t)||t,1)||""},am="O,Moz,ms,Ms,Webkit".split(","),io=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(am[o]+e in s););return o<0?null:(o===3?"ms":o>=0?am[o]:"")+e},uh=function(){wy()&&window.document&&(Qp=window,Tr=Qp.document,eo=Tr.documentElement,as=ch("div")||{style:{}},ch("div"),It=io(It),Un=It+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",om=!!io("perspective"),oh=On.core.reverting,sh=1)},hh=function r(e){var t=ch("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(eo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),eo.removeChild(t),this.style.cssText=s,o},lm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cm=function(e){var t;try{t=e.getBBox()}catch{t=hh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===hh||(t=hh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+lm(e,["x","cx","x1"])||0,y:+lm(e,["y","cy","y1"])||0,width:0,height:0}:t},um=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cm(e))},cs=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Un&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ah,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,i,s,o){var a=new Nn(e._pt,t,n,0,1,o?im:nm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},hm={deg:1,rad:1,turn:1},zy={grid:1,flex:1},wr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=Ay.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!s||hm[i]||hm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&um(e),(u||o==="%")&&(qi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Ft(u?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Ft(s/p.width*f);if(u&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[h],y?e.style[t]=y:cs(e,t)}else(u||o==="%")&&!zy[Ii(_,"display")]&&(a.position=Ii(e,"position")),_===e&&(a.position="static"),_.appendChild(as),g=as[h],_.removeChild(as),a.position="absolute";return l&&u&&(p=ts(_),p.time=Yn.time,p.width=_[h]),Ft(d?g*s/f:g&&s?f/g*s:0)},$i=function(e,t,n,i){var s;return sh||uh(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=xa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gl(Ii(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Hl[t]&&Hl[t](e,t,n)||Ii(e,t)||mp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(e,t,s,n)+n:s},Hy=function(e,t,n,i){if(!n||n==="none"){var s=io(t,e,1),o=s&&Ii(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ii(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,jp),l=0,c=0,h,f,d,u,g,_,p,m,y,v,S,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ii(e,t)||i,_?e.style[t]=_:cs(e,t)),h=[n,i],kp(h),n=h[0],i=h[1],d=n.match($s)||[],T=i.match($s)||[],T.length){for(;f=$s.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,S=_.substr((u+"").length),p.charAt(1)==="="&&(p=js(u,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=$s.lastIndex-v.length,v||(v=v||Gn.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(u=wr(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:m-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?im:nm;return lp.test(i)&&(a.e=0),this._pt=a,a},fm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=fm[n]||n,t[1]=fm[i]||i,t.join(" ")},Vy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qi[a]&&(l=1,a=a==="transformOrigin"?Un:It),cs(n,a);l&&(cs(n,It),o&&(o.svg&&n.removeAttribute("transform"),xa(n,1),o.uncache=1,rm(i)))}},Hl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,Vy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},va=[1,0,0,1,0,0],dm={},pm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mm=function(e){var t=Ii(e,It);return pm(t)?va:t.substr(7).match(ap).map(Ft)},fh=function(e,t){var n=e._gsap||ts(e),i=e.style,s=mm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?va:s):(s===va&&!e.offsetParent&&e!==eo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,eo.appendChild(e)),s=mm(e),l?i.display=l:cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dh=function(e,t,n,i,s,o){var a=e._gsap,l=s||fh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,M,P,N;n?l!==va&&(M=u*p-g*_)&&(P=S*(p/M)+T*(-_/M)+(_*y-p*m)/M,N=S*(-g/M)+T*(u/M)-(u*y-g*m)/M,S=P,T=N):(b=cm(e),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(m=S-c,y=T-h,a.xOffset=f+(m*u+y*_)-m,a.yOffset=d+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(br(o,a,"xOrigin",c,S),br(o,a,"yOrigin",h,T),br(o,a,"xOffset",f,a.xOffset),br(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},xa=function(e,t){var n=e._gsap||new Vp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ii(e,Un)||"0",h,f,d,u,g,_,p,m,y,v,S,T,b,M,P,N,x,A,W,G,I,k,H,Y,K,re,R,se,fe,$,D,X;return h=f=d=_=p=m=y=v=S=0,u=g=1,n.svg=!!(e.getCTM&&um(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),M=fh(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),dh(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,M)),T=n.xOrigin||0,b=n.yOrigin||0,M!==va&&(A=M[0],W=M[1],G=M[2],I=M[3],h=k=M[4],f=H=M[5],M.length===6?(u=Math.sqrt(A*A+W*W),g=Math.sqrt(I*I+G*G),_=A||W?no(W,A)*ls:0,y=G||I?no(G,I)*ls+_:0,y&&(g*=Math.abs(Math.cos(y*to))),n.svg&&(h-=T-(T*A+b*G),f-=b-(T*W+b*I))):(X=M[6],$=M[7],R=M[8],se=M[9],fe=M[10],D=M[11],h=M[12],f=M[13],d=M[14],P=no(X,fe),p=P*ls,P&&(N=Math.cos(-P),x=Math.sin(-P),Y=k*N+R*x,K=H*N+se*x,re=X*N+fe*x,R=k*-x+R*N,se=H*-x+se*N,fe=X*-x+fe*N,D=$*-x+D*N,k=Y,H=K,X=re),P=no(-G,fe),m=P*ls,P&&(N=Math.cos(-P),x=Math.sin(-P),Y=A*N-R*x,K=W*N-se*x,re=G*N-fe*x,D=I*x+D*N,A=Y,W=K,G=re),P=no(W,A),_=P*ls,P&&(N=Math.cos(P),x=Math.sin(P),Y=A*N+W*x,K=k*N+H*x,W=W*N-A*x,H=H*N-k*x,A=Y,k=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Ft(Math.sqrt(A*A+W*W+G*G)),g=Ft(Math.sqrt(H*H+X*X)),P=no(k,H),y=Math.abs(P)>2e-4?P*ls:0,S=D?1/(D<0?-D:D):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pm(Ii(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(u*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ft(u),n.scaleY=Ft(g),n.rotation=Ft(_)+a,n.rotationX=Ft(p)+a,n.rotationY=Ft(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=Gl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?Xy:om?gm:Wy,n.uncache=0,n},Gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ph=function(e,t,n){var i=cn(t);return Ft(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},Wy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gm(e,t)},us="0deg",ya="0px",hs=") ",gm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,S="",T=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==us||h!==us)){var b=parseFloat(h)*to,M=Math.sin(b),P=Math.cos(b),N;b=parseFloat(f)*to,N=Math.cos(b),o=ph(y,o,M*N*-v),a=ph(y,a,-Math.sin(b)*-v),l=ph(y,l,P*N*-v+v)}p!==ya&&(S+="perspective("+p+hs),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||o!==ya||a!==ya||l!==ya)&&(S+=l!==ya||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),c!==us&&(S+="rotate("+c+hs),h!==us&&(S+="rotateY("+h+hs),f!==us&&(S+="rotateX("+f+hs),(d!==us||u!==us)&&(S+="skew("+d+", "+u+hs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+hs),y.style[It]=S||"translate(0, 0)"},Xy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),T,b,M,P,N;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=to,c*=to,T=Math.cos(l)*f,b=Math.sin(l)*f,M=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=to,N=Math.tan(c-h),N=Math.sqrt(1+N*N),M*=N,P*=N,h&&(N=Math.tan(h),N=Math.sqrt(1+N*N),T*=N,b*=N)),T=Ft(T),b=Ft(b),M=Ft(M),P=Ft(P)):(T=f,P=d,b=M=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=wr(u,"x",o,"px"),S=wr(u,"y",a,"px")),(g||_||p||m)&&(v=Ft(v+g-(g*T+_*M)+p),S=Ft(S+_-(g*b+_*P)+m)),(i||s)&&(N=u.getBBox(),v=Ft(v+i/100*N.width),S=Ft(S+s/100*N.height)),N="matrix("+T+","+b+","+M+","+P+","+v+","+S+")",u.setAttribute("transform",N),y&&(u.style[It]=N)},Yy=function(e,t,n,i,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ls:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*tm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*tm)%o-~~(c/o)*o)),e._pt=d=new Nn(e._pt,t,n,i,c,Py),d.e=h,d.u="deg",e._props.push(n),d},_m=function(e,t){for(var n in t)e[n]=t[n];return e},qy=function(e,t,n){var i=_m({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=xa(n,1),cs(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=xa(n,1),o[It]=c);for(l in qi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=cn(c),g=cn(h),f=u!==g?wr(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Nn(e._pt,a,l,f,d-f,lh),e._pt.u=g||0,e._props.push(l));_m(a,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Hl[e>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return $i(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var vm={name:"css",register:uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,y,v,S,T,b,M,P;sh||uh(),this.styles=this.styles||sm(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Wn[_]&&Wp(_,t,n,i,e,s)))){if(u=typeof h,g=Hl[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=fa(h)),g)g(this,e,_,h,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Mr.lastIndex=0,Mr.test(c)||(p=cn(c),m=cn(h)),m?p!==m&&(c=wr(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Zt(c)&&~c.indexOf("random(")&&(c=fa(c)),cn(c+"")||c==="auto"||(c+=Gn.units[_]||cn($i(e,_))||""),(c+"").charAt(1)==="="&&(c=$i(e,_))):c=$i(e,_),d=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),_ in Di&&(_==="autoAlpha"&&(d===1&&$i(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),br(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in qi,v){if(this.styles.save(_),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Nn(this._pt,a,It,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Nn(this._pt,T,"scaleY",T.scaleY,(y?js(T.scaleY,y+f):f)-T.scaleY||0,lh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Un,0,a[Un]),h=Gy(h),T.svg?dh(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&br(this,T,"zOrigin",T.zOrigin,m),br(this,a,_,Gl(c),Gl(h)));continue}else if(_==="svgOrigin"){dh(e,h,1,b,0,this);continue}else if(_ in dm){Yy(this,T,_,d,y?js(d,y+h):h);continue}else if(_==="smoothOrigin"){br(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){qy(this,h,e);continue}}else _ in a||(_=io(_)||_);if(v||(f||f===0)&&(d||d===0)&&!Cy.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=cn(h)||(_ in Gn.units?Gn.units[_]:p),p!==m&&(d=wr(e,_,c,m)),this._pt=new Nn(this._pt,v?T:a,_,d,(y?js(d,y+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Ly:lh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Ry);else if(_ in a)Hy.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){Uu(_,h);continue}v||(_ in a?P.push(_,0,a[_]):P.push(_,1,c||e[_])),o.push(_)}}M&&Kp(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Un&&(e._gsap.x||$i(e,"x"))?n&&em===n?t==="scale"?Oy:Ny:(em=n||{})&&(t==="scale"?Uy:Fy):e.style&&!Ru(e.style[t])?Dy:~t.indexOf("-")?Iy:eh(e,t)},core:{_removeProperty:cs,_getMatrix:fh}};On.utils.checkPrefix=io,On.core.getStyleSaver=sm,function(r,e,t,n){var i=In(r+","+e+","+t,function(s){qi[s]=1});In(e,function(s){Gn.units[s]="deg",dm[s]=1}),Di[i[13]]=r+","+e,In(n,function(s){var o=s.split(":");Di[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"}),On.registerPlugin(vm);var Tt=On.registerPlugin(vm)||On;Tt.core.Tween;const $y=r=>(console.log("leave home"),Tt.to(r.current.container,{duration:2.5,onComplete:()=>{r.current.container.style="display: none",console.log("leave home complete")}})),jy=r=>{},Ky=r=>Tt.to(r.current.container,{opacity:0,duration:.6}),Zy=r=>(window.scrollTo(0,0),Tt.set(r.next.container,{position:"absolute",top:"0px",width:"100%"}),Tt.from(r.next.container,{yPercent:10,opacity:0,duration:3,ease:"power4.out",onComplete:()=>{Tt.set(r.next.container,{clearProps:"all"})}}));function xm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Jy(r,e,t){return e&&xm(r.prototype,e),t&&xm(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,Vl,qn,Ar,Cr,ro,ym,fs,Sa,Sm,ji,pi,Mm,Em=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Tm=1,so=[],lt=[],Ni=[],Ma=Date.now,mh=function(e,t){return t},Qy=function(){var e=Sa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Ni),lt=n,Ni=i,mh=function(o,a){return t[o](a)}},Pr=function(e,t){return~Ni.indexOf(e)&&Ni[Ni.indexOf(e)+1][t]},Ea=function(e){return!!~Sm.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wl="scrollLeft",Xl="scrollTop",gh=function(){return ji&&ji.isPressed||lt.cache++},Yl=function(e,t){var n=function i(s){if(s||s===0){Tm&&(qn.history.scrollRestoration="manual");var o=ji&&ji.isPressed;s=i.v=Math.round(s)||(ji&&ji.iOS?1:0),e(s),i.cacheID=lt.cache,o&&mh("ss",s)}else(t||lt.cache!==i.cacheID||mh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:Wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yl(function(r){return arguments.length?qn.scrollTo(r,Wt.sc()):qn.pageXOffset||Ar[Wl]||Cr[Wl]||ro[Wl]||0})},Wt={s:Xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:Yl(function(r){return arguments.length?qn.scrollTo(yn.sc(),r):qn.pageYOffset||Ar[Xl]||Cr[Xl]||ro[Xl]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Rr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=Ar.scrollingElement||Cr);var s=lt.indexOf(e),o=i===Wt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||vn(e,"scroll",gh);var a=lt[s+o],l=a||(lt[s+o]=Yl(Pr(e,n),!0)||(Ea(e)?i:Yl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},_h=function(e,t,n){var i=e,s=e,o=Ma(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=Ma();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=Ma();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Ta=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},wm=function(){Sa=rn.core.globals().ScrollTrigger,Sa&&Sa.core&&Qy()},Am=function(e){return rn=e||Em(),!Vl&&rn&&typeof document!="undefined"&&document.body&&(qn=window,Ar=document,Cr=Ar.documentElement,ro=Ar.body,Sm=[qn,Ar,Cr,ro],rn.utils.clamp,Mm=rn.core.context||function(){},fs="onpointerenter"in ro?"pointer":"mouse",ym=Bt.isTouch=qn.matchMedia&&qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=Bt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tm=0},500),wm(),Vl=1),Vl};yn.op=Wt,lt.cache=0;var Bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Vl||Am(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||wm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,T=n.onRight,b=n.onLeft,M=n.onUp,P=n.onDown,N=n.onChangeX,x=n.onChangeY,A=n.onChange,W=n.onToggleX,G=n.onToggleY,I=n.onHover,k=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,K=n.isNormalizer,re=n.onGestureStart,R=n.onGestureEnd,se=n.onWheel,fe=n.onEnable,$=n.onDisable,D=n.onClick,X=n.scrollSpeed,ie=n.capture,me=n.allowClicks,ue=n.lockAxis,_e=n.onLockAxis;this.target=a=Fn(a)||Cr,this.vars=n,u&&(u=rn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,X=X||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qn.getComputedStyle(ro).lineHeight)||22);var Le,Ee,z,Pe,ve,be,Ue,V=this,Ne=0,qe=0,tt=n.passive||!h,C=Rr(a,yn),E=Rr(a,Wt),oe=C(),he=E(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&pi[0]==="pointerdown",de=Ea(a),Fe=a.ownerDocument||Ar,ze=[0,0,0],Te=[0,0,0],we=0,Ke=function(){return we=Ma()},xe=function(J,ae){return(V.event=J)&&u&&~u.indexOf(J.target)||ae&&ge&&J.pointerType!=="touch"||Y&&Y(J,ae)},mt=function(){V._vx.reset(),V._vy.reset(),Ee.pause(),f&&f(V)},Ze=function(){var J=V.deltaX=bm(ze),ae=V.deltaY=bm(Te),j=Math.abs(J)>=i,Me=Math.abs(ae)>=i;A&&(j||Me)&&A(V,J,ae,ze,Te),j&&(T&&V.deltaX>0&&T(V),b&&V.deltaX<0&&b(V),N&&N(V),W&&V.deltaX<0!=Ne<0&&W(V),Ne=V.deltaX,ze[0]=ze[1]=ze[2]=0),Me&&(P&&V.deltaY>0&&P(V),M&&V.deltaY<0&&M(V),x&&x(V),G&&V.deltaY<0!=qe<0&&G(V),qe=V.deltaY,Te[0]=Te[1]=Te[2]=0),(Pe||z)&&(H&&H(V),z&&(y(V),z=!1),Pe=!1),be&&!(be=!1)&&_e&&_e(V),ve&&(se(V),ve=!1),Le=0},He=function(J,ae,j){ze[j]+=J,Te[j]+=ae,V._vx.update(J),V._vy.update(ae),c?Le||(Le=requestAnimationFrame(Ze)):Ze()},Ie=function(J,ae){ue&&!Ue&&(V.axis=Ue=Math.abs(J)>Math.abs(ae)?"x":"y",be=!0),Ue!=="y"&&(ze[2]+=J,V._vx.update(J,!0)),Ue!=="x"&&(Te[2]+=ae,V._vy.update(ae,!0)),c?Le||(Le=requestAnimationFrame(Ze)):Ze()},Be=function(J){if(!xe(J,1)){J=Ta(J,h);var ae=J.clientX,j=J.clientY,Me=ae-V.x,pe=j-V.y,De=V.isDragging;V.x=ae,V.y=j,(De||Math.abs(V.startX-ae)>=s||Math.abs(V.startY-j)>=s)&&(y&&(z=!0),De||(V.isDragging=!0),Ie(Me,pe),De||p&&p(V))}},L=V.onPress=function(F){xe(F,1)||F&&F.button||(V.axis=Ue=null,Ee.pause(),V.isPressed=!0,F=Ta(F),Ne=qe=0,V.startX=V.x=F.clientX,V.startY=V.y=F.clientY,V._vx.reset(),V._vy.reset(),vn(K?a:Fe,pi[1],Be,tt,!0),V.deltaX=V.deltaY=0,v&&v(V))},te=V.onRelease=function(F){if(!xe(F,1)){xn(K?a:Fe,pi[1],Be,!0);var J=!isNaN(V.y-V.startY),ae=V.isDragging,j=ae&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Me=Ta(F);!j&&J&&(V._vx.reset(),V._vy.reset(),h&&me&&rn.delayedCall(.08,function(){if(Ma()-we>300&&!F.defaultPrevented){if(F.target.click)F.target.click();else if(Fe.createEvent){var pe=Fe.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,qn,1,Me.screenX,Me.screenY,Me.clientX,Me.clientY,!1,!1,!1,!1,0,null),F.target.dispatchEvent(pe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&ae&&!K&&Ee.restart(!0),m&&ae&&m(V),S&&S(V,j)}},Oe=function(J){return J.touches&&J.touches.length>1&&(V.isGesturing=!0)&&re(J,V.isDragging)},U=function(){return(V.isGesturing=!1)||R(V)},ye=function(J){if(!xe(J)){var ae=C(),j=E();He((ae-oe)*X,(j-he)*X,1),oe=ae,he=j,f&&Ee.restart(!0)}},Z=function(J){if(!xe(J)){J=Ta(J,h),se&&(ve=!0);var ae=(J.deltaMode===1?l:J.deltaMode===2?qn.innerHeight:1)*g;He(J.deltaX*ae,J.deltaY*ae,0),f&&!K&&Ee.restart(!0)}},Se=function(J){if(!xe(J)){var ae=J.clientX,j=J.clientY,Me=ae-V.x,pe=j-V.y;V.x=ae,V.y=j,Pe=!0,f&&Ee.restart(!0),(Me||pe)&&Ie(Me,pe)}},le=function(J){V.event=J,I(V)},O=function(J){V.event=J,k(V)},ce=function(J){return xe(J)||Ta(J,h)&&D(V)};Ee=V._dc=rn.delayedCall(d||.25,mt).pause(),V.deltaX=V.deltaY=0,V._vx=_h(0,50,!0),V._vy=_h(0,50,!0),V.scrollX=C,V.scrollY=E,V.isDragging=V.isGesturing=V.isPressed=!1,Mm(this),V.enable=function(F){return V.isEnabled||(vn(de?Fe:a,"scroll",gh),o.indexOf("scroll")>=0&&vn(de?Fe:a,"scroll",ye,tt,ie),o.indexOf("wheel")>=0&&vn(a,"wheel",Z,tt,ie),(o.indexOf("touch")>=0&&ym||o.indexOf("pointer")>=0)&&(vn(a,pi[0],L,tt,ie),vn(Fe,pi[2],te),vn(Fe,pi[3],te),me&&vn(a,"click",Ke,!0,!0),D&&vn(a,"click",ce),re&&vn(Fe,"gesturestart",Oe),R&&vn(Fe,"gestureend",U),I&&vn(a,fs+"enter",le),k&&vn(a,fs+"leave",O),H&&vn(a,fs+"move",Se)),V.isEnabled=!0,F&&F.type&&L(F),fe&&fe(V)),V},V.disable=function(){V.isEnabled&&(so.filter(function(F){return F!==V&&Ea(F.target)}).length||xn(de?Fe:a,"scroll",gh),V.isPressed&&(V._vx.reset(),V._vy.reset(),xn(K?a:Fe,pi[1],Be,!0)),xn(de?Fe:a,"scroll",ye,ie),xn(a,"wheel",Z,ie),xn(a,pi[0],L,ie),xn(Fe,pi[2],te),xn(Fe,pi[3],te),xn(a,"click",Ke,!0),xn(a,"click",ce),xn(Fe,"gesturestart",Oe),xn(Fe,"gestureend",U),xn(a,fs+"enter",le),xn(a,fs+"leave",O),xn(a,fs+"move",Se),V.isEnabled=V.isPressed=V.isDragging=!1,$&&$(V))},V.kill=V.revert=function(){V.disable();var F=so.indexOf(V);F>=0&&so.splice(F,1),ji===V&&(ji=0)},so.push(V),K&&Ea(a)&&(ji=V),V.enable(_)},Jy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Bt.version="3.12.5",Bt.create=function(r){return new Bt(r)},Bt.register=Am,Bt.getAll=function(){return so.slice()},Bt.getById=function(r){return so.filter(function(e){return e.vars.id===r})[0]},Em()&&rn.registerPlugin(Bt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,oo,ht,Nt,mi,bt,Cm,ql,ba,wa,Aa,$l,un,jl,vh,Sn,Pm,Rm,ao,Lm,xh,Dm,Mn,yh,Im,Nm,Lr,Sh,Mh,lo,Eh,Kl,Th,bh,Zl=1,hn=Date.now,wh=hn(),si=0,Ca=0,Om=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Um=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},eS=function r(){return Ca&&requestAnimationFrame(r)},Fm=function(){return jl=1},Bm=function(){return jl=0},Oi=function(e){return e},Pa=function(e){return Math.round(e*1e5)/1e5||0},km=function(){return typeof window!="undefined"},zm=function(){return Ge||km()&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},ds=function(e){return!!~Cm.indexOf(e)},Hm=function(e){return(e==="Height"?Eh:ht["inner"+e])||mi["client"+e]||bt["client"+e]},Gm=function(e){return Pr(e,"getBoundingClientRect")||(ds(e)?function(){return uc.width=ht.innerWidth,uc.height=Eh,uc}:function(){return Ki(e)})},tS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Pr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Hm(s):e["client"+s])||0}},nS=function(e,t){return!t||~Ni.indexOf(e)?Gm(e):function(){return uc}},Ui=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Pr(e,n))?o()-Gm(e)()[s]:ds(e)?(mi[n]||bt[n])-Hm(i):e[n]-e["offset"+i])},Jl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},$n=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Ra=function(e){return typeof e=="number"},ps=function(e){return typeof e=="object"},La=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ah=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},co=Math.abs,Vm="left",Wm="top",Ch="right",Ph="bottom",ms="width",gs="height",Da="Right",Ia="Left",Na="Top",Oa="Bottom",Ht="padding",oi="margin",uo="Width",Rh="Height",Xt="px",ai=function(e){return ht.getComputedStyle(e)},iS=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ki=function(e,t){var n=t&&ai(e)[vh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ge.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ql=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ym=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},rS=function(e){return function(t){return Ge.utils.snap(Ym(e),t)}},Lh=function(e){var t=Ge.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},sS=function(e){return function(t,n){return Lh(Ym(e))(t,n.direction)}},ec=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},tc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nc={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},rc=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ic?ic[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sc=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,g=Nt.createElement("div"),_=ds(n)||Pr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?bt:n,y=e.indexOf("start")!==-1,v=y?c:h,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Wt?Ch:Ph)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],oc(g,0,i,y),g},oc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+uo]=1,s["border"+a+uo]=0,s[n.p]=t+"px",Ge.set(e,s)},ot=[],Dh={},Ua,$m=function(){return hn()-si>34&&(Ua||(Ua=requestAnimationFrame(Zi)))},ho=function(){(!Mn||!Mn.isPressed||Mn.startX>bt.clientWidth)&&(lt.cache++,Mn?Ua||(Ua=requestAnimationFrame(Zi)):Zi(),si||vs("scrollStart"),si=hn())},Ih=function(){Nm=ht.innerWidth,Im=ht.innerHeight},Fa=function(){lt.cache++,!un&&!Dm&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!yh||Nm!==ht.innerWidth||Math.abs(ht.innerHeight-Im)>ht.innerHeight*.25)&&ql.restart(!0)},_s={},oS=[],jm=function r(){return en(rt,"scrollEnd",r)||ys(!0)},vs=function(e){return _s[e]&&_s[e].map(function(t){return t()})||oS},jn=[],Km=function(e){for(var t=0;t<jn.length;t+=5)(!e||jn[t+4]&&jn[t+4].query===e)&&(jn[t].style.cssText=jn[t+1],jn[t].getBBox&&jn[t].setAttribute("transform",jn[t+2]||""),jn[t+3].uncache=1)},Nh=function(e,t){var n;for(Sn=0;Sn<ot.length;Sn++)n=ot[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Kl=!0,t&&Km(t),t||vs("revert")},Zm=function(e,t){lt.cache++,(t||!Tn)&&lt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(ht.history.scrollRestoration=Mh=e)},Tn,xs=0,Jm,aS=function(){if(Jm!==xs){var e=Jm=xs;requestAnimationFrame(function(){return e===xs&&ys(!0)})}},Qm=function(){bt.appendChild(lo),Eh=!Mn&&lo.offsetHeight||ht.innerHeight,bt.removeChild(lo)},eg=function(e){return ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(si&&!e&&!Kl){Qt(rt,"scrollEnd",jm);return}Qm(),Tn=rt.isRefreshing=!0,lt.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=vs("refreshInit");Lm&&rt.sort(),t||Nh(),lt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Kl=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Th=1,eg(!0),ot.forEach(function(i){var s=Ui(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),eg(!1),Th=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Zm(Mh,1),ql.pause(),xs++,Tn=2,Zi(2),ot.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=rt.isRefreshing=!1,vs("refresh")},Oh=0,ac=1,Ba,Zi=function(e){if(e===2||!Tn&&!Kl){rt.isUpdating=!0,Ba&&Ba.update(0);var t=ot.length,n=hn(),i=n-wh>=50,s=t&&ot[0].scroll();if(ac=Oh>s?-1:1,Tn||(Oh=s),i&&(si&&!jl&&n-si>200&&(si=0,vs("scrollEnd")),Aa=wh,wh=n),ac<0){for(Sn=t;Sn-- >0;)ot[Sn]&&ot[Sn].update(0,i);ac=1}else for(Sn=0;Sn<t;Sn++)ot[Sn]&&ot[Sn].update(0,i);rt.isUpdating=!1}Ua=0},Uh=[Vm,Wm,Ph,Ch,oi+Oa,oi+Da,oi+Na,oi+Ia,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lc=Uh.concat([ms,gs,"boxSizing","max"+uo,"max"+Rh,"position",oi,Ht,Ht+Na,Ht+Da,Ht+Oa,Ht+Ia]),lS=function(e,t,n){fo(n);var i=e._gsap;if(i.spacerIsNative)fo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Uh.length,o=t.style,a=e.style,l;s--;)l=Uh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ph]=a[Ch]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=Ql(e,yn)+Xt,o[gs]=Ql(e,Wt)+Xt,o[Ht]=a[oi]=a[Wm]=a[Vm]="0",fo(i),a[ms]=a["max"+uo]=n[ms],a[gs]=a["max"+Rh]=n[gs],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},cS=/([A-Z])/g,fo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ge.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(cS,"-$1").toLowerCase())}},cc=function(e){for(var t=lc.length,n=e.style,i=[],s=0;s<t;s++)i.push(lc[s],n[lc[s]]);return i.t=e,i},uS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},uc={left:0,top:0},tg=function(e,t,n,i,s,o,a,l,c,h,f,d,u,g){En(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?rc("0"+e.substr(3),n):0));var _=u?u.time():0,p,m,y;if(u&&u.seek(0),isNaN(e)||(e=+e),Ra(e))u&&(e=Ge.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&oc(a,n,i,!0);else{En(t)&&(t=t(l));var v=(e||"0").split(" "),S,T,b,M;y=Fn(t,l)||bt,S=Ki(y)||{},(!S||!S.left&&!S.top)&&ai(y).display==="none"&&(M=y.style.display,y.style.display="block",S=Ki(y),M?y.style.display=M:y.style.removeProperty("display")),T=rc(v[0],S[i.d]),b=rc(v[1]||"0",n),e=S[i.p]-c[i.p]-h+T+s-b,a&&oc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,N=o._isStart;p="scroll"+i.d2,oc(o,P,i,N&&P>20||!N&&(f?Math.max(bt[p],mi[p]):o.parentNode[p])<=P+1),f&&(c=Ki(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return u&&y&&(p=Ki(y),u.seek(d),m=Ki(y),u._caScrollDist=p[i.p]-m[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},hS=/(webkit|moz|length|cssText|inset)/i,ng=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===bt){e._stOrig=s.cssText,a=ai(e);for(o in a)!+o&&!hS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ge.core.getCache(e).uncache=1,t.appendChild(e)}},ig=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},hc=function(e,t,n){var i={};i[t.p]="+="+n,Ge.set(e,i)},rg=function(e,t){var n=Rr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=ig(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Ge.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),rt.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},rt=function(){function r(t,n){oo||r.register(Ge)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=Oi;return}n=Xm($n(n)||Ra(n)||n.nodeType?{trigger:n}:n,nc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,T=s.pinReparent,b=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,N=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Wt,A=!f&&f!==0,W=Fn(n.scroller||ht),G=Ge.core.getCache(W),I=ds(W),k=("pinType"in n?n.pinType:Pr(W,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=A&&n.toggleActions.split(" "),K="markers"in n?n.markers:nc.markers,re=I?0:parseFloat(ai(W)["border"+x.p2+uo])||0,R=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(R)},fe=tS(W,I,x),$=nS(W,I),D=0,X=0,ie=0,me=Rr(W,x),ue,_e,Le,Ee,z,Pe,ve,be,Ue,V,Ne,qe,tt,C,E,oe,he,ge,de,Fe,ze,Te,we,Ke,xe,mt,Ze,He,Ie,Be,L,te,Oe,U,ye,Z,Se,le,O;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=W,R.scroll=M?M.time.bind(M):me,Ee=me(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Lm=1,n.refreshPriority===-9999&&(Ba=R)),G.tweenScroll=G.tweenScroll||{top:rg(W,Wt),left:rg(W,yn)},R.tweenTo=ue=G.tweenScroll[x.p],R.scrubDuration=function(j){Oe=Ra(j)&&j,Oe?te?te.duration(j):te=Ge.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Oe,paused:!0,onComplete:function(){return m&&m(R)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Be=0,l||(l=i.vars.id)),S&&((!ps(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in bt.style&&Ge.set(I?[bt,mi]:W,{scrollBehavior:"auto"}),lt.forEach(function(j){return En(j)&&j.target===(I?Nt.scrollingElement||mi:W)&&(j.smooth=!1)}),Le=En(S.snapTo)?S.snapTo:S.snapTo==="labels"?rS(i):S.snapTo==="labelsDirectional"?sS(i):S.directional!==!1?function(j,Me){return Lh(S.snapTo)(j,hn()-X<500?0:Me.direction)}:Ge.utils.snap(S.snapTo),U=S.duration||{min:.1,max:2},U=ps(U)?wa(U.min,U.max):wa(U,U),ye=Ge.delayedCall(S.delay||Oe/2||.1,function(){var j=me(),Me=hn()-X<500,pe=ue.tween;if((Me||Math.abs(R.getVelocity())<10)&&!pe&&!jl&&D!==j){var De=(j-Pe)/C,Ye=i&&!A?i.totalProgress():De,ke=Me?0:(Ye-L)/(hn()-Aa)*1e3||0,Je=Ge.utils.clamp(-De,1-De,co(ke/2)*ke/.185),ct=De+(S.inertia===!1?0:Je),dt,st,at=S,gt=at.onStart,w=at.onInterrupt,q=at.onComplete;if(dt=Le(ct,R),Ra(dt)||(dt=ct),st=Math.round(Pe+dt*C),j<=ve&&j>=Pe&&st!==j){if(pe&&!pe._initted&&pe.data<=co(st-j))return;S.inertia===!1&&(Je=dt-De),ue(st,{duration:U(co(Math.max(co(ct-Ye),co(dt-Ye))*.185/ke/.05||0)),ease:S.ease||"power3",data:co(st-j),onInterrupt:function(){return ye.restart(!0)&&w&&w(R)},onComplete:function(){R.update(),D=me(),i&&(te?te.resetTo("totalProgress",dt,i._tTime/i._tDur):i.progress(dt)),Be=L=i&&!A?i.totalProgress():R.progress,y&&y(R),q&&q(R)}},j,Je*C,st-j-Je*C),gt&&gt(R,ue.tween)}}else R.isActive&&D!==j&&ye.restart(!0)}).pause()),l&&(Dh[l]=R),d=R.trigger=Fn(d||u!==!0&&u),O=d&&d._gsap&&d._gsap.stRevert,O&&(O=O(R)),u=u===!0?d:Fn(u),$n(a)&&(a={targets:d,className:a}),u&&(g===!1||g===oi||(g=!g&&u.parentNode&&u.parentNode.style&&ai(u.parentNode).display==="flex"?!1:Ht),R.pin=u,_e=Ge.core.getCache(u),_e.spacer?E=_e.pinState:(b&&(b=Fn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),_e.spacerIsNative=!!b,b&&(_e.spacerState=cc(b))),_e.spacer=ge=b||Nt.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),_e.pinState=E=cc(u)),n.force3D!==!1&&Ge.set(u,{force3D:!0}),R.spacer=ge=_e.spacer,Ie=ai(u),Ke=Ie[g+x.os2],Fe=Ge.getProperty(u),ze=Ge.quickSetter(u,x.a,Xt),Fh(u,ge,Ie),he=cc(u)),K){qe=ps(K)?Xm(K,qm):qm,V=sc("scroller-start",l,W,x,qe,0),Ne=sc("scroller-end",l,W,x,qe,0,V),de=V["offset"+x.op.d2];var ce=Fn(Pr(W,"content")||W);be=this.markerStart=sc("start",l,ce,x,qe,de,0,M),Ue=this.markerEnd=sc("end",l,ce,x,qe,de,0,M),M&&(le=Ge.quickSetter([be,Ue],x.a,Xt)),!k&&!(Ni.length&&Pr(W,"fixedMarkers")===!0)&&(iS(I?bt:W),Ge.set([V,Ne],{force3D:!0}),mt=Ge.quickSetter(V,x.a,Xt),He=Ge.quickSetter(Ne,x.a,Xt))}if(M){var F=M.vars.onUpdate,J=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),F&&F.apply(M,J||[])})}if(R.previous=function(){return ot[ot.indexOf(R)-1]},R.next=function(){return ot[ot.indexOf(R)+1]},R.revert=function(j,Me){if(!Me)return R.kill(!0);var pe=j!==!1||!R.enabled,De=un;pe!==R.isReverted&&(pe&&(Z=Math.max(me(),R.scroll.rec||0),ie=R.progress,Se=i&&i.progress()),be&&[be,Ue,V,Ne].forEach(function(Ye){return Ye.style.display=pe?"none":"block"}),pe&&(un=R,R.update(pe)),u&&(!T||!R.isActive)&&(pe?lS(u,ge,E):Fh(u,ge,ai(u),xe)),pe||R.update(pe),un=De,R.isReverted=pe)},R.refresh=function(j,Me,pe,De){if(!((un||!R.enabled)&&!Me)){if(u&&j&&si){Qt(r,"scrollEnd",jm);return}!Tn&&se&&se(R),un=R,ue.tween&&!pe&&(ue.tween.kill(),ue.tween=0),te&&te.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ye=fe(),ke=$(),Je=M?M.duration():Ui(W,x),ct=C<=.01,dt=0,st=De||0,at=ps(pe)?pe.end:n.end,gt=n.endTrigger||d,w=ps(pe)?pe.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),q=R.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,R),ee=d&&Math.max(0,ot.indexOf(R))||0,ne=ee,Q,Ce,Ve,$e,We,Xe,je,et,Rt,Kt,vt,Ln,xt;for(K&&ps(pe)&&(Ln=Ge.getProperty(V,x.p),xt=Ge.getProperty(Ne,x.p));ne--;)Xe=ot[ne],Xe.end||Xe.refresh(0,1)||(un=R),je=Xe.pin,je&&(je===d||je===u||je===q)&&!Xe.isReverted&&(Kt||(Kt=[]),Kt.unshift(Xe),Xe.revert(!0,!0)),Xe!==ot[ne]&&(ee--,ne--);for(En(w)&&(w=w(R)),w=Om(w,"start",R),Pe=tg(w,d,Ye,x,me(),be,V,R,ke,re,k,Je,M,R._startClamp&&"_startClamp")||(u?-.001:0),En(at)&&(at=at(R)),$n(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=($n(w)?w.split(" ")[0]:"")+at:(dt=rc(at.substr(2),Ye),at=$n(w)?w:(M?Ge.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Pe):Pe)+dt,gt=d)),at=Om(at,"end",R),ve=Math.max(Pe,tg(at||(gt?"100% 0":Je),gt,Ye,x,me()+dt,Ue,Ne,R,ke,re,k,Je,M,R._endClamp&&"_endClamp"))||-.001,dt=0,ne=ee;ne--;)Xe=ot[ne],je=Xe.pin,je&&Xe.start-Xe._pinPush<=Pe&&!M&&Xe.end>0&&(Q=Xe.end-(R._startClamp?Math.max(0,Xe.start):Xe.start),(je===d&&Xe.start-Xe._pinPush<Pe||je===q)&&isNaN(w)&&(dt+=Q*(1-Xe.progress)),je===u&&(st+=Q));if(Pe+=dt,ve+=dt,R._startClamp&&(R._startClamp+=dt),R._endClamp&&!Tn&&(R._endClamp=ve||-.001,ve=Math.min(ve,Ui(W,x))),C=ve-Pe||(Pe-=.01)&&.001,ct&&(ie=Ge.utils.clamp(0,1,Ge.utils.normalize(Pe,ve,Z))),R._pinPush=st,be&&dt&&(Q={},Q[x.a]="+="+dt,q&&(Q[x.p]="-="+me()),Ge.set([be,Ue],Q)),u&&!(Th&&R.end>=Ui(W,x)))Q=ai(u),$e=x===Wt,Ve=me(),Te=parseFloat(Fe(x.a))+st,!Je&&ve>1&&(vt=(I?Nt.scrollingElement||mi:W).style,vt={style:vt,value:vt["overflow"+x.a.toUpperCase()]},I&&ai(bt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(vt.style["overflow"+x.a.toUpperCase()]="scroll")),Fh(u,ge,Q),he=cc(u),Ce=Ki(u,!0),et=k&&Rr(W,$e?yn:Wt)(),g?(xe=[g+x.os2,C+st+Xt],xe.t=ge,ne=g===Ht?Ql(u,x)+C+st:0,ne&&(xe.push(x.d,ne+Xt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=ne+Xt)),fo(xe),q&&ot.forEach(function(Qe){Qe.pin===q&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),k&&me(Z)):(ne=Ql(u,x),ne&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=ne+Xt)),k&&(We={top:Ce.top+($e?Ve-Pe:et)+Xt,left:Ce.left+($e?et:Ve-Pe)+Xt,boxSizing:"border-box",position:"fixed"},We[ms]=We["max"+uo]=Math.ceil(Ce.width)+Xt,We[gs]=We["max"+Rh]=Math.ceil(Ce.height)+Xt,We[oi]=We[oi+Na]=We[oi+Da]=We[oi+Oa]=We[oi+Ia]="0",We[Ht]=Q[Ht],We[Ht+Na]=Q[Ht+Na],We[Ht+Da]=Q[Ht+Da],We[Ht+Oa]=Q[Ht+Oa],We[Ht+Ia]=Q[Ht+Ia],oe=uS(E,We,T),Tn&&me(0)),i?(Rt=i._initted,xh(1),i.render(i.duration(),!0,!0),we=Fe(x.a)-Te+C+st,Ze=Math.abs(C-we)>1,k&&Ze&&oe.splice(oe.length-2,2),i.render(0,!0,!0),Rt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xh(0)):we=C,vt&&(vt.value?vt.style["overflow"+x.a.toUpperCase()]=vt.value:vt.style.removeProperty("overflow-"+x.a));else if(d&&me()&&!M)for(Ce=d.parentNode;Ce&&Ce!==bt;)Ce._pinOffset&&(Pe-=Ce._pinOffset,ve-=Ce._pinOffset),Ce=Ce.parentNode;Kt&&Kt.forEach(function(Qe){return Qe.revert(!1,!0)}),R.start=Pe,R.end=ve,Ee=z=Tn?Z:me(),!M&&!Tn&&(Ee<Z&&me(Z),R.scroll.rec=0),R.revert(!1,!0),X=hn(),ye&&(D=-1,ye.restart(!0)),un=0,i&&A&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se||0,!0).render(i.time(),!0,!0),(ct||ie!==R.progress||M||_)&&(i&&!A&&i.totalProgress(M&&Pe<-.001&&!ie?Ge.utils.normalize(Pe,ve,0):ie,!0),R.progress=ct||(Ee-Pe)/C===ie?0:ie),u&&g&&(ge._pinOffset=Math.round(R.progress*we)),te&&te.invalidate(),isNaN(Ln)||(Ln-=Ge.getProperty(V,x.p),xt-=Ge.getProperty(Ne,x.p),hc(V,x,Ln),hc(be,x,Ln-(De||0)),hc(Ne,x,xt),hc(Ue,x,xt-(De||0))),ct&&!Tn&&R.update(),h&&!Tn&&!tt&&(tt=!0,h(R),tt=!1)}},R.getVelocity=function(){return(me()-z)/(hn()-Aa)*1e3||0},R.endAnimation=function(){La(R.callbackAnimation),i&&(te?te.progress(1):i.paused()?A||La(i,R.direction<0,1):La(i,i.reversed()))},R.labelToScroll=function(j){return i&&i.labels&&(Pe||R.refresh()||Pe)+i.labels[j]/i.duration()*C||0},R.getTrailing=function(j){var Me=ot.indexOf(R),pe=R.direction>0?ot.slice(0,Me).reverse():ot.slice(Me+1);return($n(j)?pe.filter(function(De){return De.vars.preventOverlaps===j}):pe).filter(function(De){return R.direction>0?De.end<=Pe:De.start>=ve})},R.update=function(j,Me,pe){if(!(M&&!pe&&!j)){var De=Tn===!0?Z:R.scroll(),Ye=j?0:(De-Pe)/C,ke=Ye<0?0:Ye>1?1:Ye||0,Je=R.progress,ct,dt,st,at,gt,w,q,ee;if(Me&&(z=Ee,Ee=M?me():De,S&&(L=Be,Be=i&&!A?i.totalProgress():ke)),p&&u&&!un&&!Zl&&si&&(!ke&&Pe<De+(De-z)/(hn()-Aa)*p?ke=1e-4:ke===1&&ve>De+(De-z)/(hn()-Aa)*p&&(ke=.9999)),ke!==Je&&R.enabled){if(ct=R.isActive=!!ke&&ke<1,dt=!!Je&&Je<1,w=ct!==dt,gt=w||!!ke!=!!Je,R.direction=ke>Je?1:-1,R.progress=ke,gt&&!un&&(st=ke&&!Je?0:ke===1?1:Je===1?2:3,A&&(at=!w&&Y[st+1]!=="none"&&Y[st+1]||Y[st],ee=i&&(at==="complete"||at==="reset"||at in i))),N&&(w||ee)&&(ee||f||!i)&&(En(N)?N(R):R.getTrailing(N).forEach(function(Ve){return Ve.endAnimation()})),A||(te&&!un&&!Zl?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",ke,i._tTime/i._tDur):(te.vars.totalProgress=ke,te.invalidate().restart())):i&&i.totalProgress(ke,!!(un&&(X||j)))),u){if(j&&g&&(ge.style[g+x.os2]=Ke),!k)ze(Pa(Te+we*ke));else if(gt){if(q=!j&&ke>Je&&ve+1>De&&De+1>=Ui(W,x),T)if(!j&&(ct||q)){var ne=Ki(u,!0),Q=De-Pe;ng(u,bt,ne.top+(x===Wt?Q:0)+Xt,ne.left+(x===Wt?0:Q)+Xt)}else ng(u,ge);fo(ct||q?oe:he),Ze&&ke<1&&ct||ze(Te+(ke===1&&!q?we:0))}}S&&!ue.tween&&!un&&!Zl&&ye.restart(!0),a&&(w||v&&ke&&(ke<1||!bh))&&ba(a.targets).forEach(function(Ve){return Ve.classList[ct||v?"add":"remove"](a.className)}),o&&!A&&!j&&o(R),gt&&!un?(A&&(ee&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),o&&o(R)),(w||!bh)&&(c&&w&&Ah(R,c),H[st]&&Ah(R,H[st]),v&&(ke===1?R.kill(!1,1):H[st]=0),w||(st=ke===1?1:3,H[st]&&Ah(R,H[st]))),P&&!ct&&Math.abs(R.getVelocity())>(Ra(P)?P:2500)&&(La(R.callbackAnimation),te?te.progress(1):La(i,at==="reverse"?1:!ke,1))):A&&o&&!un&&o(R)}if(He){var Ce=M?De/M.duration()*(M._caScrollDist||0):De;mt(Ce+(V._isFlipped?1:0)),He(Ce)}le&&le(-De/M.duration()*(M._caScrollDist||0))}},R.enable=function(j,Me){R.enabled||(R.enabled=!0,Qt(W,"resize",Fa),I||Qt(W,"scroll",ho),se&&Qt(r,"refreshInit",se),j!==!1&&(R.progress=ie=0,Ee=z=D=me()),Me!==!1&&R.refresh())},R.getTween=function(j){return j&&ue?ue.tween:te},R.setPositions=function(j,Me,pe,De){if(M){var Ye=M.scrollTrigger,ke=M.duration(),Je=Ye.end-Ye.start;j=Ye.start+Je*j/ke,Me=Ye.start+Je*Me/ke}R.refresh(!1,!1,{start:Um(j,pe&&!!R._startClamp),end:Um(Me,pe&&!!R._endClamp)},De),R.update()},R.adjustPinSpacing=function(j){if(xe&&j){var Me=xe.indexOf(x.d)+1;xe[Me]=parseFloat(xe[Me])+j+Xt,xe[1]=parseFloat(xe[1])+j+Xt,fo(xe)}},R.disable=function(j,Me){if(R.enabled&&(j!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Me||te&&te.pause(),Z=0,_e&&(_e.uncache=1),se&&en(r,"refreshInit",se),ye&&(ye.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!I)){for(var pe=ot.length;pe--;)if(ot[pe].scroller===W&&ot[pe]!==R)return;en(W,"resize",Fa),I||en(W,"scroll",ho)}},R.kill=function(j,Me){R.disable(j,Me),te&&!Me&&te.kill(),l&&delete Dh[l];var pe=ot.indexOf(R);pe>=0&&ot.splice(pe,1),pe===Sn&&ac>0&&Sn--,pe=0,ot.forEach(function(De){return De.scroller===R.scroller&&(pe=1)}),pe||Tn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),Me||i.kill()),be&&[be,Ue,V,Ne].forEach(function(De){return De.parentNode&&De.parentNode.removeChild(De)}),Ba===R&&(Ba=0),u&&(_e&&(_e.uncache=1),pe=0,ot.forEach(function(De){return De.pin===u&&pe++}),pe||(_e.spacer=0)),n.onKill&&n.onKill(R)},ot.push(R),R.enable(!1,!1),O&&O(R),i&&i.add&&!C){var ae=R.update;R.update=function(){R.update=ae,Pe||ve||R.refresh()},Ge.delayedCall(.01,R.update),C=.01,Pe=ve=0}else R.refresh();u&&aS()},r.register=function(n){return oo||(Ge=n||zm(),km()&&window.document&&r.enable(),oo=Ca),oo},r.defaults=function(n){if(n)for(var i in n)nc[i]=n[i];return nc},r.disable=function(n,i){Ca=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),en(ht,"wheel",ho),en(Nt,"scroll",ho),clearInterval($l),en(Nt,"touchcancel",Oi),en(bt,"touchstart",Oi),ec(en,Nt,"pointerdown,touchstart,mousedown",Fm),ec(en,Nt,"pointerup,touchend,mouseup",Bm),ql.kill(),Jl(en);for(var s=0;s<lt.length;s+=3)tc(en,lt[s],lt[s+1]),tc(en,lt[s],lt[s+2])},r.enable=function(){if(ht=window,Nt=document,mi=Nt.documentElement,bt=Nt.body,Ge&&(ba=Ge.utils.toArray,wa=Ge.utils.clamp,Sh=Ge.core.context||Oi,xh=Ge.core.suppressOverwrites||Oi,Mh=ht.history.scrollRestoration||"auto",Oh=ht.pageYOffset,Ge.core.globals("ScrollTrigger",r),bt)){Ca=1,lo=document.createElement("div"),lo.style.height="100vh",lo.style.position="absolute",Qm(),eS(),Bt.register(Ge),r.isTouch=Bt.isTouch,Lr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yh=Bt.isTouch===1,Qt(ht,"wheel",ho),Cm=[ht,Nt,mi,bt],Ge.matchMedia?(r.matchMedia=function(l){var c=Ge.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Ge.addEventListener("matchMediaInit",function(){return Nh()}),Ge.addEventListener("matchMediaRevert",function(){return Km()}),Ge.addEventListener("matchMedia",function(){ys(0,1),vs("matchMedia")}),Ge.matchMedia("(orientation: portrait)",function(){return Ih(),Ih})):console.warn("Requires GSAP 3.11.0 or later"),Ih(),Qt(Nt,"scroll",ho);var n=bt.style,i=n.borderTopStyle,s=Ge.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ki(bt),Wt.m=Math.round(o.top+Wt.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),$l=setInterval($m,250),Ge.delayedCall(.5,function(){return Zl=0}),Qt(Nt,"touchcancel",Oi),Qt(bt,"touchstart",Oi),ec(Qt,Nt,"pointerdown,touchstart,mousedown",Fm),ec(Qt,Nt,"pointerup,touchend,mouseup",Bm),vh=Ge.utils.checkPrefix("transform"),lc.push(vh),oo=hn(),ql=Ge.delayedCall(.2,ys).pause(),ao=[Nt,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;Nt.hidden?(Pm=l,Rm=c):(Pm!==l||Rm!==c)&&Fa()},Nt,"DOMContentLoaded",ys,ht,"load",ys,ht,"resize",Fa],Jl(Qt),ot.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)tc(en,lt[a],lt[a+1]),tc(en,lt[a],lt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(bh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($l)||($l=i)&&setInterval($m,i),"ignoreMobileResize"in n&&(yh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jl(en)||Jl(Qt,n.autoRefreshEvents||"none"),Dm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=lt.indexOf(s),a=ds(s);~o&&lt.splice(o,a?6:2),i&&(a?Ni.unshift(ht,i,bt,i,mi,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=($n(n)?Fn(n):n).getBoundingClientRect(),a=o[s?ms:gs]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?ms:gs],l=i==null?a/2:i in ic?ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(s){return s()})}},r}();rt.version="3.12.5",rt.saveStyles=function(r){return r?ba(r).forEach(function(e){if(e&&e.style){var t=jn.indexOf(e);t>=0&&jn.splice(t,5),jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ge.core.getCache(e),Sh())}}):jn},rt.revert=function(r,e){return Nh(!r,e)},rt.create=function(r,e){return new rt(r,e)},rt.refresh=function(r){return r?Fa():(oo||rt.register())&&ys(!0)},rt.update=function(r){return++lt.cache&&Zi(r===!0?2:0)},rt.clearScrollMemory=Zm,rt.maxScroll=function(r,e){return Ui(r,e?yn:Wt)},rt.getScrollFunc=function(r,e){return Rr(Fn(r),e?yn:Wt)},rt.getById=function(r){return Dh[r]},rt.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})},rt.isScrolling=function(){return!!si},rt.snapDirectional=Lh,rt.addEventListener=function(r,e){var t=_s[r]||(_s[r]=[]);~t.indexOf(e)||t.push(e)},rt.removeEventListener=function(r,e){var t=_s[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Ge.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),Qt(rt,"refresh",function(){return s=e.batchMax()})),ba(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(rt.create(c))}),t};var sg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Bh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===mi&&r(bt,t)},fc={auto:1,scroll:1},fS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ge.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fc[(l=ai(s)).overflowY]||fc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ds(s)&&(fc[(l=ai(s)).overflowY]||fc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},og=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&fS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(Nt,Bt.eventTypes[0],lg,!1,!0)},onDisable:function(){return en(Nt,Bt.eventTypes[0],lg,!0)}})},dS=/(input|label|select|textarea)/i,ag,lg=function(e){var t=dS.test(e.target.tagName);(t||ag)&&(e._gsapAllow=!0,ag=t)},pS=function(e){ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Fn(e.target)||mi,h=Ge.core.globals().ScrollSmoother,f=h&&h.get(),d=Lr&&(e.content&&Fn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Rr(c,Wt),g=Rr(c,yn),_=1,p=(Bt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,y=En(i)?function(){return i(a)}:function(){return i||2.8},v,S,T=og(c,e.type,!0,s),b=function(){return S=!1},M=Oi,P=Oi,N=function(){l=Ui(c,Wt),P=wa(Lr?1:0,l),n&&(M=wa(0,Ui(c,yn))),v=xs},x=function(){d._gsap.y=Pa(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},A=function(){if(S){requestAnimationFrame(b);var K=Pa(a.deltaY/2),re=P(u.v-K);if(d&&re!==u.v+u.offset){u.offset=re-u.v;var R=Pa((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",u.cacheID=lt.cache,Zi()}return!0}u.offset&&x(),S=!0},W,G,I,k,H=function(){N(),W.isActive()&&W.vars.scrollY>l&&(u()>l?W.progress(1)&&u(l):W.resetTo("scrollY",l))};return d&&Ge.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Lr&&Y.type==="touchmove"&&A()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Pa((ht.visualViewport&&ht.visualViewport.scale||1)/p),W.pause(),Y!==_&&Bh(c,_>1.01?!0:n?!1:"x"),G=g(),I=u(),N(),v=xs},e.onRelease=e.onGestureStart=function(Y,K){if(u.offset&&x(),!K)k.restart(!0);else{lt.cache++;var re=y(),R,se;n&&(R=g(),se=R+re*.05*-Y.velocityX/.227,re*=sg(g,R,se,Ui(c,yn)),W.vars.scrollX=M(se)),R=u(),se=R+re*.05*-Y.velocityY/.227,re*=sg(u,R,se,Ui(c,Wt)),W.vars.scrollY=P(se),W.invalidate().duration(re).play(.01),(Lr&&W.vars.scrollY>=l||R>=l-1)&&Ge.to({},{onUpdate:H,duration:re})}o&&o(Y)},e.onWheel=function(){W._ts&&W.pause(),hn()-m>1e3&&(v=0,m=hn())},e.onChange=function(Y,K,re,R,se){if(xs!==v&&N(),K&&n&&g(M(R[2]===K?G+(Y.startX-Y.x):g()+K-R[1])),re){u.offset&&x();var fe=se[2]===re,$=fe?I+Y.startY-Y.y:u()+re-se[1],D=P($);fe&&$!==D&&(I+=D-$),u(D)}(re||K)&&Zi()},e.onEnable=function(){Bh(c,n?!1:"x"),rt.addEventListener("refresh",H),Qt(ht,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Bh(c,!0),en(ht,"resize",H),rt.removeEventListener("refresh",H),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Bt(e),a.iOS=Lr,Lr&&!u()&&u(1),Lr&&Ge.ticker.add(Oi),k=a._dc,W=Ge.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ig(u,u(),function(){return W.pause()})},onUpdate:Zi,onComplete:k.vars.onComplete}),a};rt.sort=function(r){return ot.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},rt.observe=function(r){return new Bt(r)},rt.normalizeScroll=function(r){if(typeof r=="undefined")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Bt?r:pS(r);return Mn&&Mn.target===e.target&&Mn.kill(),ds(e.target)&&(Mn=e),e},rt.core={_getVelocityProp:_h,_inputObserver:og,_scrollers:lt,_proxies:Ni,bridge:{ss:function(){si||vs("scrollStart"),si=hn()},ref:function(){return un}}},zm()&&Ge.registerPlugin(rt);/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn,cg,Ji,Fi,Dr,ug,hg,dc,fg=function(){return typeof window!="undefined"},dg=function(){return bn||fg()&&(bn=window.gsap)&&bn.registerPlugin&&bn},pg=function(e){return typeof e=="string"},mg=function(e){return typeof e=="function"},ka=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Ji||e===Fi||e===Dr?Math.max(Fi[i],Dr[i])-(Ji["inner"+n]||Fi[s]||Dr[s]):e[i]-e["offset"+n]},za=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Ji&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Fi[n]!=null?Fi:Dr),function(){return e[n]}},mS=function(e,t,n,i){if(mg(e)&&(e=e(t,n,i)),typeof e!="object")return pg(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&mg(e[o])?e[o](t,n,i):e[o];return s},gg=function(e,t){if(e=ug(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Ji||t===Dr,s=i?{top:Fi.clientTop-(Ji.pageYOffset||Fi.scrollTop||Dr.scrollTop||0),left:Fi.clientLeft-(Ji.pageXOffset||Fi.scrollLeft||Dr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=za(t,"x")(),o.y+=za(t,"y")()),o},_g=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:pg(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?ka(t,n)-s:Math.min(ka(t,n),gg(e,t)[n]-s)},vg=function(){bn=dg(),fg()&&bn&&typeof document!="undefined"&&document.body&&(Ji=window,Dr=document.body,Fi=document.documentElement,ug=bn.utils.toArray,bn.config({autoKillThreshold:7}),hg=bn.config(),cg=1)},Ha={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){bn=e,vg()},init:function(e,t,n,i,s){cg||vg();var o=this,a=bn.getProperty(e,"scrollSnapType");o.isWin=e===Ji,o.target=e,o.tween=n,t=mS(t,i,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=za(e,"x"),o.getY=za(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),dc||(dc=bn.core.globals().ScrollTrigger),bn.getProperty(e,"scrollBehavior")==="smooth"&&bn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,_g(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,_g(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,f=t.snapInline,d,u,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,u=c||!t.skipY?t.getY():l,g=u-l,_=d-a,p=hg.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<ka(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&u<ka(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?Ji.scrollTo(t.skipX?d:t.x,t.skipY?u:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(u=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=u+1,i.scrollLeft=d+1,i.scrollTop=u,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,dc&&dc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ha.max=ka,Ha.getOffset=gg,Ha.buildGetter=za,dg()&&bn.registerPlugin(Ha);/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const kh="162",po={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gS=0,xg=1,_S=2,yg=1,vS=2,Qi=3,Ir=0,Bn=1,er=2,tr=0,go=1,zh=2,Sg=3,Mg=4,xS=5,Ss=100,yS=101,SS=102,Eg=103,Tg=104,MS=200,ES=201,TS=202,bS=203,Hh=204,Gh=205,wS=206,AS=207,CS=208,PS=209,RS=210,LS=211,DS=212,IS=213,NS=214,OS=0,US=1,FS=2,pc=3,BS=4,kS=5,zS=6,HS=7,bg=0,GS=1,VS=2,Nr=0,wg=1,Vh=2,Ag=3,Cg=4,WS=5,Pg=6,Rg=7,Lg=300,_o=301,vo=302,Wh=303,Xh=304,mc=306,Yh=1e3,gi=1001,qh=1002,wn=1003,Dg=1004,Ga=1005,kn=1006,$h=1007,Ms=1008,Or=1009,XS=1010,YS=1011,jh=1012,Ig=1013,Ur=1014,nr=1015,ir=1016,Ng=1017,Og=1018,Es=1020,qS=1021,_i=1023,$S=1024,jS=1025,Ts=1026,xo=1027,KS=1028,Ug=1029,ZS=1030,Fg=1031,Bg=1033,Kh=33776,Zh=33777,Jh=33778,Qh=33779,kg=35840,zg=35841,Hg=35842,Gg=35843,Vg=36196,Wg=37492,Xg=37496,Yg=37808,qg=37809,$g=37810,jg=37811,Kg=37812,Zg=37813,Jg=37814,Qg=37815,e_=37816,t_=37817,n_=37818,i_=37819,r_=37820,s_=37821,ef=36492,o_=36494,a_=36495,JS=36283,l_=36284,c_=36285,u_=36286,QS=3200,eM=3201,tM=0,nM=1,Fr="",Bi="srgb",Br="srgb-linear",tf="display-p3",gc="display-p3-linear",_c="linear",Et="srgb",vc="rec709",xc="p3",yo=7680,h_=519,iM=512,rM=513,sM=514,f_=515,oM=516,aM=517,lM=518,cM=519,d_=35044,p_="300 es",nf=1035,rr=2e3,yc=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let m_=1234567;const So=Math.PI/180,Va=180/Math.PI;function ws(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function rf(r,e){return(r%e+e)%e}function uM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function hM(r,e,t){return r!==e?(t-r)/(e-r):0}function Wa(r,e,t){return(1-t)*r+t*e}function fM(r,e,t,n){return Wa(r,e,1-Math.exp(-t*n))}function dM(r,e=1){return e-Math.abs(rf(r,e*2)-e)}function pM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _M(r,e){return r+Math.random()*(e-r)}function vM(r){return r*(.5-Math.random())}function xM(r){r!==void 0&&(m_=r);let e=m_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yM(r){return r*So}function SM(r){return r*Va}function sf(r){return(r&r-1)===0&&r!==0}function MM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function EM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),u=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*u,a*c);break;case"YXY":r.set(l*u,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const TM={DEG2RAD:So,RAD2DEG:Va,generateUUID:ws,clamp:tn,euclideanModulo:rf,mapLinear:uM,inverseLerp:hM,lerp:Wa,damp:fM,pingpong:dM,smoothstep:pM,smootherstep:mM,randInt:gM,randFloat:_M,randFloatSpread:vM,seededRandom:xM,degToRad:yM,radToDeg:SM,isPowerOfTwo:sf,ceilPowerOfTwo:MM,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:EM,normalize:An,denormalize:Mo};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,i,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],S=i[7],T=i[2],b=i[5],M=i[8];return s[0]=o*_+a*y+l*T,s[3]=o*p+a*v+l*b,s[6]=o*m+a*S+l*M,s[1]=c*_+h*y+f*T,s[4]=c*p+h*v+f*b,s[7]=c*m+h*S+f*M,s[2]=d*_+u*y+g*T,s[5]=d*p+u*v+g*b,s[8]=d*m+u*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new nt;function g_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bM(){const r=Mc("canvas");return r.style.display="block",r}const __={};function wM(r){r in __||(__[r]=!0,console.warn(r))}const v_=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),x_=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ec={[Br]:{transfer:_c,primaries:vc,toReference:r=>r,fromReference:r=>r},[Bi]:{transfer:Et,primaries:vc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[gc]:{transfer:_c,primaries:xc,toReference:r=>r.applyMatrix3(x_),fromReference:r=>r.applyMatrix3(v_)},[tf]:{transfer:Et,primaries:xc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(x_),fromReference:r=>r.applyMatrix3(v_).convertLinearToSRGB()}},AM=new Set([Br,gc]),_t={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!AM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ec[e].toReference,i=Ec[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ec[r].primaries},getTransfer:function(r){return r===Fr?_c:Ec[r].transfer}};function Eo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function af(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let To;class y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{To===void 0&&(To=Mc("canvas")),To.width=e.width,To.height=e.height;const n=To.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=To}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Mc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Eo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Eo(t[n]/255)*255):t[n]=Eo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class S_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(lf(i[o].image)):s.push(lf(i[o]))}else s=lf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?y_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PM=0;class zn extends bs{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=gi,i=gi,s=kn,o=Ms,a=_i,l=Or,c=zn.DEFAULT_ANISOTROPY,h=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ws(),this.name="",this.source=new S_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null,zn.DEFAULT_MAPPING=Lg,zn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(u+1)/2,T=(m+1)/2,b=(h+d)/4,M=(f+_)/4,P=(g+p)/4;return v>S&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=M/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=P/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=M/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RM extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new S_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends RM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class M_ extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LM extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a;const m=l*d+c*u+h*g+f*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*y);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const S=a*y;if(l=l*p+d*S,c=c*p+u*S,h=h*p+g*S,f=f*p+_*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(E_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(E_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new B,E_=new As;class Xa{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tc.copy(n.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),bc.subVectors(this.max,Ya),bo.subVectors(e.a,Ya),wo.subVectors(e.b,Ya),Ao.subVectors(e.c,Ya),kr.subVectors(wo,bo),zr.subVectors(Ao,wo),Cs.subVectors(bo,Ao);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-Cs.z,Cs.y,kr.z,0,-kr.x,zr.z,0,-zr.x,Cs.z,0,-Cs.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-Cs.y,Cs.x,0];return!uf(t,bo,wo,Ao,bc)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,bo,wo,Ao,bc))?!1:(wc.crossVectors(kr,zr),t=[wc.x,wc.y,wc.z],uf(t,bo,wo,Ao,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sr=[new B,new B,new B,new B,new B,new B,new B,new B],xi=new B,Tc=new Xa,bo=new B,wo=new B,Ao=new B,kr=new B,zr=new B,Cs=new B,Ya=new B,bc=new B,wc=new B,Ps=new B;function uf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ps.fromArray(r,s);const a=i.x*Math.abs(Ps.x)+i.y*Math.abs(Ps.y)+i.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const DM=new Xa,qa=new B,hf=new B;class Ac{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):DM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const t=qa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(hf)),this.expandByPoint(qa.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new B,ff=new B,Cc=new B,Hr=new B,df=new B,Pc=new B,pf=new B;class mf{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ff.copy(e).add(t).multiplyScalar(.5),Cc.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(ff);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Cc),a=Hr.dot(this.direction),l=-Hr.dot(Cc),c=Hr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ff).addScaledVector(Cc,d),u}intersectSphere(e,t){or.subVectors(e.center,this.origin);const n=or.dot(this.direction),i=or.dot(or)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,s){df.subVectors(t,e),Pc.subVectors(n,e),pf.crossVectors(df,Pc);let o=this.direction.dot(pf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=a*this.direction.dot(Pc.crossVectors(Hr,Pc));if(l<0)return null;const c=a*this.direction.dot(df.cross(Hr));if(c<0||l+c>o)return null;const h=-a*Hr.dot(pf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Co.setFromMatrixColumn(e,0).length(),s=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IM,e,NM)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Gr.crossVectors(n,Kn),Gr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Gr.crossVectors(n,Kn)),Gr.normalize(),Rc.crossVectors(Kn,Gr),i[0]=Gr.x,i[4]=Rc.x,i[8]=Kn.x,i[1]=Gr.y,i[5]=Rc.y,i[9]=Kn.y,i[2]=Gr.z,i[6]=Rc.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],T=n[15],b=i[0],M=i[4],P=i[8],N=i[12],x=i[1],A=i[5],W=i[9],G=i[13],I=i[2],k=i[6],H=i[10],Y=i[14],K=i[3],re=i[7],R=i[11],se=i[15];return s[0]=o*b+a*x+l*I+c*K,s[4]=o*M+a*A+l*k+c*re,s[8]=o*P+a*W+l*H+c*R,s[12]=o*N+a*G+l*Y+c*se,s[1]=h*b+f*x+d*I+u*K,s[5]=h*M+f*A+d*k+u*re,s[9]=h*P+f*W+d*H+u*R,s[13]=h*N+f*G+d*Y+u*se,s[2]=g*b+_*x+p*I+m*K,s[6]=g*M+_*A+p*k+m*re,s[10]=g*P+_*W+p*H+m*R,s[14]=g*N+_*G+p*Y+m*se,s[3]=y*b+v*x+S*I+T*K,s[7]=y*M+v*A+S*k+T*re,s[11]=y*P+v*W+S*H+T*R,s[15]=y*N+v*G+S*Y+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+p*(+t*c*f-t*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,v=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,S=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,T=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,b=t*y+n*v+i*S+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=y*M,e[1]=(_*d*s-f*p*s-_*i*u+n*p*u+f*i*m-n*d*m)*M,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*M,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*M,e[4]=v*M,e[5]=(h*p*s-g*d*s+g*i*u-t*p*u-h*i*m+t*d*m)*M,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*M,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*u+t*l*u)*M,e[8]=S*M,e[9]=(g*f*s-h*_*s-g*n*u+t*_*u+h*n*m-t*f*m)*M,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*M,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*u-t*a*u)*M,e[12]=T*M,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*p+t*f*p)*M,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*M,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,g=s*f,_=o*h,p=o*f,m=a*f,y=l*c,v=l*h,S=l*f,T=n.x,b=n.y,M=n.z;return i[0]=(1-(_+m))*T,i[1]=(u+S)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(u-S)*b,i[5]=(1-(d+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*M,i[9]=(p-y)*M,i[10]=(1-(d+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Co.set(i[0],i[1],i[2]).length();const o=Co.set(i[4],i[5],i[6]).length(),a=Co.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);const c=1/s,h=1/o,f=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,t.setFromRotationMatrix(yi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=rr){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===rr)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yc)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=rr){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-s),d=(t+e)*c,u=(n+i)*h;let g,_;if(a===rr)g=(o+s)*f,_=-2*f;else if(a===yc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Co=new B,yi=new Pt,IM=new B(0,0,0),NM=new B(1,1,1),Gr=new B,Rc=new B,Kn=new B,T_=new Pt,b_=new As;class ar{constructor(e=0,t=0,n=0,i=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class w_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const A_=new B,Po=new As,lr=new Pt,Lc=new B,$a=new B,UM=new B,FM=new As,C_=new B(1,0,0),P_=new B(0,1,0),R_=new B(0,0,1),BM={type:"added"},kM={type:"removed"},gf={type:"childadded",child:null},_f={type:"childremoved",child:null};class Cn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new B,t=new ar,n=new As,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,t){return A_.copy(e).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lc.copy(e):Lc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt($a,Lc,this.up):lr.lookAt(Lc,$a,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),Po.setFromRotationMatrix(lr),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BM),gf.child=e,this.dispatchEvent(gf),gf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kM),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,FM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Cn.DEFAULT_UP=new B(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new B,cr=new B,vf=new B,ur=new B,Ro=new B,Lo=new B,L_=new B,xf=new B,yf=new B,Sf=new B;class Mi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),cr.subVectors(n,t),vf.subVectors(e,t);const o=Si.dot(Si),a=Si.dot(cr),l=Si.dot(vf),c=cr.dot(cr),h=cr.dot(vf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),cr.subVectors(e,t),Si.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Si.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ro.subVectors(i,n),Lo.subVectors(s,n),xf.subVectors(e,n);const l=Ro.dot(xf),c=Lo.dot(xf);if(l<=0&&c<=0)return t.copy(n);yf.subVectors(e,i);const h=Ro.dot(yf),f=Lo.dot(yf);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ro,o);Sf.subVectors(e,s);const u=Ro.dot(Sf),g=Lo.dot(Sf);if(g>=0&&u<=g)return t.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Lo,a);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return L_.subVectors(s,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(L_,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ro,o).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Mf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=rf(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Mf(o,s,e+1/3),this.g=Mf(o,s,e),this.b=Mf(o,s,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Bi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const n=D_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}copyLinearToSRGB(e){return this.r=af(e.r),this.g=af(e.g),this.b=af(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return _t.fromWorkingColorSpace(dn.copy(this),e),Math.round(tn(dn.r*255,0,255))*65536+Math.round(tn(dn.g*255,0,255))*256+Math.round(tn(dn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Bi){_t.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Dc);const n=Wa(Vr.h,Dc.h,t),i=Wa(Vr.s,Dc.s,t),s=Wa(Vr.l,Dc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new pt;pt.NAMES=D_;let zM=0;class ja extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=go,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hh&&(n.blendSrc=this.blendSrc),this.blendDst!==Gh&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ef extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new B,Ic=new Ae;class ki{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=d_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),i=An(i,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),e}}class I_ extends ki{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class N_ extends ki{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends ki{constructor(e,t,n){super(new Float32Array(e),t,n)}}let HM=0;const li=new Pt,Tf=new Cn,Do=new B,Zn=new Xa,Ka=new Xa,nn=new B;class Jn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?N_:I_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ka.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Zn.min,Ka.min),Zn.expandByPoint(nn),nn.addVectors(Zn.max,Ka.max),Zn.expandByPoint(nn)):(Zn.expandByPoint(Ka.min),Zn.expandByPoint(Ka.max))}Zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(e,c),nn.add(Do)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;const c=new B,h=new B,f=new B,d=new Ae,u=new Ae,g=new Ae,_=new B,p=new B;function m(P,N,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,P),u.fromBufferAttribute(s,N),g.fromBufferAttribute(s,x),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const A=1/(u.x*g.y-g.x*u.y);!isFinite(A)||(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(A),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(_),a[N].add(_),a[x].add(_),l[P].add(p),l[N].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,N=y.length;P<N;++P){const x=y[P],A=x.start,W=x.count;for(let G=A,I=A+W;G<I;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new B,S=new B,T=new B,b=new B;function M(P){T.fromBufferAttribute(i,P),b.copy(T);const N=a[P];v.copy(N),v.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(b,N);const A=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,A)}for(let P=0,N=y.length;P<N;++P){const x=y[P],A=x.start,W=x.count;for(let G=A,I=A+W;G<I;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new ki(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new Pt,Rs=new mf,Nc=new Ac,U_=new B,Io=new B,No=new B,Oo=new B,bf=new B,Oc=new B,Uc=new Ae,Fc=new Ae,Bc=new Ae,F_=new B,B_=new B,k_=new B,kc=new B,zc=new B;class zi extends Cn{constructor(e=new Jn,t=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Oc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(bf.fromBufferAttribute(f,e),o?Oc.addScaledVector(bf,h):Oc.addScaledVector(bf.sub(t),h))}t.add(Oc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(s),Rs.copy(e.ray).recast(e.near),!(Nc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Nc,U_)===null||Rs.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(O_.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(O_),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,T=v;S<T;S+=3){const b=a.getX(S),M=a.getX(S+1),P=a.getX(S+2);i=Hc(this,m,e,n,c,h,f,b,M,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=Hc(this,o,e,n,c,h,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,T=v;S<T;S+=3){const b=S,M=S+1,P=S+2;i=Hc(this,m,e,n,c,h,f,b,M,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,S=p+2;i=Hc(this,o,e,n,c,h,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function GM(r,e,t,n,i,s,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ir,a),l===null)return null;zc.copy(a),zc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(zc);return c<t.near||c>t.far?null:{distance:c,point:zc.clone(),object:r}}function Hc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Io),r.getVertexPosition(l,No),r.getVertexPosition(c,Oo);const h=GM(r,e,t,n,Io,No,Oo,kc);if(h){i&&(Uc.fromBufferAttribute(i,a),Fc.fromBufferAttribute(i,l),Bc.fromBufferAttribute(i,c),h.uv=Mi.getInterpolation(kc,Io,No,Oo,Uc,Fc,Bc,new Ae)),s&&(Uc.fromBufferAttribute(s,a),Fc.fromBufferAttribute(s,l),Bc.fromBufferAttribute(s,c),h.uv1=Mi.getInterpolation(kc,Io,No,Oo,Uc,Fc,Bc,new Ae)),o&&(F_.fromBufferAttribute(o,a),B_.fromBufferAttribute(o,l),k_.fromBufferAttribute(o,c),h.normal=Mi.getInterpolation(kc,Io,No,Oo,F_,B_,k_,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};Mi.getNormal(Io,No,Oo,f.normal),h.face=f}return h}class Za extends Jn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(f,2));function g(_,p,m,y,v,S,T,b,M,P,N){const x=S/M,A=T/P,W=S/2,G=T/2,I=b/2,k=M+1,H=P+1;let Y=0,K=0;const re=new B;for(let R=0;R<H;R++){const se=R*A-G;for(let fe=0;fe<k;fe++){const $=fe*x-W;re[_]=$*y,re[p]=se*v,re[m]=I,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[m]=b>0?1:-1,h.push(re.x,re.y,re.z),f.push(fe/M),f.push(1-R/P),Y+=1}}for(let R=0;R<P;R++)for(let se=0;se<M;se++){const fe=d+se+k*R,$=d+se+k*(R+1),D=d+(se+1)+k*(R+1),X=d+(se+1)+k*R;l.push(fe,$,X),l.push($,D,X),K+=6}a.addGroup(u,K,N),u+=K,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=Uo(r[t]);for(const i in n)e[i]=n[i]}return e}function VM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function z_(r){return r.getRenderTarget()===null?r.outputColorSpace:_t.workingColorSpace}const Ja={clone:Uo,merge:Pn};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class H_ extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new B,G_=new Ae,V_=new Ae;class Qn extends H_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,G_,V_),t.subVectors(V_,G_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fo=-90,Bo=1;class YM extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(Fo,Bo,e,t);i.layers=this.layers,this.add(i);const s=new Qn(Fo,Bo,e,t);s.layers=this.layers,this.add(s);const o=new Qn(Fo,Bo,e,t);o.layers=this.layers,this.add(o);const a=new Qn(Fo,Bo,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Fo,Bo,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Fo,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class W_ extends zn{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qM extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new W_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Za(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:tr});s.uniforms.tEquirect.value=t;const o=new zi(i,s),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=kn),new YM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const wf=new B,$M=new B,jM=new nt;class Xr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wf.subVectors(n,t).cross($M.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jM.getNormalMatrix(e),i=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Ac,Gc=new B;class Af{constructor(e=new Xr,t=new Xr,n=new Xr,i=new Xr,s=new Xr,o=new Xr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-u,S-m).normalize(),n[1].setComponents(l+s,d+c,p+u,S+m).normalize(),n[2].setComponents(l+o,d+h,p+g,S+y).normalize(),n[3].setComponents(l-o,d-h,p-g,S-y).normalize(),n[4].setComponents(l-a,d-f,p-_,S-v).normalize(),t===rr)n[5].setComponents(l+a,d+f,p+_,S+v).normalize();else if(t===yc)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gc.x=i.normal.x>0?e.max.x:e.min.x,Gc.y=i.normal.y>0?e.max.y:e.min.y,Gc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function KM(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,d=c.usage,u=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function s(c,h,f){const d=h.array,u=h._updateRange,g=h.updateRanges;if(r.bindBuffer(f,c),u.count===-1&&g.length===0&&r.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class Vc extends Jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,S=y+c*(m+1),T=y+1+c*(m+1),b=y+1+c*m;u.push(v,S,b),u.push(S,T,b)}this.setIndex(u),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
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
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uE=`#ifdef USE_IRIDESCENCE
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
#endif`,hE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yE=`#define PI 3.141592653589793
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
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ME=`vec3 transformedNormal = objectNormal;
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`
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
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
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
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
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
#endif`,KE=`struct PhysicalMaterial {
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
}`,ZE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
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
#endif`,dT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`#ifdef USE_MORPHTARGETS
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
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UT=`float getShadowMask() {
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
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zT=`#ifdef USE_SKINNING
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
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const it={alphahash_fragment:ZM,alphahash_pars_fragment:JM,alphamap_fragment:QM,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:rE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:aE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:hE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:xE,common:yE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:bE,emissivemap_pars_fragment:wE,colorspace_fragment:AE,colorspace_pars_fragment:CE,envmap_fragment:PE,envmap_common_pars_fragment:RE,envmap_pars_fragment:LE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:WE,envmap_vertex:IE,fog_vertex:NE,fog_pars_vertex:OE,fog_fragment:UE,fog_pars_fragment:FE,gradientmap_pars_fragment:BE,lightmap_fragment:kE,lightmap_pars_fragment:zE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:VE,lights_toon_fragment:XE,lights_toon_pars_fragment:YE,lights_phong_fragment:qE,lights_phong_pars_fragment:$E,lights_physical_fragment:jE,lights_physical_pars_fragment:KE,lights_fragment_begin:ZE,lights_fragment_maps:JE,lights_fragment_end:QE,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:rT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:aT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:hT,morphnormal_vertex:fT,morphtarget_pars_vertex:dT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:_T,normal_pars_vertex:vT,normal_vertex:xT,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:MT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:TT,opaque_fragment:bT,packing:wT,premultiplied_alpha_fragment:AT,project_vertex:CT,dithering_fragment:PT,dithering_pars_fragment:RT,roughnessmap_fragment:LT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:NT,shadowmap_vertex:OT,shadowmask_pars_fragment:UT,skinbase_vertex:FT,skinning_pars_vertex:BT,skinning_vertex:kT,skinnormal_vertex:zT,specularmap_fragment:HT,specularmap_pars_fragment:GT,tonemapping_fragment:VT,tonemapping_pars_fragment:WT,transmission_fragment:XT,transmission_pars_fragment:YT,uv_pars_fragment:qT,uv_pars_vertex:$T,uv_vertex:jT,worldpos_vertex:KT,background_vert:`varying vec2 vUv;
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
}`},Re={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Hi={basic:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new pt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Pn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Pn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new pt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Pn([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Pn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Pn([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Pn([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Pn([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Pn([Re.lights,Re.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Hi.physical={uniforms:Pn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Wc={r:0,b:0,g:0},Ds=new ar,ZT=new Pt;function JT(r,e,t,n,i,s,o){const a=new pt(0);let l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===mc)?(h===void 0&&(h=new zi(new Za(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Uo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ds.copy(m.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(Ds)),h.material.toneMapped=_t.getTransfer(v.colorSpace)!==Et,(f!==v||d!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new zi(new Vc(2,2),new Rn({name:"BackgroundMaterial",uniforms:Uo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_t.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Wc,z_(r)),n.buffers.color.setClear(Wc.r,Wc.g,Wc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function QT(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function f(I,k,H,Y,K){let re=!1;if(o){const R=_(Y,H,k);c!==R&&(c=R,u(c.object)),re=m(I,Y,H,K),re&&y(I,Y,H,K)}else{const R=k.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==R)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=R,re=!0)}K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,P(I,k,H,Y),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,k,H){const Y=H.wireframe===!0;let K=a[I.id];K===void 0&&(K={},a[I.id]=K);let re=K[k.id];re===void 0&&(re={},K[k.id]=re);let R=re[Y];return R===void 0&&(R=p(d()),re[Y]=R),R}function p(I){const k=[],H=[],Y=[];for(let K=0;K<i;K++)k[K]=0,H[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,k,H,Y){const K=c.attributes,re=k.attributes;let R=0;const se=H.getAttributes();for(const fe in se)if(se[fe].location>=0){const D=K[fe];let X=re[fe];if(X===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),D===void 0||D.attribute!==X||X&&D.data!==X.data)return!0;R++}return c.attributesNum!==R||c.index!==Y}function y(I,k,H,Y){const K={},re=k.attributes;let R=0;const se=H.getAttributes();for(const fe in se)if(se[fe].location>=0){let D=re[fe];D===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(D=I.instanceColor));const X={};X.attribute=D,D&&D.data&&(X.data=D.data),K[fe]=X,R++}c.attributes=K,c.attributesNum=R,c.index=Y}function v(){const I=c.newAttributes;for(let k=0,H=I.length;k<H;k++)I[k]=0}function S(I){T(I,0)}function T(I,k){const H=c.newAttributes,Y=c.enabledAttributes,K=c.attributeDivisors;H[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),K[I]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),K[I]=k)}function b(){const I=c.newAttributes,k=c.enabledAttributes;for(let H=0,Y=k.length;H<Y;H++)k[H]!==I[H]&&(r.disableVertexAttribArray(H),k[H]=0)}function M(I,k,H,Y,K,re,R){R===!0?r.vertexAttribIPointer(I,k,H,K,re):r.vertexAttribPointer(I,k,H,Y,K,re)}function P(I,k,H,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const K=Y.attributes,re=H.getAttributes(),R=k.defaultAttributeValues;for(const se in re){const fe=re[se];if(fe.location>=0){let $=K[se];if($===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const D=$.normalized,X=$.itemSize,ie=t.get($);if(ie===void 0)continue;const me=ie.buffer,ue=ie.type,_e=ie.bytesPerElement,Le=n.isWebGL2===!0&&(ue===r.INT||ue===r.UNSIGNED_INT||$.gpuType===Ig);if($.isInterleavedBufferAttribute){const Ee=$.data,z=Ee.stride,Pe=$.offset;if(Ee.isInstancedInterleavedBuffer){for(let ve=0;ve<fe.locationSize;ve++)T(fe.location+ve,Ee.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ve=0;ve<fe.locationSize;ve++)S(fe.location+ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ve=0;ve<fe.locationSize;ve++)M(fe.location+ve,X/fe.locationSize,ue,D,z*_e,(Pe+X/fe.locationSize*ve)*_e,Le)}else{if($.isInstancedBufferAttribute){for(let Ee=0;Ee<fe.locationSize;Ee++)T(fe.location+Ee,$.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)S(fe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Ee=0;Ee<fe.locationSize;Ee++)M(fe.location+Ee,X/fe.locationSize,ue,D,X*_e,X/fe.locationSize*Ee*_e,Le)}}else if(R!==void 0){const D=R[se];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(fe.location,D);break;case 3:r.vertexAttrib3fv(fe.location,D);break;case 4:r.vertexAttrib4fv(fe.location,D);break;default:r.vertexAttrib1fv(fe.location,D)}}}}b()}function N(){W();for(const I in a){const k=a[I];for(const H in k){const Y=k[H];for(const K in Y)g(Y[K].object),delete Y[K];delete k[H]}delete a[I]}}function x(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const H in k){const Y=k[H];for(const K in Y)g(Y[K].object),delete Y[K];delete k[H]}delete a[I.id]}function A(I){for(const k in a){const H=a[k];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const K in Y)g(Y[K].object),delete Y[K];delete H[I.id]}}function W(){G(),h=!0,c!==l&&(c=l,u(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:G,dispose:N,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function eb(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,f){r.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let u,g;if(i)u=r,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](s,h,f,d),t.update(f,s,d)}function c(h,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(s,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tb(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),T=v&&S,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:b}}function nb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Xr,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let S=m.clippingState||null;l.value=S,S=h(g,d,v,u);for(let T=0;T!==v;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=u+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=u;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ib(r){let e=new WeakMap;function t(o,a){return a===Wh?o.mapping=_o:a===Xh&&(o.mapping=vo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wh||a===Xh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Y_ extends H_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ko=4,q_=[.125,.215,.35,.446,.526,.582],Is=20,Cf=new Y_,$_=new pt;let Pf=null,Rf=0,Lf=0;const Ns=(1+Math.sqrt(5))/2,zo=1/Ns,j_=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ns,zo),new B(0,Ns,-zo),new B(zo,0,Ns),new B(-zo,0,Ns),new B(Ns,zo,0),new B(-Ns,zo,0)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Rf,Lf),e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ir,format:_i,colorSpace:Br,depthBuffer:!1},i=Z_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(s)),this._blurMaterial=sb(s,e,t)}return i}_compileMaterial(e){const t=new zi(this._lodPlanes[0],e);this._renderer.compile(t,Cf)}_sceneToCubeUV(e,t,n,i){const a=new Qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor($_),h.toneMapping=Nr,h.autoClear=!1;const u=new Ef({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new zi(new Za,u);let _=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,_=!0):(u.color.copy($_),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Xc(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_o||e.mapping===vo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new zi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=j_[(i-1)%j_.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new zi(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Is-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Is;p>Is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Is}`);const m=[];let y=0;for(let M=0;M<Is;++M){const P=M/_,N=Math.exp(-P*P/2);m.push(N),M===0?y+=N:M<p&&(y+=2*N)}for(let M=0;M<m.length;M++)m[M]=m[M]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],T=3*S*(i>v-ko?i-v+ko:0),b=4*(this._cubeSize-S);Xc(t,T,b,3*S,2*S),l.setRenderTarget(t),l.render(f,Cf)}}function rb(r){const e=[],t=[],n=[];let i=r;const s=r-ko+1+q_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ko?l=q_[o-r+ko-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*u),v=new Float32Array(p*g*u),S=new Float32Array(m*g*u);for(let b=0;b<u;b++){const M=b%3*2/3-1,P=b>2?0:-1,N=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];y.set(N,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];S.set(x,m*g*b)}const T=new Jn;T.setAttribute("position",new ki(y,_)),T.setAttribute("uv",new ki(v,p)),T.setAttribute("faceIndex",new ki(S,m)),e.push(T),i>ko&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Z_(r,e,t){const n=new vi(r,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sb(r,e,t){const n=new Float32Array(Is),i=new B(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Df(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function J_(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Q_(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Df(){return`

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
	`}function ob(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wh||l===Xh,h=l===_o||l===vo;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new K_(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new K_(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ab(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lb(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let v=0,S=y.length;v<S;v+=3){const T=y[v+0],b=y[v+1],M=y[v+2];d.push(T,b,b,M,M,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const T=v+0,b=v+1,M=v+2;d.push(T,b,b,M,M,T)}}else return;const p=new(g_(d)?N_:I_)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function cb(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){r.drawElements(s,g,a,u*l),t.update(g,s,1)}function f(u,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,u*l,_),t.update(g,s,_)}function d(u,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(u[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,u,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function ub(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hb(r,e){return r[0]-e[0]}function fb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function db(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let W=function(){x.dispose(),s.delete(h),h.removeEventListener("dispose",W)};_!==void 0&&_.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),y===!0&&(b=3);let M=h.attributes.position.count*b,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*P*4*g),x=new M_(N,M,P,g);x.type=nr,x.needsUpdate=!0;const A=b*4;for(let G=0;G<g;G++){const I=v[G],k=S[G],H=T[G],Y=M*P*4*G;for(let K=0;K<I.count;K++){const re=K*A;p===!0&&(o.fromBufferAttribute(I,K),N[Y+re+0]=o.x,N[Y+re+1]=o.y,N[Y+re+2]=o.z,N[Y+re+3]=0),m===!0&&(o.fromBufferAttribute(k,K),N[Y+re+4]=o.x,N[Y+re+5]=o.y,N[Y+re+6]=o.z,N[Y+re+7]=0),y===!0&&(o.fromBufferAttribute(H,K),N[Y+re+8]=o.x,N[Y+re+9]=o.y,N[Y+re+10]=o.z,N[Y+re+11]=H.itemSize===4?o.w:1)}}_={count:g,texture:x,size:new Ae(M,P)},s.set(h,_),h.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let p=0;for(let y=0;y<d.length;y++)p+=d[y];const m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",m),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const u=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){const S=g[v];S[0]=v,S[1]=d[v]}g.sort(fb);for(let v=0;v<8;v++)v<u&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hb);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const S=a[v],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[T]&&h.setAttribute("morphTarget"+v,_[T]),p&&h.getAttribute("morphNormal"+v)!==p[T]&&h.setAttribute("morphNormal"+v,p[T]),i[v]=b,m+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const y=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function pb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class e0 extends zn{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Ts,h!==Ts&&h!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Ur),n===void 0&&h===xo&&(n=Es),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const t0=new zn,n0=new e0(1,1);n0.compareFunction=f_;const i0=new M_,r0=new LM,s0=new W_,o0=[],a0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function Ho(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=o0[i];if(s===void 0&&(s=new Float32Array(i),o0[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yc(r,e){let t=a0[e];t===void 0&&(t=new Int32Array(e),a0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;u0.set(n),r.uniformMatrix2fv(this.addr,!1,u0),qt(t,n)}}function yb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;c0.set(n),r.uniformMatrix3fv(this.addr,!1,c0),qt(t,n)}}function Sb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;l0.set(n),r.uniformMatrix4fv(this.addr,!1,l0),qt(t,n)}}function Mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function Tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function wb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function Cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function Pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function Rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?n0:t0;t.setTexture2D(e||s,i)}function Lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||r0,i)}function Db(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||s0,i)}function Ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||i0,i)}function Nb(r){switch(r){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return xb;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Ab;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ib}}function Ob(r,e){r.uniform1fv(this.addr,e)}function Ub(r,e){const t=Ho(e,this.size,2);r.uniform2fv(this.addr,t)}function Fb(r,e){const t=Ho(e,this.size,3);r.uniform3fv(this.addr,t)}function Bb(r,e){const t=Ho(e,this.size,4);r.uniform4fv(this.addr,t)}function kb(r,e){const t=Ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zb(r,e){const t=Ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hb(r,e){const t=Ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gb(r,e){r.uniform1iv(this.addr,e)}function Vb(r,e){r.uniform2iv(this.addr,e)}function Wb(r,e){r.uniform3iv(this.addr,e)}function Xb(r,e){r.uniform4iv(this.addr,e)}function Yb(r,e){r.uniform1uiv(this.addr,e)}function qb(r,e){r.uniform2uiv(this.addr,e)}function $b(r,e){r.uniform3uiv(this.addr,e)}function jb(r,e){r.uniform4uiv(this.addr,e)}function Kb(r,e,t){const n=this.cache,i=e.length,s=Yc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||t0,s[o])}function Zb(r,e,t){const n=this.cache,i=e.length,s=Yc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||r0,s[o])}function Jb(r,e,t){const n=this.cache,i=e.length,s=Yc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||s0,s[o])}function Qb(r,e,t){const n=this.cache,i=e.length,s=Yc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||i0,s[o])}function ew(r){switch(r){case 5126:return Ob;case 35664:return Ub;case 35665:return Fb;case 35666:return Bb;case 35674:return kb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return Yb;case 36294:return qb;case 36295:return $b;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}class tw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class nw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ew(t.type)}}class iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const If=/(\w+)(\])?(\[|\.)?/g;function h0(r,e){r.seq.push(e),r.map[e.id]=e}function rw(r,e,t){const n=r.name,i=n.length;for(If.lastIndex=0;;){const s=If.exec(n),o=If.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){h0(t,c===void 0?new tw(a,r,e):new nw(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new iw(a),h0(t,f)),t=f}}}class qc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);rw(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function f0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sw=37297;let ow=0;function aw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lw(r){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(r);let n;switch(e===t?n="":e===xc&&t===vc?n="LinearDisplayP3ToLinearSRGB":e===vc&&t===xc&&(n="LinearSRGBToLinearDisplayP3"),r){case Br:case gc:return[n,"LinearTransferOETF"];case Bi:case tf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function d0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+aw(r.getShaderSource(e),o)}else return i}function cw(r,e){const t=lw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uw(r,e){let t;switch(e){case wg:t="Linear";break;case Vh:t="Reinhard";break;case Ag:t="OptimizedCineon";break;case Cg:t="ACESFilmic";break;case Pg:t="AgX";break;case Rg:t="Neutral";break;case WS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hw(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Go).join(`
`)}function fw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function dw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Go(r){return r!==""}function p0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(r){return r.replace(mw,_w)}const gw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _w(r,e){let t=it[e];if(t===void 0){const n=gw.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nf(t)}const vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(r){return r.replace(vw,xw)}function xw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _o:case vo:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function Ew(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bg:e="ENVMAP_BLENDING_MULTIPLY";break;case GS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function Tw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yw(t),c=Sw(t),h=Mw(t),f=Ew(t),d=Tw(t),u=t.isWebGL2?"":hw(t),g=fw(t),_=dw(s),p=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Go).join(`
`),m.length>0&&(m+=`
`),y=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Go).join(`
`),y.length>0&&(y+=`
`)):(m=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),y=[u,_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?it.tonemapping_pars_fragment:"",t.toneMapping!==Nr?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,cw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),o=Nf(o),o=p0(o,t),o=m0(o,t),a=Nf(a),a=p0(a,t),a=m0(a,t),o=g0(o),a=g0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+m+o,T=v+y+a,b=f0(i,i.VERTEX_SHADER,S),M=f0(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(W){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(b).trim(),k=i.getShaderInfoLog(M).trim();let H=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,b,M);else{const K=d0(i,b,"vertex"),re=d0(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+G+`
`+K+`
`+re)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(I===""||k==="")&&(Y=!1);Y&&(W.diagnostics={runnable:H,programLog:G,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:y}})}i.deleteShader(b),i.deleteShader(M),N=new qc(i,p),x=pw(i,p)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,sw)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ow++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}let ww=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cw(e),t.set(e,n)),n}}class Cw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Pw(r,e,t,n,i,s,o){const a=new w_,l=new Aw,c=new Set,h=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,W,G,I){const k=G.fog,H=I.geometry,Y=x.isMeshStandardMaterial?G.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),re=!!K&&K.mapping===mc?K.image.height:null,R=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=se!==void 0?se.length:0;let $=0;H.morphAttributes.position!==void 0&&($=1),H.morphAttributes.normal!==void 0&&($=2),H.morphAttributes.color!==void 0&&($=3);let D,X,ie,me;if(R){const ce=Hi[R];D=ce.vertexShader,X=ce.fragmentShader}else D=x.vertexShader,X=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const ue=r.getRenderTarget(),_e=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,Ee=!!x.map,z=!!x.matcap,Pe=!!K,ve=!!x.aoMap,be=!!x.lightMap,Ue=!!x.bumpMap,V=!!x.normalMap,Ne=!!x.displacementMap,qe=!!x.emissiveMap,tt=!!x.metalnessMap,C=!!x.roughnessMap,E=x.anisotropy>0,oe=x.clearcoat>0,he=x.iridescence>0,ge=x.sheen>0,de=x.transmission>0,Fe=E&&!!x.anisotropyMap,ze=oe&&!!x.clearcoatMap,Te=oe&&!!x.clearcoatNormalMap,we=oe&&!!x.clearcoatRoughnessMap,Ke=he&&!!x.iridescenceMap,xe=he&&!!x.iridescenceThicknessMap,mt=ge&&!!x.sheenColorMap,Ze=ge&&!!x.sheenRoughnessMap,He=!!x.specularMap,Ie=!!x.specularColorMap,Be=!!x.specularIntensityMap,L=de&&!!x.transmissionMap,te=de&&!!x.thicknessMap,Oe=!!x.gradientMap,U=!!x.alphaMap,ye=x.alphaTest>0,Z=!!x.alphaHash,Se=!!x.extensions;let le=Nr;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(le=r.toneMapping);const O={isWebGL2:f,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:X,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Le,instancing:_e,instancingColor:_e&&I.instanceColor!==null,instancingMorph:_e&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Br,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:z,envMap:Pe,envMapMode:Pe&&K.mapping,envMapCubeUVHeight:re,aoMap:ve,lightMap:be,bumpMap:Ue,normalMap:V,displacementMap:u&&Ne,emissiveMap:qe,normalMapObjectSpace:V&&x.normalMapType===nM,normalMapTangentSpace:V&&x.normalMapType===tM,metalnessMap:tt,roughnessMap:C,anisotropy:E,anisotropyMap:Fe,clearcoat:oe,clearcoatMap:ze,clearcoatNormalMap:Te,clearcoatRoughnessMap:we,iridescence:he,iridescenceMap:Ke,iridescenceThicknessMap:xe,sheen:ge,sheenColorMap:mt,sheenRoughnessMap:Ze,specularMap:He,specularColorMap:Ie,specularIntensityMap:Be,transmission:de,transmissionMap:L,thicknessMap:te,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===go&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:ye,alphaHash:Z,combine:x.combine,mapUv:Ee&&p(x.map.channel),aoMapUv:ve&&p(x.aoMap.channel),lightMapUv:be&&p(x.lightMap.channel),bumpMapUv:Ue&&p(x.bumpMap.channel),normalMapUv:V&&p(x.normalMap.channel),displacementMapUv:Ne&&p(x.displacementMap.channel),emissiveMapUv:qe&&p(x.emissiveMap.channel),metalnessMapUv:tt&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Fe&&p(x.anisotropyMap.channel),clearcoatMapUv:ze&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(x.sheenRoughnessMap.channel),specularMapUv:He&&p(x.specularMap.channel),specularColorMapUv:Ie&&p(x.specularColorMap.channel),specularIntensityMapUv:Be&&p(x.specularIntensityMap.channel),transmissionMapUv:L&&p(x.transmissionMap.channel),thicknessMapUv:te&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(V||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Ee||U),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===er,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return O.vertexUv1s=c.has(1),O.vertexUv2s=c.has(2),O.vertexUv3s=c.has(3),c.clear(),O}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(v(A,x),S(A,x),A.push(r.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const A=_[x.type];let W;if(A){const G=Hi[A];W=Ja.clone(G.uniforms)}else W=x.uniforms;return W}function b(x,A){let W;for(let G=0,I=h.length;G<I;G++){const k=h[G];if(k.cacheKey===A){W=k,++W.usedTimes;break}}return W===void 0&&(W=new bw(r,A,x,s),h.push(W)),W}function M(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:T,acquireProgram:b,releaseProgram:M,releaseShaderCache:P,programs:h,dispose:N}}function Rw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Lw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function v0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function x0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):t.push(m)}function l(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||Lw),n.length>1&&n.sort(d||v0),i.length>1&&i.sort(d||v0)}function h(){for(let f=e,d=r.length;f<d;f++){const u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Dw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new x0,r.set(n,[o])):i>=s.length?(o=new x0,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Iw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new pt};break;case"SpotLight":t={position:new B,direction:new B,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Nw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ow=0;function Uw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fw(r,e){const t=new Iw,n=Nw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const s=new B,o=new Pt,a=new Pt;function l(h,f){let d=0,u=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,S=0,T=0,b=0,M=0,P=0,N=0;h.sort(Uw);const x=f===!0?Math.PI:1;for(let W=0,G=h.length;W<G;W++){const I=h[W],k=I.color,H=I.intensity,Y=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=k.r*H*x,u+=k.g*H*x,g+=k.b*H*x;else if(I.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(I.sh.coefficients[re],H);N++}else if(I.isDirectionalLight){const re=t.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const R=I.shadow,se=n.get(I);se.shadowBias=R.bias,se.shadowNormalBias=R.normalBias,se.shadowRadius=R.radius,se.shadowMapSize=R.mapSize,i.directionalShadow[_]=se,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=re,_++}else if(I.isSpotLight){const re=t.get(I);re.position.setFromMatrixPosition(I.matrixWorld),re.color.copy(k).multiplyScalar(H*x),re.distance=Y,re.coneCos=Math.cos(I.angle),re.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),re.decay=I.decay,i.spot[m]=re;const R=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[m]=R.matrix,I.castShadow){const se=n.get(I);se.shadowBias=R.bias,se.shadowNormalBias=R.normalBias,se.shadowRadius=R.radius,se.shadowMapSize=R.mapSize,i.spotShadow[m]=se,i.spotShadowMap[m]=K,b++}m++}else if(I.isRectAreaLight){const re=t.get(I);re.color.copy(k).multiplyScalar(H),re.halfWidth.set(I.width*.5,0,0),re.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=re,y++}else if(I.isPointLight){const re=t.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity*x),re.distance=I.distance,re.decay=I.decay,I.castShadow){const R=I.shadow,se=n.get(I);se.shadowBias=R.bias,se.shadowNormalBias=R.normalBias,se.shadowRadius=R.radius,se.shadowMapSize=R.mapSize,se.shadowCameraNear=R.camera.near,se.shadowCameraFar=R.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=I.shadow.matrix,T++}i.point[p]=re,p++}else if(I.isHemisphereLight){const re=t.get(I);re.skyColor.copy(I.color).multiplyScalar(H*x),re.groundColor.copy(I.groundColor).multiplyScalar(H*x),i.hemi[v]=re,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==S||A.numPointShadows!==T||A.numSpotShadows!==b||A.numSpotMaps!==M||A.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=S,A.numPointShadows=T,A.numSpotShadows=b,A.numSpotMaps=M,A.numLightProbes=N,i.version=Ow++)}function c(h,f){let d=0,u=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function y0(r,e){const t=new Fw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Bw(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new y0(r,e),t.set(s,[l])):o>=a.length?(l=new y0(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class kw extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zw extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`;function Vw(r,e,t){let n=new Af;const i=new Ae,s=new Ae,o=new Ct,a=new kw({depthPacking:eM}),l=new zw,c={},h=t.maxTextureSize,f={[Ir]:Bn,[Bn]:Ir,[er]:er},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let m=this.type;this.render=function(b,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const N=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),W=r.state;W.setBlending(tr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=m!==Qi&&this.type===Qi,I=m===Qi&&this.type!==Qi;for(let k=0,H=b.length;k<H;k++){const Y=b[k],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const re=K.getFrameExtents();if(i.multiply(re),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/re.x),i.x=s.x*re.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/re.y),i.y=s.y*re.y,K.mapSize.y=s.y)),K.map===null||G===!0||I===!0){const se=this.type!==Qi?{minFilter:wn,magFilter:wn}:{};K.map!==null&&K.map.dispose(),K.map=new vi(i.x,i.y,se),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const R=K.getViewportCount();for(let se=0;se<R;se++){const fe=K.getViewport(se);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),W.viewport(o),K.updateMatrices(Y,se),n=K.getFrustum(),S(M,P,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Qi&&y(K,P),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(N,x,A)};function y(b,M){const P=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,P,d,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,P,u,_,null)}function v(b,M,P,N){let x=null;const A=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const W=x.uuid,G=M.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let k=I[G];k===void 0&&(k=x.clone(),I[G]=k,M.addEventListener("dispose",T)),x=k}if(x.visible=M.visible,x.wireframe=M.wireframe,N===Qi?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:f[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=P}return x}function S(b,M,P,N,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Qi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const G=e.update(b),I=b.material;if(Array.isArray(I)){const k=G.groups;for(let H=0,Y=k.length;H<Y;H++){const K=k[H],re=I[K.materialIndex];if(re&&re.visible){const R=v(b,re,N,x);b.onBeforeShadow(r,b,M,P,G,R,K),r.renderBufferDirect(P,null,G,R,b,K),b.onAfterShadow(r,b,M,P,G,R,K)}}}else if(I.visible){const k=v(b,I,N,x);b.onBeforeShadow(r,b,M,P,G,k,null),r.renderBufferDirect(P,null,G,k,b,null),b.onAfterShadow(r,b,M,P,G,k,null)}}const W=b.children;for(let G=0,I=W.length;G<I;G++)S(W[G],M,P,N,x)}function T(b){b.target.removeEventListener("dispose",T);for(const P in c){const N=c[P],x=b.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}function Ww(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const ye=new Ct;let Z=null;const Se=new Ct(0,0,0,0);return{setMask:function(le){Z!==le&&!U&&(r.colorMask(le,le,le,le),Z=le)},setLocked:function(le){U=le},setClear:function(le,O,ce,F,J){J===!0&&(le*=F,O*=F,ce*=F),ye.set(le,O,ce,F),Se.equals(ye)===!1&&(r.clearColor(le,O,ce,F),Se.copy(ye))},reset:function(){U=!1,Z=null,Se.set(-1,0,0,0)}}}function s(){let U=!1,ye=null,Z=null,Se=null;return{setTest:function(le){le?_e(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(le){ye!==le&&!U&&(r.depthMask(le),ye=le)},setFunc:function(le){if(Z!==le){switch(le){case OS:r.depthFunc(r.NEVER);break;case US:r.depthFunc(r.ALWAYS);break;case FS:r.depthFunc(r.LESS);break;case pc:r.depthFunc(r.LEQUAL);break;case BS:r.depthFunc(r.EQUAL);break;case kS:r.depthFunc(r.GEQUAL);break;case zS:r.depthFunc(r.GREATER);break;case HS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=le}},setLocked:function(le){U=le},setClear:function(le){Se!==le&&(r.clearDepth(le),Se=le)},reset:function(){U=!1,ye=null,Z=null,Se=null}}}function o(){let U=!1,ye=null,Z=null,Se=null,le=null,O=null,ce=null,F=null,J=null;return{setTest:function(ae){U||(ae?_e(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(ae){ye!==ae&&!U&&(r.stencilMask(ae),ye=ae)},setFunc:function(ae,j,Me){(Z!==ae||Se!==j||le!==Me)&&(r.stencilFunc(ae,j,Me),Z=ae,Se=j,le=Me)},setOp:function(ae,j,Me){(O!==ae||ce!==j||F!==Me)&&(r.stencilOp(ae,j,Me),O=ae,ce=j,F=Me)},setLocked:function(ae){U=ae},setClear:function(ae){J!==ae&&(r.clearStencil(ae),J=ae)},reset:function(){U=!1,ye=null,Z=null,Se=null,le=null,O=null,ce=null,F=null,J=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,T=null,b=null,M=null,P=null,N=new pt(0,0,0),x=0,A=!1,W=null,G=null,I=null,k=null,H=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,re=0;const R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=re>=1):R.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=re>=2);let se=null,fe={};const $=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),X=new Ct().fromArray($),ie=new Ct().fromArray(D);function me(U,ye,Z,Se){const le=new Uint8Array(4),O=r.createTexture();r.bindTexture(U,O),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<Z;ce++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(ye,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ye+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return O}const ue={};ue[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ue[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(r.DEPTH_TEST),l.setFunc(pc),Ne(!1),qe(xg),_e(r.CULL_FACE),Ue(tr);function _e(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Le(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function Ee(U,ye){return u[U]!==ye?(r.bindFramebuffer(U,ye),u[U]=ye,n&&(U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ye),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ye)),!0):!1}function z(U,ye){let Z=_,Se=!1;if(U){Z=g.get(ye),Z===void 0&&(Z=[],g.set(ye,Z));const le=U.textures;if(Z.length!==le.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let O=0,ce=le.length;O<ce;O++)Z[O]=r.COLOR_ATTACHMENT0+O;Z.length=le.length,Se=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,Se=!0);if(Se)if(t.isWebGL2)r.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Pe(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ve={[Ss]:r.FUNC_ADD,[yS]:r.FUNC_SUBTRACT,[SS]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Eg]=r.MIN,ve[Tg]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ve[Eg]=U.MIN_EXT,ve[Tg]=U.MAX_EXT)}const be={[MS]:r.ZERO,[ES]:r.ONE,[TS]:r.SRC_COLOR,[Hh]:r.SRC_ALPHA,[RS]:r.SRC_ALPHA_SATURATE,[CS]:r.DST_COLOR,[wS]:r.DST_ALPHA,[bS]:r.ONE_MINUS_SRC_COLOR,[Gh]:r.ONE_MINUS_SRC_ALPHA,[PS]:r.ONE_MINUS_DST_COLOR,[AS]:r.ONE_MINUS_DST_ALPHA,[LS]:r.CONSTANT_COLOR,[DS]:r.ONE_MINUS_CONSTANT_COLOR,[IS]:r.CONSTANT_ALPHA,[NS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ue(U,ye,Z,Se,le,O,ce,F,J,ae){if(U===tr){m===!0&&(Le(r.BLEND),m=!1);return}if(m===!1&&(_e(r.BLEND),m=!0),U!==xS){if(U!==y||ae!==A){if((v!==Ss||b!==Ss)&&(r.blendEquation(r.FUNC_ADD),v=Ss,b=Ss),ae)switch(U){case go:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.ONE,r.ONE);break;case Sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,M=null,P=null,N.set(0,0,0),x=0,y=U,A=ae}return}le=le||ye,O=O||Z,ce=ce||Se,(ye!==v||le!==b)&&(r.blendEquationSeparate(ve[ye],ve[le]),v=ye,b=le),(Z!==S||Se!==T||O!==M||ce!==P)&&(r.blendFuncSeparate(be[Z],be[Se],be[O],be[ce]),S=Z,T=Se,M=O,P=ce),(F.equals(N)===!1||J!==x)&&(r.blendColor(F.r,F.g,F.b,J),N.copy(F),x=J),y=U,A=!1}function V(U,ye){U.side===er?Le(r.CULL_FACE):_e(r.CULL_FACE);let Z=U.side===Bn;ye&&(Z=!Z),Ne(Z),U.blending===go&&U.transparent===!1?Ue(tr):Ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Se=U.stencilWrite;c.setTest(Se),Se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(U){W!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),W=U)}function qe(U){U!==gS?(_e(r.CULL_FACE),U!==G&&(U===xg?r.cullFace(r.BACK):U===_S?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),G=U}function tt(U){U!==I&&(K&&r.lineWidth(U),I=U)}function C(U,ye,Z){U?(_e(r.POLYGON_OFFSET_FILL),(k!==ye||H!==Z)&&(r.polygonOffset(ye,Z),k=ye,H=Z)):Le(r.POLYGON_OFFSET_FILL)}function E(U){U?_e(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function oe(U){U===void 0&&(U=r.TEXTURE0+Y-1),se!==U&&(r.activeTexture(U),se=U)}function he(U,ye,Z){Z===void 0&&(se===null?Z=r.TEXTURE0+Y-1:Z=se);let Se=fe[Z];Se===void 0&&(Se={type:void 0,texture:void 0},fe[Z]=Se),(Se.type!==U||Se.texture!==ye)&&(se!==Z&&(r.activeTexture(Z),se=Z),r.bindTexture(U,ye||ue[U]),Se.type=U,Se.texture=ye)}function ge(){const U=fe[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){X.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),X.copy(U))}function Be(U){ie.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function L(U,ye){let Z=f.get(ye);Z===void 0&&(Z=new WeakMap,f.set(ye,Z));let Se=Z.get(U);Se===void 0&&(Se=r.getUniformBlockIndex(ye,U.name),Z.set(U,Se))}function te(U,ye){const Se=f.get(ye).get(U);h.get(ye)!==Se&&(r.uniformBlockBinding(ye,Se,U.__bindingPointIndex),h.set(ye,Se))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},se=null,fe={},u={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,T=null,b=null,M=null,P=null,N=new pt(0,0,0),x=0,A=!1,W=null,G=null,I=null,k=null,H=null,X.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:Le,bindFramebuffer:Ee,drawBuffers:z,useProgram:Pe,setBlending:Ue,setMaterial:V,setFlipSided:Ne,setCullFace:qe,setLineWidth:tt,setPolygonOffset:C,setScissorTest:E,activeTexture:oe,bindTexture:he,unbindTexture:ge,compressedTexImage2D:de,compressedTexImage3D:Fe,texImage2D:Ze,texImage3D:He,updateUBOMapping:L,uniformBlockBinding:te,texStorage2D:xe,texStorage3D:mt,texSubImage2D:ze,texSubImage3D:Te,compressedTexSubImage2D:we,compressedTexSubImage3D:Ke,scissor:Ie,viewport:Be,reset:Oe}}function Xw(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ae,f=new WeakMap;let d;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return g?new OffscreenCanvas(C,E):Mc("canvas")}function p(C,E,oe,he){let ge=1;const de=tt(C);if((de.width>he||de.height>he)&&(ge=he/Math.max(de.width,de.height)),ge<1||E===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Fe=E?Sc:Math.floor,ze=Fe(ge*de.width),Te=Fe(ge*de.height);d===void 0&&(d=_(ze,Te));const we=oe?_(ze,Te):d;return we.width=ze,we.height=Te,we.getContext("2d").drawImage(C,0,0,ze,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ze+"x"+Te+")."),we}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),C;return C}function m(C){const E=tt(C);return sf(E.width)&&sf(E.height)}function y(C){return a?!1:C.wrapS!==gi||C.wrapT!==gi||C.minFilter!==wn&&C.minFilter!==kn}function v(C,E){return C.generateMipmaps&&E&&C.minFilter!==wn&&C.minFilter!==kn}function S(C){r.generateMipmap(C)}function T(C,E,oe,he,ge=!1){if(a===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=E;if(E===r.RED&&(oe===r.FLOAT&&(de=r.R32F),oe===r.HALF_FLOAT&&(de=r.R16F),oe===r.UNSIGNED_BYTE&&(de=r.R8)),E===r.RED_INTEGER&&(oe===r.UNSIGNED_BYTE&&(de=r.R8UI),oe===r.UNSIGNED_SHORT&&(de=r.R16UI),oe===r.UNSIGNED_INT&&(de=r.R32UI),oe===r.BYTE&&(de=r.R8I),oe===r.SHORT&&(de=r.R16I),oe===r.INT&&(de=r.R32I)),E===r.RG&&(oe===r.FLOAT&&(de=r.RG32F),oe===r.HALF_FLOAT&&(de=r.RG16F),oe===r.UNSIGNED_BYTE&&(de=r.RG8)),E===r.RG_INTEGER&&(oe===r.UNSIGNED_BYTE&&(de=r.RG8UI),oe===r.UNSIGNED_SHORT&&(de=r.RG16UI),oe===r.UNSIGNED_INT&&(de=r.RG32UI),oe===r.BYTE&&(de=r.RG8I),oe===r.SHORT&&(de=r.RG16I),oe===r.INT&&(de=r.RG32I)),E===r.RGBA){const Fe=ge?_c:_t.getTransfer(he);oe===r.FLOAT&&(de=r.RGBA32F),oe===r.HALF_FLOAT&&(de=r.RGBA16F),oe===r.UNSIGNED_BYTE&&(de=Fe===Et?r.SRGB8_ALPHA8:r.RGBA8),oe===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),oe===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(C,E,oe){return v(C,oe)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function M(C){return C===wn||C===Dg||C===Ga?r.NEAREST:r.LINEAR}function P(C){const E=C.target;E.removeEventListener("dispose",P),x(E),E.isVideoTexture&&f.delete(E)}function N(C){const E=C.target;E.removeEventListener("dispose",N),W(E)}function x(C){const E=n.get(C);if(E.__webglInit===void 0)return;const oe=C.source,he=u.get(oe);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&A(C),Object.keys(he).length===0&&u.delete(oe)}n.remove(C)}function A(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const oe=C.source,he=u.get(oe);delete he[E.__cacheKey],o.memory.textures--}function W(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)r.deleteFramebuffer(E.__webglFramebuffer[he]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const oe=C.textures;for(let he=0,ge=oe.length;he<ge;he++){const de=n.get(oe[he]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(oe[he])}n.remove(C)}let G=0;function I(){G=0}function k(){const C=G;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),G+=1,C}function H(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const oe=n.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.version>0&&oe.__version!==C.version){const he=C.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(oe,C,E);return}}t.bindTexture(r.TEXTURE_2D,oe.__webglTexture,r.TEXTURE0+E)}function K(C,E){const oe=n.get(C);if(C.version>0&&oe.__version!==C.version){ie(oe,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,oe.__webglTexture,r.TEXTURE0+E)}function re(C,E){const oe=n.get(C);if(C.version>0&&oe.__version!==C.version){ie(oe,C,E);return}t.bindTexture(r.TEXTURE_3D,oe.__webglTexture,r.TEXTURE0+E)}function R(C,E){const oe=n.get(C);if(C.version>0&&oe.__version!==C.version){me(oe,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture,r.TEXTURE0+E)}const se={[Yh]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[qh]:r.MIRRORED_REPEAT},fe={[wn]:r.NEAREST,[Dg]:r.NEAREST_MIPMAP_NEAREST,[Ga]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[$h]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},$={[iM]:r.NEVER,[cM]:r.ALWAYS,[rM]:r.LESS,[f_]:r.LEQUAL,[sM]:r.EQUAL,[lM]:r.GEQUAL,[oM]:r.GREATER,[aM]:r.NOTEQUAL};function D(C,E,oe){if(E.type===nr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===$h||E.magFilter===Ga||E.magFilter===Ms||E.minFilter===kn||E.minFilter===$h||E.minFilter===Ga||E.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),oe?(r.texParameteri(C,r.TEXTURE_WRAP_S,se[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,se[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,se[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,fe[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,fe[E.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==gi||E.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,M(E.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,M(E.minFilter)),E.minFilter!==wn&&E.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Ga&&E.minFilter!==Ms||E.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const he=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function X(C,E){let oe=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const he=E.source;let ge=u.get(he);ge===void 0&&(ge={},u.set(he,ge));const de=H(E);if(de!==C.__cacheKey){ge[de]===void 0&&(ge[de]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),ge[de].usedTimes++;const Fe=ge[C.__cacheKey];Fe!==void 0&&(ge[C.__cacheKey].usedTimes--,Fe.usedTimes===0&&A(E)),C.__cacheKey=de,C.__webglTexture=ge[de].texture}return oe}function ie(C,E,oe){let he=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=r.TEXTURE_3D);const ge=X(C,E),de=E.source;t.bindTexture(he,C.__webglTexture,r.TEXTURE0+oe);const Fe=n.get(de);if(de.version!==Fe.__version||ge===!0){t.activeTexture(r.TEXTURE0+oe);const ze=_t.getPrimaries(_t.workingColorSpace),Te=E.colorSpace===Fr?null:_t.getPrimaries(E.colorSpace),we=E.colorSpace===Fr||ze===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ke=y(E)&&m(E.image)===!1;let xe=p(E.image,Ke,!1,i.maxTextureSize);xe=qe(E,xe);const mt=m(xe)||a,Ze=s.convert(E.format,E.colorSpace);let He=s.convert(E.type),Ie=T(E.internalFormat,Ze,He,E.colorSpace,E.isVideoTexture);D(he,E,mt);let Be;const L=E.mipmaps,te=a&&E.isVideoTexture!==!0&&Ie!==Vg,Oe=Fe.__version===void 0||ge===!0,U=de.dataReady,ye=b(E,xe,mt);if(E.isDepthTexture)Ie=r.DEPTH_COMPONENT,a?E.type===nr?Ie=r.DEPTH_COMPONENT32F:E.type===Ur?Ie=r.DEPTH_COMPONENT24:E.type===Es?Ie=r.DEPTH24_STENCIL8:Ie=r.DEPTH_COMPONENT16:E.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ts&&Ie===r.DEPTH_COMPONENT&&E.type!==jh&&E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ur,He=s.convert(E.type)),E.format===xo&&Ie===r.DEPTH_COMPONENT&&(Ie=r.DEPTH_STENCIL,E.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Es,He=s.convert(E.type))),Oe&&(te?t.texStorage2D(r.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ze,He,null));else if(E.isDataTexture)if(L.length>0&&mt){te&&Oe&&t.texStorage2D(r.TEXTURE_2D,ye,Ie,L[0].width,L[0].height);for(let Z=0,Se=L.length;Z<Se;Z++)Be=L[Z],te?U&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Be.width,Be.height,Ze,He,Be.data):t.texImage2D(r.TEXTURE_2D,Z,Ie,Be.width,Be.height,0,Ze,He,Be.data);E.generateMipmaps=!1}else te?(Oe&&t.texStorage2D(r.TEXTURE_2D,ye,Ie,xe.width,xe.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Ze,He,xe.data)):t.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ze,He,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ie,L[0].width,L[0].height,xe.depth);for(let Z=0,Se=L.length;Z<Se;Z++)Be=L[Z],E.format!==_i?Ze!==null?te?U&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Be.width,Be.height,xe.depth,Ze,Be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Ie,Be.width,Be.height,xe.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Be.width,Be.height,xe.depth,Ze,He,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Ie,Be.width,Be.height,xe.depth,0,Ze,He,Be.data)}else{te&&Oe&&t.texStorage2D(r.TEXTURE_2D,ye,Ie,L[0].width,L[0].height);for(let Z=0,Se=L.length;Z<Se;Z++)Be=L[Z],E.format!==_i?Ze!==null?te?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Be.width,Be.height,Ze,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Ie,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?U&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Be.width,Be.height,Ze,He,Be.data):t.texImage2D(r.TEXTURE_2D,Z,Ie,Be.width,Be.height,0,Ze,He,Be.data)}else if(E.isDataArrayTexture)te?(Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ie,xe.width,xe.height,xe.depth),U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ze,He,xe.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,Ze,He,xe.data);else if(E.isData3DTexture)te?(Oe&&t.texStorage3D(r.TEXTURE_3D,ye,Ie,xe.width,xe.height,xe.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ze,He,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,Ze,He,xe.data);else if(E.isFramebufferTexture){if(Oe)if(te)t.texStorage2D(r.TEXTURE_2D,ye,Ie,xe.width,xe.height);else{let Z=xe.width,Se=xe.height;for(let le=0;le<ye;le++)t.texImage2D(r.TEXTURE_2D,le,Ie,Z,Se,0,Ze,He,null),Z>>=1,Se>>=1}}else if(L.length>0&&mt){if(te&&Oe){const Z=tt(L[0]);t.texStorage2D(r.TEXTURE_2D,ye,Ie,Z.width,Z.height)}for(let Z=0,Se=L.length;Z<Se;Z++)Be=L[Z],te?U&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ze,He,Be):t.texImage2D(r.TEXTURE_2D,Z,Ie,Ze,He,Be);E.generateMipmaps=!1}else if(te){if(Oe){const Z=tt(xe);t.texStorage2D(r.TEXTURE_2D,ye,Ie,Z.width,Z.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ze,He,xe)}else t.texImage2D(r.TEXTURE_2D,0,Ie,Ze,He,xe);v(E,mt)&&S(he),Fe.__version=de.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function me(C,E,oe){if(E.image.length!==6)return;const he=X(C,E),ge=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+oe);const de=n.get(ge);if(ge.version!==de.__version||he===!0){t.activeTexture(r.TEXTURE0+oe);const Fe=_t.getPrimaries(_t.workingColorSpace),ze=E.colorSpace===Fr?null:_t.getPrimaries(E.colorSpace),Te=E.colorSpace===Fr||Fe===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!we&&!Ke?xe[Z]=p(E.image[Z],!1,!0,i.maxCubemapSize):xe[Z]=Ke?E.image[Z].image:E.image[Z],xe[Z]=qe(E,xe[Z]);const mt=xe[0],Ze=m(mt)||a,He=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),Be=T(E.internalFormat,He,Ie,E.colorSpace),L=a&&E.isVideoTexture!==!0,te=de.__version===void 0||he===!0,Oe=ge.dataReady;let U=b(E,mt,Ze);D(r.TEXTURE_CUBE_MAP,E,Ze);let ye;if(we){L&&te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Be,mt.width,mt.height);for(let Z=0;Z<6;Z++){ye=xe[Z].mipmaps;for(let Se=0;Se<ye.length;Se++){const le=ye[Se];E.format!==_i?He!==null?L?Oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,le.width,le.height,He,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,le.width,le.height,He,Ie,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Be,le.width,le.height,0,He,Ie,le.data)}}}else{if(ye=E.mipmaps,L&&te){ye.length>0&&U++;const Z=tt(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Ke){L?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,He,Ie,xe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,xe[Z].width,xe[Z].height,0,He,Ie,xe[Z].data);for(let Se=0;Se<ye.length;Se++){const O=ye[Se].image[Z].image;L?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,O.width,O.height,He,Ie,O.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Be,O.width,O.height,0,He,Ie,O.data)}}else{L?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,He,Ie,xe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,He,Ie,xe[Z]);for(let Se=0;Se<ye.length;Se++){const le=ye[Se];L?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,He,Ie,le.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Be,He,Ie,le.image[Z])}}}v(E,Ze)&&S(r.TEXTURE_CUBE_MAP),de.__version=ge.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,oe,he,ge,de){const Fe=s.convert(oe.format,oe.colorSpace),ze=s.convert(oe.type),Te=T(oe.internalFormat,Fe,ze,oe.colorSpace);if(!n.get(E).__hasExternalTextures){const Ke=Math.max(1,E.width>>de),xe=Math.max(1,E.height>>de);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,Te,Ke,xe,E.depth,0,Fe,ze,null):t.texImage2D(ge,de,Te,Ke,xe,0,Fe,ze,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),V(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,n.get(oe).__webglTexture,0,Ue(E)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,n.get(oe).__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(C,E,oe){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let he=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(oe||V(E)){const ge=E.depthTexture;ge&&ge.isDepthTexture&&(ge.type===nr?he=r.DEPTH_COMPONENT32F:ge.type===Ur&&(he=r.DEPTH_COMPONENT24));const de=Ue(E);V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,he,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,de,he,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const he=Ue(E);oe&&V(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,r.DEPTH24_STENCIL8,E.width,E.height):V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const de=he[ge],Fe=s.convert(de.format,de.colorSpace),ze=s.convert(de.type),Te=T(de.internalFormat,Fe,ze,de.colorSpace),we=Ue(E);oe&&V(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Te,E.width,E.height):V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,Te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Te,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const he=n.get(E.depthTexture).__webglTexture,ge=Ue(E);if(E.depthTexture.format===Ts)V(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0);else if(E.depthTexture.format===xo)V(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const E=n.get(C),oe=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,C)}else if(oe){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]=r.createRenderbuffer(),_e(E.__webglDepthbuffer[he],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),_e(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function z(C,E,oe){const he=n.get(C);E!==void 0&&ue(he.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),oe!==void 0&&Ee(C)}function Pe(C){const E=C.texture,oe=n.get(C),he=n.get(E);C.addEventListener("dispose",N);const ge=C.textures,de=C.isWebGLCubeRenderTarget===!0,Fe=ge.length>1,ze=m(C)||a;if(Fe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=E.version,o.memory.textures++),de){oe.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(a&&E.mipmaps&&E.mipmaps.length>0){oe.__webglFramebuffer[Te]=[];for(let we=0;we<E.mipmaps.length;we++)oe.__webglFramebuffer[Te][we]=r.createFramebuffer()}else oe.__webglFramebuffer[Te]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)oe.__webglFramebuffer[Te]=r.createFramebuffer()}else oe.__webglFramebuffer=r.createFramebuffer();if(Fe)if(i.drawBuffers)for(let Te=0,we=ge.length;Te<we;Te++){const Ke=n.get(ge[Te]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&V(C)===!1){oe.__webglMultisampledFramebuffer=r.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const we=ge[Te];oe.__webglColorRenderbuffer[Te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);const Ke=s.convert(we.format,we.colorSpace),xe=s.convert(we.type),mt=T(we.internalFormat,Ke,xe,we.colorSpace,C.isXRRenderTarget===!0),Ze=Ue(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Te])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(oe.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(oe.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),D(r.TEXTURE_CUBE_MAP,E,ze);for(let Te=0;Te<6;Te++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)ue(oe.__webglFramebuffer[Te][we],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,we);else ue(oe.__webglFramebuffer[Te],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);v(E,ze)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Te=0,we=ge.length;Te<we;Te++){const Ke=ge[Te],xe=n.get(Ke);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),D(r.TEXTURE_2D,Ke,ze),ue(oe.__webglFramebuffer,C,Ke,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,0),v(Ke,ze)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let Te=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Te=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,he.__webglTexture),D(Te,E,ze),a&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)ue(oe.__webglFramebuffer[we],C,E,r.COLOR_ATTACHMENT0,Te,we);else ue(oe.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,Te,0);v(E,ze)&&S(Te),t.unbindTexture()}C.depthBuffer&&Ee(C)}function ve(C){const E=m(C)||a,oe=C.textures;for(let he=0,ge=oe.length;he<ge;he++){const de=oe[he];if(v(de,E)){const Fe=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ze=n.get(de).__webglTexture;t.bindTexture(Fe,ze),S(Fe),t.unbindTexture()}}}function be(C){if(a&&C.samples>0&&V(C)===!1){const E=C.textures,oe=C.width,he=C.height;let ge=r.COLOR_BUFFER_BIT;const de=[],Fe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=n.get(C),Te=E.length>1;if(Te)for(let we=0;we<E.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let we=0;we<E.length;we++){de.push(r.COLOR_ATTACHMENT0+we),C.depthBuffer&&de.push(Fe);const Ke=ze.__ignoreDepthValues!==void 0?ze.__ignoreDepthValues:!1;if(Ke===!1&&(C.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),Te&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[we]),Ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Fe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Fe])),Te){const xe=n.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,oe,he,0,0,oe,he,ge,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Te)for(let we=0;we<E.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,ze.__webglColorRenderbuffer[we]);const Ke=n.get(E[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}}function Ue(C){return Math.min(i.maxSamples,C.samples)}function V(C){const E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ne(C){const E=o.render.frame;f.get(C)!==E&&(f.set(C,E),C.update())}function qe(C,E){const oe=C.colorSpace,he=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===nf||oe!==Br&&oe!==Fr&&(_t.getTransfer(oe)===Et?a===!1?e.has("EXT_sRGB")===!0&&he===_i?(C.format=nf,C.minFilter=kn,C.generateMipmaps=!1):E=y_.sRGBToLinear(E):(he!==_i||ge!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),E}function tt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=R,this.rebindTextures=z,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=V}function Yw(r,e,t){const n=t.isWebGL2;function i(s,o=Fr){let a;const l=_t.getTransfer(o);if(s===Or)return r.UNSIGNED_BYTE;if(s===Ng)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Og)return r.UNSIGNED_SHORT_5_5_5_1;if(s===XS)return r.BYTE;if(s===YS)return r.SHORT;if(s===jh)return r.UNSIGNED_SHORT;if(s===Ig)return r.INT;if(s===Ur)return r.UNSIGNED_INT;if(s===nr)return r.FLOAT;if(s===ir)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qS)return r.ALPHA;if(s===_i)return r.RGBA;if(s===$S)return r.LUMINANCE;if(s===jS)return r.LUMINANCE_ALPHA;if(s===Ts)return r.DEPTH_COMPONENT;if(s===xo)return r.DEPTH_STENCIL;if(s===nf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===KS)return r.RED;if(s===Ug)return r.RED_INTEGER;if(s===ZS)return r.RG;if(s===Fg)return r.RG_INTEGER;if(s===Bg)return r.RGBA_INTEGER;if(s===Kh||s===Zh||s===Jh||s===Qh)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Kh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Kh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kg||s===zg||s===Hg||s===Gg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wg||s===Xg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wg)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yg||s===qg||s===$g||s===jg||s===Kg||s===Zg||s===Jg||s===Qg||s===e_||s===t_||s===n_||s===i_||s===r_||s===s_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Yg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$g)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===e_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===t_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===n_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===i_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===r_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===s_)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ef||s===o_||s===a_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ef)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===o_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===a_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===JS||s===l_||s===c_||s===u_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ef)return a.COMPRESSED_RED_RGTC1_EXT;if(s===l_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===c_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===u_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Es?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class qw extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $c extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $w={type:"move"};class Of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($w)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $c;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kw=`
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

}`;class Zw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Rn({extensions:{fragDepth:!0},vertexShader:jw,fragmentShader:Kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zi(new Vc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Jw extends bs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new Zw,p=t.getContextAttributes();let m=null,y=null;const v=[],S=[],T=new Ae;let b=null;const M=new Qn;M.layers.enable(1),M.viewport=new Ct;const P=new Qn;P.layers.enable(2),P.viewport=new Ct;const N=[M,P],x=new qw;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let X=v[D];return X===void 0&&(X=new Of,v[D]=X),X.getTargetRaySpace()},this.getControllerGrip=function(D){let X=v[D];return X===void 0&&(X=new Of,v[D]=X),X.getGripSpace()},this.getHand=function(D){let X=v[D];return X===void 0&&(X=new Of,v[D]=X),X.getHandSpace()};function G(D){const X=S.indexOf(D.inputSource);if(X===-1)return;const ie=v[X];ie!==void 0&&(ie.update(D.inputSource,D.frame,c||o),ie.dispatchEvent({type:D.type,data:D.inputSource}))}function I(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",k);for(let D=0;D<v.length;D++){const X=S[D];X!==null&&(S[D]=null,v[D].disconnect(X))}A=null,W=null,_.reset(),e.setRenderTarget(m),u=null,d=null,f=null,i=null,y=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",I),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new vi(u.framebufferWidth,u.framebufferHeight,{format:_i,type:Or,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,ie=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=p.stencil?xo:Ts,ie=p.stencil?Es:Ur);const ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new vi(d.textureWidth,d.textureHeight,{format:_i,type:Or,depthTexture:new e0(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const _e=e.properties.get(y);_e.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(D){for(let X=0;X<D.removed.length;X++){const ie=D.removed[X],me=S.indexOf(ie);me>=0&&(S[me]=null,v[me].disconnect(ie))}for(let X=0;X<D.added.length;X++){const ie=D.added[X];let me=S.indexOf(ie);if(me===-1){for(let _e=0;_e<v.length;_e++)if(_e>=S.length){S.push(ie),me=_e;break}else if(S[_e]===null){S[_e]=ie,me=_e;break}if(me===-1)break}const ue=v[me];ue&&ue.connect(ie)}}const H=new B,Y=new B;function K(D,X,ie){H.setFromMatrixPosition(X.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const me=H.distanceTo(Y),ue=X.projectionMatrix.elements,_e=ie.projectionMatrix.elements,Le=ue[14]/(ue[10]-1),Ee=ue[14]/(ue[10]+1),z=(ue[9]+1)/ue[5],Pe=(ue[9]-1)/ue[5],ve=(ue[8]-1)/ue[0],be=(_e[8]+1)/_e[0],Ue=Le*ve,V=Le*be,Ne=me/(-ve+be),qe=Ne*-ve;X.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(qe),D.translateZ(Ne),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const tt=Le+Ne,C=Ee+Ne,E=Ue-qe,oe=V+(me-qe),he=z*Ee/C*tt,ge=Pe*Ee/C*tt;D.projectionMatrix.makePerspective(E,oe,he,ge,tt,C),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function re(D,X){X===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(X.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;_.texture!==null&&(D.near=_.depthNear,D.far=_.depthFar),x.near=P.near=M.near=D.near,x.far=P.far=M.far=D.far,(A!==x.near||W!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far,M.near=A,M.far=W,P.near=A,P.far=W,M.updateProjectionMatrix(),P.updateProjectionMatrix(),D.updateProjectionMatrix());const X=D.parent,ie=x.cameras;re(x,X);for(let me=0;me<ie.length;me++)re(ie[me],X);ie.length===2?K(x,M,P):x.projectionMatrix.copy(M.projectionMatrix),R(D,x,X)};function R(D,X,ie){ie===null?D.matrix.copy(X.matrixWorld):(D.matrix.copy(ie.matrixWorld),D.matrix.invert(),D.matrix.multiply(X.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(X.projectionMatrix),D.projectionMatrixInverse.copy(X.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Va*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null};let se=null;function fe(D,X){if(h=X.getViewerPose(c||o),g=X,h!==null){const ie=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let me=!1;ie.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let _e=0;_e<ie.length;_e++){const Le=ie[_e];let Ee=null;if(u!==null)Ee=u.getViewport(Le);else{const Pe=f.getViewSubImage(d,Le);Ee=Pe.viewport,_e===0&&(e.setRenderTargetTextures(y,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(y))}let z=N[_e];z===void 0&&(z=new Qn,z.layers.enable(_e),z.viewport=new Ct,N[_e]=z),z.matrix.fromArray(Le.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Le.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),_e===0&&(x.matrix.copy(z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(z)}const ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const _e=f.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,i.renderState)}}for(let ie=0;ie<v.length;ie++){const me=S[ie],ue=v[ie];me!==null&&ue!==void 0&&ue.update(me,X,c||o)}_.render(e,x),se&&se(D,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const $=new X_;$.setAnimationLoop(fe),this.setAnimationLoop=function(D){se=D},this.dispose=function(){}}}const Os=new ar,Qw=new Pt;function e1(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,z_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,S=y.envMapRotation;if(v&&(p.envMap.value=v,Os.copy(S),Os.x*=-1,Os.y*=-1,Os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),p.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(Os)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function t1(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(y,T);const b=e.render.frame;s[y.id]!==b&&(d(y),s[y.id]=b)}function h(y){const v=f();y.__bindingPointIndex=v;const S=r.createBuffer(),T=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,M=S.length;b<M;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let N=0,x=P.length;N<x;N++){const A=P[N];if(u(A,b,N,T)===!0){const W=A.__offset,G=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let k=0;k<G.length;k++){const H=G[k],Y=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,W+I,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,v,S,T){const b=y.value,M=v+"_"+S;if(T[M]===void 0)return typeof b=="number"||typeof b=="boolean"?T[M]=b:T[M]=b.clone(),!0;{const P=T[M];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[M]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){const v=y.uniforms;let S=0;const T=16;for(let M=0,P=v.length;M<P;M++){const N=Array.isArray(v[M])?v[M]:[v[M]];for(let x=0,A=N.length;x<A;x++){const W=N[x],G=Array.isArray(W.value)?W.value:[W.value];for(let I=0,k=G.length;I<k;I++){const H=G[I],Y=_(H),K=S%T;K!==0&&T-K<Y.boundary&&(S+=T-K),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Y.storage}}}const b=S%T;return b>0&&(S+=T-b),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class S0{constructor(e={}){const{canvas:t=bM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bi,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const v=this;let S=!1,T=0,b=0,M=null,P=-1,N=null;const x=new Ct,A=new Ct;let W=null;const G=new pt(0);let I=0,k=t.width,H=t.height,Y=1,K=null,re=null;const R=new Ct(0,0,k,H),se=new Ct(0,0,k,H);let fe=!1;const $=new Af;let D=!1,X=!1,ie=null;const me=new Pt,ue=new Ae,_e=new B,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return M===null?Y:1}let z=n;function Pe(w,q){for(let ee=0;ee<w.length;ee++){const ne=w[ee],Q=t.getContext(ne,q);if(Q!==null)return Q}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ye,!1),z===null){const q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),z=Pe(q,w),z===null)throw Pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,be,Ue,V,Ne,qe,tt,C,E,oe,he,ge,de,Fe,ze,Te,we,Ke,xe,mt,Ze,He,Ie,Be;function L(){ve=new ab(z),be=new tb(z,ve,e),ve.init(be),He=new Yw(z,ve,be),Ue=new Ww(z,ve,be),V=new ub(z),Ne=new Rw,qe=new Xw(z,ve,Ue,Ne,be,He,V),tt=new ib(v),C=new ob(v),E=new KM(z,be),Ie=new QT(z,ve,E,be),oe=new lb(z,E,V,Ie),he=new pb(z,oe,E,V),xe=new db(z,be,qe),Te=new nb(Ne),ge=new Pw(v,tt,C,ve,be,Ie,Te),de=new e1(v,Ne),Fe=new Dw,ze=new Bw(ve,be),Ke=new JT(v,tt,C,Ue,he,d,l),we=new Vw(v,he,be),Be=new t1(z,V,be,Ue),mt=new eb(z,ve,V,be),Ze=new cb(z,ve,V,be),V.programs=ge.programs,v.capabilities=be,v.extensions=ve,v.properties=Ne,v.renderLists=Fe,v.shadowMap=we,v.state=Ue,v.info=V}L();const te=new Jw(v,z);this.xr=te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(k,H,!1))},this.getSize=function(w){return w.set(k,H)},this.setSize=function(w,q,ee=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,H=q,t.width=Math.floor(w*Y),t.height=Math.floor(q*Y),ee===!0&&(t.style.width=w+"px",t.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(k*Y,H*Y).floor()},this.setDrawingBufferSize=function(w,q,ee){k=w,H=q,Y=ee,t.width=Math.floor(w*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,q,ee,ne){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,q,ee,ne),Ue.viewport(x.copy(R).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,q,ee,ne){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,q,ee,ne),Ue.scissor(A.copy(se).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Ue.setScissorTest(fe=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,q=!0,ee=!0){let ne=0;if(w){let Q=!1;if(M!==null){const Ce=M.texture.format;Q=Ce===Bg||Ce===Fg||Ce===Ug}if(Q){const Ce=M.texture.type,Ve=Ce===Or||Ce===Ur||Ce===jh||Ce===Es||Ce===Ng||Ce===Og,$e=Ke.getClearColor(),We=Ke.getClearAlpha(),Xe=$e.r,je=$e.g,et=$e.b;Ve?(u[0]=Xe,u[1]=je,u[2]=et,u[3]=We,z.clearBufferuiv(z.COLOR,0,u)):(g[0]=Xe,g[1]=je,g[2]=et,g[3]=We,z.clearBufferiv(z.COLOR,0,g))}else ne|=z.COLOR_BUFFER_BIT}q&&(ne|=z.DEPTH_BUFFER_BIT),ee&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Fe.dispose(),ze.dispose(),Ne.dispose(),tt.dispose(),C.dispose(),he.dispose(),Ie.dispose(),Be.dispose(),ge.dispose(),te.dispose(),te.removeEventListener("sessionstart",J),te.removeEventListener("sessionend",ae),ie&&(ie.dispose(),ie=null),j.stop()};function Oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=V.autoReset,q=we.enabled,ee=we.autoUpdate,ne=we.needsUpdate,Q=we.type;L(),V.autoReset=w,we.enabled=q,we.autoUpdate=ee,we.needsUpdate=ne,we.type=Q}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Z(w){const q=w.target;q.removeEventListener("dispose",Z),Se(q)}function Se(w){le(w),Ne.remove(w)}function le(w){const q=Ne.get(w).programs;q!==void 0&&(q.forEach(function(ee){ge.releaseProgram(ee)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ee,ne,Q,Ce){q===null&&(q=Le);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,$e=st(w,q,ee,ne,Q);Ue.setMaterial(ne,Ve);let We=ee.index,Xe=1;if(ne.wireframe===!0){if(We=oe.getWireframeAttribute(ee),We===void 0)return;Xe=2}const je=ee.drawRange,et=ee.attributes.position;let Rt=je.start*Xe,Kt=(je.start+je.count)*Xe;Ce!==null&&(Rt=Math.max(Rt,Ce.start*Xe),Kt=Math.min(Kt,(Ce.start+Ce.count)*Xe)),We!==null?(Rt=Math.max(Rt,0),Kt=Math.min(Kt,We.count)):et!=null&&(Rt=Math.max(Rt,0),Kt=Math.min(Kt,et.count));const vt=Kt-Rt;if(vt<0||vt===1/0)return;Ie.setup(Q,ne,$e,ee,We);let Ln,xt=mt;if(We!==null&&(Ln=E.get(We),xt=Ze,xt.setIndex(Ln)),Q.isMesh)ne.wireframe===!0?(Ue.setLineWidth(ne.wireframeLinewidth*Ee()),xt.setMode(z.LINES)):xt.setMode(z.TRIANGLES);else if(Q.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Ue.setLineWidth(Qe*Ee()),Q.isLineSegments?xt.setMode(z.LINES):Q.isLineLoop?xt.setMode(z.LINE_LOOP):xt.setMode(z.LINE_STRIP)}else Q.isPoints?xt.setMode(z.POINTS):Q.isSprite&&xt.setMode(z.TRIANGLES);if(Q.isBatchedMesh)xt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)xt.renderInstances(Rt,vt,Q.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Hd=Math.min(ee.instanceCount,Qe);xt.renderInstances(Rt,vt,Hd)}else xt.render(Rt,vt)};function O(w,q,ee){w.transparent===!0&&w.side===er&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,Je(w,q,ee),w.side=Ir,w.needsUpdate=!0,Je(w,q,ee),w.side=er):Je(w,q,ee)}this.compile=function(w,q,ee=null){ee===null&&(ee=w),p=ze.get(ee),p.init(),y.push(p),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),w!==ee&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(v._useLegacyLights);const ne=new Set;return w.traverse(function(Q){const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){const $e=Ce[Ve];O($e,ee,Q),ne.add($e)}else O(Ce,ee,Q),ne.add(Ce)}),y.pop(),p=null,ne},this.compileAsync=function(w,q,ee=null){const ne=this.compile(w,q,ee);return new Promise(Q=>{function Ce(){if(ne.forEach(function(Ve){Ne.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){Q(w);return}setTimeout(Ce,10)}ve.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ce=null;function F(w){ce&&ce(w)}function J(){j.stop()}function ae(){j.start()}const j=new X_;j.setAnimationLoop(F),typeof self!="undefined"&&j.setContext(self),this.setAnimationLoop=function(w){ce=w,te.setAnimationLoop(w),w===null?j.stop():j.start()},te.addEventListener("sessionstart",J),te.addEventListener("sessionend",ae),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,q,M),p=ze.get(w,y.length),p.init(),y.push(p),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(me),X=this.localClippingEnabled,D=Te.init(this.clippingPlanes,X),_=Fe.get(w,m.length),_.init(),m.push(_),Me(w,q,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(K,re),this.info.render.frame++,D===!0&&Te.beginShadows();const ee=p.state.shadowsArray;if(we.render(ee,w,q),D===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1)&&Ke.render(_,w),p.setupLights(v._useLegacyLights),q.isArrayCamera){const ne=q.cameras;for(let Q=0,Ce=ne.length;Q<Ce;Q++){const Ve=ne[Q];pe(_,w,Ve,Ve.viewport)}}else pe(_,w,q);M!==null&&(qe.updateMultisampleRenderTarget(M),qe.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(v,w,q),Ie.resetDefaultState(),P=-1,N=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Me(w,q,ee,ne){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){ne&&_e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const Ve=he.update(w),$e=w.material;$e.visible&&_.push(w,Ve,$e,ee,_e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const Ve=he.update(w),$e=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_e.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),_e.copy(Ve.boundingSphere.center)),_e.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray($e)){const We=Ve.groups;for(let Xe=0,je=We.length;Xe<je;Xe++){const et=We[Xe],Rt=$e[et.materialIndex];Rt&&Rt.visible&&_.push(w,Ve,Rt,ee,_e.z,et)}}else $e.visible&&_.push(w,Ve,$e,ee,_e.z,null)}}const Ce=w.children;for(let Ve=0,$e=Ce.length;Ve<$e;Ve++)Me(Ce[Ve],q,ee,ne)}function pe(w,q,ee,ne){const Q=w.opaque,Ce=w.transmissive,Ve=w.transparent;p.setupLightsView(ee),D===!0&&Te.setGlobalState(v.clippingPlanes,ee),Ce.length>0&&De(Q,Ce,q,ee),ne&&Ue.viewport(x.copy(ne)),Q.length>0&&Ye(Q,q,ee),Ce.length>0&&Ye(Ce,q,ee),Ve.length>0&&Ye(Ve,q,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function De(w,q,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Ce=be.isWebGL2;ie===null&&(ie=new vi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ir:Or,minFilter:Ms,samples:Ce?4:0})),v.getDrawingBufferSize(ue),Ce?ie.setSize(ue.x,ue.y):ie.setSize(Sc(ue.x),Sc(ue.y));const Ve=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(G),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const $e=v.toneMapping;v.toneMapping=Nr,Ye(w,ee,ne),qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie);let We=!1;for(let Xe=0,je=q.length;Xe<je;Xe++){const et=q[Xe],Rt=et.object,Kt=et.geometry,vt=et.material,Ln=et.group;if(vt.side===er&&Rt.layers.test(ne.layers)){const xt=vt.side;vt.side=Bn,vt.needsUpdate=!0,ke(Rt,ee,ne,Kt,vt,Ln),vt.side=xt,vt.needsUpdate=!0,We=!0}}We===!0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie)),v.setRenderTarget(Ve),v.setClearColor(G,I),v.toneMapping=$e}function Ye(w,q,ee){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ce=w.length;Q<Ce;Q++){const Ve=w[Q],$e=Ve.object,We=Ve.geometry,Xe=ne===null?Ve.material:ne,je=Ve.group;$e.layers.test(ee.layers)&&ke($e,q,ee,We,Xe,je)}}function ke(w,q,ee,ne,Q,Ce){w.onBeforeRender(v,q,ee,ne,Q,Ce),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(v,q,ee,ne,w,Ce),Q.transparent===!0&&Q.side===er&&Q.forceSinglePass===!1?(Q.side=Bn,Q.needsUpdate=!0,v.renderBufferDirect(ee,q,ne,Q,w,Ce),Q.side=Ir,Q.needsUpdate=!0,v.renderBufferDirect(ee,q,ne,Q,w,Ce),Q.side=er):v.renderBufferDirect(ee,q,ne,Q,w,Ce),w.onAfterRender(v,q,ee,ne,Q,Ce)}function Je(w,q,ee){q.isScene!==!0&&(q=Le);const ne=Ne.get(w),Q=p.state.lights,Ce=p.state.shadowsArray,Ve=Q.state.version,$e=ge.getParameters(w,Q.state,Ce,q,ee),We=ge.getProgramCacheKey($e);let Xe=ne.programs;ne.environment=w.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(w.isMeshStandardMaterial?C:tt).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",Z),Xe=new Map,ne.programs=Xe);let je=Xe.get(We);if(je!==void 0){if(ne.currentProgram===je&&ne.lightsStateVersion===Ve)return dt(w,$e),je}else $e.uniforms=ge.getUniforms(w),w.onBuild(ee,$e,v),w.onBeforeCompile($e,v),je=ge.acquireProgram($e,We),Xe.set(We,je),ne.uniforms=$e.uniforms;const et=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=Te.uniform),dt(w,$e),ne.needsLights=gt(w),ne.lightsStateVersion=Ve,ne.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.directionalShadowMap.value=Q.state.directionalShadowMap,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotShadowMap.value=Q.state.spotShadowMap,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMap.value=Q.state.pointShadowMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=je,ne.uniformsList=null,je}function ct(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=qc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function dt(w,q){const ee=Ne.get(w);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.instancingMorph=q.instancingMorph,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function st(w,q,ee,ne,Q){q.isScene!==!0&&(q=Le),qe.resetTextureUnits();const Ce=q.fog,Ve=ne.isMeshStandardMaterial?q.environment:null,$e=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Br,We=(ne.isMeshStandardMaterial?C:tt).get(ne.envMap||Ve),Xe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,je=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,Kt=!!ee.morphAttributes.color;let vt=Nr;ne.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Ln=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xt=Ln!==void 0?Ln.length:0,Qe=Ne.get(ne),Hd=p.state.lights;if(D===!0&&(X===!0||w!==N)){const hi=w===N&&ne.id===P;Te.setState(ne,w,hi)}let Lt=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Hd.state.version||Qe.outputColorSpace!==$e||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==We||ne.fog===!0&&Qe.fog!==Ce||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Te.numPlanes||Qe.numIntersection!==Te.numIntersection)||Qe.vertexAlphas!==Xe||Qe.vertexTangents!==je||Qe.morphTargets!==et||Qe.morphNormals!==Rt||Qe.morphColors!==Kt||Qe.toneMapping!==vt||be.isWebGL2===!0&&Qe.morphTargetsCount!==xt)&&(Lt=!0):(Lt=!0,Qe.__version=ne.version);let Vs=Qe.currentProgram;Lt===!0&&(Vs=Je(ne,q,Q));let ix=!1,bl=!1,Gd=!1;const mn=Vs.getUniforms(),Ws=Qe.uniforms;if(Ue.useProgram(Vs.program)&&(ix=!0,bl=!0,Gd=!0),ne.id!==P&&(P=ne.id,bl=!0),ix||N!==w){mn.setValue(z,"projectionMatrix",w.projectionMatrix),mn.setValue(z,"viewMatrix",w.matrixWorldInverse);const hi=mn.map.cameraPosition;hi!==void 0&&hi.setValue(z,_e.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&mn.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&mn.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,bl=!0,Gd=!0)}if(Q.isSkinnedMesh){mn.setOptional(z,Q,"bindMatrix"),mn.setOptional(z,Q,"bindMatrixInverse");const hi=Q.skeleton;hi&&(be.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),mn.setValue(z,"boneTexture",hi.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(mn.setOptional(z,Q,"batchingTexture"),mn.setValue(z,"batchingTexture",Q._matricesTexture,qe));const Vd=ee.morphAttributes;if((Vd.position!==void 0||Vd.normal!==void 0||Vd.color!==void 0&&be.isWebGL2===!0)&&xe.update(Q,ee,Vs),(bl||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,mn.setValue(z,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ws.envMap.value=We,Ws.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),bl&&(mn.setValue(z,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&at(Ws,Gd),Ce&&ne.fog===!0&&de.refreshFogUniforms(Ws,Ce),de.refreshMaterialUniforms(Ws,ne,Y,H,ie),qc.upload(z,ct(Qe),Ws,qe)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(qc.upload(z,ct(Qe),Ws,qe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&mn.setValue(z,"center",Q.center),mn.setValue(z,"modelViewMatrix",Q.modelViewMatrix),mn.setValue(z,"normalMatrix",Q.normalMatrix),mn.setValue(z,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const hi=ne.uniformsGroups;for(let Wd=0,QA=hi.length;Wd<QA;Wd++)if(be.isWebGL2){const rx=hi[Wd];Be.update(rx,Vs),Be.bind(rx,Vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vs}function at(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function gt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,q,ee){Ne.get(w.texture).__webglTexture=q,Ne.get(w.depthTexture).__webglTexture=ee;const ne=Ne.get(w);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){const ee=Ne.get(w);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,ee=0){M=w,T=q,b=ee;let ne=!0,Q=null,Ce=!1,Ve=!1;if(w){const We=Ne.get(w);We.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(z.FRAMEBUFFER,null),ne=!1):We.__webglFramebuffer===void 0?qe.setupRenderTarget(w):We.__hasExternalTextures&&qe.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ve=!0);const je=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[q])?Q=je[q][ee]:Q=je[q],Ce=!0):be.isWebGL2&&w.samples>0&&qe.useMultisampledRTT(w)===!1?Q=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?Q=je[ee]:Q=je,x.copy(w.viewport),A.copy(w.scissor),W=w.scissorTest}else x.copy(R).multiplyScalar(Y).floor(),A.copy(se).multiplyScalar(Y).floor(),W=fe;if(Ue.bindFramebuffer(z.FRAMEBUFFER,Q)&&be.drawBuffers&&ne&&Ue.drawBuffers(w,Q),Ue.viewport(x),Ue.scissor(A),Ue.setScissorTest(W),Ce){const We=Ne.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,ee)}else if(Ve){const We=Ne.get(w.texture),Xe=q||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,ee||0,Xe)}P=-1},this.readRenderTargetPixels=function(w,q,ee,ne,Q,Ce,Ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){Ue.bindFramebuffer(z.FRAMEBUFFER,$e);try{const We=w.texture,Xe=We.format,je=We.type;if(Xe!==_i&&He.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=je===ir&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(je!==Or&&He.convert(je)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===nr&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ne&&ee>=0&&ee<=w.height-Q&&z.readPixels(q,ee,ne,Q,He.convert(Xe),He.convert(je),Ce)}finally{const We=M!==null?Ne.get(M).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(w,q,ee=0){const ne=Math.pow(2,-ee),Q=Math.floor(q.image.width*ne),Ce=Math.floor(q.image.height*ne);qe.setTexture2D(q,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,w.x,w.y,Q,Ce),Ue.unbindTexture()},this.copyTextureToTexture=function(w,q,ee,ne=0){const Q=q.image.width,Ce=q.image.height,Ve=He.convert(ee.format),$e=He.convert(ee.type);qe.setTexture2D(ee,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ee.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ee.unpackAlignment),q.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ne,w.x,w.y,Q,Ce,Ve,$e,q.image.data):q.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ne,w.x,w.y,q.mipmaps[0].width,q.mipmaps[0].height,Ve,q.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,ne,w.x,w.y,Ve,$e,q.image),ne===0&&ee.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(w,q,ee,ne,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=Math.round(w.max.x-w.min.x),Ve=Math.round(w.max.y-w.min.y),$e=w.max.z-w.min.z+1,We=He.convert(ne.format),Xe=He.convert(ne.type);let je;if(ne.isData3DTexture)qe.setTexture3D(ne,0),je=z.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)qe.setTexture2DArray(ne,0),je=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ne.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ne.unpackAlignment);const et=z.getParameter(z.UNPACK_ROW_LENGTH),Rt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Kt=z.getParameter(z.UNPACK_SKIP_PIXELS),vt=z.getParameter(z.UNPACK_SKIP_ROWS),Ln=z.getParameter(z.UNPACK_SKIP_IMAGES),xt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?z.texSubImage3D(je,Q,q.x,q.y,q.z,Ce,Ve,$e,We,Xe,xt.data):ne.isCompressedArrayTexture?z.compressedTexSubImage3D(je,Q,q.x,q.y,q.z,Ce,Ve,$e,We,xt.data):z.texSubImage3D(je,Q,q.x,q.y,q.z,Ce,Ve,$e,We,Xe,xt),z.pixelStorei(z.UNPACK_ROW_LENGTH,et),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ln),Q===0&&ne.generateMipmaps&&z.generateMipmap(je),Ue.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){T=0,b=0,M=null,Ue.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tf?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===gc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class n1 extends S0{}n1.prototype.isWebGL1Renderer=!0;class i1 extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class M0 extends ja{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const E0=new B,T0=new B,b0=new Pt,Uf=new mf,jc=new Ac;class r1 extends Cn{constructor(e=new Jn,t=new M0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)E0.fromBufferAttribute(t,i-1),T0.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=E0.distanceTo(T0);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(i),jc.radius+=s,e.ray.intersectsSphere(jc)===!1)return;b0.copy(i).invert(),Uf.copy(e.ray).applyMatrix4(b0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,h=new B,f=new B,d=new B,u=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=u){const T=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),Uf.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=u){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Uf.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ae:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,i=[],s=[],o=[],a=new B,l=new Pt;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tn(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(tn(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ff extends Gi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class s1 extends Ff{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Kc=new B,kf=new Bf,zf=new Bf,Hf=new Bf;class o1 extends Gi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Kc.subVectors(i[0],i[1]).add(i[0]),c=Kc);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Kc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),kf.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),zf.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Hf.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(kf.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),zf.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Hf.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(kf.calc(l),zf.calc(l),Hf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function w0(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function a1(r,e){const t=1-r;return t*t*e}function l1(r,e){return 2*(1-r)*r*e}function c1(r,e){return r*r*e}function Qa(r,e,t,n){return a1(r,e)+l1(r,t)+c1(r,n)}function u1(r,e){const t=1-r;return t*t*t*e}function h1(r,e){const t=1-r;return 3*t*t*r*e}function f1(r,e){return 3*(1-r)*r*r*e}function d1(r,e){return r*r*r*e}function el(r,e,t,n,i){return u1(r,e)+h1(r,t)+f1(r,n)+d1(r,i)}class A0 extends Gi{constructor(e=new Ae,t=new Ae,n=new Ae,i=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ae){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(el(e,i.x,s.x,o.x,a.x),el(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p1 extends Gi{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(el(e,i.x,s.x,o.x,a.x),el(e,i.y,s.y,o.y,a.y),el(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C0 extends Gi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m1 extends Gi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P0 extends Gi{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Qa(e,i.x,s.x,o.x),Qa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g1 extends Gi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Qa(e,i.x,s.x,o.x),Qa(e,i.y,s.y,o.y),Qa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R0 extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(w0(a,l.x,c.x,h.x,f.x),w0(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ae().fromArray(i))}return this}}var L0=Object.freeze({__proto__:null,ArcCurve:s1,CatmullRomCurve3:o1,CubicBezierCurve:A0,CubicBezierCurve3:p1,EllipseCurve:Ff,LineCurve:C0,LineCurve3:m1,QuadraticBezierCurve:P0,QuadraticBezierCurve3:g1,SplineCurve:R0});class _1 extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new L0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new L0[i.type]().fromJSON(i))}return this}}class D0 extends _1{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new C0(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new P0(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new A0(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new R0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Ff(e,t,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gf extends Jn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new B,h=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new sn(o,3)),this.setAttribute("normal",new sn(a,3)),this.setAttribute("uv",new sn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Zc=new B,Jc=new B,Vf=new B,Qc=new Mi;class v1 extends Jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(So*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Qc;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Qc.getNormal(Vf),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const v=(y+1)%3,S=f[y],T=f[v],b=Qc[h[y]],M=Qc[h[v]],P=`${S}_${T}`,N=`${T}_${S}`;N in d&&d[N]?(Vf.dot(d[N].normal)<=s&&(u.push(b.x,b.y,b.z),u.push(M.x,M.y,M.z)),d[N]=null):P in d||(d[P]={index0:c[y],index1:c[v],normal:Vf.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Zc.fromBufferAttribute(a,_),Jc.fromBufferAttribute(a,p),u.push(Zc.x,Zc.y,Zc.z),u.push(Jc.x,Jc.y,Jc.z)}this.setAttribute("position",new sn(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wf extends D0{constructor(e){super(e),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new D0().fromJSON(i))}return this}}const x1={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=I0(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,u;if(n&&(s=T1(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)f=r[g],d=r[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return tl(s,o,t,a,l,u,0),o}};function I0(r,e,t,n,i){let s,o;if(i===O1(r,e,t,n)>0)for(s=e;s<t;s+=n)o=U0(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=U0(s,r[s],r[s+1],o);return o&&eu(o,o.next)&&(il(o),o=o.next),o}function Us(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(eu(t,t.next)||Ot(t.prev,t,t.next)===0)){if(il(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function tl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&P1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?S1(r,n,i,s):y1(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),il(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=M1(Us(r),e,t),tl(r,e,t,n,i,s,2)):o===2&&E1(r,e,t,n,i,s):tl(Us(r),e,t,n,i,s,1);break}}}function y1(r){const e=r.prev,t=r,n=r.next;if(Ot(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Vo(i,a,s,l,o,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S1(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ot(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=Xf(u,g,e,t,n),y=Xf(_,p,e,t,n);let v=r.prevZ,S=r.nextZ;for(;v&&v.z>=m&&S&&S.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Vo(a,h,l,f,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=u&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Vo(a,h,l,f,c,d,S.x,S.y)&&Ot(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Vo(a,h,l,f,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=u&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Vo(a,h,l,f,c,d,S.x,S.y)&&Ot(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function M1(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!eu(i,s)&&N0(i,n,n.next,s)&&nl(i,s)&&nl(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),il(n),il(n.next),n=r=s),n=n.next}while(n!==r);return Us(n)}function E1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D1(o,a)){let l=O0(o,a);o=Us(o,o.next),l=Us(l,l.next),tl(o,e,t,n,i,s,0),tl(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function T1(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=I0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(L1(c));for(i.sort(b1),s=0;s<i.length;s++)t=w1(i[s],t);return t}function b1(r,e){return r.x-e.x}function w1(r,e){const t=A1(r,e);if(!t)return e;const n=O0(t,r);return Us(n,n.next),Us(t,t.next)}function A1(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Vo(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),nl(t,r)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&C1(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function C1(r,e){return Ot(r.prev,r,e.prev)<0&&Ot(e.next,r,r.next)<0}function P1(r,e,t,n){let i=r;do i.z===0&&(i.z=Xf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,R1(i)}function R1(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Xf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function L1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Vo(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function D1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!I1(r,e)&&(nl(r,e)&&nl(e,r)&&N1(r,e)&&(Ot(r.prev,r,e.prev)||Ot(r,e.prev,e))||eu(r,e)&&Ot(r.prev,r,r.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function eu(r,e){return r.x===e.x&&r.y===e.y}function N0(r,e,t,n){const i=nu(Ot(r,e,t)),s=nu(Ot(r,e,n)),o=nu(Ot(t,n,r)),a=nu(Ot(t,n,e));return!!(i!==s&&o!==a||i===0&&tu(r,t,e)||s===0&&tu(r,n,e)||o===0&&tu(t,r,n)||a===0&&tu(t,e,n))}function tu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function nu(r){return r>0?1:r<0?-1:0}function I1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&N0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function nl(r,e){return Ot(r.prev,r,r.next)<0?Ot(r,e,r.next)>=0&&Ot(r,r.prev,e)>=0:Ot(r,e,r.prev)<0||Ot(r,r.next,e)<0}function N1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function O0(r,e){const t=new Yf(r.i,r.x,r.y),n=new Yf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function U0(r,e,t,n){const i=new Yf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function il(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Yf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class rl{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return rl.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];F0(e),B0(n,e);let o=e.length;t.forEach(F0);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,B0(n,t[l]);const a=x1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function F0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function B0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class qf extends Jn{constructor(e=new Wf([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new sn(i,3)),this.setAttribute("normal",new sn(s,3)),this.setAttribute("uv",new sn(o,2));function c(h){const f=i.length/3,d=h.extractPoints(t);let u=d.shape;const g=d.holes;rl.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];rl.isClockWise(y)===!0&&(g[p]=y.reverse())}const _=rl.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];u=u.concat(y)}for(let p=0,m=u.length;p<m;p++){const y=u[p];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){const y=_[p],v=y[0]+f,S=y[1]+f,T=y[2]+f;n.push(v,S,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return U1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new qf(n,e.curveSegments)}}function U1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class F1 extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class B1 extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $f=new Pt,k0=new B,z0=new B;class k1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Af,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;k0.setFromMatrixPosition(e.matrixWorld),t.position.copy(k0),z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z0),t.updateMatrixWorld(),$f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const H0=new Pt,sl=new B,jf=new B;class z1 extends k1{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sl.setFromMatrixPosition(e.matrixWorld),n.position.copy(sl),jf.copy(n.position),jf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jf),n.updateMatrixWorld(),i.makeTranslation(-sl.x,-sl.y,-sl.z),H0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H0)}}class H1 extends B1{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new z1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class G0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=V0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=V0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function V0(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.","");class W0{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);const X0={type:"change"},Kf={type:"start"},Y0={type:"end"},iu=new mf,q0=new Xr,G1=Math.cos(70*TM.DEG2RAD);class V1 extends bs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:mo.ROTATE,TWO:mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ze),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(X0),n.update(),s=i.NONE},this.update=function(){const L=new B,te=new As().setFromUnitVectors(e.up,new B(0,1,0)),Oe=te.clone().invert(),U=new B,ye=new As,Z=new B,Se=2*Math.PI;return function(O=null){const ce=n.object.position;L.copy(ce).sub(n.target),L.applyQuaternion(te),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&W(x(O)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let F=n.minAzimuthAngle,J=n.maxAzimuthAngle;isFinite(F)&&isFinite(J)&&(F<-Math.PI?F+=Se:F>Math.PI&&(F-=Se),J<-Math.PI?J+=Se:J>Math.PI&&(J-=Se),F<=J?a.theta=Math.max(F,Math.min(J,a.theta)):a.theta=a.theta>(F+J)/2?Math.max(F,a.theta):Math.min(J,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ae=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=R(a.radius);else{const j=a.radius;a.radius=R(a.radius*c),ae=j!=a.radius}if(L.setFromSpherical(a),L.applyQuaternion(Oe),ce.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&b){let j=null;if(n.object.isPerspectiveCamera){const Me=L.length();j=R(Me*c);const pe=Me-j;n.object.position.addScaledVector(S,pe),n.object.updateMatrixWorld(),ae=!!pe}else if(n.object.isOrthographicCamera){const Me=new B(T.x,T.y,0);Me.unproject(n.object);const pe=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ae=pe!==n.object.zoom;const De=new B(T.x,T.y,0);De.unproject(n.object),n.object.position.sub(De).add(Me),n.object.updateMatrixWorld(),j=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;j!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(j).add(n.object.position):(iu.origin.copy(n.object.position),iu.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(iu.direction))<G1?e.lookAt(n.target):(q0.setFromNormalAndCoplanarPoint(n.object.up,n.target),iu.intersectPlane(q0,n.target))))}else if(n.object.isOrthographicCamera){const j=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),j!==n.object.zoom&&(n.object.updateProjectionMatrix(),ae=!0)}return c=1,b=!1,ae||U.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||Z.distanceToSquared(n.target)>o?(n.dispatchEvent(X0),U.copy(n.object.position),ye.copy(n.object.quaternion),Z.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ze),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new W0,l=new W0;let c=1;const h=new B,f=new Ae,d=new Ae,u=new Ae,g=new Ae,_=new Ae,p=new Ae,m=new Ae,y=new Ae,v=new Ae,S=new B,T=new Ae;let b=!1;const M=[],P={};let N=!1;function x(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(L){const te=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*te)}function W(L){l.theta-=L}function G(L){l.phi-=L}const I=function(){const L=new B;return function(Oe,U){L.setFromMatrixColumn(U,0),L.multiplyScalar(-Oe),h.add(L)}}(),k=function(){const L=new B;return function(Oe,U){n.screenSpacePanning===!0?L.setFromMatrixColumn(U,1):(L.setFromMatrixColumn(U,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Oe),h.add(L)}}(),H=function(){const L=new B;return function(Oe,U){const ye=n.domElement;if(n.object.isPerspectiveCamera){const Z=n.object.position;L.copy(Z).sub(n.target);let Se=L.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Oe*Se/ye.clientHeight,n.object.matrix),k(2*U*Se/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Oe*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),k(U*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(L,te){if(!n.zoomToCursor)return;b=!0;const Oe=n.domElement.getBoundingClientRect(),U=L-Oe.left,ye=te-Oe.top,Z=Oe.width,Se=Oe.height;T.x=U/Z*2-1,T.y=-(ye/Se)*2+1,S.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function R(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function se(L){f.set(L.clientX,L.clientY)}function fe(L){re(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function $(L){g.set(L.clientX,L.clientY)}function D(L){d.set(L.clientX,L.clientY),u.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;W(2*Math.PI*u.x/te.clientHeight),G(2*Math.PI*u.y/te.clientHeight),f.copy(d),n.update()}function X(L){y.set(L.clientX,L.clientY),v.subVectors(y,m),v.y>0?Y(A(v.y)):v.y<0&&K(A(v.y)),m.copy(y),n.update()}function ie(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function me(L){re(L.clientX,L.clientY),L.deltaY<0?K(A(L.deltaY)):L.deltaY>0&&Y(A(L.deltaY)),n.update()}function ue(L){let te=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),te=!0;break}te&&(L.preventDefault(),n.update())}function _e(L){if(M.length===1)f.set(L.pageX,L.pageY);else{const te=Ie(L),Oe=.5*(L.pageX+te.x),U=.5*(L.pageY+te.y);f.set(Oe,U)}}function Le(L){if(M.length===1)g.set(L.pageX,L.pageY);else{const te=Ie(L),Oe=.5*(L.pageX+te.x),U=.5*(L.pageY+te.y);g.set(Oe,U)}}function Ee(L){const te=Ie(L),Oe=L.pageX-te.x,U=L.pageY-te.y,ye=Math.sqrt(Oe*Oe+U*U);m.set(0,ye)}function z(L){n.enableZoom&&Ee(L),n.enablePan&&Le(L)}function Pe(L){n.enableZoom&&Ee(L),n.enableRotate&&_e(L)}function ve(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const Oe=Ie(L),U=.5*(L.pageX+Oe.x),ye=.5*(L.pageY+Oe.y);d.set(U,ye)}u.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;W(2*Math.PI*u.x/te.clientHeight),G(2*Math.PI*u.y/te.clientHeight),f.copy(d)}function be(L){if(M.length===1)_.set(L.pageX,L.pageY);else{const te=Ie(L),Oe=.5*(L.pageX+te.x),U=.5*(L.pageY+te.y);_.set(Oe,U)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function Ue(L){const te=Ie(L),Oe=L.pageX-te.x,U=L.pageY-te.y,ye=Math.sqrt(Oe*Oe+U*U);y.set(0,ye),v.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),Y(v.y),m.copy(y);const Z=(L.pageX+te.x)*.5,Se=(L.pageY+te.y)*.5;re(Z,Se)}function V(L){n.enableZoom&&Ue(L),n.enablePan&&be(L)}function Ne(L){n.enableZoom&&Ue(L),n.enableRotate&&ve(L)}function qe(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",C)),!Ze(L)&&(xe(L),L.pointerType==="touch"?Te(L):E(L)))}function tt(L){n.enabled!==!1&&(L.pointerType==="touch"?we(L):oe(L))}function C(L){switch(mt(L),M.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(Y0),s=i.NONE;break;case 1:const te=M[0],Oe=P[te];Te({pointerId:te,pageX:Oe.x,pageY:Oe.y});break}}function E(L){let te;switch(L.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case po.DOLLY:if(n.enableZoom===!1)return;fe(L),s=i.DOLLY;break;case po.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;$(L),s=i.PAN}else{if(n.enableRotate===!1)return;se(L),s=i.ROTATE}break;case po.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;se(L),s=i.ROTATE}else{if(n.enablePan===!1)return;$(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Kf)}function oe(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;D(L);break;case i.DOLLY:if(n.enableZoom===!1)return;X(L);break;case i.PAN:if(n.enablePan===!1)return;ie(L);break}}function he(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Kf),me(ge(L)),n.dispatchEvent(Y0))}function ge(L){const te=L.deltaMode,Oe={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(te){case 1:Oe.deltaY*=16;break;case 2:Oe.deltaY*=100;break}return L.ctrlKey&&!N&&(Oe.deltaY*=10),Oe}function de(L){L.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",Fe,{passive:!0,capture:!0}))}function Fe(L){L.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",Fe,{passive:!0,capture:!0}))}function ze(L){n.enabled===!1||n.enablePan===!1||ue(L)}function Te(L){switch(He(L),M.length){case 1:switch(n.touches.ONE){case mo.ROTATE:if(n.enableRotate===!1)return;_e(L),s=i.TOUCH_ROTATE;break;case mo.PAN:if(n.enablePan===!1)return;Le(L),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case mo.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(L),s=i.TOUCH_DOLLY_PAN;break;case mo.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(L),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Kf)}function we(L){switch(He(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;be(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(L),n.update();break;default:s=i.NONE}}function Ke(L){n.enabled!==!1&&L.preventDefault()}function xe(L){M.push(L.pointerId)}function mt(L){delete P[L.pointerId];for(let te=0;te<M.length;te++)if(M[te]==L.pointerId){M.splice(te,1);return}}function Ze(L){for(let te=0;te<M.length;te++)if(M[te]==L.pointerId)return!0;return!1}function He(L){let te=P[L.pointerId];te===void 0&&(te=new Ae,P[L.pointerId]=te),te.set(L.pageX,L.pageY)}function Ie(L){const te=L.pointerId===M[0]?M[1]:M[0];return P[te]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",he,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}const $0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const W1=new Y_(-1,1,1,-1,0,1);class X1 extends Jn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const Y1=new X1;class Zf{constructor(e){this._mesh=new zi(Y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class q1 extends Wo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ja.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class j0 extends Wo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $1 extends Wo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class j1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ir}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new q1($0),this.copyPass.material.blending=tr,this.clock=new G0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}j0!==void 0&&(o instanceof j0?n=!0:o instanceof $1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K1 extends Wo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Z1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xo extends Wo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(s,o,{type:ir}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new vi(s,o,{type:ir});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new vi(s,o,{type:ir});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=Z1;this.highPassUniforms=Ja.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ae(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=$0;this.copyUniforms=Ja.clone(h.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pt,this.oldClearAlpha=1,this.basic=new Ef,this.fsQuad=new Zf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xo.BlurDirectionX=new Ae(1,0),Xo.BlurDirectionY=new Ae(0,1);const J1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Q1 extends Wo{constructor(){super();const e=J1;this.uniforms=Ja.clone(e.uniforms),this.material=new F1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ag?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class eA{constructor(e){this.container=e,this.size=1.5,this.numberOfLayers=90,this.layerDelay=12,this.layerSpacing=2,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.cameraAnimating=!1,this.cameraAnimationStartTime=0,this.cameraAnimationDuration=2,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.layers=[],this.squarePortal=[],this.hexagonPortal=[],this.circlePortal=[],this.hexagonDashedLines=null,this.activePortal=this.hexagonPortal,this.offsetX=12.5,this.offsetZ=20,this.cameraOffsetZ=-7,this.offsetXSquarePortal=this.offsetX,this.offsetXSHexagonPortal=0,this.offsetXCirclePortal=-this.offsetX,this.targetCameraPosition=new B,this.mouse=new Ae,this.params={threshold:0,strength:.66,radius:.35,exposure:1},this.initScene()}initScene(){this.clock=new G0,this.renderer=new S0({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.toneMapping=Vh;const e=this.renderer.domElement;e.style.width="100%",e.style.height="100%",this.container.appendChild(e),this.scene=new i1,this.camera=new Qn(60,this.container.clientWidth/this.container.clientHeight,1,300),this.camera.position.set(0,0,-50),this.scene.add(this.camera),this.controls=new V1(this.camera,this.renderer.domElement),this.controls.enabled=!1;const t=new H1(this.color,100);this.camera.add(t);const n=new K1(this.scene,this.camera);this.initPostProcessing(n),window.addEventListener("resize",()=>this.onWindowResize(),!1),this.onWindowResize(),this.initialState(),this.animate()}initialState(){const e=this.createSegment("square","#54EAAB");e.position.x=this.offsetXSquarePortal,e.position.z=this.offsetZ,this.squarePortal.push(e),this.scene.add(e);const t=this.createSegment("hexagon","#5FB2FF");t.position.z=this.offsetZ,this.hexagonPortal.push(t),this.scene.add(t);const n=this.createSegment("circle","#CBA1FE");n.position.x=this.offsetXCirclePortal,n.position.z=this.offsetZ,this.circlePortal.push(n),this.scene.add(n),this.activePortal=this.hexagonPortal}bringForwardAnimation(){Tt.timeline().to(this.camera.position,{z:this.cameraOffsetZ,duration:.6,ease:"power4.out"},"a")}parallaxEffect(){document.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.targetCameraPosition.x=this.mouse.x*.1,this.targetCameraPosition.y=this.mouse.y*.1,this.targetCameraPosition.z=this.camera.position.z,Tt.to(this.camera.position,{x:this.targetCameraPosition.x,y:this.targetCameraPosition.y,duration:.5,ease:"power2.out"})})}focus(e){const t={square:this.offsetXSquarePortal,hexagon:this.offsetXSHexagonPortal,circle:this.offsetXCirclePortal}[e],n=this.activePortal;switch(e){case"square":this.activePortal=this.squarePortal;break;case"hexagon":this.activePortal=this.hexagonPortal;break;case"circle":this.activePortal=this.circlePortal;break;default:console.log(`Unknown shape: ${e}`);return}Tt.defaults({duration:.9,ease:"power4.inOut"}),Tt.to(this.camera.position,{x:t}),n.forEach(i=>{Tt.to(i.position,{z:this.offsetZ})}),Tt.to(this.activePortal[0].position,{z:0})}animate(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}start(){const e=Tt.timeline();for(console.log("...starting portal animation...");this.activePortal.length>1;){const t=this.activePortal.pop();this.scene.remove(t)}for(let t=1;t<this.numberOfLayers;t++)e.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.activePortal[0],i=n.clone();i.position.z=n.position.z+t*this.layerSpacing,this.scene.add(i),this.activePortal.push(i)}});e.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{console.log("Camera animation complete.")}},"-=1.6")}createSegment(e=this.shape,t=this.color){const n=this.createGeometry(e),i=new M0({color:t});return new r1(n,i)}createGeometry(e){switch(e){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${e}`)}}createSquareGeometry(){const t=new Wf;return t.moveTo(-2.4/2,-2.4/2),t.lineTo(2.4/2,-2.4/2),t.lineTo(2.4/2,2.4/2),t.lineTo(-2.4/2,2.4/2),t.lineTo(-2.4/2,-2.4/2),new qf(t)}createCircleGeometry(){const n=new Gf(1.4,96);return new v1(n)}createHexagonGeometry(){const e=this.size,t=6,n=new Wf,i=0,s=0;n.moveTo(i+e*Math.cos(0),s+e*Math.sin(0));for(let a=1;a<=t;a+=1){const l=a*2*Math.PI/t;n.lineTo(i+e*Math.cos(l),s+e*Math.sin(l))}return new Jn().setFromPoints(n.getPoints())}initPostProcessing(e){const t=new Xo(new Ae(this.container.clientWidth,this.container.clientHeight),1.5,.4,.85);t.threshold=this.params.threshold,t.strength=this.params.strength,t.radius=this.params.radius;const n=new Q1;this.composer=new j1(this.renderer),this.composer.addPass(e),this.composer.addPass(t),this.composer.addPass(n)}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);const n=e/t;this.camera.fov=this.adjustFOV(n),console.log("aspect ratio: ",n),console.log("fov: ",this.camera.fov),this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(e,t)}adjustFOV(e){return 2*Math.atan(Math.tan(30*Math.PI/180/2)/e)*(180/Math.PI)*1.7}}class tA{constructor(e){gn(this,"initVideos",()=>{const e=document.querySelectorAll(".portal__video");if(!e.length){console.warn("No video containers found");return}e.forEach(t=>{const n=t.getAttribute("data-mp4"),i=t.getAttribute("data-webm");if(!n||!i){console.error("Video source attributes missing",t);return}const s=document.createElement("video");s.style.width="100%",s.style.height="100%",s.autoplay=!0,s.loop=!0,s.playsinline=!0,s.muted=!0;const o=document.createElement("source");o.src=n,o.type="video/mp4";const a=document.createElement("source");a.src=i,a.type="video/webm",s.appendChild(o),s.appendChild(a),t.appendChild(s),s.addEventListener("error",l=>{console.error("Error loading video:",l)})})});if(this.$container=e,!this.$container){console.warn("No portal container found");return}console.log("init portal manager"),this.portals=new eA(this.$container),this.portalTriggers={},this.portalScrollTrigger=null,this.initTriggers(),this.initVideos(),this.initVisibility(),this.snapInView()}snapInView(){Tt.registerPlugin(Ha,rt),this.portalScrollTrigger=rt.create({trigger:"#homePortals",once:!0,start:"top 20%",onEnter:()=>{console.log("Snap to portals section"),this.portals.bringForwardAnimation();const e=document.getElementById("portalTriggerHexagon");this.togglePortal(e,!0)}})}initVisibility(){const e=document.querySelector(".portal--active");Tt.set(e,{autoAlpha:0})}togglePortal(e,t=!1){const n=e.getAttribute("data-shape"),i=e.getAttribute("data-content"),s=document.getElementById(i),o=s==null?void 0:s.querySelector(".portal__video");if(!n||!i){console.warn("Shape or content ID missing",e);return}switch(console.log("Toggle Portal: "+n,i,t),n){case"square":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="auto",this.portalTriggers.hexagon.style.right="0";break;case"hexagon":this.portalTriggers.square.style.display="block",this.portalTriggers.hexagon.style.display="none",this.portalTriggers.circle.style.display="block";break;case"circle":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="0%";break;default:console.warn("Shape not found.")}t&&Tt.set(s,{autoAlpha:1}),this.portals.focus(n);const a=document.querySelector(".portal--active .portal__video");t||Tt.fromTo(a,{opacity:1,scale:1},{opacity:0,scale:.97,duration:.9,ease:"power4.out"}),Tt.fromTo(o,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.9,delay:.6,ease:"power4.out"}),applyTextShuffle(i),setTimeout(()=>{if(!t){const l=document.querySelector(".portal--active");l==null||l.classList.remove("portal--active");const c=document.getElementById(i);c==null||c.classList.add("portal--active")}},150)}animatePortalContent(e){Tt.to(e,{duration:.6,opacity:0,scale:.9,ease:"power4.out"})}initTriggers(){this.portalTriggers.square=this.setupTrigger("portalTriggerSquare"),this.portalTriggers.hexagon=this.setupTrigger("portalTriggerHexagon"),this.portalTriggers.circle=this.setupTrigger("portalTriggerCircle")}setupTrigger(e){const t=document.getElementById(e);if(!t){console.warn("No portal trigger found with ID: "+e);return}t.addEventListener("click",o=>this.togglePortal(o.target));const n=t.getAttribute("data-content"),i=document.getElementById(n),s=i==null?void 0:i.querySelector(".btn");return s==null||s.addEventListener("click",()=>{this.animatePortalContent(i),this.portals.start()}),t.style.display=e==="portalTriggerHexagon"?"none":"block",t}}let ru=null;const nA=r=>{let e=document.getElementById("portalsContainer");ru=new tA(e)},iA=()=>{ru&&(ru.portalScrollTrigger.kill(),ru=null)};/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hr,Fs,Jf,su,ol,ou,au,al,Ei="transform",Qf=Ei+"Origin",K0,ed=function(e){var t=e.ownerDocument||e;for(!(Ei in e.style)&&("msTransform"in e.style)&&(Ei="msTransform",Qf=Ei+"Origin");t.parentNode&&(t=t.parentNode););if(Fs=window,au=new fr,t){hr=t,Jf=t.documentElement,su=t.body,al=hr.createElementNS("http://www.w3.org/2000/svg","g"),al.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),K0=i.offsetParent!==n,s.removeChild(n))}return t},rA=function(e){for(var t,n;e&&e!==su;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Z0=[],J0=[],td=function(){return Fs.pageYOffset||hr.scrollTop||Jf.scrollTop||su.scrollTop||0},nd=function(){return Fs.pageXOffset||hr.scrollLeft||Jf.scrollLeft||su.scrollLeft||0},id=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},sA=function r(e){if(Fs.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},rd=function r(e,t){if(e.parentNode&&(hr||ed(e))){var n=id(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=hr.createElementNS?hr.createElementNS(i.replace(/^https/,"http"),s):hr.createElement(s);return t&&(n?(ou||(ou=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),ou.appendChild(c)):(ol||(ol=r(e),ol.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",ol.appendChild(c))),c}throw"Need document and parent."},oA=function(e){for(var t=new fr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Q0=function(e){var t=e.getCTM(),n;return t||(n=e.style[Ei],e.style[Ei]="none",e.appendChild(al),t=al.getCTM(),e.removeChild(al),n?e.style[Ei]=n:e.style.removeProperty(Ei.replace(/([A-Z])/g,"-$1").toLowerCase())),t||au.clone()},aA=function(e,t){var n=id(e),i=e===n,s=n?Z0:J0,o=e.parentNode,a,l,c,h,f,d;if(e===Fs)return e;if(s.length||s.push(rd(e,1),rd(e,2),rd(e,3)),a=n?ou:ol,n)i?(c=Q0(e),h=-c.e/c.a,f=-c.f/c.d,l=au):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?oA(l):l.getItem(0).matrix:au,h=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new fr,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,K0)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Fs.getComputedStyle(c)[Ei]+"").length>4&&(h=c.offsetLeft,f=c.offsetTop,c=0);if(d=Fs.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-h+"px",c[Ei]=d[Ei],c[Qf]=d[Qf],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},sd=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},fr=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),sd(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return sd(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return sd(this,h*i+d*o,h*s+d*a,f*i+u*o,f*s+u*a,l+g*i+_*o,c+g*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*h+d||0,i},r}();function on(r,e,t,n){if(!r||!r.parentNode||(hr||ed(r)).documentElement===r)return new fr;var i=rA(r),s=id(r),o=s?Z0:J0,a=aA(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&sA(r),u=new fr((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:nd()),l.top+(d?0:td()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function ev(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lA(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ft,St,ei,Ti,dr,od,pr,ad,ll,Yr,tv,ld,cl,cd,ul,bi,hl,lu,nv,ud,cu=0,iv=function(){return typeof window!="undefined"},rv=function(){return ft||iv()&&(ft=window.gsap)&&ft.registerPlugin&&ft},qr=function(e){return typeof e=="function"},fl=function(e){return typeof e=="object"},wi=function(e){return typeof e=="undefined"},uu=function(){return!1},dl="transform",hd="transformOrigin",$r=function(e){return Math.round(e*1e4)/1e4},pl=Array.isArray,hu=function(e,t){var n=ei.createElementNS?ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ei.createElement(e);return n.style?n:ei.createElement(e)},sv=180/Math.PI,Bs=1e20,cA=new fr,jr=Date.now||function(){return new Date().getTime()},ks=[],Yo={},uA=0,hA=/^(?:a|input|textarea|button|select)$/i,ov=0,qo={},mr={},av=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},fA=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lv=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},cv=function(){return ks.forEach(function(e){return e()})},dA=function(e){ks.push(e),ks.length===1&&ft.ticker.add(cv)},uv=function(){return!ks.length&&ft.ticker.remove(cv)},hv=function(e){for(var t=ks.length;t--;)ks[t]===e&&ks.splice(t,1);ft.to(uv,{overwrite:!0,delay:15,duration:0,onComplete:uv,data:"_draggable"})},pA=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$t=function(e,t,n,i){if(e.addEventListener){var s=cl[t];i=i||(tv?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Vt=function(e,t,n,i){if(e.removeEventListener){var s=cl[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},ci=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},mA=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},gA=function r(e){cd=e.touches&&cu<e.touches.length,Vt(e.target,"touchend",r)},fv=function(e){cd=e.touches&&cu<e.touches.length,$t(e.target,"touchend",gA)},$o=function(e){return St.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},jo=function(e){return St.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},dv=function r(e,t){$t(e,"scroll",t),Ko(e.parentNode)||r(e.parentNode,t)},pv=function r(e,t){Vt(e,"scroll",t),Ko(e.parentNode)||r(e.parentNode,t)},Ko=function(e){return!e||e===Ti||e.nodeType===9||e===ei.body||e===St||!e.nodeType||!e.parentNode},mv=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,Ko(e)?Math.max(Ti[i],dr[i])-(St["inner"+n]||Ti[s]||dr[s]):e[i]-e[s])},fd=function r(e,t){var n=mv(e,"x"),i=mv(e,"y");Ko(e)?e=mr:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},dd=function(e,t,n){var i=e.style;!i||(wi(i[t])&&(t=ll(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},ml=function(e){return St.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},zs={},Zo=function(e){if(e===St)return zs.left=zs.top=0,zs.width=zs.right=Ti.clientWidth||e.innerWidth||dr.clientWidth||0,zs.height=zs.bottom=(e.innerHeight||0)-20<Ti.clientHeight?Ti.clientHeight:e.innerHeight||dr.clientHeight||0,zs;var t=e.ownerDocument||ei,n=wi(e.pageX)?!e.nodeType&&!wi(e.left)&&!wi(e.top)?e:Yr(e)[0].getBoundingClientRect():{left:e.pageX-jo(t),top:e.pageY-$o(t),right:e.pageX-jo(t)+1,bottom:e.pageY-$o(t)+1};return wi(n.right)&&!wi(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):wi(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(e,t,n){var i=e.vars,s=i[n],o=e._listeners[t],a;return qr(s)&&(a=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},gv=function(e,t){var n=Yr(e)[0],i,s,o;return!n.nodeType&&n!==St?wi(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):_A(n,t)},ui={},_A=function(e,t){t=Yr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||ei,s,o,a,l,c,h,f,d,u,g,_,p,m;if(e===St)a=$o(i),s=jo(i),o=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===St||wi(t))return e.getBoundingClientRect();s=a=0,n?(g=e.getBBox(),_=g.width,p=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,a=g.y||0,_=g.width,p=g.height),_||(m=ml(e),g=m.boxSizing==="border-box",_=(parseFloat(m.width)||e.clientWidth||0)+(g?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),p=(parseFloat(m.height)||e.clientHeight||0)+(g?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=_,l=p}return e===t?{left:s,top:a,width:o-s,height:l-a}:(c=on(t,!0).multiply(on(e)),h=c.apply({x:s,y:a}),f=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:s,y:l}),s=Math.min(h.x,f.x,d.x,u.x),a=Math.min(h.y,f.y,d.y,u.y),{left:s,top:a,width:Math.max(h.x,f.x,d.x,u.x)-s,height:Math.max(h.y,f.y,d.y,u.y)-a})},pd=function(e,t,n,i,s,o){var a={},l,c,h;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],h=t.length,fl(t[0]))for(c=0;c<h;c++)l[c]=av(t[c],s);else for(c=0;c<h;c++)l[c]=t[c]*s;n+=1.1,i-=1.1}else qr(t)?a.end=function(f){var d=t.call(e,f),u,g;if(s!==1)if(fl(d)){u={};for(g in d)u[g]=d[g]*s;d=u}else d*=s;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},vA=function r(e){var t;return!e||!e.getAttribute||e===dr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(hA.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},fu=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:uu,ft.set(i,{lazy:!0,userSelect:t?"text":"none"})},xA=function r(e){if(ml(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},_v,md,yA=function(e,t){e=ft.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,f=e.scrollHeight,d=0,u=0,g=0,_,p,m,y,v,S;_v&&t.force3D!==!1?(v="translate3d(",S="px,0px)"):dl&&(v="translate(",S="px)"),this.scrollTop=function(T,b){if(!arguments.length)return-this.top();this.top(-T,b)},this.scrollLeft=function(T,b){if(!arguments.length)return-this.left();this.left(-T,b)},this.left=function(T,b){if(!arguments.length)return-(e.scrollLeft+a);var M=e.scrollLeft-c,P=a;if((M>2||M<-2)&&!b){c=e.scrollLeft,ft.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}T=-T,T<0?(a=T-.5|0,T=0):T>u?(a=T-u|0,T=u):a=0,(a||P)&&(this._skip||(i[dl]=v+-a+"px,"+-o+S),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=T|0,c=e.scrollLeft},this.top=function(T,b){if(!arguments.length)return-(e.scrollTop+o);var M=e.scrollTop-l,P=o;if((M>2||M<-2)&&!b){l=e.scrollTop,ft.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}T=-T,T<0?(o=T-.5|0,T=0):T>g?(o=T-g|0,T=g):o=0,(o||P)&&(this._skip||(i[dl]=v+-a+"px,"+-o+S)),e.scrollTop=T|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)y=s.nextSibling,e.appendChild(s),s=y;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)y=s.nextSibling,n.appendChild(s),s=y;e.appendChild(n),this.calibrate()}},this.calibrate=function(T){var b=e.clientWidth===_,M,P,N;l=e.scrollTop,c=e.scrollLeft,!(b&&e.clientHeight===p&&n.offsetHeight===m&&h===e.scrollWidth&&f===e.scrollHeight&&!T)&&((o||a)&&(P=this.left(),N=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),M=ml(e),(!b||T)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(M.paddingLeft)+(md?parseFloat(M.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",md&&(i.paddingBottom=M.paddingBottom),_=e.clientWidth,p=e.clientHeight,h=e.scrollWidth,f=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-p,m=n.offsetHeight,i.display="block",(P||N)&&(this.left(P),this.top(N)))},this.content=n,this.element=e,this._skip=!1,this.enable()},gd=function(e){if(iv()&&document.body){var t=window&&window.navigator;St=window,ei=document,Ti=ei.documentElement,dr=ei.body,od=hu("div"),lu=!!window.PointerEvent,pr=hu("div"),pr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",hl=pr.style.cursor==="grab"?"grab":"move",ul=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,ld="ontouchstart"in Ti&&"orientation"in St||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),md=function(){var n=hu("div"),i=hu("div"),s=i.style,o=dr,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),cl=function(n){for(var i=n.split(","),s=("onpointerdown"in od?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in od?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Ti.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){tv=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),$t(ei,"touchcancel",uu),$t(St,"touchmove",uu),dr&&dr.addEventListener("touchstart",uu),$t(ei,"contextmenu",function(){for(var n in Yo)Yo[n].isPressed&&Yo[n].endDrag()}),ft=ad=rv()}ft?(bi=ft.plugins.inertia,nv=ft.core.context||function(){},ll=ft.utils.checkPrefix,dl=ll(dl),hd=ll(hd),Yr=ft.utils.toArray,ud=ft.core.getStyleSaver,_v=!!ll("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},SA=function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),Jo=function(r){lA(e,r);function e(t,n){var i;i=r.call(this)||this,ad||gd(1),t=Yr(t)[0],i.styles=ud&&ud(t,"transform,left,top"),bi||(bi=ft.plugins.inertia),i.vars=n=av(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,ft.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),f=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),d=n.minimumMovement||2,u=ev(i),g=Yr(n.trigger||n.handle||t),_={},p=0,m=!1,y=n.autoScrollMarginTop||40,v=n.autoScrollMarginRight||40,S=n.autoScrollMarginBottom||40,T=n.autoScrollMarginLeft||40,b=n.clickableTest||vA,M=0,P=t._gsap||ft.core.getCache(t),N=xA(t),x=function(O,ce){return parseFloat(P.get(t,O,ce))},A=t.ownerDocument||ei,W,G,I,k,H,Y,K,re,R,se,fe,$,D,X,ie,me,ue,_e,Le,Ee,z,Pe,ve,be,Ue,V,Ne,qe,tt,C,E,oe,he,ge=function(O){return ci(O),O.stopImmediatePropagation&&O.stopImmediatePropagation(),!1},de=function le(O){if(u.autoScroll&&u.isDragging&&(m||ue)){var ce=t,F=u.autoScroll*15,J,ae,j,Me,pe,De,Ye,ke;for(m=!1,mr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,mr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft,Me=u.pointerX-mr.scrollLeft,pe=u.pointerY-mr.scrollTop;ce&&!ae;)ae=Ko(ce.parentNode),J=ae?mr:ce.parentNode,j=ae?{bottom:Math.max(Ti.clientHeight,St.innerHeight||0),right:Math.max(Ti.clientWidth,St.innerWidth||0),left:0,top:0}:J.getBoundingClientRect(),De=Ye=0,f&&(ke=J._gsMaxScrollY-J.scrollTop,ke<0?Ye=ke:pe>j.bottom-S&&ke?(m=!0,Ye=Math.min(ke,F*(1-Math.max(0,j.bottom-pe)/S)|0)):pe<j.top+y&&J.scrollTop&&(m=!0,Ye=-Math.min(J.scrollTop,F*(1-Math.max(0,pe-j.top)/y)|0)),Ye&&(J.scrollTop+=Ye)),h&&(ke=J._gsMaxScrollX-J.scrollLeft,ke<0?De=ke:Me>j.right-v&&ke?(m=!0,De=Math.min(ke,F*(1-Math.max(0,j.right-Me)/v)|0)):Me<j.left+T&&J.scrollLeft&&(m=!0,De=-Math.min(J.scrollLeft,F*(1-Math.max(0,Me-j.left)/T)|0)),De&&(J.scrollLeft+=De)),ae&&(De||Ye)&&(St.scrollTo(J.scrollLeft,J.scrollTop),Oe(u.pointerX+De,u.pointerY+Ye)),ce=J}if(ue){var Je=u.x,ct=u.y;a?(u.deltaX=Je-parseFloat(P.rotation),u.rotation=Je,P.rotation=Je+"deg",P.renderTransform(1,P)):G?(f&&(u.deltaY=ct-G.top(),G.top(ct)),h&&(u.deltaX=Je-G.left(),G.left(Je))):o?(f&&(u.deltaY=ct-parseFloat(P.y),P.y=ct+"px"),h&&(u.deltaX=Je-parseFloat(P.x),P.x=Je+"px"),P.renderTransform(1,P)):(f&&(u.deltaY=ct-parseFloat(t.style.top||0),t.style.top=ct+"px"),h&&(u.deltaX=Je-parseFloat(t.style.left||0),t.style.left=Je+"px")),re&&!O&&!qe&&(qe=!0,kt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),f&&(u.y-=u.deltaY),le(!0)),qe=!1)}ue=!1},Fe=function(O,ce){var F=u.x,J=u.y,ae,j;t._gsap||(P=ft.core.getCache(t)),P.uncache&&ft.getProperty(t,"x"),o?(u.x=parseFloat(P.x),u.y=parseFloat(P.y)):a?u.x=u.rotation=parseFloat(P.rotation):G?(u.y=G.top(),u.x=G.left()):(u.y=parseFloat(t.style.top||(j=ml(t))&&j.top)||0,u.x=parseFloat(t.style.left||(j||{}).left)||0),(Le||Ee||z)&&!ce&&(u.isDragging||u.isThrowing)&&(z&&(qo.x=u.x,qo.y=u.y,ae=z(qo),ae.x!==u.x&&(u.x=ae.x,ue=!0),ae.y!==u.y&&(u.y=ae.y,ue=!0)),Le&&(ae=Le(u.x),ae!==u.x&&(u.x=ae,a&&(u.rotation=ae),ue=!0)),Ee&&(ae=Ee(u.y),ae!==u.y&&(u.y=ae),ue=!0)),ue&&de(!0),O||(u.deltaX=u.x-F,u.deltaY=u.y-J,kt(u,"throwupdate","onThrowUpdate"))},ze=function(O,ce,F,J){return ce==null&&(ce=-Bs),F==null&&(F=Bs),qr(O)?function(ae){var j=u.isPressed?1-u.edgeResistance:1;return O.call(u,(ae>F?F+(ae-F)*j:ae<ce?ce+(ae-ce)*j:ae)*J)*J}:pl(O)?function(ae){for(var j=O.length,Me=0,pe=Bs,De,Ye;--j>-1;)De=O[j],Ye=De-ae,Ye<0&&(Ye=-Ye),Ye<pe&&De>=ce&&De<=F&&(Me=j,pe=Ye);return O[Me]}:isNaN(O)?function(ae){return ae}:function(){return O*J}},Te=function(O,ce,F,J,ae,j,Me){return j=j&&j<Bs?j*j:Bs,qr(O)?function(pe){var De=u.isPressed?1-u.edgeResistance:1,Ye=pe.x,ke=pe.y,Je,ct,dt;return pe.x=Ye=Ye>F?F+(Ye-F)*De:Ye<ce?ce+(Ye-ce)*De:Ye,pe.y=ke=ke>ae?ae+(ke-ae)*De:ke<J?J+(ke-J)*De:ke,Je=O.call(u,pe),Je!==pe&&(pe.x=Je.x,pe.y=Je.y),Me!==1&&(pe.x*=Me,pe.y*=Me),j<Bs&&(ct=pe.x-Ye,dt=pe.y-ke,ct*ct+dt*dt>j&&(pe.x=Ye,pe.y=ke)),pe}:pl(O)?function(pe){for(var De=O.length,Ye=0,ke=Bs,Je,ct,dt,st;--De>-1;)dt=O[De],Je=dt.x-pe.x,ct=dt.y-pe.y,st=Je*Je+ct*ct,st<ke&&(Ye=De,ke=st);return ke<=j?O[Ye]:pe}:function(pe){return pe}},we=function(){var O,ce,F,J;K=!1,G?(G.calibrate(),u.minX=fe=-G.maxScrollLeft(),u.minY=D=-G.maxScrollTop(),u.maxX=se=u.maxY=$=0,K=!0):n.bounds&&(O=gv(n.bounds,t.parentNode),a?(u.minX=fe=O.left,u.maxX=se=O.left+O.width,u.minY=D=u.maxY=$=0):!wi(n.bounds.maxX)||!wi(n.bounds.maxY)?(O=n.bounds,u.minX=fe=O.minX,u.minY=D=O.minY,u.maxX=se=O.maxX,u.maxY=$=O.maxY):(ce=gv(t,t.parentNode),u.minX=fe=Math.round(x(l,"px")+O.left-ce.left),u.minY=D=Math.round(x(c,"px")+O.top-ce.top),u.maxX=se=Math.round(fe+(O.width-ce.width)),u.maxY=$=Math.round(D+(O.height-ce.height))),fe>se&&(u.minX=se,u.maxX=se=fe,fe=u.minX),D>$&&(u.minY=$,u.maxY=$=D,D=u.minY),a&&(u.minRotation=fe,u.maxRotation=se),K=!0),n.liveSnap&&(F=n.liveSnap===!0?n.snap||{}:n.liveSnap,J=pl(F)||qr(F),a?(Le=ze(J?F:F.rotation,fe,se,1),Ee=null):F.points?z=Te(J?F:F.points,fe,se,D,$,F.radius,G?-1:1):(h&&(Le=ze(J?F:F.x||F.left||F.scrollLeft,fe,se,G?-1:1)),f&&(Ee=ze(J?F:F.y||F.top||F.scrollTop,D,$,G?-1:1))))},Ke=function(){u.isThrowing=!1,kt(u,"throwcomplete","onThrowComplete")},xe=function(){u.isThrowing=!1},mt=function(O,ce){var F,J,ae,j;O&&bi?(O===!0&&(F=n.snap||n.liveSnap||{},J=pl(F)||qr(F),O={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?O.rotation=pd(u,J?F:F.rotation,se,fe,1,ce):(h&&(O[l]=pd(u,J?F:F.points||F.x||F.left,se,fe,G?-1:1,ce||u.lockedAxis==="x")),f&&(O[c]=pd(u,J?F:F.points||F.y||F.top,$,D,G?-1:1,ce||u.lockedAxis==="y")),(F.points||pl(F)&&fl(F[0]))&&(O.linkedProps=l+","+c,O.radius=F.radius))),u.isThrowing=!0,j=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,O.duration||(O.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?j===0||fl(O)&&O.resistance>1e3?0:.5:n.minDuration,overshoot:j}),u.tween=ae=ft.to(G||t,{inertia:O,data:"_draggable",inherit:!1,onComplete:Ke,onInterrupt:xe,onUpdate:n.fastMode?kt:Fe,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:F&&F.radius?[!1,!0]:[]}),n.fastMode||(G&&(G._skip=!0),ae.render(1e9,!0,!0),Fe(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),ae.play(0),Fe(!0,!0),G&&(G._skip=!1))):K&&u.applyBounds()},Ze=function(O){var ce=be,F;be=on(t.parentNode,!0),O&&u.isPressed&&!be.equals(ce||new fr)&&(F=ce.inverse().apply({x:I,y:k}),be.apply(F,F),I=F.x,k=F.y),be.equals(cA)&&(be=null)},He=function(){var O=1-u.edgeResistance,ce=N?jo(A):0,F=N?$o(A):0,J,ae,j;o&&(P.x=x(l,"px")+"px",P.y=x(c,"px")+"px",P.renderTransform()),Ze(!1),ui.x=u.pointerX-ce,ui.y=u.pointerY-F,be&&be.apply(ui,ui),I=ui.x,k=ui.y,ue&&(Oe(u.pointerX,u.pointerY),de(!0)),oe=on(t),G?(we(),Y=G.top(),H=G.left()):(Ie()?(Fe(!0,!0),we()):u.applyBounds(),a?(J=t.ownerSVGElement?[P.xOrigin-t.getBBox().x,P.yOrigin-t.getBBox().y]:(ml(t)[hd]||"0 0").split(" "),me=u.rotationOrigin=on(t).apply({x:parseFloat(J[0])||0,y:parseFloat(J[1])||0}),Fe(!0,!0),ae=u.pointerX-me.x-ce,j=me.y-u.pointerY+F,H=u.x,Y=u.y=Math.atan2(j,ae)*sv):(Y=x(c,"px"),H=x(l,"px"))),K&&O&&(H>se?H=se+(H-se)/O:H<fe&&(H=fe-(fe-H)/O),a||(Y>$?Y=$+(Y-$)/O:Y<D&&(Y=D-(D-Y)/O))),u.startX=H=$r(H),u.startY=Y=$r(Y)},Ie=function(){return u.tween&&u.tween.isActive()},Be=function(){pr.parentNode&&!Ie()&&!u.isDragging&&pr.parentNode.removeChild(pr)},L=function(O,ce){var F;if(!W||u.isPressed||!O||(O.type==="mousedown"||O.type==="pointerdown")&&!ce&&jr()-M<30&&cl[u.pointerEvent.type]){E&&O&&W&&ci(O);return}if(Ue=Ie(),he=!1,u.pointerEvent=O,cl[O.type]?(ve=~O.type.indexOf("touch")?O.currentTarget||O.target:A,$t(ve,"touchend",U),$t(ve,"touchmove",te),$t(ve,"touchcancel",U),$t(A,"touchstart",fv)):(ve=null,$t(A,"mousemove",te)),Ne=null,(!lu||!ve)&&($t(A,"mouseup",U),O&&O.target&&$t(O.target,"mouseup",U)),Pe=b.call(u,O.target)&&n.dragClickables===!1&&!ce,Pe){$t(O.target,"change",U),kt(u,"pressInit","onPressInit"),kt(u,"press","onPress"),fu(g,!0),E=!1;return}if(V=!ve||h===f||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&O&&(O.ctrlKey||O.which>2)?!1:h?"y":"x",E=!V&&!u.allowEventDefault,E&&(ci(O),$t(St,"touchforcechange",ci)),O.changedTouches?(O=X=O.changedTouches[0],ie=O.identifier):O.pointerId?ie=O.pointerId:X=ie=null,cu++,dA(de),k=u.pointerY=O.pageY,I=u.pointerX=O.pageX,kt(u,"pressInit","onPressInit"),(V||u.autoScroll)&&fd(t.parentNode),t.parentNode&&u.autoScroll&&!G&&!a&&t.parentNode._gsMaxScrollX&&!pr.parentNode&&!t.getBBox&&(pr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(pr)),He(),u.tween&&u.tween.kill(),u.isThrowing=!1,ft.killTweensOf(G||t,_,!0),G&&ft.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!G&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,re=!!(n.onDrag||u._listeners.drag),R=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(F=g.length;--F>-1;)ft.set(g[F],{cursor:n.activeCursor||n.cursor||(hl==="grab"?"grabbing":hl)});kt(u,"press","onPress")},te=function(O){var ce=O,F,J,ae,j,Me,pe;if(!W||cd||!u.isPressed||!O){E&&O&&W&&ci(O);return}if(u.pointerEvent=O,F=O.changedTouches,F){if(O=F[0],O!==X&&O.identifier!==ie){for(j=F.length;--j>-1&&(O=F[j]).identifier!==ie&&O.target!==t;);if(j<0)return}}else if(O.pointerId&&ie&&O.pointerId!==ie)return;if(ve&&V&&!Ne&&(ui.x=O.pageX-(N?jo(A):0),ui.y=O.pageY-(N?$o(A):0),be&&be.apply(ui,ui),J=ui.x,ae=ui.y,Me=Math.abs(J-I),pe=Math.abs(ae-k),(Me!==pe&&(Me>d||pe>d)||ul&&V===Ne)&&(Ne=Me>pe&&h?"x":"y",V&&Ne!==V&&$t(St,"touchforcechange",ci),u.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(u.lockedAxis=Ne==="x"?"y":"x",qr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,ce)),ul&&V===Ne))){U(ce);return}!u.allowEventDefault&&(!V||Ne&&V!==Ne)&&ce.cancelable!==!1?(ci(ce),E=!0):E&&(E=!1),u.autoScroll&&(m=!0),Oe(O.pageX,O.pageY,R)},Oe=function(O,ce,F){var J=1-u.dragResistance,ae=1-u.edgeResistance,j=u.pointerX,Me=u.pointerY,pe=Y,De=u.x,Ye=u.y,ke=u.endX,Je=u.endY,ct=u.endRotation,dt=ue,st,at,gt,w,q,ee;u.pointerX=O,u.pointerY=ce,N&&(O-=jo(A),ce-=$o(A)),a?(w=Math.atan2(me.y-ce,O-me.x)*sv,q=u.y-w,q>180?(Y-=360,u.y=w):q<-180&&(Y+=360,u.y=w),u.x!==H||Math.abs(Y-w)>d?(u.y=w,gt=H+(Y-w)*J):gt=H):(be&&(ee=O*be.a+ce*be.c+be.e,ce=O*be.b+ce*be.d+be.f,O=ee),at=ce-k,st=O-I,at<d&&at>-d&&(at=0),st<d&&st>-d&&(st=0),(u.lockAxis||u.lockedAxis)&&(st||at)&&(ee=u.lockedAxis,ee||(u.lockedAxis=ee=h&&Math.abs(st)>Math.abs(at)?"y":f?"x":null,ee&&qr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),ee==="y"?at=0:ee==="x"&&(st=0)),gt=$r(H+st*J),w=$r(Y+at*J)),(Le||Ee||z)&&(u.x!==gt||u.y!==w&&!a)&&(z&&(qo.x=gt,qo.y=w,ee=z(qo),gt=$r(ee.x),w=$r(ee.y)),Le&&(gt=$r(Le(gt))),Ee&&(w=$r(Ee(w)))),K&&(gt>se?gt=se+Math.round((gt-se)*ae):gt<fe&&(gt=fe+Math.round((gt-fe)*ae)),a||(w>$?w=Math.round($+(w-$)*ae):w<D&&(w=Math.round(D+(w-D)*ae)))),(u.x!==gt||u.y!==w&&!a)&&(a?(u.endRotation=u.x=u.endX=gt,ue=!0):(f&&(u.y=u.endY=w,ue=!0),h&&(u.x=u.endX=gt,ue=!0)),!F||kt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=he=!0,kt(u,"dragstart","onDragStart")):(u.pointerX=j,u.pointerY=Me,Y=pe,u.x=De,u.y=Ye,u.endX=ke,u.endY=Je,u.endRotation=ct,ue=dt))},U=function le(O,ce){if(!W||!u.isPressed||O&&ie!=null&&!ce&&(O.pointerId&&O.pointerId!==ie&&O.target!==t||O.changedTouches&&!mA(O.changedTouches,ie))){E&&O&&W&&ci(O);return}u.isPressed=!1;var F=O,J=u.isDragging,ae=u.vars.allowContextMenu&&O&&(O.ctrlKey||O.which>2),j=ft.delayedCall(.001,Be),Me,pe,De,Ye,ke;if(ve?(Vt(ve,"touchend",le),Vt(ve,"touchmove",te),Vt(ve,"touchcancel",le),Vt(A,"touchstart",fv)):Vt(A,"mousemove",te),Vt(St,"touchforcechange",ci),(!lu||!ve)&&(Vt(A,"mouseup",le),O&&O.target&&Vt(O.target,"mouseup",le)),ue=!1,J&&(p=ov=jr(),u.isDragging=!1),hv(de),Pe&&!ae){O&&(Vt(O.target,"change",le),u.pointerEvent=F),fu(g,!1),kt(u,"release","onRelease"),kt(u,"click","onClick"),Pe=!1;return}for(pe=g.length;--pe>-1;)dd(g[pe],"cursor",n.cursor||(n.cursor!==!1?hl:null));if(cu--,O){if(Me=O.changedTouches,Me&&(O=Me[0],O!==X&&O.identifier!==ie)){for(pe=Me.length;--pe>-1&&(O=Me[pe]).identifier!==ie&&O.target!==t;);if(pe<0&&!ce)return}u.pointerEvent=F,u.pointerX=O.pageX,u.pointerY=O.pageY}return ae&&F?(ci(F),E=!0,kt(u,"release","onRelease")):F&&!J?(E=!1,Ue&&(n.snap||n.bounds)&&mt(n.inertia||n.throwProps),kt(u,"release","onRelease"),(!ul||F.type!=="touchmove")&&F.type.indexOf("cancel")===-1&&(kt(u,"click","onClick"),jr()-M<300&&kt(u,"doubleclick","onDoubleClick"),Ye=F.target||t,M=jr(),ke=function(){M!==tt&&u.enabled()&&!u.isPressed&&!F.defaultPrevented&&(Ye.click?Ye.click():A.createEvent&&(De=A.createEvent("MouseEvents"),De.initMouseEvent("click",!0,!0,St,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),Ye.dispatchEvent(De)))},!ul&&!F.defaultPrevented&&ft.delayedCall(.05,ke))):(mt(n.inertia||n.throwProps),!u.allowEventDefault&&F&&(n.dragClickables!==!1||!b.call(u,F.target))&&J&&(!V||Ne&&V===Ne)&&F.cancelable!==!1?(E=!0,ci(F)):E=!1,kt(u,"release","onRelease")),Ie()&&j.duration(u.tween.duration()),J&&kt(u,"dragend","onDragEnd"),!0},ye=function(O){if(O&&u.isDragging&&!G){var ce=O.target||t.parentNode,F=ce.scrollLeft-ce._gsScrollX,J=ce.scrollTop-ce._gsScrollY;(F||J)&&(be?(I-=F*be.a+J*be.c,k-=J*be.d+F*be.b):(I-=F,k-=J),ce._gsScrollX+=F,ce._gsScrollY+=J,Oe(u.pointerX,u.pointerY))}},Z=function(O){var ce=jr(),F=ce-M<100,J=ce-p<50,ae=F&&tt===M,j=u.pointerEvent&&u.pointerEvent.defaultPrevented,Me=F&&C===M,pe=O.isTrusted||O.isTrusted==null&&F&&ae;if((ae||J&&u.vars.suppressClickOnDrag!==!1)&&O.stopImmediatePropagation&&O.stopImmediatePropagation(),F&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!ae||pe&&!Me)){pe&&ae&&(C=M),tt=M;return}(u.isPressed||J||F)&&(!pe||!O.detail||!F||j)&&ci(O),!F&&!J&&!he&&(O&&O.target&&(u.pointerEvent=O),kt(u,"click","onClick"))},Se=function(O){return be?{x:O.x*be.a+O.y*be.c+be.e,y:O.x*be.b+O.y*be.d+be.f}:{x:O.x,y:O.y}};return _e=e.get(t),_e&&_e.kill(),i.startDrag=function(le,O){var ce,F,J,ae;L(le||u.pointerEvent,!0),O&&!u.hitTest(le||u.pointerEvent)&&(ce=Zo(le||u.pointerEvent),F=Zo(t),J=Se({x:ce.left+ce.width/2,y:ce.top+ce.height/2}),ae=Se({x:F.left+F.width/2,y:F.top+F.height/2}),I-=J.x-ae.x,k-=J.y-ae.y),u.isDragging||(u.isDragging=he=!0,kt(u,"dragstart","onDragStart"))},i.drag=te,i.endDrag=function(le){return U(le||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(jr()-p)/1e3},i.timeSinceClick=function(){return(jr()-M)/1e3},i.hitTest=function(le,O){return e.hitTest(u.target,le,O)},i.getDirection=function(le,O){var ce=le==="velocity"&&bi?le:fl(le)&&!a?"element":"start",F,J,ae,j,Me,pe;return ce==="element"&&(Me=Zo(u.target),pe=Zo(le)),F=ce==="start"?u.x-H:ce==="velocity"?bi.getVelocity(t,l):Me.left+Me.width/2-(pe.left+pe.width/2),a?F<0?"counter-clockwise":"clockwise":(O=O||2,J=ce==="start"?u.y-Y:ce==="velocity"?bi.getVelocity(t,c):Me.top+Me.height/2-(pe.top+pe.height/2),ae=Math.abs(F/J),j=ae<1/O?"":F<0?"left":"right",ae<O&&(j!==""&&(j+="-"),j+=J<0?"up":"down"),j)},i.applyBounds=function(le,O){var ce,F,J,ae,j,Me;if(le&&n.bounds!==le)return n.bounds=le,u.update(!0,O);if(Fe(!0),we(),K&&!Ie()){if(ce=u.x,F=u.y,ce>se?ce=se:ce<fe&&(ce=fe),F>$?F=$:F<D&&(F=D),(u.x!==ce||u.y!==F)&&(J=!0,u.x=u.endX=ce,a?u.endRotation=ce:u.y=u.endY=F,ue=!0,de(!0),u.autoScroll&&!u.isDragging))for(fd(t.parentNode),ae=t,mr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,mr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft;ae&&!Me;)Me=Ko(ae.parentNode),j=Me?mr:ae.parentNode,f&&j.scrollTop>j._gsMaxScrollY&&(j.scrollTop=j._gsMaxScrollY),h&&j.scrollLeft>j._gsMaxScrollX&&(j.scrollLeft=j._gsMaxScrollX),ae=j;u.isThrowing&&(J||u.endX>se||u.endX<fe||u.endY>$||u.endY<D)&&mt(n.inertia||n.throwProps,J)}return u},i.update=function(le,O,ce){if(O&&u.isPressed){var F=on(t),J=oe.apply({x:u.x-H,y:u.y-Y}),ae=on(t.parentNode,!0);ae.apply({x:F.e-J.x,y:F.f-J.y},J),u.x-=J.x-ae.e,u.y-=J.y-ae.f,de(!0),He()}var j=u.x,Me=u.y;return Ze(!O),le?u.applyBounds():(ue&&ce&&de(!0),Fe(!0)),O&&(Oe(u.pointerX,u.pointerY),ue&&de(!0)),u.isPressed&&!O&&(h&&Math.abs(j-u.x)>.01||f&&Math.abs(Me-u.y)>.01&&!a)&&He(),u.autoScroll&&(fd(t.parentNode,u.isDragging),m=u.isDragging,de(!0),pv(t,ye),dv(t,ye)),u},i.enable=function(le){var O={lazy:!0},ce,F,J;if(n.cursor!==!1&&(O.cursor=n.cursor||hl),ft.utils.checkPrefix("touchCallout")&&(O.touchCallout="none"),le!=="soft"){for(lv(g,h===f?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),F=g.length;--F>-1;)J=g[F],lu||$t(J,"mousedown",L),$t(J,"touchstart",L),$t(J,"click",Z,!0),ft.set(J,O),J.getBBox&&J.ownerSVGElement&&h!==f&&ft.set(J.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||$t(J,"contextmenu",ge);fu(g,!1)}return dv(t,ye),W=!0,bi&&le!=="soft"&&bi.track(G||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ce="d"+uA++,Yo[ce]=u,G&&(G.enable(),G.element._gsDragID=ce),(n.bounds||a)&&He(),n.bounds&&u.applyBounds(),u},i.disable=function(le){for(var O=u.isDragging,ce=g.length,F;--ce>-1;)dd(g[ce],"cursor",null);if(le!=="soft"){for(lv(g,null),ce=g.length;--ce>-1;)F=g[ce],dd(F,"touchCallout",null),Vt(F,"mousedown",L),Vt(F,"touchstart",L),Vt(F,"click",Z,!0),Vt(F,"contextmenu",ge);fu(g,!0),ve&&(Vt(ve,"touchcancel",U),Vt(ve,"touchend",U),Vt(ve,"touchmove",te)),Vt(A,"mouseup",U),Vt(A,"mousemove",te)}return pv(t,ye),W=!1,bi&&le!=="soft"&&(bi.untrack(G||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),G&&G.disable(),hv(de),u.isDragging=u.isPressed=Pe=!1,O&&kt(u,"dragend","onDragEnd"),u},i.enabled=function(le,O){return arguments.length?le?u.enable(O):u.disable(O):W},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),ft.set(g,{clearProps:"userSelect"}),delete Yo[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(G=i.scrollProxy=new yA(t,fA({onKill:function(){u.isPressed&&U(null)}},n)),t.style.overflowY=f&&!ld?"auto":"hidden",t.style.overflowX=h&&!ld?"auto":"hidden",t=G.content),a?_.rotation=1:(h&&(_[l]=1),f&&(_[c]=1)),P.force3D="force3D"in n?n.force3D:!0,nv(ev(i)),i.enable(),i}return e.register=function(n){ft=n,gd()},e.create=function(n,i){return ad||gd(!0),Yr(n).map(function(s){return new e(s,i)})},e.get=function(n){return Yo[(Yr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(jr()-ov)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var o=Zo(n),a=Zo(i),l=o.top,c=o.left,h=o.right,f=o.bottom,d=o.width,u=o.height,g=a.left>h||a.right<c||a.top>f||a.bottom<l,_,p,m;return g||!s?!g:(m=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(h,a.right)-_.left,_.height=Math.min(f,a.bottom)-_.top,_.width<0||_.height<0?!1:m?(s*=.01,p=_.width*_.height,p>=d*u*s||p>=a.width*a.height*s):_.width>s&&_.height>s)},e}(SA);pA(Jo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Jo.zIndex=1e3,Jo.version="3.12.5",rv()&&ft.registerPlugin(Jo);/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vi,_d,gl,vv,Qo,ea,vd,xv,yv=function(){return Vi||typeof window!="undefined"&&(Vi=window.gsap)},xd={},MA=function(e){return Math.round(e*1e4)/1e4},yd=function(e){return xv(e).id},_l=function(e){return xd[yd(typeof e=="string"?gl(e)[0]:e)]},Sv=function(e){var t=Qo,n;if(e-vd>=.05)for(vd=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},EA={deg:360,rad:Math.PI*2},Sd=function(){Vi=yv(),Vi&&(gl=Vi.utils.toArray,vv=Vi.utils.getUnit,xv=Vi.core.getCache,ea=Vi.ticker,_d=1)},TA=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=EA[n||vv(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=ea.time,i&&(this._next=i,i._prev=this)},vl=function(){function r(t,n){_d||Sd(),this.target=gl(t)[0],xd[yd(this.target)]=this,this._props={},n&&this.add(n)}r.register=function(n){Vi=n,Sd()};var e=r.prototype;return e.get=function(n,i){var s=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,a,l;return o=parseFloat(i?s.v1:s.g(s.t,s.p)),a=o-parseFloat(s.v2),l=s.rCap,l&&(a=a%l,a!==a%(l/2)&&(a=a<0?a+l:a-l)),MA(a/((i?s.t1:ea.time)-s.t2))},e.getAll=function(){var n={},i=this._props,s;for(s in i)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||(Qo||(ea.add(Sv),vd=ea.time),Qo=this._props[n]=new TA(this.target,n,i,Qo))},e.remove=function(n){var i=this._props[n],s,o;i&&(s=i._prev,o=i._next,s&&(s._next=o),o?o._prev=s:Qo===i&&(ea.remove(Sv),Qo=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete xd[yd(this.target)]},r.track=function(n,i,s){_d||Sd();for(var o=[],a=gl(n),l=i.split(","),c=(s||"").split(","),h=a.length,f,d;h--;){for(f=_l(a[h])||new r(a[h]),d=l.length;d--;)f.add(l[d],c[d]||c[0]);o.push(f)}return o},r.untrack=function(n,i){var s=(i||"").split(",");gl(n).forEach(function(o){var a=_l(o);a&&(s.length?s.forEach(function(l){return a.remove(l)}):a.kill(1))})},r.isTracking=function(n,i){var s=_l(n);return s&&s.isTracking(i)},r.getVelocity=function(n,i){var s=_l(n);return!s||!s.isTracking(i)?console.warn("Not tracking velocity of "+i):s.get(i)},r}();vl.getByTarget=_l,yv()&&Vi.registerPlugin(vl);/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Mv,Ev,Tv,Md,xl,bv,wv,Av,Ed,Cv,yl,Td,Pv,du=vl.getByTarget,Rv=function(){return jt||typeof window!="undefined"&&(jt=window.gsap)&&jt.registerPlugin&&jt},bA=function(e){return typeof e=="string"},Sl=function(e){return typeof e=="number"},Kr=function(e){return typeof e=="object"},bd=function(e){return typeof e=="function"},wA=1,Lv=Array.isArray,AA=function(e){return e},Hs=1e10,Dv=1/Hs,Iv=.05,CA=function(e){return Math.round(e*1e4)/1e4},PA=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},RA=function r(e){var t={},n,i;for(n in e)t[n]=Kr(i=e[n])&&!Lv(i)?r(i):i;return t},Nv=function(e,t,n,i,s){var o=t.length,a=0,l=Hs,c,h,f,d;if(Kr(e)){for(;o--;){c=t[o],h=0;for(f in e)d=c[f]-e[f],h+=d*d;h<l&&(a=o,l=h)}if((s||Hs)<Hs&&s<Math.sqrt(l))return e}else for(;o--;)c=t[o],h=c-e,h<0&&(h=-h),h<l&&c>=i&&c<=n&&(a=o,l=h);return t[a]},Ov=function(e,t,n,i,s,o,a){if(e.end==="auto")return e;var l=e.end,c,h;if(n=isNaN(n)?Hs:n,i=isNaN(i)?-Hs:i,Kr(t)){if(c=t.calculated?t:(bd(l)?l(t,a):Nv(t,l,n,i,o))||t,!t.calculated){for(h in c)t[h]=c[h];t.calculated=!0}c=c[s]}else c=bd(l)?l(t,a):Lv(l)?Nv(t,l,n,i,o):parseFloat(l);return c>n?c=n:c<i&&(c=i),{max:c,min:c,unitFactor:e.unitFactor}},pu=function(e,t,n){return isNaN(e[t])?n:+e[t]},wd=function(e,t){return t*Iv*e/Ed},Uv=function(e,t,n){return Math.abs((t-e)*Ed/n/Iv)},Fv={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},Bv=function(e,t,n,i){if(t.linkedProps){var s=t.linkedProps.split(","),o={},a,l,c,h,f,d;for(a=0;a<s.length;a++)l=s[a],c=t[l],c&&(Sl(c.velocity)?h=c.velocity:(f=f||du(e),h=f&&f.isTracking(l)?f.get(l):0),d=Math.abs(h/pu(c,"resistance",i)),o[l]=parseFloat(n(e,l))+wd(h,d));return o}},LA=function(e,t,n,i,s,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),s===void 0&&(s=1),o===void 0&&(o=0),bA(e)&&(e=Tv(e)[0]),!e)return 0;var a=0,l=Hs,c=t.inertia||t,h=Av(e).get,f=pu(c,"resistance",xl.resistance),d,u,g,_,p,m,y,v,S,T;T=Bv(e,c,h,f);for(d in c)Fv[d]||(u=c[d],Kr(u)||(v=v||du(e),v&&v.isTracking(d)?u=Sl(u)?{velocity:u}:{velocity:v.get(d)}:(_=+u||0,g=Math.abs(_/f))),Kr(u)&&(Sl(u.velocity)?_=u.velocity:(v=v||du(e),_=v&&v.isTracking(d)?v.get(d):0),g=Cv(i,n,Math.abs(_/pu(u,"resistance",f))),p=parseFloat(h(e,d))||0,m=p+wd(_,g),"end"in u&&(u=Ov(u,T&&d in T?T:m,u.max,u.min,d,c.radius,_),o&&(yl===t&&(yl=c=RA(t)),c[d]=PA(u,c[d],"end"))),"max"in u&&m>+u.max+Dv?(S=u.unitFactor||xl.unitFactors[d]||1,y=p>u.max&&u.min!==u.max||_*S>-15&&_*S<45?i+(n-i)*.1:Uv(p,u.max,_),y+s<l&&(l=y+s)):"min"in u&&m<+u.min-Dv&&(S=u.unitFactor||xl.unitFactors[d]||1,y=p<u.min&&u.min!==u.max||_*S>-45&&_*S<15?i+(n-i)*.1:Uv(p,u.min,_),y+s<l&&(l=y+s)),y>a&&(a=y)),g>a&&(a=g));return a>l&&(a=l),a>n?n:a<i?i:a},kv=function(){jt=Rv(),jt&&(Ev=jt.parseEase,Tv=jt.utils.toArray,bv=jt.utils.getUnit,Av=jt.core.getCache,Cv=jt.utils.clamp,Td=jt.core.getStyleSaver,Pv=jt.core.reverting||function(){},Md=Ev("power3"),Ed=Md(.05),wv=jt.core.PropTween,jt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),xl=jt.config(),jt.registerPlugin(vl),Mv=1)},Ad={version:"3.12.5",name:"inertia",register:function(e){jt=e,kv()},init:function(e,t,n,i,s){Mv||kv();var o=du(e);if(t==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=o.getAll()}this.styles=Td&&typeof e.style=="object"&&Td(e),this.target=e,this.tween=n,yl=t;var a=e._gsap,l=a.get,c=t.duration,h=Kr(c),f=t.preventOvershoot||h&&c.overshoot===0,d=pu(t,"resistance",xl.resistance),u=Sl(c)?c:LA(e,t,h&&c.max||10,h&&c.min||.2,h&&"overshoot"in c?+c.overshoot:f?0:1,!0),g,_,p,m,y,v,S,T,b;t=yl,yl=0,b=Bv(e,t,l,d);for(g in t)Fv[g]||(_=t[g],bd(_)&&(_=_(i,e,s)),Sl(_)?y=_:Kr(_)&&!isNaN(_.velocity)?y=+_.velocity:o&&o.isTracking(g)?y=o.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),v=wd(y,u),T=0,p=l(e,g),m=bv(p),p=parseFloat(p),Kr(_)&&(S=p+v,"end"in _&&(_=Ov(_,b&&g in b?b:S,_.max,_.min,g,t.radius,y)),"max"in _&&+_.max<S?f||_.preventOvershoot?v=_.max-p:T=_.max-p-v:"min"in _&&+_.min>S&&(f||_.preventOvershoot?v=_.min-p:T=_.min-p-v)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new wv(this._pt,e,g,p,0,AA,0,a.set(e,g,this)),this._pt.u=m||0,this._pt.c1=v,this._pt.c2=T);return n.duration(u),wA},render:function(e,t){var n=t._pt;if(e=Md(t.tween._time/t.tween._dur),e||!Pv())for(;n;)n.set(n.t,n.p,CA(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return Ad[r]=vl[r]}),Rv()&&jt.registerPlugin(Ad);/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var DA=1,ta,pn,wt,Ml,Zr,gr,Cd,zv=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Pd={},Hv=180/Math.PI,IA=Math.PI/180,mu={},Gv={},gu={},Rd=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},NA=Rd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),_u=Rd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),El=function(e){return ta(e)[0]||console.warn("Element not found:",e)},na=function(e){return Math.round(e*1e4)/1e4||0},Ld=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Vv={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Wv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Xv=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ia=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},Dd={},Yv=function(e){var t=Dd[e]=Rd(e);return gu[e]=t.concat(_u),t},OA=function(e){var t=e._gsap||pn.core.getCache(e);return t.gmCache===pn.ticker.frame?t.gMatrix:(t.gmCache=pn.ticker.frame,t.gMatrix=on(e,!0,!1,!0))},UA=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),o=t?-s*900:0;e;)o+=s,e=e.previousSibling;return i?o+r(i,t,n+1):o},vu=function(e,t,n){return e.forEach(function(i){return i.d=UA(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},Tl=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,o,a;s--;)o=t[s],a=n[o]||n.getPropertyValue(o),i.push(a?o:Gv[o]||(Gv[o]=Xv(o)),a);return n},xu=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},qv=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(xu)},Id="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Nd=function(e,t,n){var i=e.element,s=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,h=4,f,d,u;if(typeof t!="object"&&(t=e),wt&&n!==1)return wt._abs.push({t:i,b:e,a:e,sd:0}),wt._final.push(function(){return(e.cache.uncache=1)&&xu(e)}),i;for(d=l("display")==="none",(!e.isVisible||d)&&(d&&(Tl(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=o=e.height||t.height),Tl(e,Id),u=window.getComputedStyle(i);h--;)c[Id[h]]=u[Id[h]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new Gs(i);else if(f=ia(e,mu),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new fr(1,0,0,1,g.left+nd(),g.top+td())}else f.matrix=on(i,!1,!1,!0);return f=ra(f,e,!0),e.x=gr(f.x,.01),e.y=gr(f.y,.01),i},$v=function(e,t){return t!==!0&&(t=ta(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},jv=function(e){return vu(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Nd(t.sd<0?t.b:t.a,t.b,1)})},FA=function(e,t){return t&&e.idLookup[Od(t).id]||e.elementStates[0]},Od=function(e,t,n,i){return e instanceof Gs?e:e instanceof Ai?FA(e,i):new Gs(typeof e=="string"?El(e)||console.warn(e+" not found"):e,t,n)},BA=function(e,t){for(var n=pn.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},Kv=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},kA=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+DA++),t},Zv=function(e){return e.map(function(t){return t.element})},Jv=function(e,t,n){return e&&t.length&&n.add(e(Zv(t),n,new Ai(t,0,!0)),0)},ra=function(e,t,n,i,s,o){var a=e.element,l=e.cache,c=e.parent,h=e.x,f=e.y,d=t.width,u=t.height,g=t.scaleX,_=t.scaleY,p=t.rotation,m=t.bounds,y=o&&Cd&&Cd(a,"transform"),v=e,S=t.matrix,T=S.e,b=S.f,M=e.bounds.width!==m.width||e.bounds.height!==m.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==p,P=!M&&e.simple&&t.simple&&!s,N,x,A,W,G,I,k;return P||!c?(g=_=1,p=N=0):(G=OA(c),I=G.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=na(Math.atan2(I.b,I.a)*Hv),N=na(Math.atan2(I.c,I.d)*Hv+p)%360,g=Math.sqrt(Math.pow(I.a,2)+Math.pow(I.b,2)),_=Math.sqrt(Math.pow(I.c,2)+Math.pow(I.d,2))*Math.cos(N*IA),s&&(s=ta(s)[0],W=pn.getProperty(s),k=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),v={scaleX:W("scaleX"),scaleY:W("scaleY"),width:k?k.width:Math.ceil(parseFloat(W("width","px"))),height:k?k.height:parseFloat(W("height","px"))}),l.rotation=p+"deg",l.skewX=N+"deg"),n?(g*=d===v.width||!v.width?1:d/v.width,_*=u===v.height||!v.height?1:u/v.height,l.scaleX=g,l.scaleY=_):(d=gr(d*g/v.scaleX,0),u=gr(u*_/v.scaleY,0),a.style.width=d+"px",a.style.height=u+"px"),i&&Kv(a,t.props),P||!c?(h+=T-e.matrix.e,f+=b-e.matrix.f):M||c!==t.parent?(l.renderTransform(1,l),I=on(s||a,!1,!1,!0),x=G.apply({x:I.e,y:I.f}),A=G.apply({x:T,y:b}),h+=A.x-x.x,f+=A.y-x.y):(G.e=G.f=0,A=G.apply({x:T-e.matrix.e,y:b-e.matrix.f}),h+=A.x,f+=A.y),h=gr(h,.02),f=gr(f,.02),o&&!(o instanceof Gs)?y&&y.revert():(l.x=h+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=h,o.y=f,o.rotation=p,o.skewX=N,n?(o.scaleX=g,o.scaleY=_):(o.width=d,o.height=u)),o||l},Ud=function(e,t){return e instanceof Ai?e:new Ai(e,t)},Qv=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Fd=[],Bd="width,height,overflowX,overflowY".split(","),yu,ex=function(e){if(e!==yu){var t=Zr.style,n=Zr.clientWidth===window.outerWidth,i=Zr.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)Fd[s]=t[Bd[s]];n&&(t.width=Zr.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=Zr.clientHeight+"px",t.overflowX="hidden"),yu=e}else if(yu){for(;s--;)Fd[s]?t[Bd[s]]=Fd[s]:t.removeProperty(Xv(Bd[s]));yu=e}}},kd=function(e,t,n,i){e instanceof Ai&&t instanceof Ai||console.warn("Not a valid state object."),n=n||{};var s=n,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,h=s.absoluteOnLeave,f=s.custom,d=s.delay,u=s.paused,g=s.repeat,_=s.repeatDelay,p=s.yoyo,m=s.toggleClass,y=s.nested,v=s.zIndex,S=s.scale,T=s.fade,b=s.stagger,M=s.spin,P=s.prune,N=("props"in n?n:e).props,x=ia(n,Vv),A=pn.timeline({delay:d,paused:u,repeat:g,repeatDelay:_,yoyo:p,data:"isFlip"}),W=x,G=[],I=[],k=[],H=[],Y=M===!0?1:M||0,K=typeof M=="function"?M:function(){return Y},re=e.interrupted||t.interrupted,R=A[i!==1?"to":"from"],se,fe,$,D,X,ie,me,ue,_e,Le,Ee,z,Pe,ve;for(fe in t.idLookup)Ee=t.alt[fe]?Qv(t,e,fe):t.idLookup[fe],X=Ee.element,Le=e.idLookup[fe],e.alt[fe]&&X===Le.element&&(e.alt[fe].isVisible||!Ee.isVisible)&&(Le=e.alt[fe]),Le?(ie={t:X,b:Le,a:Ee,sd:Le.element===X?0:Ee.isVisible?1:-1},k.push(ie),ie.sd&&(ie.sd<0&&(ie.b=Ee,ie.a=Le),re&&Tl(ie.b,N?gu[N]:_u),T&&k.push(ie.swap={t:Le.element,b:ie.b,a:ie.a,sd:-ie.sd,swap:ie})),X._flip=Le.element._flip=wt?wt.timeline:A):Ee.isVisible&&(k.push({t:X,b:ia(Ee,{isVisible:1}),a:Ee,sd:0,entering:1}),X._flip=wt?wt.timeline:A);if(N&&(Dd[N]||Yv(N)).forEach(function(V){return x[V]=function(Ne){return k[Ne].a.props[V]}}),k.finalStates=_e=[],z=function(){for(vu(k),ex(!0),D=0;D<k.length;D++)ie=k[D],Pe=ie.a,ve=ie.b,P&&!Pe.isDifferent(ve)&&!ie.entering?k.splice(D--,1):(X=ie.t,y&&!(ie.sd<0)&&D&&(Pe.matrix=on(X,!1,!1,!0)),ve.isVisible&&Pe.isVisible?(ie.sd<0?(me=new Gs(X,N,e.simple),ra(me,Pe,S,0,0,me),me.matrix=on(X,!1,!1,!0),me.css=ie.b.css,ie.a=Pe=me,T&&(X.style.opacity=re?ve.opacity:Pe.opacity),b&&H.push(X)):ie.sd>0&&T&&(X.style.opacity=re?Pe.opacity-ve.opacity:"0"),ra(Pe,ve,S,N)):ve.isVisible!==Pe.isVisible&&(ve.isVisible?Pe.isVisible||(ve.css=Pe.css,I.push(ve),k.splice(D--,1),c&&y&&ra(Pe,ve,S,N)):(Pe.isVisible&&G.push(Pe),k.splice(D--,1))),S||(X.style.maxWidth=Math.max(Pe.width,ve.width)+"px",X.style.maxHeight=Math.max(Pe.height,ve.height)+"px",X.style.minWidth=Math.min(Pe.width,ve.width)+"px",X.style.minHeight=Math.min(Pe.height,ve.height)+"px"),y&&m&&X.classList.add(m)),_e.push(Pe);var Ne;if(m&&(Ne=_e.map(function(C){return C.element}),y&&Ne.forEach(function(C){return C.classList.remove(m)})),ex(!1),S?(x.scaleX=function(C){return k[C].a.scaleX},x.scaleY=function(C){return k[C].a.scaleY}):(x.width=function(C){return k[C].a.width+"px"},x.height=function(C){return k[C].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(C){return k[C].a.x+"px"},x.y=function(C){return k[C].a.y+"px"},x.rotation=function(C){return k[C].a.rotation+(M?K(C,ue[C],ue)*360:0)},x.skewX=function(C){return k[C].a.skewX},ue=k.map(function(C){return C.t}),(v||v===0)&&(x.modifiers={zIndex:function(){return v}},x.zIndex=v,x.immediateRender=n.immediateRender!==!1),T&&(x.opacity=function(C){return k[C].sd<0?0:k[C].sd>0?k[C].a.opacity:"+=0"}),H.length){b=pn.utils.distribute(b);var qe=ue.slice(H.length);x.stagger=function(C,E){return b(~H.indexOf(E)?ue.indexOf(k[C].swap.t):C,E,qe)}}if(NA.forEach(function(C){return n[C]&&A.eventCallback(C,n[C],n[C+"Params"])}),f&&ue.length){W=ia(x,Vv),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(fe in f)se=ia(f[fe],Wv),se[fe]=x[fe],!("duration"in se)&&"duration"in x&&(se.duration=x.duration),se.stagger=x.stagger,R.call(A,ue,se,0),delete W[fe]}(ue.length||I.length||G.length)&&(m&&A.add(function(){return Ld(Ne,m,A._zTime<0?"remove":"add")},0)&&!u&&Ld(Ne,m,"add"),ue.length&&R.call(A,ue,W,0)),Jv(a,G,A),Jv(l,I,A);var tt=wt&&wt.timeline;tt&&(tt.add(A,0),wt._final.push(function(){return qv(k,!o)})),$=A.duration(),A.call(function(){var C=A.time()>=$;C&&!tt&&qv(k,!o),m&&Ld(Ne,m,C?"remove":"add")})},h&&(c=k.filter(function(V){return!V.sd&&!V.a.isVisible&&V.b.isVisible}).map(function(V){return V.a.element})),wt){var be;c&&(be=wt._abs).push.apply(be,$v(k,c)),wt._run.push(z)}else c&&jv($v(k,c)),z();var Ue=wt?wt.timeline:A;return Ue.revert=function(){return zd(Ue,1,1)},Ue},zA=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},zd=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(zA(e),t<2&&e.progress(1),e.kill()),!0},Su=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,o;s--;)o=i[s],t[o.id]?n[o.id]=o:t[o.id]=o},Ai=function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=Zv(t),this.elementStates=t,Su(this);else{this.targets=ta(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);wt&&!s&&wt._kill.push(this),this.update(s||!!wt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new Gs(s,i.props,i.simple)}),Su(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Su(this),this},e.fit=function(n,i,s){for(var o=vu(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,h;l<o.length;l++)c=o[l],s&&(c.matrix=on(c.element,!1,!1,!0)),h=a[c.id],h&&ra(c,h,i,!0,0,c),c.matrix=on(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||mu;return(i in s?s:s.props||mu)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),Su(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],h=[],f=n.alt,d=this.alt,u=function(P,N,x){return(P.isVisible!==N.isVisible?P.isVisible?l:c:P.isVisible?a:o).push(x)&&h.push(x)},g=function(P,N,x){return h.indexOf(x)<0&&u(P,N,x)},_,p,m,y,v,S,T,b;for(m in i)v=f[m],S=d[m],_=v?Qv(n,this,m):i[m],y=_.element,p=s[m],S?(b=p.isVisible||!S.isVisible&&y===p.element?p:S,T=v&&!_.isVisible&&!v.isVisible&&b.element===v.element?v:_,T.isVisible&&b.isVisible&&T.element!==b.element?((T.isDifferent(b)?a:o).push(T.element,b.element),h.push(T.element,b.element)):u(T,b,T.element),v&&T.element===v.element&&(v=i[m]),g(T.element!==p.element&&v?v:T,p,p.element),g(v&&v.element===S.element?v:T,S,S.element),v&&g(v,S.element===v.element?S:p,v.element)):(p?p.isDifferent(_)?u(_,p,y):o.push(y):l.push(y),v&&g(v,p,v.element));for(m in s)i[m]||(c.push(s[m].element),d[m]&&c.push(d[m].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=gu[this.props]||_u,i=this.elementStates.length;i--;)Tl(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=zd(a,n?0:1);n&&l&&s.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&s.push(a)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(El(n))]},e.makeAbsolute=function(){return vu(this.elementStates.slice(0),!0,!0).map(Nd)},r}(),Gs=function(){function r(t,n,i){this.element=t,this.update(n,i)}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var s=this,o=s.element,a=pn.getProperty(o),l=pn.core.getCache(o),c=o.getBoundingClientRect(),h=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new fr(1,0,0,1,c.left+nd(),c.top+td()):on(o,!1,!1,!0);s.getProp=a,s.element=o,s.id=kA(o),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x"),s.y=a("y"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=h?h.width:gr(a("width","px"),.04),s.height=h?h.height:gr(a("height","px"),.04),n&&BA(s,Dd[n]||Yv(n)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Q0(o).inverse(),s.simple=i||na(f.a)===1&&!na(f.b)&&!na(f.c)&&na(f.d)===1,s.uncache=0},r}(),HA=function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r}(),GA=function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Ai,this.timeline=pn.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new HA(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=wt,o=Ml;return wt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,Ml=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),Ml=o,wt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=wt,s=this.timeline,o=this.actions.length,a,l;for(wt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var h=c.vars.onEnter,f=c.vars.onLeave,d=c.targets,u,g;d&&d.length&&(h||f)&&(u=new Ai,c.states.forEach(function(_){return u.add(_)}),g=u.compare(sa.getState(d)),g.enter.length&&h&&h(g.enter),g.leave.length&&f&&f(g.leave))}),jv(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),zv(n,"onComplete"))}),wt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return zv(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),s.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==wt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Pd[this.id]},r}(),sa=function(){function r(){}return r.getState=function(t,n){var i=Ud(t,n);return Ml&&Ml.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),kd(t,Ud(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return kd(t,Ud(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return kd(t,n,i)},r.fit=function(t,n,i){var s=i?ia(i,Wv):{},o=i||s,a=o.absolute,l=o.scale,c=o.getVars,h=o.props,f=o.runBackwards,d=o.onComplete,u=o.simple,g=i&&i.fitChild&&El(i.fitChild),_=Od(n,h,u,t),p=Od(t,0,u,_),m=h?gu[h]:_u,y=pn.context();return h&&Kv(s,_.props),Tl(p,m),f&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){xu(p),d&&d.apply(this,arguments)}),a&&Nd(p,_),s=ra(p,_,l||g,h,g,s.duration||c?s:0),y&&!c&&y.add(function(){return function(){return xu(p)}}),c?s:s.duration?pn.to(p.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof Ai?t:new Ai(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),Pd[t]||(Pd[t]=new GA(t))},r.killFlipsOf=function(t,n){(t instanceof Ai?t.targets:ta(t)).forEach(function(i){return i&&zd(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(El(t)||mu)._flip},r.getElementState=function(t,n){return new Gs(El(t),n)},r.convertCoordinates=function(t,n,i){var s=on(n,!0,!0).multiply(on(t));return i?s.apply(i):s},r.register=function(t){if(Zr=typeof document!="undefined"&&document.body,Zr){pn=t,ed(Zr),ta=pn.utils.toArray,Cd=pn.core.getStyleSaver;var n=pn.utils.snap(.1);gr=function(s,o){return n(parseFloat(s)+o)}}},r}();sa.version="3.12.5",typeof window!="undefined"&&window.gsap&&window.gsap.registerPlugin(sa);class VA{constructor(){Tt.registerPlugin(rt,Jo,Ad,sa),this.$gallery=document.getElementById("odysseyGallery"),this.isActive=!1,this.$sourceContainer=null,this.zoomImageTL=null,this.initOdysseyGallery(),this.initOdysseyGallerySpline()}initOdysseyGallery(){console.log("init odyssey gallery drag"),this.$container=document.getElementById("odysseyGalleryContainer"),this.$galleryItems=this.$container.querySelectorAll(".odyssey-gallery__item:not(.odyssey-gallery__item--title)"),Jo.create(this.$container,{type:"x,y",bounds:this.$gallery,inertia:!0,onDragStart:()=>{Tt.to(this.$galleryItems,{scale:.95,duration:.4,ease:"power4.out"})},onDragEnd:()=>{Tt.to(this.$galleryItems,{scale:1,duration:.8,ease:"power4.out"})}}),console.log("init odyssey gallery click"),this.$target=document.querySelector(".odyssey-gallery__destination-target"),this.$targetContainer=document.querySelector(".odyssey-gallery__destination"),this.$galleryItems.forEach(e=>{e.addEventListener("click",t=>{this.isActive||(this.$sourceContainer=e,this.swapImage(e,this.$target,!0))})}),this.$targetContainer.addEventListener("click",e=>{this.isActive&&this.swapImage(this.$target,this.$sourceContainer,!1)}),this.initZoomImageTimeline()}initZoomImageTimeline(){const e=this.$targetContainer.querySelector(".odyssey-gallery__destination-backdrop");this.zoomImageTL=Tt.timeline({paused:!0}),this.zoomImageTL.from(e,{duration:.8,opacity:0,ease:"power4.inOut"},"start").to(this.$container,{duration:.8,filter:"blur(6px)",ease:"power4.inOut"},"start")}swapImage(e,t,n){const i=e.querySelector("img"),s=sa.getState(i);(i.parentNode===e?t:e).appendChild(i),n?(this.$targetContainer.classList.add("odyssey-gallery__destination--active"),this.zoomImageTL.play()):(this.zoomImageTL.reverse(),this.$targetContainer.classList.remove("odyssey-gallery__destination--active")),i.parentNode.style.zIndex=3e3,sa.from(s,{duration:.8,ease:"power4.inOut",absolute:!0,delay:.1,onComplete:()=>{i.parentNode.style.zIndex=""}}),this.isActive=n}initOdysseyGallerySpline(){console.log("init odyssey gallery spline");const e=document.querySelector(".odyssey-gallery__spline-container"),t=document.createElement("canvas");t.id="gallerySplineCanvas",e.appendChild(t);const n=e.getAttribute("data-spline");if(!n)return;new Application(t).load(n);const s=document.getElementById("gallerySplineCanvas");setTimeout(()=>{s.style.width="100%",s.style.height="auto"},1e3)}}class WA{constructor(){this.initOdysseyStoryScrolling()}initOdysseyStoryScrolling(){document.querySelectorAll(".odyssey-story__scene").forEach(t=>{this.createScrollScene(t)})}createScrollScene(e){const t=e.querySelector(".odyssey-story__lead-wrapper");e.querySelector(".scene-pin"),e.querySelector(".odyssey-story__image-wrapper"),Tt.registerPlugin(rt),Tt.timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:!0,pin:t}}).fromTo(t,{opacity:0},{opacity:1,duration:1},"a")}}class XA{constructor(){this.splineContainer=document.getElementById("introSpline"),console.log(this.splineContainer),this.app=null,this.initSpline()}initSpline(){if(console.log("init odyssey intro spline"),!this.splineContainer){console.error(`Spline container with id "${this.splineContainer}" not found.`);return}const e=document.createElement("canvas");e.id="splineCanvas",this.splineContainer.appendChild(e);const t=this.splineContainer.getAttribute("data-spline");if(!t){console.error("Spline URL not found.");return}this.app=new Application(e),this.app.load(t).then(()=>{console.log("Spline loaded successfully.")}).catch(n=>{console.error("Error loading spline:",n)})}dispose(){this.app&&console.log("Disposing Spline app.");const e=document.getElementById("splineCanvas");e&&e.parentNode.removeChild(e)}}const YA=r=>{new XA,new WA,new VA};class qA{constructor(){this.barba=Ix,this.init()}init(){this.barba.init({transitions:[{name:"leave-home",from:{namespace:["home"]},to:{namespace:["odyssey"]},leave:$y,afterLeave:iA,enter:Zy},{name:"enter-home",from:{namespace:["odyssey"]},to:{namespace:["home"]},leave:Ky,enter:jy}],views:[{namespace:"home",beforeEnter:nA},{namespace:"odyssey",beforeEnter:YA}]})}}var FC="",BC="",$A=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},tx={exports:{}};(function(r,e){(function(t,n){r.exports=n()})($A,function(){var t=document,n=t.createTextNode.bind(t);function i($,D,X){$.style.setProperty(D,X)}function s($,D){return $.appendChild(D)}function o($,D,X,ie){var me=t.createElement("span");return D&&(me.className=D),X&&(!ie&&me.setAttribute("data-"+D,X),me.textContent=X),$&&s($,me)||me}function a($,D){return $.getAttribute("data-"+D)}function l($,D){return!$||$.length==0?[]:$.nodeName?[$]:[].slice.call($[0].nodeName?$:(D||t).querySelectorAll($))}function c($){for(var D=[];$--;)D[$]=[];return D}function h($,D){$&&$.some(D)}function f($){return function(D){return $[D]}}function d($,D,X){var ie="--"+D,me=ie+"-index";h(X,function(ue,_e){Array.isArray(ue)?h(ue,function(Le){i(Le,me,_e)}):i(ue,me,_e)}),i($,ie+"-total",X.length)}var u={};function g($,D,X){var ie=X.indexOf($);if(ie==-1)X.unshift($),h(u[$].depends,function(ue){g(ue,$,X)});else{var me=X.indexOf(D);X.splice(ie,1),X.splice(me,0,$)}return X}function _($,D,X,ie){return{by:$,depends:D,key:X,split:ie}}function p($){return g($,0,[]).map(f(u))}function m($){u[$.by]=$}function y($,D,X,ie,me){$.normalize();var ue=[],_e=document.createDocumentFragment();ie&&ue.push($.previousSibling);var Le=[];return l($.childNodes).some(function(Ee){if(Ee.tagName&&!Ee.hasChildNodes()){Le.push(Ee);return}if(Ee.childNodes&&Ee.childNodes.length){Le.push(Ee),ue.push.apply(ue,y(Ee,D,X,ie,me));return}var z=Ee.wholeText||"",Pe=z.trim();Pe.length&&(z[0]===" "&&Le.push(n(" ")),h(Pe.split(X),function(ve,be){be&&me&&Le.push(o(_e,"whitespace"," ",me));var Ue=o(_e,D,ve);ue.push(Ue),Le.push(Ue)}),z[z.length-1]===" "&&Le.push(n(" ")))}),h(Le,function(Ee){s(_e,Ee)}),$.innerHTML="",s($,_e),ue}var v=0;function S($,D){for(var X in D)$[X]=D[X];return $}var T="words",b=_(T,v,"word",function($){return y($,"word",/\s+/,0,1)}),M="chars",P=_(M,[T],"char",function($,D,X){var ie=[];return h(X[T],function(me,ue){ie.push.apply(ie,y(me,"char","",D.whitespace&&ue))}),ie});function N($){$=$||{};var D=$.key;return l($.target||"[data-splitting]").map(function(X){var ie=X["\u{1F34C}"];if(!$.force&&ie)return ie;ie=X["\u{1F34C}"]={el:X};var me=p($.by||a(X,"splitting")||M),ue=S({},$);return h(me,function(_e){if(_e.split){var Le=_e.by,Ee=(D?"-"+D:"")+_e.key,z=_e.split(X,ue,ie);Ee&&d(X,Ee,z),ie[Le]=z,X.classList.add(Le)}}),X.classList.add("splitting"),ie})}function x($){$=$||{};var D=$.target=o();return D.innerHTML=$.content,N($),D.outerHTML}N.html=x,N.add=m;function A($,D,X){var ie=l(D.matching||$.children,$),me={};return h(ie,function(ue){var _e=Math.round(ue[X]);(me[_e]||(me[_e]=[])).push(ue)}),Object.keys(me).map(Number).sort(W).map(f(me))}function W($,D){return $-D}var G=_("lines",[T],"line",function($,D,X){return A($,{matching:X[T]},"offsetTop")}),I=_("items",v,"item",function($,D){return l(D.matching||$.children,$)}),k=_("rows",v,"row",function($,D){return A($,D,"offsetTop")}),H=_("cols",v,"col",function($,D){return A($,D,"offsetLeft")}),Y=_("grid",["rows","cols"]),K="layout",re=_(K,v,v,function($,D){var X=D.rows=+(D.rows||a($,"rows")||1),ie=D.columns=+(D.columns||a($,"columns")||1);if(D.image=D.image||a($,"image")||$.currentSrc||$.src,D.image){var me=l("img",$)[0];D.image=me&&(me.currentSrc||me.src)}D.image&&i($,"background-image","url("+D.image+")");for(var ue=X*ie,_e=[],Le=o(v,"cell-grid");ue--;){var Ee=o(Le,"cell");o(Ee,"cell-inner"),_e.push(Ee)}return s($,Le),_e}),R=_("cellRows",[K],"row",function($,D,X){var ie=D.rows,me=c(ie);return h(X[K],function(ue,_e,Le){me[Math.floor(_e/(Le.length/ie))].push(ue)}),me}),se=_("cellColumns",[K],"col",function($,D,X){var ie=D.columns,me=c(ie);return h(X[K],function(ue,_e){me[_e%ie].push(ue)}),me}),fe=_("cells",["cellRows","cellColumns"],"cell",function($,D,X){return X[K]});return m(b),m(P),m(G),m(I),m(k),m(H),m(Y),m(re),m(R),m(se),m(fe),N})})(tx);var nx=tx.exports;class jA{constructor(e){gn(this,"position",-1);gn(this,"cells",[]);this.position=e}}class KA{constructor(e,{position:t,previousCellPosition:n}={}){gn(this,"DOM",{el:null});gn(this,"position",-1);gn(this,"previousCellPosition",-1);gn(this,"original");gn(this,"state");gn(this,"color");gn(this,"originalColor");gn(this,"cache");this.DOM.el=e,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=t,this.previousCellPosition=n}set(e){this.state=e,this.DOM.el.innerHTML=this.state}}class ZA{constructor(e){gn(this,"DOM",{el:null});gn(this,"lines",[]);gn(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);gn(this,"totalChars",0);this.DOM.el=e;const t=nx({target:this.DOM.el,by:"lines"});t.forEach(n=>nx({target:n.words}));for(const[n,i]of t[0].lines.entries()){const s=new jA(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new KA(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;s.cells=o,this.lines.push(s),this.totalChars+=a}}clearCells(){for(const e of this.lines)for(const t of e.cells)t.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}animate(){let t=0;const n=(i,s,o=0)=>{s.cache={state:s.state,color:s.color},o===8-1?(s.set(s.original),s.color=s.originalColor,s.DOM.el.style.color=s.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(s.set(this.getRandomChar()),s.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color),++o,o<8&&setTimeout(()=>n(i,s,o),this.randomNumber(30,110))};for(const i of this.lines)for(const s of i.cells)setTimeout(()=>n(i,s),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}class JA{constructor(){this.init()}init(){window.applyTextShuffle=function(e){const t=document.getElementById(e);t?new ZA(t).trigger():console.warn('Element with ID "'+e+'" was not found.')}}}document.addEventListener("DOMContentLoaded",function(){new JA,document.body.getAttribute("data-barba")==="wrapper"?new qA:console.log("barba html structure is not set")})});
