(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},ko={};var i_;function Ey(){if(i_)return ko;i_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var a_;function by(){return a_||(a_=1,Mh.exports=Ey()),Mh.exports}var Ct=by(),Eh={exports:{}},le={};var s_;function Ty(){if(s_)return le;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function S(O,rt,bt){this.props=O,this.context=rt,this.refs=y,this.updater=bt||b}S.prototype.isReactComponent={},S.prototype.setState=function(O,rt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,rt,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=S.prototype;function D(O,rt,bt){this.props=O,this.context=rt,this.refs=y,this.updater=bt||b}var U=D.prototype=new N;U.constructor=D,T(U,S.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function C(O,rt,bt){var Ut=bt.ref;return{$$typeof:r,type:O,key:rt,ref:Ut!==void 0?Ut:null,props:bt}}function w(O,rt){return C(O.type,rt,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function nt(O){var rt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(bt){return rt[bt]})}var lt=/\/+/g;function gt(O,rt){return typeof O=="object"&&O!==null&&O.key!=null?nt(""+O.key):rt.toString(36)}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(rt){O.status==="pending"&&(O.status="fulfilled",O.value=rt)},function(rt){O.status==="pending"&&(O.status="rejected",O.reason=rt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,rt,bt,Ut,zt){var q=typeof O;(q==="undefined"||q==="boolean")&&(O=null);var ht=!1;if(O===null)ht=!0;else switch(q){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(O.$$typeof){case r:case t:ht=!0;break;case g:return ht=O._init,P(ht(O._payload),rt,bt,Ut,zt)}}if(ht)return zt=zt(O),ht=Ut===""?"."+gt(O,0):Ut,z(zt)?(bt="",ht!=null&&(bt=ht.replace(lt,"$&/")+"/"),P(zt,rt,bt,"",function(kt){return kt})):zt!=null&&(G(zt)&&(zt=w(zt,bt+(zt.key==null||O&&O.key===zt.key?"":(""+zt.key).replace(lt,"$&/")+"/")+ht)),rt.push(zt)),1;ht=0;var Pt=Ut===""?".":Ut+":";if(z(O))for(var Gt=0;Gt<O.length;Gt++)Ut=O[Gt],q=Pt+gt(Ut,Gt),ht+=P(Ut,rt,bt,q,zt);else if(Gt=M(O),typeof Gt=="function")for(O=Gt.call(O),Gt=0;!(Ut=O.next()).done;)Ut=Ut.value,q=Pt+gt(Ut,Gt++),ht+=P(Ut,rt,bt,q,zt);else if(q==="object"){if(typeof O.then=="function")return P(ft(O),rt,bt,Ut,zt);throw rt=String(O),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function H(O,rt,bt){if(O==null)return O;var Ut=[],zt=0;return P(O,Ut,"","",function(q){return rt.call(bt,q,zt++)}),Ut}function it(O){if(O._status===-1){var rt=O._result;rt=rt(),rt.then(function(bt){(O._status===0||O._status===-1)&&(O._status=1,O._result=bt)},function(bt){(O._status===0||O._status===-1)&&(O._status=2,O._result=bt)}),O._status===-1&&(O._status=0,O._result=rt)}if(O._status===1)return O._result.default;throw O._result}var Dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Mt={map:H,forEach:function(O,rt,bt){H(O,function(){rt.apply(this,arguments)},bt)},count:function(O){var rt=0;return H(O,function(){rt++}),rt},toArray:function(O){return H(O,function(rt){return rt})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return le.Activity=_,le.Children=Mt,le.Component=S,le.Fragment=i,le.Profiler=l,le.PureComponent=D,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(O,rt,bt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ut=T({},O.props),zt=O.key;if(rt!=null)for(q in rt.key!==void 0&&(zt=""+rt.key),rt)!J.call(rt,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&rt.ref===void 0||(Ut[q]=rt[q]);var q=arguments.length-2;if(q===1)Ut.children=bt;else if(1<q){for(var ht=Array(q),Pt=0;Pt<q;Pt++)ht[Pt]=arguments[Pt+2];Ut.children=ht}return C(O.type,zt,Ut)},le.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},le.createElement=function(O,rt,bt){var Ut,zt={},q=null;if(rt!=null)for(Ut in rt.key!==void 0&&(q=""+rt.key),rt)J.call(rt,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(zt[Ut]=rt[Ut]);var ht=arguments.length-2;if(ht===1)zt.children=bt;else if(1<ht){for(var Pt=Array(ht),Gt=0;Gt<ht;Gt++)Pt[Gt]=arguments[Gt+2];zt.children=Pt}if(O&&O.defaultProps)for(Ut in ht=O.defaultProps,ht)zt[Ut]===void 0&&(zt[Ut]=ht[Ut]);return C(O,q,zt)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:d,render:O}},le.isValidElement=G,le.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:it}},le.memo=function(O,rt){return{$$typeof:p,type:O,compare:rt===void 0?null:rt}},le.startTransition=function(O){var rt=I.T,bt={};I.T=bt;try{var Ut=O(),zt=I.S;zt!==null&&zt(bt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(F,Dt)}catch(q){Dt(q)}finally{rt!==null&&bt.types!==null&&(rt.types=bt.types),I.T=rt}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(O){return I.H.use(O)},le.useActionState=function(O,rt,bt){return I.H.useActionState(O,rt,bt)},le.useCallback=function(O,rt){return I.H.useCallback(O,rt)},le.useContext=function(O){return I.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,rt){return I.H.useDeferredValue(O,rt)},le.useEffect=function(O,rt){return I.H.useEffect(O,rt)},le.useEffectEvent=function(O){return I.H.useEffectEvent(O)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(O,rt,bt){return I.H.useImperativeHandle(O,rt,bt)},le.useInsertionEffect=function(O,rt){return I.H.useInsertionEffect(O,rt)},le.useLayoutEffect=function(O,rt){return I.H.useLayoutEffect(O,rt)},le.useMemo=function(O,rt){return I.H.useMemo(O,rt)},le.useOptimistic=function(O,rt){return I.H.useOptimistic(O,rt)},le.useReducer=function(O,rt,bt){return I.H.useReducer(O,rt,bt)},le.useRef=function(O){return I.H.useRef(O)},le.useState=function(O){return I.H.useState(O)},le.useSyncExternalStore=function(O,rt,bt){return I.H.useSyncExternalStore(O,rt,bt)},le.useTransition=function(){return I.H.useTransition()},le.version="19.2.3",le}var r_;function lp(){return r_||(r_=1,Eh.exports=Ty()),Eh.exports}var be=lp(),bh={exports:{}},Xo={},Th={exports:{}},Ah={};var o_;function Ay(){return o_||(o_=1,(function(r){function t(P,H){var it=P.length;P.push(H);t:for(;0<it;){var Dt=it-1>>>1,Mt=P[Dt];if(0<l(Mt,H))P[Dt]=H,P[it]=Mt,it=Dt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],it=P.pop();if(it!==H){P[0]=it;t:for(var Dt=0,Mt=P.length,O=Mt>>>1;Dt<O;){var rt=2*(Dt+1)-1,bt=P[rt],Ut=rt+1,zt=P[Ut];if(0>l(bt,it))Ut<Mt&&0>l(zt,bt)?(P[Dt]=zt,P[Ut]=it,Dt=Ut):(P[Dt]=bt,P[rt]=it,Dt=rt);else if(Ut<Mt&&0>l(zt,it))P[Dt]=zt,P[Ut]=it,Dt=Ut;else break t}}return H}function l(P,H){var it=P.sortIndex-H.sortIndex;return it!==0?it:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,v=3,M=!1,b=!1,T=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=P)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(P){if(T=!1,U(P),!b)if(i(m)!==null)b=!0,F||(F=!0,nt());else{var H=i(p);H!==null&&ft(z,H.startTime-P)}}var F=!1,I=-1,J=5,C=-1;function w(){return y?!0:!(r.unstable_now()-C<J)}function G(){if(y=!1,F){var P=r.unstable_now();C=P;var H=!0;try{t:{b=!1,T&&(T=!1,N(I),I=-1),M=!0;var it=v;try{e:{for(U(P),_=i(m);_!==null&&!(_.expirationTime>P&&w());){var Dt=_.callback;if(typeof Dt=="function"){_.callback=null,v=_.priorityLevel;var Mt=Dt(_.expirationTime<=P);if(P=r.unstable_now(),typeof Mt=="function"){_.callback=Mt,U(P),H=!0;break e}_===i(m)&&s(m),U(P)}else s(m);_=i(m)}if(_!==null)H=!0;else{var O=i(p);O!==null&&ft(z,O.startTime-P),H=!1}}break t}finally{_=null,v=it,M=!1}H=void 0}}finally{H?nt():F=!1}}}var nt;if(typeof D=="function")nt=function(){D(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,gt=lt.port2;lt.port1.onmessage=G,nt=function(){gt.postMessage(null)}}else nt=function(){S(G,0)};function ft(P,H){I=S(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(P){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var it=v;v=H;try{return P()}finally{v=it}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var it=v;v=P;try{return H()}finally{v=it}},r.unstable_scheduleCallback=function(P,H,it){var Dt=r.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Dt+it:Dt):it=Dt,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=it+Mt,P={id:g++,callback:H,priorityLevel:P,startTime:it,expirationTime:Mt,sortIndex:-1},it>Dt?(P.sortIndex=it,t(p,P),i(m)===null&&P===i(p)&&(T?(N(I),I=-1):T=!0,ft(z,it-Dt))):(P.sortIndex=Mt,t(m,P),b||M||(b=!0,F||(F=!0,nt()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var H=v;return function(){var it=v;v=H;try{return P.apply(this,arguments)}finally{v=it}}}})(Ah)),Ah}var l_;function Ry(){return l_||(l_=1,Th.exports=Ay()),Th.exports}var Rh={exports:{}},Pn={};var c_;function Cy(){if(c_)return Pn;c_=1;var r=lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var u_;function wy(){if(u_)return Rh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=Cy(),Rh.exports}var f_;function Dy(){if(f_)return Xo;f_=1;var r=Ry(),t=lp(),i=wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ft=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Dt=[],Mt=-1;function O(e){return{current:e}}function rt(e){0>Mt||(e.current=Dt[Mt],Dt[Mt]=null,Mt--)}function bt(e,n){Mt++,Dt[Mt]=e.current,e.current=n}var Ut=O(null),zt=O(null),q=O(null),ht=O(null);function Pt(e,n){switch(bt(q,n),bt(zt,e),bt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A0(n),e=R0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(Ut),bt(Ut,e)}function Gt(){rt(Ut),rt(zt),rt(q)}function kt(e){e.memoizedState!==null&&bt(ht,e);var n=Ut.current,a=R0(n,e.type);n!==a&&(bt(zt,e),bt(Ut,a))}function he(e){zt.current===e&&(rt(Ut),rt(zt)),ht.current===e&&(rt(ht),Bo._currentValue=it)}var Ke,me;function pe(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+me}var Se=!1;function ae(e,n){if(!e||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(ut){var st=ut}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(ut){st=ut}e.call(Tt.prototype)}}else{try{throw Error()}catch(ut){st=ut}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var B=x.split(`
`),et=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===et.length)for(o=B.length-1,u=et.length-1;1<=o&&0<=u&&B[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==et[u]){var mt=`
`+B[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return pe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var We=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,qt=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,jt=r.unstable_LowPriority,It=r.unstable_IdlePriority,k=r.log,pt=r.unstable_setDisableYieldValue,Y=null,ot=null;function yt(e){if(typeof k=="function"&&pt(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Y,e)}catch{}}var vt=Math.clz32?Math.clz32:X,xt=Math.log,Xt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(xt(e)/Xt|0)|0}var Nt=256,Rt=262144,Ot=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Et(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=wt(o):(x&=A,x!==0?u=wt(x):a||(a=A&~e,a!==0&&(u=wt(a))))):(A=o&~h,A!==0?u=wt(A):x!==0?u=wt(x):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-vt(a),Tt=1<<mt;A[mt]=0,B[mt]=-1;var st=et[mt];if(st!==null)for(et[mt]=null,mt=0;mt<st.length;mt++){var ut=st[mt];ut!==null&&(ut.lane&=-536870913)}a&=~Tt}o!==0&&dl(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function dl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function zs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function Oi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,Mn="__reactProps$"+li,bi="__reactContainer$"+li,Hs="__reactEvents$"+li,Gs="__reactListeners$"+li,pl="__reactHandles$"+li,$r="__reactResources$"+li,ss="__reactMarker$"+li;function to(e){delete e[ln],delete e[Mn],delete e[Hs],delete e[Gs],delete e[pl]}function Ea(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O0(e);e!==null;){if(a=e[ln])return a;e=O0(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[ln]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ss]=!0}var Z=new Set,ct={};function at(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ct[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Bt={};function Wt(e){return We.call(Bt,e)?!0:We.call(Vt,e)?!1:Ft.test(e)?Bt[e]=!0:(Vt[e]=!0,!1)}function Zt(e,n,a){if(Wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function te(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function oe(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,ee(n)):a!=null?bn(e,x,ee(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ee(A):e.removeAttribute("name")}function Zi(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){qe(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),qe(e)}function bn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Rn(e,h,n[h])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return Sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var vu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function Tp(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pe(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var Su=!1;function Ap(e,n,a){if(Su)return e(n,a);Su=!0;try{var o=e(n);return o}finally{if(Su=!1,(ks!==null||Xs!==null)&&(nc(),ks&&(n=ks,e=Xs,Xs=ks=null,Tp(n),e)))for(n=0;n<e.length;n++)Tp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Qi)try{var no={};Object.defineProperty(no,"passive",{get:function(){yu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{yu=!1}var Aa=null,Mu=null,gl=null;function Rp(){if(gl)return gl;var e,n=Mu,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Cp(){return!1}function kn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vl:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=kn(os),io=_({},os,{view:0,detail:0}),yx=kn(io),Eu,bu,ao,Sl=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(Eu=e.screenX-ao.screenX,bu=e.screenY-ao.screenY):bu=Eu=0,ao=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),wp=kn(Sl),Mx=_({},Sl,{dataTransfer:0}),Ex=kn(Mx),bx=_({},io,{relatedTarget:0}),Tu=kn(bx),Tx=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=kn(Tx),Rx=_({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=kn(Rx),wx=_({},os,{data:0}),Dp=kn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function Au(){return Nx}var Ox=_({},io,{key:function(e){if(e.key){var n=Dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Px=kn(Ox),Ix=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=kn(Ix),Fx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),zx=kn(Fx),Bx=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=kn(Bx),Gx=_({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=kn(Gx),kx=_({},os,{newState:0,oldState:0}),Xx=kn(kx),Wx=[9,13,27,32],Ru=Qi&&"CompositionEvent"in window,so=null;Qi&&"documentMode"in document&&(so=document.documentMode);var Yx=Qi&&"TextEvent"in window&&!so,Lp=Qi&&(!Ru||so&&8<so&&11>=so),Np=" ",Op=!1;function Pp(e,n){switch(e){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function qx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return e=n.data,e===Np&&Op?null:e;default:return null}}function jx(e,n){if(Ws)return e==="compositionend"||!Ru&&Pp(e,n)?(e=Rp(),gl=Mu=Aa=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zx[e.type]:n==="textarea"}function zp(e,n,a,o){ks?Xs?Xs.push(o):Xs=[o]:ks=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Kx(e){S0(e,0)}function yl(e){var n=rs(e);if(Pe(n))return e}function Bp(e,n){if(e==="change")return n}var Hp=!1;if(Qi){var Cu;if(Qi){var wu="oninput"in document;if(!wu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),wu=typeof Gp.oninput=="function"}Cu=wu}else Cu=!1;Hp=Cu&&(!document.documentMode||9<document.documentMode)}function Vp(){ro&&(ro.detachEvent("onpropertychange",kp),oo=ro=null)}function kp(e){if(e.propertyName==="value"&&yl(oo)){var n=[];zp(n,oo,e,xu(e)),Ap(Kx,n)}}function Qx(e,n,a){e==="focusin"?(Vp(),ro=n,oo=a,ro.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(oo)}function $x(e,n){if(e==="click")return yl(n)}function tS(e,n){if(e==="input"||e==="change")return yl(n)}function eS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:eS;function lo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!We.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,n){var a=Xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xp(a)}}function Yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nS=Qi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Uu=null,co=null,Lu=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Ys==null||Ys!==Jt(o)||(o=Ys,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=cc(Uu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ys)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Nu={},Zp={};Qi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function cs(e){if(Nu[e])return Nu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Nu[e]=n[a];return e}var Kp=cs("animationend"),Qp=cs("animationiteration"),Jp=cs("animationstart"),iS=cs("transitionrun"),aS=cs("transitionstart"),sS=cs("transitioncancel"),$p=cs("transitionend"),tm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ai(e,n){tm.set(e,n),at(n,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],js=0,Pu=0;function El(){for(var e=js,n=Pu=js=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var h=ui[n];if(ui[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&em(a,u,h)}}function bl(e,n,a,o){ui[js++]=e,ui[js++]=n,ui[js++]=a,ui[js++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return bl(e,n,a,o),Tl(e)}function us(e,n){return bl(e,null,null,n),Tl(e)}function em(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-vt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Tl(e){if(50<Lo)throw Lo=0,Yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function rS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new rS(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Fu(e)&&(x=1);else if(typeof e=="string")x=fy(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=h,e;case T:return fs(a.children,u,h,n);case y:x=8,u|=24;break;case S:return e=$n(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case z:return e=$n(13,a,n,u),e.elementType=z,e.lanes=h,e;case F:return e=$n(19,a,n,u),e.elementType=F,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case N:x=9;break t;case U:x=11;break t;case I:x=14;break t;case J:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function fs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function im(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Bu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var am=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=am.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},am.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Ks=[],Qs=0,Rl=null,uo=0,hi=[],di=0,Ra=null,Pi=1,Ii="";function $i(e,n){Ks[Qs++]=uo,Ks[Qs++]=Rl,Rl=e,uo=n}function sm(e,n,a){hi[di++]=Pi,hi[di++]=Ii,hi[di++]=Ra,Ra=e;var o=Pi;e=Ii;var u=32-vt(o)-1;o&=~(1<<u),a+=1;var h=32-vt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Pi=1<<32-vt(n)+u|a<<u|o,Ii=h+e}else Pi=1<<h|a<<u|o,Ii=e}function Hu(e){e.return!==null&&($i(e,1),sm(e,1,0))}function Gu(e){for(;e===Rl;)Rl=Ks[--Qs],Ks[Qs]=null,uo=Ks[--Qs],Ks[Qs]=null;for(;e===Ra;)Ra=hi[--di],hi[di]=null,Ii=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null}function rm(e,n){hi[di++]=Pi,hi[di++]=Ii,hi[di++]=Ra,Pi=n.id,Ii=n.overflow,Ra=e}var Cn=null,je=null,Te=!1,Ca=null,pi=!1,Vu=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(fi(n,e)),Vu}function om(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)ve(Oo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Zi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||b0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||wa(e,!0)}function lm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Cn=Cn.return}}function Js(e){if(e!==Cn)return!1;if(!Te)return lm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&je&&wa(e),lm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=N0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=N0(e)}else n===27?(n=je,ka(e.type)?(e=hh,hh=null,je=e):je=n):je=Cn?gi(e.stateNode.nextSibling):null;return!0}function hs(){je=Cn=null,Te=!1}function ku(){var e=Ca;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ca=null),e}function fo(e){Ca===null?Ca=[e]:Ca.push(e)}var Xu=O(null),ds=null,ta=null;function Da(e,n,a){bt(Xu,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Xu.current,rt(Xu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Wu(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Wu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function $s(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Jn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return cm(ds,e)}function wl(e,n){return ds===null&&ps(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(s(308));ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ta=ta.next=n;return a}var oS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},lS=r.unstable_scheduleCallback,cS=r.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new oS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&lS(cS,function(){e.controller.abort()})}var po=null,ju=0,tr=0,er=null;function uS(e,n){if(po===null){var a=po=[];ju=0,tr=Jf(),er={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(um,um),n}function um(){if(--ju===0&&po!==null){er!==null&&(er.status="fulfilled");var e=po;po=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=P.S;P.S=function(e,n){jg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(e,n),fm!==null&&fm(e,n)};var ms=O(null);function Zu(){var e=ms.current;return e!==null?e:Ye.pooledCache}function Dl(e,n){n===null?bt(ms,ms.current):bt(ms,n.pool)}function hm(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var nr=Error(s(460)),Ku=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e}throw _s=n,nr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,nr):a}}var _s=null;function mm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function gm(e){if(e===nr||e===Ul)throw Error(s(483))}var ir=null,mo=0;function Nl(e){var n=mo;return mo+=1,ir===null&&(ir=[]),pm(ir,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _m(e){function n(Q,W){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[W],Q.flags|=16):tt.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=Ji(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<W?(Q.flags|=67108866,W):tt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,W,tt,St){return W===null||W.tag!==6?(W=zu(tt,Q.mode,St),W.return=Q,W):(W=u(W,tt),W.return=Q,W)}function B(Q,W,tt,St){var $t=tt.type;return $t===T?mt(Q,W,tt.props.children,St,tt.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===J&&gs($t)===W.type)?(W=u(W,tt.props),go(W,tt),W.return=Q,W):(W=Al(tt.type,tt.key,tt.props,null,Q.mode,St),go(W,tt),W.return=Q,W)}function et(Q,W,tt,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=Bu(tt,Q.mode,St),W.return=Q,W):(W=u(W,tt.children||[]),W.return=Q,W)}function mt(Q,W,tt,St,$t){return W===null||W.tag!==7?(W=fs(tt,Q.mode,St,$t),W.return=Q,W):(W=u(W,tt),W.return=Q,W)}function Tt(Q,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,Q.mode,tt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return tt=Al(W.type,W.key,W.props,null,Q.mode,tt),go(tt,W),tt.return=Q,tt;case b:return W=Bu(W,Q.mode,tt),W.return=Q,W;case J:return W=gs(W),Tt(Q,W,tt)}if(ft(W)||nt(W))return W=fs(W,Q.mode,tt,null),W.return=Q,W;if(typeof W.then=="function")return Tt(Q,Nl(W),tt);if(W.$$typeof===D)return Tt(Q,wl(Q,W),tt);Ol(Q,W)}return null}function st(Q,W,tt,St){var $t=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:A(Q,W,""+tt,St);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===$t?B(Q,W,tt,St):null;case b:return tt.key===$t?et(Q,W,tt,St):null;case J:return tt=gs(tt),st(Q,W,tt,St)}if(ft(tt)||nt(tt))return $t!==null?null:mt(Q,W,tt,St,null);if(typeof tt.then=="function")return st(Q,W,Nl(tt),St);if(tt.$$typeof===D)return st(Q,W,wl(Q,tt),St);Ol(Q,tt)}return null}function ut(Q,W,tt,St,$t){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(tt)||null,A(W,Q,""+St,$t);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case M:return Q=Q.get(St.key===null?tt:St.key)||null,B(W,Q,St,$t);case b:return Q=Q.get(St.key===null?tt:St.key)||null,et(W,Q,St,$t);case J:return St=gs(St),ut(Q,W,tt,St,$t)}if(ft(St)||nt(St))return Q=Q.get(tt)||null,mt(W,Q,St,$t,null);if(typeof St.then=="function")return ut(Q,W,tt,Nl(St),$t);if(St.$$typeof===D)return ut(Q,W,tt,wl(W,St),$t);Ol(W,St)}return null}function Yt(Q,W,tt,St){for(var $t=null,De=null,Qt=W,ue=W=0,Ee=null;Qt!==null&&ue<tt.length;ue++){Qt.index>ue?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Ue=st(Q,Qt,tt[ue],St);if(Ue===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Ue.alternate===null&&n(Q,Qt),W=h(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue,Qt=Ee}if(ue===tt.length)return a(Q,Qt),Te&&$i(Q,ue),$t;if(Qt===null){for(;ue<tt.length;ue++)Qt=Tt(Q,tt[ue],St),Qt!==null&&(W=h(Qt,W,ue),De===null?$t=Qt:De.sibling=Qt,De=Qt);return Te&&$i(Q,ue),$t}for(Qt=o(Qt);ue<tt.length;ue++)Ee=ut(Qt,Q,ue,tt[ue],St),Ee!==null&&(e&&Ee.alternate!==null&&Qt.delete(Ee.key===null?ue:Ee.key),W=h(Ee,W,ue),De===null?$t=Ee:De.sibling=Ee,De=Ee);return e&&Qt.forEach(function(ja){return n(Q,ja)}),Te&&$i(Q,ue),$t}function ne(Q,W,tt,St){if(tt==null)throw Error(s(151));for(var $t=null,De=null,Qt=W,ue=W=0,Ee=null,Ue=tt.next();Qt!==null&&!Ue.done;ue++,Ue=tt.next()){Qt.index>ue?(Ee=Qt,Qt=null):Ee=Qt.sibling;var ja=st(Q,Qt,Ue.value,St);if(ja===null){Qt===null&&(Qt=Ee);break}e&&Qt&&ja.alternate===null&&n(Q,Qt),W=h(ja,W,ue),De===null?$t=ja:De.sibling=ja,De=ja,Qt=Ee}if(Ue.done)return a(Q,Qt),Te&&$i(Q,ue),$t;if(Qt===null){for(;!Ue.done;ue++,Ue=tt.next())Ue=Tt(Q,Ue.value,St),Ue!==null&&(W=h(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue);return Te&&$i(Q,ue),$t}for(Qt=o(Qt);!Ue.done;ue++,Ue=tt.next())Ue=ut(Qt,Q,ue,Ue.value,St),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?ue:Ue.key),W=h(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue);return e&&Qt.forEach(function(My){return n(Q,My)}),Te&&$i(Q,ue),$t}function ke(Q,W,tt,St){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var $t=tt.key;W!==null;){if(W.key===$t){if($t=tt.type,$t===T){if(W.tag===7){a(Q,W.sibling),St=u(W,tt.props.children),St.return=Q,Q=St;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===J&&gs($t)===W.type){a(Q,W.sibling),St=u(W,tt.props),go(St,tt),St.return=Q,Q=St;break t}a(Q,W);break}else n(Q,W);W=W.sibling}tt.type===T?(St=fs(tt.props.children,Q.mode,St,tt.key),St.return=Q,Q=St):(St=Al(tt.type,tt.key,tt.props,null,Q.mode,St),go(St,tt),St.return=Q,Q=St)}return x(Q);case b:t:{for($t=tt.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){a(Q,W.sibling),St=u(W,tt.children||[]),St.return=Q,Q=St;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}St=Bu(tt,Q.mode,St),St.return=Q,Q=St}return x(Q);case J:return tt=gs(tt),ke(Q,W,tt,St)}if(ft(tt))return Yt(Q,W,tt,St);if(nt(tt)){if($t=nt(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ne(Q,W,tt,St)}if(typeof tt.then=="function")return ke(Q,W,Nl(tt),St);if(tt.$$typeof===D)return ke(Q,W,wl(Q,tt),St);Ol(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(a(Q,W.sibling),St=u(W,tt),St.return=Q,Q=St):(a(Q,W),St=zu(tt,Q.mode,St),St.return=Q,Q=St),x(Q)):a(Q,W)}return function(Q,W,tt,St){try{mo=0;var $t=ke(Q,W,tt,St);return ir=null,$t}catch(Qt){if(Qt===nr||Qt===Ul)throw Qt;var De=$n(29,Qt,null,Q.mode);return De.lanes=St,De.return=Q,De}}}var vs=_m(!0),vm=_m(!1),Ua=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(e),em(e,null,a),n}return bl(e,o,n,a),Tl(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function $u(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function vo(){if(tf){var e=er;if(e!==null)throw e}}function xo(e,n,a,o){tf=!1;var u=e.updateQueue;Ua=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,et=B.next;B.next=null,x===null?h=et:x.next=et,x=B;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==x&&(A===null?mt.firstBaseUpdate=et:A.next=et,mt.lastBaseUpdate=B))}if(h!==null){var Tt=u.baseState;x=0,mt=et=B=null,A=h;do{var st=A.lane&-536870913,ut=st!==A.lane;if(ut?(Me&st)===st:(o&st)===st){st!==0&&st===tr&&(tf=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Yt=e,ne=A;st=n;var ke=a;switch(ne.tag){case 1:if(Yt=ne.payload,typeof Yt=="function"){Tt=Yt.call(ke,Tt,st);break t}Tt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ne.payload,st=typeof Yt=="function"?Yt.call(ke,Tt,st):Yt,st==null)break t;Tt=_({},Tt,st);break t;case 2:Ua=!0}}st=A.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(et=mt=ut,B=Tt):mt=mt.next=ut,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);mt===null&&(B=Tt),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),za|=x,e.lanes=x,e.memoizedState=Tt}}function xm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xm(a[e],n)}var ar=O(null),Pl=O(0);function ym(e,n){e=ua,bt(Pl,e),bt(ar,n),ua=e|n.baseLanes}function ef(){bt(Pl,ua),bt(ar,ar.current)}function nf(){ua=Pl.current,rt(ar),rt(Pl)}var ti=O(null),mi=null;function Oa(e){var n=e.alternate;bt(rn,rn.current&1),bt(ti,e),mi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(mi=e)}function af(e){bt(rn,rn.current),bt(ti,e),mi===null&&(mi=e)}function Mm(e){e.tag===22?(bt(rn,rn.current),bt(ti,e),mi===null&&(mi=e)):Pa()}function Pa(){bt(rn,rn.current),bt(ti,ti.current)}function ei(e){rt(ti),mi===e&&(mi=null),rt(rn)}var rn=O(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ce=null,Ge=null,un=null,Fl=!1,sr=!1,xs=!1,zl=0,So=0,rr=null,hS=0;function nn(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function rf(e,n,a,o,u,h){return na=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?sg:yf,xs=!1,h=a(o,u),xs=!1,sr&&(h=bm(n,a,o,u)),Em(e),h}function Em(e){P.H=Eo;var n=Ge!==null&&Ge.next!==null;if(na=0,un=Ge=ce=null,Fl=!1,So=0,rr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Cl(e)&&(fn=!0))}function bm(e,n,a,o){ce=e;var u=0;do{if(sr&&(rr=null),So=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=rg,h=n(a,o)}while(sr);return h}function dS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),n}function of(){var e=zl!==0;return zl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}na=0,un=Ge=ce=null,sr=!1,So=zl=0,rr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function on(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,rr===null&&(rr=[]),e=pm(rr,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?sg:yf),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===D)return wn(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=on();return ff(n,Ge,e)}function ff(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,B=null,et=n,mt=!1;do{var Tt=et.lane&-536870913;if(Tt!==et.lane?(Me&Tt)===Tt:(na&Tt)===Tt){var st=et.revertLane;if(st===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Tt===tr&&(mt=!0);else if((na&st)===st){et=et.next,st===tr&&(mt=!0);continue}else Tt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=Tt,x=h):B=B.next=Tt,ce.lanes|=st,za|=st;Tt=et.action,xs&&a(h,Tt),h=et.hasEagerState?et.eagerState:a(h,Tt)}else st={lane:Tt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=st,x=h):B=B.next=st,ce.lanes|=Tt,za|=Tt;et=et.next}while(et!==null&&et!==n);if(B===null?x=h:B.next=A,!Jn(h,e.memoizedState)&&(fn=!0,mt&&(a=er,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Jn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Tm(e,n,a){var o=ce,u=on(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Jn((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,mf(Cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));h||(na&127)!==0||Am(o,n,a)}return a}function Am(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Bl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rm(e,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(e)}function Cm(e,n,a){return a(function(){wm(n)&&Dm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Dm(e){var n=us(e,2);n!==null&&jn(n,e,2)}function df(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),xs){yt(!0);try{a()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function Um(e,n,a,o){return e.baseState=a,ff(e,Ge,typeof o=="function"?o:ia)}function pS(e,n,a,o,u){if(Xl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Lm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,x={};P.T=x;try{var A=a(u,o),B=P.S;B!==null&&B(x,A),Nm(e,n,A)}catch(et){pf(e,n,et)}finally{h!==null&&x.types!==null&&(h.types=x.types),P.T=h}}else try{h=a(u,o),Nm(e,n,h)}catch(et){pf(e,n,et)}}function Nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(e,n,o)},function(o){return pf(e,n,o)}):Om(e,n,a)}function Om(e,n,a){n.status="fulfilled",n.value=a,Pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lm(e,a)))}function pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}e.action=null}function Pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Fm(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var o=ce;if(Te){if(je){e:{for(var u=je,h=pi;u.nodeType!==8;){if(!h){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){je=gi(u.nextSibling),o=u.data==="F!";break t}}wa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ng.bind(null,ce,o),o.dispatch=a,o=df(!1),h=Sf.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=pS.bind(null,ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function zm(e){var n=on();return Bm(n,Ge,e)}function Bm(e,n,a){if(n=ff(e,n,Im)[0],e=Gl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(x){throw x===nr?Ul:x}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,or(9,{destroy:void 0},mS.bind(null,u,a),null)),[o,h,e]}function mS(e,n){e.action=n}function Hm(e){var n=on(),a=Ge;if(a!==null)return Bm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function or(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Bl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gm(){return on().memoizedState}function Vl(e,n,a,o){var u=Bn();ce.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&sf(o,Ge.memoizedState.deps)?u.memoizedState=or(n,h,a,o):(ce.flags|=e,u.memoizedState=or(1|n,h,a,o))}function Vm(e,n){Vl(8390656,8,e,n)}function mf(e,n){kl(2048,8,e,n)}function gS(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Bl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function km(e){var n=on().memoizedState;return gS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xm(e,n){return kl(4,2,e,n)}function Wm(e,n){return kl(4,4,e,n)}function Ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qm(e,n,a){a=a!=null?a.concat([e]):null,kl(4,4,Ym.bind(null,n,e),a)}function gf(){}function jm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),xs){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(na&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),ce.lanes|=e,za|=e,a)}function Km(e,n,a,o){return Jn(a,n)?a:ar.current!==null?(e=_f(e,a,o),Jn(e,n)||(fn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Me&261930)===0?(fn=!0,e.memoizedState=a):(e=Kg(),ce.lanes|=e,za|=e,n)}function Qm(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var x=P.T,A={};P.T=A,Sf(e,!1,n,a);try{var B=u(),et=P.S;if(et!==null&&et(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=fS(B,o);Mo(e,n,mt,ai(e))}else Mo(e,n,o,ai(e))}catch(Tt){Mo(e,n,{then:function(){},status:"rejected",reason:Tt},ai())}finally{H.p=h,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function _S(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Jm(e).queue;Qm(e,u,n,it,a===null?_S:function(){return $m(e),a(o)})}function Jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $m(e){var n=Jm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},ai())}function xf(){return wn(Bo)}function tg(){return on().memoizedState}function eg(){return on().memoizedState}function vS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=La(a);var o=Na(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:qu()},e.payload=n;return}n=n.return}}function xS(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(e)?ig(n,a):(a=Iu(e,n,a,o),a!==null&&(jn(a,e,o),ag(a,n,o)))}function ng(e,n,a){var o=ai();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))ig(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,x))return bl(e,n,u,0),Ye===null&&El(),!1}catch{}if(a=Iu(e,n,u,o),a!==null)return jn(a,e,o),ag(a,n,o),!0}return!1}function Sf(e,n,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(n)throw Error(s(479))}else n=Iu(e,a,o,2),n!==null&&jn(n,e,2)}function Xl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function ig(e,n){sr=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ag(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:wn,use:Hl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Eo.useEffectEvent=nn;var sg={readContext:wn,use:Hl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,Ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vl(4194308,4,e,n)},useInsertionEffect:function(e,n){Vl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(xs){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(xs){yt(!0);try{a(n)}finally{yt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xS.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=ng.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Bn();return _f(a,e,n)},useTransition:function(){var e=df(!1);return e=Qm.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Bn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Me&127)!==0||Am(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Vm(Cm.bind(null,o,h,e),[e]),o.flags|=2048,or(9,{destroy:void 0},Rm.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(Te){var a=Ii,o=Pi;a=(o&~(1<<32-vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=vS.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:wn,use:Hl,useCallback:jm,useContext:wn,useEffect:mf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Gl,useRef:Gm,useState:function(){return Gl(ia)},useDebugValue:gf,useDeferredValue:function(e,n){var a=on();return Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Gl(ia)[0],n=on().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:xf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=on();return Um(a,Ge,e,n)},useMemoCache:uf,useCacheRefresh:eg};yf.useEffectEvent=km;var rg={readContext:wn,use:Hl,useCallback:jm,useContext:wn,useEffect:mf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:hf,useRef:Gm,useState:function(){return hf(ia)},useDebugValue:gf,useDeferredValue:function(e,n){var a=on();return Ge===null?_f(a,e,n):Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=hf(ia)[0],n=on().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=on();return Ge!==null?Um(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:eg};rg.useEffectEvent=km;function Mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=La(o);u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=La(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Na(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function og(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,h):!0}function lg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ef.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function cg(e){Ml(e)}function ug(e){console.error(e)}function fg(e){Ml(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function dg(e){return e=La(e),e.tag=3,e}function pg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){hg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){hg(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function SS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?ic():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),ic(),!1}if(Te)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),fo(fi(e,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),fo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=bf(e.stateNode,o,u),$u(e,u),an!==4&&(an=2)),!1;var h=Error(s(520),{cause:o});if(h=fi(h,a),Uo===null?Uo=[h]:Uo.push(h),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),$u(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ba===null||!Ba.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?vm(n,null,a,o):vs(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return ps(n),o=rf(e,n,a,x,h,u),A=of(),e!==null&&!fn?(lf(e,n,u),aa(e,n,u)):(Te&&A&&Hu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,_g(e,n,h,o,u)):(e=Al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Nf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(x,o)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(h,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(lo(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Nf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return Af(e,n,a,o,u)}function vg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return xg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,h!==null?h.cachePool:null),h!==null?ym(n,h):ef(),Mm(n);else return o=n.lanes=536870912,xg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Dl(n,h.cachePool),ym(n,h),Pa(),n.memoizedState=null):(e!==null&&Dl(n,null),ef(),Pa());return Dn(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(e,n,a,o,u){var h=Zu();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Dl(n,null),ef(),Mm(n),e!==null&&$s(e,n,o,!0),n.childLanes=u,null}function Yl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sg(e,n,a){return vs(n,e.child,null,a),e=Yl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function yS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Yl(n,o),n.lanes=536870912,bo(null,e);if(af(n),(e=je)?(e=L0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Yl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=Sg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=Ye,o!==null&&(x=zs(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,us(e,x),jn(o,e,x),Tf;ic(),n=Sg(e,n,a)}else e=h.treeContext,je=gi(x.nextSibling),Cn=n,Te=!0,Ca=null,pi=!1,e!==null&&rm(n,e),n=Yl(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,o,u){return ps(n),a=rf(e,n,a,o,void 0,u),o=of(),e!==null&&!fn?(lf(e,n,u),aa(e,n,u)):(Te&&o&&Hu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function yg(e,n,a,o,u,h){return ps(n),n.updateQueue=null,a=bm(n,o,a,u),Em(e),o=of(),e!==null&&!fn?(lf(e,n,h),aa(e,n,h)):(Te&&o&&Hu(n),n.flags|=1,Dn(e,n,a,h),n.child)}function Mg(e,n,a,o,u){if(ps(n),n.stateNode===null){var h=Zs,x=a.contextType;typeof x=="object"&&x!==null&&(h=wn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ef,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Qu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?wn(x):Zs,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Ef.enqueueReplaceState(h,h.state,null),xo(n,o,h,u),vo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,B=Ss(a,A);h.props=B;var et=h.context,mt=a.contextType;x=Zs,typeof mt=="object"&&mt!==null&&(x=wn(mt));var Tt=a.getDerivedStateFromProps;mt=typeof Tt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||et!==x)&&lg(n,h,o,x),Ua=!1;var st=n.memoizedState;h.state=st,xo(n,o,h,u),vo(),et=n.memoizedState,A||st!==et||Ua?(typeof Tt=="function"&&(Mf(n,a,Tt,o),et=n.memoizedState),(B=Ua||og(n,a,B,o,st,et,x))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=x,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ju(e,n),x=n.memoizedProps,mt=Ss(a,x),h.props=mt,Tt=n.pendingProps,st=h.context,et=a.contextType,B=Zs,typeof et=="object"&&et!==null&&(B=wn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==Tt||st!==B)&&lg(n,h,o,B),Ua=!1,st=n.memoizedState,h.state=st,xo(n,o,h,u),vo();var ut=n.memoizedState;x!==Tt||st!==ut||Ua||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof A=="function"&&(Mf(n,a,A,o),ut=n.memoizedState),(mt=Ua||og(n,a,mt,o,st,ut,B)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=B,o=mt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,ql(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=aa(e,n,u),e}function Eg(e,n,a,o){return hs(),n.flags|=256,Dn(e,n,a,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:hm()}}function wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function bg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Oa(n):Pa(),(e=je)?(e=L0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw wa(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Pa(),u=n.mode,A=jl({mode:"hidden",children:A},u),o=fs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Cf(a),o.childLanes=wf(e,x,a),n.memoizedState=Rf,bo(null,o)):(Oa(n),Df(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(h)n.flags&256?(Oa(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),A=fs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vs(n,e.child,null,a),o=n.child,o.memoizedState=Cf(a),o.childLanes=wf(e,x,a),n.memoizedState=Rf,n=bo(null,o));else if(Oa(n),fh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(s(419)),o.stack="",o.digest=x,fo({value:o,source:null,stack:null}),n=Uf(e,n,a)}else if(fn||$s(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=Ye,x!==null&&(o=zs(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,us(e,o),jn(x,e,o),Tf;uh(A)||ic(),n=Uf(e,n,a)}else uh(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,je=gi(A.nextSibling),Cn=n,Te=!0,Ca=null,pi=!1,e!==null&&rm(n,e),n=Df(n,o.children),n.flags|=4096);return n}return u?(Pa(),A=o.fallback,u=n.mode,B=e.child,et=B.sibling,o=Ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,et!==null?A=Ji(et,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Cf(a):(u=A.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=hm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=wf(e,x,a),n.memoizedState=Rf,bo(e.child,o)):(Oa(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return vs(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Lf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=rn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,bt(rn,x),Dn(e,n,o,a),o=Te?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,a,n);else if(e.tag===19)Tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Il(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Lf(n,!0,a,null,h,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function MS(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),Da(n,cn,e.memoizedState.cache),hs();break;case 27:case 5:kt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bg(e,n,a):(Oa(n),e=aa(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,vg(e,n,a,n.pendingProps);case 24:Da(n,cn,e.memoizedState.cache)}return aa(e,n,a)}function Rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Nf(e,a)&&(n.flags&128)===0)return fn=!1,MS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&sm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=Ss(e,o),n.tag=1,n=Mg(null,n,e,o,a)):(n.tag=0,n=Af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=mg(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=gg(null,n,e,o,a);break t}}throw n=gt(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),Mg(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Ju(e,n),xo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Da(n,cn,o),o!==h.cache&&Yu(n,[cn],a,!0),vo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Eg(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),fo(u),n=Eg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=gi(e.firstChild),Cn=n,Te=!0,Ca=null,pi=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),o===u){n=aa(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=uc(q.current).createElement(a),o[ln]=n,o[Mn]=e,Un(o,a,e),R(o),n.stateNode=o):n.memoizedState=z0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Te&&(o=n.stateNode=P0(n.type,n.pendingProps,q.current),Cn=n,pi=!0,u=je,ka(n.type)?(hh=u,je=gi(o.firstChild)):je=u),Dn(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=je)&&(o=JS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Cn=n,je=gi(o.firstChild),pi=!1,u=!0):u=!1),u||wa(n)),kt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,oh(u,h)?o=null:x!==null&&oh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,dS,null,null,a),Bo._currentValue=u),ql(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=je)&&(a=$S(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Cn=n,je=null,e=!0):e=!1),e||wa(n)),null;case 13:return bg(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ps(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return Ag(e,n,a);case 31:return yS(e,n,a);case 22:return vg(e,n,a,n.pendingProps);case 24:return ps(n),o=wn(cn),e===null?(u=Zu(),u===null&&(u=Ye,h=qu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Qu(n),Da(n,cn,u)):((e.lanes&a)!==0&&(Ju(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,o)):(o=h.cache,Da(n,cn,o),o!==u.cache&&Yu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(e){e.flags|=4}function Of(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw _s=Ll,Ku}else e.flags&=-16777217}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(n))if(t0())e.flags|=8192;else throw _s=Ll,Ku}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,fr|=n)}function To(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ES(e,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(cn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ze(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(sa(n),h!==null?(Ze(n),Cg(n,h)):(Ze(n),Of(n,u,null,o,a))):h?h!==e.memoizedState?(sa(n),Ze(n),Cg(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(n),Ze(n),Of(n,u,e,o,a)),null;case 27:if(he(n),a=q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Ut.current,Js(n)?om(n):(e=P0(u,o,a),n.stateNode=e,sa(n))}return Ze(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(h=Ut.current,Js(n))om(n);else{var x=uc(q.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[ln]=n,h[Mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Un(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(n)}}return Ze(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=q.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||b0(e.nodeValue,a)),e||wa(n,!0)}else e=uc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Ze(n),null);case 4:return Gt(),e===null&&nh(n.stateNode.containerInfo),Ze(n),null;case 10:return ea(n.type),Ze(n),null;case 19:if(rt(rn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)To(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Il(e),h!==null){for(n.flags|=128,To(o,!1),e=h.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)nm(a,e),a=a.sibling;return bt(rn,rn.current&1|2),Te&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>tc&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Il(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Te)return Ze(n),null}else 2*E()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,bt(rn,u?a&1|2:a&1),Te&&$i(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ei(n),nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bS(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(cn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(rn),null;case 4:return Gt(),null;case 10:return ea(n.type),null;case 22:case 23:return ei(n),nf(),e!==null&&rt(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function wg(e,n){switch(Gu(n),n.tag){case 3:ea(cn),Gt();break;case 26:case 27:case 5:he(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:rt(rn);break;case 10:ea(n.type);break;case 22:case 23:ei(n),nf(),e!==null&&rt(ms);break;case 24:ea(cn)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Ia(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var B=a,et=A;try{et()}catch(mt){Be(u,B,mt)}}}o=o.next}while(o!==h)}}catch(mt){Be(n,n.return,mt)}}function Dg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sm(n,a)}catch(o){Be(e,e.return,o)}}}function Ug(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Pf(e,n,a){try{var o=e.stateNode;YS(o,e.type,a,n),o[Mn]=n}catch(u){Be(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function Og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[Mn]=a}catch(h){Be(e,e.return,h)}}var ra=!1,hn=!1,zf=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function TS(e,n){if(e=e.containerInfo,sh=_c,e=qp(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,B=-1,et=0,mt=0,Tt=e,st=null;e:for(;;){for(var ut;Tt!==a||u!==0&&Tt.nodeType!==3||(A=x+u),Tt!==h||o!==0&&Tt.nodeType!==3||(B=x+o),Tt.nodeType===3&&(x+=Tt.nodeValue.length),(ut=Tt.firstChild)!==null;)st=Tt,Tt=ut;for(;;){if(Tt===e)break e;if(st===a&&++et===u&&(A=x),st===h&&++mt===o&&(B=x),(ut=Tt.nextSibling)!==null)break;Tt=st,st=Tt.parentNode}Tt=ut}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},_c=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Yt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Ig(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&Ao(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Dg(a),o&512&&Ro(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:la(e,a),n===null&&o&4&&Lg(a),o&512&&Ro(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&Bg(e,a);break;case 13:la(e,a),o&4&&Hg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=OS.bind(null,a),ty(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||hn,u=ra;var h=hn;ra=o,(hn=n)&&!h?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=u,hn=h}break;case 30:break;default:la(e,a)}}function Fg(e){var n=e.alternate;n!==null&&(e.alternate=null,Fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function oa(e,n,a){for(a=a.child;a!==null;)zg(e,n,a),a=a.sibling}function zg(e,n,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Y,a)}catch{}switch(a.tag){case 26:hn||Fi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Fi(a,n);var o=$e,u=Xn;ka(a.type)&&($e=a.stateNode,Xn=!1),oa(e,n,a),Io(a.stateNode),$e=o,Xn=u;break;case 5:hn||Fi(a,n);case 6:if(o=$e,u=Xn,$e=null,oa(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:$e!==null&&(Xn?(e=$e,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):D0($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,oa(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),oa(e,n,a);break;case 1:hn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,oa(e,n,a),hn=o;break;default:oa(e,n,a)}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){Be(n,n.return,a)}}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){Be(n,n.return,a)}}function AS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pg),n;default:throw Error(s(435,e.tag))}}function Ql(e,n){var a=AS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=PS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){$e=A.stateNode,Xn=!1;break t}break;case 5:$e=A.stateNode,Xn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if($e===null)throw Error(s(160));zg(h,x,u),$e=null,Xn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling}var Ri=null;function Gg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(Ia(3,e,e.return),Ao(3,e),Ia(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(hn||a===null||Fi(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),Yn(e),o&512&&(hn||a===null||Fi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ss]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Un(h,o,a),h[ln]=e,R(h),o=h;break t;case"link":var x=G0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),Un(h,o,a),u.head.appendChild(h);break;case"meta":if(x=G0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),Un(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=e,R(h),o=h}e.stateNode=o}else V0(u,e.type,e.stateNode);else e.stateNode=H0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?V0(u,e.type,e.stateNode):H0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(hn||a===null||Fi(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(hn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Yt){Be(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Be(e,e.return,Yt)}}break;case 3:if(dc=null,u=Ri,Ri=fc(n.containerInfo),Wn(n,e),Ri=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Yt){Be(e,e.return,Yt)}zf&&(zf=!1,Vg(e));break;case 4:o=Ri,Ri=fc(e.stateNode.containerInfo),Wn(n,e),Yn(e),Ri=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=ra,mt=hn;if(ra=et||u,hn=mt||B,Wn(n,e),hn=mt,ra=et,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ra||hn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=B.stateNode;var Tt=B.memoizedProps.style,st=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Yt){Be(B,B.return,Yt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Yt){Be(B,B.return,Yt)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;u?U0(ut,!0):U0(B.stateNode,!1)}catch(Yt){Be(B,B.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=If(e);Kl(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var A=If(e);Kl(e,A,x);break;case 3:case 4:var B=a.stateNode.containerInfo,et=If(e);Ff(e,et,B);break;default:throw Error(s(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),ys(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),ys(n);break;case 27:Io(n.stateNode);case 26:case 5:Fi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:ca(u,h,a),Ao(4,h);break;case 1:if(ca(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Be(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)xm(B[u],A)}catch(et){Be(o,o.return,et)}}a&&x&64&&Dg(h),Ro(h,h.return);break;case 27:Og(h);case 26:case 5:ca(u,h,a),a&&o===null&&x&4&&Lg(h),Ro(h,h.return);break;case 12:ca(u,h,a);break;case 31:ca(u,h,a),a&&x&4&&Bg(u,h);break;case 13:ca(u,h,a),a&&x&4&&Hg(u,h);break;case 22:h.memoizedState===null&&ca(u,h,a),Ro(h,h.return);break;case 30:break;default:ca(u,h,a)}n=n.sibling}}function Bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(e,n,a,o),n=n.sibling}function kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ci(e,n,a,o):Co(e,n):h._visibility&2?Ci(e,n,a,o):(h._visibility|=2,lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(x,n);break;case 24:Ci(e,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Ci(e,n,a,o)}}function lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,B=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:lr(h,x,A,B,u),Ao(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?lr(h,x,A,B,u):Co(h,x):(mt._visibility|=2,lr(h,x,A,B,u)),u&&et&2048&&Bf(x.alternate,x);break;case 24:lr(h,x,A,B,u),u&&et&2048&&Hf(x.alternate,x);break;default:lr(h,x,A,B,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Hf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function cr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&wo&&e.memoizedState!==null&&hy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var o=Ri;Ri=fc(e.stateNode.containerInfo),cr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,cr(e,n,a),wo=o):cr(e,n,a));break;default:cr(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Do(e);break;default:Do(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function qg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(Fg(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var RS={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},CS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,_e=null,Me=0,ze=0,ni=null,Fa=!1,ur=!1,Gf=!1,ua=0,an=0,za=0,Ms=0,Vf=0,ii=0,fr=0,Uo=null,qn=null,kf=!1,$l=0,jg=0,tc=1/0,ec=null,Ba=null,mn=0,Ha=null,hr=null,fa=0,Xf=0,Wf=null,Zg=null,Lo=0,Yf=null;function ai(){return(Oe&2)!==0&&Me!==0?Me&-Me:P.T!==null?Jf():Jr()}function Kg(){if(ii===0)if((Me&536870912)===0||Te){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Ga(e,Me,ii,!1)),On(e,a),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(Ms|=a),an===4&&Ga(e,Me,ii,!1)),zi(e))}function Qg(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?US(e,n):jf(e,n,!0),h=o;do{if(u===0){ur&&!o&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!wS(a)){u=jf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Uo;var B=A.current.memoizedState.isDehydrated;if(B&&(dr(A,x).flags|=256),x=jf(A,x,!1),x!==2){if(Gf&&!B){A.errorRecoveryDisabledLanes|=h,Ms|=h,u=4;break t}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){dr(e,0),Ga(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,ii,!Fa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(Ga(o,n,ii,!Fa),Et(o,0,!0)!==0)break t;fa=n,o.timeoutHandle=C0(Jg.bind(null,o,a,qn,ec,kf,n,ii,Ms,fr,Fa,h,"Throttled",-0,0),u);break t}Jg(o,a,qn,ec,kf,n,ii,Ms,fr,Fa,h,null,-0,0)}}break}while(!0);zi(e)}function Jg(e,n,a,o,u,h,x,A,B,et,mt,Tt,st,ut){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},Xg(n,h,Tt);var Yt=(h&62914560)===h?$l-E():(h&4194048)===h?jg-E():0;if(Yt=dy(Tt,Yt),Yt!==null){fa=h,e.cancelPendingCommit=Yt(r0.bind(null,e,n,h,a,o,u,x,A,B,mt,Tt,null,st,ut)),Ga(e,h,x,!et);return}}r0(e,n,h,a,o,u,x,A,B)}function wS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,o){n&=~Vf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-vt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&dl(e,a,n)}function nc(){return(Oe&6)===0?(No(0),!1):!0}function qf(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,ta=ds=null,cf(e),ir=null,mo=0,e=_e;for(;e!==null;)wg(e.alternate,e),e=e.return;_e=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ZS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,qf(),Ye=e,_e=a=Ji(e.current,null),Me=n,ze=0,ni=null,Fa=!1,ur=Lt(e,n),Gf=!1,fr=ii=Vf=Ms=za=an=0,qn=Uo=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-vt(o),h=1<<u;n|=e[u],o&=~h}return ua=n,El(),a}function $g(e,n){ce=null,P.H=Eo,n===nr||n===Ul?(n=mm(),ze=3):n===Ku?(n=mm(),ze=4):ze=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_e===null&&(an=1,Wl(e,fi(n,e.current)))}function t0(){var e=ti.current;return e===null?!0:(Me&4194048)===Me?mi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===mi:!1}function e0(){var e=P.H;return P.H=Eo,e===null?Eo:e}function n0(){var e=P.A;return P.A=RS,e}function ic(){an=4,Fa||(Me&4194048)!==Me&&ti.current!==null||(ur=!0),(za&134217727)===0&&(Ms&134217727)===0||Ye===null||Ga(Ye,Me,ii,!1)}function jf(e,n,a){var o=Oe;Oe|=2;var u=e0(),h=n0();(Ye!==e||Me!==n)&&(ec=null,dr(e,n)),n=!1;var x=an;t:do try{if(ze!==0&&_e!==null){var A=_e,B=ni;switch(ze){case 8:qf(),x=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var et=ze;if(ze=0,ni=null,pr(e,A,B,et),a&&ur){x=0;break t}break;default:et=ze,ze=0,ni=null,pr(e,A,B,et)}}DS(),x=an;break}catch(mt){$g(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ta=ds=null,Oe=o,P.H=u,P.A=h,_e===null&&(Ye=null,Me=0,El()),x}function DS(){for(;_e!==null;)i0(_e)}function US(e,n){var a=Oe;Oe|=2;var o=e0(),u=n0();Ye!==e||Me!==n?(ec=null,tc=E()+500,dr(e,n)):ur=Lt(e,n);t:do try{if(ze!==0&&_e!==null){n=_e;var h=ni;e:switch(ze){case 1:ze=0,ni=null,pr(e,n,h,1);break;case 2:case 9:if(dm(h)){ze=0,ni=null,a0(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),zi(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:dm(h)?(ze=0,ni=null,a0(n)):(ze=0,ni=null,pr(e,n,h,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var A=_e;if(x?k0(x):A.stateNode.complete){ze=0,ni=null;var B=A.sibling;if(B!==null)_e=B;else{var et=A.return;et!==null?(_e=et,ac(et)):_e=null}break e}}ze=0,ni=null,pr(e,n,h,5);break;case 6:ze=0,ni=null,pr(e,n,h,6);break;case 8:qf(),an=6;break t;default:throw Error(s(462))}}LS();break}catch(mt){$g(e,mt)}while(!0);return ta=ds=null,P.H=o,P.A=u,Oe=a,_e!==null?0:(Ye=null,Me=0,El(),an)}function LS(){for(;_e!==null&&!qt();)i0(_e)}function i0(e){var n=Rg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?ac(e):_e=n}function a0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:cf(n);default:wg(a,n),n=_e=nm(n,ua),n=Rg(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?ac(e):_e=n}function pr(e,n,a,o){ta=ds=null,cf(n),ir=null,mo=0;var u=n.return;try{if(SS(e,u,n,a,Me)){an=1,Wl(e,fi(a,e.current)),_e=null;return}}catch(h){if(u!==null)throw _e=u,h;an=1,Wl(e,fi(a,e.current)),_e=null;return}n.flags&32768?(Te||o===1?e=!0:ur||(Me&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),s0(n,e)):ac(n)}function ac(e){var n=e;do{if((n.flags&32768)!==0){s0(n,Fa);return}e=n.return;var a=ES(n.alternate,n,ua);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);an===0&&(an=5)}function s0(e,n){do{var a=bS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);an=6,_e=null}function r0(e,n,a,o,u,h,x,A,B){e.cancelPendingCommit=null;do sc();while(mn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Pu,Ei(e,a,h,x,A,B),e===Ye&&(_e=Ye=null,Me=0),hr=n,Ha=e,fa=a,Xf=h,Wf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(dt,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,x=Oe,Oe|=4;try{TS(e,n,a)}finally{Oe=x,H.p=u,P.T=o}}mn=1,o0(),l0(),c0()}}function o0(){if(mn===1){mn=0;var e=Ha,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{Gg(n,e);var h=rh,x=qp(e.containerInfo),A=h.focusedElem,B=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(B!==null&&Du(A)){var et=B.start,mt=B.end;if(mt===void 0&&(mt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(mt,A.value.length);else{var Tt=A.ownerDocument||document,st=Tt&&Tt.defaultView||window;if(st.getSelection){var ut=st.getSelection(),Yt=A.textContent.length,ne=Math.min(B.start,Yt),ke=B.end===void 0?ne:Math.min(B.end,Yt);!ut.extend&&ne>ke&&(x=ke,ke=ne,ne=x);var Q=Wp(A,ne),W=Wp(A,ke);if(Q&&W&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var tt=Tt.createRange();tt.setStart(Q.node,Q.offset),ut.removeAllRanges(),ne>ke?(ut.addRange(tt),ut.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),ut.addRange(tt))}}}}for(Tt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&Tt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var St=Tt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}_c=!!sh,rh=sh=null}finally{Oe=u,H.p=o,P.T=a}}e.current=n,mn=2}}function l0(){if(mn===2){mn=0;var e=Ha,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{Ig(e,n.alternate,n)}finally{Oe=u,H.p=o,P.T=a}}mn=3}}function c0(){if(mn===4||mn===3){mn=0,L();var e=Ha,n=hr,a=fa,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,hr=Ha=null,u0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Bs(a),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Y,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{P.T=n,H.p=u}}(fa&3)!==0&&sc(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?Lo++:(Lo=0,Yf=e):Lo=0,No(0)}}function u0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function sc(){return o0(),l0(),c0(),f0()}function f0(){if(mn!==5)return!1;var e=Ha,n=Xf;Xf=0;var a=Bs(fa),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=Wf,Wf=null;var h=Ha,x=fa;if(mn=0,hr=Ha=null,fa=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,Yg(h.current),kg(h,h.current,x,a),Oe=A,No(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Y,h)}catch{}return!0}finally{H.p=u,P.T=o,u0(e,n)}}function h0(e,n,a){n=fi(a,n),n=bf(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(On(e,2),zi(e))}function Be(e,n,a){if(e.tag===3)h0(e,e,a);else for(;n!==null;){if(n.tag===3){h0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){e=fi(a,e),a=dg(2),o=Na(n,a,2),o!==null&&(pg(a,o,n,e),On(o,2),zi(o));break}}n=n.return}}function Zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new CS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=NS.bind(null,e,n,a),n.then(e,e))}function NS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Me&a)===a&&(an===4||an===3&&(Me&62914560)===Me&&300>E()-$l?(Oe&2)===0&&dr(e,0):Vf|=a,fr===Me&&(fr=0)),zi(e)}function d0(e,n){n===0&&(n=Ie()),e=us(e,n),e!==null&&(On(e,n),zi(e))}function OS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d0(e,a)}function PS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d0(e,a)}function IS(e,n){return ye(e,n)}var rc=null,mr=null,Kf=!1,oc=!1,Qf=!1,Va=0;function zi(e){e!==mr&&e.next===null&&(mr===null?rc=mr=e:mr=mr.next=e),oc=!0,Kf||(Kf=!0,zS())}function No(e,n){if(!Qf&&oc){Qf=!0;do for(var a=!1,o=rc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-vt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,_0(o,h))}else h=Me,h=Et(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Lt(o,h)||(a=!0,_0(o,h));o=o.next}while(a);Qf=!1}}function FS(){p0()}function p0(){oc=Kf=!1;var e=0;Va!==0&&jS()&&(e=Va);for(var n=E(),a=null,o=rc;o!==null;){var u=o.next,h=m0(o,n);h===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(h&3)!==0)&&(oc=!0)),o=u}mn!==0&&mn!==5||No(e),Va!==0&&(Va=0)}function m0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-vt(h),A=1<<x,B=u[x];B===-1?((A&a)===0||(A&o)!==0)&&(u[x]=se(A,n)):B<=n&&(e.expiredLanes|=A),h&=~A}if(n=Ye,a=Me,a=Et(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&we(o),Bs(a)){case 2:case 8:a=At;break;case 32:a=dt;break;case 268435456:a=It;break;default:a=dt}return o=g0.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&we(o),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var o=Me;return o=Et(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),m0(e,E()),e.callbackNode!=null&&e.callbackNode===a?g0.bind(null,e):null)}function _0(e,n){if(sc())return null;Qg(e,n,!0)}function zS(){KS(function(){(Oe&6)!==0?ye(_t,FS):p0()})}function Jf(){if(Va===0){var e=tr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Va=e}return Va}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function x0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function BS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=v0((u[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?v0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new xl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var B=x?x0(u,x):new FormData(u);vf(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(A.preventDefault(),B=x?x0(u,x):new FormData(u),vf(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],HS=th.toLowerCase(),GS=th[0].toUpperCase()+th.slice(1);Ai(HS,"on"+GS)}Ai(Kp,"onAnimationEnd"),Ai(Qp,"onAnimationIteration"),Ai(Jp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(iS,"onTransitionRun"),Ai(aS,"onTransitionStart"),Ai(sS,"onTransitionCancel"),Ai($p,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function S0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],B=A.instance,et=A.currentTarget;if(A=A.listener,B!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(mt){Ml(mt)}u.currentTarget=null,h=B}else for(x=0;x<o.length;x++){if(A=o[x],B=A.instance,et=A.currentTarget,A=A.listener,B!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(mt){Ml(mt)}u.currentTarget=null,h=B}}}}function ve(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=e+"__bubble";a.has(o)||(y0(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),y0(a,e,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[lc]){e[lc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lc]||(n[lc]=!0,eh("selectionchange",!1,n))}}function y0(e,n,a,o){switch(K0(n)){case 2:var u=gy;break;case 8:u=_y;break;default:u=_h}a=u.bind(null,n,a,e),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ea(A),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Ap(function(){var et=h,mt=xu(a),Tt=[];t:{var st=tm.get(e);if(st!==void 0){var ut=xl,Yt=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":ut=Px;break;case"focusin":Yt="focus",ut=Tu;break;case"focusout":Yt="blur",ut=Tu;break;case"beforeblur":case"afterblur":ut=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=zx;break;case Kp:case Qp:case Jp:ut=Ax;break;case $p:ut=Hx;break;case"scroll":case"scrollend":ut=yx;break;case"wheel":ut=Vx;break;case"copy":case"cut":case"paste":ut=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Up;break;case"toggle":case"beforetoggle":ut=Xx}var ne=(n&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),Q=ne?st!==null?st+"Capture":null:st;ne=[];for(var W=et,tt;W!==null;){var St=W;if(tt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||tt===null||Q===null||(St=eo(W,Q),St!=null&&ne.push(Po(W,St,tt))),ke)break;W=W.return}0<ne.length&&(st=new ut(st,Yt,null,a,mt),Tt.push({event:st,listeners:ne}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==vu&&(Yt=a.relatedTarget||a.fromElement)&&(Ea(Yt)||Yt[bi]))break t;if((ut||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(Yt=a.relatedTarget||a.toElement,ut=et,Yt=Yt?Ea(Yt):null,Yt!==null&&(ke=c(Yt),ne=Yt.tag,Yt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Yt=null)):(ut=null,Yt=et),ut!==Yt)){if(ne=wp,St="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Up,St="onPointerLeave",Q="onPointerEnter",W="pointer"),ke=ut==null?st:rs(ut),tt=Yt==null?st:rs(Yt),st=new ne(St,W+"leave",ut,a,mt),st.target=ke,st.relatedTarget=tt,St=null,Ea(mt)===et&&(ne=new ne(Q,W+"enter",Yt,a,mt),ne.target=tt,ne.relatedTarget=ke,St=ne),ke=St,ut&&Yt)e:{for(ne=kS,Q=ut,W=Yt,tt=0,St=Q;St;St=ne(St))tt++;St=0;for(var $t=W;$t;$t=ne($t))St++;for(;0<tt-St;)Q=ne(Q),tt--;for(;0<St-tt;)W=ne(W),St--;for(;tt--;){if(Q===W||W!==null&&Q===W.alternate){ne=Q;break e}Q=ne(Q),W=ne(W)}ne=null}else ne=null;ut!==null&&M0(Tt,st,ut,ne,!1),Yt!==null&&ke!==null&&M0(Tt,ke,Yt,ne,!0)}}t:{if(st=et?rs(et):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var De=Bp;else if(Fp(st))if(Hp)De=tS;else{De=Jx;var Qt=Qx}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Ti(et.elementType)&&(De=Bp):De=$x;if(De&&(De=De(e,et))){zp(Tt,De,a,mt);break t}Qt&&Qt(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&bn(st,"number",st.value)}switch(Qt=et?rs(et):window,e){case"focusin":(Fp(Qt)||Qt.contentEditable==="true")&&(Ys=Qt,Uu=et,co=null);break;case"focusout":co=Uu=Ys=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,jp(Tt,a,mt);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":jp(Tt,a,mt)}var ue;if(Ru)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Ws?Pp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Lp&&a.locale!=="ko"&&(Ws||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ws&&(ue=Rp()):(Aa=mt,Mu="value"in Aa?Aa.value:Aa.textContent,Ws=!0)),Qt=cc(et,Ee),0<Qt.length&&(Ee=new Dp(Ee,e,null,a,mt),Tt.push({event:Ee,listeners:Qt}),ue?Ee.data=ue:(ue=Ip(a),ue!==null&&(Ee.data=ue)))),(ue=Yx?qx(e,a):jx(e,a))&&(Ee=cc(et,"onBeforeInput"),0<Ee.length&&(Qt=new Dp("onBeforeInput","beforeinput",null,a,mt),Tt.push({event:Qt,listeners:Ee}),Qt.data=ue)),BS(Tt,e,et,a,mt)}S0(Tt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,h)),u=eo(e,n),u!=null&&o.push(Po(e,u,h))),e.tag===3)return o;e=e.return}return[]}function kS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,B=A.alternate,et=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||et===null||(B=et,u?(et=eo(a,h),et!=null&&x.unshift(Po(a,et,B))):u||(et=eo(a,h),et!=null&&x.push(Po(a,et,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var XS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(XS,`
`).replace(WS,"")}function b0(e,n){return n=E0(n),E0(e)===n}function Ve(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":te(e,"class",o);break;case"tabIndex":te(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,a,o);break;case"style":Vs(e,o,h);break;case"data":if(n!=="object"){te(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xx.get(a)||a,Zt(e,a,o))}}function ah(e,n,a,o,u,h){switch(a){case"style":Vs(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,h,x,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=h=x=u=null,B=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":B=mt;break;case"defaultChecked":et=mt;break;case"value":h=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,mt,a,null)}}Zi(e,h,A,B,et,x,u,!1);return;case"select":ve("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":ve("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,n,x,A,a,null)}Tn(e,o,u,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,B,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)ve(Oo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,et,o,a,null)}return;default:if(Ti(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&ah(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function YS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,B=null,et=null,mt=null;for(ut in a){var Tt=a[ut];if(a.hasOwnProperty(ut)&&Tt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=Tt;default:o.hasOwnProperty(ut)||Ve(e,n,ut,null,o,Tt)}}for(var st in o){var ut=o[st];if(Tt=a[st],o.hasOwnProperty(st)&&(ut!=null||Tt!=null))switch(st){case"type":h=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":mt=ut;break;case"value":x=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==Tt&&Ve(e,n,st,ut,o,Tt)}}En(e,x,A,B,et,mt,h,u);return;case"select":ut=x=A=st=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ut=B;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==B&&Ve(e,n,u,h,o,B)}n=A,a=x,o=ut,st!=null?ci(e,!!a,st,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ve(e,n,x,u,o,h)}Fe(e,st,ut);return;case"option":for(var Yt in a)st=a[Yt],a.hasOwnProperty(Yt)&&st!=null&&!o.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Ve(e,n,Yt,null,o,st));for(B in o)st=o[B],ut=a[B],o.hasOwnProperty(B)&&st!==ut&&(st!=null||ut!=null)&&(B==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Ve(e,n,B,st,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)st=a[ne],a.hasOwnProperty(ne)&&st!=null&&!o.hasOwnProperty(ne)&&Ve(e,n,ne,null,o,st);for(et in o)if(st=o[et],ut=a[et],o.hasOwnProperty(et)&&st!==ut&&(st!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ve(e,n,et,st,o,ut)}return;default:if(Ti(n)){for(var ke in a)st=a[ke],a.hasOwnProperty(ke)&&st!==void 0&&!o.hasOwnProperty(ke)&&ah(e,n,ke,void 0,o,st);for(mt in o)st=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||st===ut||st===void 0&&ut===void 0||ah(e,n,mt,st,o,ut);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&Ve(e,n,Q,null,o,st);for(Tt in o)st=o[Tt],ut=a[Tt],!o.hasOwnProperty(Tt)||st===ut||st==null&&ut==null||Ve(e,n,Tt,st,o,ut)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&T0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],et=B.startTime;if(et>A)break;var mt=B.transferSize,Tt=B.initiatorType;mt&&T0(Tt)&&(B=B.responseEnd,x+=mt*(B<A?1:(A-et)/(B-et)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function jS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(QS)}:C0;function QS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function D0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),xr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);xr(n)}function U0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function JS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function $S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function L0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ty(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function N0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P0(e,n,a){switch(n=uc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var _i=new Map,I0=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=H.d;H.d={f:ey,r:ny,D:iy,C:ay,L:sy,m:ry,X:ly,S:oy,M:cy};function ey(){var e=ha.f(),n=nc();return e||n}function ny(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?$m(n):ha.r(e)}var gr=typeof document>"u"?null:document;function F0(e,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I0.has(u)||(I0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function iy(e){ha.D(e),F0("dns-prefetch",e,null)}function ay(e,n){ha.C(e,n),F0("preconnect",e,n)}function sy(e,n,a){ha.L(e,n,a);var o=gr;if(o&&e&&n){var u='link[rel="preload"][as="'+oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+oe(a.imageSizes)+'"]')):u+='[href="'+oe(e)+'"]';var h=u;switch(n){case"style":h=_r(e);break;case"script":h=vr(e)}_i.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(h))||n==="script"&&o.querySelector(zo(h))||(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function ry(e,n){ha.m(e,n);var a=gr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+oe(o)+'"][href="'+oe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vr(e)}if(!_i.has(h)&&(e=_({rel:"modulepreload",href:e},n),_i.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(h)))return}o=a.createElement("link"),Un(o,"link",e),R(o),a.head.appendChild(o)}}}function oy(e,n,a){ha.S(e,n,a);var o=gr;if(o&&e){var u=Ta(o).hoistableStyles,h=_r(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Fo(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(h))&&dh(e,a);var B=x=o.createElement("link");R(B),Un(B,"link",e),B._p=new Promise(function(et,mt){B.onload=et,B.onerror=mt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function ly(e,n){ha.X(e,n);var a=gr;if(a&&e){var o=Ta(a).hoistableScripts,u=vr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0},n),(n=_i.get(u))&&ph(e,n),h=a.createElement("script"),R(h),Un(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function cy(e,n){ha.M(e,n);var a=gr;if(a&&e){var o=Ta(a).hoistableScripts,u=vr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&ph(e,n),h=a.createElement("script"),R(h),Un(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function z0(e,n,a,o){var u=(u=q.current)?fc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Ta(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var h=Ta(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Fo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),h||uy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Ta(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+oe(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function B0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function uy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),e.head.appendChild(n))}function vr(e){return'[src="'+oe(e)+'"]'}function zo(e){return"script[async]"+e}function H0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+oe(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Un(o,"style",u),hc(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var h=e.querySelector(Fo(u));if(h)return n.state.loading|=4,n.instance=h,R(h),h;o=B0(a),(u=_i.get(u))&&dh(o,u),h=(e.ownerDocument||e).createElement("link"),R(h);var x=h;return x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Un(h,"link",o),n.state.loading|=4,hc(h,a.precedence,e),n.instance=h;case"script":return h=vr(a.src),(u=e.querySelector(zo(h)))?(n.instance=u,R(u),u):(o=a,(u=_i.get(h))&&(o=_({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,e));return n.instance}function hc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function G0(e,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ss]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function V0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),h=n.querySelector(Fo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,R(h);return}h=n.ownerDocument||n,o=B0(o),(u=_i.get(u))&&dh(o,u),h=h.createElement("link"),R(h);var x=h;x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Un(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var mh=0;function dy(e,n){return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&mh===0&&(mh=62500*qS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function gc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,n.forEach(py,e),mc=null,pc.call(e))}function py(e,n){if(!(n.state.loading&4)){var a=mc.get(e);if(a)var o=a.get(null);else{a=new Map,mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:D,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function my(e,n,a,o,u,h,x,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function X0(e,n,a,o,u,h,x,A,B,et,mt,Tt){return e=new my(e,n,a,x,B,et,mt,Tt,A),n=1,h===!0&&(n|=24),h=$n(3,null,null,n),e.current=h,h.stateNode=e,n=qu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Qu(h),e}function W0(e){return e?(e=Zs,e):Zs}function Y0(e,n,a,o,u,h){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=La(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Na(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function q0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){q0(e,n),(e=e.alternate)&&q0(e,n)}function j0(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&jn(n,e,67108864),gh(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var n=ai();n=Qr(n);var a=us(e,n);a!==null&&jn(a,e,n),gh(e,n)}}var _c=!0;function gy(e,n,a,o){var u=P.T;P.T=null;var h=H.p;try{H.p=2,_h(e,n,a,o)}finally{H.p=h,P.T=u}}function _y(e,n,a,o){var u=P.T;P.T=null;var h=H.p;try{H.p=8,_h(e,n,a,o)}finally{H.p=h,P.T=u}}function _h(e,n,a,o){if(_c){var u=vh(o);if(u===null)ih(e,n,o,vc,a),Q0(e,o);else if(xy(u,e,n,a,o))o.stopPropagation();else if(Q0(e,o),n&4&&-1<vy.indexOf(e)){for(;u!==null;){var h=ba(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=wt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var B=1<<31-vt(x);A.entanglements[1]|=B,x&=~B}zi(h),(Oe&6)===0&&(tc=E()+500,No(0))}}break;case 31:case 13:A=us(h,2),A!==null&&jn(A,h,2),nc(),gh(h,2)}if(h=vh(o),h===null&&ih(e,n,o,vc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function vh(e){return e=xu(e),xh(e)}var vc=null;function xh(e){if(vc=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vc=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case _t:return 2;case At:return 8;case dt:case jt:return 32;case It:return 268435456;default:return 32}default:return 32}}var Sh=!1,Xa=null,Wa=null,Ya=null,Ho=new Map,Go=new Map,qa=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&j0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xy(e,n,a,o,u){switch(n){case"focusin":return Xa=Vo(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=Vo(Wa,e,n,a,o,u),!0;case"mouseover":return Ya=Vo(Ya,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ho.set(h,Vo(Ho.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Go.set(h,Vo(Go.get(h)||null,e,n,a,o,u)),!0}return!1}function J0(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Z0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=ba(a),n!==null&&j0(n),e.blockedOn=a,!1;n.shift()}return!0}function $0(e,n,a){xc(e)&&a.delete(n)}function Sy(){Sh=!1,Xa!==null&&xc(Xa)&&(Xa=null),Wa!==null&&xc(Wa)&&(Wa=null),Ya!==null&&xc(Ya)&&(Ya=null),Ho.forEach($0),Go.forEach($0)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sy)))}var yc=null;function t_(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var h=ba(a);h!==null&&(e.splice(n,3),n-=3,vf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xr(e){function n(B){return Sc(B,e)}Xa!==null&&Sc(Xa,e),Wa!==null&&Sc(Wa,e),Ya!==null&&Sc(Ya,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Mn]||null;if(typeof h=="function")x||t_(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Mn]||null)A=x.formAction;else if(xh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),t_(a)}}}function e_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yh(e){this._internalRoot=e}Mc.prototype.render=yh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();Y0(a,o,e,n,null,null)},Mc.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Y0(e.current,2,null,e,null,null),nc(),n[bi]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&J0(e)}};var n_=t.version;if(n_!=="19.2.3")throw Error(s(527,n_,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var yy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Y=Ec.inject(yy),ot=Ec}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=cg,h=ug,x=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=X0(e,1,!1,null,null,a,o,null,u,h,x,e_),e[bi]=n.current,nh(e),new yh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=cg,x=ug,A=fg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=X0(e,1,!0,n,a??null,o,u,B,h,x,A,e_),n.context=W0(null),a=n.current,o=ai(),o=Qr(o),u=La(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,On(n,a),zi(n),e[bi]=n.current,nh(e),new Mc(n)},Xo.version="19.2.3",Xo}var h_;function Uy(){if(h_)return bh.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=Dy(),bh.exports}var Ly=Uy();const cp="182",Fr={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ny=0,d_=1,Oy=2,$c=1,Py=2,Jo=3,as=0,Kn=1,Li=2,xa=0,zr=1,p_=2,m_=3,g_=4,Iy=5,ws=100,Fy=101,zy=102,By=103,Hy=104,Gy=200,Vy=201,ky=202,Xy=203,ud=204,fd=205,Wy=206,Yy=207,qy=208,jy=209,Zy=210,Ky=211,Qy=212,Jy=213,$y=214,hd=0,dd=1,pd=2,Gr=3,md=4,gd=5,_d=6,vd=7,Uv=0,tM=1,eM=2,ki=0,Lv=1,Nv=2,Ov=3,Pv=4,Iv=5,Fv=6,zv=7,Bv=300,Ns=301,Vr=302,xd=303,Sd=304,hu=306,yd=1e3,va=1001,Md=1002,Ln=1003,nM=1004,bc=1005,zn=1006,Ch=1007,Us=1008,oi=1009,Hv=1010,Gv=1011,il=1012,up=1013,Yi=1014,Gi=1015,ya=1016,fp=1017,hp=1018,al=1020,Vv=35902,kv=35899,Xv=1021,Wv=1022,Ni=1023,Ma=1026,Ls=1027,Yv=1028,dp=1029,kr=1030,pp=1031,mp=1033,tu=33776,eu=33777,nu=33778,iu=33779,Ed=35840,bd=35841,Td=35842,Ad=35843,Rd=36196,Cd=37492,wd=37496,Dd=37488,Ud=37489,Ld=37490,Nd=37491,Od=37808,Pd=37809,Id=37810,Fd=37811,zd=37812,Bd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,Wd=37819,Yd=37820,qd=37821,jd=36492,Zd=36494,Kd=36495,Qd=36283,Jd=36284,$d=36285,tp=36286,iM=3200,qv=0,aM=1,ns="",xi="srgb",Xr="srgb-linear",su="linear",He="srgb",Sr=7680,__=519,sM=512,rM=513,oM=514,gp=515,lM=516,cM=517,_p=518,uM=519,v_=35044,x_="300 es",Vi=2e3,ru=2001;function jv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=ou("canvas");return r.style.display="block",r}const S_={};function y_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ie(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function sl(...r){const t=r.join(" ");t in S_||(S_[t]=!0,ie(...r))}function hM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let M_=1234567;const Br=Math.PI/180,rl=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function ge(r,t,i){return Math.max(t,Math.min(i,r))}function vp(r,t){return(r%t+t)%t}function dM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function pM(r,t,i){return r!==t?(i-r)/(t-r):0}function nl(r,t,i){return(1-i)*r+i*t}function mM(r,t,i,s){return nl(r,t,1-Math.exp(-i*s))}function gM(r,t=1){return t-Math.abs(vp(r,t*2)-t)}function _M(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function vM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function xM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function SM(r,t){return r+Math.random()*(t-r)}function yM(r){return r*(.5-Math.random())}function MM(r){r!==void 0&&(M_=r);let t=M_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function EM(r){return r*Br}function bM(r){return r*rl}function TM(r){return(r&r-1)===0&&r!==0}function AM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function RM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function CM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),v=f((t-s)/2),M=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*v,d*p);break;case"YZY":r.set(m*v,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*v,d*g,d*p);break;case"XZX":r.set(d*g,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*g,d*p);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Or(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zv={DEG2RAD:Br,RAD2DEG:rl,generateUUID:qr,clamp:ge,euclideanModulo:vp,mapLinear:dM,inverseLerp:pM,lerp:nl,damp:mM,pingpong:gM,smoothstep:_M,smootherstep:vM,randInt:xM,randFloat:SM,randFloatSpread:yM,seededRandom:MM,degToRad:EM,radToDeg:bM,isPowerOfTwo:TM,ceilPowerOfTwo:AM,floorPowerOfTwo:RM,setQuaternionFromProperEuler:CM,normalize:Hn,denormalize:Or};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],v=c[f+0],M=c[f+1],b=c[f+2],T=c[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=v,t[i+1]=M,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==v||p!==M||g!==b){let y=m*v+p*M+g*b+_*T;y<0&&(v=-v,M=-M,b=-b,T=-T,y=-y);let S=1-d;if(y<.9995){const N=Math.acos(y),D=Math.sin(N);S=Math.sin(S*N)/D,d=Math.sin(d*N)/D,m=m*S+v*d,p=p*S+M*d,g=g*S+b*d,_=_*S+T*d}else{m=m*S+v*d,p=p*S+M*d,g=g*S+b*d,_=_*S+T*d;const N=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=N,p*=N,g*=N,_*=N}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],v=c[f+1],M=c[f+2],b=c[f+3];return t[i]=d*b+g*_+m*M-p*v,t[i+1]=m*b+g*v+p*_-d*M,t[i+2]=p*b+g*M+d*v-m*_,t[i+3]=g*b-d*_-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),v=m(s/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*M*b,this._y=p*M*_-v*g*b,this._z=p*g*b+v*M*_,this._w=p*g*_-v*M*b;break;case"YXZ":this._x=v*g*_+p*M*b,this._y=p*M*_-v*g*b,this._z=p*g*b-v*M*_,this._w=p*g*_+v*M*b;break;case"ZXY":this._x=v*g*_-p*M*b,this._y=p*M*_+v*g*b,this._z=p*g*b+v*M*_,this._w=p*g*_-v*M*b;break;case"ZYX":this._x=v*g*_-p*M*b,this._y=p*M*_+v*g*b,this._z=p*g*b-v*M*_,this._w=p*g*_+v*M*b;break;case"YZX":this._x=v*g*_+p*M*b,this._y=p*M*_+v*g*b,this._z=p*g*b-v*M*_,this._w=p*g*_-v*M*b;break;case"XZY":this._x=v*g*_-p*M*b,this._y=p*M*_-v*g*b,this._z=p*g*b+v*M*_,this._w=p*g*_+v*M*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(E_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(E_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new K,E_=new Os;class fe{constructor(t,i,s,l,c,f,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],M=s[5],b=s[8],T=l[0],y=l[3],S=l[6],N=l[1],D=l[4],U=l[7],z=l[2],F=l[5],I=l[8];return c[0]=f*T+d*N+m*z,c[3]=f*y+d*D+m*F,c[6]=f*S+d*U+m*I,c[1]=p*T+g*N+_*z,c[4]=p*y+g*D+_*F,c[7]=p*S+g*U+_*I,c[2]=v*T+M*N+b*z,c[5]=v*y+M*D+b*F,c[8]=v*S+M*U+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,v=d*m-g*c,M=p*c-f*m,b=i*_+s*v+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=v*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Dh.makeScale(t,i)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new fe,b_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:su,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Ce=wM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class DM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=ou("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ou("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UM=0;class xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Uh(l[f].image)):c.push(Uh(l[f]))}else c=Uh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let LM=0;const Lh=new K;class Vn extends Is{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=va,l=va,c=zn,f=Us,d=Ni,m=oi,p=Vn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=qr(),this.name="",this.source=new xp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case Md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case Md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Bv;Vn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],M=m[5],b=m[9],T=m[2],y=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(M+1)/2,z=(S+1)/2,F=(g+v)/4,I=(_+T)/4,J=(b+y)/4;return D>U&&D>z?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=F/s,c=I/s):U>z?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=J/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=I/c,l=J/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-b)*(y-b)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(_-T)/N,this.z=(v-g)/N,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends Is{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends NM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Kv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ac.subVectors(this.max,Wo),Mr.subVectors(t.a,Wo),Er.subVectors(t.b,Wo),br.subVectors(t.c,Wo),Za.subVectors(Er,Mr),Ka.subVectors(br,Er),Es.subVectors(Mr,br);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Es.z,Es.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Es.z,0,-Es.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Es.y,Es.x,0];return!Nh(i,Mr,Er,br,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Mr,Er,br,Ac))?!1:(Rc.crossVectors(Za,Ka),i=[Rc.x,Rc.y,Rc.z],Nh(i,Mr,Er,br,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new K,new K,new K,new K,new K,new K,new K,new K],wi=new K,Tc=new Fs,Mr=new K,Er=new K,br=new K,Za=new K,Ka=new K,Es=new K,Wo=new K,Ac=new K,Rc=new K,bs=new K;function Nh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){bs.fromArray(r,c);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const PM=new Fs,Yo=new K,Oh=new K;class du{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):PM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Oh)),this.expandByPoint(Yo.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new K,Ph=new K,Cc=new K,Qa=new K,Ih=new K,wc=new K,Fh=new K;class pu{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ph.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Ph);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Cc),d=Qa.dot(this.direction),m=-Qa.dot(Cc),p=Qa.lengthSq(),g=Math.abs(1-f*f);let _,v,M,b;if(g>0)if(_=f*m-d,v=f*d-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const T=1/g;_*=T,v*=T,M=_*(_+f*v+2*d)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ph).addScaledVector(Cc,v),M}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,c){Ih.subVectors(i,t),wc.subVectors(s,t),Fh.crossVectors(Ih,wc);let f=this.direction.dot(Fh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Qa.subVectors(this.origin,t);const m=d*this.direction.dot(wc.crossVectors(Qa,wc));if(m<0)return null;const p=d*this.direction.dot(Ih.cross(Qa));if(p<0||m+p>f)return null;const g=-d*Qa.dot(Fh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,f,d,m,p,g,_,v,M,b,T,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,v,M,b,T,y)}set(t,i,s,l,c,f,d,m,p,g,_,v,M,b,T,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=M,S[7]=b,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),f=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,M=f*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=b+M*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,M=m*_,b=p*g,T=p*_;i[0]=v+T*d,i[4]=b*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-b,i[6]=T+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,M=m*_,b=p*g,T=p*_;i[0]=v-T*d,i[4]=-f*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=f*g,i[9]=T-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,M=f*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-v*_,i[8]=b*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=v-T*_}else if(t.order==="XZY"){const v=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=f*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IM,t,FM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ja.crossVectors(s,si),Ja.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ja.crossVectors(s,si)),Ja.normalize(),Dc.crossVectors(si,Ja),l[0]=Ja.x,l[4]=Dc.x,l[8]=si.x,l[1]=Ja.y,l[5]=Dc.y,l[9]=si.y,l[2]=Ja.z,l[6]=Dc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],M=s[13],b=s[2],T=s[6],y=s[10],S=s[14],N=s[3],D=s[7],U=s[11],z=s[15],F=l[0],I=l[4],J=l[8],C=l[12],w=l[1],G=l[5],nt=l[9],lt=l[13],gt=l[2],ft=l[6],P=l[10],H=l[14],it=l[3],Dt=l[7],Mt=l[11],O=l[15];return c[0]=f*F+d*w+m*gt+p*it,c[4]=f*I+d*G+m*ft+p*Dt,c[8]=f*J+d*nt+m*P+p*Mt,c[12]=f*C+d*lt+m*H+p*O,c[1]=g*F+_*w+v*gt+M*it,c[5]=g*I+_*G+v*ft+M*Dt,c[9]=g*J+_*nt+v*P+M*Mt,c[13]=g*C+_*lt+v*H+M*O,c[2]=b*F+T*w+y*gt+S*it,c[6]=b*I+T*G+y*ft+S*Dt,c[10]=b*J+T*nt+y*P+S*Mt,c[14]=b*C+T*lt+y*H+S*O,c[3]=N*F+D*w+U*gt+z*it,c[7]=N*I+D*G+U*ft+z*Dt,c[11]=N*J+D*nt+U*P+z*Mt,c[15]=N*C+D*lt+U*H+z*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],M=t[14],b=t[3],T=t[7],y=t[11],S=t[15],N=m*M-p*v,D=d*M-p*_,U=d*v-m*_,z=f*M-p*g,F=f*v-m*g,I=f*_-d*g;return i*(T*N-y*D+S*U)-s*(b*N-y*z+S*F)+l*(b*D-T*z+S*I)-c*(b*U-T*F+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],M=t[11],b=t[12],T=t[13],y=t[14],S=t[15],N=_*y*p-T*v*p+T*m*M-d*y*M-_*m*S+d*v*S,D=b*v*p-g*y*p-b*m*M+f*y*M+g*m*S-f*v*S,U=g*T*p-b*_*p+b*d*M-f*T*M-g*d*S+f*_*S,z=b*_*m-g*T*m-b*d*v+f*T*v+g*d*y-f*_*y,F=i*N+s*D+l*U+c*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=N*I,t[1]=(T*v*c-_*y*c-T*l*M+s*y*M+_*l*S-s*v*S)*I,t[2]=(d*y*c-T*m*c+T*l*p-s*y*p-d*l*S+s*m*S)*I,t[3]=(_*m*c-d*v*c-_*l*p+s*v*p+d*l*M-s*m*M)*I,t[4]=D*I,t[5]=(g*y*c-b*v*c+b*l*M-i*y*M-g*l*S+i*v*S)*I,t[6]=(b*m*c-f*y*c-b*l*p+i*y*p+f*l*S-i*m*S)*I,t[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*M+i*m*M)*I,t[8]=U*I,t[9]=(b*_*c-g*T*c-b*s*M+i*T*M+g*s*S-i*_*S)*I,t[10]=(f*T*c-b*d*c+b*s*p-i*T*p-f*s*S+i*d*S)*I,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*M-i*d*M)*I,t[12]=z*I,t[13]=(g*T*l-b*_*l+b*s*v-i*T*v-g*s*y+i*_*y)*I,t[14]=(b*d*l-f*T*l-b*s*m+i*T*m+f*s*y-i*d*y)*I,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*v+i*d*v)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,v=c*p,M=c*g,b=c*_,T=f*g,y=f*_,S=d*_,N=m*p,D=m*g,U=m*_,z=s.x,F=s.y,I=s.z;return l[0]=(1-(T+S))*z,l[1]=(M+U)*z,l[2]=(b-D)*z,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(v+S))*F,l[6]=(y+N)*F,l[7]=0,l[8]=(b+D)*I,l[9]=(y-N)*I,l[10]=(1-(v+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Tr.set(l[0],l[1],l[2]).length();const f=Tr.set(l[4],l[5],l[6]).length(),d=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,g=1/f,_=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),M=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(d===Vi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===ru)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(d===Vi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===ru)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new K,Di=new tn,IM=new K(0,0,0),FM=new K(1,1,1),Ja=new K,Dc=new K,si=new K,A_=new tn,R_=new Os;class qi{constructor(t=0,i=0,s=0,l=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ge(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return A_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return R_.setFromEuler(this),this.setFromQuaternion(R_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zM=0;const C_=new K,Ar=new Os,ma=new tn,Uc=new K,qo=new K,BM=new K,HM=new Os,w_=new K(1,0,0),D_=new K(0,1,0),U_=new K(0,0,1),L_={type:"added"},GM={type:"removed"},Rr={type:"childadded",child:null},zh={type:"childremoved",child:null};class yn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new K,i=new qi,s=new Os,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new fe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(D_,t)}rotateZ(t){return this.rotateOnAxis(U_,t)}translateOnAxis(t,i){return C_.copy(t).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(D_,t)}translateZ(t){return this.translateOnAxis(U_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uc.copy(t):Uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(qo,Uc,this.up):ma.lookAt(Uc,qo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(ma),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GM),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,BM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,HM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),M=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new K(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new K,ga=new K,Bh=new K,_a=new K,Cr=new K,wr=new K,N_=new K,Hh=new K,Gh=new K,Vh=new K,kh=new sn,Xh=new sn,Wh=new sn;class yi{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),ga.subVectors(s,i),Bh.subVectors(t,i);const f=Ui.dot(Ui),d=Ui.dot(ga),m=Ui.dot(Bh),p=ga.dot(ga),g=ga.dot(Bh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,M=(p*m-d*g)*v,b=(f*g-d*m)*v;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(kh,c.x),f.addScaledVector(Xh,c.y),f.addScaledVector(Wh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),ga.subVectors(t,i),Ui.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ui.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Cr.subVectors(l,s),wr.subVectors(c,s),Hh.subVectors(t,s);const m=Cr.dot(Hh),p=wr.dot(Hh);if(m<=0&&p<=0)return i.copy(s);Gh.subVectors(t,l);const g=Cr.dot(Gh),_=wr.dot(Gh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Cr,f);Vh.subVectors(t,c);const M=Cr.dot(Vh),b=wr.dot(Vh);if(b>=0&&M<=b)return i.copy(c);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(wr,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return N_.subVectors(c,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(N_,d);const S=1/(y+T+v);return f=T*S,d=v*S,i.copy(s).addScaledVector(Cr,f).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Yh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=vp(t,1),i=ge(i,0,1),s=ge(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Yh(f,c,t+1/3),this.g=Yh(f,c,t),this.b=Yh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=Qv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ce.workingToColorSpace(Fn.copy(this),t),Math.round(ge(Fn.r*255,0,255))*65536+Math.round(ge(Fn.g*255,0,255))*256+Math.round(ge(Fn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=xi){Ce.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Lc);const s=nl($a.h,Lc.h,i),l=nl($a.s,Lc.s,i),c=nl($a.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new xe;xe.NAMES=Qv;let VM=0;class jr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=zr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jv extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new K,Nc=new re;let kM=0;class Wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=v_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Or(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Or(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Or(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Or(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Or(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}}class $v extends Wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class tx extends Wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Nn extends Wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let XM=0;const vi=new tn,qh=new yn,Dr=new K,ri=new Fs,jo=new Fs,Sn=new K;class Qn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jv(t)?tx:$v)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Nn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ri.min,jo.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,jo.max),ri.expandByPoint(Sn)):(ri.expandByPoint(jo.min),ri.expandByPoint(jo.max))}ri.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),Sn.add(Dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let J=0;J<s.count;J++)d[J]=new K,m[J]=new K;const p=new K,g=new K,_=new K,v=new re,M=new re,b=new re,T=new K,y=new K;function S(J,C,w){p.fromBufferAttribute(s,J),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),v.fromBufferAttribute(c,J),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),g.sub(p),_.sub(p),M.sub(v),b.sub(v);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),d[J].add(T),d[C].add(T),d[w].add(T),m[J].add(y),m[C].add(y),m[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let J=0,C=N.length;J<C;++J){const w=N[J],G=w.start,nt=w.count;for(let lt=G,gt=G+nt;lt<gt;lt+=3)S(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const D=new K,U=new K,z=new K,F=new K;function I(J){z.fromBufferAttribute(l,J),F.copy(z);const C=d[J];D.copy(C),D.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(F,C);const G=U.dot(m[J])<0?-1:1;f.setXYZW(J,D.x,D.y,D.z,G)}for(let J=0,C=N.length;J<C;++J){const w=N[J],G=w.start,nt=w.count;for(let lt=G,gt=G+nt;lt<gt;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new K,c=new K,f=new K,d=new K,m=new K,p=new K,g=new K,_=new K;if(t)for(let v=0,M=t.count;v<M;v+=3){const b=t.getX(v+0),T=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*g;for(let S=0;S<g;S++)v[b++]=p[M++]}return new Wi(v,g,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],M=t(v,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new tn,Ts=new pu,Oc=new du,P_=new K,Pc=new K,Ic=new K,Fc=new K,jh=new K,zc=new K,I_=new K,Bc=new K;class Mi extends yn{constructor(t=new Qn,i=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(jh.fromBufferAttribute(_,t),f?zc.addScaledVector(jh,g):zc.addScaledVector(jh.sub(i),g))}i.add(zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Oc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Oc,P_)===null||Ts.origin.distanceToSquared(P_)>(t.far-t.near)**2))&&(O_.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(O_),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const y=v[b],S=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=N,z=D;U<z;U+=3){const F=d.getX(U),I=d.getX(U+1),J=d.getX(U+2);l=Hc(this,S,t,s,p,g,_,F,I,J),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,S=T;y<S;y+=3){const N=d.getX(y),D=d.getX(y+1),U=d.getX(y+2);l=Hc(this,f,t,s,p,g,_,N,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const y=v[b],S=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=N,z=D;U<z;U+=3){const F=U,I=U+1,J=U+2;l=Hc(this,S,t,s,p,g,_,F,I,J),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,S=T;y<S;y+=3){const N=y,D=y+1,U=y+2;l=Hc(this,f,t,s,p,g,_,N,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function WM(r,t,i,s,l,c,f,d){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===as,d),m===null)return null;Bc.copy(d),Bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:r}}function Hc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Pc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Fc);const g=WM(r,t,i,s,Pc,Ic,Fc,I_);if(g){const _=new K;yi.getBarycoord(I_,Pc,Ic,Fc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new re)),c&&(g.uv1=yi.getInterpolatedAttribute(c,d,m,p,_,new re)),f&&(g.normal=yi.getInterpolatedAttribute(f,d,m,p,_,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new K,materialIndex:0};yi.getNormal(Pc,Ic,Fc,v.normal),g.face=v,g.barycoord=_}return g}class hl extends Qn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,M=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(_,2));function b(T,y,S,N,D,U,z,F,I,J,C){const w=U/I,G=z/J,nt=U/2,lt=z/2,gt=F/2,ft=I+1,P=J+1;let H=0,it=0;const Dt=new K;for(let Mt=0;Mt<P;Mt++){const O=Mt*G-lt;for(let rt=0;rt<ft;rt++){const bt=rt*w-nt;Dt[T]=bt*N,Dt[y]=O*D,Dt[S]=gt,p.push(Dt.x,Dt.y,Dt.z),Dt[T]=0,Dt[y]=0,Dt[S]=F>0?1:-1,g.push(Dt.x,Dt.y,Dt.z),_.push(rt/I),_.push(1-Mt/J),H+=1}}for(let Mt=0;Mt<J;Mt++)for(let O=0;O<I;O++){const rt=v+O+ft*Mt,bt=v+O+ft*(Mt+1),Ut=v+(O+1)+ft*(Mt+1),zt=v+(O+1)+ft*Mt;m.push(rt,bt,zt),m.push(bt,Ut,zt),it+=6}d.addGroup(M,it,C),M+=it,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function YM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ex(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const qM={clone:Wr,merge:Gn};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=YM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class nx extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new K,F_=new re,z_=new re;class Si extends nx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,F_,z_),i.subVectors(z_,F_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Br*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class KM extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new Si(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const f=new Si(Ur,Lr,t,i);f.layers=this.layers,this.add(f);const d=new Si(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new Si(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new Si(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ix extends Vn{constructor(t=[],i=Ns,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ax extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ix(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new hl(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:xa});c.uniforms.tEquirect.value=i;const f=new Mi(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=zn),new KM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class $o extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),S=this._getHandJoint(p,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&v>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new $o;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class JM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $M extends Vn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Ln,g=Ln,_,v){super(null,f,d,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new K,tE=new K,eE=new fe;class es{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kh.subVectors(s,i).cross(tE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Kh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||eE.getNormalMatrix(t),l=this.coplanarPoint(Kh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new du,nE=new re(.5,.5),Gc=new K;class yp{constructor(t=new es,i=new es,s=new es,l=new es,c=new es,f=new es){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],M=c[7],b=c[8],T=c[9],y=c[10],S=c[11],N=c[12],D=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-f,M-g,S-b,z-N).normalize(),l[1].setComponents(p+f,M+g,S+b,z+N).normalize(),l[2].setComponents(p+d,M+_,S+T,z+D).normalize(),l[3].setComponents(p-d,M-_,S-T,z-D).normalize(),s)l[4].setComponents(m,v,y,U).normalize(),l[5].setComponents(p-m,M-v,S-y,z-U).normalize();else if(l[4].setComponents(p-m,M-v,S-y,z-U).normalize(),i===Vi)l[5].setComponents(p+m,M+v,S+y,z+U).normalize();else if(i===ru)l[5].setComponents(m,v,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const i=nE.distanceTo(t.center);return As.radius=.7071067811865476+i,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ol extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lu=new K,cu=new K,B_=new tn,Zo=new pu,Vc=new du,Qh=new K,H_=new K;class iE extends yn{constructor(t=new Qn,i=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)lu.fromBufferAttribute(i,l-1),cu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=lu.distanceTo(cu);t.setAttribute("lineDistance",new Nn(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;B_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(B_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const S=g.getX(T),N=g.getX(T+1),D=kc(this,t,Zo,m,S,N,T);D&&i.push(D)}if(this.isLineLoop){const T=g.getX(b-1),y=g.getX(M),S=kc(this,t,Zo,m,T,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const S=kc(this,t,Zo,m,T,T+1,T);S&&i.push(S)}if(this.isLineLoop){const T=kc(this,t,Zo,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function kc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(lu.fromBufferAttribute(d,l),cu.fromBufferAttribute(d,c),i.distanceSqToSegment(lu,cu,Qh,H_)>s)return;Qh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Qh);if(!(p<t.near||p>t.far))return{distance:p,point:H_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const G_=new K,V_=new K;class uu extends iE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)G_.fromBufferAttribute(i,l),V_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+G_.distanceTo(V_);t.setAttribute("lineDistance",new Nn(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends Vn{constructor(t,i,s=Yi,l,c,f,d=Ln,m=Ln,p,g=Ma,_=1){if(g!==Ma&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aE extends ll{constructor(t,i=Yi,s=Ns,l,c,f=Ln,d=Ln,m,p=Ma){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sx extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Xc=new K,Wc=new K,Jh=new K,Yc=new yi;class k_ extends Qn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Br*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),v={},M=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:T,b:y,c:S}=Yc;if(T.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),S.fromBufferAttribute(d,p[2]),Yc.getNormal(Jh),_[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let N=0;N<3;N++){const D=(N+1)%3,U=_[N],z=_[D],F=Yc[g[N]],I=Yc[g[D]],J=`${U}_${z}`,C=`${z}_${U}`;C in v&&v[C]?(Jh.dot(v[C].normal)<=c&&(M.push(F.x,F.y,F.z),M.push(I.x,I.y,I.z)),v[C]=null):J in v||(v[J]={index0:p[N],index1:p[D],normal:Jh.clone()})}}for(const b in v)if(v[b]){const{index0:T,index1:y}=v[b];Xc.fromBufferAttribute(d,T),Wc.fromBufferAttribute(d,y),M.push(Xc.x,Xc.y,Xc.z),M.push(Wc.x,Wc.y,Wc.z)}this.setAttribute("position",new Nn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function sE(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=rx(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=uE(r,t,c,i)),r.length>80*i){d=r[0],m=r[1];let g=d,_=m;for(let v=i;v<l;v+=i){const M=r[v],b=r[v+1];M<d&&(d=M),b<m&&(m=b),M>g&&(g=M),b>_&&(_=b)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return cl(c,f,i,d,m,p,0),f}function rx(r,t,i,s,l){let c;if(l===yE(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=X_(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=X_(f/s|0,r[f],r[f+1],c);return c&&Yr(c,c.next)&&(fl(c),c=c.next),c}function Ps(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Yr(i,i.next)||en(i.prev,i,i.next)===0)){if(fl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function cl(r,t,i,s,l,c,f){if(!r)return;!f&&c&&mE(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?oE(r,s,l,c):rE(r)){t.push(m.i,r.i,p.i),fl(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=lE(Ps(r),t),cl(r,t,i,s,l,c,2)):f===2&&cE(r,t,i,s,l,c):cl(Ps(r),t,i,s,l,c,1);break}}}function rE(r){const t=r.prev,i=r,s=r.next;if(en(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,g=Math.min(l,c,f),_=Math.min(d,m,p),v=Math.max(l,c,f),M=Math.max(d,m,p);let b=s.next;for(;b!==t;){if(b.x>=g&&b.x<=v&&b.y>=_&&b.y<=M&&tl(l,d,c,m,f,p,b.x,b.y)&&en(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function oE(r,t,i,s){const l=r.prev,c=r,f=r.next;if(en(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,g=l.y,_=c.y,v=f.y,M=Math.min(d,m,p),b=Math.min(g,_,v),T=Math.max(d,m,p),y=Math.max(g,_,v),S=ep(M,b,t,i,s),N=ep(T,y,t,i,s);let D=r.prevZ,U=r.nextZ;for(;D&&D.z>=S&&U&&U.z<=N;){if(D.x>=M&&D.x<=T&&D.y>=b&&D.y<=y&&D!==l&&D!==f&&tl(d,g,m,_,p,v,D.x,D.y)&&en(D.prev,D,D.next)>=0||(D=D.prevZ,U.x>=M&&U.x<=T&&U.y>=b&&U.y<=y&&U!==l&&U!==f&&tl(d,g,m,_,p,v,U.x,U.y)&&en(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;D&&D.z>=S;){if(D.x>=M&&D.x<=T&&D.y>=b&&D.y<=y&&D!==l&&D!==f&&tl(d,g,m,_,p,v,D.x,D.y)&&en(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;U&&U.z<=N;){if(U.x>=M&&U.x<=T&&U.y>=b&&U.y<=y&&U!==l&&U!==f&&tl(d,g,m,_,p,v,U.x,U.y)&&en(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function lE(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Yr(s,l)&&lx(s,i,i.next,l)&&ul(s,l)&&ul(l,s)&&(t.push(s.i,i.i,l.i),fl(i),fl(i.next),i=r=l),i=i.next}while(i!==r);return Ps(i)}function cE(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&vE(f,d)){let m=cx(f,d);f=Ps(f,f.next),m=Ps(m,m.next),cl(f,t,i,s,l,c,0),cl(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function uE(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=rx(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(_E(p))}l.sort(fE);for(let c=0;c<l.length;c++)i=hE(l[c],i);return i}function fE(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function hE(r,t){const i=dE(r,t);if(!i)return t;const s=cx(i,r);return Ps(s,s.next),Ps(i,i.next)}function dE(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Yr(r,i))return i;do{if(Yr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const _=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=s&&_>c&&(c=_,f=i.x<i.next.x?i:i.next,_===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let g=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&ox(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const _=Math.abs(l-i.y)/(s-i.x);ul(i,r)&&(_<g||_===g&&(i.x>f.x||i.x===f.x&&pE(f,i)))&&(f=i,g=_)}i=i.next}while(i!==d);return f}function pE(r,t){return en(r.prev,r,t.prev)<0&&en(t.next,r,r.next)<0}function mE(r,t,i,s){let l=r;do l.z===0&&(l.z=ep(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,gE(l)}function gE(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function ep(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function _E(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function ox(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function tl(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&ox(r,t,i,s,l,c,f,d)}function vE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!xE(r,t)&&(ul(r,t)&&ul(t,r)&&SE(r,t)&&(en(r.prev,r,t.prev)||en(r,t.prev,t))||Yr(r,t)&&en(r.prev,r,r.next)>0&&en(t.prev,t,t.next)>0)}function en(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Yr(r,t){return r.x===t.x&&r.y===t.y}function lx(r,t,i,s){const l=jc(en(r,t,i)),c=jc(en(r,t,s)),f=jc(en(i,s,r)),d=jc(en(i,s,t));return!!(l!==c&&f!==d||l===0&&qc(r,i,t)||c===0&&qc(r,s,t)||f===0&&qc(i,r,s)||d===0&&qc(i,t,s))}function qc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function jc(r){return r>0?1:r<0?-1:0}function xE(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&lx(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function ul(r,t){return en(r.prev,r,r.next)<0?en(r,t,r.next)>=0&&en(r,r.prev,t)>=0:en(r,t,r.prev)<0||en(r,r.next,t)<0}function SE(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function cx(r,t){const i=np(r.i,r.x,r.y),s=np(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function X_(r,t,i,s){const l=np(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function fl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function np(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yE(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class ME{static triangulate(t,i,s=2){return sE(t,i,s)}}class Mp{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Mp.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];W_(t),Y_(s,t);let f=t.length;i.forEach(W_);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,Y_(s,i[m]);const d=ME.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function W_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Y_(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class mu extends Qn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=i/m,M=[],b=[],T=[],y=[];for(let S=0;S<g;S++){const N=S*v-f;for(let D=0;D<p;D++){const U=D*_-c;b.push(U,-N,0),T.push(0,0,1),y.push(D/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let N=0;N<d;N++){const D=N+p*S,U=N+p*(S+1),z=N+1+p*(S+1),F=N+1+p*S;M.push(D,U,F),M.push(U,z,F)}this.setIndex(M),this.setAttribute("position",new Nn(b,3)),this.setAttribute("normal",new Nn(T,3)),this.setAttribute("uv",new Nn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class EE extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q_ extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qv,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bE extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TE extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ux extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $h=new tn,j_=new K,Z_=new K;class AE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),Z_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Z_),i.updateMatrixWorld(),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ep extends nx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class RE extends AE{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CE extends ux{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new RE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class wE extends ux{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class DE extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const K_=new tn;class UE{constructor(t,i,s=0,l=1/0){this.ray=new pu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return K_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(K_),this}intersectObject(t,i=!0,s=[]){return ip(t,this,s,i),s.sort(Q_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)ip(t[l],this,s,i);return s.sort(Q_),s}}function Q_(r,t){return r.distance-t.distance}function ip(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)ip(c[f],t,i,!0)}}class J_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class LE extends uu{constructor(t=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let v=0,M=0,b=-d;v<=i;v++,b+=f){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const T=v===c?s:l;T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3}const g=new Qn;g.setAttribute("position",new Nn(m,3)),g.setAttribute("color",new Nn(p,3));const _=new ol({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NE extends uu{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Qn;l.setAttribute("position",new Nn(i,3)),l.setAttribute("color",new Nn(s,3));const c=new ol({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new xe,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class OE extends Is{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $_(r,t,i,s){const l=PE(s);switch(i){case Xv:return r*t;case Yv:return r*t/l.components*l.byteLength;case dp:return r*t/l.components*l.byteLength;case kr:return r*t*2/l.components*l.byteLength;case pp:return r*t*2/l.components*l.byteLength;case Wv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case mp:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:case Ad:return Math.max(r,16)*Math.max(t,8)/4;case Ed:case Td:return Math.max(r,8)*Math.max(t,8)/2;case Rd:case Cd:case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wd:case Ld:case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jd:case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $d:case tp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PE(r){switch(r){case oi:case Hv:return{byteLength:1,components:1};case il:case Gv:case ya:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case Yi:case up:case Gi:return{byteLength:4,components:1};case Vv:case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function fx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function IE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let v=0;for(let M=1;M<_.length;M++){const b=_[v],T=_[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,_[v]=T)}_.length=v+1;for(let M=0,b=_.length;M<b;M++){const T=_[M];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,BE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KE=`#ifdef USE_IRIDESCENCE
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
#endif`,QE=`#ifdef USE_BUMPMAP
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rb=`#define PI 3.141592653589793
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
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,wb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Pb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ib=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FT=`uniform sampler2D t2D;
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`#include <common>
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
}`,kT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XT=`#define DISTANCE
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
}`,WT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`uniform float scale;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#define LAMBERT
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
}`,$T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,tA=`#define MATCAP
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
}`,eA=`#define MATCAP
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
}`,nA=`#define NORMAL
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
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aA=`#define PHONG
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
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,rA=`#define STANDARD
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
}`,oA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,lA=`#define TOON
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
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,uA=`uniform float size;
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
}`,fA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,dA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,pA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,mA=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:FE,alphahash_pars_fragment:zE,alphamap_fragment:BE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:VE,aomap_fragment:kE,aomap_pars_fragment:XE,batching_pars_vertex:WE,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:jE,bsdfs:ZE,iridescence_fragment:KE,bumpmap_pars_fragment:QE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:sb,common:rb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:hb,colorspace_fragment:db,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Ub,lights_phong_fragment:Lb,lights_phong_pars_fragment:Nb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:Fb,lights_fragment_end:zb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:kb,map_pars_fragment:Xb,map_particle_fragment:Wb,map_particle_pars_fragment:Yb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Zb,morphcolor_vertex:Kb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:$b,normal_fragment_begin:tT,normal_fragment_maps:eT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:aT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:oT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:hT,project_vertex:dT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:_T,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:xT,shadowmap_vertex:ST,shadowmask_pars_fragment:yT,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:wT,transmission_fragment:DT,transmission_pars_fragment:UT,uv_pars_fragment:LT,uv_pars_vertex:NT,uv_vertex:OT,worldpos_vertex:PT,background_vert:IT,background_frag:FT,backgroundCube_vert:zT,backgroundCube_frag:BT,cube_vert:HT,cube_frag:GT,depth_vert:VT,depth_frag:kT,distance_vert:XT,distance_frag:WT,equirect_vert:YT,equirect_frag:qT,linedashed_vert:jT,linedashed_frag:ZT,meshbasic_vert:KT,meshbasic_frag:QT,meshlambert_vert:JT,meshlambert_frag:$T,meshmatcap_vert:tA,meshmatcap_frag:eA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:aA,meshphong_frag:sA,meshphysical_vert:rA,meshphysical_frag:oA,meshtoon_vert:lA,meshtoon_frag:cA,points_vert:uA,points_frag:fA,shadow_vert:hA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},Ht={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Gn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Gn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Gn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Gn([Ht.points,Ht.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Gn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Gn([Ht.common,Ht.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Gn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Gn([Ht.sprite,Ht.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Gn([Ht.common,Ht.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Gn([Ht.lights,Ht.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Zc={r:0,b:0,g:0},Rs=new qi,gA=new tn;function _A(r,t,i,s,l,c,f){const d=new xe(0);let m=c===!0?0:1,p,g,_=null,v=0,M=null;function b(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function T(D){let U=!1;const z=b(D);z===null?S(d,m):z&&z.isColor&&(S(z,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===hu)?(g===void 0&&(g=new Mi(new hl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Wr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rs.copy(U.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(Rs)),g.material.toneMapped=Ce.getTransfer(z.colorSpace)!==He,(_!==z||v!==z.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=z,v=z.version,M=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Mi(new mu(2,2),new ji({name:"BackgroundMaterial",uniforms:Wr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||v!==z.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,v=z.version,M=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,U){D.getRGB(Zc,ex(r)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,U,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),m=U,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,S(d,m)},render:T,addToRenderList:y,dispose:N}}function vA(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(w,G,nt,lt,gt){let ft=!1;const P=_(lt,nt,G);c!==P&&(c=P,p(c.object)),ft=M(w,lt,nt,gt),ft&&b(w,lt,nt,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,U(w,G,nt,lt),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,nt){const lt=nt.wireframe===!0;let gt=s[w.id];gt===void 0&&(gt={},s[w.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let P=ft[lt];return P===void 0&&(P=v(m()),ft[lt]=P),P}function v(w){const G=[],nt=[],lt=[];for(let gt=0;gt<i;gt++)G[gt]=0,nt[gt]=0,lt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:lt,object:w,attributes:{},index:null}}function M(w,G,nt,lt){const gt=c.attributes,ft=G.attributes;let P=0;const H=nt.getAttributes();for(const it in H)if(H[it].location>=0){const Mt=gt[it];let O=ft[it];if(O===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Mt===void 0||Mt.attribute!==O||O&&Mt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function b(w,G,nt,lt){const gt={},ft=G.attributes;let P=0;const H=nt.getAttributes();for(const it in H)if(H[it].location>=0){let Mt=ft[it];Mt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const O={};O.attribute=Mt,Mt&&Mt.data&&(O.data=Mt.data),gt[it]=O,P++}c.attributes=gt,c.attributesNum=P,c.index=lt}function T(){const w=c.newAttributes;for(let G=0,nt=w.length;G<nt;G++)w[G]=0}function y(w){S(w,0)}function S(w,G){const nt=c.newAttributes,lt=c.enabledAttributes,gt=c.attributeDivisors;nt[w]=1,lt[w]===0&&(r.enableVertexAttribArray(w),lt[w]=1),gt[w]!==G&&(r.vertexAttribDivisor(w,G),gt[w]=G)}function N(){const w=c.newAttributes,G=c.enabledAttributes;for(let nt=0,lt=G.length;nt<lt;nt++)G[nt]!==w[nt]&&(r.disableVertexAttribArray(nt),G[nt]=0)}function D(w,G,nt,lt,gt,ft,P){P===!0?r.vertexAttribIPointer(w,G,nt,gt,ft):r.vertexAttribPointer(w,G,nt,lt,gt,ft)}function U(w,G,nt,lt){T();const gt=lt.attributes,ft=nt.getAttributes(),P=G.defaultAttributeValues;for(const H in ft){const it=ft[H];if(it.location>=0){let Dt=gt[H];if(Dt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Dt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Dt=w.instanceColor)),Dt!==void 0){const Mt=Dt.normalized,O=Dt.itemSize,rt=t.get(Dt);if(rt===void 0)continue;const bt=rt.buffer,Ut=rt.type,zt=rt.bytesPerElement,q=Ut===r.INT||Ut===r.UNSIGNED_INT||Dt.gpuType===up;if(Dt.isInterleavedBufferAttribute){const ht=Dt.data,Pt=ht.stride,Gt=Dt.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<it.locationSize;kt++)S(it.location+kt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<it.locationSize;kt++)y(it.location+kt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let kt=0;kt<it.locationSize;kt++)D(it.location+kt,O/it.locationSize,Ut,Mt,Pt*zt,(Gt+O/it.locationSize*kt)*zt,q)}else{if(Dt.isInstancedBufferAttribute){for(let ht=0;ht<it.locationSize;ht++)S(it.location+ht,Dt.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let ht=0;ht<it.locationSize;ht++)y(it.location+ht);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let ht=0;ht<it.locationSize;ht++)D(it.location+ht,O/it.locationSize,Ut,Mt,O*zt,O/it.locationSize*ht*zt,q)}}else if(P!==void 0){const Mt=P[H];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(it.location,Mt);break;case 3:r.vertexAttrib3fv(it.location,Mt);break;case 4:r.vertexAttrib4fv(it.location,Mt);break;default:r.vertexAttrib1fv(it.location,Mt)}}}}N()}function z(){J();for(const w in s){const G=s[w];for(const nt in G){const lt=G[nt];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete G[nt]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const nt in G){const lt=G[nt];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete G[nt]}delete s[w.id]}function I(w){for(const G in s){const nt=s[G];if(nt[w.id]===void 0)continue;const lt=nt[w.id];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete nt[w.id]}}function J(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:N}}function xA(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,s,1)}function m(p,g,_,v){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],g[b],v[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*v[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function SA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ni&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const J=I===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==oi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!J)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ie("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:U,maxSamples:z,samples:F}}function yA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new es,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||s!==0||l;return l=v,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,M){const b=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const N=c?0:s,D=N*4;let U=S.clippingState||null;m.value=U,U=g(b,v,D,M);for(let z=0;z!==D;++z)U[z]=i[z];S.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,M,b){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const S=M+T*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,U=M;D!==T;++D,U+=4)f.copy(_[D]).applyMatrix4(N,d),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function MA(r){let t=new WeakMap;function i(f,d){return d===xd?f.mapping=Ns:d===Sd&&(f.mapping=Vr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===xd||d===Sd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ax(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,tv=[.125,.215,.35,.446,.526,.582],Ds=20,EA=256,Ko=new Ep,ev=new xe;let td=null,ed=0,nd=0,id=!1;const bA=new K;class nv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=bA}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ya,format:Ni,colorSpace:Xr,depthBuffer:!1},l=iv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TA(c)),this._blurMaterial=RA(c,t,i),this._ggxMaterial=AA(c,t,i)}return l}_compileMaterial(t){const i=new Mi(new Qn,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(ev),_.toneMapping=ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new hl,new Jv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,S=!0):(y.color.copy(ev),S=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const z=this._cubeSize;Nr(l,U*z,D>2?z:0,z,z),_.setRenderTarget(l),S&&_.render(T,m),_.render(t,m)}_.toneMapping=M,_.autoClear=v,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ns||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,M=_*v,{_lodMax:b}=this,T=this._sizeLods[s],y=3*T*(s>b-is?s-b+is:0),S=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Nr(c,y,S,3*T,2*T),l.setRenderTarget(c),l.render(d,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Nr(t,y,S,3*T,2*T),l.setRenderTarget(t),l.render(d,Ko)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),T=c/b,y=isFinite(c)?1+Math.floor(g*T):Ds;y>Ds&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const S=[];let N=0;for(let I=0;I<Ds;++I){const J=I/T,C=Math.exp(-J*J/2);S.push(C),I===0?N+=C:I<y&&(N+=2*C)}for(let I=0;I<S.length;I++)S[I]=S[I]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-s;const U=this._sizeLods[l],z=3*U*(l>D-is?l-D+is:0),F=4*(this._cubeSize-U);Nr(i,z,F,3*U,2*U),m.setRenderTarget(i),m.render(_,Ko)}}function TA(r){const t=[],i=[],s=[];let l=r;const c=r-is+1+tv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-is?m=tv[f-r+is-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,T=3,y=2,S=1,N=new Float32Array(T*b*M),D=new Float32Array(y*b*M),U=new Float32Array(S*b*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,J=F>2?0:-1,C=[I,J,0,I+2/3,J,0,I+2/3,J+1,0,I,J,0,I+2/3,J+1,0,I,J+1,0];N.set(C,T*b*F),D.set(v,y*b*F);const w=[F,F,F,F,F,F];U.set(w,S*b*F)}const z=new Qn;z.setAttribute("position",new Wi(N,T)),z.setAttribute("uv",new Wi(D,y)),z.setAttribute("faceIndex",new Wi(U,S)),s.push(new Mi(z,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function iv(r,t,i){const s=new Xi(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function AA(r,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function RA(r,t,i){const s=new Float32Array(Ds),l=new K(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function av(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function sv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function CA(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===xd||m===Sd,g=m===Ns||m===Vr;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new nv(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new nv(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function wA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sl("WebGLRenderer: "+s+" extension not supported."),l}}}function DA(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER)}function p(_){const v=[],M=_.index,b=_.attributes.position;let T=0;if(M!==null){const N=M.array;T=M.version;for(let D=0,U=N.length;D<U;D+=3){const z=N[D+0],F=N[D+1],I=N[D+2];v.push(z,F,F,I,I,z)}}else if(b!==void 0){const N=b.array;T=b.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const z=D+0,F=D+1,I=D+2;v.push(z,F,F,I,I,z)}}else return;const y=new(jv(v)?tx:$v)(v,1);y.version=T;const S=c.get(_);S&&t.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function UA(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,v*f,b),i.update(M,s,b))}function g(v,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];i.update(y,s,1)}function _(v,M,b,T){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)p(v[S]/f,M[S],T[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,T,0,b);let S=0;for(let N=0;N<b;N++)S+=M[N]*T[N];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function LA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NA(r,t,i){const s=new WeakMap,l=new sn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let w=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),y===!0&&(U=3);let z=d.attributes.position.count*U,F=1;z>t.maxTextureSize&&(F=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*F*4*_),J=new Kv(I,z,F,_);J.type=Gi,J.needsUpdate=!0;const C=U*4;for(let G=0;G<_;G++){const nt=S[G],lt=N[G],gt=D[G],ft=z*F*4*G;for(let P=0;P<nt.count;P++){const H=P*C;b===!0&&(l.fromBufferAttribute(nt,P),I[ft+H+0]=l.x,I[ft+H+1]=l.y,I[ft+H+2]=l.z,I[ft+H+3]=0),T===!0&&(l.fromBufferAttribute(lt,P),I[ft+H+4]=l.x,I[ft+H+5]=l.y,I[ft+H+6]=l.z,I[ft+H+7]=0),y===!0&&(l.fromBufferAttribute(gt,P),I[ft+H+8]=l.x,I[ft+H+9]=l.y,I[ft+H+10]=l.z,I[ft+H+11]=gt.itemSize===4?l.w:1)}}v={count:_,texture:J,size:new re(z,F)},s.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function OA(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const PA={[Lv]:"LINEAR_TONE_MAPPING",[Nv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[Fv]:"AGX_TONE_MAPPING",[zv]:"NEUTRAL_TONE_MAPPING",[Iv]:"CUSTOM_TONE_MAPPING"};function IA(r,t,i,s,l){const c=new Xi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Xi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new Qn;d.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const m=new EE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Mi(d,m),g=new Ep(-1,1,1,-1,0,1);let _=null,v=null,M=!1,b,T=null,y=[],S=!1;this.setSize=function(N,D){c.setSize(N,D),f.setSize(N,D);for(let U=0;U<y.length;U++){const z=y[U];z.setSize&&z.setSize(N,D)}},this.setEffects=function(N){y=N,S=y.length>0&&y[0].isRenderPass===!0;const D=c.width,U=c.height;for(let z=0;z<y.length;z++){const F=y[z];F.setSize&&F.setSize(D,U)}},this.begin=function(N,D){if(M||N.toneMapping===ki&&y.length===0)return!1;if(T=D,D!==null){const U=D.width,z=D.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return S===!1&&N.setRenderTarget(c),b=N.toneMapping,N.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(N,D){N.toneMapping=b,M=!0;let U=c,z=f;for(let F=0;F<y.length;F++){const I=y[F];if(I.enabled!==!1&&(I.render(N,z,U,D),I.needsSwap!==!1)){const J=U;U=z,z=J}}if(_!==N.outputColorSpace||v!==N.toneMapping){_=N.outputColorSpace,v=N.toneMapping,m.defines={},Ce.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const F=PA[v];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(T),N.render(p,g),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const hx=new Vn,ap=new ll(1,1),dx=new Kv,px=new OM,mx=new ix,rv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=rv[l];if(c===void 0&&(c=new Float32Array(l),rv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function _u(r,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function FA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function zA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function BA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function HA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function GA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;uv.set(s),r.uniformMatrix2fv(this.addr,!1,uv),vn(i,s)}}function VA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;cv.set(s),r.uniformMatrix3fv(this.addr,!1,cv),vn(i,s)}}function kA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;lv.set(s),r.uniformMatrix4fv(this.addr,!1,lv),vn(i,s)}}function XA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function WA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function YA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function qA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function jA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function ZA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function KA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function QA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function JA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?_p:gp,c=ap):c=hx,i.setTexture2D(t||c,l)}function $A(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function t1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function e1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dx,l)}function n1(r){switch(r){case 5126:return FA;case 35664:return zA;case 35665:return BA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return kA;case 5124:case 35670:return XA;case 35667:case 35671:return WA;case 35668:case 35672:return YA;case 35669:case 35673:return qA;case 5125:return jA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}function i1(r,t){r.uniform1fv(this.addr,t)}function a1(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function s1(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function r1(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function o1(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function l1(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function c1(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function u1(r,t){r.uniform1iv(this.addr,t)}function f1(r,t){r.uniform2iv(this.addr,t)}function h1(r,t){r.uniform3iv(this.addr,t)}function d1(r,t){r.uniform4iv(this.addr,t)}function p1(r,t){r.uniform1uiv(this.addr,t)}function m1(r,t){r.uniform2uiv(this.addr,t)}function g1(r,t){r.uniform3uiv(this.addr,t)}function _1(r,t){r.uniform4uiv(this.addr,t)}function v1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=hx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function x1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||px,c[f])}function S1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||mx,c[f])}function y1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||dx,c[f])}function M1(r){switch(r){case 5126:return i1;case 35664:return a1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return h1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return y1}}class E1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=n1(i.type)}}class b1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=M1(i.type)}}class T1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function fv(r,t){r.seq.push(t),r.map[t.id]=t}function A1(r,t,i){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),f=ad.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){fv(i,p===void 0?new E1(d,r,t):new b1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new T1(d),fv(i,_)),i=_}}}class au{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);A1(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function hv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const R1=37297;let C1=0;function w1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const dv=new fe;function D1(r){Ce._getMatrix(dv,Ce.workingColorSpace,r);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case su:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function pv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+w1(r.getShaderSource(t),d)}else return c}function U1(r,t){const i=D1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const L1={[Lv]:"Linear",[Nv]:"Reinhard",[Ov]:"Cineon",[Pv]:"ACESFilmic",[Fv]:"AgX",[zv]:"Neutral",[Iv]:"Custom"};function N1(r,t){const i=L1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new K;function O1(){Ce.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function I1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function F1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function el(r){return r!==""}function mv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(z1,H1)}const B1=new Map;function H1(r,t){let i=de[t];if(i===void 0){const s=B1.get(t);if(s!==void 0)i=de[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return sp(i)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(G1,V1)}function V1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const k1={[$c]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function X1(r){return k1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const W1={[Ns]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function Y1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":W1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const q1={[Vr]:"ENVMAP_MODE_REFRACTION"};function j1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":q1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z1={[Uv]:"ENVMAP_BLENDING_MULTIPLY",[tM]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function K1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Z1[r.combine]||"ENVMAP_BLENDING_NONE"}function Q1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function J1(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=X1(i),p=Y1(i),g=j1(i),_=K1(i),v=Q1(i),M=P1(i),b=I1(c),T=l.createProgram();let y,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),S.length>0&&(S+=`
`)):(y=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),S=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?de.tonemapping_pars_fragment:"",i.toneMapping!==ki?N1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,U1("linearToOutputTexel",i.outputColorSpace),O1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),f=sp(f),f=mv(f,i),f=gv(f,i),d=sp(d),d=mv(d,i),d=gv(d,i),f=_v(f),d=_v(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=N+y+f,U=N+S+d,z=hv(l,l.VERTEX_SHADER,D),F=hv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,z),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(G){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(z)||"",gt=l.getShaderInfoLog(F)||"",ft=nt.trim(),P=lt.trim(),H=gt.trim();let it=!0,Dt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(it=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,z,F);else{const Mt=pv(l,z,"vertex"),O=pv(l,F,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+Mt+`
`+O)}else ft!==""?ie("WebGLProgram: Program Info Log:",ft):(P===""||H==="")&&(Dt=!1);Dt&&(G.diagnostics={runnable:it,programLog:ft,vertexShader:{log:P,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(z),l.deleteShader(F),J=new au(l,T),C=F1(l,T)}let J;this.getUniforms=function(){return J===void 0&&I(this),J};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,R1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=C1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let $1=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new eR(t),i.set(t,s)),s}}class eR{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}}function nR(r,t,i,s,l,c,f){const d=new Sp,m=new tR,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,G,nt,lt){const gt=nt.fog,ft=lt.geometry,P=C.isMeshStandardMaterial?nt.environment:null,H=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),it=H&&H.mapping===hu?H.image.height:null,Dt=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ie("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Mt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=Mt!==void 0?Mt.length:0;let rt=0;ft.morphAttributes.position!==void 0&&(rt=1),ft.morphAttributes.normal!==void 0&&(rt=2),ft.morphAttributes.color!==void 0&&(rt=3);let bt,Ut,zt,q;if(Dt){const Ae=Hi[Dt];bt=Ae.vertexShader,Ut=Ae.fragmentShader}else bt=C.vertexShader,Ut=C.fragmentShader,m.update(C),zt=m.getVertexShaderID(C),q=m.getFragmentShaderID(C);const ht=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),Gt=lt.isInstancedMesh===!0,kt=lt.isBatchedMesh===!0,he=!!C.map,Ke=!!C.matcap,me=!!H,pe=!!C.aoMap,Se=!!C.lightMap,ae=!!C.bumpMap,Qe=!!C.normalMap,V=!!C.displacementMap,We=!!C.emissiveMap,ye=!!C.metalnessMap,we=!!C.roughnessMap,qt=C.anisotropy>0,L=C.clearcoat>0,E=C.dispersion>0,j=C.iridescence>0,_t=C.sheen>0,At=C.transmission>0,dt=qt&&!!C.anisotropyMap,jt=L&&!!C.clearcoatMap,It=L&&!!C.clearcoatNormalMap,k=L&&!!C.clearcoatRoughnessMap,pt=j&&!!C.iridescenceMap,Y=j&&!!C.iridescenceThicknessMap,ot=_t&&!!C.sheenColorMap,yt=_t&&!!C.sheenRoughnessMap,vt=!!C.specularMap,xt=!!C.specularColorMap,Xt=!!C.specularIntensityMap,X=At&&!!C.transmissionMap,Nt=At&&!!C.thicknessMap,Rt=!!C.gradientMap,Ot=!!C.alphaMap,wt=C.alphaTest>0,Et=!!C.alphaHash,Lt=!!C.extensions;let se=ki;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(se=r.toneMapping);const Ie={shaderID:Dt,shaderType:C.type,shaderName:C.name,vertexShader:bt,fragmentShader:Ut,defines:C.defines,customVertexShaderID:zt,customFragmentShaderID:q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:kt,batchingColor:kt&&lt._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&lt.instanceColor!==null,instancingMorph:Gt&&lt.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Xr,alphaToCoverage:!!C.alphaToCoverage,map:he,matcap:Ke,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:it,aoMap:pe,lightMap:Se,bumpMap:ae,normalMap:Qe,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Qe&&C.normalMapType===aM,normalMapTangentSpace:Qe&&C.normalMapType===qv,metalnessMap:ye,roughnessMap:we,anisotropy:qt,anisotropyMap:dt,clearcoat:L,clearcoatMap:jt,clearcoatNormalMap:It,clearcoatRoughnessMap:k,dispersion:E,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Y,sheen:_t,sheenColorMap:ot,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:xt,specularIntensityMap:Xt,transmission:At,transmissionMap:X,thicknessMap:Nt,gradientMap:Rt,opaque:C.transparent===!1&&C.blending===zr&&C.alphaToCoverage===!1,alphaMap:Ot,alphaTest:wt,alphaHash:Et,combine:C.combine,mapUv:he&&T(C.map.channel),aoMapUv:pe&&T(C.aoMap.channel),lightMapUv:Se&&T(C.lightMap.channel),bumpMapUv:ae&&T(C.bumpMap.channel),normalMapUv:Qe&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:We&&T(C.emissiveMap.channel),metalnessMapUv:ye&&T(C.metalnessMap.channel),roughnessMapUv:we&&T(C.roughnessMap.channel),anisotropyMapUv:dt&&T(C.anisotropyMap.channel),clearcoatMapUv:jt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:It&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:yt&&T(C.sheenRoughnessMap.channel),specularMapUv:vt&&T(C.specularMap.channel),specularColorMapUv:xt&&T(C.specularColorMap.channel),specularIntensityMapUv:Xt&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Nt&&T(C.thicknessMap.channel),alphaMapUv:Ot&&T(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Qe||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(he||Ot),fog:!!gt,useFog:C.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:he&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===He,decodeVideoTextureEmissive:We&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===He,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Li,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Lt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&C.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function S(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(N(w,C),D(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=b[C.type];let G;if(w){const nt=Hi[w];G=qM.clone(nt.uniforms)}else G=C.uniforms;return G}function z(C,w){let G=_.get(w);return G!==void 0?++G.usedTimes:(G=new J1(r,w,C,c),g.push(G),_.set(w,G)),G}function F(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:U,acquireProgram:z,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:J}}function iR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function aR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,v,M,b,T,y){let S=r[t];return S===void 0?(S={id:_.id,object:_,geometry:v,material:M,groupOrder:b,renderOrder:_.renderOrder,z:T,group:y},r[t]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=M,S.groupOrder=b,S.renderOrder=_.renderOrder,S.z=T,S.group=y),t++,S}function d(_,v,M,b,T,y){const S=f(_,v,M,b,T,y);M.transmission>0?s.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(_,v,M,b,T,y){const S=f(_,v,M,b,T,y);M.transmission>0?s.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,v){i.length>1&&i.sort(_||aR),s.length>1&&s.sort(v||xv),l.length>1&&l.sort(v||xv)}function g(){for(let _=t,v=r.length;_<v;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function sR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Sv,r.set(s,[f])):l>=c.length?(f=new Sv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function rR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new xe};break;case"SpotLight":i={position:new K,direction:new K,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function oR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let lR=0;function cR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uR(r){const t=new rR,i=oR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new tn,f=new tn;function d(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,S=0,N=0,D=0,U=0,z=0,F=0,I=0;p.sort(cR);for(let C=0,w=p.length;C<w;C++){const G=p[C],nt=G.color,lt=G.intensity,gt=G.distance;let ft=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===kr?ft=G.shadow.map.texture:ft=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=nt.r*lt,_+=nt.g*lt,v+=nt.b*lt;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],lt);I++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,it=i.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.directionalShadow[M]=it,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=G.shadow.matrix,N++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(nt).multiplyScalar(lt),P.distance=gt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[T]=P;const H=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[T]=H.matrix,G.castShadow){const it=i.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.spotShadow[T]=it,s.spotShadowMap[T]=ft,U++}T++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(nt).multiplyScalar(lt),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=P,y++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const H=G.shadow,it=i.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,s.pointShadow[b]=it,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=G.shadow.matrix,D++}s.point[b]=P,b++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(lt),P.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[S]=P,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const J=s.hash;(J.directionalLength!==M||J.pointLength!==b||J.spotLength!==T||J.rectAreaLength!==y||J.hemiLength!==S||J.numDirectionalShadows!==N||J.numPointShadows!==D||J.numSpotShadows!==U||J.numSpotMaps!==z||J.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,J.directionalLength=M,J.pointLength=b,J.spotLength=T,J.rectAreaLength=y,J.hemiLength=S,J.numDirectionalShadows=N,J.numPointShadows=D,J.numSpotShadows=U,J.numSpotMaps=z,J.numLightProbes=I,s.version=lR++)}function m(p,g){let _=0,v=0,M=0,b=0,T=0;const y=g.matrixWorldInverse;for(let S=0,N=p.length;S<N;S++){const D=p[S];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(D.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const U=s.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function yv(r){const t=new uR(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function fR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new yv(r),t.set(l,[d])):c>=f.length?(d=new yv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pR=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],mR=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Mv=new tn,Qo=new K,sd=new K;function gR(r,t,i){let s=new yp;const l=new re,c=new re,f=new sn,d=new bE,m=new TE,p={},g=i.maxTextureSize,_={[as]:Kn,[Kn]:as,[Li]:Li},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:hR,fragmentShader:dR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Qn;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Mi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let S=this.type;this.render=function(F,I,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===Py&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=$c);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(xa),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const lt=S!==this.type;lt&&I.traverse(function(gt){gt.material&&(Array.isArray(gt.material)?gt.material.forEach(ft=>ft.needsUpdate=!0):gt.material.needsUpdate=!0)});for(let gt=0,ft=F.length;gt<ft;gt++){const P=F[gt],H=P.shadow;if(H===void 0){ie("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/it.x),l.x=c.x*it.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/it.y),l.y=c.y*it.y,H.mapSize.y=c.y)),H.map===null||lt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Jo){if(P.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xi(l.x,l.y,{format:kr,type:ya,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new ll(l.x,l.y,Gi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ma,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else{P.isPointLight?(H.map=new ax(l.x),H.map.depthTexture=new aE(l.x,Yi)):(H.map=new Xi(l.x,l.y),H.map.depthTexture=new ll(l.x,l.y,Yi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ma;const Mt=r.state.buffers.depth.getReversed();this.type===$c?(H.map.depthTexture.compareFunction=Mt?_p:gp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln)}H.camera.updateProjectionMatrix()}const Dt=H.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<Dt;Mt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(H.map),r.clear());const O=H.getViewport(Mt);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),nt.viewport(f)}if(P.isPointLight){const O=H.camera,rt=H.matrix,bt=P.distance||O.far;bt!==O.far&&(O.far=bt,O.updateProjectionMatrix()),Qo.setFromMatrixPosition(P.matrixWorld),O.position.copy(Qo),sd.copy(O.position),sd.add(pR[Mt]),O.up.copy(mR[Mt]),O.lookAt(sd),O.updateMatrixWorld(),rt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Mv.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mv,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),U(I,J,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Jo&&N(H,J),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(C,w,G)};function N(F,I){const J=t.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xi(l.x,l.y,{format:kr,type:ya})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,J,v,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,J,M,T,null)}function D(F,I,J,C){let w=null;const G=J.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)w=G;else if(w=J.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const nt=w.uuid,lt=I.uuid;let gt=p[nt];gt===void 0&&(gt={},p[nt]=gt);let ft=gt[lt];ft===void 0&&(ft=w.clone(),gt[lt]=ft,I.addEventListener("dispose",z)),w=ft}if(w.visible=I.visible,w.wireframe=I.wireframe,C===Jo?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,J.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=r.properties.get(w);nt.light=J}return w}function U(F,I,J,C,w){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Jo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,F.matrixWorld);const lt=t.update(F),gt=F.material;if(Array.isArray(gt)){const ft=lt.groups;for(let P=0,H=ft.length;P<H;P++){const it=ft[P],Dt=gt[it.materialIndex];if(Dt&&Dt.visible){const Mt=D(F,Dt,C,w);F.onBeforeShadow(r,F,I,J,lt,Mt,it),r.renderBufferDirect(J,null,lt,Mt,F,it),F.onAfterShadow(r,F,I,J,lt,Mt,it)}}}else if(gt.visible){const ft=D(F,gt,C,w);F.onBeforeShadow(r,F,I,J,lt,ft,null),r.renderBufferDirect(J,null,lt,ft,F,null),F.onAfterShadow(r,F,I,J,lt,ft,null)}}const nt=F.children;for(let lt=0,gt=nt.length;lt<gt;lt++)U(nt[lt],I,J,C,w)}function z(F){F.target.removeEventListener("dispose",z);for(const J in p){const C=p[J],w=F.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const _R={[hd]:dd,[pd]:_d,[md]:vd,[Gr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:Gr};function vR(r,t){function i(){let X=!1;const Nt=new sn;let Rt=null;const Ot=new sn(0,0,0,0);return{setMask:function(wt){Rt!==wt&&!X&&(r.colorMask(wt,wt,wt,wt),Rt=wt)},setLocked:function(wt){X=wt},setClear:function(wt,Et,Lt,se,Ie){Ie===!0&&(wt*=se,Et*=se,Lt*=se),Nt.set(wt,Et,Lt,se),Ot.equals(Nt)===!1&&(r.clearColor(wt,Et,Lt,se),Ot.copy(Nt))},reset:function(){X=!1,Rt=null,Ot.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,Rt=null,Ot=null,wt=null;return{setReversed:function(Et){if(Nt!==Et){const Lt=t.get("EXT_clip_control");Et?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Nt=Et;const se=wt;wt=null,this.setClear(se)}},getReversed:function(){return Nt},setTest:function(Et){Et?ht(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(Et){Rt!==Et&&!X&&(r.depthMask(Et),Rt=Et)},setFunc:function(Et){if(Nt&&(Et=_R[Et]),Ot!==Et){switch(Et){case hd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ot=Et}},setLocked:function(Et){X=Et},setClear:function(Et){wt!==Et&&(Nt&&(Et=1-Et),r.clearDepth(Et),wt=Et)},reset:function(){X=!1,Rt=null,Ot=null,wt=null,Nt=!1}}}function l(){let X=!1,Nt=null,Rt=null,Ot=null,wt=null,Et=null,Lt=null,se=null,Ie=null;return{setTest:function(Ae){X||(Ae?ht(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Ae){Nt!==Ae&&!X&&(r.stencilMask(Ae),Nt=Ae)},setFunc:function(Ae,On,Ei){(Rt!==Ae||Ot!==On||wt!==Ei)&&(r.stencilFunc(Ae,On,Ei),Rt=Ae,Ot=On,wt=Ei)},setOp:function(Ae,On,Ei){(Et!==Ae||Lt!==On||se!==Ei)&&(r.stencilOp(Ae,On,Ei),Et=Ae,Lt=On,se=Ei)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Ie!==Ae&&(r.clearStencil(Ae),Ie=Ae)},reset:function(){X=!1,Nt=null,Rt=null,Ot=null,wt=null,Et=null,Lt=null,se=null,Ie=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,M=[],b=null,T=!1,y=null,S=null,N=null,D=null,U=null,z=null,F=null,I=new xe(0,0,0),J=0,C=!1,w=null,G=null,nt=null,lt=null,gt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const it=r.getParameter(r.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),P=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),P=H>=2);let Dt=null,Mt={};const O=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),bt=new sn().fromArray(O),Ut=new sn().fromArray(rt);function zt(X,Nt,Rt,Ot){const wt=new Uint8Array(4),Et=r.createTexture();r.bindTexture(X,Et),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<Rt;Lt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Ot,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Nt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Et}const q={};q[r.TEXTURE_2D]=zt(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Gr),ae(!1),Qe(d_),ht(r.CULL_FACE),pe(xa);function ht(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Pt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Gt(X,Nt){return _[X]!==Nt?(r.bindFramebuffer(X,Nt),_[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function kt(X,Nt){let Rt=M,Ot=!1;if(X){Rt=v.get(Nt),Rt===void 0&&(Rt=[],v.set(Nt,Rt));const wt=X.textures;if(Rt.length!==wt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,Lt=wt.length;Et<Lt;Et++)Rt[Et]=r.COLOR_ATTACHMENT0+Et;Rt.length=wt.length,Ot=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ot=!0);Ot&&r.drawBuffers(Rt)}function he(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Ke={[ws]:r.FUNC_ADD,[Fy]:r.FUNC_SUBTRACT,[zy]:r.FUNC_REVERSE_SUBTRACT};Ke[By]=r.MIN,Ke[Hy]=r.MAX;const me={[Gy]:r.ZERO,[Vy]:r.ONE,[ky]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[Zy]:r.SRC_ALPHA_SATURATE,[qy]:r.DST_COLOR,[Wy]:r.DST_ALPHA,[Xy]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[jy]:r.ONE_MINUS_DST_COLOR,[Yy]:r.ONE_MINUS_DST_ALPHA,[Ky]:r.CONSTANT_COLOR,[Qy]:r.ONE_MINUS_CONSTANT_COLOR,[Jy]:r.CONSTANT_ALPHA,[$y]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(X,Nt,Rt,Ot,wt,Et,Lt,se,Ie,Ae){if(X===xa){T===!0&&(Pt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),X!==Iy){if(X!==y||Ae!==C){if((S!==ws||U!==ws)&&(r.blendEquation(r.FUNC_ADD),S=ws,U=ws),Ae)switch(X){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFunc(r.ONE,r.ONE);break;case m_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",X);break}else switch(X){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",X);break}N=null,D=null,z=null,F=null,I.set(0,0,0),J=0,y=X,C=Ae}return}wt=wt||Nt,Et=Et||Rt,Lt=Lt||Ot,(Nt!==S||wt!==U)&&(r.blendEquationSeparate(Ke[Nt],Ke[wt]),S=Nt,U=wt),(Rt!==N||Ot!==D||Et!==z||Lt!==F)&&(r.blendFuncSeparate(me[Rt],me[Ot],me[Et],me[Lt]),N=Rt,D=Ot,z=Et,F=Lt),(se.equals(I)===!1||Ie!==J)&&(r.blendColor(se.r,se.g,se.b,Ie),I.copy(se),J=Ie),y=X,C=!1}function Se(X,Nt){X.side===Li?Pt(r.CULL_FACE):ht(r.CULL_FACE);let Rt=X.side===Kn;Nt&&(Rt=!Rt),ae(Rt),X.blending===zr&&X.transparent===!1?pe(xa):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ot=X.stencilWrite;d.setTest(Ot),Ot&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),We(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function Qe(X){X!==Ny?(ht(r.CULL_FACE),X!==G&&(X===d_?r.cullFace(r.BACK):X===Oy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),G=X}function V(X){X!==nt&&(P&&r.lineWidth(X),nt=X)}function We(X,Nt,Rt){X?(ht(r.POLYGON_OFFSET_FILL),(lt!==Nt||gt!==Rt)&&(r.polygonOffset(Nt,Rt),lt=Nt,gt=Rt)):Pt(r.POLYGON_OFFSET_FILL)}function ye(X){X?ht(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function we(X){X===void 0&&(X=r.TEXTURE0+ft-1),Dt!==X&&(r.activeTexture(X),Dt=X)}function qt(X,Nt,Rt){Rt===void 0&&(Dt===null?Rt=r.TEXTURE0+ft-1:Rt=Dt);let Ot=Mt[Rt];Ot===void 0&&(Ot={type:void 0,texture:void 0},Mt[Rt]=Ot),(Ot.type!==X||Ot.texture!==Nt)&&(Dt!==Rt&&(r.activeTexture(Rt),Dt=Rt),r.bindTexture(X,Nt||q[X]),Ot.type=X,Ot.texture=Nt)}function L(){const X=Mt[Dt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function _t(){try{r.texSubImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function At(){try{r.texSubImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function It(){try{r.texStorage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function k(){try{r.texStorage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function pt(){try{r.texImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function Y(){try{r.texImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function ot(X){bt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function yt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function vt(X,Nt){let Rt=p.get(Nt);Rt===void 0&&(Rt=new WeakMap,p.set(Nt,Rt));let Ot=Rt.get(X);Ot===void 0&&(Ot=r.getUniformBlockIndex(Nt,X.name),Rt.set(X,Ot))}function xt(X,Nt){const Ot=p.get(Nt).get(X);m.get(Nt)!==Ot&&(r.uniformBlockBinding(Nt,Ot,X.__bindingPointIndex),m.set(Nt,Ot))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Dt=null,Mt={},_={},v=new WeakMap,M=[],b=null,T=!1,y=null,S=null,N=null,D=null,U=null,z=null,F=null,I=new xe(0,0,0),J=0,C=!1,w=null,G=null,nt=null,lt=null,gt=null,bt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ht,disable:Pt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:he,setBlending:pe,setMaterial:Se,setFlipSided:ae,setCullFace:Qe,setLineWidth:V,setPolygonOffset:We,setScissorTest:ye,activeTexture:we,bindTexture:qt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:pt,texImage3D:Y,updateUBOMapping:vt,uniformBlockBinding:xt,texStorage2D:It,texStorage3D:k,texSubImage2D:_t,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:jt,scissor:ot,viewport:yt,reset:Xt}}function xR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):ou("canvas")}function T(L,E,j){let _t=1;const At=qt(L);if((At.width>j||At.height>j)&&(_t=j/Math.max(At.width,At.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=Math.floor(_t*At.width),jt=Math.floor(_t*At.height);_===void 0&&(_=b(dt,jt));const It=E?b(dt,jt):_;return It.width=dt,It.height=jt,It.getContext("2d").drawImage(L,0,0,dt,jt),ie("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+dt+"x"+jt+")."),It}else return"data"in L&&ie("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){r.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(L,E,j,_t,At=!1){if(L!==null){if(r[L]!==void 0)return r[L];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=E;if(E===r.RED&&(j===r.FLOAT&&(dt=r.R32F),j===r.HALF_FLOAT&&(dt=r.R16F),j===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.R8UI),j===r.UNSIGNED_SHORT&&(dt=r.R16UI),j===r.UNSIGNED_INT&&(dt=r.R32UI),j===r.BYTE&&(dt=r.R8I),j===r.SHORT&&(dt=r.R16I),j===r.INT&&(dt=r.R32I)),E===r.RG&&(j===r.FLOAT&&(dt=r.RG32F),j===r.HALF_FLOAT&&(dt=r.RG16F),j===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RG8UI),j===r.UNSIGNED_SHORT&&(dt=r.RG16UI),j===r.UNSIGNED_INT&&(dt=r.RG32UI),j===r.BYTE&&(dt=r.RG8I),j===r.SHORT&&(dt=r.RG16I),j===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),j===r.UNSIGNED_INT&&(dt=r.RGB32UI),j===r.BYTE&&(dt=r.RGB8I),j===r.SHORT&&(dt=r.RGB16I),j===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),j===r.UNSIGNED_INT&&(dt=r.RGBA32UI),j===r.BYTE&&(dt=r.RGBA8I),j===r.SHORT&&(dt=r.RGBA16I),j===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),E===r.RGBA){const jt=At?su:Ce.getTransfer(_t);j===r.FLOAT&&(dt=r.RGBA32F),j===r.HALF_FLOAT&&(dt=r.RGBA16F),j===r.UNSIGNED_BYTE&&(dt=jt===He?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function U(L,E){let j;return L?E===null||E===Yi||E===al?j=r.DEPTH24_STENCIL8:E===Gi?j=r.DEPTH32F_STENCIL8:E===il&&(j=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===al?j=r.DEPTH_COMPONENT24:E===Gi?j=r.DEPTH_COMPONENT32F:E===il&&(j=r.DEPTH_COMPONENT16),j}function z(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ln&&L.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),J(E),E.isVideoTexture&&g.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),w(E)}function J(L){const E=s.get(L);if(E.__webglInit===void 0)return;const j=L.source,_t=v.get(j);if(_t){const At=_t[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&C(L),Object.keys(_t).length===0&&v.delete(j)}s.remove(L)}function C(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const j=L.source,_t=v.get(j);delete _t[E.__cacheKey],f.memory.textures--}function w(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let At=0;At<E.__webglFramebuffer[_t].length;At++)r.deleteFramebuffer(E.__webglFramebuffer[_t][At]);else r.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[_t]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=L.textures;for(let _t=0,At=j.length;_t<At;_t++){const dt=s.get(j[_t]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),f.memory.textures--),s.remove(j[_t])}s.remove(L)}let G=0;function nt(){G=0}function lt(){const L=G;return L>=l.maxTextures&&ie("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function gt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ft(L,E){const j=s.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const _t=L.image;if(_t===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{q(j,L,E);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function P(L,E){const j=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){q(j,L,E);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function H(L,E){const j=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){q(j,L,E);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function it(L,E){const j=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){ht(j,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const Dt={[yd]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[Md]:r.MIRRORED_REPEAT},Mt={[Ln]:r.NEAREST,[nM]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},O={[sM]:r.NEVER,[uM]:r.ALWAYS,[rM]:r.LESS,[gp]:r.LEQUAL,[oM]:r.EQUAL,[_p]:r.GEQUAL,[lM]:r.GREATER,[cM]:r.NOTEQUAL};function rt(L,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Ch||E.magFilter===bc||E.magFilter===Us||E.minFilter===zn||E.minFilter===Ch||E.minFilter===bc||E.minFilter===Us)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Dt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Dt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Dt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Mt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==bc&&E.minFilter!==Us||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function bt(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const _t=E.source;let At=v.get(_t);At===void 0&&(At={},v.set(_t,At));const dt=gt(E);if(dt!==L.__cacheKey){At[dt]===void 0&&(At[dt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),At[dt].usedTimes++;const jt=At[L.__cacheKey];jt!==void 0&&(At[L.__cacheKey].usedTimes--,jt.usedTimes===0&&C(E)),L.__cacheKey=dt,L.__webglTexture=At[dt].texture}return j}function Ut(L,E,j){return Math.floor(Math.floor(L/j)/E)}function zt(L,E,j,_t){const dt=L.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,j,_t,E.data);else{dt.sort((Y,ot)=>Y.start-ot.start);let jt=0;for(let Y=1;Y<dt.length;Y++){const ot=dt[jt],yt=dt[Y],vt=ot.start+ot.count,xt=Ut(yt.start,E.width,4),Xt=Ut(ot.start,E.width,4);yt.start<=vt+1&&xt===Xt&&Ut(yt.start+yt.count-1,E.width,4)===xt?ot.count=Math.max(ot.count,yt.start+yt.count-ot.start):(++jt,dt[jt]=yt)}dt.length=jt+1;const It=r.getParameter(r.UNPACK_ROW_LENGTH),k=r.getParameter(r.UNPACK_SKIP_PIXELS),pt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Y=0,ot=dt.length;Y<ot;Y++){const yt=dt[Y],vt=Math.floor(yt.start/4),xt=Math.ceil(yt.count/4),Xt=vt%E.width,X=Math.floor(vt/E.width),Nt=xt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Xt,X,Nt,Rt,j,_t,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,It),r.pixelStorei(r.UNPACK_SKIP_PIXELS,k),r.pixelStorei(r.UNPACK_SKIP_ROWS,pt)}}function q(L,E,j){let _t=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=r.TEXTURE_3D);const At=bt(L,E),dt=E.source;i.bindTexture(_t,L.__webglTexture,r.TEXTURE0+j);const jt=s.get(dt);if(dt.version!==jt.__version||At===!0){i.activeTexture(r.TEXTURE0+j);const It=Ce.getPrimaries(Ce.workingColorSpace),k=E.colorSpace===ns?null:Ce.getPrimaries(E.colorSpace),pt=E.colorSpace===ns||It===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Y=T(E.image,!1,l.maxTextureSize);Y=we(E,Y);const ot=c.convert(E.format,E.colorSpace),yt=c.convert(E.type);let vt=D(E.internalFormat,ot,yt,E.colorSpace,E.isVideoTexture);rt(_t,E);let xt;const Xt=E.mipmaps,X=E.isVideoTexture!==!0,Nt=jt.__version===void 0||At===!0,Rt=dt.dataReady,Ot=z(E,Y);if(E.isDepthTexture)vt=U(E.format===Ls,E.type),Nt&&(X?i.texStorage2D(r.TEXTURE_2D,1,vt,Y.width,Y.height):i.texImage2D(r.TEXTURE_2D,0,vt,Y.width,Y.height,0,ot,yt,null));else if(E.isDataTexture)if(Xt.length>0){X&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ot,vt,Xt[0].width,Xt[0].height);for(let wt=0,Et=Xt.length;wt<Et;wt++)xt=Xt[wt],X?Rt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,xt.width,xt.height,ot,yt,xt.data):i.texImage2D(r.TEXTURE_2D,wt,vt,xt.width,xt.height,0,ot,yt,xt.data);E.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(r.TEXTURE_2D,Ot,vt,Y.width,Y.height),Rt&&zt(E,Y,ot,yt)):i.texImage2D(r.TEXTURE_2D,0,vt,Y.width,Y.height,0,ot,yt,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,vt,Xt[0].width,Xt[0].height,Y.depth);for(let wt=0,Et=Xt.length;wt<Et;wt++)if(xt=Xt[wt],E.format!==Ni)if(ot!==null)if(X){if(Rt)if(E.layerUpdates.size>0){const Lt=$_(xt.width,xt.height,E.format,E.type);for(const se of E.layerUpdates){const Ie=xt.data.subarray(se*Lt/xt.data.BYTES_PER_ELEMENT,(se+1)*Lt/xt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,se,xt.width,xt.height,1,ot,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,Y.depth,ot,xt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,wt,vt,xt.width,xt.height,Y.depth,0,xt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,Y.depth,ot,yt,xt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,wt,vt,xt.width,xt.height,Y.depth,0,ot,yt,xt.data)}else{X&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ot,vt,Xt[0].width,Xt[0].height);for(let wt=0,Et=Xt.length;wt<Et;wt++)xt=Xt[wt],E.format!==Ni?ot!==null?X?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,wt,0,0,xt.width,xt.height,ot,xt.data):i.compressedTexImage2D(r.TEXTURE_2D,wt,vt,xt.width,xt.height,0,xt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,xt.width,xt.height,ot,yt,xt.data):i.texImage2D(r.TEXTURE_2D,wt,vt,xt.width,xt.height,0,ot,yt,xt.data)}else if(E.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,vt,Y.width,Y.height,Y.depth),Rt)if(E.layerUpdates.size>0){const wt=$_(Y.width,Y.height,E.format,E.type);for(const Et of E.layerUpdates){const Lt=Y.data.subarray(Et*wt/Y.data.BYTES_PER_ELEMENT,(Et+1)*wt/Y.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Et,Y.width,Y.height,1,ot,yt,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ot,yt,Y.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,Y.width,Y.height,Y.depth,0,ot,yt,Y.data);else if(E.isData3DTexture)X?(Nt&&i.texStorage3D(r.TEXTURE_3D,Ot,vt,Y.width,Y.height,Y.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ot,yt,Y.data)):i.texImage3D(r.TEXTURE_3D,0,vt,Y.width,Y.height,Y.depth,0,ot,yt,Y.data);else if(E.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(r.TEXTURE_2D,Ot,vt,Y.width,Y.height);else{let wt=Y.width,Et=Y.height;for(let Lt=0;Lt<Ot;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,vt,wt,Et,0,ot,yt,null),wt>>=1,Et>>=1}}else if(Xt.length>0){if(X&&Nt){const wt=qt(Xt[0]);i.texStorage2D(r.TEXTURE_2D,Ot,vt,wt.width,wt.height)}for(let wt=0,Et=Xt.length;wt<Et;wt++)xt=Xt[wt],X?Rt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,ot,yt,xt):i.texImage2D(r.TEXTURE_2D,wt,vt,ot,yt,xt);E.generateMipmaps=!1}else if(X){if(Nt){const wt=qt(Y);i.texStorage2D(r.TEXTURE_2D,Ot,vt,wt.width,wt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,yt,Y)}else i.texImage2D(r.TEXTURE_2D,0,vt,ot,yt,Y);y(E)&&S(_t),jt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ht(L,E,j){if(E.image.length!==6)return;const _t=bt(L,E),At=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+j);const dt=s.get(At);if(At.version!==dt.__version||_t===!0){i.activeTexture(r.TEXTURE0+j);const jt=Ce.getPrimaries(Ce.workingColorSpace),It=E.colorSpace===ns?null:Ce.getPrimaries(E.colorSpace),k=E.colorSpace===ns||jt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const pt=E.isCompressedTexture||E.image[0].isCompressedTexture,Y=E.image[0]&&E.image[0].isDataTexture,ot=[];for(let Et=0;Et<6;Et++)!pt&&!Y?ot[Et]=T(E.image[Et],!0,l.maxCubemapSize):ot[Et]=Y?E.image[Et].image:E.image[Et],ot[Et]=we(E,ot[Et]);const yt=ot[0],vt=c.convert(E.format,E.colorSpace),xt=c.convert(E.type),Xt=D(E.internalFormat,vt,xt,E.colorSpace),X=E.isVideoTexture!==!0,Nt=dt.__version===void 0||_t===!0,Rt=At.dataReady;let Ot=z(E,yt);rt(r.TEXTURE_CUBE_MAP,E);let wt;if(pt){X&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,Xt,yt.width,yt.height);for(let Et=0;Et<6;Et++){wt=ot[Et].mipmaps;for(let Lt=0;Lt<wt.length;Lt++){const se=wt[Lt];E.format!==Ni?vt!==null?X?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,se.width,se.height,vt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,Xt,se.width,se.height,0,se.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,se.width,se.height,vt,xt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,Xt,se.width,se.height,0,vt,xt,se.data)}}}else{if(wt=E.mipmaps,X&&Nt){wt.length>0&&Ot++;const Et=qt(ot[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,Xt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Y){X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ot[Et].width,ot[Et].height,vt,xt,ot[Et].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Xt,ot[Et].width,ot[Et].height,0,vt,xt,ot[Et].data);for(let Lt=0;Lt<wt.length;Lt++){const Ie=wt[Lt].image[Et].image;X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,Ie.width,Ie.height,vt,xt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,Xt,Ie.width,Ie.height,0,vt,xt,Ie.data)}}else{X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,vt,xt,ot[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Xt,vt,xt,ot[Et]);for(let Lt=0;Lt<wt.length;Lt++){const se=wt[Lt];X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,vt,xt,se.image[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,Xt,vt,xt,se.image[Et])}}}y(E)&&S(r.TEXTURE_CUBE_MAP),dt.__version=At.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Pt(L,E,j,_t,At,dt){const jt=c.convert(j.format,j.colorSpace),It=c.convert(j.type),k=D(j.internalFormat,jt,It,j.colorSpace),pt=s.get(E),Y=s.get(j);if(Y.__renderTarget=E,!pt.__hasExternalTextures){const ot=Math.max(1,E.width>>dt),yt=Math.max(1,E.height>>dt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,dt,k,ot,yt,E.depth,0,jt,It,null):i.texImage2D(At,dt,k,ot,yt,0,jt,It,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,At,Y.__webglTexture,0,V(E)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,At,Y.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(L,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const _t=E.depthTexture,At=_t&&_t.isDepthTexture?_t.type:null,dt=U(E.stencilBuffer,At),jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),dt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,L)}else{const _t=E.textures;for(let At=0;At<_t.length;At++){const dt=_t[At],jt=c.convert(dt.format,dt.colorSpace),It=c.convert(dt.type),k=D(dt.internalFormat,jt,It,dt.colorSpace);We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),k,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),k,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,k,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(L,E,j){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),rt(r.TEXTURE_CUBE_MAP,E.depthTexture);const pt=c.convert(E.depthTexture.format),Y=c.convert(E.depthTexture.type);let ot;E.depthTexture.format===Ma?ot=r.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(ot=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ot,E.width,E.height,0,pt,Y,null)}}else ft(E.depthTexture,0);const dt=At.__webglTexture,jt=V(E),It=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,k=E.depthTexture.format===Ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,It,dt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,k,It,dt,0);else if(E.depthTexture.format===Ls)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,It,dt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,k,It,dt,0);else throw new Error("Unknown depthTexture format")}function he(L){const E=s.get(L),j=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",At)};_t.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=_t}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let _t=0;_t<6;_t++)kt(E.__webglFramebuffer[_t],L,_t);else{const _t=L.texture.mipmaps;_t&&_t.length>0?kt(E.__webglFramebuffer[0],L,0):kt(E.__webglFramebuffer,L,0)}else if(j){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=r.createRenderbuffer(),Gt(E.__webglDepthbuffer[_t],L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,dt)}}else{const _t=L.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Gt(E.__webglDepthbuffer,L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(L,E,j){const _t=s.get(L);E!==void 0&&Pt(_t.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&he(L)}function me(L){const E=L.texture,j=s.get(L),_t=s.get(E);L.addEventListener("dispose",I);const At=L.textures,dt=L.isWebGLCubeRenderTarget===!0,jt=At.length>1;if(jt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=E.version,f.memory.textures++),dt){j.__webglFramebuffer=[];for(let It=0;It<6;It++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[It]=[];for(let k=0;k<E.mipmaps.length;k++)j.__webglFramebuffer[It][k]=r.createFramebuffer()}else j.__webglFramebuffer[It]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let It=0;It<E.mipmaps.length;It++)j.__webglFramebuffer[It]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(jt)for(let It=0,k=At.length;It<k;It++){const pt=s.get(At[It]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&We(L)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let It=0;It<At.length;It++){const k=At[It];j.__webglColorRenderbuffer[It]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[It]);const pt=c.convert(k.format,k.colorSpace),Y=c.convert(k.type),ot=D(k.internalFormat,pt,Y,k.colorSpace,L.isXRRenderTarget===!0),yt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,ot,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,j.__webglColorRenderbuffer[It])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(j.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),rt(r.TEXTURE_CUBE_MAP,E);for(let It=0;It<6;It++)if(E.mipmaps&&E.mipmaps.length>0)for(let k=0;k<E.mipmaps.length;k++)Pt(j.__webglFramebuffer[It][k],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,k);else Pt(j.__webglFramebuffer[It],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);y(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let It=0,k=At.length;It<k;It++){const pt=At[It],Y=s.get(pt);let ot=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ot=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ot,Y.__webglTexture),rt(ot,pt),Pt(j.__webglFramebuffer,L,pt,r.COLOR_ATTACHMENT0+It,ot,0),y(pt)&&S(ot)}i.unbindTexture()}else{let It=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(It,_t.__webglTexture),rt(It,E),E.mipmaps&&E.mipmaps.length>0)for(let k=0;k<E.mipmaps.length;k++)Pt(j.__webglFramebuffer[k],L,E,r.COLOR_ATTACHMENT0,It,k);else Pt(j.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,It,0);y(E)&&S(It),i.unbindTexture()}L.depthBuffer&&he(L)}function pe(L){const E=L.textures;for(let j=0,_t=E.length;j<_t;j++){const At=E[j];if(y(At)){const dt=N(L),jt=s.get(At).__webglTexture;i.bindTexture(dt,jt),S(dt),i.unbindTexture()}}}const Se=[],ae=[];function Qe(L){if(L.samples>0){if(We(L)===!1){const E=L.textures,j=L.width,_t=L.height;let At=r.COLOR_BUFFER_BIT;const dt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(L),It=E.length>1;if(It)for(let pt=0;pt<E.length;pt++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const k=L.texture.mipmaps;k&&k.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),It){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[pt]);const Y=s.get(E[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,j,_t,0,0,j,_t,At,r.NEAREST),m===!0&&(Se.length=0,ae.length=0,Se.push(r.COLOR_ATTACHMENT0+pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Se.push(dt),ae.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),It)for(let pt=0;pt<E.length;pt++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,jt.__webglColorRenderbuffer[pt]);const Y=s.get(E[pt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Y,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function We(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(L){const E=f.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function we(L,E){const j=L.colorSpace,_t=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Xr&&j!==ns&&(Ce.getTransfer(j)===He?(_t!==Ni||At!==oi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",j)),E}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Ke,this.setupRenderTarget=me,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SR(r,t){function i(s,l=ns){let c;const f=Ce.getTransfer(l);if(s===oi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Hv)return r.BYTE;if(s===Gv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===Xv)return r.ALPHA;if(s===Wv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===Yv)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===tu||s===eu||s===nu||s===iu)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ed||s===bd||s===Td||s===Ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rd||s===Cd)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Dd)return c.COMPRESSED_R11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ld)return c.COMPRESSED_RG11_EAC;if(s===Nd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Od||s===Pd||s===Id||s===Fd||s===zd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===qd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Od)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Id)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd||s===Zd||s===Kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jd)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===Jd||s===$d||s===tp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Qd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new sx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:yR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends Is{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new ER,S={},N=i.getContextAttributes();let D=null,U=null;const z=[],F=[],I=new re;let J=null;const C=new Si;C.viewport=new sn;const w=new Si;w.viewport=new sn;const G=[C,w],nt=new DE;let lt=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ht=z[q];return ht===void 0&&(ht=new Zh,z[q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(q){let ht=z[q];return ht===void 0&&(ht=new Zh,z[q]=ht),ht.getGripSpace()},this.getHand=function(q){let ht=z[q];return ht===void 0&&(ht=new Zh,z[q]=ht),ht.getHandSpace()};function ft(q){const ht=F.indexOf(q.inputSource);if(ht===-1)return;const Pt=z[ht];Pt!==void 0&&(Pt.update(q.inputSource,q.frame,p||f),Pt.dispatchEvent({type:q.type,data:q.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let q=0;q<z.length;q++){const ht=F[q];ht!==null&&(F[q]=null,z[q].disconnect(ht))}lt=null,gt=null,y.reset();for(const q in S)delete S[q];t.setRenderTarget(D),M=null,v=null,_=null,l=null,U=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(J),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Gt=null,kt=null;N.depth&&(kt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Pt=N.stencil?Ls:Ma,Gt=N.stencil?al:Yi);const he={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(he),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Xi(v.textureWidth,v.textureHeight,{format:Ni,type:oi,depthTexture:new ll(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Pt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Pt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(q){for(let ht=0;ht<q.removed.length;ht++){const Pt=q.removed[ht],Gt=F.indexOf(Pt);Gt>=0&&(F[Gt]=null,z[Gt].disconnect(Pt))}for(let ht=0;ht<q.added.length;ht++){const Pt=q.added[ht];let Gt=F.indexOf(Pt);if(Gt===-1){for(let he=0;he<z.length;he++)if(he>=F.length){F.push(Pt),Gt=he;break}else if(F[he]===null){F[he]=Pt,Gt=he;break}if(Gt===-1)break}const kt=z[Gt];kt&&kt.connect(Pt)}}const it=new K,Dt=new K;function Mt(q,ht,Pt){it.setFromMatrixPosition(ht.matrixWorld),Dt.setFromMatrixPosition(Pt.matrixWorld);const Gt=it.distanceTo(Dt),kt=ht.projectionMatrix.elements,he=Pt.projectionMatrix.elements,Ke=kt[14]/(kt[10]-1),me=kt[14]/(kt[10]+1),pe=(kt[9]+1)/kt[5],Se=(kt[9]-1)/kt[5],ae=(kt[8]-1)/kt[0],Qe=(he[8]+1)/he[0],V=Ke*ae,We=Ke*Qe,ye=Gt/(-ae+Qe),we=ye*-ae;if(ht.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),kt[10]===-1)q.projectionMatrix.copy(ht.projectionMatrix),q.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const qt=Ke+ye,L=me+ye,E=V-we,j=We+(Gt-we),_t=pe*me/L*qt,At=Se*me/L*qt;q.projectionMatrix.makePerspective(E,j,_t,At,qt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,ht){ht===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ht.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ht=q.near,Pt=q.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Pt=y.depthFar)),nt.near=w.near=C.near=ht,nt.far=w.far=C.far=Pt,(lt!==nt.near||gt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),lt=nt.near,gt=nt.far),nt.layers.mask=q.layers.mask|6,C.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const Gt=q.parent,kt=nt.cameras;O(nt,Gt);for(let he=0;he<kt.length;he++)O(kt[he],Gt);kt.length===2?Mt(nt,C,w):nt.projectionMatrix.copy(C.projectionMatrix),rt(q,nt,Gt)};function rt(q,ht,Pt){Pt===null?q.matrix.copy(ht.matrixWorld):(q.matrix.copy(Pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ht.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ht.projectionMatrix),q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(q){m=q,v!==null&&(v.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(q){return S[q]};let bt=null;function Ut(q,ht){if(g=ht.getViewerPose(p||f),b=ht,g!==null){const Pt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Gt=!1;Pt.length!==nt.cameras.length&&(nt.cameras.length=0,Gt=!0);for(let me=0;me<Pt.length;me++){const pe=Pt[me];let Se=null;if(M!==null)Se=M.getViewport(pe);else{const Qe=_.getViewSubImage(v,pe);Se=Qe.viewport,me===0&&(t.setRenderTargetTextures(U,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(U))}let ae=G[me];ae===void 0&&(ae=new Si,ae.layers.enable(me),ae.viewport=new sn,G[me]=ae),ae.matrix.fromArray(pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Se.x,Se.y,Se.width,Se.height),me===0&&(nt.matrix.copy(ae.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Gt===!0&&nt.cameras.push(ae)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const me=_.getDepthInformation(Pt[0]);me&&me.isValid&&me.texture&&y.init(me,l.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let me=0;me<Pt.length;me++){const pe=Pt[me].camera;if(pe){let Se=S[pe];Se||(Se=new sx,S[pe]=Se);const ae=_.getCameraImage(pe);Se.sourceTexture=ae}}}}for(let Pt=0;Pt<z.length;Pt++){const Gt=F[Pt],kt=z[Pt];Gt!==null&&kt!==void 0&&kt.update(Gt,ht,p||f)}bt&&bt(q,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const zt=new fx;zt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}}const Cs=new qi,TR=new tn;function AR(r,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,ex(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,N,D,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(y,S):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,U)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),T(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,N,D):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=t.get(S),D=N.envMap,U=N.envMapRotation;D&&(y.envMap.value=D,Cs.copy(U),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),y.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(Cs)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,N,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=D*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const N=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const U=D.program;s.uniformBlockBinding(N,U)}function p(N,D){let U=l[N.id];U===void 0&&(b(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",y));const z=D.program;s.updateUBOMapping(N,z);const F=t.render.frame;c[N.id]!==F&&(v(N),c[N.id]=F)}function g(N){const D=_();N.__bindingPointIndex=D;const U=r.createBuffer(),z=N.__size,F=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function _(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=l[N.id],U=N.uniforms,z=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let F=0,I=U.length;F<I;F++){const J=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,w=J.length;C<w;C++){const G=J[C];if(M(G,F,C,z)===!0){const nt=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<lt.length;ft++){const P=lt[ft],H=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,nt+gt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,gt),gt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,D,U,z){const F=N.value,I=D+"_"+U;if(z[I]===void 0)return typeof F=="number"||typeof F=="boolean"?z[I]=F:z[I]=F.clone(),!0;{const J=z[I];if(typeof F=="number"||typeof F=="boolean"){if(J!==F)return z[I]=F,!0}else if(J.equals(F)===!1)return J.copy(F),!0}return!1}function b(N){const D=N.uniforms;let U=0;const z=16;for(let I=0,J=D.length;I<J;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,G=C.length;w<G;w++){const nt=C[w],lt=Array.isArray(nt.value)?nt.value:[nt.value];for(let gt=0,ft=lt.length;gt<ft;gt++){const P=lt[gt],H=T(P),it=U%z,Dt=it%H.boundary,Mt=it+Dt;U+=Dt,Mt!==0&&z-Mt<H.storage&&(U+=z-Mt),nt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=H.storage}}}const F=U%z;return F>0&&(U+=z-F),N.__size=U,N.__cache={},this}function T(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const CR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function wR(){return Bi===null&&(Bi=new $M(CR,16,16,kr,ya),Bi.name="DFG_LUT",Bi.minFilter=zn,Bi.magFilter=zn,Bi.wrapS=va,Bi.wrapT=va,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class DR{constructor(t={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=oi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const T=M,y=new Set([mp,pp,dp]),S=new Set([oi,Yi,il,al,fp,hp]),N=new Uint32Array(4),D=new Int32Array(4);let U=null,z=null;const F=[],I=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=xi;let G=0,nt=0,lt=null,gt=-1,ft=null;const P=new sn,H=new sn;let it=null;const Dt=new xe(0);let Mt=0,O=i.width,rt=i.height,bt=1,Ut=null,zt=null;const q=new sn(0,0,O,rt),ht=new sn(0,0,O,rt);let Pt=!1;const Gt=new yp;let kt=!1,he=!1;const Ke=new tn,me=new K,pe=new sn,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Qe(){return lt===null?bt:1}let V=s;function We(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",se,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),V===null){const Z="webgl2";if(V=We(Z,R),V===null)throw We(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Re("WebGLRenderer: "+R.message),R}let ye,we,qt,L,E,j,_t,At,dt,jt,It,k,pt,Y,ot,yt,vt,xt,Xt,X,Nt,Rt,Ot,wt;function Et(){ye=new wA(V),ye.init(),Rt=new SR(V,ye),we=new SA(V,ye,t,Rt),qt=new vR(V,ye),we.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),L=new LA(V),E=new iR,j=new xR(V,ye,qt,E,we,Rt,L),_t=new MA(C),At=new CA(C),dt=new IE(V),Ot=new vA(V,dt),jt=new DA(V,dt,L,Ot),It=new OA(V,jt,dt,L),Xt=new NA(V,we,j),yt=new yA(E),k=new nR(C,_t,At,ye,we,Ot,yt),pt=new AR(C,E),Y=new sR,ot=new fR(ye),xt=new _A(C,_t,At,qt,It,b,m),vt=new gR(C,It,we),wt=new RR(V,L,we,qt),X=new xA(V,ye,L),Nt=new UA(V,ye,L),L.programs=k.programs,C.capabilities=we,C.extensions=ye,C.properties=E,C.renderLists=Y,C.shadowMap=vt,C.state=qt,C.info=L}Et(),T!==oi&&(J=new IA(T,i.width,i.height,l,c));const Lt=new bR(C,V);this.xr=Lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(R){R!==void 0&&(bt=R,this.setSize(O,rt,!1))},this.getSize=function(R){return R.set(O,rt)},this.setSize=function(R,Z,ct=!0){if(Lt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,rt=Z,i.width=Math.floor(R*bt),i.height=Math.floor(Z*bt),ct===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(O*bt,rt*bt).floor()},this.setDrawingBufferSize=function(R,Z,ct){O=R,rt=Z,bt=ct,i.width=Math.floor(R*ct),i.height=Math.floor(Z*ct),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(T===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,Z,ct,at){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,Z,ct,at),qt.viewport(P.copy(q).multiplyScalar(bt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Z,ct,at){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Z,ct,at),qt.scissor(H.copy(ht).multiplyScalar(bt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(R){qt.setScissorTest(Pt=R)},this.setOpaqueSort=function(R){Ut=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ct=!0){let at=0;if(R){let $=!1;if(lt!==null){const Ft=lt.texture.format;$=y.has(Ft)}if($){const Ft=lt.texture.type,Vt=S.has(Ft),Bt=xt.getClearColor(),Wt=xt.getClearAlpha(),Zt=Bt.r,te=Bt.g,Kt=Bt.b;Vt?(N[0]=Zt,N[1]=te,N[2]=Kt,N[3]=Wt,V.clearBufferuiv(V.COLOR,0,N)):(D[0]=Zt,D[1]=te,D[2]=Kt,D[3]=Wt,V.clearBufferiv(V.COLOR,0,D))}else at|=V.COLOR_BUFFER_BIT}Z&&(at|=V.DEPTH_BUFFER_BIT),ct&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",se,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),xt.dispose(),Y.dispose(),ot.dispose(),E.dispose(),_t.dispose(),At.dispose(),It.dispose(),Ot.dispose(),wt.dispose(),k.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Bs),Lt.removeEventListener("sessionend",Jr),Oi.stop()};function se(R){R.preventDefault(),y_("WebGLRenderer: Context Lost."),w=!0}function Ie(){y_("WebGLRenderer: Context Restored."),w=!1;const R=L.autoReset,Z=vt.enabled,ct=vt.autoUpdate,at=vt.needsUpdate,$=vt.type;Et(),L.autoReset=R,vt.enabled=Z,vt.autoUpdate=ct,vt.needsUpdate=at,vt.type=$}function Ae(R){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const Z=R.target;Z.removeEventListener("dispose",On),Ei(Z)}function Ei(R){dl(R),E.remove(R)}function dl(R){const Z=E.get(R).programs;Z!==void 0&&(Z.forEach(function(ct){k.releaseProgram(ct)}),R.isShaderMaterial&&k.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ct,at,$,Ft){Z===null&&(Z=Se);const Vt=$.isMesh&&$.matrixWorld.determinant()<0,Bt=ss(R,Z,ct,at,$);qt.setMaterial(at,Vt);let Wt=ct.index,Zt=1;if(at.wireframe===!0){if(Wt=jt.getWireframeAttribute(ct),Wt===void 0)return;Zt=2}const te=ct.drawRange,Kt=ct.attributes.position;let ee=te.start*Zt,Le=(te.start+te.count)*Zt;Ft!==null&&(ee=Math.max(ee,Ft.start*Zt),Le=Math.min(Le,(Ft.start+Ft.count)*Zt)),Wt!==null?(ee=Math.max(ee,0),Le=Math.min(Le,Wt.count)):Kt!=null&&(ee=Math.max(ee,0),Le=Math.min(Le,Kt.count));const Je=Le-ee;if(Je<0||Je===1/0)return;Ot.setup($,at,Bt,ct,Wt);let qe,Pe=X;if(Wt!==null&&(qe=dt.get(Wt),Pe=Nt,Pe.setIndex(qe)),$.isMesh)at.wireframe===!0?(qt.setLineWidth(at.wireframeLinewidth*Qe()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if($.isLine){let Jt=at.linewidth;Jt===void 0&&(Jt=1),qt.setLineWidth(Jt*Qe()),$.isLineSegments?Pe.setMode(V.LINES):$.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else $.isPoints?Pe.setMode(V.POINTS):$.isSprite&&Pe.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,Ne=$._multiDrawCounts,oe=$._multiDrawCount,En=Wt?dt.get(Wt).bytesPerElement:1,Zi=E.get(at).currentProgram.getUniforms();for(let bn=0;bn<oe;bn++)Zi.setValue(V,"_gl_DrawID",bn),Pe.render(Jt[bn]/En,Ne[bn])}else if($.isInstancedMesh)Pe.renderInstances(ee,Je,$.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ne=Math.min(ct.instanceCount,Jt);Pe.renderInstances(ee,Je,Ne)}else Pe.render(ee,Je)};function Kr(R,Z,ct){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Gs(R,Z,ct),R.side=as,R.needsUpdate=!0,Gs(R,Z,ct),R.side=Li):Gs(R,Z,ct)}this.compile=function(R,Z,ct=null){ct===null&&(ct=R),z=ot.get(ct),z.init(Z),I.push(z),ct.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),R!==ct&&R.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const at=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ft=$.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const Bt=Ft[Vt];Kr(Bt,ct,$),at.add(Bt)}else Kr(Ft,ct,$),at.add(Ft)}),z=I.pop(),at},this.compileAsync=function(R,Z,ct=null){const at=this.compile(R,Z,ct);return new Promise($=>{function Ft(){if(at.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){$(R);return}setTimeout(Ft,10)}ye.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let zs=null;function Qr(R){zs&&zs(R)}function Bs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new fx;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){zs=R,Lt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},Lt.addEventListener("sessionstart",Bs),Lt.addEventListener("sessionend",Jr),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ct=Lt.enabled===!0&&Lt.isPresenting===!0,at=J!==null&&(lt===null||ct)&&J.begin(C,lt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Z,lt),z=ot.get(R,I.length),z.init(Z),I.push(z),Ke.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Gt.setFromProjectionMatrix(Ke,Vi,Z.reversedDepth),he=this.localClippingEnabled,kt=yt.init(this.clippingPlanes,he),U=Y.get(R,F.length),U.init(),F.push(U),Lt.enabled===!0&&Lt.isPresenting===!0){const Vt=C.xr.getDepthSensingMesh();Vt!==null&&li(Vt,Z,-1/0,C.sortObjects)}li(R,Z,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Ut,zt),ae=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ae&&xt.addToRenderList(U,R),this.info.render.frame++,kt===!0&&yt.beginShadows();const $=z.state.shadowsArray;if(vt.render($,R,Z),kt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&J.hasRenderPass())===!1){const Vt=U.opaque,Bt=U.transmissive;if(z.setupLights(),Z.isArrayCamera){const Wt=Z.cameras;if(Bt.length>0)for(let Zt=0,te=Wt.length;Zt<te;Zt++){const Kt=Wt[Zt];Mn(Vt,Bt,R,Kt)}ae&&xt.render(R);for(let Zt=0,te=Wt.length;Zt<te;Zt++){const Kt=Wt[Zt];ln(U,R,Kt,Kt.viewport)}}else Bt.length>0&&Mn(Vt,Bt,R,Z),ae&&xt.render(R),ln(U,R,Z)}lt!==null&&nt===0&&(j.updateMultisampleRenderTarget(lt),j.updateRenderTargetMipmap(lt)),at&&J.end(C),R.isScene===!0&&R.onAfterRender(C,R,Z),Ot.resetDefaultState(),gt=-1,ft=null,I.pop(),I.length>0?(z=I[I.length-1],kt===!0&&yt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function li(R,Z,ct,at){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Gt.intersectsSprite(R)){at&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const Vt=It.update(R),Bt=R.material;Bt.visible&&U.push(R,Vt,Bt,ct,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Gt.intersectsObject(R))){const Vt=It.update(R),Bt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),pe.copy(Vt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Bt)){const Wt=Vt.groups;for(let Zt=0,te=Wt.length;Zt<te;Zt++){const Kt=Wt[Zt],ee=Bt[Kt.materialIndex];ee&&ee.visible&&U.push(R,Vt,ee,ct,pe.z,Kt)}}else Bt.visible&&U.push(R,Vt,Bt,ct,pe.z,null)}}const Ft=R.children;for(let Vt=0,Bt=Ft.length;Vt<Bt;Vt++)li(Ft[Vt],Z,ct,at)}function ln(R,Z,ct,at){const{opaque:$,transmissive:Ft,transparent:Vt}=R;z.setupLightsView(ct),kt===!0&&yt.setGlobalState(C.clippingPlanes,ct),at&&qt.viewport(P.copy(at)),$.length>0&&bi($,Z,ct),Ft.length>0&&bi(Ft,Z,ct),Vt.length>0&&bi(Vt,Z,ct),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Mn(R,Z,ct,at){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[at.id]===void 0){const ee=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[at.id]=new Xi(1,1,{generateMipmaps:!0,type:ee?ya:oi,minFilter:Us,samples:we.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Ft=z.state.transmissionRenderTarget[at.id],Vt=at.viewport||P;Ft.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Bt=C.getRenderTarget(),Wt=C.getActiveCubeFace(),Zt=C.getActiveMipmapLevel();C.setRenderTarget(Ft),C.getClearColor(Dt),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),ae&&xt.render(ct);const te=C.toneMapping;C.toneMapping=ki;const Kt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),z.setupLightsView(at),kt===!0&&yt.setGlobalState(C.clippingPlanes,at),bi(R,ct,at),j.updateMultisampleRenderTarget(Ft),j.updateRenderTargetMipmap(Ft),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Le=0,Je=Z.length;Le<Je;Le++){const qe=Z[Le],{object:Pe,geometry:Jt,material:Ne,group:oe}=qe;if(Ne.side===Li&&Pe.layers.test(at.layers)){const En=Ne.side;Ne.side=Kn,Ne.needsUpdate=!0,Hs(Pe,ct,at,Jt,Ne,oe),Ne.side=En,Ne.needsUpdate=!0,ee=!0}}ee===!0&&(j.updateMultisampleRenderTarget(Ft),j.updateRenderTargetMipmap(Ft))}C.setRenderTarget(Bt,Wt,Zt),C.setClearColor(Dt,Mt),Kt!==void 0&&(at.viewport=Kt),C.toneMapping=te}function bi(R,Z,ct){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Ft=R.length;$<Ft;$++){const Vt=R[$],{object:Bt,geometry:Wt,group:Zt}=Vt;let te=Vt.material;te.allowOverride===!0&&at!==null&&(te=at),Bt.layers.test(ct.layers)&&Hs(Bt,Z,ct,Wt,te,Zt)}}function Hs(R,Z,ct,at,$,Ft){R.onBeforeRender(C,Z,ct,at,$,Ft),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(C,Z,ct,at,R,Ft),$.transparent===!0&&$.side===Li&&$.forceSinglePass===!1?($.side=Kn,$.needsUpdate=!0,C.renderBufferDirect(ct,Z,at,$,R,Ft),$.side=as,$.needsUpdate=!0,C.renderBufferDirect(ct,Z,at,$,R,Ft),$.side=Li):C.renderBufferDirect(ct,Z,at,$,R,Ft),R.onAfterRender(C,Z,ct,at,$,Ft)}function Gs(R,Z,ct){Z.isScene!==!0&&(Z=Se);const at=E.get(R),$=z.state.lights,Ft=z.state.shadowsArray,Vt=$.state.version,Bt=k.getParameters(R,$.state,Ft,Z,ct),Wt=k.getProgramCacheKey(Bt);let Zt=at.programs;at.environment=R.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(R.isMeshStandardMaterial?At:_t).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",On),Zt=new Map,at.programs=Zt);let te=Zt.get(Wt);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===Vt)return $r(R,Bt),te}else Bt.uniforms=k.getUniforms(R),R.onBeforeCompile(Bt,C),te=k.acquireProgram(Bt,Wt),Zt.set(Wt,te),at.uniforms=Bt.uniforms;const Kt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=yt.uniform),$r(R,Bt),at.needsLights=Ea(R),at.lightsStateVersion=Vt,at.needsLights&&(Kt.ambientLightColor.value=$.state.ambient,Kt.lightProbe.value=$.state.probe,Kt.directionalLights.value=$.state.directional,Kt.directionalLightShadows.value=$.state.directionalShadow,Kt.spotLights.value=$.state.spot,Kt.spotLightShadows.value=$.state.spotShadow,Kt.rectAreaLights.value=$.state.rectArea,Kt.ltc_1.value=$.state.rectAreaLTC1,Kt.ltc_2.value=$.state.rectAreaLTC2,Kt.pointLights.value=$.state.point,Kt.pointLightShadows.value=$.state.pointShadow,Kt.hemisphereLights.value=$.state.hemi,Kt.directionalShadowMap.value=$.state.directionalShadowMap,Kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Kt.spotShadowMap.value=$.state.spotShadowMap,Kt.spotLightMatrix.value=$.state.spotLightMatrix,Kt.spotLightMap.value=$.state.spotLightMap,Kt.pointShadowMap.value=$.state.pointShadowMap,Kt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=te,at.uniformsList=null,te}function pl(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=au.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function $r(R,Z){const ct=E.get(R);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function ss(R,Z,ct,at,$){Z.isScene!==!0&&(Z=Se),j.resetTextureUnits();const Ft=Z.fog,Vt=at.isMeshStandardMaterial?Z.environment:null,Bt=lt===null?C.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Xr,Wt=(at.isMeshStandardMaterial?At:_t).get(at.envMap||Vt),Zt=at.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,te=!!ct.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Kt=!!ct.morphAttributes.position,ee=!!ct.morphAttributes.normal,Le=!!ct.morphAttributes.color;let Je=ki;at.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Je=C.toneMapping);const qe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Pe=qe!==void 0?qe.length:0,Jt=E.get(at),Ne=z.state.lights;if(kt===!0&&(he===!0||R!==ft)){const An=R===ft&&at.id===gt;yt.setState(at,R,An)}let oe=!1;at.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ne.state.version||Jt.outputColorSpace!==Bt||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isBatchedMesh&&Jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Jt.instancingMorph===!1&&$.morphTexture!==null||Jt.envMap!==Wt||at.fog===!0&&Jt.fog!==Ft||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==yt.numPlanes||Jt.numIntersection!==yt.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==te||Jt.morphTargets!==Kt||Jt.morphNormals!==ee||Jt.morphColors!==Le||Jt.toneMapping!==Je||Jt.morphTargetsCount!==Pe)&&(oe=!0):(oe=!0,Jt.__version=at.version);let En=Jt.currentProgram;oe===!0&&(En=Gs(at,Z,$));let Zi=!1,bn=!1,ci=!1;const Fe=En.getUniforms(),Tn=Jt.uniforms;if(qt.useProgram(En.program)&&(Zi=!0,bn=!0,ci=!0),at.id!==gt&&(gt=at.id,bn=!0),Zi||ft!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(V,"projectionMatrix",R.projectionMatrix),Fe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Rn=Fe.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,me.setFromMatrixPosition(R.matrixWorld)),we.logarithmicDepthBuffer&&Fe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ft!==R&&(ft=R,bn=!0,ci=!0)}if(Jt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Fe.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,j),Ne.state.spotShadowMap.length>0&&Fe.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,j),Ne.state.pointShadowMap.length>0&&Fe.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,j)),$.isSkinnedMesh){Fe.setOptional(V,$,"bindMatrix"),Fe.setOptional(V,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(V,"boneTexture",An.boneTexture,j))}$.isBatchedMesh&&(Fe.setOptional(V,$,"batchingTexture"),Fe.setValue(V,"batchingTexture",$._matricesTexture,j),Fe.setOptional(V,$,"batchingIdTexture"),Fe.setValue(V,"batchingIdTexture",$._indirectTexture,j),Fe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Fe.setValue(V,"batchingColorTexture",$._colorsTexture,j));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Xt.update($,ct,En),(bn||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,Fe.setValue(V,"receiveShadow",$.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Tn.envMap.value=Wt,Tn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=wR()),bn&&(Fe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&to(Tn,ci),Ft&&at.fog===!0&&pt.refreshFogUniforms(Tn,Ft),pt.refreshMaterialUniforms(Tn,at,bt,rt,z.state.transmissionRenderTarget[R.id]),au.upload(V,pl(Jt),Tn,j)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(au.upload(V,pl(Jt),Tn,j),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(V,"center",$.center),Fe.setValue(V,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(V,"normalMatrix",$.normalMatrix),Fe.setValue(V,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const An=at.uniformsGroups;for(let Rn=0,Vs=An.length;Rn<Vs;Rn++){const Ti=An[Rn];wt.update(Ti,En),wt.bind(Ti,En)}}return En}function to(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ea(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(R,Z,ct){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Z,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ct,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ct=E.get(R);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0};const ba=V.createFramebuffer();this.setRenderTarget=function(R,Z=0,ct=0){lt=R,G=Z,nt=ct;let at=null,$=!1,Ft=!1;if(R){const Bt=E.get(R);if(Bt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Bt.__webglFramebuffer),P.copy(R.viewport),H.copy(R.scissor),it=R.scissorTest,qt.viewport(P),qt.scissor(H),qt.setScissorTest(it),gt=-1;return}else if(Bt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Bt.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Bt.__boundDepthTexture!==te){if(te!==null&&E.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ft=!0);const Zt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[Z])?at=Zt[Z][ct]:at=Zt[Z],$=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[ct]:at=Zt,P.copy(R.viewport),H.copy(R.scissor),it=R.scissorTest}else P.copy(q).multiplyScalar(bt).floor(),H.copy(ht).multiplyScalar(bt).floor(),it=Pt;if(ct!==0&&(at=ba),qt.bindFramebuffer(V.FRAMEBUFFER,at)&&qt.drawBuffers(R,at),qt.viewport(P),qt.scissor(H),qt.setScissorTest(it),$){const Bt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Bt.__webglTexture,ct)}else if(Ft){const Bt=Z;for(let Wt=0;Wt<R.textures.length;Wt++){const Zt=E.get(R.textures[Wt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,ct,Bt)}}else if(R!==null&&ct!==0){const Bt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,ct)}gt=-1},this.readRenderTargetPixels=function(R,Z,ct,at,$,Ft,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);try{const Zt=R.textures[Bt],te=Zt.format,Kt=Zt.type;if(!we.textureFormatReadable(te)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Kt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-at&&ct>=0&&ct<=R.height-$&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(Z,ct,at,$,Rt.convert(te),Rt.convert(Kt),Ft))}finally{const Zt=lt!==null?E.get(lt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ct,at,$,Ft,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt)if(Z>=0&&Z<=R.width-at&&ct>=0&&ct<=R.height-$){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);const Zt=R.textures[Bt],te=Zt.format,Kt=Zt.type;if(!we.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.bufferData(V.PIXEL_PACK_BUFFER,Ft.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(Z,ct,at,$,Rt.convert(te),Rt.convert(Kt),0);const Le=lt!==null?E.get(lt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Le);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ft),V.deleteBuffer(ee),V.deleteSync(Je),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ct=0){const at=Math.pow(2,-ct),$=Math.floor(R.image.width*at),Ft=Math.floor(R.image.height*at),Vt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Vt,Bt,$,Ft),qt.unbindTexture()};const rs=V.createFramebuffer(),Ta=V.createFramebuffer();this.copyTextureToTexture=function(R,Z,ct=null,at=null,$=0,Ft=null){Ft===null&&($!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=$,$=0):Ft=0);let Vt,Bt,Wt,Zt,te,Kt,ee,Le,Je;const qe=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Bt=ct.max.y-ct.min.y,Wt=ct.isBox3?ct.max.z-ct.min.z:1,Zt=ct.min.x,te=ct.min.y,Kt=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-$);Vt=Math.floor(qe.width*pn),Bt=Math.floor(qe.height*pn),R.isDataArrayTexture?Wt=qe.depth:R.isData3DTexture?Wt=Math.floor(qe.depth*pn):Wt=1,Zt=0,te=0,Kt=0}at!==null?(ee=at.x,Le=at.y,Je=at.z):(ee=0,Le=0,Je=0);const Pe=Rt.convert(Z.format),Jt=Rt.convert(Z.type);let Ne;Z.isData3DTexture?(j.setTexture3D(Z,0),Ne=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Ne=V.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const oe=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zi=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),ci=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const pn=E.get(R),An=E.get(Z),Rn=E.get(pn.__renderTarget),Vs=E.get(An.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Ti=0;Ti<Wt;Ti++)Fe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,$,Kt+Ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ft,Je+Ti)),V.blitFramebuffer(Zt,te,Vt,Bt,ee,Le,Vt,Bt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||E.has(R)){const pn=E.get(R),An=E.get(Z);qt.bindFramebuffer(V.READ_FRAMEBUFFER,rs),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ta);for(let Rn=0;Rn<Wt;Rn++)Fe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,$,Kt+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,$),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Ft,Je+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Ft),$!==0?V.blitFramebuffer(Zt,te,Vt,Bt,ee,Le,Vt,Bt,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(Ne,Ft,ee,Le,Je+Rn,Zt,te,Vt,Bt):V.copyTexSubImage2D(Ne,Ft,ee,Le,Zt,te,Vt,Bt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ne,Ft,ee,Le,Je,Vt,Bt,Wt,Pe,Jt,qe.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Ft,ee,Le,Je,Vt,Bt,Wt,Pe,qe.data):V.texSubImage3D(Ne,Ft,ee,Le,Je,Vt,Bt,Wt,Pe,Jt,qe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ft,ee,Le,Vt,Bt,Pe,Jt,qe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ft,ee,Le,qe.width,qe.height,Pe,qe.data):V.texSubImage2D(V.TEXTURE_2D,Ft,ee,Le,Vt,Bt,Pe,Jt,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,oe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zi),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),Ft===0&&Z.generateMipmaps&&V.generateMipmap(Ne),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){G=0,nt=0,lt=null,qt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Ev={type:"change"},bp={type:"start"},gx={type:"end"},Qc=new pu,bv=new es,UR=Math.cos(70*Zv.DEG2RAD),gn=new K,Zn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class LR extends OE{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Os,this._lastTargetPosition=new K,this._quat=new Os().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J_,this._sphericalDelta=new J_,this._scale=1,this._panOffset=new K,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new K,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OR.bind(this),this._onPointerDown=NR.bind(this),this._onPointerUp=PR.bind(this),this._onContextMenu=VR.bind(this),this._onMouseWheel=zR.bind(this),this._onKeyDown=BR.bind(this),this._onTouchStart=HR.bind(this),this._onTouchMove=GR.bind(this),this._onMouseDown=IR.bind(this),this._onMouseMove=FR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=XR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ev),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=gn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<UR?this.object.lookAt(this.target):(bv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(bv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(Ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function NR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function OR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function PR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gx),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function IR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Fr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Fr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(bp)}function FR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gx))}function BR(r){this.enabled!==!1&&this._handleKeyDown(r)}function HR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(bp)}function GR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function VR(r){this.enabled!==!1&&r.preventDefault()}function kR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rp={InteriorWall:32768,ExteriorWall:16757760,Roof:8388608,InteriorFloor:8454143,ExposedFloor:4240639,Shade:16764573,UndergroundWall:10834432,UndergroundSlab:8404992,Ceiling:16744576,SurfaceAir:16776960,UndergroundCeiling:4227200,RaisedFloor:4931965,SlabOnGrade:8404992,FreestandingColumn:8421504,EmbeddedColumn:8421486,Unknown:9741240},od=Object.keys(rp).filter(r=>r!=="Unknown"),Tv=["FixedWindow","OperableWindow","Door","Skylight","Air","Unknown"],Av=7262198,WR={id:"",area:0,zoneNames:[],levelIds:[],surfaceType:"Unknown"},YR={id:"",area:0,openingType:"Unknown",levelIds:[],parentSurfaceId:""};function qR(){const r=be.useRef(null),t=be.useRef(new $o),i=be.useRef(new UE),s=be.useRef({key:"",index:0,ids:[]}),[l,c]=be.useState(null),[f,d]=be.useState([]),[m,p]=be.useState([]),[g,_]=be.useState([]),[v,M]=be.useState(new Map),[b,T]=be.useState(null),[y,S]=be.useState("surface"),[N,D]=be.useState(new Set),[U,z]=be.useState("FixedWindow"),[F,I]=be.useState("all"),[J,C]=be.useState(!1),[w,G]=be.useState(!1),[nt,lt]=be.useState(!0),[gt,ft]=be.useState("No model"),[P,H]=be.useState(""),[it,Dt]=be.useState(null),[Mt,O]=be.useState(null),[rt,bt]=be.useState(null),Ut=be.useRef(new Map),zt=be.useRef(new Map),q=be.useMemo(()=>f.find(k=>k.id===b)||WR,[f,b]),ht=be.useMemo(()=>f.filter(k=>N.has(k.id)),[f,N]),Pt=be.useMemo(()=>{if(y!=="surface"||ht.length===0)return"";const k=ht.map(pt=>v.get(`surface:${pt.id}`)||pt.surfaceType);return k.every(pt=>pt===k[0])?k[0]:""},[v,y,ht]),Gt=be.useMemo(()=>m.find(k=>k.id===b)||YR,[m,b]);function kt(){Ut.current.forEach((k,pt)=>{const Y=y==="surface"&&N.has(pt);k.material.emissive?.setHex(Y?2042167:0)}),zt.current.forEach((k,pt)=>{const Y=y==="opening"&&b===pt;k.material.emissive?.setHex(Y?2042167:0)})}be.useEffect(()=>{const k=r.current;if(!k)return;yn.DEFAULT_UP.set(0,0,1);const pt=new JM;pt.background=new xe(724756);const Y=new Si(50,k.clientWidth/k.clientHeight,.1,5e3);Y.up.set(0,0,1),Y.position.set(20,20,20);const ot=new DR({canvas:k,antialias:!0});ot.setPixelRatio(window.devicePixelRatio||1),ot.setSize(k.clientWidth,k.clientHeight,!1);const yt=new wE(16777215,.6),vt=new CE(16777215,.7);vt.position.set(10,20,10),pt.add(yt,vt);const xt=new LE(200,40,2792847,2042167);xt.rotation.x=Math.PI/2,pt.add(xt);const Xt=new NE(50);pt.add(Xt),pt.add(t.current);const X=new LR(Y,ot.domElement);X.enableDamping=!0,O(Y),bt(ot),Dt(X);let Nt;const Rt=()=>{Nt=requestAnimationFrame(Rt),X.update(),ot.render(pt,Y)};Rt();const Ot=()=>{Y.aspect=k.clientWidth/k.clientHeight,Y.updateProjectionMatrix(),ot.setSize(k.clientWidth,k.clientHeight,!1)};return window.addEventListener("resize",Ot),()=>{window.removeEventListener("resize",Ot),cancelAnimationFrame(Nt),X.dispose(),ot.dispose()}},[]),be.useEffect(()=>{_t()},[f,m,Mt,it]),be.useEffect(()=>{At()},[F,f]),be.useEffect(()=>{sC(Ut,J),rC(zt),dt()},[J,w,f,m,nt]),be.useEffect(()=>{kt()},[y,b,N,f,m]);const he=be.useMemo(()=>F==="all"?f:f.filter(k=>k.levelIds.includes(F)),[f,F]),Ke=be.useMemo(()=>F==="all"?m:m.filter(k=>k.levelIds.includes(F)),[m,F]),me=v.size,pe=k=>{const pt=k.target.files?.[0];if(!pt)return;const Y=new FileReader;Y.onload=()=>{try{const ot=Y.result,{doc:yt,surfaces:vt,levels:xt,openings:Xt}=jR(ot);c(yt),d(vt),p(Xt),_(xt),M(new Map),I("all"),T(null),S("surface"),D(new Set),H(pt.name),ft(`Loaded ${vt.length} surfaces`)}catch(ot){console.error(ot),ft("Failed to parse GBXML")}},Y.readAsText(pt)},Se=()=>{Ut.current.forEach(k=>k.material.emissive?.setHex(0)),zt.current.forEach(k=>k.material.emissive?.setHex(0))},ae=(k,pt=!1)=>{if(!k)return;const Y=f.find(ot=>ot.id===k);Y&&(F!=="all"&&!Y.levelIds.includes(F)||(Se(),S("surface"),pt?D(ot=>{const yt=y==="surface"?new Set(ot):new Set;yt.has(k)?yt.delete(k):yt.add(k);const vt=Array.from(yt);return T(vt.length?vt[vt.length-1]:null),yt}):(D(new Set([k])),T(k))))},Qe=k=>{if(!k)return;const pt=m.find(ot=>ot.id===k);if(!pt||F!=="all"&&!pt.levelIds.includes(F)||!nt)return;Se(),S("opening"),T(k),D(new Set);const Y=zt.current.get(k);Y&&(Y.material.emissive=new xe(2042167))},V=k=>{if(!Mt)return;const pt=k.currentTarget.getBoundingClientRect(),Y=new re((k.clientX-pt.left)/pt.width*2-1,-((k.clientY-pt.top)/pt.height)*2+1),ot=i.current;ot.setFromCamera(Y,Mt);const yt=[...Array.from(Ut.current.values()),...nt?Array.from(zt.current.values()):[]],vt=ot.intersectObjects(yt,!1);if(vt.length){if(!k.shiftKey){const Rt=vt.find(Ot=>{if(!Ot.object?.userData?.surfaceId)return!1;const wt=f.find(Et=>Et.id===Ot.object.userData.surfaceId);return wt?wt.surfaceType==="InteriorFloor":!1});if(Rt){ae(Rt.object.userData.surfaceId,k.ctrlKey||k.metaKey);return}}const xt=vt.map(Rt=>Rt.object).filter(Boolean).filter(Rt=>{if(F==="all")return!0;const Ot=Rt.userData.surfaceId?f.find(Lt=>Lt.id===Rt.userData.surfaceId):null,wt=Rt.userData.openingId?m.find(Lt=>Lt.id===Rt.userData.openingId):null;return(Ot?Ot.levelIds:wt?wt.levelIds:[]).includes(F)});if(!xt.length)return;const Xt=`${Math.round(k.clientX)}:${Math.round(k.clientY)}:${F}`,X=xt.map(Rt=>Rt.userData.surfaceId||Rt.userData.openingId);k.shiftKey&&s.current.key===Xt&&oC(s.current.ids,X)?s.current.index=(s.current.index+1)%X.length:s.current={key:Xt,index:0,ids:X};const Nt=xt[s.current.index];Nt.userData.surfaceId?ae(Nt.userData.surfaceId,k.ctrlKey||k.metaKey):Nt.userData.openingId&&Qe(Nt.userData.openingId)}},We=k=>{const pt=k.target.value,Y=y==="surface"&&N.size>0?Array.from(N):q?.id?[q.id]:[];Y.length!==0&&M(ot=>{const yt=new Map(ot);return Y.forEach(vt=>{yt.set(`surface:${vt}`,pt)}),yt})},ye=k=>{const pt=k.target.value;Gt?.id&&M(Y=>{const ot=new Map(Y);return ot.set(`opening:${Gt.id}`,pt),ot})},we=()=>{if(!l||v.size===0)return;const{updatedSurfaces:k,updatedOpenings:pt}=qt(f,m,v);d(k),p(pt),M(new Map),ft("Model updated")},qt=(k,pt,Y)=>{const ot=k.map(vt=>{const xt=`surface:${vt.id}`;if(!Y.has(xt))return vt;const Xt=Y.get(xt);return vt.element.setAttribute("surfaceType",Xt),Ut.current.has(vt.id)&&Ut.current.get(vt.id).material.color.setHex(ld(Xt)),{...vt,surfaceType:Xt}}),yt=pt.map(vt=>{const xt=`opening:${vt.id}`;if(!Y.has(xt))return vt;const Xt=Y.get(xt);return vt.element.setAttribute("openingType",Xt),{...vt,openingType:Xt}});return{updatedSurfaces:ot,updatedOpenings:yt}},L=()=>{if(!q?.id||!window.confirm(`Delete surface ${q.id}? This will remove its openings too.`))return;Se(),q.element?.parentNode&&q.element.parentNode.removeChild(q.element);const pt=new Set(m.filter(Y=>Y.parentSurfaceId===q.id).map(Y=>Y.id));d(Y=>Y.filter(ot=>ot.id!==q.id)),p(Y=>Y.filter(ot=>ot.parentSurfaceId!==q.id)),M(Y=>{const ot=new Map(Y);return ot.delete(`surface:${q.id}`),pt.forEach(yt=>ot.delete(`opening:${yt}`)),ot}),T(null),S("surface"),D(new Set),ft(`Deleted surface ${q.id}`)},E=()=>{if(!l||!q?.id||!q.element||q.points.length<3)return;const k=Ir(q.element,"PlanarGeometry");if(!k){ft("Selected surface has no geometry to convert");return}const pt=QR(q,f);if(!pt){ft(`No host surface found for ${q.id}`);return}const Y=lC(pt.id,m),ot=pt.element.namespaceURI||l.documentElement.namespaceURI||null,yt=ot?l.createElementNS(ot,"Opening"):l.createElement("Opening");yt.setAttribute("id",Y),yt.setAttribute("openingType",U),yt.appendChild(k.cloneNode(!0)),pt.element.appendChild(yt),q.element.parentNode&&q.element.parentNode.removeChild(q.element);const vt={id:Y,element:yt,openingType:U,points:q.points.map(xt=>xt.clone()),area:q.area,levelIds:pt.levelIds.length?[...pt.levelIds]:[...q.levelIds],parentSurfaceId:pt.id};Se(),d(xt=>xt.filter(Xt=>Xt.id!==q.id)),p(xt=>[...xt,vt]),M(xt=>{const Xt=new Map(xt);return Xt.delete(`surface:${q.id}`),Xt}),lt(!0),S("opening"),T(Y),D(new Set),ft(`Converted ${q.id} to ${U}`)},j=()=>{if(!l)return;if(v.size>0){const{updatedSurfaces:vt,updatedOpenings:xt}=qt(f,m,v);d(vt),p(xt),M(new Map)}const pt=new XMLSerializer().serializeToString(l),Y=new Blob([pt],{type:"application/xml"}),ot=URL.createObjectURL(Y),yt=document.createElement("a");yt.href=ot,yt.download=aC(P),yt.click(),URL.revokeObjectURL(ot)},_t=()=>{const k=t.current;k.clear(),Ut.current.clear(),zt.current.clear(),f.forEach(Y=>{if(!Y.points.length)return;const ot=Cv(Y.points);if(!ot)return;const yt=_x(Y.surfaceType,J),vt=new q_({color:ld(Y.surfaceType),transparent:yt.transparent,opacity:yt.opacity,depthWrite:yt.depthWrite,side:Li,roughness:.45}),xt=new Mi(ot,vt);xt.userData.surfaceId=Y.id,xt.userData.surfaceType=Y.surfaceType,k.add(xt);const Xt=new uu(new k_(ot),new ol({color:2042167}));Xt.raycast=()=>null,xt.add(Xt),xt.userData.edges=Xt,Ut.current.set(Y.id,xt),vx(xt)}),m.forEach(Y=>{if(!Y.points.length)return;const ot=Cv(Y.points);if(!ot)return;const yt=new q_({color:Av,side:Li,transparent:!0,opacity:.45,roughness:.15,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),vt=new Mi(ot,yt);vt.userData.openingId=Y.id,vt.userData.kind="opening",vt.renderOrder=2,t.current.add(vt);const xt=new uu(new k_(ot),new ol({color:9741240,transparent:!0,opacity:.7}));xt.raycast=()=>null,xt.renderOrder=3,vt.add(xt),zt.current.set(Y.id,vt)}),k.position.set(0,0,0),k.rotation.set(0,0,0);const pt=new Fs().setFromObject(k);if(!pt.isEmpty()&&Mt&&it){const Y=pt.getSize(new K),ot=Math.max(Y.x,Y.y,Y.z)||1;k.position.set(-pt.min.x,-pt.min.y,-pt.min.z);const yt=new K(Y.x/2,Y.y/2,Y.z/2),vt=Mt.position.clone().sub(it.target),xt=vt.length()>.001?vt.normalize():new K(1,1,1).normalize(),Xt=Zv.degToRad(Mt.fov||50),X=Mt.aspect||1,Nt=2*Math.atan(Math.tan(Xt/2)*X),Rt=Math.min(Xt,Nt),Ot=ot*.9/Math.tan(Rt/2);it.target.copy(yt),Mt.position.copy(yt).addScaledVector(xt,Ot),Mt.near=ot/100,Mt.far=ot*20,Mt.lookAt(yt),Mt.updateProjectionMatrix()}},At=()=>{if(jt(),y==="surface"&&N.size>0){const k=new Set;if(N.forEach(pt=>{const Y=f.find(xt=>xt.id===pt),ot=!Y||F==="all"||Y.levelIds.includes(F),yt=Y?Ut.current.get(Y.id):null,vt=yt?yt.userData.hiddenExterior===!0:!1;Y&&ot&&!vt&&k.add(pt)}),k.size!==N.size){const pt=Array.from(k);D(k),T(pt.includes(b)?b:pt[pt.length-1]||null)}}else if(b&&y==="opening"){const k=m.find(Y=>Y.id===b),pt=!k||F==="all"||k.levelIds.includes(F);(!k||!pt||!nt)&&T(null)}},dt=()=>{if(Ut.current.forEach(k=>{const pt=k.userData.surfaceType||"Unknown",Y=iC(pt);k.userData.hiddenExterior=w&&Y}),jt(),y==="surface"&&N.size>0){const k=new Set(Array.from(N).filter(pt=>{const Y=Ut.current.get(pt);return Y&&Y.visible}));if(k.size!==N.size){const pt=Array.from(k);D(k),T(pt.includes(b)?b:pt[pt.length-1]||null)}}},jt=()=>{const k=new Set(he.map(Y=>Y.id));Ut.current.forEach((Y,ot)=>{const yt=k.has(ot),vt=Y.userData.hiddenExterior===!0;Y.visible=yt&&!vt});const pt=new Set(Ke.map(Y=>Y.id));zt.current.forEach((Y,ot)=>{const yt=pt.has(ot);Y.visible=nt&&yt})},It=l?"badge":"badge badge--idle";return Ct.jsxs("div",{className:"app",children:[Ct.jsxs("aside",{className:"panel",children:[Ct.jsxs("div",{className:"panel__header",children:[Ct.jsxs("div",{children:[Ct.jsx("h1",{children:"GBXML Viewer"}),Ct.jsx("p",{children:"Load a GBXML file, inspect surfaces, and edit surface types."})]}),Ct.jsx("span",{className:It,children:gt})]}),Ct.jsxs("div",{className:"panel__section",children:[Ct.jsxs("label",{className:"file",children:[Ct.jsx("input",{id:"fileInput",type:"file",accept:".xml,.gbxml",onChange:pe}),Ct.jsx("span",{children:"Choose GBXML File"})]}),Ct.jsxs("div",{className:"actions",children:[Ct.jsx("button",{className:"primary",onClick:we,disabled:me===0,children:"Update Model"}),Ct.jsx("button",{onClick:j,disabled:f.length===0,children:"Download GBXML"})]})]}),Ct.jsxs("div",{className:"panel__section",children:[Ct.jsx("h2",{children:"Levels"}),Ct.jsxs("div",{className:"surface",children:[Ct.jsx("label",{htmlFor:"levelSelect",children:"Visible level"}),Ct.jsxs("select",{id:"levelSelect",value:F,onChange:k=>I(k.target.value),disabled:g.length===0,children:[Ct.jsx("option",{value:"all",children:"All levels"}),g.map(k=>Ct.jsx("option",{value:k.id,children:k.displayName||k.name},k.id))]})]}),Ct.jsxs("div",{className:"toggle",children:[Ct.jsx("label",{htmlFor:"xrayToggle",children:"X-ray exterior"}),Ct.jsx("input",{id:"xrayToggle",type:"checkbox",checked:J,onChange:k=>C(k.target.checked)})]}),Ct.jsxs("div",{className:"toggle",children:[Ct.jsx("label",{htmlFor:"hideExteriorToggle",children:"Hide exterior"}),Ct.jsx("input",{id:"hideExteriorToggle",type:"checkbox",checked:w,onChange:k=>G(k.target.checked)})]}),Ct.jsxs("div",{className:"toggle",children:[Ct.jsx("label",{htmlFor:"openingsToggle",children:"Show openings"}),Ct.jsx("input",{id:"openingsToggle",type:"checkbox",checked:nt,onChange:k=>lt(k.target.checked)})]})]}),Ct.jsxs("div",{className:"panel__section",children:[Ct.jsx("h2",{children:"Selected Item"}),Ct.jsx("div",{className:"surface",children:y==="surface"&&ht.length>1?Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Selected Surfaces"}),Ct.jsx("div",{children:ht.length})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Total Area"}),Ct.jsx("div",{children:ht.reduce((k,pt)=>k+(pt.area||0),0).toFixed(2)})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Surface Type"}),Ct.jsxs("select",{value:Pt,onChange:We,children:[Pt===""?Ct.jsx("option",{value:"",disabled:!0,children:"Mixed types"}):null,od.map(k=>Ct.jsx("option",{value:k,children:k},k))]})]})]}):b&&y==="surface"?Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Surface ID"}),Ct.jsx("div",{children:q.id||"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Surface Area"}),Ct.jsx("div",{children:q.area?q.area.toFixed(2):"0.00"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Level"}),Ct.jsx("div",{children:q.levelIds.length?q.levelIds.map(k=>cd(g,k)).join(", "):"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Zone"}),Ct.jsx("div",{children:q.zoneNames.length?q.zoneNames.join(", "):"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Surface Type"}),Ct.jsx("select",{value:Pt||v.get(`surface:${q.id}`)||q.surfaceType,onChange:We,children:od.map(k=>Ct.jsx("option",{value:k,children:k},k))})]}),Ct.jsxs("div",{className:"surface__split",children:[Ct.jsxs("div",{children:[Ct.jsx("label",{htmlFor:"newOpeningType",children:"Opening Type"}),Ct.jsx("select",{id:"newOpeningType",value:U,onChange:k=>z(k.target.value),children:Tv.map(k=>Ct.jsx("option",{value:k,children:k},k))})]}),Ct.jsx("button",{className:"secondary",onClick:E,children:"Convert"})]}),Ct.jsx("button",{className:"danger",onClick:L,children:"Delete Surface"})]}):b&&y==="opening"?Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Opening ID"}),Ct.jsx("div",{children:Gt.id||"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Opening Area"}),Ct.jsx("div",{children:Gt.area?Gt.area.toFixed(2):"0.00"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Level"}),Ct.jsx("div",{children:Gt.levelIds.length?Gt.levelIds.map(k=>cd(g,k)).join(", "):"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Parent Surface"}),Ct.jsx("div",{children:Gt.parentSurfaceId||"Unknown"})]}),Ct.jsxs("div",{children:[Ct.jsx("label",{children:"Opening Type"}),Ct.jsx("select",{value:v.get(`opening:${Gt.id}`)||Gt.openingType,onChange:ye,children:Tv.map(k=>Ct.jsx("option",{value:k,children:k},k))})]})]}):Ct.jsx("div",{className:"placeholder",children:"Click a surface or opening to see details."})})]}),Ct.jsxs("div",{className:"panel__section",children:[Ct.jsx("h2",{children:"Surfaces"}),Ct.jsx("div",{className:"surface-list",children:he.map(k=>Ct.jsxs("button",{className:y==="surface"&&N.has(k.id)?"active":"",onClick:pt=>ae(k.id,pt.ctrlKey||pt.metaKey),children:[k.id||"Surface"," - ",k.surfaceType,k.levelIds.length?` - ${cd(g,k.levelIds[0])}`:""]},k.id))})]})]}),Ct.jsxs("main",{className:"viewport",children:[Ct.jsx("canvas",{ref:r,id:"scene",onPointerDown:V}),Ct.jsxs("div",{className:"legend legend--overlay",children:[Ct.jsx("div",{className:"legend__title",children:"Legend"}),Ct.jsxs("div",{className:"legend__list",children:[od.map(k=>Ct.jsxs("div",{className:"legend__item",children:[Ct.jsx("span",{className:"legend__swatch",style:{background:Dv(ld(k))}}),Ct.jsx("span",{children:k})]},k)),Ct.jsxs("div",{className:"legend__item",children:[Ct.jsx("span",{className:"legend__swatch",style:{background:Dv(Av)}}),Ct.jsx("span",{children:"Openings"})]})]})]}),Ct.jsx("div",{className:"hint",children:"Drag to orbit - Scroll to zoom - Ctrl/Cmd-click surfaces to multi-select"})]})]})}function jR(r){const i=new DOMParser().parseFromString(r,"application/xml");if(i.getElementsByTagName("parsererror").length)throw new Error("Invalid XML");const s=new Map;Array.from(i.getElementsByTagNameNS("*","BuildingStorey")).forEach((v,M)=>{const b=v.getAttribute("id")||`storey-${M+1}`,T=Jc(v,["Name","StoreyName"])||v.getAttribute("name")||b,y=Jc(v,["Level","Elevation"]),S=Number.parseFloat(y);s.set(b,{id:b,name:T,elevation:Number.isFinite(S)?S:null})});const c=new Map;Array.from(i.getElementsByTagNameNS("*","Zone")).forEach(v=>{const M=v.getAttribute("id")||"",b=Jc(v,["Name","ZoneName"])||v.getAttribute("name")||M;M&&c.set(M,b)});const d=new Map;Array.from(i.getElementsByTagNameNS("*","Space")).forEach(v=>{const M=v.getAttribute("id")||"",b=Jc(v,["Name","SpaceName"])||v.getAttribute("name")||M,T=Ir(v,"ZoneIdRef"),y=T?T.getAttribute("zoneIdRef"):null,S=v.getAttribute("buildingStoreyIdRef")||v.getAttribute("buildingStoreyRef"),N=Ir(v,"BuildingStoreyIdRef"),D=S||(N?N.getAttribute("buildingStoreyIdRef"):null);d.set(M,{name:b,zoneId:y,storeyId:D})});const p=[],g=Array.from(i.getElementsByTagNameNS("*","Surface")).map((v,M)=>{const b=v.getAttribute("id")||`surface-${M+1}`,T=v.getAttribute("surfaceType")||"Unknown",y=Array.from(v.getElementsByTagNameNS("*","AdjacentSpaceId")).map(w=>w.getAttribute("spaceIdRef")).filter(Boolean),S=y.map(w=>{const G=d.get(w);return G&&((G.zoneId?c.get(G.zoneId):null)||G.name)||null}).filter(Boolean),N=Ir(v,"PolyLoop"),D=N?Rv(N):[],U=fu(D),z=D.length?Math.min(...D.map(w=>w.z)):null,F=y.map(w=>{const G=d.get(w);return G?G.storeyId:null}).filter(Boolean),I=F.map(w=>{const G=s.get(w);return G?G.name:null}).filter(Boolean),J={id:b,element:v,surfaceType:T,points:D,area:U,zoneNames:S,minZ:z,levelIds:F,levelNames:I};return[...Array.from(v.getElementsByTagNameNS("*","Opening")),...Array.from(v.getElementsByTagNameNS("*","Aperture"))].forEach((w,G)=>{const nt=w.getAttribute("id")||`${b}-opening-${G+1}`,lt=w.getAttribute("openingType")||w.getAttribute("type")||"Unknown",gt=Ir(w,"PolyLoop"),ft=gt?Rv(gt):[],P=fu(ft);p.push({id:nt,element:w,openingType:lt,points:ft,area:P,levelIds:[...F],parentSurfaceId:b})}),J}),_=ZR(s,g);return KR(_,g),{doc:i,surfaces:g,levels:_,openings:p}}function Jc(r,t){for(const i of t){const s=Ir(r,i);if(s&&s.textContent)return s.textContent.trim()}return""}function Ir(r,t){const i=r.getElementsByTagNameNS("*",t);return i.length?i[0]:null}function Rv(r){const i=Array.from(r.getElementsByTagNameNS("*","CartesianPoint")).map(s=>{const l=Array.from(s.getElementsByTagNameNS("*","Coordinate")).map(c=>Number(c.textContent)).filter(c=>Number.isFinite(c));return l.length<3?null:new K(l[0],l[1],l[2])}).filter(Boolean);if(i.length>2){const s=i[0],l=i[i.length-1];s.distanceTo(l)<1e-6&&i.pop()}return i}function ZR(r,t){if(r.size)return Array.from(r.values()).sort((c,f)=>c.elevation===null&&f.elevation===null?c.name.localeCompare(f.name):c.elevation===null?1:f.elevation===null?-1:c.elevation-f.elevation).map((c,f)=>({id:c.id,name:c.name,displayName:`Level ${f}`}));const i=new Map;return t.forEach(l=>{if(l.minZ===null)return;const f=(Math.round(l.minZ*100)/100).toFixed(2);i.has(f)||i.set(f,{id:`z-${f}`,name:`Z ${f}`})}),Array.from(i.values()).sort((l,c)=>{const f=Number.parseFloat(l.name.replace("Z ","")),d=Number.parseFloat(c.name.replace("Z ",""));return f-d}).map((l,c)=>({...l,displayName:`Level ${c}`}))}function KR(r,t){r.some(s=>!s.id.startsWith("z-"))&&r.length>0||t.forEach(s=>{if(s.levelIds.length||s.minZ===null)return;const c=(Math.round(s.minZ*100)/100).toFixed(2),f=`z-${c}`;s.levelIds=[f],s.levelNames=[`Z ${c}`]})}function fu(r){if(!r||r.length<3)return 0;const t=new K;for(let i=0;i<r.length;i+=1){const s=r[i],l=r[(i+1)%r.length];t.x+=(s.y-l.y)*(s.z+l.z),t.y+=(s.z-l.z)*(s.x+l.x),t.z+=(s.x-l.x)*(s.y+l.y)}return .5*t.length()}function Cv(r){if(r.length<3)return null;const t=op(r);if(t.length()<1e-6)return null;const i=new K,s=new K,l=Math.abs(t.x)>.9?new K(0,1,0):new K(1,0,0);i.crossVectors(l,t).normalize(),s.crossVectors(t,i).normalize();const c=r.map(g=>new re(g.dot(i),g.dot(s))),f=Mp.triangulateShape(c,[]);if(!f.length)return null;const d=[];r.forEach(g=>d.push(g.x,g.y,g.z));const m=[];f.forEach(g=>m.push(g[0],g[1],g[2]));const p=new Qn;return p.setAttribute("position",new Nn(d,3)),p.setIndex(m),p.computeVertexNormals(),p}function op(r){const t=new K;for(let i=0;i<r.length;i+=1){const s=r[i],l=r[(i+1)%r.length];t.x+=(s.y-l.y)*(s.z+l.z),t.y+=(s.z-l.z)*(s.x+l.x),t.z+=(s.x-l.x)*(s.y+l.y)}return t.normalize()}function QR(r,t){const i=op(r.points);if(i.length()<1e-6)return null;const s=wv(r.points),l=eC(r.points),c=t.filter(f=>f.id!==r.id).filter(f=>f.points.length>=3).map(f=>{const d=op(f.points);if(d.length()<1e-6||Math.abs(d.dot(i))<.9)return null;const p=Math.abs(d.dot(s.clone().sub(f.points[0]))),g=Math.max(.25,l*.08),_=JR(s,f.points,d),v=r.area||fu(r.points),M=f.area||fu(f.points);if(!_&&p>Math.max(2,l*.25)||M>0&&v>0&&M<v*.8)return null;const b=wv(f.points),T=s.distanceTo(b),y=p<=g?0:1;return{surface:f,centerDistance:T,planeDistance:p,distanceRank:y,insideRank:_?0:1,typeRank:nC(f.surfaceType)}}).filter(Boolean).sort((f,d)=>f.typeRank-d.typeRank||f.insideRank-d.insideRank||f.distanceRank-d.distanceRank||f.planeDistance-d.planeDistance||f.centerDistance-d.centerDistance);return c.length?c[0].surface:null}function JR(r,t,i){const s=$R(i),l=t.map(f=>new re(f.dot(s.x),f.dot(s.y))),c=new re(r.dot(s.x),r.dot(s.y));return tC(c,l)}function $R(r){const t=Math.abs(r.x)>.9?new K(0,1,0):new K(1,0,0),i=new K().crossVectors(t,r).normalize(),s=new K().crossVectors(r,i).normalize();return{x:i,y:s}}function tC(r,t){let i=!1;for(let s=0,l=t.length-1;s<t.length;l=s,s+=1){const c=t[s],f=t[l];c.y>r.y!=f.y>r.y&&r.x<(f.x-c.x)*(r.y-c.y)/(f.y-c.y||1e-9)+c.x&&(i=!i)}return i}function wv(r){const t=new K;return r.forEach(i=>t.add(i)),t.divideScalar(r.length||1)}function eC(r){return new Fs().setFromPoints(r).getSize(new K).length()}function nC(r){return r==="ExteriorWall"||r==="Roof"||r==="InteriorWall"?0:r==="Ceiling"||r==="InteriorFloor"||r==="ExposedFloor"||r==="RaisedFloor"?1:r==="SlabOnGrade"||r==="UndergroundWall"||r==="UndergroundSlab"?2:r==="Shade"?4:2}function ld(r){return rp[r]||rp.Unknown}function _x(r,t){return t?r==="ExteriorWall"||r==="Roof"||r==="ExposedFloor"?{opacity:.2,transparent:!0,depthWrite:!1}:{opacity:.9,transparent:!0,depthWrite:!0}:{opacity:.9,transparent:!0,depthWrite:!0}}function iC(r){return r==="ExteriorWall"||r==="Roof"||r==="ExposedFloor"}function aC(r){const t="updated-edited.xml";if(!r)return t;const i=r.lastIndexOf(".");return i<=0?`${r}-edited.xml`:`${r.slice(0,i)}-edited.xml`}function vx(r){r.userData.pickable=!0,r.raycast=Mi.prototype.raycast;const t=r.userData.edges;t&&(t.raycast=()=>null)}function sC(r,t){r.current.forEach(i=>{const s=i.userData.surfaceType||"Unknown",l=_x(s,t);i.material.transparent=l.transparent,i.material.opacity=l.opacity,i.material.depthWrite=l.depthWrite,i.material.needsUpdate=!0,vx(i)})}function rC(r){r.current.forEach(t=>{t.material.transparent=!0,t.material.opacity=.45,t.material.depthWrite=!1,t.material.polygonOffset=!0,t.material.polygonOffsetFactor=-1,t.material.polygonOffsetUnits=-1,t.material.needsUpdate=!0})}function cd(r,t){const i=r.find(s=>s.id===t);return i?i.displayName||i.name:t}function Dv(r){return`#${r.toString(16).padStart(6,"0")}`}function oC(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i+=1)if(r[i]!==t[i])return!1;return!0}function lC(r,t){const i=new Set(t.map(f=>f.id)),s=`${r}-opening`;let l=1,c=`${s}-${l}`;for(;i.has(c);)l+=1,c=`${s}-${l}`;return c}Ly.createRoot(document.getElementById("root")).render(Ct.jsx(be.StrictMode,{children:Ct.jsx(qR,{})}));
