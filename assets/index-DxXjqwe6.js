(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Th={exports:{}},qo={};var s_;function Ay(){if(s_)return qo;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var r_;function Ry(){return r_||(r_=1,Th.exports=Ay()),Th.exports}var ft=Ry(),Ah={exports:{}},_e={};var o_;function Cy(){if(o_)return _e;o_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(O,nt,vt){this.props=O,this.context=nt,this.refs=y,this.updater=vt||E}v.prototype.isReactComponent={},v.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=v.prototype;function w(O,nt,vt){this.props=O,this.context=nt,this.refs=y,this.updater=vt||E}var D=w.prototype=new L;D.constructor=w,T(D,v.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(O,nt,vt){var wt=vt.ref;return{$$typeof:r,type:O,key:nt,ref:wt!==void 0?wt:null,props:vt}}function U(O,nt){return C(O.type,nt,O.props)}function X(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function it(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(vt){return nt[vt]})}var rt=/\/+/g;function ct(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?it(""+O.key):nt.toString(36)}function ot(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,nt,vt,wt,Xt){var J=typeof O;(J==="undefined"||J==="boolean")&&(O=null);var dt=!1;if(O===null)dt=!0;else switch(J){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(O.$$typeof){case r:case t:dt=!0;break;case g:return dt=O._init,P(dt(O._payload),nt,vt,wt,Xt)}}if(dt)return Xt=Xt(O),dt=wt===""?"."+ct(O,0):wt,F(Xt)?(vt="",dt!=null&&(vt=dt.replace(rt,"$&/")+"/"),P(Xt,nt,vt,"",function(Yt){return Yt})):Xt!=null&&(X(Xt)&&(Xt=U(Xt,vt+(Xt.key==null||O&&O.key===Xt.key?"":(""+Xt.key).replace(rt,"$&/")+"/")+dt)),nt.push(Xt)),1;dt=0;var Lt=wt===""?".":wt+":";if(F(O))for(var zt=0;zt<O.length;zt++)wt=O[zt],J=Lt+ct(wt,zt),dt+=P(wt,nt,vt,J,Xt);else if(zt=M(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(wt=O.next()).done;)wt=wt.value,J=Lt+ct(wt,zt++),dt+=P(wt,nt,vt,J,Xt);else if(J==="object"){if(typeof O.then=="function")return P(ot(O),nt,vt,wt,Xt);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function G(O,nt,vt){if(O==null)return O;var wt=[],Xt=0;return P(O,wt,"","",function(J){return nt.call(vt,J,Xt++)}),wt}function et(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(vt){(O._status===0||O._status===-1)&&(O._status=1,O._result=vt)},function(vt){(O._status===0||O._status===-1)&&(O._status=2,O._result=vt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var bt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},mt={map:G,forEach:function(O,nt,vt){G(O,function(){nt.apply(this,arguments)},vt)},count:function(O){var nt=0;return G(O,function(){nt++}),nt},toArray:function(O){return G(O,function(nt){return nt})||[]},only:function(O){if(!X(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return _e.Activity=_,_e.Children=mt,_e.Component=v,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=w,_e.StrictMode=s,_e.Suspense=m,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,_e.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},_e.cache=function(O){return function(){return O.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(O,nt,vt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var wt=T({},O.props),Xt=O.key;if(nt!=null)for(J in nt.key!==void 0&&(Xt=""+nt.key),nt)!Q.call(nt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&nt.ref===void 0||(wt[J]=nt[J]);var J=arguments.length-2;if(J===1)wt.children=vt;else if(1<J){for(var dt=Array(J),Lt=0;Lt<J;Lt++)dt[Lt]=arguments[Lt+2];wt.children=dt}return C(O.type,Xt,wt)},_e.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},_e.createElement=function(O,nt,vt){var wt,Xt={},J=null;if(nt!=null)for(wt in nt.key!==void 0&&(J=""+nt.key),nt)Q.call(nt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Xt[wt]=nt[wt]);var dt=arguments.length-2;if(dt===1)Xt.children=vt;else if(1<dt){for(var Lt=Array(dt),zt=0;zt<dt;zt++)Lt[zt]=arguments[zt+2];Xt.children=Lt}if(O&&O.defaultProps)for(wt in dt=O.defaultProps,dt)Xt[wt]===void 0&&(Xt[wt]=dt[wt]);return C(O,J,Xt)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(O){return{$$typeof:d,render:O}},_e.isValidElement=X,_e.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:et}},_e.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},_e.startTransition=function(O){var nt=I.T,vt={};I.T=vt;try{var wt=O(),Xt=I.S;Xt!==null&&Xt(vt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(B,bt)}catch(J){bt(J)}finally{nt!==null&&vt.types!==null&&(nt.types=vt.types),I.T=nt}},_e.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},_e.use=function(O){return I.H.use(O)},_e.useActionState=function(O,nt,vt){return I.H.useActionState(O,nt,vt)},_e.useCallback=function(O,nt){return I.H.useCallback(O,nt)},_e.useContext=function(O){return I.H.useContext(O)},_e.useDebugValue=function(){},_e.useDeferredValue=function(O,nt){return I.H.useDeferredValue(O,nt)},_e.useEffect=function(O,nt){return I.H.useEffect(O,nt)},_e.useEffectEvent=function(O){return I.H.useEffectEvent(O)},_e.useId=function(){return I.H.useId()},_e.useImperativeHandle=function(O,nt,vt){return I.H.useImperativeHandle(O,nt,vt)},_e.useInsertionEffect=function(O,nt){return I.H.useInsertionEffect(O,nt)},_e.useLayoutEffect=function(O,nt){return I.H.useLayoutEffect(O,nt)},_e.useMemo=function(O,nt){return I.H.useMemo(O,nt)},_e.useOptimistic=function(O,nt){return I.H.useOptimistic(O,nt)},_e.useReducer=function(O,nt,vt){return I.H.useReducer(O,nt,vt)},_e.useRef=function(O){return I.H.useRef(O)},_e.useState=function(O){return I.H.useState(O)},_e.useSyncExternalStore=function(O,nt,vt){return I.H.useSyncExternalStore(O,nt,vt)},_e.useTransition=function(){return I.H.useTransition()},_e.version="19.2.3",_e}var l_;function up(){return l_||(l_=1,Ah.exports=Cy()),Ah.exports}var ge=up(),Rh={exports:{}},jo={},Ch={exports:{}},wh={};var c_;function wy(){return c_||(c_=1,(function(r){function t(P,G){var et=P.length;P.push(G);t:for(;0<et;){var bt=et-1>>>1,mt=P[bt];if(0<l(mt,G))P[bt]=G,P[et]=mt,et=bt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var G=P[0],et=P.pop();if(et!==G){P[0]=et;t:for(var bt=0,mt=P.length,O=mt>>>1;bt<O;){var nt=2*(bt+1)-1,vt=P[nt],wt=nt+1,Xt=P[wt];if(0>l(vt,et))wt<mt&&0>l(Xt,vt)?(P[bt]=Xt,P[wt]=et,bt=wt):(P[bt]=vt,P[nt]=et,bt=nt);else if(wt<mt&&0>l(Xt,et))P[bt]=Xt,P[wt]=et,bt=wt;else break t}}return G}function l(P,G){var et=P.sortIndex-G.sortIndex;return et!==0?et:P.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,E=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=P)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function F(P){if(T=!1,D(P),!E)if(i(m)!==null)E=!0,B||(B=!0,it());else{var G=i(p);G!==null&&ot(F,G.startTime-P)}}var B=!1,I=-1,Q=5,C=-1;function U(){return y?!0:!(r.unstable_now()-C<Q)}function X(){if(y=!1,B){var P=r.unstable_now();C=P;var G=!0;try{t:{E=!1,T&&(T=!1,L(I),I=-1),M=!0;var et=S;try{e:{for(D(P),_=i(m);_!==null&&!(_.expirationTime>P&&U());){var bt=_.callback;if(typeof bt=="function"){_.callback=null,S=_.priorityLevel;var mt=bt(_.expirationTime<=P);if(P=r.unstable_now(),typeof mt=="function"){_.callback=mt,D(P),G=!0;break e}_===i(m)&&s(m),D(P)}else s(m);_=i(m)}if(_!==null)G=!0;else{var O=i(p);O!==null&&ot(F,O.startTime-P),G=!1}}break t}finally{_=null,S=et,M=!1}G=void 0}}finally{G?it():B=!1}}}var it;if(typeof w=="function")it=function(){w(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=X,it=function(){ct.postMessage(null)}}else it=function(){v(X,0)};function ot(P,G){I=v(function(){P(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var et=S;S=G;try{return P()}finally{S=et}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var et=S;S=P;try{return G()}finally{S=et}},r.unstable_scheduleCallback=function(P,G,et){var bt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?bt+et:bt):et=bt,P){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=et+mt,P={id:g++,callback:G,priorityLevel:P,startTime:et,expirationTime:mt,sortIndex:-1},et>bt?(P.sortIndex=et,t(p,P),i(m)===null&&P===i(p)&&(T?(L(I),I=-1):T=!0,ot(F,et-bt))):(P.sortIndex=mt,t(m,P),E||M||(E=!0,B||(B=!0,it()))),P},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(P){var G=S;return function(){var et=S;S=G;try{return P.apply(this,arguments)}finally{S=et}}}})(wh)),wh}var u_;function Dy(){return u_||(u_=1,Ch.exports=wy()),Ch.exports}var Dh={exports:{}},Wn={};var f_;function Uy(){if(f_)return Wn;f_=1;var r=up();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Wn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Wn.requestFormReset=function(m){s.d.r(m)},Wn.unstable_batchedUpdates=function(m,p){return m(p)},Wn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wn.version="19.2.3",Wn}var h_;function Ny(){if(h_)return Dh.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dh.exports=Uy(),Dh.exports}var d_;function Ly(){if(d_)return jo;d_=1;var r=Dy(),t=up(),i=Ny();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ot=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},bt=[],mt=-1;function O(e){return{current:e}}function nt(e){0>mt||(e.current=bt[mt],bt[mt]=null,mt--)}function vt(e,n){mt++,bt[mt]=e.current,e.current=n}var wt=O(null),Xt=O(null),J=O(null),dt=O(null);function Lt(e,n){switch(vt(J,n),vt(Xt,e),vt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=C0(n),e=w0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(wt),vt(wt,e)}function zt(){nt(wt),nt(Xt),nt(J)}function Yt(e){e.memoizedState!==null&&vt(dt,e);var n=wt.current,a=w0(n,e.type);n!==a&&(vt(Xt,e),vt(wt,a))}function be(e){Xt.current===e&&(nt(wt),nt(Xt)),dt.current===e&&(nt(dt),ko._currentValue=et)}var rn,Te;function ue(e){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+Te}var Ie=!1;function ie(e,n){if(!e||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var st=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){st=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){st=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var H=x.split(`
`),tt=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===tt.length)for(o=H.length-1,u=tt.length-1;1<=o&&0<=u&&H[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==tt[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ue(a):""}function qe(e,n){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return ue("Activity");default:return""}}function z(e){try{var n="",a=null;do n+=qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fe=Object.prototype.hasOwnProperty,Ae=r.unstable_scheduleCallback,De=r.unstable_cancelCallback,Ft=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Qt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,qt=r.log,se=r.unstable_setDisableYieldValue,At=null,Rt=null;function kt(e){if(typeof qt=="function"&&se(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(At,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Nt=Math.log,ve=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Nt(e)/ve|0)|0}var Ot=256,Ct=262144,Gt=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Tt(o):(x&=A,x!==0?u=Tt(x):a||(a=A&~e,a!==0&&(u=Tt(a))))):(A=o&~h,A!==0?u=Tt(A):x!==0?u=Tt(x):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function Pe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function V(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Bt(a),St=1<<pt;A[pt]=0,H[pt]=-1;var st=tt[pt];if(st!==null)for(tt[pt]=null,pt=0;pt<st.length;pt++){var ut=st[pt];ut!==null&&(ut.lane&=-536870913)}a&=~St}o!==0&&Et(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Et(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Pt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function jt(e,n){var a=n&-n;return a=(a&42)!==0?1:Jt(a),(a&(e.suspendedLanes|n))!==0?0:a}function Jt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function Ke(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var xe=Math.random().toString(36).slice(2),de="__reactFiber$"+xe,je="__reactProps$"+xe,mn="__reactContainer$"+xe,na="__reactEvents$"+xe,Zn="__reactListeners$"+xe,_l="__reactHandles$"+xe,io="__reactResources$"+xe,ds="__reactMarker$"+xe;function ao(e){delete e[de],delete e[je],delete e[na],delete e[Zn],delete e[_l]}function Ua(e){var n=e[de];if(n)return n;for(var a=e.parentNode;a;){if(n=a[mn]||a[de]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=z0(e);e!==null;){if(a=e[de])return a;e=z0(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[de]||e[mn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ps(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function La(e){var n=e[io];return n||(n=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ds]=!0}var j=new Set,lt={};function at(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(lt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wt={},Ht={};function Zt(e){return Fe.call(Ht,e)?!0:Fe.call(Wt,e)?!1:It.test(e)?Ht[e]=!0:(Wt[e]=!0,!1)}function $t(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ln(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=fn(e,n,""+e[n])}}function Ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var We=/[\n"\\]/g;function me(e){return e.replace(We,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function On(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+le(n)):e.value!==""+le(n)&&(e.value=""+le(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Pn(e,x,le(n)):a!=null?Pn(e,x,le(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+le(A):e.removeAttribute("name")}function ia(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){ln(e);return}a=a!=null?""+le(a):"",n=n!=null?""+le(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ln(e)}function Pn(e,n,a){n==="number"&&ne(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qe(e,n,a){if(n!=null&&(n=""+le(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+le(a):""}function zn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=le(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ln(e)}function An(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var In=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||In.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ys(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Fn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Fn(e,h,n[h])}function Li(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var yu=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,js=null;function Rp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[je]||null;t:switch(e=n.stateNode,n.type){case"input":if(On(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[je]||null;if(!u)throw Error(s(90));On(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ze(o)}break t;case"textarea":Qe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xi(e,!!a.multiple,n,!1)}}}var Eu=!1;function Cp(e,n,a){if(Eu)return e(n,a);Eu=!0;try{var o=e(n);return o}finally{if(Eu=!1,(qs!==null||js!==null)&&(sc(),qs&&(n=qs,e=js,js=qs=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function so(e,n){var a=e.stateNode;if(a===null)return null;var o=a[je]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(sa)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){bu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{bu=!1}var Oa=null,Tu=null,xl=null;function wp(){if(xl)return xl;var e,n=Tu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return xl=u.slice(e,1<o?1-o:void 0)}function Sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Dp(){return!1}function ti(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?yl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=ti(ms),oo=_({},ms,{view:0,detail:0}),bx=ti(oo),Au,Ru,lo,El=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Au=e.screenX-lo.screenX,Ru=e.screenY-lo.screenY):Ru=Au=0,lo=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Ru}}),Up=ti(El),Tx=_({},El,{dataTransfer:0}),Ax=ti(Tx),Rx=_({},oo,{relatedTarget:0}),Cu=ti(Rx),Cx=_({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=ti(Cx),Dx=_({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ux=ti(Dx),Nx=_({},ms,{data:0}),Np=ti(Nx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function wu(){return zx}var Ix=_({},oo,{key:function(e){if(e.key){var n=Lx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fx=ti(Ix),Bx=_({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=ti(Bx),Hx=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Gx=ti(Hx),Vx=_({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=ti(Vx),Xx=_({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=ti(Xx),Yx=_({},ms,{newState:0,oldState:0}),qx=ti(Yx),jx=[9,13,27,32],Du=sa&&"CompositionEvent"in window,co=null;sa&&"documentMode"in document&&(co=document.documentMode);var Zx=sa&&"TextEvent"in window&&!co,Op=sa&&(!Du||co&&8<co&&11>=co),Pp=" ",zp=!1;function Ip(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Kx(e,n){switch(e){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return e=n.data,e===Pp&&zp?null:e;default:return null}}function Qx(e,n){if(Zs)return e==="compositionend"||!Du&&Ip(e,n)?(e=wp(),xl=Tu=Oa=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jx[e.type]:n==="textarea"}function Hp(e,n,a,o){qs?js?js.push(o):js=[o]:qs=o,n=hc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var uo=null,fo=null;function $x(e){M0(e,0)}function bl(e){var n=ps(e);if(Ze(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(sa){var Uu;if(sa){var Nu="oninput"in document;if(!Nu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Nu=typeof kp.oninput=="function"}Uu=Nu}else Uu=!1;Vp=Uu&&(!document.documentMode||9<document.documentMode)}function Xp(){uo&&(uo.detachEvent("onpropertychange",Wp),fo=uo=null)}function Wp(e){if(e.propertyName==="value"&&bl(fo)){var n=[];Hp(n,fo,e,Mu(e)),Cp($x,n)}}function tS(e,n,a){e==="focusin"?(Xp(),uo=n,fo=a,uo.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(fo)}function nS(e,n){if(e==="click")return bl(n)}function iS(e,n){if(e==="input"||e==="change")return bl(n)}function aS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:aS;function ho(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!ci(e[u],n[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,n){var a=Yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ne(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ne(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sS=sa&&"documentMode"in document&&11>=document.documentMode,Ks=null,Ou=null,po=null,Pu=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||Ks==null||Ks!==ne(o)||(o=Ks,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=hc(Ou,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},zu={},Qp={};sa&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function _s(e){if(zu[e])return zu[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return zu[e]=n[a];return e}var Jp=_s("animationend"),$p=_s("animationiteration"),tm=_s("animationstart"),rS=_s("transitionrun"),oS=_s("transitionstart"),lS=_s("transitioncancel"),em=_s("transitionend"),nm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Oi(e,n){nm.set(e,n),at(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],Js=0,Fu=0;function Al(){for(var e=Js,n=Fu=Js=0;n<e;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var h=Si[n];if(Si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&im(a,u,h)}}function Rl(e,n,a,o){Si[Js++]=e,Si[Js++]=n,Si[Js++]=a,Si[Js++]=o,Fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bu(e,n,a,o){return Rl(e,n,a,o),Cl(e)}function vs(e,n){return Rl(e,null,null,n),Cl(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Cl(e){if(50<zo)throw zo=0,Zf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function cS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,n,a,o){return new cS(e,n,a,o)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=ui(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Hu(e)&&(x=1);else if(typeof e=="string")x=py(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ui(31,a,n,u),e.elementType=C,e.lanes=h,e;case T:return xs(a.children,u,h,n);case y:x=8,u|=24;break;case v:return e=ui(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case F:return e=ui(13,a,n,u),e.elementType=F,e.lanes=h,e;case B:return e=ui(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:x=10;break t;case L:x=9;break t;case D:x=11;break t;case I:x=14;break t;case Q:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ui(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function xs(e,n,a,o){return e=ui(7,e,o,n),e.lanes=a,e}function Gu(e,n,a){return e=ui(6,e,null,n),e.lanes=a,e}function sm(e){var n=ui(18,null,null,0);return n.stateNode=e,n}function Vu(e,n,a){return n=ui(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function yi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:z(n)},rm.set(e,n),n)}return{value:e,source:n,stack:z(n)}}var tr=[],er=0,Dl=null,mo=0,Mi=[],Ei=0,Pa=null,Vi=1,ki="";function oa(e,n){tr[er++]=mo,tr[er++]=Dl,Dl=e,mo=n}function om(e,n,a){Mi[Ei++]=Vi,Mi[Ei++]=ki,Mi[Ei++]=Pa,Pa=e;var o=Vi;e=ki;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var h=32-Bt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Vi=1<<32-Bt(n)+u|a<<u|o,ki=h+e}else Vi=1<<h|a<<u|o,ki=e}function ku(e){e.return!==null&&(oa(e,1),om(e,1,0))}function Xu(e){for(;e===Dl;)Dl=tr[--er],tr[er]=null,mo=tr[--er],tr[er]=null;for(;e===Pa;)Pa=Mi[--Ei],Mi[Ei]=null,ki=Mi[--Ei],Mi[Ei]=null,Vi=Mi[--Ei],Mi[Ei]=null}function lm(e,n){Mi[Ei++]=Vi,Mi[Ei++]=ki,Mi[Ei++]=Pa,Vi=n.id,ki=n.overflow,Pa=e}var Bn=null,cn=null,ze=!1,za=null,bi=!1,Wu=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(yi(n,e)),Wu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[de]=e,n[je]=o,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)we(Fo[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),ia(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),zn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||A0(n.textContent,a)?(o.popover!=null&&(we("beforetoggle",n),we("toggle",n)),o.onScroll!=null&&we("scroll",n),o.onScrollEnd!=null&&we("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Ia(e,!0)}function um(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Bn=Bn.return}}function nr(e){if(e!==Bn)return!1;if(!ze)return um(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uh(e.type,e.memoizedProps)),a=!a),a&&cn&&Ia(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=P0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=P0(e)}else n===27?(n=cn,Qa(e.type)?(e=mh,mh=null,cn=e):cn=n):cn=Bn?Ai(e.stateNode.nextSibling):null;return!0}function Ss(){cn=Bn=null,ze=!1}function Yu(){var e=za;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),za=null),e}function go(e){za===null?za=[e]:za.push(e)}var qu=O(null),ys=null,la=null;function Fa(e,n,a){vt(qu,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=qu.current,nt(qu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Zu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),ju(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),ju(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ir(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;ci(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===dt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}u=u.return}e!==null&&Zu(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){ys=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return fm(ys,e)}function Nl(e,n){return ys===null&&Ms(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(s(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var uS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fS=r.unstable_scheduleCallback,hS=r.unstable_NormalPriority,yn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new uS,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&fS(hS,function(){e.controller.abort()})}var vo=null,Qu=0,ar=0,sr=null;function dS(e,n){if(vo===null){var a=vo=[];Qu=0,ar=eh(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qu++,n.then(hm,hm),n}function hm(){if(--Qu===0&&vo!==null){sr!==null&&(sr.status="fulfilled");var e=vo;vo=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=P.S;P.S=function(e,n){Kg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(e,n),dm!==null&&dm(e,n)};var Es=O(null);function Ju(){var e=Es.current;return e!==null?e:on.pooledCache}function Ll(e,n){n===null?vt(Es,Es.current):vt(Es,n.pool)}function pm(){var e=Ju();return e===null?null:{parent:yn._currentValue,pool:e}}var rr=Error(s(460)),$u=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e}throw Ts=n,rr}}function bs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,rr):a}}var Ts=null;function _m(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function vm(e){if(e===rr||e===Ol)throw Error(s(483))}var or=null,xo=0;function zl(e){var n=xo;return xo+=1,or===null&&(or=[]),gm(or,e,n)}function So(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=ra(Z,k),Z.index=0,Z.sibling=null,Z}function h(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,$,_t){return k===null||k.tag!==6?(k=Gu($,Z.mode,_t),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function H(Z,k,$,_t){var ae=$.type;return ae===T?pt(Z,k,$.props.children,_t,$.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Q&&bs(ae)===k.type)?(k=u(k,$.props),So(k,$),k.return=Z,k):(k=wl($.type,$.key,$.props,null,Z.mode,_t),So(k,$),k.return=Z,k)}function tt(Z,k,$,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Vu($,Z.mode,_t),k.return=Z,k):(k=u(k,$.children||[]),k.return=Z,k)}function pt(Z,k,$,_t,ae){return k===null||k.tag!==7?(k=xs($,Z.mode,_t,ae),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function St(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Gu(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=wl(k.type,k.key,k.props,null,Z.mode,$),So($,k),$.return=Z,$;case E:return k=Vu(k,Z.mode,$),k.return=Z,k;case Q:return k=bs(k),St(Z,k,$)}if(ot(k)||it(k))return k=xs(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return St(Z,zl(k),$);if(k.$$typeof===w)return St(Z,Nl(Z,k),$);Il(Z,k)}return null}function st(Z,k,$,_t){var ae=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ae!==null?null:A(Z,k,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===ae?H(Z,k,$,_t):null;case E:return $.key===ae?tt(Z,k,$,_t):null;case Q:return $=bs($),st(Z,k,$,_t)}if(ot($)||it($))return ae!==null?null:pt(Z,k,$,_t,null);if(typeof $.then=="function")return st(Z,k,zl($),_t);if($.$$typeof===w)return st(Z,k,Nl(Z,$),_t);Il(Z,$)}return null}function ut(Z,k,$,_t,ae){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get($)||null,A(k,Z,""+_t,ae);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return Z=Z.get(_t.key===null?$:_t.key)||null,H(k,Z,_t,ae);case E:return Z=Z.get(_t.key===null?$:_t.key)||null,tt(k,Z,_t,ae);case Q:return _t=bs(_t),ut(Z,k,$,_t,ae)}if(ot(_t)||it(_t))return Z=Z.get($)||null,pt(k,Z,_t,ae,null);if(typeof _t.then=="function")return ut(Z,k,$,zl(_t),ae);if(_t.$$typeof===w)return ut(Z,k,$,Nl(k,_t),ae);Il(k,_t)}return null}function Kt(Z,k,$,_t){for(var ae=null,Ve=null,ee=k,ye=k=0,Le=null;ee!==null&&ye<$.length;ye++){ee.index>ye?(Le=ee,ee=null):Le=ee.sibling;var ke=st(Z,ee,$[ye],_t);if(ke===null){ee===null&&(ee=Le);break}e&&ee&&ke.alternate===null&&n(Z,ee),k=h(ke,k,ye),Ve===null?ae=ke:Ve.sibling=ke,Ve=ke,ee=Le}if(ye===$.length)return a(Z,ee),ze&&oa(Z,ye),ae;if(ee===null){for(;ye<$.length;ye++)ee=St(Z,$[ye],_t),ee!==null&&(k=h(ee,k,ye),Ve===null?ae=ee:Ve.sibling=ee,Ve=ee);return ze&&oa(Z,ye),ae}for(ee=o(ee);ye<$.length;ye++)Le=ut(ee,Z,ye,$[ye],_t),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?ye:Le.key),k=h(Le,k,ye),Ve===null?ae=Le:Ve.sibling=Le,Ve=Le);return e&&ee.forEach(function(ns){return n(Z,ns)}),ze&&oa(Z,ye),ae}function ce(Z,k,$,_t){if($==null)throw Error(s(151));for(var ae=null,Ve=null,ee=k,ye=k=0,Le=null,ke=$.next();ee!==null&&!ke.done;ye++,ke=$.next()){ee.index>ye?(Le=ee,ee=null):Le=ee.sibling;var ns=st(Z,ee,ke.value,_t);if(ns===null){ee===null&&(ee=Le);break}e&&ee&&ns.alternate===null&&n(Z,ee),k=h(ns,k,ye),Ve===null?ae=ns:Ve.sibling=ns,Ve=ns,ee=Le}if(ke.done)return a(Z,ee),ze&&oa(Z,ye),ae;if(ee===null){for(;!ke.done;ye++,ke=$.next())ke=St(Z,ke.value,_t),ke!==null&&(k=h(ke,k,ye),Ve===null?ae=ke:Ve.sibling=ke,Ve=ke);return ze&&oa(Z,ye),ae}for(ee=o(ee);!ke.done;ye++,ke=$.next())ke=ut(ee,Z,ye,ke.value,_t),ke!==null&&(e&&ke.alternate!==null&&ee.delete(ke.key===null?ye:ke.key),k=h(ke,k,ye),Ve===null?ae=ke:Ve.sibling=ke,Ve=ke);return e&&ee.forEach(function(Ty){return n(Z,Ty)}),ze&&oa(Z,ye),ae}function an(Z,k,$,_t){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var ae=$.key;k!==null;){if(k.key===ae){if(ae=$.type,ae===T){if(k.tag===7){a(Z,k.sibling),_t=u(k,$.props.children),_t.return=Z,Z=_t;break t}}else if(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Q&&bs(ae)===k.type){a(Z,k.sibling),_t=u(k,$.props),So(_t,$),_t.return=Z,Z=_t;break t}a(Z,k);break}else n(Z,k);k=k.sibling}$.type===T?(_t=xs($.props.children,Z.mode,_t,$.key),_t.return=Z,Z=_t):(_t=wl($.type,$.key,$.props,null,Z.mode,_t),So(_t,$),_t.return=Z,Z=_t)}return x(Z);case E:t:{for(ae=$.key;k!==null;){if(k.key===ae)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Z,k.sibling),_t=u(k,$.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}_t=Vu($,Z.mode,_t),_t.return=Z,Z=_t}return x(Z);case Q:return $=bs($),an(Z,k,$,_t)}if(ot($))return Kt(Z,k,$,_t);if(it($)){if(ae=it($),typeof ae!="function")throw Error(s(150));return $=ae.call($),ce(Z,k,$,_t)}if(typeof $.then=="function")return an(Z,k,zl($),_t);if($.$$typeof===w)return an(Z,k,Nl(Z,$),_t);Il(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Z,k.sibling),_t=u(k,$),_t.return=Z,Z=_t):(a(Z,k),_t=Gu($,Z.mode,_t),_t.return=Z,Z=_t),x(Z)):a(Z,k)}return function(Z,k,$,_t){try{xo=0;var ae=an(Z,k,$,_t);return or=null,ae}catch(ee){if(ee===rr||ee===Ol)throw ee;var Ve=ui(29,ee,null,Z.mode);return Ve.lanes=_t,Ve.return=Z,Ve}}}var As=xm(!0),Sm=xm(!1),Ba=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(e),im(e,null,a),n}return Rl(e,o,n,a),Cl(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Pt(e,a)}}function nf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var af=!1;function Mo(){if(af){var e=sr;if(e!==null)throw e}}function Eo(e,n,a,o){af=!1;var u=e.updateQueue;Ba=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,tt=H.next;H.next=null,x===null?h=tt:x.next=tt,x=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==x&&(A===null?pt.firstBaseUpdate=tt:A.next=tt,pt.lastBaseUpdate=H))}if(h!==null){var St=u.baseState;x=0,pt=tt=H=null,A=h;do{var st=A.lane&-536870913,ut=st!==A.lane;if(ut?(Ne&st)===st:(o&st)===st){st!==0&&st===ar&&(af=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Kt=e,ce=A;st=n;var an=a;switch(ce.tag){case 1:if(Kt=ce.payload,typeof Kt=="function"){St=Kt.call(an,St,st);break t}St=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ce.payload,st=typeof Kt=="function"?Kt.call(an,St,st):Kt,st==null)break t;St=_({},St,st);break t;case 2:Ba=!0}}st=A.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(tt=pt=ut,H=St):pt=pt.next=ut,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(H=St),u.baseState=H,u.firstBaseUpdate=tt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),Ya|=x,e.lanes=x,e.memoizedState=St}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var lr=O(null),Fl=O(0);function Em(e,n){e=va,vt(Fl,e),vt(lr,n),va=e|n.baseLanes}function sf(){vt(Fl,va),vt(lr,lr.current)}function rf(){va=Fl.current,nt(lr),nt(Fl)}var fi=O(null),Ti=null;function Va(e){var n=e.alternate;vt(xn,xn.current&1),vt(fi,e),Ti===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(Ti=e)}function of(e){vt(xn,xn.current),vt(fi,e),Ti===null&&(Ti=e)}function bm(e){e.tag===22?(vt(xn,xn.current),vt(fi,e),Ti===null&&(Ti=e)):ka()}function ka(){vt(xn,xn.current),vt(fi,fi.current)}function hi(e){nt(fi),Ti===e&&(Ti=null),nt(xn)}var xn=O(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dh(a)||ph(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,Se=null,en=null,Mn=null,Hl=!1,cr=!1,Rs=!1,Gl=0,bo=0,ur=null,mS=0;function gn(){throw Error(s(321))}function lf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function cf(e,n,a,o,u,h){return ua=h,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?og:bf,Rs=!1,h=a(o,u),Rs=!1,cr&&(h=Am(n,a,o,u)),Tm(e),h}function Tm(e){P.H=Ro;var n=en!==null&&en.next!==null;if(ua=0,Mn=en=Se=null,Hl=!1,bo=0,ur=null,n)throw Error(s(300));e===null||En||(e=e.dependencies,e!==null&&Ul(e)&&(En=!0))}function Am(e,n,a,o){Se=e;var u=0;do{if(cr&&(ur=null),bo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=en=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=lg,h=n(a,o)}while(cr);return h}function gS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?To(n):n,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(Se.flags|=1024),n}function uf(){var e=Gl!==0;return Gl=0,e}function ff(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function hf(e){if(Hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hl=!1}ua=0,Mn=en=Se=null,cr=!1,bo=Gl=0,ur=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?Se.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function Sn(){if(en===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var n=Mn===null?Se.memoizedState:Mn.next;if(n!==null)Mn=n,en=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Mn===null?Se.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var n=bo;return bo+=1,ur===null&&(ur=[]),e=gm(ur,e,n),n=Se,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?og:bf),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===w)return Hn(e)}throw Error(s(438,String(e)))}function df(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=Sn();return pf(n,en,e)}function pf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,H=null,tt=n,pt=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(Ne&St)===St:(ua&St)===St){var st=tt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===ar&&(pt=!0);else if((ua&st)===st){tt=tt.next,st===ar&&(pt=!0);continue}else St={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=St,x=h):H=H.next=St,Se.lanes|=st,Ya|=st;St=tt.action,Rs&&a(h,St),h=tt.hasEagerState?tt.eagerState:a(h,St)}else st={lane:St,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=st,x=h):H=H.next=st,Se.lanes|=St,Ya|=St;tt=tt.next}while(tt!==null&&tt!==n);if(H===null?x=h:H.next=A,!ci(h,e.memoizedState)&&(En=!0,pt&&(a=sr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mf(e){var n=Sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ci(h,n.memoizedState)||(En=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Rm(e,n,a){var o=Se,u=Sn(),h=ze;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ci((en||u).memoizedState,a);if(x&&(u.memoizedState=a,En=!0),u=u.queue,vf(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),on===null)throw Error(s(349));h||(ua&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Vl(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Nm(e)}function Dm(e,n,a){return a(function(){Um(n)&&Nm(e)})}function Um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function Nm(e){var n=vs(e,2);n!==null&&si(n,e,2)}function gf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Rs){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function Lm(e,n,a,o){return e.baseState=a,pf(e,en,typeof o=="function"?o:fa)}function _S(e,n,a,o,u){if(ql(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Om(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,x={};P.T=x;try{var A=a(u,o),H=P.S;H!==null&&H(x,A),Pm(e,n,A)}catch(tt){_f(e,n,tt)}finally{h!==null&&x.types!==null&&(h.types=x.types),P.T=h}}else try{h=a(u,o),Pm(e,n,h)}catch(tt){_f(e,n,tt)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return _f(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function _f(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fm(e,n){return n}function Bm(e,n){if(ze){var a=on.formState;if(a!==null){t:{var o=Se;if(ze){if(cn){e:{for(var u=cn,h=bi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){cn=Ai(u.nextSibling),o=u.data==="F!";break t}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=ag.bind(null,Se,o),o.dispatch=a,o=gf(!1),h=Ef.bind(null,Se,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=_S.bind(null,Se,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=Sn();return Gm(n,en,e)}function Gm(e,n,a){if(n=pf(e,n,Fm)[0],e=Xl(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(x){throw x===rr?Ol:x}else o=n;n=Sn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,fr(9,{destroy:void 0},vS.bind(null,u,a),null)),[o,h,e]}function vS(e,n){e.action=n}function Vm(e){var n=Sn(),a=en;if(a!==null)return Gm(n,a,e);Sn(),n=n.memoizedState,a=Sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Vl(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return Sn().memoizedState}function Wl(e,n,a,o){var u=Kn();Se.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(e,n,a,o){var u=Sn();o=o===void 0?null:o;var h=u.memoizedState.inst;en!==null&&o!==null&&lf(o,en.memoizedState.deps)?u.memoizedState=fr(n,h,a,o):(Se.flags|=e,u.memoizedState=fr(1|n,h,a,o))}function Xm(e,n){Wl(8390656,8,e,n)}function vf(e,n){Yl(2048,8,e,n)}function xS(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Vl(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=Sn().memoizedState;return xS({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(e,n){return Yl(4,2,e,n)}function qm(e,n){return Yl(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,Yl(4,4,jm.bind(null,n,e),a)}function xf(){}function Km(e,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qm(e,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=e(),Rs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function Sf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Jg(),Se.lanes|=e,Ya|=e,a)}function Jm(e,n,a,o){return ci(a,n)?a:lr.current!==null?(e=Sf(e,a,o),ci(e,n)||(En=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(Ne&261930)===0?(En=!0,e.memoizedState=a):(e=Jg(),Se.lanes|=e,Ya|=e,n)}function $m(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var x=P.T,A={};P.T=A,Ef(e,!1,n,a);try{var H=u(),tt=P.S;if(tt!==null&&tt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=pS(H,o);Ao(e,n,pt,mi(e))}else Ao(e,n,o,mi(e))}catch(St){Ao(e,n,{then:function(){},status:"rejected",reason:St},mi())}finally{G.p=h,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function SS(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=tg(e).queue;$m(e,u,n,et,a===null?SS:function(){return eg(e),a(o)})}function tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function eg(e){var n=tg(e);n.next===null&&(n=e.alternate.memoizedState),Ao(e,n.next.queue,{},mi())}function Mf(){return Hn(ko)}function ng(){return Sn().memoizedState}function ig(){return Sn().memoizedState}function yS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=Ha(a);var o=Ga(n,e,a);o!==null&&(si(o,n,a),yo(o,n,a)),n={cache:Ku()},e.payload=n;return}n=n.return}}function MS(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)?sg(n,a):(a=Bu(e,n,a,o),a!==null&&(si(a,e,o),rg(a,n,o)))}function ag(e,n,a){var o=mi();Ao(e,n,a,o)}function Ao(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(e))sg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,ci(A,x))return Rl(e,n,u,0),on===null&&Al(),!1}catch{}if(a=Bu(e,n,u,o),a!==null)return si(a,e,o),rg(a,n,o),!0}return!1}function Ef(e,n,a,o){if(o={lane:2,revertLane:eh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(n)throw Error(s(479))}else n=Bu(e,a,o,2),n!==null&&si(n,e,2)}function ql(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function sg(e,n){cr=Hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Pt(e,a)}}var Ro={readContext:Hn,use:kl,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};Ro.useEffectEvent=gn;var og={readContext:Hn,use:kl,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Rs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Rs){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=MS.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=gf(e);var n=e.queue,a=ag.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(e,n){var a=Kn();return Sf(a,e,n)},useTransition:function(){var e=gf(!1);return e=$m.bind(null,Se,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Se,u=Kn();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Ne&127)!==0||Cm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Xm(Dm.bind(null,o,h,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},wm.bind(null,o,h,a,n),null),a},useId:function(){var e=Kn(),n=on.identifierPrefix;if(ze){var a=ki,o=Vi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:df,useCacheRefresh:function(){return Kn().memoizedState=yS.bind(null,Se)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bf={readContext:Hn,use:kl,useCallback:Km,useContext:Hn,useEffect:vf,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:Xl,useRef:km,useState:function(){return Xl(fa)},useDebugValue:xf,useDeferredValue:function(e,n){var a=Sn();return Jm(a,en.memoizedState,e,n)},useTransition:function(){var e=Xl(fa)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:Mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=Sn();return Lm(a,en,e,n)},useMemoCache:df,useCacheRefresh:ig};bf.useEffectEvent=Wm;var lg={readContext:Hn,use:kl,useCallback:Km,useContext:Hn,useEffect:vf,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:mf,useRef:km,useState:function(){return mf(fa)},useDebugValue:xf,useDeferredValue:function(e,n){var a=Sn();return en===null?Sf(a,e,n):Jm(a,en.memoizedState,e,n)},useTransition:function(){var e=mf(fa)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:Mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=Sn();return en!==null?Lm(a,en,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:df,useCacheRefresh:ig};lg.useEffectEvent=Wm;function Tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Af={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(si(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(si(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(si(n,e,a),yo(n,e,a))}};function cg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,h):!0}function ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Af.enqueueReplaceState(n,n.state,null)}function Cs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function fg(e){Tl(e)}function hg(e){console.error(e)}function dg(e){Tl(e)}function jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,n)},a}function mg(e){return e=Ha(e),e.tag=3,e}function gg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){pg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){pg(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ES(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 31:case 13:return Ti===null?rc():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(e,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(e,o,u)),!1}throw Error(s(435,a.tag))}return Jf(e,o,u),rc(),!1}if(ze)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(e=Error(s(422),{cause:o}),go(yi(e,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),go(yi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=yi(o,a),u=Rf(e.stateNode,o,u),nf(e,u),_n!==4&&(_n=2)),!1;var h=Error(s(520),{cause:o});if(h=yi(h,a),Po===null?Po=[h]:Po.push(h),_n!==4&&(_n=2),n===null)return!0;o=yi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Rf(a.stateNode,o,e),nf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qa===null||!qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mg(u),gg(u,e,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),En=!1;function Gn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):As(n,e.child,a,o)}function _g(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Ms(n),o=cf(e,n,a,x,h,u),A=uf(),e!==null&&!En?(ff(e,n,u),ha(e,n,u)):(ze&&A&&ku(n),n.flags|=1,Gn(e,n,o,u),n.child)}function vg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Hu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,xg(e,n,h,o,u)):(e=wl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!zf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(x,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=ra(h,o),e.ref=n.ref,e.return=n,n.child=e}function xg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ho(h,o)&&e.ref===n.ref)if(En=!1,n.pendingProps=o=h,zf(e,u))(e.flags&131072)!==0&&(En=!0);else return n.lanes=e.lanes,ha(e,n,u)}return wf(e,n,a,o,u)}function Sg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return yg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,h!==null?h.cachePool:null),h!==null?Em(n,h):sf(),bm(n);else return o=n.lanes=536870912,yg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ll(n,h.cachePool),Em(n,h),ka(),n.memoizedState=null):(e!==null&&Ll(n,null),sf(),ka());return Gn(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yg(e,n,a,o,u){var h=Ju();return h=h===null?null:{parent:yn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ll(n,null),sf(),bm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function Zl(e,n){return n=Ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mg(e,n,a){return As(n,e.child,null,a),e=Zl(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function bS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=Zl(n,o),n.lanes=536870912,Co(null,e);if(of(n),(e=cn)?(e=O0(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Bn=n,cn=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Zl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=Mg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||ir(e,n,a,!1),u=(a&e.childLanes)!==0,En||u){if(o=on,o!==null&&(x=jt(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,vs(e,x),si(o,e,x),Cf;rc(),n=Mg(e,n,a)}else e=h.treeContext,cn=Ai(x.nextSibling),Bn=n,ze=!0,za=null,bi=!1,e!==null&&lm(n,e),n=Zl(n,o),n.flags|=4096;return n}return e=ra(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function wf(e,n,a,o,u){return Ms(n),a=cf(e,n,a,o,void 0,u),o=uf(),e!==null&&!En?(ff(e,n,u),ha(e,n,u)):(ze&&o&&ku(n),n.flags|=1,Gn(e,n,a,u),n.child)}function Eg(e,n,a,o,u,h){return Ms(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=uf(),e!==null&&!En?(ff(e,n,h),ha(e,n,h)):(ze&&o&&ku(n),n.flags|=1,Gn(e,n,a,h),n.child)}function bg(e,n,a,o,u){if(Ms(n),n.stateNode===null){var h=$s,x=a.contextType;typeof x=="object"&&x!==null&&(h=Hn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Af,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},tf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Hn(x):$s,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Tf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Af.enqueueReplaceState(h,h.state,null),Eo(n,o,h,u),Mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,H=Cs(a,A);h.props=H;var tt=h.context,pt=a.contextType;x=$s,typeof pt=="object"&&pt!==null&&(x=Hn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||tt!==x)&&ug(n,h,o,x),Ba=!1;var st=n.memoizedState;h.state=st,Eo(n,o,h,u),Mo(),tt=n.memoizedState,A||st!==tt||Ba?(typeof St=="function"&&(Tf(n,a,St,o),tt=n.memoizedState),(H=Ba||cg(n,a,H,o,st,tt,x))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=x,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ef(e,n),x=n.memoizedProps,pt=Cs(a,x),h.props=pt,St=n.pendingProps,st=h.context,tt=a.contextType,H=$s,typeof tt=="object"&&tt!==null&&(H=Hn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==St||st!==H)&&ug(n,h,o,H),Ba=!1,st=n.memoizedState,h.state=st,Eo(n,o,h,u),Mo();var ut=n.memoizedState;x!==St||st!==ut||Ba||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof A=="function"&&(Tf(n,a,A,o),ut=n.memoizedState),(pt=Ba||cg(n,a,pt,o,st,ut,H)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=H,o=pt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Kl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,a,u)):Gn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ha(e,n,u),e}function Tg(e,n,a,o){return Ss(),n.flags|=256,Gn(e,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:pm()}}function Nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function Ag(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?Va(n):ka(),(e=cn)?(e=O0(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Bn=n,cn=null)):e=null,e===null)throw Ia(n);return ph(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ka(),u=n.mode,A=Ql({mode:"hidden",children:A},u),o=xs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(e,x,a),n.memoizedState=Df,Co(null,o)):(Va(n),Lf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)n.flags&256?(Va(n),n.flags&=-257,n=Of(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),A=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),A=xs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,As(n,e.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(e,x,a),n.memoizedState=Df,n=Co(null,o));else if(Va(n),ph(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,go({value:o,source:null,stack:null}),n=Of(e,n,a)}else if(En||ir(e,n,a,!1),x=(a&e.childLanes)!==0,En||x){if(x=on,x!==null&&(o=jt(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,vs(e,o),si(x,e,o),Cf;dh(A)||rc(),n=Of(e,n,a)}else dh(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,cn=Ai(A.nextSibling),Bn=n,ze=!0,za=null,bi=!1,e!==null&&lm(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return u?(ka(),A=o.fallback,u=n.mode,H=e.child,tt=H.sibling,o=ra(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,tt!==null?A=ra(tt,A):(A=xs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Co(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Uf(a):(u=A.cachePool,u!==null?(H=yn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=pm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Nf(e,x,a),n.memoizedState=Df,Co(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=Ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ql(e,n){return e=ui(22,e,null,n),e.lanes=0,e}function Of(e,n,a){return As(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Pf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Cg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=xn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,vt(xn,x),Gn(e,n,o,a),o=ze?mo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,a,n);else if(e.tag===19)Rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Pf(n,!0,a,null,h,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function TS(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Fa(n,yn,e.memoizedState.cache),Ss();break;case 27:case 5:Yt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ag(e,n,a):(Va(n),e=ha(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Cg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(xn,xn.current),o)break;return null;case 22:return n.lanes=0,Sg(e,n,a,n.pendingProps);case 24:Fa(n,yn,e.memoizedState.cache)}return ha(e,n,a)}function wg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)En=!0;else{if(!zf(e,a)&&(n.flags&128)===0)return En=!1,TS(e,n,a);En=(e.flags&131072)!==0}else En=!1,ze&&(n.flags&1048576)!==0&&om(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=bs(n.elementType),n.type=e,typeof e=="function")Hu(e)?(o=Cs(e,o),n.tag=1,n=bg(null,n,e,o,a)):(n.tag=0,n=wf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=_g(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=vg(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return wf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),bg(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ef(e,n),Eo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Fa(n,yn,o),o!==h.cache&&Zu(n,[yn],a,!0),Mo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Tg(e,n,o,a);break t}else if(o!==u){u=yi(Error(s(424)),n),go(u),n=Tg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,cn=Ai(e.firstChild),Bn=n,ze=!0,za=null,bi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),o===u){n=ha(e,n,a);break t}Gn(e,n,o,a)}n=n.child}return n;case 26:return Kl(e,n),e===null?(a=H0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=dc(J.current).createElement(a),o[de]=n,o[je]=e,Vn(o,a,e),R(o),n.stateNode=o):n.memoizedState=H0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&ze&&(o=n.stateNode=I0(n.type,n.pendingProps,J.current),Bn=n,bi=!0,u=cn,Qa(n.type)?(mh=u,cn=Ai(o.firstChild)):cn=u),Gn(e,n,n.pendingProps.children,a),Kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=cn)&&(o=ey(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Bn=n,cn=Ai(o.firstChild),bi=!1,u=!0):u=!1),u||Ia(n)),Yt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,uh(u,h)?o=null:x!==null&&uh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(e,n,gS,null,null,a),ko._currentValue=u),Kl(e,n),Gn(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=cn)&&(a=ny(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Bn=n,cn=null,e=!0):e=!1),e||Ia(n)),null;case 13:return Ag(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,a):Gn(e,n,o,a),n.child;case 11:return _g(e,n,n.type,n.pendingProps,a);case 7:return Gn(e,n,n.pendingProps,a),n.child;case 8:return Gn(e,n,n.pendingProps.children,a),n.child;case 12:return Gn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Gn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Hn(u),o=o(u),n.flags|=1,Gn(e,n,o,a),n.child;case 14:return vg(e,n,n.type,n.pendingProps,a);case 15:return xg(e,n,n.type,n.pendingProps,a);case 19:return Cg(e,n,a);case 31:return bS(e,n,a);case 22:return Sg(e,n,a,n.pendingProps);case 24:return Ms(n),o=Hn(yn),e===null?(u=Ju(),u===null&&(u=on,h=Ku(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},tf(n),Fa(n,yn,u)):((e.lanes&a)!==0&&(ef(e,n),Eo(n,null,null,a),Mo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,yn,o)):(o=h.cache,Fa(n,yn,o),o!==u.cache&&Zu(n,[yn],a,!0))),Gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(n0())e.flags|=8192;else throw Ts=Pl,$u}else e.flags&=-16777217}function Dg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W0(n))if(n0())e.flags|=8192;else throw Ts=Pl,$u}function Jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ge():536870912,e.lanes|=n,mr|=n)}function wo(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function un(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function AS(e,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(yn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),un(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(da(n),h!==null?(un(n),Dg(n,h)):(un(n),If(n,u,null,o,a))):h?h!==e.memoizedState?(da(n),un(n),Dg(n,h)):(un(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),un(n),If(n,u,e,o,a)),null;case 27:if(be(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}e=wt.current,nr(n)?cm(n):(e=I0(u,o,a),n.stateNode=e,da(n))}return un(n),null;case 5:if(be(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(h=wt.current,nr(n))cm(n);else{var x=dc(J.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[de]=n,h[je]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Vn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return un(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[de]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||A0(e.nodeValue,a)),e||Ia(n,!0)}else e=dc(e).createTextNode(o),e[de]=n,n.stateNode=e}return un(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[de]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),e=!1}else a=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[de]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),un(n),null);case 4:return zt(),e===null&&sh(n.stateNode.containerInfo),un(n),null;case 10:return ca(n.type),un(n),null;case 19:if(nt(xn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)wo(o,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Bl(e),h!==null){for(n.flags|=128,wo(o,!1),e=h.updateQueue,n.updateQueue=e,Jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return vt(xn,xn.current&1|2),ze&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ic&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Bl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Jl(n,e),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!ze)return un(n),null}else 2*b()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=xn.current,vt(xn,u?a&1|2:a&1),ze&&oa(n,o.treeForkCount),e):(un(n),null);case 22:case 23:return hi(n),rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(Es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(yn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function RS(e,n){switch(Xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(yn),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(xn),null;case 4:return zt(),null;case 10:return ca(n.type),null;case 22:case 23:return hi(n),rf(),e!==null&&nt(Es),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(yn),null;case 25:return null;default:return null}}function Ug(e,n){switch(Xu(n),n.tag){case 3:ca(yn),zt();break;case 26:case 27:case 5:be(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:nt(xn);break;case 10:ca(n.type);break;case 22:case 23:hi(n),rf(),e!==null&&nt(Es);break;case 24:ca(yn)}}function Do(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){$e(n,n.return,A)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,tt=A;try{tt()}catch(pt){$e(u,H,pt)}}}o=o.next}while(o!==h)}}catch(pt){$e(n,n.return,pt)}}function Ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){$e(e,e.return,o)}}}function Lg(e,n,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){$e(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){$e(e,n,u)}}function Xi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){$e(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){$e(e,n,u)}else a.current=null}function Og(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){$e(e,e.return,u)}}function Ff(e,n,a){try{var o=e.stateNode;ZS(o,e.type,a,n),o[je]=n}catch(u){$e(e,e.return,u)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Hf(e,n,a),e=e.sibling;e!==null;)Hf(e,n,a),e=e.sibling}function $l(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function zg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Vn(n,o,a),n[de]=e,n[je]=a}catch(h){$e(e,e.return,h)}}var pa=!1,bn=!1,Gf=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,Un=null;function CS(e,n){if(e=e.containerInfo,lh=Sc,e=Zp(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,tt=0,pt=0,St=e,st=null;e:for(;;){for(var ut;St!==a||u!==0&&St.nodeType!==3||(A=x+u),St!==h||o!==0&&St.nodeType!==3||(H=x+o),St.nodeType===3&&(x+=St.nodeValue.length),(ut=St.firstChild)!==null;)st=St,St=ut;for(;;){if(St===e)break e;if(st===a&&++tt===u&&(A=x),st===h&&++pt===o&&(H=x),(ut=St.nextSibling)!==null)break;St=st,st=St.parentNode}St=ut}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ch={focusedElem:e,selectionRange:a},Sc=!1,Un=n;Un!==null;)if(n=Un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Un=e;else for(;Un!==null;){switch(n=Un,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Kt=Cs(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){$e(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)hh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Un=e;break}Un=n.return}}function Fg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&Do(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){$e(a,a.return,x)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){$e(a,a.return,x)}}o&64&&Ng(a),o&512&&Uo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(x){$e(a,a.return,x)}}break;case 27:n===null&&o&4&&zg(a);case 26:case 5:ga(e,a),n===null&&o&4&&Og(a),o&512&&Uo(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&Gg(e,a);break;case 13:ga(e,a),o&4&&Vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=IS.bind(null,a),iy(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||bn,u=pa;var h=bn;pa=o,(bn=n)&&!h?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,bn=h}break;case 30:break;default:ga(e,a)}}function Bg(e){var n=e.alternate;n!==null&&(e.alternate=null,Bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ao(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,ei=!1;function ma(e,n,a){for(a=a.child;a!==null;)Hg(e,n,a),a=a.sibling}function Hg(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:bn||Xi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Xi(a,n);var o=hn,u=ei;Qa(a.type)&&(hn=a.stateNode,ei=!1),ma(e,n,a),Ho(a.stateNode),hn=o,ei=u;break;case 5:bn||Xi(a,n);case 6:if(o=hn,u=ei,hn=null,ma(e,n,a),hn=o,ei=u,hn!==null)if(ei)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(h){$e(a,n,h)}else try{hn.removeChild(a.stateNode)}catch(h){$e(a,n,h)}break;case 18:hn!==null&&(ei?(e=hn,N0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):N0(hn,a.stateNode));break;case 4:o=hn,u=ei,hn=a.stateNode.containerInfo,ei=!0,ma(e,n,a),hn=o,ei=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),bn||Xa(4,a,n),ma(e,n,a);break;case 1:bn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Lg(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,ma(e,n,a),bn=o;break;default:ma(e,n,a)}}function Gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){$e(n,n.return,a)}}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){$e(n,n.return,a)}}function wS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ig),n;default:throw Error(s(435,e.tag))}}function tc(e,n){var a=wS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=FS.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){hn=A.stateNode,ei=!1;break t}break;case 5:hn=A.stateNode,ei=!1;break t;case 3:case 4:hn=A.stateNode.containerInfo,ei=!0;break t}A=A.return}if(hn===null)throw Error(s(160));Hg(h,x,u),hn=null,ei=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)kg(n,e),n=n.sibling}var Pi=null;function kg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&(Xa(3,e,e.return),Do(3,e),Xa(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(bn||a===null||Xi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(ni(n,e),ii(e),o&512&&(bn||a===null||Xi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ds]||h[de]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Vn(h,o,a),h[de]=e,R(h),o=h;break t;case"link":var x=k0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),Vn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=k0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),Vn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[de]=e,R(h),o=h}e.stateNode=o}else X0(u,e.type,e.stateNode);else e.stateNode=V0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?X0(u,e.type,e.stateNode):V0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(bn||a===null||Xi(a,a.return)),a!==null&&o&4&&Ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(bn||a===null||Xi(a,a.return)),e.flags&32){u=e.stateNode;try{An(u,"")}catch(Kt){$e(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Ff(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){$e(e,e.return,Kt)}}break;case 3:if(gc=null,u=Pi,Pi=pc(n.containerInfo),ni(n,e),Pi=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Kt){$e(e,e.return,Kt)}Gf&&(Gf=!1,Xg(e));break;case 4:o=Pi,Pi=pc(e.stateNode.containerInfo),ni(n,e),ii(e),Pi=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,tt=pa,pt=bn;if(pa=tt||u,bn=pt||H,ni(n,e),bn=pt,pa=tt,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||pa||bn||ws(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var St=H.memoizedProps.style,st=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Kt){$e(H,H.return,Kt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Kt){$e(H,H.return,Kt)}}}else if(n.tag===18){if(a===null){H=n;try{var ut=H.stateNode;u?L0(ut,!0):L0(H.stateNode,!1)}catch(Kt){$e(H,H.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Bf(e);$l(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(An(x,""),a.flags&=-33);var A=Bf(e);$l(e,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,tt=Bf(e);Hf(e,tt,H);break;default:throw Error(s(161))}}catch(pt){$e(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fg(e,n.alternate,n),n=n.sibling}function ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),ws(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lg(n,n.return,a),ws(n);break;case 27:Ho(n.stateNode);case 26:case 5:Xi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,a),Do(4,h);break;case 1:if(_a(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){$e(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)ym(H[u],A)}catch(tt){$e(o,o.return,tt)}}a&&x&64&&Ng(h),Uo(h,h.return);break;case 27:zg(h);case 26:case 5:_a(u,h,a),a&&o===null&&x&4&&Og(h),Uo(h,h.return);break;case 12:_a(u,h,a);break;case 31:_a(u,h,a),a&&x&4&&Gg(u,h);break;case 13:_a(u,h,a),a&&x&4&&Vg(u,h);break;case 22:h.memoizedState===null&&_a(u,h,a),Uo(h,h.return);break;case 30:break;default:_a(u,h,a)}n=n.sibling}}function Vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_o(a))}function kf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function zi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wg(e,n,a,o),n=n.sibling}function Wg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,o),u&2048&&Do(9,n);break;case 1:zi(e,n,a,o);break;case 3:zi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(u&2048){zi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){$e(n,n.return,H)}}else zi(e,n,a,o);break;case 31:zi(e,n,a,o);break;case 13:zi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?zi(e,n,a,o):No(e,n):h._visibility&2?zi(e,n,a,o):(h._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(x,n);break;case 24:zi(e,n,a,o),u&2048&&kf(n.alternate,n);break;default:zi(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,H=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:hr(h,x,A,H,u),Do(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?hr(h,x,A,H,u):No(h,x):(pt._visibility|=2,hr(h,x,A,H,u)),u&&tt&2048&&Vf(x.alternate,x);break;case 24:hr(h,x,A,H,u),u&&tt&2048&&kf(x.alternate,x);break;default:hr(h,x,A,H,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Vf(o.alternate,o);break;case 24:No(a,o),u&2048&&kf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Lo=8192;function dr(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Yg(e,n,a),e=e.sibling}function Yg(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&Lo&&e.memoizedState!==null&&my(a,Pi,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Pi;Pi=pc(e.stateNode.containerInfo),dr(e,n,a),Pi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,dr(e,n,a),Lo=o):dr(e,n,a));break;default:dr(e,n,a)}}function qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,Zg(o,e)}qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jg(e),e=e.sibling}function jg(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):Oo(e);break;default:Oo(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,Zg(o,e)}qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function Zg(e,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Un=o;else t:for(a=e;Un!==null;){o=Un;var u=o.sibling,h=o.return;if(Bg(o),o===a){Un=null;break t}if(u!==null){u.return=h,Un=u;break t}Un=h}}}var DS={getCacheForType:function(e){var n=Hn(yn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Hn(yn).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,Ye=0,on=null,Ce=null,Ne=0,Je=0,di=null,Wa=!1,pr=!1,Xf=!1,va=0,_n=0,Ya=0,Ds=0,Wf=0,pi=0,mr=0,Po=null,ai=null,Yf=!1,nc=0,Kg=0,ic=1/0,ac=null,qa=null,Rn=0,ja=null,gr=null,xa=0,qf=0,jf=null,Qg=null,zo=0,Zf=null;function mi(){return(Ye&2)!==0&&Ne!==0?Ne&-Ne:P.T!==null?eh():Ue()}function Jg(){if(pi===0)if((Ne&536870912)===0||ze){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function si(e,n,a){(e===on&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Za(e,Ne,pi,!1)),V(e,a),((Ye&2)===0||e!==on)&&(e===on&&((Ye&2)===0&&(Ds|=a),_n===4&&Za(e,Ne,pi,!1)),Wi(e))}function $g(e,n,a){if((Ye&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?OS(e,n):Qf(e,n,!0),h=o;do{if(u===0){pr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!NS(a)){u=Qf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Po;var H=A.current.memoizedState.isDehydrated;if(H&&(_r(A,x).flags|=256),x=Qf(A,x,!1),x!==2){if(Xf&&!H){A.errorRecoveryDisabledLanes|=h,Ds|=h,u=4;break t}h=ai,ai=u,h!==null&&(ai===null?ai=h:ai.push.apply(ai,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){_r(e,0),Za(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,pi,!Wa);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-b(),10<u)){if(Za(o,n,pi,!Wa),xt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=D0(t0.bind(null,o,a,ai,ac,Yf,n,pi,Ds,mr,Wa,h,"Throttled",-0,0),u);break t}t0(o,a,ai,ac,Yf,n,pi,Ds,mr,Wa,h,null,-0,0)}}break}while(!0);Wi(e)}function t0(e,n,a,o,u,h,x,A,H,tt,pt,St,st,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Yg(n,h,St);var Kt=(h&62914560)===h?nc-b():(h&4194048)===h?Kg-b():0;if(Kt=gy(St,Kt),Kt!==null){xa=h,e.cancelPendingCommit=Kt(l0.bind(null,e,n,h,a,o,u,x,A,H,pt,St,null,st,ut)),Za(e,h,x,!tt);return}}l0(e,n,h,a,o,u,x,A,H)}function NS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ci(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~Wf,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Et(e,a,n)}function sc(){return(Ye&6)===0?(Io(0),!1):!0}function Kf(){if(Ce!==null){if(Je===0)var e=Ce.return;else e=Ce,la=ys=null,hf(e),or=null,xo=0,e=Ce;for(;e!==null;)Ug(e.alternate,e),e=e.return;Ce=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,Kf(),on=e,Ce=a=ra(e.current,null),Ne=n,Je=0,di=null,Wa=!1,pr=Dt(e,n),Xf=!1,mr=pi=Wf=Ds=Ya=_n=0,ai=Po=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return va=n,Al(),a}function e0(e,n){Se=null,P.H=Ro,n===rr||n===Ol?(n=_m(),Je=3):n===$u?(n=_m(),Je=4):Je=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Ce===null&&(_n=1,jl(e,yi(n,e.current)))}function n0(){var e=fi.current;return e===null?!0:(Ne&4194048)===Ne?Ti===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Ti:!1}function i0(){var e=P.H;return P.H=Ro,e===null?Ro:e}function a0(){var e=P.A;return P.A=DS,e}function rc(){_n=4,Wa||(Ne&4194048)!==Ne&&fi.current!==null||(pr=!0),(Ya&134217727)===0&&(Ds&134217727)===0||on===null||Za(on,Ne,pi,!1)}function Qf(e,n,a){var o=Ye;Ye|=2;var u=i0(),h=a0();(on!==e||Ne!==n)&&(ac=null,_r(e,n)),n=!1;var x=_n;t:do try{if(Je!==0&&Ce!==null){var A=Ce,H=di;switch(Je){case 8:Kf(),x=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var tt=Je;if(Je=0,di=null,vr(e,A,H,tt),a&&pr){x=0;break t}break;default:tt=Je,Je=0,di=null,vr(e,A,H,tt)}}LS(),x=_n;break}catch(pt){e0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,la=ys=null,Ye=o,P.H=u,P.A=h,Ce===null&&(on=null,Ne=0,Al()),x}function LS(){for(;Ce!==null;)s0(Ce)}function OS(e,n){var a=Ye;Ye|=2;var o=i0(),u=a0();on!==e||Ne!==n?(ac=null,ic=b()+500,_r(e,n)):pr=Dt(e,n);t:do try{if(Je!==0&&Ce!==null){n=Ce;var h=di;e:switch(Je){case 1:Je=0,di=null,vr(e,n,h,1);break;case 2:case 9:if(mm(h)){Je=0,di=null,r0(n);break}n=function(){Je!==2&&Je!==9||on!==e||(Je=7),Wi(e)},h.then(n,n);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:mm(h)?(Je=0,di=null,r0(n)):(Je=0,di=null,vr(e,n,h,7));break;case 5:var x=null;switch(Ce.tag){case 26:x=Ce.memoizedState;case 5:case 27:var A=Ce;if(x?W0(x):A.stateNode.complete){Je=0,di=null;var H=A.sibling;if(H!==null)Ce=H;else{var tt=A.return;tt!==null?(Ce=tt,oc(tt)):Ce=null}break e}}Je=0,di=null,vr(e,n,h,5);break;case 6:Je=0,di=null,vr(e,n,h,6);break;case 8:Kf(),_n=6;break t;default:throw Error(s(462))}}PS();break}catch(pt){e0(e,pt)}while(!0);return la=ys=null,P.H=o,P.A=u,Ye=a,Ce!==null?0:(on=null,Ne=0,Al(),_n)}function PS(){for(;Ce!==null&&!Ft();)s0(Ce)}function s0(e){var n=wg(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?oc(e):Ce=n}function r0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:hf(n);default:Ug(a,n),n=Ce=am(n,va),n=wg(a,n,va)}e.memoizedProps=e.pendingProps,n===null?oc(e):Ce=n}function vr(e,n,a,o){la=ys=null,hf(n),or=null,xo=0;var u=n.return;try{if(ES(e,u,n,a,Ne)){_n=1,jl(e,yi(a,e.current)),Ce=null;return}}catch(h){if(u!==null)throw Ce=u,h;_n=1,jl(e,yi(a,e.current)),Ce=null;return}n.flags&32768?(ze||o===1?e=!0:pr||(Ne&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),o0(n,e)):oc(n)}function oc(e){var n=e;do{if((n.flags&32768)!==0){o0(n,Wa);return}e=n.return;var a=AS(n.alternate,n,va);if(a!==null){Ce=a;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);_n===0&&(_n=5)}function o0(e,n){do{var a=RS(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);_n=6,Ce=null}function l0(e,n,a,o,u,h,x,A,H){e.cancelPendingCommit=null;do lc();while(Rn!==0);if((Ye&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Fu,yt(e,a,h,x,A,H),e===on&&(Ce=on=null,Ne=0),gr=n,ja=e,xa=a,qf=h,jf=u,Qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,BS(ht,function(){return d0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,x=Ye,Ye|=4;try{CS(e,n,a)}finally{Ye=x,G.p=u,P.T=o}}Rn=1,c0(),u0(),f0()}}function c0(){if(Rn===1){Rn=0;var e=ja,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ye;Ye|=4;try{kg(n,e);var h=ch,x=Zp(e.containerInfo),A=h.focusedElem,H=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&jp(A.ownerDocument.documentElement,A)){if(H!==null&&Lu(A)){var tt=H.start,pt=H.end;if(pt===void 0&&(pt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(pt,A.value.length);else{var St=A.ownerDocument||document,st=St&&St.defaultView||window;if(st.getSelection){var ut=st.getSelection(),Kt=A.textContent.length,ce=Math.min(H.start,Kt),an=H.end===void 0?ce:Math.min(H.end,Kt);!ut.extend&&ce>an&&(x=an,an=ce,ce=x);var Z=qp(A,ce),k=qp(A,an);if(Z&&k&&(ut.rangeCount!==1||ut.anchorNode!==Z.node||ut.anchorOffset!==Z.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var $=St.createRange();$.setStart(Z.node,Z.offset),ut.removeAllRanges(),ce>an?(ut.addRange($),ut.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ut.addRange($))}}}}for(St=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var _t=St[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Sc=!!lh,ch=lh=null}finally{Ye=u,G.p=o,P.T=a}}e.current=n,Rn=2}}function u0(){if(Rn===2){Rn=0;var e=ja,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ye;Ye|=4;try{Fg(e,n.alternate,n)}finally{Ye=u,G.p=o,P.T=a}}Rn=3}}function f0(){if(Rn===4||Rn===3){Rn=0,N();var e=ja,n=gr,a=xa,o=Qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,gr=ja=null,h0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qa=null),oe(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{P.T=n,G.p=u}}(xa&3)!==0&&lc(),Wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Zf?zo++:(zo=0,Zf=e):zo=0,Io(0)}}function h0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function lc(){return c0(),u0(),f0(),d0()}function d0(){if(Rn!==5)return!1;var e=ja,n=qf;qf=0;var a=oe(xa),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=jf,jf=null;var h=ja,x=xa;if(Rn=0,gr=ja=null,xa=0,(Ye&6)!==0)throw Error(s(331));var A=Ye;if(Ye|=4,jg(h.current),Wg(h,h.current,x,a),Ye=A,Io(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{G.p=u,P.T=o,h0(e,n)}}function p0(e,n,a){n=yi(a,n),n=Rf(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(V(e,2),Wi(e))}function $e(e,n,a){if(e.tag===3)p0(e,e,a);else for(;n!==null;){if(n.tag===3){p0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=yi(a,e),a=mg(2),o=Ga(n,a,2),o!==null&&(gg(a,o,n,e),V(o,2),Wi(o));break}}n=n.return}}function Jf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new US;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),e=zS.bind(null,e,n,a),n.then(e,e))}function zS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,on===e&&(Ne&a)===a&&(_n===4||_n===3&&(Ne&62914560)===Ne&&300>b()-nc?(Ye&2)===0&&_r(e,0):Wf|=a,mr===Ne&&(mr=0)),Wi(e)}function m0(e,n){n===0&&(n=Ge()),e=vs(e,n),e!==null&&(V(e,n),Wi(e))}function IS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(e,a)}function FS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),m0(e,a)}function BS(e,n){return Ae(e,n)}var cc=null,xr=null,$f=!1,uc=!1,th=!1,Ka=0;function Wi(e){e!==xr&&e.next===null&&(xr===null?cc=xr=e:xr=xr.next=e),uc=!0,$f||($f=!0,GS())}function Io(e,n){if(!th&&uc){th=!0;do for(var a=!1,o=cc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,x0(o,h))}else h=Ne,h=xt(o,o===on?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Dt(o,h)||(a=!0,x0(o,h));o=o.next}while(a);th=!1}}function HS(){g0()}function g0(){uc=$f=!1;var e=0;Ka!==0&&QS()&&(e=Ka);for(var n=b(),a=null,o=cc;o!==null;){var u=o.next,h=_0(o,n);h===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(h&3)!==0)&&(uc=!0)),o=u}Rn!==0&&Rn!==5||Io(e),Ka!==0&&(Ka=0)}function _0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Bt(h),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&o)!==0)&&(u[x]=fe(A,n)):H<=n&&(e.expiredLanes|=A),h&=~A}if(n=on,a=Ne,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&De(o),oe(a)){case 2:case 8:a=Mt;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return o=v0.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&De(o),e.callbackPriority=2,e.callbackNode=null,2}function v0(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var o=Ne;return o=xt(e,e===on?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($g(e,o,n),_0(e,b()),e.callbackNode!=null&&e.callbackNode===a?v0.bind(null,e):null)}function x0(e,n){if(lc())return null;$g(e,n,!0)}function GS(){$S(function(){(Ye&6)!==0?Ae(gt,HS):g0()})}function eh(){if(Ka===0){var e=ar;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Ka=e}return Ka}function S0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function y0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function VS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=S0((u[je]||null).action),x=o.submitter;x&&(n=(n=x[je]||null)?S0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new Ml("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var H=x?y0(u,x):new FormData(u);yf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=x?y0(u,x):new FormData(u),yf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var nh=0;nh<Iu.length;nh++){var ih=Iu[nh],kS=ih.toLowerCase(),XS=ih[0].toUpperCase()+ih.slice(1);Oi(kS,"on"+XS)}Oi(Jp,"onAnimationEnd"),Oi($p,"onAnimationIteration"),Oi(tm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(rS,"onTransitionRun"),Oi(oS,"onTransitionStart"),Oi(lS,"onTransitionCancel"),Oi(em,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function M0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],H=A.instance,tt=A.currentTarget;if(A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(pt){Tl(pt)}u.currentTarget=null,h=H}else for(x=0;x<o.length;x++){if(A=o[x],H=A.instance,tt=A.currentTarget,A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(pt){Tl(pt)}u.currentTarget=null,h=H}}}}function we(e,n){var a=n[na];a===void 0&&(a=n[na]=new Set);var o=e+"__bubble";a.has(o)||(E0(n,e,2,!1),a.add(o))}function ah(e,n,a){var o=0;n&&(o|=4),E0(a,e,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function sh(e){if(!e[fc]){e[fc]=!0,j.forEach(function(a){a!=="selectionchange"&&(WS.has(a)||ah(a,!1,e),ah(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,ah("selectionchange",!1,n))}}function E0(e,n,a,o){switch(J0(n)){case 2:var u=xy;break;case 8:u=Sy;break;default:u=Sh}a=u.bind(null,n,a,e),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function rh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ua(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Cp(function(){var tt=h,pt=Mu(a),St=[];t:{var st=nm.get(e);if(st!==void 0){var ut=Ml,Kt=e;switch(e){case"keypress":if(Sl(a)===0)break t;case"keydown":case"keyup":ut=Fx;break;case"focusin":Kt="focus",ut=Cu;break;case"focusout":Kt="blur",ut=Cu;break;case"beforeblur":case"afterblur":ut=Cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Gx;break;case Jp:case $p:case tm:ut=wx;break;case em:ut=kx;break;case"scroll":case"scrollend":ut=bx;break;case"wheel":ut=Wx;break;case"copy":case"cut":case"paste":ut=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Lp;break;case"toggle":case"beforetoggle":ut=qx}var ce=(n&4)!==0,an=!ce&&(e==="scroll"||e==="scrollend"),Z=ce?st!==null?st+"Capture":null:st;ce=[];for(var k=tt,$;k!==null;){var _t=k;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Z===null||(_t=so(k,Z),_t!=null&&ce.push(Bo(k,_t,$))),an)break;k=k.return}0<ce.length&&(st=new ut(st,Kt,null,a,pt),St.push({event:st,listeners:ce}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==yu&&(Kt=a.relatedTarget||a.fromElement)&&(Ua(Kt)||Kt[mn]))break t;if((ut||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(Kt=a.relatedTarget||a.toElement,ut=tt,Kt=Kt?Ua(Kt):null,Kt!==null&&(an=c(Kt),ce=Kt.tag,Kt!==an||ce!==5&&ce!==27&&ce!==6)&&(Kt=null)):(ut=null,Kt=tt),ut!==Kt)){if(ce=Up,_t="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Lp,_t="onPointerLeave",Z="onPointerEnter",k="pointer"),an=ut==null?st:ps(ut),$=Kt==null?st:ps(Kt),st=new ce(_t,k+"leave",ut,a,pt),st.target=an,st.relatedTarget=$,_t=null,Ua(pt)===tt&&(ce=new ce(Z,k+"enter",Kt,a,pt),ce.target=$,ce.relatedTarget=an,_t=ce),an=_t,ut&&Kt)e:{for(ce=YS,Z=ut,k=Kt,$=0,_t=Z;_t;_t=ce(_t))$++;_t=0;for(var ae=k;ae;ae=ce(ae))_t++;for(;0<$-_t;)Z=ce(Z),$--;for(;0<_t-$;)k=ce(k),_t--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){ce=Z;break e}Z=ce(Z),k=ce(k)}ce=null}else ce=null;ut!==null&&b0(St,st,ut,ce,!1),Kt!==null&&an!==null&&b0(St,an,Kt,ce,!0)}}t:{if(st=tt?ps(tt):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Ve=Gp;else if(Bp(st))if(Vp)Ve=iS;else{Ve=eS;var ee=tS}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&Li(tt.elementType)&&(Ve=Gp):Ve=nS;if(Ve&&(Ve=Ve(e,tt))){Hp(St,Ve,a,pt);break t}ee&&ee(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&Pn(st,"number",st.value)}switch(ee=tt?ps(tt):window,e){case"focusin":(Bp(ee)||ee.contentEditable==="true")&&(Ks=ee,Ou=tt,po=null);break;case"focusout":po=Ou=Ks=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Kp(St,a,pt);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":Kp(St,a,pt)}var ye;if(Du)t:{switch(e){case"compositionstart":var Le="onCompositionStart";break t;case"compositionend":Le="onCompositionEnd";break t;case"compositionupdate":Le="onCompositionUpdate";break t}Le=void 0}else Zs?Ip(e,a)&&(Le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Op&&a.locale!=="ko"&&(Zs||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Zs&&(ye=wp()):(Oa=pt,Tu="value"in Oa?Oa.value:Oa.textContent,Zs=!0)),ee=hc(tt,Le),0<ee.length&&(Le=new Np(Le,e,null,a,pt),St.push({event:Le,listeners:ee}),ye?Le.data=ye:(ye=Fp(a),ye!==null&&(Le.data=ye)))),(ye=Zx?Kx(e,a):Qx(e,a))&&(Le=hc(tt,"onBeforeInput"),0<Le.length&&(ee=new Np("onBeforeInput","beforeinput",null,a,pt),St.push({event:ee,listeners:Le}),ee.data=ye)),VS(St,e,tt,a,pt)}M0(St,n)})}function Bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=so(e,a),u!=null&&o.unshift(Bo(e,u,h)),u=so(e,n),u!=null&&o.push(Bo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function YS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,H=A.alternate,tt=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||tt===null||(H=tt,u?(tt=so(a,h),tt!=null&&x.unshift(Bo(a,tt,H))):u||(tt=so(a,h),tt!=null&&x.push(Bo(a,tt,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var qS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function T0(e){return(typeof e=="string"?e:""+e).replace(qS,`
`).replace(jS,"")}function A0(e,n){return n=T0(n),T0(e)===n}function nn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||An(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&An(e,""+o);break;case"className":re(e,"class",o);break;case"tabIndex":re(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,a,o);break;case"style":Ys(e,o,h);break;case"data":if(n!=="object"){re(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&nn(e,n,"name",u.name,u,null),nn(e,n,"formEncType",u.formEncType,u,null),nn(e,n,"formMethod",u.formMethod,u,null),nn(e,n,"formTarget",u.formTarget,u,null)):(nn(e,n,"encType",u.encType,u,null),nn(e,n,"method",u.method,u,null),nn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mx.get(a)||a,$t(e,a,o))}}function oh(e,n,a,o,u,h){switch(a){case"style":Ys(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?An(e,o):(typeof o=="number"||typeof o=="bigint")&&An(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[je]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Vn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(e,n,h,x,a,null)}}u&&nn(e,n,"srcSet",a.srcSet,a,null),o&&nn(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var A=h=x=u=null,H=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":H=pt;break;case"defaultChecked":tt=pt;break;case"value":h=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:nn(e,n,o,pt,a,null)}}ia(e,h,A,H,tt,x,u,!1);return;case"select":we("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:nn(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?xi(e,!!o,n,!1):a!=null&&xi(e,!!o,a,!0);return;case"textarea":we("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:nn(e,n,x,A,a,null)}zn(e,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":nn(e,n,H,o,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Fo.length;o++)we(Fo[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(e,n,tt,o,a,null)}return;default:if(Li(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&oh(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&nn(e,n,A,o,a,null))}function ZS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,H=null,tt=null,pt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=St;default:o.hasOwnProperty(ut)||nn(e,n,ut,null,o,St)}}for(var st in o){var ut=o[st];if(St=a[st],o.hasOwnProperty(st)&&(ut!=null||St!=null))switch(st){case"type":h=ut;break;case"name":u=ut;break;case"checked":tt=ut;break;case"defaultChecked":pt=ut;break;case"value":x=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==St&&nn(e,n,st,ut,o,St)}}On(e,x,A,H,tt,pt,h,u);return;case"select":ut=x=A=st=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(h)||nn(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==H&&nn(e,n,u,h,o,H)}n=A,a=x,o=ut,st!=null?xi(e,!!a,st,!1):!!o!=!!a&&(n!=null?xi(e,!!a,n,!0):xi(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:nn(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&nn(e,n,x,u,o,h)}Qe(e,st,ut);return;case"option":for(var Kt in a)st=a[Kt],a.hasOwnProperty(Kt)&&st!=null&&!o.hasOwnProperty(Kt)&&(Kt==="selected"?e.selected=!1:nn(e,n,Kt,null,o,st));for(H in o)st=o[H],ut=a[H],o.hasOwnProperty(H)&&st!==ut&&(st!=null||ut!=null)&&(H==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":nn(e,n,H,st,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!o.hasOwnProperty(ce)&&nn(e,n,ce,null,o,st);for(tt in o)if(st=o[tt],ut=a[tt],o.hasOwnProperty(tt)&&st!==ut&&(st!=null||ut!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:nn(e,n,tt,st,o,ut)}return;default:if(Li(n)){for(var an in a)st=a[an],a.hasOwnProperty(an)&&st!==void 0&&!o.hasOwnProperty(an)&&oh(e,n,an,void 0,o,st);for(pt in o)st=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||st===ut||st===void 0&&ut===void 0||oh(e,n,pt,st,o,ut);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&nn(e,n,Z,null,o,st);for(St in o)st=o[St],ut=a[St],!o.hasOwnProperty(St)||st===ut||st==null&&ut==null||nn(e,n,St,st,o,ut)}function R0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&R0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],tt=H.startTime;if(tt>A)break;var pt=H.transferSize,St=H.initiatorType;pt&&R0(St)&&(H=H.responseEnd,x+=pt*(H<A?1:(A-tt)/(H-tt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lh=null,ch=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function uh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fh=null;function QS(){var e=window.event;return e&&e.type==="popstate"?e===fh?!1:(fh=e,!0):(fh=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(e){return U0.resolve(null).then(e).catch(ty)}:D0;function ty(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function N0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ho(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[ds]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Ho(e.ownerDocument.body);a=u}while(a);Er(n)}function L0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function hh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hh(a),ao(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ey(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ds])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function ny(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function O0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function dh(e){return e.data==="$?"||e.data==="$~"}function ph(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var mh=null;function P0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function I0(e,n,a){switch(n=dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ao(e)}var Ri=new Map,F0=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=G.d;G.d={f:ay,r:sy,D:ry,C:oy,L:ly,m:cy,X:fy,S:uy,M:hy};function ay(){var e=Sa.f(),n=sc();return e||n}function sy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?eg(n):Sa.r(e)}var Sr=typeof document>"u"?null:document;function B0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F0.has(u)||(F0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Vn(n,"link",e),R(n),o.head.appendChild(n)))}}function ry(e){Sa.D(e),B0("dns-prefetch",e,null)}function oy(e,n){Sa.C(e,n),B0("preconnect",e,n)}function ly(e,n,a){Sa.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+me(a.imageSizes)+'"]')):u+='[href="'+me(e)+'"]';var h=u;switch(n){case"style":h=yr(e);break;case"script":h=Mr(e)}Ri.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(h))||n==="script"&&o.querySelector(Vo(h))||(n=o.createElement("link"),Vn(n,"link",e),R(n),o.head.appendChild(n)))}}function cy(e,n){Sa.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+me(o)+'"][href="'+me(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Mr(e)}if(!Ri.has(h)&&(e=_({rel:"modulepreload",href:e},n),Ri.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(h)))return}o=a.createElement("link"),Vn(o,"link",e),R(o),a.head.appendChild(o)}}}function uy(e,n,a){Sa.S(e,n,a);var o=Sr;if(o&&e){var u=La(o).hoistableStyles,h=yr(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Go(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(h))&&gh(e,a);var H=x=o.createElement("link");R(H),Vn(H,"link",e),H._p=new Promise(function(tt,pt){H.onload=tt,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function fy(e,n){Sa.X(e,n);var a=Sr;if(a&&e){var o=La(a).hoistableScripts,u=Mr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=_({src:e,async:!0},n),(n=Ri.get(u))&&_h(e,n),h=a.createElement("script"),R(h),Vn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function hy(e,n){Sa.M(e,n);var a=Sr;if(a&&e){var o=La(a).hoistableScripts,u=Mr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=Ri.get(u))&&_h(e,n),h=a.createElement("script"),R(h),Vn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function H0(e,n,a,o){var u=(u=J.current)?pc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=La(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var h=La(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Go(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,a),h||dy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=La(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+me(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function G0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function dy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Vn(n,"link",a),R(n),e.head.appendChild(n))}function Mr(e){return'[src="'+me(e)+'"]'}function Vo(e){return"script[async]"+e}function V0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Vn(o,"style",u),mc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var h=e.querySelector(Go(u));if(h)return n.state.loading|=4,n.instance=h,R(h),h;o=G0(a),(u=Ri.get(u))&&gh(o,u),h=(e.ownerDocument||e).createElement("link"),R(h);var x=h;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Vn(h,"link",o),n.state.loading|=4,mc(h,a.precedence,e),n.instance=h;case"script":return h=Mr(a.src),(u=e.querySelector(Vo(h)))?(n.instance=u,R(u),u):(o=a,(u=Ri.get(h))&&(o=_({},a),_h(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Vn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,e));return n.instance}function mc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function _h(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gc=null;function k0(e,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ds]||h[de]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function X0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function my(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),h=n.querySelector(Go(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_c.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,R(h);return}h=n.ownerDocument||n,o=G0(o),(u=Ri.get(u))&&gh(o,u),h=h.createElement("link"),R(h);var x=h;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Vn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_c.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var vh=0;function gy(e,n){return e.stylesheets&&e.count===0&&xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&vh===0&&(vh=62500*KS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>vh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,n.forEach(_y,e),vc=null,_c.call(e))}function _y(e,n){if(!(n.state.loading&4)){var a=vc.get(e);if(a)var o=a.get(null);else{a=new Map,vc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ko={$$typeof:w,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function vy(e,n,a,o,u,h,x,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Y0(e,n,a,o,u,h,x,A,H,tt,pt,St){return e=new vy(e,n,a,x,H,tt,pt,St,A),n=1,h===!0&&(n|=24),h=ui(3,null,null,n),e.current=h,h.stateNode=e,n=Ku(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},tf(h),e}function q0(e){return e?(e=$s,e):$s}function j0(e,n,a,o,u,h){u=q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ga(e,o,n),a!==null&&(si(a,e,n),yo(a,e,n))}function Z0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function xh(e,n){Z0(e,n),(e=e.alternate)&&Z0(e,n)}function K0(e){if(e.tag===13||e.tag===31){var n=vs(e,67108864);n!==null&&si(n,e,67108864),xh(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var n=mi();n=Jt(n);var a=vs(e,n);a!==null&&si(a,e,n),xh(e,n)}}var Sc=!0;function xy(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=2,Sh(e,n,a,o)}finally{G.p=h,P.T=u}}function Sy(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=8,Sh(e,n,a,o)}finally{G.p=h,P.T=u}}function Sh(e,n,a,o){if(Sc){var u=yh(o);if(u===null)rh(e,n,o,yc,a),$0(e,o);else if(My(u,e,n,a,o))o.stopPropagation();else if($0(e,o),n&4&&-1<yy.indexOf(e)){for(;u!==null;){var h=Na(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Tt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Bt(x);A.entanglements[1]|=H,x&=~H}Wi(h),(Ye&6)===0&&(ic=b()+500,Io(0))}}break;case 31:case 13:A=vs(h,2),A!==null&&si(A,h,2),sc(),xh(h,2)}if(h=yh(o),h===null&&rh(e,n,o,yc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else rh(e,n,o,null,a)}}function yh(e){return e=Mu(e),Mh(e)}var yc=null;function Mh(e){if(yc=null,e=Ua(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yc=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case gt:return 2;case Mt:return 8;case ht:case Qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Eh=!1,Ja=null,$a=null,ts=null,Xo=new Map,Wo=new Map,es=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function Yo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&K0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function My(e,n,a,o,u){switch(n){case"focusin":return Ja=Yo(Ja,e,n,a,o,u),!0;case"dragenter":return $a=Yo($a,e,n,a,o,u),!0;case"mouseover":return ts=Yo(ts,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Xo.set(h,Yo(Xo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Wo.set(h,Yo(Wo.get(h)||null,e,n,a,o,u)),!0}return!1}function t_(e){var n=Ua(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ke(e.priority,function(){Q0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ke(e.priority,function(){Q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Na(a),n!==null&&K0(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){Mc(e)&&a.delete(n)}function Ey(){Eh=!1,Ja!==null&&Mc(Ja)&&(Ja=null),$a!==null&&Mc($a)&&($a=null),ts!==null&&Mc(ts)&&(ts=null),Xo.forEach(e_),Wo.forEach(e_)}function Ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Eh||(Eh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ey)))}var bc=null;function n_(e){bc!==e&&(bc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Mh(o||a)===null)continue;break}var h=Na(a);h!==null&&(e.splice(n,3),n-=3,yf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(H){return Ec(H,e)}Ja!==null&&Ec(Ja,e),$a!==null&&Ec($a,e),ts!==null&&Ec(ts,e),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[je]||null;if(typeof h=="function")x||n_(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[je]||null)A=x.formAction;else if(Mh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bh(e){this._internalRoot=e}Tc.prototype.render=bh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();j0(a,o,e,n,null,null)},Tc.prototype.unmount=bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;j0(e.current,2,null,e,null,null),sc(),n[mn]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&t_(e)}};var a_=t.version;if(a_!=="19.2.3")throw Error(s(527,a_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var by={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{At=Ac.inject(by),Rt=Ac}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=fg,h=hg,x=dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Y0(e,1,!1,null,null,a,o,null,u,h,x,i_),e[mn]=n.current,sh(e),new bh(n)},jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=fg,x=hg,A=dg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Y0(e,1,!0,n,a??null,o,u,H,h,x,A,i_),n.context=q0(null),a=n.current,o=mi(),o=Jt(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,V(n,a),Wi(n),e[mn]=n.current,sh(e),new Tc(n)},jo.version="19.2.3",jo}var p_;function Oy(){if(p_)return Rh.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=Ly(),Rh.exports}var Py=Oy();const fp="182",kr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,m_=1,Iy=2,nu=1,Fy=2,nl=3,hs=0,oi=1,Hi=2,Ra=0,Xr=1,g_=2,__=3,v_=4,By=5,Is=100,Hy=101,Gy=102,Vy=103,ky=104,Xy=200,Wy=201,Yy=202,qy=203,dd=204,pd=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tM=212,eM=213,nM=214,md=0,gd=1,_d=2,qr=3,vd=4,xd=5,Sd=6,yd=7,Lv=0,iM=1,aM=2,Ki=0,Ov=1,Pv=2,zv=3,Iv=4,Fv=5,Bv=6,Hv=7,Gv=300,Gs=301,jr=302,Md=303,Ed=304,mu=306,bd=1e3,Aa=1001,Td=1002,kn=1003,sM=1004,Rc=1005,jn=1006,Uh=1007,Bs=1008,vi=1009,Vv=1010,kv=1011,ol=1012,hp=1013,$i=1014,ji=1015,wa=1016,dp=1017,pp=1018,ll=1020,Xv=35902,Wv=35899,Yv=1021,qv=1022,Gi=1023,Da=1026,Hs=1027,jv=1028,mp=1029,Zr=1030,gp=1031,_p=1033,iu=33776,au=33777,su=33778,ru=33779,Ad=35840,Rd=35841,Cd=35842,wd=35843,Dd=36196,Ud=37492,Nd=37496,Ld=37488,Od=37489,Pd=37490,zd=37491,Id=37808,Fd=37809,Bd=37810,Hd=37811,Gd=37812,Vd=37813,kd=37814,Xd=37815,Wd=37816,Yd=37817,qd=37818,jd=37819,Zd=37820,Kd=37821,Qd=36492,Jd=36494,$d=36495,tp=36283,ep=36284,np=36285,ip=36286,rM=3200,Zv=0,oM=1,us="",wi="srgb",Kr="srgb-linear",lu="linear",tn="srgb",br=7680,x_=519,lM=512,cM=513,uM=514,vp=515,fM=516,hM=517,xp=518,dM=519,S_=35044,y_="300 es",Zi=2e3,cu=2001;function Kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function uu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=uu("canvas");return r.style.display="block",r}const M_={};function E_(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Be(...r){const t="THREE."+r.shift();console.error(t,...r)}function cl(...r){const t=r.join(" ");t in M_||(M_[t]=!0,he(...r))}function mM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let b_=1234567;const Wr=Math.PI/180,ul=180/Math.PI;function to(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function Re(r,t,i){return Math.max(t,Math.min(i,r))}function Sp(r,t){return(r%t+t)%t}function gM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function _M(r,t,i){return r!==t?(i-r)/(t-r):0}function rl(r,t,i){return(1-i)*r+i*t}function vM(r,t,i,s){return rl(r,t,1-Math.exp(-i*s))}function xM(r,t=1){return t-Math.abs(Sp(r,t*2)-t)}function SM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function yM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function MM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function EM(r,t){return r+Math.random()*(t-r)}function bM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(b_=r);let t=b_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AM(r){return r*Wr}function RM(r){return r*ul}function CM(r){return(r&r-1)===0&&r!==0}function wM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function UM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),S=f((t-s)/2),M=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*S,d*p);break;case"YZY":r.set(m*S,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*S,d*g,d*p);break;case"XZX":r.set(d*g,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*g,d*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Br(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qv={DEG2RAD:Wr,RAD2DEG:ul,generateUUID:to,clamp:Re,euclideanModulo:Sp,mapLinear:gM,inverseLerp:_M,lerp:rl,damp:vM,pingpong:xM,smoothstep:SM,smootherstep:yM,randInt:MM,randFloat:EM,randFloatSpread:bM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:CM,ceilPowerOfTwo:wM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:UM,normalize:Qn,denormalize:Br};class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==S||p!==M||g!==E){let y=m*S+p*M+g*E+_*T;y<0&&(S=-S,M=-M,E=-E,T=-T,y=-y);let v=1-d;if(y<.9995){const L=Math.acos(y),w=Math.sin(L);v=Math.sin(v*L)/w,d=Math.sin(d*L)/w,m=m*v+S*d,p=p*v+M*d,g=g*v+E*d,_=_*v+T*d}else{m=m*v+S*d,p=p*v+M*d,g=g*v+E*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],S=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*M-p*S,t[i+1]=m*E+g*S+p*_-d*M,t[i+2]=p*E+g*M+d*S-m*_,t[i+3]=g*E-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),S=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"YXZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"ZXY":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"ZYX":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"YZX":this._x=S*g*_+p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_-S*M*E;break;case"XZY":this._x=S*g*_-p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_+S*M*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(T_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(T_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nh=new q,T_=new Vs;class Me{constructor(t,i,s,l,c,f,d,m,p){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],M=s[5],E=s[8],T=l[0],y=l[3],v=l[6],L=l[1],w=l[4],D=l[7],F=l[2],B=l[5],I=l[8];return c[0]=f*T+d*L+m*F,c[3]=f*y+d*w+m*B,c[6]=f*v+d*D+m*I,c[1]=p*T+g*L+_*F,c[4]=p*y+g*w+_*B,c[7]=p*v+g*D+_*I,c[2]=S*T+M*L+E*F,c[5]=S*y+M*w+E*B,c[8]=S*v+M*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,S=d*m-g*c,M=p*c-f*m,E=i*_+s*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=S*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Lh.makeScale(t,i)),this}rotate(t){return this.premultiply(Lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new Me,A_=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const r={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===tn&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===tn&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Kr]:{primaries:t,whitePoint:s,transfer:lu,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:tn,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),r}const He=NM();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class LM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=uu("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=uu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ca(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let OM=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Oh(l[f].image)):c.push(Oh(l[f]))}else c=Oh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let PM=0;const Ph=new q;class $n extends Xs{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,s=Aa,l=Aa,c=jn,f=Bs,d=Gi,m=vi,p=$n.DEFAULT_ANISOTROPY,g=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=to(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bd:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case Td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bd:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case Td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Gv;$n.DEFAULT_ANISOTROPY=1;class vn{constructor(t=0,i=0,s=0,l=1){vn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],E=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,D=(M+1)/2,F=(v+1)/2,B=(g+S)/4,I=(_+T)/4,Q=(E+y)/4;return w>D&&w>F?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=B/s,c=I/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=Q/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=Q/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(S-g)*(S-g));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(_-T)/L,this.z=(S-g)/L,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends Xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new vn(0,0,t,i),this.scissorTest=!1,this.viewport=new vn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new $n(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends zM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jv extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(t.matrixWorld),this.union(Cc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),wc.subVectors(this.max,Zo),Ar.subVectors(t.a,Zo),Rr.subVectors(t.b,Zo),Cr.subVectors(t.c,Zo),is.subVectors(Rr,Ar),as.subVectors(Cr,Rr),Us.subVectors(Ar,Cr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Us.z,Us.y,is.z,0,-is.x,as.z,0,-as.x,Us.z,0,-Us.x,-is.y,is.x,0,-as.y,as.x,0,-Us.y,Us.x,0];return!zh(i,Ar,Rr,Cr,wc)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,Ar,Rr,Cr,wc))?!1:(Dc.crossVectors(is,as),i=[Dc.x,Dc.y,Dc.z],zh(i,Ar,Rr,Cr,wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new q,new q,new q,new q,new q,new q,new q,new q],Ii=new q,Cc=new Ws,Ar=new q,Rr=new q,Cr=new q,is=new q,as=new q,Us=new q,Zo=new q,wc=new q,Dc=new q,Ns=new q;function zh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ns.fromArray(r,c);const d=l.x*Math.abs(Ns.x)+l.y*Math.abs(Ns.y)+l.z*Math.abs(Ns.z),m=t.dot(Ns),p=i.dot(Ns),g=s.dot(Ns);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const FM=new Ws,Ko=new q,Ih=new q;class gu{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):FM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Ih)),this.expandByPoint(Ko.copy(t.center).sub(Ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ma=new q,Fh=new q,Uc=new q,ss=new q,Bh=new q,Nc=new q,Hh=new q;class _u{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Fh.copy(t).add(i).multiplyScalar(.5),Uc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(Fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Uc),d=ss.dot(this.direction),m=-ss.dot(Uc),p=ss.lengthSq(),g=Math.abs(1-f*f);let _,S,M,E;if(g>0)if(_=f*m-d,S=f*d-m,E=c*g,_>=0)if(S>=-E)if(S<=E){const T=1/g;_*=T,S*=T,M=_*(_+f*S+2*d)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-f*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(f*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Fh).addScaledVector(Uc,S),M}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){Bh.subVectors(i,t),Nc.subVectors(s,t),Hh.crossVectors(Bh,Nc);let f=this.direction.dot(Hh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ss.subVectors(this.origin,t);const m=d*this.direction.dot(Nc.crossVectors(ss,Nc));if(m<0)return null;const p=d*this.direction.dot(Bh.cross(ss));if(p<0||m+p>f)return null;const g=-d*ss.dot(Hh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,i,s,l,c,f,d,m,p,g,_,S,M,E,T,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,S,M,E,T,y)}set(t,i,s,l,c,f,d,m,p,g,_,S,M,E,T,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),f=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,M=f*_,E=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=S-T*p,i[9]=-d*m,i[2]=T-S*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,E=p*g,T=p*_;i[0]=S+T*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=T+S*d,i[10]=f*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,E=p*g,T=p*_;i[0]=S-T*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=T-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const S=f*g,M=f*_,E=d*g,T=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=S*p+T,i[1]=m*_,i[5]=T*p+S,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const S=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-S*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=S-T*_}else if(t.order==="XZY"){const S=f*m,M=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+T,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=T*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BM,t,HM)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),rs.crossVectors(s,gi),rs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),rs.crossVectors(s,gi)),rs.normalize(),Lc.crossVectors(gi,rs),l[0]=rs.x,l[4]=Lc.x,l[8]=gi.x,l[1]=rs.y,l[5]=Lc.y,l[9]=gi.y,l[2]=rs.z,l[6]=Lc.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],M=s[13],E=s[2],T=s[6],y=s[10],v=s[14],L=s[3],w=s[7],D=s[11],F=s[15],B=l[0],I=l[4],Q=l[8],C=l[12],U=l[1],X=l[5],it=l[9],rt=l[13],ct=l[2],ot=l[6],P=l[10],G=l[14],et=l[3],bt=l[7],mt=l[11],O=l[15];return c[0]=f*B+d*U+m*ct+p*et,c[4]=f*I+d*X+m*ot+p*bt,c[8]=f*Q+d*it+m*P+p*mt,c[12]=f*C+d*rt+m*G+p*O,c[1]=g*B+_*U+S*ct+M*et,c[5]=g*I+_*X+S*ot+M*bt,c[9]=g*Q+_*it+S*P+M*mt,c[13]=g*C+_*rt+S*G+M*O,c[2]=E*B+T*U+y*ct+v*et,c[6]=E*I+T*X+y*ot+v*bt,c[10]=E*Q+T*it+y*P+v*mt,c[14]=E*C+T*rt+y*G+v*O,c[3]=L*B+w*U+D*ct+F*et,c[7]=L*I+w*X+D*ot+F*bt,c[11]=L*Q+w*it+D*P+F*mt,c[15]=L*C+w*rt+D*G+F*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],E=t[3],T=t[7],y=t[11],v=t[15],L=m*M-p*S,w=d*M-p*_,D=d*S-m*_,F=f*M-p*g,B=f*S-m*g,I=f*_-d*g;return i*(T*L-y*w+v*D)-s*(E*L-y*F+v*B)+l*(E*w-T*F+v*I)-c*(E*D-T*B+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],L=_*y*p-T*S*p+T*m*M-d*y*M-_*m*v+d*S*v,w=E*S*p-g*y*p-E*m*M+f*y*M+g*m*v-f*S*v,D=g*T*p-E*_*p+E*d*M-f*T*M-g*d*v+f*_*v,F=E*_*m-g*T*m-E*d*S+f*T*S+g*d*y-f*_*y,B=i*L+s*w+l*D+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=L*I,t[1]=(T*S*c-_*y*c-T*l*M+s*y*M+_*l*v-s*S*v)*I,t[2]=(d*y*c-T*m*c+T*l*p-s*y*p-d*l*v+s*m*v)*I,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*M-s*m*M)*I,t[4]=w*I,t[5]=(g*y*c-E*S*c+E*l*M-i*y*M-g*l*v+i*S*v)*I,t[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*v-i*m*v)*I,t[7]=(f*S*c-g*m*c+g*l*p-i*S*p-f*l*M+i*m*M)*I,t[8]=D*I,t[9]=(E*_*c-g*T*c-E*s*M+i*T*M+g*s*v-i*_*v)*I,t[10]=(f*T*c-E*d*c+E*s*p-i*T*p-f*s*v+i*d*v)*I,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*M-i*d*M)*I,t[12]=F*I,t[13]=(g*T*l-E*_*l+E*s*S-i*T*S-g*s*y+i*_*y)*I,t[14]=(E*d*l-f*T*l-E*s*m+i*T*m+f*s*y-i*d*y)*I,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*S+i*d*S)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,S=c*p,M=c*g,E=c*_,T=f*g,y=f*_,v=d*_,L=m*p,w=m*g,D=m*_,F=s.x,B=s.y,I=s.z;return l[0]=(1-(T+v))*F,l[1]=(M+D)*F,l[2]=(E-w)*F,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(S+v))*B,l[6]=(y+L)*B,l[7]=0,l[8]=(E+w)*I,l[9]=(y-L)*I,l[10]=(1-(S+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=wr.set(l[0],l[1],l[2]).length();const f=wr.set(l[4],l[5],l[6]).length(),d=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Fi.copy(this);const p=1/c,g=1/f,_=1/d;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(d===Zi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===cu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(d===Zi)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===cu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const wr=new q,Fi=new dn,BM=new q(0,0,0),HM=new q(1,1,1),rs=new q,Lc=new q,gi=new q,C_=new dn,w_=new Vs;class ta{constructor(t=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return C_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return w_.setFromEuler(this),this.setFromQuaternion(w_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GM=0;const D_=new q,Dr=new Vs,Ea=new dn,Oc=new q,Qo=new q,VM=new q,kM=new Vs,U_=new q(1,0,0),N_=new q(0,1,0),L_=new q(0,0,1),O_={type:"added"},XM={type:"removed"},Ur={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Ln extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new q,i=new ta,s=new Vs,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new Me}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(U_,t)}rotateY(t){return this.rotateOnAxis(N_,t)}rotateZ(t){return this.rotateOnAxis(L_,t)}translateOnAxis(t,i){return D_.copy(t).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(U_,t)}translateY(t){return this.translateOnAxis(N_,t)}translateZ(t){return this.translateOnAxis(L_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Oc.copy(t):Oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Qo,Oc,this.up):Ea.lookAt(Oc,Qo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(XM),Gh.child=t,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,VM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,kM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new q(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new q,ba=new q,Vh=new q,Ta=new q,Nr=new q,Lr=new q,P_=new q,kh=new q,Xh=new q,Wh=new q,Yh=new vn,qh=new vn,jh=new vn;class Ui{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),ba.subVectors(s,i),Vh.subVectors(t,i);const f=Bi.dot(Bi),d=Bi.dot(ba),m=Bi.dot(Vh),p=ba.dot(ba),g=ba.dot(Vh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,E=(f*g-d*m)*S;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(d,Ta.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Yh.setScalar(0),qh.setScalar(0),jh.setScalar(0),Yh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Yh,c.x),f.addScaledVector(qh,c.y),f.addScaledVector(jh,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),ba.subVectors(t,i),Bi.cross(ba).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Bi.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Nr.subVectors(l,s),Lr.subVectors(c,s),kh.subVectors(t,s);const m=Nr.dot(kh),p=Lr.dot(kh);if(m<=0&&p<=0)return i.copy(s);Xh.subVectors(t,l);const g=Nr.dot(Xh),_=Lr.dot(Xh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Nr,f);Wh.subVectors(t,c);const M=Nr.dot(Wh),E=Lr.dot(Wh);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Lr,d);const y=g*E-M*_;if(y<=0&&_-g>=0&&M-E>=0)return P_.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(P_,d);const v=1/(y+T+S);return f=T*v,d=S*v,i.copy(s).addScaledVector(Nr,f).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Zh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=He.workingColorSpace){return this.r=t,this.g=i,this.b=s,He.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=He.workingColorSpace){if(t=Sp(t,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Zh(f,c,t+1/3),this.g=Zh(f,c,t),this.b=Zh(f,c,t-1/3)}return He.colorSpaceToWorking(this,l),this}setStyle(t,i=wi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=wi){const s=$v[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return He.workingToColorSpace(qn.copy(this),t),Math.round(Re(qn.r*255,0,255))*65536+Math.round(Re(qn.g*255,0,255))*256+Math.round(Re(qn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=He.workingColorSpace){He.workingToColorSpace(qn.copy(this),i);const s=qn.r,l=qn.g,c=qn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=He.workingColorSpace){return He.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=wi){He.workingToColorSpace(qn.copy(this),t);const i=qn.r,s=qn.g,l=qn.b;return t!==wi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(Pc);const s=rl(os.h,Pc.h,i),l=rl(os.s,Pc.s,i),c=rl(os.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Oe;Oe.NAMES=$v;let WM=0;class eo extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Xr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==dd&&(s.blendSrc=this.blendSrc),this.blendDst!==pd&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tx extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tn=new q,zc=new pe;let YM=0;class Ji{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=S_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Br(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Br(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Br(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Br(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Br(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==S_&&(t.usage=this.usage),t}}class ex extends Ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class nx extends Ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Xn extends Ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}let qM=0;const Ci=new dn,Kh=new Ln,Or=new q,_i=new Ws,Jo=new Ws,Nn=new q;class li extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kv(t)?nx:ex)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,s){return Ci.makeTranslation(t,i,s),this.applyMatrix4(Ci),this}scale(t,i,s){return Ci.makeScale(t,i,s),this.applyMatrix4(Ci),this}lookAt(t){return Kh.lookAt(t),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Xn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(_i.min,Jo.min),_i.expandByPoint(Nn),Nn.addVectors(_i.max,Jo.max),_i.expandByPoint(Nn)):(_i.expandByPoint(Jo.min),_i.expandByPoint(Jo.max))}_i.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Nn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),Nn.add(Or)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new q,m[Q]=new q;const p=new q,g=new q,_=new q,S=new pe,M=new pe,E=new pe,T=new q,y=new q;function v(Q,C,U){p.fromBufferAttribute(s,Q),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,U),S.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,U),g.sub(p),_.sub(p),M.sub(S),E.sub(S);const X=1/(M.x*E.y-E.x*M.y);isFinite(X)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(X),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(X),d[Q].add(T),d[C].add(T),d[U].add(T),m[Q].add(y),m[C].add(y),m[U].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let Q=0,C=L.length;Q<C;++Q){const U=L[Q],X=U.start,it=U.count;for(let rt=X,ct=X+it;rt<ct;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const w=new q,D=new q,F=new q,B=new q;function I(Q){F.fromBufferAttribute(l,Q),B.copy(F);const C=d[Q];w.copy(C),w.sub(F.multiplyScalar(F.dot(C))).normalize(),D.crossVectors(B,C);const X=D.dot(m[Q])<0?-1:1;f.setXYZW(Q,w.x,w.y,w.z,X)}for(let Q=0,C=L.length;Q<C;++Q){const U=L[Q],X=U.start,it=U.count;for(let rt=X,ct=X+it;rt<ct;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new q,c=new q,f=new q,d=new q,m=new q,p=new q,g=new q,_=new q;if(t)for(let S=0,M=t.count;S<M;S+=3){const E=t.getX(S+0),T=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,E=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*g;for(let v=0;v<g;v++)S[E++]=p[M++]}return new Ji(S,g,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z_=new dn,Ls=new _u,Ic=new gu,I_=new q,Fc=new q,Bc=new q,Hc=new q,Qh=new q,Gc=new q,F_=new q,Vc=new q;class Ni extends Ln{constructor(t=new li,i=new tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Qh.fromBufferAttribute(_,t),f?Gc.addScaledVector(Qh,g):Gc.addScaledVector(Qh.sub(i),g))}i.add(Gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ic,I_)===null||Ls.origin.distanceToSquared(I_)>(t.far-t.near)**2))&&(z_.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(z_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const y=S[E],v=f[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,F=w;D<F;D+=3){const B=d.getX(D),I=d.getX(D+1),Q=d.getX(D+2);l=kc(this,v,t,s,p,g,_,B,I,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const L=d.getX(y),w=d.getX(y+1),D=d.getX(y+2);l=kc(this,f,t,s,p,g,_,L,w,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const y=S[E],v=f[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,F=w;D<F;D+=3){const B=D,I=D+1,Q=D+2;l=kc(this,v,t,s,p,g,_,B,I,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const L=y,w=y+1,D=y+2;l=kc(this,f,t,s,p,g,_,L,w,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function jM(r,t,i,s,l,c,f,d){let m;if(t.side===oi?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===hs,d),m===null)return null;Vc.copy(d),Vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Fc),r.getVertexPosition(m,Bc),r.getVertexPosition(p,Hc);const g=jM(r,t,i,s,Fc,Bc,Hc,F_);if(g){const _=new q;Ui.getBarycoord(F_,Fc,Bc,Hc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,d,m,p,_,new pe)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,m,p,_,new pe)),f&&(g.normal=Ui.getInterpolatedAttribute(f,d,m,p,_,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new q,materialIndex:0};Ui.getNormal(Fc,Bc,Hc,S.normal),g.face=S,g.barycoord=_}return g}class gl extends li{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(_,2));function E(T,y,v,L,w,D,F,B,I,Q,C){const U=D/I,X=F/Q,it=D/2,rt=F/2,ct=B/2,ot=I+1,P=Q+1;let G=0,et=0;const bt=new q;for(let mt=0;mt<P;mt++){const O=mt*X-rt;for(let nt=0;nt<ot;nt++){const vt=nt*U-it;bt[T]=vt*L,bt[y]=O*w,bt[v]=ct,p.push(bt.x,bt.y,bt.z),bt[T]=0,bt[y]=0,bt[v]=B>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push(nt/I),_.push(1-mt/Q),G+=1}}for(let mt=0;mt<Q;mt++)for(let O=0;O<I;O++){const nt=S+O+ot*mt,vt=S+O+ot*(mt+1),wt=S+(O+1)+ot*(mt+1),Xt=S+(O+1)+ot*mt;m.push(nt,vt,Xt),m.push(vt,wt,Xt),et+=6}d.addGroup(M,et,C),M+=et,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Jn(r){const t={};for(let i=0;i<r.length;i++){const s=Qr(r[i]);for(const l in s)t[l]=s[l]}return t}function ZM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ix(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}const KM={clone:Qr,merge:Jn};var QM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QM,this.fragmentShader=JM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=ZM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ax extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new q,B_=new pe,H_=new pe;class Di extends ax{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,B_,H_),i.subVectors(H_,B_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Pr=-90,zr=1;class $M extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Pr,zr,t,i);l.layers=this.layers,this.add(l);const c=new Di(Pr,zr,t,i);c.layers=this.layers,this.add(c);const f=new Di(Pr,zr,t,i);f.layers=this.layers,this.add(f);const d=new Di(Pr,zr,t,i);d.layers=this.layers,this.add(d);const m=new Di(Pr,zr,t,i);m.layers=this.layers,this.add(m);const p=new Di(Pr,zr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class sx extends $n{constructor(t=[],i=Gs,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rx extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Ra});c.uniforms.tEquirect.value=i;const f=new Ni(l,c),d=i.minFilter;return i.minFilter===Bs&&(i.minFilter=jn),new $M(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class il extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new il;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class eE extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class nE extends $n{constructor(t=null,i=1,s=1,l,c,f,d,m,p=kn,g=kn,_,S){super(null,f,d,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new q,iE=new q,aE=new Me;class cs{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$h.subVectors(s,i).cross(iE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta($h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||aE.getNormalMatrix(t),l=this.coplanarPoint($h).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new gu,sE=new pe(.5,.5),Xc=new q;class Ep{constructor(t=new cs,i=new cs,s=new cs,l=new cs,c=new cs,f=new cs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],M=c[7],E=c[8],T=c[9],y=c[10],v=c[11],L=c[12],w=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-f,M-g,v-E,F-L).normalize(),l[1].setComponents(p+f,M+g,v+E,F+L).normalize(),l[2].setComponents(p+d,M+_,v+T,F+w).normalize(),l[3].setComponents(p-d,M-_,v-T,F-w).normalize(),s)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,v-y,F-D).normalize();else if(l[4].setComponents(p-m,M-S,v-y,F-D).normalize(),i===Zi)l[5].setComponents(p+m,M+S,v+y,F+D).normalize();else if(i===cu)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=sE.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?t.max.x:t.min.x,Xc.y=l.normal.y>0?t.max.y:t.min.y,Xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fl extends eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new q,hu=new q,G_=new dn,$o=new _u,Wc=new gu,td=new q,V_=new q;class rE extends Ln{constructor(t=new li,i=new fl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new Xn(s,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,t.ray.intersectsSphere(Wc)===!1)return;G_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(G_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,S=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=M,y=E-1;T<y;T+=p){const v=g.getX(T),L=g.getX(T+1),w=Yc(this,t,$o,m,v,L,T);w&&i.push(w)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(M),v=Yc(this,t,$o,m,T,y,E-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),E=Math.min(S.count,f.start+f.count);for(let T=M,y=E-1;T<y;T+=p){const v=Yc(this,t,$o,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Yc(this,t,$o,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Yc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(fu.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(fu,hu,td,V_)>s)return;td.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(td);if(!(p<t.near||p>t.far))return{distance:p,point:V_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const k_=new q,X_=new q;class du extends rE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)k_.fromBufferAttribute(i,l),X_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+k_.distanceTo(X_);t.setAttribute("lineDistance",new Xn(s,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hl extends $n{constructor(t,i,s=$i,l,c,f,d=kn,m=kn,p,g=Da,_=1){if(g!==Da&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oE extends hl{constructor(t,i=$i,s=Gs,l,c,f=kn,d=kn,m,p=Da){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ox extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const qc=new q,jc=new q,ed=new q,Zc=new Ui;class W_ extends li{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Wr*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),S={},M=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:y,c:v}=Zc;if(T.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Zc.getNormal(ed),_[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let L=0;L<3;L++){const w=(L+1)%3,D=_[L],F=_[w],B=Zc[g[L]],I=Zc[g[w]],Q=`${D}_${F}`,C=`${F}_${D}`;C in S&&S[C]?(ed.dot(S[C].normal)<=c&&(M.push(B.x,B.y,B.z),M.push(I.x,I.y,I.z)),S[C]=null):Q in S||(S[Q]={index0:p[L],index1:p[w],normal:ed.clone()})}}for(const E in S)if(S[E]){const{index0:T,index1:y}=S[E];qc.fromBufferAttribute(d,T),jc.fromBufferAttribute(d,y),M.push(qc.x,qc.y,qc.z),M.push(jc.x,jc.y,jc.z)}this.setAttribute("position",new Xn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function lE(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=lx(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=dE(r,t,c,i)),r.length>80*i){d=r[0],m=r[1];let g=d,_=m;for(let S=i;S<l;S+=i){const M=r[S],E=r[S+1];M<d&&(d=M),E<m&&(m=E),M>g&&(g=M),E>_&&(_=E)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return dl(c,f,i,d,m,p,0),f}function lx(r,t,i,s,l){let c;if(l===bE(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=Y_(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=Y_(f/s|0,r[f],r[f+1],c);return c&&Jr(c,c.next)&&(ml(c),c=c.next),c}function ks(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Jr(i,i.next)||pn(i.prev,i,i.next)===0)){if(ml(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function dl(r,t,i,s,l,c,f){if(!r)return;!f&&c&&vE(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?uE(r,s,l,c):cE(r)){t.push(m.i,r.i,p.i),ml(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=fE(ks(r),t),dl(r,t,i,s,l,c,2)):f===2&&hE(r,t,i,s,l,c):dl(ks(r),t,i,s,l,c,1);break}}}function cE(r){const t=r.prev,i=r,s=r.next;if(pn(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,g=Math.min(l,c,f),_=Math.min(d,m,p),S=Math.max(l,c,f),M=Math.max(d,m,p);let E=s.next;for(;E!==t;){if(E.x>=g&&E.x<=S&&E.y>=_&&E.y<=M&&al(l,d,c,m,f,p,E.x,E.y)&&pn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function uE(r,t,i,s){const l=r.prev,c=r,f=r.next;if(pn(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,g=l.y,_=c.y,S=f.y,M=Math.min(d,m,p),E=Math.min(g,_,S),T=Math.max(d,m,p),y=Math.max(g,_,S),v=ap(M,E,t,i,s),L=ap(T,y,t,i,s);let w=r.prevZ,D=r.nextZ;for(;w&&w.z>=v&&D&&D.z<=L;){if(w.x>=M&&w.x<=T&&w.y>=E&&w.y<=y&&w!==l&&w!==f&&al(d,g,m,_,p,S,w.x,w.y)&&pn(w.prev,w,w.next)>=0||(w=w.prevZ,D.x>=M&&D.x<=T&&D.y>=E&&D.y<=y&&D!==l&&D!==f&&al(d,g,m,_,p,S,D.x,D.y)&&pn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;w&&w.z>=v;){if(w.x>=M&&w.x<=T&&w.y>=E&&w.y<=y&&w!==l&&w!==f&&al(d,g,m,_,p,S,w.x,w.y)&&pn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;D&&D.z<=L;){if(D.x>=M&&D.x<=T&&D.y>=E&&D.y<=y&&D!==l&&D!==f&&al(d,g,m,_,p,S,D.x,D.y)&&pn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function fE(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Jr(s,l)&&ux(s,i,i.next,l)&&pl(s,l)&&pl(l,s)&&(t.push(s.i,i.i,l.i),ml(i),ml(i.next),i=r=l),i=i.next}while(i!==r);return ks(i)}function hE(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&yE(f,d)){let m=fx(f,d);f=ks(f,f.next),m=ks(m,m.next),dl(f,t,i,s,l,c,0),dl(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function dE(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=lx(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(SE(p))}l.sort(pE);for(let c=0;c<l.length;c++)i=mE(l[c],i);return i}function pE(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function mE(r,t){const i=gE(r,t);if(!i)return t;const s=fx(i,r);return ks(s,s.next),ks(i,i.next)}function gE(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Jr(r,i))return i;do{if(Jr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const _=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=s&&_>c&&(c=_,f=i.x<i.next.x?i:i.next,_===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let g=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&cx(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const _=Math.abs(l-i.y)/(s-i.x);pl(i,r)&&(_<g||_===g&&(i.x>f.x||i.x===f.x&&_E(f,i)))&&(f=i,g=_)}i=i.next}while(i!==d);return f}function _E(r,t){return pn(r.prev,r,t.prev)<0&&pn(t.next,r,r.next)<0}function vE(r,t,i,s){let l=r;do l.z===0&&(l.z=ap(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,xE(l)}function xE(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function ap(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function SE(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function cx(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function al(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&cx(r,t,i,s,l,c,f,d)}function yE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!ME(r,t)&&(pl(r,t)&&pl(t,r)&&EE(r,t)&&(pn(r.prev,r,t.prev)||pn(r,t.prev,t))||Jr(r,t)&&pn(r.prev,r,r.next)>0&&pn(t.prev,t,t.next)>0)}function pn(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Jr(r,t){return r.x===t.x&&r.y===t.y}function ux(r,t,i,s){const l=Qc(pn(r,t,i)),c=Qc(pn(r,t,s)),f=Qc(pn(i,s,r)),d=Qc(pn(i,s,t));return!!(l!==c&&f!==d||l===0&&Kc(r,i,t)||c===0&&Kc(r,s,t)||f===0&&Kc(i,r,s)||d===0&&Kc(i,t,s))}function Kc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Qc(r){return r>0?1:r<0?-1:0}function ME(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&ux(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function pl(r,t){return pn(r.prev,r,r.next)<0?pn(r,t,r.next)>=0&&pn(r,r.prev,t)>=0:pn(r,t,r.prev)<0||pn(r,r.next,t)<0}function EE(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function fx(r,t){const i=sp(r.i,r.x,r.y),s=sp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Y_(r,t,i,s){const l=sp(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function ml(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sp(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bE(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class TE{static triangulate(t,i,s=2){return lE(t,i,s)}}class bp{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return bp.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];q_(t),j_(s,t);let f=t.length;i.forEach(q_);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,j_(s,i[m]);const d=TE.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function q_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function j_(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class vu extends li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const L=v*S-f;for(let w=0;w<p;w++){const D=w*_-c;E.push(D,-L,0),T.push(0,0,1),y.push(w/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const w=L+p*v,D=L+p*(v+1),F=L+1+p*(v+1),B=L+1+p*v;M.push(w,D,B),M.push(D,F,B)}this.setIndex(M),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(T,3)),this.setAttribute("uv",new Xn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.widthSegments,t.heightSegments)}}class AE extends ea{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Z_ extends eo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class RE extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CE extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hx extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const nd=new dn,K_=new q,Q_=new q;class wE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tp extends ax{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class DE extends wE{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UE extends hx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new DE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class NE extends hx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class LE extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const J_=new dn;class OE{constructor(t,i,s=0,l=1/0){this.ray=new _u(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,i=!0,s=[]){return rp(t,this,s,i),s.sort($_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)rp(t[l],this,s,i);return s.sort($_),s}}function $_(r,t){return r.distance-t.distance}function rp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)rp(c[f],t,i,!0)}}class tv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Re(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PE extends du{constructor(t=10,i=10,s=4473924,l=8947848){s=new Oe(s),l=new Oe(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let S=0,M=0,E=-d;S<=i;S++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const T=S===c?s:l;T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3}const g=new li;g.setAttribute("position",new Xn(m,3)),g.setAttribute("color",new Xn(p,3));const _=new fl({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zE extends du{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new li;l.setAttribute("position",new Xn(i,3)),l.setAttribute("color",new Xn(s,3));const c=new fl({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new Oe,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IE extends Xs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){he("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ev(r,t,i,s){const l=FE(s);switch(i){case Yv:return r*t;case jv:return r*t/l.components*l.byteLength;case mp:return r*t/l.components*l.byteLength;case Zr:return r*t*2/l.components*l.byteLength;case gp:return r*t*2/l.components*l.byteLength;case qv:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case _p:return r*t*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:case wd:return Math.max(r,16)*Math.max(t,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(t,8)/2;case Dd:case Ud:case Ld:case Od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nd:case Pd:case zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qd:case Jd:case $d:return Math.ceil(r/4)*Math.ceil(t/4)*16;case tp:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*8;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FE(r){switch(r){case vi:case Vv:return{byteLength:1,components:1};case ol:case kv:case wa:return{byteLength:2,components:1};case dp:case pp:return{byteLength:2,components:4};case $i:case hp:case ji:return{byteLength:4,components:1};case Xv:case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);function dx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function BE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<_.length;M++){const E=_[S],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++S,_[S]=T)}_.length=S+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GE=`#ifdef USE_ALPHAHASH
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
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YE=`#ifdef USE_AOMAP
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
#endif`,qE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jE=`#ifdef USE_BATCHING
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
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$E=`#ifdef USE_IRIDESCENCE
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
#endif`,tb=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cb=`#define PI 3.141592653589793
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
} // validated`,ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
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
#endif`,Fb=`uniform sampler2D dfgLUT;
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
}`,Bb=`
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,nT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lT=`#ifdef USE_NORMALMAP
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
#endif`,cT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ET=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bT=`float getShadowMask() {
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
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AT=`#ifdef USE_SKINNING
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
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
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
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
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
#endif`,OT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
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
}`,YT=`#if DEPTH_PACKING == 3200
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
}`,qT=`#define DISTANCE
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
}`,jT=`#define DISTANCE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
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
}`,JT=`uniform vec3 diffuse;
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
}`,$T=`#include <common>
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
}`,tA=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,nA=`#define LAMBERT
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
}`,iA=`#define MATCAP
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
}`,aA=`#define MATCAP
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
}`,sA=`#define NORMAL
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
}`,rA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,lA=`#define PHONG
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
}`,cA=`#define STANDARD
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
}`,uA=`#define STANDARD
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
}`,fA=`#define TOON
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
}`,hA=`#define TOON
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
}`,dA=`uniform float size;
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#include <common>
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
}`,gA=`uniform vec3 color;
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
}`,_A=`uniform float rotation;
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
}`,vA=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:HE,alphahash_pars_fragment:GE,alphamap_fragment:VE,alphamap_pars_fragment:kE,alphatest_fragment:XE,alphatest_pars_fragment:WE,aomap_fragment:YE,aomap_pars_fragment:qE,batching_pars_vertex:jE,batching_vertex:ZE,begin_vertex:KE,beginnormal_vertex:QE,bsdfs:JE,iridescence_fragment:$E,bumpmap_pars_fragment:tb,clipping_planes_fragment:eb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:ab,color_fragment:sb,color_pars_fragment:rb,color_pars_vertex:ob,color_vertex:lb,common:cb,cube_uv_reflection_fragment:ub,defaultnormal_vertex:fb,displacementmap_pars_vertex:hb,displacementmap_vertex:db,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:gb,colorspace_pars_fragment:_b,envmap_fragment:vb,envmap_common_pars_fragment:xb,envmap_pars_fragment:Sb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Nb,envmap_vertex:Mb,fog_vertex:Eb,fog_pars_vertex:bb,fog_fragment:Tb,fog_pars_fragment:Ab,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:Cb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Db,lights_pars_begin:Ub,lights_toon_fragment:Lb,lights_toon_pars_fragment:Ob,lights_phong_fragment:Pb,lights_phong_pars_fragment:zb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Fb,lights_fragment_begin:Bb,lights_fragment_maps:Hb,lights_fragment_end:Gb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Xb,logdepthbuf_vertex:Wb,map_fragment:Yb,map_pars_fragment:qb,map_particle_fragment:jb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:Qb,morphinstance_vertex:Jb,morphcolor_vertex:$b,morphnormal_vertex:tT,morphtarget_pars_vertex:eT,morphtarget_vertex:nT,normal_fragment_begin:iT,normal_fragment_maps:aT,normal_pars_fragment:sT,normal_pars_vertex:rT,normal_vertex:oT,normalmap_pars_fragment:lT,clearcoat_normal_fragment_begin:cT,clearcoat_normal_fragment_maps:uT,clearcoat_pars_fragment:fT,iridescence_pars_fragment:hT,opaque_fragment:dT,packing:pT,premultiplied_alpha_fragment:mT,project_vertex:gT,dithering_fragment:_T,dithering_pars_fragment:vT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:yT,shadowmap_pars_vertex:MT,shadowmap_vertex:ET,shadowmask_pars_fragment:bT,skinbase_vertex:TT,skinning_pars_vertex:AT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:wT,specularmap_pars_fragment:DT,tonemapping_fragment:UT,tonemapping_pars_fragment:NT,transmission_fragment:LT,transmission_pars_fragment:OT,uv_pars_fragment:PT,uv_pars_vertex:zT,uv_vertex:IT,worldpos_vertex:FT,background_vert:BT,background_frag:HT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:kT,cube_frag:XT,depth_vert:WT,depth_frag:YT,distance_vert:qT,distance_frag:jT,equirect_vert:ZT,equirect_frag:KT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:$T,meshbasic_frag:tA,meshlambert_vert:eA,meshlambert_frag:nA,meshmatcap_vert:iA,meshmatcap_frag:aA,meshnormal_vert:sA,meshnormal_frag:rA,meshphong_vert:oA,meshphong_frag:lA,meshphysical_vert:cA,meshphysical_frag:uA,meshtoon_vert:fA,meshtoon_frag:hA,points_vert:dA,points_frag:pA,shadow_vert:mA,shadow_frag:gA,sprite_vert:_A,sprite_frag:vA},Vt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},qi={basic:{uniforms:Jn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Jn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Jn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Jn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Jn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Jn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Jn([Vt.points,Vt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Jn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Jn([Vt.common,Vt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Jn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Jn([Vt.sprite,Vt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:Jn([Vt.common,Vt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:Jn([Vt.lights,Vt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};qi.physical={uniforms:Jn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Jc={r:0,b:0,g:0},Ps=new ta,xA=new dn;function SA(r,t,i,s,l,c,f){const d=new Oe(0);let m=c===!0?0:1,p,g,_=null,S=0,M=null;function E(w){let D=w.isScene===!0?w.background:null;return D&&D.isTexture&&(D=(w.backgroundBlurriness>0?i:t).get(D)),D}function T(w){let D=!1;const F=E(w);F===null?v(d,m):F&&F.isColor&&(v(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===mu)?(g===void 0&&(g=new Ni(new gl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Qr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ps.copy(D.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(Ps)),g.material.toneMapped=He.getTransfer(F.colorSpace)!==tn,(_!==F||S!==F.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,S=F.version,M=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ni(new vu(2,2),new ea({name:"BackgroundMaterial",uniforms:Qr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=He.getTransfer(F.colorSpace)!==tn,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,M=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,D){w.getRGB(Jc,ix(r)),s.buffers.color.setClear(Jc.r,Jc.g,Jc.b,D,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,D=1){d.set(w),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(d,m)},render:T,addToRenderList:y,dispose:L}}function yA(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,f=!1;function d(U,X,it,rt,ct){let ot=!1;const P=_(rt,it,X);c!==P&&(c=P,p(c.object)),ot=M(U,rt,it,ct),ot&&E(U,rt,it,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ot||f)&&(f=!1,D(U,X,it,rt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function _(U,X,it){const rt=it.wireframe===!0;let ct=s[U.id];ct===void 0&&(ct={},s[U.id]=ct);let ot=ct[X.id];ot===void 0&&(ot={},ct[X.id]=ot);let P=ot[rt];return P===void 0&&(P=S(m()),ot[rt]=P),P}function S(U){const X=[],it=[],rt=[];for(let ct=0;ct<i;ct++)X[ct]=0,it[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:it,attributeDivisors:rt,object:U,attributes:{},index:null}}function M(U,X,it,rt){const ct=c.attributes,ot=X.attributes;let P=0;const G=it.getAttributes();for(const et in G)if(G[et].location>=0){const mt=ct[et];let O=ot[et];if(O===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),mt===void 0||mt.attribute!==O||O&&mt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==rt}function E(U,X,it,rt){const ct={},ot=X.attributes;let P=0;const G=it.getAttributes();for(const et in G)if(G[et].location>=0){let mt=ot[et];mt===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(mt=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(mt=U.instanceColor));const O={};O.attribute=mt,mt&&mt.data&&(O.data=mt.data),ct[et]=O,P++}c.attributes=ct,c.attributesNum=P,c.index=rt}function T(){const U=c.newAttributes;for(let X=0,it=U.length;X<it;X++)U[X]=0}function y(U){v(U,0)}function v(U,X){const it=c.newAttributes,rt=c.enabledAttributes,ct=c.attributeDivisors;it[U]=1,rt[U]===0&&(r.enableVertexAttribArray(U),rt[U]=1),ct[U]!==X&&(r.vertexAttribDivisor(U,X),ct[U]=X)}function L(){const U=c.newAttributes,X=c.enabledAttributes;for(let it=0,rt=X.length;it<rt;it++)X[it]!==U[it]&&(r.disableVertexAttribArray(it),X[it]=0)}function w(U,X,it,rt,ct,ot,P){P===!0?r.vertexAttribIPointer(U,X,it,ct,ot):r.vertexAttribPointer(U,X,it,rt,ct,ot)}function D(U,X,it,rt){T();const ct=rt.attributes,ot=it.getAttributes(),P=X.defaultAttributeValues;for(const G in ot){const et=ot[G];if(et.location>=0){let bt=ct[G];if(bt===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),bt!==void 0){const mt=bt.normalized,O=bt.itemSize,nt=t.get(bt);if(nt===void 0)continue;const vt=nt.buffer,wt=nt.type,Xt=nt.bytesPerElement,J=wt===r.INT||wt===r.UNSIGNED_INT||bt.gpuType===hp;if(bt.isInterleavedBufferAttribute){const dt=bt.data,Lt=dt.stride,zt=bt.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<et.locationSize;Yt++)v(et.location+Yt,dt.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<et.locationSize;Yt++)y(et.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let Yt=0;Yt<et.locationSize;Yt++)w(et.location+Yt,O/et.locationSize,wt,mt,Lt*Xt,(zt+O/et.locationSize*Yt)*Xt,J)}else{if(bt.isInstancedBufferAttribute){for(let dt=0;dt<et.locationSize;dt++)v(et.location+dt,bt.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let dt=0;dt<et.locationSize;dt++)y(et.location+dt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let dt=0;dt<et.locationSize;dt++)w(et.location+dt,O/et.locationSize,wt,mt,O*Xt,O/et.locationSize*dt*Xt,J)}}else if(P!==void 0){const mt=P[G];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(et.location,mt);break;case 3:r.vertexAttrib3fv(et.location,mt);break;case 4:r.vertexAttrib4fv(et.location,mt);break;default:r.vertexAttrib1fv(et.location,mt)}}}}L()}function F(){Q();for(const U in s){const X=s[U];for(const it in X){const rt=X[it];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete X[it]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const X=s[U.id];for(const it in X){const rt=X[it];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete X[it]}delete s[U.id]}function I(U){for(const X in s){const it=s[X];if(it[U.id]===void 0)continue;const rt=it[U.id];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete it[U.id]}}function Q(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function MA(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,s,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*S[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function EA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Gi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Q=I===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==vi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ji&&!Q)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(he("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:D,maxSamples:F,samples:B}}function bA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new cs,d=new Me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const L=c?0:s,w=L*4;let D=v.clippingState||null;m.value=D,D=g(E,S,w,M);for(let F=0;F!==w;++F)D[F]=i[F];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,M,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const v=M+T*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let w=0,D=M;w!==T;++w,D+=4)f.copy(_[w]).applyMatrix4(L,d),f.normal.toArray(y,D),y[D+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function TA(r){let t=new WeakMap;function i(f,d){return d===Md?f.mapping=Gs:d===Ed&&(f.mapping=jr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Md||d===Ed)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new rx(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const fs=4,nv=[.125,.215,.35,.446,.526,.582],Fs=20,AA=256,tl=new Tp,iv=new Oe;let id=null,ad=0,sd=0,rd=!1;const RA=new q;class av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=RA}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:wa,format:Gi,colorSpace:Kr,depthBuffer:!1},l=sv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CA(c)),this._blurMaterial=DA(c,t,i),this._ggxMaterial=wA(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new li,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new Di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(iv),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new gl,new tx({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,v=!0):(y.color.copy(iv),v=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):D===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const F=this._cubeSize;Ir(l,D*F,w>2?F:0,F,F),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=M,_.autoClear=S,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ir(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,M=_*S,{_lodMax:E}=this,T=this._sizeLods[s],y=3*T*(s>E-fs?s-E+fs:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,Ir(c,y,v,3*T,2*T),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ir(t,y,v,3*T,2*T),l.setRenderTarget(t),l.render(d,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Fs-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Fs;y>Fs&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const v=[];let L=0;for(let I=0;I<Fs;++I){const Q=I/T,C=Math.exp(-Q*Q/2);v.push(C),I===0?L+=C:I<y&&(L+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:w}=this;S.dTheta.value=E,S.mipInt.value=w-s;const D=this._sizeLods[l],F=3*D*(l>w-fs?l-w+fs:0),B=4*(this._cubeSize-D);Ir(i,F,B,3*D,2*D),m.setRenderTarget(i),m.render(_,tl)}}function CA(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+nv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-fs?m=nv[f-r+fs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,T=3,y=2,v=1,L=new Float32Array(T*E*M),w=new Float32Array(y*E*M),D=new Float32Array(v*E*M);for(let B=0;B<M;B++){const I=B%3*2/3-1,Q=B>2?0:-1,C=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];L.set(C,T*E*B),w.set(S,y*E*B);const U=[B,B,B,B,B,B];D.set(U,v*E*B)}const F=new li;F.setAttribute("position",new Ji(L,T)),F.setAttribute("uv",new Ji(w,y)),F.setAttribute("faceIndex",new Ji(D,v)),s.push(new Ni(F,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function sv(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function wA(r,t,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function DA(r,t,i){const s=new Float32Array(Fs),l=new q(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function rv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function ov(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function UA(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Md||m===Ed,g=m===Gs||m===jr;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new av(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new av(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function NA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function LA(r,t,i,s){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let w=0,D=L.length;w<D;w+=3){const F=L[w+0],B=L[w+1],I=L[w+2];S.push(F,B,B,I,I,F)}}else if(E!==void 0){const L=E.array;T=E.version;for(let w=0,D=L.length/3-1;w<D;w+=3){const F=w+0,B=w+1,I=w+2;S.push(F,B,B,I,I,F)}}else return;const y=new(Kv(S)?nx:ex)(S,1);y.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function OA(r,t,i){let s;function l(S){s=S}let c,f;function d(S){c=S.type,f=S.bytesPerElement}function m(S,M){r.drawElements(s,M,c,S*f),i.update(M,s,1)}function p(S,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,S*f,E),i.update(M,s,E))}function g(S,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];i.update(y,s,1)}function _(S,M,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,T,0,E);let v=0;for(let L=0;L<E;L++)v+=M[L]*T[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function PA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Be("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function zA(r,t,i){const s=new WeakMap,l=new vn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let U=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var M=U;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),y===!0&&(D=3);let F=d.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*B*4*_),Q=new Jv(I,F,B,_);Q.type=ji,Q.needsUpdate=!0;const C=D*4;for(let X=0;X<_;X++){const it=v[X],rt=L[X],ct=w[X],ot=F*B*4*X;for(let P=0;P<it.count;P++){const G=P*C;E===!0&&(l.fromBufferAttribute(it,P),I[ot+G+0]=l.x,I[ot+G+1]=l.y,I[ot+G+2]=l.z,I[ot+G+3]=0),T===!0&&(l.fromBufferAttribute(rt,P),I[ot+G+4]=l.x,I[ot+G+5]=l.y,I[ot+G+6]=l.z,I[ot+G+7]=0),y===!0&&(l.fromBufferAttribute(ct,P),I[ot+G+8]=l.x,I[ot+G+9]=l.y,I[ot+G+10]=l.z,I[ot+G+11]=ct.itemSize===4?l.w:1)}}S={count:_,texture:Q,size:new pe(F,B)},s.set(d,S),d.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function IA(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const FA={[Ov]:"LINEAR_TONE_MAPPING",[Pv]:"REINHARD_TONE_MAPPING",[zv]:"CINEON_TONE_MAPPING",[Iv]:"ACES_FILMIC_TONE_MAPPING",[Bv]:"AGX_TONE_MAPPING",[Hv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function BA(r,t,i,s,l){const c=new Qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Qi(t,i,{type:wa,depthBuffer:!1,stencilBuffer:!1}),d=new li;d.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const m=new AE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new Tp(-1,1,1,-1,0,1);let _=null,S=null,M=!1,E,T=null,y=[],v=!1;this.setSize=function(L,w){c.setSize(L,w),f.setSize(L,w);for(let D=0;D<y.length;D++){const F=y[D];F.setSize&&F.setSize(L,w)}},this.setEffects=function(L){y=L,v=y.length>0&&y[0].isRenderPass===!0;const w=c.width,D=c.height;for(let F=0;F<y.length;F++){const B=y[F];B.setSize&&B.setSize(w,D)}},this.begin=function(L,w){if(M||L.toneMapping===Ki&&y.length===0)return!1;if(T=w,w!==null){const D=w.width,F=w.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return v===!1&&L.setRenderTarget(c),E=L.toneMapping,L.toneMapping=Ki,!0},this.hasRenderPass=function(){return v},this.end=function(L,w){L.toneMapping=E,M=!0;let D=c,F=f;for(let B=0;B<y.length;B++){const I=y[B];if(I.enabled!==!1&&(I.render(L,F,D,w),I.needsSwap!==!1)){const Q=D;D=F,F=Q}}if(_!==L.outputColorSpace||S!==L.toneMapping){_=L.outputColorSpace,S=L.toneMapping,m.defines={},He.getTransfer(_)===tn&&(m.defines.SRGB_TRANSFER="");const B=FA[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(T),L.render(p,g),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const px=new $n,op=new hl(1,1),mx=new Jv,gx=new IM,_x=new sx,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),hv=new Float32Array(4);function no(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=lv[l];if(c===void 0&&(c=new Float32Array(l),lv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function wn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Su(r,t){let i=cv[t];i===void 0&&(i=new Int32Array(t),cv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function HA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function GA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2fv(this.addr,t),Dn(i,t)}}function VA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wn(i,t))return;r.uniform3fv(this.addr,t),Dn(i,t)}}function kA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4fv(this.addr,t),Dn(i,t)}}function XA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;hv.set(s),r.uniformMatrix2fv(this.addr,!1,hv),Dn(i,s)}}function WA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;fv.set(s),r.uniformMatrix3fv(this.addr,!1,fv),Dn(i,s)}}function YA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;uv.set(s),r.uniformMatrix4fv(this.addr,!1,uv),Dn(i,s)}}function qA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function jA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2iv(this.addr,t),Dn(i,t)}}function ZA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3iv(this.addr,t),Dn(i,t)}}function KA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4iv(this.addr,t),Dn(i,t)}}function QA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function JA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2uiv(this.addr,t),Dn(i,t)}}function $A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3uiv(this.addr,t),Dn(i,t)}}function t1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4uiv(this.addr,t),Dn(i,t)}}function e1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?xp:vp,c=op):c=px,i.setTexture2D(t||c,l)}function n1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||gx,l)}function i1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||_x,l)}function a1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||mx,l)}function s1(r){switch(r){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return kA;case 35674:return XA;case 35675:return WA;case 35676:return YA;case 5124:case 35670:return qA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function r1(r,t){r.uniform1fv(this.addr,t)}function o1(r,t){const i=no(t,this.size,2);r.uniform2fv(this.addr,i)}function l1(r,t){const i=no(t,this.size,3);r.uniform3fv(this.addr,i)}function c1(r,t){const i=no(t,this.size,4);r.uniform4fv(this.addr,i)}function u1(r,t){const i=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function f1(r,t){const i=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function h1(r,t){const i=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function d1(r,t){r.uniform1iv(this.addr,t)}function p1(r,t){r.uniform2iv(this.addr,t)}function m1(r,t){r.uniform3iv(this.addr,t)}function g1(r,t){r.uniform4iv(this.addr,t)}function _1(r,t){r.uniform1uiv(this.addr,t)}function v1(r,t){r.uniform2uiv(this.addr,t)}function x1(r,t){r.uniform3uiv(this.addr,t)}function S1(r,t){r.uniform4uiv(this.addr,t)}function y1(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=op:f=px;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function M1(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||gx,c[f])}function E1(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||_x,c[f])}function b1(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||mx,c[f])}function T1(r){switch(r){case 5126:return r1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return b1}}class A1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=s1(i.type)}}class R1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class C1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function dv(r,t){r.seq.push(t),r.map[t.id]=t}function w1(r,t,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),f=od.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){dv(i,p===void 0?new A1(d,r,t):new R1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new C1(d),dv(i,_)),i=_}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);w1(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function pv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const D1=37297;let U1=0;function N1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const mv=new Me;function L1(r){He._getMatrix(mv,He.workingColorSpace,r);const t=`mat3( ${mv.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(r)){case lu:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+N1(r.getShaderSource(t),d)}else return c}function O1(r,t){const i=L1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const P1={[Ov]:"Linear",[Pv]:"Reinhard",[zv]:"Cineon",[Iv]:"ACESFilmic",[Bv]:"AgX",[Hv]:"Neutral",[Fv]:"Custom"};function z1(r,t){const i=P1[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new q;function I1(){He.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function B1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function H1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function sl(r){return r!==""}function _v(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(G1,k1)}const V1=new Map;function k1(r,t){let i=Ee[t];if(i===void 0){const s=V1.get(t);if(s!==void 0)i=Ee[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return lp(i)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(r){return r.replace(X1,W1)}function W1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Sv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const Y1={[nu]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function q1(r){return Y1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j1={[Gs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function Z1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":j1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const K1={[jr]:"ENVMAP_MODE_REFRACTION"};function Q1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":K1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J1={[Lv]:"ENVMAP_BLENDING_MULTIPLY",[iM]:"ENVMAP_BLENDING_MIX",[aM]:"ENVMAP_BLENDING_ADD"};function $1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":J1[r.combine]||"ENVMAP_BLENDING_NONE"}function tR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function eR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=q1(i),p=Z1(i),g=Q1(i),_=$1(i),S=tR(i),M=F1(i),E=B1(c),T=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),v.length>0&&(v+=`
`)):(y=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),v=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?Ee.tonemapping_pars_fragment:"",i.toneMapping!==Ki?z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,O1("linearToOutputTexel",i.outputColorSpace),I1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=lp(f),f=_v(f,i),f=vv(f,i),d=lp(d),d=_v(d,i),d=vv(d,i),f=xv(f),d=xv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=L+y+f,D=L+v+d,F=pv(l,l.VERTEX_SHADER,w),B=pv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,F),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(X){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(T)||"",rt=l.getShaderInfoLog(F)||"",ct=l.getShaderInfoLog(B)||"",ot=it.trim(),P=rt.trim(),G=ct.trim();let et=!0,bt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,F,B);else{const mt=gv(l,F,"vertex"),O=gv(l,B,"fragment");Be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ot+`
`+mt+`
`+O)}else ot!==""?he("WebGLProgram: Program Info Log:",ot):(P===""||G==="")&&(bt=!1);bt&&(X.diagnostics={runnable:et,programLog:ot,vertexShader:{log:P,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(F),l.deleteShader(B),Q=new ou(l,T),C=H1(l,T)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,D1)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=B,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new aR(t),i.set(t,s)),s}}class aR{constructor(t){this.id=nR++,this.code=t,this.usedTimes=0}}function sR(r,t,i,s,l,c,f){const d=new Mp,m=new iR,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,U,X,it,rt){const ct=it.fog,ot=rt.geometry,P=C.isMeshStandardMaterial?it.environment:null,G=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),et=G&&G.mapping===mu?G.image.height:null,bt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const mt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,O=mt!==void 0?mt.length:0;let nt=0;ot.morphAttributes.position!==void 0&&(nt=1),ot.morphAttributes.normal!==void 0&&(nt=2),ot.morphAttributes.color!==void 0&&(nt=3);let vt,wt,Xt,J;if(bt){const Pe=qi[bt];vt=Pe.vertexShader,wt=Pe.fragmentShader}else vt=C.vertexShader,wt=C.fragmentShader,m.update(C),Xt=m.getVertexShaderID(C),J=m.getFragmentShaderID(C);const dt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),zt=rt.isInstancedMesh===!0,Yt=rt.isBatchedMesh===!0,be=!!C.map,rn=!!C.matcap,Te=!!G,ue=!!C.aoMap,Ie=!!C.lightMap,ie=!!C.bumpMap,qe=!!C.normalMap,z=!!C.displacementMap,Fe=!!C.emissiveMap,Ae=!!C.metalnessMap,De=!!C.roughnessMap,Ft=C.anisotropy>0,N=C.clearcoat>0,b=C.dispersion>0,Y=C.iridescence>0,gt=C.sheen>0,Mt=C.transmission>0,ht=Ft&&!!C.anisotropyMap,Qt=N&&!!C.clearcoatMap,Ut=N&&!!C.clearcoatNormalMap,qt=N&&!!C.clearcoatRoughnessMap,se=Y&&!!C.iridescenceMap,At=Y&&!!C.iridescenceThicknessMap,Rt=gt&&!!C.sheenColorMap,kt=gt&&!!C.sheenRoughnessMap,Bt=!!C.specularMap,Nt=!!C.specularColorMap,ve=!!C.specularIntensityMap,W=Mt&&!!C.transmissionMap,Ot=Mt&&!!C.thicknessMap,Ct=!!C.gradientMap,Gt=!!C.alphaMap,Tt=C.alphaTest>0,xt=!!C.alphaHash,Dt=!!C.extensions;let fe=Ki;C.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Ge={shaderID:bt,shaderType:C.type,shaderName:C.name,vertexShader:vt,fragmentShader:wt,defines:C.defines,customVertexShaderID:Xt,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Yt,batchingColor:Yt&&rt._colorsTexture!==null,instancing:zt,instancingColor:zt&&rt.instanceColor!==null,instancingMorph:zt&&rt.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Kr,alphaToCoverage:!!C.alphaToCoverage,map:be,matcap:rn,envMap:Te,envMapMode:Te&&G.mapping,envMapCubeUVHeight:et,aoMap:ue,lightMap:Ie,bumpMap:ie,normalMap:qe,displacementMap:z,emissiveMap:Fe,normalMapObjectSpace:qe&&C.normalMapType===oM,normalMapTangentSpace:qe&&C.normalMapType===Zv,metalnessMap:Ae,roughnessMap:De,anisotropy:Ft,anisotropyMap:ht,clearcoat:N,clearcoatMap:Qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:b,iridescence:Y,iridescenceMap:se,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Rt,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:ve,transmission:Mt,transmissionMap:W,thicknessMap:Ot,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===Xr&&C.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Tt,alphaHash:xt,combine:C.combine,mapUv:be&&T(C.map.channel),aoMapUv:ue&&T(C.aoMap.channel),lightMapUv:Ie&&T(C.lightMap.channel),bumpMapUv:ie&&T(C.bumpMap.channel),normalMapUv:qe&&T(C.normalMap.channel),displacementMapUv:z&&T(C.displacementMap.channel),emissiveMapUv:Fe&&T(C.emissiveMap.channel),metalnessMapUv:Ae&&T(C.metalnessMap.channel),roughnessMapUv:De&&T(C.roughnessMap.channel),anisotropyMapUv:ht&&T(C.anisotropyMap.channel),clearcoatMapUv:Qt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:kt&&T(C.sheenRoughnessMap.channel),specularMapUv:Bt&&T(C.specularMap.channel),specularColorMapUv:Nt&&T(C.specularColorMap.channel),specularIntensityMapUv:ve&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Ot&&T(C.thicknessMap.channel),alphaMapUv:Gt&&T(C.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(qe||Ft),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ot.attributes.uv&&(be||Gt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Lt,skinning:rt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:be&&C.map.isVideoTexture===!0&&He.getTransfer(C.map.colorSpace)===tn,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&He.getTransfer(C.emissiveMap.colorSpace)===tn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===oi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Dt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&C.extensions.multiDraw===!0||Yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function v(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)U.push(X),U.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(L(U,C),w(U,C),U.push(r.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function L(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function w(C,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const U=E[C.type];let X;if(U){const it=qi[U];X=KM.clone(it.uniforms)}else X=C.uniforms;return X}function F(C,U){let X=_.get(U);return X!==void 0?++X.usedTimes:(X=new eR(r,U,C,c),g.push(X),_.set(U,X)),X}function B(C){if(--C.usedTimes===0){const U=g.indexOf(C);g[U]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:Q}}function rR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function oR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Mv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,S,M,E,T,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),t++,v}function d(_,S,M,E,T,y){const v=f(_,S,M,E,T,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,E,T,y){const v=f(_,S,M,E,T,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||oR),s.length>1&&s.sort(S||yv),l.length>1&&l.sort(S||yv)}function g(){for(let _=t,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function lR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Mv,r.set(s,[f])):l>=c.length?(f=new Mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function cR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new Oe};break;case"SpotLight":i={position:new q,direction:new q,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function uR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let fR=0;function hR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function dR(r){const t=new cR,i=uR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new dn,f=new dn;function d(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,T=0,y=0,v=0,L=0,w=0,D=0,F=0,B=0,I=0;p.sort(hR);for(let C=0,U=p.length;C<U;C++){const X=p[C],it=X.color,rt=X.intensity,ct=X.distance;let ot=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Zr?ot=X.shadow.map.texture:ot=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=it.r*rt,_+=it.g*rt,S+=it.b*rt;else if(X.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(X.sh.coefficients[P],rt);I++}else if(X.isDirectionalLight){const P=t.get(X);if(P.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.directionalShadow[M]=et,s.directionalShadowMap[M]=ot,s.directionalShadowMatrix[M]=X.shadow.matrix,L++}s.directional[M]=P,M++}else if(X.isSpotLight){const P=t.get(X);P.position.setFromMatrixPosition(X.matrixWorld),P.color.copy(it).multiplyScalar(rt),P.distance=ct,P.coneCos=Math.cos(X.angle),P.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),P.decay=X.decay,s.spot[T]=P;const G=X.shadow;if(X.map&&(s.spotLightMap[F]=X.map,F++,G.updateMatrices(X),X.castShadow&&B++),s.spotLightMatrix[T]=G.matrix,X.castShadow){const et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.spotShadow[T]=et,s.spotShadowMap[T]=ot,D++}T++}else if(X.isRectAreaLight){const P=t.get(X);P.color.copy(it).multiplyScalar(rt),P.halfWidth.set(X.width*.5,0,0),P.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=P,y++}else if(X.isPointLight){const P=t.get(X);if(P.color.copy(X.color).multiplyScalar(X.intensity),P.distance=X.distance,P.decay=X.decay,X.castShadow){const G=X.shadow,et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,et.shadowCameraNear=G.camera.near,et.shadowCameraFar=G.camera.far,s.pointShadow[E]=et,s.pointShadowMap[E]=ot,s.pointShadowMatrix[E]=X.shadow.matrix,w++}s.point[E]=P,E++}else if(X.isHemisphereLight){const P=t.get(X);P.skyColor.copy(X.color).multiplyScalar(rt),P.groundColor.copy(X.groundColor).multiplyScalar(rt),s.hemi[v]=P,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const Q=s.hash;(Q.directionalLength!==M||Q.pointLength!==E||Q.spotLength!==T||Q.rectAreaLength!==y||Q.hemiLength!==v||Q.numDirectionalShadows!==L||Q.numPointShadows!==w||Q.numSpotShadows!==D||Q.numSpotMaps!==F||Q.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=D+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,Q.directionalLength=M,Q.pointLength=E,Q.spotLength=T,Q.rectAreaLength=y,Q.hemiLength=v,Q.numDirectionalShadows=L,Q.numPointShadows=w,Q.numSpotShadows=D,Q.numSpotMaps=F,Q.numLightProbes=I,s.version=fR++)}function m(p,g){let _=0,S=0,M=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const w=p[v];if(w.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(w.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(w.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(w.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),S++}else if(w.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function Ev(r){const t=new dR(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function pR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Ev(r),t.set(l,[d])):c>=f.length?(d=new Ev(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const mR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gR=`uniform sampler2D shadow_pass;
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
}`,_R=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],vR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],bv=new dn,el=new q,ld=new q;function xR(r,t,i){let s=new Ep;const l=new pe,c=new pe,f=new vn,d=new RE,m=new CE,p={},g=i.maxTextureSize,_={[hs]:oi,[oi]:hs,[Hi]:Hi},S=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:mR,fragmentShader:gR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new li;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let v=this.type;this.render=function(B,I,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===Fy&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=nu);const C=r.getRenderTarget(),U=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),it=r.state;it.setBlending(Ra),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const rt=v!==this.type;rt&&I.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(ot=>ot.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,ot=B.length;ct<ot;ct++){const P=B[ct],G=P.shadow;if(G===void 0){he("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const et=G.getFrameExtents();if(l.multiply(et),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/et.x),l.x=c.x*et.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/et.y),l.y=c.y*et.y,G.mapSize.y=c.y)),G.map===null||rt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===nl){if(P.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qi(l.x,l.y,{format:Zr,type:wa,minFilter:jn,magFilter:jn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new hl(l.x,l.y,ji),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn}else{P.isPointLight?(G.map=new rx(l.x),G.map.depthTexture=new oE(l.x,$i)):(G.map=new Qi(l.x,l.y),G.map.depthTexture=new hl(l.x,l.y,$i)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Da;const mt=r.state.buffers.depth.getReversed();this.type===nu?(G.map.depthTexture.compareFunction=mt?xp:vp,G.map.depthTexture.minFilter=jn,G.map.depthTexture.magFilter=jn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn)}G.camera.updateProjectionMatrix()}const bt=G.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<bt;mt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,mt),r.clear();else{mt===0&&(r.setRenderTarget(G.map),r.clear());const O=G.getViewport(mt);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),it.viewport(f)}if(P.isPointLight){const O=G.camera,nt=G.matrix,vt=P.distance||O.far;vt!==O.far&&(O.far=vt,O.updateProjectionMatrix()),el.setFromMatrixPosition(P.matrixWorld),O.position.copy(el),ld.copy(O.position),ld.add(_R[mt]),O.up.copy(vR[mt]),O.lookAt(ld),O.updateMatrixWorld(),nt.makeTranslation(-el.x,-el.y,-el.z),bv.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bv,O.coordinateSystem,O.reversedDepth)}else G.updateMatrices(P);s=G.getFrustum(),D(I,Q,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===nl&&L(G,Q),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,U,X)};function L(B,I){const Q=t.update(T);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qi(l.x,l.y,{format:Zr,type:wa})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(I,null,Q,S,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(I,null,Q,M,T,null)}function w(B,I,Q,C){let U=null;const X=Q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)U=X;else if(U=Q.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const it=U.uuid,rt=I.uuid;let ct=p[it];ct===void 0&&(ct={},p[it]=ct);let ot=ct[rt];ot===void 0&&(ot=U.clone(),ct[rt]=ot,I.addEventListener("dispose",F)),U=ot}if(U.visible=I.visible,U.wireframe=I.wireframe,C===nl?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:_[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,Q.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const it=r.properties.get(U);it.light=Q}return U}function D(B,I,Q,C,U){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===nl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,B.matrixWorld);const rt=t.update(B),ct=B.material;if(Array.isArray(ct)){const ot=rt.groups;for(let P=0,G=ot.length;P<G;P++){const et=ot[P],bt=ct[et.materialIndex];if(bt&&bt.visible){const mt=w(B,bt,C,U);B.onBeforeShadow(r,B,I,Q,rt,mt,et),r.renderBufferDirect(Q,null,rt,mt,B,et),B.onAfterShadow(r,B,I,Q,rt,mt,et)}}}else if(ct.visible){const ot=w(B,ct,C,U);B.onBeforeShadow(r,B,I,Q,rt,ot,null),r.renderBufferDirect(Q,null,rt,ot,B,null),B.onAfterShadow(r,B,I,Q,rt,ot,null)}}const it=B.children;for(let rt=0,ct=it.length;rt<ct;rt++)D(it[rt],I,Q,C,U)}function F(B){B.target.removeEventListener("dispose",F);for(const Q in p){const C=p[Q],U=B.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const SR={[md]:gd,[_d]:Sd,[vd]:yd,[qr]:xd,[gd]:md,[Sd]:_d,[yd]:vd,[xd]:qr};function yR(r,t){function i(){let W=!1;const Ot=new vn;let Ct=null;const Gt=new vn(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,xt,Dt,fe,Ge){Ge===!0&&(Tt*=fe,xt*=fe,Dt*=fe),Ot.set(Tt,xt,Dt,fe),Gt.equals(Ot)===!1&&(r.clearColor(Tt,xt,Dt,fe),Gt.copy(Ot))},reset:function(){W=!1,Ct=null,Gt.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,Ct=null,Gt=null,Tt=null;return{setReversed:function(xt){if(Ot!==xt){const Dt=t.get("EXT_clip_control");xt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=xt;const fe=Tt;Tt=null,this.setClear(fe)}},getReversed:function(){return Ot},setTest:function(xt){xt?dt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(xt){Ct!==xt&&!W&&(r.depthMask(xt),Ct=xt)},setFunc:function(xt){if(Ot&&(xt=SR[xt]),Gt!==xt){switch(xt){case md:r.depthFunc(r.NEVER);break;case gd:r.depthFunc(r.ALWAYS);break;case _d:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case vd:r.depthFunc(r.EQUAL);break;case xd:r.depthFunc(r.GEQUAL);break;case Sd:r.depthFunc(r.GREATER);break;case yd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Gt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Tt!==xt&&(Ot&&(xt=1-xt),r.clearDepth(xt),Tt=xt)},reset:function(){W=!1,Ct=null,Gt=null,Tt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Ct=null,Gt=null,Tt=null,xt=null,Dt=null,fe=null,Ge=null;return{setTest:function(Pe){W||(Pe?dt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Pe){Ot!==Pe&&!W&&(r.stencilMask(Pe),Ot=Pe)},setFunc:function(Pe,V,yt){(Ct!==Pe||Gt!==V||Tt!==yt)&&(r.stencilFunc(Pe,V,yt),Ct=Pe,Gt=V,Tt=yt)},setOp:function(Pe,V,yt){(xt!==Pe||Dt!==V||fe!==yt)&&(r.stencilOp(Pe,V,yt),xt=Pe,Dt=V,fe=yt)},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ge!==Pe&&(r.clearStencil(Pe),Ge=Pe)},reset:function(){W=!1,Ot=null,Ct=null,Gt=null,Tt=null,xt=null,Dt=null,fe=null,Ge=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],E=null,T=!1,y=null,v=null,L=null,w=null,D=null,F=null,B=null,I=new Oe(0,0,0),Q=0,C=!1,U=null,X=null,it=null,rt=null,ct=null;const ot=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const et=r.getParameter(r.VERSION);et.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(et)[1]),P=G>=1):et.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),P=G>=2);let bt=null,mt={};const O=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),vt=new vn().fromArray(O),wt=new vn().fromArray(nt);function Xt(W,Ot,Ct,Gt){const Tt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(W,xt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Ct;Dt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Gt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Ot+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return xt}const J={};J[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),dt(r.DEPTH_TEST),f.setFunc(qr),ie(!1),qe(m_),dt(r.CULL_FACE),ue(Ra);function dt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Lt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function zt(W,Ot){return _[W]!==Ot?(r.bindFramebuffer(W,Ot),_[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Yt(W,Ot){let Ct=M,Gt=!1;if(W){Ct=S.get(Ot),Ct===void 0&&(Ct=[],S.set(Ot,Ct));const Tt=W.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Dt=Tt.length;xt<Dt;xt++)Ct[xt]=r.COLOR_ATTACHMENT0+xt;Ct.length=Tt.length,Gt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Gt=!0);Gt&&r.drawBuffers(Ct)}function be(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const rn={[Is]:r.FUNC_ADD,[Hy]:r.FUNC_SUBTRACT,[Gy]:r.FUNC_REVERSE_SUBTRACT};rn[Vy]=r.MIN,rn[ky]=r.MAX;const Te={[Xy]:r.ZERO,[Wy]:r.ONE,[Yy]:r.SRC_COLOR,[dd]:r.SRC_ALPHA,[Jy]:r.SRC_ALPHA_SATURATE,[Ky]:r.DST_COLOR,[jy]:r.DST_ALPHA,[qy]:r.ONE_MINUS_SRC_COLOR,[pd]:r.ONE_MINUS_SRC_ALPHA,[Qy]:r.ONE_MINUS_DST_COLOR,[Zy]:r.ONE_MINUS_DST_ALPHA,[$y]:r.CONSTANT_COLOR,[tM]:r.ONE_MINUS_CONSTANT_COLOR,[eM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(W,Ot,Ct,Gt,Tt,xt,Dt,fe,Ge,Pe){if(W===Ra){T===!0&&(Lt(r.BLEND),T=!1);return}if(T===!1&&(dt(r.BLEND),T=!0),W!==By){if(W!==y||Pe!==C){if((v!==Is||D!==Is)&&(r.blendEquation(r.FUNC_ADD),v=Is,D=Is),Pe)switch(W){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFunc(r.ONE,r.ONE);break;case __:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case v_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Be("WebGLState: Invalid blending: ",W);break}else switch(W){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case __:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",W);break}L=null,w=null,F=null,B=null,I.set(0,0,0),Q=0,y=W,C=Pe}return}Tt=Tt||Ot,xt=xt||Ct,Dt=Dt||Gt,(Ot!==v||Tt!==D)&&(r.blendEquationSeparate(rn[Ot],rn[Tt]),v=Ot,D=Tt),(Ct!==L||Gt!==w||xt!==F||Dt!==B)&&(r.blendFuncSeparate(Te[Ct],Te[Gt],Te[xt],Te[Dt]),L=Ct,w=Gt,F=xt,B=Dt),(fe.equals(I)===!1||Ge!==Q)&&(r.blendColor(fe.r,fe.g,fe.b,Ge),I.copy(fe),Q=Ge),y=W,C=!1}function Ie(W,Ot){W.side===Hi?Lt(r.CULL_FACE):dt(r.CULL_FACE);let Ct=W.side===oi;Ot&&(Ct=!Ct),ie(Ct),W.blending===Xr&&W.transparent===!1?ue(Ra):ue(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Gt=W.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(W){U!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),U=W)}function qe(W){W!==zy?(dt(r.CULL_FACE),W!==X&&(W===m_?r.cullFace(r.BACK):W===Iy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),X=W}function z(W){W!==it&&(P&&r.lineWidth(W),it=W)}function Fe(W,Ot,Ct){W?(dt(r.POLYGON_OFFSET_FILL),(rt!==Ot||ct!==Ct)&&(r.polygonOffset(Ot,Ct),rt=Ot,ct=Ct)):Lt(r.POLYGON_OFFSET_FILL)}function Ae(W){W?dt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function De(W){W===void 0&&(W=r.TEXTURE0+ot-1),bt!==W&&(r.activeTexture(W),bt=W)}function Ft(W,Ot,Ct){Ct===void 0&&(bt===null?Ct=r.TEXTURE0+ot-1:Ct=bt);let Gt=mt[Ct];Gt===void 0&&(Gt={type:void 0,texture:void 0},mt[Ct]=Gt),(Gt.type!==W||Gt.texture!==Ot)&&(bt!==Ct&&(r.activeTexture(Ct),bt=Ct),r.bindTexture(W,Ot||J[W]),Gt.type=W,Gt.texture=Ot)}function N(){const W=mt[bt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function gt(){try{r.texSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function Ut(){try{r.texStorage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function qt(){try{r.texStorage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function se(){try{r.texImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function At(){try{r.texImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function Rt(W){vt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function kt(W){wt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function Bt(W,Ot){let Ct=p.get(Ot);Ct===void 0&&(Ct=new WeakMap,p.set(Ot,Ct));let Gt=Ct.get(W);Gt===void 0&&(Gt=r.getUniformBlockIndex(Ot,W.name),Ct.set(W,Gt))}function Nt(W,Ot){const Gt=p.get(Ot).get(W);m.get(Ot)!==Gt&&(r.uniformBlockBinding(Ot,Gt,W.__bindingPointIndex),m.set(Ot,Gt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},bt=null,mt={},_={},S=new WeakMap,M=[],E=null,T=!1,y=null,v=null,L=null,w=null,D=null,F=null,B=null,I=new Oe(0,0,0),Q=0,C=!1,U=null,X=null,it=null,rt=null,ct=null,vt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:dt,disable:Lt,bindFramebuffer:zt,drawBuffers:Yt,useProgram:be,setBlending:ue,setMaterial:Ie,setFlipSided:ie,setCullFace:qe,setLineWidth:z,setPolygonOffset:Fe,setScissorTest:Ae,activeTexture:De,bindTexture:Ft,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:se,texImage3D:At,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:gt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Qt,scissor:Rt,viewport:kt,reset:ve}}function MR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):uu("canvas")}function T(N,b,Y){let gt=1;const Mt=Ft(N);if((Mt.width>Y||Mt.height>Y)&&(gt=Y/Math.max(Mt.width,Mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(gt*Mt.width),Qt=Math.floor(gt*Mt.height);_===void 0&&(_=E(ht,Qt));const Ut=b?E(ht,Qt):_;return Ut.width=ht,Ut.height=Qt,Ut.getContext("2d").drawImage(N,0,0,ht,Qt),he("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Qt+")."),Ut}else return"data"in N&&he("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,b,Y,gt,Mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=b;if(b===r.RED&&(Y===r.FLOAT&&(ht=r.R32F),Y===r.HALF_FLOAT&&(ht=r.R16F),Y===r.UNSIGNED_BYTE&&(ht=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ht=r.R8UI),Y===r.UNSIGNED_SHORT&&(ht=r.R16UI),Y===r.UNSIGNED_INT&&(ht=r.R32UI),Y===r.BYTE&&(ht=r.R8I),Y===r.SHORT&&(ht=r.R16I),Y===r.INT&&(ht=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(ht=r.RG32F),Y===r.HALF_FLOAT&&(ht=r.RG16F),Y===r.UNSIGNED_BYTE&&(ht=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ht=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ht=r.RG16UI),Y===r.UNSIGNED_INT&&(ht=r.RG32UI),Y===r.BYTE&&(ht=r.RG8I),Y===r.SHORT&&(ht=r.RG16I),Y===r.INT&&(ht=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),Y===r.UNSIGNED_INT&&(ht=r.RGB32UI),Y===r.BYTE&&(ht=r.RGB8I),Y===r.SHORT&&(ht=r.RGB16I),Y===r.INT&&(ht=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ht=r.RGBA32UI),Y===r.BYTE&&(ht=r.RGBA8I),Y===r.SHORT&&(ht=r.RGBA16I),Y===r.INT&&(ht=r.RGBA32I)),b===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),b===r.RGBA){const Qt=Mt?lu:He.getTransfer(gt);Y===r.FLOAT&&(ht=r.RGBA32F),Y===r.HALF_FLOAT&&(ht=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ht=Qt===tn?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(N,b){let Y;return N?b===null||b===$i||b===ll?Y=r.DEPTH24_STENCIL8:b===ji?Y=r.DEPTH32F_STENCIL8:b===ol&&(Y=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===ll?Y=r.DEPTH_COMPONENT24:b===ji?Y=r.DEPTH_COMPONENT32F:b===ol&&(Y=r.DEPTH_COMPONENT16),Y}function F(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==kn&&N.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),Q(b),b.isVideoTexture&&g.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),U(b)}function Q(N){const b=s.get(N);if(b.__webglInit===void 0)return;const Y=N.source,gt=S.get(Y);if(gt){const Mt=gt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(N),Object.keys(gt).length===0&&S.delete(Y)}s.remove(N)}function C(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const Y=N.source,gt=S.get(Y);delete gt[b.__cacheKey],f.memory.textures--}function U(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let Mt=0;Mt<b.__webglFramebuffer[gt].length;Mt++)r.deleteFramebuffer(b.__webglFramebuffer[gt][Mt]);else r.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[gt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=N.textures;for(let gt=0,Mt=Y.length;gt<Mt;gt++){const ht=s.get(Y[gt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(Y[gt])}s.remove(N)}let X=0;function it(){X=0}function rt(){const N=X;return N>=l.maxTextures&&he("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),X+=1,N}function ct(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ot(N,b){const Y=s.get(N);if(N.isVideoTexture&&Ae(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const gt=N.image;if(gt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,N,b);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function P(N,b){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){J(Y,N,b);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function G(N,b){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){J(Y,N,b);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function et(N,b){const Y=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){dt(Y,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const bt={[bd]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},mt={[kn]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[Uh]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},O={[lM]:r.NEVER,[dM]:r.ALWAYS,[cM]:r.LESS,[vp]:r.LEQUAL,[uM]:r.EQUAL,[xp]:r.GEQUAL,[fM]:r.GREATER,[hM]:r.NOTEQUAL};function nt(N,b){if(b.type===ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===Uh||b.magFilter===Rc||b.magFilter===Bs||b.minFilter===jn||b.minFilter===Uh||b.minFilter===Rc||b.minFilter===Bs)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,bt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,bt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,bt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,mt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==Rc&&b.minFilter!==Bs||b.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function vt(N,b){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const gt=b.source;let Mt=S.get(gt);Mt===void 0&&(Mt={},S.set(gt,Mt));const ht=ct(b);if(ht!==N.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),Mt[ht].usedTimes++;const Qt=Mt[N.__cacheKey];Qt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Qt.usedTimes===0&&C(b)),N.__cacheKey=ht,N.__webglTexture=Mt[ht].texture}return Y}function wt(N,b,Y){return Math.floor(Math.floor(N/Y)/b)}function Xt(N,b,Y,gt){const ht=N.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Y,gt,b.data);else{ht.sort((At,Rt)=>At.start-Rt.start);let Qt=0;for(let At=1;At<ht.length;At++){const Rt=ht[Qt],kt=ht[At],Bt=Rt.start+Rt.count,Nt=wt(kt.start,b.width,4),ve=wt(Rt.start,b.width,4);kt.start<=Bt+1&&Nt===ve&&wt(kt.start+kt.count-1,b.width,4)===Nt?Rt.count=Math.max(Rt.count,kt.start+kt.count-Rt.start):(++Qt,ht[Qt]=kt)}ht.length=Qt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let At=0,Rt=ht.length;At<Rt;At++){const kt=ht[At],Bt=Math.floor(kt.start/4),Nt=Math.ceil(kt.count/4),ve=Bt%b.width,W=Math.floor(Bt/b.width),Ot=Nt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ve,W,Ot,Ct,Y,gt,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function J(N,b,Y){let gt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=r.TEXTURE_3D);const Mt=vt(N,b),ht=b.source;i.bindTexture(gt,N.__webglTexture,r.TEXTURE0+Y);const Qt=s.get(ht);if(ht.version!==Qt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Y);const Ut=He.getPrimaries(He.workingColorSpace),qt=b.colorSpace===us?null:He.getPrimaries(b.colorSpace),se=b.colorSpace===us||Ut===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let At=T(b.image,!1,l.maxTextureSize);At=De(b,At);const Rt=c.convert(b.format,b.colorSpace),kt=c.convert(b.type);let Bt=w(b.internalFormat,Rt,kt,b.colorSpace,b.isVideoTexture);nt(gt,b);let Nt;const ve=b.mipmaps,W=b.isVideoTexture!==!0,Ot=Qt.__version===void 0||Mt===!0,Ct=ht.dataReady,Gt=F(b,At);if(b.isDepthTexture)Bt=D(b.format===Hs,b.type),Ot&&(W?i.texStorage2D(r.TEXTURE_2D,1,Bt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Bt,At.width,At.height,0,Rt,kt,null));else if(b.isDataTexture)if(ve.length>0){W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Gt,Bt,ve[0].width,ve[0].height);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Nt=ve[Tt],W?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Rt,kt,Nt.data):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Rt,kt,Nt.data);b.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(r.TEXTURE_2D,Gt,Bt,At.width,At.height),Ct&&Xt(b,At,Rt,kt)):i.texImage2D(r.TEXTURE_2D,0,Bt,At.width,At.height,0,Rt,kt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Bt,ve[0].width,ve[0].height,At.depth);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)if(Nt=ve[Tt],b.format!==Gi)if(Rt!==null)if(W){if(Ct)if(b.layerUpdates.size>0){const Dt=ev(Nt.width,Nt.height,b.format,b.type);for(const fe of b.layerUpdates){const Ge=Nt.data.subarray(fe*Dt/Nt.data.BYTES_PER_ELEMENT,(fe+1)*Dt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,fe,Nt.width,Nt.height,1,Rt,Ge)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,At.depth,Rt,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Bt,Nt.width,Nt.height,At.depth,0,Nt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,At.depth,Rt,kt,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Bt,Nt.width,Nt.height,At.depth,0,Rt,kt,Nt.data)}else{W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Gt,Bt,ve[0].width,ve[0].height);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Nt=ve[Tt],b.format!==Gi?Rt!==null?W?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Rt,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Nt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Rt,kt,Nt.data):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Rt,kt,Nt.data)}else if(b.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Bt,At.width,At.height,At.depth),Ct)if(b.layerUpdates.size>0){const Tt=ev(At.width,At.height,b.format,b.type);for(const xt of b.layerUpdates){const Dt=At.data.subarray(xt*Tt/At.data.BYTES_PER_ELEMENT,(xt+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Rt,kt,Dt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Rt,kt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,At.width,At.height,At.depth,0,Rt,kt,At.data);else if(b.isData3DTexture)W?(Ot&&i.texStorage3D(r.TEXTURE_3D,Gt,Bt,At.width,At.height,At.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Rt,kt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Bt,At.width,At.height,At.depth,0,Rt,kt,At.data);else if(b.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(r.TEXTURE_2D,Gt,Bt,At.width,At.height);else{let Tt=At.width,xt=At.height;for(let Dt=0;Dt<Gt;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,Bt,Tt,xt,0,Rt,kt,null),Tt>>=1,xt>>=1}}else if(ve.length>0){if(W&&Ot){const Tt=Ft(ve[0]);i.texStorage2D(r.TEXTURE_2D,Gt,Bt,Tt.width,Tt.height)}for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Nt=ve[Tt],W?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Rt,kt,Nt):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Rt,kt,Nt);b.generateMipmaps=!1}else if(W){if(Ot){const Tt=Ft(At);i.texStorage2D(r.TEXTURE_2D,Gt,Bt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,kt,At)}else i.texImage2D(r.TEXTURE_2D,0,Bt,Rt,kt,At);y(b)&&v(gt),Qt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function dt(N,b,Y){if(b.image.length!==6)return;const gt=vt(N,b),Mt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Y);const ht=s.get(Mt);if(Mt.version!==ht.__version||gt===!0){i.activeTexture(r.TEXTURE0+Y);const Qt=He.getPrimaries(He.workingColorSpace),Ut=b.colorSpace===us?null:He.getPrimaries(b.colorSpace),qt=b.colorSpace===us||Qt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!se&&!At?Rt[xt]=T(b.image[xt],!0,l.maxCubemapSize):Rt[xt]=At?b.image[xt].image:b.image[xt],Rt[xt]=De(b,Rt[xt]);const kt=Rt[0],Bt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),ve=w(b.internalFormat,Bt,Nt,b.colorSpace),W=b.isVideoTexture!==!0,Ot=ht.__version===void 0||gt===!0,Ct=Mt.dataReady;let Gt=F(b,kt);nt(r.TEXTURE_CUBE_MAP,b);let Tt;if(se){W&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ve,kt.width,kt.height);for(let xt=0;xt<6;xt++){Tt=Rt[xt].mipmaps;for(let Dt=0;Dt<Tt.length;Dt++){const fe=Tt[Dt];b.format!==Gi?Bt!==null?W?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,fe.width,fe.height,Bt,fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,ve,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,fe.width,fe.height,Bt,Nt,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,ve,fe.width,fe.height,0,Bt,Nt,fe.data)}}}else{if(Tt=b.mipmaps,W&&Ot){Tt.length>0&&Gt++;const xt=Ft(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ve,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){W?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,Bt,Nt,Rt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,Rt[xt].width,Rt[xt].height,0,Bt,Nt,Rt[xt].data);for(let Dt=0;Dt<Tt.length;Dt++){const Ge=Tt[Dt].image[xt].image;W?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,Ge.width,Ge.height,Bt,Nt,Ge.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,ve,Ge.width,Ge.height,0,Bt,Nt,Ge.data)}}else{W?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,Nt,Rt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,Bt,Nt,Rt[xt]);for(let Dt=0;Dt<Tt.length;Dt++){const fe=Tt[Dt];W?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,Bt,Nt,fe.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,ve,Bt,Nt,fe.image[xt])}}}y(b)&&v(r.TEXTURE_CUBE_MAP),ht.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Lt(N,b,Y,gt,Mt,ht){const Qt=c.convert(Y.format,Y.colorSpace),Ut=c.convert(Y.type),qt=w(Y.internalFormat,Qt,Ut,Y.colorSpace),se=s.get(b),At=s.get(Y);if(At.__renderTarget=b,!se.__hasExternalTextures){const Rt=Math.max(1,b.width>>ht),kt=Math.max(1,b.height>>ht);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,qt,Rt,kt,b.depth,0,Qt,Ut,null):i.texImage2D(Mt,ht,qt,Rt,kt,0,Qt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,Mt,At.__webglTexture,0,z(b)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,Mt,At.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(N,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const gt=b.depthTexture,Mt=gt&&gt.isDepthTexture?gt.type:null,ht=D(b.stencilBuffer,Mt),Qt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(b),ht,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,N)}else{const gt=b.textures;for(let Mt=0;Mt<gt.length;Mt++){const ht=gt[Mt],Qt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),qt=w(ht.internalFormat,Qt,Ut,ht.colorSpace);Fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(b),qt,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(b),qt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,qt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(N,b,Y){const gt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,b.depthTexture);const se=c.convert(b.depthTexture.format),At=c.convert(b.depthTexture.type);let Rt;b.depthTexture.format===Da?Rt=r.DEPTH_COMPONENT24:b.depthTexture.format===Hs&&(Rt=r.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Rt,b.width,b.height,0,se,At,null)}}else ot(b.depthTexture,0);const ht=Mt.__webglTexture,Qt=z(b),Ut=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,qt=b.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,ht,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,ht,0);else if(b.depthTexture.format===Hs)Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,ht,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function be(N){const b=s.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",Mt)};gt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=gt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let gt=0;gt<6;gt++)Yt(b.__webglFramebuffer[gt],N,gt);else{const gt=N.texture.mipmaps;gt&&gt.length>0?Yt(b.__webglFramebuffer[0],N,0):Yt(b.__webglFramebuffer,N,0)}else if(Y){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=r.createRenderbuffer(),zt(b.__webglDepthbuffer[gt],N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}else{const gt=N.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),zt(b.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function rn(N,b,Y){const gt=s.get(N);b!==void 0&&Lt(gt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&be(N)}function Te(N){const b=N.texture,Y=s.get(N),gt=s.get(b);N.addEventListener("dispose",I);const Mt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Qt=Mt.length>1;if(Qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=b.version,f.memory.textures++),ht){Y.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Ut]=[];for(let qt=0;qt<b.mipmaps.length;qt++)Y.__webglFramebuffer[Ut][qt]=r.createFramebuffer()}else Y.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)Y.__webglFramebuffer[Ut]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Ut=0,qt=Mt.length;Ut<qt;Ut++){const se=s.get(Mt[Ut]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Fe(N)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Mt.length;Ut++){const qt=Mt[Ut];Y.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const se=c.convert(qt.format,qt.colorSpace),At=c.convert(qt.type),Rt=w(qt.internalFormat,se,At,qt.colorSpace,N.isXRRenderTarget===!0),kt=z(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Rt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(Y.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Lt(Y.__webglFramebuffer[Ut][qt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else Lt(Y.__webglFramebuffer[Ut],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ut=0,qt=Mt.length;Ut<qt;Ut++){const se=Mt[Ut],At=s.get(se);let Rt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,At.__webglTexture),nt(Rt,se),Lt(Y.__webglFramebuffer,N,se,r.COLOR_ATTACHMENT0+Ut,Rt,0),y(se)&&v(Rt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,gt.__webglTexture),nt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Lt(Y.__webglFramebuffer[qt],N,b,r.COLOR_ATTACHMENT0,Ut,qt);else Lt(Y.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ut,0);y(b)&&v(Ut),i.unbindTexture()}N.depthBuffer&&be(N)}function ue(N){const b=N.textures;for(let Y=0,gt=b.length;Y<gt;Y++){const Mt=b[Y];if(y(Mt)){const ht=L(N),Qt=s.get(Mt).__webglTexture;i.bindTexture(ht,Qt),v(ht),i.unbindTexture()}}}const Ie=[],ie=[];function qe(N){if(N.samples>0){if(Fe(N)===!1){const b=N.textures,Y=N.width,gt=N.height;let Mt=r.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(N),Ut=b.length>1;if(Ut)for(let se=0;se<b.length;se++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const qt=N.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let se=0;se<b.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[se]);const At=s.get(b[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,Y,gt,0,0,Y,gt,Mt,r.NEAREST),m===!0&&(Ie.length=0,ie.length=0,Ie.push(r.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ie.push(ht),ie.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let se=0;se<b.length;se++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[se]);const At=s.get(b[se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function z(N){return Math.min(l.maxSamples,N.samples)}function Fe(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function De(N,b){const Y=N.colorSpace,gt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Kr&&Y!==us&&(He.getTransfer(Y)===tn?(gt!==Gi||Mt!==vi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",Y)),b}function Ft(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=it,this.setTexture2D=ot,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=et,this.rebindTextures=rn,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ER(r,t){function i(s,l=us){let c;const f=He.getTransfer(l);if(s===vi)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Wv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vv)return r.BYTE;if(s===kv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===hp)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===wa)return r.HALF_FLOAT;if(s===Yv)return r.ALPHA;if(s===qv)return r.RGB;if(s===Gi)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===jv)return r.RED;if(s===mp)return r.RED_INTEGER;if(s===Zr)return r.RG;if(s===gp)return r.RG_INTEGER;if(s===_p)return r.RGBA_INTEGER;if(s===iu||s===au||s===su||s===ru)if(f===tn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Dd||s===Ud)return f===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Nd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ld)return c.COMPRESSED_R11_EAC;if(s===Od)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Pd)return c.COMPRESSED_RG11_EAC;if(s===zd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===qd||s===jd||s===Zd||s===Kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Id)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qd||s===Jd||s===$d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Qd)return f===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tp||s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===tp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TR=`
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

}`;class AR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ox(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ea({vertexShader:bR,fragmentShader:TR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new vu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RR extends Xs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",y=new AR,v={},L=i.getContextAttributes();let w=null,D=null;const F=[],B=[],I=new pe;let Q=null;const C=new Di;C.viewport=new vn;const U=new Di;U.viewport=new vn;const X=[C,U],it=new LE;let rt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=F[J];return dt===void 0&&(dt=new Jh,F[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=F[J];return dt===void 0&&(dt=new Jh,F[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=F[J];return dt===void 0&&(dt=new Jh,F[J]=dt),dt.getHandSpace()};function ot(J){const dt=B.indexOf(J.inputSource);if(dt===-1)return;const Lt=F[dt];Lt!==void 0&&(Lt.update(J.inputSource,J.frame,p||f),Lt.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let J=0;J<F.length;J++){const dt=B[J];dt!==null&&(B[J]=null,F[J].disconnect(dt))}rt=null,ct=null,y.reset();for(const J in v)delete v[J];t.setRenderTarget(w),M=null,S=null,_=null,l=null,D=null,Xt.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,zt=null,Yt=null;L.depth&&(Yt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=L.stencil?Hs:Da,zt=L.stencil?ll:$i);const be={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(be),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),D=new Qi(S.textureWidth,S.textureHeight,{format:Gi,type:vi,depthTexture:new hl(S.textureWidth,S.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Lt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Qi(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Xt.setContext(l),Xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(J){for(let dt=0;dt<J.removed.length;dt++){const Lt=J.removed[dt],zt=B.indexOf(Lt);zt>=0&&(B[zt]=null,F[zt].disconnect(Lt))}for(let dt=0;dt<J.added.length;dt++){const Lt=J.added[dt];let zt=B.indexOf(Lt);if(zt===-1){for(let be=0;be<F.length;be++)if(be>=B.length){B.push(Lt),zt=be;break}else if(B[be]===null){B[be]=Lt,zt=be;break}if(zt===-1)break}const Yt=F[zt];Yt&&Yt.connect(Lt)}}const et=new q,bt=new q;function mt(J,dt,Lt){et.setFromMatrixPosition(dt.matrixWorld),bt.setFromMatrixPosition(Lt.matrixWorld);const zt=et.distanceTo(bt),Yt=dt.projectionMatrix.elements,be=Lt.projectionMatrix.elements,rn=Yt[14]/(Yt[10]-1),Te=Yt[14]/(Yt[10]+1),ue=(Yt[9]+1)/Yt[5],Ie=(Yt[9]-1)/Yt[5],ie=(Yt[8]-1)/Yt[0],qe=(be[8]+1)/be[0],z=rn*ie,Fe=rn*qe,Ae=zt/(-ie+qe),De=Ae*-ie;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(Ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Yt[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ft=rn+Ae,N=Te+Ae,b=z-De,Y=Fe+(zt-De),gt=ue*Te/N*Ft,Mt=Ie*Te/N*Ft;J.projectionMatrix.makePerspective(b,Y,gt,Mt,Ft,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function O(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let dt=J.near,Lt=J.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),it.near=U.near=C.near=dt,it.far=U.far=C.far=Lt,(rt!==it.near||ct!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),rt=it.near,ct=it.far),it.layers.mask=J.layers.mask|6,C.layers.mask=it.layers.mask&3,U.layers.mask=it.layers.mask&5;const zt=J.parent,Yt=it.cameras;O(it,zt);for(let be=0;be<Yt.length;be++)O(Yt[be],zt);Yt.length===2?mt(it,C,U):it.projectionMatrix.copy(C.projectionMatrix),nt(J,it,zt)};function nt(J,dt,Lt){Lt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(Lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ul*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(J){return v[J]};let vt=null;function wt(J,dt){if(g=dt.getViewerPose(p||f),E=dt,g!==null){const Lt=g.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let zt=!1;Lt.length!==it.cameras.length&&(it.cameras.length=0,zt=!0);for(let Te=0;Te<Lt.length;Te++){const ue=Lt[Te];let Ie=null;if(M!==null)Ie=M.getViewport(ue);else{const qe=_.getViewSubImage(S,ue);Ie=qe.viewport,Te===0&&(t.setRenderTargetTextures(D,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(D))}let ie=X[Te];ie===void 0&&(ie=new Di,ie.layers.enable(Te),ie.viewport=new vn,X[Te]=ie),ie.matrix.fromArray(ue.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Te===0&&(it.matrix.copy(ie.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),zt===!0&&it.cameras.push(ie)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Te=_.getDepthInformation(Lt[0]);Te&&Te.isValid&&Te.texture&&y.init(Te,l.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Te=0;Te<Lt.length;Te++){const ue=Lt[Te].camera;if(ue){let Ie=v[ue];Ie||(Ie=new ox,v[ue]=Ie);const ie=_.getCameraImage(ue);Ie.sourceTexture=ie}}}}for(let Lt=0;Lt<F.length;Lt++){const zt=B[Lt],Yt=F[Lt];zt!==null&&Yt!==void 0&&Yt.update(zt,dt,p||f)}vt&&vt(J,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Xt=new dx;Xt.setAnimationLoop(wt),this.setAnimationLoop=function(J){vt=J},this.dispose=function(){}}}const zs=new ta,CR=new dn;function wR(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,ix(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,w,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,w):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===oi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===oi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=t.get(v),w=L.envMap,D=L.envMapRotation;w&&(y.envMap.value=w,zs.copy(D),zs.x*=-1,zs.y*=-1,zs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),y.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(zs)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,w){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=w*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===oi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const L=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function DR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const D=w.program;s.uniformBlockBinding(L,D)}function p(L,w){let D=l[L.id];D===void 0&&(E(L),D=g(L),l[L.id]=D,L.addEventListener("dispose",y));const F=w.program;s.updateUBOMapping(L,F);const B=t.render.frame;c[L.id]!==B&&(S(L),c[L.id]=B)}function g(L){const w=_();L.__bindingPointIndex=w;const D=r.createBuffer(),F=L.__size,B=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,D),D}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const w=l[L.id],D=L.uniforms,F=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let B=0,I=D.length;B<I;B++){const Q=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,U=Q.length;C<U;C++){const X=Q[C];if(M(X,B,C,F)===!0){const it=X.__offset,rt=Array.isArray(X.value)?X.value:[X.value];let ct=0;for(let ot=0;ot<rt.length;ot++){const P=rt[ot],G=T(P);typeof P=="number"||typeof P=="boolean"?(X.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,it+ct,X.__data)):P.isMatrix3?(X.__data[0]=P.elements[0],X.__data[1]=P.elements[1],X.__data[2]=P.elements[2],X.__data[3]=0,X.__data[4]=P.elements[3],X.__data[5]=P.elements[4],X.__data[6]=P.elements[5],X.__data[7]=0,X.__data[8]=P.elements[6],X.__data[9]=P.elements[7],X.__data[10]=P.elements[8],X.__data[11]=0):(P.toArray(X.__data,ct),ct+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(L,w,D,F){const B=L.value,I=w+"_"+D;if(F[I]===void 0)return typeof B=="number"||typeof B=="boolean"?F[I]=B:F[I]=B.clone(),!0;{const Q=F[I];if(typeof B=="number"||typeof B=="boolean"){if(Q!==B)return F[I]=B,!0}else if(Q.equals(B)===!1)return Q.copy(B),!0}return!1}function E(L){const w=L.uniforms;let D=0;const F=16;for(let I=0,Q=w.length;I<Q;I++){const C=Array.isArray(w[I])?w[I]:[w[I]];for(let U=0,X=C.length;U<X;U++){const it=C[U],rt=Array.isArray(it.value)?it.value:[it.value];for(let ct=0,ot=rt.length;ct<ot;ct++){const P=rt[ct],G=T(P),et=D%F,bt=et%G.boundary,mt=et+bt;D+=bt,mt!==0&&F-mt<G.storage&&(D+=F-mt),it.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=G.storage}}}const B=D%F;return B>0&&(D+=F-B),L.__size=D,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const D=f.indexOf(w.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const UR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function NR(){return Yi===null&&(Yi=new nE(UR,16,16,Zr,wa),Yi.name="DFG_LUT",Yi.minFilter=jn,Yi.magFilter=jn,Yi.wrapS=Aa,Yi.wrapT=Aa,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class LR{constructor(t={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=vi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=M,y=new Set([_p,gp,mp]),v=new Set([vi,$i,ol,ll,dp,pp]),L=new Uint32Array(4),w=new Int32Array(4);let D=null,F=null;const B=[],I=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=wi;let X=0,it=0,rt=null,ct=-1,ot=null;const P=new vn,G=new vn;let et=null;const bt=new Oe(0);let mt=0,O=i.width,nt=i.height,vt=1,wt=null,Xt=null;const J=new vn(0,0,O,nt),dt=new vn(0,0,O,nt);let Lt=!1;const zt=new Ep;let Yt=!1,be=!1;const rn=new dn,Te=new q,ue=new vn,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function qe(){return rt===null?vt:1}let z=s;function Fe(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fp}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",Ge,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const j="webgl2";if(z=Fe(j,R),z===null)throw Fe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Be("WebGLRenderer: "+R.message),R}let Ae,De,Ft,N,b,Y,gt,Mt,ht,Qt,Ut,qt,se,At,Rt,kt,Bt,Nt,ve,W,Ot,Ct,Gt,Tt;function xt(){Ae=new NA(z),Ae.init(),Ct=new ER(z,Ae),De=new EA(z,Ae,t,Ct),Ft=new yR(z,Ae),De.reversedDepthBuffer&&S&&Ft.buffers.depth.setReversed(!0),N=new PA(z),b=new rR,Y=new MR(z,Ae,Ft,b,De,Ct,N),gt=new TA(C),Mt=new UA(C),ht=new BE(z),Gt=new yA(z,ht),Qt=new LA(z,ht,N,Gt),Ut=new IA(z,Qt,ht,N),ve=new zA(z,De,Y),kt=new bA(b),qt=new sR(C,gt,Mt,Ae,De,Gt,kt),se=new wR(C,b),At=new lR,Rt=new pR(Ae),Nt=new SA(C,gt,Mt,Ft,Ut,E,m),Bt=new xR(C,Ut,De),Tt=new DR(z,N,De,Ft),W=new MA(z,Ae,N),Ot=new OA(z,Ae,N),N.programs=qt.programs,C.capabilities=De,C.extensions=Ae,C.properties=b,C.renderLists=At,C.shadowMap=Bt,C.state=Ft,C.info=N}xt(),T!==vi&&(Q=new BA(T,i.width,i.height,l,c));const Dt=new RR(C,z);this.xr=Dt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(O,nt,!1))},this.getSize=function(R){return R.set(O,nt)},this.setSize=function(R,j,lt=!0){if(Dt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,nt=j,i.width=Math.floor(R*vt),i.height=Math.floor(j*vt),lt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O*vt,nt*vt).floor()},this.setDrawingBufferSize=function(R,j,lt){O=R,nt=j,vt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(j*lt),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(T===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,j,lt,at){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,lt,at),Ft.viewport(P.copy(J).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,j,lt,at){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,j,lt,at),Ft.scissor(G.copy(dt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){Ft.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){wt=R},this.setTransparentSort=function(R){Xt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,lt=!0){let at=0;if(R){let K=!1;if(rt!==null){const It=rt.texture.format;K=y.has(It)}if(K){const It=rt.texture.type,Wt=v.has(It),Ht=Nt.getClearColor(),Zt=Nt.getClearAlpha(),$t=Ht.r,re=Ht.g,te=Ht.b;Wt?(L[0]=$t,L[1]=re,L[2]=te,L[3]=Zt,z.clearBufferuiv(z.COLOR,0,L)):(w[0]=$t,w[1]=re,w[2]=te,w[3]=Zt,z.clearBufferiv(z.COLOR,0,w))}else at|=z.COLOR_BUFFER_BIT}j&&(at|=z.DEPTH_BUFFER_BIT),lt&&(at|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",Ge,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Nt.dispose(),At.dispose(),Rt.dispose(),b.dispose(),gt.dispose(),Mt.dispose(),Ut.dispose(),Gt.dispose(),Tt.dispose(),qt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",oe),Dt.removeEventListener("sessionend",Ue),Ke.stop()};function fe(R){R.preventDefault(),E_("WebGLRenderer: Context Lost."),U=!0}function Ge(){E_("WebGLRenderer: Context Restored."),U=!1;const R=N.autoReset,j=Bt.enabled,lt=Bt.autoUpdate,at=Bt.needsUpdate,K=Bt.type;xt(),N.autoReset=R,Bt.enabled=j,Bt.autoUpdate=lt,Bt.needsUpdate=at,Bt.type=K}function Pe(R){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function V(R){const j=R.target;j.removeEventListener("dispose",V),yt(j)}function yt(R){Et(R),b.remove(R)}function Et(R){const j=b.get(R).programs;j!==void 0&&(j.forEach(function(lt){qt.releaseProgram(lt)}),R.isShaderMaterial&&qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,lt,at,K,It){j===null&&(j=Ie);const Wt=K.isMesh&&K.matrixWorld.determinant()<0,Ht=ds(R,j,lt,at,K);Ft.setMaterial(at,Wt);let Zt=lt.index,$t=1;if(at.wireframe===!0){if(Zt=Qt.getWireframeAttribute(lt),Zt===void 0)return;$t=2}const re=lt.drawRange,te=lt.attributes.position;let le=re.start*$t,Xe=(re.start+re.count)*$t;It!==null&&(le=Math.max(le,It.start*$t),Xe=Math.min(Xe,(It.start+It.count)*$t)),Zt!==null?(le=Math.max(le,0),Xe=Math.min(Xe,Zt.count)):te!=null&&(le=Math.max(le,0),Xe=Math.min(Xe,te.count));const fn=Xe-le;if(fn<0||fn===1/0)return;Gt.setup(K,at,Ht,lt,Zt);let ln,Ze=W;if(Zt!==null&&(ln=ht.get(Zt),Ze=Ot,Ze.setIndex(ln)),K.isMesh)at.wireframe===!0?(Ft.setLineWidth(at.wireframeLinewidth*qe()),Ze.setMode(z.LINES)):Ze.setMode(z.TRIANGLES);else if(K.isLine){let ne=at.linewidth;ne===void 0&&(ne=1),Ft.setLineWidth(ne*qe()),K.isLineSegments?Ze.setMode(z.LINES):K.isLineLoop?Ze.setMode(z.LINE_LOOP):Ze.setMode(z.LINE_STRIP)}else K.isPoints?Ze.setMode(z.POINTS):K.isSprite&&Ze.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ne=K._multiDrawStarts,We=K._multiDrawCounts,me=K._multiDrawCount,On=Zt?ht.get(Zt).bytesPerElement:1,ia=b.get(at).currentProgram.getUniforms();for(let Pn=0;Pn<me;Pn++)ia.setValue(z,"_gl_DrawID",Pn),Ze.render(ne[Pn]/On,We[Pn])}else if(K.isInstancedMesh)Ze.renderInstances(le,fn,K.count);else if(lt.isInstancedBufferGeometry){const ne=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,We=Math.min(lt.instanceCount,ne);Ze.renderInstances(le,fn,We)}else Ze.render(le,fn)};function Pt(R,j,lt){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=oi,R.needsUpdate=!0,Zn(R,j,lt),R.side=hs,R.needsUpdate=!0,Zn(R,j,lt),R.side=Hi):Zn(R,j,lt)}this.compile=function(R,j,lt=null){lt===null&&(lt=R),F=Rt.get(lt),F.init(j),I.push(F),lt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const at=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){const Ht=It[Wt];Pt(Ht,lt,K),at.add(Ht)}else Pt(It,lt,K),at.add(It)}),F=I.pop(),at},this.compileAsync=function(R,j,lt=null){const at=this.compile(R,j,lt);return new Promise(K=>{function It(){if(at.forEach(function(Wt){b.get(Wt).currentProgram.isReady()&&at.delete(Wt)}),at.size===0){K(R);return}setTimeout(It,10)}Ae.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let jt=null;function Jt(R){jt&&jt(R)}function oe(){Ke.stop()}function Ue(){Ke.start()}const Ke=new dx;Ke.setAnimationLoop(Jt),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(R){jt=R,Dt.setAnimationLoop(R),R===null?Ke.stop():Ke.start()},Dt.addEventListener("sessionstart",oe),Dt.addEventListener("sessionend",Ue),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const lt=Dt.enabled===!0&&Dt.isPresenting===!0,at=Q!==null&&(rt===null||lt)&&Q.begin(C,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(j),j=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,rt),F=Rt.get(R,I.length),F.init(j),I.push(F),rn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),zt.setFromProjectionMatrix(rn,Zi,j.reversedDepth),be=this.localClippingEnabled,Yt=kt.init(this.clippingPlanes,be),D=At.get(R,B.length),D.init(),B.push(D),Dt.enabled===!0&&Dt.isPresenting===!0){const Wt=C.xr.getDepthSensingMesh();Wt!==null&&xe(Wt,j,-1/0,C.sortObjects)}xe(R,j,0,C.sortObjects),D.finish(),C.sortObjects===!0&&D.sort(wt,Xt),ie=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ie&&Nt.addToRenderList(D,R),this.info.render.frame++,Yt===!0&&kt.beginShadows();const K=F.state.shadowsArray;if(Bt.render(K,R,j),Yt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&Q.hasRenderPass())===!1){const Wt=D.opaque,Ht=D.transmissive;if(F.setupLights(),j.isArrayCamera){const Zt=j.cameras;if(Ht.length>0)for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];je(Wt,Ht,R,te)}ie&&Nt.render(R);for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];de(D,R,te,te.viewport)}}else Ht.length>0&&je(Wt,Ht,R,j),ie&&Nt.render(R),de(D,R,j)}rt!==null&&it===0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt)),at&&Q.end(C),R.isScene===!0&&R.onAfterRender(C,R,j),Gt.resetDefaultState(),ct=-1,ot=null,I.pop(),I.length>0?(F=I[I.length-1],Yt===!0&&kt.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function xe(R,j,lt,at){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||zt.intersectsSprite(R)){at&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rn);const Wt=Ut.update(R),Ht=R.material;Ht.visible&&D.push(R,Wt,Ht,lt,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||zt.intersectsObject(R))){const Wt=Ut.update(R),Ht=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ue.copy(Wt.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(rn)),Array.isArray(Ht)){const Zt=Wt.groups;for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t],le=Ht[te.materialIndex];le&&le.visible&&D.push(R,Wt,le,lt,ue.z,te)}}else Ht.visible&&D.push(R,Wt,Ht,lt,ue.z,null)}}const It=R.children;for(let Wt=0,Ht=It.length;Wt<Ht;Wt++)xe(It[Wt],j,lt,at)}function de(R,j,lt,at){const{opaque:K,transmissive:It,transparent:Wt}=R;F.setupLightsView(lt),Yt===!0&&kt.setGlobalState(C.clippingPlanes,lt),at&&Ft.viewport(P.copy(at)),K.length>0&&mn(K,j,lt),It.length>0&&mn(It,j,lt),Wt.length>0&&mn(Wt,j,lt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function je(R,j,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const le=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Qi(1,1,{generateMipmaps:!0,type:le?wa:vi,minFilter:Bs,samples:De.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const It=F.state.transmissionRenderTarget[at.id],Wt=at.viewport||P;It.setSize(Wt.z*C.transmissionResolutionScale,Wt.w*C.transmissionResolutionScale);const Ht=C.getRenderTarget(),Zt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(bt),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),ie&&Nt.render(lt);const re=C.toneMapping;C.toneMapping=Ki;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),Yt===!0&&kt.setGlobalState(C.clippingPlanes,at),mn(R,lt,at),Y.updateMultisampleRenderTarget(It),Y.updateRenderTargetMipmap(It),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Xe=0,fn=j.length;Xe<fn;Xe++){const ln=j[Xe],{object:Ze,geometry:ne,material:We,group:me}=ln;if(We.side===Hi&&Ze.layers.test(at.layers)){const On=We.side;We.side=oi,We.needsUpdate=!0,na(Ze,lt,at,ne,We,me),We.side=On,We.needsUpdate=!0,le=!0}}le===!0&&(Y.updateMultisampleRenderTarget(It),Y.updateRenderTargetMipmap(It))}C.setRenderTarget(Ht,Zt,$t),C.setClearColor(bt,mt),te!==void 0&&(at.viewport=te),C.toneMapping=re}function mn(R,j,lt){const at=j.isScene===!0?j.overrideMaterial:null;for(let K=0,It=R.length;K<It;K++){const Wt=R[K],{object:Ht,geometry:Zt,group:$t}=Wt;let re=Wt.material;re.allowOverride===!0&&at!==null&&(re=at),Ht.layers.test(lt.layers)&&na(Ht,j,lt,Zt,re,$t)}}function na(R,j,lt,at,K,It){R.onBeforeRender(C,j,lt,at,K,It),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,j,lt,at,R,It),K.transparent===!0&&K.side===Hi&&K.forceSinglePass===!1?(K.side=oi,K.needsUpdate=!0,C.renderBufferDirect(lt,j,at,K,R,It),K.side=hs,K.needsUpdate=!0,C.renderBufferDirect(lt,j,at,K,R,It),K.side=Hi):C.renderBufferDirect(lt,j,at,K,R,It),R.onAfterRender(C,j,lt,at,K,It)}function Zn(R,j,lt){j.isScene!==!0&&(j=Ie);const at=b.get(R),K=F.state.lights,It=F.state.shadowsArray,Wt=K.state.version,Ht=qt.getParameters(R,K.state,It,j,lt),Zt=qt.getProgramCacheKey(Ht);let $t=at.programs;at.environment=R.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(R.isMeshStandardMaterial?Mt:gt).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",V),$t=new Map,at.programs=$t);let re=$t.get(Zt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===Wt)return io(R,Ht),re}else Ht.uniforms=qt.getUniforms(R),R.onBeforeCompile(Ht,C),re=qt.acquireProgram(Ht,Zt),$t.set(Zt,re),at.uniforms=Ht.uniforms;const te=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=kt.uniform),io(R,Ht),at.needsLights=Ua(R),at.lightsStateVersion=Wt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=re,at.uniformsList=null,re}function _l(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function io(R,j){const lt=b.get(R);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function ds(R,j,lt,at,K){j.isScene!==!0&&(j=Ie),Y.resetTextureUnits();const It=j.fog,Wt=at.isMeshStandardMaterial?j.environment:null,Ht=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Kr,Zt=(at.isMeshStandardMaterial?Mt:gt).get(at.envMap||Wt),$t=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,re=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!lt.morphAttributes.position,le=!!lt.morphAttributes.normal,Xe=!!lt.morphAttributes.color;let fn=Ki;at.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(fn=C.toneMapping);const ln=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ze=ln!==void 0?ln.length:0,ne=b.get(at),We=F.state.lights;if(Yt===!0&&(be===!0||R!==ot)){const In=R===ot&&at.id===ct;kt.setState(at,R,In)}let me=!1;at.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==We.state.version||ne.outputColorSpace!==Ht||K.isBatchedMesh&&ne.batching===!1||!K.isBatchedMesh&&ne.batching===!0||K.isBatchedMesh&&ne.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ne.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ne.instancing===!1||!K.isInstancedMesh&&ne.instancing===!0||K.isSkinnedMesh&&ne.skinning===!1||!K.isSkinnedMesh&&ne.skinning===!0||K.isInstancedMesh&&ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ne.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ne.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ne.instancingMorph===!1&&K.morphTexture!==null||ne.envMap!==Zt||at.fog===!0&&ne.fog!==It||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==kt.numPlanes||ne.numIntersection!==kt.numIntersection)||ne.vertexAlphas!==$t||ne.vertexTangents!==re||ne.morphTargets!==te||ne.morphNormals!==le||ne.morphColors!==Xe||ne.toneMapping!==fn||ne.morphTargetsCount!==Ze)&&(me=!0):(me=!0,ne.__version=at.version);let On=ne.currentProgram;me===!0&&(On=Zn(at,j,K));let ia=!1,Pn=!1,xi=!1;const Qe=On.getUniforms(),zn=ne.uniforms;if(Ft.useProgram(On.program)&&(ia=!0,Pn=!0,xi=!0),at.id!==ct&&(ct=at.id,Pn=!0),ia||ot!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Qe.setValue(z,"projectionMatrix",R.projectionMatrix),Qe.setValue(z,"viewMatrix",R.matrixWorldInverse);const Fn=Qe.map.cameraPosition;Fn!==void 0&&Fn.setValue(z,Te.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&Qe.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Qe.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),ot!==R&&(ot=R,Pn=!0,xi=!0)}if(ne.needsLights&&(We.state.directionalShadowMap.length>0&&Qe.setValue(z,"directionalShadowMap",We.state.directionalShadowMap,Y),We.state.spotShadowMap.length>0&&Qe.setValue(z,"spotShadowMap",We.state.spotShadowMap,Y),We.state.pointShadowMap.length>0&&Qe.setValue(z,"pointShadowMap",We.state.pointShadowMap,Y)),K.isSkinnedMesh){Qe.setOptional(z,K,"bindMatrix"),Qe.setOptional(z,K,"bindMatrixInverse");const In=K.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Qe.setValue(z,"boneTexture",In.boneTexture,Y))}K.isBatchedMesh&&(Qe.setOptional(z,K,"batchingTexture"),Qe.setValue(z,"batchingTexture",K._matricesTexture,Y),Qe.setOptional(z,K,"batchingIdTexture"),Qe.setValue(z,"batchingIdTexture",K._indirectTexture,Y),Qe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Qe.setValue(z,"batchingColorTexture",K._colorsTexture,Y));const An=lt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ve.update(K,lt,On),(Pn||ne.receiveShadow!==K.receiveShadow)&&(ne.receiveShadow=K.receiveShadow,Qe.setValue(z,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(zn.envMap.value=Zt,zn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(zn.envMapIntensity.value=j.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=NR()),Pn&&(Qe.setValue(z,"toneMappingExposure",C.toneMappingExposure),ne.needsLights&&ao(zn,xi),It&&at.fog===!0&&se.refreshFogUniforms(zn,It),se.refreshMaterialUniforms(zn,at,vt,nt,F.state.transmissionRenderTarget[R.id]),ou.upload(z,_l(ne),zn,Y)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ou.upload(z,_l(ne),zn,Y),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Qe.setValue(z,"center",K.center),Qe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Qe.setValue(z,"normalMatrix",K.normalMatrix),Qe.setValue(z,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const In=at.uniformsGroups;for(let Fn=0,Ys=In.length;Fn<Ys;Fn++){const Li=In[Fn];Tt.update(Li,On),Tt.bind(Li,On)}}return On}function ao(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Ua(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,j,lt){const at=b.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=j,b.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const lt=b.get(R);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const Na=z.createFramebuffer();this.setRenderTarget=function(R,j=0,lt=0){rt=R,X=j,it=lt;let at=null,K=!1,It=!1;if(R){const Ht=b.get(R);if(Ht.__useDefaultFramebuffer!==void 0){Ft.bindFramebuffer(z.FRAMEBUFFER,Ht.__webglFramebuffer),P.copy(R.viewport),G.copy(R.scissor),et=R.scissorTest,Ft.viewport(P),Ft.scissor(G),Ft.setScissorTest(et),ct=-1;return}else if(Ht.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Ht.__hasExternalTextures)Y.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(Ht.__boundDepthTexture!==re){if(re!==null&&b.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const $t=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[j])?at=$t[j][lt]:at=$t[j],K=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?at=b.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[lt]:at=$t,P.copy(R.viewport),G.copy(R.scissor),et=R.scissorTest}else P.copy(J).multiplyScalar(vt).floor(),G.copy(dt).multiplyScalar(vt).floor(),et=Lt;if(lt!==0&&(at=Na),Ft.bindFramebuffer(z.FRAMEBUFFER,at)&&Ft.drawBuffers(R,at),Ft.viewport(P),Ft.scissor(G),Ft.setScissorTest(et),K){const Ht=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht.__webglTexture,lt)}else if(It){const Ht=j;for(let Zt=0;Zt<R.textures.length;Zt++){const $t=b.get(R.textures[Zt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,lt,Ht)}}else if(R!==null&&lt!==0){const Ht=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ht.__webglTexture,lt)}ct=-1},this.readRenderTargetPixels=function(R,j,lt,at,K,It,Wt,Ht=0){if(!(R&&R.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){Ft.bindFramebuffer(z.FRAMEBUFFER,Zt);try{const $t=R.textures[Ht],re=$t.format,te=$t.type;if(!De.textureFormatReadable(re)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(te)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-at&&lt>=0&&lt<=R.height-K&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ht),z.readPixels(j,lt,at,K,Ct.convert(re),Ct.convert(te),It))}finally{const $t=rt!==null?b.get(rt).__webglFramebuffer:null;Ft.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,j,lt,at,K,It,Wt,Ht=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(j>=0&&j<=R.width-at&&lt>=0&&lt<=R.height-K){Ft.bindFramebuffer(z.FRAMEBUFFER,Zt);const $t=R.textures[Ht],re=$t.format,te=$t.type;if(!De.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ht),z.readPixels(j,lt,at,K,Ct.convert(re),Ct.convert(te),0);const Xe=rt!==null?b.get(rt).__webglFramebuffer:null;Ft.bindFramebuffer(z.FRAMEBUFFER,Xe);const fn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mM(z,fn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.deleteBuffer(le),z.deleteSync(fn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,lt=0){const at=Math.pow(2,-lt),K=Math.floor(R.image.width*at),It=Math.floor(R.image.height*at),Wt=j!==null?j.x:0,Ht=j!==null?j.y:0;Y.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,Wt,Ht,K,It),Ft.unbindTexture()};const ps=z.createFramebuffer(),La=z.createFramebuffer();this.copyTextureToTexture=function(R,j,lt=null,at=null,K=0,It=null){It===null&&(K!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=K,K=0):It=0);let Wt,Ht,Zt,$t,re,te,le,Xe,fn;const ln=R.isCompressedTexture?R.mipmaps[It]:R.image;if(lt!==null)Wt=lt.max.x-lt.min.x,Ht=lt.max.y-lt.min.y,Zt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,re=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const An=Math.pow(2,-K);Wt=Math.floor(ln.width*An),Ht=Math.floor(ln.height*An),R.isDataArrayTexture?Zt=ln.depth:R.isData3DTexture?Zt=Math.floor(ln.depth*An):Zt=1,$t=0,re=0,te=0}at!==null?(le=at.x,Xe=at.y,fn=at.z):(le=0,Xe=0,fn=0);const Ze=Ct.convert(j.format),ne=Ct.convert(j.type);let We;j.isData3DTexture?(Y.setTexture3D(j,0),We=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Y.setTexture2DArray(j,0),We=z.TEXTURE_2D_ARRAY):(Y.setTexture2D(j,0),We=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const me=z.getParameter(z.UNPACK_ROW_LENGTH),On=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ia=z.getParameter(z.UNPACK_SKIP_PIXELS),Pn=z.getParameter(z.UNPACK_SKIP_ROWS),xi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ln.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ln.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,te);const Qe=R.isDataArrayTexture||R.isData3DTexture,zn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const An=b.get(R),In=b.get(j),Fn=b.get(An.__renderTarget),Ys=b.get(In.__renderTarget);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Li=0;Li<Zt;Li++)Qe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(R).__webglTexture,K,te+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(j).__webglTexture,It,fn+Li)),z.blitFramebuffer($t,re,Wt,Ht,le,Xe,Wt,Ht,z.DEPTH_BUFFER_BIT,z.NEAREST);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||b.has(R)){const An=b.get(R),In=b.get(j);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,ps),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,La);for(let Fn=0;Fn<Zt;Fn++)Qe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,An.__webglTexture,K,te+Fn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,An.__webglTexture,K),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,In.__webglTexture,It,fn+Fn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,In.__webglTexture,It),K!==0?z.blitFramebuffer($t,re,Wt,Ht,le,Xe,Wt,Ht,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(We,It,le,Xe,fn+Fn,$t,re,Wt,Ht):z.copyTexSubImage2D(We,It,le,Xe,$t,re,Wt,Ht);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(We,It,le,Xe,fn,Wt,Ht,Zt,Ze,ne,ln.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(We,It,le,Xe,fn,Wt,Ht,Zt,Ze,ln.data):z.texSubImage3D(We,It,le,Xe,fn,Wt,Ht,Zt,Ze,ne,ln):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,le,Xe,Wt,Ht,Ze,ne,ln.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,le,Xe,ln.width,ln.height,Ze,ln.data):z.texSubImage2D(z.TEXTURE_2D,It,le,Xe,Wt,Ht,Ze,ne,ln);z.pixelStorei(z.UNPACK_ROW_LENGTH,me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,On),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ia),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xi),It===0&&j.generateMipmaps&&z.generateMipmap(We),Ft.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){X=0,it=0,rt=null,Ft.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),i.unpackColorSpace=He._getUnpackColorSpace()}}const Tv={type:"change"},Ap={type:"start"},vx={type:"end"},tu=new _u,Av=new cs,OR=Math.cos(70*Qv.DEG2RAD),Cn=new q,ri=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cd=1e-6;class PR extends IE{constructor(t,i=null){super(t,i),this.state=sn.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Vs,this._lastTargetPosition=new q,this._quat=new Vs().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tv,this._sphericalDelta=new tv,this._scale=1,this._panOffset=new q,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new q,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IR.bind(this),this._onPointerDown=zR.bind(this),this._onPointerUp=FR.bind(this),this._onContextMenu=WR.bind(this),this._onMouseWheel=GR.bind(this),this._onKeyDown=VR.bind(this),this._onTouchStart=kR.bind(this),this._onTouchMove=XR.bind(this),this._onMouseDown=BR.bind(this),this._onMouseMove=HR.bind(this),this._interceptControlDown=YR.bind(this),this._interceptControlUp=qR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tv),this.update(),this.state=sn.NONE}update(t=null){const i=this.object.position;Cn.copy(i).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ri:s>Math.PI&&(s-=ri),l<-Math.PI?l+=ri:l>Math.PI&&(l-=ri),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Cn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(tu.origin.copy(this.object.position),tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tu.direction))<OR?this.object.lookAt(this.target):(Av.setFromNormalAndCoplanarPoint(this.object.up,this.target),tu.intersectPlane(Av,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cd||this._lastTargetPosition.distanceToSquared(this.target)>cd?(this.dispatchEvent(Tv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ri/60*this.autoRotateSpeed*t:ri/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Cn.setFromMatrixColumn(i,0),Cn.multiplyScalar(-t),this._panOffset.add(Cn)}_panUp(t,i){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(i,1):(Cn.setFromMatrixColumn(i,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(t),this._panOffset.add(Cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Cn.copy(l).sub(this.target);let c=Cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new pe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function zR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function IR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function FR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vx),this.state=sn.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function BR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Ap)}function HR(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function GR(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(Ap),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(vx))}function VR(r){this.enabled!==!1&&this._handleKeyDown(r)}function kR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Ap)}function XR(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function WR(r){this.enabled!==!1&&r.preventDefault()}function YR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cp={InteriorWall:32768,ExteriorWall:16757760,Roof:8388608,InteriorFloor:8454143,ExposedFloor:4240639,Shade:16764573,UndergroundWall:10834432,UndergroundSlab:8404992,Ceiling:16744576,SurfaceAir:16776960,UndergroundCeiling:4227200,RaisedFloor:4931965,SlabOnGrade:8404992,FreestandingColumn:8421504,EmbeddedColumn:8421486,Unknown:9741240},ud=Object.keys(cp).filter(r=>r!=="Unknown"),Rv=["FixedWindow","OperableWindow","Door","Skylight","Air","Unknown"],Cv=7262198,jR=new Set(["FixedWindow","OperableWindow"]),ZR={id:"",area:0,zoneNames:[],levelIds:[],surfaceType:"Unknown"},KR={id:"",area:0,openingType:"Unknown",levelIds:[],parentSurfaceId:""};function QR(){const r=ge.useRef(null),t=ge.useRef(new il),i=ge.useRef(new OE),s=ge.useRef({key:"",index:0,ids:[]}),[l,c]=ge.useState(null),[f,d]=ge.useState([]),[m,p]=ge.useState([]),[g,_]=ge.useState([]),[S,M]=ge.useState(new Map),[E,T]=ge.useState(null),[y,v]=ge.useState("surface"),[L,w]=ge.useState(new Set),[D,F]=ge.useState(new Set),[B,I]=ge.useState("FixedWindow"),[Q,C]=ge.useState("Meters"),[U,X]=ge.useState(!0),[it,rt]=ge.useState(!0),[ct,ot]=ge.useState("both"),[P,G]=ge.useState(.5),[et,bt]=ge.useState(.5),[mt,O]=ge.useState("all"),[nt,vt]=ge.useState(!1),[wt,Xt]=ge.useState(!1),[J,dt]=ge.useState(!0),[Lt,zt]=ge.useState("No model"),[Yt,be]=ge.useState(""),[rn,Te]=ge.useState(null),[ue,Ie]=ge.useState(null),ie=ge.useRef(new Map),qe=ge.useRef(new Map),z=ge.useMemo(()=>f.find(V=>V.id===E)||ZR,[f,E]),Fe=ge.useMemo(()=>f.filter(V=>L.has(V.id)),[f,L]),Ae=ge.useMemo(()=>{if(y!=="surface"||Fe.length===0)return"";const V=Fe.map(yt=>S.get(`surface:${yt.id}`)||yt.surfaceType);return V.every(yt=>yt===V[0])?V[0]:""},[S,y,Fe]),De=ge.useMemo(()=>m.find(V=>V.id===E)||KR,[m,E]),Ft=ge.useMemo(()=>m.filter(V=>D.has(V.id)),[m,D]),N=ge.useMemo(()=>Ft.filter(Fr),[Ft]),b=ge.useMemo(()=>{if(y!=="opening"||Ft.length===0)return"";const V=Ft.map(yt=>S.get(`opening:${yt.id}`)||yt.openingType);return V.every(yt=>yt===V[0])?V[0]:""},[S,y,Ft]);function Y(){ie.current.forEach((V,yt)=>{const Et=y==="surface"&&L.has(yt);V.material.emissive?.setHex(Et?2042167:0)}),qe.current.forEach((V,yt)=>{const Et=y==="opening"&&D.has(yt);V.material.emissive?.setHex(Et?2042167:0)})}ge.useEffect(()=>{const V=r.current;if(!V)return;Ln.DEFAULT_UP.set(0,0,1);const yt=new eE;yt.background=new Oe(724756);const Et=new Di(50,V.clientWidth/V.clientHeight,.1,5e3);Et.up.set(0,0,1),Et.position.set(20,20,20);const Pt=new LR({canvas:V,antialias:!0});Pt.setPixelRatio(window.devicePixelRatio||1),Pt.setSize(V.clientWidth,V.clientHeight,!1);const jt=new NE(16777215,.6),Jt=new UE(16777215,.7);Jt.position.set(10,20,10),yt.add(jt,Jt);const oe=new PE(200,40,2792847,2042167);oe.rotation.x=Math.PI/2,yt.add(oe);const Ue=new zE(50);yt.add(Ue),yt.add(t.current);const Ke=new PR(Et,Pt.domElement);Ke.enableDamping=!0,Ie(Et),Te(Ke);let xe;const de=()=>{xe=requestAnimationFrame(de),Ke.update(),Pt.render(yt,Et)};de();const je=()=>{Et.aspect=V.clientWidth/V.clientHeight,Et.updateProjectionMatrix(),Pt.setSize(V.clientWidth,V.clientHeight,!1)};return window.addEventListener("resize",je),()=>{window.removeEventListener("resize",je),cancelAnimationFrame(xe),Ke.dispose(),Pt.dispose()}},[]);const gt=ge.useMemo(()=>mt==="all"?f:f.filter(V=>V.levelIds.includes(mt)),[f,mt]),Mt=ge.useMemo(()=>mt==="all"?m:m.filter(V=>V.levelIds.includes(mt)),[m,mt]),ht=S.size,Qt=V=>{const yt=V.target.files?.[0];if(!yt)return;const Et=new FileReader;Et.onload=()=>{try{const Pt=Et.result,{doc:jt,surfaces:Jt,levels:oe,openings:Ue,lengthUnit:Ke}=JR(Pt);c(jt),d(Jt),p(Ue),_(oe),M(new Map),O("all"),T(null),v("surface"),w(new Set),F(new Set),C(Ke);const xe=pC(Ke);G(xe),bt(xe),be(yt.name),zt(`Loaded ${Jt.length} surfaces`)}catch(Pt){console.error(Pt),zt("Failed to parse GBXML")}},Et.readAsText(yt)},Ut=()=>{ie.current.forEach(V=>V.material.emissive?.setHex(0)),qe.current.forEach(V=>V.material.emissive?.setHex(0))},qt=(V,yt=!1)=>{if(!V)return;const Et=f.find(Pt=>Pt.id===V);Et&&(mt!=="all"&&!Et.levelIds.includes(mt)||(Ut(),v("surface"),F(new Set),yt?w(Pt=>{const jt=y==="surface"?new Set(Pt):new Set;jt.has(V)?jt.delete(V):jt.add(V);const Jt=Array.from(jt);return T(Jt.length?Jt[Jt.length-1]:null),jt}):(w(new Set([V])),T(V))))},se=(V,yt=!1)=>{if(!V)return;const Et=m.find(Pt=>Pt.id===V);Et&&(mt!=="all"&&!Et.levelIds.includes(mt)||J&&(Ut(),v("opening"),w(new Set),yt?F(Pt=>{const jt=y==="opening"?new Set(Pt):new Set;jt.has(V)?jt.delete(V):jt.add(V);const Jt=Array.from(jt);return T(Jt.length?Jt[Jt.length-1]:null),jt}):(F(new Set([V])),T(V))))},At=V=>{const yt=new Set(V),Et=m.filter(Pt=>yt.has(Pt.parentSurfaceId)&&Fr(Pt));if(!Et.length){zt(`No windows found on the selected wall${yt.size===1?"":"s"}`);return}dt(!0),v("opening"),w(new Set),F(new Set(Et.map(Pt=>Pt.id))),T(Et[Et.length-1].id),zt(`Selected ${Et.length} window${Et.length===1?"":"s"} on ${yt.size} wall${yt.size===1?"":"s"}`)},Rt=()=>{w(new Set),T(null),zt("Surface selection cleared")},kt=V=>{if(!ue)return;const yt=V.currentTarget.getBoundingClientRect(),Et=new pe((V.clientX-yt.left)/yt.width*2-1,-((V.clientY-yt.top)/yt.height)*2+1),Pt=i.current;Pt.setFromCamera(Et,ue);const jt=[...Array.from(ie.current.values()),...J?Array.from(qe.current.values()):[]],Jt=Pt.intersectObjects(jt,!1);if(Jt.length){if(!V.shiftKey){const de=Jt.find(je=>je.object?.userData?.openingId);if(de){se(de.object.userData.openingId,V.ctrlKey||V.metaKey);return}}const oe=Jt.map(de=>de.object).filter(Boolean).filter(de=>{if(mt==="all")return!0;const je=de.userData.surfaceId?f.find(Zn=>Zn.id===de.userData.surfaceId):null,mn=de.userData.openingId?m.find(Zn=>Zn.id===de.userData.openingId):null;return(je?je.levelIds:mn?mn.levelIds:[]).includes(mt)});if(!oe.length)return;const Ue=`${Math.round(V.clientX)}:${Math.round(V.clientY)}:${mt}`,Ke=oe.map(de=>de.userData.surfaceId||de.userData.openingId);V.shiftKey&&s.current.key===Ue&&hC(s.current.ids,Ke)?s.current.index=(s.current.index+1)%Ke.length:s.current={key:Ue,index:0,ids:Ke};const xe=oe[s.current.index];xe.userData.surfaceId?qt(xe.userData.surfaceId,!0):xe.userData.openingId&&se(xe.userData.openingId,V.ctrlKey||V.metaKey)}},Bt=V=>{const yt=V.target.value,Et=y==="surface"&&L.size>0?Array.from(L):z?.id?[z.id]:[];Et.length!==0&&M(Pt=>{const jt=new Map(Pt);return Et.forEach(Jt=>{jt.set(`surface:${Jt}`,yt)}),jt})},Nt=V=>{const yt=V.target.value,Et=D.size?Array.from(D):De?.id?[De.id]:[];Et.length&&M(Pt=>{const jt=new Map(Pt);return Et.forEach(Jt=>jt.set(`opening:${Jt}`,yt)),jt})},ve=()=>{if(!l||N.length===0)return;const V=Number(P),yt=Number(et);if(U&&(!Number.isFinite(V)||V<=0)){zt("Horizontal shade depth must be greater than zero");return}if(it&&(!Number.isFinite(yt)||yt<=0)){zt("Vertical shade depth must be greater than zero");return}const Et=new Set(N.map(xe=>xe.id)),Pt=new Set;U&&Pt.add("horizontal"),it&&(ct==="left"||ct==="both")&&Pt.add("vertical-left"),it&&(ct==="right"||ct==="both")&&Pt.add("vertical-right");const jt=[],Jt=new Map;f.forEach(xe=>{const de=xe.shadeFor&&Et.has(xe.shadeFor);if(de&&!Pt.has(xe.shadeKind)){xe.element?.parentNode?.removeChild(xe.element);return}jt.push(xe),de&&Jt.set(`${xe.shadeFor}:${xe.shadeKind}`,xe)});const oe=[];let Ue=0;N.forEach(xe=>{const de=f.find(mn=>mn.id===xe.parentSurfaceId),je=de?gC(xe,de,{horizontalDepth:V,verticalDepth:yt,desiredKinds:Pt}):[];if(!de||je.length!==Pt.size){Ue+=1;return}je.forEach(mn=>{const na=`${xe.id}:${mn.kind}`,Zn=Jt.get(na);Zn?(vC(l,Zn.element,mn.points),Zn.points=mn.points,Zn.area=$r(mn.points)):oe.push(_C(l,de,xe,mn,jt.concat(oe)))})}),d([...jt,...oe]);const Ke=N.length-Ue;if(Pt.size===0){zt(`Removed generated shades from ${N.length} window${N.length===1?"":"s"}`);return}zt(Ue?`Applied shades to ${Ke} window${Ke===1?"":"s"}; skipped ${Ue} unsupported geometry`:`Applied shades to ${Ke} window${Ke===1?"":"s"}`)},W=()=>{if(!l||S.size===0)return;const{updatedSurfaces:V,updatedOpenings:yt}=Ot(f,m,S);d(V),p(yt),M(new Map),zt("Model updated")},Ot=(V,yt,Et)=>{const Pt=V.map(Jt=>{const oe=`surface:${Jt.id}`;if(!Et.has(oe))return Jt;const Ue=Et.get(oe);return Jt.element.setAttribute("surfaceType",Ue),ie.current.has(Jt.id)&&ie.current.get(Jt.id).material.color.setHex(fd(Ue)),{...Jt,surfaceType:Ue}}),jt=yt.map(Jt=>{const oe=`opening:${Jt.id}`;if(!Et.has(oe))return Jt;const Ue=Et.get(oe);return Jt.element.setAttribute("openingType",Ue),{...Jt,openingType:Ue}});return{updatedSurfaces:Pt,updatedOpenings:jt}},Ct=()=>{if(!z?.id||!window.confirm(`Delete surface ${z.id}? This will remove its openings too.`))return;Ut(),z.element?.parentNode&&z.element.parentNode.removeChild(z.element);const yt=new Set(m.filter(Et=>Et.parentSurfaceId===z.id).map(Et=>Et.id));d(Et=>Et.filter(Pt=>Pt.id!==z.id)),p(Et=>Et.filter(Pt=>Pt.parentSurfaceId!==z.id)),M(Et=>{const Pt=new Map(Et);return Pt.delete(`surface:${z.id}`),yt.forEach(jt=>Pt.delete(`opening:${jt}`)),Pt}),T(null),v("surface"),w(new Set),F(new Set),zt(`Deleted surface ${z.id}`)},Gt=()=>{if(!l||!z?.id||!z.element||z.points.length<3)return;const V=Gr(z.element,"PlanarGeometry");if(!V){zt("Selected surface has no geometry to convert");return}const yt=nC(z,f);if(!yt){zt(`No host surface found for ${z.id}`);return}const Et=dC(yt.id,m),Pt=yt.element.namespaceURI||l.documentElement.namespaceURI||null,jt=Pt?l.createElementNS(Pt,"Opening"):l.createElement("Opening");jt.setAttribute("id",Et),jt.setAttribute("openingType",B),jt.appendChild(V.cloneNode(!0)),yt.element.appendChild(jt),z.element.parentNode&&z.element.parentNode.removeChild(z.element);const Jt={id:Et,element:jt,openingType:B,points:z.points.map(oe=>oe.clone()),area:z.area,levelIds:yt.levelIds.length?[...yt.levelIds]:[...z.levelIds],parentSurfaceId:yt.id};Ut(),d(oe=>oe.filter(Ue=>Ue.id!==z.id)),p(oe=>[...oe,Jt]),M(oe=>{const Ue=new Map(oe);return Ue.delete(`surface:${z.id}`),Ue}),dt(!0),v("opening"),T(Et),w(new Set),F(new Set([Et])),zt(`Converted ${z.id} to ${B}`)},Tt=()=>{if(!l)return;if(S.size>0){const{updatedSurfaces:Jt,updatedOpenings:oe}=Ot(f,m,S);d(Jt),p(oe),M(new Map)}const yt=new XMLSerializer().serializeToString(l),Et=new Blob([yt],{type:"application/xml"}),Pt=URL.createObjectURL(Et),jt=document.createElement("a");jt.href=Pt,jt.download=cC(Yt),jt.click(),URL.revokeObjectURL(Pt)};function xt(){const V=t.current;V.clear(),ie.current.clear(),qe.current.clear(),f.forEach(Et=>{if(!Et.points.length)return;const Pt=Dv(Et.points);if(!Pt)return;const jt=xx(Et.surfaceType,nt),Jt=new Z_({color:fd(Et.surfaceType),transparent:jt.transparent,opacity:jt.opacity,depthWrite:jt.depthWrite,side:Hi,roughness:.45}),oe=new Ni(Pt,Jt);oe.userData.surfaceId=Et.id,oe.userData.surfaceType=Et.surfaceType,V.add(oe);const Ue=new du(new W_(Pt),new fl({color:2042167}));Ue.raycast=()=>null,oe.add(Ue),oe.userData.edges=Ue,ie.current.set(Et.id,oe),Sx(oe)}),m.forEach(Et=>{if(!Et.points.length)return;const Pt=Dv(Et.points);if(!Pt)return;const jt=new Z_({color:Cv,side:Hi,transparent:!0,opacity:.45,roughness:.15,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Jt=new Ni(Pt,jt);Jt.userData.openingId=Et.id,Jt.userData.kind="opening",Jt.renderOrder=2,t.current.add(Jt);const oe=new du(new W_(Pt),new fl({color:9741240,transparent:!0,opacity:.7}));oe.raycast=()=>null,oe.renderOrder=3,Jt.add(oe),qe.current.set(Et.id,Jt)}),V.position.set(0,0,0),V.rotation.set(0,0,0);const yt=new Ws().setFromObject(V);if(!yt.isEmpty()&&ue&&rn){const Et=yt.getSize(new q),Pt=Math.max(Et.x,Et.y,Et.z)||1;V.position.set(-yt.min.x,-yt.min.y,-yt.min.z);const jt=new q(Et.x/2,Et.y/2,Et.z/2),Jt=ue.position.clone().sub(rn.target),oe=Jt.length()>.001?Jt.normalize():new q(1,1,1).normalize(),Ue=Qv.degToRad(ue.fov||50),Ke=ue.aspect||1,xe=2*Math.atan(Math.tan(Ue/2)*Ke),de=Math.min(Ue,xe),je=Pt*.9/Math.tan(de/2);rn.target.copy(jt),ue.position.copy(jt).addScaledVector(oe,je),ue.near=Pt/100,ue.far=Pt*20,ue.lookAt(jt),ue.updateProjectionMatrix()}}function Dt(){if(Ge(),y==="surface"&&L.size>0){const V=new Set;if(L.forEach(yt=>{const Et=f.find(oe=>oe.id===yt),Pt=!Et||mt==="all"||Et.levelIds.includes(mt),jt=Et?ie.current.get(Et.id):null,Jt=jt?jt.userData.hiddenExterior===!0:!1;Et&&Pt&&!Jt&&V.add(yt)}),V.size!==L.size){const yt=Array.from(V);w(V),T(yt.includes(E)?E:yt[yt.length-1]||null)}}else if(y==="opening"&&D.size>0){const V=new Set(Array.from(D).filter(yt=>{const Et=m.find(Pt=>Pt.id===yt);return Et&&J&&(mt==="all"||Et.levelIds.includes(mt))}));if(V.size!==D.size){const yt=Array.from(V);F(V),T(yt.includes(E)?E:yt[yt.length-1]||null)}}}function fe(){if(ie.current.forEach(V=>{const yt=V.userData.surfaceType||"Unknown",Et=lC(yt);V.userData.hiddenExterior=wt&&Et}),Ge(),y==="surface"&&L.size>0){const V=new Set(Array.from(L).filter(yt=>{const Et=ie.current.get(yt);return Et&&Et.visible}));if(V.size!==L.size){const yt=Array.from(V);w(V),T(yt.includes(E)?E:yt[yt.length-1]||null)}}}function Ge(){const V=new Set(gt.map(Et=>Et.id));ie.current.forEach((Et,Pt)=>{const jt=V.has(Pt),Jt=Et.userData.hiddenExterior===!0;Et.visible=jt&&!Jt});const yt=new Set(Mt.map(Et=>Et.id));qe.current.forEach((Et,Pt)=>{const jt=yt.has(Pt);Et.visible=J&&jt})}ge.useEffect(()=>{xt()},[f,m,ue,rn]),ge.useEffect(()=>{Dt()},[mt,f,m,J]),ge.useEffect(()=>{uC(ie,nt),fC(qe),fe()},[nt,wt,f,m,J]),ge.useEffect(()=>{Y()},[y,E,L,D,f,m]);const Pe=l?"badge":"badge badge--idle";return ft.jsxs("div",{className:"app",children:[ft.jsxs("aside",{className:"panel",children:[ft.jsxs("div",{className:"panel__header",children:[ft.jsxs("div",{children:[ft.jsx("h1",{children:"GBXML Viewer"}),ft.jsx("p",{children:"Load a GBXML file, inspect surfaces, and edit surface types."})]}),ft.jsx("span",{className:Pe,children:Lt})]}),ft.jsxs("div",{className:"panel__section",children:[ft.jsxs("label",{className:"file",children:[ft.jsx("input",{id:"fileInput",type:"file",accept:".xml,.gbxml",onChange:Qt}),ft.jsx("span",{children:"Choose GBXML File"})]}),ft.jsxs("div",{className:"actions",children:[ft.jsx("button",{className:"primary",onClick:W,disabled:ht===0,children:"Update Model"}),ft.jsx("button",{onClick:Tt,disabled:f.length===0,children:"Download GBXML"})]})]}),ft.jsxs("div",{className:"panel__section",children:[ft.jsx("h2",{children:"Levels"}),ft.jsxs("div",{className:"surface",children:[ft.jsx("label",{htmlFor:"levelSelect",children:"Visible level"}),ft.jsxs("select",{id:"levelSelect",value:mt,onChange:V=>O(V.target.value),disabled:g.length===0,children:[ft.jsx("option",{value:"all",children:"All levels"}),g.map(V=>ft.jsx("option",{value:V.id,children:V.displayName||V.name},V.id))]})]}),ft.jsxs("div",{className:"toggle",children:[ft.jsx("label",{htmlFor:"xrayToggle",children:"X-ray exterior"}),ft.jsx("input",{id:"xrayToggle",type:"checkbox",checked:nt,onChange:V=>vt(V.target.checked)})]}),ft.jsxs("div",{className:"toggle",children:[ft.jsx("label",{htmlFor:"hideExteriorToggle",children:"Hide exterior"}),ft.jsx("input",{id:"hideExteriorToggle",type:"checkbox",checked:wt,onChange:V=>Xt(V.target.checked)})]}),ft.jsxs("div",{className:"toggle",children:[ft.jsx("label",{htmlFor:"openingsToggle",children:"Show openings"}),ft.jsx("input",{id:"openingsToggle",type:"checkbox",checked:J,onChange:V=>dt(V.target.checked)})]})]}),ft.jsxs("div",{className:"panel__section",children:[ft.jsx("h2",{children:"Selected Item"}),ft.jsx("div",{className:"surface",children:y==="surface"&&Fe.length>1?ft.jsxs(ft.Fragment,{children:[ft.jsxs("div",{children:[ft.jsx("label",{children:"Selected Surfaces"}),ft.jsx("div",{children:Fe.length})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Total Area"}),ft.jsx("div",{children:Fe.reduce((V,yt)=>V+(yt.area||0),0).toFixed(2)})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Surface Type"}),ft.jsxs("select",{value:Ae,onChange:Bt,children:[Ae===""?ft.jsx("option",{value:"",disabled:!0,children:"Mixed types"}):null,ud.map(V=>ft.jsx("option",{value:V,children:V},V))]})]}),Fe.some(V=>m.some(yt=>yt.parentSurfaceId===V.id&&Fr(yt)))?ft.jsx("button",{className:"secondary",onClick:()=>At(Fe.map(V=>V.id)),children:"Select windows on selected walls"}):null]}):E&&y==="surface"?ft.jsxs(ft.Fragment,{children:[ft.jsxs("div",{children:[ft.jsx("label",{children:"Surface ID"}),ft.jsx("div",{children:z.id||"Unknown"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Surface Area"}),ft.jsx("div",{children:z.area?z.area.toFixed(2):"0.00"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Level"}),ft.jsx("div",{children:z.levelIds.length?z.levelIds.map(V=>hd(g,V)).join(", "):"Unknown"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Zone"}),ft.jsx("div",{children:z.zoneNames.length?z.zoneNames.join(", "):"Unknown"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Surface Type"}),ft.jsx("select",{value:Ae||S.get(`surface:${z.id}`)||z.surfaceType,onChange:Bt,children:ud.map(V=>ft.jsx("option",{value:V,children:V},V))})]}),ft.jsxs("div",{className:"surface__split",children:[ft.jsxs("div",{children:[ft.jsx("label",{htmlFor:"newOpeningType",children:"Opening Type"}),ft.jsx("select",{id:"newOpeningType",value:B,onChange:V=>I(V.target.value),children:Rv.map(V=>ft.jsx("option",{value:V,children:V},V))})]}),ft.jsx("button",{className:"secondary",onClick:Gt,children:"Convert"})]}),ft.jsx("button",{className:"danger",onClick:Ct,children:"Delete Surface"}),m.some(V=>V.parentSurfaceId===z.id&&Fr(V))?ft.jsx("button",{className:"secondary",onClick:()=>At([z.id]),children:"Select windows on wall"}):null]}):y==="opening"&&Ft.length>0?ft.jsxs(ft.Fragment,{children:[ft.jsxs("div",{children:[ft.jsx("label",{children:Ft.length>1?"Selected Openings":"Opening ID"}),ft.jsx("div",{children:Ft.length>1?Ft.length:De.id||"Unknown"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:Ft.length>1?"Total Area":"Opening Area"}),ft.jsx("div",{children:Ft.reduce((V,yt)=>V+(yt.area||0),0).toFixed(2)})]}),Ft.length===1?ft.jsxs("div",{children:[ft.jsx("label",{children:"Level"}),ft.jsx("div",{children:De.levelIds.length?De.levelIds.map(V=>hd(g,V)).join(", "):"Unknown"})]}):null,ft.jsxs("div",{children:[ft.jsx("label",{children:new Set(Ft.map(V=>V.parentSurfaceId)).size>1?"Parent Surfaces":"Parent Surface"}),ft.jsx("div",{children:Array.from(new Set(Ft.map(V=>V.parentSurfaceId))).join(", ")||"Unknown"})]}),ft.jsxs("div",{children:[ft.jsx("label",{children:"Opening Type"}),ft.jsxs("select",{value:b,onChange:Nt,children:[b===""?ft.jsx("option",{value:"",disabled:!0,children:"Mixed types"}):null,Rv.map(V=>ft.jsx("option",{value:V,children:V},V))]})]}),new Set(N.map(V=>V.parentSurfaceId)).size===1?ft.jsx("button",{className:"secondary",onClick:()=>At([N[0].parentSurfaceId]),children:"Select windows on wall"}):null,N.length>0?ft.jsxs("div",{className:"shade-editor",children:[ft.jsxs("div",{className:"shade-editor__title",children:["Window shades (",N.length,")"]}),ft.jsxs("label",{className:"shade-option",children:[ft.jsx("span",{children:"Horizontal overhang"}),ft.jsx("input",{type:"checkbox",checked:U,onChange:V=>X(V.target.checked)})]}),ft.jsxs("label",{htmlFor:"horizontalShadeDepth",children:["Horizontal depth (",Q,")"]}),ft.jsx("input",{id:"horizontalShadeDepth",type:"number",min:"0",step:"any",value:P,disabled:!U,onChange:V=>G(V.target.value)}),ft.jsxs("label",{className:"shade-option",children:[ft.jsx("span",{children:"Vertical fins"}),ft.jsx("input",{type:"checkbox",checked:it,onChange:V=>rt(V.target.checked)})]}),ft.jsx("label",{htmlFor:"verticalShadeSides",children:"Vertical sides"}),ft.jsxs("select",{id:"verticalShadeSides",value:ct,disabled:!it,onChange:V=>ot(V.target.value),children:[ft.jsx("option",{value:"both",children:"Both sides"}),ft.jsx("option",{value:"left",children:"Left only"}),ft.jsx("option",{value:"right",children:"Right only"})]}),ft.jsxs("label",{htmlFor:"verticalShadeDepth",children:["Vertical depth (",Q,")"]}),ft.jsx("input",{id:"verticalShadeDepth",type:"number",min:"0",step:"any",value:et,disabled:!it,onChange:V=>bt(V.target.value)}),ft.jsx("button",{className:"primary",onClick:ve,children:"Apply shades"}),ft.jsx("div",{className:"shade-editor__help",children:"Clear both options and apply to remove generated shades."})]}):ft.jsx("div",{className:"placeholder",children:"Shades can be added to fixed and operable windows."})]}):ft.jsx("div",{className:"placeholder",children:"Click a surface or opening to see details."})})]}),ft.jsxs("div",{className:"panel__section",children:[ft.jsx("h2",{children:"Surfaces"}),ft.jsx("p",{className:"selection-help",children:"Click walls in the model or list to add or remove them."}),ft.jsx("div",{className:"selection-actions",children:ft.jsx("button",{onClick:Rt,disabled:y!=="surface"||L.size===0,children:"Clear wall selection"})}),ft.jsx("div",{className:"surface-list",children:gt.map(V=>ft.jsxs("button",{className:y==="surface"&&L.has(V.id)?"active":"",onClick:()=>qt(V.id,!0),children:[V.id||"Surface"," - ",V.surfaceType,V.levelIds.length?` - ${hd(g,V.levelIds[0])}`:""]},V.id))})]}),ft.jsxs("div",{className:"panel__section",children:[ft.jsx("h2",{children:"Windows"}),ft.jsxs("div",{className:"surface-list",children:[Mt.filter(Fr).map(V=>ft.jsxs("button",{className:y==="opening"&&D.has(V.id)?"active":"",onClick:yt=>se(V.id,yt.ctrlKey||yt.metaKey),children:[V.id," - ",V.parentSurfaceId]},V.id)),Mt.filter(Fr).length===0?ft.jsx("div",{className:"placeholder",children:"No windows on the visible level."}):null]})]})]}),ft.jsxs("main",{className:"viewport",children:[ft.jsx("canvas",{ref:r,id:"scene",onPointerDown:kt}),ft.jsxs("div",{className:"legend legend--overlay",children:[ft.jsx("div",{className:"legend__title",children:"Legend"}),ft.jsxs("div",{className:"legend__list",children:[ud.map(V=>ft.jsxs("div",{className:"legend__item",children:[ft.jsx("span",{className:"legend__swatch",style:{background:Nv(fd(V))}}),ft.jsx("span",{children:V})]},V)),ft.jsxs("div",{className:"legend__item",children:[ft.jsx("span",{className:"legend__swatch",style:{background:Nv(Cv)}}),ft.jsx("span",{children:"Openings"})]})]})]}),ft.jsx("div",{className:"hint",children:"Drag to orbit - Scroll to zoom - Click walls to add/remove - Shift-click to cycle"})]})]})}function JR(r){const i=new DOMParser().parseFromString(r,"application/xml");if(i.getElementsByTagName("parsererror").length)throw new Error("Invalid XML");const s=i.documentElement.getAttribute("lengthUnit")||"model units",l=new Map;Array.from(i.getElementsByTagNameNS("*","BuildingStorey")).forEach((E,T)=>{const y=E.getAttribute("id")||`storey-${T+1}`,v=eu(E,["Name","StoreyName"])||E.getAttribute("name")||y,L=eu(E,["Level","Elevation"]),w=Number.parseFloat(L);l.set(y,{id:y,name:v,elevation:Number.isFinite(w)?w:null})});const f=new Map;Array.from(i.getElementsByTagNameNS("*","Zone")).forEach(E=>{const T=E.getAttribute("id")||"",y=eu(E,["Name","ZoneName"])||E.getAttribute("name")||T;T&&f.set(T,y)});const m=new Map;Array.from(i.getElementsByTagNameNS("*","Space")).forEach(E=>{const T=E.getAttribute("id")||"",y=eu(E,["Name","SpaceName"])||E.getAttribute("name")||T,v=Gr(E,"ZoneIdRef"),L=v?v.getAttribute("zoneIdRef"):null,w=E.getAttribute("buildingStoreyIdRef")||E.getAttribute("buildingStoreyRef"),D=Gr(E,"BuildingStoreyIdRef"),F=w||(D?D.getAttribute("buildingStoreyIdRef"):null);m.set(T,{name:y,zoneId:L,storeyId:F})});const g=[],_=Array.from(i.getElementsByTagNameNS("*","Surface")).map((E,T)=>{const y=E.getAttribute("id")||`surface-${T+1}`,v=E.getAttribute("surfaceType")||"Unknown",L=$R(E,"Name"),w=mC(L),D=Array.from(E.getElementsByTagNameNS("*","AdjacentSpaceId")).map(ct=>ct.getAttribute("spaceIdRef")).filter(Boolean),F=D.map(ct=>{const ot=m.get(ct);return ot&&((ot.zoneId?f.get(ot.zoneId):null)||ot.name)||null}).filter(Boolean),B=Gr(E,"PolyLoop"),I=B?wv(B):[],Q=$r(I),C=I.length?Math.min(...I.map(ct=>ct.z)):null,U=D.map(ct=>{const ot=m.get(ct);return ot?ot.storeyId:null}).filter(Boolean),X=U.map(ct=>{const ot=l.get(ct);return ot?ot.name:null}).filter(Boolean),it={id:y,element:E,surfaceType:v,points:I,area:Q,zoneNames:F,minZ:C,levelIds:U,levelNames:X,name:L,shadeFor:w?.openingId||null,shadeKind:w?.kind||null};return[...Array.from(E.getElementsByTagNameNS("*","Opening")),...Array.from(E.getElementsByTagNameNS("*","Aperture"))].forEach((ct,ot)=>{const P=ct.getAttribute("id")||`${y}-opening-${ot+1}`,G=ct.getAttribute("openingType")||ct.getAttribute("type")||"Unknown",et=Gr(ct,"PolyLoop"),bt=et?wv(et):[],mt=$r(bt);g.push({id:P,element:ct,openingType:G,points:bt,area:mt,levelIds:[...U],parentSurfaceId:y})}),it}),S=tC(l,_);eC(S,_);const M=new Map(_.map(E=>[E.id,E]));return g.forEach(E=>{if(E.levelIds.length)return;const T=M.get(E.parentSurfaceId);T&&(E.levelIds=[...T.levelIds])}),{doc:i,surfaces:_,levels:S,openings:g,lengthUnit:s}}function $R(r,t){return Array.from(r.childNodes).find(s=>s.nodeType===1&&(s.localName||s.nodeName.split(":").pop())===t)?.textContent?.trim()||""}function eu(r,t){for(const i of t){const s=Gr(r,i);if(s&&s.textContent)return s.textContent.trim()}return""}function Gr(r,t){const i=r.getElementsByTagNameNS("*",t);return i.length?i[0]:null}function wv(r){const i=Array.from(r.getElementsByTagNameNS("*","CartesianPoint")).map(s=>{const l=Array.from(s.getElementsByTagNameNS("*","Coordinate")).map(c=>Number(c.textContent)).filter(c=>Number.isFinite(c));return l.length<3?null:new q(l[0],l[1],l[2])}).filter(Boolean);if(i.length>2){const s=i[0],l=i[i.length-1];s.distanceTo(l)<1e-6&&i.pop()}return i}function tC(r,t){if(r.size)return Array.from(r.values()).sort((c,f)=>c.elevation===null&&f.elevation===null?c.name.localeCompare(f.name):c.elevation===null?1:f.elevation===null?-1:c.elevation-f.elevation).map((c,f)=>({id:c.id,name:c.name,displayName:`Level ${f}`}));const i=new Map;return t.forEach(l=>{if(l.minZ===null)return;const f=(Math.round(l.minZ*100)/100).toFixed(2);i.has(f)||i.set(f,{id:`z-${f}`,name:`Z ${f}`})}),Array.from(i.values()).sort((l,c)=>{const f=Number.parseFloat(l.name.replace("Z ","")),d=Number.parseFloat(c.name.replace("Z ",""));return f-d}).map((l,c)=>({...l,displayName:`Level ${c}`}))}function eC(r,t){r.some(s=>!s.id.startsWith("z-"))&&r.length>0||t.forEach(s=>{if(s.levelIds.length||s.minZ===null)return;const c=(Math.round(s.minZ*100)/100).toFixed(2),f=`z-${c}`;s.levelIds=[f],s.levelNames=[`Z ${c}`]})}function $r(r){if(!r||r.length<3)return 0;const t=new q;for(let i=0;i<r.length;i+=1){const s=r[i],l=r[(i+1)%r.length];t.x+=(s.y-l.y)*(s.z+l.z),t.y+=(s.z-l.z)*(s.x+l.x),t.z+=(s.x-l.x)*(s.y+l.y)}return .5*t.length()}function Dv(r){if(r.length<3)return null;const t=pu(r);if(t.length()<1e-6)return null;const i=new q,s=new q,l=Math.abs(t.x)>.9?new q(0,1,0):new q(1,0,0);i.crossVectors(l,t).normalize(),s.crossVectors(t,i).normalize();const c=r.map(g=>new pe(g.dot(i),g.dot(s))),f=bp.triangulateShape(c,[]);if(!f.length)return null;const d=[];r.forEach(g=>d.push(g.x,g.y,g.z));const m=[];f.forEach(g=>m.push(g[0],g[1],g[2]));const p=new li;return p.setAttribute("position",new Xn(d,3)),p.setIndex(m),p.computeVertexNormals(),p}function pu(r){const t=new q;for(let i=0;i<r.length;i+=1){const s=r[i],l=r[(i+1)%r.length];t.x+=(s.y-l.y)*(s.z+l.z),t.y+=(s.z-l.z)*(s.x+l.x),t.z+=(s.x-l.x)*(s.y+l.y)}return t.normalize()}function nC(r,t){const i=pu(r.points);if(i.length()<1e-6)return null;const s=Uv(r.points),l=rC(r.points),c=t.filter(f=>f.id!==r.id).filter(f=>f.points.length>=3).map(f=>{const d=pu(f.points);if(d.length()<1e-6||Math.abs(d.dot(i))<.9)return null;const p=Math.abs(d.dot(s.clone().sub(f.points[0]))),g=Math.max(.25,l*.08),_=iC(s,f.points,d),S=r.area||$r(r.points),M=f.area||$r(f.points);if(!_&&p>Math.max(2,l*.25)||M>0&&S>0&&M<S*.8)return null;const E=Uv(f.points),T=s.distanceTo(E),y=p<=g?0:1;return{surface:f,centerDistance:T,planeDistance:p,distanceRank:y,insideRank:_?0:1,typeRank:oC(f.surfaceType)}}).filter(Boolean).sort((f,d)=>f.typeRank-d.typeRank||f.insideRank-d.insideRank||f.distanceRank-d.distanceRank||f.planeDistance-d.planeDistance||f.centerDistance-d.centerDistance);return c.length?c[0].surface:null}function iC(r,t,i){const s=aC(i),l=t.map(f=>new pe(f.dot(s.x),f.dot(s.y))),c=new pe(r.dot(s.x),r.dot(s.y));return sC(c,l)}function aC(r){const t=Math.abs(r.x)>.9?new q(0,1,0):new q(1,0,0),i=new q().crossVectors(t,r).normalize(),s=new q().crossVectors(r,i).normalize();return{x:i,y:s}}function sC(r,t){let i=!1;for(let s=0,l=t.length-1;s<t.length;l=s,s+=1){const c=t[s],f=t[l];c.y>r.y!=f.y>r.y&&r.x<(f.x-c.x)*(r.y-c.y)/(f.y-c.y||1e-9)+c.x&&(i=!i)}return i}function Uv(r){const t=new q;return r.forEach(i=>t.add(i)),t.divideScalar(r.length||1)}function rC(r){return new Ws().setFromPoints(r).getSize(new q).length()}function oC(r){return r==="ExteriorWall"||r==="Roof"||r==="InteriorWall"?0:r==="Ceiling"||r==="InteriorFloor"||r==="ExposedFloor"||r==="RaisedFloor"?1:r==="SlabOnGrade"||r==="UndergroundWall"||r==="UndergroundSlab"?2:r==="Shade"?4:2}function fd(r){return cp[r]||cp.Unknown}function xx(r,t){return t?r==="ExteriorWall"||r==="Roof"||r==="ExposedFloor"?{opacity:.2,transparent:!0,depthWrite:!1}:{opacity:.9,transparent:!0,depthWrite:!0}:{opacity:.9,transparent:!0,depthWrite:!0}}function lC(r){return r==="ExteriorWall"||r==="Roof"||r==="ExposedFloor"}function cC(r){const t="updated-edited.xml";if(!r)return t;const i=r.lastIndexOf(".");return i<=0?`${r}-edited.xml`:`${r.slice(0,i)}-edited.xml`}function Sx(r){r.userData.pickable=!0,r.raycast=Ni.prototype.raycast;const t=r.userData.edges;t&&(t.raycast=()=>null)}function uC(r,t){r.current.forEach(i=>{const s=i.userData.surfaceType||"Unknown",l=xx(s,t);i.material.transparent=l.transparent,i.material.opacity=l.opacity,i.material.depthWrite=l.depthWrite,i.material.needsUpdate=!0,Sx(i)})}function fC(r){r.current.forEach(t=>{t.material.transparent=!0,t.material.opacity=.45,t.material.depthWrite=!1,t.material.polygonOffset=!0,t.material.polygonOffsetFactor=-1,t.material.polygonOffsetUnits=-1,t.material.needsUpdate=!0})}function hd(r,t){const i=r.find(s=>s.id===t);return i?i.displayName||i.name:t}function Nv(r){return`#${r.toString(16).padStart(6,"0")}`}function hC(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i+=1)if(r[i]!==t[i])return!1;return!0}function dC(r,t){const i=new Set(t.map(f=>f.id)),s=`${r}-opening`;let l=1,c=`${s}-${l}`;for(;i.has(c);)l+=1,c=`${s}-${l}`;return c}function Fr(r){return jR.has(r?.openingType)}function pC(r){const t=String(r).toLowerCase();return t.includes("milli")?500:t.includes("centi")?50:t.includes("inch")?18:t.includes("feet")||t.includes("foot")?1.5:.5}function mC(r){const t=/^GBXML Viewer (horizontal|vertical-left|vertical-right) shade for (.+)$/.exec(r||"");return t?{kind:t[1],openingId:t[2]}:null}function gC(r,t,i){if(r.points.length<3||t.points.length<3)return[];const s=pu(t.points);if(s.lengthSq()<1e-8||Math.abs(s.z)>.35)return[];const l=new q(0,0,1).addScaledVector(s,-s.z).normalize(),c=new q().crossVectors(l,s).normalize();if(l.lengthSq()<1e-8||c.lengthSq()<1e-8)return[];const f=r.points[0],d=r.points.map(w=>{const D=w.clone().sub(f);return{horizontal:D.dot(c),vertical:D.dot(l)}}),m=Math.min(...d.map(w=>w.horizontal)),p=Math.max(...d.map(w=>w.horizontal)),g=Math.min(...d.map(w=>w.vertical)),_=Math.max(...d.map(w=>w.vertical));if(p-m<1e-6||_-g<1e-6)return[];const S=(w,D)=>f.clone().addScaledVector(c,w).addScaledVector(l,D),M=S(m,g),E=S(p,g),T=S(m,_),y=S(p,_),v=(w,D)=>w.clone().addScaledVector(s,D),L=[];return i.desiredKinds.has("horizontal")&&L.push({kind:"horizontal",points:[T,y,v(y,i.horizontalDepth),v(T,i.horizontalDepth)]}),i.desiredKinds.has("vertical-left")&&L.push({kind:"vertical-left",points:[M,T,v(T,i.verticalDepth),v(M,i.verticalDepth)]}),i.desiredKinds.has("vertical-right")&&L.push({kind:"vertical-right",points:[E,v(E,i.verticalDepth),v(y,i.verticalDepth),y]}),L}function _C(r,t,i,s,l){const c=t.element.namespaceURI||r.documentElement.namespaceURI||null,f=Vr(r,c,"Surface"),d=xC(`${SC(i.id)}-${s.kind}-shade`,l);f.setAttribute("id",d),f.setAttribute("surfaceType","Shade");const m=`GBXML Viewer ${s.kind} shade for ${i.id}`,p=Vr(r,c,"Name");return p.textContent=m,f.appendChild(p),f.appendChild(yx(r,c,s.points)),t.element.parentNode.appendChild(f),{id:d,element:f,surfaceType:"Shade",points:s.points,area:$r(s.points),zoneNames:[],minZ:Math.min(...s.points.map(g=>g.z)),levelIds:[...t.levelIds],levelNames:[...t.levelNames],name:m,shadeFor:i.id,shadeKind:s.kind}}function vC(r,t,i){const s=t.namespaceURI||r.documentElement.namespaceURI||null,l=yx(r,s,i),c=Array.from(t.childNodes).find(f=>f.nodeType===1&&(f.localName||f.nodeName.split(":").pop())==="PlanarGeometry");c?t.replaceChild(l,c):t.appendChild(l)}function yx(r,t,i){const s=Vr(r,t,"PlanarGeometry"),l=Vr(r,t,"PolyLoop");return i.forEach(c=>{const f=Vr(r,t,"CartesianPoint");[c.x,c.y,c.z].forEach(d=>{const m=Vr(r,t,"Coordinate");m.textContent=yC(d),f.appendChild(m)}),l.appendChild(f)}),s.appendChild(l),s}function Vr(r,t,i){return t?r.createElementNS(t,i):r.createElement(i)}function xC(r,t){const i=new Set(t.map(l=>l.id));if(!i.has(r))return r;let s=2;for(;i.has(`${r}-${s}`);)s+=1;return`${r}-${s}`}function SC(r){const t=String(r||"window").replace(/[^A-Za-z0-9_.-]/g,"-");return/^[A-Za-z_]/.test(t)?t:`window-${t}`}function yC(r){const t=Math.round(r*1e6)/1e6;return Object.is(t,-0)?"0":String(t)}Py.createRoot(document.getElementById("root")).render(ft.jsx(ge.StrictMode,{children:ft.jsx(QR,{})}));
