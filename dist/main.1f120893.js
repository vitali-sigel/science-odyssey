var AA=Object.defineProperty;var CA=(Gi,bi,Kr)=>bi in Gi?AA(Gi,bi,{enumerable:!0,configurable:!0,writable:!0,value:Kr}):Gi[bi]=Kr;var Pt=(Gi,bi,Kr)=>(CA(Gi,typeof bi!="symbol"?bi+"":bi,Kr),Kr);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`iframe{border:none;width:100%;height:100%}a.spline-watermark{display:none!important}.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(Gi){typeof define=="function"&&define.amd?define(Gi):Gi()})(function(){"use strict";var Gi="";function bi(r,e,t){return Math.max(r,Math.min(e,t))}class Kr{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,o=e,function(l,c,h){return(1-h)*l+h*c}(n,i,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=bi(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,i,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class q0{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pt(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pt(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class kd{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const zd=100/6;class $0{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Pt(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Pt(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});Pt(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Pt(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?zd:i===2?this.windowWidth:1,n*=i===1?zd:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Pt(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new kd,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Z0{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:h=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:f=!c&&.1,infinite:d=!1,orientation:u="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:S=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:y,event:T})=>{if(T.ctrlKey)return;const b=T.type.includes("touch"),E=T.type.includes("wheel");if(this.options.syncTouch&&b&&T.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const R=v===0&&y===0,I=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&v===0;if(R||I)return;let x=T.composedPath();if(x=x.slice(0,x.indexOf(this.rootElement)),x.find(L=>{var F,z,G,$,ne;return((F=L.hasAttribute)===null||F===void 0?void 0:F.call(L,"data-lenis-prevent"))||b&&((z=L.hasAttribute)===null||z===void 0?void 0:z.call(L,"data-lenis-prevent-touch"))||E&&((G=L.hasAttribute)===null||G===void 0?void 0:G.call(L,"data-lenis-prevent-wheel"))||(($=L.classList)===null||$===void 0?void 0:$.contains("lenis"))&&!(!((ne=L.classList)===null||ne===void 0)&&ne.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void T.preventDefault();if(this.isSmooth=this.options.syncTouch&&b||this.options.smoothWheel&&E,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();T.preventDefault();let A=y;this.options.gestureOrientation==="both"?A=Math.abs(y)>Math.abs(v)?y:v:this.options.gestureOrientation==="horizontal"&&(A=v);const W=b&&this.options.syncTouch,k=b&&T.type==="touchend"&&Math.abs(A)>5;k&&(A=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+A,Object.assign({programmatic:!1},W?{lerp:k?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:h,lerp:f,infinite:d,gestureOrientation:g,orientation:u,touchMultiplier:_,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:S},this.animate=new Kr,this.emitter=new kd,this.dimensions=new q0({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new $0(i,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const u=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?u.left:u.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=bi(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}class K0{constructor(){this.lenis=this.init()}init(){const e=new Z0;function t(n){e.raf(n),requestAnimationFrame(t)}return requestAnimationFrame(t),e}}function Hd(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function mu(r,e,t){return e&&Hd(r.prototype,e),t&&Hd(r,t),r}function Jr(){return(Jr=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function Ml(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}function Gd(r){return(Gd=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}function gu(r,e){return(gu=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(r,e)}function Vd(r,e,t){return(Vd=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&gu(a,s.prototype),a}).apply(null,arguments)}function Wd(r){var e=typeof Map=="function"?new Map:void 0;return(Wd=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Vd(t,arguments,Gd(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),gu(n,t)})(r)}function Ws(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var _r,J0="2.9.7",j0=function(){};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(_r||(_r={}));var Xd=_r.off,jr=function(){function r(t){this.t=t}r.getLevel=function(){return Xd},r.setLevel=function(t){return Xd=_r[t]};var e=r.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,_r.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,_r.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,_r.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,_r.debug,n)},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}(),Qr=xu,Q0=qd,ex=_u,tx=$d,nx=Zd,Yd="/",ix=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function _u(r,e){for(var t,n=[],i=0,s=0,o="",a=e&&e.delimiter||Yd,l=e&&e.whitelist||void 0,c=!1;(t=ix.exec(r))!==null;){var h=t[0],f=t[1],d=t.index;if(o+=r.slice(s,d),s=d+h.length,f)o+=f[1],c=!0;else{var u="",g=t[2],_=t[3],p=t[4],m=t[5];if(!c&&o.length){var S=o.length-1,v=o[S];(!l||l.indexOf(v)>-1)&&(u=v,o=o.slice(0,S))}o&&(n.push(o),o="",c=!1);var y=_||p,T=u||a;n.push({name:g||i++,prefix:u,delimiter:T,optional:m==="?"||m==="*",repeat:m==="+"||m==="*",pattern:y?rx(y):"[^"+Vi(T===a?T:T+a)+"]+?"})}}return(o||s<r.length)&&n.push(o+r.substr(s)),n}function qd(r,e){return function(t,n){var i=r.exec(t);if(!i)return!1;for(var s=i[0],o=i.index,a={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var h=e[c-1];a[h.name]=h.repeat?i[c].split(h.delimiter).map(function(f){return l(f,h)}):l(i[c],h)}return{path:s,index:o,params:a}}}function $d(r,e){for(var t=new Array(r.length),n=0;n<r.length;n++)typeof r[n]=="object"&&(t[n]=new RegExp("^(?:"+r[n].pattern+")$",vu(e)));return function(i,s){for(var o="",a=s&&s.encode||encodeURIComponent,l=!s||s.validate!==!1,c=0;c<r.length;c++){var h=r[c];if(typeof h!="string"){var f,d=i?i[h.name]:void 0;if(Array.isArray(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(f=a(d[u],h),l&&!t[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(u===0?h.prefix:h.delimiter)+f}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(f=a(String(d),h),l&&!t[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+f+'"');o+=h.prefix+f}}else o+=h}return o}}function Vi(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function rx(r){return r.replace(/([=!:$/()])/g,"\\$1")}function vu(r){return r&&r.sensitive?"":"i"}function Zd(r,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,s=t.end!==!1,o=t.delimiter||Yd,a=[].concat(t.endsWith||[]).map(Vi).concat("$").join("|"),l=i?"^":"",c=0;c<r.length;c++){var h=r[c];if(typeof h=="string")l+=Vi(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+Vi(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),l+=h.optional?h.prefix?"(?:"+Vi(h.prefix)+"("+f+"))?":"("+f+")?":Vi(h.prefix)+"("+f+")"}}if(s)n||(l+="(?:"+Vi(o)+")?"),l+=a==="$"?"$":"(?="+a+")";else{var d=r[r.length-1],u=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Vi(o)+"(?="+a+"))?"),u||(l+="(?="+Vi(o)+"|"+a+")")}return new RegExp(l,vu(t))}function xu(r,e,t){return r instanceof RegExp?function(n,i){if(!i)return n;var s=n.source.match(/\((?!\?)/g);if(s)for(var o=0;o<s.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(r,e):Array.isArray(r)?function(n,i,s){for(var o=[],a=0;a<n.length;a++)o.push(xu(n[a],i,s).source);return new RegExp("(?:"+o.join("|")+")",vu(s))}(r,e,t):function(n,i,s){return Zd(_u(n,s),i,s)}(r,e,t)}Qr.match=function(r,e){var t=[];return qd(xu(r,t,e),t)},Qr.regexpToFunction=Q0,Qr.parse=ex,Qr.compile=function(r,e){return $d(_u(r,e),e)},Qr.tokensToFunction=tx,Qr.tokensToRegExp=nx;var wi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},es=new(function(){function r(){this.o=wi,this.u=new DOMParser}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=n.length;if(s===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],s===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),h=1;h<s;h++)c.href=arguments[h],o.href=l=c.href;return a.removeChild(o),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},r}()),Kd=new(function(){function r(){this.h=[],this.v=-1}var e=r.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var s={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.m(this.v-o),this.replace(s.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,s=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(s){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var i=n||this.v,s=Jr({},this.get(i),{},t);this.set(i,s)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,s=wi.prefix+"-"+wi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},mu(r,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),r}()),El=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=es.toElement(n);i.namespace=es.getNamespace(s),i.container=es.getContainer(s),i.html=n,Kd.update({ns:i.namespace});var o=es.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Jd=Qr,sx={__proto__:null,update:El,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:Jd},jd=function(){return window.location.origin},ia=function(r){return r===void 0&&(r=window.location.href),Tl(r).port},Tl=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(jd(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Qd(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Qd=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},yu=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},ox={__proto__:null,getHref:function(){return window.location.href},getOrigin:jd,getPort:ia,getPath:function(r){return r===void 0&&(r=window.location.href),Tl(r).path},parse:Tl,parseQuery:Qd,clean:yu};function ax(r,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE){if(s.status===200)n(s.responseText);else if(s.status){var o={status:s.status,statusText:s.statusText};t(r,o),i(o)}}},s.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(r,o),i(o)},s.onerror=function(){var o=new Error("Fetch error");t(r,o),i(o)},s.open("GET",r),s.timeout=e,s.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),s.setRequestHeader("x-barba","yes"),s.send()})}var lx=function(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"};function Xs(r,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=!1,o=new Promise(function(a,l){e.async=function(){return s=!0,function(h,f){h?l(h):a(f)}};var c=r.apply(e,n);s||(lx(c)?c.then(a,l):a(c))});return o}}var vr=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new jr("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Ml(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){for(var i=this,s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return Xs(c.fn,c.ctx).apply(void 0,o)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(j0)),ep=function(){function r(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return Jd(n)})}}return r.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Tl(e).path;return this.P.some(function(n){return n.exec(t)!==null})},r}(),cx=function(r){function e(n){var i;return(i=r.call(this,n)||this).k=new Map,i}Ml(e,r);var t=e.prototype;return t.set=function(n,i,s){return this.k.set(n,{action:s,request:i}),{action:s,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var s=Jr({},this.k.get(n),{},i);return this.k.set(n,s),s},e}(ep),ux=function(){return!window.history.pushState},hx=function(r){return!r.el||!r.href},fx=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},dx=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},px=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},mx=function(r){var e=r.el;return e.port!==void 0&&ia()!==ia(e.href)},gx=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},_x=function(r){return r.el.hasAttribute(wi.prefix+"-"+wi.prevent)},vx=function(r){return Boolean(r.el.closest("["+wi.prefix+"-"+wi.prevent+'="all"]'))},xx=function(r){var e=r.href;return yu(e)===yu()&&ia(e)===ia()},yx=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Ml(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",ux),this.add("exists",hx),this.add("newTab",fx),this.add("blank",dx),this.add("corsDomain",px),this.add("corsPort",mx),this.add("download",gx),this.add("preventSelf",_x),this.add("preventAll",vx),this.add("sameUrl",xx,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e}(ep),Su=function(r){function e(t,n){var i;n===void 0&&(n="Barba error");for(var s=arguments.length,o=new Array(s>2?s-2:0),a=2;a<s;a++)o[a-2]=arguments[a];return(i=r.call.apply(r,[this].concat(o))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return Ml(e,r),e}(Wd(Error)),Sx=function(){function r(t){t===void 0&&(t=[]),this.logger=new jr("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var u=!0,g={};return!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(_){u&&(u=i.R(d,_,t,g),d.from&&d.to&&(u=i.R(d,_,t,g,"from")&&i.R(d,_,t,g,"to")),d.from&&!d.to&&(u=i.R(d,_,t,g,"from")),!d.from&&d.to&&(u=i.R(d,_,t,g,"to")))}),o.set(d,g),u)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,f=[a];Object.keys(l).length>0&&f.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,s,o){var a=!0,l=!1,c=t,h=n.name,f=h,d=h,u=h,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var p=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&p.indexOf(_[f])!==-1&&(l=!0),p.indexOf(_[f])===-1&&(a=!1);break;case"object":var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]?(_[d].name&&m.indexOf(_[d].name)!==-1&&(l=!0),m.indexOf(_[d].name)===-1&&(a=!1)):a=!1;break;case"function":g[u](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][h]=c[o][h]):s[h]=c[h])}return a},e.O=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(s,o){i+=n.O(t,s.name,o+1)}),t.priority=i,t},r}(),Mx=function(){function r(t){t===void 0&&(t=[]),this.logger=new jr("@barba/core"),this.S=!1,this.store=new Sx(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.S=!1},o=this,a=i||{};o.S=!0;var l=Ws(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(c){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(u){if(l)return u;c.S=!1},l=!1,c=this,h=i||{},f=h.sync===!0||!1;c.S=!0;var d=Ws(function(){function u(){return Promise.resolve(c.j("before",n,h)).then(function(){var _=!1;function p(S){return _?S:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,h)).then(function(){})})}var m=function(){if(f)return Ws(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),c.enter(n,h)])).then(function(){return Promise.resolve(c.j("afterLeave",n,h)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})})})},function(T){if(c.M(T))throw new Su(T,"Transition error [sync]")});var S=function(T){return _?T:Ws(function(){var b=function(){if(v!==!1)return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(c.enter(n,h,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})}();if(b&&b.then)return b.then(function(){})},function(b){if(c.M(b))throw new Su(b,"Transition error [before/after/enter]")})},v=!1,y=Ws(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),El(s,n)]).then(function(T){return T[0]})).then(function(T){return v=T,Promise.resolve(c.j("afterLeave",n,h)).then(function(){})})})},function(T){if(c.M(T))throw new Su(T,"Transition error [before/after/leave]")});return y&&y.then?y.then(S):S(y)}();return m&&m.then?m.then(p):p(m)})}var g=function(){if(f)return Promise.resolve(El(s,n)).then(function(){})}();return g&&g.then?g.then(u):u()},function(u){throw c.S=!1,u.name&&u.name==="BarbaError"?(c.logger.debug(u.label),c.logger.error(u.error),u):(c.logger.debug("Transition error [page]"),c.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a(d))}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(vr.do("once",t,n)).then(function(){return n.once?Xs(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(vr.do("leave",t,n)).then(function(){return n.leave?Xs(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(vr.do("enter",t,n)).then(function(){return n.enter?Xs(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return es.addContainer(t.next.container,n),vr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return es.removeContainer(t.current.container),vr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(vr.do(t,n,i)).then(function(){return i[t]?Xs(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},mu(r,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),Ex=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){vr[n](t.L(n))}))}return r.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Xs(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Tx={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},bx=new(function(){function r(){this.version=J0,this.schemaPage=Tx,this.Logger=jr,this.logger=new jr("@barba/core"),this.plugins=[],this.hooks=vr,this.dom=es,this.helpers=sx,this.history=Kd,this.request=ax,this.url=ox}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?wi:l,h=n.requestError,f=n.timeout,d=f===void 0?2e3:f,u=n.cacheIgnore,g=u!==void 0&&u,_=n.prefetchIgnore,p=_!==void 0&&_,m=n.preventRunning,S=m!==void 0&&m,v=n.prevent,y=v===void 0?null:v,T=n.debug,b=n.logLevel;if(jr.setLevel((T!==void 0&&T)===!0?"debug":b===void 0?"off":b),this.logger.info(this.version),Object.keys(c).forEach(function(I){wi[I]&&(wi[I]=c[I])}),this.$=h,this.timeout=d,this.cacheIgnore=g,this.prefetchIgnore=p,this.preventRunning=S,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new cx(g),this.prevent=new yx(p),this.transitions=new Mx(s),this.views=new Ex(a),y!==null){if(typeof y!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",y)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(I){return I.init()});var R=this.data;R.trigger="barba",R.next=R.current,R.current=Jr({},this.schemaPage),this.hooks.do("ready",R),this.once(R),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var s=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var h=Ws(function(){var f=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:f,wrapper:o._})).then(function(){o.q()})},function(){jr.getLevel()===0&&o.force(c.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=Jr({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=function(){if(o.transitions.shouldWait)return Promise.resolve(El(a,o.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var o=i[0],a=i[1],l=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,l,o,a)===!1||(l==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var s=this.dom.getHref(i);this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Jr({href:t},this.url.parse(t))};this.C={current:n,next:Jr({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},mu(r,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),r}());function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},Mu,an,At,Qn=1e8,Mt=1/Qn,Eu=Math.PI*2,wx=Eu/4,Ax=0,np=Math.sqrt,Cx=Math.cos,Rx=Math.sin,Jt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},Tu=function(e){return typeof e=="undefined"},Ai=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},bu=function(){return typeof window!="undefined"},bl=function(e){return Ut(e)||Jt(e)},ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,wu=/(?:-?\.?\d|\.)+/gi,rp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Au=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sp=/[+-]=-?[.\d]+/,op=/[^,'"\[\]\s]+/gi,Px=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Ci,Cu,Ru,Gn={},wl={},ap,lp=function(e){return(wl=ns(e,Gn))&&In},Pu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ra=function(e,t){return!t&&console.warn(e)},cp=function(e,t){return e&&(Gn[e]=t)&&wl&&(wl[e]=t)||Gn},sa=function(){return 0},Lx={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},Dx={suppressEvents:!0},Lu={},xr=[],Du={},up,Vn={},Iu={},hp=30,Cl=[],Nu="",Uu=function(e){var t=e[0],n,i;if(Ai(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Cl.length;i--&&!Cl[i].targetTest(t););n=Cl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zp(e[i],n)))||e.splice(i,1);return e},ts=function(e){return e._gsap||Uu(ni(e))[0]._gsap},fp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Tu(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},$s=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ix=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Rl=function(){var e=xr.length,t=xr.slice(0),n,i;for(Du={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dp=function(e,t,n,i){xr.length&&!an&&Rl(),e.render(t,n,i||an&&t<0&&(e._initted||e._startAt)),xr.length&&!an&&Rl()},pp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(op).length<2?t:Jt(e)?e.trim():e},mp=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ns=function(e,t){for(var n in t)e[n]=t[n];return e},gp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ai(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||Lt,n=e.keyframes?Nx(ln(e.keyframes)):ei;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ux=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_p=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ll=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ox=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ou=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert(Al):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Fx=function r(e){return!e||e._ts&&r(e.parent)},vp=function(e){return e._repeat?Zs(e._tTime,e=e.duration()+e._rDelay)*e:0},Zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Il=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Nl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Il(e),n._dirty||is(n,e)),e},xp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Dl(e.rawTime(),t),(!t._dur||la(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ri=function(e,t,n,i){return t.parent&&yr(t),t._start=jt((Xi(n)?n:n||e!==Lt?ti(e,n,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_p(e,t,"_first","_last",e._sort?"_start":0),Fu(t)||(e._recent=t),i||xp(e,t),e._ts<0&&Nl(e,e._tTime),e},yp=function(e,t){return(Gn.ScrollTrigger||Pu("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},Sp=function(e,t,n,i,s){if(Yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&up!==Xn.frame)return xr.push(e),e._lazy=[s,i],1},Bx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Fu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Bx(e)&&!(!e._initted&&Fu(e))||(e._ts<0||e._dp._ts<0)&&!Fu(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=la(0,e._tDur,t),h=Zs(l,a),e._yoyo&&h&1&&(o=1-o),h!==Zs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||an||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Sp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ou(e,t,n,!0),e._onUpdate&&!n&&Wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&yr(e,1),!n&&!an&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ks=function(e,t,n,i){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Nl(e,e._tTime=e._tDur*a),e.parent&&Il(e),n||is(e.parent,e),e},Mp=function(e){return e instanceof _n?is(e):Ks(e,e._dur)},Hx={_start:0,endTime:sa,totalDuration:sa},ti=function r(e,t,n){var i=e.labels,s=e._recent||Hx,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},aa=function(e,t,n){var i=Xi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},Sr=function(e,t){return e||e===0?t(e):t},la=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!Jt(e)||!(t=Px.exec(e))?"":t[1]},Gx=function(e,t,n){return Sr(n,function(i){return la(e,t,i)})},Bu=[].slice,Ep=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==Ci},Vx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||Ep(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Jt(e)&&!n&&(Cu||!js())?Bu.call((t||Ru).querySelectorAll(e),0):ln(e)?Vx(e,n):Ep(e)?Bu.call(e,0):e?[e]:[]},ku=function(e){return e=ni(e)[0]||ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?ra("Invalid scope")||Ru.createElement("div"):e)}},Tp=function(e){return e.sort(function(){return .5-Math.random()})},bp=function(e){if(Ut(e))return e;var t=Ai(e)?e:{each:e},n=rs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,p=o[_],m,S,v,y,T,b,E,R,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!I){for(E=-Qn;E<(E=g[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(p=o[_]=[],m=l?Math.min(I,_)*h-.5:i%I,S=I===Qn?0:l?_*f/I-.5:i/I|0,E=0,R=Qn,b=0;b<_;b++)v=b%I-m,y=S-(b/I|0),p[b]=T=c?Math.abs(c==="y"?y:v):np(v*v+y*y),T>E&&(E=T),T<R&&(R=T);i==="random"&&Tp(p),p.max=E-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:c?c==="y"?_/I:I:Math.max(I,_/I))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=cn(t.amount||t.each)||0,n=n&&_<0?Fp(n):n}return _=(p[d]-p.min)/p.max||0,jt(p.b+(n?n(_):_)*p.v)+p.u}},zu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xi(n)?0:cn(n))}},wp=function(e,t){var n=ln(e),i,s;return!n&&Ai(e)&&(i=n=e.radius||Qn,e.values?(e=ni(e.values),(s=!Xi(e[0]))&&(i*=i)):e=zu(e.increment)),Sr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,h=0,f=e.length,d,u;f--;)s?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||Xi(o)?h:h+cn(o)}:zu(e))},Ap=function(e,t,n,i){return Sr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Wx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Xx=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},Yx=function(e,t,n){return Rp(e,t,0,1,n)},Cp=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},qx=function r(e,t,n){var i=t-e;return ln(e)?Cp(e,r(0,e.length),t):Sr(n,function(s){return(i+(s-e)%i)%i+e})},$x=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?Cp(e,r(0,e.length-1),t):Sr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ca=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?op:wu),n+=e.substr(t,i-t)+Ap(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Rp=function(e,t,n,i,s){var o=t-e,a=i-n;return Sr(s,function(l){return n+((l-e)/o*a||0)})},Zx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=Jt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=ns(ln(e)?[]:{},e));if(!h){for(l in t)Wu.call(a,e,l,"get",t[l]);s=function(g){return Zu(g,a)||(o?e.p:e)}}}return Sr(n,s)},Pp=function(e,t,n){var i=e.labels,s=Qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,h;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&Rl(),a&&(At=a),h=l?s.apply(c,l):s.call(c),At=o,h},ua=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Wn(e,"onInterrupt"),e},Js,Lp=[],Dp=function(e){if(!!e)if(e=!e.name&&e.default||e,bu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:sa,render:Zu,add:Wu,kill:hy,modifier:uy,rawVars:0},o={targetTest:0,get:0,getSetter:$u,aliases:{},register:0};if(js(),e!==i){if(Vn[t])return;ei(i,ei(Pl(e,s),o)),ns(i.prototype,ns(s,Pl(e,o))),Vn[i.prop=t]=i,e.targetTest&&(Cl.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cp(t,i),e.register&&e.register(In,i,Dn)}else Lp.push(e)},yt=255,ha={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Hu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Ip=function(e,t,n){var i=e?Xi(e)?[e>>16,e>>8&yt,e&yt]:0:ha.black,s,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ha[e])i=ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(wu),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Hu(l+1/3,s,o),i[1]=Hu(l,s,o),i[2]=Hu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(rp),n&&i.length<4&&(i[3]=1),i}else i=e.match(wu)||ha.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/yt,o=i[1]/yt,a=i[2]/yt,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Np=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(s){var o=s.match(qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Up=function(e,t,n){var i="",s=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=Ip(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Np(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Mr,"1").split(qs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Mr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Mr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ha)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Kx=/hsl[a]?\(/,Op=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=Kx.test(t),e[1]=Up(e[1],n),e[0]=Up(e[0],n,Np(e[1])),!0},fa,Xn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,g=function _(p){var m=r()-i,S=p===!0,v,y,T,b;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,v=T-o,(v>0||S)&&(b=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),y=1),S||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ap&&(!Cu&&bu()&&(Ci=Cu=window,Ru=Ci.document||{},Gn.gsap=In,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(In.version),lp(wl||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),Lp.forEach(Dp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},fa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),fa=0,c=sa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,S){var v=m?function(y,T,b,E){p(y,T,b,E),f.remove(v)}:p;return f.remove(p),a[S?"unshift":"push"](v),js(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),js=function(){return!fa&&Xn.wake()},ut={},Jx=/^[\d.\-M][\d.\-,\s]/,jx=/["']/g,Qx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jx,"").trim():+c,i=l.substr(a+1).trim();return t},ey=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ty=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qx(t[1])]:ey(e).split(",").map(pp)):ut._CE&&Jx.test(e)?ut._CE("",e):n},Fp=function(e){return function(t){return 1-e(1-t)}},Bp=function r(e,t){for(var n=e._first,i;n;)n instanceof _n?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(Ut(e)?e:ut[e]||ty(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){ut[a]=Gn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Eu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Rx((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kp(a);return s=Eu/s,l.config=function(c,h){return r(e,c,h)},l},Vu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kp(n);return i.config=function(s){return r(e,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ut.Linear.easeNone=ut.none=ut.Linear.easeIn,ss("Elastic",Gu("in"),Gu("out"),Gu()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),ss("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),ss("Circ",function(r){return-(np(1-r*r)-1)}),ss("Sine",function(r){return r===1?1:-Cx(r*wx)+1}),ss("Back",Vu("in"),Vu("out"),Vu()),ut.SteppedEase=ut.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*la(0,o,a)|0)+s)*n}}},Ys.ease=ut["quad.out"],Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nu+=r+","+r+"Params,"});var zp=function(e,t){this.id=Ax++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fp,this.set=t?t.getSetter:$u},da=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),fa||Xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nl(this,n),!s._dp||s.parent||xp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,s),i!==!1),Il(this),Ox(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Dx);var i=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ut(n)?n:mp,a=function(){var c=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ua(this)},r}();ei(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var _n=function(r){tp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Lt&&Ri(n.parent||Lt,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yp(Wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return aa(0,arguments,this),this},t.from=function(i,s,o){return aa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return aa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,oa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,ti(this,o),1),this},t.call=function(i,s,o){return Ri(this,zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(i,o,ti(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,oa(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,oa(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:jt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,S,v,y,T,b,E;if(this!==Lt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=jt(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),T=Zs(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),b&&_&1&&(d=c-d,E=1),_!==T&&!this._lock){var R=b&&T&1,I=R===(b&&_&1);if(_<T&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:jt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Bp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=zx(this,jt(a),jt(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var x=i<0?i:d;u;){if(g=u._prev,(u._act||x<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,s,o||an&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=x?-Mt:Mt);break}}u=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Il(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Xi(s)||(s=ti(this,s,i)),!(i instanceof da)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Ut(i))i=zt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(Ll(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=zt.delayedCall(0,s||sa,o);return a.data="isPause",this._hasPause=1,Ri(this,a,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ni(i),l=this._first,c=Xi(s),h;l;)l instanceof zt?Ix(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=zt.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!u){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ks(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Pp(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Pp(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ks(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Lt._ts&&(dp(Lt,Dl(i,Lt)),up=Xn.frame),Xn.frame>=hp){hp+=Hn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Hn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e}(da);ei(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var ny=function(e,t,n,i,s,o,a){var l=new Dn(this._pt,e,t,0,1,Yp,null,s),c=0,h=0,f,d,u,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ca(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(Au)||[];f=Au.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?$s(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=Au.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(sp.test(i)||m)&&(l.e=0),this._pt=l,l},Wu=function(e,t,n,i,s,o,a,l,c,h){Ut(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Ut(f)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Ut(f)?c?ay:Wp:qu,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(g=$s(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Xu)return!isNaN(d*i)&&i!==""?(g=new Dn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?cy:Xp,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Pu(t,i),ny.call(this,e,t,d,i,u,l||Hn.stringFilter,c))},iy=function(e,t,n,i,s){if(Ut(e)&&(e=pa(e,s,t,n,i)),!Ai(e)||e.style&&e.nodeType||ln(e)||ip(e))return Jt(e)?pa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,i);return o},Hp=function(e,t,n,i,s,o){var a,l,c,h;if(Vn[e]&&(a=new Vn[e]).init(s,a.rawVars?t[e]:iy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Js))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Er,Xu,Yu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Mu,y=e.timeline,T,b,E,R,I,x,A,W,k,L,F,z,G;if(y&&(!d||!s)&&(s="none"),e._ease=rs(s,Ys.ease),e._yEase=f?Fp(rs(f===!0?s:f,Ys.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(W=p[0]?ts(p[0]).harness:0,z=W&&i[W.prop],T=Pl(i,Lu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?Al:Lx),_._lazy=0),o){if(yr(e._startAt=zt.set(p,ei({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!u)&&e._startAt.revert(Al),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=ei({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pn(l),immediateRender:a,stagger:0,parent:m},T),z&&(E[W.prop]=z),yr(e._startAt=zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Al):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Pn(l)||l&&!g,b=0;b<p.length;b++){if(I=p[b],A=I._gsap||Uu(p)[b]._gsap,e._ptLookup[b]=L={},Du[A.id]&&xr.length&&Rl(),F=S===p?b:S.indexOf(I),W&&(k=new W).init(I,z||T,e,F,S)!==!1&&(e._pt=R=new Dn(e._pt,I,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function($){L[$]=R}),k.priority&&(x=1)),!W||z)for(E in T)Vn[E]&&(k=Hp(E,T,e,F,I,S))?k.priority&&(x=1):L[E]=R=Wu.call(e,I,E,"get",T[E],F,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(I,e._op[b]),v&&e._pt&&(Er=e,Lt.killTweensOf(I,L,e.globalTime(t)),G=!e.parent,Er=0),e._pt&&l&&(Du[A.id]=1)}x&&qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&y.render(Qn,!0,!0)},ry=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Xu=1,e.vars[t]="+=0",Yu(e,a),Xu=0,l?ra(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ot(n)+cn(f.e)),f.b&&(f.b=h.s+cn(f.b))},sy=function(e,t){var n=e[0]?ts(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ns({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},oy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?ca(e):e},Gp=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vp={};Ln(Gp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vp[r]=1});var zt=function(r){tp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:oa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Lt,v=(ln(n)||ip(n)?Xi(n[0]):"length"in i)?[n]:ni(n),y,T,b,E,R,I,x,A;if(a._targets=v.length?Uu(v):ra("GSAP target "+n+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||bl(c)||bl(h)){if(i=a.vars,y=a.timeline=new _n({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=Wi(a),y._start=0,d||bl(c)||bl(h)){if(E=v.length,x=d&&bp(d),Ai(d))for(R in d)~Gp.indexOf(R)&&(A||(A={}),A[R]=d[R]);for(T=0;T<E;T++)b=Pl(i,Vp),b.stagger=0,m&&(b.yoyoEase=m),A&&ns(b,A),I=v[T],b.duration=+pa(c,Wi(a),T,I,v),b.delay=(+pa(h,Wi(a),T,I,v)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(I,b,x?x(T,I,v):0),y._ease=ut.none;y.duration()?c=h=0:a.timeline=0}else if(g){oa(ei(y.vars.defaults,{ease:"none"})),y._ease=rs(g.ease||i.ease||"none");var W=0,k,L,F;if(ln(g))g.forEach(function(z){return y.to(v,z,">")}),y.duration();else{b={};for(R in g)R==="ease"||R==="easeEach"||oy(R,g[R],b,g.easeEach);for(R in b)for(k=b[R].sort(function(z,G){return z.t-G.t}),W=0,T=0;T<k.length;T++)L=k[T],F={ease:L.e,duration:(L.t-(T?k[T-1].t:0))/100*c},F[R]=L.v,y.to(v,F,W),W+=F.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!Mu&&(Er=Wi(a),Lt.killTweensOf(v),Er=0),Ri(S,Wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===jt(S._time)&&Pn(f)&&Fx(Wi(a))&&S.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-h)||0)),p&&yp(Wi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Mt&&!h?l:i<Mt?0:i,d,u,g,_,p,m,S,v,y;if(!c)kx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=jt(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===jt(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,d=c-d),p=Zs(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Bp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Sp(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ou(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Ou(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&yr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Wn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){fa||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Yu(this,c),h=this._ease(c/this._dur),ry(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Nl(this,0),this.parent||_p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||ua(this),this.parent&&o!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!s||s==="all")&&Ux(a,l))return s==="all"&&(this._pt=0),ua(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Ln(s,function(S){return _[S]=1}),s=_),s=sy(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,u={}):(u=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ll(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&ua(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return aa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return aa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Lt.killTweensOf(i,s,o)},e}(da);ei(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ln("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new _n,t=Bu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var qu=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},ay=function(e,t,n,i){return e[t](i.fp,n)},ly=function(e,t,n){return e.setAttribute(t,n)},$u=function(e,t){return Ut(e[t])?Wp:Tu(e[t])&&e.setAttribute?ly:qu},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Zu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uy=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},hy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ll(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Dn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Xp,this.d=l||this,this.set=c||qu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fy,this.m=n,this.mt=s,this.tween=i},r}();Ln(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Lu[r]=1}),Gn.TweenMax=Gn.TweenLite=zt,Gn.TimelineLite=Gn.TimelineMax=_n,Lt=new _n({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Hn.stringFilter=Op;var os=[],Ul={},dy=[],$p=0,py=0,Ku=function(e){return(Ul[e]||dy).map(function(t){return t()})},Ju=function(){var e=Date.now(),t=[];e-$p>2&&(Ku("matchMediaInit"),os.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ci.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ku("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),$p=e,Ku("matchMedia"))},Zp=function(){function r(t,n){this.selector=n&&ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=py++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=At,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ku(s)),At=o,f=i.apply(o,arguments),Ut(f)&&o._r.push(f),At=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=os.length;o--;)os[o].id===this.id&&os.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),my=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ai(n)||(n={matches:n});var o=new Zp(0,s||this.scope),a=o.conditions={},l,c,h;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ci.matchMedia(n[c]),l&&(os.indexOf(o)<0&&os.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ju):l.addEventListener("change",Ju)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Dp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ni(e)[0]);var s=ts(e||{}).get,o=n?mp:pp;return n==="native"&&(n=""),e&&(t?o((Vn[t]&&Vn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Vn[a]&&Vn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var i=e.map(function(h){return In.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=Vn[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Js._pt=0,f.init(e,n?h+n:h,Js,0,[e]),f.render(1,f),Js._pt&&Zu(1,Js)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=In.to(e,ns((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,Ys.ease)),gp(Ys,e||{})},config:function(e){return gp(Hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Vn[a]&&!Gn[a]&&ra(t+" effect requires "+a+" plugin.")}),Iu[t]=function(a,l,c){return n(ni(a),ei(l||{},s),c)},o&&(_n.prototype[t]=function(a,l,c){return this.add(Iu[t](a,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):ut},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,s;for(n.smoothChildTiming=Pn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Lt,n,0),n},context:function(e,t){return e?new Zp(e,t):At},matchMedia:function(e){return new my(e)},matchMediaRefresh:function(){return os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ju()},addEventListener:function(e,t){var n=Ul[e]||(Ul[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ul[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qx,wrapYoyo:$x,distribute:bp,random:Ap,snap:wp,normalize:Yx,getUnit:cn,clamp:Gx,splitColor:Ip,toArray:ni,selector:ku,mapRange:Rp,pipe:Wx,unitize:Xx,interpolate:Zx,shuffle:Tp},install:lp,effects:Iu,ticker:Xn,updateRoot:_n.updateRoot,plugins:Vn,globalTimeline:Lt,core:{PropTween:Dn,globals:cp,Tween:zt,Timeline:_n,Animation:da,getCache:ts,_removeLinkedListItem:Ll,reverting:function(){return an},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Mu=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=zt[r]}),Xn.add(_n.updateRoot),Js=Ol.to({},{duration:0});var gy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_y=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=gy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ju=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},Ln(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}_y(a,s)}}}},In=Ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ju("roundProps",zu),ju("modifiers"),ju("snap",wp))||Ol;zt.version=_n.version=In.version="3.12.5",ap=1,bu()&&js(),ut.Power0,ut.Power1,ut.Power2,ut.Power3,ut.Power4,ut.Linear,ut.Quad,ut.Cubic,ut.Quart,ut.Quint,ut.Strong,ut.Elastic,ut.Back,ut.SteppedEase,ut.Bounce,ut.Sine,ut.Expo,ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kp,Tr,Qs,Qu,as,Jp,eh,vy=function(){return typeof window!="undefined"},Yi={},ls=180/Math.PI,eo=Math.PI/180,to=Math.atan2,jp=1e8,th=/([A-Z])/g,xy=/(left|right|width|margin|padding|x)/i,yy=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},My=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ey=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ty=function(e,t,n){return e.style[t]=n},by=function(e,t,n){return e.style.setProperty(t,n)},wy=function(e,t,n){return e._gsap[t]=n},Ay=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ry=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Nn=Dt+"Origin",Py=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qi(i,a)}):this.tfm[e]=o.x?o[e]:qi(i,e),e===Nn&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ly=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(th,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=eh(),(!s||!s.isStart)&&!n[Dt]&&(tm(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nm=function(e,t){var n={target:e,props:[],revert:Ly,save:Py};return e._gsap||In.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},im,ih=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},Li=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(th,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,no(t)||t,1)||""},rm="O,Moz,ms,Ms,Webkit".split(","),no=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(rm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?rm[o]:"")+e},rh=function(){vy()&&window.document&&(Kp=window,Tr=Kp.document,Qs=Tr.documentElement,as=ih("div")||{style:{}},ih("div"),Dt=no(Dt),Nn=Dt+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!no("perspective"),eh=In.core.reverting,Qu=1)},sh=function r(e){var t=ih("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Qs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qs.removeChild(t),this.style.cssText=s,o},sm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},om=function(e){var t;try{t=e.getBBox()}catch{t=sh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===sh||(t=sh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+sm(e,["x","cx","x1"])||0,y:+sm(e,["y","cy","y1"])||0,width:0,height:0}:t},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&om(e))},cs=function(e,t){if(t){var n=e.style,i;t in Yi&&t!==Nn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(th,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,i,s,o){var a=new Dn(e._pt,t,n,0,1,o?em:Qp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},lm={deg:1,rad:1,turn:1},Dy={grid:1,flex:1},wr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=xy.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!s||lm[i]||lm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&am(e),(u||o==="%")&&(Yi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Ot(u?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Ot(s/p.width*f);if(u&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[h],S?e.style[t]=S:cs(e,t)}else(u||o==="%")&&!Dy[Li(_,"display")]&&(a.position=Li(e,"position")),_===e&&(a.position="static"),_.appendChild(as),g=as[h],_.removeChild(as),a.position="absolute";return l&&u&&(p=ts(_),p.time=Xn.time,p.width=_[h]),Ot(d?g*s/f:g&&s?f/g*s:0)},qi=function(e,t,n,i){var s;return Qu||rh(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=ga(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bl(Li(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Fl[t]&&Fl[t](e,t,n)||Li(e,t)||fp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(e,t,s,n)+n:s},Iy=function(e,t,n,i){if(!n||n==="none"){var s=no(t,e,1),o=s&&Li(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Li(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,t,0,1,Yp),l=0,c=0,h,f,d,u,g,_,p,m,S,v,y,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Li(e,t)||i,_?e.style[t]=_:cs(e,t)),h=[n,i],Op(h),n=h[0],i=h[1],d=n.match(qs)||[],T=i.match(qs)||[],T.length){for(;f=qs.exec(i);)p=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=$s(u,p)+y),m=parseFloat(p),v=p.substr((m+"").length),l=qs.lastIndex-v.length,v||(v=v||Hn.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(u=wr(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:u,c:m-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?em:Qp;return sp.test(i)&&(a.e=0),this._pt=a,a},cm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ny=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cm[n]||n,t[1]=cm[i]||i,t.join(" ")},Uy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yi[a]&&(l=1,a=a==="transformOrigin"?Nn:Dt),cs(n,a);l&&(cs(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),ga(n,1),o.uncache=1,tm(i)))}},Fl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,t,n,0,0,Uy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ma=[1,0,0,1,0,0],um={},hm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fm=function(e){var t=Li(e,Dt);return hm(t)?ma:t.substr(7).match(rp).map(Ot)},oh=function(e,t){var n=e._gsap||ts(e),i=e.style,s=fm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ma:s):(s===ma&&!e.offsetParent&&e!==Qs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Qs.appendChild(e)),s=fm(e),l?i.display=l:cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ah=function(e,t,n,i,s,o){var a=e._gsap,l=s||oh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,E,R,I;n?l!==ma&&(E=u*p-g*_)&&(R=y*(p/E)+T*(-_/E)+(_*S-p*m)/E,I=y*(-g/E)+T*(u/E)-(u*S-g*m)/E,y=R,T=I):(b=om(e),y=b.x+(~v[0].indexOf("%")?y/100*b.width:y),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(m=y-c,S=T-h,a.xOffset=f+(m*u+S*_)-m,a.yOffset=d+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",o&&(br(o,a,"xOrigin",c,y),br(o,a,"yOrigin",h,T),br(o,a,"xOffset",f,a.xOffset),br(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},ga=function(e,t){var n=e._gsap||new zp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Li(e,Nn)||"0",h,f,d,u,g,_,p,m,S,v,y,T,b,E,R,I,x,A,W,k,L,F,z,G,$,ne,P,re,ue,q,D,V;return h=f=d=_=p=m=S=v=y=0,u=g=1,n.svg=!!(e.getCTM&&am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),E=oh(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),ah(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,b=n.yOrigin||0,E!==ma&&(A=E[0],W=E[1],k=E[2],L=E[3],h=F=E[4],f=z=E[5],E.length===6?(u=Math.sqrt(A*A+W*W),g=Math.sqrt(L*L+k*k),_=A||W?to(W,A)*ls:0,S=k||L?to(k,L)*ls+_:0,S&&(g*=Math.abs(Math.cos(S*eo))),n.svg&&(h-=T-(T*A+b*k),f-=b-(T*W+b*L))):(V=E[6],q=E[7],P=E[8],re=E[9],ue=E[10],D=E[11],h=E[12],f=E[13],d=E[14],R=to(V,ue),p=R*ls,R&&(I=Math.cos(-R),x=Math.sin(-R),G=F*I+P*x,$=z*I+re*x,ne=V*I+ue*x,P=F*-x+P*I,re=z*-x+re*I,ue=V*-x+ue*I,D=q*-x+D*I,F=G,z=$,V=ne),R=to(-k,ue),m=R*ls,R&&(I=Math.cos(-R),x=Math.sin(-R),G=A*I-P*x,$=W*I-re*x,ne=k*I-ue*x,D=L*x+D*I,A=G,W=$,k=ne),R=to(W,A),_=R*ls,R&&(I=Math.cos(R),x=Math.sin(R),G=A*I+W*x,$=F*I+z*x,W=W*I-A*x,z=z*I-F*x,A=G,F=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Ot(Math.sqrt(A*A+W*W+k*k)),g=Ot(Math.sqrt(z*z+V*V)),R=to(F,z),S=Math.abs(R)>2e-4?R*ls:0,y=D?1/(D<0?-D:D):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hm(Li(e,Dt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(u*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(u),n.scaleY=Ot(g),n.rotation=Ot(_)+a,n.rotationX=Ot(p)+a,n.rotationY=Ot(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=Bl(c)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?Fy:im?dm:Oy,n.uncache=0,n},Bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},lh=function(e,t,n){var i=cn(t);return Ot(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},Oy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dm(e,t)},us="0deg",_a="0px",hs=") ",dm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==us||h!==us)){var b=parseFloat(h)*eo,E=Math.sin(b),R=Math.cos(b),I;b=parseFloat(f)*eo,I=Math.cos(b),o=lh(S,o,E*I*-v),a=lh(S,a,-Math.sin(b)*-v),l=lh(S,l,R*I*-v+v)}p!==_a&&(y+="perspective("+p+hs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==_a||a!==_a||l!==_a)&&(y+=l!==_a||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),c!==us&&(y+="rotate("+c+hs),h!==us&&(y+="rotateY("+h+hs),f!==us&&(y+="rotateX("+f+hs),(d!==us||u!==us)&&(y+="skew("+d+", "+u+hs),(g!==1||_!==1)&&(y+="scale("+g+", "+_+hs),S.style[Dt]=y||"translate(0, 0)"},Fy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),T,b,E,R,I;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=eo,c*=eo,T=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=eo,I=Math.tan(c-h),I=Math.sqrt(1+I*I),E*=I,R*=I,h&&(I=Math.tan(h),I=Math.sqrt(1+I*I),T*=I,b*=I)),T=Ot(T),b=Ot(b),E=Ot(E),R=Ot(R)):(T=f,R=d,b=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=wr(u,"x",o,"px"),y=wr(u,"y",a,"px")),(g||_||p||m)&&(v=Ot(v+g-(g*T+_*E)+p),y=Ot(y+_-(g*b+_*R)+m)),(i||s)&&(I=u.getBBox(),v=Ot(v+i/100*I.width),y=Ot(y+s/100*I.height)),I="matrix("+T+","+b+","+E+","+R+","+v+","+y+")",u.setAttribute("transform",I),S&&(u.style[Dt]=I)},By=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ls:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*jp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*jp)%o-~~(c/o)*o)),e._pt=d=new Dn(e._pt,t,n,i,c,Sy),d.e=h,d.u="deg",e._props.push(n),d},pm=function(e,t){for(var n in t)e[n]=t[n];return e},ky=function(e,t,n){var i=pm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=ga(n,1),cs(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=ga(n,1),o[Dt]=c);for(l in Yi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=cn(c),g=cn(h),f=u!==g?wr(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Dn(e._pt,a,l,f,d-f,nh),e._pt.u=g||0,e._props.push(l));pm(a,i)};Ln("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Fl[e>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return qi(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var mm={name:"css",register:rh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,S,v,y,T,b,E,R;Qu||rh(),this.styles=this.styles||nm(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Vn[_]&&Hp(_,t,n,i,e,s)))){if(u=typeof h,g=Fl[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ca(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Mr.lastIndex=0,Mr.test(c)||(p=cn(c),m=cn(h)),m?p!==m&&(c=wr(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=ca(c)),cn(c+"")||c==="auto"||(c+=Hn.units[_]||cn(qi(e,_))||""),(c+"").charAt(1)==="="&&(c=qi(e,_))):c=qi(e,_),d=parseFloat(c),S=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in Pi&&(_==="autoAlpha"&&(d===1&&qi(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),br(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Yi,v){if(this.styles.save(_),y||(T=e._gsap,T.renderTransform&&!t.parseTransform||ga(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Dn(this._pt,a,Dt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Dn(this._pt,T,"scaleY",T.scaleY,(S?$s(T.scaleY,S+f):f)-T.scaleY||0,nh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Nn,0,a[Nn]),h=Ny(h),T.svg?ah(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&br(this,T,"zOrigin",T.zOrigin,m),br(this,a,_,Bl(c),Bl(h)));continue}else if(_==="svgOrigin"){ah(e,h,1,b,0,this);continue}else if(_ in um){By(this,T,_,d,S?$s(d,S+h):h);continue}else if(_==="smoothOrigin"){br(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){ky(this,h,e);continue}}else _ in a||(_=no(_)||_);if(v||(f||f===0)&&(d||d===0)&&!yy.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=cn(h)||(_ in Hn.units?Hn.units[_]:p),p!==m&&(d=wr(e,_,c,m)),this._pt=new Dn(this._pt,v?T:a,_,d,(S?$s(d,S+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Ey:nh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=My);else if(_ in a)Iy.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Pu(_,h);continue}v||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||e[_])),o.push(_)}}E&&qp(this)},render:function(e,t){if(t.tween._time||!eh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Pi,getSetter:function(e,t,n){var i=Pi[t];return i&&i.indexOf(",")<0&&(t=i),t in Yi&&t!==Nn&&(e._gsap.x||qi(e,"x"))?n&&Jp===n?t==="scale"?Ay:wy:(Jp=n||{})&&(t==="scale"?Cy:Ry):e.style&&!Tu(e.style[t])?Ty:~t.indexOf("-")?by:$u(e,t)},core:{_removeProperty:cs,_getMatrix:oh}};In.utils.checkPrefix=no,In.core.getStyleSaver=nm,function(r,e,t,n){var i=Ln(r+","+e+","+t,function(s){Yi[s]=1});Ln(e,function(s){Hn.units[s]="deg",um[s]=1}),Pi[i[13]]=r+","+e,Ln(n,function(s){var o=s.split(":");Pi[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Hn.units[r]="px"}),In.registerPlugin(mm);var Tt=In.registerPlugin(mm)||In;Tt.core.Tween;const zy=(r,e)=>{e.lenisManager.lenis.stop();const t=e.portalManager.getPortalTL(),n=t.duration();return t.add(()=>{r.current.container.style="display: none"},n),t.play()},Hy=r=>{},Gy=r=>Tt.to(r.current.container,{opacity:0,duration:.6}),Vy=(r,e)=>(Tt.set(r.next.container,{position:"absolute",top:"0px",width:"100%"}),Tt.set(".footer",{autoAlpha:0}),Tt.from(r.next.container,{yPercent:3,opacity:0,duration:2,ease:"power4.out",onComplete:()=>{Tt.set(r.next.container,{clearProps:"all"}),Tt.set(".footer",{autoAlpha:1}),document.body.style.overflow="unset",e.lenisManager.lenis.start()}}));function gm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wy(r,e,t){return e&&gm(r.prototype,e),t&&gm(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn,kl,Yn,Ar,Cr,io,_m,fs,va,vm,$i,hi,xm,ym=function(){return nn||typeof window!="undefined"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Sm=1,ro=[],lt=[],Di=[],xa=Date.now,ch=function(e,t){return t},Xy=function(){var e=va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Di),lt=n,Di=i,ch=function(o,a){return t[o](a)}},Rr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},ya=function(e){return!!~vm.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},zl="scrollLeft",Hl="scrollTop",uh=function(){return $i&&$i.isPressed||lt.cache++},Gl=function(e,t){var n=function i(s){if(s||s===0){Sm&&(Yn.history.scrollRestoration="manual");var o=$i&&$i.isPressed;s=i.v=Math.round(s)||($i&&$i.iOS?1:0),e(s),i.cacheID=lt.cache,o&&ch("ss",s)}else(t||lt.cache!==i.cacheID||ch("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:zl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gl(function(r){return arguments.length?Yn.scrollTo(r,Wt.sc()):Yn.pageXOffset||Ar[zl]||Cr[zl]||io[zl]||0})},Wt={s:Hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:Gl(function(r){return arguments.length?Yn.scrollTo(yn.sc(),r):Yn.pageYOffset||Ar[Hl]||Cr[Hl]||io[Hl]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||nn.utils.toArray)(e)[0]||(typeof e=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Pr=function(e,t){var n=t.s,i=t.sc;ya(e)&&(e=Ar.scrollingElement||Cr);var s=lt.indexOf(e),o=i===Wt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||vn(e,"scroll",uh);var a=lt[s+o],l=a||(lt[s+o]=Gl(Rr(e,n),!0)||(ya(e)?i:Gl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=nn.getProperty(e,"scrollBehavior")==="smooth"),l},hh=function(e,t,n){var i=e,s=e,o=xa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=xa();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=xa();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Sa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Em=function(){va=nn.core.globals().ScrollTrigger,va&&va.core&&Xy()},Tm=function(e){return nn=e||ym(),!kl&&nn&&typeof document!="undefined"&&document.body&&(Yn=window,Ar=document,Cr=Ar.documentElement,io=Ar.body,vm=[Yn,Ar,Cr,io],nn.utils.clamp,xm=nn.core.context||function(){},fs="onpointerenter"in io?"pointer":"mouse",_m=Ft.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=Ft.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sm=0},500),Em(),kl=1),kl};yn.op=Wt,lt.cache=0;var Ft=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){kl||Tm(nn)||console.warn("Please gsap.registerPlugin(Observer)"),va||Em();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,v=n.onPress,y=n.onRelease,T=n.onRight,b=n.onLeft,E=n.onUp,R=n.onDown,I=n.onChangeX,x=n.onChangeY,A=n.onChange,W=n.onToggleX,k=n.onToggleY,L=n.onHover,F=n.onHoverEnd,z=n.onMove,G=n.ignoreCheck,$=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,re=n.onWheel,ue=n.onEnable,q=n.onDisable,D=n.onClick,V=n.scrollSpeed,te=n.capture,fe=n.allowClicks,le=n.lockAxis,me=n.onLockAxis;this.target=a=Un(a)||Cr,this.vars=n,u&&(u=nn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,V=V||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(io).lineHeight)||22);var Re,ve,B,Ae,ge,Ee,De,H=this,Le=0,Xe=0,st=n.passive||!h,C=Pr(a,yn),M=Pr(a,Wt),ie=C(),ce=M(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hi[0]==="pointerdown",he=ya(a),Ne=a.ownerDocument||Ar,He=[0,0,0],xe=[0,0,0],be=0,Ze=function(){return be=xa()},_e=function(ee,oe){return(H.event=ee)&&u&&~u.indexOf(ee.target)||oe&&de&&ee.pointerType!=="touch"||G&&G(ee,oe)},_t=function(){H._vx.reset(),H._vy.reset(),ve.pause(),f&&f(H)},$e=function(){var ee=H.deltaX=Mm(He),oe=H.deltaY=Mm(xe),J=Math.abs(ee)>=i,ye=Math.abs(oe)>=i;A&&(J||ye)&&A(H,ee,oe,He,xe),J&&(T&&H.deltaX>0&&T(H),b&&H.deltaX<0&&b(H),I&&I(H),W&&H.deltaX<0!=Le<0&&W(H),Le=H.deltaX,He[0]=He[1]=He[2]=0),ye&&(R&&H.deltaY>0&&R(H),E&&H.deltaY<0&&E(H),x&&x(H),k&&H.deltaY<0!=Xe<0&&k(H),Xe=H.deltaY,xe[0]=xe[1]=xe[2]=0),(Ae||B)&&(z&&z(H),B&&(S(H),B=!1),Ae=!1),Ee&&!(Ee=!1)&&me&&me(H),ge&&(re(H),ge=!1),Re=0},ke=function(ee,oe,J){He[J]+=ee,xe[J]+=oe,H._vx.update(ee),H._vy.update(oe),c?Re||(Re=requestAnimationFrame($e)):$e()},Ue=function(ee,oe){le&&!De&&(H.axis=De=Math.abs(ee)>Math.abs(oe)?"x":"y",Ee=!0),De!=="y"&&(He[2]+=ee,H._vx.update(ee,!0)),De!=="x"&&(xe[2]+=oe,H._vy.update(oe,!0)),c?Re||(Re=requestAnimationFrame($e)):$e()},Fe=function(ee){if(!_e(ee,1)){ee=Sa(ee,h);var oe=ee.clientX,J=ee.clientY,ye=oe-H.x,pe=J-H.y,Pe=H.isDragging;H.x=oe,H.y=J,(Pe||Math.abs(H.startX-oe)>=s||Math.abs(H.startY-J)>=s)&&(S&&(B=!0),Pe||(H.isDragging=!0),Ue(ye,pe),Pe||p&&p(H))}},Ke=H.onPress=function(O){_e(O,1)||O&&O.button||(H.axis=De=null,ve.pause(),H.isPressed=!0,O=Sa(O),Le=Xe=0,H.startX=H.x=O.clientX,H.startY=H.y=O.clientY,H._vx.reset(),H._vy.reset(),vn($?a:Ne,hi[1],Fe,st,!0),H.deltaX=H.deltaY=0,v&&v(H))},Te=H.onRelease=function(O){if(!_e(O,1)){xn($?a:Ne,hi[1],Fe,!0);var ee=!isNaN(H.y-H.startY),oe=H.isDragging,J=oe&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),ye=Sa(O);!J&&ee&&(H._vx.reset(),H._vy.reset(),h&&fe&&nn.delayedCall(.08,function(){if(xa()-be>300&&!O.defaultPrevented){if(O.target.click)O.target.click();else if(Ne.createEvent){var pe=Ne.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,Yn,1,ye.screenX,ye.screenY,ye.clientX,ye.clientY,!1,!1,!1,!1,0,null),O.target.dispatchEvent(pe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&oe&&!$&&ve.restart(!0),m&&oe&&m(H),y&&y(H,J)}},ot=function(ee){return ee.touches&&ee.touches.length>1&&(H.isGesturing=!0)&&ne(ee,H.isDragging)},U=function(){return(H.isGesturing=!1)||P(H)},Me=function(ee){if(!_e(ee)){var oe=C(),J=M();ke((oe-ie)*V,(J-ce)*V,1),ie=oe,ce=J,f&&ve.restart(!0)}},j=function(ee){if(!_e(ee)){ee=Sa(ee,h),re&&(ge=!0);var oe=(ee.deltaMode===1?l:ee.deltaMode===2?Yn.innerHeight:1)*g;ke(ee.deltaX*oe,ee.deltaY*oe,0),f&&!$&&ve.restart(!0)}},Se=function(ee){if(!_e(ee)){var oe=ee.clientX,J=ee.clientY,ye=oe-H.x,pe=J-H.y;H.x=oe,H.y=J,Ae=!0,f&&ve.restart(!0),(ye||pe)&&Ue(ye,pe)}},se=function(ee){H.event=ee,L(H)},N=function(ee){H.event=ee,F(H)},ae=function(ee){return _e(ee)||Sa(ee,h)&&D(H)};ve=H._dc=nn.delayedCall(d||.25,_t).pause(),H.deltaX=H.deltaY=0,H._vx=hh(0,50,!0),H._vy=hh(0,50,!0),H.scrollX=C,H.scrollY=M,H.isDragging=H.isGesturing=H.isPressed=!1,xm(this),H.enable=function(O){return H.isEnabled||(vn(he?Ne:a,"scroll",uh),o.indexOf("scroll")>=0&&vn(he?Ne:a,"scroll",Me,st,te),o.indexOf("wheel")>=0&&vn(a,"wheel",j,st,te),(o.indexOf("touch")>=0&&_m||o.indexOf("pointer")>=0)&&(vn(a,hi[0],Ke,st,te),vn(Ne,hi[2],Te),vn(Ne,hi[3],Te),fe&&vn(a,"click",Ze,!0,!0),D&&vn(a,"click",ae),ne&&vn(Ne,"gesturestart",ot),P&&vn(Ne,"gestureend",U),L&&vn(a,fs+"enter",se),F&&vn(a,fs+"leave",N),z&&vn(a,fs+"move",Se)),H.isEnabled=!0,O&&O.type&&Ke(O),ue&&ue(H)),H},H.disable=function(){H.isEnabled&&(ro.filter(function(O){return O!==H&&ya(O.target)}).length||xn(he?Ne:a,"scroll",uh),H.isPressed&&(H._vx.reset(),H._vy.reset(),xn($?a:Ne,hi[1],Fe,!0)),xn(he?Ne:a,"scroll",Me,te),xn(a,"wheel",j,te),xn(a,hi[0],Ke,te),xn(Ne,hi[2],Te),xn(Ne,hi[3],Te),xn(a,"click",Ze,!0),xn(a,"click",ae),xn(Ne,"gesturestart",ot),xn(Ne,"gestureend",U),xn(a,fs+"enter",se),xn(a,fs+"leave",N),xn(a,fs+"move",Se),H.isEnabled=H.isPressed=H.isDragging=!1,q&&q(H))},H.kill=H.revert=function(){H.disable();var O=ro.indexOf(H);O>=0&&ro.splice(O,1),$i===H&&($i=0)},ro.push(H),$&&ya(a)&&($i=H),H.enable(_)},Wy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ft.version="3.12.5",Ft.create=function(r){return new Ft(r)},Ft.register=Tm,Ft.getAll=function(){return ro.slice()},Ft.getById=function(r){return ro.filter(function(e){return e.vars.id===r})[0]},ym()&&nn.registerPlugin(Ft);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be,so,ht,It,fi,bt,bm,Vl,Ma,Ea,Ta,Wl,un,Xl,fh,Sn,wm,Am,oo,Cm,dh,Rm,Mn,ph,Pm,Lm,Lr,mh,gh,ao,_h,Yl,vh,xh,ql=1,hn=Date.now,yh=hn(),ii=0,ba=0,Dm=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Im=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Yy=function r(){return ba&&requestAnimationFrame(r)},Nm=function(){return Xl=1},Um=function(){return Xl=0},Ii=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},Om=function(){return typeof window!="undefined"},Fm=function(){return Be||Om()&&(Be=window.gsap)&&Be.registerPlugin&&Be},ds=function(e){return!!~bm.indexOf(e)},Bm=function(e){return(e==="Height"?_h:ht["inner"+e])||fi["client"+e]||bt["client"+e]},km=function(e){return Rr(e,"getBoundingClientRect")||(ds(e)?function(){return oc.width=ht.innerWidth,oc.height=_h,oc}:function(){return Zi(e)})},qy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Rr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Bm(s):e["client"+s])||0}},$y=function(e,t){return!t||~Di.indexOf(e)?km(e):function(){return oc}},Ni=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Rr(e,n))?o()-km(e)()[s]:ds(e)?(fi[n]||bt[n])-Bm(i):e[n]-e["offset"+i])},$l=function(e,t){for(var n=0;n<oo.length;n+=3)(!t||~t.indexOf(oo[n+1]))&&e(oo[n],oo[n+1],oo[n+2])},qn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Aa=function(e){return typeof e=="number"},ps=function(e){return typeof e=="object"},Ca=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Sh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},lo=Math.abs,zm="left",Hm="top",Mh="right",Eh="bottom",ms="width",gs="height",Ra="Right",Pa="Left",La="Top",Da="Bottom",Ht="padding",ri="margin",co="Width",Th="Height",Xt="px",si=function(e){return ht.getComputedStyle(e)},Zy=function(e){var t=si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&si(e)[fh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Zl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Ky=function(e){return function(t){return Be.utils.snap(Vm(e),t)}},bh=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Jy=function(e){return function(t,n){return bh(Vm(e))(t,n.direction)}},Kl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jl={toggleActions:"play",anticipatePin:0},Ql={top:0,left:0,center:.5,bottom:1,right:1},ec=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ql?Ql[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},tc=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,g=It.createElement("div"),_=ds(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?bt:n,S=e.indexOf("start")!==-1,v=S?c:h,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Wt?Mh:Eh)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],nc(g,0,i,S),g},nc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+co]=1,s["border"+a+co]=0,s[n.p]=t+"px",Be.set(e,s)},it=[],wh={},Ia,Xm=function(){return hn()-ii>34&&(Ia||(Ia=requestAnimationFrame(Ki)))},uo=function(){(!Mn||!Mn.isPressed||Mn.startX>bt.clientWidth)&&(lt.cache++,Mn?Ia||(Ia=requestAnimationFrame(Ki)):Ki(),ii||vs("scrollStart"),ii=hn())},Ah=function(){Lm=ht.innerWidth,Pm=ht.innerHeight},Na=function(){lt.cache++,!un&&!Rm&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!ph||Lm!==ht.innerWidth||Math.abs(ht.innerHeight-Pm)>ht.innerHeight*.25)&&Vl.restart(!0)},_s={},jy=[],Ym=function r(){return en(rt,"scrollEnd",r)||ys(!0)},vs=function(e){return _s[e]&&_s[e].map(function(t){return t()})||jy},$n=[],qm=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},Ch=function(e,t){var n;for(Sn=0;Sn<it.length;Sn++)n=it[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Yl=!0,t&&qm(t),t||vs("revert")},$m=function(e,t){lt.cache++,(t||!Tn)&&lt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(ht.history.scrollRestoration=gh=e)},Tn,xs=0,Zm,Qy=function(){if(Zm!==xs){var e=Zm=xs;requestAnimationFrame(function(){return e===xs&&ys(!0)})}},Km=function(){bt.appendChild(ao),_h=!Mn&&ao.offsetHeight||ht.innerHeight,bt.removeChild(ao)},Jm=function(e){return Ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(ii&&!e&&!Yl){Qt(rt,"scrollEnd",Ym);return}Km(),Tn=rt.isRefreshing=!0,lt.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=vs("refreshInit");Cm&&rt.sort(),t||Ch(),lt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Yl=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),vh=1,Jm(!0),it.forEach(function(i){var s=Ni(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Jm(!1),vh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$m(gh,1),Vl.pause(),xs++,Tn=2,Ki(2),it.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=rt.isRefreshing=!1,vs("refresh")},Rh=0,ic=1,Ua,Ki=function(e){if(e===2||!Tn&&!Yl){rt.isUpdating=!0,Ua&&Ua.update(0);var t=it.length,n=hn(),i=n-yh>=50,s=t&&it[0].scroll();if(ic=Rh>s?-1:1,Tn||(Rh=s),i&&(ii&&!Xl&&n-ii>200&&(ii=0,vs("scrollEnd")),Ta=yh,yh=n),ic<0){for(Sn=t;Sn-- >0;)it[Sn]&&it[Sn].update(0,i);ic=1}else for(Sn=0;Sn<t;Sn++)it[Sn]&&it[Sn].update(0,i);rt.isUpdating=!1}Ia=0},Ph=[zm,Hm,Eh,Mh,ri+Da,ri+Ra,ri+La,ri+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rc=Ph.concat([ms,gs,"boxSizing","max"+co,"max"+Th,"position",ri,Ht,Ht+La,Ht+Ra,Ht+Da,Ht+Pa]),eS=function(e,t,n){ho(n);var i=e._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Lh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ph.length,o=t.style,a=e.style,l;s--;)l=Ph[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Eh]=a[Mh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=Zl(e,yn)+Xt,o[gs]=Zl(e,Wt)+Xt,o[Ht]=a[ri]=a[Hm]=a[zm]="0",ho(i),a[ms]=a["max"+co]=n[ms],a[gs]=a["max"+Th]=n[gs],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},tS=/([A-Z])/g,ho=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(tS,"-$1").toLowerCase())}},sc=function(e){for(var t=rc.length,n=e.style,i=[],s=0;s<t;s++)i.push(rc[s],n[rc[s]]);return i.t=e,i},nS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},oc={left:0,top:0},jm=function(e,t,n,i,s,o,a,l,c,h,f,d,u,g){En(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ec("0"+e.substr(3),n):0));var _=u?u.time():0,p,m,S;if(u&&u.seek(0),isNaN(e)||(e=+e),Aa(e))u&&(e=Be.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&nc(a,n,i,!0);else{En(t)&&(t=t(l));var v=(e||"0").split(" "),y,T,b,E;S=Un(t,l)||bt,y=Zi(S)||{},(!y||!y.left&&!y.top)&&si(S).display==="none"&&(E=S.style.display,S.style.display="block",y=Zi(S),E?S.style.display=E:S.style.removeProperty("display")),T=ec(v[0],y[i.d]),b=ec(v[1]||"0",n),e=y[i.p]-c[i.p]-h+T+s-b,a&&nc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,I=o._isStart;p="scroll"+i.d2,nc(o,R,i,I&&R>20||!I&&(f?Math.max(bt[p],fi[p]):o.parentNode[p])<=R+1),f&&(c=Zi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return u&&S&&(p=Zi(S),u.seek(d),m=Zi(S),u._caScrollDist=p[i.p]-m[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},iS=/(webkit|moz|length|cssText|inset)/i,Qm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===bt){e._stOrig=s.cssText,a=si(e);for(o in a)!+o&&!iS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},eg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},ac=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},tg=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=eg(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),rt.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},rt=function(){function r(t,n){so||r.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Ii;return}n=Gm(qn(n)||Aa(n)||n.nodeType?{trigger:n}:n,jl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,v=s.once,y=s.snap,T=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,I=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Wt,A=!f&&f!==0,W=Un(n.scroller||ht),k=Be.core.getCache(W),L=ds(W),F=("pinType"in n?n.pinType:Rr(W,"pinType")||L&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=A&&n.toggleActions.split(" "),$="markers"in n?n.markers:jl.markers,ne=L?0:parseFloat(si(W)["border"+x.p2+co])||0,P=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ue=qy(W,L,x),q=$y(W,L),D=0,V=0,te=0,fe=Pr(W,x),le,me,Re,ve,B,Ae,ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de,he,Ne,He,xe,be,Ze,_e,_t,$e,ke,Ue,Fe,Ke,Te,ot,U,Me,j,Se,se,N;if(P._startClamp=P._endClamp=!1,P._dir=x,p*=45,P.scroller=W,P.scroll=E?E.time.bind(E):fe,ve=fe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cm=1,n.refreshPriority===-9999&&(Ua=P)),k.tweenScroll=k.tweenScroll||{top:tg(W,Wt),left:tg(W,yn)},P.tweenTo=le=k.tweenScroll[x.p],P.scrubDuration=function(J){ot=Aa(J)&&J,ot?Te?Te.duration(J):Te=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ot,paused:!0,onComplete:function(){return m&&m(P)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Fe=0,l||(l=i.vars.id)),y&&((!ps(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&Be.set(L?[bt,fi]:W,{scrollBehavior:"auto"}),lt.forEach(function(J){return En(J)&&J.target===(L?It.scrollingElement||fi:W)&&(J.smooth=!1)}),Re=En(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ky(i):y.snapTo==="labelsDirectional"?Jy(i):y.directional!==!1?function(J,ye){return bh(y.snapTo)(J,hn()-V<500?0:ye.direction)}:Be.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=ps(U)?Ea(U.min,U.max):Ea(U,U),Me=Be.delayedCall(y.delay||ot/2||.1,function(){var J=fe(),ye=hn()-V<500,pe=le.tween;if((ye||Math.abs(P.getVelocity())<10)&&!pe&&!Xl&&D!==J){var Pe=(J-Ae)/C,We=i&&!A?i.totalProgress():Pe,Oe=ye?0:(We-Ke)/(hn()-Ta)*1e3||0,Je=Be.utils.clamp(-Pe,1-Pe,lo(Oe/2)*Oe/.185),ct=Pe+(y.inertia===!1?0:Je),dt,nt,at=y,mt=at.onStart,w=at.onInterrupt,X=at.onComplete;if(dt=Re(ct,P),Aa(dt)||(dt=ct),nt=Math.round(Ae+dt*C),J<=ge&&J>=Ae&&nt!==J){if(pe&&!pe._initted&&pe.data<=lo(nt-J))return;y.inertia===!1&&(Je=dt-Pe),le(nt,{duration:U(lo(Math.max(lo(ct-We),lo(dt-We))*.185/Oe/.05||0)),ease:y.ease||"power3",data:lo(nt-J),onInterrupt:function(){return Me.restart(!0)&&w&&w(P)},onComplete:function(){P.update(),D=fe(),i&&(Te?Te.resetTo("totalProgress",dt,i._tTime/i._tDur):i.progress(dt)),Fe=Ke=i&&!A?i.totalProgress():P.progress,S&&S(P),X&&X(P)}},J,Je*C,nt-J-Je*C),mt&&mt(P,le.tween)}}else P.isActive&&D!==J&&Me.restart(!0)}).pause()),l&&(wh[l]=P),d=P.trigger=Un(d||u!==!0&&u),N=d&&d._gsap&&d._gsap.stRevert,N&&(N=N(P)),u=u===!0?d:Un(u),qn(a)&&(a={targets:d,className:a}),u&&(g===!1||g===ri||(g=!g&&u.parentNode&&u.parentNode.style&&si(u.parentNode).display==="flex"?!1:Ht),P.pin=u,me=Be.core.getCache(u),me.spacer?M=me.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),me.spacerIsNative=!!b,b&&(me.spacerState=sc(b))),me.spacer=de=b||It.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),me.pinState=M=sc(u)),n.force3D!==!1&&Be.set(u,{force3D:!0}),P.spacer=de=me.spacer,Ue=si(u),Ze=Ue[g+x.os2],Ne=Be.getProperty(u),He=Be.quickSetter(u,x.a,Xt),Lh(u,de,Ue),ce=sc(u)),$){Xe=ps($)?Gm($,Wm):Wm,H=tc("scroller-start",l,W,x,Xe,0),Le=tc("scroller-end",l,W,x,Xe,0,H),he=H["offset"+x.op.d2];var ae=Un(Rr(W,"content")||W);Ee=this.markerStart=tc("start",l,ae,x,Xe,he,0,E),De=this.markerEnd=tc("end",l,ae,x,Xe,he,0,E),E&&(se=Be.quickSetter([Ee,De],x.a,Xt)),!F&&!(Di.length&&Rr(W,"fixedMarkers")===!0)&&(Zy(L?bt:W),Be.set([H,Le],{force3D:!0}),_t=Be.quickSetter(H,x.a,Xt),ke=Be.quickSetter(Le,x.a,Xt))}if(E){var O=E.vars.onUpdate,ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),O&&O.apply(E,ee||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(J,ye){if(!ye)return P.kill(!0);var pe=J!==!1||!P.enabled,Pe=un;pe!==P.isReverted&&(pe&&(j=Math.max(fe(),P.scroll.rec||0),te=P.progress,Se=i&&i.progress()),Ee&&[Ee,De,H,Le].forEach(function(We){return We.style.display=pe?"none":"block"}),pe&&(un=P,P.update(pe)),u&&(!T||!P.isActive)&&(pe?eS(u,de,M):Lh(u,de,si(u),_e)),pe||P.update(pe),un=Pe,P.isReverted=pe)},P.refresh=function(J,ye,pe,Pe){if(!((un||!P.enabled)&&!ye)){if(u&&J&&ii){Qt(r,"scrollEnd",Ym);return}!Tn&&re&&re(P),un=P,le.tween&&!pe&&(le.tween.kill(),le.tween=0),Te&&Te.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var We=ue(),Oe=q(),Je=E?E.duration():Ni(W,x),ct=C<=.01,dt=0,nt=Pe||0,at=ps(pe)?pe.end:n.end,mt=n.endTrigger||d,w=ps(pe)?pe.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),X=P.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,P),K=d&&Math.max(0,it.indexOf(P))||0,Q=K,Z,we,ze,Ye,Ge,Ve,qe,Qe,Ct,Kt,vt,Rn,xt;for($&&ps(pe)&&(Rn=Be.getProperty(H,x.p),xt=Be.getProperty(Le,x.p));Q--;)Ve=it[Q],Ve.end||Ve.refresh(0,1)||(un=P),qe=Ve.pin,qe&&(qe===d||qe===u||qe===X)&&!Ve.isReverted&&(Kt||(Kt=[]),Kt.unshift(Ve),Ve.revert(!0,!0)),Ve!==it[Q]&&(K--,Q--);for(En(w)&&(w=w(P)),w=Dm(w,"start",P),Ae=jm(w,d,We,x,fe(),Ee,H,P,Oe,ne,F,Je,E,P._startClamp&&"_startClamp")||(u?-.001:0),En(at)&&(at=at(P)),qn(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=(qn(w)?w.split(" ")[0]:"")+at:(dt=ec(at.substr(2),We),at=qn(w)?w:(E?Be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+dt,mt=d)),at=Dm(at,"end",P),ge=Math.max(Ae,jm(at||(mt?"100% 0":Je),mt,We,x,fe()+dt,De,Le,P,Oe,ne,F,Je,E,P._endClamp&&"_endClamp"))||-.001,dt=0,Q=K;Q--;)Ve=it[Q],qe=Ve.pin,qe&&Ve.start-Ve._pinPush<=Ae&&!E&&Ve.end>0&&(Z=Ve.end-(P._startClamp?Math.max(0,Ve.start):Ve.start),(qe===d&&Ve.start-Ve._pinPush<Ae||qe===X)&&isNaN(w)&&(dt+=Z*(1-Ve.progress)),qe===u&&(nt+=Z));if(Ae+=dt,ge+=dt,P._startClamp&&(P._startClamp+=dt),P._endClamp&&!Tn&&(P._endClamp=ge||-.001,ge=Math.min(ge,Ni(W,x))),C=ge-Ae||(Ae-=.01)&&.001,ct&&(te=Be.utils.clamp(0,1,Be.utils.normalize(Ae,ge,j))),P._pinPush=nt,Ee&&dt&&(Z={},Z[x.a]="+="+dt,X&&(Z[x.p]="-="+fe()),Be.set([Ee,De],Z)),u&&!(vh&&P.end>=Ni(W,x)))Z=si(u),Ye=x===Wt,ze=fe(),xe=parseFloat(Ne(x.a))+nt,!Je&&ge>1&&(vt=(L?It.scrollingElement||fi:W).style,vt={style:vt,value:vt["overflow"+x.a.toUpperCase()]},L&&si(bt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(vt.style["overflow"+x.a.toUpperCase()]="scroll")),Lh(u,de,Z),ce=sc(u),we=Zi(u,!0),Qe=F&&Pr(W,Ye?yn:Wt)(),g?(_e=[g+x.os2,C+nt+Xt],_e.t=de,Q=g===Ht?Zl(u,x)+C+nt:0,Q&&(_e.push(x.d,Q+Xt),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Xt)),ho(_e),X&&it.forEach(function(je){je.pin===X&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),F&&fe(j)):(Q=Zl(u,x),Q&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Xt)),F&&(Ge={top:we.top+(Ye?ze-Ae:Qe)+Xt,left:we.left+(Ye?Qe:ze-Ae)+Xt,boxSizing:"border-box",position:"fixed"},Ge[ms]=Ge["max"+co]=Math.ceil(we.width)+Xt,Ge[gs]=Ge["max"+Th]=Math.ceil(we.height)+Xt,Ge[ri]=Ge[ri+La]=Ge[ri+Ra]=Ge[ri+Da]=Ge[ri+Pa]="0",Ge[Ht]=Z[Ht],Ge[Ht+La]=Z[Ht+La],Ge[Ht+Ra]=Z[Ht+Ra],Ge[Ht+Da]=Z[Ht+Da],Ge[Ht+Pa]=Z[Ht+Pa],ie=nS(M,Ge,T),Tn&&fe(0)),i?(Ct=i._initted,dh(1),i.render(i.duration(),!0,!0),be=Ne(x.a)-xe+C+nt,$e=Math.abs(C-be)>1,F&&$e&&ie.splice(ie.length-2,2),i.render(0,!0,!0),Ct||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),dh(0)):be=C,vt&&(vt.value?vt.style["overflow"+x.a.toUpperCase()]=vt.value:vt.style.removeProperty("overflow-"+x.a));else if(d&&fe()&&!E)for(we=d.parentNode;we&&we!==bt;)we._pinOffset&&(Ae-=we._pinOffset,ge-=we._pinOffset),we=we.parentNode;Kt&&Kt.forEach(function(je){return je.revert(!1,!0)}),P.start=Ae,P.end=ge,ve=B=Tn?j:fe(),!E&&!Tn&&(ve<j&&fe(j),P.scroll.rec=0),P.revert(!1,!0),V=hn(),Me&&(D=-1,Me.restart(!0)),un=0,i&&A&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se||0,!0).render(i.time(),!0,!0),(ct||te!==P.progress||E||_)&&(i&&!A&&i.totalProgress(E&&Ae<-.001&&!te?Be.utils.normalize(Ae,ge,0):te,!0),P.progress=ct||(ve-Ae)/C===te?0:te),u&&g&&(de._pinOffset=Math.round(P.progress*be)),Te&&Te.invalidate(),isNaN(Rn)||(Rn-=Be.getProperty(H,x.p),xt-=Be.getProperty(Le,x.p),ac(H,x,Rn),ac(Ee,x,Rn-(Pe||0)),ac(Le,x,xt),ac(De,x,xt-(Pe||0))),ct&&!Tn&&P.update(),h&&!Tn&&!st&&(st=!0,h(P),st=!1)}},P.getVelocity=function(){return(fe()-B)/(hn()-Ta)*1e3||0},P.endAnimation=function(){Ca(P.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?A||Ca(i,P.direction<0,1):Ca(i,i.reversed()))},P.labelToScroll=function(J){return i&&i.labels&&(Ae||P.refresh()||Ae)+i.labels[J]/i.duration()*C||0},P.getTrailing=function(J){var ye=it.indexOf(P),pe=P.direction>0?it.slice(0,ye).reverse():it.slice(ye+1);return(qn(J)?pe.filter(function(Pe){return Pe.vars.preventOverlaps===J}):pe).filter(function(Pe){return P.direction>0?Pe.end<=Ae:Pe.start>=ge})},P.update=function(J,ye,pe){if(!(E&&!pe&&!J)){var Pe=Tn===!0?j:P.scroll(),We=J?0:(Pe-Ae)/C,Oe=We<0?0:We>1?1:We||0,Je=P.progress,ct,dt,nt,at,mt,w,X,K;if(ye&&(B=ve,ve=E?fe():Pe,y&&(Ke=Fe,Fe=i&&!A?i.totalProgress():Oe)),p&&u&&!un&&!ql&&ii&&(!Oe&&Ae<Pe+(Pe-B)/(hn()-Ta)*p?Oe=1e-4:Oe===1&&ge>Pe+(Pe-B)/(hn()-Ta)*p&&(Oe=.9999)),Oe!==Je&&P.enabled){if(ct=P.isActive=!!Oe&&Oe<1,dt=!!Je&&Je<1,w=ct!==dt,mt=w||!!Oe!=!!Je,P.direction=Oe>Je?1:-1,P.progress=Oe,mt&&!un&&(nt=Oe&&!Je?0:Oe===1?1:Je===1?2:3,A&&(at=!w&&G[nt+1]!=="none"&&G[nt+1]||G[nt],K=i&&(at==="complete"||at==="reset"||at in i))),I&&(w||K)&&(K||f||!i)&&(En(I)?I(P):P.getTrailing(I).forEach(function(ze){return ze.endAnimation()})),A||(Te&&!un&&!ql?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Oe,i._tTime/i._tDur):(Te.vars.totalProgress=Oe,Te.invalidate().restart())):i&&i.totalProgress(Oe,!!(un&&(V||J)))),u){if(J&&g&&(de.style[g+x.os2]=Ze),!F)He(wa(xe+be*Oe));else if(mt){if(X=!J&&Oe>Je&&ge+1>Pe&&Pe+1>=Ni(W,x),T)if(!J&&(ct||X)){var Q=Zi(u,!0),Z=Pe-Ae;Qm(u,bt,Q.top+(x===Wt?Z:0)+Xt,Q.left+(x===Wt?0:Z)+Xt)}else Qm(u,de);ho(ct||X?ie:ce),$e&&Oe<1&&ct||He(xe+(Oe===1&&!X?be:0))}}y&&!le.tween&&!un&&!ql&&Me.restart(!0),a&&(w||v&&Oe&&(Oe<1||!xh))&&Ma(a.targets).forEach(function(ze){return ze.classList[ct||v?"add":"remove"](a.className)}),o&&!A&&!J&&o(P),mt&&!un?(A&&(K&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),o&&o(P)),(w||!xh)&&(c&&w&&Sh(P,c),z[nt]&&Sh(P,z[nt]),v&&(Oe===1?P.kill(!1,1):z[nt]=0),w||(nt=Oe===1?1:3,z[nt]&&Sh(P,z[nt]))),R&&!ct&&Math.abs(P.getVelocity())>(Aa(R)?R:2500)&&(Ca(P.callbackAnimation),Te?Te.progress(1):Ca(i,at==="reverse"?1:!Oe,1))):A&&o&&!un&&o(P)}if(ke){var we=E?Pe/E.duration()*(E._caScrollDist||0):Pe;_t(we+(H._isFlipped?1:0)),ke(we)}se&&se(-Pe/E.duration()*(E._caScrollDist||0))}},P.enable=function(J,ye){P.enabled||(P.enabled=!0,Qt(W,"resize",Na),L||Qt(W,"scroll",uo),re&&Qt(r,"refreshInit",re),J!==!1&&(P.progress=te=0,ve=B=D=fe()),ye!==!1&&P.refresh())},P.getTween=function(J){return J&&le?le.tween:Te},P.setPositions=function(J,ye,pe,Pe){if(E){var We=E.scrollTrigger,Oe=E.duration(),Je=We.end-We.start;J=We.start+Je*J/Oe,ye=We.start+Je*ye/Oe}P.refresh(!1,!1,{start:Im(J,pe&&!!P._startClamp),end:Im(ye,pe&&!!P._endClamp)},Pe),P.update()},P.adjustPinSpacing=function(J){if(_e&&J){var ye=_e.indexOf(x.d)+1;_e[ye]=parseFloat(_e[ye])+J+Xt,_e[1]=parseFloat(_e[1])+J+Xt,ho(_e)}},P.disable=function(J,ye){if(P.enabled&&(J!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ye||Te&&Te.pause(),j=0,me&&(me.uncache=1),re&&en(r,"refreshInit",re),Me&&(Me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!L)){for(var pe=it.length;pe--;)if(it[pe].scroller===W&&it[pe]!==P)return;en(W,"resize",Na),L||en(W,"scroll",uo)}},P.kill=function(J,ye){P.disable(J,ye),Te&&!ye&&Te.kill(),l&&delete wh[l];var pe=it.indexOf(P);pe>=0&&it.splice(pe,1),pe===Sn&&ic>0&&Sn--,pe=0,it.forEach(function(Pe){return Pe.scroller===P.scroller&&(pe=1)}),pe||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,J&&i.revert({kill:!1}),ye||i.kill()),Ee&&[Ee,De,H,Le].forEach(function(Pe){return Pe.parentNode&&Pe.parentNode.removeChild(Pe)}),Ua===P&&(Ua=0),u&&(me&&(me.uncache=1),pe=0,it.forEach(function(Pe){return Pe.pin===u&&pe++}),pe||(me.spacer=0)),n.onKill&&n.onKill(P)},it.push(P),P.enable(!1,!1),N&&N(P),i&&i.add&&!C){var oe=P.update;P.update=function(){P.update=oe,Ae||ge||P.refresh()},Be.delayedCall(.01,P.update),C=.01,Ae=ge=0}else P.refresh();u&&Qy()},r.register=function(n){return so||(Be=n||Fm(),Om()&&window.document&&r.enable(),so=ba),so},r.defaults=function(n){if(n)for(var i in n)jl[i]=n[i];return jl},r.disable=function(n,i){ba=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),en(ht,"wheel",uo),en(It,"scroll",uo),clearInterval(Wl),en(It,"touchcancel",Ii),en(bt,"touchstart",Ii),Kl(en,It,"pointerdown,touchstart,mousedown",Nm),Kl(en,It,"pointerup,touchend,mouseup",Um),Vl.kill(),$l(en);for(var s=0;s<lt.length;s+=3)Jl(en,lt[s],lt[s+1]),Jl(en,lt[s],lt[s+2])},r.enable=function(){if(ht=window,It=document,fi=It.documentElement,bt=It.body,Be&&(Ma=Be.utils.toArray,Ea=Be.utils.clamp,mh=Be.core.context||Ii,dh=Be.core.suppressOverwrites||Ii,gh=ht.history.scrollRestoration||"auto",Rh=ht.pageYOffset,Be.core.globals("ScrollTrigger",r),bt)){ba=1,ao=document.createElement("div"),ao.style.height="100vh",ao.style.position="absolute",Km(),Yy(),Ft.register(Be),r.isTouch=Ft.isTouch,Lr=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=Ft.isTouch===1,Qt(ht,"wheel",uo),bm=[ht,It,fi,bt],Be.matchMedia?(r.matchMedia=function(l){var c=Be.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Be.addEventListener("matchMediaInit",function(){return Ch()}),Be.addEventListener("matchMediaRevert",function(){return qm()}),Be.addEventListener("matchMedia",function(){ys(0,1),vs("matchMedia")}),Be.matchMedia("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),Qt(It,"scroll",uo);var n=bt.style,i=n.borderTopStyle,s=Be.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zi(bt),Wt.m=Math.round(o.top+Wt.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Wl=setInterval(Xm,250),Be.delayedCall(.5,function(){return ql=0}),Qt(It,"touchcancel",Ii),Qt(bt,"touchstart",Ii),Kl(Qt,It,"pointerdown,touchstart,mousedown",Nm),Kl(Qt,It,"pointerup,touchend,mouseup",Um),fh=Be.utils.checkPrefix("transform"),rc.push(fh),so=hn(),Vl=Be.delayedCall(.2,ys).pause(),oo=[It,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;It.hidden?(wm=l,Am=c):(wm!==l||Am!==c)&&Na()},It,"DOMContentLoaded",ys,ht,"load",ys,ht,"resize",Na],$l(Qt),it.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)Jl(en,lt[a],lt[a+1]),Jl(en,lt[a],lt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(xh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wl)||(Wl=i)&&setInterval(Xm,i),"ignoreMobileResize"in n&&(ph=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($l(en)||$l(Qt,n.autoRefreshEvents||"none"),Rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),o=lt.indexOf(s),a=ds(s);~o&&lt.splice(o,a?6:2),i&&(a?Di.unshift(ht,i,bt,i,fi,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Un(n):n).getBoundingClientRect(),a=o[s?ms:gs]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[s?ms:gs],l=i==null?a/2:i in Ql?Ql[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(s){return s()})}},r}();rt.version="3.12.5",rt.saveStyles=function(r){return r?Ma(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),mh())}}):$n},rt.revert=function(r,e){return Ch(!r,e)},rt.create=function(r,e){return new rt(r,e)},rt.refresh=function(r){return r?Na():(so||rt.register())&&ys(!0)},rt.update=function(r){return++lt.cache&&Ki(r===!0?2:0)},rt.clearScrollMemory=$m,rt.maxScroll=function(r,e){return Ni(r,e?yn:Wt)},rt.getScrollFunc=function(r,e){return Pr(Un(r),e?yn:Wt)},rt.getById=function(r){return wh[r]},rt.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})},rt.isScrolling=function(){return!!ii},rt.snapDirectional=bh,rt.addEventListener=function(r,e){var t=_s[r]||(_s[r]=[]);~t.indexOf(e)||t.push(e)},rt.removeEventListener=function(r,e){var t=_s[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Be.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),Qt(rt,"refresh",function(){return s=e.batchMax()})),Ma(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(rt.create(c))}),t};var ng=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Dh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===fi&&r(bt,t)},lc={auto:1,scroll:1},rS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Be.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(lc[(l=si(s)).overflowY]||lc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ds(s)&&(lc[(l=si(s)).overflowY]||lc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ig=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&rS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(It,Ft.eventTypes[0],sg,!1,!0)},onDisable:function(){return en(It,Ft.eventTypes[0],sg,!0)}})},sS=/(input|label|select|textarea)/i,rg,sg=function(e){var t=sS.test(e.target.tagName);(t||rg)&&(e._gsapAllow=!0,rg=t)},oS=function(e){ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Un(e.target)||fi,h=Be.core.globals().ScrollSmoother,f=h&&h.get(),d=Lr&&(e.content&&Un(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Pr(c,Wt),g=Pr(c,yn),_=1,p=(Ft.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,S=En(i)?function(){return i(a)}:function(){return i||2.8},v,y,T=ig(c,e.type,!0,s),b=function(){return y=!1},E=Ii,R=Ii,I=function(){l=Ni(c,Wt),R=Ea(Lr?1:0,l),n&&(E=Ea(0,Ni(c,yn))),v=xs},x=function(){d._gsap.y=wa(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},A=function(){if(y){requestAnimationFrame(b);var $=wa(a.deltaY/2),ne=R(u.v-$);if(d&&ne!==u.v+u.offset){u.offset=ne-u.v;var P=wa((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=lt.cache,Ki()}return!0}u.offset&&x(),y=!0},W,k,L,F,z=function(){I(),W.isActive()&&W.vars.scrollY>l&&(u()>l?W.progress(1)&&u(l):W.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return Lr&&G.type==="touchmove"&&A()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){y=!1;var G=_;_=wa((ht.visualViewport&&ht.visualViewport.scale||1)/p),W.pause(),G!==_&&Dh(c,_>1.01?!0:n?!1:"x"),k=g(),L=u(),I(),v=xs},e.onRelease=e.onGestureStart=function(G,$){if(u.offset&&x(),!$)F.restart(!0);else{lt.cache++;var ne=S(),P,re;n&&(P=g(),re=P+ne*.05*-G.velocityX/.227,ne*=ng(g,P,re,Ni(c,yn)),W.vars.scrollX=E(re)),P=u(),re=P+ne*.05*-G.velocityY/.227,ne*=ng(u,P,re,Ni(c,Wt)),W.vars.scrollY=R(re),W.invalidate().duration(ne).play(.01),(Lr&&W.vars.scrollY>=l||P>=l-1)&&Be.to({},{onUpdate:z,duration:ne})}o&&o(G)},e.onWheel=function(){W._ts&&W.pause(),hn()-m>1e3&&(v=0,m=hn())},e.onChange=function(G,$,ne,P,re){if(xs!==v&&I(),$&&n&&g(E(P[2]===$?k+(G.startX-G.x):g()+$-P[1])),ne){u.offset&&x();var ue=re[2]===ne,q=ue?L+G.startY-G.y:u()+ne-re[1],D=R(q);ue&&q!==D&&(L+=D-q),u(D)}(ne||$)&&Ki()},e.onEnable=function(){Dh(c,n?!1:"x"),rt.addEventListener("refresh",z),Qt(ht,"resize",z),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Dh(c,!0),en(ht,"resize",z),rt.removeEventListener("refresh",z),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ft(e),a.iOS=Lr,Lr&&!u()&&u(1),Lr&&Be.ticker.add(Ii),F=a._dc,W=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:eg(u,u(),function(){return W.pause()})},onUpdate:Ki,onComplete:F.vars.onComplete}),a};rt.sort=function(r){return it.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},rt.observe=function(r){return new Ft(r)},rt.normalizeScroll=function(r){if(typeof r=="undefined")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Ft?r:oS(r);return Mn&&Mn.target===e.target&&Mn.kill(),ds(e.target)&&(Mn=e),e},rt.core={_getVelocityProp:hh,_inputObserver:ig,_scrollers:lt,_proxies:Di,bridge:{ss:function(){ii||vs("scrollStart"),ii=hn()},ref:function(){return un}}},Fm()&&Be.registerPlugin(rt);/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ih="162",aS=0,og=1,lS=2,ag=1,cS=2,Ji=3,Dr=0,On=1,ji=2,Qi=0,fo=1,Nh=2,lg=3,cg=4,uS=5,Ss=100,hS=101,fS=102,ug=103,hg=104,dS=200,pS=201,mS=202,gS=203,Uh=204,Oh=205,_S=206,vS=207,xS=208,yS=209,SS=210,MS=211,ES=212,TS=213,bS=214,wS=0,AS=1,CS=2,cc=3,RS=4,PS=5,LS=6,DS=7,fg=0,IS=1,NS=2,er=0,Fh=1,Bh=2,kh=3,zh=4,US=5,dg=6,pg=7,mg=300,po=301,mo=302,Hh=303,Gh=304,uc=306,Vh=1e3,di=1001,Wh=1002,bn=1003,gg=1004,Oa=1005,Fn=1006,Xh=1007,Ms=1008,Ir=1009,OS=1010,FS=1011,Yh=1012,_g=1013,Nr=1014,tr=1015,nr=1016,vg=1017,xg=1018,Es=1020,BS=1021,pi=1023,kS=1024,zS=1025,Ts=1026,go=1027,HS=1028,yg=1029,GS=1030,Sg=1031,Mg=1033,qh=33776,$h=33777,Zh=33778,Kh=33779,Eg=35840,Tg=35841,bg=35842,wg=35843,Ag=36196,Cg=37492,Rg=37496,Pg=37808,Lg=37809,Dg=37810,Ig=37811,Ng=37812,Ug=37813,Og=37814,Fg=37815,Bg=37816,kg=37817,zg=37818,Hg=37819,Gg=37820,Vg=37821,Jh=36492,Wg=36494,Xg=36495,VS=36283,Yg=36284,qg=36285,$g=36286,WS=3200,XS=3201,YS=0,qS=1,Ur="",Ui="srgb",Or="srgb-linear",jh="display-p3",hc="display-p3-linear",fc="linear",Et="srgb",dc="rec709",pc="p3",_o=7680,Zg=519,$S=512,ZS=513,KS=514,Kg=515,JS=516,jS=517,QS=518,eM=519,Jg=35044,jg="300 es",Qh=1035,ir=2e3,mc=2001;class vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,ef=180/Math.PI;function xo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function tM(r,e){return(r%e+e)%e}function tf(r,e,t){return(1-t)*r+t*e}function Qg(r){return(r&r-1)===0&&r!==0}function nf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],v=i[4],y=i[7],T=i[2],b=i[5],E=i[8];return s[0]=o*_+a*S+l*T,s[3]=o*p+a*v+l*b,s[6]=o*m+a*y+l*E,s[1]=c*_+h*S+f*T,s[4]=c*p+h*v+f*b,s[7]=c*m+h*y+f*E,s[2]=d*_+u*S+g*T,s[5]=d*p+u*v+g*b,s[8]=d*m+u*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new et;function e_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nM(){const r=_c("canvas");return r.style.display="block",r}const t_={};function iM(r){r in t_||(t_[r]=!0,console.warn(r))}const n_=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),i_=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vc={[Or]:{transfer:fc,primaries:dc,toReference:r=>r,fromReference:r=>r},[Ui]:{transfer:Et,primaries:dc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[hc]:{transfer:fc,primaries:pc,toReference:r=>r.applyMatrix3(i_),fromReference:r=>r.applyMatrix3(n_)},[jh]:{transfer:Et,primaries:pc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(i_),fromReference:r=>r.applyMatrix3(n_).convertLinearToSRGB()}},rM=new Set([Or,hc]),gt={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!rM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=vc[e].toReference,i=vc[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return vc[r].primaries},getTransfer:function(r){return r===Ur?fc:vc[r].transfer}};function yo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let So;class r_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{So===void 0&&(So=_c("canvas")),So.width=e.width,So.height=e.height;const n=So.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=So}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yo(t[n]/255)*255):t[n]=yo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(of(i[o].image)):s.push(of(i[o]))}else s=of(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function of(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?r_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class kn extends vo{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,n=di,i=di,s=Fn,o=Ms,a=pi,l=Ir,c=kn.DEFAULT_ANISOTROPY,h=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=xo(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}kn.DEFAULT_IMAGE=null,kn.DEFAULT_MAPPING=mg,kn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,n=0,i=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(u+1)/2,T=(m+1)/2,b=(h+d)/4,E=(f+_)/4,R=(g+p)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=E/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=R/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=R/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aM extends vo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new kn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends aM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class o_ extends kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lM extends kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a;const m=l*d+c*u+h*g+f*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*S);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const y=a*S;if(l=l*p+d*y,c=c*p+u*y,h=h*p+g*y,f=f*p+_*y,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new Y,a_=new Ba;class ka{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xc.copy(n.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),yc.subVectors(this.max,za),Mo.subVectors(e.a,za),Eo.subVectors(e.b,za),To.subVectors(e.c,za),Fr.subVectors(Eo,Mo),Br.subVectors(To,Eo),bs.subVectors(Mo,To);let t=[0,-Fr.z,Fr.y,0,-Br.z,Br.y,0,-bs.z,bs.y,Fr.z,0,-Fr.x,Br.z,0,-Br.x,bs.z,0,-bs.x,-Fr.y,Fr.x,0,-Br.y,Br.x,0,-bs.y,bs.x,0];return!lf(t,Mo,Eo,To,yc)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Mo,Eo,To,yc))?!1:(Sc.crossVectors(Fr,Br),t=[Sc.x,Sc.y,Sc.z],lf(t,Mo,Eo,To,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],gi=new Y,xc=new ka,Mo=new Y,Eo=new Y,To=new Y,Fr=new Y,Br=new Y,bs=new Y,za=new Y,yc=new Y,Sc=new Y,ws=new Y;function lf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ws.fromArray(r,s);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const cM=new ka,Ha=new Y,cf=new Y;class Mc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(cf)),this.expandByPoint(Ha.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new Y,uf=new Y,Ec=new Y,kr=new Y,hf=new Y,Tc=new Y,ff=new Y;class l_{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uf.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(uf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ec),a=kr.dot(this.direction),l=-kr.dot(Ec),c=kr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(uf).addScaledVector(Ec,d),u}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){hf.subVectors(t,e),Tc.subVectors(n,e),ff.crossVectors(hf,Tc);let o=this.direction.dot(ff),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const l=a*this.direction.dot(Tc.crossVectors(kr,Tc));if(l<0)return null;const c=a*this.direction.dot(hf.cross(kr));if(c<0||l+c>o)return null;const h=-a*kr.dot(ff);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bo.setFromMatrixColumn(e,0).length(),s=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,hM)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),zr.crossVectors(n,Zn),zr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),zr.crossVectors(n,Zn)),zr.normalize(),bc.crossVectors(Zn,zr),i[0]=zr.x,i[4]=bc.x,i[8]=Zn.x,i[1]=zr.y,i[5]=bc.y,i[9]=Zn.y,i[2]=zr.z,i[6]=bc.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],y=n[11],T=n[15],b=i[0],E=i[4],R=i[8],I=i[12],x=i[1],A=i[5],W=i[9],k=i[13],L=i[2],F=i[6],z=i[10],G=i[14],$=i[3],ne=i[7],P=i[11],re=i[15];return s[0]=o*b+a*x+l*L+c*$,s[4]=o*E+a*A+l*F+c*ne,s[8]=o*R+a*W+l*z+c*P,s[12]=o*I+a*k+l*G+c*re,s[1]=h*b+f*x+d*L+u*$,s[5]=h*E+f*A+d*F+u*ne,s[9]=h*R+f*W+d*z+u*P,s[13]=h*I+f*k+d*G+u*re,s[2]=g*b+_*x+p*L+m*$,s[6]=g*E+_*A+p*F+m*ne,s[10]=g*R+_*W+p*z+m*P,s[14]=g*I+_*k+p*G+m*re,s[3]=S*b+v*x+y*L+T*$,s[7]=S*E+v*A+y*F+T*ne,s[11]=S*R+v*W+y*z+T*P,s[15]=S*I+v*k+y*G+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+p*(+t*c*f-t*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,v=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,y=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,T=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,b=t*S+n*v+i*y+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=S*E,e[1]=(_*d*s-f*p*s-_*i*u+n*p*u+f*i*m-n*d*m)*E,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*E,e[4]=v*E,e[5]=(h*p*s-g*d*s+g*i*u-t*p*u-h*i*m+t*d*m)*E,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*u+t*l*u)*E,e[8]=y*E,e[9]=(g*f*s-h*_*s-g*n*u+t*_*u+h*n*m-t*f*m)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*u-t*a*u)*E,e[12]=T*E,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*p+t*f*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,g=s*f,_=o*h,p=o*f,m=a*f,S=l*c,v=l*h,y=l*f,T=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*T,i[1]=(u+y)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(u-y)*b,i[5]=(1-(d+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(g+v)*E,i[9]=(p-S)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=bo.set(i[0],i[1],i[2]).length();const o=bo.set(i[4],i[5],i[6]).length(),a=bo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);const c=1/s,h=1/o,f=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ir){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===ir)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mc)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ir){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-s),d=(t+e)*c,u=(n+i)*h;let g,_;if(a===ir)g=(o+s)*f,_=-2*f;else if(a===mc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bo=new Y,_i=new Bt,uM=new Y(0,0,0),hM=new Y(1,1,1),zr=new Y,bc=new Y,Zn=new Y,c_=new Bt,u_=new Ba;class or{constructor(e=0,t=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class h_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fM=0;const f_=new Y,wo=new Ba,ar=new Bt,wc=new Y,Ga=new Y,dM=new Y,pM=new Ba,d_=new Y(1,0,0),p_=new Y(0,1,0),m_=new Y(0,0,1),mM={type:"added"},gM={type:"removed"},df={type:"childadded",child:null},pf={type:"childremoved",child:null};class zn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new Y,t=new or,n=new Ba,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new et}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(p_,e)}rotateZ(e){return this.rotateOnAxis(m_,e)}translateOnAxis(e,t){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(p_,e)}translateZ(e){return this.translateOnAxis(m_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wc.copy(e):wc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Ga,wc,this.up):ar.lookAt(wc,Ga,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(ar),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mM),df.child=e,this.dispatchEvent(df),df.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gM),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zn.DEFAULT_UP=new Y(0,1,0),zn.DEFAULT_MATRIX_AUTO_UPDATE=!0,zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new Y,lr=new Y,mf=new Y,cr=new Y,Ao=new Y,Co=new Y,g_=new Y,gf=new Y,_f=new Y,vf=new Y;class xi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),lr.subVectors(n,t),mf.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(lr),l=vi.dot(mf),c=lr.dot(lr),h=lr.dot(mf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(o,cr.y),l.addScaledVector(a,cr.z),l)}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),lr.subVectors(e,t),vi.cross(lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),vi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ao.subVectors(i,n),Co.subVectors(s,n),gf.subVectors(e,n);const l=Ao.dot(gf),c=Co.dot(gf);if(l<=0&&c<=0)return t.copy(n);_f.subVectors(e,i);const h=Ao.dot(_f),f=Co.dot(_f);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ao,o);vf.subVectors(e,s);const u=Ao.dot(vf),g=Co.dot(vf);if(g>=0&&u<=g)return t.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Co,a);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return g_.subVectors(s,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(g_,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function xf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=tM(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ui){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const n=__[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return gt.fromWorkingColorSpace(pn.copy(this),e),Math.round(dn(pn.r*255,0,255))*65536+Math.round(dn(pn.g*255,0,255))*256+Math.round(dn(pn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ui){gt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Ac);const n=tf(Hr.h,Ac.h,t),i=tf(Hr.s,Ac.s,t),s=tf(Hr.l,Ac.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new pt;pt.NAMES=__;let _M=0;class Va extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=fo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uh&&(n.blendSrc=this.blendSrc),this.blendDst!==Oh&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yf extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Y,Cc=new Ie;class Oi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return iM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),e}}class v_ extends Oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class x_ extends Oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vM=0;const oi=new Bt,Sf=new zn,Ro=new Y,Kn=new ka,Wa=new ka,tn=new Y;class Jn extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?x_:v_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Kn.min,Wa.min),Kn.expandByPoint(tn),tn.addVectors(Kn.max,Wa.max),Kn.expandByPoint(tn)):(Kn.expandByPoint(Wa.min),Kn.expandByPoint(Wa.max))}Kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),tn.add(Ro)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new Y,l[R]=new Y;const c=new Y,h=new Y,f=new Y,d=new Ie,u=new Ie,g=new Ie,_=new Y,p=new Y;function m(R,I,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),u.fromBufferAttribute(s,I),g.fromBufferAttribute(s,x),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const A=1/(u.x*g.y-g.x*u.y);!isFinite(A)||(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(A),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(A),a[R].add(_),a[I].add(_),a[x].add(_),l[R].add(p),l[I].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,I=S.length;R<I;++R){const x=S[R],A=x.start,W=x.count;for(let k=A,L=A+W;k<L;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new Y,y=new Y,T=new Y,b=new Y;function E(R){T.fromBufferAttribute(i,R),b.copy(T);const I=a[R];v.copy(I),v.sub(T.multiplyScalar(T.dot(I))).normalize(),y.crossVectors(b,I);const A=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,A)}for(let R=0,I=S.length;R<I;++R){const x=S[R],A=x.start,W=x.count;for(let k=A,L=A+W;k<L;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new Oi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new Bt,As=new l_,Rc=new Mc,S_=new Y,Po=new Y,Lo=new Y,Do=new Y,Mf=new Y,Pc=new Y,Lc=new Ie,Dc=new Ie,Ic=new Ie,M_=new Y,E_=new Y,T_=new Y,Nc=new Y,Uc=new Y;class Fi extends zn{constructor(e=new Jn,t=new yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Mf.fromBufferAttribute(f,e),o?Pc.addScaledVector(Mf,h):Pc.addScaledVector(Mf.sub(t),h))}t.add(Pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Rc.containsPoint(As.origin)===!1&&(As.intersectSphere(Rc,S_)===null||As.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(y_.copy(s).invert(),As.copy(e.ray).applyMatrix4(y_),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=v;y<T;y+=3){const b=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=Oc(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Oc(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=v;y<T;y+=3){const b=y,E=y+1,R=y+2;i=Oc(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,y=p+2;i=Oc(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function xM(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Dr,a),l===null)return null;Uc.copy(a),Uc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Uc);return c<t.near||c>t.far?null:{distance:c,point:Uc.clone(),object:r}}function Oc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Po),r.getVertexPosition(l,Lo),r.getVertexPosition(c,Do);const h=xM(r,e,t,n,Po,Lo,Do,Nc);if(h){i&&(Lc.fromBufferAttribute(i,a),Dc.fromBufferAttribute(i,l),Ic.fromBufferAttribute(i,c),h.uv=xi.getInterpolation(Nc,Po,Lo,Do,Lc,Dc,Ic,new Ie)),s&&(Lc.fromBufferAttribute(s,a),Dc.fromBufferAttribute(s,l),Ic.fromBufferAttribute(s,c),h.uv1=xi.getInterpolation(Nc,Po,Lo,Do,Lc,Dc,Ic,new Ie)),o&&(M_.fromBufferAttribute(o,a),E_.fromBufferAttribute(o,l),T_.fromBufferAttribute(o,c),h.normal=xi.getInterpolation(Nc,Po,Lo,Do,M_,E_,T_,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};xi.getNormal(Po,Lo,Do,f.normal),h.face=f}return h}class Xa extends Jn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(f,2));function g(_,p,m,S,v,y,T,b,E,R,I){const x=y/E,A=T/R,W=y/2,k=T/2,L=b/2,F=E+1,z=R+1;let G=0,$=0;const ne=new Y;for(let P=0;P<z;P++){const re=P*A-k;for(let ue=0;ue<F;ue++){const q=ue*x-W;ne[_]=q*S,ne[p]=re*v,ne[m]=L,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(ue/E),f.push(1-P/R),G+=1}}for(let P=0;P<R;P++)for(let re=0;re<E;re++){const ue=d+re+F*P,q=d+re+F*(P+1),D=d+(re+1)+F*(P+1),V=d+(re+1)+F*P;l.push(ue,q,V),l.push(q,D,V),$+=6}a.addGroup(u,$,I),u+=$,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const n=Io(r[t]);for(const i in n)e[i]=n[i]}return e}function yM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function b_(r){return r.getRenderTarget()===null?r.outputColorSpace:gt.workingColorSpace}const Ya={clone:Io,merge:wn};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class w_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new Y,A_=new Ie,C_=new Ie;class ai extends w_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,A_,C_),t.subVectors(C_,A_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Uo=1;class EM extends zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ai(No,Uo,e,t);i.layers=this.layers,this.add(i);const s=new ai(No,Uo,e,t);s.layers=this.layers,this.add(s);const o=new ai(No,Uo,e,t);o.layers=this.layers,this.add(o);const a=new ai(No,Uo,e,t);a.layers=this.layers,this.add(a);const l=new ai(No,Uo,e,t);l.layers=this.layers,this.add(l);const c=new ai(No,Uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class R_ extends kn{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TM extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new R_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xa(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Qi});s.uniforms.tEquirect.value=t;const o=new Fi(i,s),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Fn),new EM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ef=new Y,bM=new Y,wM=new et;class Cs{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ef.subVectors(n,t).cross(bM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ef),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wM.getNormalMatrix(e),i=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Mc,Fc=new Y;class P_{constructor(e=new Cs,t=new Cs,n=new Cs,i=new Cs,s=new Cs,o=new Cs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-u,y-m).normalize(),n[1].setComponents(l+s,d+c,p+u,y+m).normalize(),n[2].setComponents(l+o,d+h,p+g,y+S).normalize(),n[3].setComponents(l-o,d-h,p-g,y-S).normalize(),n[4].setComponents(l-a,d-f,p-_,y-v).normalize(),t===ir)n[5].setComponents(l+a,d+f,p+_,y+v).normalize();else if(t===mc)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fc.x=i.normal.x>0?e.max.x:e.min.x,Fc.y=i.normal.y>0?e.max.y:e.min.y,Fc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function L_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function AM(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,d=c.usage,u=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function s(c,h,f){const d=h.array,u=h._updateRange,g=h.updateRanges;if(r.bindBuffer(f,c),u.count===-1&&g.length===0&&r.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class Bc extends Jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),b=S+1+c*m;u.push(v,y,b),u.push(y,T,b)}this.setIndex(u),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
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
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
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
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JM=`#define PI 3.141592653589793
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
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QM=`vec3 transformedNormal = objectNormal;
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
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`
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
}`,oE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
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
}`,gE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
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
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
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
#endif`,AE=`struct PhysicalMaterial {
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
}`,CE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
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
#endif`,WE=`#ifdef USE_MORPHTARGETS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dT=`float getShadowMask() {
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
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:CM,alphahash_pars_fragment:RM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:IM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:kM,bsdfs:zM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:YM,color_fragment:qM,color_pars_fragment:$M,color_pars_vertex:ZM,color_vertex:KM,common:JM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:QM,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:rE,colorspace_pars_fragment:sE,envmap_fragment:oE,envmap_common_pars_fragment:aE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:SE,envmap_vertex:uE,fog_vertex:hE,fog_pars_vertex:fE,fog_fragment:dE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_fragment:gE,lightmap_pars_fragment:_E,lights_lambert_fragment:vE,lights_lambert_pars_fragment:xE,lights_pars_begin:yE,lights_toon_fragment:ME,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:bE,lights_physical_fragment:wE,lights_physical_pars_fragment:AE,lights_fragment_begin:CE,lights_fragment_maps:RE,lights_fragment_end:PE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:NE,map_fragment:UE,map_pars_fragment:OE,map_particle_fragment:FE,map_particle_pars_fragment:BE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:zE,morphinstance_vertex:HE,morphcolor_vertex:GE,morphnormal_vertex:VE,morphtarget_pars_vertex:WE,morphtarget_vertex:XE,normal_fragment_begin:YE,normal_fragment_maps:qE,normal_pars_fragment:$E,normal_pars_vertex:ZE,normal_vertex:KE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:oT,dithering_pars_fragment:aT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:hT,shadowmap_vertex:fT,shadowmask_pars_fragment:dT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:yT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:bT,uv_vertex:wT,worldpos_vertex:AT,background_vert:`varying vec2 vUv;
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
}`},Ce={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Bi={basic:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:wn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:wn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:wn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:wn([Ce.lights,Ce.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Bi.physical={uniforms:wn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const kc={r:0,b:0,g:0},Ps=new or,CT=new Bt;function RT(r,e,t,n,i,s,o){const a=new pt(0);let l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===uc)?(h===void 0&&(h=new Fi(new Xa(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Io(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ps.copy(m.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Ps)),h.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,(f!==v||d!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fi(new Bc(2,2),new An({name:"BackgroundMaterial",uniforms:Io(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(kc,b_(r)),n.buffers.color.setClear(kc.r,kc.g,kc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function PT(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function f(L,F,z,G,$){let ne=!1;if(o){const P=_(G,z,F);c!==P&&(c=P,u(c.object)),ne=m(L,G,z,$),ne&&S(L,G,z,$)}else{const P=F.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==P)&&(c.geometry=G.id,c.program=z.id,c.wireframe=P,ne=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,R(L,F,z,G),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,z){const G=z.wireframe===!0;let $=a[L.id];$===void 0&&($={},a[L.id]=$);let ne=$[F.id];ne===void 0&&(ne={},$[F.id]=ne);let P=ne[G];return P===void 0&&(P=p(d()),ne[G]=P),P}function p(L){const F=[],z=[],G=[];for(let $=0;$<i;$++)F[$]=0,z[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:G,object:L,attributes:{},index:null}}function m(L,F,z,G){const $=c.attributes,ne=F.attributes;let P=0;const re=z.getAttributes();for(const ue in re)if(re[ue].location>=0){const D=$[ue];let V=ne[ue];if(V===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;P++}return c.attributesNum!==P||c.index!==G}function S(L,F,z,G){const $={},ne=F.attributes;let P=0;const re=z.getAttributes();for(const ue in re)if(re[ue].location>=0){let D=ne[ue];D===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),$[ue]=V,P++}c.attributes=$,c.attributesNum=P,c.index=G}function v(){const L=c.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function y(L){T(L,0)}function T(L,F){const z=c.newAttributes,G=c.enabledAttributes,$=c.attributeDivisors;z[L]=1,G[L]===0&&(r.enableVertexAttribArray(L),G[L]=1),$[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),$[L]=F)}function b(){const L=c.newAttributes,F=c.enabledAttributes;for(let z=0,G=F.length;z<G;z++)F[z]!==L[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function E(L,F,z,G,$,ne,P){P===!0?r.vertexAttribIPointer(L,F,z,$,ne):r.vertexAttribPointer(L,F,z,G,$,ne)}function R(L,F,z,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=G.attributes,ne=z.getAttributes(),P=F.defaultAttributeValues;for(const re in ne){const ue=ne[re];if(ue.location>=0){let q=$[re];if(q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const D=q.normalized,V=q.itemSize,te=t.get(q);if(te===void 0)continue;const fe=te.buffer,le=te.type,me=te.bytesPerElement,Re=n.isWebGL2===!0&&(le===r.INT||le===r.UNSIGNED_INT||q.gpuType===_g);if(q.isInterleavedBufferAttribute){const ve=q.data,B=ve.stride,Ae=q.offset;if(ve.isInstancedInterleavedBuffer){for(let ge=0;ge<ue.locationSize;ge++)T(ue.location+ge,ve.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<ue.locationSize;ge++)y(ue.location+ge);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ge=0;ge<ue.locationSize;ge++)E(ue.location+ge,V/ue.locationSize,le,D,B*me,(Ae+V/ue.locationSize*ge)*me,Re)}else{if(q.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)T(ue.location+ve,q.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<ue.locationSize;ve++)y(ue.location+ve);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ve=0;ve<ue.locationSize;ve++)E(ue.location+ve,V/ue.locationSize,le,D,V*me,V/ue.locationSize*ve*me,Re)}}else if(P!==void 0){const D=P[re];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ue.location,D);break;case 3:r.vertexAttrib3fv(ue.location,D);break;case 4:r.vertexAttrib4fv(ue.location,D);break;default:r.vertexAttrib1fv(ue.location,D)}}}}b()}function I(){W();for(const L in a){const F=a[L];for(const z in F){const G=F[z];for(const $ in G)g(G[$].object),delete G[$];delete F[z]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const z in F){const G=F[z];for(const $ in G)g(G[$].object),delete G[$];delete F[z]}delete a[L.id]}function A(L){for(const F in a){const z=a[F];if(z[L.id]===void 0)continue;const G=z[L.id];for(const $ in G)g(G[$].object),delete G[$];delete z[L.id]}}function W(){k(),h=!0,c!==l&&(c=l,u(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function LT(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,f){r.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let u,g;if(i)u=r,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](s,h,f,d),t.update(f,s,d)}function c(h,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(s,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function DT(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),T=v&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function IT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Cs,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,v=S*4;let y=m.clippingState||null;l.value=y,y=h(g,d,v,u);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=u+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=u;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function NT(r){let e=new WeakMap;function t(o,a){return a===Hh?o.mapping=po:a===Gh&&(o.mapping=mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hh||a===Gh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class D_ extends w_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,I_=[.125,.215,.35,.446,.526,.582],Ls=20,Tf=new D_,N_=new pt;let bf=null,wf=0,Af=0;const Ds=(1+Math.sqrt(5))/2,Fo=1/Ds,U_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ds,Fo),new Y(0,Ds,-Fo),new Y(Fo,0,Ds),new Y(-Fo,0,Ds),new Y(Ds,Fo,0),new Y(-Ds,Fo,0)];class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,wf,Af),e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:nr,format:pi,colorSpace:Or,depthBuffer:!1},i=F_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(s)),this._blurMaterial=OT(s,e,t)}return i}_compileMaterial(e){const t=new Fi(this._lodPlanes[0],e);this._renderer.compile(t,Tf)}_sceneToCubeUV(e,t,n,i){const a=new ai(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(N_),h.toneMapping=er,h.autoClear=!1;const u=new yf({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new Fi(new Xa,u);let _=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,_=!0):(u.color.copy(N_),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;zc(i,S*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===po||e.mapping===mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=U_[(i-1)%U_.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Fi(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ls-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Ls;p>Ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);const m=[];let S=0;for(let E=0;E<Ls;++E){const R=E/_,I=Math.exp(-R*R/2);m.push(I),E===0?S+=I:E<p&&(S+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],T=3*y*(i>v-Oo?i-v+Oo:0),b=4*(this._cubeSize-y);zc(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(f,Tf)}}function UT(r){const e=[],t=[],n=[];let i=r;const s=r-Oo+1+I_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Oo?l=I_[o-r+Oo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*u),v=new Float32Array(p*g*u),y=new Float32Array(m*g*u);for(let b=0;b<u;b++){const E=b%3*2/3-1,R=b>2?0:-1,I=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(I,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];y.set(x,m*g*b)}const T=new Jn;T.setAttribute("position",new Oi(S,_)),T.setAttribute("uv",new Oi(v,p)),T.setAttribute("faceIndex",new Oi(y,m)),e.push(T),i>Oo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function F_(r,e,t){const n=new mi(r,e,t);return n.texture.mapping=uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function OT(r,e,t){const n=new Float32Array(Ls),i=new Y(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function B_(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function k_(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Cf(){return`

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
	`}function FT(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hh||l===Gh,h=l===po||l===mo;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new O_(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new O_(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function BT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kT(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const S=u.array;_=u.version;for(let v=0,y=S.length;v<y;v+=3){const T=S[v+0],b=S[v+1],E=S[v+2];d.push(T,b,b,E,E,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const T=v+0,b=v+1,E=v+2;d.push(T,b,b,E,E,T)}}else return;const p=new(e_(d)?x_:v_)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function zT(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){r.drawElements(s,g,a,u*l),t.update(g,s,1)}function f(u,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,u*l,_),t.update(g,s,_)}function d(u,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(u[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,u,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function HT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GT(r,e){return r[0]-e[0]}function VT(r,e){return Math.abs(e[1])-Math.abs(r[1])}function WT(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new rn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let W=function(){x.dispose(),s.delete(h),h.removeEventListener("dispose",W)};_!==void 0&&_.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),S===!0&&(b=3);let E=h.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*R*4*g),x=new o_(I,E,R,g);x.type=tr,x.needsUpdate=!0;const A=b*4;for(let k=0;k<g;k++){const L=v[k],F=y[k],z=T[k],G=E*R*4*k;for(let $=0;$<L.count;$++){const ne=$*A;p===!0&&(o.fromBufferAttribute(L,$),I[G+ne+0]=o.x,I[G+ne+1]=o.y,I[G+ne+2]=o.z,I[G+ne+3]=0),m===!0&&(o.fromBufferAttribute(F,$),I[G+ne+4]=o.x,I[G+ne+5]=o.y,I[G+ne+6]=o.z,I[G+ne+7]=0),S===!0&&(o.fromBufferAttribute(z,$),I[G+ne+8]=o.x,I[G+ne+9]=o.y,I[G+ne+10]=o.z,I[G+ne+11]=z.itemSize===4?o.w:1)}}_={count:g,texture:x,size:new Ie(E,R)},s.set(h,_),h.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",m),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const u=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){const y=g[v];y[0]=v,y[1]=d[v]}g.sort(VT);for(let v=0;v<8;v++)v<u&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(GT);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],T=y[0],b=y[1];T!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[T]&&h.setAttribute("morphTarget"+v,_[T]),p&&h.getAttribute("morphNormal"+v)!==p[T]&&h.setAttribute("morphNormal"+v,p[T]),i[v]=b,m+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function XT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class z_ extends kn{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Ts,h!==Ts&&h!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Nr),n===void 0&&h===go&&(n=Es),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const H_=new kn,G_=new z_(1,1);G_.compareFunction=Kg;const V_=new o_,W_=new lM,X_=new R_,Y_=[],q_=[],$_=new Float32Array(16),Z_=new Float32Array(9),K_=new Float32Array(4);function Bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Y_[i];if(s===void 0&&(s=new Float32Array(i),Y_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hc(r,e){let t=q_[e];t===void 0&&(t=new Int32Array(e),q_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function $T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function ZT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function KT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;K_.set(n),r.uniformMatrix2fv(this.addr,!1,K_),qt(t,n)}}function JT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Z_.set(n),r.uniformMatrix3fv(this.addr,!1,Z_),qt(t,n)}}function jT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;$_.set(n),r.uniformMatrix4fv(this.addr,!1,$_),qt(t,n)}}function QT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function ib(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function ab(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?G_:H_;t.setTexture2D(e||s,i)}function lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||W_,i)}function cb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||X_,i)}function ub(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||V_,i)}function hb(r){switch(r){case 5126:return YT;case 35664:return qT;case 35665:return $T;case 35666:return ZT;case 35674:return KT;case 35675:return JT;case 35676:return jT;case 5124:case 35670:return QT;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function fb(r,e){r.uniform1fv(this.addr,e)}function db(r,e){const t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function pb(r,e){const t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function mb(r,e){const t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function gb(r,e){const t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _b(r,e){const t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vb(r,e){const t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xb(r,e){r.uniform1iv(this.addr,e)}function yb(r,e){r.uniform2iv(this.addr,e)}function Sb(r,e){r.uniform3iv(this.addr,e)}function Mb(r,e){r.uniform4iv(this.addr,e)}function Eb(r,e){r.uniform1uiv(this.addr,e)}function Tb(r,e){r.uniform2uiv(this.addr,e)}function bb(r,e){r.uniform3uiv(this.addr,e)}function wb(r,e){r.uniform4uiv(this.addr,e)}function Ab(r,e,t){const n=this.cache,i=e.length,s=Hc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||H_,s[o])}function Cb(r,e,t){const n=this.cache,i=e.length,s=Hc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||W_,s[o])}function Rb(r,e,t){const n=this.cache,i=e.length,s=Hc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||X_,s[o])}function Pb(r,e,t){const n=this.cache,i=e.length,s=Hc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||V_,s[o])}function Lb(r){switch(r){case 5126:return fb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Pb}}class Db{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hb(t.type)}}class Ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lb(t.type)}}class Nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function J_(r,e){r.seq.push(e),r.map[e.id]=e}function Ub(r,e,t){const n=r.name,i=n.length;for(Rf.lastIndex=0;;){const s=Rf.exec(n),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){J_(t,c===void 0?new Db(a,r,e):new Ib(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Nb(a),J_(t,f)),t=f}}}class Gc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ub(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function j_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ob=37297;let Fb=0;function Bb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kb(r){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(r);let n;switch(e===t?n="":e===pc&&t===dc?n="LinearDisplayP3ToLinearSRGB":e===dc&&t===pc&&(n="LinearSRGBToLinearDisplayP3"),r){case Or:case hc:return[n,"LinearTransferOETF"];case Ui:case jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Q_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bb(r.getShaderSource(e),o)}else return i}function zb(r,e){const t=kb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hb(r,e){let t;switch(e){case Fh:t="Linear";break;case Bh:t="Reinhard";break;case kh:t="OptimizedCineon";break;case zh:t="ACESFilmic";break;case dg:t="AgX";break;case pg:t="Neutral";break;case US:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gb(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ko).join(`
`)}function Vb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function Wb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ko(r){return r!==""}function ev(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(r){return r.replace(Yb,$b)}const qb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $b(r,e){let t=tt[e];if(t===void 0){const n=qb.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(r){return r.replace(Zb,Kb)}function Kb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function iv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Jb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function ew(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case NS:e="ENVMAP_BLENDING_ADD";break}return e}function tw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jb(t),c=jb(t),h=Qb(t),f=ew(t),d=tw(t),u=t.isWebGL2?"":Gb(t),g=Vb(t),_=Wb(s),p=i.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ko).join(`
`),m.length>0&&(m+=`
`),S=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ko).join(`
`),S.length>0&&(S+=`
`)):(m=[iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),S=[u,iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?tt.tonemapping_pars_fragment:"",t.toneMapping!==er?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,zb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),o=Pf(o),o=ev(o,t),o=tv(o,t),a=Pf(a),a=ev(a,t),a=tv(a,t),o=nv(o),a=nv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=v+m+o,T=v+S+a,b=j_(i,i.VERTEX_SHADER,y),E=j_(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(W){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(E).trim();let z=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,b,E);else{const $=Q_(i,b,"vertex"),ne=Q_(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+k+`
`+$+`
`+ne)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||F==="")&&(G=!1);G&&(W.diagnostics={runnable:z,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:S}})}i.deleteShader(b),i.deleteShader(E),I=new Gc(i,p),x=Xb(i,p)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,Ob)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let iw=0;class rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sw(e),t.set(e,n)),n}}class sw{constructor(e){this.id=iw++,this.code=e,this.usedTimes=0}}function ow(r,e,t,n,i,s,o){const a=new h_,l=new rw,c=new Set,h=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,W,k,L){const F=k.fog,z=L.geometry,G=x.isMeshStandardMaterial?k.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),ne=!!$&&$.mapping===uc?$.image.height:null,P=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=re!==void 0?re.length:0;let q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let D,V,te,fe;if(P){const ae=Bi[P];D=ae.vertexShader,V=ae.fragmentShader}else D=x.vertexShader,V=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const le=r.getRenderTarget(),me=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,ve=!!x.map,B=!!x.matcap,Ae=!!$,ge=!!x.aoMap,Ee=!!x.lightMap,De=!!x.bumpMap,H=!!x.normalMap,Le=!!x.displacementMap,Xe=!!x.emissiveMap,st=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,ie=x.clearcoat>0,ce=x.iridescence>0,de=x.sheen>0,he=x.transmission>0,Ne=M&&!!x.anisotropyMap,He=ie&&!!x.clearcoatMap,xe=ie&&!!x.clearcoatNormalMap,be=ie&&!!x.clearcoatRoughnessMap,Ze=ce&&!!x.iridescenceMap,_e=ce&&!!x.iridescenceThicknessMap,_t=de&&!!x.sheenColorMap,$e=de&&!!x.sheenRoughnessMap,ke=!!x.specularMap,Ue=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Ke=he&&!!x.transmissionMap,Te=he&&!!x.thicknessMap,ot=!!x.gradientMap,U=!!x.alphaMap,Me=x.alphaTest>0,j=!!x.alphaHash,Se=!!x.extensions;let se=er;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(se=r.toneMapping);const N={isWebGL2:f,shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:V,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Re,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:B,envMap:Ae,envMapMode:Ae&&$.mapping,envMapCubeUVHeight:ne,aoMap:ge,lightMap:Ee,bumpMap:De,normalMap:H,displacementMap:u&&Le,emissiveMap:Xe,normalMapObjectSpace:H&&x.normalMapType===qS,normalMapTangentSpace:H&&x.normalMapType===YS,metalnessMap:st,roughnessMap:C,anisotropy:M,anisotropyMap:Ne,clearcoat:ie,clearcoatMap:He,clearcoatNormalMap:xe,clearcoatRoughnessMap:be,iridescence:ce,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:_t,sheenRoughnessMap:$e,specularMap:ke,specularColorMap:Ue,specularIntensityMap:Fe,transmission:he,transmissionMap:Ke,thicknessMap:Te,gradientMap:ot,opaque:x.transparent===!1&&x.blending===fo&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:Me,alphaHash:j,combine:x.combine,mapUv:ve&&p(x.map.channel),aoMapUv:ge&&p(x.aoMap.channel),lightMapUv:Ee&&p(x.lightMap.channel),bumpMapUv:De&&p(x.bumpMap.channel),normalMapUv:H&&p(x.normalMap.channel),displacementMapUv:Le&&p(x.displacementMap.channel),emissiveMapUv:Xe&&p(x.emissiveMap.channel),metalnessMapUv:st&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Ne&&p(x.anisotropyMap.channel),clearcoatMapUv:He&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(x.sheenRoughnessMap.channel),specularMapUv:ke&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:Fe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ke&&p(x.transmissionMap.channel),thicknessMapUv:Te&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(H||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(ve||U),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ji,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return N.vertexUv1s=c.has(1),N.vertexUv2s=c.has(2),N.vertexUv3s=c.has(3),c.clear(),N}function S(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(v(A,x),y(A,x),A.push(r.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const A=_[x.type];let W;if(A){const k=Bi[A];W=Ya.clone(k.uniforms)}else W=x.uniforms;return W}function b(x,A){let W;for(let k=0,L=h.length;k<L;k++){const F=h[k];if(F.cacheKey===A){W=F,++W.usedTimes;break}}return W===void 0&&(W=new nw(r,A,x,s),h.push(W)),W}function E(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function aw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):t.push(m)}function l(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||lw),n.length>1&&n.sort(d||rv),i.length>1&&i.sort(d||rv)}function h(){for(let f=e,d=r.length;f<d;f++){const u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function cw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sv,r.set(n,[o])):i>=s.length?(o=new sv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function uw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function hw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fw=0;function dw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pw(r,e){const t=new uw,n=hw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,o=new Bt,a=new Bt;function l(h,f){let d=0,u=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,y=0,T=0,b=0,E=0,R=0,I=0;h.sort(dw);const x=f===!0?Math.PI:1;for(let W=0,k=h.length;W<k;W++){const L=h[W],F=L.color,z=L.intensity,G=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*z*x,u+=F.g*z*x,g+=F.b*z*x;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(L.sh.coefficients[ne],z);I++}else if(L.isDirectionalLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const P=L.shadow,re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=ne,_++}else if(L.isSpotLight){const ne=t.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(F).multiplyScalar(z*x),ne.distance=G,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,i.spot[m]=ne;const P=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,P.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[m]=P.matrix,L.castShadow){const re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=$,b++}m++}else if(L.isRectAreaLight){const ne=t.get(L);ne.color.copy(F).multiplyScalar(z),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=ne,S++}else if(L.isPointLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*x),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){const P=L.shadow,re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,re.shadowCameraNear=P.camera.near,re.shadowCameraFar=P.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=ne,p++}else if(L.isHemisphereLight){const ne=t.get(L);ne.skyColor.copy(L.color).multiplyScalar(z*x),ne.groundColor.copy(L.groundColor).multiplyScalar(z*x),i.hemi[v]=ne,v++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==S||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==T||A.numSpotShadows!==b||A.numSpotMaps!==E||A.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=S,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=T,A.numSpotShadows=b,A.numSpotMaps=E,A.numLightProbes=I,i.version=fw++)}function c(h,f){let d=0,u=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function ov(r,e){const t=new pw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mw(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ov(r,e),t.set(s,[l])):o>=a.length?(l=new ov(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class gw extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _w extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
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
}`;function yw(r,e,t){let n=new P_;const i=new Ie,s=new Ie,o=new rn,a=new gw({depthPacking:XS}),l=new _w,c={},h=t.maxTextureSize,f={[Dr]:On,[On]:Dr,[ji]:ji},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:vw,fragmentShader:xw}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let m=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Qi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=m!==Ji&&this.type===Ji,L=m===Ji&&this.type!==Ji;for(let F=0,z=b.length;F<z;F++){const G=b[F],$=G.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ne=$.getFrameExtents();if(i.multiply(ne),s.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,$.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,$.mapSize.y=s.y)),$.map===null||k===!0||L===!0){const re=this.type!==Ji?{minFilter:bn,magFilter:bn}:{};$.map!==null&&$.map.dispose(),$.map=new mi(i.x,i.y,re),$.map.texture.name=G.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const P=$.getViewportCount();for(let re=0;re<P;re++){const ue=$.getViewport(re);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),W.viewport(o),$.updateMatrices(G,re),n=$.getFrustum(),y(E,R,$.camera,G,this.type)}$.isPointLightShadow!==!0&&this.type===Ji&&S($,R),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(I,x,A)};function S(b,E){const R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,R,d,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,R,u,_,null)}function v(b,E,R,I){let x=null;const A=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=x.uuid,k=E.uuid;let L=c[W];L===void 0&&(L={},c[W]=L);let F=L[k];F===void 0&&(F=x.clone(),L[k]=F,E.addEventListener("dispose",T)),x=F}if(x.visible=E.visible,x.wireframe=E.wireframe,I===Ji?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=R}return x}function y(b,E,R,I,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ji)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const k=e.update(b),L=b.material;if(Array.isArray(L)){const F=k.groups;for(let z=0,G=F.length;z<G;z++){const $=F[z],ne=L[$.materialIndex];if(ne&&ne.visible){const P=v(b,ne,I,x);b.onBeforeShadow(r,b,E,R,k,P,$),r.renderBufferDirect(R,null,k,P,b,$),b.onAfterShadow(r,b,E,R,k,P,$)}}}else if(L.visible){const F=v(b,L,I,x);b.onBeforeShadow(r,b,E,R,k,F,null),r.renderBufferDirect(R,null,k,F,b,null),b.onAfterShadow(r,b,E,R,k,F,null)}}const W=b.children;for(let k=0,L=W.length;k<L;k++)y(W[k],E,R,I,x)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const I=c[R],x=b.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}function Sw(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const Me=new rn;let j=null;const Se=new rn(0,0,0,0);return{setMask:function(se){j!==se&&!U&&(r.colorMask(se,se,se,se),j=se)},setLocked:function(se){U=se},setClear:function(se,N,ae,O,ee){ee===!0&&(se*=O,N*=O,ae*=O),Me.set(se,N,ae,O),Se.equals(Me)===!1&&(r.clearColor(se,N,ae,O),Se.copy(Me))},reset:function(){U=!1,j=null,Se.set(-1,0,0,0)}}}function s(){let U=!1,Me=null,j=null,Se=null;return{setTest:function(se){se?me(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(se){Me!==se&&!U&&(r.depthMask(se),Me=se)},setFunc:function(se){if(j!==se){switch(se){case wS:r.depthFunc(r.NEVER);break;case AS:r.depthFunc(r.ALWAYS);break;case CS:r.depthFunc(r.LESS);break;case cc:r.depthFunc(r.LEQUAL);break;case RS:r.depthFunc(r.EQUAL);break;case PS:r.depthFunc(r.GEQUAL);break;case LS:r.depthFunc(r.GREATER);break;case DS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=se}},setLocked:function(se){U=se},setClear:function(se){Se!==se&&(r.clearDepth(se),Se=se)},reset:function(){U=!1,Me=null,j=null,Se=null}}}function o(){let U=!1,Me=null,j=null,Se=null,se=null,N=null,ae=null,O=null,ee=null;return{setTest:function(oe){U||(oe?me(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(oe){Me!==oe&&!U&&(r.stencilMask(oe),Me=oe)},setFunc:function(oe,J,ye){(j!==oe||Se!==J||se!==ye)&&(r.stencilFunc(oe,J,ye),j=oe,Se=J,se=ye)},setOp:function(oe,J,ye){(N!==oe||ae!==J||O!==ye)&&(r.stencilOp(oe,J,ye),N=oe,ae=J,O=ye)},setLocked:function(oe){U=oe},setClear:function(oe){ee!==oe&&(r.clearStencil(oe),ee=oe)},reset:function(){U=!1,Me=null,j=null,Se=null,se=null,N=null,ae=null,O=null,ee=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,T=null,b=null,E=null,R=null,I=new pt(0,0,0),x=0,A=!1,W=null,k=null,L=null,F=null,z=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(P)[1]),$=ne>=1):P.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),$=ne>=2);let re=null,ue={};const q=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),V=new rn().fromArray(q),te=new rn().fromArray(D);function fe(U,Me,j,Se){const se=new Uint8Array(4),N=r.createTexture();r.bindTexture(U,N),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<j;ae++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(Me+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return N}const le={};le[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(r.DEPTH_TEST),l.setFunc(cc),Le(!1),Xe(og),me(r.CULL_FACE),De(Qi);function me(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Re(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function ve(U,Me){return u[U]!==Me?(r.bindFramebuffer(U,Me),u[U]=Me,n&&(U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Me),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function B(U,Me){let j=_,Se=!1;if(U){j=g.get(Me),j===void 0&&(j=[],g.set(Me,j));const se=U.textures;if(j.length!==se.length||j[0]!==r.COLOR_ATTACHMENT0){for(let N=0,ae=se.length;N<ae;N++)j[N]=r.COLOR_ATTACHMENT0+N;j.length=se.length,Se=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Se=!0);if(Se)if(t.isWebGL2)r.drawBuffers(j);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ge={[Ss]:r.FUNC_ADD,[hS]:r.FUNC_SUBTRACT,[fS]:r.FUNC_REVERSE_SUBTRACT};if(n)ge[ug]=r.MIN,ge[hg]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[ug]=U.MIN_EXT,ge[hg]=U.MAX_EXT)}const Ee={[dS]:r.ZERO,[pS]:r.ONE,[mS]:r.SRC_COLOR,[Uh]:r.SRC_ALPHA,[SS]:r.SRC_ALPHA_SATURATE,[xS]:r.DST_COLOR,[_S]:r.DST_ALPHA,[gS]:r.ONE_MINUS_SRC_COLOR,[Oh]:r.ONE_MINUS_SRC_ALPHA,[yS]:r.ONE_MINUS_DST_COLOR,[vS]:r.ONE_MINUS_DST_ALPHA,[MS]:r.CONSTANT_COLOR,[ES]:r.ONE_MINUS_CONSTANT_COLOR,[TS]:r.CONSTANT_ALPHA,[bS]:r.ONE_MINUS_CONSTANT_ALPHA};function De(U,Me,j,Se,se,N,ae,O,ee,oe){if(U===Qi){m===!0&&(Re(r.BLEND),m=!1);return}if(m===!1&&(me(r.BLEND),m=!0),U!==uS){if(U!==S||oe!==A){if((v!==Ss||b!==Ss)&&(r.blendEquation(r.FUNC_ADD),v=Ss,b=Ss),oe)switch(U){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.ONE,r.ONE);break;case lg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case lg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,E=null,R=null,I.set(0,0,0),x=0,S=U,A=oe}return}se=se||Me,N=N||j,ae=ae||Se,(Me!==v||se!==b)&&(r.blendEquationSeparate(ge[Me],ge[se]),v=Me,b=se),(j!==y||Se!==T||N!==E||ae!==R)&&(r.blendFuncSeparate(Ee[j],Ee[Se],Ee[N],Ee[ae]),y=j,T=Se,E=N,R=ae),(O.equals(I)===!1||ee!==x)&&(r.blendColor(O.r,O.g,O.b,ee),I.copy(O),x=ee),S=U,A=!1}function H(U,Me){U.side===ji?Re(r.CULL_FACE):me(r.CULL_FACE);let j=U.side===On;Me&&(j=!j),Le(j),U.blending===fo&&U.transparent===!1?De(Qi):De(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Se=U.stencilWrite;c.setTest(Se),Se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){W!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),W=U)}function Xe(U){U!==aS?(me(r.CULL_FACE),U!==k&&(U===og?r.cullFace(r.BACK):U===lS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),k=U}function st(U){U!==L&&($&&r.lineWidth(U),L=U)}function C(U,Me,j){U?(me(r.POLYGON_OFFSET_FILL),(F!==Me||z!==j)&&(r.polygonOffset(Me,j),F=Me,z=j)):Re(r.POLYGON_OFFSET_FILL)}function M(U){U?me(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function ie(U){U===void 0&&(U=r.TEXTURE0+G-1),re!==U&&(r.activeTexture(U),re=U)}function ce(U,Me,j){j===void 0&&(re===null?j=r.TEXTURE0+G-1:j=re);let Se=ue[j];Se===void 0&&(Se={type:void 0,texture:void 0},ue[j]=Se),(Se.type!==U||Se.texture!==Me)&&(re!==j&&(r.activeTexture(j),re=j),r.bindTexture(U,Me||le[U]),Se.type=U,Se.texture=Me)}function de(){const U=ue[re];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){V.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),V.copy(U))}function Fe(U){te.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Ke(U,Me){let j=f.get(Me);j===void 0&&(j=new WeakMap,f.set(Me,j));let Se=j.get(U);Se===void 0&&(Se=r.getUniformBlockIndex(Me,U.name),j.set(U,Se))}function Te(U,Me){const Se=f.get(Me).get(U);h.get(Me)!==Se&&(r.uniformBlockBinding(Me,Se,U.__bindingPointIndex),h.set(Me,Se))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,ue={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,T=null,b=null,E=null,R=null,I=new pt(0,0,0),x=0,A=!1,W=null,k=null,L=null,F=null,z=null,V.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Re,bindFramebuffer:ve,drawBuffers:B,useProgram:Ae,setBlending:De,setMaterial:H,setFlipSided:Le,setCullFace:Xe,setLineWidth:st,setPolygonOffset:C,setScissorTest:M,activeTexture:ie,bindTexture:ce,unbindTexture:de,compressedTexImage2D:he,compressedTexImage3D:Ne,texImage2D:$e,texImage3D:ke,updateUBOMapping:Ke,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:_t,texSubImage2D:He,texSubImage3D:xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ze,scissor:Ue,viewport:Fe,reset:ot}}function Mw(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ie,f=new WeakMap;let d;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):_c("canvas")}function p(C,M,ie,ce){let de=1;const he=st(C);if((he.width>ce||he.height>ce)&&(de=ce/Math.max(he.width,he.height)),de<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Ne=M?nf:Math.floor,He=Ne(de*he.width),xe=Ne(de*he.height);d===void 0&&(d=_(He,xe));const be=ie?_(He,xe):d;return be.width=He,be.height=xe,be.getContext("2d").drawImage(C,0,0,He,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+He+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function m(C){const M=st(C);return Qg(M.width)&&Qg(M.height)}function S(C){return a?!1:C.wrapS!==di||C.wrapT!==di||C.minFilter!==bn&&C.minFilter!==Fn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==bn&&C.minFilter!==Fn}function y(C){r.generateMipmap(C)}function T(C,M,ie,ce,de=!1){if(a===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=M;if(M===r.RED&&(ie===r.FLOAT&&(he=r.R32F),ie===r.HALF_FLOAT&&(he=r.R16F),ie===r.UNSIGNED_BYTE&&(he=r.R8)),M===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.R8UI),ie===r.UNSIGNED_SHORT&&(he=r.R16UI),ie===r.UNSIGNED_INT&&(he=r.R32UI),ie===r.BYTE&&(he=r.R8I),ie===r.SHORT&&(he=r.R16I),ie===r.INT&&(he=r.R32I)),M===r.RG&&(ie===r.FLOAT&&(he=r.RG32F),ie===r.HALF_FLOAT&&(he=r.RG16F),ie===r.UNSIGNED_BYTE&&(he=r.RG8)),M===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RG8UI),ie===r.UNSIGNED_SHORT&&(he=r.RG16UI),ie===r.UNSIGNED_INT&&(he=r.RG32UI),ie===r.BYTE&&(he=r.RG8I),ie===r.SHORT&&(he=r.RG16I),ie===r.INT&&(he=r.RG32I)),M===r.RGBA){const Ne=de?fc:gt.getTransfer(ce);ie===r.FLOAT&&(he=r.RGBA32F),ie===r.HALF_FLOAT&&(he=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(he=Ne===Et?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(C,M,ie){return v(C,ie)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===bn||C===gg||C===Oa?r.NEAREST:r.LINEAR}function R(C){const M=C.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&f.delete(M)}function I(C){const M=C.target;M.removeEventListener("dispose",I),W(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const ie=C.source,ce=u.get(ie);if(ce){const de=ce[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(C),Object.keys(ce).length===0&&u.delete(ie)}n.remove(C)}function A(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const ie=C.source,ce=u.get(ie);delete ce[M.__cacheKey],o.memory.textures--}function W(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let de=0;de<M.__webglFramebuffer[ce].length;de++)r.deleteFramebuffer(M.__webglFramebuffer[ce][de]);else r.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)r.deleteFramebuffer(M.__webglFramebuffer[ce]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=n.get(ie[ce]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(ie[ce])}n.remove(C)}let k=0;function L(){k=0}function F(){const C=k;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),k+=1,C}function z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const ie=n.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&ie.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ie,C,M);return}}t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+M)}function $(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+M)}function ne(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+M)}function P(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){fe(ie,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+M)}const re={[Vh]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[Wh]:r.MIRRORED_REPEAT},ue={[bn]:r.NEAREST,[gg]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},q={[$S]:r.NEVER,[eM]:r.ALWAYS,[ZS]:r.LESS,[Kg]:r.LEQUAL,[KS]:r.EQUAL,[QS]:r.GEQUAL,[JS]:r.GREATER,[jS]:r.NOTEQUAL};function D(C,M,ie){if(M.type===tr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Xh||M.magFilter===Oa||M.magFilter===Ms||M.minFilter===Fn||M.minFilter===Xh||M.minFilter===Oa||M.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ie?(r.texParameteri(C,r.TEXTURE_WRAP_S,re[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,re[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,re[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ue[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ue[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==di||M.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==bn&&M.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==Oa&&M.minFilter!==Ms||M.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function V(C,M){let ie=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ce=M.source;let de=u.get(ce);de===void 0&&(de={},u.set(ce,de));const he=z(M);if(he!==C.__cacheKey){de[he]===void 0&&(de[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),de[he].usedTimes++;const Ne=de[C.__cacheKey];Ne!==void 0&&(de[C.__cacheKey].usedTimes--,Ne.usedTimes===0&&A(M)),C.__cacheKey=he,C.__webglTexture=de[he].texture}return ie}function te(C,M,ie){let ce=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=r.TEXTURE_3D);const de=V(C,M),he=M.source;t.bindTexture(ce,C.__webglTexture,r.TEXTURE0+ie);const Ne=n.get(he);if(he.version!==Ne.__version||de===!0){t.activeTexture(r.TEXTURE0+ie);const He=gt.getPrimaries(gt.workingColorSpace),xe=M.colorSpace===Ur?null:gt.getPrimaries(M.colorSpace),be=M.colorSpace===Ur||He===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ze=S(M)&&m(M.image)===!1;let _e=p(M.image,Ze,!1,i.maxTextureSize);_e=Xe(M,_e);const _t=m(_e)||a,$e=s.convert(M.format,M.colorSpace);let ke=s.convert(M.type),Ue=T(M.internalFormat,$e,ke,M.colorSpace,M.isVideoTexture);D(ce,M,_t);let Fe;const Ke=M.mipmaps,Te=a&&M.isVideoTexture!==!0&&Ue!==Ag,ot=Ne.__version===void 0||de===!0,U=he.dataReady,Me=b(M,_e,_t);if(M.isDepthTexture)Ue=r.DEPTH_COMPONENT,a?M.type===tr?Ue=r.DEPTH_COMPONENT32F:M.type===Nr?Ue=r.DEPTH_COMPONENT24:M.type===Es?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:M.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ts&&Ue===r.DEPTH_COMPONENT&&M.type!==Yh&&M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nr,ke=s.convert(M.type)),M.format===go&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,M.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Es,ke=s.convert(M.type))),ot&&(Te?t.texStorage2D(r.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,null));else if(M.isDataTexture)if(Ke.length>0&&_t){Te&&ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,Ke[0].width,Ke[0].height);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data);M.generateMipmaps=!1}else Te?(ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,_e.width,_e.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,$e,ke,_e.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Te&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ue,Ke[0].width,Ke[0].height,_e.depth);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],M.format!==pi?$e!==null?Te?U&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Fe.width,Fe.height,_e.depth,$e,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Ue,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Fe.width,Fe.height,_e.depth,$e,ke,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Ue,Fe.width,Fe.height,_e.depth,0,$e,ke,Fe.data)}else{Te&&ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,Ke[0].width,Ke[0].height);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],M.format!==pi?$e!==null?Te?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data)}else if(M.isDataArrayTexture)Te?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isData3DTexture)Te?(ot&&t.texStorage3D(r.TEXTURE_3D,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isFramebufferTexture){if(ot)if(Te)t.texStorage2D(r.TEXTURE_2D,Me,Ue,_e.width,_e.height);else{let j=_e.width,Se=_e.height;for(let se=0;se<Me;se++)t.texImage2D(r.TEXTURE_2D,se,Ue,j,Se,0,$e,ke,null),j>>=1,Se>>=1}}else if(Ke.length>0&&_t){if(Te&&ot){const j=st(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Me,Ue,j.width,j.height)}for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,$e,ke,Fe):t.texImage2D(r.TEXTURE_2D,j,Ue,$e,ke,Fe);M.generateMipmaps=!1}else if(Te){if(ot){const j=st(_e);t.texStorage2D(r.TEXTURE_2D,Me,Ue,j.width,j.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$e,ke,_e)}else t.texImage2D(r.TEXTURE_2D,0,Ue,$e,ke,_e);v(M,_t)&&y(ce),Ne.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function fe(C,M,ie){if(M.image.length!==6)return;const ce=V(C,M),de=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ie);const he=n.get(de);if(de.version!==he.__version||ce===!0){t.activeTexture(r.TEXTURE0+ie);const Ne=gt.getPrimaries(gt.workingColorSpace),He=M.colorSpace===Ur?null:gt.getPrimaries(M.colorSpace),xe=M.colorSpace===Ur||Ne===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!be&&!Ze?_e[j]=p(M.image[j],!1,!0,i.maxCubemapSize):_e[j]=Ze?M.image[j].image:M.image[j],_e[j]=Xe(M,_e[j]);const _t=_e[0],$e=m(_t)||a,ke=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Fe=T(M.internalFormat,ke,Ue,M.colorSpace),Ke=a&&M.isVideoTexture!==!0,Te=he.__version===void 0||ce===!0,ot=de.dataReady;let U=b(M,_t,$e);D(r.TEXTURE_CUBE_MAP,M,$e);let Me;if(be){Ke&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Fe,_t.width,_t.height);for(let j=0;j<6;j++){Me=_e[j].mipmaps;for(let Se=0;Se<Me.length;Se++){const se=Me[Se];M.format!==pi?ke!==null?Ke?ot&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,se.width,se.height,ke,Ue,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,se.width,se.height,0,ke,Ue,se.data)}}}else{if(Me=M.mipmaps,Ke&&Te){Me.length>0&&U++;const j=st(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Fe,j.width,j.height)}for(let j=0;j<6;j++)if(Ze){Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,ke,Ue,_e[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,_e[j].width,_e[j].height,0,ke,Ue,_e[j].data);for(let Se=0;Se<Me.length;Se++){const N=Me[Se].image[j].image;Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,N.width,N.height,ke,Ue,N.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,N.width,N.height,0,ke,Ue,N.data)}}else{Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Ue,_e[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,ke,Ue,_e[j]);for(let Se=0;Se<Me.length;Se++){const se=Me[Se];Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,ke,Ue,se.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,ke,Ue,se.image[j])}}}v(M,$e)&&y(r.TEXTURE_CUBE_MAP),he.__version=de.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,ie,ce,de,he){const Ne=s.convert(ie.format,ie.colorSpace),He=s.convert(ie.type),xe=T(ie.internalFormat,Ne,He,ie.colorSpace);if(!n.get(M).__hasExternalTextures){const Ze=Math.max(1,M.width>>he),_e=Math.max(1,M.height>>he);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,he,xe,Ze,_e,M.depth,0,Ne,He,null):t.texImage2D(de,he,xe,Ze,_e,0,Ne,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,0,De(M)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(C,M,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ce=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ie||H(M)){const de=M.depthTexture;de&&de.isDepthTexture&&(de.type===tr?ce=r.DEPTH_COMPONENT32F:de.type===Nr&&(ce=r.DEPTH_COMPONENT24));const he=De(M);H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,ce,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,he,ce,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,ce,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ce=De(M);ie&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ce=M.textures;for(let de=0;de<ce.length;de++){const he=ce[de],Ne=s.convert(he.format,he.colorSpace),He=s.convert(he.type),xe=T(he.internalFormat,Ne,He,he.colorSpace),be=De(M);ie&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,xe,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const ce=n.get(M.depthTexture).__webglTexture,de=De(M);if(M.depthTexture.format===Ts)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(M.depthTexture.format===go)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ve(C){const M=n.get(C),ie=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,C)}else if(ie){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]=r.createRenderbuffer(),me(M.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),me(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function B(C,M,ie){const ce=n.get(C);M!==void 0&&le(ce.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&ve(C)}function Ae(C){const M=C.texture,ie=n.get(C),ce=n.get(M);C.addEventListener("dispose",I);const de=C.textures,he=C.isWebGLCubeRenderTarget===!0,Ne=de.length>1,He=m(C)||a;if(Ne||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=M.version,o.memory.textures++),he){ie.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer[xe]=[];for(let be=0;be<M.mipmaps.length;be++)ie.__webglFramebuffer[xe][be]=r.createFramebuffer()}else ie.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)ie.__webglFramebuffer[xe]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ne)if(i.drawBuffers)for(let xe=0,be=de.length;xe<be;xe++){const Ze=n.get(de[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&H(C)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const be=de[xe];ie.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ze=s.convert(be.format,be.colorSpace),_e=s.convert(be.type),_t=T(be.internalFormat,Ze,_e,be.colorSpace,C.isXRRenderTarget===!0),$e=De(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,_t,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ie.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),me(ie.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),D(r.TEXTURE_CUBE_MAP,M,He);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[xe][be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else le(ie.__webglFramebuffer[xe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(M,He)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let xe=0,be=de.length;xe<be;xe++){const Ze=de[xe],_e=n.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),D(r.TEXTURE_2D,Ze,He),le(ie.__webglFramebuffer,C,Ze,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),v(Ze,He)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),D(xe,M,He),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,xe,be);else le(ie.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,xe,0);v(M,He)&&y(xe),t.unbindTexture()}C.depthBuffer&&ve(C)}function ge(C){const M=m(C)||a,ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=ie[ce];if(v(he,M)){const Ne=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=n.get(he).__webglTexture;t.bindTexture(Ne,He),y(Ne),t.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&H(C)===!1){const M=C.textures,ie=C.width,ce=C.height;let de=r.COLOR_BUFFER_BIT;const he=[],Ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=n.get(C),xe=M.length>1;if(xe)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){he.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&he.push(Ne);const Ze=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Ze===!1&&(C.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),xe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ne]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ne])),xe){const _e=n.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,de,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Ze=n.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function De(C){return Math.min(i.maxSamples,C.samples)}function H(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Xe(C,M){const ie=C.colorSpace,ce=C.format,de=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Qh||ie!==Or&&ie!==Ur&&(gt.getTransfer(ie)===Et?a===!1?e.has("EXT_sRGB")===!0&&ce===pi?(C.format=Qh,C.minFilter=Fn,C.generateMipmaps=!1):M=r_.sRGBToLinear(M):(ce!==pi||de!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),M}function st(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=P,this.rebindTextures=B,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=H}function Ew(r,e,t){const n=t.isWebGL2;function i(s,o=Ur){let a;const l=gt.getTransfer(o);if(s===Ir)return r.UNSIGNED_BYTE;if(s===vg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xg)return r.UNSIGNED_SHORT_5_5_5_1;if(s===OS)return r.BYTE;if(s===FS)return r.SHORT;if(s===Yh)return r.UNSIGNED_SHORT;if(s===_g)return r.INT;if(s===Nr)return r.UNSIGNED_INT;if(s===tr)return r.FLOAT;if(s===nr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===BS)return r.ALPHA;if(s===pi)return r.RGBA;if(s===kS)return r.LUMINANCE;if(s===zS)return r.LUMINANCE_ALPHA;if(s===Ts)return r.DEPTH_COMPONENT;if(s===go)return r.DEPTH_STENCIL;if(s===Qh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===HS)return r.RED;if(s===yg)return r.RED_INTEGER;if(s===GS)return r.RG;if(s===Sg)return r.RG_INTEGER;if(s===Mg)return r.RGBA_INTEGER;if(s===qh||s===$h||s===Zh||s===Kh)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eg||s===Tg||s===bg||s===wg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ag)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cg||s===Rg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cg)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pg||s===Lg||s===Dg||s===Ig||s===Ng||s===Ug||s===Og||s===Fg||s===Bg||s===kg||s===zg||s===Hg||s===Gg||s===Vg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ig)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ng)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ug)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Og)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jh||s===Wg||s===Xg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jh)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===VS||s===Yg||s===qg||s===$g)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Yg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$g)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Es?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Tw extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aw=`
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

}`;class Cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new kn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new An({extensions:{fragDepth:!0},vertexShader:ww,fragmentShader:Aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new Bc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Rw extends vo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new Cw,p=t.getContextAttributes();let m=null,S=null;const v=[],y=[],T=new Ie;let b=null;const E=new ai;E.layers.enable(1),E.viewport=new rn;const R=new ai;R.layers.enable(2),R.viewport=new rn;const I=[E,R],x=new Tw;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=v[D];return V===void 0&&(V=new Lf,v[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=v[D];return V===void 0&&(V=new Lf,v[D]=V),V.getGripSpace()},this.getHand=function(D){let V=v[D];return V===void 0&&(V=new Lf,v[D]=V),V.getHandSpace()};function k(D){const V=y.indexOf(D.inputSource);if(V===-1)return;const te=v[V];te!==void 0&&(te.update(D.inputSource,D.frame,c||o),te.dispatchEvent({type:D.type,data:D.inputSource}))}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",F);for(let D=0;D<v.length;D++){const V=y[D];V!==null&&(y[D]=null,v[D].disconnect(V))}A=null,W=null,_.reset(),e.setRenderTarget(m),u=null,d=null,f=null,i=null,S=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new mi(u.framebufferWidth,u.framebufferHeight,{format:pi,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,te=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=p.stencil?go:Ts,te=p.stencil?Es:Nr);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new mi(d.textureWidth,d.textureHeight,{format:pi,type:Ir,depthTexture:new z_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(S);me.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(D){for(let V=0;V<D.removed.length;V++){const te=D.removed[V],fe=y.indexOf(te);fe>=0&&(y[fe]=null,v[fe].disconnect(te))}for(let V=0;V<D.added.length;V++){const te=D.added[V];let fe=y.indexOf(te);if(fe===-1){for(let me=0;me<v.length;me++)if(me>=y.length){y.push(te),fe=me;break}else if(y[me]===null){y[me]=te,fe=me;break}if(fe===-1)break}const le=v[fe];le&&le.connect(te)}}const z=new Y,G=new Y;function $(D,V,te){z.setFromMatrixPosition(V.matrixWorld),G.setFromMatrixPosition(te.matrixWorld);const fe=z.distanceTo(G),le=V.projectionMatrix.elements,me=te.projectionMatrix.elements,Re=le[14]/(le[10]-1),ve=le[14]/(le[10]+1),B=(le[9]+1)/le[5],Ae=(le[9]-1)/le[5],ge=(le[8]-1)/le[0],Ee=(me[8]+1)/me[0],De=Re*ge,H=Re*Ee,Le=fe/(-ge+Ee),Xe=Le*-ge;V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Xe),D.translateZ(Le),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const st=Re+Le,C=ve+Le,M=De-Xe,ie=H+(fe-Xe),ce=B*ve/C*st,de=Ae*ve/C*st;D.projectionMatrix.makePerspective(M,ie,ce,de,st,C),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function ne(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;_.texture!==null&&(D.near=_.depthNear,D.far=_.depthFar),x.near=R.near=E.near=D.near,x.far=R.far=E.far=D.far,(A!==x.near||W!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far,E.near=A,E.far=W,R.near=A,R.far=W,E.updateProjectionMatrix(),R.updateProjectionMatrix(),D.updateProjectionMatrix());const V=D.parent,te=x.cameras;ne(x,V);for(let fe=0;fe<te.length;fe++)ne(te[fe],V);te.length===2?$(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),P(D,x,V)};function P(D,V,te){te===null?D.matrix.copy(V.matrixWorld):(D.matrix.copy(te.matrixWorld),D.matrix.invert(),D.matrix.multiply(V.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ef*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function ue(D,V){if(h=V.getViewerPose(c||o),g=V,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let fe=!1;te.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let me=0;me<te.length;me++){const Re=te[me];let ve=null;if(u!==null)ve=u.getViewport(Re);else{const Ae=f.getViewSubImage(d,Re);ve=Ae.viewport,me===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let B=I[me];B===void 0&&(B=new ai,B.layers.enable(me),B.viewport=new rn,I[me]=B),B.matrix.fromArray(Re.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Re.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(x.matrix.copy(B.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(B)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){const me=f.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let te=0;te<v.length;te++){const fe=y[te],le=v[te];fe!==null&&le!==void 0&&le.update(fe,V,c||o)}_.render(e,x),re&&re(D,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const q=new L_;q.setAnimationLoop(ue),this.setAnimationLoop=function(D){re=D},this.dispose=function(){}}}const Ns=new or,Pw=new Bt;function Lw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,b_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===On&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===On&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,y=S.envMapRotation;if(v&&(p.envMap.value=v,Ns.copy(y),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(Ns)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dw(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(S,T);const b=e.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function h(S){const v=f();S.__bindingPointIndex=v;const y=r.createBuffer(),T=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],y=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let I=0,x=R.length;I<x;I++){const A=R[I];if(u(A,b,I,T)===!0){const W=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let F=0;F<k.length;F++){const z=k[F],G=_(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,W+L,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,v,y,T){const b=S.value,E=v+"_"+y;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const R=T[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(S){const v=S.uniforms;let y=0;const T=16;for(let E=0,R=v.length;E<R;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,A=I.length;x<A;x++){const W=I[x],k=Array.isArray(W.value)?W.value:[W.value];for(let L=0,F=k.length;L<F;L++){const z=k[L],G=_(z),$=y%T;$!==0&&T-$<G.boundary&&(y+=T-$),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=G.storage}}}const b=y%T;return b>0&&(y+=T-b),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class av{constructor(e={}){const{canvas:t=nM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const v=this;let y=!1,T=0,b=0,E=null,R=-1,I=null;const x=new rn,A=new rn;let W=null;const k=new pt(0);let L=0,F=t.width,z=t.height,G=1,$=null,ne=null;const P=new rn(0,0,F,z),re=new rn(0,0,F,z);let ue=!1;const q=new P_;let D=!1,V=!1,te=null;const fe=new Bt,le=new Ie,me=new Y,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?G:1}let B=n;function Ae(w,X){for(let K=0;K<w.length;K++){const Q=w[K],Z=t.getContext(Q,X);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),B=Ae(X,w),B===null)throw Ae(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de,he,Ne,He,xe,be,Ze,_e,_t,$e,ke,Ue,Fe;function Ke(){ge=new BT(B),Ee=new DT(B,ge,e),ge.init(Ee),ke=new Ew(B,ge,Ee),De=new Sw(B,ge,Ee),H=new HT(B),Le=new aw,Xe=new Mw(B,ge,De,Le,Ee,ke,H),st=new NT(v),C=new FT(v),M=new AM(B,Ee),Ue=new PT(B,ge,M,Ee),ie=new kT(B,M,H,Ue),ce=new XT(B,ie,M,H),_e=new WT(B,Ee,Xe),xe=new IT(Le),de=new ow(v,st,C,ge,Ee,Ue,xe),he=new Lw(v,Le),Ne=new cw,He=new mw(ge,Ee),Ze=new RT(v,st,C,De,ce,d,l),be=new yw(v,ce,Ee),Fe=new Dw(B,H,Ee,De),_t=new LT(B,ge,H,Ee),$e=new zT(B,ge,H,Ee),H.programs=de.programs,v.capabilities=Ee,v.extensions=ge,v.properties=Le,v.renderLists=Ne,v.shadowMap=be,v.state=De,v.info=H}Ke();const Te=new Rw(v,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,X,K=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=X,t.width=Math.floor(w*G),t.height=Math.floor(X*G),K===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(F*G,z*G).floor()},this.setDrawingBufferSize=function(w,X,K){F=w,z=X,G=K,t.width=Math.floor(w*K),t.height=Math.floor(X*K),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,X,K,Q){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,X,K,Q),De.viewport(x.copy(P).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,X,K,Q){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,X,K,Q),De.scissor(A.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){De.setScissorTest(ue=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,X=!0,K=!0){let Q=0;if(w){let Z=!1;if(E!==null){const we=E.texture.format;Z=we===Mg||we===Sg||we===yg}if(Z){const we=E.texture.type,ze=we===Ir||we===Nr||we===Yh||we===Es||we===vg||we===xg,Ye=Ze.getClearColor(),Ge=Ze.getClearAlpha(),Ve=Ye.r,qe=Ye.g,Qe=Ye.b;ze?(u[0]=Ve,u[1]=qe,u[2]=Qe,u[3]=Ge,B.clearBufferuiv(B.COLOR,0,u)):(g[0]=Ve,g[1]=qe,g[2]=Qe,g[3]=Ge,B.clearBufferiv(B.COLOR,0,g))}else Q|=B.COLOR_BUFFER_BIT}X&&(Q|=B.DEPTH_BUFFER_BIT),K&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),He.dispose(),Le.dispose(),st.dispose(),C.dispose(),ce.dispose(),Ue.dispose(),Fe.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ee),Te.removeEventListener("sessionend",oe),te&&(te.dispose(),te=null),J.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=H.autoReset,X=be.enabled,K=be.autoUpdate,Q=be.needsUpdate,Z=be.type;Ke(),H.autoReset=w,be.enabled=X,be.autoUpdate=K,be.needsUpdate=Q,be.type=Z}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function j(w){const X=w.target;X.removeEventListener("dispose",j),Se(X)}function Se(w){se(w),Le.remove(w)}function se(w){const X=Le.get(w).programs;X!==void 0&&(X.forEach(function(K){de.releaseProgram(K)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,K,Q,Z,we){X===null&&(X=Re);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=nt(w,X,K,Q,Z);De.setMaterial(Q,ze);let Ge=K.index,Ve=1;if(Q.wireframe===!0){if(Ge=ie.getWireframeAttribute(K),Ge===void 0)return;Ve=2}const qe=K.drawRange,Qe=K.attributes.position;let Ct=qe.start*Ve,Kt=(qe.start+qe.count)*Ve;we!==null&&(Ct=Math.max(Ct,we.start*Ve),Kt=Math.min(Kt,(we.start+we.count)*Ve)),Ge!==null?(Ct=Math.max(Ct,0),Kt=Math.min(Kt,Ge.count)):Qe!=null&&(Ct=Math.max(Ct,0),Kt=Math.min(Kt,Qe.count));const vt=Kt-Ct;if(vt<0||vt===1/0)return;Ue.setup(Z,Q,Ye,K,Ge);let Rn,xt=_t;if(Ge!==null&&(Rn=M.get(Ge),xt=$e,xt.setIndex(Rn)),Z.isMesh)Q.wireframe===!0?(De.setLineWidth(Q.wireframeLinewidth*ve()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(Z.isLine){let je=Q.linewidth;je===void 0&&(je=1),De.setLineWidth(je*ve()),Z.isLineSegments?xt.setMode(B.LINES):Z.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else Z.isPoints?xt.setMode(B.POINTS):Z.isSprite&&xt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)xt.renderInstances(Ct,vt,Z.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ud=Math.min(K.instanceCount,je);xt.renderInstances(Ct,vt,Ud)}else xt.render(Ct,vt)};function N(w,X,K){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,Je(w,X,K),w.side=Dr,w.needsUpdate=!0,Je(w,X,K),w.side=ji):Je(w,X,K)}this.compile=function(w,X,K=null){K===null&&(K=w),p=He.get(K),p.init(),S.push(p),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),w!==K&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(v._useLegacyLights);const Q=new Set;return w.traverse(function(Z){const we=Z.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const Ye=we[ze];N(Ye,K,Z),Q.add(Ye)}else N(we,K,Z),Q.add(we)}),S.pop(),p=null,Q},this.compileAsync=function(w,X,K=null){const Q=this.compile(w,X,K);return new Promise(Z=>{function we(){if(Q.forEach(function(ze){Le.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){Z(w);return}setTimeout(we,10)}ge.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ae=null;function O(w){ae&&ae(w)}function ee(){J.stop()}function oe(){J.start()}const J=new L_;J.setAnimationLoop(O),typeof self!="undefined"&&J.setContext(self),this.setAnimationLoop=function(w){ae=w,Te.setAnimationLoop(w),w===null?J.stop():J.start()},Te.addEventListener("sessionstart",ee),Te.addEventListener("sessionend",oe),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,E),p=He.get(w,S.length),p.init(),S.push(p),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(fe),V=this.localClippingEnabled,D=xe.init(this.clippingPlanes,V),_=Ne.get(w,m.length),_.init(),m.push(_),ye(w,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,ne),this.info.render.frame++,D===!0&&xe.beginShadows();const K=p.state.shadowsArray;if(be.render(K,w,X),D===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&Ze.render(_,w),p.setupLights(v._useLegacyLights),X.isArrayCamera){const Q=X.cameras;for(let Z=0,we=Q.length;Z<we;Z++){const ze=Q[Z];pe(_,w,ze,ze.viewport)}}else pe(_,w,X);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,X),Ue.resetDefaultState(),R=-1,I=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ye(w,X,K,Q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){Q&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ze=ce.update(w),Ye=w.material;Ye.visible&&_.push(w,ze,Ye,K,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ze=ce.update(w),Ye=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ye)){const Ge=ze.groups;for(let Ve=0,qe=Ge.length;Ve<qe;Ve++){const Qe=Ge[Ve],Ct=Ye[Qe.materialIndex];Ct&&Ct.visible&&_.push(w,ze,Ct,K,me.z,Qe)}}else Ye.visible&&_.push(w,ze,Ye,K,me.z,null)}}const we=w.children;for(let ze=0,Ye=we.length;ze<Ye;ze++)ye(we[ze],X,K,Q)}function pe(w,X,K,Q){const Z=w.opaque,we=w.transmissive,ze=w.transparent;p.setupLightsView(K),D===!0&&xe.setGlobalState(v.clippingPlanes,K),we.length>0&&Pe(Z,we,X,K),Q&&De.viewport(x.copy(Q)),Z.length>0&&We(Z,X,K),we.length>0&&We(we,X,K),ze.length>0&&We(ze,X,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Pe(w,X,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const we=Ee.isWebGL2;te===null&&(te=new mi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?nr:Ir,minFilter:Ms,samples:we?4:0})),v.getDrawingBufferSize(le),we?te.setSize(le.x,le.y):te.setSize(nf(le.x),nf(le.y));const ze=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(k),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ye=v.toneMapping;v.toneMapping=er,We(w,K,Q),Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te);let Ge=!1;for(let Ve=0,qe=X.length;Ve<qe;Ve++){const Qe=X[Ve],Ct=Qe.object,Kt=Qe.geometry,vt=Qe.material,Rn=Qe.group;if(vt.side===ji&&Ct.layers.test(Q.layers)){const xt=vt.side;vt.side=On,vt.needsUpdate=!0,Oe(Ct,K,Q,Kt,vt,Rn),vt.side=xt,vt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),v.setRenderTarget(ze),v.setClearColor(k,L),v.toneMapping=Ye}function We(w,X,K){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,we=w.length;Z<we;Z++){const ze=w[Z],Ye=ze.object,Ge=ze.geometry,Ve=Q===null?ze.material:Q,qe=ze.group;Ye.layers.test(K.layers)&&Oe(Ye,X,K,Ge,Ve,qe)}}function Oe(w,X,K,Q,Z,we){w.onBeforeRender(v,X,K,Q,Z,we),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,X,K,Q,w,we),Z.transparent===!0&&Z.side===ji&&Z.forceSinglePass===!1?(Z.side=On,Z.needsUpdate=!0,v.renderBufferDirect(K,X,Q,Z,w,we),Z.side=Dr,Z.needsUpdate=!0,v.renderBufferDirect(K,X,Q,Z,w,we),Z.side=ji):v.renderBufferDirect(K,X,Q,Z,w,we),w.onAfterRender(v,X,K,Q,Z,we)}function Je(w,X,K){X.isScene!==!0&&(X=Re);const Q=Le.get(w),Z=p.state.lights,we=p.state.shadowsArray,ze=Z.state.version,Ye=de.getParameters(w,Z.state,we,X,K),Ge=de.getProgramCacheKey(Ye);let Ve=Q.programs;Q.environment=w.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(w.isMeshStandardMaterial?C:st).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",j),Ve=new Map,Q.programs=Ve);let qe=Ve.get(Ge);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===ze)return dt(w,Ye),qe}else Ye.uniforms=de.getUniforms(w),w.onBuild(K,Ye,v),w.onBeforeCompile(Ye,v),qe=de.acquireProgram(Ye,Ge),Ve.set(Ge,qe),Q.uniforms=Ye.uniforms;const Qe=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),dt(w,Ye),Q.needsLights=mt(w),Q.lightsStateVersion=ze,Q.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function ct(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Gc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function dt(w,X){const K=Le.get(w);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function nt(w,X,K,Q,Z){X.isScene!==!0&&(X=Re),Xe.resetTextureUnits();const we=X.fog,ze=Q.isMeshStandardMaterial?X.environment:null,Ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Or,Ge=(Q.isMeshStandardMaterial?C:st).get(Q.envMap||ze),Ve=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Qe=!!K.morphAttributes.position,Ct=!!K.morphAttributes.normal,Kt=!!K.morphAttributes.color;let vt=er;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Rn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=Rn!==void 0?Rn.length:0,je=Le.get(Q),Ud=p.state.lights;if(D===!0&&(V===!0||w!==I)){const ui=w===I&&Q.id===R;xe.setState(Q,w,ui)}let Rt=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ud.state.version||je.outputColorSpace!==Ye||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==Ge||Q.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==qe||je.morphTargets!==Qe||je.morphNormals!==Ct||je.morphColors!==Kt||je.toneMapping!==vt||Ee.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Rt=!0):(Rt=!0,je.__version=Q.version);let Gs=je.currentProgram;Rt===!0&&(Gs=Je(Q,X,Z));let X0=!1,Sl=!1,Od=!1;const gn=Gs.getUniforms(),Vs=je.uniforms;if(De.useProgram(Gs.program)&&(X0=!0,Sl=!0,Od=!0),Q.id!==R&&(R=Q.id,Sl=!0),X0||I!==w){gn.setValue(B,"projectionMatrix",w.projectionMatrix),gn.setValue(B,"viewMatrix",w.matrixWorldInverse);const ui=gn.map.cameraPosition;ui!==void 0&&ui.setValue(B,me.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&gn.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gn.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,Sl=!0,Od=!0)}if(Z.isSkinnedMesh){gn.setOptional(B,Z,"bindMatrix"),gn.setOptional(B,Z,"bindMatrixInverse");const ui=Z.skeleton;ui&&(Ee.floatVertexTextures?(ui.boneTexture===null&&ui.computeBoneTexture(),gn.setValue(B,"boneTexture",ui.boneTexture,Xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(gn.setOptional(B,Z,"batchingTexture"),gn.setValue(B,"batchingTexture",Z._matricesTexture,Xe));const Fd=K.morphAttributes;if((Fd.position!==void 0||Fd.normal!==void 0||Fd.color!==void 0&&Ee.isWebGL2===!0)&&_e.update(Z,K,Gs),(Sl||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,gn.setValue(B,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Vs.envMap.value=Ge,Vs.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Sl&&(gn.setValue(B,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&at(Vs,Od),we&&Q.fog===!0&&he.refreshFogUniforms(Vs,we),he.refreshMaterialUniforms(Vs,Q,G,z,te),Gc.upload(B,ct(je),Vs,Xe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Gc.upload(B,ct(je),Vs,Xe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gn.setValue(B,"center",Z.center),gn.setValue(B,"modelViewMatrix",Z.modelViewMatrix),gn.setValue(B,"normalMatrix",Z.normalMatrix),gn.setValue(B,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ui=Q.uniformsGroups;for(let Bd=0,wA=ui.length;Bd<wA;Bd++)if(Ee.isWebGL2){const Y0=ui[Bd];Fe.update(Y0,Gs),Fe.bind(Y0,Gs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gs}function at(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,X,K){Le.get(w.texture).__webglTexture=X,Le.get(w.depthTexture).__webglTexture=K;const Q=Le.get(w);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const K=Le.get(w);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,K=0){E=w,T=X,b=K;let Q=!0,Z=null,we=!1,ze=!1;if(w){const Ge=Le.get(w);Ge.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1):Ge.__webglFramebuffer===void 0?Xe.setupRenderTarget(w):Ge.__hasExternalTextures&&Xe.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const qe=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?Z=qe[X][K]:Z=qe[X],we=!0):Ee.isWebGL2&&w.samples>0&&Xe.useMultisampledRTT(w)===!1?Z=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[K]:Z=qe,x.copy(w.viewport),A.copy(w.scissor),W=w.scissorTest}else x.copy(P).multiplyScalar(G).floor(),A.copy(re).multiplyScalar(G).floor(),W=ue;if(De.bindFramebuffer(B.FRAMEBUFFER,Z)&&Ee.drawBuffers&&Q&&De.drawBuffers(w,Z),De.viewport(x),De.scissor(A),De.setScissorTest(W),we){const Ge=Le.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,K)}else if(ze){const Ge=Le.get(w.texture),Ve=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,Ve)}R=-1},this.readRenderTargetPixels=function(w,X,K,Q,Z,we,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){De.bindFramebuffer(B.FRAMEBUFFER,Ye);try{const Ge=w.texture,Ve=Ge.format,qe=Ge.type;if(Ve!==pi&&ke.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=qe===nr&&(ge.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ge.has("EXT_color_buffer_float"));if(qe!==Ir&&ke.convert(qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===tr&&(Ee.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-Q&&K>=0&&K<=w.height-Z&&B.readPixels(X,K,Q,Z,ke.convert(Ve),ke.convert(qe),we)}finally{const Ge=E!==null?Le.get(E).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(w,X,K=0){const Q=Math.pow(2,-K),Z=Math.floor(X.image.width*Q),we=Math.floor(X.image.height*Q);Xe.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,w.x,w.y,Z,we),De.unbindTexture()},this.copyTextureToTexture=function(w,X,K,Q=0){const Z=X.image.width,we=X.image.height,ze=ke.convert(K.format),Ye=ke.convert(K.type);Xe.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,Z,we,ze,Ye,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,ze,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,ze,Ye,X.image),Q===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,X,K,Q,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(w.max.x-w.min.x),ze=Math.round(w.max.y-w.min.y),Ye=w.max.z-w.min.z+1,Ge=ke.convert(Q.format),Ve=ke.convert(Q.type);let qe;if(Q.isData3DTexture)Xe.setTexture3D(Q,0),qe=B.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Xe.setTexture2DArray(Q,0),qe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);const Qe=B.getParameter(B.UNPACK_ROW_LENGTH),Ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),vt=B.getParameter(B.UNPACK_SKIP_ROWS),Rn=B.getParameter(B.UNPACK_SKIP_IMAGES),xt=K.isCompressedTexture?K.mipmaps[Z]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,Ve,xt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,xt.data):B.texSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,Ve,xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Qe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Rn),Z===0&&Q.generateMipmaps&&B.generateMipmap(qe),De.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,De.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jh?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===hc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Iw extends av{}Iw.prototype.isWebGL1Renderer=!0;class Nw extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lv extends Va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cv=new Y,uv=new Y,hv=new Bt,Df=new l_,Vc=new Mc;class Uw extends zn{constructor(e=new Jn,t=new lv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)cv.fromBufferAttribute(t,i-1),uv.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cv.distanceTo(uv);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(i),Vc.radius+=s,e.ray.intersectsSphere(Vc)===!1)return;hv.copy(i).invert(),Df.copy(e.ray).applyMatrix4(hv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,h=new Y,f=new Y,d=new Y,u=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){const T=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),Df.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Df.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],s=[],o=[],a=new Y,l=new Bt;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new Y)}s[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dn(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(dn(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class If extends ki{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ow extends If{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Wc=new Y,Uf=new Nf,Of=new Nf,Ff=new Nf;class Fw extends ki{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Wc.subVectors(i[0],i[1]).add(i[0]),c=Wc);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Wc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Uf.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Of.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Ff.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Uf.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Of.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ff.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Uf.calc(l),Of.calc(l),Ff.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fv(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Bw(r,e){const t=1-r;return t*t*e}function kw(r,e){return 2*(1-r)*r*e}function zw(r,e){return r*r*e}function qa(r,e,t,n){return Bw(r,e)+kw(r,t)+zw(r,n)}function Hw(r,e){const t=1-r;return t*t*t*e}function Gw(r,e){const t=1-r;return 3*t*t*r*e}function Vw(r,e){return 3*(1-r)*r*r*e}function Ww(r,e){return r*r*r*e}function $a(r,e,t,n,i){return Hw(r,e)+Gw(r,t)+Vw(r,n)+Ww(r,i)}class dv extends ki{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($a(e,i.x,s.x,o.x,a.x),$a(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xw extends ki{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($a(e,i.x,s.x,o.x,a.x),$a(e,i.y,s.y,o.y,a.y),$a(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pv extends ki{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yw extends ki{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mv extends ki{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(qa(e,i.x,s.x,o.x),qa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qw extends ki{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(qa(e,i.x,s.x,o.x),qa(e,i.y,s.y,o.y),qa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gv extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(fv(a,l.x,c.x,h.x,f.x),fv(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}}var _v=Object.freeze({__proto__:null,ArcCurve:Ow,CatmullRomCurve3:Fw,CubicBezierCurve:dv,CubicBezierCurve3:Xw,EllipseCurve:If,LineCurve:pv,LineCurve3:Yw,QuadraticBezierCurve:mv,QuadraticBezierCurve3:qw,SplineCurve:gv});class $w extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _v[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _v[i.type]().fromJSON(i))}return this}}class vv extends $w{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pv(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new mv(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new dv(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gv(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new If(e,t,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bf extends Jn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new Y,h=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new sn(o,3)),this.setAttribute("normal",new sn(a,3)),this.setAttribute("uv",new sn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Xc=new Y,Yc=new Y,kf=new Y,qc=new xi;class Zw extends Jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(gc*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=qc;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),qc.getNormal(kf),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const v=(S+1)%3,y=f[S],T=f[v],b=qc[h[S]],E=qc[h[v]],R=`${y}_${T}`,I=`${T}_${y}`;I in d&&d[I]?(kf.dot(d[I].normal)<=s&&(u.push(b.x,b.y,b.z),u.push(E.x,E.y,E.z)),d[I]=null):R in d||(d[R]={index0:c[S],index1:c[v],normal:kf.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Xc.fromBufferAttribute(a,_),Yc.fromBufferAttribute(a,p),u.push(Xc.x,Xc.y,Xc.z),u.push(Yc.x,Yc.y,Yc.z)}this.setAttribute("position",new sn(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class zf extends vv{constructor(e){super(e),this.uuid=xo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new vv().fromJSON(i))}return this}}const Kw={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=xv(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,u;if(n&&(s=t1(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)f=r[g],d=r[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Za(s,o,t,a,l,u,0),o}};function xv(r,e,t,n,i){let s,o;if(i===f1(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Mv(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Mv(s,r[s],r[s+1],o);return o&&$c(o,o.next)&&(Ja(o),o=o.next),o}function Us(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&($c(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Za(r,e,t,n,i,s,o){if(!r)return;!o&&s&&o1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?jw(r,n,i,s):Jw(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Ja(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Qw(Us(r),e,t),Za(r,e,t,n,i,s,2)):o===2&&e1(r,e,t,n,i,s):Za(Us(r),e,t,n,i,s,1);break}}}function Jw(r){const e=r.prev,t=r,n=r.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&zo(i,a,s,l,o,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jw(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Nt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=Hf(u,g,e,t,n),S=Hf(_,p,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&zo(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&zo(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&zo(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&zo(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qw(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!$c(i,s)&&yv(i,n,n.next,s)&&Ka(i,s)&&Ka(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ja(n),Ja(n.next),n=r=s),n=n.next}while(n!==r);return Us(n)}function e1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c1(o,a)){let l=Sv(o,a);o=Us(o,o.next),l=Us(l,l.next),Za(o,e,t,n,i,s,0),Za(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function t1(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xv(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(l1(c));for(i.sort(n1),s=0;s<i.length;s++)t=i1(i[s],t);return t}function n1(r,e){return r.x-e.x}function i1(r,e){const t=r1(r,e);if(!t)return e;const n=Sv(t,r);return Us(n,n.next),Us(t,t.next)}function r1(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&zo(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Ka(t,r)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&s1(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function s1(r,e){return Nt(r.prev,r,e.prev)<0&&Nt(e.next,r,r.next)<0}function o1(r,e,t,n){let i=r;do i.z===0&&(i.z=Hf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,a1(i)}function a1(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Hf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function l1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function zo(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function c1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!u1(r,e)&&(Ka(r,e)&&Ka(e,r)&&h1(r,e)&&(Nt(r.prev,r,e.prev)||Nt(r,e.prev,e))||$c(r,e)&&Nt(r.prev,r,r.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function $c(r,e){return r.x===e.x&&r.y===e.y}function yv(r,e,t,n){const i=Kc(Nt(r,e,t)),s=Kc(Nt(r,e,n)),o=Kc(Nt(t,n,r)),a=Kc(Nt(t,n,e));return!!(i!==s&&o!==a||i===0&&Zc(r,t,e)||s===0&&Zc(r,n,e)||o===0&&Zc(t,r,n)||a===0&&Zc(t,e,n))}function Zc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Kc(r){return r>0?1:r<0?-1:0}function u1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ka(r,e){return Nt(r.prev,r,r.next)<0?Nt(r,e,r.next)>=0&&Nt(r,r.prev,e)>=0:Nt(r,e,r.prev)<0||Nt(r,r.next,e)<0}function h1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Sv(r,e){const t=new Gf(r.i,r.x,r.y),n=new Gf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Mv(r,e,t,n){const i=new Gf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ja(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Gf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ja{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ja.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Ev(e),Tv(n,e);let o=e.length;t.forEach(Ev);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Tv(n,t[l]);const a=Kw.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ev(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Tv(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Vf extends Jn{constructor(e=new zf([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new sn(i,3)),this.setAttribute("normal",new sn(s,3)),this.setAttribute("uv",new sn(o,2));function c(h){const f=i.length/3,d=h.extractPoints(t);let u=d.shape;const g=d.holes;ja.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];ja.isClockWise(S)===!0&&(g[p]=S.reverse())}const _=ja.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){const S=u[p];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=_.length;p<m;p++){const S=_[p],v=S[0]+f,y=S[1]+f,T=S[2]+f;n.push(v,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return d1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Vf(n,e.curveSegments)}}function d1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class p1 extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class m1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bv(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);const wv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ho{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g1=new D_(-1,1,1,-1,0,1);class _1 extends Jn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const v1=new _1;class Wf{constructor(e){this._mesh=new Fi(v1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class x1 extends Ho{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ya.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Av extends Ho{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class y1 extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class S1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x1(wv),this.copyPass.material.blending=Qi,this.clock=new m1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Av!==void 0&&(o instanceof Av?n=!0:o instanceof y1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class M1 extends Ho{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const E1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Go extends Ho{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mi(s,o,{type:nr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new mi(s,o,{type:nr});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new mi(s,o,{type:nr});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=E1;this.highPassUniforms=Ya.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ie(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wv;this.copyUniforms=Ya.clone(h.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pt,this.oldClearAlpha=1,this.basic=new yf,this.fsQuad=new Wf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ie(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Go.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Go.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new An({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new An({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Go.BlurDirectionX=new Ie(1,0),Go.BlurDirectionY=new Ie(0,1);const T1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class b1 extends Ho{constructor(){super();const e=T1;this.uniforms=Ya.clone(e.uniforms),this.material=new p1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class w1{constructor(e){this.container=e,this.mm=Tt.matchMedia(),this.numberOfLayers=50,this.layerDelay=40,this.layerSpacing=3,this.scene=null,this.renderer=null,this.animationRequestID=null,this.camera=null,this.cameraInitialZ=-60,this.cameraOffsetZ=-20,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.cameraZoomDelay=2.3,this.portalSquare=new Is,this.portalHexagon=new Is,this.portalCircle=new Is,this.portalActive=this.portalHexagon,this.portalOffsetZ=0,this.portalOffsetZActive=-14.5,this.portalOffsetX=12,this.mm.add("(max-width: 991px)",()=>{this.portalOffsetX=8}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{this.portalOffsetX=10}),this.mm.add("(min-width: 1920px)",()=>{this.portalOffsetX=12}),this.portalOffsetXSquarePortal=this.portalOffsetX,this.portalOffsetXSHexagonPortal=0,this.portalOffsetXCirclePortal=-this.portalOffsetX,this.params={strength:.8,radius:.95,threshold:0},this.init(e)}init(e){this.scene=new Nw,this.renderer=new av({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight);const t={ACESFilmic:zh,Cineon:kh,Linear:Fh,None:er,Reinhard:Bh};this.renderer.toneMapping=t.Cineon;const n=this.renderer.domElement;n.style.width="100%",n.style.height="100%",n.style.position="absolute",e.appendChild(n),this.camera=new ai(60,e.clientWidth/e.clientHeight,1,300),this.camera.position.set(0,0,this.cameraInitialZ),this.camera.lookAt(new Y(0,0,0)),this.scene.add(this.camera);const i=new M1(this.scene,this.camera),s=new Go(new Ie(e.clientWidth,e.clientHeight),this.params.strength,this.params.radius,this.params.threshold),o=new S1(this.renderer),a=new b1;o.addPass(i),o.addPass(s),o.addPass(a),this.initialState(this.scene),window.addEventListener("resize",()=>this.onWindowResize(this.renderer,o),!1),this.onWindowResize(this.renderer,o),this.animate(o)}animate(e){this.animationRequestID=requestAnimationFrame(()=>this.animate(e)),e.render()}initialState(e){const t=this.createSegment("square","#54EAAB");t.position.x=this.portalOffsetX,t.position.z=this.portalOffsetZ,this.portalSquare.add(t),e.add(this.portalSquare);const n=this.createSegment("hexagon","#5FB2FF");n.position.z=this.portalOffsetZ,this.portalHexagon.add(n),e.add(this.portalHexagon);const i=this.createSegment("circle","#CBA1FE");i.position.x=-this.portalOffsetX,i.position.z=this.portalOffsetZ,this.portalCircle.add(i),e.add(this.portalCircle)}bringForwardAnimation(){Tt.timeline().to(this.camera.position,{z:this.cameraOffsetZ,duration:.6,ease:"power4.out"},"a").to(this.portalActive.position,{duration:.6,ease:"power4.out",z:this.portalOffsetZActive},"a")}focus(e){const t={square:this.portalOffsetXSquarePortal,hexagon:this.portalOffsetXSHexagonPortal,circle:this.portalOffsetXCirclePortal}[e],n=this.portalActive;switch(e){case"square":this.portalActive=this.portalSquare;break;case"hexagon":this.portalActive=this.portalHexagon;break;case"circle":this.portalActive=this.portalCircle;break;default:console.log(`Unknown shape: ${e}`);return}Tt.defaults({duration:.9,ease:"power4.inOut"}),Tt.timeline().to(this.camera.position,{x:t},"a").to(n.position,{z:0},"a").to(this.portalActive.position,{z:this.portalOffsetZActive},"a")}start(){const e=Tt.timeline();for(let t=1;t<this.numberOfLayers;t++)e.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.portalActive.children[0],i=n.clone();i.position.z=n.position.z+t*this.layerSpacing,this.portalActive.add(i)}});return e.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{this.dispose()}},`-=${this.cameraZoomDelay}`),e}createSegment(e=this.shape,t=this.color){const n=this.createGeometry(e),i=new lv({color:t});return new Uw(n,i)}createGeometry(e){switch(e){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${e}`)}}createSquareGeometry(){const t=new zf;return t.moveTo(-2.4/2,-2.4/2),t.lineTo(2.4/2,-2.4/2),t.lineTo(2.4/2,2.4/2),t.lineTo(-2.4/2,2.4/2),t.lineTo(-2.4/2,-2.4/2),new Vf(t)}createCircleGeometry(){const n=new Bf(1.4,96);return new Zw(n)}createHexagonGeometry(){const n=new zf,i=0,s=0;n.moveTo(i+1.5*Math.cos(0),s+1.5*Math.sin(0));for(let a=1;a<=6;a+=1){const l=a*2*Math.PI/6;n.lineTo(i+1.5*Math.cos(l),s+1.5*Math.sin(l))}return new Jn().setFromPoints(n.getPoints())}onWindowResize(e,t){let n=window.innerWidth,i=window.innerHeight;e.setSize(n,i);let s=n/i;this.camera.fov=this.adjustFOV(s),this.camera.aspect=s,this.camera.updateProjectionMatrix(),t.setSize(n,i)}adjustFOV(e){let t=15;return this.mm.add("(max-width: 991px)",()=>{t=45}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{t=55}),this.mm.add("(min-width: 1920px)",()=>{t=66}),2*Math.atan(Math.tan(t*Math.PI/180/2)/e)*(180/Math.PI)}dispose(){cancelAnimationFrame(this.animationRequestID),this.disposeScene(this.scene),this.renderer.dispose(),this.renderer.domElement.remove()}disposeScene(e){if(e.children.length>0)for(let t=e.children.length-1;t>=0;t--)this.disposeScene(e.children[t]);if(e.geometry&&e.geometry.dispose(),e.material)if(e.material.length)for(let t=0;t<e.material.length;++t)e.material[t].dispose();else e.material.dispose();e.removeFromParent(),e=null}}class A1{constructor(){Pt(this,"initVideos",()=>{const e=document.querySelectorAll(".portal__video");if(!e.length){console.warn("No video containers found");return}e.forEach(t=>{const n=t.getAttribute("data-mp4"),i=t.getAttribute("data-webm");if(!n||!i){console.error("Video source attributes missing",t);return}const s=document.createElement("video");s.style.width="100%",s.style.height="100%",s.autoplay=!0,s.loop=!0,s.playsinline=!0,s.muted=!0;const o=document.createElement("source");o.src=n,o.type="video/mp4";const a=document.createElement("source");a.src=i,a.type="video/webm",s.appendChild(o),s.appendChild(a),t.appendChild(s),s.addEventListener("error",l=>{console.error("Error loading video:",l)})})});if(this.$container=document.getElementById("portalsContainer"),!this.$container){console.warn("No portal container found (#portalsContainer)");return}this.portalsWebGL=new w1(this.$container),this.portalTriggers={},this.portalScrollTrigger=null,this.activePortal=document.querySelector(".portal:not(.w-condition-invisible)"),Tt.set(this.activePortal,{autoAlpha:0}),this.initTriggers(),this.initVideos(),this.initWhenInView()}initWhenInView(){this.portalScrollTrigger=rt.create({trigger:this.$container,once:!0,start:"top 20%",onEnter:()=>{this.portalsWebGL.bringForwardAnimation();const e=document.getElementById("portalTriggerHexagon");this.togglePortal(e,!0)}})}getPortalTL(){let e=Tt.timeline({paused:!0});return e.to(this.activePortal,{duration:.9,opacity:0,scale:.9,ease:"power4.out"},"a"),e.add(this.portalsWebGL.start(),"a"),e}togglePortal(e,t=!1){const n=e.getAttribute("data-shape"),i=e.getAttribute("data-content"),s=document.getElementById(i),o=s==null?void 0:s.querySelector(".portal__video");if(!n||!i){console.warn("Shape or content ID missing",e);return}switch(n){case"square":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="auto",this.portalTriggers.hexagon.style.right="0";break;case"hexagon":this.portalTriggers.square.style.display="block",this.portalTriggers.hexagon.style.display="none",this.portalTriggers.circle.style.display="block";break;case"circle":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="0%";break;default:console.warn("Shape not found.")}t&&Tt.set(s,{autoAlpha:1}),this.portalsWebGL.focus(n);const a=this.activePortal.querySelector(".portal__video");t||Tt.fromTo(a,{opacity:1,scale:1},{opacity:0,scale:.98,duration:.6,ease:"power4.out"}),Tt.fromTo(o,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.9,delay:.6,ease:"power4.out"}),applyTextShuffle(i),setTimeout(()=>{if(!t){const l=document.querySelector(".portal:not(.w-condition-invisible)");l==null||l.classList.add("w-condition-invisible");const c=document.getElementById(i);c==null||c.classList.remove("w-condition-invisible"),this.activePortal=c}},150)}initTriggers(){this.portalTriggers.square=this.setupTrigger("portalTriggerSquare"),this.portalTriggers.hexagon=this.setupTrigger("portalTriggerHexagon"),this.portalTriggers.circle=this.setupTrigger("portalTriggerCircle")}setupTrigger(e){const t=document.getElementById(e);if(!t){console.warn("No portal trigger found with ID: "+e);return}return t.addEventListener("click",n=>this.togglePortal(n.target)),t.style.display=e==="portalTriggerHexagon"?"none":"block",t}}const C1=(r,e)=>{e.portalManager=new A1,setTimeout(()=>{rt.refresh()},150)},R1=(r,e)=>{e.portalManager.portalScrollTrigger.kill()};/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ur,Os,Xf,Jc,Qa,jc,Qc,el,yi="transform",Yf=yi+"Origin",Cv,qf=function(e){var t=e.ownerDocument||e;for(!(yi in e.style)&&("msTransform"in e.style)&&(yi="msTransform",Yf=yi+"Origin");t.parentNode&&(t=t.parentNode););if(Os=window,Qc=new hr,t){ur=t,Xf=t.documentElement,Jc=t.body,el=ur.createElementNS("http://www.w3.org/2000/svg","g"),el.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Cv=i.offsetParent!==n,s.removeChild(n))}return t},P1=function(e){for(var t,n;e&&e!==Jc;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Rv=[],Pv=[],$f=function(){return Os.pageYOffset||ur.scrollTop||Xf.scrollTop||Jc.scrollTop||0},Zf=function(){return Os.pageXOffset||ur.scrollLeft||Xf.scrollLeft||Jc.scrollLeft||0},Kf=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},L1=function r(e){if(Os.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Jf=function r(e,t){if(e.parentNode&&(ur||qf(e))){var n=Kf(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ur.createElementNS?ur.createElementNS(i.replace(/^https/,"http"),s):ur.createElement(s);return t&&(n?(jc||(jc=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),jc.appendChild(c)):(Qa||(Qa=r(e),Qa.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",Qa.appendChild(c))),c}throw"Need document and parent."},D1=function(e){for(var t=new hr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Lv=function(e){var t=e.getCTM(),n;return t||(n=e.style[yi],e.style[yi]="none",e.appendChild(el),t=el.getCTM(),e.removeChild(el),n?e.style[yi]=n:e.style.removeProperty(yi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Qc.clone()},I1=function(e,t){var n=Kf(e),i=e===n,s=n?Rv:Pv,o=e.parentNode,a,l,c,h,f,d;if(e===Os)return e;if(s.length||s.push(Jf(e,1),Jf(e,2),Jf(e,3)),a=n?jc:Qa,n)i?(c=Lv(e),h=-c.e/c.a,f=-c.f/c.d,l=Qc):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?D1(l):l.getItem(0).matrix:Qc,h=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new hr,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,Cv)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Os.getComputedStyle(c)[yi]+"").length>4&&(h=c.offsetLeft,f=c.offsetTop,c=0);if(d=Os.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-h+"px",c[yi]=d[yi],c[Yf]=d[Yf],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},jf=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},hr=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),jf(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return jf(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return jf(this,h*i+d*o,h*s+d*a,f*i+u*o,f*s+u*a,l+g*i+_*o,c+g*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*h+d||0,i},r}();function on(r,e,t,n){if(!r||!r.parentNode||(ur||qf(r)).documentElement===r)return new hr;var i=P1(r),s=Kf(r),o=s?Rv:Pv,a=I1(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&L1(r),u=new hr((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:Zf()),l.top+(d?0:$f()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function Dv(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function N1(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ft,St,jn,Si,fr,Qf,dr,ed,tl,Vr,Iv,td,nl,nd,il,Mi,rl,eu,Nv,id,tu=0,Uv=function(){return typeof window!="undefined"},Ov=function(){return ft||Uv()&&(ft=window.gsap)&&ft.registerPlugin&&ft},Wr=function(e){return typeof e=="function"},sl=function(e){return typeof e=="object"},Ei=function(e){return typeof e=="undefined"},nu=function(){return!1},ol="transform",rd="transformOrigin",Xr=function(e){return Math.round(e*1e4)/1e4},al=Array.isArray,iu=function(e,t){var n=jn.createElementNS?jn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jn.createElement(e);return n.style?n:jn.createElement(e)},Fv=180/Math.PI,Fs=1e20,U1=new hr,Yr=Date.now||function(){return new Date().getTime()},Bs=[],Vo={},O1=0,F1=/^(?:a|input|textarea|button|select)$/i,Bv=0,Wo={},pr={},kv=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},B1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zv=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},Hv=function(){return Bs.forEach(function(e){return e()})},k1=function(e){Bs.push(e),Bs.length===1&&ft.ticker.add(Hv)},Gv=function(){return!Bs.length&&ft.ticker.remove(Hv)},Vv=function(e){for(var t=Bs.length;t--;)Bs[t]===e&&Bs.splice(t,1);ft.to(Gv,{overwrite:!0,delay:15,duration:0,onComplete:Gv,data:"_draggable"})},z1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$t=function(e,t,n,i){if(e.addEventListener){var s=nl[t];i=i||(Iv?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Vt=function(e,t,n,i){if(e.removeEventListener){var s=nl[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},li=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},H1=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},G1=function r(e){nd=e.touches&&tu<e.touches.length,Vt(e.target,"touchend",r)},Wv=function(e){nd=e.touches&&tu<e.touches.length,$t(e.target,"touchend",G1)},Xo=function(e){return St.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Yo=function(e){return St.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},Xv=function r(e,t){$t(e,"scroll",t),qo(e.parentNode)||r(e.parentNode,t)},Yv=function r(e,t){Vt(e,"scroll",t),qo(e.parentNode)||r(e.parentNode,t)},qo=function(e){return!e||e===Si||e.nodeType===9||e===jn.body||e===St||!e.nodeType||!e.parentNode},qv=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,qo(e)?Math.max(Si[i],fr[i])-(St["inner"+n]||Si[s]||fr[s]):e[i]-e[s])},sd=function r(e,t){var n=qv(e,"x"),i=qv(e,"y");qo(e)?e=pr:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},od=function(e,t,n){var i=e.style;!i||(Ei(i[t])&&(t=tl(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},ll=function(e){return St.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},ks={},$o=function(e){if(e===St)return ks.left=ks.top=0,ks.width=ks.right=Si.clientWidth||e.innerWidth||fr.clientWidth||0,ks.height=ks.bottom=(e.innerHeight||0)-20<Si.clientHeight?Si.clientHeight:e.innerHeight||fr.clientHeight||0,ks;var t=e.ownerDocument||jn,n=Ei(e.pageX)?!e.nodeType&&!Ei(e.left)&&!Ei(e.top)?e:Vr(e)[0].getBoundingClientRect():{left:e.pageX-Yo(t),top:e.pageY-Xo(t),right:e.pageX-Yo(t)+1,bottom:e.pageY-Xo(t)+1};return Ei(n.right)&&!Ei(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Ei(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(e,t,n){var i=e.vars,s=i[n],o=e._listeners[t],a;return Wr(s)&&(a=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},$v=function(e,t){var n=Vr(e)[0],i,s,o;return!n.nodeType&&n!==St?Ei(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):V1(n,t)},ci={},V1=function(e,t){t=Vr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||jn,s,o,a,l,c,h,f,d,u,g,_,p,m;if(e===St)a=Xo(i),s=Yo(i),o=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===St||Ei(t))return e.getBoundingClientRect();s=a=0,n?(g=e.getBBox(),_=g.width,p=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,a=g.y||0,_=g.width,p=g.height),_||(m=ll(e),g=m.boxSizing==="border-box",_=(parseFloat(m.width)||e.clientWidth||0)+(g?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),p=(parseFloat(m.height)||e.clientHeight||0)+(g?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=_,l=p}return e===t?{left:s,top:a,width:o-s,height:l-a}:(c=on(t,!0).multiply(on(e)),h=c.apply({x:s,y:a}),f=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:s,y:l}),s=Math.min(h.x,f.x,d.x,u.x),a=Math.min(h.y,f.y,d.y,u.y),{left:s,top:a,width:Math.max(h.x,f.x,d.x,u.x)-s,height:Math.max(h.y,f.y,d.y,u.y)-a})},ad=function(e,t,n,i,s,o){var a={},l,c,h;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],h=t.length,sl(t[0]))for(c=0;c<h;c++)l[c]=kv(t[c],s);else for(c=0;c<h;c++)l[c]=t[c]*s;n+=1.1,i-=1.1}else Wr(t)?a.end=function(f){var d=t.call(e,f),u,g;if(s!==1)if(sl(d)){u={};for(g in d)u[g]=d[g]*s;d=u}else d*=s;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},W1=function r(e){var t;return!e||!e.getAttribute||e===fr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(F1.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},ru=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:nu,ft.set(i,{lazy:!0,userSelect:t?"text":"none"})},X1=function r(e){if(ll(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Zv,ld,Y1=function(e,t){e=ft.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,f=e.scrollHeight,d=0,u=0,g=0,_,p,m,S,v,y;Zv&&t.force3D!==!1?(v="translate3d(",y="px,0px)"):ol&&(v="translate(",y="px)"),this.scrollTop=function(T,b){if(!arguments.length)return-this.top();this.top(-T,b)},this.scrollLeft=function(T,b){if(!arguments.length)return-this.left();this.left(-T,b)},this.left=function(T,b){if(!arguments.length)return-(e.scrollLeft+a);var E=e.scrollLeft-c,R=a;if((E>2||E<-2)&&!b){c=e.scrollLeft,ft.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}T=-T,T<0?(a=T-.5|0,T=0):T>u?(a=T-u|0,T=u):a=0,(a||R)&&(this._skip||(i[ol]=v+-a+"px,"+-o+y),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=T|0,c=e.scrollLeft},this.top=function(T,b){if(!arguments.length)return-(e.scrollTop+o);var E=e.scrollTop-l,R=o;if((E>2||E<-2)&&!b){l=e.scrollTop,ft.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}T=-T,T<0?(o=T-.5|0,T=0):T>g?(o=T-g|0,T=g):o=0,(o||R)&&(this._skip||(i[ol]=v+-a+"px,"+-o+y)),e.scrollTop=T|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)S=s.nextSibling,e.appendChild(s),s=S;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)S=s.nextSibling,n.appendChild(s),s=S;e.appendChild(n),this.calibrate()}},this.calibrate=function(T){var b=e.clientWidth===_,E,R,I;l=e.scrollTop,c=e.scrollLeft,!(b&&e.clientHeight===p&&n.offsetHeight===m&&h===e.scrollWidth&&f===e.scrollHeight&&!T)&&((o||a)&&(R=this.left(),I=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),E=ll(e),(!b||T)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(E.paddingLeft)+(ld?parseFloat(E.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",ld&&(i.paddingBottom=E.paddingBottom),_=e.clientWidth,p=e.clientHeight,h=e.scrollWidth,f=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-p,m=n.offsetHeight,i.display="block",(R||I)&&(this.left(R),this.top(I)))},this.content=n,this.element=e,this._skip=!1,this.enable()},cd=function(e){if(Uv()&&document.body){var t=window&&window.navigator;St=window,jn=document,Si=jn.documentElement,fr=jn.body,Qf=iu("div"),eu=!!window.PointerEvent,dr=iu("div"),dr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",rl=dr.style.cursor==="grab"?"grab":"move",il=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,td="ontouchstart"in Si&&"orientation"in St||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),ld=function(){var n=iu("div"),i=iu("div"),s=i.style,o=fr,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),nl=function(n){for(var i=n.split(","),s=("onpointerdown"in Qf?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in Qf?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Si.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Iv=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),$t(jn,"touchcancel",nu),$t(St,"touchmove",nu),fr&&fr.addEventListener("touchstart",nu),$t(jn,"contextmenu",function(){for(var n in Vo)Vo[n].isPressed&&Vo[n].endDrag()}),ft=ed=Ov()}ft?(Mi=ft.plugins.inertia,Nv=ft.core.context||function(){},tl=ft.utils.checkPrefix,ol=tl(ol),rd=tl(rd),Vr=ft.utils.toArray,id=ft.core.getStyleSaver,Zv=!!tl("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},q1=function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),Zo=function(r){N1(e,r);function e(t,n){var i;i=r.call(this)||this,ed||cd(1),t=Vr(t)[0],i.styles=id&&id(t,"transform,left,top"),Mi||(Mi=ft.plugins.inertia),i.vars=n=kv(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,ft.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),f=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),d=n.minimumMovement||2,u=Dv(i),g=Vr(n.trigger||n.handle||t),_={},p=0,m=!1,S=n.autoScrollMarginTop||40,v=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,T=n.autoScrollMarginLeft||40,b=n.clickableTest||W1,E=0,R=t._gsap||ft.core.getCache(t),I=X1(t),x=function(N,ae){return parseFloat(R.get(t,N,ae))},A=t.ownerDocument||jn,W,k,L,F,z,G,$,ne,P,re,ue,q,D,V,te,fe,le,me,Re,ve,B,Ae,ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de=function(N){return li(N),N.stopImmediatePropagation&&N.stopImmediatePropagation(),!1},he=function se(N){if(u.autoScroll&&u.isDragging&&(m||le)){var ae=t,O=u.autoScroll*15,ee,oe,J,ye,pe,Pe,We,Oe;for(m=!1,pr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,pr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft,ye=u.pointerX-pr.scrollLeft,pe=u.pointerY-pr.scrollTop;ae&&!oe;)oe=qo(ae.parentNode),ee=oe?pr:ae.parentNode,J=oe?{bottom:Math.max(Si.clientHeight,St.innerHeight||0),right:Math.max(Si.clientWidth,St.innerWidth||0),left:0,top:0}:ee.getBoundingClientRect(),Pe=We=0,f&&(Oe=ee._gsMaxScrollY-ee.scrollTop,Oe<0?We=Oe:pe>J.bottom-y&&Oe?(m=!0,We=Math.min(Oe,O*(1-Math.max(0,J.bottom-pe)/y)|0)):pe<J.top+S&&ee.scrollTop&&(m=!0,We=-Math.min(ee.scrollTop,O*(1-Math.max(0,pe-J.top)/S)|0)),We&&(ee.scrollTop+=We)),h&&(Oe=ee._gsMaxScrollX-ee.scrollLeft,Oe<0?Pe=Oe:ye>J.right-v&&Oe?(m=!0,Pe=Math.min(Oe,O*(1-Math.max(0,J.right-ye)/v)|0)):ye<J.left+T&&ee.scrollLeft&&(m=!0,Pe=-Math.min(ee.scrollLeft,O*(1-Math.max(0,ye-J.left)/T)|0)),Pe&&(ee.scrollLeft+=Pe)),oe&&(Pe||We)&&(St.scrollTo(ee.scrollLeft,ee.scrollTop),ot(u.pointerX+Pe,u.pointerY+We)),ae=ee}if(le){var Je=u.x,ct=u.y;a?(u.deltaX=Je-parseFloat(R.rotation),u.rotation=Je,R.rotation=Je+"deg",R.renderTransform(1,R)):k?(f&&(u.deltaY=ct-k.top(),k.top(ct)),h&&(u.deltaX=Je-k.left(),k.left(Je))):o?(f&&(u.deltaY=ct-parseFloat(R.y),R.y=ct+"px"),h&&(u.deltaX=Je-parseFloat(R.x),R.x=Je+"px"),R.renderTransform(1,R)):(f&&(u.deltaY=ct-parseFloat(t.style.top||0),t.style.top=ct+"px"),h&&(u.deltaX=Je-parseFloat(t.style.left||0),t.style.left=Je+"px")),ne&&!N&&!Xe&&(Xe=!0,kt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),f&&(u.y-=u.deltaY),se(!0)),Xe=!1)}le=!1},Ne=function(N,ae){var O=u.x,ee=u.y,oe,J;t._gsap||(R=ft.core.getCache(t)),R.uncache&&ft.getProperty(t,"x"),o?(u.x=parseFloat(R.x),u.y=parseFloat(R.y)):a?u.x=u.rotation=parseFloat(R.rotation):k?(u.y=k.top(),u.x=k.left()):(u.y=parseFloat(t.style.top||(J=ll(t))&&J.top)||0,u.x=parseFloat(t.style.left||(J||{}).left)||0),(Re||ve||B)&&!ae&&(u.isDragging||u.isThrowing)&&(B&&(Wo.x=u.x,Wo.y=u.y,oe=B(Wo),oe.x!==u.x&&(u.x=oe.x,le=!0),oe.y!==u.y&&(u.y=oe.y,le=!0)),Re&&(oe=Re(u.x),oe!==u.x&&(u.x=oe,a&&(u.rotation=oe),le=!0)),ve&&(oe=ve(u.y),oe!==u.y&&(u.y=oe),le=!0)),le&&he(!0),N||(u.deltaX=u.x-O,u.deltaY=u.y-ee,kt(u,"throwupdate","onThrowUpdate"))},He=function(N,ae,O,ee){return ae==null&&(ae=-Fs),O==null&&(O=Fs),Wr(N)?function(oe){var J=u.isPressed?1-u.edgeResistance:1;return N.call(u,(oe>O?O+(oe-O)*J:oe<ae?ae+(oe-ae)*J:oe)*ee)*ee}:al(N)?function(oe){for(var J=N.length,ye=0,pe=Fs,Pe,We;--J>-1;)Pe=N[J],We=Pe-oe,We<0&&(We=-We),We<pe&&Pe>=ae&&Pe<=O&&(ye=J,pe=We);return N[ye]}:isNaN(N)?function(oe){return oe}:function(){return N*ee}},xe=function(N,ae,O,ee,oe,J,ye){return J=J&&J<Fs?J*J:Fs,Wr(N)?function(pe){var Pe=u.isPressed?1-u.edgeResistance:1,We=pe.x,Oe=pe.y,Je,ct,dt;return pe.x=We=We>O?O+(We-O)*Pe:We<ae?ae+(We-ae)*Pe:We,pe.y=Oe=Oe>oe?oe+(Oe-oe)*Pe:Oe<ee?ee+(Oe-ee)*Pe:Oe,Je=N.call(u,pe),Je!==pe&&(pe.x=Je.x,pe.y=Je.y),ye!==1&&(pe.x*=ye,pe.y*=ye),J<Fs&&(ct=pe.x-We,dt=pe.y-Oe,ct*ct+dt*dt>J&&(pe.x=We,pe.y=Oe)),pe}:al(N)?function(pe){for(var Pe=N.length,We=0,Oe=Fs,Je,ct,dt,nt;--Pe>-1;)dt=N[Pe],Je=dt.x-pe.x,ct=dt.y-pe.y,nt=Je*Je+ct*ct,nt<Oe&&(We=Pe,Oe=nt);return Oe<=J?N[We]:pe}:function(pe){return pe}},be=function(){var N,ae,O,ee;$=!1,k?(k.calibrate(),u.minX=ue=-k.maxScrollLeft(),u.minY=D=-k.maxScrollTop(),u.maxX=re=u.maxY=q=0,$=!0):n.bounds&&(N=$v(n.bounds,t.parentNode),a?(u.minX=ue=N.left,u.maxX=re=N.left+N.width,u.minY=D=u.maxY=q=0):!Ei(n.bounds.maxX)||!Ei(n.bounds.maxY)?(N=n.bounds,u.minX=ue=N.minX,u.minY=D=N.minY,u.maxX=re=N.maxX,u.maxY=q=N.maxY):(ae=$v(t,t.parentNode),u.minX=ue=Math.round(x(l,"px")+N.left-ae.left),u.minY=D=Math.round(x(c,"px")+N.top-ae.top),u.maxX=re=Math.round(ue+(N.width-ae.width)),u.maxY=q=Math.round(D+(N.height-ae.height))),ue>re&&(u.minX=re,u.maxX=re=ue,ue=u.minX),D>q&&(u.minY=q,u.maxY=q=D,D=u.minY),a&&(u.minRotation=ue,u.maxRotation=re),$=!0),n.liveSnap&&(O=n.liveSnap===!0?n.snap||{}:n.liveSnap,ee=al(O)||Wr(O),a?(Re=He(ee?O:O.rotation,ue,re,1),ve=null):O.points?B=xe(ee?O:O.points,ue,re,D,q,O.radius,k?-1:1):(h&&(Re=He(ee?O:O.x||O.left||O.scrollLeft,ue,re,k?-1:1)),f&&(ve=He(ee?O:O.y||O.top||O.scrollTop,D,q,k?-1:1))))},Ze=function(){u.isThrowing=!1,kt(u,"throwcomplete","onThrowComplete")},_e=function(){u.isThrowing=!1},_t=function(N,ae){var O,ee,oe,J;N&&Mi?(N===!0&&(O=n.snap||n.liveSnap||{},ee=al(O)||Wr(O),N={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?N.rotation=ad(u,ee?O:O.rotation,re,ue,1,ae):(h&&(N[l]=ad(u,ee?O:O.points||O.x||O.left,re,ue,k?-1:1,ae||u.lockedAxis==="x")),f&&(N[c]=ad(u,ee?O:O.points||O.y||O.top,q,D,k?-1:1,ae||u.lockedAxis==="y")),(O.points||al(O)&&sl(O[0]))&&(N.linkedProps=l+","+c,N.radius=O.radius))),u.isThrowing=!0,J=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,N.duration||(N.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?J===0||sl(N)&&N.resistance>1e3?0:.5:n.minDuration,overshoot:J}),u.tween=oe=ft.to(k||t,{inertia:N,data:"_draggable",inherit:!1,onComplete:Ze,onInterrupt:_e,onUpdate:n.fastMode?kt:Ne,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:O&&O.radius?[!1,!0]:[]}),n.fastMode||(k&&(k._skip=!0),oe.render(1e9,!0,!0),Ne(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),oe.play(0),Ne(!0,!0),k&&(k._skip=!1))):$&&u.applyBounds()},$e=function(N){var ae=Ee,O;Ee=on(t.parentNode,!0),N&&u.isPressed&&!Ee.equals(ae||new hr)&&(O=ae.inverse().apply({x:L,y:F}),Ee.apply(O,O),L=O.x,F=O.y),Ee.equals(U1)&&(Ee=null)},ke=function(){var N=1-u.edgeResistance,ae=I?Yo(A):0,O=I?Xo(A):0,ee,oe,J;o&&(R.x=x(l,"px")+"px",R.y=x(c,"px")+"px",R.renderTransform()),$e(!1),ci.x=u.pointerX-ae,ci.y=u.pointerY-O,Ee&&Ee.apply(ci,ci),L=ci.x,F=ci.y,le&&(ot(u.pointerX,u.pointerY),he(!0)),ie=on(t),k?(be(),G=k.top(),z=k.left()):(Ue()?(Ne(!0,!0),be()):u.applyBounds(),a?(ee=t.ownerSVGElement?[R.xOrigin-t.getBBox().x,R.yOrigin-t.getBBox().y]:(ll(t)[rd]||"0 0").split(" "),fe=u.rotationOrigin=on(t).apply({x:parseFloat(ee[0])||0,y:parseFloat(ee[1])||0}),Ne(!0,!0),oe=u.pointerX-fe.x-ae,J=fe.y-u.pointerY+O,z=u.x,G=u.y=Math.atan2(J,oe)*Fv):(G=x(c,"px"),z=x(l,"px"))),$&&N&&(z>re?z=re+(z-re)/N:z<ue&&(z=ue-(ue-z)/N),a||(G>q?G=q+(G-q)/N:G<D&&(G=D-(D-G)/N))),u.startX=z=Xr(z),u.startY=G=Xr(G)},Ue=function(){return u.tween&&u.tween.isActive()},Fe=function(){dr.parentNode&&!Ue()&&!u.isDragging&&dr.parentNode.removeChild(dr)},Ke=function(N,ae){var O;if(!W||u.isPressed||!N||(N.type==="mousedown"||N.type==="pointerdown")&&!ae&&Yr()-E<30&&nl[u.pointerEvent.type]){M&&N&&W&&li(N);return}if(De=Ue(),ce=!1,u.pointerEvent=N,nl[N.type]?(ge=~N.type.indexOf("touch")?N.currentTarget||N.target:A,$t(ge,"touchend",U),$t(ge,"touchmove",Te),$t(ge,"touchcancel",U),$t(A,"touchstart",Wv)):(ge=null,$t(A,"mousemove",Te)),Le=null,(!eu||!ge)&&($t(A,"mouseup",U),N&&N.target&&$t(N.target,"mouseup",U)),Ae=b.call(u,N.target)&&n.dragClickables===!1&&!ae,Ae){$t(N.target,"change",U),kt(u,"pressInit","onPressInit"),kt(u,"press","onPress"),ru(g,!0),M=!1;return}if(H=!ge||h===f||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&N&&(N.ctrlKey||N.which>2)?!1:h?"y":"x",M=!H&&!u.allowEventDefault,M&&(li(N),$t(St,"touchforcechange",li)),N.changedTouches?(N=V=N.changedTouches[0],te=N.identifier):N.pointerId?te=N.pointerId:V=te=null,tu++,k1(he),F=u.pointerY=N.pageY,L=u.pointerX=N.pageX,kt(u,"pressInit","onPressInit"),(H||u.autoScroll)&&sd(t.parentNode),t.parentNode&&u.autoScroll&&!k&&!a&&t.parentNode._gsMaxScrollX&&!dr.parentNode&&!t.getBBox&&(dr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(dr)),ke(),u.tween&&u.tween.kill(),u.isThrowing=!1,ft.killTweensOf(k||t,_,!0),k&&ft.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!k&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,ne=!!(n.onDrag||u._listeners.drag),P=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(O=g.length;--O>-1;)ft.set(g[O],{cursor:n.activeCursor||n.cursor||(rl==="grab"?"grabbing":rl)});kt(u,"press","onPress")},Te=function(N){var ae=N,O,ee,oe,J,ye,pe;if(!W||nd||!u.isPressed||!N){M&&N&&W&&li(N);return}if(u.pointerEvent=N,O=N.changedTouches,O){if(N=O[0],N!==V&&N.identifier!==te){for(J=O.length;--J>-1&&(N=O[J]).identifier!==te&&N.target!==t;);if(J<0)return}}else if(N.pointerId&&te&&N.pointerId!==te)return;if(ge&&H&&!Le&&(ci.x=N.pageX-(I?Yo(A):0),ci.y=N.pageY-(I?Xo(A):0),Ee&&Ee.apply(ci,ci),ee=ci.x,oe=ci.y,ye=Math.abs(ee-L),pe=Math.abs(oe-F),(ye!==pe&&(ye>d||pe>d)||il&&H===Le)&&(Le=ye>pe&&h?"x":"y",H&&Le!==H&&$t(St,"touchforcechange",li),u.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(u.lockedAxis=Le==="x"?"y":"x",Wr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,ae)),il&&H===Le))){U(ae);return}!u.allowEventDefault&&(!H||Le&&H!==Le)&&ae.cancelable!==!1?(li(ae),M=!0):M&&(M=!1),u.autoScroll&&(m=!0),ot(N.pageX,N.pageY,P)},ot=function(N,ae,O){var ee=1-u.dragResistance,oe=1-u.edgeResistance,J=u.pointerX,ye=u.pointerY,pe=G,Pe=u.x,We=u.y,Oe=u.endX,Je=u.endY,ct=u.endRotation,dt=le,nt,at,mt,w,X,K;u.pointerX=N,u.pointerY=ae,I&&(N-=Yo(A),ae-=Xo(A)),a?(w=Math.atan2(fe.y-ae,N-fe.x)*Fv,X=u.y-w,X>180?(G-=360,u.y=w):X<-180&&(G+=360,u.y=w),u.x!==z||Math.abs(G-w)>d?(u.y=w,mt=z+(G-w)*ee):mt=z):(Ee&&(K=N*Ee.a+ae*Ee.c+Ee.e,ae=N*Ee.b+ae*Ee.d+Ee.f,N=K),at=ae-F,nt=N-L,at<d&&at>-d&&(at=0),nt<d&&nt>-d&&(nt=0),(u.lockAxis||u.lockedAxis)&&(nt||at)&&(K=u.lockedAxis,K||(u.lockedAxis=K=h&&Math.abs(nt)>Math.abs(at)?"y":f?"x":null,K&&Wr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),K==="y"?at=0:K==="x"&&(nt=0)),mt=Xr(z+nt*ee),w=Xr(G+at*ee)),(Re||ve||B)&&(u.x!==mt||u.y!==w&&!a)&&(B&&(Wo.x=mt,Wo.y=w,K=B(Wo),mt=Xr(K.x),w=Xr(K.y)),Re&&(mt=Xr(Re(mt))),ve&&(w=Xr(ve(w)))),$&&(mt>re?mt=re+Math.round((mt-re)*oe):mt<ue&&(mt=ue+Math.round((mt-ue)*oe)),a||(w>q?w=Math.round(q+(w-q)*oe):w<D&&(w=Math.round(D+(w-D)*oe)))),(u.x!==mt||u.y!==w&&!a)&&(a?(u.endRotation=u.x=u.endX=mt,le=!0):(f&&(u.y=u.endY=w,le=!0),h&&(u.x=u.endX=mt,le=!0)),!O||kt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart")):(u.pointerX=J,u.pointerY=ye,G=pe,u.x=Pe,u.y=We,u.endX=Oe,u.endY=Je,u.endRotation=ct,le=dt))},U=function se(N,ae){if(!W||!u.isPressed||N&&te!=null&&!ae&&(N.pointerId&&N.pointerId!==te&&N.target!==t||N.changedTouches&&!H1(N.changedTouches,te))){M&&N&&W&&li(N);return}u.isPressed=!1;var O=N,ee=u.isDragging,oe=u.vars.allowContextMenu&&N&&(N.ctrlKey||N.which>2),J=ft.delayedCall(.001,Fe),ye,pe,Pe,We,Oe;if(ge?(Vt(ge,"touchend",se),Vt(ge,"touchmove",Te),Vt(ge,"touchcancel",se),Vt(A,"touchstart",Wv)):Vt(A,"mousemove",Te),Vt(St,"touchforcechange",li),(!eu||!ge)&&(Vt(A,"mouseup",se),N&&N.target&&Vt(N.target,"mouseup",se)),le=!1,ee&&(p=Bv=Yr(),u.isDragging=!1),Vv(he),Ae&&!oe){N&&(Vt(N.target,"change",se),u.pointerEvent=O),ru(g,!1),kt(u,"release","onRelease"),kt(u,"click","onClick"),Ae=!1;return}for(pe=g.length;--pe>-1;)od(g[pe],"cursor",n.cursor||(n.cursor!==!1?rl:null));if(tu--,N){if(ye=N.changedTouches,ye&&(N=ye[0],N!==V&&N.identifier!==te)){for(pe=ye.length;--pe>-1&&(N=ye[pe]).identifier!==te&&N.target!==t;);if(pe<0&&!ae)return}u.pointerEvent=O,u.pointerX=N.pageX,u.pointerY=N.pageY}return oe&&O?(li(O),M=!0,kt(u,"release","onRelease")):O&&!ee?(M=!1,De&&(n.snap||n.bounds)&&_t(n.inertia||n.throwProps),kt(u,"release","onRelease"),(!il||O.type!=="touchmove")&&O.type.indexOf("cancel")===-1&&(kt(u,"click","onClick"),Yr()-E<300&&kt(u,"doubleclick","onDoubleClick"),We=O.target||t,E=Yr(),Oe=function(){E!==st&&u.enabled()&&!u.isPressed&&!O.defaultPrevented&&(We.click?We.click():A.createEvent&&(Pe=A.createEvent("MouseEvents"),Pe.initMouseEvent("click",!0,!0,St,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),We.dispatchEvent(Pe)))},!il&&!O.defaultPrevented&&ft.delayedCall(.05,Oe))):(_t(n.inertia||n.throwProps),!u.allowEventDefault&&O&&(n.dragClickables!==!1||!b.call(u,O.target))&&ee&&(!H||Le&&H===Le)&&O.cancelable!==!1?(M=!0,li(O)):M=!1,kt(u,"release","onRelease")),Ue()&&J.duration(u.tween.duration()),ee&&kt(u,"dragend","onDragEnd"),!0},Me=function(N){if(N&&u.isDragging&&!k){var ae=N.target||t.parentNode,O=ae.scrollLeft-ae._gsScrollX,ee=ae.scrollTop-ae._gsScrollY;(O||ee)&&(Ee?(L-=O*Ee.a+ee*Ee.c,F-=ee*Ee.d+O*Ee.b):(L-=O,F-=ee),ae._gsScrollX+=O,ae._gsScrollY+=ee,ot(u.pointerX,u.pointerY))}},j=function(N){var ae=Yr(),O=ae-E<100,ee=ae-p<50,oe=O&&st===E,J=u.pointerEvent&&u.pointerEvent.defaultPrevented,ye=O&&C===E,pe=N.isTrusted||N.isTrusted==null&&O&&oe;if((oe||ee&&u.vars.suppressClickOnDrag!==!1)&&N.stopImmediatePropagation&&N.stopImmediatePropagation(),O&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!oe||pe&&!ye)){pe&&oe&&(C=E),st=E;return}(u.isPressed||ee||O)&&(!pe||!N.detail||!O||J)&&li(N),!O&&!ee&&!ce&&(N&&N.target&&(u.pointerEvent=N),kt(u,"click","onClick"))},Se=function(N){return Ee?{x:N.x*Ee.a+N.y*Ee.c+Ee.e,y:N.x*Ee.b+N.y*Ee.d+Ee.f}:{x:N.x,y:N.y}};return me=e.get(t),me&&me.kill(),i.startDrag=function(se,N){var ae,O,ee,oe;Ke(se||u.pointerEvent,!0),N&&!u.hitTest(se||u.pointerEvent)&&(ae=$o(se||u.pointerEvent),O=$o(t),ee=Se({x:ae.left+ae.width/2,y:ae.top+ae.height/2}),oe=Se({x:O.left+O.width/2,y:O.top+O.height/2}),L-=ee.x-oe.x,F-=ee.y-oe.y),u.isDragging||(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart"))},i.drag=Te,i.endDrag=function(se){return U(se||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(Yr()-p)/1e3},i.timeSinceClick=function(){return(Yr()-E)/1e3},i.hitTest=function(se,N){return e.hitTest(u.target,se,N)},i.getDirection=function(se,N){var ae=se==="velocity"&&Mi?se:sl(se)&&!a?"element":"start",O,ee,oe,J,ye,pe;return ae==="element"&&(ye=$o(u.target),pe=$o(se)),O=ae==="start"?u.x-z:ae==="velocity"?Mi.getVelocity(t,l):ye.left+ye.width/2-(pe.left+pe.width/2),a?O<0?"counter-clockwise":"clockwise":(N=N||2,ee=ae==="start"?u.y-G:ae==="velocity"?Mi.getVelocity(t,c):ye.top+ye.height/2-(pe.top+pe.height/2),oe=Math.abs(O/ee),J=oe<1/N?"":O<0?"left":"right",oe<N&&(J!==""&&(J+="-"),J+=ee<0?"up":"down"),J)},i.applyBounds=function(se,N){var ae,O,ee,oe,J,ye;if(se&&n.bounds!==se)return n.bounds=se,u.update(!0,N);if(Ne(!0),be(),$&&!Ue()){if(ae=u.x,O=u.y,ae>re?ae=re:ae<ue&&(ae=ue),O>q?O=q:O<D&&(O=D),(u.x!==ae||u.y!==O)&&(ee=!0,u.x=u.endX=ae,a?u.endRotation=ae:u.y=u.endY=O,le=!0,he(!0),u.autoScroll&&!u.isDragging))for(sd(t.parentNode),oe=t,pr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,pr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft;oe&&!ye;)ye=qo(oe.parentNode),J=ye?pr:oe.parentNode,f&&J.scrollTop>J._gsMaxScrollY&&(J.scrollTop=J._gsMaxScrollY),h&&J.scrollLeft>J._gsMaxScrollX&&(J.scrollLeft=J._gsMaxScrollX),oe=J;u.isThrowing&&(ee||u.endX>re||u.endX<ue||u.endY>q||u.endY<D)&&_t(n.inertia||n.throwProps,ee)}return u},i.update=function(se,N,ae){if(N&&u.isPressed){var O=on(t),ee=ie.apply({x:u.x-z,y:u.y-G}),oe=on(t.parentNode,!0);oe.apply({x:O.e-ee.x,y:O.f-ee.y},ee),u.x-=ee.x-oe.e,u.y-=ee.y-oe.f,he(!0),ke()}var J=u.x,ye=u.y;return $e(!N),se?u.applyBounds():(le&&ae&&he(!0),Ne(!0)),N&&(ot(u.pointerX,u.pointerY),le&&he(!0)),u.isPressed&&!N&&(h&&Math.abs(J-u.x)>.01||f&&Math.abs(ye-u.y)>.01&&!a)&&ke(),u.autoScroll&&(sd(t.parentNode,u.isDragging),m=u.isDragging,he(!0),Yv(t,Me),Xv(t,Me)),u},i.enable=function(se){var N={lazy:!0},ae,O,ee;if(n.cursor!==!1&&(N.cursor=n.cursor||rl),ft.utils.checkPrefix("touchCallout")&&(N.touchCallout="none"),se!=="soft"){for(zv(g,h===f?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),O=g.length;--O>-1;)ee=g[O],eu||$t(ee,"mousedown",Ke),$t(ee,"touchstart",Ke),$t(ee,"click",j,!0),ft.set(ee,N),ee.getBBox&&ee.ownerSVGElement&&h!==f&&ft.set(ee.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||$t(ee,"contextmenu",de);ru(g,!1)}return Xv(t,Me),W=!0,Mi&&se!=="soft"&&Mi.track(k||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ae="d"+O1++,Vo[ae]=u,k&&(k.enable(),k.element._gsDragID=ae),(n.bounds||a)&&ke(),n.bounds&&u.applyBounds(),u},i.disable=function(se){for(var N=u.isDragging,ae=g.length,O;--ae>-1;)od(g[ae],"cursor",null);if(se!=="soft"){for(zv(g,null),ae=g.length;--ae>-1;)O=g[ae],od(O,"touchCallout",null),Vt(O,"mousedown",Ke),Vt(O,"touchstart",Ke),Vt(O,"click",j,!0),Vt(O,"contextmenu",de);ru(g,!0),ge&&(Vt(ge,"touchcancel",U),Vt(ge,"touchend",U),Vt(ge,"touchmove",Te)),Vt(A,"mouseup",U),Vt(A,"mousemove",Te)}return Yv(t,Me),W=!1,Mi&&se!=="soft"&&(Mi.untrack(k||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),k&&k.disable(),Vv(he),u.isDragging=u.isPressed=Ae=!1,N&&kt(u,"dragend","onDragEnd"),u},i.enabled=function(se,N){return arguments.length?se?u.enable(N):u.disable(N):W},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),ft.set(g,{clearProps:"userSelect"}),delete Vo[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(k=i.scrollProxy=new Y1(t,B1({onKill:function(){u.isPressed&&U(null)}},n)),t.style.overflowY=f&&!td?"auto":"hidden",t.style.overflowX=h&&!td?"auto":"hidden",t=k.content),a?_.rotation=1:(h&&(_[l]=1),f&&(_[c]=1)),R.force3D="force3D"in n?n.force3D:!0,Nv(Dv(i)),i.enable(),i}return e.register=function(n){ft=n,cd()},e.create=function(n,i){return ed||cd(!0),Vr(n).map(function(s){return new e(s,i)})},e.get=function(n){return Vo[(Vr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(Yr()-Bv)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var o=$o(n),a=$o(i),l=o.top,c=o.left,h=o.right,f=o.bottom,d=o.width,u=o.height,g=a.left>h||a.right<c||a.top>f||a.bottom<l,_,p,m;return g||!s?!g:(m=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(h,a.right)-_.left,_.height=Math.min(f,a.bottom)-_.top,_.width<0||_.height<0?!1:m?(s*=.01,p=_.width*_.height,p>=d*u*s||p>=a.width*a.height*s):_.width>s&&_.height>s)},e}(q1);z1(Zo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Zo.zIndex=1e3,Zo.version="3.12.5",Ov()&&ft.registerPlugin(Zo);/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zi,ud,cl,Kv,Ko,Jo,hd,Jv,jv=function(){return zi||typeof window!="undefined"&&(zi=window.gsap)},fd={},$1=function(e){return Math.round(e*1e4)/1e4},dd=function(e){return Jv(e).id},ul=function(e){return fd[dd(typeof e=="string"?cl(e)[0]:e)]},Qv=function(e){var t=Ko,n;if(e-hd>=.05)for(hd=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},Z1={deg:360,rad:Math.PI*2},pd=function(){zi=jv(),zi&&(cl=zi.utils.toArray,Kv=zi.utils.getUnit,Jv=zi.core.getCache,Jo=zi.ticker,ud=1)},K1=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=Z1[n||Kv(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=Jo.time,i&&(this._next=i,i._prev=this)},hl=function(){function r(t,n){ud||pd(),this.target=cl(t)[0],fd[dd(this.target)]=this,this._props={},n&&this.add(n)}r.register=function(n){zi=n,pd()};var e=r.prototype;return e.get=function(n,i){var s=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,a,l;return o=parseFloat(i?s.v1:s.g(s.t,s.p)),a=o-parseFloat(s.v2),l=s.rCap,l&&(a=a%l,a!==a%(l/2)&&(a=a<0?a+l:a-l)),$1(a/((i?s.t1:Jo.time)-s.t2))},e.getAll=function(){var n={},i=this._props,s;for(s in i)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||(Ko||(Jo.add(Qv),hd=Jo.time),Ko=this._props[n]=new K1(this.target,n,i,Ko))},e.remove=function(n){var i=this._props[n],s,o;i&&(s=i._prev,o=i._next,s&&(s._next=o),o?o._prev=s:Ko===i&&(Jo.remove(Qv),Ko=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete fd[dd(this.target)]},r.track=function(n,i,s){ud||pd();for(var o=[],a=cl(n),l=i.split(","),c=(s||"").split(","),h=a.length,f,d;h--;){for(f=ul(a[h])||new r(a[h]),d=l.length;d--;)f.add(l[d],c[d]||c[0]);o.push(f)}return o},r.untrack=function(n,i){var s=(i||"").split(",");cl(n).forEach(function(o){var a=ul(o);a&&(s.length?s.forEach(function(l){return a.remove(l)}):a.kill(1))})},r.isTracking=function(n,i){var s=ul(n);return s&&s.isTracking(i)},r.getVelocity=function(n,i){var s=ul(n);return!s||!s.isTracking(i)?console.warn("Not tracking velocity of "+i):s.get(i)},r}();hl.getByTarget=ul,jv()&&zi.registerPlugin(hl);/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,e0,t0,n0,md,fl,i0,r0,s0,gd,o0,dl,_d,a0,su=hl.getByTarget,l0=function(){return Zt||typeof window!="undefined"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},J1=function(e){return typeof e=="string"},pl=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},vd=function(e){return typeof e=="function"},j1=1,c0=Array.isArray,Q1=function(e){return e},zs=1e10,u0=1/zs,h0=.05,eA=function(e){return Math.round(e*1e4)/1e4},tA=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},nA=function r(e){var t={},n,i;for(n in e)t[n]=qr(i=e[n])&&!c0(i)?r(i):i;return t},f0=function(e,t,n,i,s){var o=t.length,a=0,l=zs,c,h,f,d;if(qr(e)){for(;o--;){c=t[o],h=0;for(f in e)d=c[f]-e[f],h+=d*d;h<l&&(a=o,l=h)}if((s||zs)<zs&&s<Math.sqrt(l))return e}else for(;o--;)c=t[o],h=c-e,h<0&&(h=-h),h<l&&c>=i&&c<=n&&(a=o,l=h);return t[a]},d0=function(e,t,n,i,s,o,a){if(e.end==="auto")return e;var l=e.end,c,h;if(n=isNaN(n)?zs:n,i=isNaN(i)?-zs:i,qr(t)){if(c=t.calculated?t:(vd(l)?l(t,a):f0(t,l,n,i,o))||t,!t.calculated){for(h in c)t[h]=c[h];t.calculated=!0}c=c[s]}else c=vd(l)?l(t,a):c0(l)?f0(t,l,n,i,o):parseFloat(l);return c>n?c=n:c<i&&(c=i),{max:c,min:c,unitFactor:e.unitFactor}},ou=function(e,t,n){return isNaN(e[t])?n:+e[t]},xd=function(e,t){return t*h0*e/gd},p0=function(e,t,n){return Math.abs((t-e)*gd/n/h0)},m0={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},g0=function(e,t,n,i){if(t.linkedProps){var s=t.linkedProps.split(","),o={},a,l,c,h,f,d;for(a=0;a<s.length;a++)l=s[a],c=t[l],c&&(pl(c.velocity)?h=c.velocity:(f=f||su(e),h=f&&f.isTracking(l)?f.get(l):0),d=Math.abs(h/ou(c,"resistance",i)),o[l]=parseFloat(n(e,l))+xd(h,d));return o}},iA=function(e,t,n,i,s,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),s===void 0&&(s=1),o===void 0&&(o=0),J1(e)&&(e=n0(e)[0]),!e)return 0;var a=0,l=zs,c=t.inertia||t,h=s0(e).get,f=ou(c,"resistance",fl.resistance),d,u,g,_,p,m,S,v,y,T;T=g0(e,c,h,f);for(d in c)m0[d]||(u=c[d],qr(u)||(v=v||su(e),v&&v.isTracking(d)?u=pl(u)?{velocity:u}:{velocity:v.get(d)}:(_=+u||0,g=Math.abs(_/f))),qr(u)&&(pl(u.velocity)?_=u.velocity:(v=v||su(e),_=v&&v.isTracking(d)?v.get(d):0),g=o0(i,n,Math.abs(_/ou(u,"resistance",f))),p=parseFloat(h(e,d))||0,m=p+xd(_,g),"end"in u&&(u=d0(u,T&&d in T?T:m,u.max,u.min,d,c.radius,_),o&&(dl===t&&(dl=c=nA(t)),c[d]=tA(u,c[d],"end"))),"max"in u&&m>+u.max+u0?(y=u.unitFactor||fl.unitFactors[d]||1,S=p>u.max&&u.min!==u.max||_*y>-15&&_*y<45?i+(n-i)*.1:p0(p,u.max,_),S+s<l&&(l=S+s)):"min"in u&&m<+u.min-u0&&(y=u.unitFactor||fl.unitFactors[d]||1,S=p<u.min&&u.min!==u.max||_*y>-45&&_*y<15?i+(n-i)*.1:p0(p,u.min,_),S+s<l&&(l=S+s)),S>a&&(a=S)),g>a&&(a=g));return a>l&&(a=l),a>n?n:a<i?i:a},_0=function(){Zt=l0(),Zt&&(t0=Zt.parseEase,n0=Zt.utils.toArray,i0=Zt.utils.getUnit,s0=Zt.core.getCache,o0=Zt.utils.clamp,_d=Zt.core.getStyleSaver,a0=Zt.core.reverting||function(){},md=t0("power3"),gd=md(.05),r0=Zt.core.PropTween,Zt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),fl=Zt.config(),Zt.registerPlugin(hl),e0=1)},yd={version:"3.12.5",name:"inertia",register:function(e){Zt=e,_0()},init:function(e,t,n,i,s){e0||_0();var o=su(e);if(t==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=o.getAll()}this.styles=_d&&typeof e.style=="object"&&_d(e),this.target=e,this.tween=n,dl=t;var a=e._gsap,l=a.get,c=t.duration,h=qr(c),f=t.preventOvershoot||h&&c.overshoot===0,d=ou(t,"resistance",fl.resistance),u=pl(c)?c:iA(e,t,h&&c.max||10,h&&c.min||.2,h&&"overshoot"in c?+c.overshoot:f?0:1,!0),g,_,p,m,S,v,y,T,b;t=dl,dl=0,b=g0(e,t,l,d);for(g in t)m0[g]||(_=t[g],vd(_)&&(_=_(i,e,s)),pl(_)?S=_:qr(_)&&!isNaN(_.velocity)?S=+_.velocity:o&&o.isTracking(g)?S=o.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),v=xd(S,u),T=0,p=l(e,g),m=i0(p),p=parseFloat(p),qr(_)&&(y=p+v,"end"in _&&(_=d0(_,b&&g in b?b:y,_.max,_.min,g,t.radius,S)),"max"in _&&+_.max<y?f||_.preventOvershoot?v=_.max-p:T=_.max-p-v:"min"in _&&+_.min>y&&(f||_.preventOvershoot?v=_.min-p:T=_.min-p-v)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new r0(this._pt,e,g,p,0,Q1,0,a.set(e,g,this)),this._pt.u=m||0,this._pt.c1=v,this._pt.c2=T);return n.duration(u),j1},render:function(e,t){var n=t._pt;if(e=md(t.tween._time/t.tween._dur),e||!a0())for(;n;)n.set(n.t,n.p,eA(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return yd[r]=hl[r]}),l0()&&Zt.registerPlugin(yd);/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rA=1,jo,mn,wt,ml,$r,mr,Sd,v0=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Md={},x0=180/Math.PI,sA=Math.PI/180,au={},y0={},lu={},Ed=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},oA=Ed("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),cu=Ed("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),gl=function(e){return jo(e)[0]||console.warn("Element not found:",e)},Qo=function(e){return Math.round(e*1e4)/1e4||0},Td=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},S0={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},M0={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},E0=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ea=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},bd={},T0=function(e){var t=bd[e]=Ed(e);return lu[e]=t.concat(cu),t},aA=function(e){var t=e._gsap||mn.core.getCache(e);return t.gmCache===mn.ticker.frame?t.gMatrix:(t.gmCache=mn.ticker.frame,t.gMatrix=on(e,!0,!1,!0))},lA=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),o=t?-s*900:0;e;)o+=s,e=e.previousSibling;return i?o+r(i,t,n+1):o},uu=function(e,t,n){return e.forEach(function(i){return i.d=lA(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},_l=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,o,a;s--;)o=t[s],a=n[o]||n.getPropertyValue(o),i.push(a?o:y0[o]||(y0[o]=E0(o)),a);return n},hu=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},b0=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(hu)},wd="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Ad=function(e,t,n){var i=e.element,s=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,h=4,f,d,u;if(typeof t!="object"&&(t=e),wt&&n!==1)return wt._abs.push({t:i,b:e,a:e,sd:0}),wt._final.push(function(){return(e.cache.uncache=1)&&hu(e)}),i;for(d=l("display")==="none",(!e.isVisible||d)&&(d&&(_l(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=o=e.height||t.height),_l(e,wd),u=window.getComputedStyle(i);h--;)c[wd[h]]=u[wd[h]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new Hs(i);else if(f=ea(e,au),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new hr(1,0,0,1,g.left+Zf(),g.top+$f())}else f.matrix=on(i,!1,!1,!0);return f=ta(f,e,!0),e.x=mr(f.x,.01),e.y=mr(f.y,.01),i},w0=function(e,t){return t!==!0&&(t=jo(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},A0=function(e){return uu(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Ad(t.sd<0?t.b:t.a,t.b,1)})},cA=function(e,t){return t&&e.idLookup[Cd(t).id]||e.elementStates[0]},Cd=function(e,t,n,i){return e instanceof Hs?e:e instanceof Ti?cA(e,i):new Hs(typeof e=="string"?gl(e)||console.warn(e+" not found"):e,t,n)},uA=function(e,t){for(var n=mn.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},C0=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},hA=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+rA++),t},R0=function(e){return e.map(function(t){return t.element})},P0=function(e,t,n){return e&&t.length&&n.add(e(R0(t),n,new Ti(t,0,!0)),0)},ta=function(e,t,n,i,s,o){var a=e.element,l=e.cache,c=e.parent,h=e.x,f=e.y,d=t.width,u=t.height,g=t.scaleX,_=t.scaleY,p=t.rotation,m=t.bounds,S=o&&Sd&&Sd(a,"transform"),v=e,y=t.matrix,T=y.e,b=y.f,E=e.bounds.width!==m.width||e.bounds.height!==m.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==p,R=!E&&e.simple&&t.simple&&!s,I,x,A,W,k,L,F;return R||!c?(g=_=1,p=I=0):(k=aA(c),L=k.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=Qo(Math.atan2(L.b,L.a)*x0),I=Qo(Math.atan2(L.c,L.d)*x0+p)%360,g=Math.sqrt(Math.pow(L.a,2)+Math.pow(L.b,2)),_=Math.sqrt(Math.pow(L.c,2)+Math.pow(L.d,2))*Math.cos(I*sA),s&&(s=jo(s)[0],W=mn.getProperty(s),F=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),v={scaleX:W("scaleX"),scaleY:W("scaleY"),width:F?F.width:Math.ceil(parseFloat(W("width","px"))),height:F?F.height:parseFloat(W("height","px"))}),l.rotation=p+"deg",l.skewX=I+"deg"),n?(g*=d===v.width||!v.width?1:d/v.width,_*=u===v.height||!v.height?1:u/v.height,l.scaleX=g,l.scaleY=_):(d=mr(d*g/v.scaleX,0),u=mr(u*_/v.scaleY,0),a.style.width=d+"px",a.style.height=u+"px"),i&&C0(a,t.props),R||!c?(h+=T-e.matrix.e,f+=b-e.matrix.f):E||c!==t.parent?(l.renderTransform(1,l),L=on(s||a,!1,!1,!0),x=k.apply({x:L.e,y:L.f}),A=k.apply({x:T,y:b}),h+=A.x-x.x,f+=A.y-x.y):(k.e=k.f=0,A=k.apply({x:T-e.matrix.e,y:b-e.matrix.f}),h+=A.x,f+=A.y),h=mr(h,.02),f=mr(f,.02),o&&!(o instanceof Hs)?S&&S.revert():(l.x=h+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=h,o.y=f,o.rotation=p,o.skewX=I,n?(o.scaleX=g,o.scaleY=_):(o.width=d,o.height=u)),o||l},Rd=function(e,t){return e instanceof Ti?e:new Ti(e,t)},L0=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Pd=[],Ld="width,height,overflowX,overflowY".split(","),fu,D0=function(e){if(e!==fu){var t=$r.style,n=$r.clientWidth===window.outerWidth,i=$r.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)Pd[s]=t[Ld[s]];n&&(t.width=$r.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=$r.clientHeight+"px",t.overflowX="hidden"),fu=e}else if(fu){for(;s--;)Pd[s]?t[Ld[s]]=Pd[s]:t.removeProperty(E0(Ld[s]));fu=e}}},Dd=function(e,t,n,i){e instanceof Ti&&t instanceof Ti||console.warn("Not a valid state object."),n=n||{};var s=n,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,h=s.absoluteOnLeave,f=s.custom,d=s.delay,u=s.paused,g=s.repeat,_=s.repeatDelay,p=s.yoyo,m=s.toggleClass,S=s.nested,v=s.zIndex,y=s.scale,T=s.fade,b=s.stagger,E=s.spin,R=s.prune,I=("props"in n?n:e).props,x=ea(n,S0),A=mn.timeline({delay:d,paused:u,repeat:g,repeatDelay:_,yoyo:p,data:"isFlip"}),W=x,k=[],L=[],F=[],z=[],G=E===!0?1:E||0,$=typeof E=="function"?E:function(){return G},ne=e.interrupted||t.interrupted,P=A[i!==1?"to":"from"],re,ue,q,D,V,te,fe,le,me,Re,ve,B,Ae,ge;for(ue in t.idLookup)ve=t.alt[ue]?L0(t,e,ue):t.idLookup[ue],V=ve.element,Re=e.idLookup[ue],e.alt[ue]&&V===Re.element&&(e.alt[ue].isVisible||!ve.isVisible)&&(Re=e.alt[ue]),Re?(te={t:V,b:Re,a:ve,sd:Re.element===V?0:ve.isVisible?1:-1},F.push(te),te.sd&&(te.sd<0&&(te.b=ve,te.a=Re),ne&&_l(te.b,I?lu[I]:cu),T&&F.push(te.swap={t:Re.element,b:te.b,a:te.a,sd:-te.sd,swap:te})),V._flip=Re.element._flip=wt?wt.timeline:A):ve.isVisible&&(F.push({t:V,b:ea(ve,{isVisible:1}),a:ve,sd:0,entering:1}),V._flip=wt?wt.timeline:A);if(I&&(bd[I]||T0(I)).forEach(function(H){return x[H]=function(Le){return F[Le].a.props[H]}}),F.finalStates=me=[],B=function(){for(uu(F),D0(!0),D=0;D<F.length;D++)te=F[D],Ae=te.a,ge=te.b,R&&!Ae.isDifferent(ge)&&!te.entering?F.splice(D--,1):(V=te.t,S&&!(te.sd<0)&&D&&(Ae.matrix=on(V,!1,!1,!0)),ge.isVisible&&Ae.isVisible?(te.sd<0?(fe=new Hs(V,I,e.simple),ta(fe,Ae,y,0,0,fe),fe.matrix=on(V,!1,!1,!0),fe.css=te.b.css,te.a=Ae=fe,T&&(V.style.opacity=ne?ge.opacity:Ae.opacity),b&&z.push(V)):te.sd>0&&T&&(V.style.opacity=ne?Ae.opacity-ge.opacity:"0"),ta(Ae,ge,y,I)):ge.isVisible!==Ae.isVisible&&(ge.isVisible?Ae.isVisible||(ge.css=Ae.css,L.push(ge),F.splice(D--,1),c&&S&&ta(Ae,ge,y,I)):(Ae.isVisible&&k.push(Ae),F.splice(D--,1))),y||(V.style.maxWidth=Math.max(Ae.width,ge.width)+"px",V.style.maxHeight=Math.max(Ae.height,ge.height)+"px",V.style.minWidth=Math.min(Ae.width,ge.width)+"px",V.style.minHeight=Math.min(Ae.height,ge.height)+"px"),S&&m&&V.classList.add(m)),me.push(Ae);var Le;if(m&&(Le=me.map(function(C){return C.element}),S&&Le.forEach(function(C){return C.classList.remove(m)})),D0(!1),y?(x.scaleX=function(C){return F[C].a.scaleX},x.scaleY=function(C){return F[C].a.scaleY}):(x.width=function(C){return F[C].a.width+"px"},x.height=function(C){return F[C].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(C){return F[C].a.x+"px"},x.y=function(C){return F[C].a.y+"px"},x.rotation=function(C){return F[C].a.rotation+(E?$(C,le[C],le)*360:0)},x.skewX=function(C){return F[C].a.skewX},le=F.map(function(C){return C.t}),(v||v===0)&&(x.modifiers={zIndex:function(){return v}},x.zIndex=v,x.immediateRender=n.immediateRender!==!1),T&&(x.opacity=function(C){return F[C].sd<0?0:F[C].sd>0?F[C].a.opacity:"+=0"}),z.length){b=mn.utils.distribute(b);var Xe=le.slice(z.length);x.stagger=function(C,M){return b(~z.indexOf(M)?le.indexOf(F[C].swap.t):C,M,Xe)}}if(oA.forEach(function(C){return n[C]&&A.eventCallback(C,n[C],n[C+"Params"])}),f&&le.length){W=ea(x,S0),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ue in f)re=ea(f[ue],M0),re[ue]=x[ue],!("duration"in re)&&"duration"in x&&(re.duration=x.duration),re.stagger=x.stagger,P.call(A,le,re,0),delete W[ue]}(le.length||L.length||k.length)&&(m&&A.add(function(){return Td(Le,m,A._zTime<0?"remove":"add")},0)&&!u&&Td(Le,m,"add"),le.length&&P.call(A,le,W,0)),P0(a,k,A),P0(l,L,A);var st=wt&&wt.timeline;st&&(st.add(A,0),wt._final.push(function(){return b0(F,!o)})),q=A.duration(),A.call(function(){var C=A.time()>=q;C&&!st&&b0(F,!o),m&&Td(Le,m,C?"remove":"add")})},h&&(c=F.filter(function(H){return!H.sd&&!H.a.isVisible&&H.b.isVisible}).map(function(H){return H.a.element})),wt){var Ee;c&&(Ee=wt._abs).push.apply(Ee,w0(F,c)),wt._run.push(B)}else c&&A0(w0(F,c)),B();var De=wt?wt.timeline:A;return De.revert=function(){return Id(De,1,1)},De},fA=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},Id=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(fA(e),t<2&&e.progress(1),e.kill()),!0},du=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,o;s--;)o=i[s],t[o.id]?n[o.id]=o:t[o.id]=o},Ti=function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=R0(t),this.elementStates=t,du(this);else{this.targets=jo(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);wt&&!s&&wt._kill.push(this),this.update(s||!!wt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new Hs(s,i.props,i.simple)}),du(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,du(this),this},e.fit=function(n,i,s){for(var o=uu(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,h;l<o.length;l++)c=o[l],s&&(c.matrix=on(c.element,!1,!1,!0)),h=a[c.id],h&&ta(c,h,i,!0,0,c),c.matrix=on(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||au;return(i in s?s:s.props||au)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),du(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],h=[],f=n.alt,d=this.alt,u=function(R,I,x){return(R.isVisible!==I.isVisible?R.isVisible?l:c:R.isVisible?a:o).push(x)&&h.push(x)},g=function(R,I,x){return h.indexOf(x)<0&&u(R,I,x)},_,p,m,S,v,y,T,b;for(m in i)v=f[m],y=d[m],_=v?L0(n,this,m):i[m],S=_.element,p=s[m],y?(b=p.isVisible||!y.isVisible&&S===p.element?p:y,T=v&&!_.isVisible&&!v.isVisible&&b.element===v.element?v:_,T.isVisible&&b.isVisible&&T.element!==b.element?((T.isDifferent(b)?a:o).push(T.element,b.element),h.push(T.element,b.element)):u(T,b,T.element),v&&T.element===v.element&&(v=i[m]),g(T.element!==p.element&&v?v:T,p,p.element),g(v&&v.element===y.element?v:T,y,y.element),v&&g(v,y.element===v.element?y:p,v.element)):(p?p.isDifferent(_)?u(_,p,S):o.push(S):l.push(S),v&&g(v,p,v.element));for(m in s)i[m]||(c.push(s[m].element),d[m]&&c.push(d[m].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=lu[this.props]||cu,i=this.elementStates.length;i--;)_l(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=Id(a,n?0:1);n&&l&&s.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&s.push(a)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(gl(n))]},e.makeAbsolute=function(){return uu(this.elementStates.slice(0),!0,!0).map(Ad)},r}(),Hs=function(){function r(t,n,i){this.element=t,this.update(n,i)}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var s=this,o=s.element,a=mn.getProperty(o),l=mn.core.getCache(o),c=o.getBoundingClientRect(),h=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new hr(1,0,0,1,c.left+Zf(),c.top+$f()):on(o,!1,!1,!0);s.getProp=a,s.element=o,s.id=hA(o),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x"),s.y=a("y"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=h?h.width:mr(a("width","px"),.04),s.height=h?h.height:mr(a("height","px"),.04),n&&uA(s,bd[n]||T0(n)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Lv(o).inverse(),s.simple=i||Qo(f.a)===1&&!Qo(f.b)&&!Qo(f.c)&&Qo(f.d)===1,s.uncache=0},r}(),dA=function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r}(),pA=function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Ti,this.timeline=mn.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new dA(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=wt,o=ml;return wt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,ml=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),ml=o,wt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=wt,s=this.timeline,o=this.actions.length,a,l;for(wt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var h=c.vars.onEnter,f=c.vars.onLeave,d=c.targets,u,g;d&&d.length&&(h||f)&&(u=new Ti,c.states.forEach(function(_){return u.add(_)}),g=u.compare(na.getState(d)),g.enter.length&&h&&h(g.enter),g.leave.length&&f&&f(g.leave))}),A0(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),v0(n,"onComplete"))}),wt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return v0(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),s.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==wt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Md[this.id]},r}(),na=function(){function r(){}return r.getState=function(t,n){var i=Rd(t,n);return ml&&ml.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),Dd(t,Rd(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return Dd(t,Rd(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return Dd(t,n,i)},r.fit=function(t,n,i){var s=i?ea(i,M0):{},o=i||s,a=o.absolute,l=o.scale,c=o.getVars,h=o.props,f=o.runBackwards,d=o.onComplete,u=o.simple,g=i&&i.fitChild&&gl(i.fitChild),_=Cd(n,h,u,t),p=Cd(t,0,u,_),m=h?lu[h]:cu,S=mn.context();return h&&C0(s,_.props),_l(p,m),f&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){hu(p),d&&d.apply(this,arguments)}),a&&Ad(p,_),s=ta(p,_,l||g,h,g,s.duration||c?s:0),S&&!c&&S.add(function(){return function(){return hu(p)}}),c?s:s.duration?mn.to(p.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof Ti?t:new Ti(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),Md[t]||(Md[t]=new pA(t))},r.killFlipsOf=function(t,n){(t instanceof Ti?t.targets:jo(t)).forEach(function(i){return i&&Id(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(gl(t)||au)._flip},r.getElementState=function(t,n){return new Hs(gl(t),n)},r.convertCoordinates=function(t,n,i){var s=on(n,!0,!0).multiply(on(t));return i?s.apply(i):s},r.register=function(t){if($r=typeof document!="undefined"&&document.body,$r){mn=t,qf($r),jo=mn.utils.toArray,Sd=mn.core.getStyleSaver;var n=mn.utils.snap(.1);mr=function(s,o){return n(parseFloat(s)+o)}}},r}();na.version="3.12.5",typeof window!="undefined"&&window.gsap&&window.gsap.registerPlugin(na);class mA{constructor(){if(this.$gallery=document.getElementById("odysseyGallery"),!this.$gallery){console.warn("Could not create Odyssey Gallery - container not found.");return}this.isActive=!1,this.$sourceContainer=null,this.zoomImageTL=null,this.$splineContainer=document.querySelector(".odyssey-gallery__spline-container"),this.splineIframe=this.initSpline(),this.initOdysseyGallery()}initOdysseyGallery(){console.log("init odyssey gallery drag"),this.$container=document.getElementById("odysseyGalleryContainer"),this.$galleryItems=this.$container.querySelectorAll(".odyssey-gallery__item:not(.odyssey-gallery__item--title)"),Zo.create(this.$container,{type:"x,y",bounds:this.$gallery,inertia:!0,onDragStart:()=>{Tt.to(this.$galleryItems,{scale:.95,duration:.4,ease:"power4.out"})},onDragEnd:()=>{Tt.to(this.$galleryItems,{scale:1,duration:.8,ease:"power4.out"})}}),console.log("init odyssey gallery click"),this.$target=document.querySelector(".odyssey-gallery__destination-target"),this.$targetContainer=document.querySelector(".odyssey-gallery__destination"),this.$galleryItems.forEach(e=>{e.addEventListener("click",t=>{this.isActive||(this.$sourceContainer=e,this.swapImage(e,this.$target,!0))})}),this.$targetContainer.addEventListener("click",e=>{this.isActive&&this.swapImage(this.$target,this.$sourceContainer,!1)}),this.initZoomImageTimeline()}initZoomImageTimeline(){const e=this.$targetContainer.querySelector(".odyssey-gallery__destination-backdrop");this.zoomImageTL=Tt.timeline({paused:!0}),this.zoomImageTL.from(e,{duration:.8,opacity:0,ease:"power4.inOut"},"start").to(this.$container,{duration:.8,filter:"blur(6px)",ease:"power4.inOut"},"start")}swapImage(e,t,n){const i=e.querySelector("img"),s=na.getState(i);(i.parentNode===e?t:e).appendChild(i),n?(this.$targetContainer.classList.add("odyssey-gallery__destination--active"),this.zoomImageTL.play()):(this.zoomImageTL.reverse(),this.$targetContainer.classList.remove("odyssey-gallery__destination--active")),i.parentNode.style.zIndex=3e3,na.from(s,{duration:.8,ease:"power4.inOut",absolute:!0,delay:.1,onComplete:()=>{i.parentNode.style.zIndex=""}}),this.isActive=n}initSpline(){if(!this.$splineContainer){console.error(`Spline container with id "${this.$splineContainer}" not found.`);return}console.log("init odyssey intro spline");const e=this.$splineContainer.getAttribute("data-spline");if(!e){console.error("Spline URL not found.");return}const t=document.createElement("iframe");return t.src=e,t.style.width="100%",t.style.height="100%",Tt.set(t,{opacity:0,y:10}),t.addEventListener("load",()=>{console.log("Spline iframe has loaded."),Tt.to(t,{opacity:1,y:0,duration:3,ease:"power4.out"})}),this.$splineContainer.appendChild(t),t}dispose(){console.log("dispose odyssey intro spline"),this.splineIframe.remove(),console.log(this.splineIframe)}}class gA{constructor(){this.$splineContainer=document.getElementById("introSpline"),this.splineIframe=this.initSpline()}initSpline(){if(!this.$splineContainer){console.error(`Spline container with id "${this.$splineContainer}" not found.`);return}console.log("init odyssey intro spline");const e=this.$splineContainer.getAttribute("data-spline");if(!e){console.error("Spline URL not found.");return}const t=document.createElement("iframe");return t.src=e,t.style.width="100%",t.style.height="100%",Tt.set(t,{opacity:0,y:10}),t.addEventListener("load",()=>{console.log("Spline iframe has loaded."),Tt.to(t,{opacity:1,y:0,duration:3,ease:"power4.out"})}),this.$splineContainer.appendChild(t),t}dispose(){console.log("dispose odyssey intro spline"),this.splineIframe.remove(),console.log(this.splineIframe)}}let Nd=null;const _A=r=>{Nd=new gA,new mA},vA=r=>{Nd&&Nd.dispose()};class xA{constructor(e){this.globalState={portalManager:null,lenisManager:e},this.barba=bx,this.init()}init(){this.barba.init({transitions:[{name:"leave-home",from:{namespace:["home"]},to:{namespace:["odyssey"]},leave:e=>(console.log("TRANS: leave home: Load spline already"),zy(e,this.globalState)),afterLeave:e=>(console.log("TRANS: clean up home"),R1(e,this.globalState)),enter:e=>(console.log("TRANS: enter odyssey"),Vy(e,this.globalState))},{name:"enter-home",from:{namespace:["odyssey"]},to:{namespace:["home"]},leave:Gy,afterLeave:e=>(console.log("TRANS: clean up odyssey"),vA(e,this.globalState)),enter:Hy}],views:[{namespace:"home",beforeEnter:e=>(console.log("VIEW: home"),C1(e,this.globalState))},{namespace:"odyssey",beforeEnter:e=>(console.log("VIEW: odyssey"),_A(e,this.globalState))}]})}}var uC="",hC="",yA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I0={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(yA,function(){var t=document,n=t.createTextNode.bind(t);function i(q,D,V){q.style.setProperty(D,V)}function s(q,D){return q.appendChild(D)}function o(q,D,V,te){var fe=t.createElement("span");return D&&(fe.className=D),V&&(!te&&fe.setAttribute("data-"+D,V),fe.textContent=V),q&&s(q,fe)||fe}function a(q,D){return q.getAttribute("data-"+D)}function l(q,D){return!q||q.length==0?[]:q.nodeName?[q]:[].slice.call(q[0].nodeName?q:(D||t).querySelectorAll(q))}function c(q){for(var D=[];q--;)D[q]=[];return D}function h(q,D){q&&q.some(D)}function f(q){return function(D){return q[D]}}function d(q,D,V){var te="--"+D,fe=te+"-index";h(V,function(le,me){Array.isArray(le)?h(le,function(Re){i(Re,fe,me)}):i(le,fe,me)}),i(q,te+"-total",V.length)}var u={};function g(q,D,V){var te=V.indexOf(q);if(te==-1)V.unshift(q),h(u[q].depends,function(le){g(le,q,V)});else{var fe=V.indexOf(D);V.splice(te,1),V.splice(fe,0,q)}return V}function _(q,D,V,te){return{by:q,depends:D,key:V,split:te}}function p(q){return g(q,0,[]).map(f(u))}function m(q){u[q.by]=q}function S(q,D,V,te,fe){q.normalize();var le=[],me=document.createDocumentFragment();te&&le.push(q.previousSibling);var Re=[];return l(q.childNodes).some(function(ve){if(ve.tagName&&!ve.hasChildNodes()){Re.push(ve);return}if(ve.childNodes&&ve.childNodes.length){Re.push(ve),le.push.apply(le,S(ve,D,V,te,fe));return}var B=ve.wholeText||"",Ae=B.trim();Ae.length&&(B[0]===" "&&Re.push(n(" ")),h(Ae.split(V),function(ge,Ee){Ee&&fe&&Re.push(o(me,"whitespace"," ",fe));var De=o(me,D,ge);le.push(De),Re.push(De)}),B[B.length-1]===" "&&Re.push(n(" ")))}),h(Re,function(ve){s(me,ve)}),q.innerHTML="",s(q,me),le}var v=0;function y(q,D){for(var V in D)q[V]=D[V];return q}var T="words",b=_(T,v,"word",function(q){return S(q,"word",/\s+/,0,1)}),E="chars",R=_(E,[T],"char",function(q,D,V){var te=[];return h(V[T],function(fe,le){te.push.apply(te,S(fe,"char","",D.whitespace&&le))}),te});function I(q){q=q||{};var D=q.key;return l(q.target||"[data-splitting]").map(function(V){var te=V["\u{1F34C}"];if(!q.force&&te)return te;te=V["\u{1F34C}"]={el:V};var fe=p(q.by||a(V,"splitting")||E),le=y({},q);return h(fe,function(me){if(me.split){var Re=me.by,ve=(D?"-"+D:"")+me.key,B=me.split(V,le,te);ve&&d(V,ve,B),te[Re]=B,V.classList.add(Re)}}),V.classList.add("splitting"),te})}function x(q){q=q||{};var D=q.target=o();return D.innerHTML=q.content,I(q),D.outerHTML}I.html=x,I.add=m;function A(q,D,V){var te=l(D.matching||q.children,q),fe={};return h(te,function(le){var me=Math.round(le[V]);(fe[me]||(fe[me]=[])).push(le)}),Object.keys(fe).map(Number).sort(W).map(f(fe))}function W(q,D){return q-D}var k=_("lines",[T],"line",function(q,D,V){return A(q,{matching:V[T]},"offsetTop")}),L=_("items",v,"item",function(q,D){return l(D.matching||q.children,q)}),F=_("rows",v,"row",function(q,D){return A(q,D,"offsetTop")}),z=_("cols",v,"col",function(q,D){return A(q,D,"offsetLeft")}),G=_("grid",["rows","cols"]),$="layout",ne=_($,v,v,function(q,D){var V=D.rows=+(D.rows||a(q,"rows")||1),te=D.columns=+(D.columns||a(q,"columns")||1);if(D.image=D.image||a(q,"image")||q.currentSrc||q.src,D.image){var fe=l("img",q)[0];D.image=fe&&(fe.currentSrc||fe.src)}D.image&&i(q,"background-image","url("+D.image+")");for(var le=V*te,me=[],Re=o(v,"cell-grid");le--;){var ve=o(Re,"cell");o(ve,"cell-inner"),me.push(ve)}return s(q,Re),me}),P=_("cellRows",[$],"row",function(q,D,V){var te=D.rows,fe=c(te);return h(V[$],function(le,me,Re){fe[Math.floor(me/(Re.length/te))].push(le)}),fe}),re=_("cellColumns",[$],"col",function(q,D,V){var te=D.columns,fe=c(te);return h(V[$],function(le,me){fe[me%te].push(le)}),fe}),ue=_("cells",["cellRows","cellColumns"],"cell",function(q,D,V){return V[$]});return m(b),m(R),m(k),m(L),m(F),m(z),m(G),m(ne),m(P),m(re),m(ue),I})})(I0);var N0=I0.exports;class SA{constructor(e){Pt(this,"position",-1);Pt(this,"cells",[]);this.position=e}}class MA{constructor(e,{position:t,previousCellPosition:n}={}){Pt(this,"DOM",{el:null});Pt(this,"position",-1);Pt(this,"previousCellPosition",-1);Pt(this,"original");Pt(this,"state");Pt(this,"color");Pt(this,"originalColor");Pt(this,"cache");this.DOM.el=e,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=t,this.previousCellPosition=n}set(e){this.state=e,this.DOM.el.innerHTML=this.state}}class EA{constructor(e){Pt(this,"DOM",{el:null});Pt(this,"lines",[]);Pt(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);Pt(this,"totalChars",0);this.DOM.el=e;const t=N0({target:this.DOM.el,by:"lines"});t.forEach(n=>N0({target:n.words}));for(const[n,i]of t[0].lines.entries()){const s=new SA(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new MA(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;s.cells=o,this.lines.push(s),this.totalChars+=a}}clearCells(){for(const e of this.lines)for(const t of e.cells)t.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}animate(){let t=0;const n=(i,s,o=0)=>{s.cache={state:s.state,color:s.color},o===8-1?(s.set(s.original),s.color=s.originalColor,s.DOM.el.style.color=s.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(s.set(this.getRandomChar()),s.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color),++o,o<8&&setTimeout(()=>n(i,s,o),this.randomNumber(30,110))};for(const i of this.lines)for(const s of i.cells)setTimeout(()=>n(i,s),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}class TA{constructor(){this.init()}init(){window.applyTextShuffle=function(e){const t=document.getElementById(e);t?new EA(t).trigger():console.warn('Element with ID "'+e+'" was not found.')}}}/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cn,U0,gr,Hi,Zr,O0,F0,pu,B0=function(){return typeof window!="undefined"},k0=function(){return Cn||B0()&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},z0=function(e){return typeof e=="string"},H0=function(e){return typeof e=="function"},vl=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===gr||e===Hi||e===Zr?Math.max(Hi[i],Zr[i])-(gr["inner"+n]||Hi[s]||Zr[s]):e[i]-e["offset"+n]},xl=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===gr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Hi[n]!=null?Hi:Zr),function(){return e[n]}},bA=function(e,t,n,i){if(H0(e)&&(e=e(t,n,i)),typeof e!="object")return z0(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&H0(e[o])?e[o](t,n,i):e[o];return s},G0=function(e,t){if(e=O0(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===gr||t===Zr,s=i?{top:Hi.clientTop-(gr.pageYOffset||Hi.scrollTop||Zr.scrollTop||0),left:Hi.clientLeft-(gr.pageXOffset||Hi.scrollLeft||Zr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=xl(t,"x")(),o.y+=xl(t,"y")()),o},V0=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:z0(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?vl(t,n)-s:Math.min(vl(t,n),G0(e,t)[n]-s)},W0=function(){Cn=k0(),B0()&&Cn&&typeof document!="undefined"&&document.body&&(gr=window,Zr=document.body,Hi=document.documentElement,O0=Cn.utils.toArray,Cn.config({autoKillThreshold:7}),F0=Cn.config(),U0=1)},yl={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Cn=e,W0()},init:function(e,t,n,i,s){U0||W0();var o=this,a=Cn.getProperty(e,"scrollSnapType");o.isWin=e===gr,o.target=e,o.tween=n,t=bA(t,i,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=xl(e,"x"),o.getY=xl(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),pu||(pu=Cn.core.globals().ScrollTrigger),Cn.getProperty(e,"scrollBehavior")==="smooth"&&Cn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,V0(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,V0(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,f=t.snapInline,d,u,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,u=c||!t.skipY?t.getY():l,g=u-l,_=d-a,p=F0.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<vl(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&u<vl(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?gr.scrollTo(t.skipX?d:t.x,t.skipY?u:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(u=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=u+1,i.scrollLeft=d+1,i.scrollTop=u,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,pu&&pu.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};yl.max=vl,yl.getOffset=G0,yl.buildGetter=xl,k0()&&Cn.registerPlugin(yl),document.addEventListener("DOMContentLoaded",function(){Tt.registerPlugin(rt,Zo,yd,na,yl);const r=new K0;new TA,document.body.getAttribute("data-barba")==="wrapper"?new xA(r):console.log("barba html structure is not set")})});
