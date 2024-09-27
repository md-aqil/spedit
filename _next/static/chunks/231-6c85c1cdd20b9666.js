"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{25944:function(e,t,n){function o(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),n(18157),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},231:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let o=n(99920),r=n(57437),l=o._(n(2265)),u=n(98016),f=n(18029),a=n(41142),i=n(43461),c=n(844),s=n(60291),d=n(44467),p=n(53106),y=n(25944),b=n(4897),h=n(51507),v=new Set;function g(e,t,n,o,r,l){if("undefined"!=typeof window&&(l||(0,f.isLocalURL)(t))){if(!o.bypassPrefetchedCheck){let r=t+"%"+n+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(v.has(r))return;v.add(r)}(async()=>l?e.prefetch(t,r):e.prefetch(t,n,o))().catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,o;let{href:a,as:v,children:j,prefetch:C=null,passHref:k,replace:m,shallow:M,scroll:P,locale:O,onClick:E,onMouseEnter:L,onTouchStart:x,legacyBehavior:w=!1,...R}=e;n=j,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,r.jsx)("a",{children:n}));let I=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),S=null!=I?I:T,U=!I,K=!1!==C,A=null===C?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:D,as:N}=l.default.useMemo(()=>{if(!I){let e=_(a);return{href:e,as:v?_(v):e}}let[e,t]=(0,u.resolveHref)(I,a,!0);return{href:e,as:v?(0,u.resolveHref)(I,v):t||e}},[I,a,v]),H=l.default.useRef(D),q=l.default.useRef(N);w&&(o=l.default.Children.only(n));let z=w?o&&"object"==typeof o&&o.ref:t,[B,F,G]=(0,p.useIntersection)({rootMargin:"200px"}),J=l.default.useCallback(e=>{(q.current!==N||H.current!==D)&&(G(),q.current=N,H.current=D),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[N,z,D,G,B]);l.default.useEffect(()=>{S&&F&&K&&g(S,D,N,{locale:O},{kind:A},U)},[N,D,F,O,K,null==I?void 0:I.locale,S,U,A]);let Q={ref:J,onClick(e){w||"function"!=typeof E||E(e),w&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,o,r,u,a,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:i,scroll:e}):t[r?"replace":"push"](o||n,{scroll:e})};c?l.default.startTransition(d):d()}(e,S,D,N,m,M,P,O,U)},onMouseEnter(e){w||"function"!=typeof L||L(e),w&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(K||!U)&&g(S,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)},onTouchStart:function(e){w||"function"!=typeof x||x(e),w&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(K||!U)&&g(S,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)}};if((0,i.isAbsoluteUrl)(N))Q.href=N;else if(!w||k||"a"===o.type&&!("href"in o.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,y.getDomainLocale)(N,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Q.href=t||(0,b.addBasePath)((0,c.addLocale)(N,e,null==I?void 0:I.defaultLocale))}return w?l.default.cloneElement(o,Q):(0,r.jsx)("a",{...R,...Q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53106:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let o=n(2265),r=n(49189),l="function"==typeof IntersectionObserver,u=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!l,[c,s]=(0,o.useState)(!1),d=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{d.current=e},[]);return(0,o.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=f.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},f.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=f.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,r.requestIdleCallback)(()=>s(!0));return()=>(0,r.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,o.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);