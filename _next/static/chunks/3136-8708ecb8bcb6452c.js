(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3136],{75675:function(e,t,s){"use strict";var a=s(3524);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,s,i,n,r){if(r!==a){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return s.PropTypes=s,s}},71834:function(e,t,s){e.exports=s(75675)()},3524:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},15303:function(e,t,s){"use strict";var a=s(64106),i=s(78345),n=s(71834),r=s.n(n),l=s(78439),c=s(99307),o=s(25721),d=s(90617);let x=[{icon:"icon-profile-tick",text:"Profile",url:"/copy-trading/profile"},{icon:"icon-folder",text:"Portfolio",url:"/"},{icon:"icon-code",text:"Build",url:"/"},{icon:"icon-code-1",text:"Code",url:"/"},{icon:"icon-copy",text:"Copy",url:"/copy-trading"},{icon:"icon-setting-3",text:"Live Tool",url:"/"},{icon:"icon-game",text:"Quest",url:"/quest"},{icon:"icon-message-question",text:"Learn",url:"/"}];function u(e){let{items:t=x,onSelect:s=()=>{},activeItem:n}=e,[r,u]=(0,i.useState)(n||"Copy"),[p,m]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=localStorage.getItem("activeTab");e&&u(e)},[]);let g=e=>{u(e.text),localStorage.setItem("activeTab",e.text),s(e.text)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"text-2xl font-black text-lime-500 mr-5",children:"SPEDIT"})}),(0,a.jsx)("div",{className:"flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full header-search",children:(0,a.jsx)("div",{className:"w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",className:"w-full py-2 pl-10 pr-4 text-sm border border-neutral-700 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-500",placeholder:"Search..."}),(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("i",{className:"icon-search-normal-1"})})]})})}),(0,a.jsxs)("div",{className:"flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white header-credit",children:[(0,a.jsx)("div",{className:"overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30",children:"50 Credits"}),(0,a.jsx)(o.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square",src:l.Z})]}),(0,a.jsx)(o.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto aspect-square use-mobile",src:c.default})]}),(0,a.jsx)("aside",{className:"flex flex-col desktop-view max-md:ml-0 max-md:w-full dash-sidebar ".concat(""," ").concat(p?"w-[85px] sidebar-collapsed":"w-[20%] sidebar-expanded"," transition-all duration-300"),children:(0,a.jsxs)("div",{className:"flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content",children:[(0,a.jsxs)("div",{className:"flex items-between justify-between text-xl leading-7 text-neutral-500 px-3 w-full side-profile",children:[!f&&(0,a.jsx)("span",{className:"icon-arrow-circle-right  text-lime-500 cursor-pointer absolute z-50 right-[25px] rotate-180 text-2xl top-10 ".concat(p?"!right-[6px] !rotate-0 rounded-full bg-gray-950":""),onClick:()=>{m(!p)}}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"User avatar",className:"object-contain shrink-0 w-14 rounded-xl aspect-square "}),!p&&(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("span",{className:"",children:"Welcome,"}),(0,a.jsx)("br",{}),"Joe"]})]})]}),(0,a.jsx)("nav",{className:"flex gap-6 self-start mt-5 text-xl text-white ml-7",children:(0,a.jsx)("div",{className:"flex flex-col items-start dash-item-wrap",children:t.map((e,t)=>(0,a.jsx)(d.default,{href:e.url,className:"".concat(e.text),children:(0,a.jsxs)("div",{className:"".concat(e.text," flex gap-2 items-center dash-item mt-6 ").concat(r===e.text?"dash-item-active":""),onClick:()=>g(e),role:"button",tabIndex:"0",children:[(0,a.jsx)("i",{className:"".concat(e.icon," w-6 aspect-square")}),!p&&(0,a.jsx)("div",{children:e.text})]})},t))})})]})})]})}u.propTypes={items:r().arrayOf(r().shape({icon:r().string.isRequired,text:r().string.isRequired,url:r().string})),onSelect:r().func,activeItem:r().string},t.default=u},53564:function(e,t,s){"use strict";var a=s(64106),i=s(78345),n=s(25721),r=s(30823),l=s(31326),c=s(87940),o=s(99192),d=s(9125),x=s(86919),u=s(90617),p=s(29650);t.Z=()=>{let[e,t]=(0,i.useState)([]),[s,m]=(0,i.useState)(!1),[f,h]=(0,i.useState)(""),[g,b]=(0,i.useState)(null),[y,j]=(0,i.useState)({}),v=(0,p.rN)();(0,i.useEffect)(()=>{v.start()},[]);let w=(0,r.useRouter)(),N=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},A=e=>{w.push("/copy-trading/strategy-description/"+e)},C=(e,t)=>{m(!0),h(e),b(t)};return(0,a.jsxs)("div",{className:"relative",children:[s&&(0,a.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:(0,a.jsxs)("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg w-96",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-white mb-4",children:"Wait"}),(0,a.jsx)("p",{className:"text-white mb-4",children:"Pausing the copy will stop copying new trades from the lead trader's strategy. Existing trades will continue but must be managed manually."}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsx)("button",{onClick:()=>{m(!1)},className:"px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-700",children:"Cancel"}),(0,a.jsx)("button",{onClick:()=>{if(m(!1),g){let e=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});j(t=>({...t,[g]:"".concat("stop"===f?"Stopped":"Paused"," (").concat(e,")")}))}},className:"px-4 py-2 bg-[#9BEC00] text-black rounded hover:bg-lime-600",children:"Proceed"})]})]})}),(0,a.jsx)("div",{style:{cursor:"pointer"},onClick:()=>{w.push("/copy-trading/strategy-description")},children:(0,a.jsx)("div",{className:"grid-container relative",children:[{name:"Karishma",followers:502,actionType:"copy",pnl:"₹74,100.23",roi:"5.71%",aum:"₹74,100.23",mdd:"1.27%",period:"7 day",id:1},{name:"Kareena",followers:502,actionType:"stopPause",pnl:"₹74,100.23",roi:"5.71%",aum:"₹74,100.23",mdd:"1.27%",period:"7 day",id:2},{name:"Kareena",followers:502,actionType:"stopPause",pnl:"₹74,100.23",roi:"5.71%",aum:"₹74,100.23",mdd:"1.27%",period:"7 day",id:3}].map(t=>(0,a.jsxs)("div",{id:"".concat("Karishma"===t.name&&"firstTour"),className:"col-span-4 relative grow w-full shrink justify-center px-4 py-5 w-72 bg-white card rounded-md shadow-sm  transition-opacity ".concat((y[t.id],"")),onClick:()=>A(t.id),children:[(0,a.jsxs)("div",{className:"flex flex-col w-full ".concat(y[t.id]?"opacity-50":"opacity-100"),children:[(0,a.jsxs)("div",{className:"flex gap-10 justify-between items-center w-full whitespace-nowrap",children:[(0,a.jsxs)("div",{className:"flex gap-2.5 items-start my-auto h-[43px]",children:[(0,a.jsx)(n.default,{src:d.default,alt:"".concat(t.name,"'s profile picture"),width:40,height:40,className:"rounded-full"}),(0,a.jsxs)("div",{className:"flex flex-col py-1",children:[(0,a.jsx)("div",{className:"text-base font-bold text-neutral-800",children:t.name}),(0,a.jsxs)("div",{className:"flex gap-1.5 items-center mt-1.5 text-xs text-neutral-500",children:[(0,a.jsx)(n.default,{src:x.default,alt:"Followers icon",width:48,height:18}),(0,a.jsx)("span",{children:t.followers})]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("button",{style:{position:"relative"},className:"relative focus:outline-none w-6",onClick:e=>{e.stopPropagation(),N(t.id)},children:(0,a.jsx)(n.default,{src:e.includes(t.id)?o.Z:c.Z,alt:"Heart icon",width:24,height:24,className:"transition-transform duration-200 ".concat(e.includes(t.id)?"scale-125":"heart-empty")})}),"copy"===t.actionType?(0,a.jsx)("button",{className:"btn",onClick:e=>e.stopPropagation(),children:(0,a.jsx)(u.default,{href:"/copy-trading/strategy-description?name=copyStepOpen",children:"Copy"})}):(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{className:"btn btn-danger",onClick:e=>{e.stopPropagation(),C("stop",t.id)},children:"Stop"}),(0,a.jsx)("button",{className:"border btn btn-outline border-neutral-800 rounded px-3 py-2",onClick:e=>{e.stopPropagation(),C("pause",t.id)},children:"Pause"})]})]})]}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-neutral-500",children:"7D PnL"}),(0,a.jsxs)("div",{className:"flex items-center gap-1 text-xl font-bold text-stone-950",children:[(0,a.jsx)("span",{className:"text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"}),t.pnl]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-neutral-500",children:"7D ROI"}),(0,a.jsxs)("div",{className:"flex items-center gap-1 text-xl font-bold text-stone-950",children:[(0,a.jsx)("span",{className:"text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"}),t.roi]})]})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-neutral-500",children:"AUM"}),(0,a.jsx)("div",{className:"text-sm font-semibold",children:t.aum})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-neutral-500",children:"7D MDD"}),(0,a.jsx)("div",{className:"text-sm font-semibold",children:t.mdd})]})]})]}),(0,a.jsx)("div",{className:"flex justify-between items-end w-[150px] ml-5",children:(0,a.jsx)(n.default,{src:l.Z,alt:"Performance chart for last ".concat(t.period)})})]})]}),y[t.id]&&(0,a.jsx)("div",{className:"mt-4  text-black stop-label",children:y[t.id]})]},t.id))})})]})}},29650:function(e,t,s){"use strict";s.d(t,{C1:function(){return x},rN:function(){return u}});var a=s(64106),i=s(30823),n=s(78345);let r=["/copy-trading/leader-board/","/copy-trading/strategy-description/","/copy-trading/strategy-description/?name=copyStepOpen","/copy-trading/strategy-description/?name=copyStepOpen","/copy-trading/strategy-description/?name=copyStepOpen&confirmation=true","/copy-trading/dashboard/"],l=!1,c=null;async function o(){if("undefined"==typeof document||l)return;l=!0;let{initializeTourGuide:e}=await s.e(8436).then(s.bind(s,68436));return c=e(),await c.start(),c}let d=(0,n.createContext)({start(){}});function x(e){let{children:t}=e,[s,l]=(0,n.useState)(null),x=function(){let e=(0,i.useRouter)();return async function(t){let s=r[t];s&&(e.push(s),await new Promise(e=>setTimeout(e,300)))}}();async function u(){l(await o())}return(0,n.useEffect)(()=>{s&&s.onBeforeStepChange(()=>x(c.activeStep+1))},[s]),(0,a.jsx)(d.Provider,{value:{start:u},children:t})}function u(){return(0,n.useContext)(d)}},99307:function(e,t,s){"use strict";s.r(t),t.default={src:"/spedit/_next/static/media/avatar-f.90155994.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQC2rwBC/f8qvhYRlX68tjtQDgT/2vD2yFjj/mkAIRjWATCknyrQIRnDAPX4Eq3BtgAeFxEAnrC9AJdma+5PMzE9AQC2q8FLBRE+Cru5+jLgyQYqMDsAv9fS+pA8TAYAMCjAAaC7rvnswhQGuoN5AFVuCAATFmwADBrfAOXu+gD1KDP7Acy6rfqzqvYF0uSVAGZHNwC0JGcAT9jWAOMArwAtEDX6AebNsb+0lsJA9An7+jY/DAZz72UAi+bO+rf5swblLTnCAfvx6SqLeI3Dy87hEpGGIgC9vCwABwD1AIgP5e7SX149AbioggDAp34qusRVl46SPDgM8+IB8N8Kxc/Z02vKVVLWQ6t7U+0zdSkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},78439:function(e,t){"use strict";t.Z={src:"/spedit/_next/static/media/cog.781c7e08.svg",height:16,width:16,blurWidth:0,blurHeight:0}}}]);