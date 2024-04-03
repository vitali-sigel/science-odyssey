var AA=Object.defineProperty;var CA=(Gi,nn,gr)=>nn in Gi?AA(Gi,nn,{enumerable:!0,configurable:!0,writable:!0,value:gr}):Gi[nn]=gr;var Pt=(Gi,nn,gr)=>(CA(Gi,typeof nn!="symbol"?nn+"":nn,gr),gr);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`iframe{border:none;width:100%;height:100%}a.spline-watermark{display:none!important}.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(Gi){typeof define=="function"&&define.amd?define(Gi):Gi()})(function(){"use strict";var Gi="";function nn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gr(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},pu,ln,At,ei=1e8,Mt=1/ei,mu=Math.PI*2,Y0=mu/4,q0=0,Fd=Math.sqrt,$0=Math.cos,Z0=Math.sin,Jt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},gu=function(e){return typeof e=="undefined"},wi=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},_u=function(){return typeof window!="undefined"},yl=function(e){return Ut(e)||Jt(e)},Bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,vu=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,K0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Ai,yu,Su,Vn={},Sl={},Gd,Vd=function(e){return(Sl=Jr(e,Vn))&&In},Mu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ea=function(e,t){return!t&&console.warn(e)},Wd=function(e,t){return e&&(Vn[e]=t)&&Sl&&(Sl[e]=t)||Vn},ta=function(){return 0},J0={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},j0={suppressEvents:!0},Eu={},_r=[],Tu={},Xd,Wn={},bu={},Yd=30,El=[],wu="",Au=function(e){var t=e[0],n,i;if(wi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(t););n=El[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sp(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||Au(ii(e))[0]._gsap},qd=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():gu(n)&&e.getAttribute&&e.getAttribute(t)||n},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Q0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Tl=function(){var e=_r.length,t=_r.slice(0),n,i;for(Tu={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$d=function(e,t,n,i){_r.length&&!ln&&Tl(),e.render(t,n,i||ln&&t<0&&(e._initted||e._startAt)),_r.length&&!ln&&Tl()},Zd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hd).length<2?t:Jt(e)?e.trim():e},Kd=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ex=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Jr=function(e,t){for(var n in t)e[n]=t[n];return e},Jd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},bl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},na=function(e){var t=e.parent||Lt,n=e.keyframes?ex(cn(e.keyframes)):ti;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},wl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cu=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ix=function r(e){return!e||e._ts&&r(e.parent)},Qd=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cl=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cl(e),n._dirty||jr(n,e)),e},ep=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Al(e.rawTime(),t),(!t._dur||ra(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ci=function(e,t,n,i){return t.parent&&vr(t),t._start=jt((Vi(n)?n:n||e!==Lt?ni(e,n,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jd(e,t,"_first","_last",e._sort?"_start":0),Ru(t)||(e._recent=t),i||ep(e,t),e._ts<0&&Rl(e,e._tTime),e},tp=function(e,t){return(Vn.ScrollTrigger||Mu("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},np=function(e,t,n,i,s){if(Bu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xd!==Yn.frame)return _r.push(e),e._lazy=[s,i],1},rx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ru=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&rx(e)&&!(!e._initted&&Ru(e))||(e._ts<0||e._dp._ts<0)&&!Ru(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=ra(0,e._tDur,t),h=Ys(l,a),e._yoyo&&h&1&&(o=1-o),h!==Ys(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ln||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&np(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Cu(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&vr(e,1),!n&&!ln&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ox=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Rl(e,e._tTime=e._tDur*a),e.parent&&Cl(e),n||jr(e.parent,e),e},ip=function(e){return e instanceof vn?jr(e):qs(e,e._dur)},ax={_start:0,endTime:ta,totalDuration:ta},ni=function r(e,t,n){var i=e.labels,s=e._recent||ax,o=e.duration()>=ei?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ia=function(e,t,n){var i=Vi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},xr=function(e,t){return e||e===0?t(e):t},ra=function(e,t,n){return n<e?e:n>t?t:n},un=function(e,t){return!Jt(e)||!(t=K0.exec(e))?"":t[1]},lx=function(e,t,n){return xr(n,function(i){return ra(e,t,i)})},Pu=[].slice,rp=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==Ai},cx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||rp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Jt(e)&&!n&&(yu||!Zs())?Pu.call((t||Su).querySelectorAll(e),0):cn(e)?cx(e,n):rp(e)?Pu.call(e,0):e?[e]:[]},Lu=function(e){return e=ii(e)[0]||ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?ea("Invalid scope")||Su.createElement("div"):e)}},sp=function(e){return e.sort(function(){return .5-Math.random()})},op=function(e){if(Ut(e))return e;var t=wi(e)?e:{each:e},n=Qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,p=o[_],m,S,v,y,T,b,E,R,N;if(!p){if(N=t.grid==="auto"?0:(t.grid||[1,ei])[1],!N){for(E=-ei;E<(E=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(p=o[_]=[],m=l?Math.min(N,_)*h-.5:i%N,S=N===ei?0:l?_*f/N-.5:i/N|0,E=0,R=ei,b=0;b<_;b++)v=b%N-m,y=S-(b/N|0),p[b]=T=c?Math.abs(c==="y"?y:v):Fd(v*v+y*y),T>E&&(E=T),T<R&&(R=T);i==="random"&&sp(p),p.max=E-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=un(t.amount||t.each)||0,n=n&&_<0?vp(n):n}return _=(p[d]-p.min)/p.max||0,jt(p.b+(n?n(_):_)*p.v)+p.u}},Du=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Vi(n)?0:un(n))}},ap=function(e,t){var n=cn(e),i,s;return!n&&wi(e)&&(i=n=e.radius||ei,e.values?(e=ii(e.values),(s=!Vi(e[0]))&&(i*=i)):e=Du(e.increment)),xr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ei,h=0,f=e.length,d,u;f--;)s?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||Vi(o)?h:h+un(o)}:Du(e))},lp=function(e,t,n,i){return xr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ux=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},hx=function(e,t){return function(n){return e(parseFloat(n))+(t||un(n))}},fx=function(e,t,n){return up(e,t,0,1,n)},cp=function(e,t,n){return xr(n,function(i){return e[~~t(i)]})},dx=function r(e,t,n){var i=t-e;return cn(e)?cp(e,r(0,e.length),t):xr(n,function(s){return(i+(s-e)%i)%i+e})},px=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?cp(e,r(0,e.length-1),t):xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},sa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Hd:vu),n+=e.substr(t,i-t)+lp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},up=function(e,t,n,i,s){var o=t-e,a=i-n;return xr(s,function(l){return n+((l-e)/o*a||0)})},mx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=Jt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=Jr(cn(e)?[]:{},e));if(!h){for(l in t)Ou.call(a,e,l,"get",t[l]);s=function(g){return Hu(g,a)||(o?e.p:e)}}}return xr(n,s)},hp=function(e,t,n){var i=e.labels,s=ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,h;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&Tl(),a&&(At=a),h=l?s.apply(c,l):s.call(c),At=o,h},oa=function(e){return vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Xn(e,"onInterrupt"),e},$s,fp=[],dp=function(e){if(!!e)if(e=!e.name&&e.default||e,_u()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ta,render:Hu,add:Ou,kill:Lx,modifier:Px,rawVars:0},o={targetTest:0,get:0,getSetter:zu,aliases:{},register:0};if(Zs(),e!==i){if(Wn[t])return;ti(i,ti(bl(e,s),o)),Jr(i.prototype,Jr(s,bl(e,o))),Wn[i.prop=t]=i,e.targetTest&&(El.push(i),Eu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wd(t,i),e.register&&e.register(In,i,Nn)}else fp.push(e)},yt=255,aa={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Nu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},pp=function(e,t,n){var i=e?Vi(e)?[e>>16,e>>8&yt,e&yt]:0:aa.black,s,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),aa[e])i=aa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(vu),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Nu(l+1/3,s,o),i[1]=Nu(l,s,o),i[2]=Nu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(kd),n&&i.length<4&&(i[3]=1),i}else i=e.match(vu)||aa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/yt,o=i[1]/yt,a=i[2]/yt,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},mp=function(e){var t=[],n=[],i=-1;return e.split(yr).forEach(function(s){var o=s.match(Ws)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},gp=function(e,t,n){var i="",s=(e+i).match(yr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=pp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=mp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(yr,"1").split(Ws),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(yr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},yr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in aa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),gx=/hsl[a]?\(/,_p=function(e){var t=e.join(" "),n;if(yr.lastIndex=0,yr.test(t))return n=gx.test(t),e[1]=gp(e[1],n),e[0]=gp(e[0],n,mp(e[1])),!0},la,Yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,g=function _(p){var m=r()-i,S=p===!0,v,y,T,b;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,v=T-o,(v>0||S)&&(b=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),y=1),S||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Gd&&(!yu&&_u()&&(Ai=yu=window,Su=Ai.document||{},Vn.gsap=In,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(In.version),Vd(Sl||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),fp.forEach(dp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},la=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),la=0,c=ta},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,S){var v=m?function(y,T,b,E){p(y,T,b,E),f.remove(v)}:p;return f.remove(p),a[S?"unshift":"push"](v),Zs(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),Zs=function(){return!la&&Yn.wake()},ut={},_x=/^[\d.\-M][\d.\-,\s]/,vx=/["']/g,xx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(vx,"").trim():+c,i=l.substr(a+1).trim();return t},yx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Sx=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xx(t[1])]:yx(e).split(",").map(Zd)):ut._CE&&_x.test(e)?ut._CE("",e):n},vp=function(e){return function(t){return 1-e(1-t)}},xp=function r(e,t){for(var n=e._first,i;n;)n instanceof vn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qr=function(e,t){return e&&(Ut(e)?e:ut[e]||Sx(e))||t},es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Dn(e,function(a){ut[a]=Vn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Iu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Z0((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:yp(a);return s=mu/s,l.config=function(c,h){return r(e,c,h)},l},Uu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:yp(n);return i.config=function(s){return r(e,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;es(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ut.Linear.easeNone=ut.none=ut.Linear.easeIn,es("Elastic",Iu("in"),Iu("out"),Iu()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};es("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),es("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),es("Circ",function(r){return-(Fd(1-r*r)-1)}),es("Sine",function(r){return r===1?1:-$0(r*Y0)+1}),es("Back",Uu("in"),Uu("out"),Uu()),ut.SteppedEase=ut.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*ra(0,o,a)|0)+s)*n}}},Vs.ease=ut["quad.out"],Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wu+=r+","+r+"Params,"});var Sp=function(e,t){this.id=q0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qd,this.set=t?t.getSetter:zu},ca=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),la||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$d(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this._tDur,s),i!==!1),Cl(this),nx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=j0);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ip(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ip(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ut(n)?n:Kd,a=function(){var c=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){oa(this)},r}();ti(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var vn=function(r){gr(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Lt&&Ci(n.parent||Lt,nn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&tp(nn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ia(0,arguments,this),this},t.from=function(i,s,o){return ia(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ia(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,ni(this,o),1),this},t.call=function(i,s,o){return Ci(this,zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(i,o,ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,na(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,na(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:jt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,S,v,y,T,b,E;if(this!==Lt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=jt(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),T=Ys(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),b&&_&1&&(d=c-d,E=1),_!==T&&!this._lock){var R=b&&T&1,N=R===(b&&_&1);if(_<T&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:jt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;xp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ox(this,jt(a),jt(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var x=i<0?i:d;u;){if(g=u._prev,(u._act||x<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,s,o||ln&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=x?-Mt:Mt);break}}u=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Cl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Vi(s)||(s=ni(this,s,i)),!(i instanceof ca)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Ut(i))i=zt.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(wl(this,i),i===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=zt.delayedCall(0,s||ta,o);return a.data="isPause",this._hasPause=1,Ci(this,a,ni(this,i))},t.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Sr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Vi(s),h;l;)l instanceof zt?Q0(l._targets,a)&&(c?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=zt.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!u){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&qs(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hp(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hp(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),jr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ei,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;qs(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Lt._ts&&($d(Lt,Al(i,Lt)),Xd=Yn.frame),Yn.frame>=Yd){Yd+=Gn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Gn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(ca);ti(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mx=function(e,t,n,i,s,o,a){var l=new Nn(this._pt,e,t,0,1,Ap,null,s),c=0,h=0,f,d,u,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=sa(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(xu)||[];f=xu.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Xs(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=xu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zd.test(i)||m)&&(l.e=0),this._pt=l,l},Ou=function(e,t,n,i,s,o,a,l,c,h){Ut(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Ut(f)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Ut(f)?c?Ax:bp:ku,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=sa(i)),i.charAt(1)==="="&&(g=Xs(d,i)+(un(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Fu)return!isNaN(d*i)&&i!==""?(g=new Nn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?Rx:wp,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Mu(t,i),Mx.call(this,e,t,d,i,u,l||Gn.stringFilter,c))},Ex=function(e,t,n,i,s){if(Ut(e)&&(e=ua(e,s,t,n,i)),!wi(e)||e.style&&e.nodeType||cn(e)||Bd(e))return Jt(e)?ua(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ua(e[a],s,t,n,i);return o},Mp=function(e,t,n,i,s,o){var a,l,c,h;if(Wn[e]&&(a=new Wn[e]).init(s,a.rawVars?t[e]:Ex(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==$s))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Sr,Fu,Bu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!pu,y=e.timeline,T,b,E,R,N,x,A,W,k,L,F,z,G;if(y&&(!d||!s)&&(s="none"),e._ease=Qr(s,Vs.ease),e._yEase=f?vp(Qr(f===!0?s:f,Vs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(W=p[0]?Kr(p[0]).harness:0,z=W&&i[W.prop],T=bl(i,Eu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?Ml:J0),_._lazy=0),o){if(vr(e._startAt=zt.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!u)&&e._startAt.revert(Ml),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ln(l),immediateRender:a,stagger:0,parent:m},T),z&&(E[W.prop]=z),vr(e._startAt=zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,b=0;b<p.length;b++){if(N=p[b],A=N._gsap||Au(p)[b]._gsap,e._ptLookup[b]=L={},Tu[A.id]&&_r.length&&Tl(),F=S===p?b:S.indexOf(N),W&&(k=new W).init(N,z||T,e,F,S)!==!1&&(e._pt=R=new Nn(e._pt,N,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function($){L[$]=R}),k.priority&&(x=1)),!W||z)for(E in T)Wn[E]&&(k=Mp(E,T,e,F,N,S))?k.priority&&(x=1):L[E]=R=Ou.call(e,N,E,"get",T[E],F,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(N,e._op[b]),v&&e._pt&&(Sr=e,Lt.killTweensOf(N,L,e.globalTime(t)),G=!e.parent,Sr=0),e._pt&&l&&(Tu[A.id]=1)}x&&Cp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&y.render(ei,!0,!0)},Tx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Fu=1,e.vars[t]="+=0",Bu(e,a),Fu=0,l?ea(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ot(n)+un(f.e)),f.b&&(f.b=h.s+un(f.b))},bx=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Jr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ua=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?sa(e):e},Ep=wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tp={};Dn(Ep+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Tp[r]=1});var zt=function(r){gr(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:na(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Lt,v=(cn(n)||Bd(n)?Vi(n[0]):"length"in i)?[n]:ii(n),y,T,b,E,R,N,x,A;if(a._targets=v.length?Au(v):ea("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||yl(c)||yl(h)){if(i=a.vars,y=a.timeline=new vn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=nn(a),y._start=0,d||yl(c)||yl(h)){if(E=v.length,x=d&&op(d),wi(d))for(R in d)~Ep.indexOf(R)&&(A||(A={}),A[R]=d[R]);for(T=0;T<E;T++)b=bl(i,Tp),b.stagger=0,m&&(b.yoyoEase=m),A&&Jr(b,A),N=v[T],b.duration=+ua(c,nn(a),T,N,v),b.delay=(+ua(h,nn(a),T,N,v)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(N,b,x?x(T,N,v):0),y._ease=ut.none;y.duration()?c=h=0:a.timeline=0}else if(g){na(ti(y.vars.defaults,{ease:"none"})),y._ease=Qr(g.ease||i.ease||"none");var W=0,k,L,F;if(cn(g))g.forEach(function(z){return y.to(v,z,">")}),y.duration();else{b={};for(R in g)R==="ease"||R==="easeEach"||wx(R,g[R],b,g.easeEach);for(R in b)for(k=b[R].sort(function(z,G){return z.t-G.t}),W=0,T=0;T<k.length;T++)L=k[T],F={ease:L.e,duration:(L.t-(T?k[T-1].t:0))/100*c},F[R]=L.v,y.to(v,F,W),W+=F.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!pu&&(Sr=nn(a),Lt.killTweensOf(v),Sr=0),Ci(S,nn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===jt(S._time)&&Ln(f)&&ix(nn(a))&&S.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-h)||0)),p&&tp(nn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Mt&&!h?l:i<Mt?0:i,d,u,g,_,p,m,S,v,y;if(!c)sx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=jt(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===jt(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,d=c-d),p=Ys(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&xp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(np(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Cu(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Cu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&vr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){la||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bu(this,c),h=this._ease(c/this._dur),Tx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Rl(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?oa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Sr&&Sr.vars.overwrite!==!0)._first||oa(this),this.parent&&o!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!s||s==="all")&&tx(a,l))return s==="all"&&(this._pt=0),oa(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Dn(s,function(S){return _[S]=1}),s=_),s=bx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,u={}):(u=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&wl(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&oa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ia(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ia(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Lt.killTweensOf(i,s,o)},e}(ca);ti(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Dn("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new vn,t=Pu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ku=function(e,t,n){return e[t]=n},bp=function(e,t,n){return e[t](n)},Ax=function(e,t,n,i){return e[t](i.fp,n)},Cx=function(e,t,n){return e.setAttribute(t,n)},zu=function(e,t){return Ut(e[t])?bp:gu(e[t])&&e.setAttribute?Cx:ku},wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ap=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Px=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Lx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Dx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Nn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||wp,this.d=l||this,this.set=c||ku,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Dx,this.m=n,this.mt=s,this.tween=i},r}();Dn(wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eu[r]=1}),Vn.TweenMax=Vn.TweenLite=zt,Vn.TimelineLite=Vn.TimelineMax=vn,Lt=new vn({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Gn.stringFilter=_p;var ts=[],Pl={},Nx=[],Rp=0,Ix=0,Gu=function(e){return(Pl[e]||Nx).map(function(t){return t()})},Vu=function(){var e=Date.now(),t=[];e-Rp>2&&(Gu("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Gu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rp=e,Gu("matchMedia"))},Pp=function(){function r(t,n){this.selector=n&&Lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ix++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=At,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Lu(s)),At=o,f=i.apply(o,arguments),Ut(f)&&o._r.push(f),At=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Ux=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wi(n)||(n={matches:n});var o=new Pp(0,s||this.scope),a=o.conditions={},l,c,h;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ai.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Vu):l.addEventListener("change",Vu)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ll={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dp(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ii(e)[0]);var s=Kr(e||{}).get,o=n?Kd:Zd;return n==="native"&&(n=""),e&&(t?o((Wn[t]&&Wn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(h){return In.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=Wn[t],a=Kr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;$s._pt=0,f.init(e,n?h+n:h,$s,0,[e]),f.render(1,f),$s._pt&&Hu(1,$s)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=In.to(e,Jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,Vs.ease)),Jd(Vs,e||{})},config:function(e){return Jd(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!Vn[a]&&ea(t+" effect requires "+a+" plugin.")}),bu[t]=function(a,l,c){return n(ii(a),ti(l||{},s),c)},o&&(vn.prototype[t]=function(a,l,c){return this.add(bu[t](a,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):ut},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Lt,n,0),n},context:function(e,t){return e?new Pp(e,t):At},matchMedia:function(e){return new Ux(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Vu()},addEventListener:function(e,t){var n=Pl[e]||(Pl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dx,wrapYoyo:px,distribute:op,random:lp,snap:ap,normalize:fx,getUnit:un,clamp:lx,splitColor:pp,toArray:ii,selector:Lu,mapRange:up,pipe:ux,unitize:hx,interpolate:mx,shuffle:sp},install:Vd,effects:bu,ticker:Yn,updateRoot:vn.updateRoot,plugins:Wn,globalTimeline:Lt,core:{PropTween:Nn,globals:Wd,Tween:zt,Timeline:vn,Animation:ca,getCache:Kr,_removeLinkedListItem:wl,reverting:function(){return ln},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return pu=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ll[r]=zt[r]}),Yn.add(vn.updateRoot),$s=Ll.to({},{duration:0});var Ox=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Fx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Ox(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Wu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},Dn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Fx(a,s)}}}},In=Ll.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wu("roundProps",Du),Wu("modifiers"),Wu("snap",ap))||Ll;zt.version=vn.version=In.version="3.12.5",Gd=1,_u()&&Zs(),ut.Power0,ut.Power1,ut.Power2,ut.Power3,ut.Power4,ut.Linear,ut.Quad,ut.Cubic,ut.Quart,ut.Quint,ut.Strong,ut.Elastic,ut.Back,ut.SteppedEase,ut.Bounce,ut.Sine,ut.Expo,ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lp,Mr,Ks,Xu,ns,Dp,Yu,Bx=function(){return typeof window!="undefined"},Wi={},is=180/Math.PI,Js=Math.PI/180,js=Math.atan2,Np=1e8,qu=/([A-Z])/g,kx=/(left|right|width|margin|padding|x)/i,zx=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ip=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Up=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Wx=function(e,t,n){return e.style[t]=n},Xx=function(e,t,n){return e.style.setProperty(t,n)},Yx=function(e,t,n){return e._gsap[t]=n},qx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$x=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Zx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Un=Dt+"Origin",Kx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Wi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xi(i,a)}):this.tfm[e]=o.x?o[e]:Xi(i,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},Op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Jx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yu(),(!s||!s.isStart)&&!n[Dt]&&(Op(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fp=function(e,t){var n={target:e,props:[],revert:Jx,save:Kx};return e._gsap||In.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Bp,Zu=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},Pi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qs(t)||t,1)||""},kp="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||ns,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kp[o]:"")+e},Ku=function(){Bx()&&window.document&&(Lp=window,Mr=Lp.document,Ks=Mr.documentElement,ns=Zu("div")||{style:{}},Zu("div"),Dt=Qs(Dt),Un=Dt+"Origin",ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bp=!!Qs("perspective"),Yu=In.core.reverting,Xu=1)},Ju=function r(e){var t=Zu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Ks.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ks.removeChild(t),this.style.cssText=s,o},zp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hp=function(e){var t;try{t=e.getBBox()}catch{t=Ju.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ju||(t=Ju.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zp(e,["x","cx","x1"])||0,y:+zp(e,["y","cy","y1"])||0,width:0,height:0}:t},Gp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hp(e))},rs=function(e,t){if(t){var n=e.style,i;t in Wi&&t!==Un&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qu,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,i,s,o){var a=new Nn(e._pt,t,n,0,1,o?Up:Ip);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Vp={deg:1,rad:1,turn:1},jx={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ns.style,l=kx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!s||Vp[i]||Vp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&Gp(e),(u||o==="%")&&(Wi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Ot(u?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Mr||!_.appendChild)&&(_=Mr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Ot(s/p.width*f);if(u&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[h],S?e.style[t]=S:rs(e,t)}else(u||o==="%")&&!jx[Pi(_,"display")]&&(a.position=Pi(e,"position")),_===e&&(a.position="static"),_.appendChild(ns),g=ns[h],_.removeChild(ns),a.position="absolute";return l&&u&&(p=Kr(_),p.time=Yn.time,p.width=_[h]),Ot(d?g*s/f:g&&s?f/g*s:0)},Xi=function(e,t,n,i){var s;return Xu||Ku(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wi[t]&&t!=="transform"?(s=fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Nl(Pi(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[t]&&Dl[t](e,t,n)||Pi(e,t)||qd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},Qx=function(e,t,n,i){if(!n||n==="none"){var s=Qs(t,e,1),o=s&&Pi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Pi(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,Ap),l=0,c=0,h,f,d,u,g,_,p,m,S,v,y,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Pi(e,t)||i,_?e.style[t]=_:rs(e,t)),h=[n,i],_p(h),n=h[0],i=h[1],d=n.match(Ws)||[],T=i.match(Ws)||[],T.length){for(;f=Ws.exec(i);)p=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=Xs(u,p)+y),m=parseFloat(p),v=p.substr((m+"").length),l=Ws.lastIndex-v.length,v||(v=v||Gn.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(u=Tr(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:u,c:m-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Up:Ip;return zd.test(i)&&(a.e=0),this._pt=a,a},Wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ey=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wp[n]||n,t[1]=Wp[i]||i,t.join(" ")},ty=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wi[a]&&(l=1,a=a==="transformOrigin"?Un:Dt),rs(n,a);l&&(rs(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),fa(n,1),o.uncache=1,Op(i)))}},Dl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,ty);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ha=[1,0,0,1,0,0],Xp={},Yp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qp=function(e){var t=Pi(e,Dt);return Yp(t)?ha:t.substr(7).match(kd).map(Ot)},ju=function(e,t){var n=e._gsap||Kr(e),i=e.style,s=qp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!e.offsetParent&&e!==Ks&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ks.appendChild(e)),s=qp(e),l?i.display=l:rs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ks.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qu=function(e,t,n,i,s,o){var a=e._gsap,l=s||ju(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,E,R,N;n?l!==ha&&(E=u*p-g*_)&&(R=y*(p/E)+T*(-_/E)+(_*S-p*m)/E,N=y*(-g/E)+T*(u/E)-(u*S-g*m)/E,y=R,T=N):(b=Hp(e),y=b.x+(~v[0].indexOf("%")?y/100*b.width:y),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(m=y-c,S=T-h,a.xOffset=f+(m*u+S*_)-m,a.yOffset=d+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(Er(o,a,"xOrigin",c,y),Er(o,a,"yOrigin",h,T),Er(o,a,"xOffset",f,a.xOffset),Er(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},fa=function(e,t){var n=e._gsap||new Sp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Pi(e,Un)||"0",h,f,d,u,g,_,p,m,S,v,y,T,b,E,R,N,x,A,W,k,L,F,z,G,$,ne,P,re,ue,q,D,V;return h=f=d=_=p=m=S=v=y=0,u=g=1,n.svg=!!(e.getCTM&&Gp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),E=ju(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Qu(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,b=n.yOrigin||0,E!==ha&&(A=E[0],W=E[1],k=E[2],L=E[3],h=F=E[4],f=z=E[5],E.length===6?(u=Math.sqrt(A*A+W*W),g=Math.sqrt(L*L+k*k),_=A||W?js(W,A)*is:0,S=k||L?js(k,L)*is+_:0,S&&(g*=Math.abs(Math.cos(S*Js))),n.svg&&(h-=T-(T*A+b*k),f-=b-(T*W+b*L))):(V=E[6],q=E[7],P=E[8],re=E[9],ue=E[10],D=E[11],h=E[12],f=E[13],d=E[14],R=js(V,ue),p=R*is,R&&(N=Math.cos(-R),x=Math.sin(-R),G=F*N+P*x,$=z*N+re*x,ne=V*N+ue*x,P=F*-x+P*N,re=z*-x+re*N,ue=V*-x+ue*N,D=q*-x+D*N,F=G,z=$,V=ne),R=js(-k,ue),m=R*is,R&&(N=Math.cos(-R),x=Math.sin(-R),G=A*N-P*x,$=W*N-re*x,ne=k*N-ue*x,D=L*x+D*N,A=G,W=$,k=ne),R=js(W,A),_=R*is,R&&(N=Math.cos(R),x=Math.sin(R),G=A*N+W*x,$=F*N+z*x,W=W*N-A*x,z=z*N-F*x,A=G,F=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Ot(Math.sqrt(A*A+W*W+k*k)),g=Ot(Math.sqrt(z*z+V*V)),R=js(F,z),S=Math.abs(R)>2e-4?R*is:0,y=D?1/(D<0?-D:D):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yp(Pi(e,Dt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(u*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(u),n.scaleY=Ot(g),n.rotation=Ot(_)+a,n.rotationX=Ot(p)+a,n.rotationY=Ot(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=Nl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?iy:Bp?$p:ny,n.uncache=0,n},Nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},eh=function(e,t,n){var i=un(t);return Ot(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},ny=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$p(e,t)},ss="0deg",da="0px",os=") ",$p=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==ss||h!==ss)){var b=parseFloat(h)*Js,E=Math.sin(b),R=Math.cos(b),N;b=parseFloat(f)*Js,N=Math.cos(b),o=eh(S,o,E*N*-v),a=eh(S,a,-Math.sin(b)*-v),l=eh(S,l,R*N*-v+v)}p!==da&&(y+="perspective("+p+os),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==da||a!==da||l!==da)&&(y+=l!==da||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+os),c!==ss&&(y+="rotate("+c+os),h!==ss&&(y+="rotateY("+h+os),f!==ss&&(y+="rotateX("+f+os),(d!==ss||u!==ss)&&(y+="skew("+d+", "+u+os),(g!==1||_!==1)&&(y+="scale("+g+", "+_+os),S.style[Dt]=y||"translate(0, 0)"},iy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),T,b,E,R,N;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Js,c*=Js,T=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Js,N=Math.tan(c-h),N=Math.sqrt(1+N*N),E*=N,R*=N,h&&(N=Math.tan(h),N=Math.sqrt(1+N*N),T*=N,b*=N)),T=Ot(T),b=Ot(b),E=Ot(E),R=Ot(R)):(T=f,R=d,b=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Tr(u,"x",o,"px"),y=Tr(u,"y",a,"px")),(g||_||p||m)&&(v=Ot(v+g-(g*T+_*E)+p),y=Ot(y+_-(g*b+_*R)+m)),(i||s)&&(N=u.getBBox(),v=Ot(v+i/100*N.width),y=Ot(y+s/100*N.height)),N="matrix("+T+","+b+","+E+","+R+","+v+","+y+")",u.setAttribute("transform",N),S&&(u.style[Dt]=N)},ry=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?is:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Np)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Np)%o-~~(c/o)*o)),e._pt=d=new Nn(e._pt,t,n,i,c,Hx),d.e=h,d.u="deg",e._props.push(n),d},Zp=function(e,t){for(var n in t)e[n]=t[n];return e},sy=function(e,t,n){var i=Zp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=fa(n,1),rs(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=fa(n,1),o[Dt]=c);for(l in Wi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=un(c),g=un(h),f=u!==g?Tr(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Nn(e._pt,a,l,f,d-f,$u),e._pt.u=g||0,e._props.push(l));Zp(a,i)};Dn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Dl[e>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return Xi(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var Kp={name:"css",register:Ku,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,S,v,y,T,b,E,R;Xu||Ku(),this.styles=this.styles||Fp(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Wn[_]&&Mp(_,t,n,i,e,s)))){if(u=typeof h,g=Dl[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=sa(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",yr.lastIndex=0,yr.test(c)||(p=un(c),m=un(h)),m?p!==m&&(c=Tr(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=sa(c)),un(c+"")||c==="auto"||(c+=Gn.units[_]||un(Xi(e,_))||""),(c+"").charAt(1)==="="&&(c=Xi(e,_))):c=Xi(e,_),d=parseFloat(c),S=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in Ri&&(_==="autoAlpha"&&(d===1&&Xi(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Er(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Wi,v){if(this.styles.save(_),y||(T=e._gsap,T.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Nn(this._pt,a,Dt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Nn(this._pt,T,"scaleY",T.scaleY,(S?Xs(T.scaleY,S+f):f)-T.scaleY||0,$u),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Un,0,a[Un]),h=ey(h),T.svg?Qu(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&Er(this,T,"zOrigin",T.zOrigin,m),Er(this,a,_,Nl(c),Nl(h)));continue}else if(_==="svgOrigin"){Qu(e,h,1,b,0,this);continue}else if(_ in Xp){ry(this,T,_,d,S?Xs(d,S+h):h);continue}else if(_==="smoothOrigin"){Er(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){sy(this,h,e);continue}}else _ in a||(_=Qs(_)||_);if(v||(f||f===0)&&(d||d===0)&&!zx.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=un(h)||(_ in Gn.units?Gn.units[_]:p),p!==m&&(d=Tr(e,_,c,m)),this._pt=new Nn(this._pt,v?T:a,_,d,(S?Xs(d,S+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Vx:$u),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Gx);else if(_ in a)Qx.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Mu(_,h);continue}v||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||e[_])),o.push(_)}}E&&Cp(this)},render:function(e,t){if(t.tween._time||!Yu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Ri,getSetter:function(e,t,n){var i=Ri[t];return i&&i.indexOf(",")<0&&(t=i),t in Wi&&t!==Un&&(e._gsap.x||Xi(e,"x"))?n&&Dp===n?t==="scale"?qx:Yx:(Dp=n||{})&&(t==="scale"?$x:Zx):e.style&&!gu(e.style[t])?Wx:~t.indexOf("-")?Xx:zu(e,t)},core:{_removeProperty:rs,_getMatrix:ju}};In.utils.checkPrefix=Qs,In.core.getStyleSaver=Fp,function(r,e,t,n){var i=Dn(r+","+e+","+t,function(s){Wi[s]=1});Dn(e,function(s){Gn.units[s]="deg",Xp[s]=1}),Ri[i[13]]=r+","+e,Dn(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"}),In.registerPlugin(Kp);var Tt=In.registerPlugin(Kp)||In;Tt.core.Tween;class oy{constructor(){if(this.$container=document.getElementById("header"),!this.$container){console.warn("No header container found (#header)");return}this.tl=this.createTimeline()}animateIn(){this.tl.play()}createTimeline(){const e=this.$container.querySelectorAll(".h4, .eyebrow"),t=Tt.timeline({paused:!0});return t.to(this.$container,{opacity:1,duration:.01},"a"),t.to(e,{autoAlpha:0,duration:.01},"a"),t.from(e,{duration:.1,stagger:{each:.1,onStart:function(){applyExactTextShuffle(this.targets()[0],"in")},onComplete:function(){Tt.set(this.targets()[0],{autoAlpha:1})}}},"a"),t}}class ay{constructor(e,t){if(this.$container=document.getElementById("preloader"),!this.$container){console.warn("No preloader container found (#preloader)");return}this.tl=this.createTimeline(e,t),this.animate()}animate(){this.tl.play()}createTimeline(e,t){const n=this.$container.querySelectorAll(".preloader__text"),i=this.$container.querySelector(".preloader__count");let s={value:0};const o=Tt.timeline({paused:!0,onStart:()=>{document.body.overflow="hidden",e.lenis.stop()},onComplete:()=>{document.body.overflow="auto",e.lenis.start(),t.animateIn()}});return o.from([n,i],{duration:.5,stagger:{each:.3,onStart:function(){applyExactTextShuffle(this.targets()[0],"in")},onComplete:function(){Tt.set(this.targets()[0],{autoAlpha:1})}}},"a"),o.to(s,{value:100,duration:1,delay:.6,onUpdate:function(){i.textContent=Math.round(s.value).toString().padStart(2,"0")},ease:"quad.out"},"b"),o.from([i,n],{onStart:function(){this.targets().forEach(a=>{console.log(a),applyExactTextShuffle(a,"out")})},duration:.5,onComplete:function(){this.targets().forEach(a=>{Tt.to(a,{autoAlpha:0})})}},"c"),o.to(this.$container,{autoAlpha:0,duration:1},"d"),o}}function Jp(r,e,t){return Math.max(r,Math.min(e,t))}class ly{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,o=e,function(l,c,h){return(1-h)*l+h*c}(n,i,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=Jp(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,i,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class cy{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pt(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pt(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class jp{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const Qp=100/6;class uy{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Pt(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Pt(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});Pt(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Pt(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?Qp:i===2?this.windowWidth:1,n*=i===1?Qp:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Pt(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new jp,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class hy{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:h=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:f=!c&&.1,infinite:d=!1,orientation:u="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:S=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:y,event:T})=>{if(T.ctrlKey)return;const b=T.type.includes("touch"),E=T.type.includes("wheel");if(this.options.syncTouch&&b&&T.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const R=v===0&&y===0,N=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&v===0;if(R||N)return;let x=T.composedPath();if(x=x.slice(0,x.indexOf(this.rootElement)),x.find(L=>{var F,z,G,$,ne;return((F=L.hasAttribute)===null||F===void 0?void 0:F.call(L,"data-lenis-prevent"))||b&&((z=L.hasAttribute)===null||z===void 0?void 0:z.call(L,"data-lenis-prevent-touch"))||E&&((G=L.hasAttribute)===null||G===void 0?void 0:G.call(L,"data-lenis-prevent-wheel"))||(($=L.classList)===null||$===void 0?void 0:$.contains("lenis"))&&!(!((ne=L.classList)===null||ne===void 0)&&ne.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void T.preventDefault();if(this.isSmooth=this.options.syncTouch&&b||this.options.smoothWheel&&E,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();T.preventDefault();let A=y;this.options.gestureOrientation==="both"?A=Math.abs(y)>Math.abs(v)?y:v:this.options.gestureOrientation==="horizontal"&&(A=v);const W=b&&this.options.syncTouch,k=b&&T.type==="touchend"&&Math.abs(A)>5;k&&(A=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+A,Object.assign({programmatic:!1},W?{lerp:k?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:h,lerp:f,infinite:d,gestureOrientation:g,orientation:u,touchMultiplier:_,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:S},this.animate=new ly,this.emitter=new jp,this.dimensions=new cy({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new uy(i,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const u=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?u.left:u.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=Jp(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}class fy{constructor(){this.lenis=this.init()}init(){const e=new hy;function t(n){e.raf(n),requestAnimationFrame(t)}return requestAnimationFrame(t),e}}function em(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function th(r,e,t){return e&&em(r.prototype,e),t&&em(r,t),r}function as(){return(as=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function Il(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}function tm(r){return(tm=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}function nh(r,e){return(nh=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(r,e)}function nm(r,e,t){return(nm=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&nh(a,s.prototype),a}).apply(null,arguments)}function im(r){var e=typeof Map=="function"?new Map:void 0;return(im=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return nm(t,arguments,tm(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),nh(n,t)})(r)}function eo(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var br,dy="2.9.7",py=function(){};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(br||(br={}));var rm=br.off,ls=function(){function r(t){this.t=t}r.getLevel=function(){return rm},r.setLevel=function(t){return rm=br[t]};var e=r.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,br.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,br.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,br.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,br.debug,n)},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}(),cs=sh,my=om,gy=ih,_y=am,vy=lm,sm="/",xy=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ih(r,e){for(var t,n=[],i=0,s=0,o="",a=e&&e.delimiter||sm,l=e&&e.whitelist||void 0,c=!1;(t=xy.exec(r))!==null;){var h=t[0],f=t[1],d=t.index;if(o+=r.slice(s,d),s=d+h.length,f)o+=f[1],c=!0;else{var u="",g=t[2],_=t[3],p=t[4],m=t[5];if(!c&&o.length){var S=o.length-1,v=o[S];(!l||l.indexOf(v)>-1)&&(u=v,o=o.slice(0,S))}o&&(n.push(o),o="",c=!1);var y=_||p,T=u||a;n.push({name:g||i++,prefix:u,delimiter:T,optional:m==="?"||m==="*",repeat:m==="+"||m==="*",pattern:y?yy(y):"[^"+Yi(T===a?T:T+a)+"]+?"})}}return(o||s<r.length)&&n.push(o+r.substr(s)),n}function om(r,e){return function(t,n){var i=r.exec(t);if(!i)return!1;for(var s=i[0],o=i.index,a={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var h=e[c-1];a[h.name]=h.repeat?i[c].split(h.delimiter).map(function(f){return l(f,h)}):l(i[c],h)}return{path:s,index:o,params:a}}}function am(r,e){for(var t=new Array(r.length),n=0;n<r.length;n++)typeof r[n]=="object"&&(t[n]=new RegExp("^(?:"+r[n].pattern+")$",rh(e)));return function(i,s){for(var o="",a=s&&s.encode||encodeURIComponent,l=!s||s.validate!==!1,c=0;c<r.length;c++){var h=r[c];if(typeof h!="string"){var f,d=i?i[h.name]:void 0;if(Array.isArray(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(f=a(d[u],h),l&&!t[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(u===0?h.prefix:h.delimiter)+f}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(f=a(String(d),h),l&&!t[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+f+'"');o+=h.prefix+f}}else o+=h}return o}}function Yi(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function yy(r){return r.replace(/([=!:$/()])/g,"\\$1")}function rh(r){return r&&r.sensitive?"":"i"}function lm(r,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,s=t.end!==!1,o=t.delimiter||sm,a=[].concat(t.endsWith||[]).map(Yi).concat("$").join("|"),l=i?"^":"",c=0;c<r.length;c++){var h=r[c];if(typeof h=="string")l+=Yi(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+Yi(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),l+=h.optional?h.prefix?"(?:"+Yi(h.prefix)+"("+f+"))?":"("+f+")?":Yi(h.prefix)+"("+f+")"}}if(s)n||(l+="(?:"+Yi(o)+")?"),l+=a==="$"?"$":"(?="+a+")";else{var d=r[r.length-1],u=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Yi(o)+"(?="+a+"))?"),u||(l+="(?="+Yi(o)+"|"+a+")")}return new RegExp(l,rh(t))}function sh(r,e,t){return r instanceof RegExp?function(n,i){if(!i)return n;var s=n.source.match(/\((?!\?)/g);if(s)for(var o=0;o<s.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(r,e):Array.isArray(r)?function(n,i,s){for(var o=[],a=0;a<n.length;a++)o.push(sh(n[a],i,s).source);return new RegExp("(?:"+o.join("|")+")",rh(s))}(r,e,t):function(n,i,s){return lm(ih(n,s),i,s)}(r,e,t)}cs.match=function(r,e){var t=[];return om(sh(r,t,e),t)},cs.regexpToFunction=my,cs.parse=gy,cs.compile=function(r,e){return am(ih(r,e),e)},cs.tokensToFunction=_y,cs.tokensToRegExp=vy;var Li={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},us=new(function(){function r(){this.o=Li,this.u=new DOMParser}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=n.length;if(s===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],s===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),h=1;h<s;h++)c.href=arguments[h],o.href=l=c.href;return a.removeChild(o),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},r}()),cm=new(function(){function r(){this.h=[],this.v=-1}var e=r.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var s={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.m(this.v-o),this.replace(s.states),this.v=o}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,s=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(s){case"push":window.history&&window.history.pushState(a,"",t);break;case"replace":window.history&&window.history.replaceState(a,"",t)}},e.update=function(t,n){var i=n||this.v,s=as({},this.get(i),{},t);this.set(i,s)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,s=Li.prefix+"-"+Li.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},th(r,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),r}()),Ul=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=us.toElement(n);i.namespace=us.getNamespace(s),i.container=us.getContainer(s),i.html=n,cm.update({ns:i.namespace});var o=us.toDocument(n);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},um=cs,Sy={__proto__:null,update:Ul,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:um},hm=function(){return window.location.origin},pa=function(r){return r===void 0&&(r=window.location.href),Ol(r).port},Ol=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(hm(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=fm(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},fm=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},oh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},My={__proto__:null,getHref:function(){return window.location.href},getOrigin:hm,getPort:pa,getPath:function(r){return r===void 0&&(r=window.location.href),Ol(r).path},parse:Ol,parseQuery:fm,clean:oh};function Ey(r,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE){if(s.status===200)n(s.responseText);else if(s.status){var o={status:s.status,statusText:s.statusText};t(r,o),i(o)}}},s.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(r,o),i(o)},s.onerror=function(){var o=new Error("Fetch error");t(r,o),i(o)},s.open("GET",r),s.timeout=e,s.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),s.setRequestHeader("x-barba","yes"),s.send()})}var Ty=function(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"};function to(r,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=!1,o=new Promise(function(a,l){e.async=function(){return s=!0,function(h,f){h?l(h):a(f)}};var c=r.apply(e,n);s||(Ty(c)?c.then(a,l):a(c))});return o}}var wr=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new ls("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Il(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){for(var i=this,s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return to(c.fn,c.ctx).apply(void 0,o)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(py)),dm=function(){function r(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return um(n)})}}return r.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Ol(e).path;return this.P.some(function(n){return n.exec(t)!==null})},r}(),by=function(r){function e(n){var i;return(i=r.call(this,n)||this).k=new Map,i}Il(e,r);var t=e.prototype;return t.set=function(n,i,s){return this.k.set(n,{action:s,request:i}),{action:s,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var s=as({},this.k.get(n),{},i);return this.k.set(n,s),s},e}(dm),wy=function(){return!window.history.pushState},Ay=function(r){return!r.el||!r.href},Cy=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Ry=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Py=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Ly=function(r){var e=r.el;return e.port!==void 0&&pa()!==pa(e.href)},Dy=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Ny=function(r){return r.el.hasAttribute(Li.prefix+"-"+Li.prevent)},Iy=function(r){return Boolean(r.el.closest("["+Li.prefix+"-"+Li.prevent+'="all"]'))},Uy=function(r){var e=r.href;return oh(e)===oh()&&pa(e)===pa()},Oy=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Il(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",wy),this.add("exists",Ay),this.add("newTab",Cy),this.add("blank",Ry),this.add("corsDomain",Py),this.add("corsPort",Ly),this.add("download",Dy),this.add("preventSelf",Ny),this.add("preventAll",Iy),this.add("sameUrl",Uy,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e}(dm),ah=function(r){function e(t,n){var i;n===void 0&&(n="Barba error");for(var s=arguments.length,o=new Array(s>2?s-2:0),a=2;a<s;a++)o[a-2]=arguments[a];return(i=r.call.apply(r,[this].concat(o))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return Il(e,r),e}(im(Error)),Fy=function(){function r(t){t===void 0&&(t=[]),this.logger=new ls("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var u=!0,g={};return!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(_){u&&(u=i.R(d,_,t,g),d.from&&d.to&&(u=i.R(d,_,t,g,"from")&&i.R(d,_,t,g,"to")),d.from&&!d.to&&(u=i.R(d,_,t,g,"from")),!d.from&&d.to&&(u=i.R(d,_,t,g,"to")))}),o.set(d,g),u)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,f=[a];Object.keys(l).length>0&&f.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,s,o){var a=!0,l=!1,c=t,h=n.name,f=h,d=h,u=h,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var p=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&p.indexOf(_[f])!==-1&&(l=!0),p.indexOf(_[f])===-1&&(a=!1);break;case"object":var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]?(_[d].name&&m.indexOf(_[d].name)!==-1&&(l=!0),m.indexOf(_[d].name)===-1&&(a=!1)):a=!1;break;case"function":g[u](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][h]=c[o][h]):s[h]=c[h])}return a},e.O=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(s,o){i+=n.O(t,s.name,o+1)}),t.priority=i,t},r}(),By=function(){function r(t){t===void 0&&(t=[]),this.logger=new ls("@barba/core"),this.S=!1,this.store=new Fy(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.S=!1},o=this,a=i||{};o.S=!0;var l=eo(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(c){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(u){if(l)return u;c.S=!1},l=!1,c=this,h=i||{},f=h.sync===!0||!1;c.S=!0;var d=eo(function(){function u(){return Promise.resolve(c.j("before",n,h)).then(function(){var _=!1;function p(S){return _?S:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,h)).then(function(){})})}var m=function(){if(f)return eo(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),c.enter(n,h)])).then(function(){return Promise.resolve(c.j("afterLeave",n,h)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})})})},function(T){if(c.M(T))throw new ah(T,"Transition error [sync]")});var S=function(T){return _?T:eo(function(){var b=function(){if(v!==!1)return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,h)).then(function(){return Promise.resolve(c.enter(n,h,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,h)).then(function(){})})})})}();if(b&&b.then)return b.then(function(){})},function(b){if(c.M(b))throw new ah(b,"Transition error [before/after/enter]")})},v=!1,y=eo(function(){return Promise.resolve(c.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([c.leave(n,h),Ul(s,n)]).then(function(T){return T[0]})).then(function(T){return v=T,Promise.resolve(c.j("afterLeave",n,h)).then(function(){})})})},function(T){if(c.M(T))throw new ah(T,"Transition error [before/after/leave]")});return y&&y.then?y.then(S):S(y)}();return m&&m.then?m.then(p):p(m)})}var g=function(){if(f)return Promise.resolve(Ul(s,n)).then(function(){})}();return g&&g.then?g.then(u):u()},function(u){throw c.S=!1,u.name&&u.name==="BarbaError"?(c.logger.debug(u.label),c.logger.error(u.error),u):(c.logger.debug("Transition error [page]"),c.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a(d))}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(wr.do("once",t,n)).then(function(){return n.once?to(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(wr.do("leave",t,n)).then(function(){return n.leave?to(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(wr.do("enter",t,n)).then(function(){return n.enter?to(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return us.addContainer(t.next.container,n),wr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return us.removeContainer(t.current.container),wr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(wr.do(t,n,i)).then(function(){return i[t]?to(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},th(r,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),ky=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){wr[n](t.L(n))}))}return r.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?to(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var zy={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Hy=new(function(){function r(){this.version=dy,this.schemaPage=zy,this.Logger=ls,this.logger=new ls("@barba/core"),this.plugins=[],this.hooks=wr,this.dom=us,this.helpers=Sy,this.history=cm,this.request=Ey,this.url=My}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Li:l,h=n.requestError,f=n.timeout,d=f===void 0?2e3:f,u=n.cacheIgnore,g=u!==void 0&&u,_=n.prefetchIgnore,p=_!==void 0&&_,m=n.preventRunning,S=m!==void 0&&m,v=n.prevent,y=v===void 0?null:v,T=n.debug,b=n.logLevel;if(ls.setLevel((T!==void 0&&T)===!0?"debug":b===void 0?"off":b),this.logger.info(this.version),Object.keys(c).forEach(function(N){Li[N]&&(Li[N]=c[N])}),this.$=h,this.timeout=d,this.cacheIgnore=g,this.prefetchIgnore=p,this.preventRunning=S,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new by(g),this.prevent=new Oy(p),this.transitions=new By(s),this.views=new ky(a),y!==null){if(typeof y!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",y)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(N){return N.init()});var R=this.data;R.trigger="barba",R.next=R.current,R.current=as({},this.schemaPage),this.hooks.do("ready",R),this.once(R),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var s=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var h=eo(function(){var f=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:f,wrapper:o._})).then(function(){o.q()})},function(){ls.getLevel()===0&&o.force(c.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=as({href:t},o.url.parse(t)),o.data.trigger=n;var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=function(){if(o.transitions.shouldWait)return Promise.resolve(Ul(a,o.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var o=i[0],a=i[1],l=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(t,l,o,a)===!1||(l==="click"&&this.force(o),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var s=this.dom.getHref(i);this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:as({href:t},this.url.parse(t))};this.C={current:n,next:as({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},th(r,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),r}());const Gy=(r,e)=>{e.lenisManager.lenis.stop();const t=e.portalManager.getPortalTL(),n=t.duration();return t.add(()=>{r.current.container.style="display: none"},n),t.play()},Vy=r=>{},Wy=r=>Tt.to(r.current.container,{opacity:0,duration:.6}),Xy=(r,e)=>(Tt.set(r.next.container,{position:"absolute",top:"0px",width:"100%"}),Tt.set(".footer",{autoAlpha:0}),Tt.from(r.next.container,{yPercent:3,opacity:0,duration:2,ease:"power4.out",onComplete:()=>{Tt.set(r.next.container,{clearProps:"all"}),Tt.set(".footer",{autoAlpha:1}),document.body.style.overflow="unset",e.lenisManager.lenis.start()}}));function pm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Yy(r,e,t){return e&&pm(r.prototype,e),t&&pm(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,Fl,qn,Ar,Cr,no,mm,hs,ma,gm,qi,fi,_m,vm=function(){return rn||typeof window!="undefined"&&(rn=window.gsap)&&rn.registerPlugin&&rn},xm=1,io=[],lt=[],Di=[],ga=Date.now,lh=function(e,t){return t},qy=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Di),lt=n,Di=i,lh=function(o,a){return t[o](a)}},Rr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},_a=function(e){return!!~gm.indexOf(e)},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bl="scrollLeft",kl="scrollTop",ch=function(){return qi&&qi.isPressed||lt.cache++},zl=function(e,t){var n=function i(s){if(s||s===0){xm&&(qn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),e(s),i.cacheID=lt.cache,o&&lh("ss",s)}else(t||lt.cache!==i.cacheID||lh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Bl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zl(function(r){return arguments.length?qn.scrollTo(r,Wt.sc()):qn.pageXOffset||Ar[Bl]||Cr[Bl]||no[Bl]||0})},Wt={s:kl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:zl(function(r){return arguments.length?qn.scrollTo(Sn.sc(),r):qn.pageYOffset||Ar[kl]||Cr[kl]||no[kl]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Pr=function(e,t){var n=t.s,i=t.sc;_a(e)&&(e=Ar.scrollingElement||Cr);var s=lt.indexOf(e),o=i===Wt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||xn(e,"scroll",ch);var a=lt[s+o],l=a||(lt[s+o]=zl(Rr(e,n),!0)||(_a(e)?i:zl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},uh=function(e,t,n){var i=e,s=e,o=ga(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=ga();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=ga();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},va=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ym=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Sm=function(){ma=rn.core.globals().ScrollTrigger,ma&&ma.core&&qy()},Mm=function(e){return rn=e||vm(),!Fl&&rn&&typeof document!="undefined"&&document.body&&(qn=window,Ar=document,Cr=Ar.documentElement,no=Ar.body,gm=[qn,Ar,Cr,no],rn.utils.clamp,_m=rn.core.context||function(){},hs="onpointerenter"in no?"pointer":"mouse",mm=Ft.isTouch=qn.matchMedia&&qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Ft.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xm=0},500),Sm(),Fl=1),Fl};Sn.op=Wt,lt.cache=0;var Ft=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Fl||Mm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||Sm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,v=n.onPress,y=n.onRelease,T=n.onRight,b=n.onLeft,E=n.onUp,R=n.onDown,N=n.onChangeX,x=n.onChangeY,A=n.onChange,W=n.onToggleX,k=n.onToggleY,L=n.onHover,F=n.onHoverEnd,z=n.onMove,G=n.ignoreCheck,$=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,re=n.onWheel,ue=n.onEnable,q=n.onDisable,D=n.onClick,V=n.scrollSpeed,te=n.capture,fe=n.allowClicks,le=n.lockAxis,me=n.onLockAxis;this.target=a=On(a)||Cr,this.vars=n,u&&(u=rn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,V=V||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qn.getComputedStyle(no).lineHeight)||22);var Re,ve,B,Ae,ge,Ee,De,H=this,Le=0,Xe=0,st=n.passive||!h,C=Pr(a,Sn),M=Pr(a,Wt),ie=C(),ce=M(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",he=_a(a),Ie=a.ownerDocument||Ar,He=[0,0,0],xe=[0,0,0],be=0,Ze=function(){return be=ga()},_e=function(ee,oe){return(H.event=ee)&&u&&~u.indexOf(ee.target)||oe&&de&&ee.pointerType!=="touch"||G&&G(ee,oe)},_t=function(){H._vx.reset(),H._vy.reset(),ve.pause(),f&&f(H)},$e=function(){var ee=H.deltaX=ym(He),oe=H.deltaY=ym(xe),J=Math.abs(ee)>=i,ye=Math.abs(oe)>=i;A&&(J||ye)&&A(H,ee,oe,He,xe),J&&(T&&H.deltaX>0&&T(H),b&&H.deltaX<0&&b(H),N&&N(H),W&&H.deltaX<0!=Le<0&&W(H),Le=H.deltaX,He[0]=He[1]=He[2]=0),ye&&(R&&H.deltaY>0&&R(H),E&&H.deltaY<0&&E(H),x&&x(H),k&&H.deltaY<0!=Xe<0&&k(H),Xe=H.deltaY,xe[0]=xe[1]=xe[2]=0),(Ae||B)&&(z&&z(H),B&&(S(H),B=!1),Ae=!1),Ee&&!(Ee=!1)&&me&&me(H),ge&&(re(H),ge=!1),Re=0},ke=function(ee,oe,J){He[J]+=ee,xe[J]+=oe,H._vx.update(ee),H._vy.update(oe),c?Re||(Re=requestAnimationFrame($e)):$e()},Ue=function(ee,oe){le&&!De&&(H.axis=De=Math.abs(ee)>Math.abs(oe)?"x":"y",Ee=!0),De!=="y"&&(He[2]+=ee,H._vx.update(ee,!0)),De!=="x"&&(xe[2]+=oe,H._vy.update(oe,!0)),c?Re||(Re=requestAnimationFrame($e)):$e()},Fe=function(ee){if(!_e(ee,1)){ee=va(ee,h);var oe=ee.clientX,J=ee.clientY,ye=oe-H.x,pe=J-H.y,Pe=H.isDragging;H.x=oe,H.y=J,(Pe||Math.abs(H.startX-oe)>=s||Math.abs(H.startY-J)>=s)&&(S&&(B=!0),Pe||(H.isDragging=!0),Ue(ye,pe),Pe||p&&p(H))}},Ke=H.onPress=function(O){_e(O,1)||O&&O.button||(H.axis=De=null,ve.pause(),H.isPressed=!0,O=va(O),Le=Xe=0,H.startX=H.x=O.clientX,H.startY=H.y=O.clientY,H._vx.reset(),H._vy.reset(),xn($?a:Ie,fi[1],Fe,st,!0),H.deltaX=H.deltaY=0,v&&v(H))},Te=H.onRelease=function(O){if(!_e(O,1)){yn($?a:Ie,fi[1],Fe,!0);var ee=!isNaN(H.y-H.startY),oe=H.isDragging,J=oe&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),ye=va(O);!J&&ee&&(H._vx.reset(),H._vy.reset(),h&&fe&&rn.delayedCall(.08,function(){if(ga()-be>300&&!O.defaultPrevented){if(O.target.click)O.target.click();else if(Ie.createEvent){var pe=Ie.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,qn,1,ye.screenX,ye.screenY,ye.clientX,ye.clientY,!1,!1,!1,!1,0,null),O.target.dispatchEvent(pe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&oe&&!$&&ve.restart(!0),m&&oe&&m(H),y&&y(H,J)}},ot=function(ee){return ee.touches&&ee.touches.length>1&&(H.isGesturing=!0)&&ne(ee,H.isDragging)},U=function(){return(H.isGesturing=!1)||P(H)},Me=function(ee){if(!_e(ee)){var oe=C(),J=M();ke((oe-ie)*V,(J-ce)*V,1),ie=oe,ce=J,f&&ve.restart(!0)}},j=function(ee){if(!_e(ee)){ee=va(ee,h),re&&(ge=!0);var oe=(ee.deltaMode===1?l:ee.deltaMode===2?qn.innerHeight:1)*g;ke(ee.deltaX*oe,ee.deltaY*oe,0),f&&!$&&ve.restart(!0)}},Se=function(ee){if(!_e(ee)){var oe=ee.clientX,J=ee.clientY,ye=oe-H.x,pe=J-H.y;H.x=oe,H.y=J,Ae=!0,f&&ve.restart(!0),(ye||pe)&&Ue(ye,pe)}},se=function(ee){H.event=ee,L(H)},I=function(ee){H.event=ee,F(H)},ae=function(ee){return _e(ee)||va(ee,h)&&D(H)};ve=H._dc=rn.delayedCall(d||.25,_t).pause(),H.deltaX=H.deltaY=0,H._vx=uh(0,50,!0),H._vy=uh(0,50,!0),H.scrollX=C,H.scrollY=M,H.isDragging=H.isGesturing=H.isPressed=!1,_m(this),H.enable=function(O){return H.isEnabled||(xn(he?Ie:a,"scroll",ch),o.indexOf("scroll")>=0&&xn(he?Ie:a,"scroll",Me,st,te),o.indexOf("wheel")>=0&&xn(a,"wheel",j,st,te),(o.indexOf("touch")>=0&&mm||o.indexOf("pointer")>=0)&&(xn(a,fi[0],Ke,st,te),xn(Ie,fi[2],Te),xn(Ie,fi[3],Te),fe&&xn(a,"click",Ze,!0,!0),D&&xn(a,"click",ae),ne&&xn(Ie,"gesturestart",ot),P&&xn(Ie,"gestureend",U),L&&xn(a,hs+"enter",se),F&&xn(a,hs+"leave",I),z&&xn(a,hs+"move",Se)),H.isEnabled=!0,O&&O.type&&Ke(O),ue&&ue(H)),H},H.disable=function(){H.isEnabled&&(io.filter(function(O){return O!==H&&_a(O.target)}).length||yn(he?Ie:a,"scroll",ch),H.isPressed&&(H._vx.reset(),H._vy.reset(),yn($?a:Ie,fi[1],Fe,!0)),yn(he?Ie:a,"scroll",Me,te),yn(a,"wheel",j,te),yn(a,fi[0],Ke,te),yn(Ie,fi[2],Te),yn(Ie,fi[3],Te),yn(a,"click",Ze,!0),yn(a,"click",ae),yn(Ie,"gesturestart",ot),yn(Ie,"gestureend",U),yn(a,hs+"enter",se),yn(a,hs+"leave",I),yn(a,hs+"move",Se),H.isEnabled=H.isPressed=H.isDragging=!1,q&&q(H))},H.kill=H.revert=function(){H.disable();var O=io.indexOf(H);O>=0&&io.splice(O,1),qi===H&&(qi=0)},io.push(H),$&&_a(a)&&(qi=H),H.enable(_)},Yy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ft.version="3.12.5",Ft.create=function(r){return new Ft(r)},Ft.register=Mm,Ft.getAll=function(){return io.slice()},Ft.getById=function(r){return io.filter(function(e){return e.vars.id===r})[0]},vm()&&rn.registerPlugin(Ft);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be,ro,ht,Nt,di,bt,Em,Hl,xa,ya,Sa,Gl,hn,Vl,hh,Mn,Tm,bm,so,wm,fh,Am,En,dh,Cm,Rm,Lr,ph,mh,oo,gh,Wl,_h,vh,Xl=1,fn=Date.now,xh=fn(),ri=0,Ma=0,Pm=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Lm=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$y=function r(){return Ma&&requestAnimationFrame(r)},Dm=function(){return Vl=1},Nm=function(){return Vl=0},Ni=function(e){return e},Ea=function(e){return Math.round(e*1e5)/1e5||0},Im=function(){return typeof window!="undefined"},Um=function(){return Be||Im()&&(Be=window.gsap)&&Be.registerPlugin&&Be},fs=function(e){return!!~Em.indexOf(e)},Om=function(e){return(e==="Height"?gh:ht["inner"+e])||di["client"+e]||bt["client"+e]},Fm=function(e){return Rr(e,"getBoundingClientRect")||(fs(e)?function(){return rc.width=ht.innerWidth,rc.height=gh,rc}:function(){return $i(e)})},Zy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Rr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Om(s):e["client"+s])||0}},Ky=function(e,t){return!t||~Di.indexOf(e)?Fm(e):function(){return rc}},Ii=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Rr(e,n))?o()-Fm(e)()[s]:fs(e)?(di[n]||bt[n])-Om(i):e[n]-e["offset"+i])},Yl=function(e,t){for(var n=0;n<so.length;n+=3)(!t||~t.indexOf(so[n+1]))&&e(so[n],so[n+1],so[n+2])},$n=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Ta=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},yh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ao=Math.abs,Bm="left",km="top",Sh="right",Mh="bottom",ps="width",ms="height",wa="Right",Aa="Left",Ca="Top",Ra="Bottom",Ht="padding",si="margin",lo="Width",Eh="Height",Xt="px",oi=function(e){return ht.getComputedStyle(e)},Jy=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},zm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$i=function(e,t){var n=t&&oi(e)[hh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ql=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Hm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},jy=function(e){return function(t){return Be.utils.snap(Hm(e),t)}},Th=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Qy=function(e){return function(t,n){return Th(Hm(e))(t,n.direction)}},$l=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Gm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kl={toggleActions:"play",anticipatePin:0},Jl={top:0,left:0,center:.5,bottom:1,right:1},jl=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jl?Jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ql=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,g=Nt.createElement("div"),_=fs(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?bt:n,S=e.indexOf("start")!==-1,v=S?c:h,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Wt?Sh:Mh)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ec(g,0,i,S),g},ec=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+lo]=1,s["border"+a+lo]=0,s[n.p]=t+"px",Be.set(e,s)},rt=[],bh={},Pa,Vm=function(){return fn()-ri>34&&(Pa||(Pa=requestAnimationFrame(Zi)))},co=function(){(!En||!En.isPressed||En.startX>bt.clientWidth)&&(lt.cache++,En?Pa||(Pa=requestAnimationFrame(Zi)):Zi(),ri||_s("scrollStart"),ri=fn())},wh=function(){Rm=ht.innerWidth,Cm=ht.innerHeight},La=function(){lt.cache++,!hn&&!Am&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!dh||Rm!==ht.innerWidth||Math.abs(ht.innerHeight-Cm)>ht.innerHeight*.25)&&Hl.restart(!0)},gs={},eS=[],Wm=function r(){return en(et,"scrollEnd",r)||xs(!0)},_s=function(e){return gs[e]&&gs[e].map(function(t){return t()})||eS},Zn=[],Xm=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},Ah=function(e,t){var n;for(Mn=0;Mn<rt.length;Mn++)n=rt[Mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Wl=!0,t&&Xm(t),t||_s("revert")},Ym=function(e,t){lt.cache++,(t||!bn)&&lt.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(ht.history.scrollRestoration=mh=e)},bn,vs=0,qm,tS=function(){if(qm!==vs){var e=qm=vs;requestAnimationFrame(function(){return e===vs&&xs(!0)})}},$m=function(){bt.appendChild(oo),gh=!En&&oo.offsetHeight||ht.innerHeight,bt.removeChild(oo)},Zm=function(e){return xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xs=function(e,t){if(ri&&!e&&!Wl){Qt(et,"scrollEnd",Wm);return}$m(),bn=et.isRefreshing=!0,lt.forEach(function(i){return Tn(i)&&++i.cacheID&&(i.rec=i())});var n=_s("refreshInit");wm&&et.sort(),t||Ah(),lt.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Wl=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),_h=1,Zm(!0),rt.forEach(function(i){var s=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zm(!1),_h=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ym(mh,1),Hl.pause(),vs++,bn=2,Zi(2),rt.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),bn=et.isRefreshing=!1,_s("refresh")},Ch=0,tc=1,Da,Zi=function(e){if(e===2||!bn&&!Wl){et.isUpdating=!0,Da&&Da.update(0);var t=rt.length,n=fn(),i=n-xh>=50,s=t&&rt[0].scroll();if(tc=Ch>s?-1:1,bn||(Ch=s),i&&(ri&&!Vl&&n-ri>200&&(ri=0,_s("scrollEnd")),Sa=xh,xh=n),tc<0){for(Mn=t;Mn-- >0;)rt[Mn]&&rt[Mn].update(0,i);tc=1}else for(Mn=0;Mn<t;Mn++)rt[Mn]&&rt[Mn].update(0,i);et.isUpdating=!1}Pa=0},Rh=[Bm,km,Mh,Sh,si+Ra,si+wa,si+Ca,si+Aa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nc=Rh.concat([ps,ms,"boxSizing","max"+lo,"max"+Eh,"position",si,Ht,Ht+Ca,Ht+wa,Ht+Ra,Ht+Aa]),nS=function(e,t,n){uo(n);var i=e._gsap;if(i.spacerIsNative)uo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ph=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Rh.length,o=t.style,a=e.style,l;s--;)l=Rh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Mh]=a[Sh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ps]=ql(e,Sn)+Xt,o[ms]=ql(e,Wt)+Xt,o[Ht]=a[si]=a[km]=a[Bm]="0",uo(i),a[ps]=a["max"+lo]=n[ps],a[ms]=a["max"+Eh]=n[ms],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iS=/([A-Z])/g,uo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(iS,"-$1").toLowerCase())}},ic=function(e){for(var t=nc.length,n=e.style,i=[],s=0;s<t;s++)i.push(nc[s],n[nc[s]]);return i.t=e,i},rS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},rc={left:0,top:0},Km=function(e,t,n,i,s,o,a,l,c,h,f,d,u,g){Tn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?jl("0"+e.substr(3),n):0));var _=u?u.time():0,p,m,S;if(u&&u.seek(0),isNaN(e)||(e=+e),Ta(e))u&&(e=Be.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&ec(a,n,i,!0);else{Tn(t)&&(t=t(l));var v=(e||"0").split(" "),y,T,b,E;S=On(t,l)||bt,y=$i(S)||{},(!y||!y.left&&!y.top)&&oi(S).display==="none"&&(E=S.style.display,S.style.display="block",y=$i(S),E?S.style.display=E:S.style.removeProperty("display")),T=jl(v[0],y[i.d]),b=jl(v[1]||"0",n),e=y[i.p]-c[i.p]-h+T+s-b,a&&ec(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,N=o._isStart;p="scroll"+i.d2,ec(o,R,i,N&&R>20||!N&&(f?Math.max(bt[p],di[p]):o.parentNode[p])<=R+1),f&&(c=$i(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return u&&S&&(p=$i(S),u.seek(d),m=$i(S),u._caScrollDist=p[i.p]-m[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},sS=/(webkit|moz|length|cssText|inset)/i,Jm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===bt){e._stOrig=s.cssText,a=oi(e);for(o in a)!+o&&!sS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},jm=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},sc=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},Qm=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=jm(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),et.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},et=function(){function r(t,n){ro||r.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ph(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Ni;return}n=zm($n(n)||Ta(n)||n.nodeType?{trigger:n}:n,Kl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,v=s.once,y=s.snap,T=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,N=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Wt,A=!f&&f!==0,W=On(n.scroller||ht),k=Be.core.getCache(W),L=fs(W),F=("pinType"in n?n.pinType:Rr(W,"pinType")||L&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=A&&n.toggleActions.split(" "),$="markers"in n?n.markers:Kl.markers,ne=L?0:parseFloat(oi(W)["border"+x.p2+lo])||0,P=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ue=Zy(W,L,x),q=Ky(W,L),D=0,V=0,te=0,fe=Pr(W,x),le,me,Re,ve,B,Ae,ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de,he,Ie,He,xe,be,Ze,_e,_t,$e,ke,Ue,Fe,Ke,Te,ot,U,Me,j,Se,se,I;if(P._startClamp=P._endClamp=!1,P._dir=x,p*=45,P.scroller=W,P.scroll=E?E.time.bind(E):fe,ve=fe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(wm=1,n.refreshPriority===-9999&&(Da=P)),k.tweenScroll=k.tweenScroll||{top:Qm(W,Wt),left:Qm(W,Sn)},P.tweenTo=le=k.tweenScroll[x.p],P.scrubDuration=function(J){ot=Ta(J)&&J,ot?Te?Te.duration(J):Te=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ot,paused:!0,onComplete:function(){return m&&m(P)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Fe=0,l||(l=i.vars.id)),y&&((!ds(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&Be.set(L?[bt,di]:W,{scrollBehavior:"auto"}),lt.forEach(function(J){return Tn(J)&&J.target===(L?Nt.scrollingElement||di:W)&&(J.smooth=!1)}),Re=Tn(y.snapTo)?y.snapTo:y.snapTo==="labels"?jy(i):y.snapTo==="labelsDirectional"?Qy(i):y.directional!==!1?function(J,ye){return Th(y.snapTo)(J,fn()-V<500?0:ye.direction)}:Be.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=ds(U)?ya(U.min,U.max):ya(U,U),Me=Be.delayedCall(y.delay||ot/2||.1,function(){var J=fe(),ye=fn()-V<500,pe=le.tween;if((ye||Math.abs(P.getVelocity())<10)&&!pe&&!Vl&&D!==J){var Pe=(J-Ae)/C,We=i&&!A?i.totalProgress():Pe,Oe=ye?0:(We-Ke)/(fn()-Sa)*1e3||0,Je=Be.utils.clamp(-Pe,1-Pe,ao(Oe/2)*Oe/.185),ct=Pe+(y.inertia===!1?0:Je),dt,it,at=y,mt=at.onStart,w=at.onInterrupt,X=at.onComplete;if(dt=Re(ct,P),Ta(dt)||(dt=ct),it=Math.round(Ae+dt*C),J<=ge&&J>=Ae&&it!==J){if(pe&&!pe._initted&&pe.data<=ao(it-J))return;y.inertia===!1&&(Je=dt-Pe),le(it,{duration:U(ao(Math.max(ao(ct-We),ao(dt-We))*.185/Oe/.05||0)),ease:y.ease||"power3",data:ao(it-J),onInterrupt:function(){return Me.restart(!0)&&w&&w(P)},onComplete:function(){P.update(),D=fe(),i&&(Te?Te.resetTo("totalProgress",dt,i._tTime/i._tDur):i.progress(dt)),Fe=Ke=i&&!A?i.totalProgress():P.progress,S&&S(P),X&&X(P)}},J,Je*C,it-J-Je*C),mt&&mt(P,le.tween)}}else P.isActive&&D!==J&&Me.restart(!0)}).pause()),l&&(bh[l]=P),d=P.trigger=On(d||u!==!0&&u),I=d&&d._gsap&&d._gsap.stRevert,I&&(I=I(P)),u=u===!0?d:On(u),$n(a)&&(a={targets:d,className:a}),u&&(g===!1||g===si||(g=!g&&u.parentNode&&u.parentNode.style&&oi(u.parentNode).display==="flex"?!1:Ht),P.pin=u,me=Be.core.getCache(u),me.spacer?M=me.pinState:(b&&(b=On(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),me.spacerIsNative=!!b,b&&(me.spacerState=ic(b))),me.spacer=de=b||Nt.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),me.pinState=M=ic(u)),n.force3D!==!1&&Be.set(u,{force3D:!0}),P.spacer=de=me.spacer,Ue=oi(u),Ze=Ue[g+x.os2],Ie=Be.getProperty(u),He=Be.quickSetter(u,x.a,Xt),Ph(u,de,Ue),ce=ic(u)),$){Xe=ds($)?zm($,Gm):Gm,H=Ql("scroller-start",l,W,x,Xe,0),Le=Ql("scroller-end",l,W,x,Xe,0,H),he=H["offset"+x.op.d2];var ae=On(Rr(W,"content")||W);Ee=this.markerStart=Ql("start",l,ae,x,Xe,he,0,E),De=this.markerEnd=Ql("end",l,ae,x,Xe,he,0,E),E&&(se=Be.quickSetter([Ee,De],x.a,Xt)),!F&&!(Di.length&&Rr(W,"fixedMarkers")===!0)&&(Jy(L?bt:W),Be.set([H,Le],{force3D:!0}),_t=Be.quickSetter(H,x.a,Xt),ke=Be.quickSetter(Le,x.a,Xt))}if(E){var O=E.vars.onUpdate,ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),O&&O.apply(E,ee||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(J,ye){if(!ye)return P.kill(!0);var pe=J!==!1||!P.enabled,Pe=hn;pe!==P.isReverted&&(pe&&(j=Math.max(fe(),P.scroll.rec||0),te=P.progress,Se=i&&i.progress()),Ee&&[Ee,De,H,Le].forEach(function(We){return We.style.display=pe?"none":"block"}),pe&&(hn=P,P.update(pe)),u&&(!T||!P.isActive)&&(pe?nS(u,de,M):Ph(u,de,oi(u),_e)),pe||P.update(pe),hn=Pe,P.isReverted=pe)},P.refresh=function(J,ye,pe,Pe){if(!((hn||!P.enabled)&&!ye)){if(u&&J&&ri){Qt(r,"scrollEnd",Wm);return}!bn&&re&&re(P),hn=P,le.tween&&!pe&&(le.tween.kill(),le.tween=0),Te&&Te.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var We=ue(),Oe=q(),Je=E?E.duration():Ii(W,x),ct=C<=.01,dt=0,it=Pe||0,at=ds(pe)?pe.end:n.end,mt=n.endTrigger||d,w=ds(pe)?pe.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),X=P.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,P),K=d&&Math.max(0,rt.indexOf(P))||0,Q=K,Z,we,ze,Ye,Ge,Ve,qe,Qe,Ct,Kt,vt,Pn,xt;for($&&ds(pe)&&(Pn=Be.getProperty(H,x.p),xt=Be.getProperty(Le,x.p));Q--;)Ve=rt[Q],Ve.end||Ve.refresh(0,1)||(hn=P),qe=Ve.pin,qe&&(qe===d||qe===u||qe===X)&&!Ve.isReverted&&(Kt||(Kt=[]),Kt.unshift(Ve),Ve.revert(!0,!0)),Ve!==rt[Q]&&(K--,Q--);for(Tn(w)&&(w=w(P)),w=Pm(w,"start",P),Ae=Km(w,d,We,x,fe(),Ee,H,P,Oe,ne,F,Je,E,P._startClamp&&"_startClamp")||(u?-.001:0),Tn(at)&&(at=at(P)),$n(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=($n(w)?w.split(" ")[0]:"")+at:(dt=jl(at.substr(2),We),at=$n(w)?w:(E?Be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+dt,mt=d)),at=Pm(at,"end",P),ge=Math.max(Ae,Km(at||(mt?"100% 0":Je),mt,We,x,fe()+dt,De,Le,P,Oe,ne,F,Je,E,P._endClamp&&"_endClamp"))||-.001,dt=0,Q=K;Q--;)Ve=rt[Q],qe=Ve.pin,qe&&Ve.start-Ve._pinPush<=Ae&&!E&&Ve.end>0&&(Z=Ve.end-(P._startClamp?Math.max(0,Ve.start):Ve.start),(qe===d&&Ve.start-Ve._pinPush<Ae||qe===X)&&isNaN(w)&&(dt+=Z*(1-Ve.progress)),qe===u&&(it+=Z));if(Ae+=dt,ge+=dt,P._startClamp&&(P._startClamp+=dt),P._endClamp&&!bn&&(P._endClamp=ge||-.001,ge=Math.min(ge,Ii(W,x))),C=ge-Ae||(Ae-=.01)&&.001,ct&&(te=Be.utils.clamp(0,1,Be.utils.normalize(Ae,ge,j))),P._pinPush=it,Ee&&dt&&(Z={},Z[x.a]="+="+dt,X&&(Z[x.p]="-="+fe()),Be.set([Ee,De],Z)),u&&!(_h&&P.end>=Ii(W,x)))Z=oi(u),Ye=x===Wt,ze=fe(),xe=parseFloat(Ie(x.a))+it,!Je&&ge>1&&(vt=(L?Nt.scrollingElement||di:W).style,vt={style:vt,value:vt["overflow"+x.a.toUpperCase()]},L&&oi(bt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(vt.style["overflow"+x.a.toUpperCase()]="scroll")),Ph(u,de,Z),ce=ic(u),we=$i(u,!0),Qe=F&&Pr(W,Ye?Sn:Wt)(),g?(_e=[g+x.os2,C+it+Xt],_e.t=de,Q=g===Ht?ql(u,x)+C+it:0,Q&&(_e.push(x.d,Q+Xt),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Xt)),uo(_e),X&&rt.forEach(function(je){je.pin===X&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),F&&fe(j)):(Q=ql(u,x),Q&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Q+Xt)),F&&(Ge={top:we.top+(Ye?ze-Ae:Qe)+Xt,left:we.left+(Ye?Qe:ze-Ae)+Xt,boxSizing:"border-box",position:"fixed"},Ge[ps]=Ge["max"+lo]=Math.ceil(we.width)+Xt,Ge[ms]=Ge["max"+Eh]=Math.ceil(we.height)+Xt,Ge[si]=Ge[si+Ca]=Ge[si+wa]=Ge[si+Ra]=Ge[si+Aa]="0",Ge[Ht]=Z[Ht],Ge[Ht+Ca]=Z[Ht+Ca],Ge[Ht+wa]=Z[Ht+wa],Ge[Ht+Ra]=Z[Ht+Ra],Ge[Ht+Aa]=Z[Ht+Aa],ie=rS(M,Ge,T),bn&&fe(0)),i?(Ct=i._initted,fh(1),i.render(i.duration(),!0,!0),be=Ie(x.a)-xe+C+it,$e=Math.abs(C-be)>1,F&&$e&&ie.splice(ie.length-2,2),i.render(0,!0,!0),Ct||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fh(0)):be=C,vt&&(vt.value?vt.style["overflow"+x.a.toUpperCase()]=vt.value:vt.style.removeProperty("overflow-"+x.a));else if(d&&fe()&&!E)for(we=d.parentNode;we&&we!==bt;)we._pinOffset&&(Ae-=we._pinOffset,ge-=we._pinOffset),we=we.parentNode;Kt&&Kt.forEach(function(je){return je.revert(!1,!0)}),P.start=Ae,P.end=ge,ve=B=bn?j:fe(),!E&&!bn&&(ve<j&&fe(j),P.scroll.rec=0),P.revert(!1,!0),V=fn(),Me&&(D=-1,Me.restart(!0)),hn=0,i&&A&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se||0,!0).render(i.time(),!0,!0),(ct||te!==P.progress||E||_)&&(i&&!A&&i.totalProgress(E&&Ae<-.001&&!te?Be.utils.normalize(Ae,ge,0):te,!0),P.progress=ct||(ve-Ae)/C===te?0:te),u&&g&&(de._pinOffset=Math.round(P.progress*be)),Te&&Te.invalidate(),isNaN(Pn)||(Pn-=Be.getProperty(H,x.p),xt-=Be.getProperty(Le,x.p),sc(H,x,Pn),sc(Ee,x,Pn-(Pe||0)),sc(Le,x,xt),sc(De,x,xt-(Pe||0))),ct&&!bn&&P.update(),h&&!bn&&!st&&(st=!0,h(P),st=!1)}},P.getVelocity=function(){return(fe()-B)/(fn()-Sa)*1e3||0},P.endAnimation=function(){ba(P.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?A||ba(i,P.direction<0,1):ba(i,i.reversed()))},P.labelToScroll=function(J){return i&&i.labels&&(Ae||P.refresh()||Ae)+i.labels[J]/i.duration()*C||0},P.getTrailing=function(J){var ye=rt.indexOf(P),pe=P.direction>0?rt.slice(0,ye).reverse():rt.slice(ye+1);return($n(J)?pe.filter(function(Pe){return Pe.vars.preventOverlaps===J}):pe).filter(function(Pe){return P.direction>0?Pe.end<=Ae:Pe.start>=ge})},P.update=function(J,ye,pe){if(!(E&&!pe&&!J)){var Pe=bn===!0?j:P.scroll(),We=J?0:(Pe-Ae)/C,Oe=We<0?0:We>1?1:We||0,Je=P.progress,ct,dt,it,at,mt,w,X,K;if(ye&&(B=ve,ve=E?fe():Pe,y&&(Ke=Fe,Fe=i&&!A?i.totalProgress():Oe)),p&&u&&!hn&&!Xl&&ri&&(!Oe&&Ae<Pe+(Pe-B)/(fn()-Sa)*p?Oe=1e-4:Oe===1&&ge>Pe+(Pe-B)/(fn()-Sa)*p&&(Oe=.9999)),Oe!==Je&&P.enabled){if(ct=P.isActive=!!Oe&&Oe<1,dt=!!Je&&Je<1,w=ct!==dt,mt=w||!!Oe!=!!Je,P.direction=Oe>Je?1:-1,P.progress=Oe,mt&&!hn&&(it=Oe&&!Je?0:Oe===1?1:Je===1?2:3,A&&(at=!w&&G[it+1]!=="none"&&G[it+1]||G[it],K=i&&(at==="complete"||at==="reset"||at in i))),N&&(w||K)&&(K||f||!i)&&(Tn(N)?N(P):P.getTrailing(N).forEach(function(ze){return ze.endAnimation()})),A||(Te&&!hn&&!Xl?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Oe,i._tTime/i._tDur):(Te.vars.totalProgress=Oe,Te.invalidate().restart())):i&&i.totalProgress(Oe,!!(hn&&(V||J)))),u){if(J&&g&&(de.style[g+x.os2]=Ze),!F)He(Ea(xe+be*Oe));else if(mt){if(X=!J&&Oe>Je&&ge+1>Pe&&Pe+1>=Ii(W,x),T)if(!J&&(ct||X)){var Q=$i(u,!0),Z=Pe-Ae;Jm(u,bt,Q.top+(x===Wt?Z:0)+Xt,Q.left+(x===Wt?0:Z)+Xt)}else Jm(u,de);uo(ct||X?ie:ce),$e&&Oe<1&&ct||He(xe+(Oe===1&&!X?be:0))}}y&&!le.tween&&!hn&&!Xl&&Me.restart(!0),a&&(w||v&&Oe&&(Oe<1||!vh))&&xa(a.targets).forEach(function(ze){return ze.classList[ct||v?"add":"remove"](a.className)}),o&&!A&&!J&&o(P),mt&&!hn?(A&&(K&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),o&&o(P)),(w||!vh)&&(c&&w&&yh(P,c),z[it]&&yh(P,z[it]),v&&(Oe===1?P.kill(!1,1):z[it]=0),w||(it=Oe===1?1:3,z[it]&&yh(P,z[it]))),R&&!ct&&Math.abs(P.getVelocity())>(Ta(R)?R:2500)&&(ba(P.callbackAnimation),Te?Te.progress(1):ba(i,at==="reverse"?1:!Oe,1))):A&&o&&!hn&&o(P)}if(ke){var we=E?Pe/E.duration()*(E._caScrollDist||0):Pe;_t(we+(H._isFlipped?1:0)),ke(we)}se&&se(-Pe/E.duration()*(E._caScrollDist||0))}},P.enable=function(J,ye){P.enabled||(P.enabled=!0,Qt(W,"resize",La),L||Qt(W,"scroll",co),re&&Qt(r,"refreshInit",re),J!==!1&&(P.progress=te=0,ve=B=D=fe()),ye!==!1&&P.refresh())},P.getTween=function(J){return J&&le?le.tween:Te},P.setPositions=function(J,ye,pe,Pe){if(E){var We=E.scrollTrigger,Oe=E.duration(),Je=We.end-We.start;J=We.start+Je*J/Oe,ye=We.start+Je*ye/Oe}P.refresh(!1,!1,{start:Lm(J,pe&&!!P._startClamp),end:Lm(ye,pe&&!!P._endClamp)},Pe),P.update()},P.adjustPinSpacing=function(J){if(_e&&J){var ye=_e.indexOf(x.d)+1;_e[ye]=parseFloat(_e[ye])+J+Xt,_e[1]=parseFloat(_e[1])+J+Xt,uo(_e)}},P.disable=function(J,ye){if(P.enabled&&(J!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ye||Te&&Te.pause(),j=0,me&&(me.uncache=1),re&&en(r,"refreshInit",re),Me&&(Me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!L)){for(var pe=rt.length;pe--;)if(rt[pe].scroller===W&&rt[pe]!==P)return;en(W,"resize",La),L||en(W,"scroll",co)}},P.kill=function(J,ye){P.disable(J,ye),Te&&!ye&&Te.kill(),l&&delete bh[l];var pe=rt.indexOf(P);pe>=0&&rt.splice(pe,1),pe===Mn&&tc>0&&Mn--,pe=0,rt.forEach(function(Pe){return Pe.scroller===P.scroller&&(pe=1)}),pe||bn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,J&&i.revert({kill:!1}),ye||i.kill()),Ee&&[Ee,De,H,Le].forEach(function(Pe){return Pe.parentNode&&Pe.parentNode.removeChild(Pe)}),Da===P&&(Da=0),u&&(me&&(me.uncache=1),pe=0,rt.forEach(function(Pe){return Pe.pin===u&&pe++}),pe||(me.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),I&&I(P),i&&i.add&&!C){var oe=P.update;P.update=function(){P.update=oe,Ae||ge||P.refresh()},Be.delayedCall(.01,P.update),C=.01,Ae=ge=0}else P.refresh();u&&tS()},r.register=function(n){return ro||(Be=n||Um(),Im()&&window.document&&r.enable(),ro=Ma),ro},r.defaults=function(n){if(n)for(var i in n)Kl[i]=n[i];return Kl},r.disable=function(n,i){Ma=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),en(ht,"wheel",co),en(Nt,"scroll",co),clearInterval(Gl),en(Nt,"touchcancel",Ni),en(bt,"touchstart",Ni),$l(en,Nt,"pointerdown,touchstart,mousedown",Dm),$l(en,Nt,"pointerup,touchend,mouseup",Nm),Hl.kill(),Yl(en);for(var s=0;s<lt.length;s+=3)Zl(en,lt[s],lt[s+1]),Zl(en,lt[s],lt[s+2])},r.enable=function(){if(ht=window,Nt=document,di=Nt.documentElement,bt=Nt.body,Be&&(xa=Be.utils.toArray,ya=Be.utils.clamp,ph=Be.core.context||Ni,fh=Be.core.suppressOverwrites||Ni,mh=ht.history.scrollRestoration||"auto",Ch=ht.pageYOffset,Be.core.globals("ScrollTrigger",r),bt)){Ma=1,oo=document.createElement("div"),oo.style.height="100vh",oo.style.position="absolute",$m(),$y(),Ft.register(Be),r.isTouch=Ft.isTouch,Lr=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dh=Ft.isTouch===1,Qt(ht,"wheel",co),Em=[ht,Nt,di,bt],Be.matchMedia?(r.matchMedia=function(l){var c=Be.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Be.addEventListener("matchMediaInit",function(){return Ah()}),Be.addEventListener("matchMediaRevert",function(){return Xm()}),Be.addEventListener("matchMedia",function(){xs(0,1),_s("matchMedia")}),Be.matchMedia("(orientation: portrait)",function(){return wh(),wh})):console.warn("Requires GSAP 3.11.0 or later"),wh(),Qt(Nt,"scroll",co);var n=bt.style,i=n.borderTopStyle,s=Be.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=$i(bt),Wt.m=Math.round(o.top+Wt.sc())||0,Sn.m=Math.round(o.left+Sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Gl=setInterval(Vm,250),Be.delayedCall(.5,function(){return Xl=0}),Qt(Nt,"touchcancel",Ni),Qt(bt,"touchstart",Ni),$l(Qt,Nt,"pointerdown,touchstart,mousedown",Dm),$l(Qt,Nt,"pointerup,touchend,mouseup",Nm),hh=Be.utils.checkPrefix("transform"),nc.push(hh),ro=fn(),Hl=Be.delayedCall(.2,xs).pause(),so=[Nt,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;Nt.hidden?(Tm=l,bm=c):(Tm!==l||bm!==c)&&La()},Nt,"DOMContentLoaded",xs,ht,"load",xs,ht,"resize",La],Yl(Qt),rt.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)Zl(en,lt[a],lt[a+1]),Zl(en,lt[a],lt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(vh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Gl)||(Gl=i)&&setInterval(Vm,i),"ignoreMobileResize"in n&&(dh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Yl(en)||Yl(Qt,n.autoRefreshEvents||"none"),Am=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=On(n),o=lt.indexOf(s),a=fs(s);~o&&lt.splice(o,a?6:2),i&&(a?Di.unshift(ht,i,bt,i,di,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=($n(n)?On(n):n).getBoundingClientRect(),a=o[s?ps:ms]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[s?ps:ms],l=i==null?a/2:i in Jl?Jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=gs.killAll||[];gs={},i.forEach(function(s){return s()})}},r}();et.version="3.12.5",et.saveStyles=function(r){return r?xa(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),ph())}}):Zn},et.revert=function(r,e){return Ah(!r,e)},et.create=function(r,e){return new et(r,e)},et.refresh=function(r){return r?La():(ro||et.register())&&xs(!0)},et.update=function(r){return++lt.cache&&Zi(r===!0?2:0)},et.clearScrollMemory=Ym,et.maxScroll=function(r,e){return Ii(r,e?Sn:Wt)},et.getScrollFunc=function(r,e){return Pr(On(r),e?Sn:Wt)},et.getById=function(r){return bh[r]},et.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})},et.isScrolling=function(){return!!ri},et.snapDirectional=Th,et.addEventListener=function(r,e){var t=gs[r]||(gs[r]=[]);~t.indexOf(e)||t.push(e)},et.removeEventListener=function(r,e){var t=gs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Be.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Tn(s)&&(s=s(),Qt(et,"refresh",function(){return s=e.batchMax()})),xa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(et.create(c))}),t};var eg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Lh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===di&&r(bt,t)},oc={auto:1,scroll:1},oS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Be.core.getCache(s),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(oc[(l=oi(s)).overflowY]||oc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!fs(s)&&(oc[(l=oi(s)).overflowY]||oc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tg=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&oS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(Nt,Ft.eventTypes[0],ig,!1,!0)},onDisable:function(){return en(Nt,Ft.eventTypes[0],ig,!0)}})},aS=/(input|label|select|textarea)/i,ng,ig=function(e){var t=aS.test(e.target.tagName);(t||ng)&&(e._gsapAllow=!0,ng=t)},lS=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||di,h=Be.core.globals().ScrollSmoother,f=h&&h.get(),d=Lr&&(e.content&&On(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Pr(c,Wt),g=Pr(c,Sn),_=1,p=(Ft.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,S=Tn(i)?function(){return i(a)}:function(){return i||2.8},v,y,T=tg(c,e.type,!0,s),b=function(){return y=!1},E=Ni,R=Ni,N=function(){l=Ii(c,Wt),R=ya(Lr?1:0,l),n&&(E=ya(0,Ii(c,Sn))),v=vs},x=function(){d._gsap.y=Ea(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},A=function(){if(y){requestAnimationFrame(b);var $=Ea(a.deltaY/2),ne=R(u.v-$);if(d&&ne!==u.v+u.offset){u.offset=ne-u.v;var P=Ea((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=lt.cache,Zi()}return!0}u.offset&&x(),y=!0},W,k,L,F,z=function(){N(),W.isActive()&&W.vars.scrollY>l&&(u()>l?W.progress(1)&&u(l):W.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return Lr&&G.type==="touchmove"&&A()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){y=!1;var G=_;_=Ea((ht.visualViewport&&ht.visualViewport.scale||1)/p),W.pause(),G!==_&&Lh(c,_>1.01?!0:n?!1:"x"),k=g(),L=u(),N(),v=vs},e.onRelease=e.onGestureStart=function(G,$){if(u.offset&&x(),!$)F.restart(!0);else{lt.cache++;var ne=S(),P,re;n&&(P=g(),re=P+ne*.05*-G.velocityX/.227,ne*=eg(g,P,re,Ii(c,Sn)),W.vars.scrollX=E(re)),P=u(),re=P+ne*.05*-G.velocityY/.227,ne*=eg(u,P,re,Ii(c,Wt)),W.vars.scrollY=R(re),W.invalidate().duration(ne).play(.01),(Lr&&W.vars.scrollY>=l||P>=l-1)&&Be.to({},{onUpdate:z,duration:ne})}o&&o(G)},e.onWheel=function(){W._ts&&W.pause(),fn()-m>1e3&&(v=0,m=fn())},e.onChange=function(G,$,ne,P,re){if(vs!==v&&N(),$&&n&&g(E(P[2]===$?k+(G.startX-G.x):g()+$-P[1])),ne){u.offset&&x();var ue=re[2]===ne,q=ue?L+G.startY-G.y:u()+ne-re[1],D=R(q);ue&&q!==D&&(L+=D-q),u(D)}(ne||$)&&Zi()},e.onEnable=function(){Lh(c,n?!1:"x"),et.addEventListener("refresh",z),Qt(ht,"resize",z),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Lh(c,!0),en(ht,"resize",z),et.removeEventListener("refresh",z),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ft(e),a.iOS=Lr,Lr&&!u()&&u(1),Lr&&Be.ticker.add(Ni),F=a._dc,W=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jm(u,u(),function(){return W.pause()})},onUpdate:Zi,onComplete:F.vars.onComplete}),a};et.sort=function(r){return rt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},et.observe=function(r){return new Ft(r)},et.normalizeScroll=function(r){if(typeof r=="undefined")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var e=r instanceof Ft?r:lS(r);return En&&En.target===e.target&&En.kill(),fs(e.target)&&(En=e),e},et.core={_getVelocityProp:uh,_inputObserver:tg,_scrollers:lt,_proxies:Di,bridge:{ss:function(){ri||_s("scrollStart"),ri=fn()},ref:function(){return hn}}},Um()&&Be.registerPlugin(et);/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Dh="162",cS=0,rg=1,uS=2,sg=1,hS=2,Ki=3,Dr=0,Fn=1,Ji=2,ji=0,ho=1,Nh=2,og=3,ag=4,fS=5,ys=100,dS=101,pS=102,lg=103,cg=104,mS=200,gS=201,_S=202,vS=203,Ih=204,Uh=205,xS=206,yS=207,SS=208,MS=209,ES=210,TS=211,bS=212,wS=213,AS=214,CS=0,RS=1,PS=2,ac=3,LS=4,DS=5,NS=6,IS=7,ug=0,US=1,OS=2,Qi=0,Oh=1,Fh=2,Bh=3,kh=4,FS=5,hg=6,fg=7,dg=300,fo=301,po=302,zh=303,Hh=304,lc=306,Gh=1e3,pi=1001,Vh=1002,wn=1003,pg=1004,Na=1005,Bn=1006,Wh=1007,Ss=1008,Nr=1009,BS=1010,kS=1011,Xh=1012,mg=1013,Ir=1014,er=1015,tr=1016,gg=1017,_g=1018,Ms=1020,zS=1021,mi=1023,HS=1024,GS=1025,Es=1026,mo=1027,VS=1028,vg=1029,WS=1030,xg=1031,yg=1033,Yh=33776,qh=33777,$h=33778,Zh=33779,Sg=35840,Mg=35841,Eg=35842,Tg=35843,bg=36196,wg=37492,Ag=37496,Cg=37808,Rg=37809,Pg=37810,Lg=37811,Dg=37812,Ng=37813,Ig=37814,Ug=37815,Og=37816,Fg=37817,Bg=37818,kg=37819,zg=37820,Hg=37821,Kh=36492,Gg=36494,Vg=36495,XS=36283,Wg=36284,Xg=36285,Yg=36286,YS=3200,qS=3201,$S=0,ZS=1,Ur="",Ui="srgb",Or="srgb-linear",Jh="display-p3",cc="display-p3-linear",uc="linear",Et="srgb",hc="rec709",fc="p3",go=7680,qg=519,KS=512,JS=513,jS=514,$g=515,QS=516,eM=517,tM=518,nM=519,Zg=35044,Kg="300 es",jh=1035,nr=2e3,dc=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,Qh=180/Math.PI;function vo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function iM(r,e){return(r%e+e)%e}function ef(r,e,t){return(1-t)*r+t*e}function Jg(r){return(r&r-1)===0&&r!==0}function tf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],v=i[4],y=i[7],T=i[2],b=i[5],E=i[8];return s[0]=o*_+a*S+l*T,s[3]=o*p+a*v+l*b,s[6]=o*m+a*y+l*E,s[1]=c*_+h*S+f*T,s[4]=c*p+h*v+f*b,s[7]=c*m+h*y+f*E,s[2]=d*_+u*S+g*T,s[5]=d*p+u*v+g*b,s[8]=d*m+u*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new tt;function jg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rM(){const r=mc("canvas");return r.style.display="block",r}const Qg={};function sM(r){r in Qg||(Qg[r]=!0,console.warn(r))}const e_=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),t_=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gc={[Or]:{transfer:uc,primaries:hc,toReference:r=>r,fromReference:r=>r},[Ui]:{transfer:Et,primaries:hc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[cc]:{transfer:uc,primaries:fc,toReference:r=>r.applyMatrix3(t_),fromReference:r=>r.applyMatrix3(e_)},[Jh]:{transfer:Et,primaries:fc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(t_),fromReference:r=>r.applyMatrix3(e_).convertLinearToSRGB()}},oM=new Set([Or,cc]),gt={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!oM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=gc[e].toReference,i=gc[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return gc[r].primaries},getTransfer:function(r){return r===Ur?uc:gc[r].transfer}};function xo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yo;class n_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yo===void 0&&(yo=mc("canvas")),yo.width=e.width,yo.height=e.height;const n=yo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=mc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xo(t[n]/255)*255):t[n]=xo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(sf(i[o].image)):s.push(sf(i[o]))}else s=sf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?n_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lM=0;class zn extends _o{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=pi,i=pi,s=Bn,o=Ss,a=mi,l=Nr,c=zn.DEFAULT_ANISOTROPY,h=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=vo(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null,zn.DEFAULT_MAPPING=dg,zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,i=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(u+1)/2,T=(m+1)/2,b=(h+d)/4,E=(f+_)/4,R=(g+p)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=E/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=R/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=R/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends _o{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new i_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends cM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class r_ extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uM extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a;const m=l*d+c*u+h*g+f*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*S);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const y=a*S;if(l=l*p+d*y,c=c*p+u*y,h=h*p+g*y,f=f*p+_*y,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new Y,s_=new Ua;class Oa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),vc.subVectors(this.max,Fa),So.subVectors(e.a,Fa),Mo.subVectors(e.b,Fa),Eo.subVectors(e.c,Fa),Fr.subVectors(Mo,So),Br.subVectors(Eo,Mo),Ts.subVectors(So,Eo);let t=[0,-Fr.z,Fr.y,0,-Br.z,Br.y,0,-Ts.z,Ts.y,Fr.z,0,-Fr.x,Br.z,0,-Br.x,Ts.z,0,-Ts.x,-Fr.y,Fr.x,0,-Br.y,Br.x,0,-Ts.y,Ts.x,0];return!af(t,So,Mo,Eo,vc)||(t=[1,0,0,0,1,0,0,0,1],!af(t,So,Mo,Eo,vc))?!1:(xc.crossVectors(Fr,Br),t=[xc.x,xc.y,xc.z],af(t,So,Mo,Eo,vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],_i=new Y,_c=new Oa,So=new Y,Mo=new Y,Eo=new Y,Fr=new Y,Br=new Y,Ts=new Y,Fa=new Y,vc=new Y,xc=new Y,bs=new Y;function af(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bs.fromArray(r,s);const a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hM=new Oa,Ba=new Y,lf=new Y;class yc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ba,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(lf)),this.expandByPoint(Ba.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new Y,cf=new Y,Sc=new Y,kr=new Y,uf=new Y,Mc=new Y,hf=new Y;class o_{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cf.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(cf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sc),a=kr.dot(this.direction),l=-kr.dot(Sc),c=kr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cf).addScaledVector(Sc,d),u}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,s){uf.subVectors(t,e),Mc.subVectors(n,e),hf.crossVectors(uf,Mc);let o=this.direction.dot(hf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const l=a*this.direction.dot(Mc.crossVectors(kr,Mc));if(l<0)return null;const c=a*this.direction.dot(uf.cross(kr));if(c<0||l+c>o)return null;const h=-a*kr.dot(hf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/To.setFromMatrixColumn(e,0).length(),s=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,dM)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),zr.crossVectors(n,Kn),zr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),zr.crossVectors(n,Kn)),zr.normalize(),Ec.crossVectors(Kn,zr),i[0]=zr.x,i[4]=Ec.x,i[8]=Kn.x,i[1]=zr.y,i[5]=Ec.y,i[9]=Kn.y,i[2]=zr.z,i[6]=Ec.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],y=n[11],T=n[15],b=i[0],E=i[4],R=i[8],N=i[12],x=i[1],A=i[5],W=i[9],k=i[13],L=i[2],F=i[6],z=i[10],G=i[14],$=i[3],ne=i[7],P=i[11],re=i[15];return s[0]=o*b+a*x+l*L+c*$,s[4]=o*E+a*A+l*F+c*ne,s[8]=o*R+a*W+l*z+c*P,s[12]=o*N+a*k+l*G+c*re,s[1]=h*b+f*x+d*L+u*$,s[5]=h*E+f*A+d*F+u*ne,s[9]=h*R+f*W+d*z+u*P,s[13]=h*N+f*k+d*G+u*re,s[2]=g*b+_*x+p*L+m*$,s[6]=g*E+_*A+p*F+m*ne,s[10]=g*R+_*W+p*z+m*P,s[14]=g*N+_*k+p*G+m*re,s[3]=S*b+v*x+y*L+T*$,s[7]=S*E+v*A+y*F+T*ne,s[11]=S*R+v*W+y*z+T*P,s[15]=S*N+v*k+y*G+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+p*(+t*c*f-t*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,v=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,y=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,T=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,b=t*S+n*v+i*y+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=S*E,e[1]=(_*d*s-f*p*s-_*i*u+n*p*u+f*i*m-n*d*m)*E,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*E,e[4]=v*E,e[5]=(h*p*s-g*d*s+g*i*u-t*p*u-h*i*m+t*d*m)*E,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*u+t*l*u)*E,e[8]=y*E,e[9]=(g*f*s-h*_*s-g*n*u+t*_*u+h*n*m-t*f*m)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*u-t*a*u)*E,e[12]=T*E,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*p+t*f*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,g=s*f,_=o*h,p=o*f,m=a*f,S=l*c,v=l*h,y=l*f,T=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*T,i[1]=(u+y)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(u-y)*b,i[5]=(1-(d+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(g+v)*E,i[9]=(p-S)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=To.set(i[0],i[1],i[2]).length();const o=To.set(i[4],i[5],i[6]).length(),a=To.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/s,h=1/o,f=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=nr){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===nr)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===dc)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=nr){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-s),d=(t+e)*c,u=(n+i)*h;let g,_;if(a===nr)g=(o+s)*f,_=-2*f;else if(a===dc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const To=new Y,vi=new Bt,fM=new Y(0,0,0),dM=new Y(1,1,1),zr=new Y,Ec=new Y,Kn=new Y,a_=new Bt,l_=new Ua;class sr{constructor(e=0,t=0,n=0,i=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class c_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pM=0;const u_=new Y,bo=new Ua,or=new Bt,Tc=new Y,ka=new Y,mM=new Y,gM=new Ua,h_=new Y(1,0,0),f_=new Y(0,1,0),d_=new Y(0,0,1),_M={type:"added"},vM={type:"removed"},ff={type:"childadded",child:null},df={type:"childremoved",child:null};class Hn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new Y,t=new sr,n=new Ua,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new tt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tc.copy(e):Tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ka,Tc,this.up):or.lookAt(Tc,ka,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),bo.setFromRotationMatrix(or),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_M),ff.child=e,this.dispatchEvent(ff),ff.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vM),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,mM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,gM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Hn.DEFAULT_UP=new Y(0,1,0),Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Y,ar=new Y,pf=new Y,lr=new Y,wo=new Y,Ao=new Y,p_=new Y,mf=new Y,gf=new Y,_f=new Y;class yi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),ar.subVectors(n,t),pf.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(ar),l=xi.dot(pf),c=ar.dot(ar),h=ar.dot(pf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),ar.subVectors(e,t),xi.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),xi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;wo.subVectors(i,n),Ao.subVectors(s,n),mf.subVectors(e,n);const l=wo.dot(mf),c=Ao.dot(mf);if(l<=0&&c<=0)return t.copy(n);gf.subVectors(e,i);const h=wo.dot(gf),f=Ao.dot(gf);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(wo,o);_f.subVectors(e,s);const u=wo.dot(_f),g=Ao.dot(_f);if(g>=0&&u<=g)return t.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ao,a);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return p_.subVectors(s,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(p_,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(wo,o).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},bc={h:0,s:0,l:0};function vf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=iM(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vf(o,s,e+1/3),this.g=vf(o,s,e),this.b=vf(o,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ui){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const n=m_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}copyLinearToSRGB(e){return this.r=rf(e.r),this.g=rf(e.g),this.b=rf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return gt.fromWorkingColorSpace(mn.copy(this),e),Math.round(pn(mn.r*255,0,255))*65536+Math.round(pn(mn.g*255,0,255))*256+Math.round(pn(mn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Ui){gt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(bc);const n=ef(Hr.h,bc.h,t),i=ef(Hr.s,bc.s,t),s=ef(Hr.l,bc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new pt;pt.NAMES=m_;let xM=0;class za extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=ho,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Uh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ih&&(n.blendSrc=this.blendSrc),this.blendDst!==Uh&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xf extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Y,wc=new Ne;class Oi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zg&&(e.usage=this.usage),e}}class g_ extends Oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class __ extends Oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yM=0;const ai=new Bt,yf=new Hn,Co=new Y,Jn=new Oa,Ha=new Oa,tn=new Y;class jn extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?__:g_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ha.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Jn.min,Ha.min),Jn.expandByPoint(tn),tn.addVectors(Jn.max,Ha.max),Jn.expandByPoint(tn)):(Jn.expandByPoint(Ha.min),Jn.expandByPoint(Ha.max))}Jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),tn.add(Co)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new Y,l[R]=new Y;const c=new Y,h=new Y,f=new Y,d=new Ne,u=new Ne,g=new Ne,_=new Y,p=new Y;function m(R,N,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),u.fromBufferAttribute(s,N),g.fromBufferAttribute(s,x),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const A=1/(u.x*g.y-g.x*u.y);!isFinite(A)||(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(A),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(A),a[R].add(_),a[N].add(_),a[x].add(_),l[R].add(p),l[N].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,N=S.length;R<N;++R){const x=S[R],A=x.start,W=x.count;for(let k=A,L=A+W;k<L;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new Y,y=new Y,T=new Y,b=new Y;function E(R){T.fromBufferAttribute(i,R),b.copy(T);const N=a[R];v.copy(N),v.sub(T.multiplyScalar(T.dot(N))).normalize(),y.crossVectors(b,N);const A=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,A)}for(let R=0,N=S.length;R<N;++R){const x=S[R],A=x.start,W=x.count;for(let k=A,L=A+W;k<L;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new Oi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Bt,ws=new o_,Ac=new yc,x_=new Y,Ro=new Y,Po=new Y,Lo=new Y,Sf=new Y,Cc=new Y,Rc=new Ne,Pc=new Ne,Lc=new Ne,y_=new Y,S_=new Y,M_=new Y,Dc=new Y,Nc=new Y;class Fi extends Hn{constructor(e=new jn,t=new xf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Cc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Sf.fromBufferAttribute(f,e),o?Cc.addScaledVector(Sf,h):Cc.addScaledVector(Sf.sub(t),h))}t.add(Cc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(Ac.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ac,x_)===null||ws.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(v_.copy(s).invert(),ws.copy(e.ray).applyMatrix4(v_),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=v;y<T;y+=3){const b=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=Ic(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Ic(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=v;y<T;y+=3){const b=y,E=y+1,R=y+2;i=Ic(this,m,e,n,c,h,f,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,y=p+2;i=Ic(this,o,e,n,c,h,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function SM(r,e,t,n,i,s,o,a){let l;if(e.side===Fn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Dr,a),l===null)return null;Nc.copy(a),Nc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Nc);return c<t.near||c>t.far?null:{distance:c,point:Nc.clone(),object:r}}function Ic(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ro),r.getVertexPosition(l,Po),r.getVertexPosition(c,Lo);const h=SM(r,e,t,n,Ro,Po,Lo,Dc);if(h){i&&(Rc.fromBufferAttribute(i,a),Pc.fromBufferAttribute(i,l),Lc.fromBufferAttribute(i,c),h.uv=yi.getInterpolation(Dc,Ro,Po,Lo,Rc,Pc,Lc,new Ne)),s&&(Rc.fromBufferAttribute(s,a),Pc.fromBufferAttribute(s,l),Lc.fromBufferAttribute(s,c),h.uv1=yi.getInterpolation(Dc,Ro,Po,Lo,Rc,Pc,Lc,new Ne)),o&&(y_.fromBufferAttribute(o,a),S_.fromBufferAttribute(o,l),M_.fromBufferAttribute(o,c),h.normal=yi.getInterpolation(Dc,Ro,Po,Lo,y_,S_,M_,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};yi.getNormal(Ro,Po,Lo,f.normal),h.face=f}return h}class Ga extends jn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(f,2));function g(_,p,m,S,v,y,T,b,E,R,N){const x=y/E,A=T/R,W=y/2,k=T/2,L=b/2,F=E+1,z=R+1;let G=0,$=0;const ne=new Y;for(let P=0;P<z;P++){const re=P*A-k;for(let ue=0;ue<F;ue++){const q=ue*x-W;ne[_]=q*S,ne[p]=re*v,ne[m]=L,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(ue/E),f.push(1-P/R),G+=1}}for(let P=0;P<R;P++)for(let re=0;re<E;re++){const ue=d+re+F*P,q=d+re+F*(P+1),D=d+(re+1)+F*(P+1),V=d+(re+1)+F*P;l.push(ue,q,V),l.push(q,D,V),$+=6}a.addGroup(u,$,N),u+=$,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const n=Do(r[t]);for(const i in n)e[i]=n[i]}return e}function MM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function E_(r){return r.getRenderTarget()===null?r.outputColorSpace:gt.workingColorSpace}const Va={clone:Do,merge:An};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class T_ extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new Y,b_=new Ne,w_=new Ne;class li extends T_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,b_,w_),t.subVectors(w_,b_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Io=1;class bM extends Hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new li(No,Io,e,t);i.layers=this.layers,this.add(i);const s=new li(No,Io,e,t);s.layers=this.layers,this.add(s);const o=new li(No,Io,e,t);o.layers=this.layers,this.add(o);const a=new li(No,Io,e,t);a.layers=this.layers,this.add(a);const l=new li(No,Io,e,t);l.layers=this.layers,this.add(l);const c=new li(No,Io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===nr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class A_ extends zn{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new A_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ga(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:ji});s.uniforms.tEquirect.value=t;const o=new Fi(i,s),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Bn),new bM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Mf=new Y,AM=new Y,CM=new tt;class As{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mf.subVectors(n,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||CM.getNormalMatrix(e),i=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new yc,Uc=new Y;class C_{constructor(e=new As,t=new As,n=new As,i=new As,s=new As,o=new As){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-u,y-m).normalize(),n[1].setComponents(l+s,d+c,p+u,y+m).normalize(),n[2].setComponents(l+o,d+h,p+g,y+S).normalize(),n[3].setComponents(l-o,d-h,p-g,y-S).normalize(),n[4].setComponents(l-a,d-f,p-_,y-v).normalize(),t===nr)n[5].setComponents(l+a,d+f,p+_,y+v).normalize();else if(t===dc)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Uc.x=i.normal.x>0?e.max.x:e.min.x,Uc.y=i.normal.y>0?e.max.y:e.min.y,Uc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function RM(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,d=c.usage,u=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function s(c,h,f){const d=h.array,u=h._updateRange,g=h.updateRanges;if(r.bindBuffer(f,c),u.count===-1&&g.length===0&&r.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):r.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class Oc extends jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),b=S+1+c*m;u.push(v,y,b),u.push(y,T,b)}this.setIndex(u),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.width,e.height,e.widthSegments,e.heightSegments)}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VM=`#ifdef USE_IRIDESCENCE
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
#endif`,WM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`
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
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,vE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ME=`uniform bool receiveShadow;
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
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CE=`PhysicalMaterial material;
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
#endif`,RE=`struct PhysicalMaterial {
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
}`,PE=`
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
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
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zE=`#if defined( USE_POINTS_UV )
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
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
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
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
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
#endif`,eT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mT=`float getShadowMask() {
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
}`,gT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,vT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ET=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:PM,alphahash_pars_fragment:LM,alphamap_fragment:DM,alphamap_pars_fragment:NM,alphatest_fragment:IM,alphatest_pars_fragment:UM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:kM,begin_vertex:zM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:$M,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:JM,color_vertex:jM,common:QM,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:rE,emissivemap_pars_fragment:sE,colorspace_fragment:oE,colorspace_pars_fragment:aE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:hE,envmap_physical_pars_fragment:EE,envmap_vertex:fE,fog_vertex:dE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_fragment:vE,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:ME,lights_toon_fragment:TE,lights_toon_pars_fragment:bE,lights_phong_fragment:wE,lights_phong_pars_fragment:AE,lights_physical_fragment:CE,lights_physical_pars_fragment:RE,lights_fragment_begin:PE,lights_fragment_maps:LE,lights_fragment_end:DE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:IE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:OE,map_fragment:FE,map_pars_fragment:BE,map_particle_fragment:kE,map_particle_pars_fragment:zE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:GE,morphinstance_vertex:VE,morphcolor_vertex:WE,morphnormal_vertex:XE,morphtarget_pars_vertex:YE,morphtarget_vertex:qE,normal_fragment_begin:$E,normal_fragment_maps:ZE,normal_pars_fragment:KE,normal_pars_vertex:JE,normal_vertex:jE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:eT,clearcoat_normal_fragment_maps:tT,clearcoat_pars_fragment:nT,iridescence_pars_fragment:iT,opaque_fragment:rT,packing:sT,premultiplied_alpha_fragment:oT,project_vertex:aT,dithering_fragment:lT,dithering_pars_fragment:cT,roughnessmap_fragment:uT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:dT,shadowmap_vertex:pT,shadowmask_pars_fragment:mT,skinbase_vertex:gT,skinning_pars_vertex:_T,skinning_vertex:vT,skinnormal_vertex:xT,specularmap_fragment:yT,specularmap_pars_fragment:ST,tonemapping_fragment:MT,tonemapping_pars_fragment:ET,transmission_fragment:TT,transmission_pars_fragment:bT,uv_pars_fragment:wT,uv_pars_vertex:AT,uv_vertex:CT,worldpos_vertex:RT,background_vert:`varying vec2 vUv;
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
}`},Ce={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Bi={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Bi.physical={uniforms:An([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Fc={r:0,b:0,g:0},Rs=new sr,PT=new Bt;function LT(r,e,t,n,i,s,o){const a=new pt(0);let l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lc)?(h===void 0&&(h=new Fi(new Ga(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Do(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rs.copy(m.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(Rs)),h.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,(f!==v||d!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fi(new Oc(2,2),new Cn({name:"BackgroundMaterial",uniforms:Do(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Fc,E_(r)),n.buffers.color.setClear(Fc.r,Fc.g,Fc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function DT(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function f(L,F,z,G,$){let ne=!1;if(o){const P=_(G,z,F);c!==P&&(c=P,u(c.object)),ne=m(L,G,z,$),ne&&S(L,G,z,$)}else{const P=F.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==P)&&(c.geometry=G.id,c.program=z.id,c.wireframe=P,ne=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,R(L,F,z,G),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,z){const G=z.wireframe===!0;let $=a[L.id];$===void 0&&($={},a[L.id]=$);let ne=$[F.id];ne===void 0&&(ne={},$[F.id]=ne);let P=ne[G];return P===void 0&&(P=p(d()),ne[G]=P),P}function p(L){const F=[],z=[],G=[];for(let $=0;$<i;$++)F[$]=0,z[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:G,object:L,attributes:{},index:null}}function m(L,F,z,G){const $=c.attributes,ne=F.attributes;let P=0;const re=z.getAttributes();for(const ue in re)if(re[ue].location>=0){const D=$[ue];let V=ne[ue];if(V===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;P++}return c.attributesNum!==P||c.index!==G}function S(L,F,z,G){const $={},ne=F.attributes;let P=0;const re=z.getAttributes();for(const ue in re)if(re[ue].location>=0){let D=ne[ue];D===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),$[ue]=V,P++}c.attributes=$,c.attributesNum=P,c.index=G}function v(){const L=c.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function y(L){T(L,0)}function T(L,F){const z=c.newAttributes,G=c.enabledAttributes,$=c.attributeDivisors;z[L]=1,G[L]===0&&(r.enableVertexAttribArray(L),G[L]=1),$[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),$[L]=F)}function b(){const L=c.newAttributes,F=c.enabledAttributes;for(let z=0,G=F.length;z<G;z++)F[z]!==L[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function E(L,F,z,G,$,ne,P){P===!0?r.vertexAttribIPointer(L,F,z,$,ne):r.vertexAttribPointer(L,F,z,G,$,ne)}function R(L,F,z,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=G.attributes,ne=z.getAttributes(),P=F.defaultAttributeValues;for(const re in ne){const ue=ne[re];if(ue.location>=0){let q=$[re];if(q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const D=q.normalized,V=q.itemSize,te=t.get(q);if(te===void 0)continue;const fe=te.buffer,le=te.type,me=te.bytesPerElement,Re=n.isWebGL2===!0&&(le===r.INT||le===r.UNSIGNED_INT||q.gpuType===mg);if(q.isInterleavedBufferAttribute){const ve=q.data,B=ve.stride,Ae=q.offset;if(ve.isInstancedInterleavedBuffer){for(let ge=0;ge<ue.locationSize;ge++)T(ue.location+ge,ve.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<ue.locationSize;ge++)y(ue.location+ge);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ge=0;ge<ue.locationSize;ge++)E(ue.location+ge,V/ue.locationSize,le,D,B*me,(Ae+V/ue.locationSize*ge)*me,Re)}else{if(q.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)T(ue.location+ve,q.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<ue.locationSize;ve++)y(ue.location+ve);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ve=0;ve<ue.locationSize;ve++)E(ue.location+ve,V/ue.locationSize,le,D,V*me,V/ue.locationSize*ve*me,Re)}}else if(P!==void 0){const D=P[re];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ue.location,D);break;case 3:r.vertexAttrib3fv(ue.location,D);break;case 4:r.vertexAttrib4fv(ue.location,D);break;default:r.vertexAttrib1fv(ue.location,D)}}}}b()}function N(){W();for(const L in a){const F=a[L];for(const z in F){const G=F[z];for(const $ in G)g(G[$].object),delete G[$];delete F[z]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const z in F){const G=F[z];for(const $ in G)g(G[$].object),delete G[$];delete F[z]}delete a[L.id]}function A(L){for(const F in a){const z=a[F];if(z[L.id]===void 0)continue;const G=z[L.id];for(const $ in G)g(G[$].object),delete G[$];delete z[L.id]}}function W(){k(),h=!0,c!==l&&(c=l,u(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function NT(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,f){r.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let u,g;if(i)u=r,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](s,h,f,d),t.update(f,s,d)}function c(h,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(s,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function IT(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),T=v&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function UT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new As,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,v=S*4;let y=m.clippingState||null;l.value=y,y=h(g,d,v,u);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=u+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=u;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function OT(r){let e=new WeakMap;function t(o,a){return a===zh?o.mapping=fo:a===Hh&&(o.mapping=po),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class P_ extends T_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Uo=4,L_=[.125,.215,.35,.446,.526,.582],Ps=20,Ef=new P_,D_=new pt;let Tf=null,bf=0,wf=0;const Ls=(1+Math.sqrt(5))/2,Oo=1/Ls,N_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ls,Oo),new Y(0,Ls,-Oo),new Y(Oo,0,Ls),new Y(-Oo,0,Ls),new Y(Ls,Oo,0),new Y(-Ls,Oo,0)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,bf,wf),e.scissorTest=!1,Bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:tr,format:mi,colorSpace:Or,depthBuffer:!1},i=U_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(s)),this._blurMaterial=BT(s,e,t)}return i}_compileMaterial(e){const t=new Fi(this._lodPlanes[0],e);this._renderer.compile(t,Ef)}_sceneToCubeUV(e,t,n,i){const a=new li(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(D_),h.toneMapping=Qi,h.autoClear=!1;const u=new xf({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Fi(new Ga,u);let _=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,_=!0):(u.color.copy(D_),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Bc(i,S*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fo||e.mapping===po;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ef)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=N_[(i-1)%N_.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Fi(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ps-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Ps;p>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);const m=[];let S=0;for(let E=0;E<Ps;++E){const R=E/_,N=Math.exp(-R*R/2);m.push(N),E===0?S+=N:E<p&&(S+=2*N)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],T=3*y*(i>v-Uo?i-v+Uo:0),b=4*(this._cubeSize-y);Bc(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(f,Ef)}}function FT(r){const e=[],t=[],n=[];let i=r;const s=r-Uo+1+L_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Uo?l=L_[o-r+Uo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*u),v=new Float32Array(p*g*u),y=new Float32Array(m*g*u);for(let b=0;b<u;b++){const E=b%3*2/3-1,R=b>2?0:-1,N=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(N,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];y.set(x,m*g*b)}const T=new jn;T.setAttribute("position",new Oi(S,_)),T.setAttribute("uv",new Oi(v,p)),T.setAttribute("faceIndex",new Oi(y,m)),e.push(T),i>Uo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function U_(r,e,t){const n=new gi(r,e,t);return n.texture.mapping=lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function BT(r,e,t){const n=new Float32Array(Ps),i=new Y(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function O_(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function F_(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function kT(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zh||l===Hh,h=l===fo||l===po;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new I_(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new I_(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function HT(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const _=u[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const S=u.array;_=u.version;for(let v=0,y=S.length;v<y;v+=3){const T=S[v+0],b=S[v+1],E=S[v+2];d.push(T,b,b,E,E,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const T=v+0,b=v+1,E=v+2;d.push(T,b,b,E,E,T)}}else return;const p=new(jg(d)?__:g_)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function GT(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){r.drawElements(s,g,a,u*l),t.update(g,s,1)}function f(u,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,u*l,_),t.update(g,s,_)}function d(u,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(u[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,u,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function VT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function WT(r,e){return r[0]-e[0]}function XT(r,e){return Math.abs(e[1])-Math.abs(r[1])}function YT(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new sn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let W=function(){x.dispose(),s.delete(h),h.removeEventListener("dispose",W)};_!==void 0&&_.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),S===!0&&(b=3);let E=h.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*R*4*g),x=new r_(N,E,R,g);x.type=er,x.needsUpdate=!0;const A=b*4;for(let k=0;k<g;k++){const L=v[k],F=y[k],z=T[k],G=E*R*4*k;for(let $=0;$<L.count;$++){const ne=$*A;p===!0&&(o.fromBufferAttribute(L,$),N[G+ne+0]=o.x,N[G+ne+1]=o.y,N[G+ne+2]=o.z,N[G+ne+3]=0),m===!0&&(o.fromBufferAttribute(F,$),N[G+ne+4]=o.x,N[G+ne+5]=o.y,N[G+ne+6]=o.z,N[G+ne+7]=0),S===!0&&(o.fromBufferAttribute(z,$),N[G+ne+8]=o.x,N[G+ne+9]=o.y,N[G+ne+10]=o.z,N[G+ne+11]=z.itemSize===4?o.w:1)}}_={count:g,texture:x,size:new Ne(E,R)},s.set(h,_),h.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",m),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const u=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){const y=g[v];y[0]=v,y[1]=d[v]}g.sort(XT);for(let v=0;v<8;v++)v<u&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(WT);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],T=y[0],b=y[1];T!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[T]&&h.setAttribute("morphTarget"+v,_[T]),p&&h.getAttribute("morphNormal"+v)!==p[T]&&h.setAttribute("morphNormal"+v,p[T]),i[v]=b,m+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function qT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class B_ extends zn{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Es,h!==Es&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Ir),n===void 0&&h===mo&&(n=Ms),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const k_=new zn,z_=new B_(1,1);z_.compareFunction=$g;const H_=new r_,G_=new uM,V_=new A_,W_=[],X_=[],Y_=new Float32Array(16),q_=new Float32Array(9),$_=new Float32Array(4);function Fo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=W_[i];if(s===void 0&&(s=new Float32Array(i),W_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kc(r,e){let t=X_[e];t===void 0&&(t=new Int32Array(e),X_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function KT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function JT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function jT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;$_.set(n),r.uniformMatrix2fv(this.addr,!1,$_),qt(t,n)}}function QT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;q_.set(n),r.uniformMatrix3fv(this.addr,!1,q_),qt(t,n)}}function eb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Y_.set(n),r.uniformMatrix4fv(this.addr,!1,Y_),qt(t,n)}}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function cb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?z_:k_;t.setTexture2D(e||s,i)}function ub(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||G_,i)}function hb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||V_,i)}function fb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||H_,i)}function db(r){switch(r){case 5126:return $T;case 35664:return ZT;case 35665:return KT;case 35666:return JT;case 35674:return jT;case 35675:return QT;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return fb}}function pb(r,e){r.uniform1fv(this.addr,e)}function mb(r,e){const t=Fo(e,this.size,2);r.uniform2fv(this.addr,t)}function gb(r,e){const t=Fo(e,this.size,3);r.uniform3fv(this.addr,t)}function _b(r,e){const t=Fo(e,this.size,4);r.uniform4fv(this.addr,t)}function vb(r,e){const t=Fo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xb(r,e){const t=Fo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yb(r,e){const t=Fo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sb(r,e){r.uniform1iv(this.addr,e)}function Mb(r,e){r.uniform2iv(this.addr,e)}function Eb(r,e){r.uniform3iv(this.addr,e)}function Tb(r,e){r.uniform4iv(this.addr,e)}function bb(r,e){r.uniform1uiv(this.addr,e)}function wb(r,e){r.uniform2uiv(this.addr,e)}function Ab(r,e){r.uniform3uiv(this.addr,e)}function Cb(r,e){r.uniform4uiv(this.addr,e)}function Rb(r,e,t){const n=this.cache,i=e.length,s=kc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||k_,s[o])}function Pb(r,e,t){const n=this.cache,i=e.length,s=kc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||G_,s[o])}function Lb(r,e,t){const n=this.cache,i=e.length,s=kc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||V_,s[o])}function Db(r,e,t){const n=this.cache,i=e.length,s=kc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||H_,s[o])}function Nb(r){switch(r){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return bb;case 36294:return wb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}class Ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=db(t.type)}}class Ub{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nb(t.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function Z_(r,e){r.seq.push(e),r.map[e.id]=e}function Fb(r,e,t){const n=r.name,i=n.length;for(Cf.lastIndex=0;;){const s=Cf.exec(n),o=Cf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Z_(t,c===void 0?new Ib(a,r,e):new Ub(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Ob(a),Z_(t,f)),t=f}}}class zc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Fb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function K_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Bb=37297;let kb=0;function zb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hb(r){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(r);let n;switch(e===t?n="":e===fc&&t===hc?n="LinearDisplayP3ToLinearSRGB":e===hc&&t===fc&&(n="LinearSRGBToLinearDisplayP3"),r){case Or:case cc:return[n,"LinearTransferOETF"];case Ui:case Jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function J_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zb(r.getShaderSource(e),o)}else return i}function Gb(r,e){const t=Hb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vb(r,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case Bh:t="OptimizedCineon";break;case kh:t="ACESFilmic";break;case hg:t="AgX";break;case fg:t="Neutral";break;case FS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wb(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bo).join(`
`)}function Xb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Yb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bo(r){return r!==""}function j_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(r){return r.replace($b,Kb)}const Zb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kb(r,e){let t=nt[e];if(t===void 0){const n=Zb.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rf(t)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(r){return r.replace(Jb,jb)}function jb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Qb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function ew(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function nw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case US:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function iw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Qb(t),c=ew(t),h=tw(t),f=nw(t),d=iw(t),u=t.isWebGL2?"":Wb(t),g=Xb(t),_=Yb(s),p=i.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bo).join(`
`),m.length>0&&(m+=`
`),S=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bo).join(`
`),S.length>0&&(S+=`
`)):(m=[tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),S=[u,tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Vb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Gb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Rf(o),o=j_(o,t),o=Q_(o,t),a=Rf(a),a=j_(a,t),a=Q_(a,t),o=ev(o),a=ev(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=v+m+o,T=v+S+a,b=K_(i,i.VERTEX_SHADER,y),E=K_(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(W){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(E).trim();let z=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,b,E);else{const $=J_(i,b,"vertex"),ne=J_(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+k+`
`+$+`
`+ne)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||F==="")&&(G=!1);G&&(W.diagnostics={runnable:z,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:S}})}i.deleteShader(b),i.deleteShader(E),N=new zc(i,p),x=qb(i,p)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,Bb)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let sw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aw(e),t.set(e,n)),n}}class aw{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function lw(r,e,t,n,i,s,o){const a=new c_,l=new ow,c=new Set,h=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,W,k,L){const F=k.fog,z=L.geometry,G=x.isMeshStandardMaterial?k.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),ne=!!$&&$.mapping===lc?$.image.height:null,P=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=re!==void 0?re.length:0;let q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let D,V,te,fe;if(P){const ae=Bi[P];D=ae.vertexShader,V=ae.fragmentShader}else D=x.vertexShader,V=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const le=r.getRenderTarget(),me=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,ve=!!x.map,B=!!x.matcap,Ae=!!$,ge=!!x.aoMap,Ee=!!x.lightMap,De=!!x.bumpMap,H=!!x.normalMap,Le=!!x.displacementMap,Xe=!!x.emissiveMap,st=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,ie=x.clearcoat>0,ce=x.iridescence>0,de=x.sheen>0,he=x.transmission>0,Ie=M&&!!x.anisotropyMap,He=ie&&!!x.clearcoatMap,xe=ie&&!!x.clearcoatNormalMap,be=ie&&!!x.clearcoatRoughnessMap,Ze=ce&&!!x.iridescenceMap,_e=ce&&!!x.iridescenceThicknessMap,_t=de&&!!x.sheenColorMap,$e=de&&!!x.sheenRoughnessMap,ke=!!x.specularMap,Ue=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Ke=he&&!!x.transmissionMap,Te=he&&!!x.thicknessMap,ot=!!x.gradientMap,U=!!x.alphaMap,Me=x.alphaTest>0,j=!!x.alphaHash,Se=!!x.extensions;let se=Qi;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(se=r.toneMapping);const I={isWebGL2:f,shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:V,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Re,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:B,envMap:Ae,envMapMode:Ae&&$.mapping,envMapCubeUVHeight:ne,aoMap:ge,lightMap:Ee,bumpMap:De,normalMap:H,displacementMap:u&&Le,emissiveMap:Xe,normalMapObjectSpace:H&&x.normalMapType===ZS,normalMapTangentSpace:H&&x.normalMapType===$S,metalnessMap:st,roughnessMap:C,anisotropy:M,anisotropyMap:Ie,clearcoat:ie,clearcoatMap:He,clearcoatNormalMap:xe,clearcoatRoughnessMap:be,iridescence:ce,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:_t,sheenRoughnessMap:$e,specularMap:ke,specularColorMap:Ue,specularIntensityMap:Fe,transmission:he,transmissionMap:Ke,thicknessMap:Te,gradientMap:ot,opaque:x.transparent===!1&&x.blending===ho&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:Me,alphaHash:j,combine:x.combine,mapUv:ve&&p(x.map.channel),aoMapUv:ge&&p(x.aoMap.channel),lightMapUv:Ee&&p(x.lightMap.channel),bumpMapUv:De&&p(x.bumpMap.channel),normalMapUv:H&&p(x.normalMap.channel),displacementMapUv:Le&&p(x.displacementMap.channel),emissiveMapUv:Xe&&p(x.emissiveMap.channel),metalnessMapUv:st&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Ie&&p(x.anisotropyMap.channel),clearcoatMapUv:He&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(x.sheenRoughnessMap.channel),specularMapUv:ke&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:Fe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ke&&p(x.transmissionMap.channel),thicknessMapUv:Te&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(H||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(ve||U),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ji,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return I.vertexUv1s=c.has(1),I.vertexUv2s=c.has(2),I.vertexUv3s=c.has(3),c.clear(),I}function S(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(v(A,x),y(A,x),A.push(r.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const A=_[x.type];let W;if(A){const k=Bi[A];W=Va.clone(k.uniforms)}else W=x.uniforms;return W}function b(x,A){let W;for(let k=0,L=h.length;k<L;k++){const F=h[k];if(F.cacheKey===A){W=F,++W.usedTimes;break}}return W===void 0&&(W=new rw(r,A,x,s),h.push(W)),W}function E(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:N}}function cw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function uw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function iv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):t.push(m)}function l(f,d,u,g,_,p){const m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||uw),n.length>1&&n.sort(d||nv),i.length>1&&i.sort(d||nv)}function h(){for(let f=e,d=r.length;f<d;f++){const u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function hw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new iv,r.set(n,[o])):i>=s.length?(o=new iv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function fw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function dw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pw=0;function mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gw(r,e){const t=new fw,n=dw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,o=new Bt,a=new Bt;function l(h,f){let d=0,u=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,y=0,T=0,b=0,E=0,R=0,N=0;h.sort(mw);const x=f===!0?Math.PI:1;for(let W=0,k=h.length;W<k;W++){const L=h[W],F=L.color,z=L.intensity,G=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*z*x,u+=F.g*z*x,g+=F.b*z*x;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(L.sh.coefficients[ne],z);N++}else if(L.isDirectionalLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const P=L.shadow,re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=ne,_++}else if(L.isSpotLight){const ne=t.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(F).multiplyScalar(z*x),ne.distance=G,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,i.spot[m]=ne;const P=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,P.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[m]=P.matrix,L.castShadow){const re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=$,b++}m++}else if(L.isRectAreaLight){const ne=t.get(L);ne.color.copy(F).multiplyScalar(z),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=ne,S++}else if(L.isPointLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*x),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){const P=L.shadow,re=n.get(L);re.shadowBias=P.bias,re.shadowNormalBias=P.normalBias,re.shadowRadius=P.radius,re.shadowMapSize=P.mapSize,re.shadowCameraNear=P.camera.near,re.shadowCameraFar=P.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=ne,p++}else if(L.isHemisphereLight){const ne=t.get(L);ne.skyColor.copy(L.color).multiplyScalar(z*x),ne.groundColor.copy(L.groundColor).multiplyScalar(z*x),i.hemi[v]=ne,v++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==S||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==T||A.numSpotShadows!==b||A.numSpotMaps!==E||A.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=S,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=T,A.numSpotShadows=b,A.numSpotMaps=E,A.numLightProbes=N,i.version=pw++)}function c(h,f){let d=0,u=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function rv(r,e){const t=new gw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _w(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new rv(r,e),t.set(s,[l])):o>=a.length?(l=new rv(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class vw extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xw extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
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
}`;function Mw(r,e,t){let n=new C_;const i=new Ne,s=new Ne,o=new sn,a=new vw({depthPacking:qS}),l=new xw,c={},h=t.maxTextureSize,f={[Dr]:Fn,[Fn]:Dr,[Ji]:Ji},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sg;let m=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const N=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),W=r.state;W.setBlending(ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=m!==Ki&&this.type===Ki,L=m===Ki&&this.type!==Ki;for(let F=0,z=b.length;F<z;F++){const G=b[F],$=G.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ne=$.getFrameExtents();if(i.multiply(ne),s.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,$.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,$.mapSize.y=s.y)),$.map===null||k===!0||L===!0){const re=this.type!==Ki?{minFilter:wn,magFilter:wn}:{};$.map!==null&&$.map.dispose(),$.map=new gi(i.x,i.y,re),$.map.texture.name=G.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const P=$.getViewportCount();for(let re=0;re<P;re++){const ue=$.getViewport(re);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),W.viewport(o),$.updateMatrices(G,re),n=$.getFrustum(),y(E,R,$.camera,G,this.type)}$.isPointLightShadow!==!0&&this.type===Ki&&S($,R),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(N,x,A)};function S(b,E){const R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,R,d,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,R,u,_,null)}function v(b,E,R,N){let x=null;const A=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=x.uuid,k=E.uuid;let L=c[W];L===void 0&&(L={},c[W]=L);let F=L[k];F===void 0&&(F=x.clone(),L[k]=F,E.addEventListener("dispose",T)),x=F}if(x.visible=E.visible,x.wireframe=E.wireframe,N===Ki?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=R}return x}function y(b,E,R,N,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ki)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const k=e.update(b),L=b.material;if(Array.isArray(L)){const F=k.groups;for(let z=0,G=F.length;z<G;z++){const $=F[z],ne=L[$.materialIndex];if(ne&&ne.visible){const P=v(b,ne,N,x);b.onBeforeShadow(r,b,E,R,k,P,$),r.renderBufferDirect(R,null,k,P,b,$),b.onAfterShadow(r,b,E,R,k,P,$)}}}else if(L.visible){const F=v(b,L,N,x);b.onBeforeShadow(r,b,E,R,k,F,null),r.renderBufferDirect(R,null,k,F,b,null),b.onAfterShadow(r,b,E,R,k,F,null)}}const W=b.children;for(let k=0,L=W.length;k<L;k++)y(W[k],E,R,N,x)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const N=c[R],x=b.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}function Ew(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const Me=new sn;let j=null;const Se=new sn(0,0,0,0);return{setMask:function(se){j!==se&&!U&&(r.colorMask(se,se,se,se),j=se)},setLocked:function(se){U=se},setClear:function(se,I,ae,O,ee){ee===!0&&(se*=O,I*=O,ae*=O),Me.set(se,I,ae,O),Se.equals(Me)===!1&&(r.clearColor(se,I,ae,O),Se.copy(Me))},reset:function(){U=!1,j=null,Se.set(-1,0,0,0)}}}function s(){let U=!1,Me=null,j=null,Se=null;return{setTest:function(se){se?me(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(se){Me!==se&&!U&&(r.depthMask(se),Me=se)},setFunc:function(se){if(j!==se){switch(se){case CS:r.depthFunc(r.NEVER);break;case RS:r.depthFunc(r.ALWAYS);break;case PS:r.depthFunc(r.LESS);break;case ac:r.depthFunc(r.LEQUAL);break;case LS:r.depthFunc(r.EQUAL);break;case DS:r.depthFunc(r.GEQUAL);break;case NS:r.depthFunc(r.GREATER);break;case IS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=se}},setLocked:function(se){U=se},setClear:function(se){Se!==se&&(r.clearDepth(se),Se=se)},reset:function(){U=!1,Me=null,j=null,Se=null}}}function o(){let U=!1,Me=null,j=null,Se=null,se=null,I=null,ae=null,O=null,ee=null;return{setTest:function(oe){U||(oe?me(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(oe){Me!==oe&&!U&&(r.stencilMask(oe),Me=oe)},setFunc:function(oe,J,ye){(j!==oe||Se!==J||se!==ye)&&(r.stencilFunc(oe,J,ye),j=oe,Se=J,se=ye)},setOp:function(oe,J,ye){(I!==oe||ae!==J||O!==ye)&&(r.stencilOp(oe,J,ye),I=oe,ae=J,O=ye)},setLocked:function(oe){U=oe},setClear:function(oe){ee!==oe&&(r.clearStencil(oe),ee=oe)},reset:function(){U=!1,Me=null,j=null,Se=null,se=null,I=null,ae=null,O=null,ee=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,T=null,b=null,E=null,R=null,N=new pt(0,0,0),x=0,A=!1,W=null,k=null,L=null,F=null,z=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(P)[1]),$=ne>=1):P.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),$=ne>=2);let re=null,ue={};const q=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),V=new sn().fromArray(q),te=new sn().fromArray(D);function fe(U,Me,j,Se){const se=new Uint8Array(4),I=r.createTexture();r.bindTexture(U,I),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<j;ae++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(Me+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return I}const le={};le[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(r.DEPTH_TEST),l.setFunc(ac),Le(!1),Xe(rg),me(r.CULL_FACE),De(ji);function me(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Re(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function ve(U,Me){return u[U]!==Me?(r.bindFramebuffer(U,Me),u[U]=Me,n&&(U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Me),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function B(U,Me){let j=_,Se=!1;if(U){j=g.get(Me),j===void 0&&(j=[],g.set(Me,j));const se=U.textures;if(j.length!==se.length||j[0]!==r.COLOR_ATTACHMENT0){for(let I=0,ae=se.length;I<ae;I++)j[I]=r.COLOR_ATTACHMENT0+I;j.length=se.length,Se=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Se=!0);if(Se)if(t.isWebGL2)r.drawBuffers(j);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ge={[ys]:r.FUNC_ADD,[dS]:r.FUNC_SUBTRACT,[pS]:r.FUNC_REVERSE_SUBTRACT};if(n)ge[lg]=r.MIN,ge[cg]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[lg]=U.MIN_EXT,ge[cg]=U.MAX_EXT)}const Ee={[mS]:r.ZERO,[gS]:r.ONE,[_S]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[ES]:r.SRC_ALPHA_SATURATE,[SS]:r.DST_COLOR,[xS]:r.DST_ALPHA,[vS]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[MS]:r.ONE_MINUS_DST_COLOR,[yS]:r.ONE_MINUS_DST_ALPHA,[TS]:r.CONSTANT_COLOR,[bS]:r.ONE_MINUS_CONSTANT_COLOR,[wS]:r.CONSTANT_ALPHA,[AS]:r.ONE_MINUS_CONSTANT_ALPHA};function De(U,Me,j,Se,se,I,ae,O,ee,oe){if(U===ji){m===!0&&(Re(r.BLEND),m=!1);return}if(m===!1&&(me(r.BLEND),m=!0),U!==fS){if(U!==S||oe!==A){if((v!==ys||b!==ys)&&(r.blendEquation(r.FUNC_ADD),v=ys,b=ys),oe)switch(U){case ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.ONE,r.ONE);break;case og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ag:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ag:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,E=null,R=null,N.set(0,0,0),x=0,S=U,A=oe}return}se=se||Me,I=I||j,ae=ae||Se,(Me!==v||se!==b)&&(r.blendEquationSeparate(ge[Me],ge[se]),v=Me,b=se),(j!==y||Se!==T||I!==E||ae!==R)&&(r.blendFuncSeparate(Ee[j],Ee[Se],Ee[I],Ee[ae]),y=j,T=Se,E=I,R=ae),(O.equals(N)===!1||ee!==x)&&(r.blendColor(O.r,O.g,O.b,ee),N.copy(O),x=ee),S=U,A=!1}function H(U,Me){U.side===Ji?Re(r.CULL_FACE):me(r.CULL_FACE);let j=U.side===Fn;Me&&(j=!j),Le(j),U.blending===ho&&U.transparent===!1?De(ji):De(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Se=U.stencilWrite;c.setTest(Se),Se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){W!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),W=U)}function Xe(U){U!==cS?(me(r.CULL_FACE),U!==k&&(U===rg?r.cullFace(r.BACK):U===uS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),k=U}function st(U){U!==L&&($&&r.lineWidth(U),L=U)}function C(U,Me,j){U?(me(r.POLYGON_OFFSET_FILL),(F!==Me||z!==j)&&(r.polygonOffset(Me,j),F=Me,z=j)):Re(r.POLYGON_OFFSET_FILL)}function M(U){U?me(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function ie(U){U===void 0&&(U=r.TEXTURE0+G-1),re!==U&&(r.activeTexture(U),re=U)}function ce(U,Me,j){j===void 0&&(re===null?j=r.TEXTURE0+G-1:j=re);let Se=ue[j];Se===void 0&&(Se={type:void 0,texture:void 0},ue[j]=Se),(Se.type!==U||Se.texture!==Me)&&(re!==j&&(r.activeTexture(j),re=j),r.bindTexture(U,Me||le[U]),Se.type=U,Se.texture=Me)}function de(){const U=ue[re];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){V.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),V.copy(U))}function Fe(U){te.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Ke(U,Me){let j=f.get(Me);j===void 0&&(j=new WeakMap,f.set(Me,j));let Se=j.get(U);Se===void 0&&(Se=r.getUniformBlockIndex(Me,U.name),j.set(U,Se))}function Te(U,Me){const Se=f.get(Me).get(U);h.get(Me)!==Se&&(r.uniformBlockBinding(Me,Se,U.__bindingPointIndex),h.set(Me,Se))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,ue={},u={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,y=null,T=null,b=null,E=null,R=null,N=new pt(0,0,0),x=0,A=!1,W=null,k=null,L=null,F=null,z=null,V.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Re,bindFramebuffer:ve,drawBuffers:B,useProgram:Ae,setBlending:De,setMaterial:H,setFlipSided:Le,setCullFace:Xe,setLineWidth:st,setPolygonOffset:C,setScissorTest:M,activeTexture:ie,bindTexture:ce,unbindTexture:de,compressedTexImage2D:he,compressedTexImage3D:Ie,texImage2D:$e,texImage3D:ke,updateUBOMapping:Ke,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:_t,texSubImage2D:He,texSubImage3D:xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ze,scissor:Ue,viewport:Fe,reset:ot}}function Tw(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ne,f=new WeakMap;let d;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):mc("canvas")}function p(C,M,ie,ce){let de=1;const he=st(C);if((he.width>ce||he.height>ce)&&(de=ce/Math.max(he.width,he.height)),de<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Ie=M?tf:Math.floor,He=Ie(de*he.width),xe=Ie(de*he.height);d===void 0&&(d=_(He,xe));const be=ie?_(He,xe):d;return be.width=He,be.height=xe,be.getContext("2d").drawImage(C,0,0,He,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+He+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function m(C){const M=st(C);return Jg(M.width)&&Jg(M.height)}function S(C){return a?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==wn&&C.minFilter!==Bn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==wn&&C.minFilter!==Bn}function y(C){r.generateMipmap(C)}function T(C,M,ie,ce,de=!1){if(a===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=M;if(M===r.RED&&(ie===r.FLOAT&&(he=r.R32F),ie===r.HALF_FLOAT&&(he=r.R16F),ie===r.UNSIGNED_BYTE&&(he=r.R8)),M===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.R8UI),ie===r.UNSIGNED_SHORT&&(he=r.R16UI),ie===r.UNSIGNED_INT&&(he=r.R32UI),ie===r.BYTE&&(he=r.R8I),ie===r.SHORT&&(he=r.R16I),ie===r.INT&&(he=r.R32I)),M===r.RG&&(ie===r.FLOAT&&(he=r.RG32F),ie===r.HALF_FLOAT&&(he=r.RG16F),ie===r.UNSIGNED_BYTE&&(he=r.RG8)),M===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RG8UI),ie===r.UNSIGNED_SHORT&&(he=r.RG16UI),ie===r.UNSIGNED_INT&&(he=r.RG32UI),ie===r.BYTE&&(he=r.RG8I),ie===r.SHORT&&(he=r.RG16I),ie===r.INT&&(he=r.RG32I)),M===r.RGBA){const Ie=de?uc:gt.getTransfer(ce);ie===r.FLOAT&&(he=r.RGBA32F),ie===r.HALF_FLOAT&&(he=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(he=Ie===Et?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(C,M,ie){return v(C,ie)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===wn||C===pg||C===Na?r.NEAREST:r.LINEAR}function R(C){const M=C.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&f.delete(M)}function N(C){const M=C.target;M.removeEventListener("dispose",N),W(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const ie=C.source,ce=u.get(ie);if(ce){const de=ce[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(C),Object.keys(ce).length===0&&u.delete(ie)}n.remove(C)}function A(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const ie=C.source,ce=u.get(ie);delete ce[M.__cacheKey],o.memory.textures--}function W(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let de=0;de<M.__webglFramebuffer[ce].length;de++)r.deleteFramebuffer(M.__webglFramebuffer[ce][de]);else r.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)r.deleteFramebuffer(M.__webglFramebuffer[ce]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=n.get(ie[ce]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(ie[ce])}n.remove(C)}let k=0;function L(){k=0}function F(){const C=k;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),k+=1,C}function z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const ie=n.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&ie.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ie,C,M);return}}t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+M)}function $(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+M)}function ne(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){te(ie,C,M);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+M)}function P(C,M){const ie=n.get(C);if(C.version>0&&ie.__version!==C.version){fe(ie,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+M)}const re={[Gh]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},ue={[wn]:r.NEAREST,[pg]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Wh]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},q={[KS]:r.NEVER,[nM]:r.ALWAYS,[JS]:r.LESS,[$g]:r.LEQUAL,[jS]:r.EQUAL,[tM]:r.GEQUAL,[QS]:r.GREATER,[eM]:r.NOTEQUAL};function D(C,M,ie){if(M.type===er&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Wh||M.magFilter===Na||M.magFilter===Ss||M.minFilter===Bn||M.minFilter===Wh||M.minFilter===Na||M.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ie?(r.texParameteri(C,r.TEXTURE_WRAP_S,re[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,re[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,re[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ue[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ue[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==pi||M.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==wn&&M.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==Na&&M.minFilter!==Ss||M.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function V(C,M){let ie=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ce=M.source;let de=u.get(ce);de===void 0&&(de={},u.set(ce,de));const he=z(M);if(he!==C.__cacheKey){de[he]===void 0&&(de[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),de[he].usedTimes++;const Ie=de[C.__cacheKey];Ie!==void 0&&(de[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&A(M)),C.__cacheKey=he,C.__webglTexture=de[he].texture}return ie}function te(C,M,ie){let ce=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=r.TEXTURE_3D);const de=V(C,M),he=M.source;t.bindTexture(ce,C.__webglTexture,r.TEXTURE0+ie);const Ie=n.get(he);if(he.version!==Ie.__version||de===!0){t.activeTexture(r.TEXTURE0+ie);const He=gt.getPrimaries(gt.workingColorSpace),xe=M.colorSpace===Ur?null:gt.getPrimaries(M.colorSpace),be=M.colorSpace===Ur||He===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ze=S(M)&&m(M.image)===!1;let _e=p(M.image,Ze,!1,i.maxTextureSize);_e=Xe(M,_e);const _t=m(_e)||a,$e=s.convert(M.format,M.colorSpace);let ke=s.convert(M.type),Ue=T(M.internalFormat,$e,ke,M.colorSpace,M.isVideoTexture);D(ce,M,_t);let Fe;const Ke=M.mipmaps,Te=a&&M.isVideoTexture!==!0&&Ue!==bg,ot=Ie.__version===void 0||de===!0,U=he.dataReady,Me=b(M,_e,_t);if(M.isDepthTexture)Ue=r.DEPTH_COMPONENT,a?M.type===er?Ue=r.DEPTH_COMPONENT32F:M.type===Ir?Ue=r.DEPTH_COMPONENT24:M.type===Ms?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:M.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Es&&Ue===r.DEPTH_COMPONENT&&M.type!==Xh&&M.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ir,ke=s.convert(M.type)),M.format===mo&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,M.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ms,ke=s.convert(M.type))),ot&&(Te?t.texStorage2D(r.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,null));else if(M.isDataTexture)if(Ke.length>0&&_t){Te&&ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,Ke[0].width,Ke[0].height);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data);M.generateMipmaps=!1}else Te?(ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,_e.width,_e.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,$e,ke,_e.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,_e.width,_e.height,0,$e,ke,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Te&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ue,Ke[0].width,Ke[0].height,_e.depth);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],M.format!==mi?$e!==null?Te?U&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Fe.width,Fe.height,_e.depth,$e,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Ue,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Fe.width,Fe.height,_e.depth,$e,ke,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Ue,Fe.width,Fe.height,_e.depth,0,$e,ke,Fe.data)}else{Te&&ot&&t.texStorage2D(r.TEXTURE_2D,Me,Ue,Ke[0].width,Ke[0].height);for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],M.format!==mi?$e!==null?Te?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Fe.width,Fe.height,$e,ke,Fe.data):t.texImage2D(r.TEXTURE_2D,j,Ue,Fe.width,Fe.height,0,$e,ke,Fe.data)}else if(M.isDataArrayTexture)Te?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isData3DTexture)Te?(ot&&t.texStorage3D(r.TEXTURE_3D,Me,Ue,_e.width,_e.height,_e.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,$e,ke,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,$e,ke,_e.data);else if(M.isFramebufferTexture){if(ot)if(Te)t.texStorage2D(r.TEXTURE_2D,Me,Ue,_e.width,_e.height);else{let j=_e.width,Se=_e.height;for(let se=0;se<Me;se++)t.texImage2D(r.TEXTURE_2D,se,Ue,j,Se,0,$e,ke,null),j>>=1,Se>>=1}}else if(Ke.length>0&&_t){if(Te&&ot){const j=st(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Me,Ue,j.width,j.height)}for(let j=0,Se=Ke.length;j<Se;j++)Fe=Ke[j],Te?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,$e,ke,Fe):t.texImage2D(r.TEXTURE_2D,j,Ue,$e,ke,Fe);M.generateMipmaps=!1}else if(Te){if(ot){const j=st(_e);t.texStorage2D(r.TEXTURE_2D,Me,Ue,j.width,j.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$e,ke,_e)}else t.texImage2D(r.TEXTURE_2D,0,Ue,$e,ke,_e);v(M,_t)&&y(ce),Ie.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function fe(C,M,ie){if(M.image.length!==6)return;const ce=V(C,M),de=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ie);const he=n.get(de);if(de.version!==he.__version||ce===!0){t.activeTexture(r.TEXTURE0+ie);const Ie=gt.getPrimaries(gt.workingColorSpace),He=M.colorSpace===Ur?null:gt.getPrimaries(M.colorSpace),xe=M.colorSpace===Ur||Ie===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!be&&!Ze?_e[j]=p(M.image[j],!1,!0,i.maxCubemapSize):_e[j]=Ze?M.image[j].image:M.image[j],_e[j]=Xe(M,_e[j]);const _t=_e[0],$e=m(_t)||a,ke=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Fe=T(M.internalFormat,ke,Ue,M.colorSpace),Ke=a&&M.isVideoTexture!==!0,Te=he.__version===void 0||ce===!0,ot=de.dataReady;let U=b(M,_t,$e);D(r.TEXTURE_CUBE_MAP,M,$e);let Me;if(be){Ke&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Fe,_t.width,_t.height);for(let j=0;j<6;j++){Me=_e[j].mipmaps;for(let Se=0;Se<Me.length;Se++){const se=Me[Se];M.format!==mi?ke!==null?Ke?ot&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,se.width,se.height,ke,Ue,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,se.width,se.height,0,ke,Ue,se.data)}}}else{if(Me=M.mipmaps,Ke&&Te){Me.length>0&&U++;const j=st(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Fe,j.width,j.height)}for(let j=0;j<6;j++)if(Ze){Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,ke,Ue,_e[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,_e[j].width,_e[j].height,0,ke,Ue,_e[j].data);for(let Se=0;Se<Me.length;Se++){const I=Me[Se].image[j].image;Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,I.width,I.height,ke,Ue,I.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,I.width,I.height,0,ke,Ue,I.data)}}else{Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Ue,_e[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,ke,Ue,_e[j]);for(let Se=0;Se<Me.length;Se++){const se=Me[Se];Ke?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,ke,Ue,se.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,ke,Ue,se.image[j])}}}v(M,$e)&&y(r.TEXTURE_CUBE_MAP),he.__version=de.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,ie,ce,de,he){const Ie=s.convert(ie.format,ie.colorSpace),He=s.convert(ie.type),xe=T(ie.internalFormat,Ie,He,ie.colorSpace);if(!n.get(M).__hasExternalTextures){const Ze=Math.max(1,M.width>>he),_e=Math.max(1,M.height>>he);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,he,xe,Ze,_e,M.depth,0,Ie,He,null):t.texImage2D(de,he,xe,Ze,_e,0,Ie,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,0,De(M)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,de,n.get(ie).__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(C,M,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ce=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ie||H(M)){const de=M.depthTexture;de&&de.isDepthTexture&&(de.type===er?ce=r.DEPTH_COMPONENT32F:de.type===Ir&&(ce=r.DEPTH_COMPONENT24));const he=De(M);H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,ce,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,he,ce,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,ce,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ce=De(M);ie&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ce=M.textures;for(let de=0;de<ce.length;de++){const he=ce[de],Ie=s.convert(he.format,he.colorSpace),He=s.convert(he.type),xe=T(he.internalFormat,Ie,He,he.colorSpace),be=De(M);ie&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,xe,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const ce=n.get(M.depthTexture).__webglTexture,de=De(M);if(M.depthTexture.format===Es)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(M.depthTexture.format===mo)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ve(C){const M=n.get(C),ie=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,C)}else if(ie){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]=r.createRenderbuffer(),me(M.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),me(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function B(C,M,ie){const ce=n.get(C);M!==void 0&&le(ce.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&ve(C)}function Ae(C){const M=C.texture,ie=n.get(C),ce=n.get(M);C.addEventListener("dispose",N);const de=C.textures,he=C.isWebGLCubeRenderTarget===!0,Ie=de.length>1,He=m(C)||a;if(Ie||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=M.version,o.memory.textures++),he){ie.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer[xe]=[];for(let be=0;be<M.mipmaps.length;be++)ie.__webglFramebuffer[xe][be]=r.createFramebuffer()}else ie.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)ie.__webglFramebuffer[xe]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ie)if(i.drawBuffers)for(let xe=0,be=de.length;xe<be;xe++){const Ze=n.get(de[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&H(C)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const be=de[xe];ie.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ze=s.convert(be.format,be.colorSpace),_e=s.convert(be.type),_t=T(be.internalFormat,Ze,_e,be.colorSpace,C.isXRRenderTarget===!0),$e=De(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,_t,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ie.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),me(ie.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),D(r.TEXTURE_CUBE_MAP,M,He);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[xe][be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else le(ie.__webglFramebuffer[xe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(M,He)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,be=de.length;xe<be;xe++){const Ze=de[xe],_e=n.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),D(r.TEXTURE_2D,Ze,He),le(ie.__webglFramebuffer,C,Ze,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),v(Ze,He)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),D(xe,M,He),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)le(ie.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,xe,be);else le(ie.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,xe,0);v(M,He)&&y(xe),t.unbindTexture()}C.depthBuffer&&ve(C)}function ge(C){const M=m(C)||a,ie=C.textures;for(let ce=0,de=ie.length;ce<de;ce++){const he=ie[ce];if(v(he,M)){const Ie=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=n.get(he).__webglTexture;t.bindTexture(Ie,He),y(Ie),t.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&H(C)===!1){const M=C.textures,ie=C.width,ce=C.height;let de=r.COLOR_BUFFER_BIT;const he=[],Ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=n.get(C),xe=M.length>1;if(xe)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){he.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&he.push(Ie);const Ze=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Ze===!1&&(C.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),xe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ie]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ie])),xe){const _e=n.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,de,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Ze=n.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function De(C){return Math.min(i.maxSamples,C.samples)}function H(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Xe(C,M){const ie=C.colorSpace,ce=C.format,de=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jh||ie!==Or&&ie!==Ur&&(gt.getTransfer(ie)===Et?a===!1?e.has("EXT_sRGB")===!0&&ce===mi?(C.format=jh,C.minFilter=Bn,C.generateMipmaps=!1):M=n_.sRGBToLinear(M):(ce!==mi||de!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),M}function st(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=P,this.rebindTextures=B,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=H}function bw(r,e,t){const n=t.isWebGL2;function i(s,o=Ur){let a;const l=gt.getTransfer(o);if(s===Nr)return r.UNSIGNED_BYTE;if(s===gg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_g)return r.UNSIGNED_SHORT_5_5_5_1;if(s===BS)return r.BYTE;if(s===kS)return r.SHORT;if(s===Xh)return r.UNSIGNED_SHORT;if(s===mg)return r.INT;if(s===Ir)return r.UNSIGNED_INT;if(s===er)return r.FLOAT;if(s===tr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zS)return r.ALPHA;if(s===mi)return r.RGBA;if(s===HS)return r.LUMINANCE;if(s===GS)return r.LUMINANCE_ALPHA;if(s===Es)return r.DEPTH_COMPONENT;if(s===mo)return r.DEPTH_STENCIL;if(s===jh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===VS)return r.RED;if(s===vg)return r.RED_INTEGER;if(s===WS)return r.RG;if(s===xg)return r.RG_INTEGER;if(s===yg)return r.RGBA_INTEGER;if(s===Yh||s===qh||s===$h||s===Zh)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sg||s===Mg||s===Eg||s===Tg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wg||s===Ag)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wg)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ag)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cg||s===Rg||s===Pg||s===Lg||s===Dg||s===Ng||s===Ig||s===Ug||s===Og||s===Fg||s===Bg||s===kg||s===zg||s===Hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ng)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ig)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ug)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Og)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hg)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh||s===Gg||s===Vg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kh)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===XS||s===Wg||s===Xg||s===Yg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Wg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ms?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ww extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Aw={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Aw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rw=`
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

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Cn({extensions:{fragDepth:!0},vertexShader:Cw,fragmentShader:Rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new Oc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Lw extends _o{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new Pw,p=t.getContextAttributes();let m=null,S=null;const v=[],y=[],T=new Ne;let b=null;const E=new li;E.layers.enable(1),E.viewport=new sn;const R=new li;R.layers.enable(2),R.viewport=new sn;const N=[E,R],x=new ww;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=v[D];return V===void 0&&(V=new Pf,v[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=v[D];return V===void 0&&(V=new Pf,v[D]=V),V.getGripSpace()},this.getHand=function(D){let V=v[D];return V===void 0&&(V=new Pf,v[D]=V),V.getHandSpace()};function k(D){const V=y.indexOf(D.inputSource);if(V===-1)return;const te=v[V];te!==void 0&&(te.update(D.inputSource,D.frame,c||o),te.dispatchEvent({type:D.type,data:D.inputSource}))}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",F);for(let D=0;D<v.length;D++){const V=y[D];V!==null&&(y[D]=null,v[D].disconnect(V))}A=null,W=null,_.reset(),e.setRenderTarget(m),u=null,d=null,f=null,i=null,S=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new gi(u.framebufferWidth,u.framebufferHeight,{format:mi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,te=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=p.stencil?mo:Es,te=p.stencil?Ms:Ir);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:mi,type:Nr,depthTexture:new B_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(S);me.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(D){for(let V=0;V<D.removed.length;V++){const te=D.removed[V],fe=y.indexOf(te);fe>=0&&(y[fe]=null,v[fe].disconnect(te))}for(let V=0;V<D.added.length;V++){const te=D.added[V];let fe=y.indexOf(te);if(fe===-1){for(let me=0;me<v.length;me++)if(me>=y.length){y.push(te),fe=me;break}else if(y[me]===null){y[me]=te,fe=me;break}if(fe===-1)break}const le=v[fe];le&&le.connect(te)}}const z=new Y,G=new Y;function $(D,V,te){z.setFromMatrixPosition(V.matrixWorld),G.setFromMatrixPosition(te.matrixWorld);const fe=z.distanceTo(G),le=V.projectionMatrix.elements,me=te.projectionMatrix.elements,Re=le[14]/(le[10]-1),ve=le[14]/(le[10]+1),B=(le[9]+1)/le[5],Ae=(le[9]-1)/le[5],ge=(le[8]-1)/le[0],Ee=(me[8]+1)/me[0],De=Re*ge,H=Re*Ee,Le=fe/(-ge+Ee),Xe=Le*-ge;V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Xe),D.translateZ(Le),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const st=Re+Le,C=ve+Le,M=De-Xe,ie=H+(fe-Xe),ce=B*ve/C*st,de=Ae*ve/C*st;D.projectionMatrix.makePerspective(M,ie,ce,de,st,C),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function ne(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;_.texture!==null&&(D.near=_.depthNear,D.far=_.depthFar),x.near=R.near=E.near=D.near,x.far=R.far=E.far=D.far,(A!==x.near||W!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far,E.near=A,E.far=W,R.near=A,R.far=W,E.updateProjectionMatrix(),R.updateProjectionMatrix(),D.updateProjectionMatrix());const V=D.parent,te=x.cameras;ne(x,V);for(let fe=0;fe<te.length;fe++)ne(te[fe],V);te.length===2?$(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),P(D,x,V)};function P(D,V,te){te===null?D.matrix.copy(V.matrixWorld):(D.matrix.copy(te.matrixWorld),D.matrix.invert(),D.matrix.multiply(V.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Qh*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function ue(D,V){if(h=V.getViewerPose(c||o),g=V,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let fe=!1;te.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let me=0;me<te.length;me++){const Re=te[me];let ve=null;if(u!==null)ve=u.getViewport(Re);else{const Ae=f.getViewSubImage(d,Re);ve=Ae.viewport,me===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let B=N[me];B===void 0&&(B=new li,B.layers.enable(me),B.viewport=new sn,N[me]=B),B.matrix.fromArray(Re.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Re.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(x.matrix.copy(B.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(B)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){const me=f.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let te=0;te<v.length;te++){const fe=y[te],le=v[te];fe!==null&&le!==void 0&&le.update(fe,V,c||o)}_.render(e,x),re&&re(D,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const q=new R_;q.setAnimationLoop(ue),this.setAnimationLoop=function(D){re=D},this.dispose=function(){}}}const Ns=new sr,Dw=new Bt;function Nw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,E_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,y=S.envMapRotation;if(v&&(p.envMap.value=v,Ns.copy(y),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(Ns)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iw(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(S,T);const b=e.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function h(S){const v=f();S.__bindingPointIndex=v;const y=r.createBuffer(),T=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],y=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let N=0,x=R.length;N<x;N++){const A=R[N];if(u(A,b,N,T)===!0){const W=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let F=0;F<k.length;F++){const z=k[F],G=_(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,W+L,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,v,y,T){const b=S.value,E=v+"_"+y;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const R=T[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(S){const v=S.uniforms;let y=0;const T=16;for(let E=0,R=v.length;E<R;E++){const N=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,A=N.length;x<A;x++){const W=N[x],k=Array.isArray(W.value)?W.value:[W.value];for(let L=0,F=k.length;L<F;L++){const z=k[L],G=_(z),$=y%T;$!==0&&T-$<G.boundary&&(y+=T-$),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=G.storage}}}const b=y%T;return b>0&&(y+=T-b),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class sv{constructor(e={}){const{canvas:t=rM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let y=!1,T=0,b=0,E=null,R=-1,N=null;const x=new sn,A=new sn;let W=null;const k=new pt(0);let L=0,F=t.width,z=t.height,G=1,$=null,ne=null;const P=new sn(0,0,F,z),re=new sn(0,0,F,z);let ue=!1;const q=new C_;let D=!1,V=!1,te=null;const fe=new Bt,le=new Ne,me=new Y,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?G:1}let B=n;function Ae(w,X){for(let K=0;K<w.length;K++){const Q=w[K],Z=t.getContext(Q,X);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),B=Ae(X,w),B===null)throw Ae(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de,he,Ie,He,xe,be,Ze,_e,_t,$e,ke,Ue,Fe;function Ke(){ge=new zT(B),Ee=new IT(B,ge,e),ge.init(Ee),ke=new bw(B,ge,Ee),De=new Ew(B,ge,Ee),H=new VT(B),Le=new cw,Xe=new Tw(B,ge,De,Le,Ee,ke,H),st=new OT(v),C=new kT(v),M=new RM(B,Ee),Ue=new DT(B,ge,M,Ee),ie=new HT(B,M,H,Ue),ce=new qT(B,ie,M,H),_e=new YT(B,Ee,Xe),xe=new UT(Le),de=new lw(v,st,C,ge,Ee,Ue,xe),he=new Nw(v,Le),Ie=new hw,He=new _w(ge,Ee),Ze=new LT(v,st,C,De,ce,d,l),be=new Mw(v,ce,Ee),Fe=new Iw(B,H,Ee,De),_t=new NT(B,ge,H,Ee),$e=new GT(B,ge,H,Ee),H.programs=de.programs,v.capabilities=Ee,v.extensions=ge,v.properties=Le,v.renderLists=Ie,v.shadowMap=be,v.state=De,v.info=H}Ke();const Te=new Lw(v,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,X,K=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=X,t.width=Math.floor(w*G),t.height=Math.floor(X*G),K===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(F*G,z*G).floor()},this.setDrawingBufferSize=function(w,X,K){F=w,z=X,G=K,t.width=Math.floor(w*K),t.height=Math.floor(X*K),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,X,K,Q){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,X,K,Q),De.viewport(x.copy(P).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,X,K,Q){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,X,K,Q),De.scissor(A.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){De.setScissorTest(ue=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,X=!0,K=!0){let Q=0;if(w){let Z=!1;if(E!==null){const we=E.texture.format;Z=we===yg||we===xg||we===vg}if(Z){const we=E.texture.type,ze=we===Nr||we===Ir||we===Xh||we===Ms||we===gg||we===_g,Ye=Ze.getClearColor(),Ge=Ze.getClearAlpha(),Ve=Ye.r,qe=Ye.g,Qe=Ye.b;ze?(u[0]=Ve,u[1]=qe,u[2]=Qe,u[3]=Ge,B.clearBufferuiv(B.COLOR,0,u)):(g[0]=Ve,g[1]=qe,g[2]=Qe,g[3]=Ge,B.clearBufferiv(B.COLOR,0,g))}else Q|=B.COLOR_BUFFER_BIT}X&&(Q|=B.DEPTH_BUFFER_BIT),K&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ie.dispose(),He.dispose(),Le.dispose(),st.dispose(),C.dispose(),ce.dispose(),Ue.dispose(),Fe.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ee),Te.removeEventListener("sessionend",oe),te&&(te.dispose(),te=null),J.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=H.autoReset,X=be.enabled,K=be.autoUpdate,Q=be.needsUpdate,Z=be.type;Ke(),H.autoReset=w,be.enabled=X,be.autoUpdate=K,be.needsUpdate=Q,be.type=Z}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function j(w){const X=w.target;X.removeEventListener("dispose",j),Se(X)}function Se(w){se(w),Le.remove(w)}function se(w){const X=Le.get(w).programs;X!==void 0&&(X.forEach(function(K){de.releaseProgram(K)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,K,Q,Z,we){X===null&&(X=Re);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=it(w,X,K,Q,Z);De.setMaterial(Q,ze);let Ge=K.index,Ve=1;if(Q.wireframe===!0){if(Ge=ie.getWireframeAttribute(K),Ge===void 0)return;Ve=2}const qe=K.drawRange,Qe=K.attributes.position;let Ct=qe.start*Ve,Kt=(qe.start+qe.count)*Ve;we!==null&&(Ct=Math.max(Ct,we.start*Ve),Kt=Math.min(Kt,(we.start+we.count)*Ve)),Ge!==null?(Ct=Math.max(Ct,0),Kt=Math.min(Kt,Ge.count)):Qe!=null&&(Ct=Math.max(Ct,0),Kt=Math.min(Kt,Qe.count));const vt=Kt-Ct;if(vt<0||vt===1/0)return;Ue.setup(Z,Q,Ye,K,Ge);let Pn,xt=_t;if(Ge!==null&&(Pn=M.get(Ge),xt=$e,xt.setIndex(Pn)),Z.isMesh)Q.wireframe===!0?(De.setLineWidth(Q.wireframeLinewidth*ve()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(Z.isLine){let je=Q.linewidth;je===void 0&&(je=1),De.setLineWidth(je*ve()),Z.isLineSegments?xt.setMode(B.LINES):Z.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else Z.isPoints?xt.setMode(B.POINTS):Z.isSprite&&xt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)xt.renderInstances(Ct,vt,Z.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nd=Math.min(K.instanceCount,je);xt.renderInstances(Ct,vt,Nd)}else xt.render(Ct,vt)};function I(w,X,K){w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,Je(w,X,K),w.side=Dr,w.needsUpdate=!0,Je(w,X,K),w.side=Ji):Je(w,X,K)}this.compile=function(w,X,K=null){K===null&&(K=w),p=He.get(K),p.init(),S.push(p),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),w!==K&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(v._useLegacyLights);const Q=new Set;return w.traverse(function(Z){const we=Z.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const Ye=we[ze];I(Ye,K,Z),Q.add(Ye)}else I(we,K,Z),Q.add(we)}),S.pop(),p=null,Q},this.compileAsync=function(w,X,K=null){const Q=this.compile(w,X,K);return new Promise(Z=>{function we(){if(Q.forEach(function(ze){Le.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){Z(w);return}setTimeout(we,10)}ge.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ae=null;function O(w){ae&&ae(w)}function ee(){J.stop()}function oe(){J.start()}const J=new R_;J.setAnimationLoop(O),typeof self!="undefined"&&J.setContext(self),this.setAnimationLoop=function(w){ae=w,Te.setAnimationLoop(w),w===null?J.stop():J.start()},Te.addEventListener("sessionstart",ee),Te.addEventListener("sessionend",oe),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,E),p=He.get(w,S.length),p.init(),S.push(p),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(fe),V=this.localClippingEnabled,D=xe.init(this.clippingPlanes,V),_=Ie.get(w,m.length),_.init(),m.push(_),ye(w,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,ne),this.info.render.frame++,D===!0&&xe.beginShadows();const K=p.state.shadowsArray;if(be.render(K,w,X),D===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&Ze.render(_,w),p.setupLights(v._useLegacyLights),X.isArrayCamera){const Q=X.cameras;for(let Z=0,we=Q.length;Z<we;Z++){const ze=Q[Z];pe(_,w,ze,ze.viewport)}}else pe(_,w,X);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,X),Ue.resetDefaultState(),R=-1,N=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ye(w,X,K,Q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){Q&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ze=ce.update(w),Ye=w.material;Ye.visible&&_.push(w,ze,Ye,K,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ze=ce.update(w),Ye=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ye)){const Ge=ze.groups;for(let Ve=0,qe=Ge.length;Ve<qe;Ve++){const Qe=Ge[Ve],Ct=Ye[Qe.materialIndex];Ct&&Ct.visible&&_.push(w,ze,Ct,K,me.z,Qe)}}else Ye.visible&&_.push(w,ze,Ye,K,me.z,null)}}const we=w.children;for(let ze=0,Ye=we.length;ze<Ye;ze++)ye(we[ze],X,K,Q)}function pe(w,X,K,Q){const Z=w.opaque,we=w.transmissive,ze=w.transparent;p.setupLightsView(K),D===!0&&xe.setGlobalState(v.clippingPlanes,K),we.length>0&&Pe(Z,we,X,K),Q&&De.viewport(x.copy(Q)),Z.length>0&&We(Z,X,K),we.length>0&&We(we,X,K),ze.length>0&&We(ze,X,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Pe(w,X,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const we=Ee.isWebGL2;te===null&&(te=new gi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?tr:Nr,minFilter:Ss,samples:we?4:0})),v.getDrawingBufferSize(le),we?te.setSize(le.x,le.y):te.setSize(tf(le.x),tf(le.y));const ze=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(k),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ye=v.toneMapping;v.toneMapping=Qi,We(w,K,Q),Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te);let Ge=!1;for(let Ve=0,qe=X.length;Ve<qe;Ve++){const Qe=X[Ve],Ct=Qe.object,Kt=Qe.geometry,vt=Qe.material,Pn=Qe.group;if(vt.side===Ji&&Ct.layers.test(Q.layers)){const xt=vt.side;vt.side=Fn,vt.needsUpdate=!0,Oe(Ct,K,Q,Kt,vt,Pn),vt.side=xt,vt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),v.setRenderTarget(ze),v.setClearColor(k,L),v.toneMapping=Ye}function We(w,X,K){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,we=w.length;Z<we;Z++){const ze=w[Z],Ye=ze.object,Ge=ze.geometry,Ve=Q===null?ze.material:Q,qe=ze.group;Ye.layers.test(K.layers)&&Oe(Ye,X,K,Ge,Ve,qe)}}function Oe(w,X,K,Q,Z,we){w.onBeforeRender(v,X,K,Q,Z,we),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,X,K,Q,w,we),Z.transparent===!0&&Z.side===Ji&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,v.renderBufferDirect(K,X,Q,Z,w,we),Z.side=Dr,Z.needsUpdate=!0,v.renderBufferDirect(K,X,Q,Z,w,we),Z.side=Ji):v.renderBufferDirect(K,X,Q,Z,w,we),w.onAfterRender(v,X,K,Q,Z,we)}function Je(w,X,K){X.isScene!==!0&&(X=Re);const Q=Le.get(w),Z=p.state.lights,we=p.state.shadowsArray,ze=Z.state.version,Ye=de.getParameters(w,Z.state,we,X,K),Ge=de.getProgramCacheKey(Ye);let Ve=Q.programs;Q.environment=w.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(w.isMeshStandardMaterial?C:st).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",j),Ve=new Map,Q.programs=Ve);let qe=Ve.get(Ge);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===ze)return dt(w,Ye),qe}else Ye.uniforms=de.getUniforms(w),w.onBuild(K,Ye,v),w.onBeforeCompile(Ye,v),qe=de.acquireProgram(Ye,Ge),Ve.set(Ge,qe),Q.uniforms=Ye.uniforms;const Qe=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),dt(w,Ye),Q.needsLights=mt(w),Q.lightsStateVersion=ze,Q.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function ct(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=zc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function dt(w,X){const K=Le.get(w);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function it(w,X,K,Q,Z){X.isScene!==!0&&(X=Re),Xe.resetTextureUnits();const we=X.fog,ze=Q.isMeshStandardMaterial?X.environment:null,Ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Or,Ge=(Q.isMeshStandardMaterial?C:st).get(Q.envMap||ze),Ve=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Qe=!!K.morphAttributes.position,Ct=!!K.morphAttributes.normal,Kt=!!K.morphAttributes.color;let vt=Qi;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Pn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=Pn!==void 0?Pn.length:0,je=Le.get(Q),Nd=p.state.lights;if(D===!0&&(V===!0||w!==N)){const hi=w===N&&Q.id===R;xe.setState(Q,w,hi)}let Rt=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Nd.state.version||je.outputColorSpace!==Ye||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==Ge||Q.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==qe||je.morphTargets!==Qe||je.morphNormals!==Ct||je.morphColors!==Kt||je.toneMapping!==vt||Ee.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Rt=!0):(Rt=!0,je.__version=Q.version);let Hs=je.currentProgram;Rt===!0&&(Hs=Je(Q,X,Z));let W0=!1,xl=!1,Id=!1;const _n=Hs.getUniforms(),Gs=je.uniforms;if(De.useProgram(Hs.program)&&(W0=!0,xl=!0,Id=!0),Q.id!==R&&(R=Q.id,xl=!0),W0||N!==w){_n.setValue(B,"projectionMatrix",w.projectionMatrix),_n.setValue(B,"viewMatrix",w.matrixWorldInverse);const hi=_n.map.cameraPosition;hi!==void 0&&hi.setValue(B,me.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&_n.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&_n.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,xl=!0,Id=!0)}if(Z.isSkinnedMesh){_n.setOptional(B,Z,"bindMatrix"),_n.setOptional(B,Z,"bindMatrixInverse");const hi=Z.skeleton;hi&&(Ee.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),_n.setValue(B,"boneTexture",hi.boneTexture,Xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(_n.setOptional(B,Z,"batchingTexture"),_n.setValue(B,"batchingTexture",Z._matricesTexture,Xe));const Ud=K.morphAttributes;if((Ud.position!==void 0||Ud.normal!==void 0||Ud.color!==void 0&&Ee.isWebGL2===!0)&&_e.update(Z,K,Hs),(xl||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,_n.setValue(B,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Gs.envMap.value=Ge,Gs.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),xl&&(_n.setValue(B,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&at(Gs,Id),we&&Q.fog===!0&&he.refreshFogUniforms(Gs,we),he.refreshMaterialUniforms(Gs,Q,G,z,te),zc.upload(B,ct(je),Gs,Xe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(zc.upload(B,ct(je),Gs,Xe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&_n.setValue(B,"center",Z.center),_n.setValue(B,"modelViewMatrix",Z.modelViewMatrix),_n.setValue(B,"normalMatrix",Z.normalMatrix),_n.setValue(B,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hi=Q.uniformsGroups;for(let Od=0,wA=hi.length;Od<wA;Od++)if(Ee.isWebGL2){const X0=hi[Od];Fe.update(X0,Hs),Fe.bind(X0,Hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hs}function at(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,X,K){Le.get(w.texture).__webglTexture=X,Le.get(w.depthTexture).__webglTexture=K;const Q=Le.get(w);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const K=Le.get(w);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,K=0){E=w,T=X,b=K;let Q=!0,Z=null,we=!1,ze=!1;if(w){const Ge=Le.get(w);Ge.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1):Ge.__webglFramebuffer===void 0?Xe.setupRenderTarget(w):Ge.__hasExternalTextures&&Xe.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const qe=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?Z=qe[X][K]:Z=qe[X],we=!0):Ee.isWebGL2&&w.samples>0&&Xe.useMultisampledRTT(w)===!1?Z=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[K]:Z=qe,x.copy(w.viewport),A.copy(w.scissor),W=w.scissorTest}else x.copy(P).multiplyScalar(G).floor(),A.copy(re).multiplyScalar(G).floor(),W=ue;if(De.bindFramebuffer(B.FRAMEBUFFER,Z)&&Ee.drawBuffers&&Q&&De.drawBuffers(w,Z),De.viewport(x),De.scissor(A),De.setScissorTest(W),we){const Ge=Le.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,K)}else if(ze){const Ge=Le.get(w.texture),Ve=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,Ve)}R=-1},this.readRenderTargetPixels=function(w,X,K,Q,Z,we,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){De.bindFramebuffer(B.FRAMEBUFFER,Ye);try{const Ge=w.texture,Ve=Ge.format,qe=Ge.type;if(Ve!==mi&&ke.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=qe===tr&&(ge.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ge.has("EXT_color_buffer_float"));if(qe!==Nr&&ke.convert(qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===er&&(Ee.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-Q&&K>=0&&K<=w.height-Z&&B.readPixels(X,K,Q,Z,ke.convert(Ve),ke.convert(qe),we)}finally{const Ge=E!==null?Le.get(E).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(w,X,K=0){const Q=Math.pow(2,-K),Z=Math.floor(X.image.width*Q),we=Math.floor(X.image.height*Q);Xe.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,w.x,w.y,Z,we),De.unbindTexture()},this.copyTextureToTexture=function(w,X,K,Q=0){const Z=X.image.width,we=X.image.height,ze=ke.convert(K.format),Ye=ke.convert(K.type);Xe.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,Z,we,ze,Ye,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,ze,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Q,w.x,w.y,ze,Ye,X.image),Q===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,X,K,Q,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(w.max.x-w.min.x),ze=Math.round(w.max.y-w.min.y),Ye=w.max.z-w.min.z+1,Ge=ke.convert(Q.format),Ve=ke.convert(Q.type);let qe;if(Q.isData3DTexture)Xe.setTexture3D(Q,0),qe=B.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Xe.setTexture2DArray(Q,0),qe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);const Qe=B.getParameter(B.UNPACK_ROW_LENGTH),Ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),vt=B.getParameter(B.UNPACK_SKIP_ROWS),Pn=B.getParameter(B.UNPACK_SKIP_IMAGES),xt=K.isCompressedTexture?K.mipmaps[Z]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,Ve,xt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,xt.data):B.texSubImage3D(qe,Z,X.x,X.y,X.z,we,ze,Ye,Ge,Ve,xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Qe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pn),Z===0&&Q.generateMipmaps&&B.generateMipmap(qe),De.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,De.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===cc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Uw extends sv{}Uw.prototype.isWebGL1Renderer=!0;class Ow extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ov extends za{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const av=new Y,lv=new Y,cv=new Bt,Lf=new o_,Hc=new yc;class Fw extends Hn{constructor(e=new jn,t=new ov){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)av.fromBufferAttribute(t,i-1),lv.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=av.distanceTo(lv);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(i),Hc.radius+=s,e.ray.intersectsSphere(Hc)===!1)return;cv.copy(i).invert(),Lf.copy(e.ray).applyMatrix4(cv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,h=new Y,f=new Y,d=new Y,u=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){const T=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),Lf.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=u){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Lf.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ne:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],s=[],o=[],a=new Y,l=new Bt;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new Y)}s[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pn(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(pn(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Df extends ki{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ne){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bw extends Df{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Gc=new Y,If=new Nf,Uf=new Nf,Of=new Nf;class kw extends ki{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Gc.subVectors(i[0],i[1]).add(i[0]),c=Gc);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Gc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),If.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Uf.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Of.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(If.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Uf.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Of.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(If.calc(l),Uf.calc(l),Of.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uv(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function zw(r,e){const t=1-r;return t*t*e}function Hw(r,e){return 2*(1-r)*r*e}function Gw(r,e){return r*r*e}function Wa(r,e,t,n){return zw(r,e)+Hw(r,t)+Gw(r,n)}function Vw(r,e){const t=1-r;return t*t*t*e}function Ww(r,e){const t=1-r;return 3*t*t*r*e}function Xw(r,e){return 3*(1-r)*r*r*e}function Yw(r,e){return r*r*r*e}function Xa(r,e,t,n,i){return Vw(r,e)+Ww(r,t)+Xw(r,n)+Yw(r,i)}class hv extends ki{constructor(e=new Ne,t=new Ne,n=new Ne,i=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ne){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xa(e,i.x,s.x,o.x,a.x),Xa(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qw extends ki{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xa(e,i.x,s.x,o.x,a.x),Xa(e,i.y,s.y,o.y,a.y),Xa(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fv extends ki{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $w extends ki{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dv extends ki{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wa(e,i.x,s.x,o.x),Wa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zw extends ki{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wa(e,i.x,s.x,o.x),Wa(e,i.y,s.y,o.y),Wa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pv extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(uv(a,l.x,c.x,h.x,f.x),uv(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ne().fromArray(i))}return this}}var mv=Object.freeze({__proto__:null,ArcCurve:Bw,CatmullRomCurve3:kw,CubicBezierCurve:hv,CubicBezierCurve3:qw,EllipseCurve:Df,LineCurve:fv,LineCurve3:$w,QuadraticBezierCurve:dv,QuadraticBezierCurve3:Zw,SplineCurve:pv});class Kw extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mv[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mv[i.type]().fromJSON(i))}return this}}class gv extends Kw{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fv(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new dv(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new hv(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i),new Ne(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pv(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Df(e,t,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ff extends jn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new Y,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new on(o,3)),this.setAttribute("normal",new on(a,3)),this.setAttribute("uv",new on(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Vc=new Y,Wc=new Y,Bf=new Y,Xc=new yi;class Jw extends jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(pc*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Xc;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Xc.getNormal(Bf),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const v=(S+1)%3,y=f[S],T=f[v],b=Xc[h[S]],E=Xc[h[v]],R=`${y}_${T}`,N=`${T}_${y}`;N in d&&d[N]?(Bf.dot(d[N].normal)<=s&&(u.push(b.x,b.y,b.z),u.push(E.x,E.y,E.z)),d[N]=null):R in d||(d[R]={index0:c[S],index1:c[v],normal:Bf.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Vc.fromBufferAttribute(a,_),Wc.fromBufferAttribute(a,p),u.push(Vc.x,Vc.y,Vc.z),u.push(Wc.x,Wc.y,Wc.z)}this.setAttribute("position",new on(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kf extends gv{constructor(e){super(e),this.uuid=vo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new gv().fromJSON(i))}return this}}const jw={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=_v(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,u;if(n&&(s=i1(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)f=r[g],d=r[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Ya(s,o,t,a,l,u,0),o}};function _v(r,e,t,n,i){let s,o;if(i===p1(r,e,t,n)>0)for(s=e;s<t;s+=n)o=yv(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=yv(s,r[s],r[s+1],o);return o&&Yc(o,o.next)&&($a(o),o=o.next),o}function Is(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Yc(t,t.next)||It(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(r,e,t,n,i,s,o){if(!r)return;!o&&s&&l1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?e1(r,n,i,s):Qw(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),$a(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=t1(Is(r),e,t),Ya(r,e,t,n,i,s,2)):o===2&&n1(r,e,t,n,i,s):Ya(Is(r),e,t,n,i,s,1);break}}}function Qw(r){const e=r.prev,t=r,n=r.next;if(It(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,u=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&ko(i,a,s,l,o,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e1(r,e,t,n){const i=r.prev,s=r,o=r.next;if(It(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=zf(u,g,e,t,n),S=zf(_,p,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&ko(a,h,l,f,c,d,v.x,v.y)&&It(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&ko(a,h,l,f,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&ko(a,h,l,f,c,d,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&ko(a,h,l,f,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function t1(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Yc(i,s)&&vv(i,n,n.next,s)&&qa(i,s)&&qa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),$a(n),$a(n.next),n=r=s),n=n.next}while(n!==r);return Is(n)}function n1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h1(o,a)){let l=xv(o,a);o=Is(o,o.next),l=Is(l,l.next),Ya(o,e,t,n,i,s,0),Ya(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function i1(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=_v(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(u1(c));for(i.sort(r1),s=0;s<i.length;s++)t=s1(i[s],t);return t}function r1(r,e){return r.x-e.x}function s1(r,e){const t=o1(r,e);if(!t)return e;const n=xv(t,r);return Is(n,n.next),Is(t,t.next)}function o1(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ko(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),qa(t,r)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&a1(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function a1(r,e){return It(r.prev,r,e.prev)<0&&It(e.next,r,r.next)<0}function l1(r,e,t,n){let i=r;do i.z===0&&(i.z=zf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,c1(i)}function c1(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function zf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function u1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ko(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function h1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!f1(r,e)&&(qa(r,e)&&qa(e,r)&&d1(r,e)&&(It(r.prev,r,e.prev)||It(r,e.prev,e))||Yc(r,e)&&It(r.prev,r,r.next)>0&&It(e.prev,e,e.next)>0)}function It(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Yc(r,e){return r.x===e.x&&r.y===e.y}function vv(r,e,t,n){const i=$c(It(r,e,t)),s=$c(It(r,e,n)),o=$c(It(t,n,r)),a=$c(It(t,n,e));return!!(i!==s&&o!==a||i===0&&qc(r,t,e)||s===0&&qc(r,n,e)||o===0&&qc(t,r,n)||a===0&&qc(t,e,n))}function qc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function $c(r){return r>0?1:r<0?-1:0}function f1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&vv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function qa(r,e){return It(r.prev,r,r.next)<0?It(r,e,r.next)>=0&&It(r,r.prev,e)>=0:It(r,e,r.prev)<0||It(r,r.next,e)<0}function d1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function xv(r,e){const t=new Hf(r.i,r.x,r.y),n=new Hf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yv(r,e,t,n){const i=new Hf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $a(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Hf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Za{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Za.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Sv(e),Mv(n,e);let o=e.length;t.forEach(Sv);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Mv(n,t[l]);const a=jw.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sv(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Mv(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Gf extends jn{constructor(e=new kf([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new on(i,3)),this.setAttribute("normal",new on(s,3)),this.setAttribute("uv",new on(o,2));function c(h){const f=i.length/3,d=h.extractPoints(t);let u=d.shape;const g=d.holes;Za.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];Za.isClockWise(S)===!0&&(g[p]=S.reverse())}const _=Za.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){const S=u[p];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=_.length;p<m;p++){const S=_[p],v=S[0]+f,y=S[1]+f,T=S[2]+f;n.push(v,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return m1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Gf(n,e.curveSegments)}}function m1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class g1 extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ev(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ev();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ev(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);const Tv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const v1=new P_(-1,1,1,-1,0,1);class x1 extends jn{constructor(){super(),this.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new on([0,2,0,0,2,0],2))}}const y1=new x1;class Vf{constructor(e){this._mesh=new Fi(y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S1 extends zo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Va.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bv extends zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class M1 extends zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class E1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S1(Tv),this.copyPass.material.blending=ji,this.clock=new _1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bv!==void 0&&(o instanceof bv?n=!0:o instanceof M1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T1 extends zo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const b1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ho extends zo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(s,o,{type:tr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new gi(s,o,{type:tr});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new gi(s,o,{type:tr});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=b1;this.highPassUniforms=Va.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Tv;this.copyUniforms=Va.clone(h.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pt,this.oldClearAlpha=1,this.basic=new xf,this.fsQuad=new Vf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ho.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ho.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ho.BlurDirectionX=new Ne(1,0),Ho.BlurDirectionY=new Ne(0,1);const w1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class A1 extends zo{constructor(){super();const e=w1;this.uniforms=Va.clone(e.uniforms),this.material=new g1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class C1{constructor(e){this.container=e,this.mm=Tt.matchMedia(),this.numberOfLayers=50,this.layerDelay=40,this.layerSpacing=3,this.scene=null,this.renderer=null,this.animationRequestID=null,this.camera=null,this.cameraInitialZ=-60,this.cameraOffsetZ=-20,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.cameraZoomDelay=2.3,this.portalSquare=new Ds,this.portalHexagon=new Ds,this.portalCircle=new Ds,this.portalActive=this.portalHexagon,this.portalOffsetZ=0,this.portalOffsetZActive=-14.5,this.portalOffsetX=12,this.mm.add("(max-width: 991px)",()=>{this.portalOffsetX=8}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{this.portalOffsetX=10}),this.mm.add("(min-width: 1920px)",()=>{this.portalOffsetX=12}),this.portalOffsetXSquarePortal=this.portalOffsetX,this.portalOffsetXSHexagonPortal=0,this.portalOffsetXCirclePortal=-this.portalOffsetX,this.params={strength:.8,radius:.95,threshold:0},this.init(e)}init(e){this.scene=new Ow,this.renderer=new sv({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight);const t={ACESFilmic:kh,Cineon:Bh,Linear:Oh,None:Qi,Reinhard:Fh};this.renderer.toneMapping=t.Cineon;const n=this.renderer.domElement;n.style.width="100%",n.style.height="100%",n.style.position="absolute",e.appendChild(n),this.camera=new li(60,e.clientWidth/e.clientHeight,1,300),this.camera.position.set(0,0,this.cameraInitialZ),this.camera.lookAt(new Y(0,0,0)),this.scene.add(this.camera);const i=new T1(this.scene,this.camera),s=new Ho(new Ne(e.clientWidth,e.clientHeight),this.params.strength,this.params.radius,this.params.threshold),o=new E1(this.renderer),a=new A1;o.addPass(i),o.addPass(s),o.addPass(a),this.initialState(this.scene),window.addEventListener("resize",()=>this.onWindowResize(this.renderer,o),!1),this.onWindowResize(this.renderer,o),this.animate(o)}animate(e){this.animationRequestID=requestAnimationFrame(()=>this.animate(e)),e.render()}initialState(e){const t=this.createSegment("square","#54EAAB");t.position.x=this.portalOffsetX,t.position.z=this.portalOffsetZ,this.portalSquare.add(t),e.add(this.portalSquare);const n=this.createSegment("hexagon","#5FB2FF");n.position.z=this.portalOffsetZ,this.portalHexagon.add(n),e.add(this.portalHexagon);const i=this.createSegment("circle","#CBA1FE");i.position.x=-this.portalOffsetX,i.position.z=this.portalOffsetZ,this.portalCircle.add(i),e.add(this.portalCircle)}bringForwardAnimation(){Tt.timeline().to(this.camera.position,{z:this.cameraOffsetZ,duration:.6,ease:"power4.out"},"a").to(this.portalActive.position,{duration:.6,ease:"power4.out",z:this.portalOffsetZActive},"a")}focus(e){const t={square:this.portalOffsetXSquarePortal,hexagon:this.portalOffsetXSHexagonPortal,circle:this.portalOffsetXCirclePortal}[e],n=this.portalActive;switch(e){case"square":this.portalActive=this.portalSquare;break;case"hexagon":this.portalActive=this.portalHexagon;break;case"circle":this.portalActive=this.portalCircle;break;default:console.log(`Unknown shape: ${e}`);return}Tt.defaults({duration:.9,ease:"power4.inOut"}),Tt.timeline().to(this.camera.position,{x:t},"a").to(n.position,{z:0},"a").to(this.portalActive.position,{z:this.portalOffsetZActive},"a")}start(){const e=Tt.timeline();for(let t=1;t<this.numberOfLayers;t++)e.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.portalActive.children[0],i=n.clone();i.position.z=n.position.z+t*this.layerSpacing,this.portalActive.add(i)}});return e.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{this.dispose()}},`-=${this.cameraZoomDelay}`),e}createSegment(e=this.shape,t=this.color){const n=this.createGeometry(e),i=new ov({color:t});return new Fw(n,i)}createGeometry(e){switch(e){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${e}`)}}createSquareGeometry(){const t=new kf;return t.moveTo(-2.4/2,-2.4/2),t.lineTo(2.4/2,-2.4/2),t.lineTo(2.4/2,2.4/2),t.lineTo(-2.4/2,2.4/2),t.lineTo(-2.4/2,-2.4/2),new Gf(t)}createCircleGeometry(){const n=new Ff(1.4,96);return new Jw(n)}createHexagonGeometry(){const n=new kf,i=0,s=0;n.moveTo(i+1.5*Math.cos(0),s+1.5*Math.sin(0));for(let a=1;a<=6;a+=1){const l=a*2*Math.PI/6;n.lineTo(i+1.5*Math.cos(l),s+1.5*Math.sin(l))}return new jn().setFromPoints(n.getPoints())}onWindowResize(e,t){let n=window.innerWidth,i=window.innerHeight;e.setSize(n,i);let s=n/i;this.camera.fov=this.adjustFOV(s),this.camera.aspect=s,this.camera.updateProjectionMatrix(),t.setSize(n,i)}adjustFOV(e){let t=15;return this.mm.add("(max-width: 991px)",()=>{t=45}),this.mm.add("(min-width: 992px) and (max-width: 1919px)",()=>{t=55}),this.mm.add("(min-width: 1920px)",()=>{t=66}),2*Math.atan(Math.tan(t*Math.PI/180/2)/e)*(180/Math.PI)}dispose(){cancelAnimationFrame(this.animationRequestID),this.disposeScene(this.scene),this.renderer.dispose(),this.renderer.domElement.remove()}disposeScene(e){if(e.children.length>0)for(let t=e.children.length-1;t>=0;t--)this.disposeScene(e.children[t]);if(e.geometry&&e.geometry.dispose(),e.material)if(e.material.length)for(let t=0;t<e.material.length;++t)e.material[t].dispose();else e.material.dispose();e.removeFromParent(),e=null}}class R1{constructor(){Pt(this,"initVideos",()=>{const e=document.querySelectorAll(".portal__video");if(!e.length){console.warn("No video containers found");return}e.forEach(t=>{const n=t.getAttribute("data-mp4"),i=t.getAttribute("data-webm");if(!n||!i){console.error("Video source attributes missing",t);return}const s=document.createElement("video");s.style.width="100%",s.style.height="100%",s.autoplay=!0,s.loop=!0,s.playsinline=!0,s.muted=!0;const o=document.createElement("source");o.src=n,o.type="video/mp4";const a=document.createElement("source");a.src=i,a.type="video/webm",s.appendChild(o),s.appendChild(a),t.appendChild(s),s.addEventListener("error",l=>{console.error("Error loading video:",l)})})});if(this.$container=document.getElementById("portalsContainer"),!this.$container){console.warn("No portal container found (#portalsContainer)");return}this.portalsWebGL=new C1(this.$container),this.portalTriggers={},this.portalScrollTrigger=null,this.activePortal=document.querySelector(".portal:not(.w-condition-invisible)"),Tt.set(this.activePortal,{autoAlpha:0}),this.initTriggers(),this.initVideos(),this.initWhenInView()}initWhenInView(){this.portalScrollTrigger=et.create({trigger:this.$container,once:!0,start:"top 20%",onEnter:()=>{this.portalsWebGL.bringForwardAnimation();const e=document.getElementById("portalTriggerHexagon");this.togglePortal(e,!0)}})}getPortalTL(){let e=Tt.timeline({paused:!0});return e.to(this.activePortal,{duration:.9,opacity:0,scale:.9,ease:"power4.out"},"a"),e.add(this.portalsWebGL.start(),"a"),e}togglePortal(e,t=!1){const n=e.getAttribute("data-shape"),i=e.getAttribute("data-content"),s=document.getElementById(i),o=s==null?void 0:s.querySelector(".portal__video");if(!n||!i){console.warn("Shape or content ID missing",e);return}switch(n){case"square":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="auto",this.portalTriggers.hexagon.style.right="0";break;case"hexagon":this.portalTriggers.square.style.display="block",this.portalTriggers.hexagon.style.display="none",this.portalTriggers.circle.style.display="block";break;case"circle":this.portalTriggers.square.style.display="none",this.portalTriggers.circle.style.display="none",this.portalTriggers.hexagon.style.display="block",this.portalTriggers.hexagon.style.left="0%";break;default:console.warn("Shape not found.")}t&&Tt.set(s,{autoAlpha:1}),this.portalsWebGL.focus(n);const a=this.activePortal.querySelector(".portal__video");t||Tt.fromTo(a,{opacity:1,scale:1},{opacity:0,scale:.98,duration:.6,ease:"power4.out"}),Tt.fromTo(o,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.9,delay:.6,ease:"power4.out"}),applyTextShuffle(i),setTimeout(()=>{if(!t){const l=document.querySelector(".portal:not(.w-condition-invisible)");l==null||l.classList.add("w-condition-invisible");const c=document.getElementById(i);c==null||c.classList.remove("w-condition-invisible"),this.activePortal=c}},150)}initTriggers(){this.portalTriggers.square=this.setupTrigger("portalTriggerSquare"),this.portalTriggers.hexagon=this.setupTrigger("portalTriggerHexagon"),this.portalTriggers.circle=this.setupTrigger("portalTriggerCircle")}setupTrigger(e){const t=document.getElementById(e);if(!t){console.warn("No portal trigger found with ID: "+e);return}return t.addEventListener("click",n=>this.togglePortal(n.target)),t.style.display=e==="portalTriggerHexagon"?"none":"block",t}}const P1=(r,e)=>{e.portalManager=new R1,setTimeout(()=>{et.refresh()},150)},L1=(r,e)=>{e.portalManager.portalScrollTrigger.kill()};/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cr,Us,Wf,Zc,Ka,Kc,Jc,Ja,Si="transform",Xf=Si+"Origin",wv,Yf=function(e){var t=e.ownerDocument||e;for(!(Si in e.style)&&("msTransform"in e.style)&&(Si="msTransform",Xf=Si+"Origin");t.parentNode&&(t=t.parentNode););if(Us=window,Jc=new ur,t){cr=t,Wf=t.documentElement,Zc=t.body,Ja=cr.createElementNS("http://www.w3.org/2000/svg","g"),Ja.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),wv=i.offsetParent!==n,s.removeChild(n))}return t},D1=function(e){for(var t,n;e&&e!==Zc;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Av=[],Cv=[],qf=function(){return Us.pageYOffset||cr.scrollTop||Wf.scrollTop||Zc.scrollTop||0},$f=function(){return Us.pageXOffset||cr.scrollLeft||Wf.scrollLeft||Zc.scrollLeft||0},Zf=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},N1=function r(e){if(Us.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Kf=function r(e,t){if(e.parentNode&&(cr||Yf(e))){var n=Zf(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=cr.createElementNS?cr.createElementNS(i.replace(/^https/,"http"),s):cr.createElement(s);return t&&(n?(Kc||(Kc=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Kc.appendChild(c)):(Ka||(Ka=r(e),Ka.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",Ka.appendChild(c))),c}throw"Need document and parent."},I1=function(e){for(var t=new ur,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Rv=function(e){var t=e.getCTM(),n;return t||(n=e.style[Si],e.style[Si]="none",e.appendChild(Ja),t=Ja.getCTM(),e.removeChild(Ja),n?e.style[Si]=n:e.style.removeProperty(Si.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Jc.clone()},U1=function(e,t){var n=Zf(e),i=e===n,s=n?Av:Cv,o=e.parentNode,a,l,c,h,f,d;if(e===Us)return e;if(s.length||s.push(Kf(e,1),Kf(e,2),Kf(e,3)),a=n?Kc:Ka,n)i?(c=Rv(e),h=-c.e/c.a,f=-c.f/c.d,l=Jc):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?I1(l):l.getItem(0).matrix:Jc,h=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new ur,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,wv)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Us.getComputedStyle(c)[Si]+"").length>4&&(h=c.offsetLeft,f=c.offsetTop,c=0);if(d=Us.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-h+"px",c[Si]=d[Si],c[Xf]=d[Xf],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Jf=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},ur=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Jf(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return Jf(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return Jf(this,h*i+d*o,h*s+d*a,f*i+u*o,f*s+u*a,l+g*i+_*o,c+g*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*h+d||0,i},r}();function an(r,e,t,n){if(!r||!r.parentNode||(cr||Yf(r)).documentElement===r)return new ur;var i=D1(r),s=Zf(r),o=s?Av:Cv,a=U1(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&N1(r),u=new ur((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:$f()),l.top+(d?0:qf()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function Pv(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O1(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ft,St,Qn,Mi,hr,jf,fr,Qf,ja,Vr,Lv,ed,Qa,td,el,Ei,tl,jc,Dv,nd,Qc=0,Nv=function(){return typeof window!="undefined"},Iv=function(){return ft||Nv()&&(ft=window.gsap)&&ft.registerPlugin&&ft},Wr=function(e){return typeof e=="function"},nl=function(e){return typeof e=="object"},Ti=function(e){return typeof e=="undefined"},eu=function(){return!1},il="transform",id="transformOrigin",Xr=function(e){return Math.round(e*1e4)/1e4},rl=Array.isArray,tu=function(e,t){var n=Qn.createElementNS?Qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qn.createElement(e);return n.style?n:Qn.createElement(e)},Uv=180/Math.PI,Os=1e20,F1=new ur,Yr=Date.now||function(){return new Date().getTime()},Fs=[],Go={},B1=0,k1=/^(?:a|input|textarea|button|select)$/i,Ov=0,Vo={},dr={},Fv=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},z1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bv=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},kv=function(){return Fs.forEach(function(e){return e()})},H1=function(e){Fs.push(e),Fs.length===1&&ft.ticker.add(kv)},zv=function(){return!Fs.length&&ft.ticker.remove(kv)},Hv=function(e){for(var t=Fs.length;t--;)Fs[t]===e&&Fs.splice(t,1);ft.to(zv,{overwrite:!0,delay:15,duration:0,onComplete:zv,data:"_draggable"})},G1=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$t=function(e,t,n,i){if(e.addEventListener){var s=Qa[t];i=i||(Lv?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Vt=function(e,t,n,i){if(e.removeEventListener){var s=Qa[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},ci=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},V1=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},W1=function r(e){td=e.touches&&Qc<e.touches.length,Vt(e.target,"touchend",r)},Gv=function(e){td=e.touches&&Qc<e.touches.length,$t(e.target,"touchend",W1)},Wo=function(e){return St.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Xo=function(e){return St.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},Vv=function r(e,t){$t(e,"scroll",t),Yo(e.parentNode)||r(e.parentNode,t)},Wv=function r(e,t){Vt(e,"scroll",t),Yo(e.parentNode)||r(e.parentNode,t)},Yo=function(e){return!e||e===Mi||e.nodeType===9||e===Qn.body||e===St||!e.nodeType||!e.parentNode},Xv=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,Yo(e)?Math.max(Mi[i],hr[i])-(St["inner"+n]||Mi[s]||hr[s]):e[i]-e[s])},rd=function r(e,t){var n=Xv(e,"x"),i=Xv(e,"y");Yo(e)?e=dr:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},sd=function(e,t,n){var i=e.style;!i||(Ti(i[t])&&(t=ja(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},sl=function(e){return St.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},Bs={},qo=function(e){if(e===St)return Bs.left=Bs.top=0,Bs.width=Bs.right=Mi.clientWidth||e.innerWidth||hr.clientWidth||0,Bs.height=Bs.bottom=(e.innerHeight||0)-20<Mi.clientHeight?Mi.clientHeight:e.innerHeight||hr.clientHeight||0,Bs;var t=e.ownerDocument||Qn,n=Ti(e.pageX)?!e.nodeType&&!Ti(e.left)&&!Ti(e.top)?e:Vr(e)[0].getBoundingClientRect():{left:e.pageX-Xo(t),top:e.pageY-Wo(t),right:e.pageX-Xo(t)+1,bottom:e.pageY-Wo(t)+1};return Ti(n.right)&&!Ti(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Ti(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(e,t,n){var i=e.vars,s=i[n],o=e._listeners[t],a;return Wr(s)&&(a=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},Yv=function(e,t){var n=Vr(e)[0],i,s,o;return!n.nodeType&&n!==St?Ti(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):X1(n,t)},ui={},X1=function(e,t){t=Vr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Qn,s,o,a,l,c,h,f,d,u,g,_,p,m;if(e===St)a=Wo(i),s=Xo(i),o=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===St||Ti(t))return e.getBoundingClientRect();s=a=0,n?(g=e.getBBox(),_=g.width,p=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,a=g.y||0,_=g.width,p=g.height),_||(m=sl(e),g=m.boxSizing==="border-box",_=(parseFloat(m.width)||e.clientWidth||0)+(g?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),p=(parseFloat(m.height)||e.clientHeight||0)+(g?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=_,l=p}return e===t?{left:s,top:a,width:o-s,height:l-a}:(c=an(t,!0).multiply(an(e)),h=c.apply({x:s,y:a}),f=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:s,y:l}),s=Math.min(h.x,f.x,d.x,u.x),a=Math.min(h.y,f.y,d.y,u.y),{left:s,top:a,width:Math.max(h.x,f.x,d.x,u.x)-s,height:Math.max(h.y,f.y,d.y,u.y)-a})},od=function(e,t,n,i,s,o){var a={},l,c,h;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],h=t.length,nl(t[0]))for(c=0;c<h;c++)l[c]=Fv(t[c],s);else for(c=0;c<h;c++)l[c]=t[c]*s;n+=1.1,i-=1.1}else Wr(t)?a.end=function(f){var d=t.call(e,f),u,g;if(s!==1)if(nl(d)){u={};for(g in d)u[g]=d[g]*s;d=u}else d*=s;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},Y1=function r(e){var t;return!e||!e.getAttribute||e===hr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(k1.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},nu=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:eu,ft.set(i,{lazy:!0,userSelect:t?"text":"none"})},q1=function r(e){if(sl(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},qv,ad,$1=function(e,t){e=ft.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,f=e.scrollHeight,d=0,u=0,g=0,_,p,m,S,v,y;qv&&t.force3D!==!1?(v="translate3d(",y="px,0px)"):il&&(v="translate(",y="px)"),this.scrollTop=function(T,b){if(!arguments.length)return-this.top();this.top(-T,b)},this.scrollLeft=function(T,b){if(!arguments.length)return-this.left();this.left(-T,b)},this.left=function(T,b){if(!arguments.length)return-(e.scrollLeft+a);var E=e.scrollLeft-c,R=a;if((E>2||E<-2)&&!b){c=e.scrollLeft,ft.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}T=-T,T<0?(a=T-.5|0,T=0):T>u?(a=T-u|0,T=u):a=0,(a||R)&&(this._skip||(i[il]=v+-a+"px,"+-o+y),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=T|0,c=e.scrollLeft},this.top=function(T,b){if(!arguments.length)return-(e.scrollTop+o);var E=e.scrollTop-l,R=o;if((E>2||E<-2)&&!b){l=e.scrollTop,ft.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}T=-T,T<0?(o=T-.5|0,T=0):T>g?(o=T-g|0,T=g):o=0,(o||R)&&(this._skip||(i[il]=v+-a+"px,"+-o+y)),e.scrollTop=T|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)S=s.nextSibling,e.appendChild(s),s=S;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)S=s.nextSibling,n.appendChild(s),s=S;e.appendChild(n),this.calibrate()}},this.calibrate=function(T){var b=e.clientWidth===_,E,R,N;l=e.scrollTop,c=e.scrollLeft,!(b&&e.clientHeight===p&&n.offsetHeight===m&&h===e.scrollWidth&&f===e.scrollHeight&&!T)&&((o||a)&&(R=this.left(),N=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),E=sl(e),(!b||T)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(E.paddingLeft)+(ad?parseFloat(E.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",ad&&(i.paddingBottom=E.paddingBottom),_=e.clientWidth,p=e.clientHeight,h=e.scrollWidth,f=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-p,m=n.offsetHeight,i.display="block",(R||N)&&(this.left(R),this.top(N)))},this.content=n,this.element=e,this._skip=!1,this.enable()},ld=function(e){if(Nv()&&document.body){var t=window&&window.navigator;St=window,Qn=document,Mi=Qn.documentElement,hr=Qn.body,jf=tu("div"),jc=!!window.PointerEvent,fr=tu("div"),fr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",tl=fr.style.cursor==="grab"?"grab":"move",el=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,ed="ontouchstart"in Mi&&"orientation"in St||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),ad=function(){var n=tu("div"),i=tu("div"),s=i.style,o=hr,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),Qa=function(n){for(var i=n.split(","),s=("onpointerdown"in jf?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in jf?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Mi.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Lv=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),$t(Qn,"touchcancel",eu),$t(St,"touchmove",eu),hr&&hr.addEventListener("touchstart",eu),$t(Qn,"contextmenu",function(){for(var n in Go)Go[n].isPressed&&Go[n].endDrag()}),ft=Qf=Iv()}ft?(Ei=ft.plugins.inertia,Dv=ft.core.context||function(){},ja=ft.utils.checkPrefix,il=ja(il),id=ja(id),Vr=ft.utils.toArray,nd=ft.core.getStyleSaver,qv=!!ja("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},Z1=function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),ol=function(r){O1(e,r);function e(t,n){var i;i=r.call(this)||this,Qf||ld(1),t=Vr(t)[0],i.styles=nd&&nd(t,"transform,left,top"),Ei||(Ei=ft.plugins.inertia),i.vars=n=Fv(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,ft.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),f=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),d=n.minimumMovement||2,u=Pv(i),g=Vr(n.trigger||n.handle||t),_={},p=0,m=!1,S=n.autoScrollMarginTop||40,v=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,T=n.autoScrollMarginLeft||40,b=n.clickableTest||Y1,E=0,R=t._gsap||ft.core.getCache(t),N=q1(t),x=function(I,ae){return parseFloat(R.get(t,I,ae))},A=t.ownerDocument||Qn,W,k,L,F,z,G,$,ne,P,re,ue,q,D,V,te,fe,le,me,Re,ve,B,Ae,ge,Ee,De,H,Le,Xe,st,C,M,ie,ce,de=function(I){return ci(I),I.stopImmediatePropagation&&I.stopImmediatePropagation(),!1},he=function se(I){if(u.autoScroll&&u.isDragging&&(m||le)){var ae=t,O=u.autoScroll*15,ee,oe,J,ye,pe,Pe,We,Oe;for(m=!1,dr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,dr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft,ye=u.pointerX-dr.scrollLeft,pe=u.pointerY-dr.scrollTop;ae&&!oe;)oe=Yo(ae.parentNode),ee=oe?dr:ae.parentNode,J=oe?{bottom:Math.max(Mi.clientHeight,St.innerHeight||0),right:Math.max(Mi.clientWidth,St.innerWidth||0),left:0,top:0}:ee.getBoundingClientRect(),Pe=We=0,f&&(Oe=ee._gsMaxScrollY-ee.scrollTop,Oe<0?We=Oe:pe>J.bottom-y&&Oe?(m=!0,We=Math.min(Oe,O*(1-Math.max(0,J.bottom-pe)/y)|0)):pe<J.top+S&&ee.scrollTop&&(m=!0,We=-Math.min(ee.scrollTop,O*(1-Math.max(0,pe-J.top)/S)|0)),We&&(ee.scrollTop+=We)),h&&(Oe=ee._gsMaxScrollX-ee.scrollLeft,Oe<0?Pe=Oe:ye>J.right-v&&Oe?(m=!0,Pe=Math.min(Oe,O*(1-Math.max(0,J.right-ye)/v)|0)):ye<J.left+T&&ee.scrollLeft&&(m=!0,Pe=-Math.min(ee.scrollLeft,O*(1-Math.max(0,ye-J.left)/T)|0)),Pe&&(ee.scrollLeft+=Pe)),oe&&(Pe||We)&&(St.scrollTo(ee.scrollLeft,ee.scrollTop),ot(u.pointerX+Pe,u.pointerY+We)),ae=ee}if(le){var Je=u.x,ct=u.y;a?(u.deltaX=Je-parseFloat(R.rotation),u.rotation=Je,R.rotation=Je+"deg",R.renderTransform(1,R)):k?(f&&(u.deltaY=ct-k.top(),k.top(ct)),h&&(u.deltaX=Je-k.left(),k.left(Je))):o?(f&&(u.deltaY=ct-parseFloat(R.y),R.y=ct+"px"),h&&(u.deltaX=Je-parseFloat(R.x),R.x=Je+"px"),R.renderTransform(1,R)):(f&&(u.deltaY=ct-parseFloat(t.style.top||0),t.style.top=ct+"px"),h&&(u.deltaX=Je-parseFloat(t.style.left||0),t.style.left=Je+"px")),ne&&!I&&!Xe&&(Xe=!0,kt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),f&&(u.y-=u.deltaY),se(!0)),Xe=!1)}le=!1},Ie=function(I,ae){var O=u.x,ee=u.y,oe,J;t._gsap||(R=ft.core.getCache(t)),R.uncache&&ft.getProperty(t,"x"),o?(u.x=parseFloat(R.x),u.y=parseFloat(R.y)):a?u.x=u.rotation=parseFloat(R.rotation):k?(u.y=k.top(),u.x=k.left()):(u.y=parseFloat(t.style.top||(J=sl(t))&&J.top)||0,u.x=parseFloat(t.style.left||(J||{}).left)||0),(Re||ve||B)&&!ae&&(u.isDragging||u.isThrowing)&&(B&&(Vo.x=u.x,Vo.y=u.y,oe=B(Vo),oe.x!==u.x&&(u.x=oe.x,le=!0),oe.y!==u.y&&(u.y=oe.y,le=!0)),Re&&(oe=Re(u.x),oe!==u.x&&(u.x=oe,a&&(u.rotation=oe),le=!0)),ve&&(oe=ve(u.y),oe!==u.y&&(u.y=oe),le=!0)),le&&he(!0),I||(u.deltaX=u.x-O,u.deltaY=u.y-ee,kt(u,"throwupdate","onThrowUpdate"))},He=function(I,ae,O,ee){return ae==null&&(ae=-Os),O==null&&(O=Os),Wr(I)?function(oe){var J=u.isPressed?1-u.edgeResistance:1;return I.call(u,(oe>O?O+(oe-O)*J:oe<ae?ae+(oe-ae)*J:oe)*ee)*ee}:rl(I)?function(oe){for(var J=I.length,ye=0,pe=Os,Pe,We;--J>-1;)Pe=I[J],We=Pe-oe,We<0&&(We=-We),We<pe&&Pe>=ae&&Pe<=O&&(ye=J,pe=We);return I[ye]}:isNaN(I)?function(oe){return oe}:function(){return I*ee}},xe=function(I,ae,O,ee,oe,J,ye){return J=J&&J<Os?J*J:Os,Wr(I)?function(pe){var Pe=u.isPressed?1-u.edgeResistance:1,We=pe.x,Oe=pe.y,Je,ct,dt;return pe.x=We=We>O?O+(We-O)*Pe:We<ae?ae+(We-ae)*Pe:We,pe.y=Oe=Oe>oe?oe+(Oe-oe)*Pe:Oe<ee?ee+(Oe-ee)*Pe:Oe,Je=I.call(u,pe),Je!==pe&&(pe.x=Je.x,pe.y=Je.y),ye!==1&&(pe.x*=ye,pe.y*=ye),J<Os&&(ct=pe.x-We,dt=pe.y-Oe,ct*ct+dt*dt>J&&(pe.x=We,pe.y=Oe)),pe}:rl(I)?function(pe){for(var Pe=I.length,We=0,Oe=Os,Je,ct,dt,it;--Pe>-1;)dt=I[Pe],Je=dt.x-pe.x,ct=dt.y-pe.y,it=Je*Je+ct*ct,it<Oe&&(We=Pe,Oe=it);return Oe<=J?I[We]:pe}:function(pe){return pe}},be=function(){var I,ae,O,ee;$=!1,k?(k.calibrate(),u.minX=ue=-k.maxScrollLeft(),u.minY=D=-k.maxScrollTop(),u.maxX=re=u.maxY=q=0,$=!0):n.bounds&&(I=Yv(n.bounds,t.parentNode),a?(u.minX=ue=I.left,u.maxX=re=I.left+I.width,u.minY=D=u.maxY=q=0):!Ti(n.bounds.maxX)||!Ti(n.bounds.maxY)?(I=n.bounds,u.minX=ue=I.minX,u.minY=D=I.minY,u.maxX=re=I.maxX,u.maxY=q=I.maxY):(ae=Yv(t,t.parentNode),u.minX=ue=Math.round(x(l,"px")+I.left-ae.left),u.minY=D=Math.round(x(c,"px")+I.top-ae.top),u.maxX=re=Math.round(ue+(I.width-ae.width)),u.maxY=q=Math.round(D+(I.height-ae.height))),ue>re&&(u.minX=re,u.maxX=re=ue,ue=u.minX),D>q&&(u.minY=q,u.maxY=q=D,D=u.minY),a&&(u.minRotation=ue,u.maxRotation=re),$=!0),n.liveSnap&&(O=n.liveSnap===!0?n.snap||{}:n.liveSnap,ee=rl(O)||Wr(O),a?(Re=He(ee?O:O.rotation,ue,re,1),ve=null):O.points?B=xe(ee?O:O.points,ue,re,D,q,O.radius,k?-1:1):(h&&(Re=He(ee?O:O.x||O.left||O.scrollLeft,ue,re,k?-1:1)),f&&(ve=He(ee?O:O.y||O.top||O.scrollTop,D,q,k?-1:1))))},Ze=function(){u.isThrowing=!1,kt(u,"throwcomplete","onThrowComplete")},_e=function(){u.isThrowing=!1},_t=function(I,ae){var O,ee,oe,J;I&&Ei?(I===!0&&(O=n.snap||n.liveSnap||{},ee=rl(O)||Wr(O),I={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?I.rotation=od(u,ee?O:O.rotation,re,ue,1,ae):(h&&(I[l]=od(u,ee?O:O.points||O.x||O.left,re,ue,k?-1:1,ae||u.lockedAxis==="x")),f&&(I[c]=od(u,ee?O:O.points||O.y||O.top,q,D,k?-1:1,ae||u.lockedAxis==="y")),(O.points||rl(O)&&nl(O[0]))&&(I.linkedProps=l+","+c,I.radius=O.radius))),u.isThrowing=!0,J=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,I.duration||(I.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?J===0||nl(I)&&I.resistance>1e3?0:.5:n.minDuration,overshoot:J}),u.tween=oe=ft.to(k||t,{inertia:I,data:"_draggable",inherit:!1,onComplete:Ze,onInterrupt:_e,onUpdate:n.fastMode?kt:Ie,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:O&&O.radius?[!1,!0]:[]}),n.fastMode||(k&&(k._skip=!0),oe.render(1e9,!0,!0),Ie(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),oe.play(0),Ie(!0,!0),k&&(k._skip=!1))):$&&u.applyBounds()},$e=function(I){var ae=Ee,O;Ee=an(t.parentNode,!0),I&&u.isPressed&&!Ee.equals(ae||new ur)&&(O=ae.inverse().apply({x:L,y:F}),Ee.apply(O,O),L=O.x,F=O.y),Ee.equals(F1)&&(Ee=null)},ke=function(){var I=1-u.edgeResistance,ae=N?Xo(A):0,O=N?Wo(A):0,ee,oe,J;o&&(R.x=x(l,"px")+"px",R.y=x(c,"px")+"px",R.renderTransform()),$e(!1),ui.x=u.pointerX-ae,ui.y=u.pointerY-O,Ee&&Ee.apply(ui,ui),L=ui.x,F=ui.y,le&&(ot(u.pointerX,u.pointerY),he(!0)),ie=an(t),k?(be(),G=k.top(),z=k.left()):(Ue()?(Ie(!0,!0),be()):u.applyBounds(),a?(ee=t.ownerSVGElement?[R.xOrigin-t.getBBox().x,R.yOrigin-t.getBBox().y]:(sl(t)[id]||"0 0").split(" "),fe=u.rotationOrigin=an(t).apply({x:parseFloat(ee[0])||0,y:parseFloat(ee[1])||0}),Ie(!0,!0),oe=u.pointerX-fe.x-ae,J=fe.y-u.pointerY+O,z=u.x,G=u.y=Math.atan2(J,oe)*Uv):(G=x(c,"px"),z=x(l,"px"))),$&&I&&(z>re?z=re+(z-re)/I:z<ue&&(z=ue-(ue-z)/I),a||(G>q?G=q+(G-q)/I:G<D&&(G=D-(D-G)/I))),u.startX=z=Xr(z),u.startY=G=Xr(G)},Ue=function(){return u.tween&&u.tween.isActive()},Fe=function(){fr.parentNode&&!Ue()&&!u.isDragging&&fr.parentNode.removeChild(fr)},Ke=function(I,ae){var O;if(!W||u.isPressed||!I||(I.type==="mousedown"||I.type==="pointerdown")&&!ae&&Yr()-E<30&&Qa[u.pointerEvent.type]){M&&I&&W&&ci(I);return}if(De=Ue(),ce=!1,u.pointerEvent=I,Qa[I.type]?(ge=~I.type.indexOf("touch")?I.currentTarget||I.target:A,$t(ge,"touchend",U),$t(ge,"touchmove",Te),$t(ge,"touchcancel",U),$t(A,"touchstart",Gv)):(ge=null,$t(A,"mousemove",Te)),Le=null,(!jc||!ge)&&($t(A,"mouseup",U),I&&I.target&&$t(I.target,"mouseup",U)),Ae=b.call(u,I.target)&&n.dragClickables===!1&&!ae,Ae){$t(I.target,"change",U),kt(u,"pressInit","onPressInit"),kt(u,"press","onPress"),nu(g,!0),M=!1;return}if(H=!ge||h===f||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2)?!1:h?"y":"x",M=!H&&!u.allowEventDefault,M&&(ci(I),$t(St,"touchforcechange",ci)),I.changedTouches?(I=V=I.changedTouches[0],te=I.identifier):I.pointerId?te=I.pointerId:V=te=null,Qc++,H1(he),F=u.pointerY=I.pageY,L=u.pointerX=I.pageX,kt(u,"pressInit","onPressInit"),(H||u.autoScroll)&&rd(t.parentNode),t.parentNode&&u.autoScroll&&!k&&!a&&t.parentNode._gsMaxScrollX&&!fr.parentNode&&!t.getBBox&&(fr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(fr)),ke(),u.tween&&u.tween.kill(),u.isThrowing=!1,ft.killTweensOf(k||t,_,!0),k&&ft.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!k&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,ne=!!(n.onDrag||u._listeners.drag),P=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(O=g.length;--O>-1;)ft.set(g[O],{cursor:n.activeCursor||n.cursor||(tl==="grab"?"grabbing":tl)});kt(u,"press","onPress")},Te=function(I){var ae=I,O,ee,oe,J,ye,pe;if(!W||td||!u.isPressed||!I){M&&I&&W&&ci(I);return}if(u.pointerEvent=I,O=I.changedTouches,O){if(I=O[0],I!==V&&I.identifier!==te){for(J=O.length;--J>-1&&(I=O[J]).identifier!==te&&I.target!==t;);if(J<0)return}}else if(I.pointerId&&te&&I.pointerId!==te)return;if(ge&&H&&!Le&&(ui.x=I.pageX-(N?Xo(A):0),ui.y=I.pageY-(N?Wo(A):0),Ee&&Ee.apply(ui,ui),ee=ui.x,oe=ui.y,ye=Math.abs(ee-L),pe=Math.abs(oe-F),(ye!==pe&&(ye>d||pe>d)||el&&H===Le)&&(Le=ye>pe&&h?"x":"y",H&&Le!==H&&$t(St,"touchforcechange",ci),u.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(u.lockedAxis=Le==="x"?"y":"x",Wr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,ae)),el&&H===Le))){U(ae);return}!u.allowEventDefault&&(!H||Le&&H!==Le)&&ae.cancelable!==!1?(ci(ae),M=!0):M&&(M=!1),u.autoScroll&&(m=!0),ot(I.pageX,I.pageY,P)},ot=function(I,ae,O){var ee=1-u.dragResistance,oe=1-u.edgeResistance,J=u.pointerX,ye=u.pointerY,pe=G,Pe=u.x,We=u.y,Oe=u.endX,Je=u.endY,ct=u.endRotation,dt=le,it,at,mt,w,X,K;u.pointerX=I,u.pointerY=ae,N&&(I-=Xo(A),ae-=Wo(A)),a?(w=Math.atan2(fe.y-ae,I-fe.x)*Uv,X=u.y-w,X>180?(G-=360,u.y=w):X<-180&&(G+=360,u.y=w),u.x!==z||Math.abs(G-w)>d?(u.y=w,mt=z+(G-w)*ee):mt=z):(Ee&&(K=I*Ee.a+ae*Ee.c+Ee.e,ae=I*Ee.b+ae*Ee.d+Ee.f,I=K),at=ae-F,it=I-L,at<d&&at>-d&&(at=0),it<d&&it>-d&&(it=0),(u.lockAxis||u.lockedAxis)&&(it||at)&&(K=u.lockedAxis,K||(u.lockedAxis=K=h&&Math.abs(it)>Math.abs(at)?"y":f?"x":null,K&&Wr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),K==="y"?at=0:K==="x"&&(it=0)),mt=Xr(z+it*ee),w=Xr(G+at*ee)),(Re||ve||B)&&(u.x!==mt||u.y!==w&&!a)&&(B&&(Vo.x=mt,Vo.y=w,K=B(Vo),mt=Xr(K.x),w=Xr(K.y)),Re&&(mt=Xr(Re(mt))),ve&&(w=Xr(ve(w)))),$&&(mt>re?mt=re+Math.round((mt-re)*oe):mt<ue&&(mt=ue+Math.round((mt-ue)*oe)),a||(w>q?w=Math.round(q+(w-q)*oe):w<D&&(w=Math.round(D+(w-D)*oe)))),(u.x!==mt||u.y!==w&&!a)&&(a?(u.endRotation=u.x=u.endX=mt,le=!0):(f&&(u.y=u.endY=w,le=!0),h&&(u.x=u.endX=mt,le=!0)),!O||kt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart")):(u.pointerX=J,u.pointerY=ye,G=pe,u.x=Pe,u.y=We,u.endX=Oe,u.endY=Je,u.endRotation=ct,le=dt))},U=function se(I,ae){if(!W||!u.isPressed||I&&te!=null&&!ae&&(I.pointerId&&I.pointerId!==te&&I.target!==t||I.changedTouches&&!V1(I.changedTouches,te))){M&&I&&W&&ci(I);return}u.isPressed=!1;var O=I,ee=u.isDragging,oe=u.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2),J=ft.delayedCall(.001,Fe),ye,pe,Pe,We,Oe;if(ge?(Vt(ge,"touchend",se),Vt(ge,"touchmove",Te),Vt(ge,"touchcancel",se),Vt(A,"touchstart",Gv)):Vt(A,"mousemove",Te),Vt(St,"touchforcechange",ci),(!jc||!ge)&&(Vt(A,"mouseup",se),I&&I.target&&Vt(I.target,"mouseup",se)),le=!1,ee&&(p=Ov=Yr(),u.isDragging=!1),Hv(he),Ae&&!oe){I&&(Vt(I.target,"change",se),u.pointerEvent=O),nu(g,!1),kt(u,"release","onRelease"),kt(u,"click","onClick"),Ae=!1;return}for(pe=g.length;--pe>-1;)sd(g[pe],"cursor",n.cursor||(n.cursor!==!1?tl:null));if(Qc--,I){if(ye=I.changedTouches,ye&&(I=ye[0],I!==V&&I.identifier!==te)){for(pe=ye.length;--pe>-1&&(I=ye[pe]).identifier!==te&&I.target!==t;);if(pe<0&&!ae)return}u.pointerEvent=O,u.pointerX=I.pageX,u.pointerY=I.pageY}return oe&&O?(ci(O),M=!0,kt(u,"release","onRelease")):O&&!ee?(M=!1,De&&(n.snap||n.bounds)&&_t(n.inertia||n.throwProps),kt(u,"release","onRelease"),(!el||O.type!=="touchmove")&&O.type.indexOf("cancel")===-1&&(kt(u,"click","onClick"),Yr()-E<300&&kt(u,"doubleclick","onDoubleClick"),We=O.target||t,E=Yr(),Oe=function(){E!==st&&u.enabled()&&!u.isPressed&&!O.defaultPrevented&&(We.click?We.click():A.createEvent&&(Pe=A.createEvent("MouseEvents"),Pe.initMouseEvent("click",!0,!0,St,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),We.dispatchEvent(Pe)))},!el&&!O.defaultPrevented&&ft.delayedCall(.05,Oe))):(_t(n.inertia||n.throwProps),!u.allowEventDefault&&O&&(n.dragClickables!==!1||!b.call(u,O.target))&&ee&&(!H||Le&&H===Le)&&O.cancelable!==!1?(M=!0,ci(O)):M=!1,kt(u,"release","onRelease")),Ue()&&J.duration(u.tween.duration()),ee&&kt(u,"dragend","onDragEnd"),!0},Me=function(I){if(I&&u.isDragging&&!k){var ae=I.target||t.parentNode,O=ae.scrollLeft-ae._gsScrollX,ee=ae.scrollTop-ae._gsScrollY;(O||ee)&&(Ee?(L-=O*Ee.a+ee*Ee.c,F-=ee*Ee.d+O*Ee.b):(L-=O,F-=ee),ae._gsScrollX+=O,ae._gsScrollY+=ee,ot(u.pointerX,u.pointerY))}},j=function(I){var ae=Yr(),O=ae-E<100,ee=ae-p<50,oe=O&&st===E,J=u.pointerEvent&&u.pointerEvent.defaultPrevented,ye=O&&C===E,pe=I.isTrusted||I.isTrusted==null&&O&&oe;if((oe||ee&&u.vars.suppressClickOnDrag!==!1)&&I.stopImmediatePropagation&&I.stopImmediatePropagation(),O&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!oe||pe&&!ye)){pe&&oe&&(C=E),st=E;return}(u.isPressed||ee||O)&&(!pe||!I.detail||!O||J)&&ci(I),!O&&!ee&&!ce&&(I&&I.target&&(u.pointerEvent=I),kt(u,"click","onClick"))},Se=function(I){return Ee?{x:I.x*Ee.a+I.y*Ee.c+Ee.e,y:I.x*Ee.b+I.y*Ee.d+Ee.f}:{x:I.x,y:I.y}};return me=e.get(t),me&&me.kill(),i.startDrag=function(se,I){var ae,O,ee,oe;Ke(se||u.pointerEvent,!0),I&&!u.hitTest(se||u.pointerEvent)&&(ae=qo(se||u.pointerEvent),O=qo(t),ee=Se({x:ae.left+ae.width/2,y:ae.top+ae.height/2}),oe=Se({x:O.left+O.width/2,y:O.top+O.height/2}),L-=ee.x-oe.x,F-=ee.y-oe.y),u.isDragging||(u.isDragging=ce=!0,kt(u,"dragstart","onDragStart"))},i.drag=Te,i.endDrag=function(se){return U(se||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(Yr()-p)/1e3},i.timeSinceClick=function(){return(Yr()-E)/1e3},i.hitTest=function(se,I){return e.hitTest(u.target,se,I)},i.getDirection=function(se,I){var ae=se==="velocity"&&Ei?se:nl(se)&&!a?"element":"start",O,ee,oe,J,ye,pe;return ae==="element"&&(ye=qo(u.target),pe=qo(se)),O=ae==="start"?u.x-z:ae==="velocity"?Ei.getVelocity(t,l):ye.left+ye.width/2-(pe.left+pe.width/2),a?O<0?"counter-clockwise":"clockwise":(I=I||2,ee=ae==="start"?u.y-G:ae==="velocity"?Ei.getVelocity(t,c):ye.top+ye.height/2-(pe.top+pe.height/2),oe=Math.abs(O/ee),J=oe<1/I?"":O<0?"left":"right",oe<I&&(J!==""&&(J+="-"),J+=ee<0?"up":"down"),J)},i.applyBounds=function(se,I){var ae,O,ee,oe,J,ye;if(se&&n.bounds!==se)return n.bounds=se,u.update(!0,I);if(Ie(!0),be(),$&&!Ue()){if(ae=u.x,O=u.y,ae>re?ae=re:ae<ue&&(ae=ue),O>q?O=q:O<D&&(O=D),(u.x!==ae||u.y!==O)&&(ee=!0,u.x=u.endX=ae,a?u.endRotation=ae:u.y=u.endY=O,le=!0,he(!0),u.autoScroll&&!u.isDragging))for(rd(t.parentNode),oe=t,dr.scrollTop=St.pageYOffset!=null?St.pageYOffset:A.documentElement.scrollTop!=null?A.documentElement.scrollTop:A.body.scrollTop,dr.scrollLeft=St.pageXOffset!=null?St.pageXOffset:A.documentElement.scrollLeft!=null?A.documentElement.scrollLeft:A.body.scrollLeft;oe&&!ye;)ye=Yo(oe.parentNode),J=ye?dr:oe.parentNode,f&&J.scrollTop>J._gsMaxScrollY&&(J.scrollTop=J._gsMaxScrollY),h&&J.scrollLeft>J._gsMaxScrollX&&(J.scrollLeft=J._gsMaxScrollX),oe=J;u.isThrowing&&(ee||u.endX>re||u.endX<ue||u.endY>q||u.endY<D)&&_t(n.inertia||n.throwProps,ee)}return u},i.update=function(se,I,ae){if(I&&u.isPressed){var O=an(t),ee=ie.apply({x:u.x-z,y:u.y-G}),oe=an(t.parentNode,!0);oe.apply({x:O.e-ee.x,y:O.f-ee.y},ee),u.x-=ee.x-oe.e,u.y-=ee.y-oe.f,he(!0),ke()}var J=u.x,ye=u.y;return $e(!I),se?u.applyBounds():(le&&ae&&he(!0),Ie(!0)),I&&(ot(u.pointerX,u.pointerY),le&&he(!0)),u.isPressed&&!I&&(h&&Math.abs(J-u.x)>.01||f&&Math.abs(ye-u.y)>.01&&!a)&&ke(),u.autoScroll&&(rd(t.parentNode,u.isDragging),m=u.isDragging,he(!0),Wv(t,Me),Vv(t,Me)),u},i.enable=function(se){var I={lazy:!0},ae,O,ee;if(n.cursor!==!1&&(I.cursor=n.cursor||tl),ft.utils.checkPrefix("touchCallout")&&(I.touchCallout="none"),se!=="soft"){for(Bv(g,h===f?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),O=g.length;--O>-1;)ee=g[O],jc||$t(ee,"mousedown",Ke),$t(ee,"touchstart",Ke),$t(ee,"click",j,!0),ft.set(ee,I),ee.getBBox&&ee.ownerSVGElement&&h!==f&&ft.set(ee.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||$t(ee,"contextmenu",de);nu(g,!1)}return Vv(t,Me),W=!0,Ei&&se!=="soft"&&Ei.track(k||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ae="d"+B1++,Go[ae]=u,k&&(k.enable(),k.element._gsDragID=ae),(n.bounds||a)&&ke(),n.bounds&&u.applyBounds(),u},i.disable=function(se){for(var I=u.isDragging,ae=g.length,O;--ae>-1;)sd(g[ae],"cursor",null);if(se!=="soft"){for(Bv(g,null),ae=g.length;--ae>-1;)O=g[ae],sd(O,"touchCallout",null),Vt(O,"mousedown",Ke),Vt(O,"touchstart",Ke),Vt(O,"click",j,!0),Vt(O,"contextmenu",de);nu(g,!0),ge&&(Vt(ge,"touchcancel",U),Vt(ge,"touchend",U),Vt(ge,"touchmove",Te)),Vt(A,"mouseup",U),Vt(A,"mousemove",Te)}return Wv(t,Me),W=!1,Ei&&se!=="soft"&&(Ei.untrack(k||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),k&&k.disable(),Hv(he),u.isDragging=u.isPressed=Ae=!1,I&&kt(u,"dragend","onDragEnd"),u},i.enabled=function(se,I){return arguments.length?se?u.enable(I):u.disable(I):W},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),ft.set(g,{clearProps:"userSelect"}),delete Go[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(k=i.scrollProxy=new $1(t,z1({onKill:function(){u.isPressed&&U(null)}},n)),t.style.overflowY=f&&!ed?"auto":"hidden",t.style.overflowX=h&&!ed?"auto":"hidden",t=k.content),a?_.rotation=1:(h&&(_[l]=1),f&&(_[c]=1)),R.force3D="force3D"in n?n.force3D:!0,Dv(Pv(i)),i.enable(),i}return e.register=function(n){ft=n,ld()},e.create=function(n,i){return Qf||ld(!0),Vr(n).map(function(s){return new e(s,i)})},e.get=function(n){return Go[(Vr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(Yr()-Ov)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var o=qo(n),a=qo(i),l=o.top,c=o.left,h=o.right,f=o.bottom,d=o.width,u=o.height,g=a.left>h||a.right<c||a.top>f||a.bottom<l,_,p,m;return g||!s?!g:(m=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(h,a.right)-_.left,_.height=Math.min(f,a.bottom)-_.top,_.width<0||_.height<0?!1:m?(s*=.01,p=_.width*_.height,p>=d*u*s||p>=a.width*a.height*s):_.width>s&&_.height>s)},e}(Z1);G1(ol.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),ol.zIndex=1e3,ol.version="3.12.5",Iv()&&ft.registerPlugin(ol);/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zi,cd,al,$v,$o,Zo,ud,Zv,Kv=function(){return zi||typeof window!="undefined"&&(zi=window.gsap)},hd={},K1=function(e){return Math.round(e*1e4)/1e4},fd=function(e){return Zv(e).id},ll=function(e){return hd[fd(typeof e=="string"?al(e)[0]:e)]},Jv=function(e){var t=$o,n;if(e-ud>=.05)for(ud=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},J1={deg:360,rad:Math.PI*2},dd=function(){zi=Kv(),zi&&(al=zi.utils.toArray,$v=zi.utils.getUnit,Zv=zi.core.getCache,Zo=zi.ticker,cd=1)},j1=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=J1[n||$v(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=Zo.time,i&&(this._next=i,i._prev=this)},cl=function(){function r(t,n){cd||dd(),this.target=al(t)[0],hd[fd(this.target)]=this,this._props={},n&&this.add(n)}r.register=function(n){zi=n,dd()};var e=r.prototype;return e.get=function(n,i){var s=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,a,l;return o=parseFloat(i?s.v1:s.g(s.t,s.p)),a=o-parseFloat(s.v2),l=s.rCap,l&&(a=a%l,a!==a%(l/2)&&(a=a<0?a+l:a-l)),K1(a/((i?s.t1:Zo.time)-s.t2))},e.getAll=function(){var n={},i=this._props,s;for(s in i)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||($o||(Zo.add(Jv),ud=Zo.time),$o=this._props[n]=new j1(this.target,n,i,$o))},e.remove=function(n){var i=this._props[n],s,o;i&&(s=i._prev,o=i._next,s&&(s._next=o),o?o._prev=s:$o===i&&(Zo.remove(Jv),$o=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete hd[fd(this.target)]},r.track=function(n,i,s){cd||dd();for(var o=[],a=al(n),l=i.split(","),c=(s||"").split(","),h=a.length,f,d;h--;){for(f=ll(a[h])||new r(a[h]),d=l.length;d--;)f.add(l[d],c[d]||c[0]);o.push(f)}return o},r.untrack=function(n,i){var s=(i||"").split(",");al(n).forEach(function(o){var a=ll(o);a&&(s.length?s.forEach(function(l){return a.remove(l)}):a.kill(1))})},r.isTracking=function(n,i){var s=ll(n);return s&&s.isTracking(i)},r.getVelocity=function(n,i){var s=ll(n);return!s||!s.isTracking(i)?console.warn("Not tracking velocity of "+i):s.get(i)},r}();cl.getByTarget=ll,Kv()&&zi.registerPlugin(cl);/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,jv,Qv,e0,pd,ul,t0,n0,i0,md,r0,hl,gd,s0,iu=cl.getByTarget,o0=function(){return Zt||typeof window!="undefined"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},Q1=function(e){return typeof e=="string"},fl=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},_d=function(e){return typeof e=="function"},eA=1,a0=Array.isArray,tA=function(e){return e},ks=1e10,l0=1/ks,c0=.05,nA=function(e){return Math.round(e*1e4)/1e4},iA=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},rA=function r(e){var t={},n,i;for(n in e)t[n]=qr(i=e[n])&&!a0(i)?r(i):i;return t},u0=function(e,t,n,i,s){var o=t.length,a=0,l=ks,c,h,f,d;if(qr(e)){for(;o--;){c=t[o],h=0;for(f in e)d=c[f]-e[f],h+=d*d;h<l&&(a=o,l=h)}if((s||ks)<ks&&s<Math.sqrt(l))return e}else for(;o--;)c=t[o],h=c-e,h<0&&(h=-h),h<l&&c>=i&&c<=n&&(a=o,l=h);return t[a]},h0=function(e,t,n,i,s,o,a){if(e.end==="auto")return e;var l=e.end,c,h;if(n=isNaN(n)?ks:n,i=isNaN(i)?-ks:i,qr(t)){if(c=t.calculated?t:(_d(l)?l(t,a):u0(t,l,n,i,o))||t,!t.calculated){for(h in c)t[h]=c[h];t.calculated=!0}c=c[s]}else c=_d(l)?l(t,a):a0(l)?u0(t,l,n,i,o):parseFloat(l);return c>n?c=n:c<i&&(c=i),{max:c,min:c,unitFactor:e.unitFactor}},ru=function(e,t,n){return isNaN(e[t])?n:+e[t]},vd=function(e,t){return t*c0*e/md},f0=function(e,t,n){return Math.abs((t-e)*md/n/c0)},d0={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},p0=function(e,t,n,i){if(t.linkedProps){var s=t.linkedProps.split(","),o={},a,l,c,h,f,d;for(a=0;a<s.length;a++)l=s[a],c=t[l],c&&(fl(c.velocity)?h=c.velocity:(f=f||iu(e),h=f&&f.isTracking(l)?f.get(l):0),d=Math.abs(h/ru(c,"resistance",i)),o[l]=parseFloat(n(e,l))+vd(h,d));return o}},sA=function(e,t,n,i,s,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),s===void 0&&(s=1),o===void 0&&(o=0),Q1(e)&&(e=e0(e)[0]),!e)return 0;var a=0,l=ks,c=t.inertia||t,h=i0(e).get,f=ru(c,"resistance",ul.resistance),d,u,g,_,p,m,S,v,y,T;T=p0(e,c,h,f);for(d in c)d0[d]||(u=c[d],qr(u)||(v=v||iu(e),v&&v.isTracking(d)?u=fl(u)?{velocity:u}:{velocity:v.get(d)}:(_=+u||0,g=Math.abs(_/f))),qr(u)&&(fl(u.velocity)?_=u.velocity:(v=v||iu(e),_=v&&v.isTracking(d)?v.get(d):0),g=r0(i,n,Math.abs(_/ru(u,"resistance",f))),p=parseFloat(h(e,d))||0,m=p+vd(_,g),"end"in u&&(u=h0(u,T&&d in T?T:m,u.max,u.min,d,c.radius,_),o&&(hl===t&&(hl=c=rA(t)),c[d]=iA(u,c[d],"end"))),"max"in u&&m>+u.max+l0?(y=u.unitFactor||ul.unitFactors[d]||1,S=p>u.max&&u.min!==u.max||_*y>-15&&_*y<45?i+(n-i)*.1:f0(p,u.max,_),S+s<l&&(l=S+s)):"min"in u&&m<+u.min-l0&&(y=u.unitFactor||ul.unitFactors[d]||1,S=p<u.min&&u.min!==u.max||_*y>-45&&_*y<15?i+(n-i)*.1:f0(p,u.min,_),S+s<l&&(l=S+s)),S>a&&(a=S)),g>a&&(a=g));return a>l&&(a=l),a>n?n:a<i?i:a},m0=function(){Zt=o0(),Zt&&(Qv=Zt.parseEase,e0=Zt.utils.toArray,t0=Zt.utils.getUnit,i0=Zt.core.getCache,r0=Zt.utils.clamp,gd=Zt.core.getStyleSaver,s0=Zt.core.reverting||function(){},pd=Qv("power3"),md=pd(.05),n0=Zt.core.PropTween,Zt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),ul=Zt.config(),Zt.registerPlugin(cl),jv=1)},xd={version:"3.12.5",name:"inertia",register:function(e){Zt=e,m0()},init:function(e,t,n,i,s){jv||m0();var o=iu(e);if(t==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=o.getAll()}this.styles=gd&&typeof e.style=="object"&&gd(e),this.target=e,this.tween=n,hl=t;var a=e._gsap,l=a.get,c=t.duration,h=qr(c),f=t.preventOvershoot||h&&c.overshoot===0,d=ru(t,"resistance",ul.resistance),u=fl(c)?c:sA(e,t,h&&c.max||10,h&&c.min||.2,h&&"overshoot"in c?+c.overshoot:f?0:1,!0),g,_,p,m,S,v,y,T,b;t=hl,hl=0,b=p0(e,t,l,d);for(g in t)d0[g]||(_=t[g],_d(_)&&(_=_(i,e,s)),fl(_)?S=_:qr(_)&&!isNaN(_.velocity)?S=+_.velocity:o&&o.isTracking(g)?S=o.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),v=vd(S,u),T=0,p=l(e,g),m=t0(p),p=parseFloat(p),qr(_)&&(y=p+v,"end"in _&&(_=h0(_,b&&g in b?b:y,_.max,_.min,g,t.radius,S)),"max"in _&&+_.max<y?f||_.preventOvershoot?v=_.max-p:T=_.max-p-v:"min"in _&&+_.min>y&&(f||_.preventOvershoot?v=_.min-p:T=_.min-p-v)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new n0(this._pt,e,g,p,0,tA,0,a.set(e,g,this)),this._pt.u=m||0,this._pt.c1=v,this._pt.c2=T);return n.duration(u),eA},render:function(e,t){var n=t._pt;if(e=pd(t.tween._time/t.tween._dur),e||!s0())for(;n;)n.set(n.t,n.p,nA(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return xd[r]=cl[r]}),o0()&&Zt.registerPlugin(xd);/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oA=1,Ko,gn,wt,dl,$r,pr,yd,g0=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Sd={},_0=180/Math.PI,aA=Math.PI/180,su={},v0={},ou={},Md=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},lA=Md("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),au=Md("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),pl=function(e){return Ko(e)[0]||console.warn("Element not found:",e)},Jo=function(e){return Math.round(e*1e4)/1e4||0},Ed=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},x0={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},y0={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},S0=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},jo=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},Td={},M0=function(e){var t=Td[e]=Md(e);return ou[e]=t.concat(au),t},cA=function(e){var t=e._gsap||gn.core.getCache(e);return t.gmCache===gn.ticker.frame?t.gMatrix:(t.gmCache=gn.ticker.frame,t.gMatrix=an(e,!0,!1,!0))},uA=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),o=t?-s*900:0;e;)o+=s,e=e.previousSibling;return i?o+r(i,t,n+1):o},lu=function(e,t,n){return e.forEach(function(i){return i.d=uA(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},ml=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,o,a;s--;)o=t[s],a=n[o]||n.getPropertyValue(o),i.push(a?o:v0[o]||(v0[o]=S0(o)),a);return n},cu=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},E0=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(cu)},bd="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),wd=function(e,t,n){var i=e.element,s=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,h=4,f,d,u;if(typeof t!="object"&&(t=e),wt&&n!==1)return wt._abs.push({t:i,b:e,a:e,sd:0}),wt._final.push(function(){return(e.cache.uncache=1)&&cu(e)}),i;for(d=l("display")==="none",(!e.isVisible||d)&&(d&&(ml(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=o=e.height||t.height),ml(e,bd),u=window.getComputedStyle(i);h--;)c[bd[h]]=u[bd[h]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new zs(i);else if(f=jo(e,su),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new ur(1,0,0,1,g.left+$f(),g.top+qf())}else f.matrix=an(i,!1,!1,!0);return f=Qo(f,e,!0),e.x=pr(f.x,.01),e.y=pr(f.y,.01),i},T0=function(e,t){return t!==!0&&(t=Ko(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},b0=function(e){return lu(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&wd(t.sd<0?t.b:t.a,t.b,1)})},hA=function(e,t){return t&&e.idLookup[Ad(t).id]||e.elementStates[0]},Ad=function(e,t,n,i){return e instanceof zs?e:e instanceof bi?hA(e,i):new zs(typeof e=="string"?pl(e)||console.warn(e+" not found"):e,t,n)},fA=function(e,t){for(var n=gn.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},w0=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},dA=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+oA++),t},A0=function(e){return e.map(function(t){return t.element})},C0=function(e,t,n){return e&&t.length&&n.add(e(A0(t),n,new bi(t,0,!0)),0)},Qo=function(e,t,n,i,s,o){var a=e.element,l=e.cache,c=e.parent,h=e.x,f=e.y,d=t.width,u=t.height,g=t.scaleX,_=t.scaleY,p=t.rotation,m=t.bounds,S=o&&yd&&yd(a,"transform"),v=e,y=t.matrix,T=y.e,b=y.f,E=e.bounds.width!==m.width||e.bounds.height!==m.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==p,R=!E&&e.simple&&t.simple&&!s,N,x,A,W,k,L,F;return R||!c?(g=_=1,p=N=0):(k=cA(c),L=k.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=Jo(Math.atan2(L.b,L.a)*_0),N=Jo(Math.atan2(L.c,L.d)*_0+p)%360,g=Math.sqrt(Math.pow(L.a,2)+Math.pow(L.b,2)),_=Math.sqrt(Math.pow(L.c,2)+Math.pow(L.d,2))*Math.cos(N*aA),s&&(s=Ko(s)[0],W=gn.getProperty(s),F=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),v={scaleX:W("scaleX"),scaleY:W("scaleY"),width:F?F.width:Math.ceil(parseFloat(W("width","px"))),height:F?F.height:parseFloat(W("height","px"))}),l.rotation=p+"deg",l.skewX=N+"deg"),n?(g*=d===v.width||!v.width?1:d/v.width,_*=u===v.height||!v.height?1:u/v.height,l.scaleX=g,l.scaleY=_):(d=pr(d*g/v.scaleX,0),u=pr(u*_/v.scaleY,0),a.style.width=d+"px",a.style.height=u+"px"),i&&w0(a,t.props),R||!c?(h+=T-e.matrix.e,f+=b-e.matrix.f):E||c!==t.parent?(l.renderTransform(1,l),L=an(s||a,!1,!1,!0),x=k.apply({x:L.e,y:L.f}),A=k.apply({x:T,y:b}),h+=A.x-x.x,f+=A.y-x.y):(k.e=k.f=0,A=k.apply({x:T-e.matrix.e,y:b-e.matrix.f}),h+=A.x,f+=A.y),h=pr(h,.02),f=pr(f,.02),o&&!(o instanceof zs)?S&&S.revert():(l.x=h+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=h,o.y=f,o.rotation=p,o.skewX=N,n?(o.scaleX=g,o.scaleY=_):(o.width=d,o.height=u)),o||l},Cd=function(e,t){return e instanceof bi?e:new bi(e,t)},R0=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Rd=[],Pd="width,height,overflowX,overflowY".split(","),uu,P0=function(e){if(e!==uu){var t=$r.style,n=$r.clientWidth===window.outerWidth,i=$r.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)Rd[s]=t[Pd[s]];n&&(t.width=$r.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=$r.clientHeight+"px",t.overflowX="hidden"),uu=e}else if(uu){for(;s--;)Rd[s]?t[Pd[s]]=Rd[s]:t.removeProperty(S0(Pd[s]));uu=e}}},Ld=function(e,t,n,i){e instanceof bi&&t instanceof bi||console.warn("Not a valid state object."),n=n||{};var s=n,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,h=s.absoluteOnLeave,f=s.custom,d=s.delay,u=s.paused,g=s.repeat,_=s.repeatDelay,p=s.yoyo,m=s.toggleClass,S=s.nested,v=s.zIndex,y=s.scale,T=s.fade,b=s.stagger,E=s.spin,R=s.prune,N=("props"in n?n:e).props,x=jo(n,x0),A=gn.timeline({delay:d,paused:u,repeat:g,repeatDelay:_,yoyo:p,data:"isFlip"}),W=x,k=[],L=[],F=[],z=[],G=E===!0?1:E||0,$=typeof E=="function"?E:function(){return G},ne=e.interrupted||t.interrupted,P=A[i!==1?"to":"from"],re,ue,q,D,V,te,fe,le,me,Re,ve,B,Ae,ge;for(ue in t.idLookup)ve=t.alt[ue]?R0(t,e,ue):t.idLookup[ue],V=ve.element,Re=e.idLookup[ue],e.alt[ue]&&V===Re.element&&(e.alt[ue].isVisible||!ve.isVisible)&&(Re=e.alt[ue]),Re?(te={t:V,b:Re,a:ve,sd:Re.element===V?0:ve.isVisible?1:-1},F.push(te),te.sd&&(te.sd<0&&(te.b=ve,te.a=Re),ne&&ml(te.b,N?ou[N]:au),T&&F.push(te.swap={t:Re.element,b:te.b,a:te.a,sd:-te.sd,swap:te})),V._flip=Re.element._flip=wt?wt.timeline:A):ve.isVisible&&(F.push({t:V,b:jo(ve,{isVisible:1}),a:ve,sd:0,entering:1}),V._flip=wt?wt.timeline:A);if(N&&(Td[N]||M0(N)).forEach(function(H){return x[H]=function(Le){return F[Le].a.props[H]}}),F.finalStates=me=[],B=function(){for(lu(F),P0(!0),D=0;D<F.length;D++)te=F[D],Ae=te.a,ge=te.b,R&&!Ae.isDifferent(ge)&&!te.entering?F.splice(D--,1):(V=te.t,S&&!(te.sd<0)&&D&&(Ae.matrix=an(V,!1,!1,!0)),ge.isVisible&&Ae.isVisible?(te.sd<0?(fe=new zs(V,N,e.simple),Qo(fe,Ae,y,0,0,fe),fe.matrix=an(V,!1,!1,!0),fe.css=te.b.css,te.a=Ae=fe,T&&(V.style.opacity=ne?ge.opacity:Ae.opacity),b&&z.push(V)):te.sd>0&&T&&(V.style.opacity=ne?Ae.opacity-ge.opacity:"0"),Qo(Ae,ge,y,N)):ge.isVisible!==Ae.isVisible&&(ge.isVisible?Ae.isVisible||(ge.css=Ae.css,L.push(ge),F.splice(D--,1),c&&S&&Qo(Ae,ge,y,N)):(Ae.isVisible&&k.push(Ae),F.splice(D--,1))),y||(V.style.maxWidth=Math.max(Ae.width,ge.width)+"px",V.style.maxHeight=Math.max(Ae.height,ge.height)+"px",V.style.minWidth=Math.min(Ae.width,ge.width)+"px",V.style.minHeight=Math.min(Ae.height,ge.height)+"px"),S&&m&&V.classList.add(m)),me.push(Ae);var Le;if(m&&(Le=me.map(function(C){return C.element}),S&&Le.forEach(function(C){return C.classList.remove(m)})),P0(!1),y?(x.scaleX=function(C){return F[C].a.scaleX},x.scaleY=function(C){return F[C].a.scaleY}):(x.width=function(C){return F[C].a.width+"px"},x.height=function(C){return F[C].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(C){return F[C].a.x+"px"},x.y=function(C){return F[C].a.y+"px"},x.rotation=function(C){return F[C].a.rotation+(E?$(C,le[C],le)*360:0)},x.skewX=function(C){return F[C].a.skewX},le=F.map(function(C){return C.t}),(v||v===0)&&(x.modifiers={zIndex:function(){return v}},x.zIndex=v,x.immediateRender=n.immediateRender!==!1),T&&(x.opacity=function(C){return F[C].sd<0?0:F[C].sd>0?F[C].a.opacity:"+=0"}),z.length){b=gn.utils.distribute(b);var Xe=le.slice(z.length);x.stagger=function(C,M){return b(~z.indexOf(M)?le.indexOf(F[C].swap.t):C,M,Xe)}}if(lA.forEach(function(C){return n[C]&&A.eventCallback(C,n[C],n[C+"Params"])}),f&&le.length){W=jo(x,x0),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ue in f)re=jo(f[ue],y0),re[ue]=x[ue],!("duration"in re)&&"duration"in x&&(re.duration=x.duration),re.stagger=x.stagger,P.call(A,le,re,0),delete W[ue]}(le.length||L.length||k.length)&&(m&&A.add(function(){return Ed(Le,m,A._zTime<0?"remove":"add")},0)&&!u&&Ed(Le,m,"add"),le.length&&P.call(A,le,W,0)),C0(a,k,A),C0(l,L,A);var st=wt&&wt.timeline;st&&(st.add(A,0),wt._final.push(function(){return E0(F,!o)})),q=A.duration(),A.call(function(){var C=A.time()>=q;C&&!st&&E0(F,!o),m&&Ed(Le,m,C?"remove":"add")})},h&&(c=F.filter(function(H){return!H.sd&&!H.a.isVisible&&H.b.isVisible}).map(function(H){return H.a.element})),wt){var Ee;c&&(Ee=wt._abs).push.apply(Ee,T0(F,c)),wt._run.push(B)}else c&&b0(T0(F,c)),B();var De=wt?wt.timeline:A;return De.revert=function(){return Dd(De,1,1)},De},pA=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},Dd=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(pA(e),t<2&&e.progress(1),e.kill()),!0},hu=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,o;s--;)o=i[s],t[o.id]?n[o.id]=o:t[o.id]=o},bi=function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=A0(t),this.elementStates=t,hu(this);else{this.targets=Ko(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);wt&&!s&&wt._kill.push(this),this.update(s||!!wt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new zs(s,i.props,i.simple)}),hu(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,hu(this),this},e.fit=function(n,i,s){for(var o=lu(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,h;l<o.length;l++)c=o[l],s&&(c.matrix=an(c.element,!1,!1,!0)),h=a[c.id],h&&Qo(c,h,i,!0,0,c),c.matrix=an(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||su;return(i in s?s:s.props||su)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),hu(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],h=[],f=n.alt,d=this.alt,u=function(R,N,x){return(R.isVisible!==N.isVisible?R.isVisible?l:c:R.isVisible?a:o).push(x)&&h.push(x)},g=function(R,N,x){return h.indexOf(x)<0&&u(R,N,x)},_,p,m,S,v,y,T,b;for(m in i)v=f[m],y=d[m],_=v?R0(n,this,m):i[m],S=_.element,p=s[m],y?(b=p.isVisible||!y.isVisible&&S===p.element?p:y,T=v&&!_.isVisible&&!v.isVisible&&b.element===v.element?v:_,T.isVisible&&b.isVisible&&T.element!==b.element?((T.isDifferent(b)?a:o).push(T.element,b.element),h.push(T.element,b.element)):u(T,b,T.element),v&&T.element===v.element&&(v=i[m]),g(T.element!==p.element&&v?v:T,p,p.element),g(v&&v.element===y.element?v:T,y,y.element),v&&g(v,y.element===v.element?y:p,v.element)):(p?p.isDifferent(_)?u(_,p,S):o.push(S):l.push(S),v&&g(v,p,v.element));for(m in s)i[m]||(c.push(s[m].element),d[m]&&c.push(d[m].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=ou[this.props]||au,i=this.elementStates.length;i--;)ml(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=Dd(a,n?0:1);n&&l&&s.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&s.push(a)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(pl(n))]},e.makeAbsolute=function(){return lu(this.elementStates.slice(0),!0,!0).map(wd)},r}(),zs=function(){function r(t,n,i){this.element=t,this.update(n,i)}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var s=this,o=s.element,a=gn.getProperty(o),l=gn.core.getCache(o),c=o.getBoundingClientRect(),h=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new ur(1,0,0,1,c.left+$f(),c.top+qf()):an(o,!1,!1,!0);s.getProp=a,s.element=o,s.id=dA(o),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x"),s.y=a("y"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=h?h.width:pr(a("width","px"),.04),s.height=h?h.height:pr(a("height","px"),.04),n&&fA(s,Td[n]||M0(n)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Rv(o).inverse(),s.simple=i||Jo(f.a)===1&&!Jo(f.b)&&!Jo(f.c)&&Jo(f.d)===1,s.uncache=0},r}(),mA=function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r}(),gA=function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new bi,this.timeline=gn.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new mA(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=wt,o=dl;return wt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,dl=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),dl=o,wt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=wt,s=this.timeline,o=this.actions.length,a,l;for(wt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var h=c.vars.onEnter,f=c.vars.onLeave,d=c.targets,u,g;d&&d.length&&(h||f)&&(u=new bi,c.states.forEach(function(_){return u.add(_)}),g=u.compare(fu.getState(d)),g.enter.length&&h&&h(g.enter),g.leave.length&&f&&f(g.leave))}),b0(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),g0(n,"onComplete"))}),wt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return g0(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),s.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==wt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Sd[this.id]},r}(),fu=function(){function r(){}return r.getState=function(t,n){var i=Cd(t,n);return dl&&dl.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),Ld(t,Cd(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return Ld(t,Cd(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return Ld(t,n,i)},r.fit=function(t,n,i){var s=i?jo(i,y0):{},o=i||s,a=o.absolute,l=o.scale,c=o.getVars,h=o.props,f=o.runBackwards,d=o.onComplete,u=o.simple,g=i&&i.fitChild&&pl(i.fitChild),_=Ad(n,h,u,t),p=Ad(t,0,u,_),m=h?ou[h]:au,S=gn.context();return h&&w0(s,_.props),ml(p,m),f&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){cu(p),d&&d.apply(this,arguments)}),a&&wd(p,_),s=Qo(p,_,l||g,h,g,s.duration||c?s:0),S&&!c&&S.add(function(){return function(){return cu(p)}}),c?s:s.duration?gn.to(p.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof bi?t:new bi(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),Sd[t]||(Sd[t]=new gA(t))},r.killFlipsOf=function(t,n){(t instanceof bi?t.targets:Ko(t)).forEach(function(i){return i&&Dd(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(pl(t)||su)._flip},r.getElementState=function(t,n){return new zs(pl(t),n)},r.convertCoordinates=function(t,n,i){var s=an(n,!0,!0).multiply(an(t));return i?s.apply(i):s},r.register=function(t){if($r=typeof document!="undefined"&&document.body,$r){gn=t,Yf($r),Ko=gn.utils.toArray,yd=gn.core.getStyleSaver;var n=gn.utils.snap(.1);pr=function(s,o){return n(parseFloat(s)+o)}}},r}();fu.version="3.12.5",typeof window!="undefined"&&window.gsap&&window.gsap.registerPlugin(fu);class _A{constructor(){if(this.$container=document.querySelector(".odyssey-story"),!this.$container){console.warn("No odyssey story container found (.odyssey-story)");return}this.init()}init(){const e=this.$container.querySelector(".odyssey-story__scale-container"),t=this.$container.querySelector(".scale-indicator"),n=e.querySelectorAll(".scale-item"),i=Tt.timeline({paused:!0}),s=this.$container.querySelectorAll(".odyssey-story__scene");i.from(n,{x:"-=8",scaleX:0,opacity:0,duration:.1,stagger:.01,ease:"power4.out"},"a"),i.from(t,{x:"+=8",opacity:0,duration:.2,ease:"power4.out"},"a"),et.create({trigger:this.$container,start:"top top",end:"bottom bottom",scrub:!0,pin:e,onUpdate:o=>{Tt.set(t,{top:`${o.progress*100}%`})},onEnter:()=>{i.play()},onLeaveBack:()=>{i.reverse()}}),s.forEach(o=>{const a=o.querySelector(".odyssey-story__lead-container"),l=a.querySelector(".odyssey-story__lead");et.create({trigger:o,start:"top top",end:"bottom bottom",pin:a,toggleActions:"play none none none",onEnter:()=>{l.classList.contains("done")||(applyExactTextShuffle(l,"in"),setTimeout(()=>{l.style.opacity=1,l.classList.add("done")},400))}})})}}const vA=r=>{new _A},xA=r=>{};class yA{constructor(e){this.globalState={portalManager:null,lenisManager:e},this.barba=Hy,this.init()}init(){this.barba.init({transitions:[{name:"leave-home",from:{namespace:["home"]},to:{namespace:["odyssey"]},leave:e=>(console.log("TRANS: leave home: Load spline already"),Gy(e,this.globalState)),afterLeave:e=>(console.log("TRANS: clean up home"),L1(e,this.globalState)),enter:e=>(console.log("TRANS: enter odyssey"),Xy(e,this.globalState))},{name:"enter-home",from:{namespace:["odyssey"]},to:{namespace:["home"]},leave:Wy,afterLeave:e=>(console.log("TRANS: clean up odyssey"),xA(e,this.globalState)),enter:Vy}],views:[{namespace:"home",beforeEnter:e=>(console.log("VIEW: home"),P1(e,this.globalState))},{namespace:"odyssey",beforeEnter:e=>(console.log("VIEW: odyssey"),vA(e,this.globalState))}]})}}var uC="",hC="",SA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L0={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(SA,function(){var t=document,n=t.createTextNode.bind(t);function i(q,D,V){q.style.setProperty(D,V)}function s(q,D){return q.appendChild(D)}function o(q,D,V,te){var fe=t.createElement("span");return D&&(fe.className=D),V&&(!te&&fe.setAttribute("data-"+D,V),fe.textContent=V),q&&s(q,fe)||fe}function a(q,D){return q.getAttribute("data-"+D)}function l(q,D){return!q||q.length==0?[]:q.nodeName?[q]:[].slice.call(q[0].nodeName?q:(D||t).querySelectorAll(q))}function c(q){for(var D=[];q--;)D[q]=[];return D}function h(q,D){q&&q.some(D)}function f(q){return function(D){return q[D]}}function d(q,D,V){var te="--"+D,fe=te+"-index";h(V,function(le,me){Array.isArray(le)?h(le,function(Re){i(Re,fe,me)}):i(le,fe,me)}),i(q,te+"-total",V.length)}var u={};function g(q,D,V){var te=V.indexOf(q);if(te==-1)V.unshift(q),h(u[q].depends,function(le){g(le,q,V)});else{var fe=V.indexOf(D);V.splice(te,1),V.splice(fe,0,q)}return V}function _(q,D,V,te){return{by:q,depends:D,key:V,split:te}}function p(q){return g(q,0,[]).map(f(u))}function m(q){u[q.by]=q}function S(q,D,V,te,fe){q.normalize();var le=[],me=document.createDocumentFragment();te&&le.push(q.previousSibling);var Re=[];return l(q.childNodes).some(function(ve){if(ve.tagName&&!ve.hasChildNodes()){Re.push(ve);return}if(ve.childNodes&&ve.childNodes.length){Re.push(ve),le.push.apply(le,S(ve,D,V,te,fe));return}var B=ve.wholeText||"",Ae=B.trim();Ae.length&&(B[0]===" "&&Re.push(n(" ")),h(Ae.split(V),function(ge,Ee){Ee&&fe&&Re.push(o(me,"whitespace"," ",fe));var De=o(me,D,ge);le.push(De),Re.push(De)}),B[B.length-1]===" "&&Re.push(n(" ")))}),h(Re,function(ve){s(me,ve)}),q.innerHTML="",s(q,me),le}var v=0;function y(q,D){for(var V in D)q[V]=D[V];return q}var T="words",b=_(T,v,"word",function(q){return S(q,"word",/\s+/,0,1)}),E="chars",R=_(E,[T],"char",function(q,D,V){var te=[];return h(V[T],function(fe,le){te.push.apply(te,S(fe,"char","",D.whitespace&&le))}),te});function N(q){q=q||{};var D=q.key;return l(q.target||"[data-splitting]").map(function(V){var te=V["\u{1F34C}"];if(!q.force&&te)return te;te=V["\u{1F34C}"]={el:V};var fe=p(q.by||a(V,"splitting")||E),le=y({},q);return h(fe,function(me){if(me.split){var Re=me.by,ve=(D?"-"+D:"")+me.key,B=me.split(V,le,te);ve&&d(V,ve,B),te[Re]=B,V.classList.add(Re)}}),V.classList.add("splitting"),te})}function x(q){q=q||{};var D=q.target=o();return D.innerHTML=q.content,N(q),D.outerHTML}N.html=x,N.add=m;function A(q,D,V){var te=l(D.matching||q.children,q),fe={};return h(te,function(le){var me=Math.round(le[V]);(fe[me]||(fe[me]=[])).push(le)}),Object.keys(fe).map(Number).sort(W).map(f(fe))}function W(q,D){return q-D}var k=_("lines",[T],"line",function(q,D,V){return A(q,{matching:V[T]},"offsetTop")}),L=_("items",v,"item",function(q,D){return l(D.matching||q.children,q)}),F=_("rows",v,"row",function(q,D){return A(q,D,"offsetTop")}),z=_("cols",v,"col",function(q,D){return A(q,D,"offsetLeft")}),G=_("grid",["rows","cols"]),$="layout",ne=_($,v,v,function(q,D){var V=D.rows=+(D.rows||a(q,"rows")||1),te=D.columns=+(D.columns||a(q,"columns")||1);if(D.image=D.image||a(q,"image")||q.currentSrc||q.src,D.image){var fe=l("img",q)[0];D.image=fe&&(fe.currentSrc||fe.src)}D.image&&i(q,"background-image","url("+D.image+")");for(var le=V*te,me=[],Re=o(v,"cell-grid");le--;){var ve=o(Re,"cell");o(ve,"cell-inner"),me.push(ve)}return s(q,Re),me}),P=_("cellRows",[$],"row",function(q,D,V){var te=D.rows,fe=c(te);return h(V[$],function(le,me,Re){fe[Math.floor(me/(Re.length/te))].push(le)}),fe}),re=_("cellColumns",[$],"col",function(q,D,V){var te=D.columns,fe=c(te);return h(V[$],function(le,me){fe[me%te].push(le)}),fe}),ue=_("cells",["cellRows","cellColumns"],"cell",function(q,D,V){return V[$]});return m(b),m(R),m(k),m(L),m(F),m(z),m(G),m(ne),m(P),m(re),m(ue),N})})(L0);var D0=L0.exports;class MA{constructor(e){Pt(this,"position",-1);Pt(this,"cells",[]);this.position=e}}class EA{constructor(e,{position:t,previousCellPosition:n}={}){Pt(this,"DOM",{el:null});Pt(this,"position",-1);Pt(this,"previousCellPosition",-1);Pt(this,"original");Pt(this,"state");Pt(this,"color");Pt(this,"originalColor");Pt(this,"cache");this.DOM.el=e,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=t,this.previousCellPosition=n}set(e){this.state=e,this.DOM.el.innerHTML=this.state}}class N0{constructor(e){Pt(this,"DOM",{el:null});Pt(this,"lines",[]);Pt(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);Pt(this,"totalChars",0);this.DOM.el=e;const t=D0({target:this.DOM.el,by:"lines"});t.forEach(n=>D0({target:n.words}));for(const[n,i]of t[0].lines.entries()){const s=new MA(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new EA(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;s.cells=o,this.lines.push(s),this.totalChars+=a}}clearCells(){for(const e of this.lines)for(const t of e.cells)t.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}animate(){let t=0;const n=(i,s,o=0)=>{s.cache={state:s.state,color:s.color},o===8-1?(s.set(s.original),s.color=s.originalColor,s.DOM.el.style.color=s.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(s.set(this.getRandomChar()),s.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color),++o,o<8&&setTimeout(()=>n(i,s,o),this.randomNumber(30,110))};for(const i of this.lines)for(const s of i.cells)setTimeout(()=>n(i,s),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}class TA{constructor(){this.init()}init(){window.applyTextShuffle=function(e){const t=document.getElementById(e);t?new N0(t).trigger():console.warn('Element with ID "'+e+'" was not found.')},window.applyExactTextShuffle=function(e,t="swap"){const n=new N0(e);e?n.trigger():console.warn('Element with ID "'+e+'" was not found.')}}}/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn,I0,mr,Hi,Zr,U0,O0,du,F0=function(){return typeof window!="undefined"},B0=function(){return Rn||F0()&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},k0=function(e){return typeof e=="string"},z0=function(e){return typeof e=="function"},gl=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===mr||e===Hi||e===Zr?Math.max(Hi[i],Zr[i])-(mr["inner"+n]||Hi[s]||Zr[s]):e[i]-e["offset"+n]},_l=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===mr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Hi[n]!=null?Hi:Zr),function(){return e[n]}},bA=function(e,t,n,i){if(z0(e)&&(e=e(t,n,i)),typeof e!="object")return k0(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&z0(e[o])?e[o](t,n,i):e[o];return s},H0=function(e,t){if(e=U0(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===mr||t===Zr,s=i?{top:Hi.clientTop-(mr.pageYOffset||Hi.scrollTop||Zr.scrollTop||0),left:Hi.clientLeft-(mr.pageXOffset||Hi.scrollLeft||Zr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=_l(t,"x")(),o.y+=_l(t,"y")()),o},G0=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:k0(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?gl(t,n)-s:Math.min(gl(t,n),H0(e,t)[n]-s)},V0=function(){Rn=B0(),F0()&&Rn&&typeof document!="undefined"&&document.body&&(mr=window,Zr=document.body,Hi=document.documentElement,U0=Rn.utils.toArray,Rn.config({autoKillThreshold:7}),O0=Rn.config(),I0=1)},vl={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Rn=e,V0()},init:function(e,t,n,i,s){I0||V0();var o=this,a=Rn.getProperty(e,"scrollSnapType");o.isWin=e===mr,o.target=e,o.tween=n,t=bA(t,i,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=_l(e,"x"),o.getY=_l(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),du||(du=Rn.core.globals().ScrollTrigger),Rn.getProperty(e,"scrollBehavior")==="smooth"&&Rn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,G0(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,G0(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,f=t.snapInline,d,u,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,u=c||!t.skipY?t.getY():l,g=u-l,_=d-a,p=O0.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<gl(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&u<gl(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?mr.scrollTo(t.skipX?d:t.x,t.skipY?u:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(u=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=u+1,i.scrollLeft=d+1,i.scrollTop=u,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,du&&du.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};vl.max=gl,vl.getOffset=H0,vl.buildGetter=_l,B0()&&Rn.registerPlugin(vl),document.addEventListener("DOMContentLoaded",function(){Tt.registerPlugin(et,ol,xd,fu,vl),new TA;const r=new fy,e=new oy;new ay(r,e),document.body.getAttribute("data-barba")==="wrapper"?new yA(r):console.log("barba html structure is not set")})});
