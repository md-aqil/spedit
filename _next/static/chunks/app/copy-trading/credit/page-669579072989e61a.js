(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{13359:function(e,t,s){Promise.resolve().then(s.t.bind(s,5550,23)),Promise.resolve().then(s.t.bind(s,65482,23)),Promise.resolve().then(s.bind(s,52400)),Promise.resolve().then(s.bind(s,15303))},75675:function(e,t,s){"use strict";var a=s(3524);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,s,r,i,n){if(n!==a){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return s.PropTypes=s,s}},71834:function(e,t,s){e.exports=s(75675)()},3524:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},25721:function(e,t,s){"use strict";s.d(t,{default:function(){return r.a}});var a=s(78302),r=s.n(a)},90617:function(e,t,s){"use strict";s.d(t,{default:function(){return r.a}});var a=s(65482),r=s.n(a)},78302:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},getImageProps:function(){return l}});let a=s(37915),r=s(13848),i=s(5550),n=a._(s(37282));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/spedit/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let c=i.Image},52400:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(64106),r=s(78345),i=s(78439),n=s(25721),l=s(71834),c=s.n(l);function o(e){let{isCollapsed:t,toggleSidebar:s}=e;return(0,a.jsx)("span",{className:"icon-arrow-circle-right text-lime-500 cursor-pointer transition-transform duration-300 ".concat(t?"rotate-180":""),onClick:s})}o.propTypes={isCollapsed:c().bool.isRequired,toggleSidebar:c().func.isRequired};var d=function(){let[e,t]=(0,r.useState)(!1);return(0,a.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-black text-lime-500 mr-5",children:"SPEDIT"}),(0,a.jsxs)("div",{className:"",children:[" ",(0,a.jsx)(o,{isCollapsed:e,toggleSidebar:()=>{t(e=>!e)}})]})]}),(0,a.jsx)("div",{className:"flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-[#A2AB9A] max-md:max-w-full header-search",children:(0,a.jsx)("div",{className:"w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",className:"w-full py-2 pl-10 pr-4 text-sm border border-[#A2AB9A] rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-lime-500",placeholder:"Search..."}),(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/236c2f2a224a9f91bae67ba81d33f8bda2f0f7291e9fff1454bf2f90daf16dfc?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"Search Icon",className:"object-contain w-5 h-5"})})]})})}),(0,a.jsxs)("div",{className:"flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white",children:[(0,a.jsx)("div",{className:"overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30",children:"50 Credits"}),(0,a.jsx)(n.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square",src:i.Z})]})]})}},15303:function(e,t,s){"use strict";var a=s(64106),r=s(78345),i=s(71834),n=s.n(i),l=s(78439),c=s(99307),o=s(25721),d=s(90617);let u=[{icon:"icon-profile-tick",text:"Profile",url:"/copy-trading/profile"},{icon:"icon-folder",text:"Portfolio",url:"/"},{icon:"icon-code",text:"Build",url:"/"},{icon:"icon-code-1",text:"Code",url:"/"},{icon:"icon-copy",text:"Copy",url:"/copy-trading"},{icon:"icon-setting-3",text:"Live Tool",url:"/"},{icon:"icon-game",text:"Quest",url:"/quest"},{icon:"icon-message-question",text:"Learn",url:"/"}];function f(e){let{items:t=u,onSelect:s=()=>{},activeItem:i}=e,[n,f]=(0,r.useState)(i||"Copy"),[x,m]=(0,r.useState)(!1),[p,h]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("activeTab");e&&f(e)},[]);let b=e=>{f(e.text),localStorage.setItem("activeTab",e.text),s(e.text)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"text-2xl font-black text-lime-500 mr-5",children:"SPEDIT"})}),(0,a.jsx)("div",{className:"flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full header-search",children:(0,a.jsx)("div",{className:"w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",className:"w-full py-2 pl-10 pr-4 text-sm border border-neutral-700 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-500",placeholder:"Search..."}),(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("i",{className:"icon-search-normal-1"})})]})})}),(0,a.jsxs)("div",{className:"flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white header-credit",children:[(0,a.jsx)("div",{className:"overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30",children:"50 Credits"}),(0,a.jsx)(o.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square",src:l.Z})]}),(0,a.jsx)(o.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto aspect-square use-mobile",src:c.default})]}),(0,a.jsx)("aside",{className:"flex flex-col desktop-view max-md:ml-0 max-md:w-full dash-sidebar ".concat(""," ").concat(x?"w-[85px] sidebar-collapsed":"w-[20%] sidebar-expanded"," transition-all duration-300"),children:(0,a.jsxs)("div",{className:"flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content",children:[(0,a.jsxs)("div",{className:"flex items-between justify-between text-xl leading-7 text-neutral-500 px-3 w-full side-profile",children:[!p&&(0,a.jsx)("span",{className:"icon-arrow-circle-right  text-lime-500 cursor-pointer absolute z-50 right-[25px] rotate-180 text-2xl top-10 ".concat(x?"!right-[6px] !rotate-0 rounded-full bg-gray-950":""),onClick:()=>{m(!x)}}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"User avatar",className:"object-contain shrink-0 w-14 rounded-xl aspect-square "}),!x&&(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("span",{className:"",children:"Welcome,"}),(0,a.jsx)("br",{}),"Joe"]})]})]}),(0,a.jsx)("nav",{className:"flex gap-6 self-start mt-5 text-xl text-white ml-7",children:(0,a.jsx)("div",{className:"flex flex-col items-start dash-item-wrap",children:t.map((e,t)=>(0,a.jsx)(d.default,{href:e.url,className:"".concat(e.text),children:(0,a.jsxs)("div",{className:"".concat(e.text," flex gap-2 items-center dash-item mt-6 ").concat(n===e.text?"dash-item-active":""),onClick:()=>b(e),role:"button",tabIndex:"0",children:[(0,a.jsx)("i",{className:"".concat(e.icon," w-6 aspect-square")}),!x&&(0,a.jsx)("div",{children:e.text})]})},t))})})]})})]})}f.propTypes={items:n().arrayOf(n().shape({icon:n().string.isRequired,text:n().string.isRequired,url:n().string})),onSelect:n().func,activeItem:n().string},t.default=f},99307:function(e,t,s){"use strict";s.r(t),t.default={src:"/spedit/_next/static/media/avatar-f.90155994.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQC2rwBC/f8qvhYRlX68tjtQDgT/2vD2yFjj/mkAIRjWATCknyrQIRnDAPX4Eq3BtgAeFxEAnrC9AJdma+5PMzE9AQC2q8FLBRE+Cru5+jLgyQYqMDsAv9fS+pA8TAYAMCjAAaC7rvnswhQGuoN5AFVuCAATFmwADBrfAOXu+gD1KDP7Acy6rfqzqvYF0uSVAGZHNwC0JGcAT9jWAOMArwAtEDX6AebNsb+0lsJA9An7+jY/DAZz72UAi+bO+rf5swblLTnCAfvx6SqLeI3Dy87hEpGGIgC9vCwABwD1AIgP5e7SX149AbioggDAp34qusRVl46SPDgM8+IB8N8Kxc/Z02vKVVLWQ6t7U+0zdSkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},78439:function(e,t){"use strict";t.Z={src:"/spedit/_next/static/media/cog.781c7e08.svg",height:16,width:16,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[4193,5482,5550,2978,4699,1744],function(){return e(e.s=13359)}),_N_E=e.O()}]);