var sA=Object.defineProperty;var oA=(Vi,nn,_r)=>nn in Vi?sA(Vi,nn,{enumerable:!0,configurable:!0,writable:!0,value:_r}):Vi[nn]=_r;var Rt=(Vi,nn,_r)=>(oA(Vi,typeof nn!="symbol"?nn+"":nn,_r),_r);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`iframe{border:none;width:100%;height:100%}a.spline-watermark{display:none!important}.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(Vi){typeof define=="function"&&define.amd?define(Vi):Vi()})(function(){"use strict";var Vi="";function nn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _r(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},yu,ln,Dt,ei=1e8,Mt=1/ei,Su=Math.PI*2,ux=Su/4,hx=0,Yd=Math.sqrt,fx=Math.cos,dx=Math.sin,Jt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},Eu=function(e){return typeof e=="undefined"},wi=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},Mu=function(){return typeof window!="undefined"},bl=function(e){return It(e)||Jt(e)},qd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Tu=/(?:-?\.?\d|\.)+/gi,Zd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kd=/[+-]=-?[.\d]+/,Jd=/[^,'"\[\]\s]+/gi,px=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Di,wu,Du,Vn={},wl={},jd,Qd=function(e){return(wl=jr(e,Vn))&&Nn},Au=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sa=function(e,t){return!t&&console.warn(e)},ep=function(e,t){return e&&(Vn[e]=t)&&wl&&(wl[e]=t)||Vn},oa=function(){return 0},mx={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},gx={suppressEvents:!0},Cu={},vr=[],Ru={},tp,Wn={},Pu={},np=30,Al=[],Lu="",Fu=function(e){var t=e[0],n,i;if(wi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Al.length;i--&&!Al[i].targetTest(t););n=Al[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pp(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||Fu(ii(e))[0]._gsap},ip=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Eu(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Ys=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_x=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Cl=function(){var e=vr.length,t=vr.slice(0),n,i;for(Ru={},vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rp=function(e,t,n,i){vr.length&&!ln&&Cl(),e.render(t,n,i||ln&&t<0&&(e._initted||e._startAt)),vr.length&&!ln&&Cl()},sp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jd).length<2?t:Jt(e)?e.trim():e},op=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},ap=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Rl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},aa=function(e){var t=e.parent||Pt,n=e.keyframes?vx(cn(e.keyframes)):ti;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},lp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Pl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nu=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Sx=function s(e){return!e||e._ts&&s(e.parent)},cp=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fl=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Nl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fl(e),n._dirty||Qr(n,e)),e},up=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ll(e.rawTime(),t),(!t._dur||ca(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ai=function(e,t,n,i){return t.parent&&xr(t),t._start=jt((Wi(n)?n:n||e!==Pt?ni(e,n,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lp(e,t,"_first","_last",e._sort?"_start":0),Iu(t)||(e._recent=t),i||up(e,t),e._ts<0&&Nl(e,e._tTime),e},hp=function(e,t){return(Vn.ScrollTrigger||Au("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},fp=function(e,t,n,i,r){if(Wu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tp!==$n.frame)return vr.push(e),e._lazy=[r,i],1},Ex=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Iu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Mx=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Ex(e)&&!(!e._initted&&Iu(e))||(e._ts<0||e._dp._ts<0)&&!Iu(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=ca(0,e._tDur,t),h=qs(l,a),e._yoyo&&h&1&&(o=1-o),h!==qs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ln||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&fp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Nu(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xr(e,1),!n&&!ln&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var r=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:jt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Nl(e,e._tTime=e._tDur*a),e.parent&&Fl(e),n||Qr(e.parent,e),e},dp=function(e){return e instanceof vn?Qr(e):Zs(e,e._dur)},bx={_start:0,endTime:oa,totalDuration:oa},ni=function s(e,t,n){var i=e.labels,r=e._recent||bx,o=e.duration()>=ei?r.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},la=function(e,t,n){var i=Wi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new zt(t[0],o,t[r+1])},yr=function(e,t){return e||e===0?t(e):t},ca=function(e,t,n){return n<e?e:n>t?t:n},un=function(e,t){return!Jt(e)||!(t=px.exec(e))?"":t[1]},wx=function(e,t,n){return yr(n,function(i){return ca(e,t,i)})},Uu=[].slice,pp=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==Di},Dx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Jt(i)&&!t||pp(i,1)?(r=n).push.apply(r,ii(i)):n.push(i)})||n},ii=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):Jt(e)&&!n&&(wu||!Js())?Uu.call((t||Du).querySelectorAll(e),0):cn(e)?Dx(e,n):pp(e)?Uu.call(e,0):e?[e]:[]},Ou=function(e){return e=ii(e)[0]||sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?sa("Invalid scope")||Du.createElement("div"):e)}},mp=function(e){return e.sort(function(){return .5-Math.random()})},gp=function(e){if(It(e))return e;var t=wi(e)?e:{each:e},n=es(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,p=o[_],m,S,v,y,M,b,E,C,F;if(!p){if(F=t.grid==="auto"?0:(t.grid||[1,ei])[1],!F){for(E=-ei;E<(E=g[F++].getBoundingClientRect().left)&&F<_;);F<_&&F--}for(p=o[_]=[],m=l?Math.min(F,_)*h-.5:i%F,S=F===ei?0:l?_*f/F-.5:i/F|0,E=0,C=ei,b=0;b<_;b++)v=b%F-m,y=S-(b/F|0),p[b]=M=c?Math.abs(c==="y"?y:v):Yd(v*v+y*y),M>E&&(E=M),M<C&&(C=M);i==="random"&&mp(p),p.max=E-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(F>_?_-1:c?c==="y"?_/F:F:Math.max(F,_/F))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=un(t.amount||t.each)||0,n=n&&_<0?Ap(n):n}return _=(p[d]-p.min)/p.max||0,jt(p.b+(n?n(_):_)*p.v)+p.u}},Bu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:un(n))}},_p=function(e,t){var n=cn(e),i,r;return!n&&wi(e)&&(i=n=e.radius||ei,e.values?(e=ii(e.values),(r=!Wi(e[0]))&&(i*=i)):e=Bu(e.increment)),yr(t,n?It(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ei,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,r||h===o||Wi(o)?h:h+un(o)}:Bu(e))},vp=function(e,t,n,i){return yr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ax=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Cx=function(e,t){return function(n){return e(parseFloat(n))+(t||un(n))}},Rx=function(e,t,n){return yp(e,t,0,1,n)},xp=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},Px=function s(e,t,n){var i=t-e;return cn(e)?xp(e,s(0,e.length),t):yr(n,function(r){return(i+(r-e)%i)%i+e})},Lx=function s(e,t,n){var i=t-e,r=i*2;return cn(e)?xp(e,s(0,e.length-1),t):yr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ua=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Jd:Tu),n+=e.substr(t,i-t)+vp(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},yp=function(e,t,n,i,r){var o=t-e,a=i-n;return yr(r,function(l){return n+((l-e)/o*a||0)})},Fx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=Jt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=jr(cn(e)?[]:{},e));if(!h){for(l in t)Gu.call(a,e,l,"get",t[l]);r=function(g){return Yu(g,a)||(o?e.p:e)}}}return yr(n,r)},Sp=function(e,t,n){var i=e.labels,r=ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Xn=function(e,t,n){var i=e.vars,r=i[t],o=Dt,a=e._ctx,l,c,h;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&vr.length&&Cl(),a&&(Dt=a),h=l?r.apply(c,l):r.call(c),Dt=o,h},ha=function(e){return xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Xn(e,"onInterrupt"),e},Ks,Ep=[],Mp=function(e){if(!!e)if(e=!e.name&&e.default||e,Mu()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:oa,render:Yu,add:Gu,kill:Zx,modifier:qx,rawVars:0},o={targetTest:0,get:0,getSetter:$u,aliases:{},register:0};if(Js(),e!==i){if(Wn[t])return;ti(i,ti(Rl(e,r),o)),jr(i.prototype,jr(r,Rl(e,o))),Wn[i.prop=t]=i,e.targetTest&&(Al.push(i),Cu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ep(t,i),e.register&&e.register(Nn,i,Fn)}else Ep.push(e)},St=255,fa={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},ku=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Tp=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&St,e&St]:0:fa.black,r,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Tu),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=ku(l+1/3,r,o),i[1]=ku(l,r,o),i[2]=ku(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Zd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Tu)||fa.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/St,o=i[1]/St,a=i[2]/St,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bp=function(e){var t=[],n=[],i=-1;return e.split(Sr).forEach(function(r){var o=r.match($s)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},wp=function(e,t,n){var i="",r=(e+i).match(Sr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=Tp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=bp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Sr,"1").split($s),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Sr),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},Sr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Nx=/hsl[a]?\(/,Dp=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=Nx.test(t),e[1]=wp(e[1],n),e[0]=wp(e[0],n,bp(e[1])),!0},da,$n=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,g=function _(p){var m=s()-i,S=p===!0,v,y,M,b;if((m>e||m<0)&&(n+=m-t),i+=m,M=i-n,v=M-o,(v>0||S)&&(b=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=r?4:r-v),y=1),S||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](M,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){jd&&(!wu&&Mu()&&(Di=wu=window,Du=Di.document||{},Vn.gsap=Nn,(Di.gsapVersions||(Di.gsapVersions=[])).push(Nn.version),Qd(wl||Di.GreenSockGlobals||!Di.gsap&&Di||{}),Ep.forEach(Mp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},da=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),da=0,c=oa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=f.time*1e3+r},add:function(p,m,S){var v=m?function(y,M,b,E){p(y,M,b,E),f.remove(v)}:p;return f.remove(p),a[S?"unshift":"push"](v),Js(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),Js=function(){return!da&&$n.wake()},ht={},Ix=/^[\d.\-M][\d.\-,\s]/,Ux=/["']/g,Ox=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Ux,"").trim():+c,i=l.substr(a+1).trim();return t},Bx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},kx=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ox(t[1])]:Bx(e).split(",").map(sp)):ht._CE&&Ix.test(e)?ht._CE("",e):n},Ap=function(e){return function(t){return 1-e(1-t)}},Cp=function s(e,t){for(var n=e._first,i;n;)n instanceof vn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},es=function(e,t){return e&&(It(e)?e:ht[e]||kx(e))||t},ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){ht[a]=Vn[a]=r,ht[o=a.toLowerCase()]=n;for(var l in r)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=r[l]}),r},Rp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Su*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*dx((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Rp(a);return r=Su/r,l.config=function(c,h){return s(e,c,h)},l},Hu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Rp(n);return i.config=function(r){return s(e,r)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ts(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ht.Linear.easeNone=ht.none=ht.Linear.easeIn,ts("Elastic",zu("in"),zu("out"),zu()),function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ts("Bounce",function(o){return 1-r(1-o)},r)}(7.5625,2.75),ts("Expo",function(s){return s?Math.pow(2,10*(s-1)):0}),ts("Circ",function(s){return-(Yd(1-s*s)-1)}),ts("Sine",function(s){return s===1?1:-fx(s*ux)+1}),ts("Back",Hu("in"),Hu("out"),Hu()),ht.SteppedEase=ht.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Mt;return function(a){return((i*ca(0,o,a)|0)+r)*n}}},Xs.ease=ht["quad.out"],Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Lu+=s+","+s+"Params,"});var Pp=function(e,t){this.id=hx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ip,this.set=t?t.getSetter:$u},pa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),da||$n.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Nl(this,n),!r._dp||r.parent||up(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?qs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this._tDur,r),i!==!1),Fl(this),yx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gx);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),Pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=It(n)?n:op,a=function(){var c=i.then;i.then=null,It(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ha(this)},s}();ti(pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var vn=function(s){_r(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pn(n.sortChildren),Pt&&Ai(n.parent||Pt,nn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&hp(nn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return la(0,arguments,this),this},t.from=function(i,r,o){return la(1,arguments,this),this},t.fromTo=function(i,r,o,a){return la(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,aa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new zt(i,r,ni(this,o),1),this},t.call=function(i,r,o){return Ai(this,zt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(i,o,ni(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,aa(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,aa(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:jt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,S,v,y,M,b,E;if(this!==Pt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=jt(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),M=qs(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),b&&_&1&&(d=c-d,E=1),_!==M&&!this._lock){var C=b&&M&1,F=C===(b&&_&1);if(_<M&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(E?0:jt(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,F&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Cp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Tx(this,jt(a),jt(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(Xn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var x=i<0?i:d;u;){if(g=u._prev,(u._act||x<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,r,o||ln&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=x?-Mt:Mt);break}}u=g}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Fl(this),this.render(i,r,o);this._onUpdate&&!r&&Xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Wi(r)||(r=ni(this,r,i)),!(i instanceof pa)){if(cn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Jt(i))return this.addLabel(i,r);if(It(i))i=zt.delayedCall(0,i);else return this}return this!==i?Ai(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(Pl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ni(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=zt.delayedCall(0,r||oa,o);return a.data="isPause",this._hasPause=1,Ai(this,a,ni(this,i))},t.removePause=function(i){var r=this._first;for(i=ni(this,i);r;)r._start===i&&r.data==="isPause"&&xr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ii(i),l=this._first,c=Wi(r),h;l;)l instanceof zt?_x(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ni(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=zt.to(o,ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Zs(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ti({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sp(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sp(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ei,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Zs(o,o===Pt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(rp(Pt,Ll(i,Pt)),tp=$n.frame),$n.frame>=np){np+=Gn.autoSleep||120;var r=Pt._first;if((!r||!r._ts)&&Gn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},e}(pa);ti(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zx=function(e,t,n,i,r,o,a){var l=new Fn(this._pt,e,t,0,1,Op,null,r),c=0,h=0,f,d,u,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ua(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(bu)||[];f=bu.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Ys(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=bu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Kd.test(i)||m)&&(l.e=0),this._pt=l,l},Gu=function(e,t,n,i,r,o,a,l,c,h){It(i)&&(i=i(r||0,e,o));var f=e[t],d=n!=="get"?n:It(f)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=It(f)?c?Xx:Ip:Xu,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=ua(i)),i.charAt(1)==="="&&(g=Ys(d,i)+(un(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Vu)return!isNaN(d*i)&&i!==""?(g=new Fn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?Yx:Up,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Au(t,i),zx.call(this,e,t,d,i,u,l||Gn.stringFilter,c))},Hx=function(e,t,n,i,r){if(It(e)&&(e=ma(e,r,t,n,i)),!wi(e)||e.style&&e.nodeType||cn(e)||qd(e))return Jt(e)?ma(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ma(e[a],r,t,n,i);return o},Lp=function(e,t,n,i,r,o){var a,l,c,h;if(Wn[e]&&(a=new Wn[e]).init(r,a.rawVars?t[e]:Hx(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ks))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Er,Vu,Wu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!yu,y=e.timeline,M,b,E,C,F,x,D,X,G,L,H,U,k;if(y&&(!d||!r)&&(r="none"),e._ease=es(r,Xs.ease),e._yEase=f?Ap(es(f===!0?r:f,Xs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(X=p[0]?Jr(p[0]).harness:0,U=X&&i[X.prop],M=Rl(i,Cu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?Dl:mx),_._lazy=0),o){if(xr(e._startAt=zt.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!u)&&e._startAt.revert(Dl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pn(l),immediateRender:a,stagger:0,parent:m},M),U&&(E[X.prop]=U),xr(e._startAt=zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Dl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Pn(l)||l&&!g,b=0;b<p.length;b++){if(F=p[b],D=F._gsap||Fu(p)[b]._gsap,e._ptLookup[b]=L={},Ru[D.id]&&vr.length&&Cl(),H=S===p?b:S.indexOf(F),X&&(G=new X).init(F,U||M,e,H,S)!==!1&&(e._pt=C=new Fn(e._pt,F,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(q){L[q]=C}),G.priority&&(x=1)),!X||U)for(E in M)Wn[E]&&(G=Lp(E,M,e,H,F,S))?G.priority&&(x=1):L[E]=C=Gu.call(e,F,E,"get",M[E],H,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(F,e._op[b]),v&&e._pt&&(Er=e,Pt.killTweensOf(F,L,e.globalTime(t)),k=!e.parent,Er=0),e._pt&&l&&(Ru[D.id]=1)}x&&Bp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&y.render(ei,!0,!0)},Gx=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Vu=1,e.vars[t]="+=0",Wu(e,a),Vu=0,l?sa(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ut(n)+un(f.e)),f.b&&(f.b=h.s+un(f.b))},Vx=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=jr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Wx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ma=function(e,t,n,i,r){return It(e)?e.call(t,n,i,r):Jt(e)&&~e.indexOf("random(")?ua(e):e},Fp=Lu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Np={};Ln(Fp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Np[s]=1});var zt=function(s){_r(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:aa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Pt,v=(cn(n)||qd(n)?Wi(n[0]):"length"in i)?[n]:ii(n),y,M,b,E,C,F,x,D;if(a._targets=v.length?Fu(v):sa("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||bl(c)||bl(h)){if(i=a.vars,y=a.timeline=new vn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=nn(a),y._start=0,d||bl(c)||bl(h)){if(E=v.length,x=d&&gp(d),wi(d))for(C in d)~Fp.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(M=0;M<E;M++)b=Rl(i,Np),b.stagger=0,m&&(b.yoyoEase=m),D&&jr(b,D),F=v[M],b.duration=+ma(c,nn(a),M,F,v),b.delay=(+ma(h,nn(a),M,F,v)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(F,b,x?x(M,F,v):0),y._ease=ht.none;y.duration()?c=h=0:a.timeline=0}else if(g){aa(ti(y.vars.defaults,{ease:"none"})),y._ease=es(g.ease||i.ease||"none");var X=0,G,L,H;if(cn(g))g.forEach(function(U){return y.to(v,U,">")}),y.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||Wx(C,g[C],b,g.easeEach);for(C in b)for(G=b[C].sort(function(U,k){return U.t-k.t}),X=0,M=0;M<G.length;M++)L=G[M],H={ease:L.e,duration:(L.t-(M?G[M-1].t:0))/100*c},H[C]=L.v,y.to(v,H,X),X+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!yu&&(Er=nn(a),Pt.killTweensOf(v),Er=0),Ai(S,nn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===jt(S._time)&&Pn(f)&&Sx(nn(a))&&S.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-h)||0)),p&&hp(nn(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Mt&&!h?l:i<Mt?0:i,d,u,g,_,p,m,S,v,y;if(!c)Mx(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=jt(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===jt(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,d=c-d),p=qs(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Cp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(fp(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!r&&!g&&(Xn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Nu(this,i,r,o),Xn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Nu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&xr(this,1),!r&&!(h&&!a)&&(f||a||m)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){da||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Wu(this,c),h=this._ease(c/this._dur),Gx(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Nl(this,0),this.parent||lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Er&&Er.vars.overwrite!==!0)._first||ha(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!r||r==="all")&&xx(a,l))return r==="all"&&(this._pt=0),ha(this);for(f=this._op=this._op||[],r!=="all"&&(Jt(r)&&(_={},Ln(r,function(S){return _[S]=1}),r=_),r=Vx(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(f[m]=r,g=d,u={}):(u=f[m]=f[m]||{},g=r);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Pl(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&ha(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return la(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return la(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Pt.killTweensOf(i,r,o)},e}(pa);ti(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ln("staggerTo,staggerFrom,staggerFromTo",function(s){zt[s]=function(){var e=new vn,t=Uu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Xu=function(e,t,n){return e[t]=n},Ip=function(e,t,n){return e[t](n)},Xx=function(e,t,n,i){return e[t](i.fp,n)},$x=function(e,t,n){return e.setAttribute(t,n)},$u=function(e,t){return It(e[t])?Ip:Eu(e[t])&&e.setAttribute?$x:Xu},Up=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Op=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Yu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qx=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Zx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Pl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Kx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Fn=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Up,this.d=l||this,this.set=c||Xu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Kx,this.m=n,this.mt=r,this.tween=i},s}();Ln(Lu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Cu[s]=1}),Vn.TweenMax=Vn.TweenLite=zt,Vn.TimelineLite=Vn.TimelineMax=vn,Pt=new vn({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Gn.stringFilter=Dp;var ns=[],Il={},Jx=[],kp=0,jx=0,qu=function(e){return(Il[e]||Jx).map(function(t){return t()})},Zu=function(){var e=Date.now(),t=[];e-kp>2&&(qu("matchMediaInit"),ns.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Di.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kp=e,qu("matchMedia"))},zp=function(){function s(t,n){this.selector=n&&Ou(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jx++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){It(n)&&(r=i,i=n,n=It);var o=this,a=function(){var c=Dt,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ou(r)),Dt=o,f=i.apply(o,arguments),It(f)&&o._r.push(f),Dt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===It?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ns.length;o--;)ns[o].id===this.id&&ns.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Qx=function(){function s(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){wi(n)||(n={matches:n});var o=new zp(0,r||this.scope),a=o.conditions={},l,c,h;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Di.matchMedia(n[c]),l&&(ns.indexOf(o)<0&&ns.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Zu):l.addEventListener("change",Zu)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ul={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mp(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ii(e)[0]);var r=Jr(e||{}).get,o=n?op:sp;return n==="native"&&(n=""),e&&(t?o((Wn[t]&&Wn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(h){return Nn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}e=e[0]||{};var o=Wn[t],a=Jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Ks._pt=0,f.init(e,n?h+n:h,Ks,0,[e]),f.render(1,f),Ks._pt&&Yu(1,Ks)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Nn.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Xs.ease)),ap(Xs,e||{})},config:function(e){return ap(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!Vn[a]&&sa(t+" effect requires "+a+" plugin.")}),Pu[t]=function(a,l,c){return n(ii(a),ti(l||{},r),c)},o&&(vn.prototype[t]=function(a,l,c){return this.add(Pu[t](a,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):ht},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,r;for(n.smoothChildTiming=Pn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=r;return Ai(Pt,n,0),n},context:function(e,t){return e?new zp(e,t):Dt},matchMedia:function(e){return new Qx(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zu()},addEventListener:function(e,t){var n=Il[e]||(Il[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Il[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Px,wrapYoyo:Lx,distribute:gp,random:vp,snap:_p,normalize:Rx,getUnit:un,clamp:wx,splitColor:Tp,toArray:ii,selector:Ou,mapRange:yp,pipe:Ax,unitize:Cx,interpolate:Fx,shuffle:mp},install:Qd,effects:Pu,ticker:$n,updateRoot:vn.updateRoot,plugins:Wn,globalTimeline:Pt,core:{PropTween:Fn,globals:ep,Tween:zt,Timeline:vn,Animation:pa,getCache:Jr,_removeLinkedListItem:Pl,reverting:function(){return ln},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return yu=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ul[s]=zt[s]}),$n.add(vn.updateRoot),Ks=Ul.to({},{duration:0});var ey=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ty=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=ey(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ku=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Jt(r)&&(l={},Ln(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ty(a,r)}}}},Nn=Ul.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ku("roundProps",Bu),Ku("modifiers"),Ku("snap",_p))||Ul;zt.version=vn.version=Nn.version="3.12.5",jd=1,Mu()&&Js(),ht.Power0,ht.Power1,ht.Power2,ht.Power3,ht.Power4,ht.Linear,ht.Quad,ht.Cubic,ht.Quart,ht.Quint,ht.Strong,ht.Elastic,ht.Back,ht.SteppedEase,ht.Bounce,ht.Sine,ht.Expo,ht.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hp,Mr,js,Ju,is,Gp,ju,ny=function(){return typeof window!="undefined"},Xi={},rs=180/Math.PI,Qs=Math.PI/180,eo=Math.atan2,Vp=1e8,Qu=/([A-Z])/g,iy=/(left|right|width|margin|padding|x)/i,ry=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ay=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ly=function(e,t,n){return e.style[t]=n},cy=function(e,t,n){return e.style.setProperty(t,n)},uy=function(e,t,n){return e._gsap[t]=n},hy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fy=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},dy=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Lt="transform",In=Lt+"Origin",py=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Xi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=$i(i,a)}):this.tfm[e]=o.x?o[e]:$i(i,e),e===In&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=Lt}(r||t)&&this.props.push(e,t,r[e])},$p=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},my=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ju(),(!r||!r.isStart)&&!n[Lt]&&($p(n),i.zOrigin&&n[In]&&(n[In]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Yp=function(e,t){var n={target:e,props:[],revert:my,save:py};return e._gsap||Nn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},qp,th=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},Ri=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,to(t)||t,1)||""},Zp="O,Moz,ms,Ms,Webkit".split(","),to=function(e,t,n){var i=t||is,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Zp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Zp[o]:"")+e},nh=function(){ny()&&window.document&&(Hp=window,Mr=Hp.document,js=Mr.documentElement,is=th("div")||{style:{}},th("div"),Lt=to(Lt),In=Lt+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qp=!!to("perspective"),ju=Nn.core.reverting,Ju=1)},ih=function s(e){var t=th("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(js.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),js.removeChild(t),this.style.cssText=r,o},Kp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jp=function(e){var t;try{t=e.getBBox()}catch{t=ih.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ih||(t=ih.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kp(e,["x","cx","x1"])||0,y:+Kp(e,["y","cy","y1"])||0,width:0,height:0}:t},jp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jp(e))},ss=function(e,t){if(t){var n=e.style,i;t in Xi&&t!==In&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qu,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,i,r,o){var a=new Fn(e._pt,t,n,0,1,o?Xp:Wp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Qp={deg:1,rad:1,turn:1},gy={grid:1,flex:1},br=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=is.style,l=iy.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!r||Qp[i]||Qp[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),m=e.getCTM&&jp(e),(u||o==="%")&&(Xi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Ut(u?r/g*f:r/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Mr||!_.appendChild)&&(_=Mr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===$n.time&&!p.uncache)return Ut(r/p.width*f);if(u&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[h],S?e.style[t]=S:ss(e,t)}else(u||o==="%")&&!gy[Ri(_,"display")]&&(a.position=Ri(e,"position")),_===e&&(a.position="static"),_.appendChild(is),g=is[h],_.removeChild(is),a.position="absolute";return l&&u&&(p=Jr(_),p.time=$n.time,p.width=_[h]),Ut(d?g*r/f:g&&r?f/g*r:0)},$i=function(e,t,n,i){var r;return Ju||nh(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(r=_a(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Bl(Ri(e,In))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ol[t]&&Ol[t](e,t,n)||Ri(e,t)||ip(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?br(e,t,r,n)+n:r},_y=function(e,t,n,i){if(!n||n==="none"){var r=to(t,e,1),o=r&&Ri(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Ri(e,"borderTopColor"))}var a=new Fn(this._pt,e.style,t,0,1,Op),l=0,c=0,h,f,d,u,g,_,p,m,S,v,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ri(e,t)||i,_?e.style[t]=_:ss(e,t)),h=[n,i],Dp(h),n=h[0],i=h[1],d=n.match($s)||[],M=i.match($s)||[],M.length){for(;f=$s.exec(i);)p=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=Ys(u,p)+y),m=parseFloat(p),v=p.substr((m+"").length),l=$s.lastIndex-v.length,v||(v=v||Gn.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(u=br(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:u,c:m-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Xp:Wp;return Kd.test(i)&&(a.e=0),this._pt=a,a},em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=em[n]||n,t[1]=em[i]||i,t.join(" ")},xy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Xi[a]&&(l=1,a=a==="transformOrigin"?In:Lt),ss(n,a);l&&(ss(n,Lt),o&&(o.svg&&n.removeAttribute("transform"),_a(n,1),o.uncache=1,$p(i)))}},Ol={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Fn(e._pt,t,n,0,0,xy);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ga=[1,0,0,1,0,0],tm={},nm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},im=function(e){var t=Ri(e,Lt);return nm(t)?ga:t.substr(7).match(Zd).map(Ut)},rh=function(e,t){var n=e._gsap||Jr(e),i=e.style,r=im(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ga:r):(r===ga&&!e.offsetParent&&e!==js&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,js.appendChild(e)),r=im(e),l?i.display=l:ss(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):js.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sh=function(e,t,n,i,r,o){var a=e._gsap,l=r||rh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,b,E,C,F;n?l!==ga&&(E=u*p-g*_)&&(C=y*(p/E)+M*(-_/E)+(_*S-p*m)/E,F=y*(-g/E)+M*(u/E)-(u*S-g*m)/E,y=C,M=F):(b=Jp(e),y=b.x+(~v[0].indexOf("%")?y/100*b.width:y),M=b.y+(~(v[1]||v[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(m=y-c,S=M-h,a.xOffset=f+(m*u+S*_)-m,a.yOffset=d+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[In]="0px 0px",o&&(Tr(o,a,"xOrigin",c,y),Tr(o,a,"yOrigin",h,M),Tr(o,a,"xOffset",f,a.xOffset),Tr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},_a=function(e,t){var n=e._gsap||new Pp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ri(e,In)||"0",h,f,d,u,g,_,p,m,S,v,y,M,b,E,C,F,x,D,X,G,L,H,U,k,q,I,R,ie,le,Z,P,B;return h=f=d=_=p=m=S=v=y=0,u=g=1,n.svg=!!(e.getCTM&&jp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),E=rh(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),sh(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==ga&&(D=E[0],X=E[1],G=E[2],L=E[3],h=H=E[4],f=U=E[5],E.length===6?(u=Math.sqrt(D*D+X*X),g=Math.sqrt(L*L+G*G),_=D||X?eo(X,D)*rs:0,S=G||L?eo(G,L)*rs+_:0,S&&(g*=Math.abs(Math.cos(S*Qs))),n.svg&&(h-=M-(M*D+b*G),f-=b-(M*X+b*L))):(B=E[6],Z=E[7],R=E[8],ie=E[9],le=E[10],P=E[11],h=E[12],f=E[13],d=E[14],C=eo(B,le),p=C*rs,C&&(F=Math.cos(-C),x=Math.sin(-C),k=H*F+R*x,q=U*F+ie*x,I=B*F+le*x,R=H*-x+R*F,ie=U*-x+ie*F,le=B*-x+le*F,P=Z*-x+P*F,H=k,U=q,B=I),C=eo(-G,le),m=C*rs,C&&(F=Math.cos(-C),x=Math.sin(-C),k=D*F-R*x,q=X*F-ie*x,I=G*F-le*x,P=L*x+P*F,D=k,X=q,G=I),C=eo(X,D),_=C*rs,C&&(F=Math.cos(C),x=Math.sin(C),k=D*F+X*x,q=H*F+U*x,X=X*F-D*x,U=U*F-H*x,D=k,H=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Ut(Math.sqrt(D*D+X*X+G*G)),g=Ut(Math.sqrt(U*U+B*B)),C=eo(H,U),S=Math.abs(C)>2e-4?C*rs:0,y=P?1/(P<0?-P:P):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!nm(Ri(e,Lt)),k&&e.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(u*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ut(u),n.scaleY=Ut(g),n.rotation=Ut(_)+a,n.rotationX=Ut(p)+a,n.rotationY=Ut(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[In]=Bl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?Sy:qp?rm:yy,n.uncache=0,n},Bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},oh=function(e,t,n){var i=un(t);return Ut(parseFloat(t)+parseFloat(br(e,"x",n+"px",i)))+i},yy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rm(e,t)},os="0deg",va="0px",as=") ",rm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,y="",M=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==os||h!==os)){var b=parseFloat(h)*Qs,E=Math.sin(b),C=Math.cos(b),F;b=parseFloat(f)*Qs,F=Math.cos(b),o=oh(S,o,E*F*-v),a=oh(S,a,-Math.sin(b)*-v),l=oh(S,l,C*F*-v+v)}p!==va&&(y+="perspective("+p+as),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==va||a!==va||l!==va)&&(y+=l!==va||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+as),c!==os&&(y+="rotate("+c+as),h!==os&&(y+="rotateY("+h+as),f!==os&&(y+="rotateX("+f+as),(d!==os||u!==os)&&(y+="skew("+d+", "+u+as),(g!==1||_!==1)&&(y+="scale("+g+", "+_+as),S.style[Lt]=y||"translate(0, 0)"},Sy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,b,E,C,F;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Qs,c*=Qs,M=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Qs,F=Math.tan(c-h),F=Math.sqrt(1+F*F),E*=F,C*=F,h&&(F=Math.tan(h),F=Math.sqrt(1+F*F),M*=F,b*=F)),M=Ut(M),b=Ut(b),E=Ut(E),C=Ut(C)):(M=f,C=d,b=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=br(u,"x",o,"px"),y=br(u,"y",a,"px")),(g||_||p||m)&&(v=Ut(v+g-(g*M+_*E)+p),y=Ut(y+_-(g*b+_*C)+m)),(i||r)&&(F=u.getBBox(),v=Ut(v+i/100*F.width),y=Ut(y+r/100*F.height)),F="matrix("+M+","+b+","+E+","+C+","+v+","+y+")",u.setAttribute("transform",F),S&&(u.style[Lt]=F)},Ey=function(e,t,n,i,r){var o=360,a=Jt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?rs:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Vp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Vp)%o-~~(c/o)*o)),e._pt=d=new Fn(e._pt,t,n,i,c,sy),d.e=h,d.u="deg",e._props.push(n),d},sm=function(e,t){for(var n in t)e[n]=t[n];return e},My=function(e,t,n){var i=sm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Lt]=t,a=_a(n,1),ss(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],o[Lt]=t,a=_a(n,1),o[Lt]=c);for(l in Xi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=un(c),g=un(h),f=u!==g?br(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Fn(e._pt,a,l,f,d-f,eh),e._pt.u=g||0,e._props.push(l));sm(a,i)};Ln("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ol[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return $i(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var om={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,S,v,y,M,b,E,C;Ju||nh(),this.styles=this.styles||Yp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Wn[_]&&Lp(_,t,n,i,e,r)))){if(u=typeof h,g=Ol[_],u==="function"&&(h=h.call(n,i,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ua(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Sr.lastIndex=0,Sr.test(c)||(p=un(c),m=un(h)),m?p!==m&&(c=br(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),C.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Jt(c)&&~c.indexOf("random(")&&(c=ua(c)),un(c+"")||c==="auto"||(c+=Gn.units[_]||un($i(e,_))||""),(c+"").charAt(1)==="="&&(c=$i(e,_))):c=$i(e,_),d=parseFloat(c),S=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in Ci&&(_==="autoAlpha"&&(d===1&&$i(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),Tr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Xi,v){if(this.styles.save(_),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||_a(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Fn(this._pt,a,Lt,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new Fn(this._pt,M,"scaleY",M.scaleY,(S?Ys(M.scaleY,S+f):f)-M.scaleY||0,eh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(In,0,a[In]),h=vy(h),M.svg?sh(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Tr(this,M,"zOrigin",M.zOrigin,m),Tr(this,a,_,Bl(c),Bl(h)));continue}else if(_==="svgOrigin"){sh(e,h,1,b,0,this);continue}else if(_ in tm){Ey(this,M,_,d,S?Ys(d,S+h):h);continue}else if(_==="smoothOrigin"){Tr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){My(this,h,e);continue}}else _ in a||(_=to(_)||_);if(v||(f||f===0)&&(d||d===0)&&!ry.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=un(h)||(_ in Gn.units?Gn.units[_]:p),p!==m&&(d=br(e,_,c,m)),this._pt=new Fn(this._pt,v?M:a,_,d,(S?Ys(d,S+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ay:eh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=oy);else if(_ in a)_y.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,r);else if(_!=="parseTransform"){Au(_,h);continue}v||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||e[_])),o.push(_)}}E&&Bp(this)},render:function(e,t){if(t.tween._time||!ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==In&&(e._gsap.x||$i(e,"x"))?n&&Gp===n?t==="scale"?hy:uy:(Gp=n||{})&&(t==="scale"?fy:dy):e.style&&!Eu(e.style[t])?ly:~t.indexOf("-")?cy:$u(e,t)},core:{_removeProperty:ss,_getMatrix:rh}};Nn.utils.checkPrefix=to,Nn.core.getStyleSaver=Yp,function(s,e,t,n){var i=Ln(s+","+e+","+t,function(r){Xi[r]=1});Ln(e,function(r){Gn.units[r]="deg",tm[r]=1}),Ci[i[13]]=s+","+e,Ln(n,function(r){var o=r.split(":");Ci[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Gn.units[s]="px"}),Nn.registerPlugin(om);var et=Nn.registerPlugin(om)||Nn;et.core.Tween;class Ty{constructor(){if(this.$container=document.getElementById("header"),!this.$container){console.warn("No header container found (#header)");return}this.tl=this.createTimeline()}animateIn(){this.tl.play()}createTimeline(){const e=this.$container.querySelectorAll(".h4, .eyebrow"),t=et.timeline({paused:!0});return t.to(this.$container,{opacity:1,duration:.01},"a"),t.to(e,{autoAlpha:0,duration:.01},"a"),t.from(e,{duration:.1,stagger:{each:.1,onStart:function(){applyExactTextShuffle(this.targets()[0],"in")},onComplete:function(){et.set(this.targets()[0],{autoAlpha:1})}}},"a"),t}}class by{constructor(e,t){if(this.$container=document.getElementById("preloader"),!this.$container){console.warn("No preloader container found (#preloader)");return}this.tl=this.createTimeline(e,t),this.animate()}animate(){this.tl.play()}createTimeline(e,t){const n=this.$container.querySelectorAll(".preloader__text"),i=this.$container.querySelector(".preloader__count");let r={value:0};const o=et.timeline({paused:!0,onStart:()=>{document.body.overflow="hidden",e.lenis.stop(),t.animateIn()},onComplete:()=>{document.body.overflow="auto",e.lenis.start()}});return o.from([n,i],{duration:.5,stagger:{each:.3,onStart:function(){applyExactTextShuffle(this.targets()[0],"in")},onComplete:function(){et.set(this.targets()[0],{autoAlpha:1})}}},"a"),o.to(r,{value:100,duration:1,delay:.6,onUpdate:function(){i.textContent=Math.round(r.value).toString().padStart(2,"0")},ease:"quad.out"},"b"),o.from([i,n],{onStart:function(){this.targets().forEach(a=>{console.log(a),applyExactTextShuffle(a,"out")})},duration:.5,onComplete:function(){this.targets().forEach(a=>{et.to(a,{autoAlpha:0})})}},"c"),o.to(this.$container,{autoAlpha:0,duration:1},"d"),o.add(()=>{console.log("dispatch event: "),document.dispatchEvent(new CustomEvent("preloaderComplete"))},"d-=0.5"),o}}function am(s,e,t){return Math.max(s,Math.min(e,t))}class wy{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,r=60*this.lerp,o=e,function(l,c,h){return(1-h)*l+h*c}(n,i,1-Math.exp(-r*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=am(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,i,r,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:r=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class Dy{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Rt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Rt(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Rt(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(r,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){r.apply(c,l)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class lm{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,r=n.length;i<r;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const cm=100/6;class Ay{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Rt(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Rt(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,r=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:e})});Rt(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Rt(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?cm:i===2?this.windowWidth:1,n*=i===1?cm:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Rt(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new lm,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Cy{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:h=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:f=!c&&.1,infinite:d=!1,orientation:u="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:S=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:y,event:M})=>{if(M.ctrlKey)return;const b=M.type.includes("touch"),E=M.type.includes("wheel");if(this.options.syncTouch&&b&&M.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const C=v===0&&y===0,F=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&v===0;if(C||F)return;let x=M.composedPath();if(x=x.slice(0,x.indexOf(this.rootElement)),x.find(L=>{var H,U,k,q,I;return((H=L.hasAttribute)===null||H===void 0?void 0:H.call(L,"data-lenis-prevent"))||b&&((U=L.hasAttribute)===null||U===void 0?void 0:U.call(L,"data-lenis-prevent-touch"))||E&&((k=L.hasAttribute)===null||k===void 0?void 0:k.call(L,"data-lenis-prevent-wheel"))||((q=L.classList)===null||q===void 0?void 0:q.contains("lenis"))&&!(!((I=L.classList)===null||I===void 0)&&I.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void M.preventDefault();if(this.isSmooth=this.options.syncTouch&&b||this.options.smoothWheel&&E,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();M.preventDefault();let D=y;this.options.gestureOrientation==="both"?D=Math.abs(y)>Math.abs(v)?y:v:this.options.gestureOrientation==="horizontal"&&(D=v);const X=b&&this.options.syncTouch,G=b&&M.type==="touchend"&&Math.abs(D)>5;G&&(D=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+D,Object.assign({programmatic:!1},X?{lerp:G?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:r,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:h,lerp:f,infinite:d,gestureOrientation:g,orientation:u,touchMultiplier:_,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:S},this.animate=new wy,this.emitter=new lm,this.dimensions=new Dy({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||r,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Ay(i,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:o=this.options.easing,lerp:a=!r&&this.options.lerp,onComplete:l,force:c=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const u=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?u.left:u.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=am(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}class Ry{constructor(){this.lenis=this.init()}init(){const e=new Cy;function t(n){e.raf(n),requestAnimationFrame(t)}return requestAnimationFrame(t),e}}function um(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function ah(s,e,t){return e&&um(s.prototype,e),t&&um(s,t),s}function ls(){return(ls=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}).apply(this,arguments)}function kl(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}function hm(s){return(hm=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(s)}function lh(s,e){return(lh=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(s,e)}function fm(s,e,t){return(fm=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,r){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return r&&lh(a,r.prototype),a}).apply(null,arguments)}function dm(s){var e=typeof Map=="function"?new Map:void 0;return(dm=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return fm(t,arguments,hm(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),lh(n,t)})(s)}function no(s,e){try{var t=s()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var wr,Py="2.9.7",Ly=function(){};(function(s){s[s.off=0]="off",s[s.error=1]="error",s[s.warning=2]="warning",s[s.info=3]="info",s[s.debug=4]="debug"})(wr||(wr={}));var pm=wr.off,cs=function(){function s(t){this.t=t}s.getLevel=function(){return pm},s.setLevel=function(t){return pm=wr[t]};var e=s.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,wr.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,wr.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,wr.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,wr.debug,n)},e.i=function(t,n,i){n<=s.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},s}(),us=hh,Fy=gm,Ny=ch,Iy=_m,Uy=vm,mm="/",Oy=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ch(s,e){for(var t,n=[],i=0,r=0,o="",a=e&&e.delimiter||mm,l=e&&e.whitelist||void 0,c=!1;(t=Oy.exec(s))!==null;){var h=t[0],f=t[1],d=t.index;if(o+=s.slice(r,d),r=d+h.length,f)o+=f[1],c=!0;else{var u="",g=t[2],_=t[3],p=t[4],m=t[5];if(!c&&o.length){var S=o.length-1,v=o[S];(!l||l.indexOf(v)>-1)&&(u=v,o=o.slice(0,S))}o&&(n.push(o),o="",c=!1);var y=_||p,M=u||a;n.push({name:g||i++,prefix:u,delimiter:M,optional:m==="?"||m==="*",repeat:m==="+"||m==="*",pattern:y?By(y):"[^"+Yi(M===a?M:M+a)+"]+?"})}}return(o||r<s.length)&&n.push(o+s.substr(r)),n}function gm(s,e){return function(t,n){var i=s.exec(t);if(!i)return!1;for(var r=i[0],o=i.index,a={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var h=e[c-1];a[h.name]=h.repeat?i[c].split(h.delimiter).map(function(f){return l(f,h)}):l(i[c],h)}return{path:r,index:o,params:a}}}function _m(s,e){for(var t=new Array(s.length),n=0;n<s.length;n++)typeof s[n]=="object"&&(t[n]=new RegExp("^(?:"+s[n].pattern+")$",uh(e)));return function(i,r){for(var o="",a=r&&r.encode||encodeURIComponent,l=!r||r.validate!==!1,c=0;c<s.length;c++){var h=s[c];if(typeof h!="string"){var f,d=i?i[h.name]:void 0;if(Array.isArray(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(f=a(d[u],h),l&&!t[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(u===0?h.prefix:h.delimiter)+f}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(f=a(String(d),h),l&&!t[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+f+'"');o+=h.prefix+f}}else o+=h}return o}}function Yi(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function By(s){return s.replace(/([=!:$/()])/g,"\\$1")}function uh(s){return s&&s.sensitive?"":"i"}function vm(s,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,r=t.end!==!1,o=t.delimiter||mm,a=[].concat(t.endsWith||[]).map(Yi).concat("$").join("|"),l=i?"^":"",c=0;c<s.length;c++){var h=s[c];if(typeof h=="string")l+=Yi(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+Yi(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),l+=h.optional?h.prefix?"(?:"+Yi(h.prefix)+"("+f+"))?":"("+f+")?":Yi(h.prefix)+"("+f+")"}}if(r)n||(l+="(?:"+Yi(o)+")?"),l+=a==="$"?"$":"(?="+a+")";else{var d=s[s.length-1],u=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Yi(o)+"(?="+a+"))?"),u||(l+="(?="+Yi(o)+"|"+a+")")}return new RegExp(l,uh(t))}function hh(s,e,t){return s instanceof RegExp?function(n,i){if(!i)return n;var r=n.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(s,e):Array.isArray(s)?function(n,i,r){for(var o=[],a=0;a<n.length;a++)o.push(hh(n[a],i,r).source);return new RegExp("(?:"+o.join("|")+")",uh(r))}(s,e,t):function(n,i,r){return vm(ch(n,r),i,r)}(s,e,t)}us.match=function(s,e){var t=[];return gm(hh(s,t,e),t)},us.regexpToFunction=Fy,us.parse=Ny,us.compile=function(s,e){return _m(ch(s,e),e)},us.tokensToFunction=Iy,us.tokensToRegExp=Uy;var Pi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},hs=new(function(){function s(){this.o=Pi,this.u=new DOMParser}var e=s.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n.length;if(r===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],r===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),h=1;h<r;h++)c.href=arguments[h],o.href=l=c.href;return a.removeChild(o),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},s}()),xm=new(function(){function s(){this.h=[],this.v=-1}var e=s.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var r={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(r,"",t)},e.change=function(t,n,i){if(i&&i.state){var r=i.state,o=r.index;n=this.m(this.v-o),this.replace(r.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,r=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(r){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var i=n||this.v,r=ls({},this.get(i),{},t);this.set(i,r)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,r=Pi.prefix+"-"+Pi.history;return i.hasAttribute&&i.hasAttribute(r)&&(n=i.getAttribute(r)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},ah(s,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),s}()),zl=function(s,e){try{var t=function(){if(!e.next.html)return Promise.resolve(s).then(function(n){var i=e.next;if(n){var r=hs.toElement(n);i.namespace=hs.getNamespace(r),i.container=hs.getContainer(r),i.html=n,xm.update({ns:i.namespace});var o=hs.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},ym=us,ky={__proto__:null,update:zl,nextTick:function(){return new Promise(function(s){window.requestAnimationFrame(s)})},pathToRegexp:ym},Sm=function(){return window.location.origin},xa=function(s){return s===void 0&&(s=window.location.href),Hl(s).port},Hl=function(s){var e,t=s.match(/:\d+/);if(t===null)/^http/.test(s)&&(e=80),/^https/.test(s)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,r=s.replace(Sm(),""),o={},a=r.indexOf("#");a>=0&&(i=r.slice(a+1),r=r.slice(0,a));var l=r.indexOf("?");return l>=0&&(o=Em(r.slice(l+1)),r=r.slice(0,l)),{hash:i,path:r,port:e,query:o}},Em=function(s){return s.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},fh=function(s){return s===void 0&&(s=window.location.href),s.replace(/(\/#.*|\/|#.*)$/,"")},zy={__proto__:null,getHref:function(){return window.location.href},getOrigin:Sm,getPort:xa,getPath:function(s){return s===void 0&&(s=window.location.href),Hl(s).path},parse:Hl,parseQuery:Em,clean:fh};function Hy(s,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(r.status===200)n(r.responseText);else if(r.status){var o={status:r.status,statusText:r.statusText};t(s,o),i(o)}}},r.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(s,o),i(o)},r.onerror=function(){var o=new Error("Fetch error");t(s,o),i(o)},r.open("GET",s),r.timeout=e,r.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),r.setRequestHeader("x-barba","yes"),r.send()})}var Gy=function(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"};function io(s,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=!1,o=new Promise(function(a,l){e.async=function(){return r=!0,function(h,f){h?l(h):a(f)}};var c=s.apply(e,n);r||(Gy(c)?c.then(a,l):a(c))});return o}}var Dr=new(function(s){function e(){var n;return(n=s.call(this)||this).logger=new cs("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}kl(e,s);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(r,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:r})})})},t.do=function(n){for(var i=this,r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return io(c.fn,c.ctx).apply(void 0,o)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,r){return n.push(r)}),this.logger.info("Registered hooks: "+n.join(","))},e}(Ly)),Mm=function(){function s(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return ym(n)})}}return s.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Hl(e).path;return this.P.some(function(n){return n.exec(t)!==null})},s}(),Vy=function(s){function e(n){var i;return(i=s.call(this,n)||this).k=new Map,i}kl(e,s);var t=e.prototype;return t.set=function(n,i,r){return this.k.set(n,{action:r,request:i}),{action:r,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var r=ls({},this.k.get(n),{},i);return this.k.set(n,r),r},e}(Mm),Wy=function(){return!window.history.pushState},Xy=function(s){return!s.el||!s.href},$y=function(s){var e=s.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Yy=function(s){var e=s.el;return e.hasAttribute("target")&&e.target==="_blank"},qy=function(s){var e=s.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Zy=function(s){var e=s.el;return e.port!==void 0&&xa()!==xa(e.href)},Ky=function(s){var e=s.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Jy=function(s){return s.el.hasAttribute(Pi.prefix+"-"+Pi.prevent)},jy=function(s){return Boolean(s.el.closest("["+Pi.prefix+"-"+Pi.prevent+'="all"]'))},Qy=function(s){var e=s.href;return fh(e)===fh()&&xa(e)===xa()},eS=function(s){function e(n){var i;return(i=s.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}kl(e,s);var t=e.prototype;return t.init=function(){this.add("pushState",Wy),this.add("exists",Xy),this.add("newTab",$y),this.add("blank",Yy),this.add("corsDomain",qy),this.add("corsPort",Zy),this.add("download",Ky),this.add("preventSelf",Jy),this.add("preventAll",jy),this.add("sameUrl",Qy,!1)},t.add=function(n,i,r){r===void 0&&(r=!0),this.tests.set(n,i),r&&this.suite.push(n)},t.run=function(n,i,r,o){return this.tests.get(n)({el:i,event:r,href:o})},t.checkLink=function(n,i,r){var o=this;return this.suite.some(function(a){return o.run(a,n,i,r)})},e}(Mm),dh=function(s){function e(t,n){var i;n===void 0&&(n="Barba error");for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return(i=s.call.apply(s,[this].concat(o))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return kl(e,s),e}(dm(Error)),tS=function(){function s(t){t===void 0&&(t=[]),this.logger=new cs("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=s.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var r=n.once?this.once:this.page;r=r.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=r.find(function(d){var u=!0,g={};return!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(_){u&&(u=i.R(d,_,t,g),d.from&&d.to&&(u=i.R(d,_,t,g,"from")&&i.R(d,_,t,g,"to")),d.from&&!d.to&&(u=i.R(d,_,t,g,"from")),!d.from&&d.to&&(u=i.R(d,_,t,g,"to")))}),o.set(d,g),u)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,f=[a];Object.keys(l).length>0&&f.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,r,o){var a=!0,l=!1,c=t,h=n.name,f=h,d=h,u=h,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var p=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&p.indexOf(_[f])!==-1&&(l=!0),p.indexOf(_[f])===-1&&(a=!1);break;case"object":var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]?(_[d].name&&m.indexOf(_[d].name)!==-1&&(l=!0),m.indexOf(_[d].name)===-1&&(a=!1)):a=!1;break;case"function":g[u](i)?l=!0:a=!1}l&&(o?(r[o]=r[o]||{},r[o][h]=c[o][h]):r[h]=c[h])}return a},e.O=function(t,n,i){var r=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(r+=Math.pow(10,i),t.from&&t.from[n]&&(r+=1),t.to&&t.to[n]&&(r+=2)),r},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(r,o){i+=n.O(t,r.name,o+1)}),t.priority=i,t},s}(),nS=function(){function s(t){t===void 0&&(t=[]),this.logger=new cs("@barba/core"),this.S=!1,this.store=new tS(t)}var e=s.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var r=function(){o.S=!1},o=this,a=i||{};o.S=!0;var l=no(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(c){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(r):r())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,r=t.page,o=t.wrapper;try{var a=function(u){if(l)return u;c.S=!1},l=!1,c=this,h=i||{},f=h.sync===!0||!1;c.S=!0;var d=no(function(){function u(){return Promise.resolve(c.j("before",n,h)).then(function(){var _=!1;function p(S){return _?S:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,h)).then(function(){})})}var m=function(){if(f)return no(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),c.enter(n,h)])).then(function(){return Promise.resolve(c.j("afterLeave",n,h)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})})})},function(M){if(c.M(M))throw new dh(M,"Transition error [sync]")});var S=function(M){return _?M:no(function(){var b=function(){if(v!==!1)return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(c.enter(n,h,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})}();if(b&&b.then)return b.then(function(){})},function(b){if(c.M(b))throw new dh(b,"Transition error [before/after/enter]")})},v=!1,y=no(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),zl(r,n)]).then(function(M){return M[0]})).then(function(M){return v=M,Promise.resolve(c.j("afterLeave",n,h)).then(function(){})})})},function(M){if(c.M(M))throw new dh(M,"Transition error [before/after/leave]")});return y&&y.then?y.then(S):S(y)}();return m&&m.then?m.then(p):p(m)})}var g=function(){if(f)return Promise.resolve(zl(r,n)).then(function(){})}();return g&&g.then?g.then(u):u()},function(u){throw c.S=!1,u.name&&u.name==="BarbaError"?(c.logger.debug(u.label),c.logger.error(u.error),u):(c.logger.debug("Transition error [page]"),c.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a(d))}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(Dr.do("once",t,n)).then(function(){return n.once?io(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Dr.do("leave",t,n)).then(function(){return n.leave?io(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Dr.do("enter",t,n)).then(function(){return n.enter?io(n.enter,n)(t,i):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.add=function(t,n){try{return hs.addContainer(t.next.container,n),Dr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return hs.removeContainer(t.current.container),Dr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(Dr.do(t,n,i)).then(function(){return i[t]?io(i[t],i)(n):Promise.resolve()})}catch(r){return Promise.reject(r)}},ah(s,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),s}(),iS=function(){function s(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Dr[n](t.L(n))}))}return s.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,r=t.byNamespace.get(i.namespace);return r&&r[e]?io(r[e],r)(n):Promise.resolve()}},s}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var e=this;do{if(e.matches(s))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var rS={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},sS=new(function(){function s(){this.version=Py,this.schemaPage=rS,this.Logger=cs,this.logger=new cs("@barba/core"),this.plugins=[],this.hooks=Dr,this.dom=hs,this.helpers=ky,this.history=xm,this.request=Hy,this.url=zy}var e=s.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,r=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Pi:l,h=n.requestError,f=n.timeout,d=f===void 0?2e3:f,u=n.cacheIgnore,g=u!==void 0&&u,_=n.prefetchIgnore,p=_!==void 0&&_,m=n.preventRunning,S=m!==void 0&&m,v=n.prevent,y=v===void 0?null:v,M=n.debug,b=n.logLevel;if(cs.setLevel((M!==void 0&&M)===!0?"debug":b===void 0?"off":b),this.logger.info(this.version),Object.keys(c).forEach(function(F){Pi[F]&&(Pi[F]=c[F])}),this.$=h,this.timeout=d,this.cacheIgnore=g,this.prefetchIgnore=p,this.preventRunning=S,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Vy(g),this.prevent=new eS(p),this.transitions=new nS(r),this.views=new iS(a),y!==null){if(typeof y!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",y)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(F){return F.init()});var C=this.data;C.trigger="barba",C.next=C.current,C.current=ls({},this.schemaPage),this.hooks.do("ready",C),this.once(C),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var r;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(r=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,r)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var r=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return r&&r.then?r.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var r=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var h=no(function(){var f=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:f,wrapper:o._})).then(function(){o.q()})},function(){cs.getLevel()===0&&o.force(c.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=ls({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=function(){if(o.transitions.shouldWait)return Promise.resolve(zl(a,o.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(r):r())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=i[0],a=i[1],l=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,l,o,a)===!1||(l==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var r=this.dom.getHref(i);this.prevent.checkHref(r)||this.cache.has(r)||this.cache.set(r,this.request(r,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:ls({href:t},this.url.parse(t))};this.C={current:n,next:ls({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},ah(s,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),s}());const oS=(s,e)=>{e.lenisManager.lenis.stop();const t=e.portalManager.getPortalTL(),n=t.duration();return t.add(()=>{s.current.container.style="display: none"},n),t.play()},aS=s=>{},lS=s=>et.to(s.current.container,{opacity:0,duration:.6}),cS=(s,e)=>(et.set(s.next.container,{position:"absolute",top:"0px",width:"100%"}),et.set(".footer",{autoAlpha:0}),et.from(s.next.container,{yPercent:3,opacity:0,duration:2,ease:"power4.out",onComplete:()=>{et.set(s.next.container,{clearProps:"all"}),et.set(".footer",{autoAlpha:1}),document.body.style.overflow="unset",e.lenisManager.lenis.start()}}));function Tm(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function uS(s,e,t){return e&&Tm(s.prototype,e),t&&Tm(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,Gl,Yn,Ar,Cr,ro,bm,fs,ya,wm,qi,fi,Dm,Am=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Cm=1,so=[],ct=[],Li=[],Sa=Date.now,ph=function(e,t){return t},hS=function(){var e=ya.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,Li),ct=n,Li=i,ph=function(o,a){return t[o](a)}},Rr=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},Ea=function(e){return!!~wm.indexOf(e)},xn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vl="scrollLeft",Wl="scrollTop",mh=function(){return qi&&qi.isPressed||ct.cache++},Xl=function(e,t){var n=function i(r){if(r||r===0){Cm&&(Yn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;r=i.v=Math.round(r)||(qi&&qi.iOS?1:0),e(r),i.cacheID=ct.cache,o&&ph("ss",r)}else(t||ct.cache!==i.cacheID||ph("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xl(function(s){return arguments.length?Yn.scrollTo(s,Wt.sc()):Yn.pageXOffset||Ar[Vl]||Cr[Vl]||ro[Vl]||0})},Wt={s:Wl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Xl(function(s){return arguments.length?Yn.scrollTo(Sn.sc(),s):Yn.pageYOffset||Ar[Wl]||Cr[Wl]||ro[Wl]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Pr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=Ar.scrollingElement||Cr);var r=ct.indexOf(e),o=i===Wt.sc?1:2;!~r&&(r=ct.push(e)-1),ct[r+o]||xn(e,"scroll",mh);var a=ct[r+o],l=a||(ct[r+o]=Xl(Rr(e,n),!0)||(Ea(e)?i:Xl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},gh=function(e,t,n){var i=e,r=e,o=Sa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=Sa();_||p-o>l?(r=i,i=g,a=o,o=p):n?i+=g:i=r+(g-r)/(p-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(g){var _=a,p=r,m=Sa();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Ma=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Pm=function(){ya=rn.core.globals().ScrollTrigger,ya&&ya.core&&hS()},Lm=function(e){return rn=e||Am(),!Gl&&rn&&typeof document!="undefined"&&document.body&&(Yn=window,Ar=document,Cr=Ar.documentElement,ro=Ar.body,wm=[Yn,Ar,Cr,ro],rn.utils.clamp,Dm=rn.core.context||function(){},fs="onpointerenter"in ro?"pointer":"mouse",bm=Ot.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Ot.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cm=0},500),Pm(),Gl=1),Gl};Sn.op=Wt,ct.cache=0;var Ot=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Gl||Lm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),ya||Pm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,v=n.onPress,y=n.onRelease,M=n.onRight,b=n.onLeft,E=n.onUp,C=n.onDown,F=n.onChangeX,x=n.onChangeY,D=n.onChange,X=n.onToggleX,G=n.onToggleY,L=n.onHover,H=n.onHoverEnd,U=n.onMove,k=n.ignoreCheck,q=n.isNormalizer,I=n.onGestureStart,R=n.onGestureEnd,ie=n.onWheel,le=n.onEnable,Z=n.onDisable,P=n.onClick,B=n.scrollSpeed,te=n.capture,ue=n.allowClicks,ce=n.lockAxis,me=n.onLockAxis;this.target=a=Un(a)||Cr,this.vars=n,u&&(u=rn.utils.toArray(u)),i=i||1e-9,r=r||0,g=g||1,B=B||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(ro).lineHeight)||22);var Ce,ve,V,De,ge,Me,Le,W=this,Pe=0,Xe=0,ot=n.passive||!h,A=Pr(a,Sn),T=Pr(a,Wt),re=A(),he=T(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",fe=Ea(a),Ne=a.ownerDocument||Ar,He=[0,0,0],xe=[0,0,0],be=0,Ze=function(){return be=Sa()},_e=function(ne,oe){return(W.event=ne)&&u&&~u.indexOf(ne.target)||oe&&de&&ne.pointerType!=="touch"||k&&k(ne,oe)},vt=function(){W._vx.reset(),W._vy.reset(),ve.pause(),f&&f(W)},qe=function(){var ne=W.deltaX=Rm(He),oe=W.deltaY=Rm(xe),j=Math.abs(ne)>=i,ye=Math.abs(oe)>=i;D&&(j||ye)&&D(W,ne,oe,He,xe),j&&(M&&W.deltaX>0&&M(W),b&&W.deltaX<0&&b(W),F&&F(W),X&&W.deltaX<0!=Pe<0&&X(W),Pe=W.deltaX,He[0]=He[1]=He[2]=0),ye&&(C&&W.deltaY>0&&C(W),E&&W.deltaY<0&&E(W),x&&x(W),G&&W.deltaY<0!=Xe<0&&G(W),Xe=W.deltaY,xe[0]=xe[1]=xe[2]=0),(De||V)&&(U&&U(W),V&&(S(W),V=!1),De=!1),Me&&!(Me=!1)&&me&&me(W),ge&&(ie(W),ge=!1),Ce=0},ke=function(ne,oe,j){He[j]+=ne,xe[j]+=oe,W._vx.update(ne),W._vy.update(oe),c?Ce||(Ce=requestAnimationFrame(qe)):qe()},Ie=function(ne,oe){ce&&!Le&&(W.axis=Le=Math.abs(ne)>Math.abs(oe)?"x":"y",Me=!0),Le!=="y"&&(He[2]+=ne,W._vx.update(ne,!0)),Le!=="x"&&(xe[2]+=oe,W._vy.update(oe,!0)),c?Ce||(Ce=requestAnimationFrame(qe)):qe()},Oe=function(ne){if(!_e(ne,1)){ne=Ma(ne,h);var oe=ne.clientX,j=ne.clientY,ye=oe-W.x,pe=j-W.y,Re=W.isDragging;W.x=oe,W.y=j,(Re||Math.abs(W.startX-oe)>=r||Math.abs(W.startY-j)>=r)&&(S&&(V=!0),Re||(W.isDragging=!0),Ie(ye,pe),Re||p&&p(W))}},Ke=W.onPress=function(z){_e(z,1)||z&&z.button||(W.axis=Le=null,ve.pause(),W.isPressed=!0,z=Ma(z),Pe=Xe=0,W.startX=W.x=z.clientX,W.startY=W.y=z.clientY,W._vx.reset(),W._vy.reset(),xn(q?a:Ne,fi[1],Oe,ot,!0),W.deltaX=W.deltaY=0,v&&v(W))},Te=W.onRelease=function(z){if(!_e(z,1)){yn(q?a:Ne,fi[1],Oe,!0);var ne=!isNaN(W.y-W.startY),oe=W.isDragging,j=oe&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),ye=Ma(z);!j&&ne&&(W._vx.reset(),W._vy.reset(),h&&ue&&rn.delayedCall(.08,function(){if(Sa()-be>300&&!z.defaultPrevented){if(z.target.click)z.target.click();else if(Ne.createEvent){var pe=Ne.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,Yn,1,ye.screenX,ye.screenY,ye.clientX,ye.clientY,!1,!1,!1,!1,0,null),z.target.dispatchEvent(pe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&oe&&!q&&ve.restart(!0),m&&oe&&m(W),y&&y(W,j)}},at=function(ne){return ne.touches&&ne.touches.length>1&&(W.isGesturing=!0)&&I(ne,W.isDragging)},O=function(){return(W.isGesturing=!1)||R(W)},Ee=function(ne){if(!_e(ne)){var oe=A(),j=T();ke((oe-re)*B,(j-he)*B,1),re=oe,he=j,f&&ve.restart(!0)}},Q=function(ne){if(!_e(ne)){ne=Ma(ne,h),ie&&(ge=!0);var oe=(ne.deltaMode===1?l:ne.deltaMode===2?Yn.innerHeight:1)*g;ke(ne.deltaX*oe,ne.deltaY*oe,0),f&&!q&&ve.restart(!0)}},Se=function(ne){if(!_e(ne)){var oe=ne.clientX,j=ne.clientY,ye=oe-W.x,pe=j-W.y;W.x=oe,W.y=j,De=!0,f&&ve.restart(!0),(ye||pe)&&Ie(ye,pe)}},se=function(ne){W.event=ne,L(W)},N=function(ne){W.event=ne,H(W)},ae=function(ne){return _e(ne)||Ma(ne,h)&&P(W)};ve=W._dc=rn.delayedCall(d||.25,vt).pause(),W.deltaX=W.deltaY=0,W._vx=gh(0,50,!0),W._vy=gh(0,50,!0),W.scrollX=A,W.scrollY=T,W.isDragging=W.isGesturing=W.isPressed=!1,Dm(this),W.enable=function(z){return W.isEnabled||(xn(fe?Ne:a,"scroll",mh),o.indexOf("scroll")>=0&&xn(fe?Ne:a,"scroll",Ee,ot,te),o.indexOf("wheel")>=0&&xn(a,"wheel",Q,ot,te),(o.indexOf("touch")>=0&&bm||o.indexOf("pointer")>=0)&&(xn(a,fi[0],Ke,ot,te),xn(Ne,fi[2],Te),xn(Ne,fi[3],Te),ue&&xn(a,"click",Ze,!0,!0),P&&xn(a,"click",ae),I&&xn(Ne,"gesturestart",at),R&&xn(Ne,"gestureend",O),L&&xn(a,fs+"enter",se),H&&xn(a,fs+"leave",N),U&&xn(a,fs+"move",Se)),W.isEnabled=!0,z&&z.type&&Ke(z),le&&le(W)),W},W.disable=function(){W.isEnabled&&(so.filter(function(z){return z!==W&&Ea(z.target)}).length||yn(fe?Ne:a,"scroll",mh),W.isPressed&&(W._vx.reset(),W._vy.reset(),yn(q?a:Ne,fi[1],Oe,!0)),yn(fe?Ne:a,"scroll",Ee,te),yn(a,"wheel",Q,te),yn(a,fi[0],Ke,te),yn(Ne,fi[2],Te),yn(Ne,fi[3],Te),yn(a,"click",Ze,!0),yn(a,"click",ae),yn(Ne,"gesturestart",at),yn(Ne,"gestureend",O),yn(a,fs+"enter",se),yn(a,fs+"leave",N),yn(a,fs+"move",Se),W.isEnabled=W.isPressed=W.isDragging=!1,Z&&Z(W))},W.kill=W.revert=function(){W.disable();var z=so.indexOf(W);z>=0&&so.splice(z,1),qi===W&&(qi=0)},so.push(W),q&&Ea(a)&&(qi=W),W.enable(_)},uS(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Ot.version="3.12.5",Ot.create=function(s){return new Ot(s)},Ot.register=Lm,Ot.getAll=function(){return so.slice()},Ot.getById=function(s){return so.filter(function(e){return e.vars.id===s})[0]},Am()&&rn.registerPlugin(Ot);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be,oo,ft,Ft,di,bt,Fm,$l,Ta,ba,wa,Yl,hn,ql,_h,En,Nm,Im,ao,Um,vh,Om,Mn,xh,Bm,km,Lr,yh,Sh,lo,Eh,Zl,Mh,Th,Kl=1,fn=Date.now,bh=fn(),ri=0,Da=0,zm=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Hm=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fS=function s(){return Da&&requestAnimationFrame(s)},Gm=function(){return ql=1},Vm=function(){return ql=0},Fi=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},Wm=function(){return typeof window!="undefined"},Xm=function(){return Be||Wm()&&(Be=window.gsap)&&Be.registerPlugin&&Be},ds=function(e){return!!~Fm.indexOf(e)},$m=function(e){return(e==="Height"?Eh:ft["inner"+e])||di["client"+e]||bt["client"+e]},Ym=function(e){return Rr(e,"getBoundingClientRect")||(ds(e)?function(){return cc.width=ft.innerWidth,cc.height=Eh,cc}:function(){return Zi(e)})},dS=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Rr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?$m(r):e["client"+r])||0}},pS=function(e,t){return!t||~Li.indexOf(e)?Ym(e):function(){return cc}},Ni=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Rr(e,n))?o()-Ym(e)()[r]:ds(e)?(di[n]||bt[n])-$m(i):e[n]-e["offset"+i])},Jl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},qn=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Ca=function(e){return typeof e=="number"},ps=function(e){return typeof e=="object"},Ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},wh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},co=Math.abs,qm="left",Zm="top",Dh="right",Ah="bottom",ms="width",gs="height",Pa="Right",La="Left",Fa="Top",Na="Bottom",Ht="padding",si="margin",uo="Width",Ch="Height",Xt="px",oi=function(e){return ft.getComputedStyle(e)},mS=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Km=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&oi(e)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},jl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},gS=function(e){return function(t){return Be.utils.snap(Jm(e),t)}},Rh=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},_S=function(e){return function(t,n){return Rh(Jm(e))(t,n.direction)}},Ql=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Qt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ec=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},jm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tc={toggleActions:"play",anticipatePin:0},nc={top:0,left:0,center:.5,bottom:1,right:1},ic=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in nc?nc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rc=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,g=Ft.createElement("div"),_=ds(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?bt:n,S=e.indexOf("start")!==-1,v=S?c:h,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Wt?Dh:Ah)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],sc(g,0,i,S),g},sc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+uo]=1,r["border"+a+uo]=0,r[n.p]=t+"px",Be.set(e,r)},st=[],Ph={},Ia,Qm=function(){return fn()-ri>34&&(Ia||(Ia=requestAnimationFrame(Ki)))},ho=function(){(!Mn||!Mn.isPressed||Mn.startX>bt.clientWidth)&&(ct.cache++,Mn?Ia||(Ia=requestAnimationFrame(Ki)):Ki(),ri||vs("scrollStart"),ri=fn())},Lh=function(){km=ft.innerWidth,Bm=ft.innerHeight},Ua=function(){ct.cache++,!hn&&!Om&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!xh||km!==ft.innerWidth||Math.abs(ft.innerHeight-Bm)>ft.innerHeight*.25)&&$l.restart(!0)},_s={},vS=[],eg=function s(){return en(tt,"scrollEnd",s)||ys(!0)},vs=function(e){return _s[e]&&_s[e].map(function(t){return t()})||vS},Zn=[],tg=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},Fh=function(e,t){var n;for(En=0;En<st.length;En++)n=st[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Zl=!0,t&&tg(t),t||vs("revert")},ng=function(e,t){ct.cache++,(t||!bn)&&ct.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(ft.history.scrollRestoration=Sh=e)},bn,xs=0,ig,xS=function(){if(ig!==xs){var e=ig=xs;requestAnimationFrame(function(){return e===xs&&ys(!0)})}},rg=function(){bt.appendChild(lo),Eh=!Mn&&lo.offsetHeight||ft.innerHeight,bt.removeChild(lo)},sg=function(e){return Ta(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(ri&&!e&&!Zl){Qt(tt,"scrollEnd",eg);return}rg(),bn=tt.isRefreshing=!0,ct.forEach(function(i){return Tn(i)&&++i.cacheID&&(i.rec=i())});var n=vs("refreshInit");Um&&tt.sort(),t||Fh(),ct.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Zl=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Mh=1,sg(!0),st.forEach(function(i){var r=Ni(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),sg(!1),Mh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ng(Sh,1),$l.pause(),xs++,bn=2,Ki(2),st.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),bn=tt.isRefreshing=!1,vs("refresh")},Nh=0,oc=1,Oa,Ki=function(e){if(e===2||!bn&&!Zl){tt.isUpdating=!0,Oa&&Oa.update(0);var t=st.length,n=fn(),i=n-bh>=50,r=t&&st[0].scroll();if(oc=Nh>r?-1:1,bn||(Nh=r),i&&(ri&&!ql&&n-ri>200&&(ri=0,vs("scrollEnd")),wa=bh,bh=n),oc<0){for(En=t;En-- >0;)st[En]&&st[En].update(0,i);oc=1}else for(En=0;En<t;En++)st[En]&&st[En].update(0,i);tt.isUpdating=!1}Ia=0},Ih=[qm,Zm,Ah,Dh,si+Na,si+Pa,si+Fa,si+La,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ac=Ih.concat([ms,gs,"boxSizing","max"+uo,"max"+Ch,"position",si,Ht,Ht+Fa,Ht+Pa,Ht+Na,Ht+La]),yS=function(e,t,n){fo(n);var i=e._gsap;if(i.spacerIsNative)fo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Uh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Ih.length,o=t.style,a=e.style,l;r--;)l=Ih[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ah]=a[Dh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=jl(e,Sn)+Xt,o[gs]=jl(e,Wt)+Xt,o[Ht]=a[si]=a[Zm]=a[qm]="0",fo(i),a[ms]=a["max"+uo]=n[ms],a[gs]=a["max"+Ch]=n[gs],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},SS=/([A-Z])/g,fo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(SS,"-$1").toLowerCase())}},lc=function(e){for(var t=ac.length,n=e.style,i=[],r=0;r<t;r++)i.push(ac[r],n[ac[r]]);return i.t=e,i},ES=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},cc={left:0,top:0},og=function(e,t,n,i,r,o,a,l,c,h,f,d,u,g){Tn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ic("0"+e.substr(3),n):0));var _=u?u.time():0,p,m,S;if(u&&u.seek(0),isNaN(e)||(e=+e),Ca(e))u&&(e=Be.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&sc(a,n,i,!0);else{Tn(t)&&(t=t(l));var v=(e||"0").split(" "),y,M,b,E;S=Un(t,l)||bt,y=Zi(S)||{},(!y||!y.left&&!y.top)&&oi(S).display==="none"&&(E=S.style.display,S.style.display="block",y=Zi(S),E?S.style.display=E:S.style.removeProperty("display")),M=ic(v[0],y[i.d]),b=ic(v[1]||"0",n),e=y[i.p]-c[i.p]-h+M+r-b,a&&sc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,F=o._isStart;p="scroll"+i.d2,sc(o,C,i,F&&C>20||!F&&(f?Math.max(bt[p],di[p]):o.parentNode[p])<=C+1),f&&(c=Zi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return u&&S&&(p=Zi(S),u.seek(d),m=Zi(S),u._caScrollDist=p[i.p]-m[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},MS=/(webkit|moz|length|cssText|inset)/i,ag=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===bt){e._stOrig=r.cssText,a=oi(e);for(o in a)!+o&&!MS.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},lg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},uc=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},cg=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=lg(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Qt(e,"wheel",n.wheelHandler),tt.isTouch&&Qt(e,"touchmove",n.wheelHandler),r},tt=function(){function s(t,n){oo||s.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Fi;return}n=Km(qn(n)||Ca(n)||n.nodeType?{trigger:n}:n,tc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,v=r.once,y=r.snap,M=r.pinReparent,b=r.pinSpacer,E=r.containerAnimation,C=r.fastScrollEnd,F=r.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Wt,D=!f&&f!==0,X=Un(n.scroller||ft),G=Be.core.getCache(X),L=ds(X),H=("pinType"in n?n.pinType:Rr(X,"pinType")||L&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),q="markers"in n?n.markers:tc.markers,I=L?0:parseFloat(oi(X)["border"+x.p2+uo])||0,R=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(R)},le=dS(X,L,x),Z=pS(X,L),P=0,B=0,te=0,ue=Pr(X,x),ce,me,Ce,ve,V,De,ge,Me,Le,W,Pe,Xe,ot,A,T,re,he,de,fe,Ne,He,xe,be,Ze,_e,vt,qe,ke,Ie,Oe,Ke,Te,at,O,Ee,Q,Se,se,N;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=X,R.scroll=E?E.time.bind(E):ue,ve=ue(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Um=1,n.refreshPriority===-9999&&(Oa=R)),G.tweenScroll=G.tweenScroll||{top:cg(X,Wt),left:cg(X,Sn)},R.tweenTo=ce=G.tweenScroll[x.p],R.scrubDuration=function(j){at=Ca(j)&&j,at?Te?Te.duration(j):Te=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:at,paused:!0,onComplete:function(){return m&&m(R)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Oe=0,l||(l=i.vars.id)),y&&((!ps(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&Be.set(L?[bt,di]:X,{scrollBehavior:"auto"}),ct.forEach(function(j){return Tn(j)&&j.target===(L?Ft.scrollingElement||di:X)&&(j.smooth=!1)}),Ce=Tn(y.snapTo)?y.snapTo:y.snapTo==="labels"?gS(i):y.snapTo==="labelsDirectional"?_S(i):y.directional!==!1?function(j,ye){return Rh(y.snapTo)(j,fn()-B<500?0:ye.direction)}:Be.utils.snap(y.snapTo),O=y.duration||{min:.1,max:2},O=ps(O)?ba(O.min,O.max):ba(O,O),Ee=Be.delayedCall(y.delay||at/2||.1,function(){var j=ue(),ye=fn()-B<500,pe=ce.tween;if((ye||Math.abs(R.getVelocity())<10)&&!pe&&!ql&&P!==j){var Re=(j-De)/A,We=i&&!D?i.totalProgress():Re,Ue=ye?0:(We-Ke)/(fn()-wa)*1e3||0,Je=Be.utils.clamp(-Re,1-Re,co(Ue/2)*Ue/.185),ut=Re+(y.inertia===!1?0:Je),pt,rt,lt=y,gt=lt.onStart,w=lt.onInterrupt,$=lt.onComplete;if(pt=Ce(ut,R),Ca(pt)||(pt=ut),rt=Math.round(De+pt*A),j<=ge&&j>=De&&rt!==j){if(pe&&!pe._initted&&pe.data<=co(rt-j))return;y.inertia===!1&&(Je=pt-Re),ce(rt,{duration:O(co(Math.max(co(ut-We),co(pt-We))*.185/Ue/.05||0)),ease:y.ease||"power3",data:co(rt-j),onInterrupt:function(){return Ee.restart(!0)&&w&&w(R)},onComplete:function(){R.update(),P=ue(),i&&(Te?Te.resetTo("totalProgress",pt,i._tTime/i._tDur):i.progress(pt)),Oe=Ke=i&&!D?i.totalProgress():R.progress,S&&S(R),$&&$(R)}},j,Je*A,rt-j-Je*A),gt&&gt(R,ce.tween)}}else R.isActive&&P!==j&&Ee.restart(!0)}).pause()),l&&(Ph[l]=R),d=R.trigger=Un(d||u!==!0&&u),N=d&&d._gsap&&d._gsap.stRevert,N&&(N=N(R)),u=u===!0?d:Un(u),qn(a)&&(a={targets:d,className:a}),u&&(g===!1||g===si||(g=!g&&u.parentNode&&u.parentNode.style&&oi(u.parentNode).display==="flex"?!1:Ht),R.pin=u,me=Be.core.getCache(u),me.spacer?T=me.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),me.spacerIsNative=!!b,b&&(me.spacerState=lc(b))),me.spacer=de=b||Ft.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),me.pinState=T=lc(u)),n.force3D!==!1&&Be.set(u,{force3D:!0}),R.spacer=de=me.spacer,Ie=oi(u),Ze=Ie[g+x.os2],Ne=Be.getProperty(u),He=Be.quickSetter(u,x.a,Xt),Uh(u,de,Ie),he=lc(u)),q){Xe=ps(q)?Km(q,jm):jm,W=rc("scroller-start",l,X,x,Xe,0),Pe=rc("scroller-end",l,X,x,Xe,0,W),fe=W["offset"+x.op.d2];var ae=Un(Rr(X,"content")||X);Me=this.markerStart=rc("start",l,ae,x,Xe,fe,0,E),Le=this.markerEnd=rc("end",l,ae,x,Xe,fe,0,E),E&&(se=Be.quickSetter([Me,Le],x.a,Xt)),!H&&!(Li.length&&Rr(X,"fixedMarkers")===!0)&&(mS(L?bt:X),Be.set([W,Pe],{force3D:!0}),vt=Be.quickSetter(W,x.a,Xt),ke=Be.quickSetter(Pe,x.a,Xt))}if(E){var z=E.vars.onUpdate,ne=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),z&&z.apply(E,ne||[])})}if(R.previous=function(){return st[st.indexOf(R)-1]},R.next=function(){return st[st.indexOf(R)+1]},R.revert=function(j,ye){if(!ye)return R.kill(!0);var pe=j!==!1||!R.enabled,Re=hn;pe!==R.isReverted&&(pe&&(Q=Math.max(ue(),R.scroll.rec||0),te=R.progress,Se=i&&i.progress()),Me&&[Me,Le,W,Pe].forEach(function(We){return We.style.display=pe?"none":"block"}),pe&&(hn=R,R.update(pe)),u&&(!M||!R.isActive)&&(pe?yS(u,de,T):Uh(u,de,oi(u),_e)),pe||R.update(pe),hn=Re,R.isReverted=pe)},R.refresh=function(j,ye,pe,Re){if(!((hn||!R.enabled)&&!ye)){if(u&&j&&ri){Qt(s,"scrollEnd",eg);return}!bn&&ie&&ie(R),hn=R,ce.tween&&!pe&&(ce.tween.kill(),ce.tween=0),Te&&Te.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var We=le(),Ue=Z(),Je=E?E.duration():Ni(X,x),ut=A<=.01,pt=0,rt=Re||0,lt=ps(pe)?pe.end:n.end,gt=n.endTrigger||d,w=ps(pe)?pe.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),$=R.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,R),J=d&&Math.max(0,st.indexOf(R))||0,ee=J,K,we,ze,$e,Ge,Ve,Ye,Qe,At,Kt,xt,Rn,yt;for(q&&ps(pe)&&(Rn=Be.getProperty(W,x.p),yt=Be.getProperty(Pe,x.p));ee--;)Ve=st[ee],Ve.end||Ve.refresh(0,1)||(hn=R),Ye=Ve.pin,Ye&&(Ye===d||Ye===u||Ye===$)&&!Ve.isReverted&&(Kt||(Kt=[]),Kt.unshift(Ve),Ve.revert(!0,!0)),Ve!==st[ee]&&(J--,ee--);for(Tn(w)&&(w=w(R)),w=zm(w,"start",R),De=og(w,d,We,x,ue(),Me,W,R,Ue,I,H,Je,E,R._startClamp&&"_startClamp")||(u?-.001:0),Tn(lt)&&(lt=lt(R)),qn(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(qn(w)?w.split(" ")[0]:"")+lt:(pt=ic(lt.substr(2),We),lt=qn(w)?w:(E?Be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,De):De)+pt,gt=d)),lt=zm(lt,"end",R),ge=Math.max(De,og(lt||(gt?"100% 0":Je),gt,We,x,ue()+pt,Le,Pe,R,Ue,I,H,Je,E,R._endClamp&&"_endClamp"))||-.001,pt=0,ee=J;ee--;)Ve=st[ee],Ye=Ve.pin,Ye&&Ve.start-Ve._pinPush<=De&&!E&&Ve.end>0&&(K=Ve.end-(R._startClamp?Math.max(0,Ve.start):Ve.start),(Ye===d&&Ve.start-Ve._pinPush<De||Ye===$)&&isNaN(w)&&(pt+=K*(1-Ve.progress)),Ye===u&&(rt+=K));if(De+=pt,ge+=pt,R._startClamp&&(R._startClamp+=pt),R._endClamp&&!bn&&(R._endClamp=ge||-.001,ge=Math.min(ge,Ni(X,x))),A=ge-De||(De-=.01)&&.001,ut&&(te=Be.utils.clamp(0,1,Be.utils.normalize(De,ge,Q))),R._pinPush=rt,Me&&pt&&(K={},K[x.a]="+="+pt,$&&(K[x.p]="-="+ue()),Be.set([Me,Le],K)),u&&!(Mh&&R.end>=Ni(X,x)))K=oi(u),$e=x===Wt,ze=ue(),xe=parseFloat(Ne(x.a))+rt,!Je&&ge>1&&(xt=(L?Ft.scrollingElement||di:X).style,xt={style:xt,value:xt["overflow"+x.a.toUpperCase()]},L&&oi(bt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(xt.style["overflow"+x.a.toUpperCase()]="scroll")),Uh(u,de,K),he=lc(u),we=Zi(u,!0),Qe=H&&Pr(X,$e?Sn:Wt)(),g?(_e=[g+x.os2,A+rt+Xt],_e.t=de,ee=g===Ht?jl(u,x)+A+rt:0,ee&&(_e.push(x.d,ee+Xt),de.style.flexBasis!=="auto"&&(de.style.flexBasis=ee+Xt)),fo(_e),$&&st.forEach(function(je){je.pin===$&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),H&&ue(Q)):(ee=jl(u,x),ee&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=ee+Xt)),H&&(Ge={top:we.top+($e?ze-De:Qe)+Xt,left:we.left+($e?Qe:ze-De)+Xt,boxSizing:"border-box",position:"fixed"},Ge[ms]=Ge["max"+uo]=Math.ceil(we.width)+Xt,Ge[gs]=Ge["max"+Ch]=Math.ceil(we.height)+Xt,Ge[si]=Ge[si+Fa]=Ge[si+Pa]=Ge[si+Na]=Ge[si+La]="0",Ge[Ht]=K[Ht],Ge[Ht+Fa]=K[Ht+Fa],Ge[Ht+Pa]=K[Ht+Pa],Ge[Ht+Na]=K[Ht+Na],Ge[Ht+La]=K[Ht+La],re=ES(T,Ge,M),bn&&ue(0)),i?(At=i._initted,vh(1),i.render(i.duration(),!0,!0),be=Ne(x.a)-xe+A+rt,qe=Math.abs(A-be)>1,H&&qe&&re.splice(re.length-2,2),i.render(0,!0,!0),At||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vh(0)):be=A,xt&&(xt.value?xt.style["overflow"+x.a.toUpperCase()]=xt.value:xt.style.removeProperty("overflow-"+x.a));else if(d&&ue()&&!E)for(we=d.parentNode;we&&we!==bt;)we._pinOffset&&(De-=we._pinOffset,ge-=we._pinOffset),we=we.parentNode;Kt&&Kt.forEach(function(je){return je.revert(!1,!0)}),R.start=De,R.end=ge,ve=V=bn?Q:ue(),!E&&!bn&&(ve<Q&&ue(Q),R.scroll.rec=0),R.revert(!1,!0),B=fn(),Ee&&(P=-1,Ee.restart(!0)),hn=0,i&&D&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se||0,!0).render(i.time(),!0,!0),(ut||te!==R.progress||E||_)&&(i&&!D&&i.totalProgress(E&&De<-.001&&!te?Be.utils.normalize(De,ge,0):te,!0),R.progress=ut||(ve-De)/A===te?0:te),u&&g&&(de._pinOffset=Math.round(R.progress*be)),Te&&Te.invalidate(),isNaN(Rn)||(Rn-=Be.getProperty(W,x.p),yt-=Be.getProperty(Pe,x.p),uc(W,x,Rn),uc(Me,x,Rn-(Re||0)),uc(Pe,x,yt),uc(Le,x,yt-(Re||0))),ut&&!bn&&R.update(),h&&!bn&&!ot&&(ot=!0,h(R),ot=!1)}},R.getVelocity=function(){return(ue()-V)/(fn()-wa)*1e3||0},R.endAnimation=function(){Ra(R.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?D||Ra(i,R.direction<0,1):Ra(i,i.reversed()))},R.labelToScroll=function(j){return i&&i.labels&&(De||R.refresh()||De)+i.labels[j]/i.duration()*A||0},R.getTrailing=function(j){var ye=st.indexOf(R),pe=R.direction>0?st.slice(0,ye).reverse():st.slice(ye+1);return(qn(j)?pe.filter(function(Re){return Re.vars.preventOverlaps===j}):pe).filter(function(Re){return R.direction>0?Re.end<=De:Re.start>=ge})},R.update=function(j,ye,pe){if(!(E&&!pe&&!j)){var Re=bn===!0?Q:R.scroll(),We=j?0:(Re-De)/A,Ue=We<0?0:We>1?1:We||0,Je=R.progress,ut,pt,rt,lt,gt,w,$,J;if(ye&&(V=ve,ve=E?ue():Re,y&&(Ke=Oe,Oe=i&&!D?i.totalProgress():Ue)),p&&u&&!hn&&!Kl&&ri&&(!Ue&&De<Re+(Re-V)/(fn()-wa)*p?Ue=1e-4:Ue===1&&ge>Re+(Re-V)/(fn()-wa)*p&&(Ue=.9999)),Ue!==Je&&R.enabled){if(ut=R.isActive=!!Ue&&Ue<1,pt=!!Je&&Je<1,w=ut!==pt,gt=w||!!Ue!=!!Je,R.direction=Ue>Je?1:-1,R.progress=Ue,gt&&!hn&&(rt=Ue&&!Je?0:Ue===1?1:Je===1?2:3,D&&(lt=!w&&k[rt+1]!=="none"&&k[rt+1]||k[rt],J=i&&(lt==="complete"||lt==="reset"||lt in i))),F&&(w||J)&&(J||f||!i)&&(Tn(F)?F(R):R.getTrailing(F).forEach(function(ze){return ze.endAnimation()})),D||(Te&&!hn&&!Kl?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Ue,i._tTime/i._tDur):(Te.vars.totalProgress=Ue,Te.invalidate().restart())):i&&i.totalProgress(Ue,!!(hn&&(B||j)))),u){if(j&&g&&(de.style[g+x.os2]=Ze),!H)He(Aa(xe+be*Ue));else if(gt){if($=!j&&Ue>Je&&ge+1>Re&&Re+1>=Ni(X,x),M)if(!j&&(ut||$)){var ee=Zi(u,!0),K=Re-De;ag(u,bt,ee.top+(x===Wt?K:0)+Xt,ee.left+(x===Wt?0:K)+Xt)}else ag(u,de);fo(ut||$?re:he),qe&&Ue<1&&ut||He(xe+(Ue===1&&!$?be:0))}}y&&!ce.tween&&!hn&&!Kl&&Ee.restart(!0),a&&(w||v&&Ue&&(Ue<1||!Th))&&Ta(a.targets).forEach(function(ze){return ze.classList[ut||v?"add":"remove"](a.className)}),o&&!D&&!j&&o(R),gt&&!hn?(D&&(J&&(lt==="complete"?i.pause().totalProgress(1):lt==="reset"?i.restart(!0).pause():lt==="restart"?i.restart(!0):i[lt]()),o&&o(R)),(w||!Th)&&(c&&w&&wh(R,c),U[rt]&&wh(R,U[rt]),v&&(Ue===1?R.kill(!1,1):U[rt]=0),w||(rt=Ue===1?1:3,U[rt]&&wh(R,U[rt]))),C&&!ut&&Math.abs(R.getVelocity())>(Ca(C)?C:2500)&&(Ra(R.callbackAnimation),Te?Te.progress(1):Ra(i,lt==="reverse"?1:!Ue,1))):D&&o&&!hn&&o(R)}if(ke){var we=E?Re/E.duration()*(E._caScrollDist||0):Re;vt(we+(W._isFlipped?1:0)),ke(we)}se&&se(-Re/E.duration()*(E._caScrollDist||0))}},R.enable=function(j,ye){R.enabled||(R.enabled=!0,Qt(X,"resize",Ua),L||Qt(X,"scroll",ho),ie&&Qt(s,"refreshInit",ie),j!==!1&&(R.progress=te=0,ve=V=P=ue()),ye!==!1&&R.refresh())},R.getTween=function(j){return j&&ce?ce.tween:Te},R.setPositions=function(j,ye,pe,Re){if(E){var We=E.scrollTrigger,Ue=E.duration(),Je=We.end-We.start;j=We.start+Je*j/Ue,ye=We.start+Je*ye/Ue}R.refresh(!1,!1,{start:Hm(j,pe&&!!R._startClamp),end:Hm(ye,pe&&!!R._endClamp)},Re),R.update()},R.adjustPinSpacing=function(j){if(_e&&j){var ye=_e.indexOf(x.d)+1;_e[ye]=parseFloat(_e[ye])+j+Xt,_e[1]=parseFloat(_e[1])+j+Xt,fo(_e)}},R.disable=function(j,ye){if(R.enabled&&(j!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,ye||Te&&Te.pause(),Q=0,me&&(me.uncache=1),ie&&en(s,"refreshInit",ie),Ee&&(Ee.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!L)){for(var pe=st.length;pe--;)if(st[pe].scroller===X&&st[pe]!==R)return;en(X,"resize",Ua),L||en(X,"scroll",ho)}},R.kill=function(j,ye){R.disable(j,ye),Te&&!ye&&Te.kill(),l&&delete Ph[l];var pe=st.indexOf(R);pe>=0&&st.splice(pe,1),pe===En&&oc>0&&En--,pe=0,st.forEach(function(Re){return Re.scroller===R.scroller&&(pe=1)}),pe||bn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),ye||i.kill()),Me&&[Me,Le,W,Pe].forEach(function(Re){return Re.parentNode&&Re.parentNode.removeChild(Re)}),Oa===R&&(Oa=0),u&&(me&&(me.uncache=1),pe=0,st.forEach(function(Re){return Re.pin===u&&pe++}),pe||(me.spacer=0)),n.onKill&&n.onKill(R)},st.push(R),R.enable(!1,!1),N&&N(R),i&&i.add&&!A){var oe=R.update;R.update=function(){R.update=oe,De||ge||R.refresh()},Be.delayedCall(.01,R.update),A=.01,De=ge=0}else R.refresh();u&&xS()},s.register=function(n){return oo||(Be=n||Xm(),Wm()&&window.document&&s.enable(),oo=Da),oo},s.defaults=function(n){if(n)for(var i in n)tc[i]=n[i];return tc},s.disable=function(n,i){Da=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),en(ft,"wheel",ho),en(Ft,"scroll",ho),clearInterval(Yl),en(Ft,"touchcancel",Fi),en(bt,"touchstart",Fi),Ql(en,Ft,"pointerdown,touchstart,mousedown",Gm),Ql(en,Ft,"pointerup,touchend,mouseup",Vm),$l.kill(),Jl(en);for(var r=0;r<ct.length;r+=3)ec(en,ct[r],ct[r+1]),ec(en,ct[r],ct[r+2])},s.enable=function(){if(ft=window,Ft=document,di=Ft.documentElement,bt=Ft.body,Be&&(Ta=Be.utils.toArray,ba=Be.utils.clamp,yh=Be.core.context||Fi,vh=Be.core.suppressOverwrites||Fi,Sh=ft.history.scrollRestoration||"auto",Nh=ft.pageYOffset,Be.core.globals("ScrollTrigger",s),bt)){Da=1,lo=document.createElement("div"),lo.style.height="100vh",lo.style.position="absolute",rg(),fS(),Ot.register(Be),s.isTouch=Ot.isTouch,Lr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xh=Ot.isTouch===1,Qt(ft,"wheel",ho),Fm=[ft,Ft,di,bt],Be.matchMedia?(s.matchMedia=function(l){var c=Be.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Be.addEventListener("matchMediaInit",function(){return Fh()}),Be.addEventListener("matchMediaRevert",function(){return tg()}),Be.addEventListener("matchMedia",function(){ys(0,1),vs("matchMedia")}),Be.matchMedia("(orientation: portrait)",function(){return Lh(),Lh})):console.warn("Requires GSAP 3.11.0 or later"),Lh(),Qt(Ft,"scroll",ho);var n=bt.style,i=n.borderTopStyle,r=Be.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zi(bt),Wt.m=Math.round(o.top+Wt.sc())||0,Sn.m=Math.round(o.left+Sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Yl=setInterval(Qm,250),Be.delayedCall(.5,function(){return Kl=0}),Qt(Ft,"touchcancel",Fi),Qt(bt,"touchstart",Fi),Ql(Qt,Ft,"pointerdown,touchstart,mousedown",Gm),Ql(Qt,Ft,"pointerup,touchend,mouseup",Vm),_h=Be.utils.checkPrefix("transform"),ac.push(_h),oo=fn(),$l=Be.delayedCall(.2,ys).pause(),ao=[Ft,"visibilitychange",function(){var l=ft.innerWidth,c=ft.innerHeight;Ft.hidden?(Nm=l,Im=c):(Nm!==l||Im!==c)&&Ua()},Ft,"DOMContentLoaded",ys,ft,"load",ys,ft,"resize",Ua],Jl(Qt),st.forEach(function(l){return l.enable(0,1)}),a=0;a<ct.length;a+=3)ec(en,ct[a],ct[a+1]),ec(en,ct[a],ct[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Th=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Yl)||(Yl=i)&&setInterval(Qm,i),"ignoreMobileResize"in n&&(xh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jl(en)||Jl(Qt,n.autoRefreshEvents||"none"),Om=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Un(n),o=ct.indexOf(r),a=ds(r);~o&&ct.splice(o,a?6:2),i&&(a?Li.unshift(ft,i,bt,i,di,i):Li.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(qn(n)?Un(n):n).getBoundingClientRect(),a=o[r?ms:gs]*i||0;return r?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},s.positionInViewport=function(n,i,r){qn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[r?ms:gs],l=i==null?a/2:i in nc?nc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(r){return r()})}},s}();tt.version="3.12.5",tt.saveStyles=function(s){return s?Ta(s).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),yh())}}):Zn},tt.revert=function(s,e){return Fh(!s,e)},tt.create=function(s,e){return new tt(s,e)},tt.refresh=function(s){return s?Ua():(oo||tt.register())&&ys(!0)},tt.update=function(s){return++ct.cache&&Ki(s===!0?2:0)},tt.clearScrollMemory=ng,tt.maxScroll=function(s,e){return Ni(s,e?Sn:Wt)},tt.getScrollFunc=function(s,e){return Pr(Un(s),e?Sn:Wt)},tt.getById=function(s){return Ph[s]},tt.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})},tt.isScrolling=function(){return!!ri},tt.snapDirectional=Rh,tt.addEventListener=function(s,e){var t=_s[s]||(_s[s]=[]);~t.indexOf(e)||t.push(e)},tt.removeEventListener=function(s,e){var t=_s[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},tt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Be.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),r<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Tn(r)&&(r=r(),Qt(tt,"refresh",function(){return r=e.batchMax()})),Ta(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var ug=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Oh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===di&&s(bt,t)},hc={auto:1,scroll:1},TS=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Be.core.getCache(r),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==bt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(hc[(l=oi(r)).overflowY]||hc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!ds(r)&&(hc[(l=oi(r)).overflowY]||hc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hg=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&TS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(Ft,Ot.eventTypes[0],dg,!1,!0)},onDisable:function(){return en(Ft,Ot.eventTypes[0],dg,!0)}})},bS=/(input|label|select|textarea)/i,fg,dg=function(e){var t=bS.test(e.target.tagName);(t||fg)&&(e._gsapAllow=!0,fg=t)},wS=function(e){ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Un(e.target)||di,h=Be.core.globals().ScrollSmoother,f=h&&h.get(),d=Lr&&(e.content&&Un(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Pr(c,Wt),g=Pr(c,Sn),_=1,p=(Ot.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,S=Tn(i)?function(){return i(a)}:function(){return i||2.8},v,y,M=hg(c,e.type,!0,r),b=function(){return y=!1},E=Fi,C=Fi,F=function(){l=Ni(c,Wt),C=ba(Lr?1:0,l),n&&(E=ba(0,Ni(c,Sn))),v=xs},x=function(){d._gsap.y=Aa(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(b);var q=Aa(a.deltaY/2),I=C(u.v-q);if(d&&I!==u.v+u.offset){u.offset=I-u.v;var R=Aa((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",u.cacheID=ct.cache,Ki()}return!0}u.offset&&x(),y=!0},X,G,L,H,U=function(){F(),X.isActive()&&X.vars.scrollY>l&&(u()>l?X.progress(1)&&u(l):X.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(k){return Lr&&k.type==="touchmove"&&D()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=_;_=Aa((ft.visualViewport&&ft.visualViewport.scale||1)/p),X.pause(),k!==_&&Oh(c,_>1.01?!0:n?!1:"x"),G=g(),L=u(),F(),v=xs},e.onRelease=e.onGestureStart=function(k,q){if(u.offset&&x(),!q)H.restart(!0);else{ct.cache++;var I=S(),R,ie;n&&(R=g(),ie=R+I*.05*-k.velocityX/.227,I*=ug(g,R,ie,Ni(c,Sn)),X.vars.scrollX=E(ie)),R=u(),ie=R+I*.05*-k.velocityY/.227,I*=ug(u,R,ie,Ni(c,Wt)),X.vars.scrollY=C(ie),X.invalidate().duration(I).play(.01),(Lr&&X.vars.scrollY>=l||R>=l-1)&&Be.to({},{onUpdate:U,duration:I})}o&&o(k)},e.onWheel=function(){X._ts&&X.pause(),fn()-m>1e3&&(v=0,m=fn())},e.onChange=function(k,q,I,R,ie){if(xs!==v&&F(),q&&n&&g(E(R[2]===q?G+(k.startX-k.x):g()+q-R[1])),I){u.offset&&x();var le=ie[2]===I,Z=le?L+k.startY-k.y:u()+I-ie[1],P=C(Z);le&&Z!==P&&(L+=P-Z),u(P)}(I||q)&&Ki()},e.onEnable=function(){Oh(c,n?!1:"x"),tt.addEventListener("refresh",U),Qt(ft,"resize",U),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){Oh(c,!0),en(ft,"resize",U),tt.removeEventListener("refresh",U),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=Lr,Lr&&!u()&&u(1),Lr&&Be.ticker.add(Fi),H=a._dc,X=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lg(u,u(),function(){return X.pause()})},onUpdate:Ki,onComplete:H.vars.onComplete}),a};tt.sort=function(s){return st.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},tt.observe=function(s){return new Ot(s)},tt.normalizeScroll=function(s){if(typeof s=="undefined")return Mn;if(s===!0&&Mn)return Mn.enable();if(s===!1){Mn&&Mn.kill(),Mn=s;return}var e=s instanceof Ot?s:wS(s);return Mn&&Mn.target===e.target&&Mn.kill(),ds(e.target)&&(Mn=e),e},tt.core={_getVelocityProp:gh,_inputObserver:hg,_scrollers:ct,_proxies:Li,bridge:{ss:function(){ri||vs("scrollStart"),ri=fn()},ref:function(){return hn}}},Xm()&&Be.registerPlugin(tt);/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Bh="162",DS=0,pg=1,AS=2,mg=1,CS=2,Ji=3,Fr=0,On=1,ji=2,Qi=0,po=1,kh=2,gg=3,_g=4,RS=5,Ss=100,PS=101,LS=102,vg=103,xg=104,FS=200,NS=201,IS=202,US=203,zh=204,Hh=205,OS=206,BS=207,kS=208,zS=209,HS=210,GS=211,VS=212,WS=213,XS=214,$S=0,YS=1,qS=2,fc=3,ZS=4,KS=5,JS=6,jS=7,yg=0,QS=1,eE=2,er=0,Gh=1,Vh=2,Wh=3,Xh=4,tE=5,Sg=6,Eg=7,Mg=300,mo=301,go=302,$h=303,Yh=304,dc=306,qh=1e3,pi=1001,Zh=1002,wn=1003,Tg=1004,Ba=1005,Bn=1006,Kh=1007,Es=1008,Nr=1009,nE=1010,iE=1011,Jh=1012,bg=1013,Ir=1014,tr=1015,nr=1016,wg=1017,Dg=1018,Ms=1020,rE=1021,mi=1023,sE=1024,oE=1025,Ts=1026,_o=1027,aE=1028,Ag=1029,lE=1030,Cg=1031,Rg=1033,jh=33776,Qh=33777,ef=33778,tf=33779,Pg=35840,Lg=35841,Fg=35842,Ng=35843,Ig=36196,Ug=37492,Og=37496,Bg=37808,kg=37809,zg=37810,Hg=37811,Gg=37812,Vg=37813,Wg=37814,Xg=37815,$g=37816,Yg=37817,qg=37818,Zg=37819,Kg=37820,Jg=37821,nf=36492,jg=36494,Qg=36495,cE=36283,e_=36284,t_=36285,n_=36286,uE=3200,hE=3201,fE=0,dE=1,Ur="",Ii="srgb",Or="srgb-linear",rf="display-p3",pc="display-p3-linear",mc="linear",Tt="srgb",gc="rec709",_c="p3",vo=7680,i_=519,pE=512,mE=513,gE=514,r_=515,_E=516,vE=517,xE=518,yE=519,s_=35044,o_="300 es",sf=1035,ir=2e3,vc=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,of=180/Math.PI;function yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function SE(s,e){return(s%e+e)%e}function af(s,e,t){return(1-t)*s+t*e}function a_(s){return(s&s-1)===0&&s!==0}function lf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ka(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,i,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],v=i[4],y=i[7],M=i[2],b=i[5],E=i[8];return r[0]=o*_+a*S+l*M,r[3]=o*p+a*v+l*b,r[6]=o*m+a*y+l*E,r[1]=c*_+h*S+f*M,r[4]=c*p+h*v+f*b,r[7]=c*m+h*y+f*E,r[2]=d*_+u*S+g*M,r[5]=d*p+u*v+g*b,r[8]=d*m+u*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new nt;function l_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function EE(){const s=yc("canvas");return s.style.display="block",s}const c_={};function ME(s){s in c_||(c_[s]=!0,console.warn(s))}const u_=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),h_=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sc={[Or]:{transfer:mc,primaries:gc,toReference:s=>s,fromReference:s=>s},[Ii]:{transfer:Tt,primaries:gc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[pc]:{transfer:mc,primaries:_c,toReference:s=>s.applyMatrix3(h_),fromReference:s=>s.applyMatrix3(u_)},[rf]:{transfer:Tt,primaries:_c,toReference:s=>s.convertSRGBToLinear().applyMatrix3(h_),fromReference:s=>s.applyMatrix3(u_).convertLinearToSRGB()}},TE=new Set([Or,pc]),_t={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!TE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Sc[e].toReference,i=Sc[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Sc[s].primaries},getTransfer:function(s){return s===Ur?mc:Sc[s].transfer}};function So(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uf(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Eo;class f_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=yc("canvas")),Eo.width=e.width,Eo.height=e.height;const n=Eo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=So(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(So(t[n]/255)*255):t[n]=So(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class d_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hf(i[o].image)):r.push(hf(i[o]))}else r=hf(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function hf(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?f_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wE=0;class zn extends xo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=pi,i=pi,r=Bn,o=Es,a=mi,l=Nr,c=zn.DEFAULT_ANISOTROPY,h=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=yo(),this.name="",this.source=new d_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null,zn.DEFAULT_MAPPING=Mg,zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,i=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(u+1)/2,M=(m+1)/2,b=(h+d)/4,E=(f+_)/4,C=(g+p)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=E/r,i=C/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DE extends xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new d_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends DE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class p_ extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AE extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a;const m=l*d+c*u+h*g+f*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,m*S);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M}const y=a*S;if(l=l*p+d*y,c=c*p+u*y,h=h*p+g*y,f=f*p+_*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(m_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new Y,m_=new za;class Ha{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),Mc.subVectors(this.max,Ga),Mo.subVectors(e.a,Ga),To.subVectors(e.b,Ga),bo.subVectors(e.c,Ga),Br.subVectors(To,Mo),kr.subVectors(bo,To),bs.subVectors(Mo,bo);let t=[0,-Br.z,Br.y,0,-kr.z,kr.y,0,-bs.z,bs.y,Br.z,0,-Br.x,kr.z,0,-kr.x,bs.z,0,-bs.x,-Br.y,Br.x,0,-kr.y,kr.x,0,-bs.y,bs.x,0];return!df(t,Mo,To,bo,Mc)||(t=[1,0,0,0,1,0,0,0,1],!df(t,Mo,To,bo,Mc))?!1:(Tc.crossVectors(Br,kr),t=[Tc.x,Tc.y,Tc.z],df(t,Mo,To,bo,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],_i=new Y,Ec=new Ha,Mo=new Y,To=new Y,bo=new Y,Br=new Y,kr=new Y,bs=new Y,Ga=new Y,Mc=new Y,Tc=new Y,ws=new Y;function df(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ws.fromArray(s,r);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const CE=new Ha,Va=new Y,pf=new Y;class bc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):CE.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(pf)),this.expandByPoint(Va.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new Y,mf=new Y,wc=new Y,zr=new Y,gf=new Y,Dc=new Y,_f=new Y;class g_{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mf.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(mf);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wc),a=zr.dot(this.direction),l=-zr.dot(wc),c=zr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(mf).addScaledVector(wc,d),u}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,r){gf.subVectors(t,e),Dc.subVectors(n,e),_f.crossVectors(gf,Dc);let o=this.direction.dot(_f),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zr.subVectors(this.origin,e);const l=a*this.direction.dot(Dc.crossVectors(zr,Dc));if(l<0)return null;const c=a*this.direction.dot(gf.cross(zr));if(c<0||l+c>o)return null;const h=-a*zr.dot(_f);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p)}set(e,t,n,i,r,o,a,l,c,h,f,d,u,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wo.setFromMatrixColumn(e,0).length(),r=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,PE)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Hr.crossVectors(n,Kn),Hr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Hr.crossVectors(n,Kn)),Hr.normalize(),Ac.crossVectors(Kn,Hr),i[0]=Hr.x,i[4]=Ac.x,i[8]=Kn.x,i[1]=Hr.y,i[5]=Ac.y,i[9]=Kn.y,i[2]=Hr.z,i[6]=Ac.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],y=n[11],M=n[15],b=i[0],E=i[4],C=i[8],F=i[12],x=i[1],D=i[5],X=i[9],G=i[13],L=i[2],H=i[6],U=i[10],k=i[14],q=i[3],I=i[7],R=i[11],ie=i[15];return r[0]=o*b+a*x+l*L+c*q,r[4]=o*E+a*D+l*H+c*I,r[8]=o*C+a*X+l*U+c*R,r[12]=o*F+a*G+l*k+c*ie,r[1]=h*b+f*x+d*L+u*q,r[5]=h*E+f*D+d*H+u*I,r[9]=h*C+f*X+d*U+u*R,r[13]=h*F+f*G+d*k+u*ie,r[2]=g*b+_*x+p*L+m*q,r[6]=g*E+_*D+p*H+m*I,r[10]=g*C+_*X+p*U+m*R,r[14]=g*F+_*G+p*k+m*ie,r[3]=S*b+v*x+y*L+M*q,r[7]=S*E+v*D+y*H+M*I,r[11]=S*C+v*X+y*U+M*R,r[15]=S*F+v*G+y*k+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+r*o*d-i*o*u+i*c*h-r*l*h)+p*(+t*c*f-t*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,v=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,y=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,M=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,b=t*S+n*v+i*y+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=S*E,e[1]=(_*d*r-f*p*r-_*i*u+n*p*u+f*i*m-n*d*m)*E,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*u-n*l*u)*E,e[4]=v*E,e[5]=(h*p*r-g*d*r+g*i*u-t*p*u-h*i*m+t*d*m)*E,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*u+t*l*u)*E,e[8]=y*E,e[9]=(g*f*r-h*_*r-g*n*u+t*_*u+h*n*m-t*f*m)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*u-t*a*u)*E,e[12]=M*E,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*p+t*f*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,g=r*f,_=o*h,p=o*f,m=a*f,S=l*c,v=l*h,y=l*f,M=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*M,i[1]=(u+y)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(u-y)*b,i[5]=(1-(d+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(g+v)*E,i[9]=(p-S)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=wo.set(i[0],i[1],i[2]).length();const o=wo.set(i[4],i[5],i[6]).length(),a=wo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/r,h=1/o,f=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ir){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===ir)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vc)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ir){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-r),d=(t+e)*c,u=(n+i)*h;let g,_;if(a===ir)g=(o+r)*f,_=-2*f;else if(a===vc)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wo=new Y,vi=new Bt,RE=new Y(0,0,0),PE=new Y(1,1,1),Hr=new Y,Ac=new Y,Kn=new Y,__=new Bt,v_=new za;class or{constructor(e=0,t=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return __.makeRotationFromQuaternion(e),this.setFromRotationMatrix(__,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const y_=new Y,Do=new za,ar=new Bt,Cc=new Y,Wa=new Y,FE=new Y,NE=new za,S_=new Y(1,0,0),E_=new Y(0,1,0),M_=new Y(0,0,1),IE={type:"added"},UE={type:"removed"},vf={type:"childadded",child:null},xf={type:"childremoved",child:null};class Hn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new Y,t=new or,n=new za,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new nt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(E_,e)}rotateZ(e){return this.rotateOnAxis(M_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(E_,e)}translateZ(e){return this.translateOnAxis(M_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cc.copy(e):Cc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Wa,Cc,this.up):ar.lookAt(Cc,Wa,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),Do.setFromRotationMatrix(ar),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IE),vf.child=e,this.dispatchEvent(vf),vf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UE),xf.child=e,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,FE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,NE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Hn.DEFAULT_UP=new Y(0,1,0),Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Y,lr=new Y,yf=new Y,cr=new Y,Ao=new Y,Co=new Y,T_=new Y,Sf=new Y,Ef=new Y,Mf=new Y;class yi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),lr.subVectors(n,t),yf.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(lr),l=xi.dot(yf),c=lr.dot(lr),h=lr.dot(yf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cr.x),l.addScaledVector(o,cr.y),l.addScaledVector(a,cr.z),l)}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),lr.subVectors(e,t),xi.cross(lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),xi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ao.subVectors(i,n),Co.subVectors(r,n),Sf.subVectors(e,n);const l=Ao.dot(Sf),c=Co.dot(Sf);if(l<=0&&c<=0)return t.copy(n);Ef.subVectors(e,i);const h=Ao.dot(Ef),f=Co.dot(Ef);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ao,o);Mf.subVectors(e,r);const u=Ao.dot(Mf),g=Co.dot(Mf);if(g>=0&&u<=g)return t.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Co,a);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return T_.subVectors(r,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(T_,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Tf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=SE(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Tf(o,r,e+1/3),this.g=Tf(o,r,e),this.b=Tf(o,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ii){const n=b_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=uf(e.r),this.g=uf(e.g),this.b=uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return _t.fromWorkingColorSpace(mn.copy(this),e),Math.round(pn(mn.r*255,0,255))*65536+Math.round(pn(mn.g*255,0,255))*256+Math.round(pn(mn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,r=mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Ii){_t.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Ii?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Rc);const n=af(Gr.h,Rc.h,t),i=af(Gr.s,Rc.s,t),r=af(Gr.l,Rc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new mt;mt.NAMES=b_;let OE=0;class Xa extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=po,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==Fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zh&&(n.blendSrc=this.blendSrc),this.blendDst!==Hh&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bf extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Y,Pc=new Fe;class Ui{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=s_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ME("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ka(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==s_&&(e.usage=this.usage),e}}class w_ extends Ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class D_ extends Ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let BE=0;const ai=new Bt,wf=new Hn,Ro=new Y,Jn=new Ha,$a=new Ha,tn=new Y;class jn extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?D_:w_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Jn.min,$a.min),Jn.expandByPoint(tn),tn.addVectors(Jn.max,$a.max),Jn.expandByPoint(tn)):(Jn.expandByPoint($a.min),Jn.expandByPoint($a.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),tn.add(Ro)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new Y,l[C]=new Y;const c=new Y,h=new Y,f=new Y,d=new Fe,u=new Fe,g=new Fe,_=new Y,p=new Y;function m(C,F,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),u.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const D=1/(u.x*g.y-g.x*u.y);!isFinite(D)||(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(D),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(_),a[F].add(_),a[x].add(_),l[C].add(p),l[F].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,F=S.length;C<F;++C){const x=S[C],D=x.start,X=x.count;for(let G=D,L=D+X;G<L;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new Y,y=new Y,M=new Y,b=new Y;function E(C){M.fromBufferAttribute(i,C),b.copy(M);const F=a[C];v.copy(F),v.sub(M.multiplyScalar(M.dot(F))).normalize(),y.crossVectors(b,F);const D=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,F=S.length;C<F;++C){const x=S[C],D=x.start,X=x.count;for(let G=D,L=D+X;G<L;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new Ui(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new Bt,Ds=new g_,Lc=new bc,C_=new Y,Po=new Y,Lo=new Y,Fo=new Y,Df=new Y,Fc=new Y,Nc=new Fe,Ic=new Fe,Uc=new Fe,R_=new Y,P_=new Y,L_=new Y,Oc=new Y,Bc=new Y;class Oi extends Hn{constructor(e=new jn,t=new bf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(Df.fromBufferAttribute(f,e),o?Fc.addScaledVector(Df,h):Fc.addScaledVector(Df.sub(t),h))}t.add(Fc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Lc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Lc,C_)===null||Ds.origin.distanceToSquared(C_)>(e.far-e.near)**2))&&(A_.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(A_),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,M=v;y<M;y+=3){const b=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);i=kc(this,m,e,n,c,h,f,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=kc(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,M=v;y<M;y+=3){const b=y,E=y+1,C=y+2;i=kc(this,m,e,n,c,h,f,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,y=p+2;i=kc(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function kE(s,e,t,n,i,r,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fr,a),l===null)return null;Bc.copy(a),Bc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bc);return c<t.near||c>t.far?null:{distance:c,point:Bc.clone(),object:s}}function kc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Po),s.getVertexPosition(l,Lo),s.getVertexPosition(c,Fo);const h=kE(s,e,t,n,Po,Lo,Fo,Oc);if(h){i&&(Nc.fromBufferAttribute(i,a),Ic.fromBufferAttribute(i,l),Uc.fromBufferAttribute(i,c),h.uv=yi.getInterpolation(Oc,Po,Lo,Fo,Nc,Ic,Uc,new Fe)),r&&(Nc.fromBufferAttribute(r,a),Ic.fromBufferAttribute(r,l),Uc.fromBufferAttribute(r,c),h.uv1=yi.getInterpolation(Oc,Po,Lo,Fo,Nc,Ic,Uc,new Fe)),o&&(R_.fromBufferAttribute(o,a),P_.fromBufferAttribute(o,l),L_.fromBufferAttribute(o,c),h.normal=yi.getInterpolation(Oc,Po,Lo,Fo,R_,P_,L_,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};yi.getNormal(Po,Lo,Fo,f.normal),h.face=f}return h}class Ya extends jn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(f,2));function g(_,p,m,S,v,y,M,b,E,C,F){const x=y/E,D=M/C,X=y/2,G=M/2,L=b/2,H=E+1,U=C+1;let k=0,q=0;const I=new Y;for(let R=0;R<U;R++){const ie=R*D-G;for(let le=0;le<H;le++){const Z=le*x-X;I[_]=Z*S,I[p]=ie*v,I[m]=L,c.push(I.x,I.y,I.z),I[_]=0,I[p]=0,I[m]=b>0?1:-1,h.push(I.x,I.y,I.z),f.push(le/E),f.push(1-R/C),k+=1}}for(let R=0;R<C;R++)for(let ie=0;ie<E;ie++){const le=d+ie+H*R,Z=d+ie+H*(R+1),P=d+(ie+1)+H*(R+1),B=d+(ie+1)+H*R;l.push(le,Z,B),l.push(Z,P,B),q+=6}a.addGroup(u,q,F),u+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const n=No(s[t]);for(const i in n)e[i]=n[i]}return e}function zE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function F_(s){return s.getRenderTarget()===null?s.outputColorSpace:_t.workingColorSpace}const qa={clone:No,merge:Dn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=zE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class N_ extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new Y,I_=new Fe,U_=new Fe;class li extends N_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,I_,U_),t.subVectors(U_,I_)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Io=-90,Uo=1;class VE extends Hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new li(Io,Uo,e,t);i.layers=this.layers,this.add(i);const r=new li(Io,Uo,e,t);r.layers=this.layers,this.add(r);const o=new li(Io,Uo,e,t);o.layers=this.layers,this.add(o);const a=new li(Io,Uo,e,t);a.layers=this.layers,this.add(a);const l=new li(Io,Uo,e,t);l.layers=this.layers,this.add(l);const c=new li(Io,Uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class O_ extends zn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WE extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new O_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ya(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Qi});r.uniforms.tEquirect.value=t;const o=new Oi(i,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=Bn),new VE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Af=new Y,XE=new Y,$E=new nt;class As{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Af.subVectors(n,t).cross(XE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Af),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$E.getNormalMatrix(e),i=this.coplanarPoint(Af).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new bc,zc=new Y;class B_{constructor(e=new As,t=new As,n=new As,i=new As,r=new As,o=new As){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,p-u,y-m).normalize(),n[1].setComponents(l+r,d+c,p+u,y+m).normalize(),n[2].setComponents(l+o,d+h,p+g,y+S).normalize(),n[3].setComponents(l-o,d-h,p-g,y-S).normalize(),n[4].setComponents(l-a,d-f,p-_,y-v).normalize(),t===ir)n[5].setComponents(l+a,d+f,p+_,y+v).normalize();else if(t===vc)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zc.x=i.normal.x>0?e.max.x:e.min.x,zc.y=i.normal.y>0?e.max.y:e.min.y,zc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function k_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function YE(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,d=c.usage,u=f.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){const d=h.array,u=h._updateRange,g=h.updateRanges;if(s.bindBuffer(f,c),u.count===-1&&g.length===0&&s.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):s.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class Hc extends jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,y=S+c*(m+1),M=S+1+c*(m+1),b=S+1+c*m;u.push(v,y,b),u.push(y,M,b)}this.setIndex(u),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
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
#endif`,KE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
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
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`
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
}`,wM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
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
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,YM=`struct PhysicalMaterial {
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
}`,qM=`
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rT=`#if defined( USE_POINTS_UV )
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
#endif`,sT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cT=`#ifdef USE_MORPHNORMALS
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
#endif`,uT=`#ifdef USE_MORPHTARGETS
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
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_T=`#ifdef USE_NORMALMAP
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
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ST=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FT=`float getShadowMask() {
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
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#ifdef USE_TRANSMISSION
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const it={alphahash_fragment:qE,alphahash_pars_fragment:ZE,alphamap_fragment:KE,alphamap_pars_fragment:JE,alphatest_fragment:jE,alphatest_pars_fragment:QE,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:fM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:EM,emissivemap_pars_fragment:MM,colorspace_fragment:TM,colorspace_pars_fragment:bM,envmap_fragment:wM,envmap_common_pars_fragment:DM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:HM,envmap_vertex:RM,fog_vertex:PM,fog_pars_vertex:LM,fog_fragment:FM,fog_pars_fragment:NM,gradientmap_pars_fragment:IM,lightmap_fragment:UM,lightmap_pars_fragment:OM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:kM,lights_pars_begin:zM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:WM,lights_phong_pars_fragment:XM,lights_physical_fragment:$M,lights_physical_pars_fragment:YM,lights_fragment_begin:qM,lights_fragment_maps:ZM,lights_fragment_end:KM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:eT,map_fragment:tT,map_pars_fragment:nT,map_particle_fragment:iT,map_particle_pars_fragment:rT,metalnessmap_fragment:sT,metalnessmap_pars_fragment:oT,morphinstance_vertex:aT,morphcolor_vertex:lT,morphnormal_vertex:cT,morphtarget_pars_vertex:uT,morphtarget_vertex:hT,normal_fragment_begin:fT,normal_fragment_maps:dT,normal_pars_fragment:pT,normal_pars_vertex:mT,normal_vertex:gT,normalmap_pars_fragment:_T,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:xT,clearcoat_pars_fragment:yT,iridescence_pars_fragment:ST,opaque_fragment:ET,packing:MT,premultiplied_alpha_fragment:TT,project_vertex:bT,dithering_fragment:wT,dithering_pars_fragment:DT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:RT,shadowmap_pars_vertex:PT,shadowmap_vertex:LT,shadowmask_pars_fragment:FT,skinbase_vertex:NT,skinning_pars_vertex:IT,skinning_vertex:UT,skinnormal_vertex:OT,specularmap_fragment:BT,specularmap_pars_fragment:kT,tonemapping_fragment:zT,tonemapping_pars_fragment:HT,transmission_fragment:GT,transmission_pars_fragment:VT,uv_pars_fragment:WT,uv_pars_vertex:XT,uv_vertex:$T,worldpos_vertex:YT,background_vert:`varying vec2 vUv;
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
}`},Ae={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Bi={basic:{uniforms:Dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Dn([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Dn([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Dn([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Dn([Ae.lights,Ae.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Bi.physical={uniforms:Dn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Gc={r:0,b:0,g:0},Rs=new or,qT=new Bt;function ZT(s,e,t,n,i,r,o){const a=new mt(0);let l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===dc)?(h===void 0&&(h=new Oi(new Ya(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:No(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rs.copy(m.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(Rs)),h.material.toneMapped=_t.getTransfer(v.colorSpace)!==Tt,(f!==v||d!==v.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oi(new Hc(2,2),new An({name:"BackgroundMaterial",uniforms:No(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_t.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Gc,F_(s)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function KT(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function f(L,H,U,k,q){let I=!1;if(o){const R=_(k,U,H);c!==R&&(c=R,u(c.object)),I=m(L,k,U,q),I&&S(L,k,U,q)}else{const R=H.wireframe===!0;(c.geometry!==k.id||c.program!==U.id||c.wireframe!==R)&&(c.geometry=k.id,c.program=U.id,c.wireframe=R,I=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,C(L,H,U,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,H,U){const k=U.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let I=q[H.id];I===void 0&&(I={},q[H.id]=I);let R=I[k];return R===void 0&&(R=p(d()),I[k]=R),R}function p(L){const H=[],U=[],k=[];for(let q=0;q<i;q++)H[q]=0,U[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:U,attributeDivisors:k,object:L,attributes:{},index:null}}function m(L,H,U,k){const q=c.attributes,I=H.attributes;let R=0;const ie=U.getAttributes();for(const le in ie)if(ie[le].location>=0){const P=q[le];let B=I[le];if(B===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),P===void 0||P.attribute!==B||B&&P.data!==B.data)return!0;R++}return c.attributesNum!==R||c.index!==k}function S(L,H,U,k){const q={},I=H.attributes;let R=0;const ie=U.getAttributes();for(const le in ie)if(ie[le].location>=0){let P=I[le];P===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(P=L.instanceColor));const B={};B.attribute=P,P&&P.data&&(B.data=P.data),q[le]=B,R++}c.attributes=q,c.attributesNum=R,c.index=k}function v(){const L=c.newAttributes;for(let H=0,U=L.length;H<U;H++)L[H]=0}function y(L){M(L,0)}function M(L,H){const U=c.newAttributes,k=c.enabledAttributes,q=c.attributeDivisors;U[L]=1,k[L]===0&&(s.enableVertexAttribArray(L),k[L]=1),q[L]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),q[L]=H)}function b(){const L=c.newAttributes,H=c.enabledAttributes;for(let U=0,k=H.length;U<k;U++)H[U]!==L[U]&&(s.disableVertexAttribArray(U),H[U]=0)}function E(L,H,U,k,q,I,R){R===!0?s.vertexAttribIPointer(L,H,U,q,I):s.vertexAttribPointer(L,H,U,k,q,I)}function C(L,H,U,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=k.attributes,I=U.getAttributes(),R=H.defaultAttributeValues;for(const ie in I){const le=I[ie];if(le.location>=0){let Z=q[ie];if(Z===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const P=Z.normalized,B=Z.itemSize,te=t.get(Z);if(te===void 0)continue;const ue=te.buffer,ce=te.type,me=te.bytesPerElement,Ce=n.isWebGL2===!0&&(ce===s.INT||ce===s.UNSIGNED_INT||Z.gpuType===bg);if(Z.isInterleavedBufferAttribute){const ve=Z.data,V=ve.stride,De=Z.offset;if(ve.isInstancedInterleavedBuffer){for(let ge=0;ge<le.locationSize;ge++)M(le.location+ge,ve.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<le.locationSize;ge++)y(le.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ge=0;ge<le.locationSize;ge++)E(le.location+ge,B/le.locationSize,ce,P,V*me,(De+B/le.locationSize*ge)*me,Ce)}else{if(Z.isInstancedBufferAttribute){for(let ve=0;ve<le.locationSize;ve++)M(le.location+ve,Z.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<le.locationSize;ve++)y(le.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ve=0;ve<le.locationSize;ve++)E(le.location+ve,B/le.locationSize,ce,P,B*me,B/le.locationSize*ve*me,Ce)}}else if(R!==void 0){const P=R[ie];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(le.location,P);break;case 3:s.vertexAttrib3fv(le.location,P);break;case 4:s.vertexAttrib4fv(le.location,P);break;default:s.vertexAttrib1fv(le.location,P)}}}}b()}function F(){X();for(const L in a){const H=a[L];for(const U in H){const k=H[U];for(const q in k)g(k[q].object),delete k[q];delete H[U]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const U in H){const k=H[U];for(const q in k)g(k[q].object),delete k[q];delete H[U]}delete a[L.id]}function D(L){for(const H in a){const U=a[H];if(U[L.id]===void 0)continue;const k=U[L.id];for(const q in k)g(k[q].object),delete k[q];delete U[L.id]}}function X(){G(),h=!0,c!==l&&(c=l,u(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:G,dispose:F,releaseStatesOfGeometry:x,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function JT(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,f){s.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jT(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),M=v&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:b}}function QT(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new As,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,v=S*4;let y=m.clippingState||null;l.value=y,y=h(g,d,v,u);for(let M=0;M!==v;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=u+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=u;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function eb(s){let e=new WeakMap;function t(o,a){return a===$h?o.mapping=mo:a===Yh&&(o.mapping=go),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$h||a===Yh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new WE(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class z_ extends N_{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,H_=[.125,.215,.35,.446,.526,.582],Ps=20,Cf=new z_,G_=new mt;let Rf=null,Pf=0,Lf=0;const Ls=(1+Math.sqrt(5))/2,Bo=1/Ls,V_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ls,Bo),new Y(0,Ls,-Bo),new Y(Bo,0,Ls),new Y(-Bo,0,Ls),new Y(Ls,Bo,0),new Y(-Ls,Bo,0)];class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Pf,Lf),e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:nr,format:mi,colorSpace:Or,depthBuffer:!1},i=X_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(r)),this._blurMaterial=nb(r,e,t)}return i}_compileMaterial(e){const t=new Oi(this._lodPlanes[0],e);this._renderer.compile(t,Cf)}_sceneToCubeUV(e,t,n,i){const a=new li(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(G_),h.toneMapping=er,h.autoClear=!1;const u=new bf({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new Oi(new Ya,u);let _=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,_=!0):(u.color.copy(G_),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Vc(i,S*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mo||e.mapping===go;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=V_[(i-1)%V_.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Oi(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ps-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ps;p>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);const m=[];let S=0;for(let E=0;E<Ps;++E){const C=E/_,F=Math.exp(-C*C/2);m.push(F),E===0?S+=F:E<p&&(S+=2*F)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-Oo?i-v+Oo:0),b=4*(this._cubeSize-y);Vc(t,M,b,3*y,2*y),l.setRenderTarget(t),l.render(f,Cf)}}function tb(s){const e=[],t=[],n=[];let i=s;const r=s-Oo+1+H_.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Oo?l=H_[o-s+Oo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*u),v=new Float32Array(p*g*u),y=new Float32Array(m*g*u);for(let b=0;b<u;b++){const E=b%3*2/3-1,C=b>2?0:-1,F=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(F,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];y.set(x,m*g*b)}const M=new jn;M.setAttribute("position",new Ui(S,_)),M.setAttribute("uv",new Ui(v,p)),M.setAttribute("faceIndex",new Ui(y,m)),e.push(M),i>Oo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function X_(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function nb(s,e,t){const n=new Float32Array(Ps),i=new Y(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $_(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Y_(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ff(){return`

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
	`}function ib(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$h||l===Yh,h=l===mo||l===go;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new W_(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new W_(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sb(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const S=u.array;_=u.version;for(let v=0,y=S.length;v<y;v+=3){const M=S[v+0],b=S[v+1],E=S[v+2];d.push(M,b,b,E,E,M)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const M=v+0,b=v+1,E=v+2;d.push(M,b,b,E,E,M)}}else return;const p=new(l_(d)?D_:w_)(d,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ob(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){s.drawElements(r,g,a,u*l),t.update(g,r,1)}function f(u,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,u*l,_),t.update(g,r,_)}function d(u,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(u[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,u,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function ab(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lb(s,e){return s[0]-e[0]}function cb(s,e){return Math.abs(e[1])-Math.abs(s[1])}function ub(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new sn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let X=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",X)};_!==void 0&&_.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),S===!0&&(b=3);let E=h.attributes.position.count*b,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const F=new Float32Array(E*C*4*g),x=new p_(F,E,C,g);x.type=tr,x.needsUpdate=!0;const D=b*4;for(let G=0;G<g;G++){const L=v[G],H=y[G],U=M[G],k=E*C*4*G;for(let q=0;q<L.count;q++){const I=q*D;p===!0&&(o.fromBufferAttribute(L,q),F[k+I+0]=o.x,F[k+I+1]=o.y,F[k+I+2]=o.z,F[k+I+3]=0),m===!0&&(o.fromBufferAttribute(H,q),F[k+I+4]=o.x,F[k+I+5]=o.y,F[k+I+6]=o.z,F[k+I+7]=0),S===!0&&(o.fromBufferAttribute(U,q),F[k+I+8]=o.x,F[k+I+9]=o.y,F[k+I+10]=o.z,F[k+I+11]=U.itemSize===4?o.w:1)}}_={count:g,texture:x,size:new Fe(E,C)},r.set(h,_),h.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",m),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const u=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){const y=g[v];y[0]=v,y[1]=d[v]}g.sort(cb);for(let v=0;v<8;v++)v<u&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(lb);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],b=y[1];M!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[M]&&h.setAttribute("morphTarget"+v,_[M]),p&&h.getAttribute("morphNormal"+v)!==p[M]&&h.setAttribute("morphNormal"+v,p[M]),i[v]=b,m+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function hb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class q_ extends zn{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ts,h!==Ts&&h!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Ir),n===void 0&&h===_o&&(n=Ms),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Z_=new zn,K_=new q_(1,1);K_.compareFunction=r_;const J_=new p_,j_=new AE,Q_=new O_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function ko(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=e0[i];if(r===void 0&&(r=new Float32Array(i),e0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wc(s,e){let t=t0[e];t===void 0&&(t=new Int32Array(e),t0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function fb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function gb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;r0.set(n),s.uniformMatrix2fv(this.addr,!1,r0),Yt(t,n)}}function _b(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;i0.set(n),s.uniformMatrix3fv(this.addr,!1,i0),Yt(t,n)}}function vb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;n0.set(n),s.uniformMatrix4fv(this.addr,!1,n0),Yt(t,n)}}function xb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function Mb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function wb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function Db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?K_:Z_;t.setTexture2D(e||r,i)}function Ab(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||j_,i)}function Cb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Q_,i)}function Rb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||J_,i)}function Pb(s){switch(s){case 5126:return fb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Eb;case 5125:return Mb;case 36294:return Tb;case 36295:return bb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}function Lb(s,e){s.uniform1fv(this.addr,e)}function Fb(s,e){const t=ko(e,this.size,2);s.uniform2fv(this.addr,t)}function Nb(s,e){const t=ko(e,this.size,3);s.uniform3fv(this.addr,t)}function Ib(s,e){const t=ko(e,this.size,4);s.uniform4fv(this.addr,t)}function Ub(s,e){const t=ko(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ob(s,e){const t=ko(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Bb(s,e){const t=ko(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kb(s,e){s.uniform1iv(this.addr,e)}function zb(s,e){s.uniform2iv(this.addr,e)}function Hb(s,e){s.uniform3iv(this.addr,e)}function Gb(s,e){s.uniform4iv(this.addr,e)}function Vb(s,e){s.uniform1uiv(this.addr,e)}function Wb(s,e){s.uniform2uiv(this.addr,e)}function Xb(s,e){s.uniform3uiv(this.addr,e)}function $b(s,e){s.uniform4uiv(this.addr,e)}function Yb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Z_,r[o])}function qb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||j_,r[o])}function Zb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Q_,r[o])}function Kb(s,e,t){const n=this.cache,i=e.length,r=Wc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||J_,r[o])}function Jb(s){switch(s){case 5126:return Lb;case 35664:return Fb;case 35665:return Nb;case 35666:return Ib;case 35674:return Ub;case 35675:return Ob;case 35676:return Bb;case 5124:case 35670:return kb;case 35667:case 35671:return zb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return Wb;case 36295:return Xb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Kb}}class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pb(t.type)}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function s0(s,e){s.seq.push(e),s.map[e.id]=e}function tw(s,e,t){const n=s.name,i=n.length;for(Nf.lastIndex=0;;){const r=Nf.exec(n),o=Nf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){s0(t,c===void 0?new jb(a,s,e):new Qb(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new ew(a),s0(t,f)),t=f}}}class Xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);tw(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function o0(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const nw=37297;let iw=0;function rw(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sw(s){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(s);let n;switch(e===t?n="":e===_c&&t===gc?n="LinearDisplayP3ToLinearSRGB":e===gc&&t===_c&&(n="LinearSRGBToLinearDisplayP3"),s){case Or:case pc:return[n,"LinearTransferOETF"];case Ii:case rf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function a0(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+rw(s.getShaderSource(e),o)}else return i}function ow(s,e){const t=sw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function aw(s,e){let t;switch(e){case Gh:t="Linear";break;case Vh:t="Reinhard";break;case Wh:t="OptimizedCineon";break;case Xh:t="ACESFilmic";break;case Sg:t="AgX";break;case Eg:t="Neutral";break;case tE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lw(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function cw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function uw(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hw(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function zo(s){return s!==""}function l0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(fw,pw)}const dw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pw(s,e){let t=it[e];if(t===void 0){const n=dw.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(s){return s.replace(mw,gw)}function gw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function h0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function _w(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===CS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yg:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case eE:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ew(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_w(t),c=vw(t),h=xw(t),f=yw(t),d=Sw(t),u=t.isWebGL2?"":lw(t),g=cw(t),_=uw(r),p=i.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`),S=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(m=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[u,h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?it.tonemapping_pars_fragment:"",t.toneMapping!==er?aw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=If(o),o=l0(o,t),o=c0(o,t),a=If(a),a=l0(a,t),a=c0(a,t),o=u0(o),a=u0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=v+m+o,M=v+S+a,b=o0(i,i.VERTEX_SHADER,y),E=o0(i,i.FRAGMENT_SHADER,M);i.attachShader(p,b),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function C(X){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(b).trim(),H=i.getShaderInfoLog(E).trim();let U=!0,k=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,E);else{const q=a0(i,b,"vertex"),I=a0(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+G+`
`+q+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||H==="")&&(k=!1);k&&(X.diagnostics={runnable:U,programLog:G,vertexShader:{log:L,prefix:m},fragmentShader:{log:H,prefix:S}})}i.deleteShader(b),i.deleteShader(E),F=new Xc(i,p),x=hw(i,p)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,nw)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let Mw=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bw(e),t.set(e,n)),n}}class bw{constructor(e){this.id=Mw++,this.code=e,this.usedTimes=0}}function ww(s,e,t,n,i,r,o){const a=new x_,l=new Tw,c=new Set,h=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,D,X,G,L){const H=G.fog,U=L.geometry,k=x.isMeshStandardMaterial?G.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),I=!!q&&q.mapping===dc?q.image.height:null,R=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,le=ie!==void 0?ie.length:0;let Z=0;U.morphAttributes.position!==void 0&&(Z=1),U.morphAttributes.normal!==void 0&&(Z=2),U.morphAttributes.color!==void 0&&(Z=3);let P,B,te,ue;if(R){const ae=Bi[R];P=ae.vertexShader,B=ae.fragmentShader}else P=x.vertexShader,B=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const ce=s.getRenderTarget(),me=L.isInstancedMesh===!0,Ce=L.isBatchedMesh===!0,ve=!!x.map,V=!!x.matcap,De=!!q,ge=!!x.aoMap,Me=!!x.lightMap,Le=!!x.bumpMap,W=!!x.normalMap,Pe=!!x.displacementMap,Xe=!!x.emissiveMap,ot=!!x.metalnessMap,A=!!x.roughnessMap,T=x.anisotropy>0,re=x.clearcoat>0,he=x.iridescence>0,de=x.sheen>0,fe=x.transmission>0,Ne=T&&!!x.anisotropyMap,He=re&&!!x.clearcoatMap,xe=re&&!!x.clearcoatNormalMap,be=re&&!!x.clearcoatRoughnessMap,Ze=he&&!!x.iridescenceMap,_e=he&&!!x.iridescenceThicknessMap,vt=de&&!!x.sheenColorMap,qe=de&&!!x.sheenRoughnessMap,ke=!!x.specularMap,Ie=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Ke=fe&&!!x.transmissionMap,Te=fe&&!!x.thicknessMap,at=!!x.gradientMap,O=!!x.alphaMap,Ee=x.alphaTest>0,Q=!!x.alphaHash,Se=!!x.extensions;let se=er;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(se=s.toneMapping);const N={isWebGL2:f,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:P,fragmentShader:B,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ce,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:V,envMap:De,envMapMode:De&&q.mapping,envMapCubeUVHeight:I,aoMap:ge,lightMap:Me,bumpMap:Le,normalMap:W,displacementMap:u&&Pe,emissiveMap:Xe,normalMapObjectSpace:W&&x.normalMapType===dE,normalMapTangentSpace:W&&x.normalMapType===fE,metalnessMap:ot,roughnessMap:A,anisotropy:T,anisotropyMap:Ne,clearcoat:re,clearcoatMap:He,clearcoatNormalMap:xe,clearcoatRoughnessMap:be,iridescence:he,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:vt,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:Ie,specularIntensityMap:Oe,transmission:fe,transmissionMap:Ke,thicknessMap:Te,gradientMap:at,opaque:x.transparent===!1&&x.blending===po&&x.alphaToCoverage===!1,alphaMap:O,alphaTest:Ee,alphaHash:Q,combine:x.combine,mapUv:ve&&p(x.map.channel),aoMapUv:ge&&p(x.aoMap.channel),lightMapUv:Me&&p(x.lightMap.channel),bumpMapUv:Le&&p(x.bumpMap.channel),normalMapUv:W&&p(x.normalMap.channel),displacementMapUv:Pe&&p(x.displacementMap.channel),emissiveMapUv:Xe&&p(x.emissiveMap.channel),metalnessMapUv:ot&&p(x.metalnessMap.channel),roughnessMapUv:A&&p(x.roughnessMap.channel),anisotropyMapUv:Ne&&p(x.anisotropyMap.channel),clearcoatMapUv:He&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&p(x.sheenRoughnessMap.channel),specularMapUv:ke&&p(x.specularMap.channel),specularColorMapUv:Ie&&p(x.specularColorMap.channel),specularIntensityMapUv:Oe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ke&&p(x.transmissionMap.channel),thicknessMapUv:Te&&p(x.thicknessMap.channel),alphaMapUv:O&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(W||T),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(ve||O),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ji,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return N.vertexUv1s=c.has(1),N.vertexUv2s=c.has(2),N.vertexUv3s=c.has(3),c.clear(),N}function S(x){const D=[];if(x.shaderID?D.push(x.shaderID):(D.push(x.customVertexShaderID),D.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)D.push(X),D.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(v(D,x),y(D,x),D.push(s.outputColorSpace)),D.push(x.customProgramCacheKey),D.join()}function v(x,D){x.push(D.precision),x.push(D.outputColorSpace),x.push(D.envMapMode),x.push(D.envMapCubeUVHeight),x.push(D.mapUv),x.push(D.alphaMapUv),x.push(D.lightMapUv),x.push(D.aoMapUv),x.push(D.bumpMapUv),x.push(D.normalMapUv),x.push(D.displacementMapUv),x.push(D.emissiveMapUv),x.push(D.metalnessMapUv),x.push(D.roughnessMapUv),x.push(D.anisotropyMapUv),x.push(D.clearcoatMapUv),x.push(D.clearcoatNormalMapUv),x.push(D.clearcoatRoughnessMapUv),x.push(D.iridescenceMapUv),x.push(D.iridescenceThicknessMapUv),x.push(D.sheenColorMapUv),x.push(D.sheenRoughnessMapUv),x.push(D.specularMapUv),x.push(D.specularColorMapUv),x.push(D.specularIntensityMapUv),x.push(D.transmissionMapUv),x.push(D.thicknessMapUv),x.push(D.combine),x.push(D.fogExp2),x.push(D.sizeAttenuation),x.push(D.morphTargetsCount),x.push(D.morphAttributeCount),x.push(D.numDirLights),x.push(D.numPointLights),x.push(D.numSpotLights),x.push(D.numSpotLightMaps),x.push(D.numHemiLights),x.push(D.numRectAreaLights),x.push(D.numDirLightShadows),x.push(D.numPointLightShadows),x.push(D.numSpotLightShadows),x.push(D.numSpotLightShadowsWithMaps),x.push(D.numLightProbes),x.push(D.shadowMapType),x.push(D.toneMapping),x.push(D.numClippingPlanes),x.push(D.numClipIntersection),x.push(D.depthPacking)}function y(x,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.instancingMorph&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.normalMapObjectSpace&&a.enable(7),D.normalMapTangentSpace&&a.enable(8),D.clearcoat&&a.enable(9),D.iridescence&&a.enable(10),D.alphaTest&&a.enable(11),D.vertexColors&&a.enable(12),D.vertexAlphas&&a.enable(13),D.vertexUv1s&&a.enable(14),D.vertexUv2s&&a.enable(15),D.vertexUv3s&&a.enable(16),D.vertexTangents&&a.enable(17),D.anisotropy&&a.enable(18),D.alphaHash&&a.enable(19),D.batching&&a.enable(20),x.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.alphaToCoverage&&a.enable(20),x.push(a.mask)}function M(x){const D=_[x.type];let X;if(D){const G=Bi[D];X=qa.clone(G.uniforms)}else X=x.uniforms;return X}function b(x,D){let X;for(let G=0,L=h.length;G<L;G++){const H=h[G];if(H.cacheKey===D){X=H,++X.usedTimes;break}}return X===void 0&&(X=new Ew(s,D,x,r),h.push(X)),X}function E(x){if(--x.usedTimes===0){const D=h.indexOf(x);h[D]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:F}}function Dw(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Aw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function f0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d0(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},s[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):t.push(m)}function l(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||Aw),n.length>1&&n.sort(d||f0),i.length>1&&i.sort(d||f0)}function h(){for(let f=e,d=s.length;f<d;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Cw(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new d0,s.set(n,[o])):i>=r.length?(o=new d0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new mt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function Pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lw=0;function Fw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Nw(s,e){const t=new Rw,n=Pw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const r=new Y,o=new Bt,a=new Bt;function l(h,f){let d=0,u=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,y=0,M=0,b=0,E=0,C=0,F=0;h.sort(Fw);const x=f===!0?Math.PI:1;for(let X=0,G=h.length;X<G;X++){const L=h[X],H=L.color,U=L.intensity,k=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*U*x,u+=H.g*U*x,g+=H.b*U*x;else if(L.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(L.sh.coefficients[I],U);F++}else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const R=L.shadow,ie=n.get(L);ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=I,_++}else if(L.isSpotLight){const I=t.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(H).multiplyScalar(U*x),I.distance=k,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,i.spot[m]=I;const R=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,R.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=R.matrix,L.castShadow){const ie=n.get(L);ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.spotShadow[m]=ie,i.spotShadowMap[m]=q,b++}m++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(H).multiplyScalar(U),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=I,S++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*x),I.distance=L.distance,I.decay=L.decay,L.castShadow){const R=L.shadow,ie=n.get(L);ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,ie.shadowCameraNear=R.camera.near,ie.shadowCameraFar=R.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=L.shadow.matrix,M++}i.point[p]=I,p++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(U*x),I.groundColor.copy(L.groundColor).multiplyScalar(U*x),i.hemi[v]=I,v++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==S||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==b||D.numSpotMaps!==E||D.numLightProbes!==F)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=F,D.directionalLength=_,D.pointLength=p,D.spotLength=m,D.rectAreaLength=S,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=b,D.numSpotMaps=E,D.numLightProbes=F,i.version=Lw++)}function c(h,f){let d=0,u=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function p0(s,e){const t=new Nw(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iw(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new p0(s,e),t.set(r,[l])):o>=a.length?(l=new p0(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uw extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
}`;function zw(s,e,t){let n=new B_;const i=new Fe,r=new Fe,o=new sn,a=new Uw({depthPacking:hE}),l=new Ow,c={},h=t.maxTextureSize,f={[Fr]:On,[On]:Fr,[ji]:ji},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Bw,fragmentShader:kw}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mg;let m=this.type;this.render=function(b,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const F=s.getRenderTarget(),x=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Qi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=m!==Ji&&this.type===Ji,L=m===Ji&&this.type!==Ji;for(let H=0,U=b.length;H<U;H++){const k=b[H],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const I=q.getFrameExtents();if(i.multiply(I),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/I.x),i.x=r.x*I.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/I.y),i.y=r.y*I.y,q.mapSize.y=r.y)),q.map===null||G===!0||L===!0){const ie=this.type!==Ji?{minFilter:wn,magFilter:wn}:{};q.map!==null&&q.map.dispose(),q.map=new gi(i.x,i.y,ie),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const R=q.getViewportCount();for(let ie=0;ie<R;ie++){const le=q.getViewport(ie);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),X.viewport(o),q.updateMatrices(k,ie),n=q.getFrustum(),y(E,C,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&S(q,C),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(F,x,D)};function S(b,E){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,u,_,null)}function v(b,E,C,F){let x=null;const D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=x.uuid,G=E.uuid;let L=c[X];L===void 0&&(L={},c[X]=L);let H=L[G];H===void 0&&(H=x.clone(),L[G]=H,E.addEventListener("dispose",M)),x=H}if(x.visible=E.visible,x.wireframe=E.wireframe,F===Ji?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=s.properties.get(x);X.light=C}return x}function y(b,E,C,F,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ji)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const G=e.update(b),L=b.material;if(Array.isArray(L)){const H=G.groups;for(let U=0,k=H.length;U<k;U++){const q=H[U],I=L[q.materialIndex];if(I&&I.visible){const R=v(b,I,F,x);b.onBeforeShadow(s,b,E,C,G,R,q),s.renderBufferDirect(C,null,G,R,b,q),b.onAfterShadow(s,b,E,C,G,R,q)}}}else if(L.visible){const H=v(b,L,F,x);b.onBeforeShadow(s,b,E,C,G,H,null),s.renderBufferDirect(C,null,G,H,b,null),b.onAfterShadow(s,b,E,C,G,H,null)}}const X=b.children;for(let G=0,L=X.length;G<L;G++)y(X[G],E,C,F,x)}function M(b){b.target.removeEventListener("dispose",M);for(const C in c){const F=c[C],x=b.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}function Hw(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const Ee=new sn;let Q=null;const Se=new sn(0,0,0,0);return{setMask:function(se){Q!==se&&!O&&(s.colorMask(se,se,se,se),Q=se)},setLocked:function(se){O=se},setClear:function(se,N,ae,z,ne){ne===!0&&(se*=z,N*=z,ae*=z),Ee.set(se,N,ae,z),Se.equals(Ee)===!1&&(s.clearColor(se,N,ae,z),Se.copy(Ee))},reset:function(){O=!1,Q=null,Se.set(-1,0,0,0)}}}function r(){let O=!1,Ee=null,Q=null,Se=null;return{setTest:function(se){se?me(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(se){Ee!==se&&!O&&(s.depthMask(se),Ee=se)},setFunc:function(se){if(Q!==se){switch(se){case $S:s.depthFunc(s.NEVER);break;case YS:s.depthFunc(s.ALWAYS);break;case qS:s.depthFunc(s.LESS);break;case fc:s.depthFunc(s.LEQUAL);break;case ZS:s.depthFunc(s.EQUAL);break;case KS:s.depthFunc(s.GEQUAL);break;case JS:s.depthFunc(s.GREATER);break;case jS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=se}},setLocked:function(se){O=se},setClear:function(se){Se!==se&&(s.clearDepth(se),Se=se)},reset:function(){O=!1,Ee=null,Q=null,Se=null}}}function o(){let O=!1,Ee=null,Q=null,Se=null,se=null,N=null,ae=null,z=null,ne=null;return{setTest:function(oe){O||(oe?me(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(oe){Ee!==oe&&!O&&(s.stencilMask(oe),Ee=oe)},setFunc:function(oe,j,ye){(Q!==oe||Se!==j||se!==ye)&&(s.stencilFunc(oe,j,ye),Q=oe,Se=j,se=ye)},setOp:function(oe,j,ye){(N!==oe||ae!==j||z!==ye)&&(s.stencilOp(oe,j,ye),N=oe,ae=j,z=ye)},setLocked:function(oe){O=oe},setClear:function(oe){ne!==oe&&(s.clearStencil(oe),ne=oe)},reset:function(){O=!1,Ee=null,Q=null,Se=null,se=null,N=null,ae=null,z=null,ne=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,M=null,b=null,E=null,C=null,F=new mt(0,0,0),x=0,D=!1,X=null,G=null,L=null,H=null,U=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,I=0;const R=s.getParameter(s.VERSION);R.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(R)[1]),q=I>=1):R.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),q=I>=2);let ie=null,le={};const Z=s.getParameter(s.SCISSOR_BOX),P=s.getParameter(s.VIEWPORT),B=new sn().fromArray(Z),te=new sn().fromArray(P);function ue(O,Ee,Q,Se){const se=new Uint8Array(4),N=s.createTexture();s.bindTexture(O,N),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<Q;ae++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ee,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(Ee+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return N}const ce={};ce[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(s.DEPTH_TEST),l.setFunc(fc),Pe(!1),Xe(pg),me(s.CULL_FACE),Le(Qi);function me(O){d[O]!==!0&&(s.enable(O),d[O]=!0)}function Ce(O){d[O]!==!1&&(s.disable(O),d[O]=!1)}function ve(O,Ee){return u[O]!==Ee?(s.bindFramebuffer(O,Ee),u[O]=Ee,n&&(O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ee),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function V(O,Ee){let Q=_,Se=!1;if(O){Q=g.get(Ee),Q===void 0&&(Q=[],g.set(Ee,Q));const se=O.textures;if(Q.length!==se.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let N=0,ae=se.length;N<ae;N++)Q[N]=s.COLOR_ATTACHMENT0+N;Q.length=se.length,Se=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,Se=!0);if(Se)if(t.isWebGL2)s.drawBuffers(Q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function De(O){return p!==O?(s.useProgram(O),p=O,!0):!1}const ge={[Ss]:s.FUNC_ADD,[PS]:s.FUNC_SUBTRACT,[LS]:s.FUNC_REVERSE_SUBTRACT};if(n)ge[vg]=s.MIN,ge[xg]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ge[vg]=O.MIN_EXT,ge[xg]=O.MAX_EXT)}const Me={[FS]:s.ZERO,[NS]:s.ONE,[IS]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[HS]:s.SRC_ALPHA_SATURATE,[kS]:s.DST_COLOR,[OS]:s.DST_ALPHA,[US]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[zS]:s.ONE_MINUS_DST_COLOR,[BS]:s.ONE_MINUS_DST_ALPHA,[GS]:s.CONSTANT_COLOR,[VS]:s.ONE_MINUS_CONSTANT_COLOR,[WS]:s.CONSTANT_ALPHA,[XS]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(O,Ee,Q,Se,se,N,ae,z,ne,oe){if(O===Qi){m===!0&&(Ce(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),O!==RS){if(O!==S||oe!==D){if((v!==Ss||b!==Ss)&&(s.blendEquation(s.FUNC_ADD),v=Ss,b=Ss),oe)switch(O){case po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFunc(s.ONE,s.ONE);break;case gg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _g:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _g:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,E=null,C=null,F.set(0,0,0),x=0,S=O,D=oe}return}se=se||Ee,N=N||Q,ae=ae||Se,(Ee!==v||se!==b)&&(s.blendEquationSeparate(ge[Ee],ge[se]),v=Ee,b=se),(Q!==y||Se!==M||N!==E||ae!==C)&&(s.blendFuncSeparate(Me[Q],Me[Se],Me[N],Me[ae]),y=Q,M=Se,E=N,C=ae),(z.equals(F)===!1||ne!==x)&&(s.blendColor(z.r,z.g,z.b,ne),F.copy(z),x=ne),S=O,D=!1}function W(O,Ee){O.side===ji?Ce(s.CULL_FACE):me(s.CULL_FACE);let Q=O.side===On;Ee&&(Q=!Q),Pe(Q),O.blending===po&&O.transparent===!1?Le(Qi):Le(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),A(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){X!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),X=O)}function Xe(O){O!==DS?(me(s.CULL_FACE),O!==G&&(O===pg?s.cullFace(s.BACK):O===AS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),G=O}function ot(O){O!==L&&(q&&s.lineWidth(O),L=O)}function A(O,Ee,Q){O?(me(s.POLYGON_OFFSET_FILL),(H!==Ee||U!==Q)&&(s.polygonOffset(Ee,Q),H=Ee,U=Q)):Ce(s.POLYGON_OFFSET_FILL)}function T(O){O?me(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function re(O){O===void 0&&(O=s.TEXTURE0+k-1),ie!==O&&(s.activeTexture(O),ie=O)}function he(O,Ee,Q){Q===void 0&&(ie===null?Q=s.TEXTURE0+k-1:Q=ie);let Se=le[Q];Se===void 0&&(Se={type:void 0,texture:void 0},le[Q]=Se),(Se.type!==O||Se.texture!==Ee)&&(ie!==Q&&(s.activeTexture(Q),ie=Q),s.bindTexture(O,Ee||ce[O]),Se.type=O,Se.texture=Ee)}function de(){const O=le[ie];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){B.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),B.copy(O))}function Oe(O){te.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),te.copy(O))}function Ke(O,Ee){let Q=f.get(Ee);Q===void 0&&(Q=new WeakMap,f.set(Ee,Q));let Se=Q.get(O);Se===void 0&&(Se=s.getUniformBlockIndex(Ee,O.name),Q.set(O,Se))}function Te(O,Ee){const Se=f.get(Ee).get(O);h.get(Ee)!==Se&&(s.uniformBlockBinding(Ee,Se,O.__bindingPointIndex),h.set(Ee,Se))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ie=null,le={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,M=null,b=null,E=null,C=null,F=new mt(0,0,0),x=0,D=!1,X=null,G=null,L=null,H=null,U=null,B.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Ce,bindFramebuffer:ve,drawBuffers:V,useProgram:De,setBlending:Le,setMaterial:W,setFlipSided:Pe,setCullFace:Xe,setLineWidth:ot,setPolygonOffset:A,setScissorTest:T,activeTexture:re,bindTexture:he,unbindTexture:de,compressedTexImage2D:fe,compressedTexImage3D:Ne,texImage2D:qe,texImage3D:ke,updateUBOMapping:Ke,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:vt,texSubImage2D:He,texSubImage3D:xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ze,scissor:Ie,viewport:Oe,reset:at}}function Gw(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Fe,f=new WeakMap;let d;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,T){return g?new OffscreenCanvas(A,T):yc("canvas")}function p(A,T,re,he){let de=1;const fe=ot(A);if((fe.width>he||fe.height>he)&&(de=he/Math.max(fe.width,fe.height)),de<1||T===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const Ne=T?lf:Math.floor,He=Ne(de*fe.width),xe=Ne(de*fe.height);d===void 0&&(d=_(He,xe));const be=re?_(He,xe):d;return be.width=He,be.height=xe,be.getContext("2d").drawImage(A,0,0,He,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+He+"x"+xe+")."),be}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),A;return A}function m(A){const T=ot(A);return a_(T.width)&&a_(T.height)}function S(A){return a?!1:A.wrapS!==pi||A.wrapT!==pi||A.minFilter!==wn&&A.minFilter!==Bn}function v(A,T){return A.generateMipmaps&&T&&A.minFilter!==wn&&A.minFilter!==Bn}function y(A){s.generateMipmap(A)}function M(A,T,re,he,de=!1){if(a===!1)return T;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=T;if(T===s.RED&&(re===s.FLOAT&&(fe=s.R32F),re===s.HALF_FLOAT&&(fe=s.R16F),re===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(fe=s.R8UI),re===s.UNSIGNED_SHORT&&(fe=s.R16UI),re===s.UNSIGNED_INT&&(fe=s.R32UI),re===s.BYTE&&(fe=s.R8I),re===s.SHORT&&(fe=s.R16I),re===s.INT&&(fe=s.R32I)),T===s.RG&&(re===s.FLOAT&&(fe=s.RG32F),re===s.HALF_FLOAT&&(fe=s.RG16F),re===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(fe=s.RG8UI),re===s.UNSIGNED_SHORT&&(fe=s.RG16UI),re===s.UNSIGNED_INT&&(fe=s.RG32UI),re===s.BYTE&&(fe=s.RG8I),re===s.SHORT&&(fe=s.RG16I),re===s.INT&&(fe=s.RG32I)),T===s.RGBA){const Ne=de?mc:_t.getTransfer(he);re===s.FLOAT&&(fe=s.RGBA32F),re===s.HALF_FLOAT&&(fe=s.RGBA16F),re===s.UNSIGNED_BYTE&&(fe=Ne===Tt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(A,T,re){return v(A,re)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function E(A){return A===wn||A===Tg||A===Ba?s.NEAREST:s.LINEAR}function C(A){const T=A.target;T.removeEventListener("dispose",C),x(T),T.isVideoTexture&&f.delete(T)}function F(A){const T=A.target;T.removeEventListener("dispose",F),X(T)}function x(A){const T=n.get(A);if(T.__webglInit===void 0)return;const re=A.source,he=u.get(re);if(he){const de=he[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(A),Object.keys(he).length===0&&u.delete(re)}n.remove(A)}function D(A){const T=n.get(A);s.deleteTexture(T.__webglTexture);const re=A.source,he=u.get(re);delete he[T.__cacheKey],o.memory.textures--}function X(A){const T=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let de=0;de<T.__webglFramebuffer[he].length;de++)s.deleteFramebuffer(T.__webglFramebuffer[he][de]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=A.textures;for(let he=0,de=re.length;he<de;he++){const fe=n.get(re[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(re[he])}n.remove(A)}let G=0;function L(){G=0}function H(){const A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function U(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function k(A,T){const re=n.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&re.__version!==A.version){const he=A.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(re,A,T);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function q(A,T){const re=n.get(A);if(A.version>0&&re.__version!==A.version){te(re,A,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function I(A,T){const re=n.get(A);if(A.version>0&&re.__version!==A.version){te(re,A,T);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function R(A,T){const re=n.get(A);if(A.version>0&&re.__version!==A.version){ue(re,A,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const ie={[qh]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},le={[wn]:s.NEAREST,[Tg]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Kh]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},Z={[pE]:s.NEVER,[yE]:s.ALWAYS,[mE]:s.LESS,[r_]:s.LEQUAL,[gE]:s.EQUAL,[xE]:s.GEQUAL,[_E]:s.GREATER,[vE]:s.NOTEQUAL};function P(A,T,re){if(T.type===tr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Kh||T.magFilter===Ba||T.magFilter===Es||T.minFilter===Bn||T.minFilter===Kh||T.minFilter===Ba||T.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),re?(s.texParameteri(A,s.TEXTURE_WRAP_S,ie[T.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ie[T.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ie[T.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,le[T.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==pi||T.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,E(T.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==wn&&T.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Ba&&T.minFilter!==Es||T.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const he=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function B(A,T){let re=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",C));const he=T.source;let de=u.get(he);de===void 0&&(de={},u.set(he,de));const fe=U(T);if(fe!==A.__cacheKey){de[fe]===void 0&&(de[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,re=!0),de[fe].usedTimes++;const Ne=de[A.__cacheKey];Ne!==void 0&&(de[A.__cacheKey].usedTimes--,Ne.usedTimes===0&&D(T)),A.__cacheKey=fe,A.__webglTexture=de[fe].texture}return re}function te(A,T,re){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const de=B(A,T),fe=T.source;t.bindTexture(he,A.__webglTexture,s.TEXTURE0+re);const Ne=n.get(fe);if(fe.version!==Ne.__version||de===!0){t.activeTexture(s.TEXTURE0+re);const He=_t.getPrimaries(_t.workingColorSpace),xe=T.colorSpace===Ur?null:_t.getPrimaries(T.colorSpace),be=T.colorSpace===Ur||He===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ze=S(T)&&m(T.image)===!1;let _e=p(T.image,Ze,!1,i.maxTextureSize);_e=Xe(T,_e);const vt=m(_e)||a,qe=r.convert(T.format,T.colorSpace);let ke=r.convert(T.type),Ie=M(T.internalFormat,qe,ke,T.colorSpace,T.isVideoTexture);P(he,T,vt);let Oe;const Ke=T.mipmaps,Te=a&&T.isVideoTexture!==!0&&Ie!==Ig,at=Ne.__version===void 0||de===!0,O=fe.dataReady,Ee=b(T,_e,vt);if(T.isDepthTexture)Ie=s.DEPTH_COMPONENT,a?T.type===tr?Ie=s.DEPTH_COMPONENT32F:T.type===Ir?Ie=s.DEPTH_COMPONENT24:T.type===Ms?Ie=s.DEPTH24_STENCIL8:Ie=s.DEPTH_COMPONENT16:T.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ts&&Ie===s.DEPTH_COMPONENT&&T.type!==Jh&&T.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ir,ke=r.convert(T.type)),T.format===_o&&Ie===s.DEPTH_COMPONENT&&(Ie=s.DEPTH_STENCIL,T.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ms,ke=r.convert(T.type))),at&&(Te?t.texStorage2D(s.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ie,_e.width,_e.height,0,qe,ke,null));else if(T.isDataTexture)if(Ke.length>0&&vt){Te&&at&&t.texStorage2D(s.TEXTURE_2D,Ee,Ie,Ke[0].width,Ke[0].height);for(let Q=0,Se=Ke.length;Q<Se;Q++)Oe=Ke[Q],Te?O&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Oe.width,Oe.height,qe,ke,Oe.data):t.texImage2D(s.TEXTURE_2D,Q,Ie,Oe.width,Oe.height,0,qe,ke,Oe.data);T.generateMipmaps=!1}else Te?(at&&t.texStorage2D(s.TEXTURE_2D,Ee,Ie,_e.width,_e.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,qe,ke,_e.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,_e.width,_e.height,0,qe,ke,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Ie,Ke[0].width,Ke[0].height,_e.depth);for(let Q=0,Se=Ke.length;Q<Se;Q++)Oe=Ke[Q],T.format!==mi?qe!==null?Te?O&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Oe.width,Oe.height,_e.depth,qe,Oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ie,Oe.width,Oe.height,_e.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Oe.width,Oe.height,_e.depth,qe,ke,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ie,Oe.width,Oe.height,_e.depth,0,qe,ke,Oe.data)}else{Te&&at&&t.texStorage2D(s.TEXTURE_2D,Ee,Ie,Ke[0].width,Ke[0].height);for(let Q=0,Se=Ke.length;Q<Se;Q++)Oe=Ke[Q],T.format!==mi?qe!==null?Te?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Oe.width,Oe.height,qe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Ie,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?O&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Oe.width,Oe.height,qe,ke,Oe.data):t.texImage2D(s.TEXTURE_2D,Q,Ie,Oe.width,Oe.height,0,qe,ke,Oe.data)}else if(T.isDataArrayTexture)Te?(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Ie,_e.width,_e.height,_e.depth),O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,qe,ke,_e.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,qe,ke,_e.data);else if(T.isData3DTexture)Te?(at&&t.texStorage3D(s.TEXTURE_3D,Ee,Ie,_e.width,_e.height,_e.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,qe,ke,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,qe,ke,_e.data);else if(T.isFramebufferTexture){if(at)if(Te)t.texStorage2D(s.TEXTURE_2D,Ee,Ie,_e.width,_e.height);else{let Q=_e.width,Se=_e.height;for(let se=0;se<Ee;se++)t.texImage2D(s.TEXTURE_2D,se,Ie,Q,Se,0,qe,ke,null),Q>>=1,Se>>=1}}else if(Ke.length>0&&vt){if(Te&&at){const Q=ot(Ke[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Ie,Q.width,Q.height)}for(let Q=0,Se=Ke.length;Q<Se;Q++)Oe=Ke[Q],Te?O&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,qe,ke,Oe):t.texImage2D(s.TEXTURE_2D,Q,Ie,qe,ke,Oe);T.generateMipmaps=!1}else if(Te){if(at){const Q=ot(_e);t.texStorage2D(s.TEXTURE_2D,Ee,Ie,Q.width,Q.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,qe,ke,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ie,qe,ke,_e);v(T,vt)&&y(he),Ne.__version=fe.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function ue(A,T,re){if(T.image.length!==6)return;const he=B(A,T),de=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+re);const fe=n.get(de);if(de.version!==fe.__version||he===!0){t.activeTexture(s.TEXTURE0+re);const Ne=_t.getPrimaries(_t.workingColorSpace),He=T.colorSpace===Ur?null:_t.getPrimaries(T.colorSpace),xe=T.colorSpace===Ur||Ne===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=T.isCompressedTexture||T.image[0].isCompressedTexture,Ze=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!be&&!Ze?_e[Q]=p(T.image[Q],!1,!0,i.maxCubemapSize):_e[Q]=Ze?T.image[Q].image:T.image[Q],_e[Q]=Xe(T,_e[Q]);const vt=_e[0],qe=m(vt)||a,ke=r.convert(T.format,T.colorSpace),Ie=r.convert(T.type),Oe=M(T.internalFormat,ke,Ie,T.colorSpace),Ke=a&&T.isVideoTexture!==!0,Te=fe.__version===void 0||he===!0,at=de.dataReady;let O=b(T,vt,qe);P(s.TEXTURE_CUBE_MAP,T,qe);let Ee;if(be){Ke&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Oe,vt.width,vt.height);for(let Q=0;Q<6;Q++){Ee=_e[Q].mipmaps;for(let Se=0;Se<Ee.length;Se++){const se=Ee[Se];T.format!==mi?ke!==null?Ke?at&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?at&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,se.width,se.height,ke,Ie,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Oe,se.width,se.height,0,ke,Ie,se.data)}}}else{if(Ee=T.mipmaps,Ke&&Te){Ee.length>0&&O++;const Q=ot(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ze){Ke?at&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,ke,Ie,_e[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,_e[Q].width,_e[Q].height,0,ke,Ie,_e[Q].data);for(let Se=0;Se<Ee.length;Se++){const N=Ee[Se].image[Q].image;Ke?at&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,N.width,N.height,ke,Ie,N.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Oe,N.width,N.height,0,ke,Ie,N.data)}}else{Ke?at&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,Ie,_e[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,ke,Ie,_e[Q]);for(let Se=0;Se<Ee.length;Se++){const se=Ee[Se];Ke?at&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,ke,Ie,se.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Oe,ke,Ie,se.image[Q])}}}v(T,qe)&&y(s.TEXTURE_CUBE_MAP),fe.__version=de.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function ce(A,T,re,he,de,fe){const Ne=r.convert(re.format,re.colorSpace),He=r.convert(re.type),xe=M(re.internalFormat,Ne,He,re.colorSpace);if(!n.get(T).__hasExternalTextures){const Ze=Math.max(1,T.width>>fe),_e=Math.max(1,T.height>>fe);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,fe,xe,Ze,_e,T.depth,0,Ne,He,null):t.texImage2D(de,fe,xe,Ze,_e,0,Ne,He,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),W(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,de,n.get(re).__webglTexture,0,Le(T)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,de,n.get(re).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(A,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let he=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(re||W(T)){const de=T.depthTexture;de&&de.isDepthTexture&&(de.type===tr?he=s.DEPTH_COMPONENT32F:de.type===Ir&&(he=s.DEPTH_COMPONENT24));const fe=Le(T);W(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,he,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,he,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){const he=Le(T);re&&W(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,T.width,T.height):W(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const he=T.textures;for(let de=0;de<he.length;de++){const fe=he[de],Ne=r.convert(fe.format,fe.colorSpace),He=r.convert(fe.type),xe=M(fe.internalFormat,Ne,He,fe.colorSpace),be=Le(T);re&&W(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,xe,T.width,T.height):W(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const he=n.get(T.depthTexture).__webglTexture,de=Le(T);if(T.depthTexture.format===Ts)W(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(T.depthTexture.format===_o)W(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ve(A){const T=n.get(A),re=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,A)}else if(re){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]=s.createRenderbuffer(),me(T.__webglDepthbuffer[he],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),me(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(A,T,re){const he=n.get(A);T!==void 0&&ce(he.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&ve(A)}function De(A){const T=A.texture,re=n.get(A),he=n.get(T);A.addEventListener("dispose",F);const de=A.textures,fe=A.isWebGLCubeRenderTarget===!0,Ne=de.length>1,He=m(A)||a;if(Ne||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,o.memory.textures++),fe){re.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[xe]=[];for(let be=0;be<T.mipmaps.length;be++)re.__webglFramebuffer[xe][be]=s.createFramebuffer()}else re.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)re.__webglFramebuffer[xe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ne)if(i.drawBuffers)for(let xe=0,be=de.length;xe<be;xe++){const Ze=n.get(de[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&W(A)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const be=de[xe];re.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const Ze=r.convert(be.format,be.colorSpace),_e=r.convert(be.type),vt=M(be.internalFormat,Ze,_e,be.colorSpace,A.isXRRenderTarget===!0),qe=Le(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,re.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),me(re.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),P(s.TEXTURE_CUBE_MAP,T,He);for(let xe=0;xe<6;xe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ce(re.__webglFramebuffer[xe][be],A,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else ce(re.__webglFramebuffer[xe],A,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(T,He)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let xe=0,be=de.length;xe<be;xe++){const Ze=de[xe],_e=n.get(Ze);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),P(s.TEXTURE_2D,Ze,He),ce(re.__webglFramebuffer,A,Ze,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),v(Ze,He)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?xe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,he.__webglTexture),P(xe,T,He),a&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ce(re.__webglFramebuffer[be],A,T,s.COLOR_ATTACHMENT0,xe,be);else ce(re.__webglFramebuffer,A,T,s.COLOR_ATTACHMENT0,xe,0);v(T,He)&&y(xe),t.unbindTexture()}A.depthBuffer&&ve(A)}function ge(A){const T=m(A)||a,re=A.textures;for(let he=0,de=re.length;he<de;he++){const fe=re[he];if(v(fe,T)){const Ne=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,He=n.get(fe).__webglTexture;t.bindTexture(Ne,He),y(Ne),t.unbindTexture()}}}function Me(A){if(a&&A.samples>0&&W(A)===!1){const T=A.textures,re=A.width,he=A.height;let de=s.COLOR_BUFFER_BIT;const fe=[],Ne=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(A),xe=T.length>1;if(xe)for(let be=0;be<T.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<T.length;be++){fe.push(s.COLOR_ATTACHMENT0+be),A.depthBuffer&&fe.push(Ne);const Ze=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Ze===!1&&(A.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ne]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ne])),xe){const _e=n.get(T[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,re,he,0,0,re,he,de,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<T.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Ze=n.get(T[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(i.maxSamples,A.samples)}function W(A){const T=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pe(A){const T=o.render.frame;f.get(A)!==T&&(f.set(A,T),A.update())}function Xe(A,T){const re=A.colorSpace,he=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===sf||re!==Or&&re!==Ur&&(_t.getTransfer(re)===Tt?a===!1?e.has("EXT_sRGB")===!0&&he===mi?(A.format=sf,A.minFilter=Bn,A.generateMipmaps=!1):T=f_.sRGBToLinear(T):(he!==mi||de!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),T}function ot(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=I,this.setTextureCube=R,this.rebindTextures=V,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=W}function Vw(s,e,t){const n=t.isWebGL2;function i(r,o=Ur){let a;const l=_t.getTransfer(o);if(r===Nr)return s.UNSIGNED_BYTE;if(r===wg)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dg)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nE)return s.BYTE;if(r===iE)return s.SHORT;if(r===Jh)return s.UNSIGNED_SHORT;if(r===bg)return s.INT;if(r===Ir)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===nr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rE)return s.ALPHA;if(r===mi)return s.RGBA;if(r===sE)return s.LUMINANCE;if(r===oE)return s.LUMINANCE_ALPHA;if(r===Ts)return s.DEPTH_COMPONENT;if(r===_o)return s.DEPTH_STENCIL;if(r===sf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===aE)return s.RED;if(r===Ag)return s.RED_INTEGER;if(r===lE)return s.RG;if(r===Cg)return s.RG_INTEGER;if(r===Rg)return s.RGBA_INTEGER;if(r===jh||r===Qh||r===ef||r===tf)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ef)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pg||r===Lg||r===Fg||r===Ng)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Pg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ng)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ig)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ug||r===Og)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ug)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Og)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bg||r===kg||r===zg||r===Hg||r===Gg||r===Vg||r===Wg||r===Xg||r===$g||r===Yg||r===qg||r===Zg||r===Kg||r===Jg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Bg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$g)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jg)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nf||r===jg||r===Qg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===nf)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cE||r===e_||r===t_||r===n_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===nf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===e_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===t_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===n_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ms?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ww extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xw={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yw=`
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

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new An({extensions:{fragDepth:!0},vertexShader:$w,fragmentShader:Yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new Hc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Zw extends xo{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new qw,p=t.getContextAttributes();let m=null,S=null;const v=[],y=[],M=new Fe;let b=null;const E=new li;E.layers.enable(1),E.viewport=new sn;const C=new li;C.layers.enable(2),C.viewport=new sn;const F=[E,C],x=new Ww;x.layers.enable(1),x.layers.enable(2);let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let B=v[P];return B===void 0&&(B=new Uf,v[P]=B),B.getTargetRaySpace()},this.getControllerGrip=function(P){let B=v[P];return B===void 0&&(B=new Uf,v[P]=B),B.getGripSpace()},this.getHand=function(P){let B=v[P];return B===void 0&&(B=new Uf,v[P]=B),B.getHandSpace()};function G(P){const B=y.indexOf(P.inputSource);if(B===-1)return;const te=v[B];te!==void 0&&(te.update(P.inputSource,P.frame,c||o),te.dispatchEvent({type:P.type,data:P.inputSource}))}function L(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",H);for(let P=0;P<v.length;P++){const B=y[P];B!==null&&(y[P]=null,v[P].disconnect(B))}D=null,X=null,_.reset(),e.setRenderTarget(m),u=null,d=null,f=null,i=null,S=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",L),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new gi(u.framebufferWidth,u.framebufferHeight,{format:mi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let B=null,te=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=p.stencil?_o:Ts,te=p.stencil?Ms:Ir);const ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:mi,type:Nr,depthTexture:new q_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(S);me.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(P){for(let B=0;B<P.removed.length;B++){const te=P.removed[B],ue=y.indexOf(te);ue>=0&&(y[ue]=null,v[ue].disconnect(te))}for(let B=0;B<P.added.length;B++){const te=P.added[B];let ue=y.indexOf(te);if(ue===-1){for(let me=0;me<v.length;me++)if(me>=y.length){y.push(te),ue=me;break}else if(y[me]===null){y[me]=te,ue=me;break}if(ue===-1)break}const ce=v[ue];ce&&ce.connect(te)}}const U=new Y,k=new Y;function q(P,B,te){U.setFromMatrixPosition(B.matrixWorld),k.setFromMatrixPosition(te.matrixWorld);const ue=U.distanceTo(k),ce=B.projectionMatrix.elements,me=te.projectionMatrix.elements,Ce=ce[14]/(ce[10]-1),ve=ce[14]/(ce[10]+1),V=(ce[9]+1)/ce[5],De=(ce[9]-1)/ce[5],ge=(ce[8]-1)/ce[0],Me=(me[8]+1)/me[0],Le=Ce*ge,W=Ce*Me,Pe=ue/(-ge+Me),Xe=Pe*-ge;B.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Xe),P.translateZ(Pe),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const ot=Ce+Pe,A=ve+Pe,T=Le-Xe,re=W+(ue-Xe),he=V*ve/A*ot,de=De*ve/A*ot;P.projectionMatrix.makePerspective(T,re,he,de,ot,A),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function I(P,B){B===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(B.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;_.texture!==null&&(P.near=_.depthNear,P.far=_.depthFar),x.near=C.near=E.near=P.near,x.far=C.far=E.far=P.far,(D!==x.near||X!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,X=x.far,E.near=D,E.far=X,C.near=D,C.far=X,E.updateProjectionMatrix(),C.updateProjectionMatrix(),P.updateProjectionMatrix());const B=P.parent,te=x.cameras;I(x,B);for(let ue=0;ue<te.length;ue++)I(te[ue],B);te.length===2?q(x,E,C):x.projectionMatrix.copy(E.projectionMatrix),R(P,x,B)};function R(P,B,te){te===null?P.matrix.copy(B.matrixWorld):(P.matrix.copy(te.matrixWorld),P.matrix.invert(),P.matrix.multiply(B.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(B.projectionMatrix),P.projectionMatrixInverse.copy(B.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=of*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=P)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function le(P,B){if(h=B.getViewerPose(c||o),g=B,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let ue=!1;te.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let me=0;me<te.length;me++){const Ce=te[me];let ve=null;if(u!==null)ve=u.getViewport(Ce);else{const De=f.getViewSubImage(d,Ce);ve=De.viewport,me===0&&(e.setRenderTargetTextures(S,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(S))}let V=F[me];V===void 0&&(V=new li,V.layers.enable(me),V.viewport=new sn,F[me]=V),V.matrix.fromArray(Ce.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Ce.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(x.matrix.copy(V.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(V)}const ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const me=f.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let te=0;te<v.length;te++){const ue=y[te],ce=v[te];ue!==null&&ce!==void 0&&ce.update(ue,B,c||o)}_.render(e,x),ie&&ie(P,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const Z=new k_;Z.setAnimationLoop(le),this.setAnimationLoop=function(P){ie=P},this.dispose=function(){}}}const Ns=new or,Kw=new Bt;function Jw(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,F_(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===On&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===On&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,y=S.envMapRotation;if(v&&(p.envMap.value=v,Ns.copy(y),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(Ns)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jw(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(S,M);const b=e.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){const v=f();S.__bindingPointIndex=v;const y=s.createBuffer(),M=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],y=S.uniforms,M=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let F=0,x=C.length;F<x;F++){const D=C[F];if(u(D,b,F,M)===!0){const X=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let H=0;H<G.length;H++){const U=G[H],k=_(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,X+L,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,v,y,M){const b=S.value,E=v+"_"+y;if(M[E]===void 0)return typeof b=="number"||typeof b=="boolean"?M[E]=b:M[E]=b.clone(),!0;{const C=M[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return M[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){const v=S.uniforms;let y=0;const M=16;for(let E=0,C=v.length;E<C;E++){const F=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,D=F.length;x<D;x++){const X=F[x],G=Array.isArray(X.value)?X.value:[X.value];for(let L=0,H=G.length;L<H;L++){const U=G[L],k=_(U),q=y%M;q!==0&&M-q<k.boundary&&(y+=M-q),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=k.storage}}}const b=y%M;return b>0&&(y+=M-b),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class m0{constructor(e={}){const{canvas:t=EE(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const v=this;let y=!1,M=0,b=0,E=null,C=-1,F=null;const x=new sn,D=new sn;let X=null;const G=new mt(0);let L=0,H=t.width,U=t.height,k=1,q=null,I=null;const R=new sn(0,0,H,U),ie=new sn(0,0,H,U);let le=!1;const Z=new B_;let P=!1,B=!1,te=null;const ue=new Bt,ce=new Fe,me=new Y,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?k:1}let V=n;function De(w,$){for(let J=0;J<w.length;J++){const ee=w[J],K=t.getContext(ee,$);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),V=De($,w),V===null)throw De($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Me,Le,W,Pe,Xe,ot,A,T,re,he,de,fe,Ne,He,xe,be,Ze,_e,vt,qe,ke,Ie,Oe;function Ke(){ge=new rb(V),Me=new jT(V,ge,e),ge.init(Me),ke=new Vw(V,ge,Me),Le=new Hw(V,ge,Me),W=new ab(V),Pe=new Dw,Xe=new Gw(V,ge,Le,Pe,Me,ke,W),ot=new eb(v),A=new ib(v),T=new YE(V,Me),Ie=new KT(V,ge,T,Me),re=new sb(V,T,W,Ie),he=new hb(V,re,T,W),_e=new ub(V,Me,Xe),xe=new QT(Pe),de=new ww(v,ot,A,ge,Me,Ie,xe),fe=new Jw(v,Pe),Ne=new Cw,He=new Iw(ge,Me),Ze=new ZT(v,ot,A,Le,he,d,l),be=new zw(v,he,Me),Oe=new jw(V,W,Me,Le),vt=new JT(V,ge,W,Me),qe=new ob(V,ge,W,Me),W.programs=de.programs,v.capabilities=Me,v.extensions=ge,v.properties=Pe,v.renderLists=Ne,v.shadowMap=be,v.state=Le,v.info=W}Ke();const Te=new Zw(v,V);this.xr=Te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(H,U,!1))},this.getSize=function(w){return w.set(H,U)},this.setSize=function(w,$,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,U=$,t.width=Math.floor(w*k),t.height=Math.floor($*k),J===!0&&(t.style.width=w+"px",t.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(H*k,U*k).floor()},this.setDrawingBufferSize=function(w,$,J){H=w,U=$,k=J,t.width=Math.floor(w*J),t.height=Math.floor($*J),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,$,J,ee){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,$,J,ee),Le.viewport(x.copy(R).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,$,J,ee){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,$,J,ee),Le.scissor(D.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){Le.setScissorTest(le=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,$=!0,J=!0){let ee=0;if(w){let K=!1;if(E!==null){const we=E.texture.format;K=we===Rg||we===Cg||we===Ag}if(K){const we=E.texture.type,ze=we===Nr||we===Ir||we===Jh||we===Ms||we===wg||we===Dg,$e=Ze.getClearColor(),Ge=Ze.getClearAlpha(),Ve=$e.r,Ye=$e.g,Qe=$e.b;ze?(u[0]=Ve,u[1]=Ye,u[2]=Qe,u[3]=Ge,V.clearBufferuiv(V.COLOR,0,u)):(g[0]=Ve,g[1]=Ye,g[2]=Qe,g[3]=Ge,V.clearBufferiv(V.COLOR,0,g))}else ee|=V.COLOR_BUFFER_BIT}$&&(ee|=V.DEPTH_BUFFER_BIT),J&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ne.dispose(),He.dispose(),Pe.dispose(),ot.dispose(),A.dispose(),he.dispose(),Ie.dispose(),Oe.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ne),Te.removeEventListener("sessionend",oe),te&&(te.dispose(),te=null),j.stop()};function at(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=W.autoReset,$=be.enabled,J=be.autoUpdate,ee=be.needsUpdate,K=be.type;Ke(),W.autoReset=w,be.enabled=$,be.autoUpdate=J,be.needsUpdate=ee,be.type=K}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Q(w){const $=w.target;$.removeEventListener("dispose",Q),Se($)}function Se(w){se(w),Pe.remove(w)}function se(w){const $=Pe.get(w).programs;$!==void 0&&($.forEach(function(J){de.releaseProgram(J)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,J,ee,K,we){$===null&&($=Ce);const ze=K.isMesh&&K.matrixWorld.determinant()<0,$e=rt(w,$,J,ee,K);Le.setMaterial(ee,ze);let Ge=J.index,Ve=1;if(ee.wireframe===!0){if(Ge=re.getWireframeAttribute(J),Ge===void 0)return;Ve=2}const Ye=J.drawRange,Qe=J.attributes.position;let At=Ye.start*Ve,Kt=(Ye.start+Ye.count)*Ve;we!==null&&(At=Math.max(At,we.start*Ve),Kt=Math.min(Kt,(we.start+we.count)*Ve)),Ge!==null?(At=Math.max(At,0),Kt=Math.min(Kt,Ge.count)):Qe!=null&&(At=Math.max(At,0),Kt=Math.min(Kt,Qe.count));const xt=Kt-At;if(xt<0||xt===1/0)return;Ie.setup(K,ee,$e,J,Ge);let Rn,yt=vt;if(Ge!==null&&(Rn=T.get(Ge),yt=qe,yt.setIndex(Rn)),K.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*ve()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(K.isLine){let je=ee.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*ve()),K.isLineSegments?yt.setMode(V.LINES):K.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else K.isPoints?yt.setMode(V.POINTS):K.isSprite&&yt.setMode(V.TRIANGLES);if(K.isBatchedMesh)yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)yt.renderInstances(At,xt,K.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Vd=Math.min(J.instanceCount,je);yt.renderInstances(At,xt,Vd)}else yt.render(At,xt)};function N(w,$,J){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,Je(w,$,J),w.side=Fr,w.needsUpdate=!0,Je(w,$,J),w.side=ji):Je(w,$,J)}this.compile=function(w,$,J=null){J===null&&(J=w),p=He.get(J),p.init(),S.push(p),J.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),w!==J&&w.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(v._useLegacyLights);const ee=new Set;return w.traverse(function(K){const we=K.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const $e=we[ze];N($e,J,K),ee.add($e)}else N(we,J,K),ee.add(we)}),S.pop(),p=null,ee},this.compileAsync=function(w,$,J=null){const ee=this.compile(w,$,J);return new Promise(K=>{function we(){if(ee.forEach(function(ze){Pe.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){K(w);return}setTimeout(we,10)}ge.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ae=null;function z(w){ae&&ae(w)}function ne(){j.stop()}function oe(){j.start()}const j=new k_;j.setAnimationLoop(z),typeof self!="undefined"&&j.setContext(self),this.setAnimationLoop=function(w){ae=w,Te.setAnimationLoop(w),w===null?j.stop():j.start()},Te.addEventListener("sessionstart",ne),Te.addEventListener("sessionend",oe),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,$,E),p=He.get(w,S.length),p.init(),S.push(p),ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z.setFromProjectionMatrix(ue),B=this.localClippingEnabled,P=xe.init(this.clippingPlanes,B),_=Ne.get(w,m.length),_.init(),m.push(_),ye(w,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,I),this.info.render.frame++,P===!0&&xe.beginShadows();const J=p.state.shadowsArray;if(be.render(J,w,$),P===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&Ze.render(_,w),p.setupLights(v._useLegacyLights),$.isArrayCamera){const ee=$.cameras;for(let K=0,we=ee.length;K<we;K++){const ze=ee[K];pe(_,w,ze,ze.viewport)}}else pe(_,w,$);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,$),Ie.resetDefaultState(),C=-1,F=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ye(w,$,J,ee){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){ee&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const ze=he.update(w),$e=w.material;$e.visible&&_.push(w,ze,$e,J,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const ze=he.update(w),$e=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray($e)){const Ge=ze.groups;for(let Ve=0,Ye=Ge.length;Ve<Ye;Ve++){const Qe=Ge[Ve],At=$e[Qe.materialIndex];At&&At.visible&&_.push(w,ze,At,J,me.z,Qe)}}else $e.visible&&_.push(w,ze,$e,J,me.z,null)}}const we=w.children;for(let ze=0,$e=we.length;ze<$e;ze++)ye(we[ze],$,J,ee)}function pe(w,$,J,ee){const K=w.opaque,we=w.transmissive,ze=w.transparent;p.setupLightsView(J),P===!0&&xe.setGlobalState(v.clippingPlanes,J),we.length>0&&Re(K,we,$,J),ee&&Le.viewport(x.copy(ee)),K.length>0&&We(K,$,J),we.length>0&&We(we,$,J),ze.length>0&&We(ze,$,J),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Re(w,$,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const we=Me.isWebGL2;te===null&&(te=new gi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?nr:Nr,minFilter:Es,samples:we?4:0})),v.getDrawingBufferSize(ce),we?te.setSize(ce.x,ce.y):te.setSize(lf(ce.x),lf(ce.y));const ze=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(G),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const $e=v.toneMapping;v.toneMapping=er,We(w,J,ee),Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te);let Ge=!1;for(let Ve=0,Ye=$.length;Ve<Ye;Ve++){const Qe=$[Ve],At=Qe.object,Kt=Qe.geometry,xt=Qe.material,Rn=Qe.group;if(xt.side===ji&&At.layers.test(ee.layers)){const yt=xt.side;xt.side=On,xt.needsUpdate=!0,Ue(At,J,ee,Kt,xt,Rn),xt.side=yt,xt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),v.setRenderTarget(ze),v.setClearColor(G,L),v.toneMapping=$e}function We(w,$,J){const ee=$.isScene===!0?$.overrideMaterial:null;for(let K=0,we=w.length;K<we;K++){const ze=w[K],$e=ze.object,Ge=ze.geometry,Ve=ee===null?ze.material:ee,Ye=ze.group;$e.layers.test(J.layers)&&Ue($e,$,J,Ge,Ve,Ye)}}function Ue(w,$,J,ee,K,we){w.onBeforeRender(v,$,J,ee,K,we),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,$,J,ee,w,we),K.transparent===!0&&K.side===ji&&K.forceSinglePass===!1?(K.side=On,K.needsUpdate=!0,v.renderBufferDirect(J,$,ee,K,w,we),K.side=Fr,K.needsUpdate=!0,v.renderBufferDirect(J,$,ee,K,w,we),K.side=ji):v.renderBufferDirect(J,$,ee,K,w,we),w.onAfterRender(v,$,J,ee,K,we)}function Je(w,$,J){$.isScene!==!0&&($=Ce);const ee=Pe.get(w),K=p.state.lights,we=p.state.shadowsArray,ze=K.state.version,$e=de.getParameters(w,K.state,we,$,J),Ge=de.getProgramCacheKey($e);let Ve=ee.programs;ee.environment=w.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(w.isMeshStandardMaterial?A:ot).get(w.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Q),Ve=new Map,ee.programs=Ve);let Ye=Ve.get(Ge);if(Ye!==void 0){if(ee.currentProgram===Ye&&ee.lightsStateVersion===ze)return pt(w,$e),Ye}else $e.uniforms=de.getUniforms(w),w.onBuild(J,$e,v),w.onBeforeCompile($e,v),Ye=de.acquireProgram($e,Ge),Ve.set(Ge,Ye),ee.uniforms=$e.uniforms;const Qe=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),pt(w,$e),ee.needsLights=gt(w),ee.lightsStateVersion=ze,ee.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=Ye,ee.uniformsList=null,Ye}function ut(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Xc.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function pt(w,$){const J=Pe.get(w);J.outputColorSpace=$.outputColorSpace,J.batching=$.batching,J.instancing=$.instancing,J.instancingColor=$.instancingColor,J.instancingMorph=$.instancingMorph,J.skinning=$.skinning,J.morphTargets=$.morphTargets,J.morphNormals=$.morphNormals,J.morphColors=$.morphColors,J.morphTargetsCount=$.morphTargetsCount,J.numClippingPlanes=$.numClippingPlanes,J.numIntersection=$.numClipIntersection,J.vertexAlphas=$.vertexAlphas,J.vertexTangents=$.vertexTangents,J.toneMapping=$.toneMapping}function rt(w,$,J,ee,K){$.isScene!==!0&&($=Ce),Xe.resetTextureUnits();const we=$.fog,ze=ee.isMeshStandardMaterial?$.environment:null,$e=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Or,Ge=(ee.isMeshStandardMaterial?A:ot).get(ee.envMap||ze),Ve=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!J.morphAttributes.position,At=!!J.morphAttributes.normal,Kt=!!J.morphAttributes.color;let xt=er;ee.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xt=v.toneMapping);const Rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Rn!==void 0?Rn.length:0,je=Pe.get(ee),Vd=p.state.lights;if(P===!0&&(B===!0||w!==F)){const hi=w===F&&ee.id===C;xe.setState(ee,w,hi)}let Ct=!1;ee.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vd.state.version||je.outputColorSpace!==$e||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==Ge||ee.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Ye||je.morphTargets!==Qe||je.morphNormals!==At||je.morphColors!==Kt||je.toneMapping!==xt||Me.isWebGL2===!0&&je.morphTargetsCount!==yt)&&(Ct=!0):(Ct=!0,je.__version=ee.version);let Vs=je.currentProgram;Ct===!0&&(Vs=Je(ee,$,K));let lx=!1,Tl=!1,Wd=!1;const _n=Vs.getUniforms(),Ws=je.uniforms;if(Le.useProgram(Vs.program)&&(lx=!0,Tl=!0,Wd=!0),ee.id!==C&&(C=ee.id,Tl=!0),lx||F!==w){_n.setValue(V,"projectionMatrix",w.projectionMatrix),_n.setValue(V,"viewMatrix",w.matrixWorldInverse);const hi=_n.map.cameraPosition;hi!==void 0&&hi.setValue(V,me.setFromMatrixPosition(w.matrixWorld)),Me.logarithmicDepthBuffer&&_n.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&_n.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Tl=!0,Wd=!0)}if(K.isSkinnedMesh){_n.setOptional(V,K,"bindMatrix"),_n.setOptional(V,K,"bindMatrixInverse");const hi=K.skeleton;hi&&(Me.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),_n.setValue(V,"boneTexture",hi.boneTexture,Xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(_n.setOptional(V,K,"batchingTexture"),_n.setValue(V,"batchingTexture",K._matricesTexture,Xe));const Xd=J.morphAttributes;if((Xd.position!==void 0||Xd.normal!==void 0||Xd.color!==void 0&&Me.isWebGL2===!0)&&_e.update(K,J,Vs),(Tl||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,_n.setValue(V,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ws.envMap.value=Ge,Ws.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Tl&&(_n.setValue(V,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&lt(Ws,Wd),we&&ee.fog===!0&&fe.refreshFogUniforms(Ws,we),fe.refreshMaterialUniforms(Ws,ee,k,U,te),Xc.upload(V,ut(je),Ws,Xe)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Xc.upload(V,ut(je),Ws,Xe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&_n.setValue(V,"center",K.center),_n.setValue(V,"modelViewMatrix",K.modelViewMatrix),_n.setValue(V,"normalMatrix",K.normalMatrix),_n.setValue(V,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const hi=ee.uniformsGroups;for(let $d=0,rA=hi.length;$d<rA;$d++)if(Me.isWebGL2){const cx=hi[$d];Oe.update(cx,Vs),Oe.bind(cx,Vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vs}function lt(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function gt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,$,J){Pe.get(w.texture).__webglTexture=$,Pe.get(w.depthTexture).__webglTexture=J;const ee=Pe.get(w);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,$){const J=Pe.get(w);J.__webglFramebuffer=$,J.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,J=0){E=w,M=$,b=J;let ee=!0,K=null,we=!1,ze=!1;if(w){const Ge=Pe.get(w);Ge.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(V.FRAMEBUFFER,null),ee=!1):Ge.__webglFramebuffer===void 0?Xe.setupRenderTarget(w):Ge.__hasExternalTextures&&Xe.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const Ye=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?K=Ye[$][J]:K=Ye[$],we=!0):Me.isWebGL2&&w.samples>0&&Xe.useMultisampledRTT(w)===!1?K=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?K=Ye[J]:K=Ye,x.copy(w.viewport),D.copy(w.scissor),X=w.scissorTest}else x.copy(R).multiplyScalar(k).floor(),D.copy(ie).multiplyScalar(k).floor(),X=le;if(Le.bindFramebuffer(V.FRAMEBUFFER,K)&&Me.drawBuffers&&ee&&Le.drawBuffers(w,K),Le.viewport(x),Le.scissor(D),Le.setScissorTest(X),we){const Ge=Pe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ge.__webglTexture,J)}else if(ze){const Ge=Pe.get(w.texture),Ve=$||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,Ve)}C=-1},this.readRenderTargetPixels=function(w,$,J,ee,K,we,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&($e=$e[ze]),$e){Le.bindFramebuffer(V.FRAMEBUFFER,$e);try{const Ge=w.texture,Ve=Ge.format,Ye=Ge.type;if(Ve!==mi&&ke.convert(Ve)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ye===nr&&(ge.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ye!==Nr&&ke.convert(Ye)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===tr&&(Me.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ee&&J>=0&&J<=w.height-K&&V.readPixels($,J,ee,K,ke.convert(Ve),ke.convert(Ye),we)}finally{const Ge=E!==null?Pe.get(E).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(w,$,J=0){const ee=Math.pow(2,-J),K=Math.floor($.image.width*ee),we=Math.floor($.image.height*ee);Xe.setTexture2D($,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,w.x,w.y,K,we),Le.unbindTexture()},this.copyTextureToTexture=function(w,$,J,ee=0){const K=$.image.width,we=$.image.height,ze=ke.convert(J.format),$e=ke.convert(J.type);Xe.setTexture2D(J,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment),$.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ee,w.x,w.y,K,we,ze,$e,$.image.data):$.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ee,w.x,w.y,$.mipmaps[0].width,$.mipmaps[0].height,ze,$.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,ee,w.x,w.y,ze,$e,$.image),ee===0&&J.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,$,J,ee,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(w.max.x-w.min.x),ze=Math.round(w.max.y-w.min.y),$e=w.max.z-w.min.z+1,Ge=ke.convert(ee.format),Ve=ke.convert(ee.type);let Ye;if(ee.isData3DTexture)Xe.setTexture3D(ee,0),Ye=V.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)Xe.setTexture2DArray(ee,0),Ye=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ee.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ee.unpackAlignment);const Qe=V.getParameter(V.UNPACK_ROW_LENGTH),At=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Kt=V.getParameter(V.UNPACK_SKIP_PIXELS),xt=V.getParameter(V.UNPACK_SKIP_ROWS),Rn=V.getParameter(V.UNPACK_SKIP_IMAGES),yt=J.isCompressedTexture?J.mipmaps[K]:J.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,w.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,w.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,w.min.z),J.isDataTexture||J.isData3DTexture?V.texSubImage3D(Ye,K,$.x,$.y,$.z,we,ze,$e,Ge,Ve,yt.data):ee.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,K,$.x,$.y,$.z,we,ze,$e,Ge,yt.data):V.texSubImage3D(Ye,K,$.x,$.y,$.z,we,ze,$e,Ge,Ve,yt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,xt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Rn),K===0&&ee.generateMipmaps&&V.generateMipmap(Ye),Le.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){M=0,b=0,E=null,Le.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rf?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===pc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Qw extends m0{}Qw.prototype.isWebGL1Renderer=!0;class e1 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g0 extends Xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _0=new Y,v0=new Y,x0=new Bt,Of=new g_,$c=new bc;class t1 extends Hn{constructor(e=new jn,t=new g0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_0.fromBufferAttribute(t,i-1),v0.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_0.distanceTo(v0);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(i),$c.radius+=r,e.ray.intersectsSphere($c)===!1)return;x0.copy(i).invert(),Of.copy(e.ray).applyMatrix4(x0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,h=new Y,f=new Y,d=new Y,u=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){const M=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,M),h.fromBufferAttribute(p,b),Of.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Of.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Fe:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],r=[],o=[],a=new Y,l=new Bt;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pn(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(pn(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bf extends ki{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Fe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class n1 extends Bf{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Yc=new Y,zf=new kf,Hf=new kf,Gf=new kf;class i1 extends ki{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Yc.subVectors(i[0],i[1]).add(i[0]),c=Yc);const f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Yc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),zf.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Hf.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Gf.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(zf.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Hf.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Gf.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(zf.calc(l),Hf.calc(l),Gf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function y0(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function r1(s,e){const t=1-s;return t*t*e}function s1(s,e){return 2*(1-s)*s*e}function o1(s,e){return s*s*e}function Za(s,e,t,n){return r1(s,e)+s1(s,t)+o1(s,n)}function a1(s,e){const t=1-s;return t*t*t*e}function l1(s,e){const t=1-s;return 3*t*t*s*e}function c1(s,e){return 3*(1-s)*s*s*e}function u1(s,e){return s*s*s*e}function Ka(s,e,t,n,i){return a1(s,e)+l1(s,t)+c1(s,n)+u1(s,i)}class S0 extends ki{constructor(e=new Fe,t=new Fe,n=new Fe,i=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Fe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ka(e,i.x,r.x,o.x,a.x),Ka(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class h1 extends ki{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ka(e,i.x,r.x,o.x,a.x),Ka(e,i.y,r.y,o.y,a.y),Ka(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E0 extends ki{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f1 extends ki{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M0 extends ki{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(e,i.x,r.x,o.x),Za(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d1 extends ki{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(e,i.x,r.x,o.x),Za(e,i.y,r.y,o.y),Za(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(y0(a,l.x,c.x,h.x,f.x),y0(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Fe().fromArray(i))}return this}}var b0=Object.freeze({__proto__:null,ArcCurve:n1,CatmullRomCurve3:i1,CubicBezierCurve:S0,CubicBezierCurve3:h1,EllipseCurve:Bf,LineCurve:E0,LineCurve3:f1,QuadraticBezierCurve:M0,QuadraticBezierCurve3:d1,SplineCurve:T0});class p1 extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new b0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new b0[i.type]().fromJSON(i))}return this}}class w0 extends p1{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new E0(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new M0(this.currentPoint.clone(),new Fe(e,t),new Fe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new S0(this.currentPoint.clone(),new Fe(e,t),new Fe(n,i),new Fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new T0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Bf(e,t,n,i,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vf extends jn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new Y,h=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new on(o,3)),this.setAttribute("normal",new on(a,3)),this.setAttribute("uv",new on(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const qc=new Y,Zc=new Y,Wf=new Y,Kc=new yi;class m1 extends jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(xc*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Kc;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Kc.getNormal(Wf),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const v=(S+1)%3,y=f[S],M=f[v],b=Kc[h[S]],E=Kc[h[v]],C=`${y}_${M}`,F=`${M}_${y}`;F in d&&d[F]?(Wf.dot(d[F].normal)<=r&&(u.push(b.x,b.y,b.z),u.push(E.x,E.y,E.z)),d[F]=null):C in d||(d[C]={index0:c[S],index1:c[v],normal:Wf.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];qc.fromBufferAttribute(a,_),Zc.fromBufferAttribute(a,p),u.push(qc.x,qc.y,qc.z),u.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new on(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xf extends w0{constructor(e){super(e),this.uuid=yo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new w0().fromJSON(i))}return this}}const g1={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=D0(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,u;if(n&&(r=S1(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)f=s[g],d=s[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Ja(r,o,t,a,l,u,0),o}};function D0(s,e,t,n,i){let r,o;if(i===L1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=R0(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=R0(r,s[r],s[r+1],o);return o&&Jc(o,o.next)&&(Qa(o),o=o.next),o}function Is(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jc(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(s,e,t,n,i,r,o){if(!s)return;!o&&r&&w1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?v1(s,n,i,r):_1(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Qa(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=x1(Is(s),e,t),Ja(s,e,t,n,i,r,2)):o===2&&y1(s,e,t,n,i,r):Ja(Is(s),e,t,n,i,r,1);break}}}function _1(s){const e=s.prev,t=s,n=s.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Ho(i,a,r,l,o,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v1(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Nt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=$f(u,g,e,t,n),S=$f(_,p,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ho(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ho(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ho(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ho(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x1(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Jc(i,r)&&A0(i,n,n.next,r)&&ja(i,r)&&ja(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qa(n),Qa(n.next),n=s=r),n=n.next}while(n!==s);return Is(n)}function y1(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C1(o,a)){let l=C0(o,a);o=Is(o,o.next),l=Is(l,l.next),Ja(o,e,t,n,i,r,0),Ja(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function S1(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=D0(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(A1(c));for(i.sort(E1),r=0;r<i.length;r++)t=M1(i[r],t);return t}function E1(s,e){return s.x-e.x}function M1(s,e){const t=T1(s,e);if(!t)return e;const n=C0(t,s);return Is(n,n.next),Is(t,t.next)}function T1(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ho(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),ja(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&b1(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function b1(s,e){return Nt(s.prev,s,e.prev)<0&&Nt(e.next,s,s.next)<0}function w1(s,e,t,n){let i=s;do i.z===0&&(i.z=$f(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,D1(i)}function D1(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function $f(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function A1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ho(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function C1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!R1(s,e)&&(ja(s,e)&&ja(e,s)&&P1(s,e)&&(Nt(s.prev,s,e.prev)||Nt(s,e.prev,e))||Jc(s,e)&&Nt(s.prev,s,s.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jc(s,e){return s.x===e.x&&s.y===e.y}function A0(s,e,t,n){const i=Qc(Nt(s,e,t)),r=Qc(Nt(s,e,n)),o=Qc(Nt(t,n,s)),a=Qc(Nt(t,n,e));return!!(i!==r&&o!==a||i===0&&jc(s,t,e)||r===0&&jc(s,n,e)||o===0&&jc(t,s,n)||a===0&&jc(t,e,n))}function jc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qc(s){return s>0?1:s<0?-1:0}function R1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&A0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ja(s,e){return Nt(s.prev,s,s.next)<0?Nt(s,e,s.next)>=0&&Nt(s,s.prev,e)>=0:Nt(s,e,s.prev)<0||Nt(s,s.next,e)<0}function P1(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function C0(s,e){const t=new Yf(s.i,s.x,s.y),n=new Yf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function R0(s,e,t,n){const i=new Yf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class el{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return el.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];P0(e),L0(n,e);let o=e.length;t.forEach(P0);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,L0(n,t[l]);const a=g1.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function P0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function L0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class qf extends jn{constructor(e=new Xf([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new on(i,3)),this.setAttribute("normal",new on(r,3)),this.setAttribute("uv",new on(o,2));function c(h){const f=i.length/3,d=h.extractPoints(t);let u=d.shape;const g=d.holes;el.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];el.isClockWise(S)===!0&&(g[p]=S.reverse())}const _=el.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){const S=u[p];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=_.length;p<m;p++){const S=_[p],v=S[0]+f,y=S[1]+f,M=S[2]+f;n.push(v,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return F1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new qf(n,e.curveSegments)}}function F1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class N1 extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class I1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=F0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=F0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function F0(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);const N0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U1=new z_(-1,1,1,-1,0,1);class O1 extends jn{constructor(){super(),this.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new on([0,2,0,0,2,0],2))}}const B1=new O1;class Zf{constructor(e){this._mesh=new Oi(B1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class k1 extends Go{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qa.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class I0 extends Go{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class z1 extends Go{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class H1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new k1(N0),this.copyPass.material.blending=Qi,this.clock=new I1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}I0!==void 0&&(o instanceof I0?n=!0:o instanceof z1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class G1 extends Go{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const V1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vo extends Go{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(r,o,{type:nr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new gi(r,o,{type:nr});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new gi(r,o,{type:nr});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=V1;this.highPassUniforms=qa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=N0;this.copyUniforms=qa.clone(h.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:kh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new bf,this.fsQuad=new Zf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new An({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Vo.BlurDirectionX=new Fe(1,0),Vo.BlurDirectionY=new Fe(0,1);const W1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class X1 extends Go{constructor(){super();const e=W1;this.uniforms=qa.clone(e.uniforms),this.material=new N1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $1{constructor(e){this.container=e,this.mm=et.matchMedia(),this.numberOfLayers=50,this.layerDelay=40,this.layerSpacing=3,this.scene=null,this.renderer=null,this.animationRequestID=null,this.camera=null,this.cameraInitialZ=-60,this.cameraOffsetZ=-20,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.cameraZoomDelay=2.3,this.portalSquare=new Fs,this.portalHexagon=new Fs,this.portalCircle=new Fs,this.portalActive=this.portalHexagon,this.portalOffsetZ=0,this.portalOffsetZActive=-14.5,this.portalOffsetX=12,this.mm.add("(max-width: 991px)",()=>{this.portalOffsetX=8}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{this.portalOffsetX=10}),this.mm.add("(min-width: 1920px)",()=>{this.portalOffsetX=12}),this.portalOffsetXSquarePortal=this.portalOffsetX,this.portalOffsetXSHexagonPortal=0,this.portalOffsetXCirclePortal=-this.portalOffsetX,this.params={strength:.8,radius:.95,threshold:0},this.init(e)}init(e){this.scene=new e1,this.renderer=new m0({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight);const t={ACESFilmic:Xh,Cineon:Wh,Linear:Gh,None:er,Reinhard:Vh};this.renderer.toneMapping=t.Cineon;const n=this.renderer.domElement;n.style.width="100%",n.style.height="100%",n.style.position="absolute",e.appendChild(n),this.camera=new li(60,e.clientWidth/e.clientHeight,1,300),this.camera.position.set(0,0,this.cameraInitialZ),this.camera.lookAt(new Y(0,0,0)),this.scene.add(this.camera);const i=new G1(this.scene,this.camera),r=new Vo(new Fe(e.clientWidth,e.clientHeight),this.params.strength,this.params.radius,this.params.threshold),o=new H1(this.renderer),a=new X1;o.addPass(i),o.addPass(r),o.addPass(a),this.initialState(this.scene),window.addEventListener("resize",()=>this.onWindowResize(this.renderer,o),!1),this.onWindowResize(this.renderer,o),this.animate(o)}animate(e){this.animationRequestID=requestAnimationFrame(()=>this.animate(e)),e.render()}initialState(e){const t=this.createSegment("square","#54EAAB");t.position.x=this.portalOffsetX,t.position.z=this.portalOffsetZ,this.portalSquare.add(t),e.add(this.portalSquare);const n=this.createSegment("hexagon","#5FB2FF");n.position.z=this.portalOffsetZ,this.portalHexagon.add(n),e.add(this.portalHexagon);const i=this.createSegment("circle","#CBA1FE");i.position.x=-this.portalOffsetX,i.position.z=this.portalOffsetZ,this.portalCircle.add(i),e.add(this.portalCircle)}bringForwardAnimation(){et.timeline().to(this.camera.position,{z:this.cameraOffsetZ,duration:.6,ease:"power4.out"},"a").to(this.portalActive.position,{duration:.6,ease:"power4.out",z:this.portalOffsetZActive},"a")}focus(e){const t={square:this.portalOffsetXSquarePortal,hexagon:this.portalOffsetXSHexagonPortal,circle:this.portalOffsetXCirclePortal}[e],n=this.portalActive;switch(e){case"square":this.portalActive=this.portalSquare;break;case"hexagon":this.portalActive=this.portalHexagon;break;case"circle":this.portalActive=this.portalCircle;break;default:console.log(`Unknown shape: ${e}`);return}et.defaults({duration:.9,ease:"power4.inOut"}),et.timeline().to(this.camera.position,{x:t},"a").to(n.position,{z:0},"a").to(this.portalActive.position,{z:this.portalOffsetZActive},"a")}start(){const e=et.timeline();for(let t=1;t<this.numberOfLayers;t++)e.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.portalActive.children[0],i=n.clone();i.position.z=n.position.z+t*this.layerSpacing,this.portalActive.add(i)}});return e.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{this.dispose()}},`-=${this.cameraZoomDelay}`),e}createSegment(e=this.shape,t=this.color){const n=this.createGeometry(e),i=new g0({color:t});return new t1(n,i)}createGeometry(e){switch(e){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${e}`)}}createSquareGeometry(){const t=new Xf;return t.moveTo(-2.4/2,-2.4/2),t.lineTo(2.4/2,-2.4/2),t.lineTo(2.4/2,2.4/2),t.lineTo(-2.4/2,2.4/2),t.lineTo(-2.4/2,-2.4/2),new qf(t)}createCircleGeometry(){const n=new Vf(1.4,96);return new m1(n)}createHexagonGeometry(){const n=new Xf,i=0,r=0;n.moveTo(i+1.5*Math.cos(0),r+1.5*Math.sin(0));for(let a=1;a<=6;a+=1){const l=a*2*Math.PI/6;n.lineTo(i+1.5*Math.cos(l),r+1.5*Math.sin(l))}return new jn().setFromPoints(n.getPoints())}onWindowResize(e,t){let n=window.innerWidth,i=window.innerHeight;e.setSize(n,i);let r=n/i;this.camera.fov=this.adjustFOV(r),this.camera.aspect=r,this.camera.updateProjectionMatrix(),t.setSize(n,i)}adjustFOV(e){let t=15;return this.mm.add("(max-width: 991px)",()=>{t=45}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{t=55}),this.mm.add("(min-width: 1920px)",()=>{t=66}),2*Math.atan(Math.tan(t*Math.PI/180/2)/e)*(180/Math.PI)}dispose(){cancelAnimationFrame(this.animationRequestID),this.disposeScene(this.scene),this.renderer.dispose(),this.renderer.domElement.remove()}disposeScene(e){if(e.children.length>0)for(let t=e.children.length-1;t>=0;t--)this.disposeScene(e.children[t]);if(e.geometry&&e.geometry.dispose(),e.material)if(e.material.length)for(let t=0;t<e.material.length;++t)e.material[t].dispose();else e.material.dispose();e.removeFromParent(),e=null}}/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Y1=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function U0(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=U0(s)}else if(e===3||e===4)return s.nodeValue;return t}/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wo,Kf,O0,tl,B0,eu,q1=/(?:\r|\n|\t\t)/g,Z1=/(?:\s\s+)/g,K1=String.fromCharCode(160),k0=function(e){Wo=document,Kf=window,tl=tl||e||Kf.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),tl&&(eu=tl.utils.toArray,B0=tl.core.context||function(){},O0=1)},z0=function(e){return Kf.getComputedStyle(e)},Jf=function(e){return e.position==="absolute"||e.absolute===!0},J1=function(e,t){for(var n=t.length,i;--n>-1;)if(i=t[n],e.substr(0,i.length)===i)return i.length},j1=" style='position:relative;display:inline-block;'",H0=function(e,t){e===void 0&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+j1+(e?" class='"+e+(n?i++:"")+"'>":">")}},G0=function s(e,t,n){var i=e.nodeType;if(i===1||i===9||i===11)for(e=e.firstChild;e;e=e.nextSibling)s(e,t,n);else(i===3||i===4)&&(e.nodeValue=e.nodeValue.split(t).join(n))},jf=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},V0=function(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling,i)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}},Q1=function s(e){var t=eu(e.childNodes),n=t.length,i,r;for(i=0;i<n;i++)r=t[i],r._isSplit?s(r):i&&r.previousSibling&&r.previousSibling.nodeType===3?(r.previousSibling.nodeValue+=r.nodeType===3?r.nodeValue:r.firstChild.nodeValue,e.removeChild(r)):r.nodeType!==3&&(e.insertBefore(r.firstChild,r),e.removeChild(r))},zi=function(e,t){return parseFloat(t[e])||0},eD=function(e,t,n,i,r,o,a){var l=z0(e),c=zi("paddingLeft",l),h=-999,f=zi("borderBottomWidth",l)+zi("borderTopWidth",l),d=zi("borderLeftWidth",l)+zi("borderRightWidth",l),u=zi("paddingTop",l)+zi("paddingBottom",l),g=zi("paddingLeft",l)+zi("paddingRight",l),_=zi("fontSize",l)*(t.lineThreshold||.2),p=l.textAlign,m=[],S=[],v=[],y=t.wordDelimiter||" ",M=t.tag?t.tag:t.span?"span":"div",b=t.type||t.split||"chars,words,lines",E=r&&~b.indexOf("lines")?[]:null,C=~b.indexOf("words"),F=~b.indexOf("chars"),x=Jf(t),D=t.linesClass,X=~(D||"").indexOf("++"),G=[],L=l.display==="flex",H=e.style.display,U,k,q,I,R,ie,le,Z,P,B,te,ue;for(X&&(D=D.split("++").join("")),L&&(e.style.display="block"),k=e.getElementsByTagName("*"),q=k.length,R=[],U=0;U<q;U++)R[U]=k[U];if(E||x)for(U=0;U<q;U++)I=R[U],ie=I.parentNode===e,(ie||x||F&&!C)&&(ue=I.offsetTop,E&&ie&&Math.abs(ue-h)>_&&(I.nodeName!=="BR"||U===0)&&(le=[],E.push(le),h=ue),x&&(I._x=I.offsetLeft,I._y=ue,I._w=I.offsetWidth,I._h=I.offsetHeight),E&&((I._isSplit&&ie||!F&&ie||C&&ie||!C&&I.parentNode.parentNode===e&&!I.parentNode._isSplit)&&(le.push(I),I._x-=c,V0(I,e,y)&&(I._wordEnd=!0)),I.nodeName==="BR"&&(I.nextSibling&&I.nextSibling.nodeName==="BR"||U===0)&&E.push([])));for(U=0;U<q;U++){if(I=R[U],ie=I.parentNode===e,I.nodeName==="BR"){E||x?(I.parentNode&&I.parentNode.removeChild(I),R.splice(U--,1),q--):C||e.appendChild(I);continue}if(x&&(P=I.style,!C&&!ie&&(I._x+=I.parentNode._x,I._y+=I.parentNode._y),P.left=I._x+"px",P.top=I._y+"px",P.position="absolute",P.display="block",P.width=I._w+1+"px",P.height=I._h+"px"),!C&&F)if(I._isSplit)for(I._next=k=I.nextSibling,I.parentNode.appendChild(I);k&&k.nodeType===3&&k.textContent===" ";)I._next=k.nextSibling,I.parentNode.appendChild(k),k=k.nextSibling;else I.parentNode._isSplit?(I._parent=I.parentNode,!I.previousSibling&&I.firstChild&&(I.firstChild._isFirst=!0),I.nextSibling&&I.nextSibling.textContent===" "&&!I.nextSibling.nextSibling&&G.push(I.nextSibling),I._next=I.nextSibling&&I.nextSibling._isFirst?null:I.nextSibling,I.parentNode.removeChild(I),R.splice(U--,1),q--):ie||(ue=!I.nextSibling&&V0(I.parentNode,e,y),I.parentNode._parent&&I.parentNode._parent.appendChild(I),ue&&I.parentNode.appendChild(Wo.createTextNode(" ")),M==="span"&&(I.style.display="inline"),m.push(I));else I.parentNode._isSplit&&!I._isSplit&&I.innerHTML!==""?S.push(I):F&&!I._isSplit&&(M==="span"&&(I.style.display="inline"),m.push(I))}for(U=G.length;--U>-1;)G[U].parentNode.removeChild(G[U]);if(E){for(x&&(B=Wo.createElement(M),e.appendChild(B),te=B.offsetWidth+"px",ue=B.offsetParent===e?0:e.offsetLeft,e.removeChild(B)),P=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(Z=y===" "&&(!x||!C&&!F),U=0;U<E.length;U++){for(le=E[U],B=Wo.createElement(M),B.style.cssText="display:block;text-align:"+p+";position:"+(x?"absolute;":"relative;"),D&&(B.className=D+(X?U+1:"")),v.push(B),q=le.length,k=0;k<q;k++)le[k].nodeName!=="BR"&&(I=le[k],B.appendChild(I),Z&&I._wordEnd&&B.appendChild(Wo.createTextNode(" ")),x&&(k===0&&(B.style.top=I._y+"px",B.style.left=c+ue+"px"),I.style.top="0px",ue&&(I.style.left=I._x-ue+"px")));q===0?B.innerHTML="&nbsp;":!C&&!F&&(Q1(B),G0(B,String.fromCharCode(160)," ")),x&&(B.style.width=te,B.style.height=I._h+"px"),e.appendChild(B)}e.style.cssText=P}x&&(a>e.clientHeight&&(e.style.height=a-u+"px",e.clientHeight<a&&(e.style.height=a+f+"px")),o>e.clientWidth&&(e.style.width=o-g+"px",e.clientWidth<o&&(e.style.width=o+d+"px"))),L&&(H?e.style.display=H:e.style.removeProperty("display")),jf(n,m),C&&jf(i,S),jf(r,v)},tD=function(e,t,n,i){var r=t.tag?t.tag:t.span?"span":"div",o=t.type||t.split||"chars,words,lines",a=~o.indexOf("chars"),l=Jf(t),c=t.wordDelimiter||" ",h=function(x){return x===c||x===K1&&c===" "},f=c!==" "?"":l?"&#173; ":" ",d="</"+r+">",u=1,g=t.specialChars?typeof t.specialChars=="function"?t.specialChars:J1:null,_,p,m,S,v,y,M,b,E=Wo.createElement("div"),C=e.parentNode;for(C.insertBefore(E,e),E.textContent=e.nodeValue,C.removeChild(e),e=E,_=U0(e),M=_.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(_=_.replace(Z1," ").replace(q1,"")),M&&(_=_.split("<").join("{{LT}}")),v=_.length,p=(_.charAt(0)===" "?f:"")+n(),m=0;m<v;m++)if(y=_.charAt(m),g&&(b=g(_.substr(m),t.specialChars)))y=_.substr(m,b||1),p+=a&&y!==" "?i()+y+"</"+r+">":y,m+=b-1;else if(h(y)&&!h(_.charAt(m-1))&&m){for(p+=u?d:"",u=0;h(_.charAt(m+1));)p+=f,m++;m===v-1?p+=f:_.charAt(m+1)!==")"&&(p+=f+n(),u=1)}else y==="{"&&_.substr(m,6)==="{{LT}}"?(p+=a?i()+"{{LT}}</"+r+">":"{{LT}}",m+=5):y.charCodeAt(0)>=55296&&y.charCodeAt(0)<=56319||_.charCodeAt(m+1)>=65024&&_.charCodeAt(m+1)<=65039?(S=((_.substr(m,12).split(Y1)||[])[1]||"").length||2,p+=a&&y!==" "?i()+_.substr(m,S)+"</"+r+">":_.substr(m,S),m+=S-1):p+=a&&y!==" "?i()+y+"</"+r+">":y;e.outerHTML=p+(u?d:""),M&&G0(C,"{{LT}}","<")},nD=function s(e,t,n,i){var r=eu(e.childNodes),o=r.length,a=Jf(t),l,c;if(e.nodeType!==3||o>1){for(t.absolute=!1,l=0;l<o;l++)c=r[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(a&&c.nodeType!==3&&z0(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,s(c,t,n,i));t.absolute=a,e._isSplit=!0;return}tD(e,t,n,i)},Us=function(){function s(t,n){O0||k0(),this.elements=eu(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=n||{},B0(this),this.split(n)}var e=s.prototype;return e.split=function(n){this.isSplit&&this.revert(),this.vars=n=n||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var i=this.elements.length,r=n.tag?n.tag:n.span?"span":"div",o=H0(n.wordsClass,r),a=H0(n.charsClass,r),l,c,h;--i>-1;)h=this.elements[i],this._originals[i]={html:h.innerHTML,style:h.getAttribute("style")},l=h.clientHeight,c=h.clientWidth,nD(h,n,o,a),eD(h,n,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var n=this._originals;if(!n)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(i,r){i.innerHTML=n[r].html,i.setAttribute("style",n[r].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},s.create=function(n,i){return new s(n,i)},s}();Us.version="3.12.5",Us.register=k0,et.registerPlugin(Us);class tu{constructor({elementLeave:e,elementEnter:t,animationType:n="in"}){switch(this.elementLeave=e,this.elementEnter=t,this.animationType=n,this.splitTextLeave=e?new Us(e,{type:"chars, lines"}):null,this.splitTextEnter=t?new Us(t,{type:"chars, lines"}):null,this.animationType){case"in":this.splitTextEnter?(this.splitText=this.splitTextEnter,this.chars=this.splitText.chars):(console.error("No enter element to animate."),this.splitText=null,this.chars=[]);break;case"out":this.splitTextLeave?(this.splitText=this.splitTextLeave,this.chars=this.splitText.chars):(console.error("No leave element to animate."),this.splitText=null,this.chars=[]);break;case"swap":this.splitTextEnter&&this.splitTextLeave?(this.splitText=this.splitTextLeave,this.chars=this.splitText.chars):(console.error("Both elementLeave and elementEnter are required for swap animation."),this.splitText=null,this.chars=[]);break;default:console.warn("Unknown animation type"),this.splitText=null,this.chars=[]}this.originalColor=t?t.style.color:e?e.style.color:"#000",this.duration=.08,this.stagger=.01,this.colors=["#17222E","#1B2B3B","#253F58"]}getRandomChar(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return e.charAt(Math.floor(Math.random()*e.length))}shuffleTextEnter(){if(!this.splitTextEnter){console.error("No enter element to animate.");return}let e=this,t=this.chars.map(n=>n.textContent);this.elementEnter.style.opacity="1",et.fromTo(this.chars,{opacity:0},{opacity:1,duration:this.duration,stagger:{each:this.stagger,from:"random",repeat:6,onRepeat:function(){const n=this.targets()[0];n.textContent=e.getRandomChar(),n.style.color=e.colors[Math.floor(Math.random()*e.colors.length)]},onComplete:function(){const n=this.targets()[0];let i=e.chars.indexOf(n);n.textContent=t[i],n.style.color=e.originalColor}},onComplete:()=>{this.isAnimating=!1,e.splitText.revert(),this.elementEnter.style.opacity="1"}})}shuffleTextLeave(){if(!this.splitTextLeave){console.error("No leave element to animate.");return}let e=this,t=this.chars.map(n=>n.textContent);et.to(this.chars,{opacity:0,duration:this.duration,stagger:{each:this.stagger,from:"random",repeat:3,onRepeat:function(){const n=this.targets()[0];n.textContent=e.getRandomChar(),n.style.color=e.colors[Math.floor(Math.random()*e.colors.length)]},onComplete:function(){const n=this.targets()[0];let i=e.chars.indexOf(n);n.textContent=t[i],n.style.color=e.originalColor,n.style.opacity=0}},onComplete:()=>{this.isAnimating=!1,e.splitText.revert(),this.elementLeave.style.opacity="0"}})}shuffleTextSwap(){if(!this.elementLeave||!this.elementEnter){console.error("Both elementLeave and elementEnter are required for swap animation.");return}this.shuffleTextLeave(),this.elementLeave.innerHTML=this.elementEnter.innerHTML;let e=this.chars.length*this.stagger+this.duration;et.delayedCall(e,()=>{this.shuffleTextEnter()})}trigger(){switch(this.animationType){case"in":this.shuffleTextEnter();break;case"out":this.shuffleTextLeave();break;case"swap":this.shuffleTextSwap();break;default:console.warn("Unknown animation type")}}}class iD{constructor(){Rt(this,"initVideos",()=>{const e=document.querySelectorAll(".portal__video");if(!e.length){console.warn("No video containers found");return}e.forEach(t=>{const n=t.getAttribute("data-mp4"),i=t.getAttribute("data-webm");if(!n||!i){console.error("Video source attributes missing",t);return}const r=document.createElement("video");r.style.width="100%",r.style.height="100%",r.autoplay=!0,r.loop=!0,r.playsinline=!0,r.muted=!0;const o=document.createElement("source");o.src=n,o.type="video/mp4";const a=document.createElement("source");a.src=i,a.type="video/webm",r.appendChild(o),r.appendChild(a),t.appendChild(r),r.addEventListener("error",l=>{console.error("Error loading video:",l)})})});if(this.$container=document.getElementById("portalsContainer"),!this.$container){console.warn("No portal container found (#portalsContainer)");return}this.portalsWebGL=new $1(this.$container),this.portalTriggers={},this.portalScrollTrigger=null,this.activePortal=document.querySelector(".portal:not(.w-condition-invisible)"),et.set(this.activePortal,{autoAlpha:0}),this.initTriggers(),this.initVideos(),this.initWhenInView()}initWhenInView(){this.portalScrollTrigger=tt.create({trigger:this.$container,once:!0,start:"top 20%",onEnter:()=>{this.portalsWebGL.bringForwardAnimation();const e=document.getElementById("portalTriggerHexagon");this.togglePortal(e,!0)}})}getPortalTL(){let e=et.timeline({paused:!0});return e.to(this.activePortal,{duration:.9,opacity:0,scale:.9,ease:"power4.out"},"a"),e.add(this.portalsWebGL.start(),"a"),e}togglePortal(e,t=!1){const n=e.getAttribute("data-shape"),i=e.getAttribute("data-content"),r=document.getElementById(i),o=r==null?void 0:r.querySelector(".portal__video");if(!n||!i){console.warn("Shape or content ID missing",e);return}switch(n){case"square":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="auto",this.portalTriggers.hexagon.style.right="0";break;case"hexagon":this.portalTriggers.square.style.display="block",this.portalTriggers.hexagon.style.display="none",this.portalTriggers.circle.style.display="block";break;case"circle":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="0%";break;default:console.warn("Shape not found.")}t&&et.set(r,{autoAlpha:1}),this.portalsWebGL.focus(n);const a=this.activePortal.querySelector(".portal__video");t||et.fromTo(a,{opacity:1,scale:1},{opacity:0,scale:.98,duration:.6,ease:"power4.out"}),et.fromTo(o,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.9,delay:.6,ease:"power4.out"}),new tu({elementEnter:r.querySelector(".h2"),animationType:"in"}).trigger(),new tu({elementEnter:r.querySelector(".lead"),animationType:"in"}).trigger(),r.querySelectorAll(".eyebrow").forEach(l=>{new tu({elementEnter:l,animationType:"in"}).trigger()}),setTimeout(()=>{if(!t){const l=document.querySelector(".portal:not(.w-condition-invisible)");l==null||l.classList.add("w-condition-invisible");const c=document.getElementById(i);c==null||c.classList.remove("w-condition-invisible"),this.activePortal=c}},150)}initTriggers(){this.portalTriggers.square=this.setupTrigger("portalTriggerSquare"),this.portalTriggers.hexagon=this.setupTrigger("portalTriggerHexagon"),this.portalTriggers.circle=this.setupTrigger("portalTriggerCircle")}setupTrigger(e){const t=document.getElementById(e);if(!t){console.warn("No portal trigger found with ID: "+e);return}return t.addEventListener("click",n=>this.togglePortal(n.target)),t.style.display=e==="portalTriggerHexagon"?"none":"block",t}}class rD{constructor(e){this.$title=e,this.splitText=new Us(this.$title,{type:"chars"}),this.chars=this.splitText.chars,this.duration=.15,this.stagger=.04,this.tl=this.initTL()}initTL(){let e=et.timeline({paused:!0,onStart:()=>{this.$title.style.opacity=1},onComplete:()=>{this.splitText.revert(),this.$title.style.opacity=1}});return et.defaults({duration:3,ease:"quint.out"}),e.from(this.chars,{duration:this.duration,opacity:0,stagger:{each:this.stagger,from:"random"}}),e}play(){this.tl.play()}}class sD{constructor(){if(this.$container=document.getElementById("homeIntro"),!this.$container){console.error("Home intro container not found.");return}this.enterTL=this.initEnterTL(),document.addEventListener("preloaderComplete",()=>{(()=>{const t=this.$container.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)})()?(console.log("Element is in view"),this.init()):console.log("Element is not in view")})}init(){console.log("homeIntro init()"),this.enterTL.play()}initEnterTL(){const e=this.$container.querySelector(".planet"),t=this.$container.querySelector(".moon"),n=this.$container.querySelector(".home-intro__lead"),i=this.$container.querySelector(".home-intro__title");let r=et.timeline({paused:!0});return et.defaults({duration:3,ease:"quint.out"}),r.from(e,{yPercent:-20},"a").from(t,{yPercent:-60},"a").add(()=>{new rD(i).play()},"a").add(()=>{new tu({elementEnter:n,animationType:"in"}).trigger()},"b-=1.6"),r}dispose(){console.log("dispose home intro tuff")}}const oD=(s,e)=>{e.portalManager=new iD,new sD,setTimeout(()=>{tt.refresh()},150)},aD=(s,e)=>{e.portalManager.portalScrollTrigger.kill()};/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ur,Os,Qf,nu,nl,iu,ru,il,Si="transform",ed=Si+"Origin",W0,td=function(e){var t=e.ownerDocument||e;for(!(Si in e.style)&&("msTransform"in e.style)&&(Si="msTransform",ed=Si+"Origin");t.parentNode&&(t=t.parentNode););if(Os=window,ru=new hr,t){ur=t,Qf=t.documentElement,nu=t.body,il=ur.createElementNS("http://www.w3.org/2000/svg","g"),il.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),W0=i.offsetParent!==n,r.removeChild(n))}return t},lD=function(e){for(var t,n;e&&e!==nu;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},X0=[],$0=[],nd=function(){return Os.pageYOffset||ur.scrollTop||Qf.scrollTop||nu.scrollTop||0},id=function(){return Os.pageXOffset||ur.scrollLeft||Qf.scrollLeft||nu.scrollLeft||0},rd=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},cD=function s(e){if(Os.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},sd=function s(e,t){if(e.parentNode&&(ur||td(e))){var n=rd(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ur.createElementNS?ur.createElementNS(i.replace(/^https/,"http"),r):ur.createElement(r);return t&&(n?(iu||(iu=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),iu.appendChild(c)):(nl||(nl=s(e),nl.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",nl.appendChild(c))),c}throw"Need document and parent."},uD=function(e){for(var t=new hr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Y0=function(e){var t=e.getCTM(),n;return t||(n=e.style[Si],e.style[Si]="none",e.appendChild(il),t=il.getCTM(),e.removeChild(il),n?e.style[Si]=n:e.style.removeProperty(Si.replace(/([A-Z])/g,"-$1").toLowerCase())),t||ru.clone()},hD=function(e,t){var n=rd(e),i=e===n,r=n?X0:$0,o=e.parentNode,a,l,c,h,f,d;if(e===Os)return e;if(r.length||r.push(sd(e,1),sd(e,2),sd(e,3)),a=n?iu:nl,n)i?(c=Y0(e),h=-c.e/c.a,f=-c.f/c.d,l=ru):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?uD(l):l.getItem(0).matrix:ru,h=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new hr,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,W0)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Os.getComputedStyle(c)[Si]+"").length>4&&(h=c.offsetLeft,f=c.offsetTop,c=0);if(d=Os.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-h+"px",c[Si]=d[Si],c[ed]=d[ed],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},od=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},hr=function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),od(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*r||1e-10;return od(this,o/c,-i/c,-r/c,n/c,(r*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return od(this,h*i+d*o,h*r+d*a,f*i+u*o,f*r+u*a,l+g*i+_*o,c+g*r+_*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return i.x=r*a+o*c+f||0,i.y=r*l+o*h+d||0,i},s}();function an(s,e,t,n){if(!s||!s.parentNode||(ur||td(s)).documentElement===s)return new hr;var i=lD(s),r=rd(s),o=r?X0:$0,a=hD(s,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&cD(s),u=new hr((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:id()),l.top+(d?0:nd()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function q0(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fD(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var dt,Et,Qn,Ei,fr,ad,dr,ld,rl,Wr,Z0,cd,sl,ud,ol,Mi,al,su,K0,hd,ou=0,J0=function(){return typeof window!="undefined"},j0=function(){return dt||J0()&&(dt=window.gsap)&&dt.registerPlugin&&dt},Xr=function(e){return typeof e=="function"},ll=function(e){return typeof e=="object"},Ti=function(e){return typeof e=="undefined"},au=function(){return!1},cl="transform",fd="transformOrigin",$r=function(e){return Math.round(e*1e4)/1e4},ul=Array.isArray,lu=function(e,t){var n=Qn.createElementNS?Qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qn.createElement(e);return n.style?n:Qn.createElement(e)},Q0=180/Math.PI,Bs=1e20,dD=new hr,Yr=Date.now||function(){return new Date().getTime()},ks=[],Xo={},pD=0,mD=/^(?:a|input|textarea|button|select)$/i,ev=0,$o={},pr={},tv=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},gD=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nv=function s(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&s(i,t)},iv=function(){return ks.forEach(function(e){return e()})},_D=function(e){ks.push(e),ks.length===1&&dt.ticker.add(iv)},rv=function(){return!ks.length&&dt.ticker.remove(iv)},sv=function(e){for(var t=ks.length;t--;)ks[t]===e&&ks.splice(t,1);dt.to(rv,{overwrite:!0,delay:15,duration:0,onComplete:rv,data:"_draggable"})},vD=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qt=function(e,t,n,i){if(e.addEventListener){var r=sl[t];i=i||(Z0?{passive:!1}:null),e.addEventListener(r||t,n,i),r&&t!==r&&e.addEventListener(t,n,i)}},Vt=function(e,t,n,i){if(e.removeEventListener){var r=sl[t];e.removeEventListener(r||t,n,i),r&&t!==r&&e.removeEventListener(t,n,i)}},ci=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},xD=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},yD=function s(e){ud=e.touches&&ou<e.touches.length,Vt(e.target,"touchend",s)},ov=function(e){ud=e.touches&&ou<e.touches.length,qt(e.target,"touchend",yD)},Yo=function(e){return Et.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},qo=function(e){return Et.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},av=function s(e,t){qt(e,"scroll",t),Zo(e.parentNode)||s(e.parentNode,t)},lv=function s(e,t){Vt(e,"scroll",t),Zo(e.parentNode)||s(e.parentNode,t)},Zo=function(e){return!e||e===Ei||e.nodeType===9||e===Qn.body||e===Et||!e.nodeType||!e.parentNode},cv=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return Math.max(0,Zo(e)?Math.max(Ei[i],fr[i])-(Et["inner"+n]||Ei[r]||fr[r]):e[i]-e[r])},dd=function s(e,t){var n=cv(e,"x"),i=cv(e,"y");Zo(e)?e=pr:s(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},pd=function(e,t,n){var i=e.style;!i||(Ti(i[t])&&(t=rl(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},hl=function(e){return Et.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},zs={},Ko=function(e){if(e===Et)return zs.left=zs.top=0,zs.width=zs.right=Ei.clientWidth||e.innerWidth||fr.clientWidth||0,zs.height=zs.bottom=(e.innerHeight||0)-20<Ei.clientHeight?Ei.clientHeight:e.innerHeight||fr.clientHeight||0,zs;var t=e.ownerDocument||Qn,n=Ti(e.pageX)?!e.nodeType&&!Ti(e.left)&&!Ti(e.top)?e:Wr(e)[0].getBoundingClientRect():{left:e.pageX-qo(t),top:e.pageY-Yo(t),right:e.pageX-qo(t)+1,bottom:e.pageY-Yo(t)+1};return Ti(n.right)&&!Ti(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Ti(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t],a;return Xr(r)&&(a=r.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},uv=function(e,t){var n=Wr(e)[0],i,r,o;return!n.nodeType&&n!==Et?Ti(e.left)?(r=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:r,top:i,width:(e.max||e.maxX||e.maxRotation||0)-r,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):SD(n,t)},ui={},SD=function(e,t){t=Wr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Qn,r,o,a,l,c,h,f,d,u,g,_,p,m;if(e===Et)a=Yo(i),r=qo(i),o=r+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===Et||Ti(t))return e.getBoundingClientRect();r=a=0,n?(g=e.getBBox(),_=g.width,p=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(r=g.x||0,a=g.y||0,_=g.width,p=g.height),_||(m=hl(e),g=m.boxSizing==="border-box",_=(parseFloat(m.width)||e.clientWidth||0)+(g?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),p=(parseFloat(m.height)||e.clientHeight||0)+(g?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=_,l=p}return e===t?{left:r,top:a,width:o-r,height:l-a}:(c=an(t,!0).multiply(an(e)),h=c.apply({x:r,y:a}),f=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:r,y:l}),r=Math.min(h.x,f.x,d.x,u.x),a=Math.min(h.y,f.y,d.y,u.y),{left:r,top:a,width:Math.max(h.x,f.x,d.x,u.x)-r,height:Math.max(h.y,f.y,d.y,u.y)-a})},md=function(e,t,n,i,r,o){var a={},l,c,h;if(t)if(r!==1&&t instanceof Array){if(a.end=l=[],h=t.length,ll(t[0]))for(c=0;c<h;c++)l[c]=tv(t[c],r);else for(c=0;c<h;c++)l[c]=t[c]*r;n+=1.1,i-=1.1}else Xr(t)?a.end=function(f){var d=t.call(e,f),u,g;if(r!==1)if(ll(d)){u={};for(g in d)u[g]=d[g]*r;d=u}else d*=r;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},ED=function s(e){var t;return!e||!e.getAttribute||e===fr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(mD.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:s(e.parentNode)},cu=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:au,dt.set(i,{lazy:!0,userSelect:t?"text":"none"})},MD=function s(e){if(hl(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},hv,gd,TD=function(e,t){e=dt.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,r=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,f=e.scrollHeight,d=0,u=0,g=0,_,p,m,S,v,y;hv&&t.force3D!==!1?(v="translate3d(",y="px,0px)"):cl&&(v="translate(",y="px)"),this.scrollTop=function(M,b){if(!arguments.length)return-this.top();this.top(-M,b)},this.scrollLeft=function(M,b){if(!arguments.length)return-this.left();this.left(-M,b)},this.left=function(M,b){if(!arguments.length)return-(e.scrollLeft+a);var E=e.scrollLeft-c,C=a;if((E>2||E<-2)&&!b){c=e.scrollLeft,dt.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}M=-M,M<0?(a=M-.5|0,M=0):M>u?(a=M-u|0,M=u):a=0,(a||C)&&(this._skip||(i[cl]=v+-a+"px,"+-o+y),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=M|0,c=e.scrollLeft},this.top=function(M,b){if(!arguments.length)return-(e.scrollTop+o);var E=e.scrollTop-l,C=o;if((E>2||E<-2)&&!b){l=e.scrollTop,dt.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}M=-M,M<0?(o=M-.5|0,M=0):M>g?(o=M-g|0,M=g):o=0,(o||C)&&(this._skip||(i[cl]=v+-a+"px,"+-o+y)),e.scrollTop=M|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(r=n.firstChild;r;)S=r.nextSibling,e.appendChild(r),r=S;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(r=e.firstChild,r!==n){for(;r;)S=r.nextSibling,n.appendChild(r),r=S;e.appendChild(n),this.calibrate()}},this.calibrate=function(M){var b=e.clientWidth===_,E,C,F;l=e.scrollTop,c=e.scrollLeft,!(b&&e.clientHeight===p&&n.offsetHeight===m&&h===e.scrollWidth&&f===e.scrollHeight&&!M)&&((o||a)&&(C=this.left(),F=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),E=hl(e),(!b||M)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(E.paddingLeft)+(gd?parseFloat(E.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",gd&&(i.paddingBottom=E.paddingBottom),_=e.clientWidth,p=e.clientHeight,h=e.scrollWidth,f=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-p,m=n.offsetHeight,i.display="block",(C||F)&&(this.left(C),this.top(F)))},this.content=n,this.element=e,this._skip=!1,this.enable()},_d=function(e){if(J0()&&document.body){var t=window&&window.navigator;Et=window,Qn=document,Ei=Qn.documentElement,fr=Qn.body,ad=lu("div"),su=!!window.PointerEvent,dr=lu("div"),dr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",al=dr.style.cursor==="grab"?"grab":"move",ol=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,cd="ontouchstart"in Ei&&"orientation"in Et||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),gd=function(){var n=lu("div"),i=lu("div"),r=i.style,o=fr,a;return r.display="inline-block",r.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),sl=function(n){for(var i=n.split(","),r=("onpointerdown"in ad?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in ad?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=r[a],o[r[a]]=i[a];try{Ei.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Z0=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),qt(Qn,"touchcancel",au),qt(Et,"touchmove",au),fr&&fr.addEventListener("touchstart",au),qt(Qn,"contextmenu",function(){for(var n in Xo)Xo[n].isPressed&&Xo[n].endDrag()}),dt=ld=j0()}dt?(Mi=dt.plugins.inertia,K0=dt.core.context||function(){},rl=dt.utils.checkPrefix,cl=rl(cl),fd=rl(fd),Wr=dt.utils.toArray,hd=dt.core.getStyleSaver,hv=!!rl("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},bD=function(){function s(t){this._listeners={},this.target=t||this}var e=s.prototype;return e.addEventListener=function(n,i){var r=this._listeners[n]||(this._listeners[n]=[]);~r.indexOf(i)||r.push(i)},e.removeEventListener=function(n,i){var r=this._listeners[n],o=r&&r.indexOf(i);o>=0&&r.splice(o,1)},e.dispatchEvent=function(n){var i=this,r;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(r=!1)}),r},s}(),Jo=function(s){fD(e,s);function e(t,n){var i;i=s.call(this)||this,ld||_d(1),t=Wr(t)[0],i.styles=hd&&hd(t,"transform,left,top"),Mi||(Mi=dt.plugins.inertia),i.vars=n=tv(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,dt.getProperty(t,"x");var r=(n.type||"x,y").toLowerCase(),o=~r.indexOf("x")||~r.indexOf("y"),a=r.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~r.indexOf("x")||~r.indexOf("left")||r==="scroll"),f=!!(~r.indexOf("y")||~r.indexOf("top")||r==="scroll"),d=n.minimumMovement||2,u=q0(i),g=Wr(n.trigger||n.handle||t),_={},p=0,m=!1,S=n.autoScrollMarginTop||40,v=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,M=n.autoScrollMarginLeft||40,b=n.clickableTest||ED,E=0,C=t._gsap||dt.core.getCache(t),F=MD(t),x=function(N,ae){return parseFloat(C.get(t,N,ae))},D=t.ownerDocument||Qn,X,G,L,H,U,k,q,I,R,ie,le,Z,P,B,te,ue,ce,me,Ce,ve,V,De,ge,Me,Le,W,Pe,Xe,ot,A,T,re,he,de=function(N){return ci(N),N.stopImmediatePropagation&&N.stopImmediatePropagation(),!1},fe=function se(N){if(u.autoScroll&&u.isDragging&&(m||ce)){var ae=t,z=u.autoScroll*15,ne,oe,j,ye,pe,Re,We,Ue;for(m=!1,pr.scrollTop=Et.pageYOffset!=null?Et.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,pr.scrollLeft=Et.pageXOffset!=null?Et.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft,ye=u.pointerX-pr.scrollLeft,pe=u.pointerY-pr.scrollTop;ae&&!oe;)oe=Zo(ae.parentNode),ne=oe?pr:ae.parentNode,j=oe?{bottom:Math.max(Ei.clientHeight,Et.innerHeight||0),right:Math.max(Ei.clientWidth,Et.innerWidth||0),left:0,top:0}:ne.getBoundingClientRect(),Re=We=0,f&&(Ue=ne._gsMaxScrollY-ne.scrollTop,Ue<0?We=Ue:pe>j.bottom-y&&Ue?(m=!0,We=Math.min(Ue,z*(1-Math.max(0,j.bottom-pe)/y)|0)):pe<j.top+S&&ne.scrollTop&&(m=!0,We=-Math.min(ne.scrollTop,z*(1-Math.max(0,pe-j.top)/S)|0)),We&&(ne.scrollTop+=We)),h&&(Ue=ne._gsMaxScrollX-ne.scrollLeft,Ue<0?Re=Ue:ye>j.right-v&&Ue?(m=!0,Re=Math.min(Ue,z*(1-Math.max(0,j.right-ye)/v)|0)):ye<j.left+M&&ne.scrollLeft&&(m=!0,Re=-Math.min(ne.scrollLeft,z*(1-Math.max(0,ye-j.left)/M)|0)),Re&&(ne.scrollLeft+=Re)),oe&&(Re||We)&&(Et.scrollTo(ne.scrollLeft,ne.scrollTop),at(u.pointerX+Re,u.pointerY+We)),ae=ne}if(ce){var Je=u.x,ut=u.y;a?(u.deltaX=Je-parseFloat(C.rotation),u.rotation=Je,C.rotation=Je+"deg",C.renderTransform(1,C)):G?(f&&(u.deltaY=ut-G.top(),G.top(ut)),h&&(u.deltaX=Je-G.left(),G.left(Je))):o?(f&&(u.deltaY=ut-parseFloat(C.y),C.y=ut+"px"),h&&(u.deltaX=Je-parseFloat(C.x),C.x=Je+"px"),C.renderTransform(1,C)):(f&&(u.deltaY=ut-parseFloat(t.style.top||0),t.style.top=ut+"px"),h&&(u.deltaX=Je-parseFloat(t.style.left||0),t.style.left=Je+"px")),I&&!N&&!Xe&&(Xe=!0,kt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),f&&(u.y-=u.deltaY),se(!0)),Xe=!1)}ce=!1},Ne=function(N,ae){var z=u.x,ne=u.y,oe,j;t._gsap||(C=dt.core.getCache(t)),C.uncache&&dt.getProperty(t,"x"),o?(u.x=parseFloat(C.x),u.y=parseFloat(C.y)):a?u.x=u.rotation=parseFloat(C.rotation):G?(u.y=G.top(),u.x=G.left()):(u.y=parseFloat(t.style.top||(j=hl(t))&&j.top)||0,u.x=parseFloat(t.style.left||(j||{}).left)||0),(Ce||ve||V)&&!ae&&(u.isDragging||u.isThrowing)&&(V&&($o.x=u.x,$o.y=u.y,oe=V($o),oe.x!==u.x&&(u.x=oe.x,ce=!0),oe.y!==u.y&&(u.y=oe.y,ce=!0)),Ce&&(oe=Ce(u.x),oe!==u.x&&(u.x=oe,a&&(u.rotation=oe),ce=!0)),ve&&(oe=ve(u.y),oe!==u.y&&(u.y=oe),ce=!0)),ce&&fe(!0),N||(u.deltaX=u.x-z,u.deltaY=u.y-ne,kt(u,"throwupdate","onThrowUpdate"))},He=function(N,ae,z,ne){return ae==null&&(ae=-Bs),z==null&&(z=Bs),Xr(N)?function(oe){var j=u.isPressed?1-u.edgeResistance:1;return N.call(u,(oe>z?z+(oe-z)*j:oe<ae?ae+(oe-ae)*j:oe)*ne)*ne}:ul(N)?function(oe){for(var j=N.length,ye=0,pe=Bs,Re,We;--j>-1;)Re=N[j],We=Re-oe,We<0&&(We=-We),We<pe&&Re>=ae&&Re<=z&&(ye=j,pe=We);return N[ye]}:isNaN(N)?function(oe){return oe}:function(){return N*ne}},xe=function(N,ae,z,ne,oe,j,ye){return j=j&&j<Bs?j*j:Bs,Xr(N)?function(pe){var Re=u.isPressed?1-u.edgeResistance:1,We=pe.x,Ue=pe.y,Je,ut,pt;return pe.x=We=We>z?z+(We-z)*Re:We<ae?ae+(We-ae)*Re:We,pe.y=Ue=Ue>oe?oe+(Ue-oe)*Re:Ue<ne?ne+(Ue-ne)*Re:Ue,Je=N.call(u,pe),Je!==pe&&(pe.x=Je.x,pe.y=Je.y),ye!==1&&(pe.x*=ye,pe.y*=ye),j<Bs&&(ut=pe.x-We,pt=pe.y-Ue,ut*ut+pt*pt>j&&(pe.x=We,pe.y=Ue)),pe}:ul(N)?function(pe){for(var Re=N.length,We=0,Ue=Bs,Je,ut,pt,rt;--Re>-1;)pt=N[Re],Je=pt.x-pe.x,ut=pt.y-pe.y,rt=Je*Je+ut*ut,rt<Ue&&(We=Re,Ue=rt);return Ue<=j?N[We]:pe}:function(pe){return pe}},be=function(){var N,ae,z,ne;q=!1,G?(G.calibrate(),u.minX=le=-G.maxScrollLeft(),u.minY=P=-G.maxScrollTop(),u.maxX=ie=u.maxY=Z=0,q=!0):n.bounds&&(N=uv(n.bounds,t.parentNode),a?(u.minX=le=N.left,u.maxX=ie=N.left+N.width,u.minY=P=u.maxY=Z=0):!Ti(n.bounds.maxX)||!Ti(n.bounds.maxY)?(N=n.bounds,u.minX=le=N.minX,u.minY=P=N.minY,u.maxX=ie=N.maxX,u.maxY=Z=N.maxY):(ae=uv(t,t.parentNode),u.minX=le=Math.round(x(l,"px")+N.left-ae.left),u.minY=P=Math.round(x(c,"px")+N.top-ae.top),u.maxX=ie=Math.round(le+(N.width-ae.width)),u.maxY=Z=Math.round(P+(N.height-ae.height))),le>ie&&(u.minX=ie,u.maxX=ie=le,le=u.minX),P>Z&&(u.minY=Z,u.maxY=Z=P,P=u.minY),a&&(u.minRotation=le,u.maxRotation=ie),q=!0),n.liveSnap&&(z=n.liveSnap===!0?n.snap||{}:n.liveSnap,ne=ul(z)||Xr(z),a?(Ce=He(ne?z:z.rotation,le,ie,1),ve=null):z.points?V=xe(ne?z:z.points,le,ie,P,Z,z.radius,G?-1:1):(h&&(Ce=He(ne?z:z.x||z.left||z.scrollLeft,le,ie,G?-1:1)),f&&(ve=He(ne?z:z.y||z.top||z.scrollTop,P,Z,G?-1:1))))},Ze=function(){u.isThrowing=!1,kt(u,"throwcomplete","onThrowComplete")},_e=function(){u.isThrowing=!1},vt=function(N,ae){var z,ne,oe,j;N&&Mi?(N===!0&&(z=n.snap||n.liveSnap||{},ne=ul(z)||Xr(z),N={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?N.rotation=md(u,ne?z:z.rotation,ie,le,1,ae):(h&&(N[l]=md(u,ne?z:z.points||z.x||z.left,ie,le,G?-1:1,ae||u.lockedAxis==="x")),f&&(N[c]=md(u,ne?z:z.points||z.y||z.top,Z,P,G?-1:1,ae||u.lockedAxis==="y")),(z.points||ul(z)&&ll(z[0]))&&(N.linkedProps=l+","+c,N.radius=z.radius))),u.isThrowing=!0,j=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,N.duration||(N.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?j===0||ll(N)&&N.resistance>1e3?0:.5:n.minDuration,overshoot:j}),u.tween=oe=dt.to(G||t,{inertia:N,data:"_draggable",inherit:!1,onComplete:Ze,onInterrupt:_e,onUpdate:n.fastMode?kt:Ne,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:z&&z.radius?[!1,!0]:[]}),n.fastMode||(G&&(G._skip=!0),oe.render(1e9,!0,!0),Ne(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),oe.play(0),Ne(!0,!0),G&&(G._skip=!1))):q&&u.applyBounds()},qe=function(N){var ae=Me,z;Me=an(t.parentNode,!0),N&&u.isPressed&&!Me.equals(ae||new hr)&&(z=ae.inverse().apply({x:L,y:H}),Me.apply(z,z),L=z.x,H=z.y),Me.equals(dD)&&(Me=null)},ke=function(){var N=1-u.edgeResistance,ae=F?qo(D):0,z=F?Yo(D):0,ne,oe,j;o&&(C.x=x(l,"px")+"px",C.y=x(c,"px")+"px",C.renderTransform()),qe(!1),ui.x=u.pointerX-ae,ui.y=u.pointerY-z,Me&&Me.apply(ui,ui),L=ui.x,H=ui.y,ce&&(at(u.pointerX,u.pointerY),fe(!0)),re=an(t),G?(be(),k=G.top(),U=G.left()):(Ie()?(Ne(!0,!0),be()):u.applyBounds(),a?(ne=t.ownerSVGElement?[C.xOrigin-t.getBBox().x,C.yOrigin-t.getBBox().y]:(hl(t)[fd]||"0 0").split(" "),ue=u.rotationOrigin=an(t).apply({x:parseFloat(ne[0])||0,y:parseFloat(ne[1])||0}),Ne(!0,!0),oe=u.pointerX-ue.x-ae,j=ue.y-u.pointerY+z,U=u.x,k=u.y=Math.atan2(j,oe)*Q0):(k=x(c,"px"),U=x(l,"px"))),q&&N&&(U>ie?U=ie+(U-ie)/N:U<le&&(U=le-(le-U)/N),a||(k>Z?k=Z+(k-Z)/N:k<P&&(k=P-(P-k)/N))),u.startX=U=$r(U),u.startY=k=$r(k)},Ie=function(){return u.tween&&u.tween.isActive()},Oe=function(){dr.parentNode&&!Ie()&&!u.isDragging&&dr.parentNode.removeChild(dr)},Ke=function(N,ae){var z;if(!X||u.isPressed||!N||(N.type==="mousedown"||N.type==="pointerdown")&&!ae&&Yr()-E<30&&sl[u.pointerEvent.type]){T&&N&&X&&ci(N);return}if(Le=Ie(),he=!1,u.pointerEvent=N,sl[N.type]?(ge=~N.type.indexOf("touch")?N.currentTarget||N.target:D,qt(ge,"touchend",O),qt(ge,"touchmove",Te),qt(ge,"touchcancel",O),qt(D,"touchstart",ov)):(ge=null,qt(D,"mousemove",Te)),Pe=null,(!su||!ge)&&(qt(D,"mouseup",O),N&&N.target&&qt(N.target,"mouseup",O)),De=b.call(u,N.target)&&n.dragClickables===!1&&!ae,De){qt(N.target,"change",O),kt(u,"pressInit","onPressInit"),kt(u,"press","onPress"),cu(g,!0),T=!1;return}if(W=!ge||h===f||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&N&&(N.ctrlKey||N.which>2)?!1:h?"y":"x",T=!W&&!u.allowEventDefault,T&&(ci(N),qt(Et,"touchforcechange",ci)),N.changedTouches?(N=B=N.changedTouches[0],te=N.identifier):N.pointerId?te=N.pointerId:B=te=null,ou++,_D(fe),H=u.pointerY=N.pageY,L=u.pointerX=N.pageX,kt(u,"pressInit","onPressInit"),(W||u.autoScroll)&&dd(t.parentNode),t.parentNode&&u.autoScroll&&!G&&!a&&t.parentNode._gsMaxScrollX&&!dr.parentNode&&!t.getBBox&&(dr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(dr)),ke(),u.tween&&u.tween.kill(),u.isThrowing=!1,dt.killTweensOf(G||t,_,!0),G&&dt.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!G&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,I=!!(n.onDrag||u._listeners.drag),R=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(z=g.length;--z>-1;)dt.set(g[z],{cursor:n.activeCursor||n.cursor||(al==="grab"?"grabbing":al)});kt(u,"press","onPress")},Te=function(N){var ae=N,z,ne,oe,j,ye,pe;if(!X||ud||!u.isPressed||!N){T&&N&&X&&ci(N);return}if(u.pointerEvent=N,z=N.changedTouches,z){if(N=z[0],N!==B&&N.identifier!==te){for(j=z.length;--j>-1&&(N=z[j]).identifier!==te&&N.target!==t;);if(j<0)return}}else if(N.pointerId&&te&&N.pointerId!==te)return;if(ge&&W&&!Pe&&(ui.x=N.pageX-(F?qo(D):0),ui.y=N.pageY-(F?Yo(D):0),Me&&Me.apply(ui,ui),ne=ui.x,oe=ui.y,ye=Math.abs(ne-L),pe=Math.abs(oe-H),(ye!==pe&&(ye>d||pe>d)||ol&&W===Pe)&&(Pe=ye>pe&&h?"x":"y",W&&Pe!==W&&qt(Et,"touchforcechange",ci),u.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(u.lockedAxis=Pe==="x"?"y":"x",Xr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,ae)),ol&&W===Pe))){O(ae);return}!u.allowEventDefault&&(!W||Pe&&W!==Pe)&&ae.cancelable!==!1?(ci(ae),T=!0):T&&(T=!1),u.autoScroll&&(m=!0),at(N.pageX,N.pageY,R)},at=function(N,ae,z){var ne=1-u.dragResistance,oe=1-u.edgeResistance,j=u.pointerX,ye=u.pointerY,pe=k,Re=u.x,We=u.y,Ue=u.endX,Je=u.endY,ut=u.endRotation,pt=ce,rt,lt,gt,w,$,J;u.pointerX=N,u.pointerY=ae,F&&(N-=qo(D),ae-=Yo(D)),a?(w=Math.atan2(ue.y-ae,N-ue.x)*Q0,$=u.y-w,$>180?(k-=360,u.y=w):$<-180&&(k+=360,u.y=w),u.x!==U||Math.abs(k-w)>d?(u.y=w,gt=U+(k-w)*ne):gt=U):(Me&&(J=N*Me.a+ae*Me.c+Me.e,ae=N*Me.b+ae*Me.d+Me.f,N=J),lt=ae-H,rt=N-L,lt<d&&lt>-d&&(lt=0),rt<d&&rt>-d&&(rt=0),(u.lockAxis||u.lockedAxis)&&(rt||lt)&&(J=u.lockedAxis,J||(u.lockedAxis=J=h&&Math.abs(rt)>Math.abs(lt)?"y":f?"x":null,J&&Xr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),J==="y"?lt=0:J==="x"&&(rt=0)),gt=$r(U+rt*ne),w=$r(k+lt*ne)),(Ce||ve||V)&&(u.x!==gt||u.y!==w&&!a)&&(V&&($o.x=gt,$o.y=w,J=V($o),gt=$r(J.x),w=$r(J.y)),Ce&&(gt=$r(Ce(gt))),ve&&(w=$r(ve(w)))),q&&(gt>ie?gt=ie+Math.round((gt-ie)*oe):gt<le&&(gt=le+Math.round((gt-le)*oe)),a||(w>Z?w=Math.round(Z+(w-Z)*oe):w<P&&(w=Math.round(P+(w-P)*oe)))),(u.x!==gt||u.y!==w&&!a)&&(a?(u.endRotation=u.x=u.endX=gt,ce=!0):(f&&(u.y=u.endY=w,ce=!0),h&&(u.x=u.endX=gt,ce=!0)),!z||kt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=he=!0,kt(u,"dragstart","onDragStart")):(u.pointerX=j,u.pointerY=ye,k=pe,u.x=Re,u.y=We,u.endX=Ue,u.endY=Je,u.endRotation=ut,ce=pt))},O=function se(N,ae){if(!X||!u.isPressed||N&&te!=null&&!ae&&(N.pointerId&&N.pointerId!==te&&N.target!==t||N.changedTouches&&!xD(N.changedTouches,te))){T&&N&&X&&ci(N);return}u.isPressed=!1;var z=N,ne=u.isDragging,oe=u.vars.allowContextMenu&&N&&(N.ctrlKey||N.which>2),j=dt.delayedCall(.001,Oe),ye,pe,Re,We,Ue;if(ge?(Vt(ge,"touchend",se),Vt(ge,"touchmove",Te),Vt(ge,"touchcancel",se),Vt(D,"touchstart",ov)):Vt(D,"mousemove",Te),Vt(Et,"touchforcechange",ci),(!su||!ge)&&(Vt(D,"mouseup",se),N&&N.target&&Vt(N.target,"mouseup",se)),ce=!1,ne&&(p=ev=Yr(),u.isDragging=!1),sv(fe),De&&!oe){N&&(Vt(N.target,"change",se),u.pointerEvent=z),cu(g,!1),kt(u,"release","onRelease"),kt(u,"click","onClick"),De=!1;return}for(pe=g.length;--pe>-1;)pd(g[pe],"cursor",n.cursor||(n.cursor!==!1?al:null));if(ou--,N){if(ye=N.changedTouches,ye&&(N=ye[0],N!==B&&N.identifier!==te)){for(pe=ye.length;--pe>-1&&(N=ye[pe]).identifier!==te&&N.target!==t;);if(pe<0&&!ae)return}u.pointerEvent=z,u.pointerX=N.pageX,u.pointerY=N.pageY}return oe&&z?(ci(z),T=!0,kt(u,"release","onRelease")):z&&!ne?(T=!1,Le&&(n.snap||n.bounds)&&vt(n.inertia||n.throwProps),kt(u,"release","onRelease"),(!ol||z.type!=="touchmove")&&z.type.indexOf("cancel")===-1&&(kt(u,"click","onClick"),Yr()-E<300&&kt(u,"doubleclick","onDoubleClick"),We=z.target||t,E=Yr(),Ue=function(){E!==ot&&u.enabled()&&!u.isPressed&&!z.defaultPrevented&&(We.click?We.click():D.createEvent&&(Re=D.createEvent("MouseEvents"),Re.initMouseEvent("click",!0,!0,Et,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),We.dispatchEvent(Re)))},!ol&&!z.defaultPrevented&&dt.delayedCall(.05,Ue))):(vt(n.inertia||n.throwProps),!u.allowEventDefault&&z&&(n.dragClickables!==!1||!b.call(u,z.target))&&ne&&(!W||Pe&&W===Pe)&&z.cancelable!==!1?(T=!0,ci(z)):T=!1,kt(u,"release","onRelease")),Ie()&&j.duration(u.tween.duration()),ne&&kt(u,"dragend","onDragEnd"),!0},Ee=function(N){if(N&&u.isDragging&&!G){var ae=N.target||t.parentNode,z=ae.scrollLeft-ae._gsScrollX,ne=ae.scrollTop-ae._gsScrollY;(z||ne)&&(Me?(L-=z*Me.a+ne*Me.c,H-=ne*Me.d+z*Me.b):(L-=z,H-=ne),ae._gsScrollX+=z,ae._gsScrollY+=ne,at(u.pointerX,u.pointerY))}},Q=function(N){var ae=Yr(),z=ae-E<100,ne=ae-p<50,oe=z&&ot===E,j=u.pointerEvent&&u.pointerEvent.defaultPrevented,ye=z&&A===E,pe=N.isTrusted||N.isTrusted==null&&z&&oe;if((oe||ne&&u.vars.suppressClickOnDrag!==!1)&&N.stopImmediatePropagation&&N.stopImmediatePropagation(),z&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!oe||pe&&!ye)){pe&&oe&&(A=E),ot=E;return}(u.isPressed||ne||z)&&(!pe||!N.detail||!z||j)&&ci(N),!z&&!ne&&!he&&(N&&N.target&&(u.pointerEvent=N),kt(u,"click","onClick"))},Se=function(N){return Me?{x:N.x*Me.a+N.y*Me.c+Me.e,y:N.x*Me.b+N.y*Me.d+Me.f}:{x:N.x,y:N.y}};return me=e.get(t),me&&me.kill(),i.startDrag=function(se,N){var ae,z,ne,oe;Ke(se||u.pointerEvent,!0),N&&!u.hitTest(se||u.pointerEvent)&&(ae=Ko(se||u.pointerEvent),z=Ko(t),ne=Se({x:ae.left+ae.width/2,y:ae.top+ae.height/2}),oe=Se({x:z.left+z.width/2,y:z.top+z.height/2}),L-=ne.x-oe.x,H-=ne.y-oe.y),u.isDragging||(u.isDragging=he=!0,kt(u,"dragstart","onDragStart"))},i.drag=Te,i.endDrag=function(se){return O(se||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(Yr()-p)/1e3},i.timeSinceClick=function(){return(Yr()-E)/1e3},i.hitTest=function(se,N){return e.hitTest(u.target,se,N)},i.getDirection=function(se,N){var ae=se==="velocity"&&Mi?se:ll(se)&&!a?"element":"start",z,ne,oe,j,ye,pe;return ae==="element"&&(ye=Ko(u.target),pe=Ko(se)),z=ae==="start"?u.x-U:ae==="velocity"?Mi.getVelocity(t,l):ye.left+ye.width/2-(pe.left+pe.width/2),a?z<0?"counter-clockwise":"clockwise":(N=N||2,ne=ae==="start"?u.y-k:ae==="velocity"?Mi.getVelocity(t,c):ye.top+ye.height/2-(pe.top+pe.height/2),oe=Math.abs(z/ne),j=oe<1/N?"":z<0?"left":"right",oe<N&&(j!==""&&(j+="-"),j+=ne<0?"up":"down"),j)},i.applyBounds=function(se,N){var ae,z,ne,oe,j,ye;if(se&&n.bounds!==se)return n.bounds=se,u.update(!0,N);if(Ne(!0),be(),q&&!Ie()){if(ae=u.x,z=u.y,ae>ie?ae=ie:ae<le&&(ae=le),z>Z?z=Z:z<P&&(z=P),(u.x!==ae||u.y!==z)&&(ne=!0,u.x=u.endX=ae,a?u.endRotation=ae:u.y=u.endY=z,ce=!0,fe(!0),u.autoScroll&&!u.isDragging))for(dd(t.parentNode),oe=t,pr.scrollTop=Et.pageYOffset!=null?Et.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,pr.scrollLeft=Et.pageXOffset!=null?Et.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft;oe&&!ye;)ye=Zo(oe.parentNode),j=ye?pr:oe.parentNode,f&&j.scrollTop>j._gsMaxScrollY&&(j.scrollTop=j._gsMaxScrollY),h&&j.scrollLeft>j._gsMaxScrollX&&(j.scrollLeft=j._gsMaxScrollX),oe=j;u.isThrowing&&(ne||u.endX>ie||u.endX<le||u.endY>Z||u.endY<P)&&vt(n.inertia||n.throwProps,ne)}return u},i.update=function(se,N,ae){if(N&&u.isPressed){var z=an(t),ne=re.apply({x:u.x-U,y:u.y-k}),oe=an(t.parentNode,!0);oe.apply({x:z.e-ne.x,y:z.f-ne.y},ne),u.x-=ne.x-oe.e,u.y-=ne.y-oe.f,fe(!0),ke()}var j=u.x,ye=u.y;return qe(!N),se?u.applyBounds():(ce&&ae&&fe(!0),Ne(!0)),N&&(at(u.pointerX,u.pointerY),ce&&fe(!0)),u.isPressed&&!N&&(h&&Math.abs(j-u.x)>.01||f&&Math.abs(ye-u.y)>.01&&!a)&&ke(),u.autoScroll&&(dd(t.parentNode,u.isDragging),m=u.isDragging,fe(!0),lv(t,Ee),av(t,Ee)),u},i.enable=function(se){var N={lazy:!0},ae,z,ne;if(n.cursor!==!1&&(N.cursor=n.cursor||al),dt.utils.checkPrefix("touchCallout")&&(N.touchCallout="none"),se!=="soft"){for(nv(g,h===f?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),z=g.length;--z>-1;)ne=g[z],su||qt(ne,"mousedown",Ke),qt(ne,"touchstart",Ke),qt(ne,"click",Q,!0),dt.set(ne,N),ne.getBBox&&ne.ownerSVGElement&&h!==f&&dt.set(ne.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||qt(ne,"contextmenu",de);cu(g,!1)}return av(t,Ee),X=!0,Mi&&se!=="soft"&&Mi.track(G||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ae="d"+pD++,Xo[ae]=u,G&&(G.enable(),G.element._gsDragID=ae),(n.bounds||a)&&ke(),n.bounds&&u.applyBounds(),u},i.disable=function(se){for(var N=u.isDragging,ae=g.length,z;--ae>-1;)pd(g[ae],"cursor",null);if(se!=="soft"){for(nv(g,null),ae=g.length;--ae>-1;)z=g[ae],pd(z,"touchCallout",null),Vt(z,"mousedown",Ke),Vt(z,"touchstart",Ke),Vt(z,"click",Q,!0),Vt(z,"contextmenu",de);cu(g,!0),ge&&(Vt(ge,"touchcancel",O),Vt(ge,"touchend",O),Vt(ge,"touchmove",Te)),Vt(D,"mouseup",O),Vt(D,"mousemove",Te)}return lv(t,Ee),X=!1,Mi&&se!=="soft"&&(Mi.untrack(G||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),G&&G.disable(),sv(fe),u.isDragging=u.isPressed=De=!1,N&&kt(u,"dragend","onDragEnd"),u},i.enabled=function(se,N){return arguments.length?se?u.enable(N):u.disable(N):X},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),dt.set(g,{clearProps:"userSelect"}),delete Xo[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~r.indexOf("scroll")&&(G=i.scrollProxy=new TD(t,gD({onKill:function(){u.isPressed&&O(null)}},n)),t.style.overflowY=f&&!cd?"auto":"hidden",t.style.overflowX=h&&!cd?"auto":"hidden",t=G.content),a?_.rotation=1:(h&&(_[l]=1),f&&(_[c]=1)),C.force3D="force3D"in n?n.force3D:!0,K0(q0(i)),i.enable(),i}return e.register=function(n){dt=n,_d()},e.create=function(n,i){return ld||_d(!0),Wr(n).map(function(r){return new e(r,i)})},e.get=function(n){return Xo[(Wr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(Yr()-ev)/1e3},e.hitTest=function(n,i,r){if(n===i)return!1;var o=Ko(n),a=Ko(i),l=o.top,c=o.left,h=o.right,f=o.bottom,d=o.width,u=o.height,g=a.left>h||a.right<c||a.top>f||a.bottom<l,_,p,m;return g||!r?!g:(m=(r+"").indexOf("%")!==-1,r=parseFloat(r)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(h,a.right)-_.left,_.height=Math.min(f,a.bottom)-_.top,_.width<0||_.height<0?!1:m?(r*=.01,p=_.width*_.height,p>=d*u*r||p>=a.width*a.height*r):_.width>r&&_.height>r)},e}(bD);vD(Jo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Jo.zIndex=1e3,Jo.version="3.12.5",j0()&&dt.registerPlugin(Jo);/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hi,vd,fl,fv,jo,Qo,xd,dv,pv=function(){return Hi||typeof window!="undefined"&&(Hi=window.gsap)},yd={},wD=function(e){return Math.round(e*1e4)/1e4},Sd=function(e){return dv(e).id},dl=function(e){return yd[Sd(typeof e=="string"?fl(e)[0]:e)]},mv=function(e){var t=jo,n;if(e-xd>=.05)for(xd=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},DD={deg:360,rad:Math.PI*2},Ed=function(){Hi=pv(),Hi&&(fl=Hi.utils.toArray,fv=Hi.utils.getUnit,dv=Hi.core.getCache,Qo=Hi.ticker,vd=1)},AD=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=DD[n||fv(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=Qo.time,i&&(this._next=i,i._prev=this)},pl=function(){function s(t,n){vd||Ed(),this.target=fl(t)[0],yd[Sd(this.target)]=this,this._props={},n&&this.add(n)}s.register=function(n){Hi=n,Ed()};var e=s.prototype;return e.get=function(n,i){var r=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,a,l;return o=parseFloat(i?r.v1:r.g(r.t,r.p)),a=o-parseFloat(r.v2),l=r.rCap,l&&(a=a%l,a!==a%(l/2)&&(a=a<0?a+l:a-l)),wD(a/((i?r.t1:Qo.time)-r.t2))},e.getAll=function(){var n={},i=this._props,r;for(r in i)n[r]=this.get(r);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||(jo||(Qo.add(mv),xd=Qo.time),jo=this._props[n]=new AD(this.target,n,i,jo))},e.remove=function(n){var i=this._props[n],r,o;i&&(r=i._prev,o=i._next,r&&(r._next=o),o?o._prev=r:jo===i&&(Qo.remove(mv),jo=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete yd[Sd(this.target)]},s.track=function(n,i,r){vd||Ed();for(var o=[],a=fl(n),l=i.split(","),c=(r||"").split(","),h=a.length,f,d;h--;){for(f=dl(a[h])||new s(a[h]),d=l.length;d--;)f.add(l[d],c[d]||c[0]);o.push(f)}return o},s.untrack=function(n,i){var r=(i||"").split(",");fl(n).forEach(function(o){var a=dl(o);a&&(r.length?r.forEach(function(l){return a.remove(l)}):a.kill(1))})},s.isTracking=function(n,i){var r=dl(n);return r&&r.isTracking(i)},s.getVelocity=function(n,i){var r=dl(n);return!r||!r.isTracking(i)?console.warn("Not tracking velocity of "+i):r.get(i)},s}();pl.getByTarget=dl,pv()&&Hi.registerPlugin(pl);/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,gv,_v,vv,Md,ml,xv,yv,Sv,Td,Ev,gl,bd,Mv,uu=pl.getByTarget,Tv=function(){return Zt||typeof window!="undefined"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},CD=function(e){return typeof e=="string"},_l=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},wd=function(e){return typeof e=="function"},RD=1,bv=Array.isArray,PD=function(e){return e},Hs=1e10,wv=1/Hs,Dv=.05,LD=function(e){return Math.round(e*1e4)/1e4},FD=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},ND=function s(e){var t={},n,i;for(n in e)t[n]=qr(i=e[n])&&!bv(i)?s(i):i;return t},Av=function(e,t,n,i,r){var o=t.length,a=0,l=Hs,c,h,f,d;if(qr(e)){for(;o--;){c=t[o],h=0;for(f in e)d=c[f]-e[f],h+=d*d;h<l&&(a=o,l=h)}if((r||Hs)<Hs&&r<Math.sqrt(l))return e}else for(;o--;)c=t[o],h=c-e,h<0&&(h=-h),h<l&&c>=i&&c<=n&&(a=o,l=h);return t[a]},Cv=function(e,t,n,i,r,o,a){if(e.end==="auto")return e;var l=e.end,c,h;if(n=isNaN(n)?Hs:n,i=isNaN(i)?-Hs:i,qr(t)){if(c=t.calculated?t:(wd(l)?l(t,a):Av(t,l,n,i,o))||t,!t.calculated){for(h in c)t[h]=c[h];t.calculated=!0}c=c[r]}else c=wd(l)?l(t,a):bv(l)?Av(t,l,n,i,o):parseFloat(l);return c>n?c=n:c<i&&(c=i),{max:c,min:c,unitFactor:e.unitFactor}},hu=function(e,t,n){return isNaN(e[t])?n:+e[t]},Dd=function(e,t){return t*Dv*e/Td},Rv=function(e,t,n){return Math.abs((t-e)*Td/n/Dv)},Pv={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},Lv=function(e,t,n,i){if(t.linkedProps){var r=t.linkedProps.split(","),o={},a,l,c,h,f,d;for(a=0;a<r.length;a++)l=r[a],c=t[l],c&&(_l(c.velocity)?h=c.velocity:(f=f||uu(e),h=f&&f.isTracking(l)?f.get(l):0),d=Math.abs(h/hu(c,"resistance",i)),o[l]=parseFloat(n(e,l))+Dd(h,d));return o}},ID=function(e,t,n,i,r,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),r===void 0&&(r=1),o===void 0&&(o=0),CD(e)&&(e=vv(e)[0]),!e)return 0;var a=0,l=Hs,c=t.inertia||t,h=Sv(e).get,f=hu(c,"resistance",ml.resistance),d,u,g,_,p,m,S,v,y,M;M=Lv(e,c,h,f);for(d in c)Pv[d]||(u=c[d],qr(u)||(v=v||uu(e),v&&v.isTracking(d)?u=_l(u)?{velocity:u}:{velocity:v.get(d)}:(_=+u||0,g=Math.abs(_/f))),qr(u)&&(_l(u.velocity)?_=u.velocity:(v=v||uu(e),_=v&&v.isTracking(d)?v.get(d):0),g=Ev(i,n,Math.abs(_/hu(u,"resistance",f))),p=parseFloat(h(e,d))||0,m=p+Dd(_,g),"end"in u&&(u=Cv(u,M&&d in M?M:m,u.max,u.min,d,c.radius,_),o&&(gl===t&&(gl=c=ND(t)),c[d]=FD(u,c[d],"end"))),"max"in u&&m>+u.max+wv?(y=u.unitFactor||ml.unitFactors[d]||1,S=p>u.max&&u.min!==u.max||_*y>-15&&_*y<45?i+(n-i)*.1:Rv(p,u.max,_),S+r<l&&(l=S+r)):"min"in u&&m<+u.min-wv&&(y=u.unitFactor||ml.unitFactors[d]||1,S=p<u.min&&u.min!==u.max||_*y>-45&&_*y<15?i+(n-i)*.1:Rv(p,u.min,_),S+r<l&&(l=S+r)),S>a&&(a=S)),g>a&&(a=g));return a>l&&(a=l),a>n?n:a<i?i:a},Fv=function(){Zt=Tv(),Zt&&(_v=Zt.parseEase,vv=Zt.utils.toArray,xv=Zt.utils.getUnit,Sv=Zt.core.getCache,Ev=Zt.utils.clamp,bd=Zt.core.getStyleSaver,Mv=Zt.core.reverting||function(){},Md=_v("power3"),Td=Md(.05),yv=Zt.core.PropTween,Zt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),ml=Zt.config(),Zt.registerPlugin(pl),gv=1)},Ad={version:"3.12.5",name:"inertia",register:function(e){Zt=e,Fv()},init:function(e,t,n,i,r){gv||Fv();var o=uu(e);if(t==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=o.getAll()}this.styles=bd&&typeof e.style=="object"&&bd(e),this.target=e,this.tween=n,gl=t;var a=e._gsap,l=a.get,c=t.duration,h=qr(c),f=t.preventOvershoot||h&&c.overshoot===0,d=hu(t,"resistance",ml.resistance),u=_l(c)?c:ID(e,t,h&&c.max||10,h&&c.min||.2,h&&"overshoot"in c?+c.overshoot:f?0:1,!0),g,_,p,m,S,v,y,M,b;t=gl,gl=0,b=Lv(e,t,l,d);for(g in t)Pv[g]||(_=t[g],wd(_)&&(_=_(i,e,r)),_l(_)?S=_:qr(_)&&!isNaN(_.velocity)?S=+_.velocity:o&&o.isTracking(g)?S=o.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),v=Dd(S,u),M=0,p=l(e,g),m=xv(p),p=parseFloat(p),qr(_)&&(y=p+v,"end"in _&&(_=Cv(_,b&&g in b?b:y,_.max,_.min,g,t.radius,S)),"max"in _&&+_.max<y?f||_.preventOvershoot?v=_.max-p:M=_.max-p-v:"min"in _&&+_.min>y&&(f||_.preventOvershoot?v=_.min-p:M=_.min-p-v)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new yv(this._pt,e,g,p,0,PD,0,a.set(e,g,this)),this._pt.u=m||0,this._pt.c1=v,this._pt.c2=M);return n.duration(u),RD},render:function(e,t){var n=t._pt;if(e=Md(t.tween._time/t.tween._dur),e||!Mv())for(;n;)n.set(n.t,n.p,LD(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s){return Ad[s]=pl[s]}),Tv()&&Zt.registerPlugin(Ad);/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var UD=1,ea,gn,wt,vl,Zr,mr,Cd,Nv=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Rd={},Iv=180/Math.PI,OD=Math.PI/180,fu={},Uv={},du={},Pd=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},BD=Pd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),pu=Pd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),xl=function(e){return ea(e)[0]||console.warn("Element not found:",e)},ta=function(e){return Math.round(e*1e4)/1e4||0},Ld=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Ov={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Bv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},kv=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},na=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},Fd={},zv=function(e){var t=Fd[e]=Pd(e);return du[e]=t.concat(pu),t},kD=function(e){var t=e._gsap||gn.core.getCache(e);return t.gmCache===gn.ticker.frame?t.gMatrix:(t.gmCache=gn.ticker.frame,t.gMatrix=an(e,!0,!1,!0))},zD=function s(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,r=1e3*Math.pow(10,n)*(t?-1:1),o=t?-r*900:0;e;)o+=r,e=e.previousSibling;return i?o+s(i,t,n+1):o},mu=function(e,t,n){return e.forEach(function(i){return i.d=zD(n?i.element:i.t,t)}),e.sort(function(i,r){return i.d-r.d}),e},yl=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],r=t.length,o,a;r--;)o=t[r],a=n[o]||n.getPropertyValue(o),i.push(a?o:Uv[o]||(Uv[o]=kv(o)),a);return n},gu=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Hv=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(gu)},Nd="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Id=function(e,t,n){var i=e.element,r=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,h=4,f,d,u;if(typeof t!="object"&&(t=e),wt&&n!==1)return wt._abs.push({t:i,b:e,a:e,sd:0}),wt._final.push(function(){return(e.cache.uncache=1)&&gu(e)}),i;for(d=l("display")==="none",(!e.isVisible||d)&&(d&&(yl(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=r=e.width||t.width,e.height=o=e.height||t.height),yl(e,Nd),u=window.getComputedStyle(i);h--;)c[Nd[h]]=u[Nd[h]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=r+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new Gs(i);else if(f=na(e,fu),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new hr(1,0,0,1,g.left+id(),g.top+nd())}else f.matrix=an(i,!1,!1,!0);return f=ia(f,e,!0),e.x=mr(f.x,.01),e.y=mr(f.y,.01),i},Gv=function(e,t){return t!==!0&&(t=ea(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},Vv=function(e){return mu(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Id(t.sd<0?t.b:t.a,t.b,1)})},HD=function(e,t){return t&&e.idLookup[Ud(t).id]||e.elementStates[0]},Ud=function(e,t,n,i){return e instanceof Gs?e:e instanceof bi?HD(e,i):new Gs(typeof e=="string"?xl(e)||console.warn(e+" not found"):e,t,n)},GD=function(e,t){for(var n=gn.getProperty(e.element,null,"native"),i=e.props={},r=t.length;r--;)i[t[r]]=(n(t[r])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},Wv=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},VD=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+UD++),t},Xv=function(e){return e.map(function(t){return t.element})},$v=function(e,t,n){return e&&t.length&&n.add(e(Xv(t),n,new bi(t,0,!0)),0)},ia=function(e,t,n,i,r,o){var a=e.element,l=e.cache,c=e.parent,h=e.x,f=e.y,d=t.width,u=t.height,g=t.scaleX,_=t.scaleY,p=t.rotation,m=t.bounds,S=o&&Cd&&Cd(a,"transform"),v=e,y=t.matrix,M=y.e,b=y.f,E=e.bounds.width!==m.width||e.bounds.height!==m.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==p,C=!E&&e.simple&&t.simple&&!r,F,x,D,X,G,L,H;return C||!c?(g=_=1,p=F=0):(G=kD(c),L=G.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=ta(Math.atan2(L.b,L.a)*Iv),F=ta(Math.atan2(L.c,L.d)*Iv+p)%360,g=Math.sqrt(Math.pow(L.a,2)+Math.pow(L.b,2)),_=Math.sqrt(Math.pow(L.c,2)+Math.pow(L.d,2))*Math.cos(F*OD),r&&(r=ea(r)[0],X=gn.getProperty(r),H=r.getBBox&&typeof r.getBBox=="function"&&r.getBBox(),v={scaleX:X("scaleX"),scaleY:X("scaleY"),width:H?H.width:Math.ceil(parseFloat(X("width","px"))),height:H?H.height:parseFloat(X("height","px"))}),l.rotation=p+"deg",l.skewX=F+"deg"),n?(g*=d===v.width||!v.width?1:d/v.width,_*=u===v.height||!v.height?1:u/v.height,l.scaleX=g,l.scaleY=_):(d=mr(d*g/v.scaleX,0),u=mr(u*_/v.scaleY,0),a.style.width=d+"px",a.style.height=u+"px"),i&&Wv(a,t.props),C||!c?(h+=M-e.matrix.e,f+=b-e.matrix.f):E||c!==t.parent?(l.renderTransform(1,l),L=an(r||a,!1,!1,!0),x=G.apply({x:L.e,y:L.f}),D=G.apply({x:M,y:b}),h+=D.x-x.x,f+=D.y-x.y):(G.e=G.f=0,D=G.apply({x:M-e.matrix.e,y:b-e.matrix.f}),h+=D.x,f+=D.y),h=mr(h,.02),f=mr(f,.02),o&&!(o instanceof Gs)?S&&S.revert():(l.x=h+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=h,o.y=f,o.rotation=p,o.skewX=F,n?(o.scaleX=g,o.scaleY=_):(o.width=d,o.height=u)),o||l},Od=function(e,t){return e instanceof bi?e:new bi(e,t)},Yv=function(e,t,n){var i=e.idLookup[n],r=e.alt[n];return r.isVisible&&(!(t.getElementState(r.element)||r).isVisible||!i.isVisible)?r:i},Bd=[],kd="width,height,overflowX,overflowY".split(","),_u,qv=function(e){if(e!==_u){var t=Zr.style,n=Zr.clientWidth===window.outerWidth,i=Zr.clientHeight===window.outerHeight,r=4;if(e&&(n||i)){for(;r--;)Bd[r]=t[kd[r]];n&&(t.width=Zr.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=Zr.clientHeight+"px",t.overflowX="hidden"),_u=e}else if(_u){for(;r--;)Bd[r]?t[kd[r]]=Bd[r]:t.removeProperty(kv(kd[r]));_u=e}}},zd=function(e,t,n,i){e instanceof bi&&t instanceof bi||console.warn("Not a valid state object."),n=n||{};var r=n,o=r.clearProps,a=r.onEnter,l=r.onLeave,c=r.absolute,h=r.absoluteOnLeave,f=r.custom,d=r.delay,u=r.paused,g=r.repeat,_=r.repeatDelay,p=r.yoyo,m=r.toggleClass,S=r.nested,v=r.zIndex,y=r.scale,M=r.fade,b=r.stagger,E=r.spin,C=r.prune,F=("props"in n?n:e).props,x=na(n,Ov),D=gn.timeline({delay:d,paused:u,repeat:g,repeatDelay:_,yoyo:p,data:"isFlip"}),X=x,G=[],L=[],H=[],U=[],k=E===!0?1:E||0,q=typeof E=="function"?E:function(){return k},I=e.interrupted||t.interrupted,R=D[i!==1?"to":"from"],ie,le,Z,P,B,te,ue,ce,me,Ce,ve,V,De,ge;for(le in t.idLookup)ve=t.alt[le]?Yv(t,e,le):t.idLookup[le],B=ve.element,Ce=e.idLookup[le],e.alt[le]&&B===Ce.element&&(e.alt[le].isVisible||!ve.isVisible)&&(Ce=e.alt[le]),Ce?(te={t:B,b:Ce,a:ve,sd:Ce.element===B?0:ve.isVisible?1:-1},H.push(te),te.sd&&(te.sd<0&&(te.b=ve,te.a=Ce),I&&yl(te.b,F?du[F]:pu),M&&H.push(te.swap={t:Ce.element,b:te.b,a:te.a,sd:-te.sd,swap:te})),B._flip=Ce.element._flip=wt?wt.timeline:D):ve.isVisible&&(H.push({t:B,b:na(ve,{isVisible:1}),a:ve,sd:0,entering:1}),B._flip=wt?wt.timeline:D);if(F&&(Fd[F]||zv(F)).forEach(function(W){return x[W]=function(Pe){return H[Pe].a.props[W]}}),H.finalStates=me=[],V=function(){for(mu(H),qv(!0),P=0;P<H.length;P++)te=H[P],De=te.a,ge=te.b,C&&!De.isDifferent(ge)&&!te.entering?H.splice(P--,1):(B=te.t,S&&!(te.sd<0)&&P&&(De.matrix=an(B,!1,!1,!0)),ge.isVisible&&De.isVisible?(te.sd<0?(ue=new Gs(B,F,e.simple),ia(ue,De,y,0,0,ue),ue.matrix=an(B,!1,!1,!0),ue.css=te.b.css,te.a=De=ue,M&&(B.style.opacity=I?ge.opacity:De.opacity),b&&U.push(B)):te.sd>0&&M&&(B.style.opacity=I?De.opacity-ge.opacity:"0"),ia(De,ge,y,F)):ge.isVisible!==De.isVisible&&(ge.isVisible?De.isVisible||(ge.css=De.css,L.push(ge),H.splice(P--,1),c&&S&&ia(De,ge,y,F)):(De.isVisible&&G.push(De),H.splice(P--,1))),y||(B.style.maxWidth=Math.max(De.width,ge.width)+"px",B.style.maxHeight=Math.max(De.height,ge.height)+"px",B.style.minWidth=Math.min(De.width,ge.width)+"px",B.style.minHeight=Math.min(De.height,ge.height)+"px"),S&&m&&B.classList.add(m)),me.push(De);var Pe;if(m&&(Pe=me.map(function(A){return A.element}),S&&Pe.forEach(function(A){return A.classList.remove(m)})),qv(!1),y?(x.scaleX=function(A){return H[A].a.scaleX},x.scaleY=function(A){return H[A].a.scaleY}):(x.width=function(A){return H[A].a.width+"px"},x.height=function(A){return H[A].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(A){return H[A].a.x+"px"},x.y=function(A){return H[A].a.y+"px"},x.rotation=function(A){return H[A].a.rotation+(E?q(A,ce[A],ce)*360:0)},x.skewX=function(A){return H[A].a.skewX},ce=H.map(function(A){return A.t}),(v||v===0)&&(x.modifiers={zIndex:function(){return v}},x.zIndex=v,x.immediateRender=n.immediateRender!==!1),M&&(x.opacity=function(A){return H[A].sd<0?0:H[A].sd>0?H[A].a.opacity:"+=0"}),U.length){b=gn.utils.distribute(b);var Xe=ce.slice(U.length);x.stagger=function(A,T){return b(~U.indexOf(T)?ce.indexOf(H[A].swap.t):A,T,Xe)}}if(BD.forEach(function(A){return n[A]&&D.eventCallback(A,n[A],n[A+"Params"])}),f&&ce.length){X=na(x,Ov),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(le in f)ie=na(f[le],Bv),ie[le]=x[le],!("duration"in ie)&&"duration"in x&&(ie.duration=x.duration),ie.stagger=x.stagger,R.call(D,ce,ie,0),delete X[le]}(ce.length||L.length||G.length)&&(m&&D.add(function(){return Ld(Pe,m,D._zTime<0?"remove":"add")},0)&&!u&&Ld(Pe,m,"add"),ce.length&&R.call(D,ce,X,0)),$v(a,G,D),$v(l,L,D);var ot=wt&&wt.timeline;ot&&(ot.add(D,0),wt._final.push(function(){return Hv(H,!o)})),Z=D.duration(),D.call(function(){var A=D.time()>=Z;A&&!ot&&Hv(H,!o),m&&Ld(Pe,m,A?"remove":"add")})},h&&(c=H.filter(function(W){return!W.sd&&!W.a.isVisible&&W.b.isVisible}).map(function(W){return W.a.element})),wt){var Me;c&&(Me=wt._abs).push.apply(Me,Gv(H,c)),wt._run.push(V)}else c&&Vv(Gv(H,c)),V();var Le=wt?wt.timeline:D;return Le.revert=function(){return Hd(Le,1,1)},Le},WD=function s(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(s)},Hd=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(WD(e),t<2&&e.progress(1),e.kill()),!0},vu=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,r=i.length,o;r--;)o=i[r],t[o.id]?n[o.id]=o:t[o.id]=o},bi=function(){function s(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=Xv(t),this.elementStates=t,vu(this);else{this.targets=ea(t);var r=n&&(n.kill===!1||n.batch&&!n.kill);wt&&!r&&wt._kill.push(this),this.update(r||!!wt)}}var e=s.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(r){return new Gs(r,i.props,i.simple)}),vu(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,vu(this),this},e.fit=function(n,i,r){for(var o=mu(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,h;l<o.length;l++)c=o[l],r&&(c.matrix=an(c.element,!1,!1,!0)),h=a[c.id],h&&ia(c,h,i,!0,0,c),c.matrix=an(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var r=this.getElementState(n)||fu;return(i in r?r:r.props||fu)[i]},e.add=function(n){for(var i=n.targets.length,r=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=r[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),vu(this),this},e.compare=function(n){var i=n.idLookup,r=this.idLookup,o=[],a=[],l=[],c=[],h=[],f=n.alt,d=this.alt,u=function(C,F,x){return(C.isVisible!==F.isVisible?C.isVisible?l:c:C.isVisible?a:o).push(x)&&h.push(x)},g=function(C,F,x){return h.indexOf(x)<0&&u(C,F,x)},_,p,m,S,v,y,M,b;for(m in i)v=f[m],y=d[m],_=v?Yv(n,this,m):i[m],S=_.element,p=r[m],y?(b=p.isVisible||!y.isVisible&&S===p.element?p:y,M=v&&!_.isVisible&&!v.isVisible&&b.element===v.element?v:_,M.isVisible&&b.isVisible&&M.element!==b.element?((M.isDifferent(b)?a:o).push(M.element,b.element),h.push(M.element,b.element)):u(M,b,M.element),v&&M.element===v.element&&(v=i[m]),g(M.element!==p.element&&v?v:M,p,p.element),g(v&&v.element===y.element?v:M,y,y.element),v&&g(v,y.element===v.element?y:p,v.element)):(p?p.isDifferent(_)?u(_,p,S):o.push(S):l.push(S),v&&g(v,p,v.element));for(m in r)i[m]||(c.push(r[m].element),d[m]&&c.push(d[m].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=du[this.props]||pu,i=this.elementStates.length;i--;)yl(this.elementStates[i],n)},e.interrupt=function(n){var i=this,r=[];this.targets.forEach(function(o){var a=o._flip,l=Hd(a,n?0:1);n&&l&&r.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&r.push(a)}),!n&&r.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!r.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(xl(n))]},e.makeAbsolute=function(){return mu(this.elementStates.slice(0),!0,!0).map(Id)},s}(),Gs=function(){function s(t,n,i){this.element=t,this.update(n,i)}var e=s.prototype;return e.isDifferent=function(n){var i=this.bounds,r=n.bounds;return i.top!==r.top||i.left!==r.left||i.width!==r.width||i.height!==r.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var r=this,o=r.element,a=gn.getProperty(o),l=gn.core.getCache(o),c=o.getBoundingClientRect(),h=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new hr(1,0,0,1,c.left+id(),c.top+nd()):an(o,!1,!1,!0);r.getProp=a,r.element=o,r.id=VD(o),r.matrix=f,r.cache=l,r.bounds=c,r.isVisible=!!(c.width||c.height||c.left||c.top),r.display=a("display"),r.position=a("position"),r.parent=o.parentNode,r.x=a("x"),r.y=a("y"),r.scaleX=l.scaleX,r.scaleY=l.scaleY,r.rotation=a("rotation"),r.skewX=a("skewX"),r.opacity=a("opacity"),r.width=h?h.width:mr(a("width","px"),.04),r.height=h?h.height:mr(a("height","px"),.04),n&&GD(r,Fd[n]||zv(n)),r.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Y0(o).inverse(),r.simple=i||ta(f.a)===1&&!ta(f.b)&&!ta(f.c)&&ta(f.d)===1,r.uncache=0},s}(),XD=function(){function s(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=s.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},s}(),$D=function(){function s(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new bi,this.timeline=gn.timeline()}var e=s.prototype;return e.add=function(n){var i=this.actions.filter(function(r){return r.vars===n});return i.length?i[0]:(i=new XD(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,r=wt,o=vl;return wt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,vl=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),vl=o,wt=r,this.killConflicts(),this},e.animate=function(){var n=this,i=wt,r=this.timeline,o=this.actions.length,a,l;for(wt=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var h=c.vars.onEnter,f=c.vars.onLeave,d=c.targets,u,g;d&&d.length&&(h||f)&&(u=new bi,c.states.forEach(function(_){return u.add(_)}),g=u.compare(ra.getState(d)),g.enter.length&&h&&h(g.enter),g.leave.length&&f&&f(g.leave))}),Vv(this._abs),this._run.forEach(function(c){return c()}),l=r.duration(),a=this._final.slice(0),r.add(function(){l<=r.time()&&(a.forEach(function(c){return c()}),Nv(n,"onComplete"))}),wt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Nv(this,"onStart"),r.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(r){if(r.vars.loadState){var o,a=function l(c){c&&(r.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),r.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var r=this;return this!==wt&&(n||this.getState(i),this.loadState(function(){r._killed||(r.setState(),r.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,r;i--;)if(r=this.actions[i].getStateById(n),r)return r;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Rd[this.id]},s}(),ra=function(){function s(){}return s.getState=function(t,n){var i=Od(t,n);return vl&&vl.states.push(i),n&&n.batch&&s.batch(n.batch).state.add(i),i},s.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),zd(t,Od(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},s.to=function(t,n){return zd(t,Od(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},s.fromTo=function(t,n,i){return zd(t,n,i)},s.fit=function(t,n,i){var r=i?na(i,Bv):{},o=i||r,a=o.absolute,l=o.scale,c=o.getVars,h=o.props,f=o.runBackwards,d=o.onComplete,u=o.simple,g=i&&i.fitChild&&xl(i.fitChild),_=Ud(n,h,u,t),p=Ud(t,0,u,_),m=h?du[h]:pu,S=gn.context();return h&&Wv(r,_.props),yl(p,m),f&&("immediateRender"in r||(r.immediateRender=!0),r.onComplete=function(){gu(p),d&&d.apply(this,arguments)}),a&&Id(p,_),r=ia(p,_,l||g,h,g,r.duration||c?r:0),S&&!c&&S.add(function(){return function(){return gu(p)}}),c?r:r.duration?gn.to(p.element,r):null},s.makeAbsolute=function(t,n){return(t instanceof bi?t:new bi(t,n)).makeAbsolute()},s.batch=function(t){return t||(t="default"),Rd[t]||(Rd[t]=new $D(t))},s.killFlipsOf=function(t,n){(t instanceof bi?t.targets:ea(t)).forEach(function(i){return i&&Hd(i._flip,n!==!1?1:2)})},s.isFlipping=function(t){var n=s.getByTarget(t);return!!n&&n.isActive()},s.getByTarget=function(t){return(xl(t)||fu)._flip},s.getElementState=function(t,n){return new Gs(xl(t),n)},s.convertCoordinates=function(t,n,i){var r=an(n,!0,!0).multiply(an(t));return i?r.apply(i):r},s.register=function(t){if(Zr=typeof document!="undefined"&&document.body,Zr){gn=t,td(Zr),ea=gn.utils.toArray,Cd=gn.core.getStyleSaver;var n=gn.utils.snap(.1);mr=function(r,o){return n(parseFloat(r)+o)}}},s}();ra.version="3.12.5",typeof window!="undefined"&&window.gsap&&window.gsap.registerPlugin(ra);class YD{constructor(){if(this.$gallery=document.getElementById("odysseyGallery"),!this.$gallery){console.warn("Could not create Odyssey Gallery - container not found.");return}this.isActive=!1,this.$sourceContainer=null,this.zoomImageTL=null,this.$splineContainer=document.querySelector(".odyssey-gallery__spline-container"),this.splineIframe=this.initSpline(),this.initOdysseyGallery()}initOdysseyGallery(){console.log("init odyssey gallery drag"),this.$container=document.getElementById("odysseyGalleryContainer"),this.$galleryItems=this.$container.querySelectorAll(".odyssey-gallery__item:not(.odyssey-gallery__item--title)"),Jo.create(this.$container,{type:"x,y",bounds:this.$gallery,inertia:!0,onDragStart:()=>{et.to(this.$galleryItems,{scale:.95,duration:.4,ease:"power4.out"})},onDragEnd:()=>{et.to(this.$galleryItems,{scale:1,duration:.8,ease:"power4.out"})}}),console.log("init odyssey gallery click"),this.$target=document.querySelector(".odyssey-gallery__destination-target"),this.$targetContainer=document.querySelector(".odyssey-gallery__destination"),this.$galleryItems.forEach(e=>{e.addEventListener("click",t=>{this.isActive||(this.$sourceContainer=e,this.swapImage(e,this.$target,!0))})}),this.$targetContainer.addEventListener("click",e=>{this.isActive&&this.swapImage(this.$target,this.$sourceContainer,!1)}),this.initZoomImageTimeline()}initZoomImageTimeline(){const e=this.$targetContainer.querySelector(".odyssey-gallery__destination-backdrop");this.zoomImageTL=et.timeline({paused:!0}),this.zoomImageTL.from(e,{duration:.8,opacity:0,ease:"power4.inOut"},"start").to(this.$container,{duration:.8,filter:"blur(6px)",ease:"power4.inOut"},"start")}swapImage(e,t,n){const i=e.querySelector("img"),r=ra.getState(i);(i.parentNode===e?t:e).appendChild(i),n?(this.$targetContainer.classList.add("odyssey-gallery__destination--active"),this.zoomImageTL.play()):(this.zoomImageTL.reverse(),this.$targetContainer.classList.remove("odyssey-gallery__destination--active")),i.parentNode.style.zIndex=3e3,ra.from(r,{duration:.8,ease:"power4.inOut",absolute:!0,delay:.1,onComplete:()=>{i.parentNode.style.zIndex=""}}),this.isActive=n}initSpline(){if(!this.$splineContainer){console.error(`Spline container with id "${this.$splineContainer}" not found.`);return}console.log("init odyssey intro spline");const e=this.$splineContainer.getAttribute("data-spline");if(!e){console.error("Spline URL not found.");return}const t=document.createElement("iframe");return t.src=e,t.style.width="100%",t.style.height="100%",et.set(t,{opacity:0,y:10}),t.addEventListener("load",()=>{console.log("Spline iframe has loaded."),et.to(t,{opacity:1,y:0,duration:3,ease:"power4.out"})}),this.$splineContainer.appendChild(t),t}dispose(){console.log("dispose odyssey intro spline"),this.splineIframe.remove(),console.log(this.splineIframe)}}class qD{constructor(){if(this.$container=document.querySelector(".odyssey-story"),!this.$container){console.warn("No odyssey story container found (.odyssey-story)");return}this.init()}init(){const e=this.$container.querySelector(".odyssey-story__scale-container"),t=this.$container.querySelector(".scale-indicator"),n=e.querySelectorAll(".scale-item"),i=et.timeline({paused:!0}),r=this.$container.querySelectorAll(".odyssey-story__scene");i.from(n,{x:"-=8",scaleX:0,opacity:0,duration:.1,stagger:.01,ease:"power4.out"},"a"),i.from(t,{x:"+=8",opacity:0,duration:.2,ease:"power4.out"},"a"),tt.create({trigger:this.$container,start:"top top",end:"bottom bottom",scrub:!0,pin:e,onUpdate:o=>{et.set(t,{top:`${o.progress*100}%`})},onEnter:()=>{i.play()},onLeaveBack:()=>{i.reverse()}}),r.forEach(o=>{const a=o.querySelector(".odyssey-story__lead-container"),l=a.querySelector(".odyssey-story__lead");tt.create({trigger:o,start:"top top",end:"bottom bottom",pin:a,toggleActions:"play none none none",onEnter:()=>{l.classList.contains("done")||(applyExactTextShuffle(l,"in"),setTimeout(()=>{l.style.opacity=1,l.classList.add("done")},400))}})})}}class ZD{constructor(){this.$splineContainer=document.getElementById("introSpline"),this.splineIframe=this.initSpline()}initSpline(){if(!this.$splineContainer){console.error(`Spline container with id "${this.$splineContainer}" not found.`);return}console.log("init odyssey intro spline");const e=this.$splineContainer.getAttribute("data-spline");if(!e){console.error("Spline URL not found.");return}const t=document.createElement("iframe");return t.src=e,t.style.width="100%",t.style.height="100%",et.set(t,{opacity:0,y:10}),t.addEventListener("load",()=>{console.log("Spline iframe has loaded."),et.to(t,{opacity:1,y:0,duration:3,ease:"power4.out"})}),this.$splineContainer.appendChild(t),t}dispose(){console.log("dispose odyssey intro spline"),this.splineIframe.remove(),console.log(this.splineIframe)}}let Gd=null;const KD=s=>{console.log("setup odyssey view"),Gd=new ZD,new qD,new YD},JD=s=>{Gd&&Gd.dispose()};class jD{constructor(e){this.globalState={portalManager:null,lenisManager:e},this.barba=sS,this.init()}init(){this.barba.init({transitions:[{name:"leave-home",from:{namespace:["home"]},to:{namespace:["odyssey"]},leave:e=>(console.log("TRANS: leave home: Load spline already"),oS(e,this.globalState)),afterLeave:e=>(console.log("TRANS: clean up home"),aD(e,this.globalState)),enter:e=>(console.log("TRANS: enter odyssey"),cS(e,this.globalState))},{name:"enter-home",from:{namespace:["odyssey"]},to:{namespace:["home"]},leave:lS,afterLeave:e=>(console.log("TRANS: clean up odyssey"),JD(e,this.globalState)),enter:aS}],views:[{namespace:"home",beforeEnter:e=>(console.log("VIEW: home"),oD(e,this.globalState))},{namespace:"odyssey",beforeEnter:e=>(console.log("VIEW: odyssey"),KD(e,this.globalState))}]})}}var GA="",VA="",QD=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Zv={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(QD,function(){var t=document,n=t.createTextNode.bind(t);function i(Z,P,B){Z.style.setProperty(P,B)}function r(Z,P){return Z.appendChild(P)}function o(Z,P,B,te){var ue=t.createElement("span");return P&&(ue.className=P),B&&(!te&&ue.setAttribute("data-"+P,B),ue.textContent=B),Z&&r(Z,ue)||ue}function a(Z,P){return Z.getAttribute("data-"+P)}function l(Z,P){return!Z||Z.length==0?[]:Z.nodeName?[Z]:[].slice.call(Z[0].nodeName?Z:(P||t).querySelectorAll(Z))}function c(Z){for(var P=[];Z--;)P[Z]=[];return P}function h(Z,P){Z&&Z.some(P)}function f(Z){return function(P){return Z[P]}}function d(Z,P,B){var te="--"+P,ue=te+"-index";h(B,function(ce,me){Array.isArray(ce)?h(ce,function(Ce){i(Ce,ue,me)}):i(ce,ue,me)}),i(Z,te+"-total",B.length)}var u={};function g(Z,P,B){var te=B.indexOf(Z);if(te==-1)B.unshift(Z),h(u[Z].depends,function(ce){g(ce,Z,B)});else{var ue=B.indexOf(P);B.splice(te,1),B.splice(ue,0,Z)}return B}function _(Z,P,B,te){return{by:Z,depends:P,key:B,split:te}}function p(Z){return g(Z,0,[]).map(f(u))}function m(Z){u[Z.by]=Z}function S(Z,P,B,te,ue){Z.normalize();var ce=[],me=document.createDocumentFragment();te&&ce.push(Z.previousSibling);var Ce=[];return l(Z.childNodes).some(function(ve){if(ve.tagName&&!ve.hasChildNodes()){Ce.push(ve);return}if(ve.childNodes&&ve.childNodes.length){Ce.push(ve),ce.push.apply(ce,S(ve,P,B,te,ue));return}var V=ve.wholeText||"",De=V.trim();De.length&&(V[0]===" "&&Ce.push(n(" ")),h(De.split(B),function(ge,Me){Me&&ue&&Ce.push(o(me,"whitespace"," ",ue));var Le=o(me,P,ge);ce.push(Le),Ce.push(Le)}),V[V.length-1]===" "&&Ce.push(n(" ")))}),h(Ce,function(ve){r(me,ve)}),Z.innerHTML="",r(Z,me),ce}var v=0;function y(Z,P){for(var B in P)Z[B]=P[B];return Z}var M="words",b=_(M,v,"word",function(Z){return S(Z,"word",/\s+/,0,1)}),E="chars",C=_(E,[M],"char",function(Z,P,B){var te=[];return h(B[M],function(ue,ce){te.push.apply(te,S(ue,"char","",P.whitespace&&ce))}),te});function F(Z){Z=Z||{};var P=Z.key;return l(Z.target||"[data-splitting]").map(function(B){var te=B["\u{1F34C}"];if(!Z.force&&te)return te;te=B["\u{1F34C}"]={el:B};var ue=p(Z.by||a(B,"splitting")||E),ce=y({},Z);return h(ue,function(me){if(me.split){var Ce=me.by,ve=(P?"-"+P:"")+me.key,V=me.split(B,ce,te);ve&&d(B,ve,V),te[Ce]=V,B.classList.add(Ce)}}),B.classList.add("splitting"),te})}function x(Z){Z=Z||{};var P=Z.target=o();return P.innerHTML=Z.content,F(Z),P.outerHTML}F.html=x,F.add=m;function D(Z,P,B){var te=l(P.matching||Z.children,Z),ue={};return h(te,function(ce){var me=Math.round(ce[B]);(ue[me]||(ue[me]=[])).push(ce)}),Object.keys(ue).map(Number).sort(X).map(f(ue))}function X(Z,P){return Z-P}var G=_("lines",[M],"line",function(Z,P,B){return D(Z,{matching:B[M]},"offsetTop")}),L=_("items",v,"item",function(Z,P){return l(P.matching||Z.children,Z)}),H=_("rows",v,"row",function(Z,P){return D(Z,P,"offsetTop")}),U=_("cols",v,"col",function(Z,P){return D(Z,P,"offsetLeft")}),k=_("grid",["rows","cols"]),q="layout",I=_(q,v,v,function(Z,P){var B=P.rows=+(P.rows||a(Z,"rows")||1),te=P.columns=+(P.columns||a(Z,"columns")||1);if(P.image=P.image||a(Z,"image")||Z.currentSrc||Z.src,P.image){var ue=l("img",Z)[0];P.image=ue&&(ue.currentSrc||ue.src)}P.image&&i(Z,"background-image","url("+P.image+")");for(var ce=B*te,me=[],Ce=o(v,"cell-grid");ce--;){var ve=o(Ce,"cell");o(ve,"cell-inner"),me.push(ve)}return r(Z,Ce),me}),R=_("cellRows",[q],"row",function(Z,P,B){var te=P.rows,ue=c(te);return h(B[q],function(ce,me,Ce){ue[Math.floor(me/(Ce.length/te))].push(ce)}),ue}),ie=_("cellColumns",[q],"col",function(Z,P,B){var te=P.columns,ue=c(te);return h(B[q],function(ce,me){ue[me%te].push(ce)}),ue}),le=_("cells",["cellRows","cellColumns"],"cell",function(Z,P,B){return B[q]});return m(b),m(C),m(G),m(L),m(H),m(U),m(k),m(I),m(R),m(ie),m(le),F})})(Zv);var Kv=Zv.exports;class eA{constructor(e){Rt(this,"position",-1);Rt(this,"cells",[]);this.position=e}}class tA{constructor(e,{position:t,previousCellPosition:n}={}){Rt(this,"DOM",{el:null});Rt(this,"position",-1);Rt(this,"previousCellPosition",-1);Rt(this,"original");Rt(this,"state");Rt(this,"color");Rt(this,"originalColor");Rt(this,"cache");this.DOM.el=e,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=t,this.previousCellPosition=n}set(e){this.state=e,this.DOM.el.innerHTML=this.state}}class Jv{constructor(e){Rt(this,"DOM",{el:null});Rt(this,"lines",[]);Rt(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);Rt(this,"totalChars",0);this.DOM.el=e;const t=Kv({target:this.DOM.el,by:"lines"});t.forEach(n=>Kv({target:n.words}));for(const[n,i]of t[0].lines.entries()){const r=new eA(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new tA(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;r.cells=o,this.lines.push(r),this.totalChars+=a}}clearCells(){for(const e of this.lines)for(const t of e.cells)t.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}animate(){let t=0;const n=(i,r,o=0)=>{r.cache={state:r.state,color:r.color},o===8-1?(r.set(r.original),r.color=r.originalColor,r.DOM.el.style.color=r.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(r.set(this.getRandomChar()),r.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],r.DOM.el.style.color=r.color),++o,o<8&&setTimeout(()=>n(i,r,o),this.randomNumber(30,110))};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}class nA{constructor(){this.init()}init(){window.applyTextShuffle=function(e){const t=document.getElementById(e);t?new Jv(t).trigger():console.warn('Element with ID "'+e+'" was not found.')},window.applyExactTextShuffle=function(e,t="swap"){const n=new Jv(e);e?n.trigger():console.warn('Element with ID "'+e+'" was not found.')}}}/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cn,jv,gr,Gi,Kr,Qv,ex,xu,tx=function(){return typeof window!="undefined"},nx=function(){return Cn||tx()&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},ix=function(e){return typeof e=="string"},rx=function(e){return typeof e=="function"},Sl=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===gr||e===Gi||e===Kr?Math.max(Gi[i],Kr[i])-(gr["inner"+n]||Gi[r]||Kr[r]):e[i]-e["offset"+n]},El=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===gr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Gi[n]!=null?Gi:Kr),function(){return e[n]}},iA=function(e,t,n,i){if(rx(e)&&(e=e(t,n,i)),typeof e!="object")return ix(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},o;for(o in e)r[o]=o!=="onAutoKill"&&rx(e[o])?e[o](t,n,i):e[o];return r},sx=function(e,t){if(e=Qv(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===gr||t===Kr,r=i?{top:Gi.clientTop-(gr.pageYOffset||Gi.scrollTop||Kr.scrollTop||0),left:Gi.clientLeft-(gr.pageXOffset||Gi.scrollLeft||Kr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-r.left,y:n.top-r.top};return!i&&t&&(o.x+=El(t,"x")(),o.y+=El(t,"y")()),o},ox=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:ix(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?Sl(t,n)-r:Math.min(Sl(t,n),sx(e,t)[n]-r)},ax=function(){Cn=nx(),tx()&&Cn&&typeof document!="undefined"&&document.body&&(gr=window,Kr=document.body,Gi=document.documentElement,Qv=Cn.utils.toArray,Cn.config({autoKillThreshold:7}),ex=Cn.config(),jv=1)},Ml={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Cn=e,ax()},init:function(e,t,n,i,r){jv||ax();var o=this,a=Cn.getProperty(e,"scrollSnapType");o.isWin=e===gr,o.target=e,o.tween=n,t=iA(t,i,e,r),o.vars=t,o.autoKill=!!t.autoKill,o.getX=El(e,"x"),o.getY=El(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),xu||(xu=Cn.core.globals().ScrollTrigger),Cn.getProperty(e,"scrollBehavior")==="smooth"&&Cn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,ox(t.x,e,"x",o.x,t.offsetX||0),i,r),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,ox(t.y,e,"y",o.y,t.offsetY||0),i,r),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,f=t.snapInline,d,u,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,u=c||!t.skipY?t.getY():l,g=u-l,_=d-a,p=ex.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<Sl(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&u<Sl(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),c?gr.scrollTo(t.skipX?d:t.x,t.skipY?u:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(u=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=u+1,i.scrollLeft=d+1,i.scrollTop=u,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,xu&&xu.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ml.max=Sl,Ml.getOffset=sx,Ml.buildGetter=El,nx()&&Cn.registerPlugin(Ml),document.addEventListener("DOMContentLoaded",function(){et.registerPlugin(tt,Jo,Ad,ra,Ml,Us),new nA;const s=new Ry,e=new Ty;new by(s,e),document.body.getAttribute("data-barba")==="wrapper"?new jD(s):console.log("barba html structure is not set")})});
