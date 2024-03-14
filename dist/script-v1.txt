var sx=Object.defineProperty;var ax=(En,Se,kn)=>Se in En?sx(En,Se,{enumerable:!0,configurable:!0,writable:!0,value:kn}):En[Se]=kn;var Ie=(En,Se,kn)=>(ax(En,typeof Se!="symbol"?Se+"":Se,kn),kn);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}
`;document.head.appendChild(__vite_style__);(function(En){typeof define=="function"&&define.amd?define(En):En()})(function(){"use strict";var En="";function Se(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kn(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var We={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zi={duration:.5,overwrite:!1,delay:0},fa,Je=1e8,Zt=1/Je,da=Math.PI*2,ef=da/4,nf=0,al=Math.sqrt,rf=Math.cos,sf=Math.sin,me=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},pa=function(t){return typeof t=="undefined"},bn=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},ol=function(){return typeof window!="undefined"},as=function(t){return _e(t)||me(t)},ll=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Te=Array.isArray,ma=/(?:-?\.?\d|\.)+/gi,cl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_a=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ul=/[+-]=-?[.\d]+/,hl=/[^,'"\[\]\s]+/gi,af=/[\d.+\-=]+(?:e[-+]\d*)*/i,re,mn,ga,va,Xe={},os={},fl,dl=function(t){return(os=ki(t,Xe))&&gn},xa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ls=function(t,e){return!e&&console.warn(t)},pl=function(t,e){return t&&(Xe[t]=e)&&os&&(os[t]=e)||Xe},Cr=function(){return 0},Ma={},Hn=[],Sa={},ml,Ye={},ya={},_l=30,cs=[],Ea="",Ta=function(t){var e=t[0],n,i;if(bn(e)||_e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=cs.length;i--&&!cs[i].targetTest(e););n=cs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vl(t[i],n)))||t.splice(i,1);return t},hi=function(t){return t._gsap||Ta(en(t))[0]._gsap},gl=function(t,e,n){return(n=t[e])&&_e(n)?t[e]():pa(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},he=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},of=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},us=function(){var t=Hn.length,e=Hn.slice(0),n,i;for(Sa={},Hn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vl=function(t,e,n,i){Hn.length&&us(),t.render(e,n,i),Hn.length&&us()},xl=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(hl).length<2?e:me(t)?t.trim():t},Ml=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},lf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ki=function(t,e){for(var n in e)t[n]=e[n];return t},Sl=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},hs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Rr=function(t){var e=t.parent||re,n=t.keyframes?lf(Te(t.keyframes)):Qe;if(Oe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},cf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},uf=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},fs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},An=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},fi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},hf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ff=function r(t){return!t||t._ts&&r(t.parent)},yl=function(t){return t._repeat?Hi(t._tTime,t=t.duration()+t._rDelay)*t:0},Hi=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ds=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ps=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Zt)||0))},El=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ps(t),n._dirty||fi(n,t)),t},Tl=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ds(t.rawTime(),e),(!e._dur||Lr(0,e.totalDuration(),n)-e._tTime>Zt)&&e.render(n,!0)),fi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Zt}},_n=function(t,e,n,i){return e.parent&&An(e),e._start=be((Tn(n)?n:n||t!==re?tn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),uf(t,e,"_first","_last",t._sort?"_start":0),ba(e)||(t._recent=e),i||Tl(t,e),t},bl=function(t,e){return(Xe.ScrollTrigger||xa("scrollTrigger",e))&&Xe.ScrollTrigger.create(e,t)},Al=function(t,e,n,i){if(If(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ml!==rn.frame)return Hn.push(t),t._lazy=[e,i],1},df=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ba=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},pf=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&df(t)&&!(!t._initted&&ba(t))||(t._ts<0||t._dp._ts<0)&&!ba(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Lr(0,t._tDur,e),u=Hi(l,a),t._yoyo&&u&1&&(o=1-o),u!==Hi(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||i||t._zTime===Zt||!e&&t._zTime){if(!t._initted&&Al(t,e,i,n))return;for(h=t._zTime,t._zTime=e||(n?Zt:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&An(t,1),n||(nn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},mf=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Vi=function(t,e,n,i){var s=t._repeat,o=be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:be(o*(s+1)+t._rDelay*s):o,a>0&&!i?El(t,t._tTime=t._tDur*a):t.parent&&ps(t),n||fi(t.parent,t),t},wl=function(t){return t instanceof ze?fi(t):Vi(t,t._dur)},_f={_start:0,endTime:Cr,totalDuration:Cr},tn=function r(t,e,n){var i=t.labels,s=t._recent||_f,o=t.duration()>=Je?s.endTime(!1):t._dur,a,l,c;return me(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Te(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Pr=function(t,e,n){var i=Tn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;o.immediateRender=Oe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ge(e[0],o,e[s+1])},Vn=function(t,e){return t||t===0?e(t):e},Lr=function(t,e,n){return n<t?t:n>e?e:n},Be=function(t,e){return!me(t)||!(e=af.exec(t))?"":t.substr(e.index+e[0].length)},gf=function(t,e,n){return Vn(n,function(i){return Lr(t,e,i)})},Aa=[].slice,Cl=function(t,e){return t&&bn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bn(t[0]))&&!t.nodeType&&t!==mn},vf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return me(i)&&!e||Cl(i,1)?(s=n).push.apply(s,en(i)):n.push(i)})||n},en=function(t,e,n){return me(t)&&!n&&(ga||!Xi())?Aa.call((e||va).querySelectorAll(t),0):Te(t)?vf(t,n):Cl(t)?Aa.call(t,0):t?[t]:[]},xf=function(t){return t=en(t)[0]||ls("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return en(e,n.querySelectorAll?n:n===t?ls("Invalid scope")||va.createElement("div"):t)}},Rl=function(t){return t.sort(function(){return .5-Math.random()})},Pl=function(t){if(_e(t))return t;var e=bn(t)?t:{each:t},n=di(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return me(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,p=o[g],m,S,v,y,A,b,E,U,I;if(!p){if(I=e.grid==="auto"?0:(e.grid||[1,Je])[1],!I){for(E=-Je;E<(E=_[I++].getBoundingClientRect().left)&&I<g;);I--}for(p=o[g]=[],m=l?Math.min(I,g)*u-.5:i%I,S=I===Je?0:l?g*h/I-.5:i/I|0,E=0,U=Je,b=0;b<g;b++)v=b%I-m,y=S-(b/I|0),p[b]=A=c?Math.abs(c==="y"?y:v):al(v*v+y*y),A>E&&(E=A),A<U&&(U=A);i==="random"&&Rl(p),p.max=E-U,p.min=U,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(I>g?g-1:c?c==="y"?g/I:I:Math.max(I,g/I))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Be(e.amount||e.each)||0,n=n&&g<0?Gl(n):n}return g=(p[f]-p.min)/p.max||0,be(p.b+(n?n(g):g)*p.v)+p.u}},wa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/t)*t*e;return(i-i%1)/e+(Tn(n)?0:Be(n))}},Ll=function(t,e){var n=Te(t),i,s;return!n&&bn(t)&&(i=n=t.radius||Je,t.values?(t=en(t.values),(s=!Tn(t[0]))&&(i*=i)):t=wa(t.increment)),Vn(e,n?_e(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Je,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Tn(o)?u:u+Be(o)}:wa(t))},Dl=function(t,e,n,i){return Vn(Te(t)?!e:n===!0?!!(n=0):!i,function(){return Te(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Mf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Sf=function(t,e){return function(n){return t(parseFloat(n))+(e||Be(n))}},yf=function(t,e,n){return Nl(t,e,0,1,n)},Ul=function(t,e,n){return Vn(n,function(i){return t[~~e(i)]})},Ef=function r(t,e,n){var i=e-t;return Te(t)?Ul(t,r(0,t.length),e):Vn(n,function(s){return(i+(s-t)%i)%i+t})},Tf=function r(t,e,n){var i=e-t,s=i*2;return Te(t)?Ul(t,r(0,t.length-1),e):Vn(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Dr=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?hl:ma),n+=t.substr(e,i-e)+Dl(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Nl=function(t,e,n,i,s){var o=e-t,a=i-n;return Vn(s,function(l){return n+((l-t)/o*a||0)})},bf=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=me(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Te(t)&&!Te(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=ki(Te(t)?[]:{},t));if(!u){for(l in e)La.call(a,t,l,"get",e[l]);s=function(_){return Na(_,a)||(o?t.p:t)}}}return Vn(n,s)},Il=function(t,e,n){var i=t.labels,s=Je,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},nn=function(t,e,n){var i=t.vars,s=i[e],o,a;if(!!s)return o=i[e+"Params"],a=i.callbackScope||t,n&&Hn.length&&us(),o?s.apply(a,o):s.call(a)},Ur=function(t){return An(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&nn(t,"onInterrupt"),t},Wi,Af=function(t){t=!t.name&&t.default||t;var e=t.name,n=_e(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Cr,render:Na,add:La,kill:Hf,modifier:kf,rawVars:0},o={targetTest:0,get:0,getSetter:Ua,aliases:{},register:0};if(Xi(),t!==i){if(Ye[e])return;Qe(i,Qe(hs(t,s),o)),ki(i.prototype,ki(s,hs(t,o))),Ye[i.prop=e]=i,t.targetTest&&(cs.push(i),Ma[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}pl(e,i),t.register&&t.register(gn,i,Ge)},Kt=255,Nr={aqua:[0,Kt,Kt],lime:[0,Kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kt],navy:[0,0,128],white:[Kt,Kt,Kt],olive:[128,128,0],yellow:[Kt,Kt,0],orange:[Kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kt,0,0],pink:[Kt,192,203],cyan:[0,Kt,Kt],transparent:[Kt,Kt,Kt,0]},Ca=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Kt+.5|0},Ol=function(t,e,n){var i=t?Tn(t)?[t>>16,t>>8&Kt,t&Kt]:0:Nr.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nr[t])i=Nr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Kt,i&Kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Kt,t&Kt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(ma),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ca(l+1/3,s,o),i[1]=Ca(l,s,o),i[2]=Ca(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(cl),n&&i.length<4&&(i[3]=1),i}else i=t.match(ma)||Nr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Kt,o=i[1]/Kt,a=i[2]/Kt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fl=function(t){var e=[],n=[],i=-1;return t.split(Wn).forEach(function(s){var o=s.match(Gi)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Bl=function(t,e,n){var i="",s=(t+i).match(Wn),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Ol(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fl(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Wn,"1").split(Gi),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Wn),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Wn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),wf=/hsl[a]?\(/,zl=function(t){var e=t.join(" "),n;if(Wn.lastIndex=0,Wn.test(e))return n=wf.test(e),t[1]=Bl(t[1],n),t[0]=Bl(t[0],n,Fl(t[1])),!0},ms,rn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,S=p===!0,v,y,A,b;if(m>t&&(n+=m-e),i+=m,A=i-n,v=A-o,(v>0||S)&&(b=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=v+(v>=s?4:s-v),y=1),S||(l=c(g)),y)for(d=0;d<a.length;d++)a[d](A,f,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){fl&&(!ga&&ol()&&(mn=ga=window,va=mn.document||{},Xe.gsap=gn,(mn.gsapVersions||(mn.gsapVersions=[])).push(gn.version),dl(os||mn.GreenSockGlobals||!mn.gsap&&mn||{}),u=mn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ms=1,_(2))},sleep:function(){(u?mn.cancelAnimationFrame:clearTimeout)(l),ms=0,c=Cr},lagSmoothing:function(p,m){t=p||1/Zt,e=Math.min(m,t,0)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p){a.indexOf(p)<0&&a.push(p),Xi()},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Xi=function(){return!ms&&rn.wake()},Wt={},Cf=/^[\d.\-M][\d.\-,\s]/,Rf=/["']/g,Pf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Rf,"").trim():+c,i=l.substr(a+1).trim();return e},Lf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Df=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Pf(e[1])]:Lf(t).split(",").map(xl)):Wt._CE&&Cf.test(t)?Wt._CE("",t):n},Gl=function(t){return function(e){return 1-t(1-e)}},kl=function r(t,e){for(var n=t._first,i;n;)n instanceof ze?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},di=function(t,e){return t&&(_e(t)?t:Wt[t]||Df(t))||e},pi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Fe(t,function(a){Wt[a]=Xe[a]=s,Wt[o=a.toLowerCase()]=n;for(var l in s)Wt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[a+"."+l]=s[l]}),s},Hl=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ra=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/da*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*sf((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Hl(a);return s=da/s,l.config=function(c,u){return r(t,c,u)},l},Pa=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Hl(n);return i.config=function(s){return r(t,s)},i};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;pi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})}),Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn,pi("Elastic",Ra("in"),Ra("out"),Ra()),function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};pi("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),pi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),pi("Circ",function(r){return-(al(1-r*r)-1)}),pi("Sine",function(r){return r===1?1:-rf(r*ef)+1}),pi("Back",Pa("in"),Pa("out"),Pa()),Wt.SteppedEase=Wt.steps=Xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Zt;return function(a){return((i*Lr(0,o,a)|0)+s)*n}}},zi.ease=Wt["quad.out"],Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ea+=r+","+r+"Params,"});var Vl=function(t,e){this.id=nf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:gl,this.set=e?e.getSetter:Ua},Ir=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vi(this,+e.duration,1,1),this.data=e.data,ms||rn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Vi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xi(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||Tl(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vl(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hi(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Zt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ds(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Zt?0:this._rts,hf(this.totalTime(Lr(-this._delay,this._tDur,i),!0)),ps(this),this},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_n(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Oe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ds(i.rawTime(n),this):this._tTime:this._tTime},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(tn(this,n),Oe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Oe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Zt)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=_e(n)?n:Ml,a=function(){var c=i.then;i.then=null,_e(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ur(this)},r}();Qe(Ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Zt,_prom:0,_ps:!1,_rts:1});var ze=function(r){kn(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Oe(n.sortChildren),re&&_n(n.parent||re,Se(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&bl(Se(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Pr(0,arguments,this),this},e.from=function(i,s,o){return Pr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Pr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Rr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ge(i,s,tn(this,o),1),this},e.call=function(i,s,o){return _n(this,ge.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ge(i,o,tn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Rr(o).immediateRender=Oe(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Rr(a).immediateRender=Oe(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:be(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,v,y,A,b,E;if(this!==re&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=be(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),A=Hi(this._tTime,p),!a&&this._tTime&&A!==g&&(A=g),b&&g&1&&(f=c-f,E=1),g!==A&&!this._lock){var U=b&&A&1,I=U===(b&&g&1);if(g<A&&(U=!U),a=U?0:c,this._lock=1,this.render(a||(E?0:be(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;kl(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=mf(this,be(a),be(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&(nn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-Zt);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=M?-Zt:Zt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Zt)._zTime=f>=a?1:-1,this._ts))return this._start=y,ps(this),this.render(i,s,o);this._onUpdate&&!s&&nn(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&An(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(nn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Tn(s)||(s=tn(this,s,i)),!(i instanceof Ir)){if(Te(i))return i.forEach(function(a){return o.add(a,s)}),this;if(me(i))return this.addLabel(i,s);if(_e(i))i=ge.delayedCall(0,i);else return this}return this!==i?_n(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Je);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ge?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return me(i)?this.removeLabel(i):_e(i)?this.killTweensOf(i):(fs(this,i),i===this._recent&&(this._recent=this._last),fi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=tn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ge.delayedCall(0,s||Cr,o);return a.data="isPause",this._hasPause=1,_n(this,a,tn(this,i))},e.removePause=function(i){var s=this._first;for(i=tn(this,i);s;)s._start===i&&s.data==="isPause"&&An(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xn!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=en(i),l=this._first,c=Tn(s),u;l;)l instanceof ge?of(l._targets,a)&&(c?(!Xn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=tn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=ge.to(o,Qe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Zt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Vi(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qe({startAt:{time:tn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Il(this,tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Il(this,tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Zt)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return fi(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return r.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Je,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vi(o,o===re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(re._ts&&(vl(re,ds(i,re)),ml=rn.frame),rn.frame>=_l){_l+=We.autoSleep||120;var s=re._first;if((!s||!s._ts)&&We.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},t}(Ir);Qe(ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var Uf=function(t,e,n,i,s,o,a){var l=new Ge(this._pt,t,e,0,1,Zl,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Dr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(_a)||[];h=_a.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?parseFloat(_.substr(2))*(_.charAt(0)==="-"?-1:1):parseFloat(_)-p,m:d&&d<4?Math.round:0},c=_a.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ul.test(i)||m)&&(l.e=0),this._pt=l,l},La=function(t,e,n,i,s,o,a,l,c){_e(i)&&(i=i(s||0,t,o));var u=t[e],h=n!=="get"?n:_e(u)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=_e(u)?c?Bf:ql:Da,d;if(me(i)&&(~i.indexOf("random(")&&(i=Dr(i)),i.charAt(1)==="="&&(d=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(Be(h)||0),(d||d===0)&&(i=d))),h!==i)return!isNaN(h*i)&&i!==""?(d=new Ge(this._pt,t,e,+h||0,i-(h||0),typeof u=="boolean"?Gf:$l,0,f),c&&(d.fp=c),a&&d.modifier(a,this,t),this._pt=d):(!u&&!(e in t)&&xa(e,i),Uf.call(this,t,e,h,i,f,l||We.stringFilter,c))},Nf=function(t,e,n,i,s){if(_e(t)&&(t=Or(t,s,e,n,i)),!bn(t)||t.style&&t.nodeType||Te(t)||ll(t))return me(t)?Or(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Or(t[a],s,e,n,i);return o},Wl=function(t,e,n,i,s,o){var a,l,c,u;if(Ye[t]&&(a=new Ye[t]).init(s,a.rawVars?e[t]:Nf(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ge(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Wi))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Xn,If=function r(t,e){var n=t.vars,i=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,_=n.autoRevert,g=t._dur,p=t._startAt,m=t._targets,S=t.parent,v=S&&S.data==="nested"?S.parent._targets:m,y=t._overwrite==="auto"&&!fa,A=t.timeline,b,E,U,I,M,w,J,K,N,X,B,q,Y;if(A&&(!d||!i)&&(i="none"),t._ease=di(i,zi.ease),t._yEase=f?Gl(di(f===!0?i:f,zi.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!A&&!!n.runBackwards,!A||d&&!n.stagger){if(K=m[0]?hi(m[0]).harness:0,q=K&&n[K.prop],b=hs(n,Ma),p&&An(p.render(-1,!0)),s)if(An(t._startAt=ge.set(m,Qe({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:Oe(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),e<0&&!o&&!_&&t._startAt.render(-1,!0),o){if(e>0&&!_&&(t._startAt=0),g&&e<=0){e&&(t._zTime=e);return}}else _===!1&&(t._startAt=0);else if(h&&g){if(p)!_&&(t._startAt=0);else if(e&&(o=!1),U=Qe({overwrite:!1,data:"isFromStart",lazy:o&&Oe(a),immediateRender:o,stagger:0,parent:S},b),q&&(U[K.prop]=q),An(t._startAt=ge.set(m,U)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!o)r(t._startAt,Zt);else if(!e)return}for(t._pt=0,a=g&&Oe(a)||a&&!g,E=0;E<m.length;E++){if(M=m[E],J=M._gsap||Ta(m)[E]._gsap,t._ptLookup[E]=X={},Sa[J.id]&&Hn.length&&us(),B=v===m?E:v.indexOf(M),K&&(N=new K).init(M,q||b,t,B,v)!==!1&&(t._pt=I=new Ge(t._pt,M,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Z){X[Z]=I}),N.priority&&(w=1)),!K||q)for(U in b)Ye[U]&&(N=Wl(U,b,t,B,M,v))?N.priority&&(w=1):X[U]=I=La.call(t,M,U,"get",b[U],B,v,0,n.stringFilter);t._op&&t._op[E]&&t.kill(M,t._op[E]),y&&t._pt&&(Xn=t,re.killTweensOf(M,X,t.globalTime(e)),Y=!t.parent,Xn=0),t._pt&&a&&(Sa[J.id]=1)}w&&Kl(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&A.render(Je,!0,!0)},Of=function(t,e){var n=t[0]?hi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ki({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ff=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Te(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Or=function(t,e,n,i,s){return _e(t)?t.call(e,n,i,s):me(t)&&~t.indexOf("random(")?Dr(t):t},Xl=Ea+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Yl={};Fe(Xl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yl[r]=1});var ge=function(r){kn(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Rr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||re,v=(Te(n)||ll(n)?Tn(n[0]):"length"in i)?[n]:en(n),y,A,b,E,U,I,M,w;if(a._targets=v.length?Ta(v):ls("GSAP target "+n+" not found. https://greensock.com",!We.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||as(c)||as(u)){if(i=a.vars,y=a.timeline=new ze({data:"nested",defaults:g||{}}),y.kill(),y.parent=y._dp=Se(a),y._start=0,f||as(c)||as(u)){if(E=v.length,M=f&&Pl(f),bn(f))for(U in f)~Xl.indexOf(U)&&(w||(w={}),w[U]=f[U]);for(A=0;A<E;A++)b=hs(i,Yl),b.stagger=0,m&&(b.yoyoEase=m),w&&ki(b,w),I=v[A],b.duration=+Or(c,Se(a),A,I,v),b.delay=(+Or(u,Se(a),A,I,v)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),y.to(I,b,M?M(A,I,v):0),y._ease=Wt.none;y.duration()?c=u=0:a.timeline=0}else if(_){Rr(Qe(y.vars.defaults,{ease:"none"})),y._ease=di(_.ease||i.ease||"none");var J=0,K,N,X;if(Te(_))_.forEach(function(B){return y.to(v,B,">")});else{b={};for(U in _)U==="ease"||U==="easeEach"||Ff(U,_[U],b,_.easeEach);for(U in b)for(K=b[U].sort(function(B,q){return B.t-q.t}),J=0,A=0;A<K.length;A++)N=K[A],X={ease:N.e,duration:(N.t-(A?K[A-1].t:0))/100*c},X[U]=N.v,y.to(v,X,J),J+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!fa&&(Xn=Se(a),re.killTweensOf(v),Xn=0),_n(S,Se(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===be(S._time)&&Oe(h)&&ff(Se(a))&&S.data!=="nested")&&(a._tTime=-Zt,a.render(Math.max(0,-u))),p&&bl(Se(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i>l-Zt&&i>=0?l:i<Zt?0:i,h,f,d,_,g,p,m,S,v;if(!c)pf(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(h=be(u%_),u===l?(d=this._repeat,h=c):(d=~~(u/_),d&&d===u/_&&(h=c,d--),h>c&&(h=c)),p=this._yoyo&&d&1,p&&(v=this._yEase,h=c-h),g=Hi(this._tTime,_),h===a&&!o&&this._initted)return this;d!==g&&(S&&this._yEase&&kl(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(be(_*d),!0).invalidate()._lock=0))}if(!this._initted){if(Al(this,i<0?i:h,o,s))return this._tTime=0,this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(v||this._ease)(h/c),this._from&&(this.ratio=m=1-m),h&&!a&&!s&&(nn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(m,f.d),f=f._next;S&&S.render(i<0?i:!h&&p?-Zt:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),nn(this,"onUpdate")),this._repeat&&d!==g&&this.vars.onRepeat&&!s&&this.parent&&nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&An(this,1),!s&&!(i<0&&!a)&&(u||a)&&(nn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ur(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xn&&Xn.vars.overwrite!==!0)._first||Ur(this),this.parent&&o!==this.timeline.totalDuration()&&Vi(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?en(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&cf(a,l))return s==="all"&&(this._pt=0),Ur(this);for(h=this._op=this._op||[],s!=="all"&&(me(s)&&(g={},Fe(s,function(S){return g[S]=1}),s=g),s=Of(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&fs(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ur(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Pr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Pr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return re.killTweensOf(i,s,o)},t}(Ir);Qe(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Fe("staggerTo,staggerFrom,staggerFromTo",function(r){ge[r]=function(){var t=new ze,e=Aa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Da=function(t,e,n){return t[e]=n},ql=function(t,e,n){return t[e](n)},Bf=function(t,e,n,i){return t[e](i.fp,n)},zf=function(t,e,n){return t.setAttribute(e,n)},Ua=function(t,e){return _e(t[e])?ql:pa(t[e])&&t.setAttribute?zf:Da},$l=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Gf=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zl=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Na=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},kf=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Hf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?fs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Vf=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Kl=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ge=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$l,this.d=l||this,this.set=c||Da,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Vf,this.m=n,this.mt=s,this.tween=i},r}();Fe(Ea+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ma[r]=1}),Xe.TweenMax=Xe.TweenLite=ge,Xe.TimelineLite=Xe.TimelineMax=ze,re=new ze({sortChildren:!1,defaults:zi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),We.stringFilter=zl;var _s={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Af(i)})},timeline:function(t){return new ze(t)},getTweensOf:function(t,e){return re.getTweensOf(t,e)},getProperty:function(t,e,n,i){me(t)&&(t=en(t)[0]);var s=hi(t||{}).get,o=n?Ml:xl;return n==="native"&&(n=""),t&&(e?o((Ye[e]&&Ye[e].get||s)(t,e,n,i)):function(a,l,c){return o((Ye[a]&&Ye[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=en(t),t.length>1){var i=t.map(function(u){return gn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Ye[e],a=hi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Wi._pt=0,h.init(t,n?u+n:u,Wi,0,[t]),h.render(1,h),Wi._pt&&Na(1,Wi)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},isTweening:function(t){return re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=di(t.ease,zi.ease)),Sl(zi,t||{})},config:function(t){return Sl(We,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ye[a]&&!Xe[a]&&ls(e+" effect requires "+a+" plugin.")}),ya[e]=function(a,l,c){return n(en(a),Qe(l||{},s),c)},o&&(ze.prototype[e]=function(a,l,c){return this.add(ya[e](a,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=di(e)},parseEase:function(t,e){return arguments.length?di(t,e):Wt},getById:function(t){return re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ze(t),i,s;for(n.smoothChildTiming=Oe(t.smoothChildTiming),re.remove(n),n._dp=0,n._time=n._tTime=re._time,i=re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&_n(n,i,i._start-i._delay),i=s;return _n(re,n,0),n},utils:{wrap:Ef,wrapYoyo:Tf,distribute:Pl,random:Dl,snap:Ll,normalize:yf,getUnit:Be,clamp:gf,splitColor:Ol,toArray:en,selector:xf,mapRange:Nl,pipe:Mf,unitize:Sf,interpolate:bf,shuffle:Rl},install:dl,effects:ya,ticker:rn,updateRoot:ze.updateRoot,plugins:Ye,globalTimeline:re,core:{PropTween:Ge,globals:pl,Tween:ge,Timeline:ze,Animation:Ir,getCache:hi,_removeLinkedListItem:fs,suppressOverwrites:function(t){return fa=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _s[r]=ge[r]}),rn.add(ze.updateRoot),Wi=_s.to({},{duration:0});var Wf=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Xf=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Wf(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ia=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(me(s)&&(l={},Fe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Xf(a,s)}}}},gn=_s.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a;for(o in e)a=this.add(t,"setAttribute",(t.getAttribute(o)||0)+"",e[o],i,s,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},Ia("roundProps",wa),Ia("modifiers"),Ia("snap",Ll))||_s;ge.version=ze.version=gn.version="3.9.1",fl=1,ol()&&Xi(),Wt.Power0,Wt.Power1,Wt.Power2,Wt.Power3,Wt.Power4,Wt.Linear,Wt.Quad,Wt.Cubic,Wt.Quart,Wt.Quint,Wt.Strong,Wt.Elastic,Wt.Back,Wt.SteppedEase,Wt.Bounce,Wt.Sine,Wt.Expo,Wt.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jl,Yn,Yi,Oa,mi,Jl,Yf=function(){return typeof window!="undefined"},qn={},_i=180/Math.PI,qi=Math.PI/180,$i=Math.atan2,Ql=1e8,tc=/([A-Z])/g,qf=/(?:left|right|width|margin|padding|x)/i,$f=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ec=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Zf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jf=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},nc=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ic=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Jf=function(t,e,n){return t.style[e]=n},Qf=function(t,e,n){return t.style.setProperty(e,n)},td=function(t,e,n){return t._gsap[e]=n},ed=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},nd=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},id=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ye="transform",Zn=ye+"Origin",rc,Fa=function(t,e){var n=Yn.createElementNS?Yn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yn.createElement(t);return n.style?n:Yn.createElement(t)},wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(tc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Zi(e)||e,1)||""},sc="O,Moz,ms,Ms,Webkit".split(","),Zi=function(t,e,n){var i=e||mi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(sc[o]+t in s););return o<0?null:(o===3?"ms":o>=0?sc[o]:"")+t},Ba=function(){Yf()&&window.document&&(jl=window,Yn=jl.document,Yi=Yn.documentElement,mi=Fa("div")||{style:{}},Fa("div"),ye=Zi(ye),Zn=ye+"Origin",mi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rc=!!Zi("perspective"),Oa=1)},za=function r(t){var e=Fa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Yi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Yi.removeChild(e),this.style.cssText=s,o},ac=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},oc=function(t){var e;try{e=t.getBBox()}catch{e=za.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===za||(e=za.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ac(t,["x","cx","x1"])||0,y:+ac(t,["y","cy","y1"])||0,width:0,height:0}:e},lc=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&oc(t))},Fr=function(t,e){if(e){var n=t.style;e in qn&&e!==Zn&&(e=ye),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(tc,"-$1").toLowerCase())):n.removeAttribute(e)}},Kn=function(t,e,n,i,s,o){var a=new Ge(t._pt,e,n,0,1,o?ic:nc);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},cc={deg:1,rad:1,turn:1},jn=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=mi.style,l=qf.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;return i===o||!s||cc[i]||cc[o]?s:(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&lc(t),(d||o==="%")&&(qn[e]||~e.indexOf("adius"))?(_=m?t.getBBox()[l?"width":"height"]:t[u],he(d?s/_*h:s/100*_)):(a[l?"width":"height"]=h+(f?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Yn||!g.appendChild)&&(g=Yn.body),p=g._gsap,p&&d&&p.width&&l&&p.time===rn.time?he(s/p.width*h):((d||o==="%")&&(a.position=wn(t,"position")),g===t&&(a.position="static"),g.appendChild(mi),_=mi[u],g.removeChild(mi),a.position="absolute",l&&d&&(p=hi(g),p.time=rn.time,p.width=g[u]),he(f?_*s/h:_&&s?h/_*s:0))))},gi=function(t,e,n,i){var s;return Oa||Ba(),e in $n&&e!=="transform"&&(e=$n[e],~e.indexOf(",")&&(e=e.split(",")[0])),qn[e]&&e!=="transform"?(s=zr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:vs(wn(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gs[e]&&gs[e](t,e,n)||wn(t,e)||gl(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jn(t,e,s,n)+n:s},rd=function(t,e,n,i){if(!n||n==="none"){var s=Zi(e,t,1),o=s&&wn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=wn(t,"borderTopColor"))}var a=new Ge(this._pt,t.style,e,0,1,Zl),l=0,c=0,u,h,f,d,_,g,p,m,S,v,y,A,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=wn(t,e)||i,t.style[e]=n),u=[n,i],zl(u),n=u[0],i=u[1],f=n.match(Gi)||[],b=i.match(Gi)||[],b.length){for(;h=Gi.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),A=p.charAt(1)==="="?+(p.charAt(0)+"1"):0,A&&(p=p.substr(2)),m=parseFloat(p),v=p.substr((m+"").length),l=Gi.lastIndex-v.length,v||(v=v||We.units[e]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(d=jn(t,e,g,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:A?A*m:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?ic:nc;return ul.test(i)&&(a.e=0),this._pt=a,a},uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=uc[n]||n,e[1]=uc[i]||i,e.join(" ")},ad=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qn[a]&&(l=1,a=a==="transformOrigin"?Zn:ye),Fr(n,a);l&&(Fr(n,ye),o&&(o.svg&&n.removeAttribute("transform"),zr(n,1),o.uncache=1))}},gs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ge(t._pt,e,n,0,0,ad);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Br=[1,0,0,1,0,0],hc={},fc=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},dc=function(t){var e=wn(t,ye);return fc(e)?Br:e.substr(7).match(cl).map(he)},Ga=function(t,e){var n=t._gsap||hi(t),i=t.style,s=dc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Br:s):(s===Br&&!t.offsetParent&&t!==Yi&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextSibling,Yi.appendChild(t)),s=dc(t),l?i.display=l:Fr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Yi.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ka=function(t,e,n,i,s,o){var a=t._gsap,l=s||Ga(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],v=e.split(" "),y=parseFloat(v[0])||0,A=parseFloat(v[1])||0,b,E,U,I;n?l!==Br&&(E=d*p-_*g)&&(U=y*(p/E)+A*(-g/E)+(g*S-p*m)/E,I=y*(-_/E)+A*(d/E)-(d*S-_*m)/E,y=U,A=I):(b=oc(t),y=b.x+(~v[0].indexOf("%")?y/100*b.width:y),A=b.y+(~(v[1]||v[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(m=y-c,S=A-u,a.xOffset=h+(m*d+S*g)-m,a.yOffset=f+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Zn]="0px 0px",o&&(Kn(o,a,"xOrigin",c,y),Kn(o,a,"yOrigin",u,A),Kn(o,a,"xOffset",h,a.xOffset),Kn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+A)},zr=function(t,e){var n=t._gsap||new Vl(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=wn(t,Zn)||"0",c,u,h,f,d,_,g,p,m,S,v,y,A,b,E,U,I,M,w,J,K,N,X,B,q,Y,Z,nt,rt,_t,G,D;return c=u=h=_=g=p=m=S=v=0,f=d=1,n.svg=!!(t.getCTM&&lc(t)),b=Ga(t,n.svg),n.svg&&(B=(!n.uncache||l==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),ka(t,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,b)),y=n.xOrigin||0,A=n.yOrigin||0,b!==Br&&(M=b[0],w=b[1],J=b[2],K=b[3],c=N=b[4],u=X=b[5],b.length===6?(f=Math.sqrt(M*M+w*w),d=Math.sqrt(K*K+J*J),_=M||w?$i(w,M)*_i:0,m=J||K?$i(J,K)*_i+_:0,m&&(d*=Math.abs(Math.cos(m*qi))),n.svg&&(c-=y-(y*M+A*J),u-=A-(y*w+A*K))):(D=b[6],_t=b[7],Z=b[8],nt=b[9],rt=b[10],G=b[11],c=b[12],u=b[13],h=b[14],E=$i(D,rt),g=E*_i,E&&(U=Math.cos(-E),I=Math.sin(-E),B=N*U+Z*I,q=X*U+nt*I,Y=D*U+rt*I,Z=N*-I+Z*U,nt=X*-I+nt*U,rt=D*-I+rt*U,G=_t*-I+G*U,N=B,X=q,D=Y),E=$i(-J,rt),p=E*_i,E&&(U=Math.cos(-E),I=Math.sin(-E),B=M*U-Z*I,q=w*U-nt*I,Y=J*U-rt*I,G=K*I+G*U,M=B,w=q,J=Y),E=$i(w,M),_=E*_i,E&&(U=Math.cos(E),I=Math.sin(E),B=M*U+w*I,q=N*U+X*I,w=w*U-M*I,X=X*U-N*I,M=B,N=q),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=he(Math.sqrt(M*M+w*w+J*J)),d=he(Math.sqrt(X*X+D*D)),E=$i(N,X),m=Math.abs(E)>2e-4?E*_i:0,v=G?1/(G<0?-G:G):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fc(wn(t,ye)),B&&t.setAttribute("transform",B))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(f*=-1,m+=_<=0?180:-180,_+=_<=0?180:-180):(d*=-1,m+=m<=0?180:-180)),n.x=c-((n.xPercent=c&&(n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=he(f),n.scaleY=he(d),n.rotation=he(_)+a,n.rotationX=he(g)+a,n.rotationY=he(p)+a,n.skewX=m+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Zn]=vs(l)),n.xOffset=n.yOffset=0,n.force3D=We.force3D,n.renderTransform=n.svg?ld:rc?pc:od,n.uncache=0,n},vs=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ha=function(t,e,n){var i=Be(e);return he(parseFloat(e)+parseFloat(jn(t,"x",n+"px",i)))+i},od=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,pc(t,e)},vi="0deg",Gr="0px",xi=") ",pc=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,y="",A=m==="auto"&&t&&t!==1||m===!0;if(v&&(h!==vi||u!==vi)){var b=parseFloat(u)*qi,E=Math.sin(b),U=Math.cos(b),I;b=parseFloat(h)*qi,I=Math.cos(b),o=Ha(S,o,E*I*-v),a=Ha(S,a,-Math.sin(b)*-v),l=Ha(S,l,U*I*-v+v)}p!==Gr&&(y+="perspective("+p+xi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(A||o!==Gr||a!==Gr||l!==Gr)&&(y+=l!==Gr||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xi),c!==vi&&(y+="rotate("+c+xi),u!==vi&&(y+="rotateY("+u+xi),h!==vi&&(y+="rotateX("+h+xi),(f!==vi||d!==vi)&&(y+="skew("+f+", "+d+xi),(_!==1||g!==1)&&(y+="scale("+_+", "+g+xi),S.style[ye]=y||"translate(0, 0)"},ld=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),A,b,E,U,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qi,c*=qi,A=Math.cos(l)*h,b=Math.sin(l)*h,E=Math.sin(l-c)*-f,U=Math.cos(l-c)*f,c&&(u*=qi,I=Math.tan(c-u),I=Math.sqrt(1+I*I),E*=I,U*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),A*=I,b*=I)),A=he(A),b=he(b),E=he(E),U=he(U)):(A=h,U=f,b=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=jn(d,"x",o,"px"),y=jn(d,"y",a,"px")),(_||g||p||m)&&(v=he(v+_-(_*A+g*E)+p),y=he(y+g-(_*b+g*U)+m)),(i||s)&&(I=d.getBBox(),v=he(v+i/100*I.width),y=he(y+s/100*I.height)),I="matrix("+A+","+b+","+E+","+U+","+v+","+y+")",d.setAttribute("transform",I),S&&(d.style[ye]=I)},cd=function(t,e,n,i,s,o){var a=360,l=me(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?_i:1),u=o?c*o:c-i,h=i+u+"deg",f,d;return l&&(f=s.split("_")[1],f==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),f==="cw"&&u<0?u=(u+a*Ql)%a-~~(u/a)*a:f==="ccw"&&u>0&&(u=(u-a*Ql)%a-~~(u/a)*a)),t._pt=d=new Ge(t._pt,e,n,i,u,Zf),d.e=h,d.u="deg",t._props.push(n),d},mc=function(t,e){for(var n in e)t[n]=e[n];return t},ud=function(t,e,n){var i=mc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ye]=e,a=zr(n,1),Fr(n,ye),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ye],o[ye]=e,a=zr(n,1),o[ye]=c);for(l in qn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Be(c),_=Be(u),h=d!==_?jn(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Ge(t._pt,a,l,h,f-h,ec),t._pt.u=_||0,t._props.push(l));mc(a,i)};Fe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});gs[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return gi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var _c={name:"css",register:Ba,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,v,y,A,b,E;Oa||Ba();for(g in e)if(g!=="autoRound"&&(u=e[g],!(Ye[g]&&Wl(g,e,n,i,t,s)))){if(d=typeof u,_=gs[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Dr(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Wn.lastIndex=0,Wn.test(c)||(p=Be(c),m=Be(u)),m?p!==m&&(c=jn(t,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],me(c)&&~c.indexOf("random(")&&(c=Dr(c)),Be(c+"")||(c+=We.units[g]||Be(gi(t,g))||""),(c+"").charAt(1)==="="&&(c=gi(t,g))):c=gi(t,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="?+(u.charAt(0)+"1"):0,S&&(u=u.substr(2)),h=parseFloat(u),g in $n&&(g==="autoAlpha"&&(f===1&&gi(t,"visibility")==="hidden"&&h&&(f=0),Kn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=$n[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in qn,v){if(y||(A=t._gsap,A.renderTransform&&!e.parseTransform||zr(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,y=this._pt=new Ge(this._pt,a,ye,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new Ge(this._pt,A,"scaleY",A.scaleY,(S?S*h:h-A.scaleY)||0),o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){u=sd(u),A.svg?ka(t,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Kn(this,A,"zOrigin",A.zOrigin,m),Kn(this,a,g,vs(c),vs(u)));continue}else if(g==="svgOrigin"){ka(t,u,1,b,0,this);continue}else if(g in hc){cd(this,A,g,f,u,S);continue}else if(g==="smoothOrigin"){Kn(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){ud(this,u,t);continue}}else g in a||(g=Zi(g)||g);if(v||(h||h===0)&&(f||f===0)&&!$f.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Be(u)||(g in We.units?We.units[g]:p),p!==m&&(f=jn(t,g,c,m)),this._pt=new Ge(this._pt,v?A:a,g,f,S?S*h:h-f,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?jf:ec),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Kf);else if(g in a)rd.call(this,t,g,c,u);else if(g in t)this.add(t,g,c||t[g],u,i,s);else{xa(g,u);continue}o.push(g)}}E&&Kl(this)},get:gi,aliases:$n,getSetter:function(t,e,n){var i=$n[e];return i&&i.indexOf(",")<0&&(e=i),e in qn&&e!==Zn&&(t._gsap.x||gi(t,"x"))?n&&Jl===n?e==="scale"?ed:td:(Jl=n||{})&&(e==="scale"?nd:id):t.style&&!pa(t.style[e])?Jf:~e.indexOf("-")?Qf:Ua(t,e)},core:{_removeProperty:Fr,_getMatrix:Ga}};gn.utils.checkPrefix=Zi,function(r,t,e,n){var i=Fe(r+","+t+","+e,function(s){qn[s]=1});Fe(t,function(s){We.units[s]="deg",hc[s]=1}),$n[i[13]]=r+","+t,Fe(n,function(s){var o=s.split(":");$n[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){We.units[r]="px"}),gn.registerPlugin(_c);var sn=gn.registerPlugin(_c)||gn;sn.core.Tween;var ox="",lx="",hd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},gc={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(hd,function(){var e=document,n=e.createTextNode.bind(e);function i(G,D,H){G.style.setProperty(D,H)}function s(G,D){return G.appendChild(D)}function o(G,D,H,tt){var ft=e.createElement("span");return D&&(ft.className=D),H&&(!tt&&ft.setAttribute("data-"+D,H),ft.textContent=H),G&&s(G,ft)||ft}function a(G,D){return G.getAttribute("data-"+D)}function l(G,D){return!G||G.length==0?[]:G.nodeName?[G]:[].slice.call(G[0].nodeName?G:(D||e).querySelectorAll(G))}function c(G){for(var D=[];G--;)D[G]=[];return D}function u(G,D){G&&G.some(D)}function h(G){return function(D){return G[D]}}function f(G,D,H){var tt="--"+D,ft=tt+"-index";u(H,function(dt,ot){Array.isArray(dt)?u(dt,function(At){i(At,ft,ot)}):i(dt,ft,ot)}),i(G,tt+"-total",H.length)}var d={};function _(G,D,H){var tt=H.indexOf(G);if(tt==-1)H.unshift(G),u(d[G].depends,function(dt){_(dt,G,H)});else{var ft=H.indexOf(D);H.splice(tt,1),H.splice(ft,0,G)}return H}function g(G,D,H,tt){return{by:G,depends:D,key:H,split:tt}}function p(G){return _(G,0,[]).map(h(d))}function m(G){d[G.by]=G}function S(G,D,H,tt,ft){G.normalize();var dt=[],ot=document.createDocumentFragment();tt&&dt.push(G.previousSibling);var At=[];return l(G.childNodes).some(function(vt){if(vt.tagName&&!vt.hasChildNodes()){At.push(vt);return}if(vt.childNodes&&vt.childNodes.length){At.push(vt),dt.push.apply(dt,S(vt,D,H,tt,ft));return}var O=vt.wholeText||"",oe=O.trim();oe.length&&(O[0]===" "&&At.push(n(" ")),u(oe.split(H),function(yt,Pt){Pt&&ft&&At.push(o(ot,"whitespace"," ",ft));var bt=o(ot,D,yt);dt.push(bt),At.push(bt)}),O[O.length-1]===" "&&At.push(n(" ")))}),u(At,function(vt){s(ot,vt)}),G.innerHTML="",s(G,ot),dt}var v=0;function y(G,D){for(var H in D)G[H]=D[H];return G}var A="words",b=g(A,v,"word",function(G){return S(G,"word",/\s+/,0,1)}),E="chars",U=g(E,[A],"char",function(G,D,H){var tt=[];return u(H[A],function(ft,dt){tt.push.apply(tt,S(ft,"char","",D.whitespace&&dt))}),tt});function I(G){G=G||{};var D=G.key;return l(G.target||"[data-splitting]").map(function(H){var tt=H["\u{1F34C}"];if(!G.force&&tt)return tt;tt=H["\u{1F34C}"]={el:H};var ft=p(G.by||a(H,"splitting")||E),dt=y({},G);return u(ft,function(ot){if(ot.split){var At=ot.by,vt=(D?"-"+D:"")+ot.key,O=ot.split(H,dt,tt);vt&&f(H,vt,O),tt[At]=O,H.classList.add(At)}}),H.classList.add("splitting"),tt})}function M(G){G=G||{};var D=G.target=o();return D.innerHTML=G.content,I(G),D.outerHTML}I.html=M,I.add=m;function w(G,D,H){var tt=l(D.matching||G.children,G),ft={};return u(tt,function(dt){var ot=Math.round(dt[H]);(ft[ot]||(ft[ot]=[])).push(dt)}),Object.keys(ft).map(Number).sort(J).map(h(ft))}function J(G,D){return G-D}var K=g("lines",[A],"line",function(G,D,H){return w(G,{matching:H[A]},"offsetTop")}),N=g("items",v,"item",function(G,D){return l(D.matching||G.children,G)}),X=g("rows",v,"row",function(G,D){return w(G,D,"offsetTop")}),B=g("cols",v,"col",function(G,D){return w(G,D,"offsetLeft")}),q=g("grid",["rows","cols"]),Y="layout",Z=g(Y,v,v,function(G,D){var H=D.rows=+(D.rows||a(G,"rows")||1),tt=D.columns=+(D.columns||a(G,"columns")||1);if(D.image=D.image||a(G,"image")||G.currentSrc||G.src,D.image){var ft=l("img",G)[0];D.image=ft&&(ft.currentSrc||ft.src)}D.image&&i(G,"background-image","url("+D.image+")");for(var dt=H*tt,ot=[],At=o(v,"cell-grid");dt--;){var vt=o(At,"cell");o(vt,"cell-inner"),ot.push(vt)}return s(G,At),ot}),nt=g("cellRows",[Y],"row",function(G,D,H){var tt=D.rows,ft=c(tt);return u(H[Y],function(dt,ot,At){ft[Math.floor(ot/(At.length/tt))].push(dt)}),ft}),rt=g("cellColumns",[Y],"col",function(G,D,H){var tt=D.columns,ft=c(tt);return u(H[Y],function(dt,ot){ft[ot%tt].push(dt)}),ft}),_t=g("cells",["cellRows","cellColumns"],"cell",function(G,D,H){return H[Y]});return m(b),m(U),m(K),m(N),m(X),m(B),m(q),m(Z),m(nt),m(rt),m(_t),I})})(gc);var vc=gc.exports;class fd{constructor(t){Ie(this,"position",-1);Ie(this,"cells",[]);this.position=t}}class dd{constructor(t,{position:e,previousCellPosition:n}={}){Ie(this,"DOM",{el:null});Ie(this,"position",-1);Ie(this,"previousCellPosition",-1);Ie(this,"original");Ie(this,"state");Ie(this,"color");Ie(this,"originalColor");Ie(this,"cache");this.DOM.el=t,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=e,this.previousCellPosition=n}set(t){this.state=t,this.DOM.el.innerHTML=this.state}}class pd{constructor(t){Ie(this,"DOM",{el:null});Ie(this,"lines",[]);Ie(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);Ie(this,"totalChars",0);this.DOM.el=t;const e=vc({target:this.DOM.el,by:"lines"});e.forEach(n=>vc({target:n.words}));for(const[n,i]of e[0].lines.entries()){const s=new fd(n);let o=[],a=0;for(const l of i)for(const c of[...l.querySelectorAll(".char")])o.push(new dd(c,{position:a,previousCellPosition:a===0?-1:a-1})),++a;s.cells=o,this.lines.push(s),this.totalChars+=a}}clearCells(){for(const t of this.lines)for(const e of t.cells)e.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}randomNumber(t,e){return Math.floor(Math.random()*(e-t+1))+t}animate(){let e=0;const n=(i,s,o=0)=>{s.cache={state:s.state,color:s.color},o===8-1?(s.set(s.original),s.color=s.originalColor,s.DOM.el.style.color=s.color,++e,e===this.totalChars&&(this.isAnimating=!1)):(s.set(this.getRandomChar()),s.color=["#17222E","#1B2B3B","#253F58"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color),++o,o<8&&setTimeout(()=>n(i,s,o),this.randomNumber(30,110))};for(const i of this.lines)for(const s of i.cells)setTimeout(()=>n(i,s),(i.position+1)*66)}trigger(){this.isAnimating||(this.isAnimating=!0,this.animate())}}/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Va="162",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,xc=1,_d=2,Mc=1,gd=2,Cn=3,Jn=0,ke=1,Rn=2,Pn=0,Ji=1,Wa=2,Sc=3,yc=4,vd=5,Mi=100,xd=101,Md=102,Ec=103,Tc=104,Sd=200,yd=201,Ed=202,Td=203,Xa=204,Ya=205,bd=206,Ad=207,wd=208,Cd=209,Rd=210,Pd=211,Ld=212,Dd=213,Ud=214,Nd=0,Id=1,Od=2,xs=3,Fd=4,Bd=5,zd=6,Gd=7,bc=0,kd=1,Hd=2,Qn=0,Ac=1,qa=2,wc=3,Cc=4,Vd=5,Rc=6,Pc=7,Lc=300,Qi=301,tr=302,$a=303,Za=304,Ms=306,Ka=1e3,ln=1001,ja=1002,Pe=1003,Dc=1004,kr=1005,He=1006,Ja=1007,Si=1008,ti=1009,Wd=1010,Xd=1011,Qa=1012,Uc=1013,ei=1014,Ln=1015,Dn=1016,Nc=1017,Ic=1018,yi=1020,Yd=1021,cn=1023,qd=1024,$d=1025,Ei=1026,er=1027,Zd=1028,Oc=1029,Kd=1030,Fc=1031,Bc=1033,to=33776,eo=33777,no=33778,io=33779,zc=35840,Gc=35841,kc=35842,Hc=35843,Vc=36196,Wc=37492,Xc=37496,Yc=37808,qc=37809,$c=37810,Zc=37811,Kc=37812,jc=37813,Jc=37814,Qc=37815,tu=37816,eu=37817,nu=37818,iu=37819,ru=37820,su=37821,ro=36492,au=36494,ou=36495,jd=36283,lu=36284,cu=36285,uu=36286,Jd=3200,Qd=3201,tp=0,ep=1,ni="",vn="srgb",ii="srgb-linear",so="display-p3",Ss="display-p3-linear",ys="linear",Jt="srgb",Es="rec709",Ts="p3",nr=7680,hu=519,np=512,ip=513,rp=514,fu=515,sp=516,ap=517,op=518,lp=519,du=35044,pu="300 es",ao=1035,Un=2e3,bs=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const ir=Math.PI/180,Hr=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[r&255]+Ae[r>>8&255]+Ae[r>>16&255]+Ae[r>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function ve(r,t,e){return Math.max(t,Math.min(e,r))}function oo(r,t){return(r%t+t)%t}function cp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function up(r,t,e){return r!==t?(e-r)/(t-r):0}function Vr(r,t,e){return(1-e)*r+e*t}function hp(r,t,e,n){return Vr(r,t,1-Math.exp(-e*n))}function fp(r,t=1){return t-Math.abs(oo(r,t*2)-t)}function dp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function mp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function _p(r,t){return r+Math.random()*(t-r)}function gp(r){return r*(.5-Math.random())}function vp(r){r!==void 0&&(mu=r);let t=mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(r){return r*ir}function Mp(r){return r*Hr}function lo(r){return(r&r-1)===0&&r!==0}function Sp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function As(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yp(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ep={DEG2RAD:ir,RAD2DEG:Hr,generateUUID:bi,clamp:ve,euclideanModulo:oo,mapLinear:cp,inverseLerp:up,lerp:Vr,damp:hp,pingpong:fp,smoothstep:dp,smootherstep:pp,randInt:mp,randFloat:_p,randFloatSpread:gp,seededRandom:vp,degToRad:xp,radToDeg:Mp,isPowerOfTwo:lo,ceilPowerOfTwo:Sp,floorPowerOfTwo:As,setQuaternionFromProperEuler:yp,normalize:Le,denormalize:rr};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],v=i[4],y=i[7],A=i[2],b=i[5],E=i[8];return s[0]=o*g+a*S+l*A,s[3]=o*p+a*v+l*b,s[6]=o*m+a*y+l*E,s[1]=c*g+u*S+h*A,s[4]=c*p+u*v+h*b,s[7]=c*m+u*y+h*E,s[2]=f*g+d*S+_*A,s[5]=f*p+d*v+_*b,s[8]=f*m+d*y+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Ot;function _u(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tp(){const r=ws("canvas");return r.style.display="block",r}const gu={};function bp(r){r in gu||(gu[r]=!0,console.warn(r))}const vu=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xu=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[ii]:{transfer:ys,primaries:Es,toReference:r=>r,fromReference:r=>r},[vn]:{transfer:Jt,primaries:Es,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ss]:{transfer:ys,primaries:Ts,toReference:r=>r.applyMatrix3(xu),fromReference:r=>r.applyMatrix3(vu)},[so]:{transfer:Jt,primaries:Ts,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xu),fromReference:r=>r.applyMatrix3(vu).convertLinearToSRGB()}},Ap=new Set([ii,Ss]),qt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ap.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Cs[t].toReference,i=Cs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Cs[r].primaries},getTransfer:function(r){return r===ni?ys:Cs[r].transfer}};function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class Mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=ws("canvas")),ar.width=t.width,ar.height=t.height;const n=ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(sr(e[n]/255)*255):e[n]=sr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class Su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ho(i[o].image)):s.push(ho(i[o]))}else s=ho(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ho(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cp=0;class Ve extends Ti{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ln,i=ln,s=He,o=Si,a=cn,l=ti,c=Ve.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=bi(),this.name="",this.source=new Su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ve.DEFAULT_IMAGE=null,Ve.DEFAULT_MAPPING=Lc,Ve.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,A=(m+1)/2,b=(u+f)/4,E=(h+g)/4,U=(_+p)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=E/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=U/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=U/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Rp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pp extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),b=Math.atan2(A,m*S);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const y=a*S;if(l=l*p+f*y,c=c*p+d*y,u=u*p+_*y,h=h*p+g*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new L,Eu=new Ai;class Wr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Ps.subVectors(this.max,Xr),or.subVectors(t.a,Xr),lr.subVectors(t.b,Xr),cr.subVectors(t.c,Xr),ri.subVectors(lr,or),si.subVectors(cr,lr),wi.subVectors(or,cr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-wi.z,wi.y,ri.z,0,-ri.x,si.z,0,-si.x,wi.z,0,-wi.x,-ri.y,ri.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!po(e,or,lr,cr,Ps)||(e=[1,0,0,0,1,0,0,0,1],!po(e,or,lr,cr,Ps))?!1:(Ls.crossVectors(ri,si),e=[Ls.x,Ls.y,Ls.z],po(e,or,lr,cr,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Rs=new Wr,or=new L,lr=new L,cr=new L,ri=new L,si=new L,wi=new L,Xr=new L,Ps=new L,Ls=new L,Ci=new L;function po(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ci.fromArray(r,s);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lp=new Wr,Yr=new L,mo=new L;class Ds{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(mo)),this.expandByPoint(Yr.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,_o=new L,Us=new L,ai=new L,go=new L,Ns=new L,vo=new L;class xo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_o.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(_o);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=ai.dot(this.direction),l=-ai.dot(Us),c=ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_o).addScaledVector(Us,f),d}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){go.subVectors(e,t),Ns.subVectors(n,t),vo.crossVectors(go,Ns);let o=this.direction.dot(vo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const l=a*this.direction.dot(Ns.crossVectors(ai,Ns));if(l<0)return null;const c=a*this.direction.dot(go.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(vo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Up)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),oi.crossVectors(n,qe),oi.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),oi.crossVectors(n,qe)),oi.normalize(),Is.crossVectors(qe,oi),i[0]=oi.x,i[4]=Is.x,i[8]=qe.x,i[1]=oi.y,i[5]=Is.y,i[9]=qe.y,i[2]=oi.z,i[6]=Is.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],v=n[7],y=n[11],A=n[15],b=i[0],E=i[4],U=i[8],I=i[12],M=i[1],w=i[5],J=i[9],K=i[13],N=i[2],X=i[6],B=i[10],q=i[14],Y=i[3],Z=i[7],nt=i[11],rt=i[15];return s[0]=o*b+a*M+l*N+c*Y,s[4]=o*E+a*w+l*X+c*Z,s[8]=o*U+a*J+l*B+c*nt,s[12]=o*I+a*K+l*q+c*rt,s[1]=u*b+h*M+f*N+d*Y,s[5]=u*E+h*w+f*X+d*Z,s[9]=u*U+h*J+f*B+d*nt,s[13]=u*I+h*K+f*q+d*rt,s[2]=_*b+g*M+p*N+m*Y,s[6]=_*E+g*w+p*X+m*Z,s[10]=_*U+g*J+p*B+m*nt,s[14]=_*I+g*K+p*q+m*rt,s[3]=S*b+v*M+y*N+A*Y,s[7]=S*E+v*w+y*X+A*Z,s[11]=S*U+v*J+y*B+A*nt,s[15]=S*I+v*K+y*q+A*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,y=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,b=e*S+n*v+i*y+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=S*E,t[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*E,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=v*E,t[5]=(u*p*s-_*f*s+_*i*d-e*p*d-u*i*m+e*f*m)*E,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=y*E,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*m-e*h*m)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*p+e*h*p)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,S=l*c,v=l*u,y=l*h,A=n.x,b=n.y,E=n.z;return i[0]=(1-(g+m))*A,i[1]=(d+y)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(_+v)*E,i[9]=(p-S)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ur.set(i[0],i[1],i[2]).length();const o=ur.set(i[4],i[5],i[6]).length(),a=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/s,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Un){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Un)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===bs)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Un){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(a===Un)_=(o+s)*h,g=-2*h;else if(a===bs)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ur=new L,fn=new ne,Dp=new L(0,0,0),Up=new L(1,1,1),oi=new L,Is=new L,qe=new L,Tu=new ne,bu=new Ai;class On{constructor(t=0,e=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Np=0;const wu=new L,hr=new Ai,Fn=new ne,Os=new L,qr=new L,Ip=new L,Op=new Ai,Cu=new L(1,0,0),Ru=new L(0,1,0),Pu=new L(0,0,1),Fp={type:"added"},Bp={type:"removed"},Mo={type:"childadded",child:null},So={type:"childremoved",child:null};class De extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new L,e=new On,n=new Ai,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ot}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(qr,Os,this.up):Fn.lookAt(Os,qr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Fn),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fp),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new L(0,1,0),De.DEFAULT_MATRIX_AUTO_UPDATE=!0,De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,Bn=new L,yo=new L,zn=new L,fr=new L,dr=new L,Lu=new L,Eo=new L,To=new L,bo=new L;class pn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),Bn.subVectors(n,e),yo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Bn),l=dn.dot(yo),c=Bn.dot(Bn),u=Bn.dot(yo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Bn.subVectors(t,e),dn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;fr.subVectors(i,n),dr.subVectors(s,n),Eo.subVectors(t,n);const l=fr.dot(Eo),c=dr.dot(Eo);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,i);const u=fr.dot(To),h=dr.dot(To);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fr,o);bo.subVectors(t,s);const d=fr.dot(bo),_=dr.dot(bo);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(dr,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Lu.subVectors(s,i),a=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(Lu,a);const m=1/(p+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ao(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=oo(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ao(o,s,t+1/3),this.g=Ao(o,s,t),this.b=Ao(o,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const n=Du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return qt.fromWorkingColorSpace(we.copy(this),t),Math.round(ve(we.r*255,0,255))*65536+Math.round(ve(we.g*255,0,255))*256+Math.round(ve(we.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,s=we.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=vn){qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Fs);const n=Vr(li.h,Fs.h,e),i=Vr(li.s,Fs.s,e),s=Vr(li.l,Fs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Xt;Xt.NAMES=Du;let zp=0;class $r extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ji,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wo extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,Bs=new lt;class xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=du,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==du&&(t.usage=this.usage),t}}class Uu extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nu extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gp=0;const an=new ne,Co=new De,pr=new L,$e=new Wr,Zr=new Wr,xe=new L;class Ze extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?Nu:Uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors($e.min,Zr.min),$e.expandByPoint(xe),xe.addVectors($e.max,Zr.max),$e.expandByPoint(xe)):($e.expandByPoint(Zr.min),$e.expandByPoint(Zr.max))}$e.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),xe.add(pr)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;const c=new L,u=new L,h=new L,f=new lt,d=new lt,_=new lt,g=new L,p=new L;function m(U,I,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,U),d.fromBufferAttribute(s,I),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const w=1/(d.x*_.y-_.x*d.y);!isFinite(w)||(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(w),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(w),a[U].add(g),a[I].add(g),a[M].add(g),l[U].add(p),l[I].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,I=S.length;U<I;++U){const M=S[U],w=M.start,J=M.count;for(let K=w,N=w+J;K<N;K+=3)m(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const v=new L,y=new L,A=new L,b=new L;function E(U){A.fromBufferAttribute(i,U),b.copy(A);const I=a[U];v.copy(I),v.sub(A.multiplyScalar(A.dot(I))).normalize(),y.crossVectors(b,I);const w=y.dot(l[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,w)}for(let U=0,I=S.length;U<I;++U){const M=S[U],w=M.start,J=M.count;for(let K=w,N=w+J;K<N;K+=3)E(t.getX(K+0)),E(t.getX(K+1)),E(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new xn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new ne,Ri=new xo,zs=new Ds,Ou=new L,mr=new L,_r=new L,gr=new L,Ro=new L,Gs=new L,ks=new lt,Hs=new lt,Vs=new lt,Fu=new L,Bu=new L,zu=new L,Ws=new L,Xs=new L;class Mn extends De{constructor(t=new Ze,e=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ro.fromBufferAttribute(h,t),o?Gs.addScaledVector(Ro,u):Gs.addScaledVector(Ro.sub(e),u))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(zs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(zs,Ou)===null||Ri.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Iu.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,A=v;y<A;y+=3){const b=a.getX(y),E=a.getX(y+1),U=a.getX(y+2);i=Ys(this,m,t,n,c,u,h,b,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Ys(this,o,t,n,c,u,h,S,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,A=v;y<A;y+=3){const b=y,E=y+1,U=y+2;i=Ys(this,m,t,n,c,u,h,b,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,v=p+1,y=p+2;i=Ys(this,o,t,n,c,u,h,S,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function kp(r,t,e,n,i,s,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Jn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:r}}function Ys(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,mr),r.getVertexPosition(l,_r),r.getVertexPosition(c,gr);const u=kp(r,t,e,n,mr,_r,gr,Ws);if(u){i&&(ks.fromBufferAttribute(i,a),Hs.fromBufferAttribute(i,l),Vs.fromBufferAttribute(i,c),u.uv=pn.getInterpolation(Ws,mr,_r,gr,ks,Hs,Vs,new lt)),s&&(ks.fromBufferAttribute(s,a),Hs.fromBufferAttribute(s,l),Vs.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(Ws,mr,_r,gr,ks,Hs,Vs,new lt)),o&&(Fu.fromBufferAttribute(o,a),Bu.fromBufferAttribute(o,l),zu.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(Ws,mr,_r,gr,Fu,Bu,zu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};pn.getNormal(mr,_r,gr,h.normal),u.face=h}return u}class Kr extends Ze{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function _(g,p,m,S,v,y,A,b,E,U,I){const M=y/E,w=A/U,J=y/2,K=A/2,N=b/2,X=E+1,B=U+1;let q=0,Y=0;const Z=new L;for(let nt=0;nt<B;nt++){const rt=nt*w-K;for(let _t=0;_t<X;_t++){const G=_t*M-J;Z[g]=G*S,Z[p]=rt*v,Z[m]=N,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[m]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(_t/E),h.push(1-nt/U),q+=1}}for(let nt=0;nt<U;nt++)for(let rt=0;rt<E;rt++){const _t=f+rt+X*nt,G=f+rt+X*(nt+1),D=f+(rt+1)+X*(nt+1),H=f+(rt+1)+X*nt;l.push(_t,G,H),l.push(G,D,H),Y+=6}a.addGroup(d,Y,I),d+=Y,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(r){const t={};for(let e=0;e<r.length;e++){const n=vr(r[e]);for(const i in n)t[i]=n[i]}return t}function Hp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gu(r){return r.getRenderTarget()===null?r.outputColorSpace:qt.workingColorSpace}const jr={clone:vr,merge:Ue};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ku extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new L,Hu=new lt,Vu=new lt;class Ke extends ku{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Vu),e.subVectors(Vu,Hu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xr=-90,Mr=1;class Xp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(xr,Mr,t,e);i.layers=this.layers,this.add(i);const s=new Ke(xr,Mr,t,e);s.layers=this.layers,this.add(s);const o=new Ke(xr,Mr,t,e);o.layers=this.layers,this.add(o);const a=new Ke(xr,Mr,t,e);a.layers=this.layers,this.add(a);const l=new Ke(xr,Mr,t,e);l.layers=this.layers,this.add(l);const c=new Ke(xr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wu extends Ve{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yp extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kr(5,5,5),s=new Ne({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Pn});s.uniforms.tEquirect.value=e;const o=new Mn(i,s),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=He),new Xp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Po=new L,qp=new L,$p=new Ot;class ui{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Po.subVectors(n,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$p.getNormalMatrix(t),i=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ds,qs=new L;class Lo{constructor(t=new ui,e=new ui,n=new ui,i=new ui,s=new ui,o=new ui){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,p-d,y-m).normalize(),n[1].setComponents(l+s,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+_,y+S).normalize(),n[3].setComponents(l-o,f-u,p-_,y-S).normalize(),n[4].setComponents(l-a,f-h,p-g,y-v).normalize(),e===Un)n[5].setComponents(l+a,f+h,p+g,y+v).normalize();else if(e===bs)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qs.x=i.normal.x>0?t.max.x:t.min.x,qs.y=i.normal.y>0?t.max.y:t.min.y,qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zp(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,_=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&_.length===0&&r.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];e?r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class $s extends Ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-S,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,y=S+c*(m+1),A=S+1+c*(m+1),b=S+1+c*m;d.push(v,y,b),d.push(y,A,b)}this.setIndex(d),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
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
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,Zm=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
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
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ft={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:rm,batching_vertex:sm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:um,clipping_planes_fragment:hm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:_m,color_pars_vertex:gm,color_vertex:vm,common:xm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:ym,displacementmap_vertex:Em,emissivemap_fragment:Tm,emissivemap_pars_fragment:bm,colorspace_fragment:Am,colorspace_pars_fragment:wm,envmap_fragment:Cm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Vm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Im,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:km,lights_pars_begin:Hm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:qm,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Km,lights_fragment_maps:jm,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:r_,map_particle_fragment:s_,map_particle_pars_fragment:a_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:l_,morphinstance_vertex:c_,morphcolor_vertex:u_,morphnormal_vertex:h_,morphtarget_pars_vertex:f_,morphtarget_vertex:d_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:__,normal_pars_vertex:g_,normal_vertex:v_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:E_,opaque_fragment:T_,packing:b_,premultiplied_alpha_fragment:A_,project_vertex:w_,dithering_fragment:C_,dithering_pars_fragment:R_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:U_,shadowmap_vertex:N_,shadowmask_pars_fragment:I_,skinbase_vertex:O_,skinning_pars_vertex:F_,skinning_vertex:B_,skinnormal_vertex:z_,specularmap_fragment:G_,specularmap_pars_fragment:k_,tonemapping_fragment:H_,tonemapping_pars_fragment:V_,transmission_fragment:W_,transmission_pars_fragment:X_,uv_pars_fragment:Y_,uv_pars_vertex:q_,uv_vertex:$_,worldpos_vertex:Z_,background_vert:`varying vec2 vUv;
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
}`},ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Sn={basic:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ue([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ue([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ue([ht.points,ht.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ue([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ue([ht.common,ht.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ue([ht.sprite,ht.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ue([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ue([ht.lights,ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Sn.physical={uniforms:Ue([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Zs={r:0,b:0,g:0},Li=new On,K_=new ne;function j_(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ms)?(u===void 0&&(u=new Mn(new Kr(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:vr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Li.copy(m.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Li)),u.material.toneMapped=qt.getTransfer(v.colorSpace)!==Jt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new $s(2,2),new Ne({name:"BackgroundMaterial",uniforms:vr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Zs,Gu(r)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function J_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(N,X,B,q,Y){let Z=!1;if(o){const nt=g(q,B,X);c!==nt&&(c=nt,d(c.object)),Z=m(N,q,B,Y),Z&&S(N,q,B,Y)}else{const nt=X.wireframe===!0;(c.geometry!==q.id||c.program!==B.id||c.wireframe!==nt)&&(c.geometry=q.id,c.program=B.id,c.wireframe=nt,Z=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,U(N,X,B,q),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,X,B){const q=B.wireframe===!0;let Y=a[N.id];Y===void 0&&(Y={},a[N.id]=Y);let Z=Y[X.id];Z===void 0&&(Z={},Y[X.id]=Z);let nt=Z[q];return nt===void 0&&(nt=p(f()),Z[q]=nt),nt}function p(N){const X=[],B=[],q=[];for(let Y=0;Y<i;Y++)X[Y]=0,B[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:B,attributeDivisors:q,object:N,attributes:{},index:null}}function m(N,X,B,q){const Y=c.attributes,Z=X.attributes;let nt=0;const rt=B.getAttributes();for(const _t in rt)if(rt[_t].location>=0){const D=Y[_t];let H=Z[_t];if(H===void 0&&(_t==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),_t==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),D===void 0||D.attribute!==H||H&&D.data!==H.data)return!0;nt++}return c.attributesNum!==nt||c.index!==q}function S(N,X,B,q){const Y={},Z=X.attributes;let nt=0;const rt=B.getAttributes();for(const _t in rt)if(rt[_t].location>=0){let D=Z[_t];D===void 0&&(_t==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),_t==="instanceColor"&&N.instanceColor&&(D=N.instanceColor));const H={};H.attribute=D,D&&D.data&&(H.data=D.data),Y[_t]=H,nt++}c.attributes=Y,c.attributesNum=nt,c.index=q}function v(){const N=c.newAttributes;for(let X=0,B=N.length;X<B;X++)N[X]=0}function y(N){A(N,0)}function A(N,X){const B=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;B[N]=1,q[N]===0&&(r.enableVertexAttribArray(N),q[N]=1),Y[N]!==X&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),Y[N]=X)}function b(){const N=c.newAttributes,X=c.enabledAttributes;for(let B=0,q=X.length;B<q;B++)X[B]!==N[B]&&(r.disableVertexAttribArray(B),X[B]=0)}function E(N,X,B,q,Y,Z,nt){nt===!0?r.vertexAttribIPointer(N,X,B,Y,Z):r.vertexAttribPointer(N,X,B,q,Y,Z)}function U(N,X,B,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,Z=B.getAttributes(),nt=X.defaultAttributeValues;for(const rt in Z){const _t=Z[rt];if(_t.location>=0){let G=Y[rt];if(G===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const D=G.normalized,H=G.itemSize,tt=e.get(G);if(tt===void 0)continue;const ft=tt.buffer,dt=tt.type,ot=tt.bytesPerElement,At=n.isWebGL2===!0&&(dt===r.INT||dt===r.UNSIGNED_INT||G.gpuType===Uc);if(G.isInterleavedBufferAttribute){const vt=G.data,O=vt.stride,oe=G.offset;if(vt.isInstancedInterleavedBuffer){for(let yt=0;yt<_t.locationSize;yt++)A(_t.location+yt,vt.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let yt=0;yt<_t.locationSize;yt++)y(_t.location+yt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let yt=0;yt<_t.locationSize;yt++)E(_t.location+yt,H/_t.locationSize,dt,D,O*ot,(oe+H/_t.locationSize*yt)*ot,At)}else{if(G.isInstancedBufferAttribute){for(let vt=0;vt<_t.locationSize;vt++)A(_t.location+vt,G.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let vt=0;vt<_t.locationSize;vt++)y(_t.location+vt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let vt=0;vt<_t.locationSize;vt++)E(_t.location+vt,H/_t.locationSize,dt,D,H*ot,H/_t.locationSize*vt*ot,At)}}else if(nt!==void 0){const D=nt[rt];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(_t.location,D);break;case 3:r.vertexAttrib3fv(_t.location,D);break;case 4:r.vertexAttrib4fv(_t.location,D);break;default:r.vertexAttrib1fv(_t.location,D)}}}}b()}function I(){J();for(const N in a){const X=a[N];for(const B in X){const q=X[B];for(const Y in q)_(q[Y].object),delete q[Y];delete X[B]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const B in X){const q=X[B];for(const Y in q)_(q[Y].object),delete q[Y];delete X[B]}delete a[N.id]}function w(N){for(const X in a){const B=a[X];if(B[N.id]===void 0)continue;const q=B[N.id];for(const Y in q)_(q[Y].object),delete q[Y];delete B[N.id]}}function J(){K(),u=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:K,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function Q_(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,h,f),e.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tg(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||t.has("OES_texture_float"),A=v&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:b}}function eg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ui,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,v=S*4;let y=m.clippingState||null;l.value=y,y=u(_,f,v,d);for(let A=0;A!==v;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==g;++v,y+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function ng(r){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Qi:a===Za&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Za)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yp(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yu extends ku{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Sr=4,qu=[.125,.215,.35,.446,.526,.582],Di=20,Do=new Yu,$u=new Xt;let Uo=null,No=0,Io=0;const Ui=(1+Math.sqrt(5))/2,yr=1/Ui,Zu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ui,yr),new L(0,Ui,-yr),new L(yr,0,Ui),new L(-yr,0,Ui),new L(Ui,yr,0),new L(-Ui,yr,0)];class Ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,Io),t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Dn,format:cn,colorSpace:ii,depthBuffer:!1},i=ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=rg(s,t,e)}return i}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($u),u.toneMapping=Qn,u.autoClear=!1;const d=new wo({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new Mn(new Kr,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy($u),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Ks(i,S*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qi||t.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Do)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zu[(i-1)%Zu.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const m=[];let S=0;for(let E=0;E<Di;++E){const U=E/g,I=Math.exp(-U*U/2);m.push(I),E===0?S+=I:E<p&&(S+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const y=this._sizeLods[i],A=3*y*(i>v-Sr?i-v+Sr:0),b=4*(this._cubeSize-y);Ks(e,A,b,3*y,2*y),l.setRenderTarget(e),l.render(h,Do)}}function ig(r){const t=[],e=[],n=[];let i=r;const s=r-Sr+1+qu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Sr?l=qu[o-r+Sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),v=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,U=b>2?0:-1,I=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];S.set(I,g*_*b),v.set(f,p*_*b);const M=[b,b,b,b,b,b];y.set(M,m*_*b)}const A=new Ze;A.setAttribute("position",new xn(S,g)),A.setAttribute("uv",new xn(v,p)),A.setAttribute("faceIndex",new xn(y,m)),t.push(A),i>Sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ju(r,t,e){const n=new un(r,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rg(r,t,e){const n=new Float32Array(Di),i=new L(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ju(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qu(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function sg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Za,u=l===Qi||l===tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Ku(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Ku(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function og(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let v=0,y=S.length;v<y;v+=3){const A=S[v+0],b=S[v+1],E=S[v+2];f.push(A,b,b,E,E,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const A=v+0,b=v+1,E=v+2;f.push(A,b,b,E,E,A)}}else return;const p=new(_u(f)?Nu:Uu)(f,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lg(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,_){r.drawElements(s,_,a,d*l),e.update(_,s,1)}function h(d,_,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,a,d*l,g),e.update(_,s,g)}function f(d,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,a,d,0,g);let m=0;for(let S=0;S<g;S++)m+=_[S];e.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function cg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ug(r,t){return r[0]-t[0]}function hg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function fg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ee,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let J=function(){M.dispose(),s.delete(u),u.removeEventListener("dispose",J)};g!==void 0&&g.texture.dispose();const p=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),S===!0&&(b=3);let E=u.attributes.position.count*b,U=1;E>t.maxTextureSize&&(U=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const I=new Float32Array(E*U*4*_),M=new yu(I,E,U,_);M.type=Ln,M.needsUpdate=!0;const w=b*4;for(let K=0;K<_;K++){const N=v[K],X=y[K],B=A[K],q=E*U*4*K;for(let Y=0;Y<N.count;Y++){const Z=Y*w;p===!0&&(o.fromBufferAttribute(N,Y),I[q+Z+0]=o.x,I[q+Z+1]=o.y,I[q+Z+2]=o.z,I[q+Z+3]=0),m===!0&&(o.fromBufferAttribute(X,Y),I[q+Z+4]=o.x,I[q+Z+5]=o.y,I[q+Z+6]=o.z,I[q+Z+7]=0),S===!0&&(o.fromBufferAttribute(B,Y),I[q+Z+8]=o.x,I[q+Z+9]=o.y,I[q+Z+10]=o.z,I[q+Z+11]=B.itemSize===4?o.w:1)}}g={count:_,texture:M,size:new lt(E,U)},s.set(u,g),u.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let p=0;for(let S=0;S<f.length;S++)p+=f[S];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==d){_=[];for(let v=0;v<d;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<d;v++){const y=_[v];y[0]=v,y[1]=f[v]}_.sort(hg);for(let v=0;v<8;v++)v<d&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ug);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],A=y[0],b=y[1];A!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+v)!==g[A]&&u.setAttribute("morphTarget"+v,g[A]),p&&u.getAttribute("morphNormal"+v)!==p[A]&&u.setAttribute("morphNormal"+v,p[A]),i[v]=b,m+=b):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function dg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class th extends Ve{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=ei),n===void 0&&u===er&&(n=yi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eh=new Ve,nh=new th(1,1);nh.compareFunction=fu;const ih=new yu,rh=new Pp,sh=new Wu,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),uh=new Float32Array(4);function Er(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ah[i];if(s===void 0&&(s=new Float32Array(i),ah[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function de(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function js(r,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function pg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2fv(this.addr,t),pe(e,t)}}function _g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;r.uniform3fv(this.addr,t),pe(e,t)}}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4fv(this.addr,t),pe(e,t)}}function vg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;uh.set(n),r.uniformMatrix2fv(this.addr,!1,uh),pe(e,n)}}function xg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;ch.set(n),r.uniformMatrix3fv(this.addr,!1,ch),pe(e,n)}}function Mg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;lh.set(n),r.uniformMatrix4fv(this.addr,!1,lh),pe(e,n)}}function Sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2iv(this.addr,t),pe(e,t)}}function Eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3iv(this.addr,t),pe(e,t)}}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4iv(this.addr,t),pe(e,t)}}function bg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2uiv(this.addr,t),pe(e,t)}}function wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3uiv(this.addr,t),pe(e,t)}}function Cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4uiv(this.addr,t),pe(e,t)}}function Rg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?nh:eh;e.setTexture2D(t||s,i)}function Pg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rh,i)}function Lg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sh,i)}function Dg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ih,i)}function Ug(r){switch(r){case 5126:return pg;case 35664:return mg;case 35665:return _g;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return yg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return bg;case 36294:return Ag;case 36295:return wg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(r,t){r.uniform1fv(this.addr,t)}function Ig(r,t){const e=Er(t,this.size,2);r.uniform2fv(this.addr,e)}function Og(r,t){const e=Er(t,this.size,3);r.uniform3fv(this.addr,e)}function Fg(r,t){const e=Er(t,this.size,4);r.uniform4fv(this.addr,e)}function Bg(r,t){const e=Er(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zg(r,t){const e=Er(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gg(r,t){const e=Er(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kg(r,t){r.uniform1iv(this.addr,t)}function Hg(r,t){r.uniform2iv(this.addr,t)}function Vg(r,t){r.uniform3iv(this.addr,t)}function Wg(r,t){r.uniform4iv(this.addr,t)}function Xg(r,t){r.uniform1uiv(this.addr,t)}function Yg(r,t){r.uniform2uiv(this.addr,t)}function qg(r,t){r.uniform3uiv(this.addr,t)}function $g(r,t){r.uniform4uiv(this.addr,t)}function Zg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);de(n,s)||(r.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||eh,s[o])}function Kg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);de(n,s)||(r.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||rh,s[o])}function jg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);de(n,s)||(r.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||sh,s[o])}function Jg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);de(n,s)||(r.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ih,s[o])}function Qg(r){switch(r){case 5126:return Ng;case 35664:return Ig;case 35665:return Og;case 35666:return Fg;case 35674:return Bg;case 35675:return zg;case 35676:return Gg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return Yg;case 36295:return qg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Jg}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ug(e.type)}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}}class n0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function hh(r,t){r.seq.push(t),r.map[t.id]=t}function i0(r,t,e){const n=r.name,i=n.length;for(Fo.lastIndex=0;;){const s=Fo.exec(n),o=Fo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hh(e,c===void 0?new t0(a,r,t):new e0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new n0(a),hh(e,h)),e=h}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);i0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function fh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const r0=37297;let s0=0;function a0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function o0(r){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(r);let n;switch(t===e?n="":t===Ts&&e===Es?n="LinearDisplayP3ToLinearSRGB":t===Es&&e===Ts&&(n="LinearSRGBToLinearDisplayP3"),r){case ii:case Ss:return[n,"LinearTransferOETF"];case vn:case so:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function dh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+a0(r.getShaderSource(t),o)}else return i}function l0(r,t){const e=o0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function c0(r,t){let e;switch(t){case Ac:e="Linear";break;case qa:e="Reinhard";break;case wc:e="OptimizedCineon";break;case Cc:e="ACESFilmic";break;case Rc:e="AgX";break;case Pc:e="Neutral";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function u0(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function h0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function f0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Tr(r){return r!==""}function ph(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(r){return r.replace(p0,_0)}const m0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _0(r,t){let e=Ft[t];if(e===void 0){const n=m0.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(g0,v0)}function v0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
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
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function M0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Hd:t="ENVMAP_BLENDING_ADD";break}return t}function E0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function T0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=x0(e),c=M0(e),u=S0(e),h=y0(e),f=E0(e),d=e.isWebGL2?"":u0(e),_=h0(e),g=f0(s),p=i.createProgram();let m,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),S.length>0&&(S+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),S=[d,gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Qn?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,l0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Bo(o),o=ph(o,e),o=mh(o,e),a=Bo(a),a=ph(a,e),a=mh(a,e),o=_h(o),a=_h(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=v+m+o,A=v+S+a,b=fh(i,i.VERTEX_SHADER,y),E=fh(i,i.FRAGMENT_SHADER,A);i.attachShader(p,b),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(J){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(b).trim(),X=i.getShaderInfoLog(E).trim();let B=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,b,E);else{const Y=dh(i,b,"vertex"),Z=dh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+K+`
`+Y+`
`+Z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||X==="")&&(q=!1);q&&(J.diagnostics={runnable:B,programLog:K,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:S}})}i.deleteShader(b),i.deleteShader(E),I=new Js(i,p),M=d0(i,p)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let M;this.getAttributes=function(){return M===void 0&&U(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,r0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let b0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w0(t),e.set(t,n)),n}}class w0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function C0(r,t,e,n,i,s,o){const a=new Au,l=new A0,c=new Set,u=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,J,K,N){const X=K.fog,B=N.geometry,q=M.isMeshStandardMaterial?K.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),Z=!!Y&&Y.mapping===Ms?Y.image.height:null,nt=g[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const rt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=rt!==void 0?rt.length:0;let G=0;B.morphAttributes.position!==void 0&&(G=1),B.morphAttributes.normal!==void 0&&(G=2),B.morphAttributes.color!==void 0&&(G=3);let D,H,tt,ft;if(nt){const $t=Sn[nt];D=$t.vertexShader,H=$t.fragmentShader}else D=M.vertexShader,H=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const dt=r.getRenderTarget(),ot=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,vt=!!M.map,O=!!M.matcap,oe=!!Y,yt=!!M.aoMap,Pt=!!M.lightMap,bt=!!M.bumpMap,Vt=!!M.normalMap,Nt=!!M.displacementMap,Bt=!!M.emissiveMap,Qt=!!M.metalnessMap,C=!!M.roughnessMap,x=M.anisotropy>0,$=M.clearcoat>0,j=M.iridescence>0,st=M.sheen>0,et=M.transmission>0,Lt=x&&!!M.anisotropyMap,wt=$&&!!M.clearcoatMap,ut=$&&!!M.clearcoatNormalMap,pt=$&&!!M.clearcoatRoughnessMap,Dt=j&&!!M.iridescenceMap,ct=j&&!!M.iridescenceThicknessMap,le=st&&!!M.sheenColorMap,Gt=st&&!!M.sheenRoughnessMap,Tt=!!M.specularMap,xt=!!M.specularColorMap,St=!!M.specularIntensityMap,R=et&&!!M.transmissionMap,Q=et&&!!M.thicknessMap,Mt=!!M.gradientMap,P=!!M.alphaMap,at=M.alphaTest>0,z=!!M.alphaHash,it=!!M.extensions;let mt=Qn;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(mt=r.toneMapping);const Ht={isWebGL2:h,shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:D,fragmentShader:H,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:At,instancing:ot,instancingColor:ot&&N.instanceColor!==null,instancingMorph:ot&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ii,alphaToCoverage:!!M.alphaToCoverage,map:vt,matcap:O,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:Z,aoMap:yt,lightMap:Pt,bumpMap:bt,normalMap:Vt,displacementMap:d&&Nt,emissiveMap:Bt,normalMapObjectSpace:Vt&&M.normalMapType===ep,normalMapTangentSpace:Vt&&M.normalMapType===tp,metalnessMap:Qt,roughnessMap:C,anisotropy:x,anisotropyMap:Lt,clearcoat:$,clearcoatMap:wt,clearcoatNormalMap:ut,clearcoatRoughnessMap:pt,iridescence:j,iridescenceMap:Dt,iridescenceThicknessMap:ct,sheen:st,sheenColorMap:le,sheenRoughnessMap:Gt,specularMap:Tt,specularColorMap:xt,specularIntensityMap:St,transmission:et,transmissionMap:R,thicknessMap:Q,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:P,alphaTest:at,alphaHash:z,combine:M.combine,mapUv:vt&&p(M.map.channel),aoMapUv:yt&&p(M.aoMap.channel),lightMapUv:Pt&&p(M.lightMap.channel),bumpMapUv:bt&&p(M.bumpMap.channel),normalMapUv:Vt&&p(M.normalMap.channel),displacementMapUv:Nt&&p(M.displacementMap.channel),emissiveMapUv:Bt&&p(M.emissiveMap.channel),metalnessMapUv:Qt&&p(M.metalnessMap.channel),roughnessMapUv:C&&p(M.roughnessMap.channel),anisotropyMapUv:Lt&&p(M.anisotropyMap.channel),clearcoatMapUv:wt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(M.sheenRoughnessMap.channel),specularMapUv:Tt&&p(M.specularMap.channel),specularColorMapUv:xt&&p(M.specularColorMap.channel),specularIntensityMapUv:St&&p(M.specularIntensityMap.channel),transmissionMapUv:R&&p(M.transmissionMap.channel),thicknessMapUv:Q&&p(M.thicknessMap.channel),alphaMapUv:P&&p(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Vt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(vt||P),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:mt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:vt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rn,flipSided:M.side===ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:it&&M.extensions.derivatives===!0,extensionFragDepth:it&&M.extensions.fragDepth===!0,extensionDrawBuffers:it&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:it&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function S(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const J in M.defines)w.push(J),w.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(v(w,M),y(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),M.push(a.mask)}function A(M){const w=g[M.type];let J;if(w){const K=Sn[w];J=jr.clone(K.uniforms)}else J=M.uniforms;return J}function b(M,w){let J;for(let K=0,N=u.length;K<N;K++){const X=u[K];if(X.cacheKey===w){J=X,++J.usedTimes;break}}return J===void 0&&(J=new T0(r,w,M,s),u.push(J)),J}function E(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function U(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:A,acquireProgram:b,releaseProgram:E,releaseShaderCache:U,programs:u,dispose:I}}function R0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function P0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||P0),n.length>1&&n.sort(f||vh),i.length>1&&i.sort(f||vh)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function L0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new xh,r.set(n,[o])):i>=s.length?(o=new xh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function D0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function U0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let N0=0;function I0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function O0(r,t){const e=new D0,n=U0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,o=new ne,a=new ne;function l(u,h){let f=0,d=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let g=0,p=0,m=0,S=0,v=0,y=0,A=0,b=0,E=0,U=0,I=0;u.sort(I0);const M=h===!0?Math.PI:1;for(let J=0,K=u.length;J<K;J++){const N=u[J],X=N.color,B=N.intensity,q=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*B*M,d+=X.g*B*M,_+=X.b*B*M;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],B);I++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const nt=N.shadow,rt=n.get(N);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,i.directionalShadow[g]=rt,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=N.shadow.matrix,y++}i.directional[g]=Z,g++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(X).multiplyScalar(B*M),Z.distance=q,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[m]=Z;const nt=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,nt.updateMatrices(N),N.castShadow&&U++),i.spotLightMatrix[m]=nt.matrix,N.castShadow){const rt=n.get(N);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,i.spotShadow[m]=rt,i.spotShadowMap[m]=Y,b++}m++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(X).multiplyScalar(B),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=Z,S++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*M),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const nt=N.shadow,rt=n.get(N);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,i.pointShadow[p]=rt,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=N.shadow.matrix,A++}i.point[p]=Z,p++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(B*M),Z.groundColor.copy(N.groundColor).multiplyScalar(B*M),i.hemi[v]=Z,v++}}S>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==S||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==A||w.numSpotShadows!==b||w.numSpotMaps!==E||w.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,w.directionalLength=g,w.pointLength=p,w.spotLength=m,w.rectAreaLength=S,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=A,w.numSpotShadows=b,w.numSpotMaps=E,w.numLightProbes=I,i.version=N0++)}function c(u,h){let f=0,d=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const y=u[S];if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(y.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),_++}else if(y.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Mh(r,t){const e=new O0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function F0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Mh(r,t),e.set(s,[l])):o>=a.length?(l=new Mh(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class B0 extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function H0(r,t,e){let n=new Lo;const i=new lt,s=new lt,o=new ee,a=new B0({depthPacking:Qd}),l=new z0,c={},u=e.maxTextureSize,h={[Jn]:ke,[ke]:Jn,[Rn]:Rn},f=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:G0,fragmentShader:k0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ze;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let m=this.type;this.render=function(b,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=r.getRenderTarget(),M=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Pn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const K=m!==Cn&&this.type===Cn,N=m===Cn&&this.type!==Cn;for(let X=0,B=b.length;X<B;X++){const q=b[X],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,Y.mapSize.y=s.y)),Y.map===null||K===!0||N===!0){const rt=this.type!==Cn?{minFilter:Pe,magFilter:Pe}:{};Y.map!==null&&Y.map.dispose(),Y.map=new un(i.x,i.y,rt),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const nt=Y.getViewportCount();for(let rt=0;rt<nt;rt++){const _t=Y.getViewport(rt);o.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),J.viewport(o),Y.updateMatrices(q,rt),n=Y.getFrustum(),y(E,U,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Cn&&S(Y,U),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(I,M,w)};function S(b,E){const U=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new un(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,U,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,U,d,g,null)}function v(b,E,U,I){let M=null;const w=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=U.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const J=M.uuid,K=E.uuid;let N=c[J];N===void 0&&(N={},c[J]=N);let X=N[K];X===void 0&&(X=M.clone(),N[K]=X,E.addEventListener("dispose",A)),M=X}if(M.visible=E.visible,M.wireframe=E.wireframe,I===Cn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const J=r.properties.get(M);J.light=U}return M}function y(b,E,U,I,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const K=t.update(b),N=b.material;if(Array.isArray(N)){const X=K.groups;for(let B=0,q=X.length;B<q;B++){const Y=X[B],Z=N[Y.materialIndex];if(Z&&Z.visible){const nt=v(b,Z,I,M);b.onBeforeShadow(r,b,E,U,K,nt,Y),r.renderBufferDirect(U,null,K,nt,b,Y),b.onAfterShadow(r,b,E,U,K,nt,Y)}}}else if(N.visible){const X=v(b,N,I,M);b.onBeforeShadow(r,b,E,U,K,X,null),r.renderBufferDirect(U,null,K,X,b,null),b.onAfterShadow(r,b,E,U,K,X,null)}}const J=b.children;for(let K=0,N=J.length;K<N;K++)y(J[K],E,U,I,M)}function A(b){b.target.removeEventListener("dispose",A);for(const U in c){const I=c[U],M=b.target.uuid;M in I&&(I[M].dispose(),delete I[M])}}}function V0(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const at=new ee;let z=null;const it=new ee(0,0,0,0);return{setMask:function(mt){z!==mt&&!P&&(r.colorMask(mt,mt,mt,mt),z=mt)},setLocked:function(mt){P=mt},setClear:function(mt,Ht,$t,jt,ce){ce===!0&&(mt*=jt,Ht*=jt,$t*=jt),at.set(mt,Ht,$t,jt),it.equals(at)===!1&&(r.clearColor(mt,Ht,$t,jt),it.copy(at))},reset:function(){P=!1,z=null,it.set(-1,0,0,0)}}}function s(){let P=!1,at=null,z=null,it=null;return{setTest:function(mt){mt?ot(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(mt){at!==mt&&!P&&(r.depthMask(mt),at=mt)},setFunc:function(mt){if(z!==mt){switch(mt){case Nd:r.depthFunc(r.NEVER);break;case Id:r.depthFunc(r.ALWAYS);break;case Od:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case Fd:r.depthFunc(r.EQUAL);break;case Bd:r.depthFunc(r.GEQUAL);break;case zd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}z=mt}},setLocked:function(mt){P=mt},setClear:function(mt){it!==mt&&(r.clearDepth(mt),it=mt)},reset:function(){P=!1,at=null,z=null,it=null}}}function o(){let P=!1,at=null,z=null,it=null,mt=null,Ht=null,$t=null,jt=null,ce=null;return{setTest:function(Yt){P||(Yt?ot(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Yt){at!==Yt&&!P&&(r.stencilMask(Yt),at=Yt)},setFunc:function(Yt,te,Ce){(z!==Yt||it!==te||mt!==Ce)&&(r.stencilFunc(Yt,te,Ce),z=Yt,it=te,mt=Ce)},setOp:function(Yt,te,Ce){(Ht!==Yt||$t!==te||jt!==Ce)&&(r.stencilOp(Yt,te,Ce),Ht=Yt,$t=te,jt=Ce)},setLocked:function(Yt){P=Yt},setClear:function(Yt){ce!==Yt&&(r.clearStencil(Yt),ce=Yt)},reset:function(){P=!1,at=null,z=null,it=null,mt=null,Ht=null,$t=null,jt=null,ce=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,v=null,y=null,A=null,b=null,E=null,U=null,I=new Xt(0,0,0),M=0,w=!1,J=null,K=null,N=null,X=null,B=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=Z>=1):nt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=Z>=2);let rt=null,_t={};const G=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),H=new ee().fromArray(G),tt=new ee().fromArray(D);function ft(P,at,z,it){const mt=new Uint8Array(4),Ht=r.createTexture();r.bindTexture(P,Ht),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<z;$t++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(at,0,r.RGBA,1,1,it,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(at+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return Ht}const dt={};dt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(dt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ot(r.DEPTH_TEST),l.setFunc(xs),Nt(!1),Bt(xc),ot(r.CULL_FACE),bt(Pn);function ot(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function At(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function vt(P,at){return d[P]!==at?(r.bindFramebuffer(P,at),d[P]=at,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=at),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=at)),!0):!1}function O(P,at){let z=g,it=!1;if(P){z=_.get(at),z===void 0&&(z=[],_.set(at,z));const mt=P.textures;if(z.length!==mt.length||z[0]!==r.COLOR_ATTACHMENT0){for(let Ht=0,$t=mt.length;Ht<$t;Ht++)z[Ht]=r.COLOR_ATTACHMENT0+Ht;z.length=mt.length,it=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,it=!0);if(it)if(e.isWebGL2)r.drawBuffers(z);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function oe(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const yt={[Mi]:r.FUNC_ADD,[xd]:r.FUNC_SUBTRACT,[Md]:r.FUNC_REVERSE_SUBTRACT};if(n)yt[Ec]=r.MIN,yt[Tc]=r.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(yt[Ec]=P.MIN_EXT,yt[Tc]=P.MAX_EXT)}const Pt={[Sd]:r.ZERO,[yd]:r.ONE,[Ed]:r.SRC_COLOR,[Xa]:r.SRC_ALPHA,[Rd]:r.SRC_ALPHA_SATURATE,[wd]:r.DST_COLOR,[bd]:r.DST_ALPHA,[Td]:r.ONE_MINUS_SRC_COLOR,[Ya]:r.ONE_MINUS_SRC_ALPHA,[Cd]:r.ONE_MINUS_DST_COLOR,[Ad]:r.ONE_MINUS_DST_ALPHA,[Pd]:r.CONSTANT_COLOR,[Ld]:r.ONE_MINUS_CONSTANT_COLOR,[Dd]:r.CONSTANT_ALPHA,[Ud]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(P,at,z,it,mt,Ht,$t,jt,ce,Yt){if(P===Pn){m===!0&&(At(r.BLEND),m=!1);return}if(m===!1&&(ot(r.BLEND),m=!0),P!==vd){if(P!==S||Yt!==w){if((v!==Mi||b!==Mi)&&(r.blendEquation(r.FUNC_ADD),v=Mi,b=Mi),Yt)switch(P){case Ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wa:r.blendFunc(r.ONE,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,A=null,E=null,U=null,I.set(0,0,0),M=0,S=P,w=Yt}return}mt=mt||at,Ht=Ht||z,$t=$t||it,(at!==v||mt!==b)&&(r.blendEquationSeparate(yt[at],yt[mt]),v=at,b=mt),(z!==y||it!==A||Ht!==E||$t!==U)&&(r.blendFuncSeparate(Pt[z],Pt[it],Pt[Ht],Pt[$t]),y=z,A=it,E=Ht,U=$t),(jt.equals(I)===!1||ce!==M)&&(r.blendColor(jt.r,jt.g,jt.b,ce),I.copy(jt),M=ce),S=P,w=!1}function Vt(P,at){P.side===Rn?At(r.CULL_FACE):ot(r.CULL_FACE);let z=P.side===ke;at&&(z=!z),Nt(z),P.blending===Ji&&P.transparent===!1?bt(Pn):bt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const it=P.stencilWrite;c.setTest(it),it&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),C(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){J!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),J=P)}function Bt(P){P!==md?(ot(r.CULL_FACE),P!==K&&(P===xc?r.cullFace(r.BACK):P===_d?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),K=P}function Qt(P){P!==N&&(Y&&r.lineWidth(P),N=P)}function C(P,at,z){P?(ot(r.POLYGON_OFFSET_FILL),(X!==at||B!==z)&&(r.polygonOffset(at,z),X=at,B=z)):At(r.POLYGON_OFFSET_FILL)}function x(P){P?ot(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function $(P){P===void 0&&(P=r.TEXTURE0+q-1),rt!==P&&(r.activeTexture(P),rt=P)}function j(P,at,z){z===void 0&&(rt===null?z=r.TEXTURE0+q-1:z=rt);let it=_t[z];it===void 0&&(it={type:void 0,texture:void 0},_t[z]=it),(it.type!==P||it.texture!==at)&&(rt!==z&&(r.activeTexture(z),rt=z),r.bindTexture(P,at||dt[P]),it.type=P,it.texture=at)}function st(){const P=_t[rt];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(P){H.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),H.copy(P))}function St(P){tt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),tt.copy(P))}function R(P,at){let z=h.get(at);z===void 0&&(z=new WeakMap,h.set(at,z));let it=z.get(P);it===void 0&&(it=r.getUniformBlockIndex(at,P.name),z.set(P,it))}function Q(P,at){const it=h.get(at).get(P);u.get(at)!==it&&(r.uniformBlockBinding(at,it,P.__bindingPointIndex),u.set(at,it))}function Mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},rt=null,_t={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,v=null,y=null,A=null,b=null,E=null,U=null,I=new Xt(0,0,0),M=0,w=!1,J=null,K=null,N=null,X=null,B=null,H.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ot,disable:At,bindFramebuffer:vt,drawBuffers:O,useProgram:oe,setBlending:bt,setMaterial:Vt,setFlipSided:Nt,setCullFace:Bt,setLineWidth:Qt,setPolygonOffset:C,setScissorTest:x,activeTexture:$,bindTexture:j,unbindTexture:st,compressedTexImage2D:et,compressedTexImage3D:Lt,texImage2D:Gt,texImage3D:Tt,updateUBOMapping:R,uniformBlockBinding:Q,texStorage2D:ct,texStorage3D:le,texSubImage2D:wt,texSubImage3D:ut,compressedTexSubImage2D:pt,compressedTexSubImage3D:Dt,scissor:xt,viewport:St,reset:Mt}}function W0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new lt,h=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return _?new OffscreenCanvas(C,x):ws("canvas")}function p(C,x,$,j){let st=1;const et=Qt(C);if((et.width>j||et.height>j)&&(st=j/Math.max(et.width,et.height)),st<1||x===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Lt=x?As:Math.floor,wt=Lt(st*et.width),ut=Lt(st*et.height);f===void 0&&(f=g(wt,ut));const pt=$?g(wt,ut):f;return pt.width=wt,pt.height=ut,pt.getContext("2d").drawImage(C,0,0,wt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+wt+"x"+ut+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){const x=Qt(C);return lo(x.width)&&lo(x.height)}function S(C){return a?!1:C.wrapS!==ln||C.wrapT!==ln||C.minFilter!==Pe&&C.minFilter!==He}function v(C,x){return C.generateMipmaps&&x&&C.minFilter!==Pe&&C.minFilter!==He}function y(C){r.generateMipmap(C)}function A(C,x,$,j,st=!1){if(a===!1)return x;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=x;if(x===r.RED&&($===r.FLOAT&&(et=r.R32F),$===r.HALF_FLOAT&&(et=r.R16F),$===r.UNSIGNED_BYTE&&(et=r.R8)),x===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(et=r.R8UI),$===r.UNSIGNED_SHORT&&(et=r.R16UI),$===r.UNSIGNED_INT&&(et=r.R32UI),$===r.BYTE&&(et=r.R8I),$===r.SHORT&&(et=r.R16I),$===r.INT&&(et=r.R32I)),x===r.RG&&($===r.FLOAT&&(et=r.RG32F),$===r.HALF_FLOAT&&(et=r.RG16F),$===r.UNSIGNED_BYTE&&(et=r.RG8)),x===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(et=r.RG8UI),$===r.UNSIGNED_SHORT&&(et=r.RG16UI),$===r.UNSIGNED_INT&&(et=r.RG32UI),$===r.BYTE&&(et=r.RG8I),$===r.SHORT&&(et=r.RG16I),$===r.INT&&(et=r.RG32I)),x===r.RGBA){const Lt=st?ys:qt.getTransfer(j);$===r.FLOAT&&(et=r.RGBA32F),$===r.HALF_FLOAT&&(et=r.RGBA16F),$===r.UNSIGNED_BYTE&&(et=Lt===Jt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(C,x,$){return v(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==Pe&&C.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){return C===Pe||C===Dc||C===kr?r.NEAREST:r.LINEAR}function U(C){const x=C.target;x.removeEventListener("dispose",U),M(x),x.isVideoTexture&&h.delete(x)}function I(C){const x=C.target;x.removeEventListener("dispose",I),J(x)}function M(C){const x=n.get(C);if(x.__webglInit===void 0)return;const $=C.source,j=d.get($);if(j){const st=j[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(C),Object.keys(j).length===0&&d.delete($)}n.remove(C)}function w(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const $=C.source,j=d.get($);delete j[x.__cacheKey],o.memory.textures--}function J(C){const x=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let st=0;st<x.__webglFramebuffer[j].length;st++)r.deleteFramebuffer(x.__webglFramebuffer[j][st]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const $=C.textures;for(let j=0,st=$.length;j<st;j++){const et=n.get($[j]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove($[j])}n.remove(C)}let K=0;function N(){K=0}function X(){const C=K;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),K+=1,C}function B(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function q(C,x){const $=n.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,C,x);return}}e.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+x)}function Y(C,x){const $=n.get(C);if(C.version>0&&$.__version!==C.version){tt($,C,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+x)}function Z(C,x){const $=n.get(C);if(C.version>0&&$.__version!==C.version){tt($,C,x);return}e.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+x)}function nt(C,x){const $=n.get(C);if(C.version>0&&$.__version!==C.version){ft($,C,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+x)}const rt={[Ka]:r.REPEAT,[ln]:r.CLAMP_TO_EDGE,[ja]:r.MIRRORED_REPEAT},_t={[Pe]:r.NEAREST,[Dc]:r.NEAREST_MIPMAP_NEAREST,[kr]:r.NEAREST_MIPMAP_LINEAR,[He]:r.LINEAR,[Ja]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},G={[np]:r.NEVER,[lp]:r.ALWAYS,[ip]:r.LESS,[fu]:r.LEQUAL,[rp]:r.EQUAL,[op]:r.GEQUAL,[sp]:r.GREATER,[ap]:r.NOTEQUAL};function D(C,x,$){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===Ja||x.magFilter===kr||x.magFilter===Si||x.minFilter===He||x.minFilter===Ja||x.minFilter===kr||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(r.texParameteri(C,r.TEXTURE_WRAP_S,rt[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,rt[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,rt[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,_t[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,_t[x.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(x.wrapS!==ln||x.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E(x.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E(x.minFilter)),x.minFilter!==Pe&&x.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,G[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pe||x.minFilter!==kr&&x.minFilter!==Si||x.type===Ln&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Dn&&t.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function H(C,x){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",U));const j=x.source;let st=d.get(j);st===void 0&&(st={},d.set(j,st));const et=B(x);if(et!==C.__cacheKey){st[et]===void 0&&(st[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),st[et].usedTimes++;const Lt=st[C.__cacheKey];Lt!==void 0&&(st[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(x)),C.__cacheKey=et,C.__webglTexture=st[et].texture}return $}function tt(C,x,$){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const st=H(C,x),et=x.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+$);const Lt=n.get(et);if(et.version!==Lt.__version||st===!0){e.activeTexture(r.TEXTURE0+$);const wt=qt.getPrimaries(qt.workingColorSpace),ut=x.colorSpace===ni?null:qt.getPrimaries(x.colorSpace),pt=x.colorSpace===ni||wt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Dt=S(x)&&m(x.image)===!1;let ct=p(x.image,Dt,!1,i.maxTextureSize);ct=Bt(x,ct);const le=m(ct)||a,Gt=s.convert(x.format,x.colorSpace);let Tt=s.convert(x.type),xt=A(x.internalFormat,Gt,Tt,x.colorSpace,x.isVideoTexture);D(j,x,le);let St;const R=x.mipmaps,Q=a&&x.isVideoTexture!==!0&&xt!==Vc,Mt=Lt.__version===void 0||st===!0,P=et.dataReady,at=b(x,ct,le);if(x.isDepthTexture)xt=r.DEPTH_COMPONENT,a?x.type===Ln?xt=r.DEPTH_COMPONENT32F:x.type===ei?xt=r.DEPTH_COMPONENT24:x.type===yi?xt=r.DEPTH24_STENCIL8:xt=r.DEPTH_COMPONENT16:x.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ei&&xt===r.DEPTH_COMPONENT&&x.type!==Qa&&x.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ei,Tt=s.convert(x.type)),x.format===er&&xt===r.DEPTH_COMPONENT&&(xt=r.DEPTH_STENCIL,x.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=yi,Tt=s.convert(x.type))),Mt&&(Q?e.texStorage2D(r.TEXTURE_2D,1,xt,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,xt,ct.width,ct.height,0,Gt,Tt,null));else if(x.isDataTexture)if(R.length>0&&le){Q&&Mt&&e.texStorage2D(r.TEXTURE_2D,at,xt,R[0].width,R[0].height);for(let z=0,it=R.length;z<it;z++)St=R[z],Q?P&&e.texSubImage2D(r.TEXTURE_2D,z,0,0,St.width,St.height,Gt,Tt,St.data):e.texImage2D(r.TEXTURE_2D,z,xt,St.width,St.height,0,Gt,Tt,St.data);x.generateMipmaps=!1}else Q?(Mt&&e.texStorage2D(r.TEXTURE_2D,at,xt,ct.width,ct.height),P&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,Gt,Tt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,xt,ct.width,ct.height,0,Gt,Tt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Q&&Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,xt,R[0].width,R[0].height,ct.depth);for(let z=0,it=R.length;z<it;z++)St=R[z],x.format!==cn?Gt!==null?Q?P&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,St.width,St.height,ct.depth,Gt,St.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,z,xt,St.width,St.height,ct.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?P&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,St.width,St.height,ct.depth,Gt,Tt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,z,xt,St.width,St.height,ct.depth,0,Gt,Tt,St.data)}else{Q&&Mt&&e.texStorage2D(r.TEXTURE_2D,at,xt,R[0].width,R[0].height);for(let z=0,it=R.length;z<it;z++)St=R[z],x.format!==cn?Gt!==null?Q?P&&e.compressedTexSubImage2D(r.TEXTURE_2D,z,0,0,St.width,St.height,Gt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,z,xt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?P&&e.texSubImage2D(r.TEXTURE_2D,z,0,0,St.width,St.height,Gt,Tt,St.data):e.texImage2D(r.TEXTURE_2D,z,xt,St.width,St.height,0,Gt,Tt,St.data)}else if(x.isDataArrayTexture)Q?(Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,xt,ct.width,ct.height,ct.depth),P&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Gt,Tt,ct.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,ct.width,ct.height,ct.depth,0,Gt,Tt,ct.data);else if(x.isData3DTexture)Q?(Mt&&e.texStorage3D(r.TEXTURE_3D,at,xt,ct.width,ct.height,ct.depth),P&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Gt,Tt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,xt,ct.width,ct.height,ct.depth,0,Gt,Tt,ct.data);else if(x.isFramebufferTexture){if(Mt)if(Q)e.texStorage2D(r.TEXTURE_2D,at,xt,ct.width,ct.height);else{let z=ct.width,it=ct.height;for(let mt=0;mt<at;mt++)e.texImage2D(r.TEXTURE_2D,mt,xt,z,it,0,Gt,Tt,null),z>>=1,it>>=1}}else if(R.length>0&&le){if(Q&&Mt){const z=Qt(R[0]);e.texStorage2D(r.TEXTURE_2D,at,xt,z.width,z.height)}for(let z=0,it=R.length;z<it;z++)St=R[z],Q?P&&e.texSubImage2D(r.TEXTURE_2D,z,0,0,Gt,Tt,St):e.texImage2D(r.TEXTURE_2D,z,xt,Gt,Tt,St);x.generateMipmaps=!1}else if(Q){if(Mt){const z=Qt(ct);e.texStorage2D(r.TEXTURE_2D,at,xt,z.width,z.height)}P&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,Tt,ct)}else e.texImage2D(r.TEXTURE_2D,0,xt,Gt,Tt,ct);v(x,le)&&y(j),Lt.__version=et.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ft(C,x,$){if(x.image.length!==6)return;const j=H(C,x),st=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+$);const et=n.get(st);if(st.version!==et.__version||j===!0){e.activeTexture(r.TEXTURE0+$);const Lt=qt.getPrimaries(qt.workingColorSpace),wt=x.colorSpace===ni?null:qt.getPrimaries(x.colorSpace),ut=x.colorSpace===ni||Lt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const pt=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let z=0;z<6;z++)!pt&&!Dt?ct[z]=p(x.image[z],!1,!0,i.maxCubemapSize):ct[z]=Dt?x.image[z].image:x.image[z],ct[z]=Bt(x,ct[z]);const le=ct[0],Gt=m(le)||a,Tt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),St=A(x.internalFormat,Tt,xt,x.colorSpace),R=a&&x.isVideoTexture!==!0,Q=et.__version===void 0||j===!0,Mt=st.dataReady;let P=b(x,le,Gt);D(r.TEXTURE_CUBE_MAP,x,Gt);let at;if(pt){R&&Q&&e.texStorage2D(r.TEXTURE_CUBE_MAP,P,St,le.width,le.height);for(let z=0;z<6;z++){at=ct[z].mipmaps;for(let it=0;it<at.length;it++){const mt=at[it];x.format!==cn?Tt!==null?R?Mt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it,0,0,mt.width,mt.height,Tt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it,0,0,mt.width,mt.height,Tt,xt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it,St,mt.width,mt.height,0,Tt,xt,mt.data)}}}else{if(at=x.mipmaps,R&&Q){at.length>0&&P++;const z=Qt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,P,St,z.width,z.height)}for(let z=0;z<6;z++)if(Dt){R?Mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ct[z].width,ct[z].height,Tt,xt,ct[z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,St,ct[z].width,ct[z].height,0,Tt,xt,ct[z].data);for(let it=0;it<at.length;it++){const Ht=at[it].image[z].image;R?Mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it+1,0,0,Ht.width,Ht.height,Tt,xt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it+1,St,Ht.width,Ht.height,0,Tt,xt,Ht.data)}}else{R?Mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Tt,xt,ct[z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,St,Tt,xt,ct[z]);for(let it=0;it<at.length;it++){const mt=at[it];R?Mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it+1,0,0,Tt,xt,mt.image[z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,it+1,St,Tt,xt,mt.image[z])}}}v(x,Gt)&&y(r.TEXTURE_CUBE_MAP),et.__version=st.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function dt(C,x,$,j,st,et){const Lt=s.convert($.format,$.colorSpace),wt=s.convert($.type),ut=A($.internalFormat,Lt,wt,$.colorSpace);if(!n.get(x).__hasExternalTextures){const Dt=Math.max(1,x.width>>et),ct=Math.max(1,x.height>>et);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,et,ut,Dt,ct,x.depth,0,Lt,wt,null):e.texImage2D(st,et,ut,Dt,ct,0,Lt,wt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Vt(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,st,n.get($).__webglTexture,0,bt(x)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,st,n.get($).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(C,x,$){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer&&!x.stencilBuffer){let j=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if($||Vt(x)){const st=x.depthTexture;st&&st.isDepthTexture&&(st.type===Ln?j=r.DEPTH_COMPONENT32F:st.type===ei&&(j=r.DEPTH_COMPONENT24));const et=bt(x);Vt(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,j,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,j,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(x.depthBuffer&&x.stencilBuffer){const j=bt(x);$&&Vt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,x.width,x.height):Vt(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const j=x.textures;for(let st=0;st<j.length;st++){const et=j[st],Lt=s.convert(et.format,et.colorSpace),wt=s.convert(et.type),ut=A(et.internalFormat,Lt,wt,et.colorSpace),pt=bt(x);$&&Vt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,ut,x.width,x.height):Vt(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,ut,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ut,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const j=n.get(x.depthTexture).__webglTexture,st=bt(x);if(x.depthTexture.format===Ei)Vt(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(x.depthTexture.format===er)Vt(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function vt(C){const x=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,C)}else if($){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=r.createRenderbuffer(),ot(x.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ot(x.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function O(C,x,$){const j=n.get(C);x!==void 0&&dt(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&vt(C)}function oe(C){const x=C.texture,$=n.get(C),j=n.get(x);C.addEventListener("dispose",I);const st=C.textures,et=C.isWebGLCubeRenderTarget===!0,Lt=st.length>1,wt=m(C)||a;if(Lt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,o.memory.textures++),et){$.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[ut]=[];for(let pt=0;pt<x.mipmaps.length;pt++)$.__webglFramebuffer[ut][pt]=r.createFramebuffer()}else $.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)$.__webglFramebuffer[ut]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Lt)if(i.drawBuffers)for(let ut=0,pt=st.length;ut<pt;ut++){const Dt=n.get(st[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Vt(C)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ut=0;ut<st.length;ut++){const pt=st[ut];$.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ut]);const Dt=s.convert(pt.format,pt.colorSpace),ct=s.convert(pt.type),le=A(pt.internalFormat,Dt,ct,pt.colorSpace,C.isXRRenderTarget===!0),Gt=bt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,le,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,$.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),ot($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),D(r.TEXTURE_CUBE_MAP,x,wt);for(let ut=0;ut<6;ut++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)dt($.__webglFramebuffer[ut][pt],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else dt($.__webglFramebuffer[ut],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(x,wt)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ut=0,pt=st.length;ut<pt;ut++){const Dt=st[ut],ct=n.get(Dt);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),D(r.TEXTURE_2D,Dt,wt),dt($.__webglFramebuffer,C,Dt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),v(Dt,wt)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ut=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,j.__webglTexture),D(ut,x,wt),a&&x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)dt($.__webglFramebuffer[pt],C,x,r.COLOR_ATTACHMENT0,ut,pt);else dt($.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,ut,0);v(x,wt)&&y(ut),e.unbindTexture()}C.depthBuffer&&vt(C)}function yt(C){const x=m(C)||a,$=C.textures;for(let j=0,st=$.length;j<st;j++){const et=$[j];if(v(et,x)){const Lt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=n.get(et).__webglTexture;e.bindTexture(Lt,wt),y(Lt),e.unbindTexture()}}}function Pt(C){if(a&&C.samples>0&&Vt(C)===!1){const x=C.textures,$=C.width,j=C.height;let st=r.COLOR_BUFFER_BIT;const et=[],Lt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(C),ut=x.length>1;if(ut)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){et.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&et.push(Lt);const Dt=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(Dt===!1&&(C.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]),Dt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Lt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Lt])),ut){const ct=n.get(x[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,$,j,0,0,$,j,st,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const Dt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function bt(C){return Math.min(i.maxSamples,C.samples)}function Vt(C){const x=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Nt(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Bt(C,x){const $=C.colorSpace,j=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ao||$!==ii&&$!==ni&&(qt.getTransfer($)===Jt?a===!1?t.has("EXT_sRGB")===!0&&j===cn?(C.format=ao,C.minFilter=He,C.generateMipmaps=!1):x=Mu.sRGBToLinear(x):(j!==cn||st!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}function Qt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=nt,this.rebindTextures=O,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Vt}function X0(r,t,e){const n=e.isWebGL2;function i(s,o=ni){let a;const l=qt.getTransfer(o);if(s===ti)return r.UNSIGNED_BYTE;if(s===Nc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ic)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wd)return r.BYTE;if(s===Xd)return r.SHORT;if(s===Qa)return r.UNSIGNED_SHORT;if(s===Uc)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===Ln)return r.FLOAT;if(s===Dn)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yd)return r.ALPHA;if(s===cn)return r.RGBA;if(s===qd)return r.LUMINANCE;if(s===$d)return r.LUMINANCE_ALPHA;if(s===Ei)return r.DEPTH_COMPONENT;if(s===er)return r.DEPTH_STENCIL;if(s===ao)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zd)return r.RED;if(s===Oc)return r.RED_INTEGER;if(s===Kd)return r.RG;if(s===Fc)return r.RG_INTEGER;if(s===Bc)return r.RGBA_INTEGER;if(s===to||s===eo||s===no||s===io)if(l===Jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===to)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===to)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===no)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zc||s===Gc||s===kc||s===Hc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wc||s===Xc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wc)return l===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yc||s===qc||s===$c||s===Zc||s===Kc||s===jc||s===Jc||s===Qc||s===tu||s===eu||s===nu||s===iu||s===ru||s===su)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Yc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$c)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qc)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tu)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eu)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nu)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===iu)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ru)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===su)return l===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ro||s===au||s===ou)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ro)return l===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===au)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ou)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jd||s===lu||s===cu||s===uu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ro)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Y0 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qs extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Ne({extensions:{fragDepth:!0},vertexShader:$0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mn(new $s(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class j0 extends Ti{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new K0,p=e.getContextAttributes();let m=null,S=null;const v=[],y=[],A=new lt;let b=null;const E=new Ke;E.layers.enable(1),E.viewport=new ee;const U=new Ke;U.layers.enable(2),U.viewport=new ee;const I=[E,U],M=new Y0;M.layers.enable(1),M.layers.enable(2);let w=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let H=v[D];return H===void 0&&(H=new zo,v[D]=H),H.getTargetRaySpace()},this.getControllerGrip=function(D){let H=v[D];return H===void 0&&(H=new zo,v[D]=H),H.getGripSpace()},this.getHand=function(D){let H=v[D];return H===void 0&&(H=new zo,v[D]=H),H.getHandSpace()};function K(D){const H=y.indexOf(D.inputSource);if(H===-1)return;const tt=v[H];tt!==void 0&&(tt.update(D.inputSource,D.frame,c||o),tt.dispatchEvent({type:D.type,data:D.inputSource}))}function N(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let D=0;D<v.length;D++){const H=y[D];H!==null&&(y[D]=null,v[D].disconnect(H))}w=null,J=null,g.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,S=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new un(d.framebufferWidth,d.framebufferHeight,{format:cn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let H=null,tt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=p.stencil?er:Ei,tt=p.stencil?yi:ei);const dt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new un(f.textureWidth,f.textureHeight,{format:cn,type:ti,depthTexture:new th(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const ot=t.properties.get(S);ot.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(D){for(let H=0;H<D.removed.length;H++){const tt=D.removed[H],ft=y.indexOf(tt);ft>=0&&(y[ft]=null,v[ft].disconnect(tt))}for(let H=0;H<D.added.length;H++){const tt=D.added[H];let ft=y.indexOf(tt);if(ft===-1){for(let ot=0;ot<v.length;ot++)if(ot>=y.length){y.push(tt),ft=ot;break}else if(y[ot]===null){y[ot]=tt,ft=ot;break}if(ft===-1)break}const dt=v[ft];dt&&dt.connect(tt)}}const B=new L,q=new L;function Y(D,H,tt){B.setFromMatrixPosition(H.matrixWorld),q.setFromMatrixPosition(tt.matrixWorld);const ft=B.distanceTo(q),dt=H.projectionMatrix.elements,ot=tt.projectionMatrix.elements,At=dt[14]/(dt[10]-1),vt=dt[14]/(dt[10]+1),O=(dt[9]+1)/dt[5],oe=(dt[9]-1)/dt[5],yt=(dt[8]-1)/dt[0],Pt=(ot[8]+1)/ot[0],bt=At*yt,Vt=At*Pt,Nt=ft/(-yt+Pt),Bt=Nt*-yt;H.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Bt),D.translateZ(Nt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Qt=At+Nt,C=vt+Nt,x=bt-Bt,$=Vt+(ft-Bt),j=O*vt/C*Qt,st=oe*vt/C*Qt;D.projectionMatrix.makePerspective(x,$,j,st,Qt,C),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Z(D,H){H===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(H.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;g.texture!==null&&(D.near=g.depthNear,D.far=g.depthFar),M.near=U.near=E.near=D.near,M.far=U.far=E.far=D.far,(w!==M.near||J!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,J=M.far,E.near=w,E.far=J,U.near=w,U.far=J,E.updateProjectionMatrix(),U.updateProjectionMatrix(),D.updateProjectionMatrix());const H=D.parent,tt=M.cameras;Z(M,H);for(let ft=0;ft<tt.length;ft++)Z(tt[ft],H);tt.length===2?Y(M,E,U):M.projectionMatrix.copy(E.projectionMatrix),nt(D,M,H)};function nt(D,H,tt){tt===null?D.matrix.copy(H.matrixWorld):(D.matrix.copy(tt.matrixWorld),D.matrix.invert(),D.matrix.multiply(H.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(H.projectionMatrix),D.projectionMatrixInverse.copy(H.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Hr*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null};let rt=null;function _t(D,H){if(u=H.getViewerPose(c||o),_=H,u!==null){const tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ft=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let ot=0;ot<tt.length;ot++){const At=tt[ot];let vt=null;if(d!==null)vt=d.getViewport(At);else{const oe=h.getViewSubImage(f,At);vt=oe.viewport,ot===0&&(t.setRenderTargetTextures(S,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(S))}let O=I[ot];O===void 0&&(O=new Ke,O.layers.enable(ot),O.viewport=new ee,I[ot]=O),O.matrix.fromArray(At.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(At.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(vt.x,vt.y,vt.width,vt.height),ot===0&&(M.matrix.copy(O.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(O)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const ot=h.getDepthInformation(tt[0]);ot&&ot.isValid&&ot.texture&&g.init(t,ot,i.renderState)}}for(let tt=0;tt<v.length;tt++){const ft=y[tt],dt=v[tt];ft!==null&&dt!==void 0&&dt.update(ft,H,c||o)}g.render(t,M),rt&&rt(D,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),_=null}const G=new Xu;G.setAnimationLoop(_t),this.setAnimationLoop=function(D){rt=D},this.dispose=function(){}}}const Ni=new On,J0=new ne;function Q0(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),v=S.envMap,y=S.envMapRotation;if(v&&(p.envMap.value=v,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Ni)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tv(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(_(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(S,A);const b=t.render.frame;s[S.id]!==b&&(f(S),s[S.id]=b)}function u(S){const v=h();S.__bindingPointIndex=v;const y=r.createBuffer(),A=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],y=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const U=Array.isArray(y[b])?y[b]:[y[b]];for(let I=0,M=U.length;I<M;I++){const w=U[I];if(d(w,b,I,A)===!0){const J=w.__offset,K=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let X=0;X<K.length;X++){const B=K[X],q=g(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,J+N,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,v,y,A){const b=S.value,E=v+"_"+y;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const U=A[E];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return A[E]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function _(S){const v=S.uniforms;let y=0;const A=16;for(let E=0,U=v.length;E<U;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,w=I.length;M<w;M++){const J=I[M],K=Array.isArray(J.value)?J.value:[J.value];for(let N=0,X=K.length;N<X;N++){const B=K[N],q=g(B),Y=y%A;Y!==0&&A-Y<q.boundary&&(y+=A-Y),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=q.storage}}}const b=y%A;return b>0&&(y+=A-b),S.__size=y,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Sh{constructor(t={}){const{canvas:e=Tp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const v=this;let y=!1,A=0,b=0,E=null,U=-1,I=null;const M=new ee,w=new ee;let J=null;const K=new Xt(0);let N=0,X=e.width,B=e.height,q=1,Y=null,Z=null;const nt=new ee(0,0,X,B),rt=new ee(0,0,X,B);let _t=!1;const G=new Lo;let D=!1,H=!1,tt=null;const ft=new ne,dt=new lt,ot=new L,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return E===null?q:1}let O=n;function oe(T,F){for(let V=0;V<T.length;V++){const W=T[V],k=e.getContext(W,F);if(k!==null)return k}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",at,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),O=oe(F,T),O===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let yt,Pt,bt,Vt,Nt,Bt,Qt,C,x,$,j,st,et,Lt,wt,ut,pt,Dt,ct,le,Gt,Tt,xt,St;function R(){yt=new ag(O),Pt=new tg(O,yt,t),yt.init(Pt),Tt=new X0(O,yt,Pt),bt=new V0(O,yt,Pt),Vt=new cg(O),Nt=new R0,Bt=new W0(O,yt,bt,Nt,Pt,Tt,Vt),Qt=new ng(v),C=new sg(v),x=new Zp(O,Pt),xt=new J_(O,yt,x,Pt),$=new og(O,x,Vt,xt),j=new dg(O,$,x,Vt),ct=new fg(O,Pt,Bt),ut=new eg(Nt),st=new C0(v,Qt,C,yt,Pt,xt,ut),et=new Q0(v,Nt),Lt=new L0,wt=new F0(yt,Pt),Dt=new j_(v,Qt,C,bt,j,f,l),pt=new H0(v,j,Pt),St=new tv(O,Vt,Pt,bt),le=new Q_(O,yt,Vt,Pt),Gt=new lg(O,yt,Vt,Pt),Vt.programs=st.programs,v.capabilities=Pt,v.extensions=yt,v.properties=Nt,v.renderLists=Lt,v.shadowMap=pt,v.state=bt,v.info=Vt}R();const Q=new j0(v,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(X,B,!1))},this.getSize=function(T){return T.set(X,B)},this.setSize=function(T,F,V=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,B=F,e.width=Math.floor(T*q),e.height=Math.floor(F*q),V===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(X*q,B*q).floor()},this.setDrawingBufferSize=function(T,F,V){X=T,B=F,q=V,e.width=Math.floor(T*V),e.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,F,V,W){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,F,V,W),bt.viewport(M.copy(nt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,F,V,W){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,F,V,W),bt.scissor(w.copy(rt).multiplyScalar(q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(T){bt.setScissorTest(_t=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,F=!0,V=!0){let W=0;if(T){let k=!1;if(E!==null){const gt=E.texture.format;k=gt===Bc||gt===Fc||gt===Oc}if(k){const gt=E.texture.type,Et=gt===ti||gt===ei||gt===Qa||gt===yi||gt===Nc||gt===Ic,Ct=Dt.getClearColor(),Rt=Dt.getClearAlpha(),kt=Ct.r,Ut=Ct.g,It=Ct.b;Et?(d[0]=kt,d[1]=Ut,d[2]=It,d[3]=Rt,O.clearBufferuiv(O.COLOR,0,d)):(_[0]=kt,_[1]=Ut,_[2]=It,_[3]=Rt,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Lt.dispose(),wt.dispose(),Nt.dispose(),Qt.dispose(),C.dispose(),j.dispose(),xt.dispose(),St.dispose(),st.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ce),Q.removeEventListener("sessionend",Yt),tt&&(tt.dispose(),tt=null),te.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Vt.autoReset,F=pt.enabled,V=pt.autoUpdate,W=pt.needsUpdate,k=pt.type;R(),Vt.autoReset=T,pt.enabled=F,pt.autoUpdate=V,pt.needsUpdate=W,pt.type=k}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function z(T){const F=T.target;F.removeEventListener("dispose",z),it(F)}function it(T){mt(T),Nt.remove(T)}function mt(T){const F=Nt.get(T).programs;F!==void 0&&(F.forEach(function(V){st.releaseProgram(V)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,W,k,gt){F===null&&(F=At);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Ct=ex(T,F,V,W,k);bt.setMaterial(W,Et);let Rt=V.index,kt=1;if(W.wireframe===!0){if(Rt=$.getWireframeAttribute(V),Rt===void 0)return;kt=2}const Ut=V.drawRange,It=V.attributes.position;let ue=Ut.start*kt,je=(Ut.start+Ut.count)*kt;gt!==null&&(ue=Math.max(ue,gt.start*kt),je=Math.min(je,(gt.start+gt.count)*kt)),Rt!==null?(ue=Math.max(ue,0),je=Math.min(je,Rt.count)):It!=null&&(ue=Math.max(ue,0),je=Math.min(je,It.count));const Me=je-ue;if(Me<0||Me===1/0)return;xt.setup(k,W,Ct,V,Rt);let Gn,ae=le;if(Rt!==null&&(Gn=x.get(Rt),ae=Gt,ae.setIndex(Gn)),k.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*vt()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(k.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),bt.setLineWidth(zt*vt()),k.isLineSegments?ae.setMode(O.LINES):k.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else k.isPoints?ae.setMode(O.POINTS):k.isSprite&&ae.setMode(O.TRIANGLES);if(k.isBatchedMesh)ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ae.renderInstances(ue,Me,k.count);else if(V.isInstancedBufferGeometry){const zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,nl=Math.min(V.instanceCount,zt);ae.renderInstances(ue,Me,nl)}else ae.render(ue,Me)};function Ht(T,F,V){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,ha(T,F,V),T.side=Jn,T.needsUpdate=!0,ha(T,F,V),T.side=Rn):ha(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),p=wt.get(V),p.init(),S.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==V&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const W=new Set;return T.traverse(function(k){const gt=k.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const Ct=gt[Et];Ht(Ct,V,k),W.add(Ct)}else Ht(gt,V,k),W.add(gt)}),S.pop(),p=null,W},this.compileAsync=function(T,F,V=null){const W=this.compile(T,F,V);return new Promise(k=>{function gt(){if(W.forEach(function(Et){Nt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){k(T);return}setTimeout(gt,10)}yt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let $t=null;function jt(T){$t&&$t(T)}function ce(){te.stop()}function Yt(){te.start()}const te=new Xu;te.setAnimationLoop(jt),typeof self!="undefined"&&te.setContext(self),this.setAnimationLoop=function(T){$t=T,Q.setAnimationLoop(T),T===null?te.stop():te.start()},Q.addEventListener("sessionstart",ce),Q.addEventListener("sessionend",Yt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,E),p=wt.get(T,S.length),p.init(),S.push(p),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G.setFromProjectionMatrix(ft),H=this.localClippingEnabled,D=ut.init(this.clippingPlanes,H),g=Lt.get(T,m.length),g.init(),m.push(g),Ce(T,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,D===!0&&ut.beginShadows();const V=p.state.shadowsArray;if(pt.render(V,T,F),D===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1)&&Dt.render(g,T),p.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let k=0,gt=W.length;k<gt;k++){const Et=W[k];Oi(g,T,Et,Et.viewport)}}else Oi(g,T,F);E!==null&&(Bt.updateMultisampleRenderTarget(E),Bt.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,F),xt.resetDefaultState(),U=-1,I=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ce(T,F,V,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){W&&ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);const Et=j.update(T),Ct=T.material;Ct.visible&&g.push(T,Et,Ct,V,ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){const Et=j.update(T),Ct=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ot.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ot.copy(Et.boundingSphere.center)),ot.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Ct)){const Rt=Et.groups;for(let kt=0,Ut=Rt.length;kt<Ut;kt++){const It=Rt[kt],ue=Ct[It.materialIndex];ue&&ue.visible&&g.push(T,Et,ue,V,ot.z,It)}}else Ct.visible&&g.push(T,Et,Ct,V,ot.z,null)}}const gt=T.children;for(let Et=0,Ct=gt.length;Et<Ct;Et++)Ce(gt[Et],F,V,W)}function Oi(T,F,V,W){const k=T.opaque,gt=T.transmissive,Et=T.transparent;p.setupLightsView(V),D===!0&&ut.setGlobalState(v.clippingPlanes,V),gt.length>0&&ca(k,gt,F,V),W&&bt.viewport(M.copy(W)),k.length>0&&ua(k,F,V),gt.length>0&&ua(gt,F,V),Et.length>0&&ua(Et,F,V),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ca(T,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const gt=Pt.isWebGL2;tt===null&&(tt=new un(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Dn:ti,minFilter:Si,samples:gt?4:0})),v.getDrawingBufferSize(dt),gt?tt.setSize(dt.x,dt.y):tt.setSize(As(dt.x),As(dt.y));const Et=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(K),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=Qn,ua(T,V,W),Bt.updateMultisampleRenderTarget(tt),Bt.updateRenderTargetMipmap(tt);let Rt=!1;for(let kt=0,Ut=F.length;kt<Ut;kt++){const It=F[kt],ue=It.object,je=It.geometry,Me=It.material,Gn=It.group;if(Me.side===Rn&&ue.layers.test(W.layers)){const ae=Me.side;Me.side=ke,Me.needsUpdate=!0,Kh(ue,V,W,je,Me,Gn),Me.side=ae,Me.needsUpdate=!0,Rt=!0}}Rt===!0&&(Bt.updateMultisampleRenderTarget(tt),Bt.updateRenderTargetMipmap(tt)),v.setRenderTarget(Et),v.setClearColor(K,N),v.toneMapping=Ct}function ua(T,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,gt=T.length;k<gt;k++){const Et=T[k],Ct=Et.object,Rt=Et.geometry,kt=W===null?Et.material:W,Ut=Et.group;Ct.layers.test(V.layers)&&Kh(Ct,F,V,Rt,kt,Ut)}}function Kh(T,F,V,W,k,gt){T.onBeforeRender(v,F,V,W,k,gt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,F,V,W,T,gt),k.transparent===!0&&k.side===Rn&&k.forceSinglePass===!1?(k.side=ke,k.needsUpdate=!0,v.renderBufferDirect(V,F,W,k,T,gt),k.side=Jn,k.needsUpdate=!0,v.renderBufferDirect(V,F,W,k,T,gt),k.side=Rn):v.renderBufferDirect(V,F,W,k,T,gt),T.onAfterRender(v,F,V,W,k,gt)}function ha(T,F,V){F.isScene!==!0&&(F=At);const W=Nt.get(T),k=p.state.lights,gt=p.state.shadowsArray,Et=k.state.version,Ct=st.getParameters(T,k.state,gt,F,V),Rt=st.getProgramCacheKey(Ct);let kt=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?C:Qt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",z),kt=new Map,W.programs=kt);let Ut=kt.get(Rt);if(Ut!==void 0){if(W.currentProgram===Ut&&W.lightsStateVersion===Et)return Jh(T,Ct),Ut}else Ct.uniforms=st.getUniforms(T),T.onBuild(V,Ct,v),T.onBeforeCompile(Ct,v),Ut=st.acquireProgram(Ct,Rt),kt.set(Rt,Ut),W.uniforms=Ct.uniforms;const It=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ut.uniform),Jh(T,Ct),W.needsLights=ix(T),W.lightsStateVersion=Et,W.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ut,W.uniformsList=null,Ut}function jh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Jh(T,F){const V=Nt.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ex(T,F,V,W,k){F.isScene!==!0&&(F=At),Bt.resetTextureUnits();const gt=F.fog,Et=W.isMeshStandardMaterial?F.environment:null,Ct=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ii,Rt=(W.isMeshStandardMaterial?C:Qt).get(W.envMap||Et),kt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!V.morphAttributes.position,ue=!!V.morphAttributes.normal,je=!!V.morphAttributes.color;let Me=Qn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=Gn!==void 0?Gn.length:0,zt=Nt.get(W),nl=p.state.lights;if(D===!0&&(H===!0||T!==I)){const on=T===I&&W.id===U;ut.setState(W,T,on)}let ie=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==nl.state.version||zt.outputColorSpace!==Ct||k.isBatchedMesh&&zt.batching===!1||!k.isBatchedMesh&&zt.batching===!0||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||k.isInstancedMesh&&zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&zt.instancingMorph===!1&&k.morphTexture!==null||zt.envMap!==Rt||W.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ut.numPlanes||zt.numIntersection!==ut.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Ut||zt.morphTargets!==It||zt.morphNormals!==ue||zt.morphColors!==je||zt.toneMapping!==Me||Pt.isWebGL2===!0&&zt.morphTargetsCount!==ae)&&(ie=!0):(ie=!0,zt.__version=W.version);let Fi=zt.currentProgram;ie===!0&&(Fi=ha(W,F,k));let Qh=!1,ss=!1,il=!1;const Re=Fi.getUniforms(),Bi=zt.uniforms;if(bt.useProgram(Fi.program)&&(Qh=!0,ss=!0,il=!0),W.id!==U&&(U=W.id,ss=!0),Qh||I!==T){Re.setValue(O,"projectionMatrix",T.projectionMatrix),Re.setValue(O,"viewMatrix",T.matrixWorldInverse);const on=Re.map.cameraPosition;on!==void 0&&on.setValue(O,ot.setFromMatrixPosition(T.matrixWorld)),Pt.logarithmicDepthBuffer&&Re.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,ss=!0,il=!0)}if(k.isSkinnedMesh){Re.setOptional(O,k,"bindMatrix"),Re.setOptional(O,k,"bindMatrixInverse");const on=k.skeleton;on&&(Pt.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Re.setValue(O,"boneTexture",on.boneTexture,Bt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Re.setOptional(O,k,"batchingTexture"),Re.setValue(O,"batchingTexture",k._matricesTexture,Bt));const rl=V.morphAttributes;if((rl.position!==void 0||rl.normal!==void 0||rl.color!==void 0&&Pt.isWebGL2===!0)&&ct.update(k,V,Fi),(ss||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,Re.setValue(O,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bi.envMap.value=Rt,Bi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ss&&(Re.setValue(O,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&nx(Bi,il),gt&&W.fog===!0&&et.refreshFogUniforms(Bi,gt),et.refreshMaterialUniforms(Bi,W,q,B,tt),Js.upload(O,jh(zt),Bi,Bt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Js.upload(O,jh(zt),Bi,Bt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(O,"center",k.center),Re.setValue(O,"modelViewMatrix",k.modelViewMatrix),Re.setValue(O,"normalMatrix",k.normalMatrix),Re.setValue(O,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const on=W.uniformsGroups;for(let sl=0,rx=on.length;sl<rx;sl++)if(Pt.isWebGL2){const tf=on[sl];St.update(tf,Fi),St.bind(tf,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function nx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ix(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,F,V){Nt.get(T.texture).__webglTexture=F,Nt.get(T.depthTexture).__webglTexture=V;const W=Nt.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=Nt.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){E=T,A=F,b=V;let W=!0,k=null,gt=!1,Et=!1;if(T){const Rt=Nt.get(T);Rt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Rt.__webglFramebuffer===void 0?Bt.setupRenderTarget(T):Rt.__hasExternalTextures&&Bt.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);const Ut=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?k=Ut[F][V]:k=Ut[F],gt=!0):Pt.isWebGL2&&T.samples>0&&Bt.useMultisampledRTT(T)===!1?k=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[V]:k=Ut,M.copy(T.viewport),w.copy(T.scissor),J=T.scissorTest}else M.copy(nt).multiplyScalar(q).floor(),w.copy(rt).multiplyScalar(q).floor(),J=_t;if(bt.bindFramebuffer(O.FRAMEBUFFER,k)&&Pt.drawBuffers&&W&&bt.drawBuffers(T,k),bt.viewport(M),bt.scissor(w),bt.setScissorTest(J),gt){const Rt=Nt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,V)}else if(Et){const Rt=Nt.get(T.texture),kt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,kt)}U=-1},this.readRenderTargetPixels=function(T,F,V,W,k,gt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){bt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Rt=T.texture,kt=Rt.format,Ut=Rt.type;if(kt!==cn&&Tt.convert(kt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Ut===Dn&&(yt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ut!==ti&&Tt.convert(Ut)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Ln&&(Pt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&V>=0&&V<=T.height-k&&O.readPixels(F,V,W,k,Tt.convert(kt),Tt.convert(Ut),gt)}finally{const Rt=E!==null?Nt.get(E).__webglFramebuffer:null;bt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(T,F,V=0){const W=Math.pow(2,-V),k=Math.floor(F.image.width*W),gt=Math.floor(F.image.height*W);Bt.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,T.x,T.y,k,gt),bt.unbindTexture()},this.copyTextureToTexture=function(T,F,V,W=0){const k=F.image.width,gt=F.image.height,Et=Tt.convert(V.format),Ct=Tt.convert(V.type);Bt.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,k,gt,Et,Ct,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,Et,Ct,F.image),W===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,W,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=Math.round(T.max.x-T.min.x),Et=Math.round(T.max.y-T.min.y),Ct=T.max.z-T.min.z+1,Rt=Tt.convert(W.format),kt=Tt.convert(W.type);let Ut;if(W.isData3DTexture)Bt.setTexture3D(W,0),Ut=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Bt.setTexture2DArray(W,0),Ut=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const It=O.getParameter(O.UNPACK_ROW_LENGTH),ue=O.getParameter(O.UNPACK_IMAGE_HEIGHT),je=O.getParameter(O.UNPACK_SKIP_PIXELS),Me=O.getParameter(O.UNPACK_SKIP_ROWS),Gn=O.getParameter(O.UNPACK_SKIP_IMAGES),ae=V.isCompressedTexture?V.mipmaps[k]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ae.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Ut,k,F.x,F.y,F.z,gt,Et,Ct,Rt,kt,ae.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,k,F.x,F.y,F.z,gt,Et,Ct,Rt,ae.data):O.texSubImage3D(Ut,k,F.x,F.y,F.z,gt,Et,Ct,Rt,kt,ae),O.pixelStorei(O.UNPACK_ROW_LENGTH,It),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),O.pixelStorei(O.UNPACK_SKIP_PIXELS,je),O.pixelStorei(O.UNPACK_SKIP_ROWS,Me),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gn),k===0&&W.generateMipmaps&&O.generateMipmap(Ut),bt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){A=0,b=0,E=null,bt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===so?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Ss?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ev extends Sh{}ev.prototype.isWebGL1Renderer=!0;class nv extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yh extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eh=new L,Th=new L,bh=new ne,Go=new xo,ta=new Ds;class iv extends De{constructor(t=new Ze,e=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Eh.fromBufferAttribute(e,i-1),Th.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Eh.distanceTo(Th);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=s,t.ray.intersectsSphere(ta)===!1)return;bh.copy(i).invert(),Go.copy(t.ray).applyMatrix4(bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=d){const A=_.getX(v),b=_.getX(v+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,b),Go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(f);U<t.near||U>t.far||e.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,y=S-1;v<y;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new lt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],o=[],a=new L,l=new ne;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ve(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ve(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ko extends yn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rv extends ko{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ea=new L,Vo=new Ho,Wo=new Ho,Xo=new Ho;class sv extends yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ea.subVectors(i[0],i[1]).add(i[0]),c=ea);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ea.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Vo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),Wo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),Xo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Wo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Xo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Vo.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ah(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function av(r,t){const e=1-r;return e*e*t}function ov(r,t){return 2*(1-r)*r*t}function lv(r,t){return r*r*t}function Jr(r,t,e,n){return av(r,t)+ov(r,e)+lv(r,n)}function cv(r,t){const e=1-r;return e*e*e*t}function uv(r,t){const e=1-r;return 3*e*e*r*t}function hv(r,t){return 3*(1-r)*r*r*t}function fv(r,t){return r*r*r*t}function Qr(r,t,e,n,i){return cv(r,t)+uv(r,e)+hv(r,n)+fv(r,i)}class wh extends yn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,s.x,o.x,a.x),Qr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dv extends yn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,s.x,o.x,a.x),Qr(t,i.y,s.y,o.y,a.y),Qr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ch extends yn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pv extends yn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends yn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Jr(t,i.x,s.x,o.x),Jr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mv extends yn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Jr(t,i.x,s.x,o.x),Jr(t,i.y,s.y,o.y),Jr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ah(a,l.x,c.x,u.x,h.x),Ah(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Lh=Object.freeze({__proto__:null,ArcCurve:rv,CatmullRomCurve3:sv,CubicBezierCurve:wh,CubicBezierCurve3:dv,EllipseCurve:ko,LineCurve:Ch,LineCurve3:pv,QuadraticBezierCurve:Rh,QuadraticBezierCurve3:mv,SplineCurve:Ph});class _v extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}}class Dh extends _v{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ch(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Rh(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new wh(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new ko(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yo extends Ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new L,u=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}const na=new L,ia=new L,qo=new L,ra=new pn;class gv extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(ir*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=ra;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ra.getNormal(qo),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const v=(S+1)%3,y=h[S],A=h[v],b=ra[u[S]],E=ra[u[v]],U=`${y}_${A}`,I=`${A}_${y}`;I in f&&f[I]?(qo.dot(f[I].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(E.x,E.y,E.z)),f[I]=null):U in f||(f[U]={index0:c[S],index1:c[v],normal:qo.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:p}=f[_];na.fromBufferAttribute(a,g),ia.fromBufferAttribute(a,p),d.push(na.x,na.y,na.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new Ee(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $o extends Dh{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Dh().fromJSON(i))}return this}}const vv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Uh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=Ev(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let _=e;_<i;_+=e)h=r[_],f=r[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ts(s,o,e,a,l,d,0),o}};function Uh(r,t,e,n,i){let s,o;if(i===Nv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Oh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Oh(s,r[s],r[s+1],o);return o&&sa(o,o.next)&&(ns(o),o=o.next),o}function Ii(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||se(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ts(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Cv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Mv(r,n,i,s):xv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ns(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Sv(Ii(r),t,e),ts(r,t,e,n,i,s,2)):o===2&&yv(r,t,e,n,i,s):ts(Ii(r),t,e,n,i,s,1);break}}}function xv(r){const t=r.prev,e=r,n=r.next;if(se(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&br(i,a,s,l,o,c,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Mv(r,t,e,n){const i=r.prev,s=r,o=r.next;if(se(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Zo(d,_,t,e,n),S=Zo(g,p,t,e,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&br(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&br(a,u,l,h,c,f,y.x,y.y)&&se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&br(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&br(a,u,l,h,c,f,y.x,y.y)&&se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!sa(i,s)&&Nh(i,n,n.next,s)&&es(i,s)&&es(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ns(n),ns(n.next),n=r=s),n=n.next}while(n!==r);return Ii(n)}function yv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lv(o,a)){let l=Ih(o,a);o=Ii(o,o.next),l=Ii(l,l.next),ts(o,t,e,n,i,s,0),ts(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ev(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Uh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Pv(c));for(i.sort(Tv),s=0;s<i.length;s++)e=bv(i[s],e);return e}function Tv(r,t){return r.x-t.x}function bv(r,t){const e=Av(r,t);if(!e)return t;const n=Ih(e,r);return Ii(n,n.next),Ii(e,e.next)}function Av(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&br(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),es(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&wv(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function wv(r,t){return se(r.prev,r,t.prev)<0&&se(t.next,r,r.next)<0}function Cv(r,t,e,n){let i=r;do i.z===0&&(i.z=Zo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Rv(i)}function Rv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Zo(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Pv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function br(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Lv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Dv(r,t)&&(es(r,t)&&es(t,r)&&Uv(r,t)&&(se(r.prev,r,t.prev)||se(r,t.prev,t))||sa(r,t)&&se(r.prev,r,r.next)>0&&se(t.prev,t,t.next)>0)}function se(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function sa(r,t){return r.x===t.x&&r.y===t.y}function Nh(r,t,e,n){const i=oa(se(r,t,e)),s=oa(se(r,t,n)),o=oa(se(e,n,r)),a=oa(se(e,n,t));return!!(i!==s&&o!==a||i===0&&aa(r,e,t)||s===0&&aa(r,n,t)||o===0&&aa(e,r,n)||a===0&&aa(e,t,n))}function aa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function oa(r){return r>0?1:r<0?-1:0}function Dv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function es(r,t){return se(r.prev,r,r.next)<0?se(r,t,r.next)>=0&&se(r,r.prev,t)>=0:se(r,t,r.prev)<0||se(r,r.next,t)<0}function Uv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Ih(r,t){const e=new Ko(r.i,r.x,r.y),n=new Ko(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Oh(r,t,e,n){const i=new Ko(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ko(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class is{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return is.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Fh(t),Bh(n,t);let o=t.length;e.forEach(Fh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Bh(n,e[l]);const a=vv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Fh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Bh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class jo extends Ze{constructor(t=new $o([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const _=f.holes;is.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const S=_[p];is.isClockWise(S)===!0&&(_[p]=S.reverse())}const g=is.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const S=_[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=g.length;p<m;p++){const S=g[p],v=S[0]+h,y=S[1]+h,A=S[2]+h;n.push(v,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Iv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new jo(n,t.curveSegments)}}function Iv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ov extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fv extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Jo=new ne,zh=new L,Gh=new L;class Bv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(zh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kh=new ne,rs=new L,Qo=new L;class zv extends Bv{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(rs),Qo.copy(n.position),Qo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qo),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}}class Gv extends Fv{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vh(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.","");class Wh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);const Xh={type:"change"},tl={type:"start"},Yh={type:"end"},la=new xo,qh=new ui,kv=Math.cos(70*Ep.DEG2RAD);class Hv extends Ti{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",wt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xh),n.update(),s=i.NONE},this.update=function(){const R=new L,Q=new Ai().setFromUnitVectors(t.up,new L(0,1,0)),Mt=Q.clone().invert(),P=new L,at=new Ai,z=new L,it=2*Math.PI;return function(Ht=null){const $t=n.object.position;R.copy($t).sub(n.target),R.applyQuaternion(Q),a.setFromVector3(R),n.autoRotate&&s===i.NONE&&J(M(Ht)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(jt)&&isFinite(ce)&&(jt<-Math.PI?jt+=it:jt>Math.PI&&(jt-=it),ce<-Math.PI?ce+=it:ce>Math.PI&&(ce-=it),jt<=ce?a.theta=Math.max(jt,Math.min(ce,a.theta)):a.theta=a.theta>(jt+ce)/2?Math.max(jt,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Yt=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=nt(a.radius);else{const te=a.radius;a.radius=nt(a.radius*c),Yt=te!=a.radius}if(R.setFromSpherical(a),R.applyQuaternion(Mt),$t.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&b){let te=null;if(n.object.isPerspectiveCamera){const Ce=R.length();te=nt(Ce*c);const Oi=Ce-te;n.object.position.addScaledVector(y,Oi),n.object.updateMatrixWorld(),Yt=!!Oi}else if(n.object.isOrthographicCamera){const Ce=new L(A.x,A.y,0);Ce.unproject(n.object);const Oi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Yt=Oi!==n.object.zoom;const ca=new L(A.x,A.y,0);ca.unproject(n.object),n.object.position.sub(ca).add(Ce),n.object.updateMatrixWorld(),te=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(te).add(n.object.position):(la.origin.copy(n.object.position),la.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(la.direction))<kv?t.lookAt(n.target):(qh.setFromNormalAndCoplanarPoint(n.object.up,n.target),la.intersectPlane(qh,n.target))))}else if(n.object.isOrthographicCamera){const te=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),te!==n.object.zoom&&(n.object.updateProjectionMatrix(),Yt=!0)}return c=1,b=!1,Yt||P.distanceToSquared(n.object.position)>o||8*(1-at.dot(n.object.quaternion))>o||z.distanceToSquared(n.target)>o?(n.dispatchEvent(Xh),P.copy(n.object.position),at.copy(n.object.quaternion),z.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Dt),n.domElement.removeEventListener("pointerdown",Bt),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",Qt),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",et,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",wt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Wh,l=new Wh;let c=1;const u=new L,h=new lt,f=new lt,d=new lt,_=new lt,g=new lt,p=new lt,m=new lt,S=new lt,v=new lt,y=new L,A=new lt;let b=!1;const E=[],U={};let I=!1;function M(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function w(R){const Q=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*Q)}function J(R){l.theta-=R}function K(R){l.phi-=R}const N=function(){const R=new L;return function(Mt,P){R.setFromMatrixColumn(P,0),R.multiplyScalar(-Mt),u.add(R)}}(),X=function(){const R=new L;return function(Mt,P){n.screenSpacePanning===!0?R.setFromMatrixColumn(P,1):(R.setFromMatrixColumn(P,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Mt),u.add(R)}}(),B=function(){const R=new L;return function(Mt,P){const at=n.domElement;if(n.object.isPerspectiveCamera){const z=n.object.position;R.copy(z).sub(n.target);let it=R.length();it*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Mt*it/at.clientHeight,n.object.matrix),X(2*P*it/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Mt*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),X(P*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(R,Q){if(!n.zoomToCursor)return;b=!0;const Mt=n.domElement.getBoundingClientRect(),P=R-Mt.left,at=Q-Mt.top,z=Mt.width,it=Mt.height;A.x=P/z*2-1,A.y=-(at/it)*2+1,y.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function rt(R){h.set(R.clientX,R.clientY)}function _t(R){Z(R.clientX,R.clientX),m.set(R.clientX,R.clientY)}function G(R){_.set(R.clientX,R.clientY)}function D(R){f.set(R.clientX,R.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;J(2*Math.PI*d.x/Q.clientHeight),K(2*Math.PI*d.y/Q.clientHeight),h.copy(f),n.update()}function H(R){S.set(R.clientX,R.clientY),v.subVectors(S,m),v.y>0?q(w(v.y)):v.y<0&&Y(w(v.y)),m.copy(S),n.update()}function tt(R){g.set(R.clientX,R.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),B(p.x,p.y),_.copy(g),n.update()}function ft(R){Z(R.clientX,R.clientY),R.deltaY<0?Y(w(R.deltaY)):R.deltaY>0&&q(w(R.deltaY)),n.update()}function dt(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function ot(R){if(E.length===1)h.set(R.pageX,R.pageY);else{const Q=xt(R),Mt=.5*(R.pageX+Q.x),P=.5*(R.pageY+Q.y);h.set(Mt,P)}}function At(R){if(E.length===1)_.set(R.pageX,R.pageY);else{const Q=xt(R),Mt=.5*(R.pageX+Q.x),P=.5*(R.pageY+Q.y);_.set(Mt,P)}}function vt(R){const Q=xt(R),Mt=R.pageX-Q.x,P=R.pageY-Q.y,at=Math.sqrt(Mt*Mt+P*P);m.set(0,at)}function O(R){n.enableZoom&&vt(R),n.enablePan&&At(R)}function oe(R){n.enableZoom&&vt(R),n.enableRotate&&ot(R)}function yt(R){if(E.length==1)f.set(R.pageX,R.pageY);else{const Mt=xt(R),P=.5*(R.pageX+Mt.x),at=.5*(R.pageY+Mt.y);f.set(P,at)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;J(2*Math.PI*d.x/Q.clientHeight),K(2*Math.PI*d.y/Q.clientHeight),h.copy(f)}function Pt(R){if(E.length===1)g.set(R.pageX,R.pageY);else{const Q=xt(R),Mt=.5*(R.pageX+Q.x),P=.5*(R.pageY+Q.y);g.set(Mt,P)}p.subVectors(g,_).multiplyScalar(n.panSpeed),B(p.x,p.y),_.copy(g)}function bt(R){const Q=xt(R),Mt=R.pageX-Q.x,P=R.pageY-Q.y,at=Math.sqrt(Mt*Mt+P*P);S.set(0,at),v.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),q(v.y),m.copy(S);const z=(R.pageX+Q.x)*.5,it=(R.pageY+Q.y)*.5;Z(z,it)}function Vt(R){n.enableZoom&&bt(R),n.enablePan&&Pt(R)}function Nt(R){n.enableZoom&&bt(R),n.enableRotate&&yt(R)}function Bt(R){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Qt),n.domElement.addEventListener("pointerup",C)),!Gt(R)&&(ct(R),R.pointerType==="touch"?ut(R):x(R)))}function Qt(R){n.enabled!==!1&&(R.pointerType==="touch"?pt(R):$(R))}function C(R){switch(le(R),E.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Qt),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(Yh),s=i.NONE;break;case 1:const Q=E[0],Mt=U[Q];ut({pointerId:Q,pageX:Mt.x,pageY:Mt.y});break}}function x(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Ki.DOLLY:if(n.enableZoom===!1)return;_t(R),s=i.DOLLY;break;case Ki.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;G(R),s=i.PAN}else{if(n.enableRotate===!1)return;rt(R),s=i.ROTATE}break;case Ki.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;rt(R),s=i.ROTATE}else{if(n.enablePan===!1)return;G(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(tl)}function $(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;D(R);break;case i.DOLLY:if(n.enableZoom===!1)return;H(R);break;case i.PAN:if(n.enablePan===!1)return;tt(R);break}}function j(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(tl),ft(st(R)),n.dispatchEvent(Yh))}function st(R){const Q=R.deltaMode,Mt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(Q){case 1:Mt.deltaY*=16;break;case 2:Mt.deltaY*=100;break}return R.ctrlKey&&!I&&(Mt.deltaY*=10),Mt}function et(R){R.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",Lt,{passive:!0,capture:!0}))}function Lt(R){R.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",Lt,{passive:!0,capture:!0}))}function wt(R){n.enabled===!1||n.enablePan===!1||dt(R)}function ut(R){switch(Tt(R),E.length){case 1:switch(n.touches.ONE){case ji.ROTATE:if(n.enableRotate===!1)return;ot(R),s=i.TOUCH_ROTATE;break;case ji.PAN:if(n.enablePan===!1)return;At(R),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(R),s=i.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(R),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(tl)}function pt(R){switch(Tt(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Pt(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(R),n.update();break;default:s=i.NONE}}function Dt(R){n.enabled!==!1&&R.preventDefault()}function ct(R){E.push(R.pointerId)}function le(R){delete U[R.pointerId];for(let Q=0;Q<E.length;Q++)if(E[Q]==R.pointerId){E.splice(Q,1);return}}function Gt(R){for(let Q=0;Q<E.length;Q++)if(E[Q]==R.pointerId)return!0;return!1}function Tt(R){let Q=U[R.pointerId];Q===void 0&&(Q=new lt,U[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function xt(R){const Q=R.pointerId===E[0]?E[1]:E[0];return U[Q]}n.domElement.addEventListener("contextmenu",Dt),n.domElement.addEventListener("pointerdown",Bt),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",j,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",et,{passive:!0,capture:!0}),this.update()}}const $h={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vv=new Yu(-1,1,1,-1,0,1);class Wv extends Ze{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}}const Xv=new Wv;class el{constructor(t){this._mesh=new Mn(Xv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yv extends Ar{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jr.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new el(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zh extends Ar{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class qv extends Ar{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $v{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yv($h),this.copyPass.material.blending=Pn,this.clock=new Hh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zh!==void 0&&(o instanceof Zh?n=!0:o instanceof qv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zv extends Ar{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Kv={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class wr extends Ar{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(s,o,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new un(s,o,{type:Dn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new un(s,o,{type:Dn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Kv;this.highPassUniforms=jr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=$h;this.copyUniforms=jr.clone(u.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Wa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new wo,this.fsQuad=new el(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=wr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}wr.BlurDirectionX=new lt(1,0),wr.BlurDirectionY=new lt(0,1);const jv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Jv extends Ar{constructor(){super();const t=jv;this.uniforms=jr.clone(t.uniforms),this.material=new Ov({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new el(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qv{constructor(t){this.container=t,this.size=1.5,this.positionZ=12,this.numberOfLayers=120,this.layerDelay=12,this.layerSpacing=2,this.cameraStartZ=-10,this.cameraEndZ=this.numberOfLayers*this.layerSpacing,this.cameraAnimating=!1,this.cameraAnimationStartTime=0,this.cameraAnimationDuration=2,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.layers=[],this.squarePortal=[],this.hexagonPortal=[],this.circlePortal=[],this.hexagonDashedLines=null,this.activePortal=this.hexagonPortal,this.offsetX=8,this.offsetZ=20,this.offsetXSquarePortal=this.offsetX,this.offsetXSHexagonPortal=0,this.offsetXCirclePortal=-this.offsetX,this.targetCameraPosition=new L,this.mouse=new lt,this.params={threshold:0,strength:.66,radius:.35,exposure:1},this.initScene()}initScene(){this.clock=new Hh,this.renderer=new Sh({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.toneMapping=qa;const t=this.renderer.domElement;t.style.width="100%",t.style.height="100%",this.container.appendChild(t),this.scene=new nv,this.camera=new Ke(30,this.container.clientWidth/this.container.clientHeight,1,300),this.camera.position.set(0,0,-50),this.scene.add(this.camera),this.controls=new Hv(this.camera,this.renderer.domElement),this.controls.enabled=!1;const e=new Gv(this.color,100);this.camera.add(e);const n=new Zv(this.scene,this.camera);this.initPostProcessing(n),window.addEventListener("resize",()=>this.onWindowResize(),!1),this.initialState(),this.animate()}initialState(){const t=this.createSegment("square","#54EAAB");t.position.x=this.offsetXSquarePortal,t.position.z=this.offsetZ,this.squarePortal.push(t),this.scene.add(t);const e=this.createSegment("hexagon","#5FB2FF");e.position.z=this.offsetZ,this.hexagonPortal.push(e),this.scene.add(e);const n=this.createSegment("circle","#CBA1FE");n.position.x=this.offsetXCirclePortal,n.position.z=this.offsetZ,this.circlePortal.push(n),this.scene.add(n),this.activePortal=this.hexagonPortal}introduceAnimation(){sn.timeline().to(this.camera.position,{z:-10,duration:.6,ease:"power4.out"},"a").to(this.hexagonPortal[0].position,{z:0,duration:.6,ease:"power4.out"},"a")}parallaxEffect(){document.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.targetCameraPosition.x=this.mouse.x*.1,this.targetCameraPosition.y=this.mouse.y*.1,this.targetCameraPosition.z=this.camera.position.z,sn.to(this.camera.position,{x:this.targetCameraPosition.x,y:this.targetCameraPosition.y,duration:.5,ease:"power2.out"})})}focus(t){console.log(`...focusing on ${t}...`);const e={square:this.offsetXSquarePortal,hexagon:this.offsetXSHexagonPortal,circle:this.offsetXCirclePortal}[t],n=this.activePortal;switch(t){case"square":this.activePortal=this.squarePortal;break;case"hexagon":this.activePortal=this.hexagonPortal;break;case"circle":this.activePortal=this.circlePortal;break;default:console.log(`Unknown shape: ${t}`);return}sn.defaults({duration:.8,ease:"power4.out"}),sn.to(this.camera.position,{x:e}),sn.to(this.activePortal[0].position,{z:0}),n.forEach(i=>{sn.to(i.position,{z:this.offsetZ})})}animate(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}start(){const t=sn.timeline();for(console.log("...starting portal animation...");this.activePortal.length>1;){const e=this.activePortal.pop();this.scene.remove(e)}for(let e=1;e<this.numberOfLayers;e++)t.to({},{duration:this.layerDelay/1e3,ease:"power4.out",onStart:()=>{const n=this.activePortal[0],i=n.clone();i.position.z=n.position.z+e*this.layerSpacing,this.scene.add(i),this.activePortal.push(i)}});t.to(this.camera.position,{z:this.cameraEndZ,duration:3,ease:"power4.in",onComplete:()=>{console.log("Camera animation complete.")}},"-=1.6")}createSegment(t=this.shape,e=this.color){const n=this.createGeometry(t),i=new yh({color:e});return new iv(n,i)}createGeometry(t){switch(t){case"square":return this.createSquareGeometry();case"circle":return this.createCircleGeometry();case"hexagon":return this.createHexagonGeometry();default:throw new Error(`Unknown shape: ${t}`)}}createSquareGeometry(){const e=new $o;return e.moveTo(-2.25/2,-2.25/2),e.lineTo(2.25/2,-2.25/2),e.lineTo(2.25/2,2.25/2),e.lineTo(-2.25/2,2.25/2),e.lineTo(-2.25/2,-2.25/2),new jo(e)}createCircleGeometry(){const t=this.size,e=96,n=new Yo(t,e);return new gv(n)}createHexagonGeometry(){const t=this.size,e=6,n=new $o,i=0,s=0;n.moveTo(i+t*Math.cos(0),s+t*Math.sin(0));for(let a=1;a<=e;a+=1){const l=a*2*Math.PI/e;n.lineTo(i+t*Math.cos(l),s+t*Math.sin(l))}return new Ze().setFromPoints(n.getPoints())}initPostProcessing(t){const e=new wr(new lt(this.container.clientWidth,this.container.clientHeight),1.5,.4,.85);e.threshold=this.params.threshold,e.strength=this.params.strength,e.radius=this.params.radius;const n=new Jv;this.composer=new $v(this.renderer),this.composer.addPass(t),this.composer.addPass(e),this.composer.addPass(n)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e)}}window.applyTextShuffle=function(r){const t=document.getElementById(r);t?new pd(t).trigger():console.warn('Element with ID "'+r+'" was not found.')},document.addEventListener("DOMContentLoaded",function(){tx()});function tx(){console.log("initPortals");const r=document.getElementById("portalsContainer"),t=new Qv(r),e=document.getElementById("portalTriggerSquare");e.addEventListener("click",d=>h(d.target));const n=document.getElementById(e.getAttribute("data-content"));n.querySelector(".btn").addEventListener("click",d=>{sn.to(n,{duration:.6,opacity:0,scale:.9,ease:"power4.out"}),t.start()});const s=document.getElementById("portalTriggerHexagon");s.addEventListener("click",d=>h(d.target));const o=document.getElementById(s.getAttribute("data-content"));o.querySelector(".btn").addEventListener("click",d=>{sn.to(o,{duration:.6,opacity:0,scale:.9,ease:"power4.out"}),t.start()});const l=document.getElementById("portalTriggerCircle");l.addEventListener("click",d=>h(d.target));const c=document.getElementById(l.getAttribute("data-content"));c.querySelector(".btn").addEventListener("click",d=>{sn.to(c,{duration:.6,opacity:0,scale:.9,ease:"power4.out"}),t.start()});function h(d){const _=d.getAttribute("data-shape"),g=d.getAttribute("data-content");switch(console.log("Toggle Portal: "+_,g),_){case"square":e.style.display="none",l.style.display="none",s.style.display="block",s.style.left="90%",s.style.right="0";break;case"hexagon":e.style.display="block",s.style.display="none",l.style.display="block";break;case"circle":e.style.display="none",l.style.display="none",s.style.display="block",s.style.left="0%";break;default:console.warn("Shape not found.")}document.querySelector(".portal--active").classList.remove("portal--active"),document.getElementById(g).classList.add("portal--active"),t.focus(_),applyTextShuffle(g)}let f=new IntersectionObserver(function(d){d.forEach(_=>{if(_.isIntersecting){console.log(_.target.id+" is in view");const g=document.querySelector(".portal--active");sn.from(g.querySelectorAll("*"),{duration:.6,opacity:0,scale:.9,stagger:.05,ease:"power4.out"});const p=g.id;applyTextShuffle(p),t.introduceAnimation()}})},{threshold:.5});document.querySelectorAll("#portalsSection").forEach(d=>{f.observe(d)})}});
